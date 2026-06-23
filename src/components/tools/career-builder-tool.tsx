"use client";

import { useMemo, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { generateCareerResume, mapJobQualificationMatch } from "@/lib/tools/career-generator";
import { callToolAi, searchUsaJobs } from "@/lib/tools/api-client";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CareerBuilderTool() {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const contracts = useGameStore((s) => s.contracts);
  const submitted = useGameStore((s) => s.submitted);
  const quarter = useGameStore((s) => s.quarter);
  const training = useGameStore((s) => s.educationProgress.training);

  const resume = useMemo(
    () =>
      generateCareerResume({
        form,
        profile,
        fin,
        contracts,
        submitted,
        quarter,
        training,
      }),
    [form, profile, fin, contracts, submitted, quarter, training]
  );

  const [linkedin, setLinkedin] = useState<{ headlines: string[]; summary: string; skills: string[] } | null>(null);
  const [loadingLinkedin, setLoadingLinkedin] = useState(false);
  const [jobs, setJobs] = useState<Array<Record<string, unknown>>>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  const generateLinkedin = async () => {
    setLoadingLinkedin(true);
    try {
      const res = await callToolAi<{ headlines: string[]; summary: string; skills: string[] }>(
        "career-linkedin",
        `Generate LinkedIn content for:\n${JSON.stringify(resume, null, 2)}`,
        form ? `Founder: ${form.founderName}, Company: ${form.companyName}` : undefined,
        true
      );
      setLinkedin(res);
    } finally {
      setLoadingLinkedin(false);
    }
  };

  const loadJobs = async () => {
    setLoadingJobs(true);
    try {
      const res = await searchUsaJobs("contract specialist federal");
      setJobs((res.jobs as Array<Record<string, unknown>>) ?? []);
    } finally {
      setLoadingJobs(false);
    }
  };

  const copyAll = () => {
    const text = [
      "PROFESSIONAL SUMMARY",
      resume.professionalSummary,
      "",
      "SKILLS",
      resume.skills.join(", "),
      "",
      "EXPERIENCE",
      ...resume.experienceBullets.map((b) => `• ${b}`),
      "",
      "EDUCATION & CERTIFICATIONS",
      ...resume.education.map((e) => `• ${e}`),
    ].join("\n");
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-2">
        <Button size="sm" onClick={copyAll}>Copy resume to clipboard</Button>
        <Button size="sm" variant="outline" onClick={generateLinkedin} disabled={loadingLinkedin}>Generate LinkedIn content</Button>
        <Button size="sm" variant="outline" onClick={loadJobs} disabled={loadingJobs}>Load job postings</Button>
      </div>

      <section className="space-y-2">
        <h3 className="text-sm font-medium">Professional summary</h3>
        <p className="text-sm text-muted-foreground leading-relaxed p-4 rounded-lg border">{resume.professionalSummary}</p>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-medium">Skills</h3>
        <div className="flex flex-wrap gap-1">
          {resume.skills.map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-medium">Experience bullets</h3>
        <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
          {resume.experienceBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-medium">Education & certifications</h3>
        <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
          {resume.education.map((e) => (
            <li key={e}>{e}</li>
          ))}
          {resume.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {loadingLinkedin && <AiLoading label="Generating LinkedIn optimization..." />}
      {linkedin && (
        <section className="space-y-3 p-4 rounded-lg border bg-indigo-50/50">
          <h3 className="text-sm font-medium">LinkedIn optimization</h3>
          <div><p className="text-xs font-medium mb-1">Headline options</p>{linkedin.headlines.map((h) => <p key={h} className="text-sm">{h}</p>)}</div>
          <div><p className="text-xs font-medium mb-1">Summary</p><p className="text-sm whitespace-pre-wrap">{linkedin.summary}</p></div>
          <div className="flex flex-wrap gap-1">{linkedin.skills.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}</div>
        </section>
      )}

      {loadingJobs && <AiLoading label="Searching USAJobs..." />}
      {jobs.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-medium">Job search — federal contracting roles</h3>
          {jobs.map((job, i) => {
            const match = mapJobQualificationMatch(String(job.qualifications ?? ""), resume.skills);
            return (
              <div key={i} className="p-4 rounded-lg border text-sm space-y-1">
                <div className="flex justify-between gap-2">
                  <p className="font-medium">{String(job.title)}</p>
                  <Badge variant={match >= 70 ? "default" : "outline"}>{match}% match</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{String(job.agency)} · {String(job.location)}</p>
                <p className="text-xs">{String(job.salary ?? "")}</p>
                {match < 70 && (
                  <p className="text-xs text-amber-700">Complete more Academy modules to qualify for remaining requirements.</p>
                )}
                {typeof job.url === "string" && job.url && (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary underline">View posting</a>
                )}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
