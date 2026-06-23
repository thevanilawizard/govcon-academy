"use client";

import { useEffect, useRef } from "react";
import { useGameStore } from "@/lib/game/store";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { useMartin } from "@/hooks/use-martin";

export function ProposalResultWatcher() {
  const submitted = useGameStore((s) => s.submitted);
  const addNotification = useGameStore((s) => s.addNotification);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const { askMartin } = useMartin();
  const processed = useRef(new Set<string>());

  useEffect(() => {
    submitted.forEach((p) => {
      if (p.result === "pending" || processed.current.has(p.id)) return;
      processed.current.add(p.id);

      if (p.result === "won") {
        addNotification(`Won: ${p.oppTitle} — ${formatCurrency(p.value)}`, "success");
        setActiveTab("contracts");
        askMartin({
          trigger: "proposal_win",
          prompt: `Won '${p.oppTitle}' at ${p.agency} — ${formatCurrency(p.value)} over ${p.opp.optionYears} years. ${p.opp.evalCriteria}. Contract #${useGameStore.getState().profile?.contractsWon ?? 1}. What to do in first 30 days and what this win means for the pipeline.`,
        });
      } else {
        addNotification(`Lost: ${p.oppTitle}`, "warning");
        askMartin({
          trigger: "proposal_loss",
          prompt: `Lost '${p.oppTitle}' at ${p.agency}. Win prob was ${formatPercent(p.winProbability)}. Eval: ${p.opp.evalCriteria}. Tech: ${p.sliders.technical}/5, Price: ${p.sliders.price}/5, Past perf: ${p.sliders.pastPerformance}/5. ${p.sliders.teamingPartner ? "Had teaming partner." : ""} ${p.sliders.pastPerformance <= 2 ? "Weak past performance score." : ""} Give a specific debrief.`,
        });
      }
    });
  }, [submitted, addNotification, setActiveTab, askMartin]);

  return null;
}
