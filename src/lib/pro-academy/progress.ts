import {
  PRO_FINAL_EXAM_MAX_ATTEMPTS,
  PRO_FINAL_EXAM_THRESHOLD,
  PRO_LESSON_PASS_THRESHOLD,
  PRO_MODULE_ASSESSMENT_THRESHOLD,
  type ProAcademyProgress,
} from "./types";
import {
  getAllProLessons,
  getCumulativeExams,
  getModuleAssessments,
  getModulesByTrack,
  getProLessonById,
  getProModuleById,
  PRO_ACADEMY_MODULES,
} from "./catalog";

const STORAGE_KEY = "govcon_pro_academy_progress";

export function createProAcademyProgress(): ProAcademyProgress {
  return {
    lessonsCompleted: [],
    quizBestScores: {},
    moduleCertificates: [],
    moduleAssessmentScores: {},
    moduleAssessmentsPassed: [],
    cumulativeExamsPassed: [],
    cumulativeExamScores: {},
    finalExamScore: null,
    finalExamPassed: false,
    finalExamAttempts: 0,
    finalExamTopicScores: {},
    bookmarkedClauses: [],
    toolHistory: {},
    quizHistory: [],
    certificationEarned: false,
  };
}

export function loadProAcademyProgress(): ProAcademyProgress {
  if (typeof window === "undefined") return createProAcademyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createProAcademyProgress();
    return { ...createProAcademyProgress(), ...JSON.parse(raw) };
  } catch {
    return createProAcademyProgress();
  }
}

