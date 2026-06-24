import type { LearningProgress } from "./types";

export interface GameEducationBridge {
  event: string;
  title: string;
  message: string;
  lessonId: string;
  ctaLabel: string;
}

export const GAME_EDUCATION_BRIDGES: Record<string, GameEducationBridge> = {
  contract_won: {
    event: "contract_won",
    title: "You won a contract",
    message:
      "Your performance on this contract will be rated in CPARS on a 1–5 scale. Strong delivery builds past performance for every future bid.",
    lessonId: "career-w6-d4",
    ctaLabel: "Learn about CPARS →",
  },
  bid_lost: {
    event: "bid_lost",
    title: "Bid not selected",
    message:
      "This relates to pricing strategy and evaluation method. On LPTA contracts, price dominates; on Best Value, technical and past performance can offset higher price.",
    lessonId: "career-w5-d3",
    ctaLabel: "Review LPTA vs Best Value →",
  },
  scope_creep: {
    event: "scope_creep",
    title: "Scope creep detected",
    message:
      "This is a constructive change under FAR 52.243-1. The correct response is a bilateral contract modification — not absorbing unfunded work.",
    lessonId: "career-w6-d2",
    ctaLabel: "Learn how to handle scope changes →",
  },
  option_not_exercised: {
    event: "option_not_exercised",
    title: "Option year not exercised",
    message:
      "When CPARS performance falls below the 3.0 threshold, agencies often decline option years. Recovery starts with documented performance improvement.",
    lessonId: "career-w6-d4",
    ctaLabel: "Learn CPARS recovery strategies →",
  },
  dcaa_audit: {
    event: "dcaa_audit",
    title: "DCAA audit event",
    message:
      "DCAA verifies cost proposals and accounting system adequacy. An adequate accounting system is required before billing on cost-type contracts.",
    lessonId: "career-w7-d4",
    ctaLabel: "Learn about DCAA requirements →",
  },
  exceptional_cpars: {
    event: "exceptional_cpars",
    title: "Exceptional CPARS earned",
    message:
      "Exceptional ratings (4.5+) significantly boost win probability on future Best Value procurements. Protect this record on every deliverable.",
    lessonId: "entrepreneur-w4-d4",
    ctaLabel: "Learn how to earn Exceptional CPARS →",
  },
};

/** Education milestones that unlock simulator features. */
export const GAME_UNLOCKS: Record<string, { milestone: string; unlockId: string; description: string }> = {
  "career-w1-complete": {
    milestone: "Complete Career Week 1",
    unlockId: "advanced-opportunity-filters",
    description: "Unlock advanced opportunity filters in the simulator",
  },
  "career-w4-complete": {
    milestone: "Complete Career Week 4 (Pricing)",
    unlockId: "rate-calculator",
    description: "Unlock the indirect rate calculator in the game",
  },
  "career-w5-d4-complete": {
    milestone: "Complete FAR Part 15 lesson",
    unlockId: "proposal-strategy-advisor",
    description: "Unlock proposal strategy advisor hints during bid build",
  },
  "career-w7-complete": {
    milestone: "Complete DFARS module",
    unlockId: "defense-opportunities",
    description: "Unlock additional DoD-weighted opportunities in the pool",
  },
  "career-w8-d5-complete": {
    milestone: "Pass final certification exam",
    unlockId: "expert-mode",
    description: "Unlock Expert Mode in the simulator",
  },
  "entrepreneur-w1-complete": {
    milestone: "Complete Entrepreneur Week 1",
    unlockId: "sam-health-dashboard",
    description: "Unlock SAM registration health indicators on dashboard",
  },
};

/** Game events that auto-complete related lessons. */
export const AUTO_CREDIT_LESSONS: Record<string, string[]> = {
  contracts_won_3: ["entrepreneur-w4-d1", "career-w6-d1"],
  dcaa_audit_passed: ["career-w7-d4"],
  scope_creep_handled: ["career-w6-d2"],
  exceptional_cpars_earned: ["entrepreneur-w4-d4", "career-w6-d4"],
  first_contract_won: ["entrepreneur-w4-d1"],
  sam_registration_complete: ["entrepreneur-w1-d2", "career-w1-d4"],
};

export function getBridgeForEvent(event: string): GameEducationBridge | undefined {
  return GAME_EDUCATION_BRIDGES[event];
}

export function getUnlocksForProgress(progress: LearningProgress): string[] {
  const unlocks = new Set(progress.gameUnlocks);

  if (isWeekComplete(progress, "career", 1)) unlocks.add("advanced-opportunity-filters");
  if (isWeekComplete(progress, "career", 4)) unlocks.add("rate-calculator");
  if (isLessonComplete(progress, "career-w5-d4")) unlocks.add("proposal-strategy-advisor");
  if (isWeekComplete(progress, "career", 7)) unlocks.add("defense-opportunities");
  if (isLessonComplete(progress, "career-w8-d5")) unlocks.add("expert-mode");
  if (isWeekComplete(progress, "entrepreneur", 1)) unlocks.add("sam-health-dashboard");

  return Array.from(unlocks);
}

function isLessonComplete(progress: LearningProgress, lessonId: string): boolean {
  return !!progress.lessonProgress[lessonId]?.completedAt;
}

function isWeekComplete(progress: LearningProgress, path: "career" | "entrepreneur", week: number): boolean {
  const prefix = `${path}-w${week}-d`;
  const days = Object.keys(progress.lessonProgress).filter(
    (id) => id.startsWith(prefix) && progress.lessonProgress[id]?.completedAt
  );
  return days.length >= 5;
}

export function getAutoCreditLessonIds(event: string): string[] {
  return AUTO_CREDIT_LESSONS[event] ?? [];
}

export function applyAutoCredits(
  progress: LearningProgress,
  event: string
): LearningProgress {
  const lessonIds = getAutoCreditLessonIds(event);
  if (!lessonIds.length) return progress;

  const autoCompleted = new Set(progress.autoCompletedLessons);
  const lessonProgress = { ...progress.lessonProgress };

  for (const id of lessonIds) {
    if (autoCompleted.has(id)) continue;
    autoCompleted.add(id);
    lessonProgress[id] = {
      ...lessonProgress[id],
      sectionsCompleted: ["big-idea", "core-content", "real-world", "scenario", "quiz", "exercise", "next"],
      quizScore: 5,
      scenarioDone: true,
      exerciseDone: true,
      completedAt: new Date().toISOString(),
    };
  }

  return {
    ...progress,
    lessonProgress,
    autoCompletedLessons: Array.from(autoCompleted),
    gameUnlocks: getUnlocksForProgress({
      ...progress,
      lessonProgress,
      autoCompletedLessons: Array.from(autoCompleted),
    }),
  };
}

export function getPathLabel(path: import("./types").LearningPath | null): string {
  switch (path) {
    case "career":
      return "Career Track";
    case "entrepreneur":
      return "Entrepreneur Track";
    case "simulator":
      return "Simulator Track";
    default:
      return "Select a track";
  }
}
