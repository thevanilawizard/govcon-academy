import type { TrainingLesson, TrainingModule, TrainingQuizQuestion } from "@/lib/education/training/types";

export type ProAcademyTrack = "far" | "pricing" | "acquisition";

export type ProExamCategory =
  | "far-system"
  | "far-definitions"
  | "far-ethics"
  | "far-competition"
  | "far-negotiation"
  | "far-contract-types"
  | "far-small-business"
  | "pricing-fundamentals"
  | "pricing-proposals"
  | "pricing-allowability"
  | "acquisition-planning"
  | "acquisition-source-selection"
  | "acquisition-administration";

export interface RegulatoryQuote {
  citation: string;
  text: string;
}

export interface FarViolation {
  violation: string;
  consequence: string;
}

export interface ProLessonScenario {
  title: string;
  situation: string;
  whyItMatters: string;
}

export interface ProLesson extends TrainingLesson {
  track: ProAcademyTrack;
  farPart?: number;
  regulatoryQuotes?: RegulatoryQuote[];
  contractorImpact?: string;
  governmentImpact?: string;
  scenarios?: ProLessonScenario[];
  commonViolations?: FarViolation[];
  farReferences?: string[];
}

export interface ProModule extends TrainingModule {
  track: ProAcademyTrack;
  farPart?: number;
  isStandaloneCourse?: boolean;
}

export interface ModuleAssessment {
  id: string;
  moduleId: string;
  title: string;
  questions: TrainingQuizQuestion[];
  passThreshold: number;
}

export interface CumulativeExam {
  id: string;
  title: string;
  afterModuleIds: string[];
  questions: TrainingQuizQuestion[];
  passThreshold: number;
}

export interface ProAcademyProgress {
  lessonsCompleted: string[];
  quizBestScores: Record<string, number>;
  moduleCertificates: string[];
  moduleAssessmentScores: Record<string, number>;
  moduleAssessmentsPassed: string[];
  cumulativeExamsPassed: string[];
  cumulativeExamScores: Record<string, number>;
  finalExamScore: number | null;
  finalExamPassed: boolean;
  finalExamAttempts: number;
  finalExamTopicScores: Partial<Record<ProExamCategory, number>>;
  bookmarkedClauses: string[];
  toolHistory: Record<string, unknown[]>;
  quizHistory: { lessonId: string; score: number; at: string }[];
  certificationEarned: boolean;
}

export const PRO_LESSON_PASS_THRESHOLD = 70;
export const PRO_MODULE_ASSESSMENT_THRESHOLD = 75;
export const PRO_FINAL_EXAM_THRESHOLD = 75;
export const PRO_FINAL_EXAM_QUESTIONS = 200;
export const PRO_FINAL_EXAM_TIME_SECONDS = 4 * 60 * 60;
export const PRO_FINAL_EXAM_MAX_ATTEMPTS = 3;
