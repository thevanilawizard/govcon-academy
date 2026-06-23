"use client";

import { useGameStore } from "@/lib/game/store";
import {
  computeReadinessScore,
  EDUCATION_CONCEPTS,
  EDUCATION_SKILLS,
  getStudyNextRecommendation,
} from "@/lib/education/concepts";
import { getProgramProgress } from "@/lib/education/training/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function EducationCenter() {
  const educationProgress = useGameStore((s) => s.educationProgress);
  const quarter = useGameStore((s) => s.quarter);
  const contracts = useGameStore((s) => s.contracts);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const hasContracts = contracts.some((c) => c.status === "active" || c.status === "pending_setup");

  const readiness = computeReadinessScore(educationProgress);
  const studyNext = getStudyNextRecommendation(educationProgress, quarter, hasContracts);
  const program = getProgramProgress(educationProgress.training);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-base font-medium">Education Center</CardTitle>
            <p className="text-sm text-muted-foreground">
              Simulator concepts plus the professional Academy training program.
            </p>
          </div>
          <Button size="sm" variant="outline" onClick={() => setActiveTab("academy")}>
            Open Education Center
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Real-world readiness</span>
            <span className="font-medium">{readiness}%</span>
          </div>
          <Progress value={readiness} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Academy program</span>
            <span className="font-medium">
              {program.completedLessons}/{program.totalLessons} lessons ·{" "}
              {program.modulesCertified}/{program.totalModules} certificates
            </span>
          </div>
          <Progress value={program.percent} className="h-2" />
          {educationProgress.training.programCertificateEarned && (
            <Badge className="mt-2 bg-emerald-600">Program certificate earned</Badge>
          )}
        </div>

        <div>
          <p className="text-sm font-medium mb-2">
            Concepts learned ({educationProgress.conceptsLearned.length}/{EDUCATION_CONCEPTS.length})
          </p>
          <div className="flex flex-wrap gap-1">
            {EDUCATION_CONCEPTS.map((c) => (
              <Badge
                key={c.id}
                variant="outline"
                className={
                  educationProgress.conceptsLearned.includes(c.id)
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "opacity-40"
                }
              >
                {c.label}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Skills unlocked</p>
          <div className="flex flex-wrap gap-2">
            {EDUCATION_SKILLS.map((s) => (
              <Badge
                key={s.id}
                variant={educationProgress.skillsUnlocked.includes(s.id) ? "default" : "outline"}
                className={!educationProgress.skillsUnlocked.includes(s.id) ? "opacity-40" : ""}
              >
                {s.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg border bg-primary/5">
          <p className="text-xs font-medium text-primary mb-1">What to study next</p>
          <p className="text-sm leading-relaxed">{studyNext}</p>
        </div>
      </CardContent>
    </Card>
  );
}
