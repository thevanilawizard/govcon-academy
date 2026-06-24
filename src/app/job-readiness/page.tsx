"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobReadinessShell } from "@/components/job-readiness/job-readiness-shell";
import type { JobReadinessSectionId } from "@/lib/job-readiness/types";
import { useSearchParams } from "next/navigation";

const VALID_SECTIONS: JobReadinessSectionId[] = [
  "overview",
  "day-in-life",
  "competencies",
  "interview",
  "documents",
  "assessment",
  "roadmap",
  "vocabulary",
  "scenarios",
  "sr-admin",
];

function JobReadinessPageContent() {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  const initialSection =
    sectionParam && VALID_SECTIONS.includes(sectionParam as JobReadinessSectionId)
      ? (sectionParam as JobReadinessSectionId)
      : "overview";

  return <JobReadinessShell standalone initialSection={initialSection} />;
}

export default function JobReadinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-medium text-primary">
              GovCon Academy
            </Link>
            <p className="text-sm text-muted-foreground">Contract Manager Job Readiness Program</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/sr-contracts-admin">Sr. Contracts Admin program</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/game">Open full simulator</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading…</p>}>
          <JobReadinessPageContent />
        </Suspense>
      </main>
    </div>
  );
}
