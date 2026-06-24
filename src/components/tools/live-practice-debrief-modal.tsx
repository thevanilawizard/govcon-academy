"use client";

import { useEffect, useState } from "react";
import { callToolAi } from "@/lib/tools/api-client";
import { clearLivePracticeContext, getLivePracticeContext } from "@/lib/tools/storage";
import type { SubmittedProposal } from "@/lib/game/types";
import { formatCurrency } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiLoading } from "@/components/tools/shared/ai-loading";

export function LivePracticeDebriefModal({
  proposal,
  onClose,
}: {
  proposal: SubmittedProposal;
  onClose: () => void;
}) {
  const [comparison, setComparison] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const ctx = getLivePracticeContext(proposal.oppId);

  useEffect(() => {
    if (!ctx) {
      setLoading(false);
      return;
    }
    callToolAi<{ message?: string }>(
      "live-practice-debrief",
      `Simulated outcome: ${proposal.result?.toUpperCase()}\nOpportunity: ${proposal.oppTitle}\nAgency: ${proposal.agency}\nValue: ${formatCurrency(proposal.value)}\nWin probability was ${proposal.winProbability}%\nEval: ${proposal.opp.evalCriteria}`,
      `Prior Martin analysis of this live SAM.gov opportunity:\n${ctx.analysis}`
    )
      .then((res) => setComparison(res.message ?? null))
      .finally(() => setLoading(false));
  }, [ctx, proposal]);

  if (!ctx) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Live opportunity practice debrief</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Real SAM.gov opp: {ctx.title} · Simulated result:{" "}
          <strong className={proposal.result === "won" ? "text-emerald-700" : "text-red-700"}>
            {proposal.result}
          </strong>
        </p>
        {loading && <AiLoading label="Comparing simulation to real competitive landscape..." />}
        {comparison && (
          <div className="text-sm whitespace-pre-wrap leading-relaxed">{comparison}</div>
        )}
        <button
          type="button"
          className="text-sm underline text-muted-foreground"
          onClick={() => {
            clearLivePracticeContext(proposal.oppId);
            onClose();
          }}
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
}
