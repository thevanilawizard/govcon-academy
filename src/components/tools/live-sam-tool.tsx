"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { SET_ASIDE_MAP, NAICS_CODES } from "@/lib/game/constants";
import { formatCurrency } from "@/lib/utils";
import { MATCH_BORDER_COLORS } from "@/lib/game/constants";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { SamApiKeySetup } from "@/components/tools/shared/sam-api-key-setup";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { searchSamGov, fetchSamOpportunity, callToolAi } from "@/lib/tools/api-client";
import { getSamGovApiKey } from "@/lib/tools/storage";
import { liveSamToGameOpportunity } from "@/lib/tools/samgov";
import type { LiveSamOpportunity } from "@/lib/tools/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const GRADE_COLORS: Record<string, string> = {
  A: "bg-emerald-600 text-white",
  B: "bg-green-600 text-white",
  C: "bg-amber-500 text-white",
  D: "bg-orange-500 text-white",
  F: "bg-red-600 text-white",
};

export function LiveSamTool({
  onPracticeBid,
  showSetup = true,
}: {
  onPracticeBid?: (oppId: string) => void;
  showSetup?: boolean;
}) {
  const form = useGameStore((s) => s.form);
  const companyOps = useGameStore((s) => s.companyOps);
  const [keyword, setKeyword] = useState("");
  const [naics, setNaics] = useState(form?.naicsCodes[0] ?? "");
  const [setAside, setSetAside] = useState("");
  const [agency, setAgency] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [maxDays, setMaxDays] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<LiveSamOpportunity[]>([]);
  const [selected, setSelected] = useState<LiveSamOpportunity | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const apiKey = getSamGovApiKey();

  const handleSearch = async () => {
    if (!apiKey) {
      setError("Add your SAM.gov API key below to search live opportunities.");
      return;
    }
    setLoading(true);
    setError(null);
    setSelected(null);
    setAnalysis(null);
    try {
      const data = await searchSamGov(apiKey, {
        keyword: keyword || undefined,
        naics: naics || undefined,
        setAside: setAside || undefined,
        agency: agency || undefined,
        minValue: minValue ? Number(minValue) : undefined,
        maxValue: maxValue ? Number(maxValue) : undefined,
        daysRemaining: maxDays ? Number(maxDays) : undefined,
        profile: form,
      });
      setResults(data.opportunities ?? []);
      if (!data.opportunities?.length) setError("No opportunities found — try broader filters.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (opp: LiveSamOpportunity) => {
    setSelected(opp);
    setAnalyzing(true);
    setAnalysis(null);
    try {
      let description = opp.description;
      if (apiKey) {
        const detail = await fetchSamOpportunity(apiKey, opp.noticeId);
        description = detail.rawDescription ?? detail.opportunity?.description ?? description;
      }
      const context = [
        `Company: ${form?.companyName ?? "Independent user"}`,
        `NAICS: ${form?.naicsCodes.join(", ") ?? "Not specified"}`,
        `Set-asides: ${form?.setAsides.join(", ") ?? "Not specified"}`,
        `Bonding: ${companyOps?.bondingCapacity ?? "Unknown"}`,
        `Opportunity grade: ${opp.grade}`,
      ].join("\n");
      const res = await callToolAi<{ message?: string }>(
        "opportunity-analysis",
        `Analyze this live SAM.gov opportunity:\n\nTitle: ${opp.title}\nSolicitation: ${opp.solicitationNumber}\nAgency: ${opp.agency}\nNAICS: ${opp.naicsCode}\nSet-aside: ${opp.setAsideLabel}\nValue: ${opp.estimatedValue ? formatCurrency(opp.estimatedValue) : "Not stated"}\nDeadline: ${opp.responseDeadline} (${opp.daysRemaining} days)\n\nDescription:\n${description}`,
        context
      );
      setAnalysis(res.message ?? "Analysis unavailable — check ANTHROPIC_API_KEY.");
    } catch {
      setAnalysis("Analysis failed. Verify your API configuration.");
    } finally {
      setAnalyzing(false);
    }
  };

  const handlePractice = (opp: LiveSamOpportunity) => {
    const gameOpp = liveSamToGameOpportunity(opp);
    const store = useGameStore.getState();
    const exists = store.opps.some((o) => o.id === gameOpp.id);
    if (!exists) {
      useGameStore.setState({ opps: [gameOpp, ...store.opps] });
    }
    store.setSelectedOppId(gameOpp.id);
    onPracticeBid?.(gameOpp.id);
  };

  if (selected) {
    return (
      <div className="space-y-4">
        <button type="button" className="text-xs text-muted-foreground" onClick={() => setSelected(null)}>
          ← Back to results
        </button>
        <div>
          <h3 className="font-medium">{selected.title}</h3>
          <p className="text-sm text-muted-foreground">{selected.solicitationNumber}</p>
        </div>
        {analyzing && <AiLoading label="Martin Business is analyzing this opportunity..." />}
        {analysis && (
          <div className="prose prose-sm max-w-none text-sm whitespace-pre-wrap leading-relaxed p-4 rounded-lg border bg-gray-50">
            {analysis}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={() => handlePractice(selected)}>Practice bid on this opportunity</Button>
          <Button size="sm" variant="outline" asChild>
            <a href={selected.uiLink} target="_blank" rel="noopener noreferrer">View on SAM.gov</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showSetup && <SamApiKeySetup compact={!!apiKey} />}

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Input placeholder="Keyword search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <Input placeholder="NAICS code" value={naics} onChange={(e) => setNaics(e.target.value)} list="naics-list" />
        <datalist id="naics-list">
          {NAICS_CODES.map((n) => (
            <option key={n.code} value={n.code}>{n.label}</option>
          ))}
        </datalist>
        <select
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={setAside}
          onChange={(e) => setSetAside(e.target.value)}
        >
          <option value="">All set-asides</option>
          {Object.entries(SET_ASIDE_MAP).map(([id, v]) => (
            <option key={id} value={id}>{v.label}</option>
          ))}
        </select>
        <Input placeholder="Agency / department" value={agency} onChange={(e) => setAgency(e.target.value)} />
        <Input placeholder="Min value $" value={minValue} onChange={(e) => setMinValue(e.target.value)} type="number" />
        <Input placeholder="Max value $" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} type="number" />
        <Input placeholder="Max days remaining" value={maxDays} onChange={(e) => setMaxDays(e.target.value)} type="number" />
      </div>

      <Button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching SAM.gov..." : "Search live opportunities"}
      </Button>

      {error && <p className="text-sm text-amber-700">{error}</p>}

      <div className="grid gap-3 md:grid-cols-2">
        {results.map((opp) => (
          <Card
            key={opp.noticeId}
            className="cursor-pointer hover:border-primary/40"
            style={{ borderColor: MATCH_BORDER_COLORS[opp.matchTier], borderWidth: 2 }}
            onClick={() => handleAnalyze(opp)}
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-start gap-2">
                <Badge variant="outline" className="text-xs">
                  {opp.matchTier === "strong" ? "Strong Match" : opp.matchTier === "partial" ? "Partial" : "Stretch"}
                </Badge>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${GRADE_COLORS[opp.grade]}`}>
                  {opp.grade}
                </span>
              </div>
              <h3 className="text-sm font-medium">{opp.title}</h3>
              <p className="text-xs text-muted-foreground">{opp.solicitationNumber}</p>
              <div className="flex flex-wrap gap-1">
                <SetAsideBadge setAside={opp.setAside} />
                <Badge variant="outline">{opp.naicsCode}</Badge>
              </div>
              <div className="flex justify-between text-xs">
                <span>{opp.estimatedValue ? formatCurrency(opp.estimatedValue) : "Value TBD"}</span>
                <span className="text-muted-foreground">{opp.daysRemaining}d left</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">{opp.agency}</p>
              <div className="flex gap-2 pt-1">
                <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); handleAnalyze(opp); }}>
                  Analyze
                </Button>
                <Button size="sm" variant="ghost" asChild onClick={(e) => e.stopPropagation()}>
                  <a href={opp.uiLink} target="_blank" rel="noopener noreferrer">SAM.gov ↗</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
