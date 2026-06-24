import type { AssessmentArea, JobReadinessProgress } from "./types";
import { ASSESSMENT_AREAS, JOB_READINESS_SECTIONS } from "./catalog";
import { computeOverallReadiness, getReadinessLevel } from "./scoring";
import { getAllSrAdminLessons } from "./sr-admin";

const STORAGE_KEY = "govcon_job_readiness_progress";

export function createJobReadinessProgress(): JobReadinessProgress {
  return {
    sectionsCompleted: [],
    sectionCertificates: [],
    dayInLifeCompleted: [],
    competencyProgress: {},
    interviewPracticed: [],
    interviewAnswers: {},
    interviewSimScores: [],
    documentsReviewed: [],
    assessmentScores: {},
    roadmapCompleted: [],
    vocabularyMastered: [],
    vocabularyStreak: 0,
    vocabularyCardStats: {},
    scenariosCompleted: [],
    scenarioBestScores: {},
    srAdminProgress: {},
    srAdminCfcmMockScores: [],
    srAdminInterviewPracticed: [],
  };
}

export function loadJobReadinessProgress(): JobReadinessProgress {
  if (typeof window === "undefined") return createJobReadinessProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createJobReadinessProgress();
    return { ...createJobReadinessProgress(), ...JSON.parse(raw) };
  } catch {
    return createJobReadinessProgress();
  }
}

export function saveJobReadinessProgress(progress: JobReadinessProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateJobReadiness(
  updater: (p: JobReadinessProgress) => JobReadinessProgress
): JobReadinessProgress {
  const next = updater(loadJobReadinessProgress());
  saveJobReadinessProgress(next);
  return next;
}

export function getSectionProgress(sectionId: string, progress: JobReadinessProgress) {
  switch (sectionId) {
    case "day-in-life":
      return { done: progress.dayInLifeCompleted.length, total: 8 };
    case "competencies":
      return {
        done: Object.values(progress.competencyProgress).filter((l) => l.lessonDone).length,
        total: 13,
      };
    case "interview":
      return { done: progress.interviewPracticed.length, total: 30 };
    case "documents":
      return { done: progress.documentsReviewed.length, total: 8 };
    case "scenarios":
      return { done: progress.scenariosCompleted.length, total: 20 };
    case "sr-admin":
      return {
        done: Object.values(progress.srAdminProgress).filter((l) => l.lessonDone).length,
        total: getAllSrAdminLessons().length,
      };
    case "vocabulary":
      return { done: progress.vocabularyMastered.length, total: 300 };
    case "roadmap":
      return { done: progress.roadmapCompleted.length, total: 19 };
    default:
      return { done: 0, total: 1 };
  }
}

export function syncSectionCertificate(sectionId: string, progress: JobReadinessProgress): JobReadinessProgress {
  const { done, total } = getSectionProgress(sectionId, progress);
  if (done < total) return progress;
  const certs = progress.sectionCertificates.includes(sectionId)
    ? progress.sectionCertificates
    : [...progress.sectionCertificates, sectionId];
  const sections = progress.sectionsCompleted.includes(sectionId)
    ? progress.sectionsCompleted
    : [...progress.sectionsCompleted, sectionId];
  return { ...progress, sectionCertificates: certs, sectionsCompleted: sections };
}

export function getDashboardSummary(progress: JobReadinessProgress) {
  const overall = computeOverallReadiness(progress);
  const level = getReadinessLevel(overall);
  const sectionsDone = JOB_READINESS_SECTIONS.filter((s) =>
    progress.sectionCertificates.includes(s.id)
  ).length;
  return { overall, level, sectionsDone, totalSections: JOB_READINESS_SECTIONS.length };
}

export function averageAssessmentScore(progress: JobReadinessProgress): number {
  const scores = ASSESSMENT_AREAS.map((a) => progress.assessmentScores[a.id]).filter(
    (s): s is number => s !== undefined
  );
  if (!scores.length) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
