import type { QuizQuestion } from "../types";
import type { SrAdminExercise, SrAdminLesson, SrAdminSkillId } from "./types";

export function q(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

export function lesson(
  id: string,
  skillId: SrAdminSkillId,
  title: string,
  sections: { heading: string; content: string }[],
  quiz: QuizQuestion[],
  extras?: {
    phaseId?: string;
    exercise?: SrAdminExercise;
  }
): SrAdminLesson {
  return {
    id,
    skillId,
    phaseId: extras?.phaseId,
    title,
    sections,
    exercise: extras?.exercise,
    quiz,
  };
}

export function exercise(
  type: SrAdminExercise["type"],
  title: string,
  instructions: string,
  data?: Record<string, unknown>
): SrAdminExercise {
  return { type, title, instructions, data };
}
