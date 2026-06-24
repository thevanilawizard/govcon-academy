"use client";

import { useCallback } from "react";
import { useGameStore } from "@/lib/game/store";
import type { LearningPath, LearningProgress, NavMode } from "@/lib/learning/types";
import type { LessonSectionId } from "@/lib/learning/types";

export function useLearning() {
  const learningProgress = useGameStore((s) => s.learningProgress);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const setLearningProgress = useGameStore((s) => s.setLearningProgress);
  const selectPath = useGameStore((s) => s.selectLearningPath);
  const setNavMode = useGameStore((s) => s.setLearningNavMode);
  const markSection = useGameStore((s) => s.markLessonSectionComplete);
  const finishLesson = useGameStore((s) => s.completeLearningLesson);
  const skipDay = useGameStore((s) => s.skipLearningDay);
  const awardXp = useGameStore((s) => s.awardLearningXp);
  const earnBadge = useGameStore((s) => s.earnLearningBadge);
  const recordDrill = useGameStore((s) => s.recordLearningDrill);
  const updateFlashcard = useGameStore((s) => s.updateFlashcardProgress);

  const update = useCallback(
    (updater: (p: LearningProgress) => LearningProgress) => {
      const next = updater(learningProgress);
      setLearningProgress(next);
      return next;
    },
    [learningProgress, setLearningProgress]
  );

  const save = useCallback(
    (next: LearningProgress) => {
      setLearningProgress(next);
    },
    [setLearningProgress]
  );

  return {
    progress: learningProgress,
    hydrated: isLoaded,
    update,
    save,
    selectPath: (path: LearningPath) => selectPath(path),
    setNavMode: (mode: NavMode) => setNavMode(mode),
    markSectionComplete: (lessonId: string, sectionId: LessonSectionId) =>
      markSection(lessonId, sectionId),
    completeLesson: (lessonId: string, quizScore: number, minutes?: number, firstTry?: boolean) =>
      finishLesson(lessonId, quizScore, minutes, firstTry),
    skipDay: () => skipDay(),
    awardXp,
    earnBadge,
    recordDrill,
    updateFlashcard,
  };
}
