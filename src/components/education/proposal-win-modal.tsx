"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { buildWinExplanation } from "@/lib/education/proposal-education";
import { RealWorldCallout } from "@/components/education/real-world-callout";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProposalWinModal({
  proposalId,
  onClose,
}: {
  proposalId: string;
  onClose: () => void;
}) {
  const submitted = useGameStore((s) => s.submitted);
  const learnConcept = useGameStore((s) => s.learnConcept);
  const recordDecision = useGameStore((s) => s.recordDecision);
  const proposal = submitted.find((p) => p.id === proposalId);
  const [open, setOpen] = useState(true);

  if (!proposal || proposal.result !== "won") return null;

  const win = buildWinExplanation(proposal, proposal.sliders);

  const handleClose = () => {
    learnConcept("cpars_system");
    recordDecision(true);
    setOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base">Why You Won — Award Analysis</DialogTitle>
        </DialogHeader>
        <p className="text-sm leading-relaxed mb-4">{win.headline}</p>
        <p className="text-sm font-medium mb-2">
          Top factor: <span className="text-primary">{win.topFactor}</span>
        </p>
        <ul className="space-y-2 text-sm mb-4">
          {win.factors.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-emerald-600 shrink-0">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mb-4">
          {formatCurrency(proposal.value)} · {proposal.opp.evalCriteria} · Win prob was {Math.round(proposal.winProbability)}%
        </p>
        <RealWorldCallout eventKey="proposal_win" />
        <Button className="mt-4 w-full" onClick={handleClose}>
          Continue to Contract Setup
        </Button>
      </DialogContent>
    </Dialog>
  );
}
