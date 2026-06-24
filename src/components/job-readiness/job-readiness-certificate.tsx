"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JOB_READINESS_SECTIONS } from "@/lib/job-readiness/catalog";
import { getReadinessLevel } from "@/lib/job-readiness/scoring";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";

export function JobReadinessCertificate({
  sectionId,
  progress,
  onClose,
}: {
  sectionId: string;
  progress: JobReadinessProgress;
  onClose?: () => void;
}) {
  const section = JOB_READINESS_SECTIONS.find((s) => s.id === sectionId);
  const level = getReadinessLevel(
    progress.assessmentScores.far ?? progress.assessmentScores.interview ?? 50
  );
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrint = () => window.print();

  return (
    <Card className="print-certificate border-2 border-primary/30">
      <CardContent className="p-8 md:p-12 text-center space-y-6 print:p-16">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">GovCon Academy</p>
          <h2 className="text-2xl md:text-3xl font-medium text-primary">Certificate of Completion</h2>
        </div>

        <div className="py-4 border-y border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">This certifies completion of</p>
          <p className="text-xl font-medium">{section?.title ?? sectionId}</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">{section?.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="outline">{level.label}</Badge>
          <Badge variant="outline">Job Readiness Program</Badge>
        </div>

        <p className="text-sm text-muted-foreground">Awarded on {date}</p>

        <div className="flex flex-wrap justify-center gap-3 print:hidden">
          <Button onClick={handlePrint}>Print certificate</Button>
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
