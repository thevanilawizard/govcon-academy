import type { InterviewQuestion, QuizQuestion } from "../types";

export type SrAdminSkillId =
  | "sr-skill-1"
  | "sr-skill-2"
  | "sr-skill-3"
  | "sr-skill-4"
  | "sr-skill-5"
  | "sr-skill-6"
  | "sr-skill-7"
  | "sr-skill-8";

export type CfcmTopic =
  | "contract-types"
  | "competition"
  | "small-business"
  | "pricing"
  | "administration"
  | "dfars";

export type SrAdminExerciseType =
  | "compliance-matrix"
  | "contract-brief"
  | "redline"
  | "risk-assessment"
  | "portfolio-tracker"
  | "timed-search"
  | "file-organize";

export interface SrAdminExercise {
  type: SrAdminExerciseType;
  title: string;
  instructions: string;
  data?: Record<string, unknown>;
}

export interface SrAdminLesson {
  id: string;
  skillId: SrAdminSkillId;
  phaseId?: string;
  title: string;
  sections: { heading: string; content: string }[];
  exercise?: SrAdminExercise;
  quiz: QuizQuestion[];
}

export interface SrAdminPhase {
  id: string;
  skillId: SrAdminSkillId;
  number: number;
  title: string;
  description: string;
  lessons: SrAdminLesson[];
}

export interface SrAdminSkill {
  id: SrAdminSkillId;
  number: number;
  title: string;
  description: string;
  phases?: SrAdminPhase[];
  lessons: SrAdminLesson[];
}

export interface ContractBriefSection {
  id: string;
  number: number;
  title: string;
  description: string;
  fields: { label: string; description: string; example?: string }[];
}

export interface ExcelTemplate {
  id: string;
  title: string;
  description: string;
  columns: string[];
  markdownTable: string;
  features: string[];
  conditionalFormatting?: string[];
}

export interface CfcmQuestion extends QuizQuestion {
  topic: CfcmTopic;
  farCitation: string;
}

export interface CfcmStudyWeek {
  week: number;
  title: string;
  topics: string[];
  resources: string[];
  milestones: string[];
}

export interface JobInterviewQuestion extends InterviewQuestion {}

export interface ResumeBullet {
  id: string;
  template: string;
  placeholders: string[];
  tips: string[];
}

export interface SalaryNegotiationGuide {
  targetRange: { min: number; max: number };
  marketContext: string;
  anchorStrategy: string;
  fallbackAsks: string[];
  scripts: { situation: string; script: string }[];
}

export interface SrAdminProgram {
  id: string;
  title: string;
  subtitle: string;
  salaryRange: { min: number; max: number };
  skillCount: number;
  cfcmQuestionCount: number;
}
