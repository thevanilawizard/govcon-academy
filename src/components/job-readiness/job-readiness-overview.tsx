"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  JOB_READINESS_SECTIONS,
  JOB_READINESS_SUBTITLE,
  JOB_READINESS_TITLE,
} from "@/lib/job-readiness/catalog";
import { COMPANY_PROFILES } from "@/lib/job-readiness/companies";
import {
  computeCompanyReadiness,
  computeOverallReadiness,
  getReadinessLevel,
  predictSalaryBand,
  SALARY_BANDS,
} from "@/lib/job-readiness/scoring";
import { getSectionProgress } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress, JobReadinessSectionId } from "@/lib/job-readiness/types";
import { JobReadinessCertificate } from "./job-readiness-certificate";

export function JobReadinessOverview({
  progress,
  onNavigate,
}: {
  progress: JobReadinessProgress;
  onNavigate: (sectionId: JobReadinessSectionId) => void;
}) {
  const overall = computeOverallReadiness(progress);
  const level = getReadinessLevel(overall);
  const salaryBand = predictSalaryBand(overall);
  const certSection = progress.sectionCertificates[progress.sectionCertificates.length - 1];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium">{JOB_READINESS_TITLE}</h2>
        <p className="text-sm text-muted-foreground mt-1">{JOB_READINESS_SUBTITLE}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Overall readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-medium text-primary">{overall}%</p>
            <Progress value={overall} className="mt-3" />
            <Badge className="mt-3">{level.label}</Badge>
            <p className="text-xs text-muted-foreground mt-2">{level.description}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Salary intelligence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              At your current readiness level, target compensation:{" "}
              <span className="font-medium">{salaryBand}</span>
            </p>
            <div className="space-y-2">
              {SALARY_BANDS.map((band) => (
                <div key={band.role} className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1">
                  <span className="text-muted-foreground">{band.role}</span>
                  <span className="font-medium">{band.range}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card
        className="border-primary/40 bg-primary/5 cursor-pointer hover:border-primary/60 transition-colors"
        onClick={() => onNavigate("sr-admin")}
      >
        <CardContent className="p-5 space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <Badge className="mb-2">Targeted program</Badge>
              <p className="font-medium">Sr. Contracts Administrator — Job Ready Program</p>
              <p className="text-sm text-muted-foreground mt-1">
                8 skills for senior GovCon contracts admin roles ($95K–$110K): cradle-to-grave management,
                contract briefs, redlining, compliance risk, portfolio management, proposal support, Excel
                templates, and CFCM certification prep.
              </p>
            </div>
            <Badge variant="outline">Career Ready module included</Badge>
          </div>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("sr-admin");
            }}
          >
            Open Sr. Contracts Admin program
          </Button>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-base font-medium mb-3">Section progress</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {JOB_READINESS_SECTIONS.filter((s) => s.id !== "overview").map((section) => {
            const { done, total } = getSectionProgress(section.id, progress);
            const pct = total ? Math.round((done / total) * 100) : 0;
            const certified = progress.sectionCertificates.includes(section.id);
            return (
              <Card
                key={section.id}
                className="cursor-pointer hover:border-primary/40 transition-colors"
                onClick={() => onNavigate(section.id)}
              >
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium">{section.title}</p>
                    {certified && <Badge className="text-xs shrink-0">Certified</Badge>}
                  </div>
                  <Progress value={pct} />
                  <p className="text-xs text-muted-foreground">
                    {done}/{total} complete ({pct}%)
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-base font-medium mb-3">Company readiness</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {COMPANY_PROFILES.map((company) => {
            const fit = computeCompanyReadiness(company.id, progress);
            return (
              <Card key={company.id}>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{company.name}</p>
                    <Badge variant={fit.score >= 70 ? "default" : "outline"}>{fit.score}% fit</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{company.focus.join(" · ")}</p>
                  {fit.gaps.length > 0 && (
                    <p className="text-xs text-amber-700">
                      Gaps: {fit.gaps.slice(0, 3).join(", ")}
                      {fit.gaps.length > 3 ? "…" : ""}
                    </p>
                  )}
                  {fit.lessons[0] && (
                    <p className="text-xs text-muted-foreground">Next: {fit.lessons[0]}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {certSection && progress.sectionCertificates.includes(certSection) && (
        <JobReadinessCertificate sectionId={certSection} progress={progress} />
      )}

      <div className="print:hidden">
        <Button variant="outline" size="sm" asChild>
          <Link href="/job-readiness">Open standalone Job Readiness page</Link>
        </Button>
      </div>
    </div>
  );
}
