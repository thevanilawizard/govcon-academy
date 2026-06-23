import { getFinalExamLesson, TRAINING_MODULES, getAllLessons, getLessonById, getModuleById } from "./catalog";
import type { TrainingLesson, TrainingProgress } from "./types";
import {
  FINAL_EXAM_MAX_ATTEMPTS,
  FINAL_EXAM_PASS_THRESHOLD,
  QUIZ_PASS_THRESHOLD,
} from "./types";

export function createTrainingProgress(): TrainingProgress {
  return {
    lessonsCompleted: [],
    quizBestScores: {},
    moduleCertificates: [],
    programCertificateEarned: false,
    certificateEarned: false,
    finalExamScore: null,
    finalExamPassed: false,
    finalExamAttempts: 0,
    finalExamTopicScores: {},
    realWorldExercisesCompleted: [],
    scenariosCompleted: [],
  };
}

export function normalizeTrainingProgress(
  progress?: Partial<TrainingProgress> | null
): TrainingProgress {
  if (!progress) return createTrainingProgress();
  return {
    lessonsCompleted: progress.lessonsCompleted ?? [],
    quizBestScores: progress.quizBestScores ?? {},
    moduleCertificates: progress.moduleCertificates ?? [],
    programCertificateEarned:
      progress.programCertificateEarned ?? progress.certificateEarned ?? false,
    certificateEarned:
      progress.certificateEarned ?? progress.programCertificateEarned ?? false,
    finalExamScore: progress.finalExamScore ?? null,
    finalExamPassed: progress.finalExamPassed ?? false,
    finalExamAttempts: progress.finalExamAttempts ?? 0,
    finalExamTopicScores: progress.finalExamTopicScores ?? {},
    realWorldExercisesCompleted: progress.realWorldExercisesCompleted ?? [],
    scenariosCompleted: progress.scenariosCompleted ?? [],
  };
}

export function isQuizPassed(score: number): boolean {
  return score >= QUIZ_PASS_THRESHOLD;
}

export function isFinalExamPassed(score: number): boolean {
  return score >= FINAL_EXAM_PASS_THRESHOLD;
}

export function isLessonComplete(lessonId: string, progress: TrainingProgress): boolean {
  const lesson = getLessonById(lessonId);
  if (lesson?.isFinalExam) {
    return progress.finalExamPassed;
  }
  return (
    progress.lessonsCompleted.includes(lessonId) &&
    isQuizPassed(progress.quizBestScores[lessonId] ?? 0)
  );
}

export function isModuleUnlocked(moduleId: string, progress: TrainingProgress): boolean {
  const mod = getModuleById(moduleId);
  if (!mod || mod.number === 1) return true;
  const prev = TRAINING_MODULES.find((m) => m.number === mod.number - 1);
  if (!prev) return true;
  return isModuleComplete(prev.id, progress);
}

export function isLessonUnlocked(lessonId: string, progress: TrainingProgress): boolean {
  const lesson = getLessonById(lessonId);
  if (!lesson) return false;
  if (!isModuleUnlocked(lesson.moduleId, progress)) return false;

  const mod = getModuleById(lesson.moduleId);
  if (!mod) return false;

  const idx = mod.lessons.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;

  const prev = mod.lessons[idx - 1];
  if (prev.isFinalExam) {
    return mod.lessons
      .slice(0, idx)
      .every((l) => !l.isFinalExam && isLessonComplete(l.id, progress));
  }
  return isLessonComplete(prev.id, progress);
}

