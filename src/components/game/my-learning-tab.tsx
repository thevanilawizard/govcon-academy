"use client";

import { useState } from "react";
import { getLesson, getTodaysLesson } from "@/lib/learning/curricula";
import { useLearning } from "@/hooks/use-learning";
import { MyLearningDashboard } from "@/components/learning/my-learning-dashboard";
import { LessonViewer } from "@/components/learning/lesson-viewer";
import { DailyDrillRunner } from "@/components/learning/daily-drill-runner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MyLearningTab({ subTab = "dashboard" }: { subTab?: string }) {
  const { progress } = useLearning();
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [view, setView] = useState<"dashboard" | "drill">("dashboard");

  const path = progress.learningPath;
  const todayId =
    path && getTodaysLesson(path, progress.currentWeek, progress.currentDay)?.id;
  const lesson = activeLessonId ? getLesson(activeLessonId) : null;

  if (lesson) {
    return (
      <LessonViewer
        lesson={lesson}
        onBack={() => setActiveLessonId(null)}
        onComplete={() => setActiveLessonId(null)}
        onOpenGlossary={() => {
          /* parent game page routes to tools/glossary */
        }}
      />
    );
  }

  if (subTab === "todays-lesson" && todayId) {
    const todayLesson = getLesson(todayId);
    if (todayLesson) {
      return (
        <LessonViewer
          lesson={todayLesson}
          onBack={() => setActiveLessonId(null)}
          onComplete={() => setActiveLessonId(null)}
        />
      );
    }
  }

  if (subTab === "drill" || view === "drill") {
    return <DailyDrillRunner onComplete={() => setView("dashboard")} />;
  }

  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="drill">Daily Drill</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <MyLearningDashboard
          onContinueLesson={() => todayId && setActiveLessonId(todayId)}
          onOpenLesson={setActiveLessonId}
        />
      </TabsContent>
      <TabsContent value="drill">
        <DailyDrillRunner />
      </TabsContent>
    </Tabs>
  );
}
