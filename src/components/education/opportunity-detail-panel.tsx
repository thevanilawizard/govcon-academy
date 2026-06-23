"use client";

import { useGameStore } from "@/lib/game/store";
import {
  buildProfileAnalysis,
  explainContractType,
  explainEvalCriteria,
  explainNaics,
  explainSetAside,
  getRedFlags,
  MARKET_INTELLIGENCE,
  OPPORTUNITY_CHECKLIST,
  parseSolicitationNumber,
  scoreOpportunity,
} from "@/lib/education/opportunity-intelligence";
import { RealWorldCallout } from "@/components/education/real-world-callout";
import { formatCurrency } from "@/lib/utils";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Opportunity } from "@/lib/game/types";

const GRADE_COLORS: Record<string, string> = {
  A: "bg-emerald-100 text-emerald-800 border-emerald-300",
  B: "bg-green-100 text-green-800 border-green-300",
  C: "bg-amber-100 text-amber-800 border-amber-300",
  D: "bg-orange-100 text-orange-800 border-orange-300",
  F: "bg-red-100 text-red-800 border-red-300",
};

export function OpportunityDetailPanel({
  opp,
  onStartBid,
  onBack,
}: {
  opp: Opportunity;
  onStartBid: () => void;
  onBack: () => void;
}) {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const companyOps = useGameStore((s) => s.companyOps);
  const learnConcept = useGameStore((s) => s.learnConcept);

  if (!form || !profile) return null;

  const score = scoreOpportunity(opp, form, profile, companyOps);
  const profileLines = buildProfileAnalysis(opp, form, profile, score);
  const redFlags = getRedFlags(opp, form, profile);

  const handleStart = () => {
    learnConcept("solicitation_reading");
    learnConcept(opp.evalCriteria === "LPTA" ? "lpta_eval" : "best_value_eval");
    onStartBid();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground mb-2">
            ← Back to opportunities
          </button>
          <h2 className="text-xl font-medium">{opp.title}</h2>
          <p className="text-sm text-muted-foreground">{opp.solicitationNumber} · {opp.agency}</p>
        </div>
        <Badge variant="outline" className={`text-lg px-3 py-1 ${GRADE_COLORS[score.grade]}`}>
          Grade {score.grade} · {score.total}/100
        </Badge>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Opportunity Intelligence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-medium mb-1">Solicitation number</p>
            <p className="text-muted-foreground leading-relaxed">
              {parseSolicitationNumber(opp.solicitationNumber, opp.agencyCode)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium mb-1">Set-aside</p>
              <SetAsideBadge setAside={opp.setAside} />
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{explainSetAside(opp)}</p>
            </div>
            <div>
              <p className="font-medium mb-1">NAICS</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{explainNaics(opp, form)}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Contract type ({opp.contractType})</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{explainContractType(opp.contractType)}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Evaluation ({opp.evalCriteria})</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{explainEvalCriteria(opp.evalCriteria)}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <span><strong>Value:</strong> {formatCurrency(opp.estimatedValue)}</span>
            <span><strong>Days left:</strong> {opp.daysRemaining}</span>
            <span><strong>Competition:</strong> {opp.competitionLevel}</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">What this means for you</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {profileLines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-emerald-600 shrink-0">→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-900">Red flags to watch for</CardTitle>
          </CardHeader>
          <CardContent>
            {redFlags.length === 0 ? (
              <p className="text-sm text-muted-foreground">No major red flags detected — still run bid/no-bid.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {redFlags.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-red-600 shrink-0">⚠</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Score breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {score.breakdown.map((b) => (
            <div key={b.label} className="flex justify-between text-xs gap-4">
              <span>{b.label} — {b.note}</span>
              <span className="font-medium shrink-0">{b.points}/{b.max}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">What to look for first</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {OPPORTUNITY_CHECKLIST.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-3">
        {MARKET_INTELLIGENCE.slice(0, 2).map((m) => (
          <div key={m.title} className="p-3 rounded-lg border text-xs">
            <p className="font-medium mb-1">{m.title}</p>
            <p className="text-muted-foreground">{m.text}</p>
          </div>
        ))}
      </div>

      <RealWorldCallout eventKey="opportunity_viewed" />

      <Button size="lg" className="w-full sm:w-auto" onClick={handleStart}>
        Start Bid Factory →
      </Button>
    </div>
  );
}
