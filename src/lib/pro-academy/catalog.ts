import { FAR_MODULES } from "./far";
import { PRICING_MODULES } from "./pricing";
import { ACQUISITION_MODULES } from "./acquisition";
import { buildFinalExamQuestions } from "./assessments/final-exam";
import type { CumulativeExam, ModuleAssessment, ProLesson, ProModule } from "./types";
import type { TrainingQuizQuestion } from "@/lib/education/training/types";

export { FAR_MODULES } from "./far";
export { PRICING_MODULES } from "./pricing";
export { ACQUISITION_MODULES } from "./acquisition";

export const PRO_ACADEMY_SECTIONS = [
  {
    id: "far" as const,
    title: "FAR Mastery",
    description: "Complete FAR training from Part 1 through Part 19 with regulatory text, plain English, and scenarios.",
    modules: FAR_MODULES,
  },
  {
    id: "pricing" as const,
    title: "Pricing Mastery",
    description: "Cost accounting, proposal pricing, TINA, indirect rates, and FAR Part 31 allowability.",
    modules: PRICING_MODULES,
  },
  {
    id: "acquisition" as const,
    title: "Acquisition Manager Track",
    description: "Government-side acquisition planning, source selection, and contract administration.",
    modules: ACQUISITION_MODULES,
  },
];

export const PRO_ACADEMY_MODULES: ProModule[] = [
  ...FAR_MODULES,
  ...PRICING_MODULES,
  ...ACQUISITION_MODULES,
];

export function getProModuleById(id: string): ProModule | undefined {
  return PRO_ACADEMY_MODULES.find((m) => m.id === id);
}

export function getProLessonById(lessonId: string): ProLesson | undefined {
  for (const mod of PRO_ACADEMY_MODULES) {
    const found = mod.lessons.find((l) => l.id === lessonId) as ProLesson | undefined;
    if (found) return found;
  }
  return undefined;
}

export function getAllProLessons(): ProLesson[] {
  return PRO_ACADEMY_MODULES.flatMap((m) => m.lessons as ProLesson[]);
}

export function getModulesByTrack(track: "far" | "pricing" | "acquisition"): ProModule[] {
  return PRO_ACADEMY_MODULES.filter((m) => m.track === track);
}

function sampleQuestions(pool: TrainingQuizQuestion[], count: number, prefix: string): TrainingQuizQuestion[] {
  const selected: TrainingQuizQuestion[] = [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    selected.push({ ...shuffled[i], id: `${prefix}-${i + 1}` });
  }
  let idx = 0;
  while (selected.length < count && pool.length > 0) {
    const q = pool[idx % pool.length];
    selected.push({ ...q, id: `${prefix}-${selected.length + 1}` });
    idx++;
  }
  return selected;
}

export function getModuleAssessments(): ModuleAssessment[] {
  return PRO_ACADEMY_MODULES.map((mod) => ({
    id: `${mod.id}-assessment`,
    moduleId: mod.id,
    title: `${mod.title} — Module Assessment`,
    questions: sampleQuestions(
      mod.lessons.flatMap((l) => l.quiz),
      25,
      `${mod.id}-ma`
    ),
    passThreshold: 75,
  }));
}

export function getModuleAssessment(moduleId: string): ModuleAssessment | undefined {
  return getModuleAssessments().find((a) => a.moduleId === moduleId);
}

export function getCumulativeExams(): CumulativeExam[] {
  const exams: CumulativeExam[] = [];
  for (let i = 0; i < PRO_ACADEMY_MODULES.length; i += 3) {
    const batch = PRO_ACADEMY_MODULES.slice(i, i + 3);
    if (batch.length === 0) continue;
    const pool = batch.flatMap((m) => m.lessons.flatMap((l) => l.quiz));
    exams.push({
      id: `cumulative-${i / 3 + 1}`,
      title: `Cumulative Exam ${i / 3 + 1}`,
      afterModuleIds: batch.map((m) => m.id),
      questions: sampleQuestions(pool, 50, `cum-${i / 3 + 1}`),
      passThreshold: 75,
    });
  }
  return exams;
}

export function getFinalExamQuestions(): TrainingQuizQuestion[] {
  return buildFinalExamQuestions();
}

export const PRO_ACADEMY_TITLE = "GovCon Pro Academy";
export const PRO_ACADEMY_SUBTITLE =
  "The most comprehensive FAR, pricing, and acquisition training program for Contracts Managers and Acquisition Specialists.";

export const PRO_ACADEMY_TOOLS = [
  { id: "far-navigator", title: "FAR Navigator", description: "Search FAR parts and clauses with plain-English explanations." },
  { id: "contract-type-selector", title: "Contract Type Selector", description: "Answer 8 questions — get a FAR-cited contract type recommendation." },
  { id: "price-analysis-trainer", title: "Price Analysis Trainer", description: "Practice price analysis techniques with Martin grading." },
  { id: "allowability-tester", title: "Allowability Tester", description: "50 cost scenarios — apply the FAR 31 four-part test." },
  { id: "source-selection-simulator", title: "Source Selection Simulator", description: "Evaluate proposals, set competitive range, and make best value calls." },
  { id: "cost-volume-builder", title: "Cost Volume Builder", description: "Build a full cost volume with automatic rate buildup." },
  { id: "clause-matrix-builder", title: "Clause Matrix Builder", description: "Generate mandatory FAR clause matrix by contract type." },
] as const;

export type ProAcademyToolId = (typeof PRO_ACADEMY_TOOLS)[number]["id"];
