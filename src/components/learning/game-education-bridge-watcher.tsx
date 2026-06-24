"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { getLesson } from "@/lib/learning/curricula";
import { EducationBridgeCard } from "./education-bridge-card";
import { LessonViewer } from "./lesson-viewer";

export function GameEducationBridgeWatcher() {
  const pendingBridge = useGameStore((s) => s.pendingEducationBridge);
  const dismissBridge = useGameStore((s) => s.dismissEducationBridge);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const setLearningNavMode = useGameStore((s) => s.setLearningNavMode);
  const [lessonId, setLessonId] = useState<string | null>(null);

  const lesson = lessonId ? getLesson(lessonId) : null;

  if (lesson) {
    return (
      <LessonViewer
        lesson={lesson}
        onBack={() => setLessonId(null)}
        onComplete={() => setLessonId(null)}
      />
    );
  }

  if (!pendingBridge) return null;

  return (
    <div className="mb-4">
      <EducationBridgeCard
        event={pendingBridge}
        onOpenLesson={(id) => {
          dismissBridge();
          setLearningNavMode("learn");
          setActiveTab("my-learning");
          setLessonId(id);
        }}
        onDismiss={dismissBridge}
      />
    </div>
  );
}
