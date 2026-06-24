"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ROADMAP_PHASES } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";

export function JobReadinessRoadmap({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const allSteps = ROADMAP_PHASES.flatMap((p) => p.steps);
  const doneCount = progress.roadmapCompleted.length;

  const toggleStep = (stepId: string) => {
    onUpdate((p) => {
      const done = p.roadmapCompleted.includes(stepId);
      const roadmapCompleted = done
        ? p.roadmapCompleted.filter((id) => id !== stepId)
        : [...p.roadmapCompleted, stepId];
      return syncSectionCertificate("roadmap", { ...p, roadmapCompleted });
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Career roadmap</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Interactive 4-phase professional development plan — {doneCount}/{allSteps.length} steps complete
        </p>
      </div>

      {ROADMAP_PHASES.map((phase) => (
        <Card key={phase.id}>
          <CardHeader className="pb-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-base">{phase.title}</CardTitle>
              <Badge variant="outline">{phase.timeframe}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {phase.steps.map((step) => {
              const done = progress.roadmapCompleted.includes(step.id);
              return (
                <div key={step.id} className="flex items-start gap-3 p-3 rounded-lg border">
                  <Checkbox checked={done} onCheckedChange={() => toggleStep(step.id)} className="mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${done ? "line-through text-muted-foreground" : ""}`}>{step.label}</p>
                    {step.resources && (
                      <ul className="mt-2 text-xs text-muted-foreground space-y-1">
                        {step.resources.map((r) => (
                          <li key={r}>· {r}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
