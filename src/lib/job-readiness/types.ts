export type JobReadinessSectionId =
  | "overview"
  | "day-in-life"
  | "competencies"
  | "interview"
  | "documents"
  | "assessment"
  | "roadmap"
  | "vocabulary"
  | "scenarios"
  | "sr-admin";

export type AssessmentArea =
  | "far"
  | "dfars"
  | "administration"
  | "pricing"
  | "subcontracts"
  | "legal"
  | "negotiation"
  | "documents"
  | "financial"
  | "interview";

export interface DayInLifeBlock {
  id: string;
  time: string;
  title: string;
  teachPoints: string[];
  realSkill: string;
  exercise?: {
    prompt: string;
    checklist: string[];
  };
}

export interface CompetencyLesson {
  id: string;
  competencyId: string;
  title: string;
  sections: { heading: string; content: string }[];
  exercise?: CompetencyExercise;
  quiz?: QuizQuestion[];
}

export interface CompetencyExercise {
  type: "timed-search" | "cost-volume" | "pricing" | "file-organize" | "evm" | "rea" | "flowdown" | "negotiation";
  title: string;
  instructions: string;
  data?: Record<string, unknown>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface InterviewQuestion {
  id: string;
  category: "technical" | "behavioral" | "scenario";
  question: string;
  keyPoints: string[];
  modelAnswer: string;
  commonMistakes: string[];
  followUps: string[];
}

export interface DocumentLibraryItem {
  id: string;
  title: string;
  docType: string;
  content: string;
  annotations: { label: string; text: string; risk?: boolean }[];
  checklist?: string[];
}

export interface ScenarioDefinition {
  id: string;
  number: number;
  title: string;
  setup: string;
  teaches: string[];
  nodes: ScenarioNode[];
}

export interface ScenarioNode {
  id: string;
  prompt: string;
  options: {
    id: string;
    label: string;
    nextNodeId?: string;
    isBest?: boolean;
    consequence: string;
  }[];
  debrief?: string;
}

export interface VocabularyTerm {
  id: string;
  term: string;
  definition: string;
  category: "far" | "dfars" | "accounting" | "proposal" | "legal";
  contextSentence: string;
  blankAnswer: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  timeframe: string;
  steps: { id: string; label: string; resources?: string[] }[];
}

export interface CompanyProfile {
  id: string;
  name: string;
  focus: string[];
  requiredSkills: AssessmentArea[];
}

export interface JobReadinessProgress {
  sectionsCompleted: string[];
  sectionCertificates: string[];
  dayInLifeCompleted: string[];
  competencyProgress: Record<string, { lessonDone: boolean; quizScore?: number; exerciseDone?: boolean }>;
  interviewPracticed: string[];
  interviewAnswers: Record<string, string>;
  interviewSimScores: number[];
  documentsReviewed: string[];
  assessmentScores: Partial<Record<AssessmentArea, number>>;
  assessmentTakenAt?: string;
  roadmapCompleted: string[];
  vocabularyMastered: string[];
  vocabularyStreak: number;
  vocabularyLastDrill?: string;
  vocabularyCardStats: Record<string, { correct: number; wrong: number }>;
  scenariosCompleted: string[];
  scenarioBestScores: Record<string, number>;
  srAdminProgress: Record<string, { lessonDone: boolean; quizScore?: number; exerciseDone?: boolean }>;
  srAdminCfcmMockScores: number[];
  srAdminInterviewPracticed: string[];
}
