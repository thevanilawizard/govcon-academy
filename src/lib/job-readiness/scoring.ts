import type { AssessmentArea, JobReadinessProgress } from "./types";
import { COMPANY_PROFILES } from "./companies";
import { averageAssessmentScore } from "./progress";

export function getReadinessLevel(score: number): {
  label: string;
  description: string;
} {
  if (score >= 86) return { label: "Expert level", description: "Ready for Director of Contracts roles" };
  if (score >= 76) return { label: "Senior ready", description: "Apply for Senior Contracts Manager roles" };
  if (score >= 61) return { label: "Mid-level ready", description: "Apply for Contracts Manager I/II roles" };
  if (score >= 41) return { label: "Entry level ready", description: "Apply for Contracts Administrator roles" };
  return { label: "Not ready", description: "Complete Modules 1-3 and core Job Readiness sections before applying" };
}

export function computeOverallReadiness(progress: JobReadinessProgress): number {
  const assessment = averageAssessmentScore(progress);
  const dayLife = (progress.dayInLifeCompleted.length / 8) * 100;
  const competencies =
    (Object.values(progress.competencyProgress).filter((l) => l.lessonDone).length / 13) * 100;
  const interview = (progress.interviewPracticed.length / 30) * 100;
  const docs = (progress.documentsReviewed.length / 8) * 100;
  const vocab = (progress.vocabularyMastered.length / 300) * 100;
  const scenarios = (progress.scenariosCompleted.length / 20) * 100;
  const simAvg = progress.interviewSimScores.length
    ? progress.interviewSimScores.reduce((a, b) => a + b, 0) / progress.interviewSimScores.length
    : 0;

  const weighted =
    assessment * 0.25 +
    competencies * 0.2 +
    scenarios * 0.15 +
    interview * 0.1 +
    simAvg * 10 * 0.1 +
    dayLife * 0.05 +
    docs * 0.05 +
    vocab * 0.1;

  return Math.min(100, Math.round(weighted));
}

export function computeCompanyReadiness(
  companyId: string,
  progress: JobReadinessProgress
): { score: number; strengths: AssessmentArea[]; gaps: AssessmentArea[]; lessons: string[] } {
  const company = COMPANY_PROFILES.find((c) => c.id === companyId);
  if (!company) return { score: 0, strengths: [], gaps: [], lessons: [] };

  const scores = progress.assessmentScores;
  let total = 0;
  const strengths: AssessmentArea[] = [];
  const gaps: AssessmentArea[] = [];

  company.requiredSkills.forEach((skill) => {
    const s = scores[skill] ?? 40;
    total += s;
    if (s >= 75) strengths.push(skill);
    else gaps.push(skill);
  });

  const score = Math.round(total / company.requiredSkills.length);
  const lessons = gaps.map((g) => {
    const map: Record<AssessmentArea, string> = {
      far: "Complete Competency: Contract Law + Day in Life mods module",
      dfars: "Education Center Module 3 (DFARS) + Export Controls lesson",
      administration: "Competency: Contract Administration + Scenarios 1-4",
      pricing: "Competency: Cost Volume Development + Rate Calculator tool",
      subcontracts: "Competency: Subcontract Management + Document 8",
      legal: "Competency: Legal and Compliance + Scenario 10 (ITAR)",
      negotiation: "Competency: Contract Negotiation + Interview Q22",
      documents: "Document Library review + Contract Review tool",
      financial: "Education Module 7 + Incurred Cost document",
      interview: "Interview Prep — practice all 30 questions",
    };
    return map[g];
  });

  return { score, strengths, gaps, lessons: Array.from(new Set(lessons)) };
}

export const SALARY_BANDS = [
  { role: "Contracts Administrator (0-3 yrs)", range: "$45,000 – $65,000" },
  { role: "Contracts Manager I (3-5 yrs)", range: "$65,000 – $85,000" },
  { role: "Contracts Manager II (5-8 yrs)", range: "$85,000 – $110,000" },
  { role: "Senior Contracts Manager (8-12 yrs)", range: "$110,000 – $140,000" },
  { role: "Director of Contracts (12+ yrs)", range: "$140,000 – $200,000+" },
  { role: "VP / Chief Contracts Officer", range: "$180,000 – $300,000+" },
];

export function predictSalaryBand(score: number): string {
  if (score >= 86) return SALARY_BANDS[4].range;
  if (score >= 76) return SALARY_BANDS[3].range;
  if (score >= 61) return SALARY_BANDS[2].range;
  if (score >= 41) return SALARY_BANDS[1].range;
  return SALARY_BANDS[0].range;
}
