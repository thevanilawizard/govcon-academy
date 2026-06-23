import { getAllLessons } from "./catalog";
import type { TrainingQuizQuestion } from "./types";
import { FINAL_EXAM_QUESTION_COUNT } from "./types";

/** Stable 100-question final exam drawn from all lesson banks + supplemental pool */
export function buildFinalExamQuestions(): TrainingQuizQuestion[] {
  const pool = getAllLessons()
    .filter((l) => !l.isFinalExam)
    .flatMap((l) => l.quiz);

  const supplemental = SUPPLEMENTAL_EXAM_QUESTIONS;
  const combined = [...pool, ...supplemental];

  const selected: TrainingQuizQuestion[] = [];
  const used = new Set<string>();
  let i = 0;
  while (selected.length < FINAL_EXAM_QUESTION_COUNT && i < combined.length * 3) {
    const q = combined[i % combined.length];
    const key = q.id + q.question.slice(0, 40);
    if (!used.has(key)) {
      used.add(key);
      selected.push({ ...q, id: `exam-${selected.length + 1}` });
    }
    i++;
  }

  while (selected.length < FINAL_EXAM_QUESTION_COUNT) {
    selected.push({
      ...combined[selected.length % combined.length],
      id: `exam-${selected.length + 1}`,
    });
  }

  return selected.slice(0, FINAL_EXAM_QUESTION_COUNT);
}

const SUPPLEMENTAL_EXAM_QUESTIONS: TrainingQuizQuestion[] = [
  {
    id: "sup-1",
    type: "scenario",
    question:
      "You receive a COR email directing work outside the PWS with no modification. What do you do first?",
    options: [
      "Begin work immediately to preserve the relationship",
      "Reply requesting a bilateral mod citing FAR 52.243-1 before performing",
      "Bill the work as out-of-scope on the next invoice",
      "Forward the email to your subcontractor only",
    ],
    correctIndex: 1,
    explanation:
      "FAR 52.243-1 and 52.232-39 require a bilateral modification before out-of-scope work. Performing without a mod is at your own risk.",
  },
  {
    id: "sup-2",
    type: "true_false",
    question: "A Contracting Officer Representative can authorize contract modifications.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Only a warranted Contracting Officer may modify contracts. COR direction is not binding without KO action.",
  },
];
