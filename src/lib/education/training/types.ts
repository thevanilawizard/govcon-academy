export type QuizQuestionType = "multiple_choice" | "true_false" | "scenario";

export type ExamCategory =
  | "far"
  | "dfars"
  | "administration"
  | "proposals"
  | "accounting"
  | "ethics"
  | "scenario";

export interface TrainingSection {
  heading: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  situation: string;
  decision: string;
  outcome: string;
  lessonLearned: string;
}

export interface ScenarioOption {
  id: string;
  label: string;
  consequence: string;
  isCorrect: boolean;
}

export interface InteractiveScenario {
  prompt: string;
  options: ScenarioOption[];
  correctExplanation: string;
}

export interface DocumentAnnotation {
  label: string;
  text: string;
}

export interface SampleDocument {
  title: string;
  docType: string;
  content: string;
  annotations: DocumentAnnotation[];
}

export interface RegulatoryDeepDive {
  citation: string;
  regulatoryText: string;
  plainEnglish: string;
  contractorImpact: string;
  governmentImpact: string;
  commonDisputes: string;
  gaoCases?: string;
  contractorAdvantage?: string;
}

export interface TrainingQuizQuestion {
  id: string;
  type?: QuizQuestionType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  examCategory?: ExamCategory;
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
  caseStudies?: CaseStudy[];
  interactiveScenario?: InteractiveScenario;
  sampleDocuments?: SampleDocument[];
  regulatoryDeepDives?: RegulatoryDeepDive[];
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
  finalExamAttempts: number;
  finalExamTopicScores: Partial<Record<ExamCategory, number>>;
  realWorldExercisesCompleted: string[];
  scenariosCompleted: string[];
}

export interface TrainingResource {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const QUIZ_PASS_THRESHOLD = 70;
export const FINAL_EXAM_PASS_THRESHOLD = 75;
export const FINAL_EXAM_QUESTION_COUNT = 150;
export const FINAL_EXAM_MAX_ATTEMPTS = 3;
export const FINAL_EXAM_TIME_LIMIT_SECONDS = 3 * 60 * 60;

export const FINAL_EXAM_CATEGORY_TARGETS: Record<ExamCategory, number> = {
  far: 25,
  dfars: 25,
  administration: 20,
  proposals: 20,
  accounting: 20,
  ethics: 20,
  scenario: 20,
};
