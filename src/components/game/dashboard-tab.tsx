"use client";

import { useGameStore } from "@/lib/game/store";
import { formatCurrency, getCashColor, getRunwayMonths } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMartin } from "@/hooks/use-martin";
import { MartinCard } from "@/components/game/martin-card";

export function DashboardTab() {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const quarter = useGameStore((s) => s.quarter);
  const contracts = useGameStore((s) => s.contracts);
  const opps = useGameStore((s) => s.opps);
  const martinMessages = useGameStore((s) => s.martinMessages);
  const advanceToNextQuarter = useGameStore((s) => s.advanceToNextQuarter);
  const addNotification = useGameStore((s) => s.addNotification);
  const { askMartin } = useMartin();

  if (!form || !profile || !fin) return null;

  const activeContracts = contracts.filter((c) => c.status === "active");
  const pendingSetup = contracts.filter((c) => c.status === "pending_setup");
  const cashColor = getCashColor(fin.cash, fin.burn);
  const runway = getRunwayMonths(fin.cash, fin.burn, fin.revenue);

  const handleAdvanceQuarter = async () => {
    const notifs = advanceToNextQuarter();
    notifs.forEach((n) => addNotification(n, "info"));
    await askMartin({
      trigger: "quarter_advance",
      prompt: `Starting Q${quarter + 1}. Cash: $${fin.cash.toLocaleString()}, ${fin.revenue > 0 ? `$${fin.revenue.toLocaleString()}/month revenue` : "no revenue yet"}, ${activeContracts.map((c) => `${c.title} CPARS ${c.exec.performance.toFixed(1)}`).join(", ") || "no active contracts"}. What should this firm prioritize this quarter?`,
    });
  };

  const latestMartin = martinMessages[martinMessages.length - 1];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">{form.companyName}</h2>
          <p className="text-sm text-muted-foreground">
            Q{quarter} 2025 · UEI {profile.uei} · CAGE {profile.cageCode}
          </p>
        </div>
        <Button onClick={handleAdvanceQuarter}>Advance to Q{quarter + 1}</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Cash</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-medium ${cashColor}`}>{formatCurrency(fin.cash)}</p>
            <p className="text-xs text-muted-foreground mt-1">Runway: {runway} months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{formatCurrency(fin.revenue)}</p>
            <p className="text-xs text-muted-foreground mt-1">Burn: {formatCurrency(fin.burn)}/mo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Contracts Won</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{profile.contractsWon}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {formatCurrency(fin.totalValue)} total value
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{opps.length}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {activeContracts.length} active · {pendingSetup.length} pending setup
            </p>
          </CardContent>
        </Card>
      </div>

      {latestMartin && (
        <MartinCard
          content={latestMartin.content}
          loading={latestMartin.loading}
          trigger={latestMartin.trigger}
        />
      )}
    </div>
  );
}
