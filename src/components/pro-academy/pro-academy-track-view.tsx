"use client";

import type { ProAcademyProgress, ProAcademyTrack } from "@/lib/pro-academy/types";
import { PRO_ACADEMY_SECTIONS } from "@/lib/pro-academy/catalog";
import {
  getProModuleProgress,
  isProModuleComplete,
  isProModuleUnlocked,
} from "@/lib/pro-academy/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function ProAcademyTrackView({
  track,
  progress,
  onBack,
  onSelectModule,
}: {
  track: ProAcademyTrack;
  progress: ProAcademyProgress;
  onBack: () => void;
  onSelectModule: (moduleId: string) => void;
}) {
  const section = PRO_ACADEMY_SECTIONS.find((s) => s.id === track);
  if (!section) return null;

  return (
    <div className="space-y-6">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to overview
      </button>

      <div>
        <h2 className="text-xl font-medium">{section.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {section.modules.map((mod) => {
          const mp = getProModuleProgress(mod.id, progress);
          const certified = progress.moduleCertificates.includes(mod.id);
          const complete = isProModuleComplete(mod.id, progress);
          const unlocked = isProModuleUnlocked(mod.id, progress);
          return (
            <Card
              key={mod.id}
              className={`transition-colors ${unlocked ? "cursor-pointer hover:border-primary/40" : "opacity-50"}`}
              onClick={() => unlocked && onSelectModule(mod.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="outline">Module {mod.number}</Badge>
                  {!unlocked && <Badge variant="outline">Locked</Badge>}
                  {certified && <Badge className="bg-emerald-600 text-xs">Certified</Badge>}
                  {complete && !certified && <Badge variant="outline">Lessons done</Badge>}
                </div>
                <CardTitle className="text-base font-medium">{mod.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2">{mod.description}</p>
                <Progress value={mp.percent} className="h-1.5" />
                <p className="text-xs text-muted-foreground">
                  {mp.completed}/{mp.total} lessons complete
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
