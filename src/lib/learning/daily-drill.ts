import type { GlossaryEntry } from "@/lib/education/glossary-full";
import { ENHANCED_GLOSSARY } from "@/lib/education/glossary-full";
import type { LearningProgress } from "./types";
import { getCurriculum } from "./curricula";

export type DailyDrillItem =
  | { type: "flashcard"; termId: string; term: string; definition: string; slug?: string }
  | { type: "scenario"; lessonId: string; prompt: string; options: string[]; correctIndex: number; explanation: string }
  | { type: "far-part"; question: string; options: string[]; correctIndex: number; explanation: string };

export interface DailyDrill {
  date: string;
  items: DailyDrillItem[];
}

export interface DrillGradeResult {
  score: number;
  total: number;
  flashcardUpdates: Record<string, { correct: boolean }>;
}

const FAR_PART_QUESTIONS = [
  {
    question: "What FAR part covers competition requirements?",
    options: ["FAR Part 6", "FAR Part 31", "FAR Part 52", "FAR Part 42"],
    correctIndex: 0,
    explanation: "FAR Part 6 implements statutory competition requirements.",
  },
  {
    question: "What FAR part contains standard contract clauses?",
    options: ["FAR Part 12", "FAR Part 52", "FAR Part 15", "FAR Part 19"],
    correctIndex: 1,
    explanation: "FAR Part 52 prescribes solicitation provisions and contract clauses.",
  },
  {
    question: "What FAR part governs contract pricing and cost principles?",
    options: ["FAR Part 31", "FAR Part 6", "FAR Part 4", "FAR Part 9"],
    correctIndex: 0,
    explanation: "FAR Part 31 covers contract cost principles and procedures.",
  },
  {
    question: "What FAR part covers small business programs?",
    options: ["FAR Part 19", "FAR Part 33", "FAR Part 45", "FAR Part 2"],
    correctIndex: 0,
    explanation: "FAR Part 19 implements small business policies.",
  },
  {
    question: "What FAR part governs negotiated procurements?",
    options: ["FAR Part 15", "FAR Part 13", "FAR Part 8", "FAR Part 22"],
    correctIndex: 0,
    explanation: "FAR Part 15 covers contracting by negotiation.",
  },
  {
    question: "What FAR part covers contract administration?",
    options: ["FAR Part 42", "FAR Part 1", "FAR Part 5", "FAR Part 11"],
    correctIndex: 0,
    explanation: "FAR Part 42 addresses contract administration and audit services.",
  },
];

