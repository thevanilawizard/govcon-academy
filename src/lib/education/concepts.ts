import {
  getNextRecommendedLesson,
  getProgramProgress,
  createTrainingProgress,
  normalizeTrainingProgress,
  recordLessonQuiz,
} from "@/lib/education/training/progress";
import { TRAINING_MODULES } from "@/lib/education/training/catalog";
import type { TrainingProgress } from "@/lib/education/training/types";

export const EDUCATION_CONCEPTS = [
  { id: "sam_registration", label: "SAM.gov Registration", category: "setup" },
  { id: "naics_selection", label: "NAICS Code Selection", category: "setup" },
  { id: "set_aside_types", label: "Set-Aside Types", category: "setup" },
  { id: "solicitation_reading", label: "Reading Solicitations", category: "bidding" },
  { id: "bid_no_bid", label: "Bid/No-Bid Framework", category: "bidding" },
  { id: "lpta_eval", label: "LPTA Evaluation", category: "bidding" },
  { id: "best_value_eval", label: "Best Value Evaluation", category: "bidding" },
  { id: "ffp_pricing", label: "FFP Pricing", category: "bidding" },
  { id: "cpars_system", label: "CPARS System", category: "execution" },
  { id: "scope_creep", label: "Scope Creep & Mods", category: "execution" },
  { id: "cash_flow_lag", label: "Payment Lag (Net-30/90)", category: "execution" },
  { id: "far_compliance", label: "FAR Compliance", category: "execution" },
  { id: "option_years", label: "Option Years", category: "execution" },
  { id: "key_personnel", label: "Key Personnel Clause", category: "execution" },
  { id: "stop_work", label: "Stop-Work Orders", category: "execution" },
  { id: "debrief_rights", label: "Debrief Rights (FAR 15.506)", category: "bidding" },
  { id: "sources_sought", label: "Sources Sought Notices", category: "bd" },
] as const;

export const EDUCATION_SKILLS = [
  { id: "bid_no_bid", label: "Bid/No-Bid Analysis", unlockConcepts: ["bid_no_bid", "solicitation_reading"] },
  { id: "proposal_writing", label: "Proposal Writing", unlockConcepts: ["lpta_eval", "best_value_eval", "ffp_pricing"] },
  { id: "contract_execution", label: "Contract Execution", unlockConcepts: ["cpars_system", "scope_creep", "cash_flow_lag", "key_personnel"] },
  { id: "compliance", label: "FAR Compliance", unlockConcepts: ["far_compliance"] },
  { id: "market_intel", label: "Market Intelligence", unlockConcepts: ["sources_sought"] },
] as const;

export type ConceptId = (typeof EDUCATION_CONCEPTS)[number]["id"];
export type SkillId = (typeof EDUCATION_SKILLS)[number]["id"];

export interface EducationProgress {
  conceptsLearned: ConceptId[];
  skillsUnlocked: SkillId[];
  goodDecisions: number;
  totalDecisions: number;
  training: TrainingProgress;
}

export function createEducationProgress(): EducationProgress {
  return {
    conceptsLearned: [],
    skillsUnlocked: [],
    goodDecisions: 0,
    totalDecisions: 0,
    training: createTrainingProgress(),
  };
}

export function normalizeEducationProgress(
  progress?: Partial<EducationProgress> | null
): EducationProgress {
  const base = createEducationProgress();
  if (!progress) return base;
  return {
    conceptsLearned: (progress.conceptsLearned ?? base.conceptsLearned) as ConceptId[],
    skillsUnlocked: (progress.skillsUnlocked ?? base.skillsUnlocked) as SkillId[],
    goodDecisions: progress.goodDecisions ?? 0,
    totalDecisions: progress.totalDecisions ?? 0,
    training: normalizeTrainingProgress(progress.training),
  };
}

export function computeReadinessScore(progress: EducationProgress): number {
  const conceptPct = (progress.conceptsLearned.length / EDUCATION_CONCEPTS.length) * 40;
  const skillPct = (progress.skillsUnlocked.length / EDUCATION_SKILLS.length) * 15;
  const trainingPct = getProgramProgress(progress.training).percent * 0.35;
  const decisionPct =
    progress.totalDecisions > 0
      ? (progress.goodDecisions / progress.totalDecisions) * 10
      : 0;
  return Math.min(100, Math.round(conceptPct + skillPct + trainingPct + decisionPct));
}

export function getStudyNextRecommendation(
  progress: EducationProgress,
  quarter: number,
  hasContracts: boolean
): string {
  const nextLesson = getNextRecommendedLesson(progress.training);
  if (nextLesson) {
    const mod = TRAINING_MODULES.find((m) => m.id === nextLesson.moduleId);
    return `Academy: Complete Module ${mod?.number ?? ""} — Lesson ${nextLesson.number} "${nextLesson.title}" to earn your module certificate.`;
  }
  if (progress.training.programCertificateEarned) {
    return "Congratulations — you've completed the full Contracts Manager training program. Add your program certificate to your professional portfolio.";
  }
  if (!progress.conceptsLearned.includes("sam_registration")) {
    return "Review SAM.gov registration requirements — every contract starts with an active registration.";
  }
  if (quarter <= 2 && !progress.conceptsLearned.includes("bid_no_bid")) {
    return "Study the bid/no-bid framework before your next pursuit — not bidding is often the right answer.";
  }
  if (hasContracts && !progress.conceptsLearned.includes("cash_flow_lag")) {
    return "Learn Net-30/90 payment lag — submit SF-1034 invoices early and understand your line of credit.";
  }
  if (!progress.conceptsLearned.includes("cpars_system") && hasContracts) {
    return "Read the CPARS 5-point scale — your performance rating follows you for 3 years on every bid.";
  }
  if (!progress.conceptsLearned.includes("debrief_rights")) {
    return "Learn FAR 15.506 debrief rights — request a debrief after every loss for free competitive intel.";
  }
  return "Explore Sources Sought notices on SAM.gov in your NAICS codes — shape requirements before RFPs drop.";
}

export function recordConceptLearned(
  progress: EducationProgress,
  conceptId: ConceptId
): EducationProgress {
  if (progress.conceptsLearned.includes(conceptId)) return progress;
  const conceptsLearned = [...progress.conceptsLearned, conceptId];
  const skillsUnlocked = [...progress.skillsUnlocked];
  for (const skill of EDUCATION_SKILLS) {
    if (skillsUnlocked.includes(skill.id)) continue;
    if (skill.unlockConcepts.every((c) => conceptsLearned.includes(c as ConceptId))) {
      skillsUnlocked.push(skill.id);
    }
  }
  return { ...progress, conceptsLearned, skillsUnlocked };
}

export function recordTrainingQuiz(
  progress: EducationProgress,
  lessonId: string,
  score: number
): EducationProgress {
  return {
    ...progress,
    training: recordLessonQuiz(progress.training, lessonId, score),
  };
}
