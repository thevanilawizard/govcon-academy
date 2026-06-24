"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  JOB_READINESS_SECTIONS,
  JOB_READINESS_SUBTITLE,
  JOB_READINESS_TITLE,
} from "@/lib/job-readiness/catalog";
import { computeOverallReadiness, getReadinessLevel } from "@/lib/job-readiness/scoring";
import type { JobReadinessSectionId } from "@/lib/job-readiness/types";
import { useJobReadiness } from "@/hooks/use-job-readiness";
import { JobReadinessOverview } from "./job-readiness-overview";
import { JobReadinessDayInLife } from "./job-readiness-day-in-life";
import { JobReadinessCompetencies } from "./job-readiness-competencies";
import { JobReadinessInterview } from "./job-readiness-interview";
import { JobReadinessDocuments } from "./job-readiness-documents";
import { JobReadinessAssessment } from "./job-readiness-assessment";
import { JobReadinessRoadmap } from "./job-readiness-roadmap";
import { JobReadinessVocabulary } from "./job-readiness-vocabulary";
import { JobReadinessScenarios } from "./job-readiness-scenarios";
import { JobReadinessSrAdmin } from "./job-readiness-sr-admin";

export function JobReadinessShell({
  initialSection = "overview",
  standalone = false,
}: {
  initialSection?: JobReadinessSectionId;
  standalone?: boolean;
}) {
  const { progress, hydrated, update } = useJobReadiness();
  const [activeSection, setActiveSection] = useState<JobReadinessSectionId>(initialSection);

  const overall = computeOverallReadiness(progress);
  const level = getReadinessLevel(overall);

  if (!hydrated) {
    return <p className="text-sm text-muted-foreground">Loading job readiness progress…</p>;
  }

  return (
    <div className="space-y-6">
      {!standalone && (
        <div>
          <h2 className="text-xl font-medium mb-1">{JOB_READINESS_TITLE}</h2>
          <p className="text-sm text-muted-foreground">{JOB_READINESS_SUBTITLE}</p>
        </div>
      )}

      <div className="p-4 rounded-lg border bg-primary/5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Readiness score</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-medium text-primary">{overall}%</span>
            <Badge>{level.label}</Badge>
          </div>
          <Progress value={overall} className="mt-2 max-w-md" />
        </div>
        <p className="text-xs text-muted-foreground max-w-xs">{level.description}</p>
      </div>

      <Tabs value={activeSection} onValueChange={(v) => setActiveSection(v as JobReadinessSectionId)}>
        <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
          {JOB_READINESS_SECTIONS.map((s) => (
            <TabsTrigger key={s.id} value={s.id} className="text-xs">
              {s.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview">
          <JobReadinessOverview progress={progress} onNavigate={setActiveSection} />
        </TabsContent>
        <TabsContent value="day-in-life">
          <JobReadinessDayInLife progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="competencies">
          <JobReadinessCompetencies progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="interview">
          <JobReadinessInterview progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="documents">
          <JobReadinessDocuments progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="assessment">
          <JobReadinessAssessment progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="roadmap">
          <JobReadinessRoadmap progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="vocabulary">
          <JobReadinessVocabulary progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="scenarios">
          <JobReadinessScenarios progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="sr-admin">
          <JobReadinessSrAdmin progress={progress} onUpdate={update} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
