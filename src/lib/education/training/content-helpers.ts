import type { TrainingQuizQuestion, TrainingSection } from "./types";

export function lesson(
  moduleId: string,
  number: string,
  title: string,
  objectives: string[],
  sections: TrainingSection[],
  realWorldApplication: string,
  quiz: TrainingQuizQuestion[],
  extras?: {
    realWorldExercise?: string;
    martinPrompt?: string;
    isFinalExam?: boolean;
  }
) {
  return {
    id: `${moduleId}-${number.replace(".", "-")}`,
    moduleId,
    number,
    title,
    objectives,
    sections,
    realWorldApplication,
    realWorldExercise: extras?.realWorldExercise,
    martinPrompt:
      extras?.martinPrompt ??
      `Explain ${title} from a Contracts Manager perspective at a federal contractor. Include a specific FAR or DFARS citation, a dollar amount or timeline, a real-world example, and one action the learner should take today.`,
    quiz,
    isFinalExam: extras?.isFinalExam,
  };
}

export function q(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  type: TrainingQuizQuestion["type"] = "multiple_choice"
): TrainingQuizQuestion {
  return { id, type, question, options, correctIndex, explanation };
}

export function tf(
  id: string,
  question: string,
  isTrue: boolean,
  explanation: string
): TrainingQuizQuestion {
  return {
    id,
    type: "true_false",
    question,
    options: ["True", "False"],
    correctIndex: isTrue ? 0 : 1,
    explanation,
  };
}

export function scenario(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): TrainingQuizQuestion {
  return { id, type: "scenario", question, options, correctIndex, explanation };
}
