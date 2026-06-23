"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { BidFactoryWizard } from "@/components/game/bid-factory-wizard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProposalSliders } from "@/lib/game/types";

export function ProposalsTab() {
  const selectedOppId = useGameStore((s) => s.selectedOppId);
  const opps = useGameStore((s) => s.opps);
  const submitted = useGameStore((s) => s.submitted);
  const submitProposal = useGameStore((s) => s.submitProposal);
  const resolvePendingProposal = useGameStore((s) => s.resolvePendingProposal);
  const setSelectedOppId = useGameStore((s) => s.setSelectedOppId);
  const setActiveTab = useGameStore((s) => s.setActiveTab);

  const [submitting, setSubmitting] = useState(false);

  const opp = opps.find((o) => o.id === selectedOppId);

  const handleSubmit = (
    winProb: number,
    complianceScore: number,
    sliders: ProposalSliders
  ) => {
    if (!opp) return;
    setSubmitting(true);
    const proposalId = submitProposal(opp.id, sliders, winProb, complianceScore);
    const delay = 3000 + Math.random() * 4000;
    setTimeout(() => {
      resolvePendingProposal(proposalId);
      setSubmitting(false);
      setActiveTab("proposals");
    }, delay);
  };

  if (!opp) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-medium">Bid Factory</h2>
          <p className="text-sm text-muted-foreground mt-1">
            7-step proposal process — research, analysis, pricing, and submission.
          </p>
        </div>
        {submitted.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Select an opportunity from the Opportunities tab to start the Bid Factory.
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
                    {p.complianceScore !== undefined && ` · Compliance: ${p.complianceScore}/100`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <BidFactoryWizard
      opp={opp}
      onSubmit={handleSubmit}
      onCancel={() => setSelectedOppId(null)}
      submitting={submitting}
    />
  );
}
