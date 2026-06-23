"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { calculateWinProbability, getEvalGuidance } from "@/lib/game/engine";
import { formatCurrency, formatPercent, getWinProbColor } from "@/lib/utils";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { playerMeetsClearance } from "@/lib/game/engine";
import { useMartin } from "@/hooks/use-martin";

export function ProposalsTab() {
  const selectedOppId = useGameStore((s) => s.selectedOppId);
  const opps = useGameStore((s) => s.opps);
  const submitted = useGameStore((s) => s.submitted);
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const submitProposal = useGameStore((s) => s.submitProposal);
  const resolvePendingProposal = useGameStore((s) => s.resolvePendingProposal);
  const setSelectedOppId = useGameStore((s) => s.setSelectedOppId);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const { askMartin } = useMartin();

  const [technical, setTechnical] = useState(3);
  const [price, setPrice] = useState(3);
  const [pastPerformance, setPastPerformance] = useState(3);
  const [teamingPartner, setTeamingPartner] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const opp = opps.find((o) => o.id === selectedOppId);

  const sliders = { technical, price, pastPerformance, teamingPartner };
  const winProb =
    opp && form && profile
      ? calculateWinProbability(opp, profile, form, sliders)
      : 0;
  const probStyle = getWinProbColor(winProb);

  const handleSubmit = () => {
    if (!opp) return;
    setSubmitting(true);
    const proposalId = submitProposal(opp.id, sliders, winProb);
    const delay = 3000 + Math.random() * 4000;
    setTimeout(() => {
      resolvePendingProposal(proposalId);
      setSubmitting(false);
      setSelectedOppId(null);
      setActiveTab("proposals");
    }, delay);
  };

  const handleAskMartin = () => {
    if (!opp || !profile) return;
    askMartin({
      trigger: "bid_detail",
      prompt: `Evaluating whether to bid on '${opp.title}' at ${opp.agency}: ${formatCurrency(opp.estimatedValue)}, ${opp.evalCriteria}, ${opp.competitionLevel} competition, NAICS match: ${opp.naicsMatch}, SA match: ${opp.saMatch}. ${profile.contractsWon} contracts won, avg CPARS ${profile.avgPerf || "none"}. Should we bid? Give a direct recommendation with reasoning.`,
    });
    setActiveTab("martin");
  };

  if (!opp) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-medium">Proposals</h2>
        {submitted.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Select an opportunity from the Opportunities tab to build a proposal.
          </p>
        ) : (
          <div className="space-y-3">
            {submitted.map((p) => (
              <Card key={p.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium">{p.oppTitle}</h3>
                      <p className="text-xs text-muted-foreground">{p.agency}</p>
                    </div>
                    <Badge
                      variant={p.result === "won" ? "default" : p.result === "lost" ? "outline" : "secondary"}
                      className={
                        p.result === "won"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : p.result === "lost"
                          ? "bg-red-100 text-red-800 border-red-200"
                          : ""
                      }
                    >
                      {p.result === "pending" ? "Evaluating..." : p.result === "won" ? "Won" : "Lost"}
                    </Badge>
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">
                    {formatCurrency(p.value)} · Win prob: {formatPercent(p.winProbability)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  const checks = [
    { label: "NAICS match", pass: opp.naicsMatch },
    { label: "Set-aside eligibility", pass: opp.saMatch },
    { label: "Clearance requirement", pass: !opp.requiresClearance || (form ? playerMeetsClearance(form, opp) : false) },
    { label: "Competition level", pass: opp.competitionLevel !== "high", warn: opp.competitionLevel === "high" },
    { label: "Past performance", pass: (profile?.contractsWon ?? 0) > 0, warn: profile?.contractsWon === 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <button
            onClick={() => setSelectedOppId(null)}
            className="text-xs text-muted-foreground hover:text-foreground mb-2"
          >
            ← Back to proposal history
          </button>
          <h2 className="text-xl font-medium">{opp.title}</h2>
          <p className="text-sm text-muted-foreground">{opp.solicitationNumber} · {opp.agency}</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleAskMartin}>
          Ask Martin
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Opportunity Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Value</span>
              <span className="font-medium">{formatCurrency(opp.estimatedValue)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type</span>
              <span>{opp.contractType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evaluation</span>
              <span>{opp.evalCriteria}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Competition</span>
              <span className="capitalize">{opp.competitionLevel}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Set-aside</span>
              <SetAsideBadge setAside={opp.setAside} />
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">NAICS</span>
              <span>{opp.naicsCode} — {opp.naicsLabel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Option Years</span>
              <span>{opp.optionYears}</span>
            </div>
            {opp.requiresClearance && (
              <div className="text-amber-700 text-xs">
                ⚠ Requires {opp.clearanceRequired === "top_secret" ? "Top Secret" : "Secret"} clearance
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Bid/No-Bid Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {checks.map((c) => (
                <li key={c.label} className="flex items-center gap-2 text-sm">
                  <span className={c.pass ? "text-emerald-600" : c.warn ? "text-amber-600" : "text-red-600"}>
                    {c.pass ? "✓" : c.warn ? "⚠" : "✗"}
                  </span>
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Proposal Builder</CardTitle>
          <p className="text-sm text-muted-foreground">{getEvalGuidance(opp.evalCriteria)}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Technical Approach</Label>
              <span className="text-sm text-muted-foreground">{technical}/5</span>
            </div>
            <Slider value={[technical]} min={1} max={5} step={1} onValueChange={([v]) => setTechnical(v)} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Price Competitiveness</Label>
              <span className="text-sm text-muted-foreground">{price}/5</span>
            </div>
            <Slider value={[price]} min={1} max={5} step={1} onValueChange={([v]) => setPrice(v)} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Past Performance</Label>
              <span className="text-sm text-muted-foreground">{pastPerformance}/5</span>
            </div>
            <Slider value={[pastPerformance]} min={1} max={5} step={1} onValueChange={([v]) => setPastPerformance(v)} />
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="teaming"
              checked={teamingPartner}
              onCheckedChange={(v) => setTeamingPartner(!!v)}
            />
            <div>
              <Label htmlFor="teaming">Teaming Partner (+11% win probability)</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Partner with an established firm to strengthen past performance and technical depth.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Win Probability</span>
              <span className={`text-2xl font-medium ${probStyle.color}`}>
                {formatPercent(winProb)}
              </span>
            </div>
            <p className={`text-sm mt-1 ${probStyle.color}`}>{probStyle.label}</p>
          </div>

          <Button onClick={handleSubmit} disabled={submitting} className="w-full">
            {submitting ? "Submitting — agency evaluating..." : "Submit Proposal"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