export function saveProAcademyProgress(progress: ProAcademyProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateProAcademyProgress(
  updater: (p: ProAcademyProgress) => ProAcademyProgress
): ProAcademyProgress {
  const next = updater(loadProAcademyProgress());
  saveProAcademyProgress(next);
  return next;
}

export function isProQuizPassed(score: number): boolean {
  return score >= PRO_LESSON_PASS_THRESHOLD;
}

export function isModuleAssessmentPassed(score: number): boolean {
  return score >= PRO_MODULE_ASSESSMENT_THRESHOLD;
}

export function isProLessonComplete(lessonId: string, progress: ProAcademyProgress): boolean {
  return (
    progress.lessonsCompleted.includes(lessonId) &&
    isProQuizPassed(progress.quizBestScores[lessonId] ?? 0)
  );
}

export function isProModuleUnlocked(moduleId: string, progress: ProAcademyProgress): boolean {
  const mod = getProModuleById(moduleId);
  if (!mod) return false;
  const trackModules = getModulesByTrack(mod.track);
  const idx = trackModules.findIndex((m) => m.id === moduleId);
  if (idx <= 0) return true;
  const prev = trackModules[idx - 1];
  return isProModuleComplete(prev.id, progress) && isModuleAssessmentPassedForModule(prev.id, progress);
}

function isModuleAssessmentPassedForModule(moduleId: string, progress: ProAcademyProgress): boolean {
  const assessment = getModuleAssessments().find((a) => a.moduleId === moduleId);
  if (!assessment) return true;
  return progress.moduleAssessmentsPassed.includes(assessment.id);
}

export function isProLessonUnlocked(lessonId: string, progress: ProAcademyProgress): boolean {
  const lesson = getProLessonById(lessonId);
  if (!lesson) return false;
  if (!isProModuleUnlocked(lesson.moduleId, progress)) return false;
  const mod = getProModuleById(lesson.moduleId);
  if (!mod) return false;
  const idx = mod.lessons.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;
  return isProLessonComplete(mod.lessons[idx - 1].id, progress);
}

export function isProModuleComplete(moduleId: string, progress: ProAcademyProgress): boolean {
  const mod = getProModuleById(moduleId);
  if (!mod) return false;
  return mod.lessons.every((l) => isProLessonComplete(l.id, progress));
}

export function getProModuleProgress(moduleId: string, progress: ProAcademyProgress) {
  const mod = getProModuleById(moduleId);
  if (!mod) return { completed: 0, total: 0, percent: 0 };
  const total = mod.lessons.length;
  const completed = mod.lessons.filter((l) => isProLessonComplete(l.id, progress)).length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

export function getTrackProgress(track: "far" | "pricing" | "acquisition", progress: ProAcademyProgress) {
  const modules = PRO_ACADEMY_MODULES.filter((m) => m.track === track);
  const lessons = modules.flatMap((m) => m.lessons);
  const completed = lessons.filter((l) => isProLessonComplete(l.id, progress)).length;
  return {
    modules: modules.length,
    modulesComplete: modules.filter((m) => isProModuleComplete(m.id, progress)).length,
    lessons: lessons.length,
    completed,
    percent: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
  };
}

function syncCertificates(progress: ProAcademyProgress): ProAcademyProgress {
  let moduleCertificates = [...progress.moduleCertificates];
  for (const mod of PRO_ACADEMY_MODULES) {
    if (
      isProModuleComplete(mod.id, progress) &&
      isModuleAssessmentPassedForModule(mod.id, progress) &&
      !moduleCertificates.includes(mod.id)
    ) {
      moduleCertificates = [...moduleCertificates, mod.id];
    }
  }
  const allDone = moduleCertificates.length === PRO_ACADEMY_MODULES.length;
  const certificationEarned = allDone && progress.finalExamPassed;
  return { ...progress, moduleCertificates, certificationEarned };
}

export function recordProLessonQuiz(
  progress: ProAcademyProgress,
  lessonId: string,
  score: number
): ProAcademyProgress {
  const prevBest = progress.quizBestScores[lessonId] ?? 0;
  const quizBestScores = { ...progress.quizBestScores, [lessonId]: Math.max(prevBest, score) };
  let lessonsCompleted = progress.lessonsCompleted;
  if (isProQuizPassed(score) && !lessonsCompleted.includes(lessonId)) {
    lessonsCompleted = [...lessonsCompleted, lessonId];
  }
  const quizHistory = [
    ...progress.quizHistory,
    { lessonId, score, at: new Date().toISOString() },
  ].slice(-500);
  return syncCertificates({ ...progress, lessonsCompleted, quizBestScores, quizHistory });
}

export function recordModuleAssessment(
  progress: ProAcademyProgress,
  assessmentId: string,
  score: number
): ProAcademyProgress {
  const prev = progress.moduleAssessmentScores[assessmentId] ?? 0;
  const moduleAssessmentScores = {
    ...progress.moduleAssessmentScores,
    [assessmentId]: Math.max(prev, score),
  };
  let moduleAssessmentsPassed = progress.moduleAssessmentsPassed;
  if (isModuleAssessmentPassed(score) && !moduleAssessmentsPassed.includes(assessmentId)) {
    moduleAssessmentsPassed = [...moduleAssessmentsPassed, assessmentId];
  }
  return syncCertificates({ ...progress, moduleAssessmentScores, moduleAssessmentsPassed });
}

export function recordCumulativeExam(
  progress: ProAcademyProgress,
  examId: string,
  score: number
): ProAcademyProgress {
  const prev = progress.cumulativeExamScores[examId] ?? 0;
  const cumulativeExamScores = { ...progress.cumulativeExamScores, [examId]: Math.max(prev, score) };
  let cumulativeExamsPassed = progress.cumulativeExamsPassed;
  if (score >= PRO_MODULE_ASSESSMENT_THRESHOLD && !cumulativeExamsPassed.includes(examId)) {
    cumulativeExamsPassed = [...cumulativeExamsPassed, examId];
  }
  return syncCertificates({ ...progress, cumulativeExamScores, cumulativeExamsPassed });
}

export function recordProFinalExam(
  progress: ProAcademyProgress,
  score: number,
  topicScores: ProAcademyProgress["finalExamTopicScores"]
): ProAcademyProgress {
  const attempts = progress.finalExamAttempts + 1;
  const passed = score >= PRO_FINAL_EXAM_THRESHOLD;
  return syncCertificates({
    ...progress,
    finalExamAttempts: attempts,
    finalExamScore: Math.max(progress.finalExamScore ?? 0, score),
    finalExamPassed: passed || progress.finalExamPassed,
    finalExamTopicScores: topicScores,
  });
}

export function canAttemptProFinalExam(progress: ProAcademyProgress): boolean {
  if (progress.finalExamPassed) return false;
  return progress.finalExamAttempts < PRO_FINAL_EXAM_MAX_ATTEMPTS;
}

export function computeOverallProReadiness(progress: ProAcademyProgress): number {
  const lessons = getAllProLessons();
  const lessonPct = (lessons.filter((l) => isProLessonComplete(l.id, progress)).length / lessons.length) * 50;
  const certPct = (progress.moduleCertificates.length / PRO_ACADEMY_MODULES.length) * 25;
  const examPct = progress.finalExamPassed ? 25 : progress.finalExamScore ? (progress.finalExamScore / 100) * 20 : 0;
  return Math.min(100, Math.round(lessonPct + certPct + examPct));
}

export function toggleBookmarkedClause(progress: ProAcademyProgress, clauseId: string): ProAcademyProgress {
  const bookmarked = progress.bookmarkedClauses.includes(clauseId)
    ? progress.bookmarkedClauses.filter((c) => c !== clauseId)
    : [...progress.bookmarkedClauses, clauseId];
  return { ...progress, bookmarkedClauses: bookmarked };
}

export function recordToolUse(progress: ProAcademyProgress, toolId: string, payload: unknown): ProAcademyProgress {
  const history = progress.toolHistory[toolId] ?? [];
  return {
    ...progress,
    toolHistory: {
      ...progress.toolHistory,
      [toolId]: [...history, { at: new Date().toISOString(), payload }].slice(-50),
    },
  };
}

export { STORAGE_KEY };

export interface TrackProgressSlice {
  lessonsCompleted: string[];
  quizBestScores: Record<string, number>;
  moduleCertificates: string[];
  moduleAssessmentScores: Record<string, number>;
  moduleAssessmentsPassed: string[];
  cumulativeExamsPassed: string[];
  cumulativeExamScores: Record<string, number>;
}

export interface ProAcademyDbPayload {
  far_progress: TrackProgressSlice | null;
  pricing_progress: TrackProgressSlice | null;
  acquisition_progress: TrackProgressSlice | null;
  quiz_history: ProAcademyProgress["quizHistory"] | null;
  certification_scores: {
    finalExamScore: number | null;
    finalExamPassed: boolean;
    finalExamAttempts: number;
    finalExamTopicScores: ProAcademyProgress["finalExamTopicScores"];
    certificationEarned: boolean;
  } | null;
  bookmarked_clauses: string[] | null;
  tool_history: ProAcademyProgress["toolHistory"] | null;
}

function emptyTrackSlice(): TrackProgressSlice {
  return {
    lessonsCompleted: [],
    quizBestScores: {},
    moduleCertificates: [],
    moduleAssessmentScores: {},
    moduleAssessmentsPassed: [],
    cumulativeExamsPassed: [],
    cumulativeExamScores: {},
  };
}

function extractTrackSlice(
  progress: ProAcademyProgress,
  track: "far" | "pricing" | "acquisition"
): TrackProgressSlice {
  const trackModuleIds = new Set(getModulesByTrack(track).map((m) => m.id));
  const trackLessonIds = new Set(
    getModulesByTrack(track).flatMap((m) => m.lessons.map((l) => l.id))
  );
  const trackAssessmentIds = new Set(
    getModuleAssessments()
      .filter((a) => trackModuleIds.has(a.moduleId))
      .map((a) => a.id)
  );
  const trackCumulativeIds = new Set(
    getCumulativeExams()
      .filter((e) => e.afterModuleIds.every((id) => trackModuleIds.has(id)))
      .map((e) => e.id)
  );

  const quizBestScores: Record<string, number> = {};
  for (const [id, score] of Object.entries(progress.quizBestScores)) {
    if (trackLessonIds.has(id)) quizBestScores[id] = score;
  }
  const moduleAssessmentScores: Record<string, number> = {};
  for (const [id, score] of Object.entries(progress.moduleAssessmentScores)) {
    if (trackAssessmentIds.has(id)) moduleAssessmentScores[id] = score;
  }
  const cumulativeExamScores: Record<string, number> = {};
  for (const [id, score] of Object.entries(progress.cumulativeExamScores)) {
    if (trackCumulativeIds.has(id)) cumulativeExamScores[id] = score;
  }

  return {
    lessonsCompleted: progress.lessonsCompleted.filter((id) => trackLessonIds.has(id)),
    quizBestScores,
    moduleCertificates: progress.moduleCertificates.filter((id) => trackModuleIds.has(id)),
    moduleAssessmentScores,
    moduleAssessmentsPassed: progress.moduleAssessmentsPassed.filter((id) =>
      trackAssessmentIds.has(id)
    ),
    cumulativeExamsPassed: progress.cumulativeExamsPassed.filter((id) =>
      trackCumulativeIds.has(id)
    ),
    cumulativeExamScores,
  };
}

export function splitProgressForDb(progress: ProAcademyProgress): ProAcademyDbPayload {
  return {
    far_progress: extractTrackSlice(progress, "far"),
    pricing_progress: extractTrackSlice(progress, "pricing"),
    acquisition_progress: extractTrackSlice(progress, "acquisition"),
    quiz_history: progress.quizHistory,
    certification_scores: {
      finalExamScore: progress.finalExamScore,
      finalExamPassed: progress.finalExamPassed,
      finalExamAttempts: progress.finalExamAttempts,
      finalExamTopicScores: progress.finalExamTopicScores,
      certificationEarned: progress.certificationEarned,
    },
    bookmarked_clauses: progress.bookmarkedClauses,
    tool_history: progress.toolHistory,
  };
}

function uniq(arr: string[]): string[] {
  return Array.from(new Set(arr));
}

function mergeTrackSlice(base: TrackProgressSlice, slice: TrackProgressSlice | null | undefined) {
  if (!slice) return;
  base.lessonsCompleted = uniq([...base.lessonsCompleted, ...slice.lessonsCompleted]);
  base.quizBestScores = { ...base.quizBestScores, ...slice.quizBestScores };
  base.moduleCertificates = uniq([...base.moduleCertificates, ...slice.moduleCertificates]);
  base.moduleAssessmentScores = { ...base.moduleAssessmentScores, ...slice.moduleAssessmentScores };
  base.moduleAssessmentsPassed = uniq([...base.moduleAssessmentsPassed, ...slice.moduleAssessmentsPassed]);
  base.cumulativeExamsPassed = uniq([...base.cumulativeExamsPassed, ...slice.cumulativeExamsPassed]);
  base.cumulativeExamScores = { ...base.cumulativeExamScores, ...slice.cumulativeExamScores };
}

export function mergeProgressFromDb(payload: Partial<ProAcademyDbPayload>): ProAcademyProgress {
  const base = createProAcademyProgress();
  const merged: TrackProgressSlice = emptyTrackSlice();
  mergeTrackSlice(merged, payload.far_progress ?? undefined);
  mergeTrackSlice(merged, payload.pricing_progress ?? undefined);
  mergeTrackSlice(merged, payload.acquisition_progress ?? undefined);

  const cert = payload.certification_scores;
  return syncCertificates({
    ...base,
    lessonsCompleted: merged.lessonsCompleted,
    quizBestScores: merged.quizBestScores,
    moduleCertificates: merged.moduleCertificates,
    moduleAssessmentScores: merged.moduleAssessmentScores,
    moduleAssessmentsPassed: merged.moduleAssessmentsPassed,
    cumulativeExamsPassed: merged.cumulativeExamsPassed,
    cumulativeExamScores: merged.cumulativeExamScores,
    quizHistory: payload.quiz_history ?? base.quizHistory,
    bookmarkedClauses: payload.bookmarked_clauses ?? base.bookmarkedClauses,
    toolHistory: payload.tool_history ?? base.toolHistory,
    finalExamScore: cert?.finalExamScore ?? base.finalExamScore,
    finalExamPassed: cert?.finalExamPassed ?? base.finalExamPassed,
    finalExamAttempts: cert?.finalExamAttempts ?? base.finalExamAttempts,
    finalExamTopicScores: cert?.finalExamTopicScores ?? base.finalExamTopicScores,
    certificationEarned: cert?.certificationEarned ?? base.certificationEarned,
  });
}

export function hydrateProAcademyFromDb(payload: Partial<ProAcademyDbPayload>) {
  const local = loadProAcademyProgress();
  const fromDb = mergeProgressFromDb(payload);
  const merged = syncCertificates({
    ...fromDb,
    lessonsCompleted: uniq([...fromDb.lessonsCompleted, ...local.lessonsCompleted]),
    quizBestScores: { ...local.quizBestScores, ...fromDb.quizBestScores },
    moduleCertificates: uniq([...local.moduleCertificates, ...fromDb.moduleCertificates]),
    moduleAssessmentScores: { ...local.moduleAssessmentScores, ...fromDb.moduleAssessmentScores },
    moduleAssessmentsPassed: uniq([...local.moduleAssessmentsPassed, ...fromDb.moduleAssessmentsPassed]),
    cumulativeExamsPassed: uniq([...local.cumulativeExamsPassed, ...fromDb.cumulativeExamsPassed]),
    cumulativeExamScores: { ...local.cumulativeExamScores, ...fromDb.cumulativeExamScores },
    quizHistory: [...local.quizHistory, ...fromDb.quizHistory].slice(-500),
    bookmarkedClauses: uniq([...local.bookmarkedClauses, ...fromDb.bookmarkedClauses]),
    toolHistory: { ...local.toolHistory, ...fromDb.toolHistory },
    finalExamScore: Math.max(local.finalExamScore ?? 0, fromDb.finalExamScore ?? 0) || null,
    finalExamPassed: local.finalExamPassed || fromDb.finalExamPassed,
    finalExamAttempts: Math.max(local.finalExamAttempts, fromDb.finalExamAttempts),
    finalExamTopicScores: { ...local.finalExamTopicScores, ...fromDb.finalExamTopicScores },
  });
  saveProAcademyProgress(merged);
  return merged;
}
