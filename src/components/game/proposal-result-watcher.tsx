"use client";

import { useEffect, useRef, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { useMartin } from "@/hooks/use-martin";
import { ProposalDebriefModal } from "@/components/game/compliance-audit-modal";
import { ProposalWinModal } from "@/components/education/proposal-win-modal";
import { LivePracticeDebriefModal } from "@/components/tools/live-practice-debrief-modal";
import { getLivePracticeContext } from "@/lib/tools/storage";

export function ProposalResultWatcher() {
  const submitted = useGameStore((s) => s.submitted);
  const addNotification = useGameStore((s) => s.addNotification);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const learnConcept = useGameStore((s) => s.learnConcept);
  const recordDecision = useGameStore((s) => s.recordDecision);
  const { askMartin } = useMartin();
  const processed = useRef(new Set<string>());
  const [debriefId, setDebriefId] = useState<string | null>(null);
  const [winId, setWinId] = useState<string | null>(null);
  const [livePracticeProposal, setLivePracticeProposal] = useState<typeof submitted[0] | null>(null);

  useEffect(() => {
    submitted.forEach((p) => {
      if (p.result === "pending" || processed.current.has(p.id)) return;
      processed.current.add(p.id);

      if (p.result === "won") {
        addNotification(`Won: ${p.oppTitle} — ${formatCurrency(p.value)}`, "success");
        setWinId(p.id);
        if (p.oppId.startsWith("live-") && getLivePracticeContext(p.oppId)) {
          setLivePracticeProposal(p);
        }
        setActiveTab("contracts");
        learnConcept(p.opp.evalCriteria === "LPTA" ? "lpta_eval" : "best_value_eval");
        askMartin({
          trigger: "proposal_win",
          prompt: `Won '${p.oppTitle}' at ${p.agency} — ${formatCurrency(p.value)}. Top factor likely ${p.sliders.price >= 4 ? "price" : "technical/past performance"}. ${p.opp.evalCriteria}. Give 6-8 sentences on first 30 days post-award including FAR 52.232-25 payment setup and CPARS strategy. End with one specific action.`,
        });
      } else {
        addNotification(`Lost: ${p.oppTitle} — debrief available`, "warning");
        setDebriefId(p.id);
        if (p.oppId.startsWith("live-") && getLivePracticeContext(p.oppId)) {
          setLivePracticeProposal(p);
        }
        learnConcept("debrief_rights");
        recordDecision(false);
        askMartin({
          trigger: "proposal_loss",
          prompt: `Lost '${p.oppTitle}' at ${p.agency}. Win prob ${formatPercent(p.winProbability)}. Tech ${p.sliders.technical}/5, Price ${p.sliders.price}/5. ${p.opp.evalCriteria}. Give 6-8 sentence evaluation room debrief citing FAR 15.506. End with one specific action.`,
        });
      }
    });
  }, [submitted, addNotification, setActiveTab, askMartin, learnConcept, recordDecision]);

  return (
    <>
      {winId && <ProposalWinModal proposalId={winId} onClose={() => setWinId(null)} />}
      {debriefId && <ProposalDebriefModal proposalId={debriefId} onClose={() => setDebriefId(null)} />}
      {livePracticeProposal && (
        <LivePracticeDebriefModal
          proposal={livePracticeProposal}
          onClose={() => setLivePracticeProposal(null)}
        />
      )}
    </>
  );
}
