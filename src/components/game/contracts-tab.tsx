"use client";

import { useGameStore } from "@/lib/game/store";
import { DELIVERY_STRATEGIES } from "@/lib/game/constants";
import { formatCurrency, getCparsColor, getCparsLabel, getPerformanceBarColor } from "@/lib/utils";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useMartin } from "@/hooks/use-martin";
import type { Contract, DeliveryStrategy } from "@/lib/game/types";

function StrategyPicker({ contract }: { contract: Contract }) {
  const selectDeliveryStrategy = useGameStore((s) => s.selectDeliveryStrategy);
  const { askMartin } = useMartin();

  const handleSelect = async (strategy: DeliveryStrategy) => {
    selectDeliveryStrategy(contract.id, strategy);
    const info = DELIVERY_STRATEGIES[strategy];
    await askMartin({
      trigger: "strategy_pick",
      prompt: `Chose ${info.label} delivery for '${contract.title}' at ${contract.agency} (${formatCurrency(contract.value)}, ${contract.optionYears} years). Margin ~${Math.round(info.margin * 100)}%. Give specific execution advice for the first 90 days with this strategy.`,
    });
  };

  return (
    <Card className="border-amber-200 bg-amber-50">
      <CardHeader>
        <CardTitle className="text-base font-medium">Choose Delivery Strategy</CardTitle>
        <p className="text-sm text-muted-foreground">
          Before revenue flows, decide how you will deliver on &ldquo;{contract.title}&rdquo;
        </p>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-4">
        {(Object.entries(DELIVERY_STRATEGIES) as [DeliveryStrategy, typeof DELIVERY_STRATEGIES.self][]).map(
          ([key, info]) => (
            <div key={key} className="p-4 rounded-lg border bg-white space-y-3">
              <h4 className="font-medium">{info.label}</h4>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p>Margin: ~{Math.round(info.margin * 100)}%</p>
                <p>Risk: {info.risk}</p>
                <p>CPARS ceiling: {info.cparsCeiling}</p>
              </div>
              <ul className="text-xs space-y-1">
                {info.pros.map((p) => (
                  <li key={p} className="text-emerald-700">+ {p}</li>
                ))}
                {info.cons.map((c) => (
                  <li key={c} className="text-red-700">− {c}</li>
                ))}
              </ul>
              <Button size="sm" className="w-full" onClick={() => handleSelect(key)}>
                Select {info.label}
              </Button>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
}

function ContractCard({ contract }: { contract: Contract }) {
  const progressPct = (contract.exec.months / contract.exec.totalMonths) * 100;
  const perfColor = getPerformanceBarColor(contract.exec.performance);
  const cparsLabel = getCparsLabel(contract.exec.performance);

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium">{contract.title}</h3>
            <p className="text-xs text-muted-foreground">{contract.agency}</p>
          </div>
          <Badge variant="outline" className="capitalize">
            {contract.status.replace("_", " ")}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          <SetAsideBadge setAside={contract.setAside} />
          <Badge variant="outline">{formatCurrency(contract.value)}</Badge>
          {contract.exec.strategy && (
            <Badge variant="secondary">{DELIVERY_STRATEGIES[contract.exec.strategy].label}</Badge>
          )}
        </div>

        {contract.status === "active" && (
          <>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{contract.exec.months}/{contract.exec.totalMonths} months</span>
              </div>
              <Progress value={progressPct} />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Performance</span>
                <span className={getCparsColor(contract.exec.performance)}>
                  {cparsLabel} ({contract.exec.performance.toFixed(1)}/5)
                </span>
              </div>
              <Progress
                value={(contract.exec.performance / 5) * 100}
                indicatorClassName={perfColor}
              />
            </div>
            {contract.exec.netMonthly > 0 && (
              <p className="text-xs text-muted-foreground">
                Revenue: {formatCurrency(contract.exec.netMonthly)}/mo net
                ({Math.round(contract.exec.margin * 100)}% margin on {formatCurrency(contract.exec.grossMonthly)} gross)
              </p>
            )}
            {contract.exec.events.length > 0 && (
              <div className="border-t pt-3">
                <p className="text-xs font-medium mb-2">Recent Events</p>
                {contract.exec.events.slice(-3).map((e) => (
                  <div key={e.id} className="text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">{e.title}</span>
                    <p>{e.description}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

export function ContractsTab() {
  const contracts = useGameStore((s) => s.contracts);

  const pending = contracts.filter((c) => c.status === "pending_setup");
  const active = contracts.filter((c) => c.status === "active");
  const ended = contracts.filter((c) => c.status === "ended" || c.status === "ended_early");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Contracts</h2>
        <p className="text-sm text-muted-foreground">
          {active.length} active · {pending.length} pending setup · {ended.length} completed
        </p>
      </div>

      {pending.map((c) => (
        <div key={c.id} className="space-y-4">
          <ContractCard contract={c} />
          <StrategyPicker contract={c} />
        </div>
      ))}

      {active.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3">Active Contracts</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {active.map((c) => (
              <ContractCard key={c.id} contract={c} />
            ))}
          </div>
        </section>
      )}

      {ended.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3">Completed</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {ended.map((c) => (
              <ContractCard key={c.id} contract={c} />
            ))}
          </div>
        </section>
      )}

      {contracts.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No contracts yet. Win a proposal to get started.
        </p>
      )}
    </div>
  );
}