export function getModuleProgress(moduleId: string, progress: TrainingProgress) {
  const mod = getModuleById(moduleId);
  if (!mod) return { completed: 0, total: 0, percent: 0 };
  const regular = mod.lessons.filter((l) => !l.isFinalExam);
  const total = regular.length;
  const completed = regular.filter((l) => isLessonComplete(l.id, progress)).length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

export function isModuleComplete(moduleId: string, progress: TrainingProgress): boolean {
  const mod = getModuleById(moduleId);
  if (!mod) return false;
  const regular = mod.lessons.filter((l) => !l.isFinalExam);
  return regular.every((l) => isLessonComplete(l.id, progress));
}

export function getProgramProgress(progress: TrainingProgress) {
  const regularLessons = getAllLessons().filter((l) => !l.isFinalExam);
  const totalLessons = regularLessons.length;
  const completedLessons = regularLessons.filter((l) =>
    isLessonComplete(l.id, progress)
  ).length;
  const modulesCertified = progress.moduleCertificates.length;
  return {
    totalLessons,
    completedLessons,
    modulesCertified,
    totalModules: TRAINING_MODULES.length,
    percent: totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0,
    finalExamPassed: progress.finalExamPassed,
  };
}

function syncCertificates(progress: TrainingProgress): TrainingProgress {
  let moduleCertificates = [...progress.moduleCertificates];
  for (const mod of TRAINING_MODULES) {
    if (
      isModuleComplete(mod.id, progress) &&
      !moduleCertificates.includes(mod.id)
    ) {
      moduleCertificates = [...moduleCertificates, mod.id];
    }
  }

  const allModulesDone = moduleCertificates.length === TRAINING_MODULES.length;
  const programCertificateEarned = allModulesDone && progress.finalExamPassed;

  return {
    ...progress,
    moduleCertificates,
    programCertificateEarned,
    certificateEarned: programCertificateEarned,
  };
}

export function recordLessonQuiz(
  progress: TrainingProgress,
  lessonId: string,
  score: number
): TrainingProgress {
  const lesson = getLessonById(lessonId);
  if (!lesson || lesson.isFinalExam) return progress;

  const prevBest = progress.quizBestScores[lessonId] ?? 0;
  const quizBestScores = {
    ...progress.quizBestScores,
    [lessonId]: Math.max(prevBest, score),
  };

  let lessonsCompleted = progress.lessonsCompleted;
  if (isQuizPassed(score) && !lessonsCompleted.includes(lessonId)) {
    lessonsCompleted = [...lessonsCompleted, lessonId];
  }

  return syncCertificates({ ...progress, lessonsCompleted, quizBestScores });
}

export function recordFinalExam(
  progress: TrainingProgress,
  score: number,
  topicScores: TrainingProgress["finalExamTopicScores"]
): TrainingProgress {
  const attempts = progress.finalExamAttempts + 1;
  const passed = isFinalExamPassed(score);
  const examLesson = getFinalExamLesson();
  const examId = examLesson?.id ?? "certification-6-4";
  const updated = syncCertificates({
    ...progress,
    finalExamAttempts: attempts,
    finalExamScore: Math.max(progress.finalExamScore ?? 0, score),
    finalExamPassed: passed || progress.finalExamPassed,
    finalExamTopicScores: topicScores,
    lessonsCompleted: passed
      ? Array.from(new Set([...progress.lessonsCompleted, examId]))
      : progress.lessonsCompleted,
  });
  return updated;
}

export function canAttemptFinalExam(progress: TrainingProgress): boolean {
  if (progress.finalExamPassed) return false;
  return progress.finalExamAttempts < FINAL_EXAM_MAX_ATTEMPTS;
}

export function mustReviewModules(progress: TrainingProgress): boolean {
  return (
    !progress.finalExamPassed &&
    progress.finalExamAttempts >= FINAL_EXAM_MAX_ATTEMPTS
  );
}

export function markScenarioComplete(
  progress: TrainingProgress,
  lessonId: string
): TrainingProgress {
  if (progress.scenariosCompleted.includes(lessonId)) return progress;
  return {
    ...progress,
    scenariosCompleted: [...progress.scenariosCompleted, lessonId],
  };
}

export function markRealWorldExerciseComplete(
  progress: TrainingProgress,
  lessonId: string
): TrainingProgress {
  if (progress.realWorldExercisesCompleted.includes(lessonId)) return progress;
  return {
    ...progress,
    realWorldExercisesCompleted: [...progress.realWorldExercisesCompleted, lessonId],
  };
}

export function getNextRecommendedLesson(progress: TrainingProgress): TrainingLesson | null {
  for (const mod of TRAINING_MODULES) {
    if (!isModuleUnlocked(mod.id, progress)) continue;
    for (const l of mod.lessons) {
      if (l.isFinalExam) {
        if (isModuleComplete(mod.id, progress) && !progress.finalExamPassed) return l;
        continue;
      }
      if (!isLessonComplete(l.id, progress)) return l;
    }
  }
  return null;
}

export function computeReadinessFromTraining(progress: TrainingProgress): number {
  const pg = getProgramProgress(progress);
  const lessonPct = pg.percent * 0.5;
  const certPct = (pg.modulesCertified / pg.totalModules) * 30;
  const examPct = progress.finalExamPassed ? 20 : progress.finalExamScore
    ? (progress.finalExamScore / 100) * 15
    : 0;
  return Math.min(100, Math.round(lessonPct + certPct + examPct));
}
