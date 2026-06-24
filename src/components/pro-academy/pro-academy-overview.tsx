"use client";

import type { ProAcademyProgress } from "@/lib/pro-academy/types";
import {
  PRO_ACADEMY_MODULES,
  PRO_ACADEMY_SECTIONS,
  PRO_ACADEMY_TOOLS,
} from "@/lib/pro-academy/catalog";
import {
  computeOverallProReadiness,
  getTrackProgress,
} from "@/lib/pro-academy/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ProAcademyNavTarget =
  | "far"
  | "pricing"
  | "acquisition"
  | "tools"
  | "certification";

export function ProAcademyOverview({
  progress,
  onNavigate,
}: {
  progress: ProAcademyProgress;
  onNavigate: (target: ProAcademyNavTarget) => void;
}) {
  const overall = computeOverallProReadiness(progress);
  const tracks = PRO_ACADEMY_SECTIONS.map((s) => ({
    ...s,
    stats: getTrackProgress(s.id, progress),
  }));

  return (
    <div className="space-y-6">
      <Card className="bg-primary/5">
        <CardContent className="p-4 space-y-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-medium text-primary">{overall}%</span>
            <span className="text-sm text-muted-foreground">Overall readiness</span>
            {progress.certificationEarned && (
              <Badge className="bg-emerald-600">Pro Academy Certified</Badge>
            )}
          </div>
          <Progress value={overall} className="h-2 max-w-md" />
          <p className="text-xs text-muted-foreground">
            {progress.moduleCertificates.length}/{PRO_ACADEMY_MODULES.length} module certificates ·{" "}
            {progress.finalExamPassed
              ? `Final exam ${progress.finalExamScore}%`
              : progress.finalExamAttempts > 0
                ? `Final exam attempts: ${progress.finalExamAttempts}`
                : "Final exam not attempted"}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {tracks.map((t) => (
          <Card
            key={t.id}
            className="cursor-pointer hover:border-primary/40 transition-colors"
            onClick={() => onNavigate(t.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">{t.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Progress value={t.stats.percent} className="h-1.5" />
              <p className="text-xs text-muted-foreground">
                {t.stats.completed}/{t.stats.lessons} lessons · {t.stats.modulesComplete}/{t.stats.modules}{" "}
                modules certified
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Interactive tools</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {PRO_ACADEMY_TOOLS.slice(0, 4).map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onNavigate("tools")}
              className="text-left p-3 rounded-lg border text-sm hover:border-primary/40 transition-colors"
            >
              <p className="font-medium">{tool.title}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
            </button>
          ))}
        </div>
        <Button variant="link" className="px-0 mt-2 text-xs" onClick={() => onNavigate("tools")}>
          View all 7 tools →
        </Button>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-medium text-sm">Certification exam</p>
            <p className="text-xs text-muted-foreground mt-1">
              200 questions · 4 hours · 75% to pass · max 3 attempts
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => onNavigate("certification")}
            disabled={progress.finalExamPassed}
          >
            {progress.finalExamPassed ? "Certified" : "Take final exam"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
