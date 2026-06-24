"use client";

import { useLearning } from "@/hooks/use-learning";
import { BADGE_DEFINITIONS } from "@/lib/learning/types";
import { LearningPathSelector } from "@/components/learning/learning-path-selector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProfileSettingsPanel() {
  const { progress, selectPath } = useLearning();

  return (
    <div className="space-y-8 max-w-3xl">
      <section>
        <h2 className="text-xl font-medium mb-1">Profile & Settings</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Change your learning path or review earned badges.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">Learning path</h3>
        <LearningPathSelector selected={progress.learningPath} onSelect={selectPath} />
      </section>

      <section>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Achievement badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {BADGE_DEFINITIONS.map((b) => {
                const earned = progress.badges.find((x) => x.id === b.id);
                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-lg border ${earned ? "bg-emerald-50 border-emerald-200" : "opacity-60"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span>{b.icon}</span>
                      <p className="text-sm font-medium">{b.title}</p>
                      {earned && <Badge variant="secondary" className="text-[10px]">Earned</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground">{b.description}</p>
                    {earned && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        {new Date(earned.earnedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
