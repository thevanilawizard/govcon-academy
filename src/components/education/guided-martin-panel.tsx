"use client";

import { useGameStore } from "@/lib/game/store";
import { getGuidedAdvice } from "@/lib/education/guided-advice";
import type { Opportunity } from "@/lib/game/types";
import { MartinCard } from "@/components/game/martin-card";

export function GuidedMartinPanel({
  hoveredOpp,
}: {
  hoveredOpp?: Opportunity | null;
}) {
  const guidedMode = useGameStore((s) => s.guidedMode);
  const activeTab = useGameStore((s) => s.activeTab);
  const quarter = useGameStore((s) => s.quarter);
  const selectedOppId = useGameStore((s) => s.selectedOppId);
  const opps = useGameStore((s) => s.opps);
  const selectedOpp = opps.find((o) => o.id === selectedOppId);

  if (!guidedMode) return null;

  const screen = activeTab as "dashboard" | "opportunities" | "proposals" | "contracts" | "field-manual" | "martin";
  const opp = hoveredOpp ?? selectedOpp;
  const advice = getGuidedAdvice(screen, { opp, quarter });

  return (
    <aside className="w-full lg:w-72 shrink-0 order-1 lg:order-2 lg:self-start relative z-0">
      <div className="space-y-2 border rounded-lg p-3 bg-muted/30 lg:border-0 lg:bg-transparent lg:p-0">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Martin — Guided Mode
        </p>
        <MartinCard content={advice} trigger="guided" />
      </div>
    </aside>
  );
}
