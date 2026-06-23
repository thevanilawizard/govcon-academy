"use client";

import { useState } from "react";
import { callToolAi } from "@/lib/tools/api-client";
import { getToolData, updateToolData } from "@/lib/tools/storage";
import type { ProposalScorecard, ProposalVersion } from "@/lib/tools/types";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { EvalCriteria } from "@/lib/game/types";

const GRADE_COLORS: Record<string, string> = {
  A: "bg-emerald-600",
  B: "bg-green-600",
  C: "bg-amber-500",
  D: "bg-orange-500",
  F: "bg-red-600",
};

export function ProposalWorkshopTool() {
  const [step, setStep] = useState(1);
  const [sectionM, setSectionM] = useState("");
  const [evalType, setEvalType] = useState<EvalCriteria>("Best Value");
  const [contractType, setContractType] = useState("FFP");
  const [pws, setPws] = useState("");
  const [technical, setTechnical] = useState("");
  const [management, setManagement] = useState("");
  const [pastPerformance, setPastPerformance] = useState("");
  const [price, setPrice] = useState("");
  const [grading, setGrading] = useState(false);
  const [scorecard, setScorecard] = useState<ProposalScorecard | null>(null);
  const [versions, setVersions] = useState<ProposalVersion[]>(() => getToolData().proposalVersions);
  const [rewriteSection, setRewriteSection] = useState<string | null>(null);
  const [rewriteResult, setRewriteResult] = useState<{ rewritten: string; changes: string[] } | null>(null);

  const wordCount = technical.split(/\s+/).filter(Boolean).length;

  const handleGrade = async () => {
    setGrading(true);
    setScorecard(null);
    try {
      const prompt = `Section M (Evaluation Factors):\n${sectionM}\n\nEvaluation: ${evalType}\nContract type: ${contractType}\n\nPWS/SOW:\n${pws}\n\nTechnical Approach:\n${technical}\n\nManagement:\n${management || "Not provided"}\n\nPast Performance:\n${pastPerformance || "Not provided"}\n\nProposed price: $${price || "Not provided"}`;
      const result = await callToolAi<ProposalScorecard>("proposal-grade", prompt, undefined, true);
      setScorecard(result);
      const version: ProposalVersion = {
        id: crypto.randomUUID(),
        name: `Draft ${versions.length + 1}`,
        createdAt: new Date().toISOString(),
        sectionM,
        evalType,
        contractType,
        pws,
        technical,
        management,
        pastPerformance,
        price: Number(price) || 0,
        scorecard: result,
      };
      const next = [version, ...versions].slice(0, 10);
      setVersions(next);
      updateToolData({ proposalVersions: next });
      setStep(3);
    } catch {
      setScorecard(null);
    } finally {
      setGrading(false);
    }
  };

  const handleRewrite = async (section: "technical" | "management" | "pastPerformance") => {
    const text = section === "technical" ? technical : section === "management" ? management : pastPerformance;
    setRewriteSection(section);
    setRewriteResult(null);
    try {
      const res = await callToolAi<{ rewritten: string; changes: string[] }>(
        "proposal-rewrite",
        `Rewrite this ${section} section to score higher.\n\nSection M:\n${sectionM}\n\nCurrent text:\n${text}`,
        `Eval type: ${evalType}. PWS context: ${pws.slice(0, 500)}`,
        true
      );
      setRewriteResult(res);
    } catch {
      setRewriteResult(null);
    }
  };

  if (step === 3 && scorecard) {
    return (
      <div className="space-y-6">
        <button type="button" className="text-xs text-muted-foreground" onClick={() => setStep(2)}>← Edit proposal</button>
        <h3 className="font-medium">Proposal scorecard</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "Technical", data: scorecard.technical },
            { label: "Requirements", data: scorecard.requirements },
            scorecard.management && { label: "Management", data: scorecard.management },
            scorecard.pastPerformance && { label: "Past Performance", data: scorecard.pastPerformance },
          ]
            .filter(Boolean)
            .map((item) => (
              <div key={item!.label} className="p-4 rounded-lg border space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item!.label}</span>
                  <Badge className={GRADE_COLORS[item!.data.grade] ?? ""}>{item!.data.grade}</Badge>
                </div>
                <Progress value={item!.data.score} className="h-2" />
                <p className="text-xs text-muted-foreground">{item!.data.score}/100</p>
              </div>
            ))}
        </div>
        <div className="p-4 rounded-lg border bg-primary/5">
          <p className="text-2xl font-medium">Overall: {scorecard.overallScore}/100 · {scorecard.overallGrade}</p>
          <p className="text-sm mt-2">{scorecard.verdict}</p>
          <p className="text-sm mt-2 font-medium">{scorecard.biggestImprovement}</p>
          <p className="text-sm text-muted-foreground mt-1">{scorecard.lptaAssessment}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div><p className="font-medium mb-1">Strengths</p><ul className="list-disc list-inside text-muted-foreground">{scorecard.strengths.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><p className="font-medium mb-1">Weaknesses</p><ul className="list-disc list-inside text-muted-foreground">{scorecard.weaknesses.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><p className="font-medium mb-1">Missing</p><ul className="list-disc list-inside text-muted-foreground">{scorecard.missing.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><p className="font-medium mb-1">Suggestions</p><ul className="list-disc list-inside text-muted-foreground">{scorecard.suggestions.map((s) => <li key={s}>{s}</li>)}</ul></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => handleRewrite("technical")}>Improve technical section</Button>
          {management && <Button size="sm" variant="outline" onClick={() => handleRewrite("management")}>Improve management</Button>}
          {pastPerformance && <Button size="sm" variant="outline" onClick={() => handleRewrite("pastPerformance")}>Improve past performance</Button>}
        </div>
        {rewriteSection && rewriteResult && (
          <div className="p-4 rounded-lg border space-y-3">
            <p className="font-medium text-sm">Rewrite: {rewriteSection}</p>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div><p className="font-medium mb-1">Before</p><p className="text-muted-foreground whitespace-pre-wrap">{rewriteSection === "technical" ? technical : rewriteSection === "management" ? management : pastPerformance}</p></div>
              <div><p className="font-medium mb-1">After</p><p className="whitespace-pre-wrap">{rewriteResult.rewritten}</p></div>
            </div>
            <ul className="text-xs list-disc list-inside text-muted-foreground">{rewriteResult.changes.map((c) => <li key={c}>{c}</li>)}</ul>
            <Button size="sm" onClick={() => { if (rewriteSection === "technical") setTechnical(rewriteResult.rewritten); else if (rewriteSection === "management") setManagement(rewriteResult.rewritten); else setPastPerformance(rewriteResult.rewritten); setRewriteResult(null); }}>Apply rewrite</Button>
          </div>
        )}
        {versions.length > 1 && (
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Version history</p>
            {versions.slice(0, 5).map((v) => (
              <div key={v.id} className="flex justify-between text-xs py-1">
                <span>{v.name} · {new Date(v.createdAt).toLocaleDateString()}</span>
                <span>{v.scorecard?.overallScore ?? "—"}/100 ({v.scorecard?.overallGrade})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-xs">
        {[1, 2].map((s) => (
          <Badge key={s} variant={step === s ? "default" : "outline"}>Step {s}</Badge>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm font-medium">Setup — evaluation criteria & requirements</p>
          <textarea className="w-full min-h-[100px] rounded-md border p-3 text-sm" placeholder="Paste Section M evaluation factors..." value={sectionM} onChange={(e) => setSectionM(e.target.value)} />
          <div className="grid md:grid-cols-2 gap-3">
            <select className="rounded-md border p-2 text-sm" value={evalType} onChange={(e) => setEvalType(e.target.value as EvalCriteria)}>
              <option value="Best Value">Best Value</option>
              <option value="LPTA">LPTA</option>
            </select>
            <select className="rounded-md border p-2 text-sm" value={contractType} onChange={(e) => setContractType(e.target.value)}>
              <option value="FFP">FFP</option>
              <option value="T&M">T&M</option>
              <option value="CPFF">Cost-Plus Fixed Fee</option>
            </select>
          </div>
          <textarea className="w-full min-h-[100px] rounded-md border p-3 text-sm" placeholder="Paste PWS/SOW..." value={pws} onChange={(e) => setPws(e.target.value)} />
          <Button onClick={() => setStep(2)} disabled={!sectionM.trim() || !pws.trim()}>Continue to proposal input</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-sm font-medium">Paste your proposal volumes</p>
          <div>
            <div className="flex justify-between text-xs mb-1"><span>Technical approach</span><span>{wordCount} words</span></div>
            <textarea className="w-full min-h-[160px] rounded-md border p-3 text-sm" value={technical} onChange={(e) => setTechnical(e.target.value)} />
          </div>
          <textarea className="w-full min-h-[80px] rounded-md border p-3 text-sm" placeholder="Management approach (optional)" value={management} onChange={(e) => setManagement(e.target.value)} />
          <textarea className="w-full min-h-[80px] rounded-md border p-3 text-sm" placeholder="Past performance summary (optional)" value={pastPerformance} onChange={(e) => setPastPerformance(e.target.value)} />
          <Input placeholder="Proposed price ($)" value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
          {grading && <AiLoading label="Martin is grading your proposal as a government evaluator..." />}
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={handleGrade} disabled={grading || !technical.trim()}>Grade proposal</Button>
          </div>
        </div>
      )}
    </div>
  );
}
