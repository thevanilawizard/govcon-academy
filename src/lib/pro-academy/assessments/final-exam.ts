import { getAllProLessons } from "../catalog";
import type { TrainingQuizQuestion } from "@/lib/education/training/types";
import { PRO_FINAL_EXAM_QUESTIONS } from "../types";

/** Build 200-question CFCM-style final exam from lesson question pools. */
export function buildFinalExamQuestions(): TrainingQuizQuestion[] {
  const pool = getAllProLessons().flatMap((l) =>
    l.quiz.map((q) => ({
      ...q,
      explanation: `${q.explanation} See ${l.farReferences?.[0] ?? l.title} in the Pro Academy curriculum.`,
    }))
  );

  const selected: TrainingQuizQuestion[] = [];
  const seen = new Set<string>();

  for (const q of pool) {
    if (selected.length >= PRO_FINAL_EXAM_QUESTIONS) break;
    if (seen.has(q.question)) continue;
    seen.add(q.question);
    selected.push({ ...q, id: `final-${selected.length + 1}` });
  }

  let i = 0;
  while (selected.length < PRO_FINAL_EXAM_QUESTIONS && pool.length > 0) {
    const q = pool[i % pool.length];
    selected.push({ ...q, id: `final-${selected.length + 1}` });
    i++;
  }

  return selected;
}
