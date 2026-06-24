"use client";

import { useState } from "react";
import Link from "next/link";
import { useLearning } from "@/hooks/use-learning";
import { useGameStore } from "@/lib/game/store";
import { getCurriculum, getTodaysLesson } from "@/lib/learning/curricula";
import {
  averageQuizScore,
  getTrackCompletionPercent,
  getLevelInfo,
} from "@/lib/learning/progress";
import { getPathLabel } from "@/lib/learning/game-bridges";
import { LESSON_SECTIONS } from "@/lib/learning/types";
import { KnowledgeMap } from "@/components/learning/knowledge-map";
import { ConceptOfTheDay } from "@/components/learning/concept-of-the-day";
import { DailyDrillRunner } from "@/components/learning/daily-drill-runner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function MyLearningDashboard({
  onContinueLesson,
  onOpenLesson,
}: {
  onContinueLesson?: () => void;
  onOpenLesson?: (lessonId: string) => void;
}) {
  const { progress, skipDay } = useLearning();
  const setNavMode = useGameStore((s) => s.setLearningNavMode);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const [showDrill, setShowDrill] = useState(false);

  const path = progress.learningPath;
  if (!path) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-sm text-muted-foreground">
          Select a learning path to begin your program.
        </CardContent>
      </Card>
    );
  }

  const lessons = getCurriculum(path);
  const today = getTodaysLesson(path, progress.currentWeek, progress.currentDay) ?? lessons[0];
  const lp = progress.lessonProgress[today?.id ?? ""];
  const sectionsDone = lp?.sectionsCompleted?.length ?? 0;
  const lessonPct = today ? Math.round((sectionsDone / LESSON_SECTIONS.length) * 100) : 0;
  const trackPct = getTrackCompletionPercent(progress, lessons.length);
  const levelInfo = getLevelInfo(progress.xpPoints);
  const completedCount = Object.values(progress.lessonProgress).filter((l) => l.completedAt).length;
  const hours = Math.floor(progress.totalLearningMinutes / 60);
  const mins = progress.totalLearningMinutes % 60;

  if (showDrill) {
    return <DailyDrillRunner onComplete={() => setShowDrill(false)} />;
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader className="pb-2">
          <Badge className="w-fit mb-1">Today&apos;s Lesson</Badge>
          <CardTitle className="text-lg">{today?.title ?? "No lesson scheduled"}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Week {progress.currentWeek}, Day {progress.currentDay} of {getPathLabel(path)} ·{" "}
            {today?.minutes ?? 0} min
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Lesson progress</span>
              <span>{lessonPct}%</span>
            </div>
            <Progress value={lessonPct} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => (onContinueLesson ? onContinueLesson() : onOpenLesson?.(today.id))}>
              Continue
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => skipDay()}>
              Skip today
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-xs text-muted-foreground">Track progress</p>
            <p className="text-2xl font-medium">{trackPct}%</p>
            <Progress value={trackPct} className="h-1.5" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-xs text-muted-foreground">Streak</p>
            <p className="text-2xl font-medium">🔥 {progress.streakDays}</p>
            <p className="text-xs text-muted-foreground">days in a row</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-xs text-muted-foreground">Learning time</p>
            <p className="text-2xl font-medium">{hours}h {mins}m</p>
            <p className="text-xs text-muted-foreground">{completedCount} of {lessons.length} lessons</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-xs text-muted-foreground">Quiz average</p>
            <p className="text-2xl font-medium">{averageQuizScore(progress)}%</p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Next milestone</p>
            <p className="text-sm">
              Level {levelInfo.level + 1} at {levelInfo.nextMin} XP — {levelInfo.title}
            </p>
            <Progress value={levelInfo.progress} className="h-1.5 mt-2" />
          </CardContent>
        </Card>
      </div>

      <KnowledgeMap progress={progress} lessons={lessons} onTopicClick={onOpenLesson} />

      <ConceptOfTheDay onLearnMore={(id) => id && onOpenLesson?.(id)} />

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader className="pb-2">
          <Badge className="w-fit mb-1">Education Center</Badge>
          <CardTitle className="text-base">Sr. Contracts Administrator — Job Ready Program</CardTitle>
          <p className="text-sm text-muted-foreground">
            Target $95K–$110K senior contracts admin roles with cradle-to-grave management, contract briefs,
            redlining, compliance risk flagging, portfolio management, and CFCM exam prep.
          </p>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/sr-contracts-admin">Open Job Ready Program</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/job-readiness?section=sr-admin">Career Ready (Job Readiness)</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setShowDrill(true)}>
            Do today&apos;s 5-minute drill
          </Button>
          <Button variant="outline" onClick={() => setShowDrill(true)}>
            Review flashcards
          </Button>
          <Button variant="outline" onClick={() => onOpenLesson?.(today.id)}>
            Continue where I left off
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setNavMode("play");
              setActiveTab("dashboard");
            }}
          >
            Jump to simulator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
