import type { GameSave } from "@/lib/game/types";
import type { LearningPath, LearningProgress, LessonSectionId, NavMode } from "./types";
import {
  BADGE_DEFINITIONS,
  LEVELS,
  QUIZ_PASS_COUNT,
  XP_AWARDS,
  LESSON_SECTIONS,
} from "./types";
import { getCurriculum, getLesson } from "./curricula";
import { applyAutoCredits, getUnlocksForProgress } from "./game-bridges";

const STORAGE_KEY = "govcon_learning_progress";

export function createLearningProgress(): LearningProgress {
  return {
    learningPath: null,
    navMode: "learn",
    currentWeek: 1,
    currentDay: 1,
    lessonProgress: {},
    xpPoints: 0,
    level: 1,
    streakDays: 0,
    badges: [],
    flashcardProgress: {},
    conceptOfDaySeen: {},
    drillHistory: [],
    skippedDays: [],
    totalLearningMinutes: 0,
    gameUnlocks: [],
    autoCompletedLessons: [],
  };
}

export function loadLearningProgress(): LearningProgress {
  if (typeof window === "undefined") return createLearningProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createLearningProgress();
    return { ...createLearningProgress(), ...JSON.parse(raw) };
  } catch {
    return createLearningProgress();
  }
}

export function saveLearningProgress(progress: LearningProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateLearningProgress(
  updater: (p: LearningProgress) => LearningProgress
): LearningProgress {
  const next = updater(loadLearningProgress());
  saveLearningProgress(next);
  return next;
}

export function calculateLevel(xp: number): number {
  let level = 1;
  for (const tier of LEVELS) {
    if (xp >= tier.minXp) level = tier.level;
  }
  return level;
}

export function getLevelTitle(level: number): string {
  return LEVELS.find((l) => l.level === level)?.title ?? "Procurement Intern";
}

export function xpToNextLevel(xp: number): { current: number; next: number; progress: number } {
  const level = calculateLevel(xp);
  const currentTier = LEVELS.find((l) => l.level === level) ?? LEVELS[0];
  const nextTier = LEVELS.find((l) => l.level === level + 1);
  if (!nextTier) {
    return { current: xp - currentTier.minXp, next: 0, progress: 100 };
  }
  const span = nextTier.minXp - currentTier.minXp;
  const into = xp - currentTier.minXp;
  return { current: into, next: span, progress: Math.min(100, Math.round((into / span) * 100)) };
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function updateStreak(progress: LearningProgress): LearningProgress {
  const today = todayKey();
  const last = progress.lastActive?.slice(0, 10);
  if (last === today) return progress;

  let streak = progress.streakDays;
  if (last === yesterdayKey()) {
    streak += 1;
  } else if (last !== today) {
    streak = 1;
  }

  const base: LearningProgress = {
    ...progress,
    streakDays: streak,
    lastActive: new Date().toISOString(),
  };

  if (streak === 7 && !progress.badges.some((b) => b.id === "week-warrior")) {
    return awardXp(earnBadge(base, "week-warrior"), XP_AWARDS.streak7);
  }

  return base;
}

export function awardXp(progress: LearningProgress, amount: number): LearningProgress {
  const xpPoints = progress.xpPoints + amount;
  return { ...progress, xpPoints, level: calculateLevel(xpPoints) };
}

export function earnBadge(progress: LearningProgress, badgeId: string): LearningProgress {
  if (progress.badges.some((b) => b.id === badgeId)) return progress;
  if (!BADGE_DEFINITIONS.some((b) => b.id === badgeId)) return progress;
  return {
    ...progress,
    badges: [...progress.badges, { id: badgeId, earnedAt: new Date().toISOString() }],
  };
}

export function selectPath(progress: LearningProgress, path: LearningPath): LearningProgress {
  return updateStreak({
    ...progress,
    learningPath: path,
    pathSelectedAt: new Date().toISOString(),
    currentWeek: 1,
    currentDay: 1,
    navMode: path === "simulator" ? "play" : "learn",
  });
}

export function setNavMode(progress: LearningProgress, mode: NavMode): LearningProgress {
  return { ...progress, navMode: mode };
}

export function markSectionComplete(
  progress: LearningProgress,
  lessonId: string,
  sectionId: LessonSectionId
): LearningProgress {
  const prev = progress.lessonProgress[lessonId] ?? { sectionsCompleted: [] };
  const sections = prev.sectionsCompleted.includes(sectionId)
    ? prev.sectionsCompleted
    : [...prev.sectionsCompleted, sectionId];

  const minutes = getLesson(lessonId)?.minutes ?? 0;
  const sectionCount = LESSON_SECTIONS.length;
  const addedMinutes = Math.round(minutes / sectionCount);

  return updateStreak({
    ...progress,
    totalLearningMinutes: progress.totalLearningMinutes + addedMinutes,
    lessonProgress: {
      ...progress.lessonProgress,
      [lessonId]: {
        ...prev,
        sectionsCompleted: sections,
        timeSpentMinutes: (prev.timeSpentMinutes ?? 0) + addedMinutes,
      },
    },
  });
}

export function completeLesson(
  progress: LearningProgress,
  lessonId: string,
  quizScore: number,
  options?: { firstTry?: boolean; scenarioDone?: boolean; exerciseDone?: boolean }
): LearningProgress {
  if (quizScore < QUIZ_PASS_COUNT) return progress;

  const prev = progress.lessonProgress[lessonId];
  const alreadyComplete = !!prev?.completedAt;

  let next: LearningProgress = {
    ...progress,
    lessonProgress: {
      ...progress.lessonProgress,
      [lessonId]: {
        ...prev,
        sectionsCompleted: [...LESSON_SECTIONS],
        quizScore,
        scenarioDone: options?.scenarioDone ?? prev?.scenarioDone ?? true,
        exerciseDone: options?.exerciseDone ?? prev?.exerciseDone ?? true,
        completedAt: prev?.completedAt ?? new Date().toISOString(),
        timeSpentMinutes: prev?.timeSpentMinutes ?? getLesson(lessonId)?.minutes ?? 0,
      },
    },
  };

  if (!alreadyComplete) {
    next = awardXp(next, XP_AWARDS.lessonComplete);
    if (options?.firstTry && quizScore === 5) {
      next = awardXp(next, XP_AWARDS.quizFirstTry);
      next = earnBadge(next, "perfect-score");
    }
  }

  if (quizScore === 5 && !progress.badges.some((b) => b.id === "perfect-score")) {
    next = earnBadge(next, "perfect-score");
  }

  const lesson = getLesson(lessonId);
  if (lesson) {
    const path = lesson.path;
    const weekLessons = getCurriculum(path).filter((l) => l.week === lesson.week);
    const weekDone = weekLessons.every((l) => next.lessonProgress[l.id]?.completedAt);
    if (weekDone && !alreadyComplete) {
      next = awardXp(next, XP_AWARDS.weekComplete);
    }

    if (path === "career" && lesson.week === 8 && weekDone) {
      next = earnBadge(next, "interview-ready");
    }

    if (lessonId === "career-w8-d5" && quizScore >= QUIZ_PASS_COUNT) {
      next = earnBadge(next, "certified");
      next = awardXp(next, XP_AWARDS.moduleExam);
    }

    const nextDay = lesson.day < 5 ? lesson.day + 1 : 1;
    const nextWeek = lesson.day < 5 ? lesson.week : Math.min(lesson.week + 1, 8);
    if (path === next.learningPath) {
      next = { ...next, currentWeek: nextWeek, currentDay: nextDay };
    }
  }

  next = { ...next, gameUnlocks: getUnlocksForProgress(next) };
  return updateStreak(next);
}

export function skipDay(progress: LearningProgress): LearningProgress {
  const key = `${progress.learningPath ?? "none"}-w${progress.currentWeek}-d${progress.currentDay}`;
  const skipped = progress.skippedDays.includes(key)
    ? progress.skippedDays
    : [...progress.skippedDays, key];

  const path = progress.learningPath;
  let currentDay = progress.currentDay + 1;
  let currentWeek = progress.currentWeek;
  if (currentDay > 5) {
    currentDay = 1;
    currentWeek += 1;
  }
  const maxWeek = path === "entrepreneur" ? 6 : path === "career" ? 8 : 1;
  if (currentWeek > maxWeek) {
    currentWeek = maxWeek;
    currentDay = 5;
  }

  return { ...progress, skippedDays: skipped, currentWeek, currentDay };
}

export function getCurrentLesson(progress: LearningProgress) {
  if (!progress.learningPath) return null;
  const id = `${progress.learningPath}-w${progress.currentWeek}-d${progress.currentDay}`;
  return getLesson(id) ?? null;
}

export function getTrackProgress(progress: LearningProgress) {
  if (!progress.learningPath) return { completed: 0, total: 0, percent: 0 };
  const lessons = getCurriculum(progress.learningPath);
  const completed = lessons.filter((l) => progress.lessonProgress[l.id]?.completedAt).length;
  return {
    completed,
    total: lessons.length,
    percent: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
  };
}

export function getQuizAverage(progress: LearningProgress): number {
  const scores = Object.values(progress.lessonProgress)
    .map((l) => l.quizScore)
    .filter((s): s is number => s !== undefined);
  if (!scores.length) return 0;
  return Math.round((scores.reduce((a, b) => a + b, 0) / scores.length / 5) * 100);
}

export function mergeLearningFromGameSave(save: GameSave): LearningProgress {
  const local = loadLearningProgress();
  const remote = save.learningProgress;
  if (!remote) return local;

  const mergedLessonProgress = { ...local.lessonProgress, ...remote.lessonProgress };
  const mergedBadges = [...local.badges];
  for (const b of remote.badges) {
    if (!mergedBadges.some((x) => x.id === b.id)) mergedBadges.push(b);
  }

  return {
    ...createLearningProgress(),
    ...local,
    ...remote,
    lessonProgress: mergedLessonProgress,
    badges: mergedBadges,
    flashcardProgress: { ...local.flashcardProgress, ...remote.flashcardProgress },
    gameUnlocks: Array.from(new Set([...local.gameUnlocks, ...remote.gameUnlocks])),
    autoCompletedLessons: Array.from(new Set([...local.autoCompletedLessons, ...remote.autoCompletedLessons])),
    level: calculateLevel(Math.max(local.xpPoints, remote.xpPoints)),
    xpPoints: Math.max(local.xpPoints, remote.xpPoints),
  };
}

export function mergeLearningToGameSave(save: GameSave, progress: LearningProgress): GameSave {
  return { ...save, learningProgress: progress };
}

export function recordSimulatorWin(progress: LearningProgress): LearningProgress {
  let next = awardXp(progress, XP_AWARDS.simulatorWin);
  if (!next.badges.some((b) => b.id === "first-win")) {
    next = earnBadge(next, "first-win");
  }
  return next;
}

export function recordDailyDrillComplete(progress: LearningProgress, score: number, total: number): LearningProgress {
  let next = awardXp(progress, XP_AWARDS.dailyDrill);
  const date = todayKey();
  next = {
    ...next,
    lastDrillDate: date,
    drillHistory: [...next.drillHistory.filter((d) => d.date !== date), { date, score, total }],
  };
  return updateStreak(next);
}

export function handleGameEvent(progress: LearningProgress, event: string): LearningProgress {
  return applyAutoCredits(progress, event);
}

export function hydrateLearningProgress(progress: Partial<LearningProgress> | null | undefined): LearningProgress {
  if (!progress) return createLearningProgress();
  const base = { ...createLearningProgress(), ...progress };
  return { ...base, level: calculateLevel(base.xpPoints) };
}

export const normalizeLearningProgress = hydrateLearningProgress;

export function getLevelInfo(xp: number) {
  const level = calculateLevel(xp);
  const { current, next, progress } = xpToNextLevel(xp);
  const tier = LEVELS.find((l) => l.level === level)!;
  const nextTier = LEVELS.find((l) => l.level === level + 1);
  return {
    level,
    title: tier.title,
    xp,
    nextMin: nextTier?.minXp ?? tier.minXp,
    progress,
    current,
    next,
  };
}

export function getTrackCompletionPercent(progress: LearningProgress, totalLessons?: number): number {
  const track = getTrackProgress(progress);
  if (totalLessons && track.total !== totalLessons) {
    const completed = Object.values(progress.lessonProgress).filter((l) => l.completedAt).length;
    return totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
  }
  return track.percent;
}

export const averageQuizScore = getQuizAverage;
export const recordDrillComplete = recordDailyDrillComplete;
export const selectLearningPath = selectPath;

export interface LearningDbPayload {
  learning_path?: string | null;
  current_week?: number;
  current_day?: number;
  xp_points?: number;
  level?: number;
  streak_days?: number;
  last_active?: string | null;
  badges?: LearningProgress["badges"];
  flashcard_progress?: LearningProgress["flashcardProgress"];
  concept_of_day_seen?: LearningProgress["conceptOfDaySeen"];
  lesson_progress?: Record<string, unknown>;
  drill_history?: LearningProgress["drillHistory"];
}

type LessonProgressMeta = {
  navMode?: NavMode;
  pathSelectedAt?: string;
  skippedDays?: string[];
  totalLearningMinutes?: number;
  gameUnlocks?: string[];
  autoCompletedLessons?: string[];
};

function extractMeta(lessonProgress: Record<string, unknown>): {
  lessons: LearningProgress["lessonProgress"];
  meta: LessonProgressMeta;
} {
  const metaRaw = lessonProgress.__meta as LessonProgressMeta | undefined;
  const { __meta: _meta, ...lessons } = lessonProgress;
  return {
    lessons: lessons as LearningProgress["lessonProgress"],
    meta: metaRaw ?? {},
  };
}

export function splitProgressForDb(progress: LearningProgress): LearningDbPayload {
  const meta: LessonProgressMeta = {
    navMode: progress.navMode,
    pathSelectedAt: progress.pathSelectedAt,
    skippedDays: progress.skippedDays,
    totalLearningMinutes: progress.totalLearningMinutes,
    gameUnlocks: progress.gameUnlocks,
    autoCompletedLessons: progress.autoCompletedLessons,
  };
  return {
    learning_path: progress.learningPath,
    current_week: progress.currentWeek,
    current_day: progress.currentDay,
    xp_points: progress.xpPoints,
    level: progress.level,
    streak_days: progress.streakDays,
    last_active: progress.lastActive?.slice(0, 10) ?? null,
    badges: progress.badges,
    flashcard_progress: progress.flashcardProgress,
    concept_of_day_seen: progress.conceptOfDaySeen,
    lesson_progress: { __meta: meta, ...progress.lessonProgress },
    drill_history: progress.drillHistory,
  };
}

export function hydrateLearningFromDb(payload: LearningDbPayload): LearningProgress {
  const lessonRaw = (payload.lesson_progress ?? {}) as Record<string, unknown>;
  const { lessons, meta } = extractMeta(lessonRaw);
  const progress = hydrateLearningProgress({
    learningPath: payload.learning_path as LearningPath | null,
    navMode: meta.navMode,
    pathSelectedAt: meta.pathSelectedAt,
    currentWeek: payload.current_week,
    currentDay: payload.current_day,
    lessonProgress: lessons,
    xpPoints: payload.xp_points,
    level: payload.level,
    streakDays: payload.streak_days,
    lastActive: payload.last_active ?? undefined,
    badges: payload.badges,
    flashcardProgress: payload.flashcard_progress,
    conceptOfDaySeen: payload.concept_of_day_seen,
    drillHistory: payload.drill_history,
    skippedDays: meta.skippedDays,
    totalLearningMinutes: meta.totalLearningMinutes,
    gameUnlocks: meta.gameUnlocks,
    autoCompletedLessons: meta.autoCompletedLessons,
  });
  saveLearningProgress(progress);
  return progress;
}
