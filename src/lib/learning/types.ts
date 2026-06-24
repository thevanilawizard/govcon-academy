export type LearningPath = "career" | "entrepreneur" | "simulator";
export type NavMode = "learn" | "play";

export type KnowledgeTopicId =
  | "foundations"
  | "far-core"
  | "small-business"
  | "pricing"
  | "proposals"
  | "administration"
  | "dfars"
  | "job-readiness"
  | "sam-market"
  | "bid-capture"
  | "delivery"
  | "finance"
  | "growth";

export interface DailyConcept {
  day: number;
  name: string;
  explanation: string;
  example: string;
  farClause: string;
  category: string;
  lessonId: string | null;
}

export interface CurriculumScenarioOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface CurriculumLesson {
  id: string;
  path: LearningPath;
  week: number;
  day: number;
  title: string;
  minutes: number;
  topicId: KnowledgeTopicId;
  bigIdea: string;
  whyItMatters: string;
  consequence: string;
  coreContent: { heading: string; content: string; martinSays?: string; farCitation?: string }[];
  realWorldExample: {
    scenario: string;
    action: string;
    outcome: string;
    lesson: string;
  };
  scenario: {
    prompt: string;
    options: CurriculumScenarioOption[];
    farCitation: string;
  };
  quiz: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  practicalExercise?: string;
  simulatorPractice?: string;
  deepLink?: { tab: string; label: string };
  nextPreview: string;
  nextConnection: string;
  diagramId?: "acquisition-lifecycle" | "contract-anatomy" | "indirect-rates" | "source-selection" | "far-hierarchy" | "set-aside-tree";
}

export interface BadgeDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LearningProgress {
  learningPath: LearningPath | null;
  pathSelectedAt?: string;
  navMode: NavMode;
  currentWeek: number;
  currentDay: number;
  lessonProgress: Record<
    string,
    {
      sectionsCompleted: string[];
      quizScore?: number;
      scenarioDone?: boolean;
      exerciseDone?: boolean;
      completedAt?: string;
      timeSpentMinutes?: number;
    }
  >;
  xpPoints: number;
  level: number;
  streakDays: number;
  lastActive?: string;
  lastDrillDate?: string;
  badges: { id: string; earnedAt: string }[];
  flashcardProgress: Record<string, { correct: number; wrong: number; nextReview?: string; mastered?: boolean }>;
  conceptOfDaySeen: Record<string, boolean>;
  drillHistory: { date: string; score: number; total: number }[];
  skippedDays: string[];
  totalLearningMinutes: number;
  gameUnlocks: string[];
  autoCompletedLessons: string[];
}

export const LESSON_SECTIONS = [
  "big-idea",
  "core-content",
  "real-world",
  "scenario",
  "quiz",
  "exercise",
  "next",
] as const;

export type LessonSectionId = (typeof LESSON_SECTIONS)[number];

export const QUIZ_PASS_COUNT = 3;
export const QUIZ_TOTAL = 5;
export const MASTERY_THRESHOLD = 80;

export const XP_AWARDS = {
  dailyDrill: 50,
  lessonComplete: 100,
  quizFirstTry: 150,
  simulatorWin: 200,
  weekComplete: 500,
  moduleExam: 750,
  streak7: 500,
} as const;

export const LEVELS = [
  { level: 1, title: "Procurement Intern", minXp: 0 },
  { level: 2, title: "Contract Support Specialist", minXp: 500 },
  { level: 3, title: "Contracts Administrator", minXp: 1500 },
  { level: 4, title: "Contracts Manager I", minXp: 3500 },
  { level: 5, title: "Contracts Manager II", minXp: 7000 },
  { level: 6, title: "Senior Contracts Manager", minXp: 12000 },
  { level: 7, title: "Director of Contracts", minXp: 20000 },
  { level: 8, title: "Chief Procurement Officer", minXp: 35000 },
] as const;

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  { id: "first-win", title: "First Win", description: "Win your first contract in the simulator", icon: "🏆" },
  { id: "far-scholar", title: "FAR Scholar", description: "Complete all FAR-track lessons in your path", icon: "📘" },
  { id: "pricing-pro", title: "Pricing Pro", description: "Score 90%+ on a pricing week quiz average", icon: "💰" },
  { id: "clean-audit", title: "Clean Audit", description: "Pass a DCAA audit event in the simulator", icon: "✅" },
  { id: "exceptional", title: "Exceptional", description: "Earn Exceptional CPARS in the simulator", icon: "⭐" },
  { id: "week-warrior", title: "Week Warrior", description: "Complete a full week without skipping", icon: "📅" },
  { id: "speed-reader", title: "Speed Reader", description: "Complete 3 lessons in one day", icon: "⚡" },
  { id: "perfect-score", title: "Perfect Score", description: "Score 100% on any lesson quiz", icon: "💯" },
  { id: "interview-ready", title: "Interview Ready", description: "Complete Week 8 career track", icon: "🎤" },
  { id: "certified", title: "Certified", description: "Pass the final certification exam", icon: "🎓" },
];
