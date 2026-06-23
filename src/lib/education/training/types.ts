export type QuizQuestionType = "multiple_choice" | "true_false" | "scenario";

export interface TrainingSection {
  heading: string;
  content: string;
}

export interface TrainingQuizQuestion {
  id: string;
  type?: QuizQuestionType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TrainingLesson {
  id: string;
  moduleId: string;
  number: string;
  title: string;
  objectives: string[];
  sections: TrainingSection[];
  realWorldApplication: string;
  realWorldExercise?: string;
  martinPrompt: string;
  quiz: TrainingQuizQuestion[];
  /** Final exam lesson — no regular quiz */
  isFinalExam?: boolean;
}

export interface TrainingModule {
  id: string;
  number: number;
  title: string;
  description: string;
  careerOutcomes: string[];
  lessons: TrainingLesson[];
}

export interface TrainingProgress {
  lessonsCompleted: string[];
  quizBestScores: Record<string, number>;
  moduleCertificates: string[];
  programCertificateEarned: boolean;
  certificateEarned: boolean;
  finalExamScore: number | null;
  finalExamPassed: boolean;
  realWorldExercisesCompleted: string[];
}

export const QUIZ_PASS_THRESHOLD = 70;
export const FINAL_EXAM_PASS_THRESHOLD = 75;
export const FINAL_EXAM_QUESTION_COUNT = 100;
