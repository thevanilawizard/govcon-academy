"use client";

import type { ProAcademyProgress, ProModule } from "@/lib/pro-academy/types";
import { getModuleAssessment } from "@/lib/pro-academy/catalog";
import {
  getProModuleProgress,
  isProLessonComplete,
  isProLessonUnlocked,
  isProModuleUnlocked,
} from "@/lib/pro-academy/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProAcademyModuleView({
  module,
  progress,
  onBack,
  onSelectLesson,
  onStartAssessment,
}: {
  module: ProModule;
  progress: ProAcademyProgress;
  onBack: () => void;
  onSelectLesson: (lessonId: string) => void;
  onStartAssessment: (assessmentId: string) => void;
}) {
  const modProgress = getProModuleProgress(module.id, progress);
  const moduleLocked = !isProModuleUnlocked(module.id, progress);
  const certified = progress.moduleCertificates.includes(module.id);
  const assessment = getModuleAssessment(module.id);
  const assessmentPassed = assessment
    ? progress.moduleAssessmentsPassed.includes(assessment.id)
    : false;
  const assessmentScore = assessment ? progress.moduleAssessmentScores[assessment.id] : undefined;

  if (moduleLocked) {
    return (
      <div className="space-y-4">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back to track
        </button>
        <p className="text-sm text-muted-foreground">
          Complete the previous module and pass its module assessment to unlock.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to track
      </button>

      <div>
        <Badge variant="outline" className="mb-2">
          Module {module.number}
        </Badge>
        <h2 className="text-xl font-medium">{module.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <Progress value={modProgress.percent} className="h-2 flex-1 max-w-xs" />
          <span>
            {modProgress.completed}/{modProgress.total} lessons
          </span>
          {certified && <Badge className="bg-emerald-600">Certified</Badge>}
        </div>
      </div>

      <div className="space-y-3">
        {module.lessons.map((l) => {
          const unlocked = isProLessonUnlocked(l.id, progress);
          const done = isProLessonComplete(l.id, progress);
          const score = progress.quizBestScores[l.id];
          return (
            <Card
              key={l.id}
              className={`transition-colors ${unlocked ? "cursor-pointer hover:border-primary/40" : "opacity-50"} ${done ? "border-emerald-200" : ""}`}
              onClick={() => unlocked && onSelectLesson(l.id)}
            >
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Lesson {l.number}
                    {!unlocked && " · Locked"}
                  </p>
                  <p className="font-medium text-sm">{l.title}</p>
                </div>
                <div className="text-right shrink-0">
                  {done ? (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-800">
                      {score}% ✓
                    </Badge>
                  ) : score !== undefined ? (
                    <Badge variant="outline" className="text-amber-700">
                      {score}% — retake
                    </Badge>
                  ) : unlocked ? (
                    <Badge variant="outline">Start</Badge>
                  ) : (
                    <Badge variant="outline">Locked</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {assessment && modProgress.percent === 100 && (
        <div className="p-4 rounded-lg border space-y-3">
          <div>
            <p className="font-medium text-sm">{assessment.title}</p>
            <p className="text-xs text-muted-foreground">25 questions · 75% to pass</p>
          </div>
          {assessmentPassed ? (
            <Badge className="bg-emerald-600">Passed · {assessmentScore}%</Badge>
          ) : (
            <Button size="sm" onClick={() => onStartAssessment(assessment.id)}>
              {assessmentScore !== undefined ? `Retake assessment (${assessmentScore}%)` : "Start module assessment"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
