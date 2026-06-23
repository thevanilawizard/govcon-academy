"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { scoreOpportunity } from "@/lib/education/opportunity-intelligence";
import { getGuidedOpportunityHover } from "@/lib/education/guided-advice";
import { OpportunityDetailPanel } from "@/components/education/opportunity-detail-panel";
import { LiveSamTool } from "@/components/tools/live-sam-tool";
import { formatCurrency } from "@/lib/utils";
import { MATCH_BORDER_COLORS } from "@/lib/game/constants";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Opportunity } from "@/lib/game/types";

const GRADE_COLORS: Record<string, string> = {
  A: "bg-emerald-600 text-white",
  B: "bg-green-600 text-white",
  C: "bg-amber-500 text-white",
  D: "bg-orange-500 text-white",
  F: "bg-red-600 text-white",
};

function OppCard({
  opp,
  onSelect,
  onHover,
}: {
  opp: Opportunity;
  onSelect: () => void;
  onHover: (opp: Opportunity | null) => void;
}) {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const companyOps = useGameStore((s) => s.companyOps);
  const borderColor = MATCH_BORDER_COLORS[opp.matchTier];
  const tierLabel =
    opp.matchTier === "strong" ? "Strong Match" : opp.matchTier === "partial" ? "Partial Match" : "Stretch";

  const grade =
    form && profile ? scoreOpportunity(opp, form, profile, companyOps).grade : null;

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => onHover(opp)}
      onMouseLeave={() => onHover(null)}
      className="w-full text-left p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
      style={{ borderColor, borderWidth: "2px" }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs text-muted-foreground">{tierLabel}</span>
        <div className="flex items-center gap-2">
          {grade && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${GRADE_COLORS[grade]}`}>
              {grade}
            </span>
          )}
          <span className="text-xs text-muted-foreground">{opp.daysRemaining}d left</span>
        </div>
      </div>
      <h3 className="text-sm font-medium mb-1">{opp.title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{opp.solicitationNumber}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        <SetAsideBadge setAside={opp.setAside} />
        <Badge variant="outline">{opp.agencyCode}</Badge>
        <Badge variant="outline">{opp.naicsCode}</Badge>
      </div>
      <div className="flex justify-between text-xs">
        <span className="font-medium">{formatCurrency(opp.estimatedValue)}</span>
        <span className="text-muted-foreground">{opp.contractType} · {opp.evalCriteria}</span>
      </div>
    </button>
  );
}

export function OpportunitiesTab() {
  const opps = useGameStore((s) => s.opps);
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const selectedOppId = useGameStore((s) => s.selectedOppId);
  const setSelectedOppId = useGameStore((s) => s.setSelectedOppId);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const guidedMode = useGameStore((s) => s.guidedMode);
  const [hoveredOpp, setHoveredOpp] = useState<Opportunity | null>(null);

  const selectedOpp = opps.find((o) => o.id === selectedOppId);

  if (selectedOpp && form && profile) {
    return (
      <OpportunityDetailPanel
        opp={selectedOpp}
        onBack={() => setSelectedOppId(null)}
        onStartBid={() => setActiveTab("proposals")}
      />
    );
  }

  const strong = opps.filter((o) => o.matchTier === "strong");
  const partial = opps.filter((o) => o.matchTier === "partial");
  const stretch = opps.filter((o) => o.matchTier === "stretch");

  const renderSection = (title: string, items: Opportunity[], color: string) =>
    items.length > 0 && (
      <section>
        <h3 className={`text-sm font-medium mb-3 ${color}`}>{title} ({items.length})</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((o) => (
            <OppCard
              key={o.id}
              opp={o}
              onSelect={() => setSelectedOppId(o.id)}
              onHover={setHoveredOpp}
            />
          ))}
        </div>
      </section>
    );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Opportunity Browser</h2>
        <p className="text-sm text-muted-foreground">
          Simulated solicitations for practice, or search live SAM.gov opportunities with your API key.
        </p>
      </div>

      <Tabs defaultValue="simulated">
        <TabsList>
          <TabsTrigger value="simulated">Simulated opportunities</TabsTrigger>
          <TabsTrigger value="live-sam">Live SAM.gov</TabsTrigger>
        </TabsList>

        <TabsContent value="simulated" className="space-y-6 mt-4">
          {guidedMode && hoveredOpp && (
            <p className="text-xs p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-950">
              <span className="font-medium">Martin: </span>
              {getGuidedOpportunityHover(hoveredOpp)}
            </p>
          )}
          {renderSection("Strong Match", strong, "text-emerald-700")}
          {renderSection("Partial Match", partial, "text-amber-700")}
          {renderSection("Stretch / Full & Open", stretch, "text-gray-500")}
        </TabsContent>

        <TabsContent value="live-sam" className="mt-4">
          <LiveSamTool onPracticeBid={() => setActiveTab("proposals")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