function termId(entry: GlossaryEntry, index: number): string {
  return entry.slug ?? entry.term.toLowerCase().replace(/\s+/g, "-") ?? `term-${index}`;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

/** Spaced repetition: prioritize due/wrong terms, then least-reviewed. */
export function pickFlashcards(
  progress: LearningProgress,
  glossary: GlossaryEntry[] = ENHANCED_GLOSSARY,
  count = 3
): DailyDrillItem[] {
  const now = Date.now();
  const scored = glossary.map((entry, index) => {
    const id = termId(entry, index);
    const stats = progress.flashcardProgress[id];
    const due = stats?.nextReview ? new Date(stats.nextReview).getTime() <= now : true;
    const wrong = stats?.wrong ?? 0;
    const correct = stats?.correct ?? 0;
    const mastered = stats?.mastered ?? false;
    return { entry, id, due, wrong, correct, mastered, index };
  });

  scored.sort((a, b) => {
    if (a.mastered !== b.mastered) return a.mastered ? 1 : -1;
    if (a.due !== b.due) return a.due ? -1 : 1;
    if (a.wrong !== b.wrong) return b.wrong - a.wrong;
    return a.correct - b.correct;
  });

  return scored.slice(0, count).map(({ entry, id }) => ({
    type: "flashcard" as const,
    termId: id,
    term: entry.term,
    definition: entry.definition,
    slug: entry.slug,
  }));
}

function pickScenario(progress: LearningProgress): DailyDrillItem | null {
  const path = progress.learningPath;
  if (!path) return null;

  const lessons = getCurriculum(path);
  const seed = hashSeed(todayKey());
  const lesson = lessons[seed % lessons.length];
  if (!lesson?.scenario) return null;

  return {
    type: "scenario",
    lessonId: lesson.id,
    prompt: lesson.scenario.prompt,
    options: lesson.scenario.options.map((o) => o.label),
    correctIndex: lesson.scenario.options.findIndex((o) => o.isCorrect),
    explanation: lesson.scenario.options.find((o) => o.isCorrect)?.feedback ?? "",
  };
}

function pickFarQuestion(): DailyDrillItem {
  const seed = hashSeed(todayKey() + "-far");
  const q = FAR_PART_QUESTIONS[seed % FAR_PART_QUESTIONS.length];
  return { type: "far-part", ...q };
}

export function buildDailyDrill(
  progress: LearningProgress,
  glossary: GlossaryEntry[] = ENHANCED_GLOSSARY
): DailyDrill {
  const flashcards = pickFlashcards(progress, glossary, 3);
  const scenario = pickScenario(progress);
  const farPart = pickFarQuestion();

  const items: DailyDrillItem[] = [...flashcards];
  if (scenario) items.push(scenario);
  items.push(farPart);

  return { date: todayKey(), items };
}

const REVIEW_INTERVALS_DAYS = [1, 3, 7, 14];

export function updateFlashcardProgress(
  progress: LearningProgress,
  termId: string,
  correct: boolean
): LearningProgress {
  const prev = progress.flashcardProgress[termId] ?? { correct: 0, wrong: 0 };
  const streak = correct ? prev.correct + 1 : 0;
  const wrong = correct ? prev.wrong : prev.wrong + 1;
  const mastered = streak >= 3;

  const intervalIdx = Math.min(streak, REVIEW_INTERVALS_DAYS.length - 1);
  const days = correct ? REVIEW_INTERVALS_DAYS[intervalIdx] : 1;
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + days);

  return {
    ...progress,
    flashcardProgress: {
      ...progress.flashcardProgress,
      [termId]: {
        correct: streak,
        wrong,
        nextReview: nextReview.toISOString(),
        mastered,
      },
    },
  };
}

export function gradeDrill(
  progress: LearningProgress,
  answers: { itemIndex: number; selectedIndex?: number; flashcardCorrect?: boolean }[]
): { progress: LearningProgress; result: DrillGradeResult } {
  const drill = buildDailyDrill(progress);
  let score = 0;
  let next = progress;
  const flashcardUpdates: Record<string, { correct: boolean }> = {};

  for (const answer of answers) {
    const item = drill.items[answer.itemIndex];
    if (!item) continue;

    if (item.type === "flashcard") {
      const ok = answer.flashcardCorrect === true;
      if (ok) score++;
      flashcardUpdates[item.termId] = { correct: ok };
      next = updateFlashcardProgress(next, item.termId, ok);
    } else if (item.type === "scenario" || item.type === "far-part") {
      if (answer.selectedIndex === item.correctIndex) score++;
    }
  }

  const total = drill.items.length;
  const date = todayKey();

  next = {
    ...next,
    lastDrillDate: date,
    drillHistory: [...next.drillHistory.filter((d) => d.date !== date), { date, score, total }],
  };

  return {
    progress: next,
    result: { score, total, flashcardUpdates },
  };
}

export function getFlashcardMasteryPercent(progress: LearningProgress): number {
  const total = Object.keys(progress.flashcardProgress).length;
  if (!total) return 0;
  const mastered = Object.values(progress.flashcardProgress).filter((s) => s.mastered).length;
  return Math.round((mastered / total) * 100);
}

export function getConceptOfDayIndex(): number {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = Date.now() - start.getTime();
  return Math.floor(diff / 86400000) % 365;
}

export function isDrillCompleteToday(progress: LearningProgress): boolean {
  return progress.lastDrillDate === todayKey();
}
