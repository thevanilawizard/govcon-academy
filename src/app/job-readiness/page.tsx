"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobReadinessShell } from "@/components/job-readiness/job-readiness-shell";

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
          <Button variant="outline" size="sm" asChild>
            <Link href="/game">Open full simulator</Link>
          </Button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <JobReadinessShell standalone />
      </main>
    </div>
  );
}
