"use client";

import { useState } from "react";
import { callToolAi } from "@/lib/tools/api-client";
import { getToolData, updateToolData } from "@/lib/tools/storage";
import type { ClauseAnalysis, SavedClauseAnalysis } from "@/lib/tools/types";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RISK_COLORS = {
  green: "bg-emerald-100 text-emerald-800 border-emerald-200",
  yellow: "bg-amber-100 text-amber-800 border-amber-200",
  red: "bg-red-100 text-red-800 border-red-200",
};

export function ContractReviewTool() {
  const [clauseText, setClauseText] = useState("");
  const [contractType, setContractType] = useState("FFP");
  const [role, setRole] = useState<"prime" | "sub">("prime");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ClauseAnalysis | null>(null);
  const [library, setLibrary] = useState<SavedClauseAnalysis[]>(() => getToolData().clauseLibrary);
  const [viewSaved, setViewSaved] = useState<SavedClauseAnalysis | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setAnalysis(null);
    try {
      const result = await callToolAi<ClauseAnalysis>(
        "clause-analysis",
        `Contract type: ${contractType}. Role: ${role} contractor.\n\nClause text:\n${clauseText}`,
        undefined,
        true
      );
      setAnalysis(result);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (!analysis) return;
    const saved: SavedClauseAnalysis = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      clauseText,
      contractType,
      role,
      tags: [analysis.riskLevel, analysis.identification.slice(0, 40)],
      analysis,
    };
    const next = [saved, ...library].slice(0, 50);
    setLibrary(next);
    updateToolData({ clauseLibrary: next });
  };

  if (viewSaved) {
    return (
      <div className="space-y-4">
        <button type="button" className="text-xs text-muted-foreground" onClick={() => setViewSaved(null)}>← Library</button>
        <ClauseAnalysisView analysis={viewSaved.analysis} clauseText={viewSaved.clauseText} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-3">
        <select className="rounded-md border p-2 text-sm" value={contractType} onChange={(e) => setContractType(e.target.value)}>
          <option value="FFP">FFP</option>
          <option value="T&M">T&M</option>
          <option value="Cost-Plus">Cost-Plus</option>
          <option value="IDIQ">IDIQ</option>
        </select>
        <select className="rounded-md border p-2 text-sm" value={role} onChange={(e) => setRole(e.target.value as "prime" | "sub")}>
          <option value="prime">Prime contractor</option>
          <option value="sub">Subcontractor</option>
        </select>
      </div>
      <textarea
        className="w-full min-h-[140px] rounded-md border p-3 text-sm font-mono"
        placeholder="Paste a contract clause or section here..."
        value={clauseText}
        onChange={(e) => setClauseText(e.target.value)}
      />
      <Button onClick={handleAnalyze} disabled={loading || !clauseText.trim()}>Analyze clause</Button>
      {loading && <AiLoading />}
      {analysis && (
        <>
          <ClauseAnalysisView analysis={analysis} clauseText={clauseText} />
          <Button variant="outline" size="sm" onClick={handleSave}>Save to library</Button>
        </>
      )}
      {library.length > 0 && (
        <div className="border-t pt-4 space-y-2">
          <p className="text-sm font-medium">Saved clause library ({library.length})</p>
          {library.slice(0, 8).map((s) => (
            <button
              key={s.id}
              type="button"
              className="w-full text-left p-3 rounded-lg border text-sm hover:bg-gray-50"
              onClick={() => setViewSaved(s)}
            >
              <div className="flex justify-between gap-2">
                <span className="line-clamp-1">{s.analysis.identification}</span>
                <Badge className={RISK_COLORS[s.analysis.riskColor]}>{s.analysis.riskLevel}</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{new Date(s.createdAt).toLocaleDateString()}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ClauseAnalysisView({ analysis, clauseText }: { analysis: ClauseAnalysis; clauseText: string }) {
  return (
    <div className="space-y-4 text-sm">
      <div className="flex items-center gap-2">
        <h3 className="font-medium">{analysis.identification}</h3>
        <Badge className={RISK_COLORS[analysis.riskColor]}>{analysis.riskLevel} risk</Badge>
      </div>
      <p className="text-muted-foreground">{analysis.requirement}</p>
      <div className="p-4 rounded-lg border bg-gray-50 space-y-2">
        <p className="font-medium">Plain English</p>
        <p>{analysis.plainEnglish}</p>
        <p className="text-xs text-muted-foreground">{analysis.dayToDay}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><p className="font-medium mb-1">What could go wrong</p><ul className="list-disc list-inside text-muted-foreground text-xs">{analysis.whatCouldGoWrong.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><p className="font-medium mb-1">Scenarios</p><ul className="list-disc list-inside text-muted-foreground text-xs">{analysis.scenarios.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>
      <p className="text-xs"><span className="font-medium">Dollar exposure: </span>{analysis.dollarExposure}</p>
      <div className="p-4 rounded-lg border border-amber-200 bg-amber-50">
        <p className="font-medium text-amber-950">Negotiation guide</p>
        <p className="text-amber-900 text-xs mt-1">{analysis.negotiable ? "Negotiable — " : "Mandatory FAR clause — "}{analysis.negotiationGuide}</p>
        {analysis.alternativeLanguage && (
          <pre className="mt-2 text-xs whitespace-pre-wrap font-mono bg-white p-2 rounded border">{analysis.alternativeLanguage}</pre>
        )}
      </div>
      <div><p className="font-medium mb-1">Compliance checklist</p><ul className="list-disc list-inside text-xs text-muted-foreground">{analysis.compliance.map((x) => <li key={x}>{x}</li>)}</ul></div>
      <div><p className="font-medium mb-1">Related clauses</p><p className="text-xs text-muted-foreground">{analysis.relatedClauses.join(" · ")}</p></div>
      <details className="text-xs"><summary className="cursor-pointer text-muted-foreground">Original clause text</summary><pre className="mt-2 p-2 bg-gray-50 rounded font-mono whitespace-pre-wrap">{clauseText}</pre></details>
    </div>
  );
}
