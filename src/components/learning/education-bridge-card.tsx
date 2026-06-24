"use client";

import { getBridgeForEvent } from "@/lib/learning/game-bridges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EducationBridgeCard({
  event,
  onOpenLesson,
  onDismiss,
}: {
  event: string;
  onOpenLesson: (lessonId: string) => void;
  onDismiss?: () => void;
}) {
  const bridge = getBridgeForEvent(event);
  if (!bridge) return null;

  return (
    <Card className="border-blue-200 bg-blue-50/50">
      <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{bridge.title}</p>
          <p className="text-sm text-muted-foreground mt-1">{bridge.message}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button size="sm" onClick={() => onOpenLesson(bridge.lessonId)}>
            {bridge.ctaLabel}
          </Button>
          {onDismiss && (
            <Button size="sm" variant="ghost" onClick={onDismiss}>
              Dismiss
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
