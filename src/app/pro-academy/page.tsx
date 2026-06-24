"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProAcademyShell } from "@/components/pro-academy/pro-academy-shell";
import { PRO_ACADEMY_SUBTITLE, PRO_ACADEMY_TITLE } from "@/lib/pro-academy/catalog";

export default function ProAcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-medium text-primary">
              GovCon Academy
            </Link>
            <p className="text-sm text-muted-foreground">{PRO_ACADEMY_TITLE}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{PRO_ACADEMY_SUBTITLE}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/game">Open full simulator</Link>
          </Button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <ProAcademyShell standalone />
      </main>
    </div>
  );
}
