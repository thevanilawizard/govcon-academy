"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DAY_IN_LIFE_BLOCKS } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";

export function JobReadinessDayInLife({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(DAY_IN_LIFE_BLOCKS[0]?.id ?? null);
  const [checklistState, setChecklistState] = useState<Record<string, Record<number, boolean>>>({});

  const toggleComplete = (blockId: string) => {
    onUpdate((p) => {
      const done = p.dayInLifeCompleted.includes(blockId);
      const dayInLifeCompleted = done
        ? p.dayInLifeCompleted.filter((id) => id !== blockId)
        : [...p.dayInLifeCompleted, blockId];
      return syncSectionCertificate("day-in-life", { ...p, dayInLifeCompleted });
    });
  };

  const toggleChecklist = (blockId: string, idx: number) => {
    setChecklistState((s) => ({
      ...s,
      [blockId]: { ...s[blockId], [idx]: !s[blockId]?.[idx] },
    }));
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Day in the life</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Hour-by-hour view of what a Contracts Manager actually does — expand each block and complete the exercise.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          {progress.dayInLifeCompleted.length}/{DAY_IN_LIFE_BLOCKS.length} blocks complete
        </p>
      </div>

      <div className="relative space-y-3 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-6">
        {DAY_IN_LIFE_BLOCKS.map((block) => {
          const isOpen = expanded === block.id;
          const isDone = progress.dayInLifeCompleted.includes(block.id);
          return (
            <Card key={block.id} className="relative ml-0 md:ml-4">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="shrink-0 mt-0.5">
                      {block.time}
                    </Badge>
                    <div>
                      <CardTitle className="text-base font-medium">{block.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{block.realSkill}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {isDone && <Badge className="bg-emerald-600">Done</Badge>}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpanded(isOpen ? null : block.id)}
                    >
                      {isOpen ? "Collapse" : "Expand"}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {isOpen && (
                <CardContent className="space-y-4 pt-0">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Teach points</p>
                    <ul className="space-y-2">
                      {block.teachPoints.map((point) => (
                        <li key={point} className="text-sm leading-relaxed pl-3 border-l-2 border-primary/20">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {block.exercise && (
                    <div className="p-4 rounded-lg bg-muted/40 space-y-3">
                      <p className="text-sm font-medium">Exercise</p>
                      <p className="text-sm text-muted-foreground">{block.exercise.prompt}</p>
                      <ul className="space-y-2">
                        {block.exercise.checklist.map((item, idx) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <Checkbox
                              checked={!!checklistState[block.id]?.[idx]}
                              onCheckedChange={() => toggleChecklist(block.id, idx)}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    variant={isDone ? "outline" : "default"}
                    size="sm"
                    onClick={() => toggleComplete(block.id)}
                  >
                    {isDone ? "Mark incomplete" : "Mark block complete"}
                  </Button>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
