"use client";

import { useGameStore } from "@/lib/game/store";
import { formatCurrency } from "@/lib/utils";
import { MATCH_BORDER_COLORS } from "@/lib/game/constants";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Badge } from "@/components/ui/badge";
import type { Opportunity } from "@/lib/game/types";

function OppCard({ opp, onSelect }: { opp: Opportunity; onSelect: () => void }) {
  const borderColor = MATCH_BORDER_COLORS[opp.matchTier];
  const tierLabel =
    opp.matchTier === "strong"
      ? "Strong Match"
      : opp.matchTier === "partial"
      ? "Partial Match"
      : "Stretch";

  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
      style={{ borderColor, borderWidth: "2px" }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs text-muted-foreground">{tierLabel}</span>
        <span className="text-xs text-muted-foreground">{opp.daysRemaining}d left</span>
      </div>
      <h3 className="text-sm font-medium mb-1">{opp.title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{opp.solicitationNumber}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        <SetAsideBadge setAside={opp.setAside} />
        <Badge variant="outline">{opp.agencyCode}</Badge>
        <Badge variant="outline">{opp.naicsCode}</Badge>
        {opp.isDefense && <Badge variant="secondary">Defense</Badge>}
        {opp.requiresClearance && (
          <Badge variant="outline" className="text-amber-700 border-amber-300">
            {opp.clearanceRequired === "top_secret" ? "TS" : "Secret"}
          </Badge>
        )}
      </div>
      <div className="flex justify-between text-xs">
        <span className="font-medium">{formatCurrency(opp.estimatedValue)}</span>
        <span className="text-muted-foreground">
          {opp.contractType} · {opp.evalCriteria}
        </span>
      </div>
    </button>
  );
}

export function OpportunitiesTab() {
  const opps = useGameStore((s) => s.opps);
  const setSelectedOppId = useGameStore((s) => s.setSelectedOppId);
  const setActiveTab = useGameStore((s) => s.setActiveTab);

  const strong = opps.filter((o) => o.matchTier === "strong");
  const partial = opps.filter((o) => o.matchTier === "partial");
  const stretch = opps.filter((o) => o.matchTier === "stretch");

  const handleSelect = (id: string) => {
    setSelectedOppId(id);
    setActiveTab("proposals");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Opportunities</h2>
        <p className="text-sm text-muted-foreground">
          {opps.length} solicitations this quarter — click to evaluate and bid
        </p>
      </div>

      {strong.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3 text-emerald-700">Strong Match ({strong.length})</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {strong.map((o) => (
              <OppCard key={o.id} opp={o} onSelect={() => handleSelect(o.id)} />
            ))}
          </div>
        </section>
      )}

      {partial.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3 text-amber-700">Partial Match ({partial.length})</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {partial.map((o) => (
              <OppCard key={o.id} opp={o} onSelect={() => handleSelect(o.id)} />
            ))}
          </div>
        </section>
      )}

      {stretch.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3 text-gray-500">Stretch / Full & Open ({stretch.length})</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {stretch.map((o) => (
              <OppCard key={o.id} opp={o} onSelect={() => handleSelect(o.id)} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
