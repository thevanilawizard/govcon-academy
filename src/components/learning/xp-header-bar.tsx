"use client";

import { useLearning } from "@/hooks/use-learning";
import { getLevelInfo } from "@/lib/learning/progress";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function XpHeaderBar({ compact }: { compact?: boolean }) {
  const { progress } = useLearning();
  const info = getLevelInfo(progress.xpPoints);

  if (compact) {
    return (
      <div className="flex items-center gap-2 min-w-0">
        <Badge variant="outline" className="shrink-0 text-xs">
          L{info.level}
        </Badge>
        <div className="hidden sm:block w-24 min-w-0">
          <Progress value={info.progress} className="h-1.5" />
        </div>
        <span className="text-xs text-muted-foreground shrink-0">{progress.xpPoints} XP</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground truncate">
          Level {info.level} · {info.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <Progress value={info.progress} className="h-2 w-32 sm:w-48" />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {progress.xpPoints} XP
          </span>
        </div>
      </div>
      {progress.streakDays > 0 && (
        <Badge variant="secondary" className="w-fit">
          🔥 {progress.streakDays} day streak
        </Badge>
      )}
    </div>
  );
}
