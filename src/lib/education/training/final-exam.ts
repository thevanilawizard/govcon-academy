import { getAllLessons } from "./catalog";
import type { ExamCategory, TrainingQuizQuestion } from "./types";
import {
  FINAL_EXAM_CATEGORY_TARGETS,
  FINAL_EXAM_QUESTION_COUNT,
} from "./types";

const MODULE_CATEGORY: Record<string, ExamCategory> = {
  foundations: "far",
  "far-depth": "far",
  dfars: "dfars",
  administration: "administration",
  proposals: "proposals",
  accounting: "accounting",
  ethics: "ethics",
  certification: "scenario",
};

function inferCategory(lessonModuleId: string, q: TrainingQuizQuestion): ExamCategory {
  if (q.examCategory) return q.examCategory;
  if (q.type === "scenario") return "scenario";
  return MODULE_CATEGORY[lessonModuleId] ?? "far";
}

export function buildFinalExamQuestions(): TrainingQuizQuestion[] {
  const lessons = getAllLessons().filter((l) => !l.isFinalExam);
  const poolByCategory: Record<ExamCategory, TrainingQuizQuestion[]> = {
    far: [],
    dfars: [],
    administration: [],
    proposals: [],
    accounting: [],
    ethics: [],
    scenario: [],
  };

  for (const lesson of lessons) {
    for (const question of lesson.quiz) {
      const cat = inferCategory(lesson.moduleId, question);
      poolByCategory[cat].push({ ...question, examCategory: cat });
    }
  }

  poolByCategory.scenario.push(...SUPPLEMENTAL_SCENARIO);

  const selected: TrainingQuizQuestion[] = [];
  (Object.keys(FINAL_EXAM_CATEGORY_TARGETS) as ExamCategory[]).forEach((cat) => {
    const target = FINAL_EXAM_CATEGORY_TARGETS[cat];
    const pool = poolByCategory[cat];
    for (let i = 0; i < target; i++) {
      const q = pool[i % Math.max(pool.length, 1)];
      selected.push({ ...q, id: `exam-${cat}-${i + 1}`, examCategory: cat });
    }
  });

  while (selected.length < FINAL_EXAM_QUESTION_COUNT) {
    const cat = (Object.keys(FINAL_EXAM_CATEGORY_TARGETS) as ExamCategory[])[
      selected.length % 7
    ];
    const pool = poolByCategory[cat];
    selected.push({
      ...pool[selected.length % Math.max(pool.length, 1)],
      id: `exam-extra-${selected.length + 1}`,
      examCategory: cat,
    });
  }

  return selected.slice(0, FINAL_EXAM_QUESTION_COUNT);
}

export function scoreExamByCategory(
  questions: TrainingQuizQuestion[],
  answers: Record<string, number>
): Partial<Record<ExamCategory, number>> {
  const totals: Partial<Record<ExamCategory, number>> = {};
  const correct: Partial<Record<ExamCategory, number>> = {};

  questions.forEach((q) => {
    const cat = q.examCategory ?? "far";
    totals[cat] = (totals[cat] ?? 0) + 1;
    if (answers[q.id] === q.correctIndex) {
      correct[cat] = (correct[cat] ?? 0) + 1;
    }
  });

  const scores: Partial<Record<ExamCategory, number>> = {};
  (Object.keys(totals) as ExamCategory[]).forEach((cat) => {
    const t = totals[cat] ?? 0;
    scores[cat] = t ? Math.round(((correct[cat] ?? 0) / t) * 100) : 0;
  });
  return scores;
}

const SUPPLEMENTAL_SCENARIO: TrainingQuizQuestion[] = [
  {
    id: "sup-sc-1",
    type: "scenario",
    examCategory: "scenario",
    question:
      "DCAA arrives unannounced requesting three years of accounting records. What do you do?",
    options: [
      "Refuse entry until your attorney arrives next week",
      "Cooperate, provide access, assign a dedicated point of contact, and document everything",
      "Provide only current year records",
      "Ask the COR to make them leave",
    ],
    correctIndex: 1,
    explanation:
      "Cooperate fully with DCAA per FAR 52.215-2 audit rights. Assign your controller and contracts lead; document requests and responses.",
  },
  {
    id: "sup-sc-2",
    type: "scenario",
    examCategory: "scenario",
    question:
      "Your sub is failing. A key prime deliverable is due in 10 days. What do you do?",
    options: [
      "Absorb the work silently to protect CPARS",
      "Issue cure notice to sub, notify CO if material, activate backup staffing plan",
      "Terminate the sub immediately without notice",
      "Blame the government in your status report",
    ],
    correctIndex: 1,
    explanation:
      "Prime is 100% accountable. FAR 52.249-8 cure process for subs; document mitigation for CPARS and notify CO if deliverable risk is material.",
  },
];
