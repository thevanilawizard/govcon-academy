"use client";

import { useState } from "react";
import { FAR_CLAUSE_MAP } from "@/lib/game/far-library";
import { useGameStore } from "@/lib/game/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildLossDebrief } from "@/lib/education/proposal-education";
import { RealWorldCallout } from "@/components/education/real-world-callout";
import { formatCurrency } from "@/lib/utils";

export function ComplianceAuditModal() {
  const pendingAudit = useGameStore((s) => s.pendingAudit);
  const companyOps = useGameStore((s) => s.companyOps);
  const applyAuditPenalty = useGameStore((s) => s.applyAuditPenalty);
  const dismissAudit = useGameStore((s) => s.dismissAudit);
  const setActiveTab = useGameStore((s) => s.setActiveTab);

  if (!pendingAudit) return null;

  const clause = FAR_CLAUSE_MAP[pendingAudit.farClauseId];
  const wouldDebar = companyOps
    ? companyOps.complianceScore - pendingAudit.penalty <= 0
    : false;

  const handleAccept = () => {
    const penalty = pendingAudit.warned
      ? Math.round(pendingAudit.penalty * 0.5)
      : pendingAudit.penalty;
    applyAuditPenalty(penalty, pendingAudit.farClauseId);
  };

  return (
    <Dialog open onOpenChange={() => dismissAudit()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base">
            {pendingAudit.warned ? "Compliance Audit (Partial Warning)" : "Compliance Audit Event"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p className="font-medium">{pendingAudit.title}</p>
          <p className="text-muted-foreground leading-relaxed">{pendingAudit.description}</p>
          {clause && (
            <div className="p-3 rounded-lg border bg-amber-50 text-amber-950">
              <p className="font-medium text-xs mb-1">{clause.citation} — {clause.title}</p>
              <p className="text-xs">{clause.violationConsequence}</p>
            </div>
          )}
          <p className="text-red-700 font-medium">
            Penalty: −{pendingAudit.penalty} Past Performance
            {wouldDebar && " · Compliance score will hit zero — debarment risk"}
          </p>
          {pendingAudit.warned ? (
            <p className="text-emerald-700 text-xs">
              You reviewed this clause in the FAR library — penalty reduced by preparedness.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Tip: Search the Field Manual tab before audits to unlock warnings and reduce penalties.
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={() => { dismissAudit(); setActiveTab("field-manual"); }}>
            Open Field Manual
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept Finding
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Debrief modal shown after proposal loss — teaches FAR 15.506 rights. */
export function ProposalDebriefModal({
  proposalId,
  onClose,
}: {
  proposalId: string;
  onClose: () => void;
}) {
  const submitted = useGameStore((s) => s.submitted);
  const proposal = submitted.find((p) => p.id === proposalId);
  const [open, setOpen] = useState(true);

  if (!proposal?.debrief || proposal.result !== "lost") return null;

  const debrief = buildLossDebrief(proposal, proposal.sliders);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base">Mandatory Debrief — FAR 15.506</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-4">
          {debrief.headline} for <span className="font-medium text-foreground">{proposal.oppTitle}</span>.
        </p>
        <div className="p-3 rounded-lg border bg-gray-50 text-sm mb-4 leading-relaxed">
          {debrief.evaluationRoom}
        </div>
        <p className="text-sm mb-4 leading-relaxed">{debrief.winnerProfile}</p>
        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Your Technical</p>
            <p className="text-lg font-medium">{proposal.debrief.technicalScore}/100</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Your Price</p>
            <p className="text-lg font-medium">{proposal.debrief.priceScore}/100</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Past Performance</p>
            <p className="text-lg font-medium">{proposal.debrief.pastPerfScore}/100</p>
          </div>
          <div className="p-3 rounded-lg border bg-red-50">
            <p className="text-xs text-muted-foreground">Winning Score</p>
            <p className="text-lg font-medium text-red-800">{Math.round(proposal.debrief.competitorScore)}/100</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Value: {formatCurrency(proposal.value)} · Win probability was {Math.round(proposal.winProbability)}%
        </p>
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">3 things to do differently</p>
          <ul className="space-y-1 text-sm">
            {debrief.actions.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-primary shrink-0">→</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <RealWorldCallout eventKey="proposal_loss" />
        <Button className="mt-4 w-full" onClick={handleClose}>
          Close Debrief
        </Button>
      </DialogContent>
    </Dialog>
  );
}
