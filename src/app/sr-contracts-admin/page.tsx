"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobReadinessSrAdmin } from "@/components/job-readiness/job-readiness-sr-admin";
import { useJobReadiness } from "@/hooks/use-job-readiness";
import { SR_ADMIN_PROGRAM } from "@/lib/job-readiness/sr-admin";

export default function SrContractsAdminPage() {
  const { progress, hydrated, update } = useJobReadiness();

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-medium text-primary">
              GovCon Academy
            </Link>
            <p className="text-sm text-muted-foreground">{SR_ADMIN_PROGRAM.title}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/job-readiness?section=sr-admin">Job Readiness hub</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/game">Open full simulator</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        {!hydrated ? (
          <p className="text-sm text-muted-foreground">Loading program…</p>
        ) : (
          <JobReadinessSrAdmin progress={progress} onUpdate={update} standaloneTitle />
        )}
      </main>
    </div>
  );
}
