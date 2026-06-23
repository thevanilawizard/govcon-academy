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
import { CPARS_SCALE, getEventEducation } from "@/lib/education/execution-education";
import type { Contract, DeliveryStrategy, Deliverable, GovInvoice } from "@/lib/game/types";

function StrategyPicker({ contract }: { contract: Contract }) {
  const selectDeliveryStrategy = useGameStore((s) => s.selectDeliveryStrategy);
  const { askMartin } = useMartin();

  const handleSelect = async (strategy: DeliveryStrategy) => {
    selectDeliveryStrategy(contract.id, strategy);
    const info = DELIVERY_STRATEGIES[strategy];
    await askMartin({
      trigger: "strategy_pick",
      prompt: `Chose ${info.label} delivery for '${contract.title}' at ${contract.agency} (${formatCurrency(contract.value)}, ${contract.optionYears} years). Margin ~${Math.round(info.margin * 100)}%. Payment terms Net-${contract.exec.paymentTermsDays}. Give specific execution advice for the first 90 days with this strategy.`,
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

function DeliverableRow({
  contractId,
  deliverable,
  currentMonth,
}: {
  contractId: string;
  deliverable: Deliverable;
  currentMonth: number;
}) {
  const submitDeliverable = useGameStore((s) => s.submitDeliverable);
  const isDue = deliverable.dueMonth <= currentMonth + 3;

  const statusColors: Record<string, string> = {
    pending: "bg-amber-100 text-amber-800",
    submitted: "bg-blue-100 text-blue-800",
    accepted: "bg-emerald-100 text-emerald-800",
    missed: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-lg border text-sm">
      <div>
        <p className="font-medium">{deliverable.title}</p>
        <p className="text-xs text-muted-foreground">Due month {deliverable.dueMonth}</p>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className={statusColors[deliverable.status]}>
          {deliverable.status}
        </Badge>
        {deliverable.status === "pending" && isDue && (
          <Button size="sm" variant="outline" onClick={() => submitDeliverable(contractId, deliverable.id)}>
            Submit CDRL
          </Button>
        )}
      </div>
    </div>
  );
}

function InvoiceRow({
  contractId,
  invoice,
}: {
  contractId: string;
  invoice: GovInvoice;
}) {
  const submitInvoice = useGameStore((s) => s.submitInvoice);

  const statusLabel: Record<string, string> = {
    draft: "Draft",
    submitted: "Submitted — awaiting COR approval",
    approved: `Approved — payment Net-${invoice.paymentTermsDays}`,
    paid: "Paid",
    late: `Paid late (+${formatCurrency(invoice.interestAmount ?? 0)} interest)`,
  };

  return (
    <div className="p-3 rounded-lg border text-sm space-y-2">
      <div className="flex justify-between items-start gap-2">
        <div>
          <p className="font-medium">SF-1034 — {invoice.periodLabel}</p>
          <p className="text-xs text-muted-foreground">{formatCurrency(invoice.amount)}</p>
        </div>
        <Badge variant="outline">{statusLabel[invoice.status]}</Badge>
      </div>
      {invoice.status === "draft" && (
        <Button size="sm" className="w-full" onClick={() => submitInvoice(contractId, invoice.id)}>
          Submit Invoice to COR
        </Button>
      )}
      {invoice.status === "submitted" && invoice.quarterSubmitted !== undefined && (
        <p className="text-xs text-muted-foreground">
          Submitted Q{invoice.quarterSubmitted} — expect approval next quarter, payment after Net-{invoice.paymentTermsDays}
        </p>
      )}
    </div>
  );
}

function ExecutionDashboard({ contract }: { contract: Contract }) {
  const fin = useGameStore((s) => s.fin);
  const drawOnLineOfCredit = useGameStore((s) => s.drawOnLineOfCredit);
  const pendingDeliverables = contract.exec.deliverables.filter(
    (d) => d.status === "pending" || d.status === "submitted"
  );
  const openInvoices = contract.exec.invoices.filter((i) => i.status !== "paid" && i.status !== "late");

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Contract Execution Dashboard</CardTitle>
        <p className="text-sm text-muted-foreground">
          Step 7 — deliverables, invoicing, and QASP surveillance
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        {contract.exec.stopWorkActive && (
          <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-red-900 text-sm">
            <p className="font-medium">Stop-Work Order Active</p>
            <p className="text-xs mt-1">No new invoices until the CO lifts the order. Resolve the pending decision.</p>
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="p-3 rounded-lg border bg-gray-50">
            <p className="text-xs text-muted-foreground">QASP Score</p>
            <p className="text-xl font-medium">{contract.exec.qaspScore}/100</p>
          </div>
          <div className="p-3 rounded-lg border bg-gray-50">
            <p className="text-xs text-muted-foreground">Payment Terms</p>
            <p className="text-xl font-medium">Net-{contract.exec.paymentTermsDays}</p>
          </div>
          <div className="p-3 rounded-lg border bg-gray-50">
            <p className="text-xs text-muted-foreground">Missed CDRL Streak</p>
            <p className={`text-xl font-medium ${contract.exec.consecutiveMissedDeliverables >= 1 ? "text-red-600" : ""}`}>
              {contract.exec.consecutiveMissedDeliverables}
            </p>
            <p className="text-xs text-muted-foreground">2 = default termination</p>
          </div>
        </div>

        <section>
          <h4 className="text-sm font-medium mb-2">CDRL Deliverables</h4>
          {pendingDeliverables.length === 0 ? (
            <p className="text-xs text-muted-foreground">All current deliverables submitted or accepted.</p>
          ) : (
            <div className="space-y-2">
              {pendingDeliverables.map((d) => (
                <DeliverableRow
                  key={d.id}
                  contractId={contract.id}
                  deliverable={d}
                  currentMonth={contract.exec.months}
                />
              ))}
            </div>
          )}
        </section>

        <section>
          <h4 className="text-sm font-medium mb-2">Invoice Queue — SF-1034 Public Voucher</h4>
          <p className="text-xs text-muted-foreground mb-2">
            Government pays Net-30 to Net-90 after approval. Costs hit immediately — submit invoices early.
          </p>
          {openInvoices.length === 0 ? (
            <p className="text-xs text-muted-foreground">No open invoices. New drafts appear each quarter.</p>
          ) : (
            <div className="space-y-2">
              {openInvoices.map((inv) => (
                <InvoiceRow key={inv.id} contractId={contract.id} invoice={inv} />
              ))}
            </div>
          )}
        </section>

        {fin && fin.lineOfCreditLimit > fin.lineOfCreditUsed && (
          <div className="p-3 rounded-lg border border-blue-200 bg-blue-50 text-sm">
            <p className="font-medium text-blue-900">Line of Credit Available</p>
            <p className="text-xs text-blue-800 mt-1">
              {formatCurrency(fin.lineOfCreditLimit - fin.lineOfCreditUsed)} remaining — use when payroll outpaces payments.
            </p>
            <Button
              size="sm"
              variant="outline"
              className="mt-2"
              onClick={() => drawOnLineOfCredit(5000)}
            >
              Draw $5,000
            </Button>
          </div>
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
              <Progress value={(contract.exec.performance / 5) * 100} indicatorClassName={perfColor} />
            </div>
            {contract.exec.events.length > 0 && (
              <div className="border-t pt-3">
                <p className="text-xs font-medium mb-2">Recent Events</p>
                {contract.exec.events.slice(-2).map((e) => {
                  const edu = getEventEducation(e);
                  const cparsEntry = CPARS_SCALE.find(
                    (c) => Math.round(contract.exec.performance) === c.score
                  );
                  return (
                    <div key={e.id} className="text-xs text-muted-foreground mb-3 space-y-2">
                      <span className="font-medium text-foreground">{e.title}</span>
                      <p>{e.description}</p>
                      {edu && (
                        <div className="p-2 rounded border bg-amber-50 text-amber-950">
                          <p className="font-medium">{edu.title}</p>
                          <p className="mt-1 leading-relaxed">{edu.what}</p>
                          <p className="mt-1 text-amber-800">{edu.far}</p>
                        </div>
                      )}
                      {e.title.toLowerCase().includes("cpars") && cparsEntry && (
                        <p className="text-foreground">
                          {cparsEntry.label} ({cparsEntry.score}/5): {cparsEntry.meaning} — {cparsEntry.bidImpact}
                        </p>
                      )}
                    </div>
                  );
                })}
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
  const gameOver = useGameStore((s) => s.gameOver);

  const pending = contracts.filter((c) => c.status === "pending_setup");
  const active = contracts.filter((c) => c.status === "active");
  const ended = contracts.filter((c) => c.status === "ended" || c.status === "ended_early");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Contract Execution</h2>
        <p className="text-sm text-muted-foreground">
          Manage CDRLs, submit SF-1034 invoices, and monitor QASP — government pays Net-30 to Net-90.
        </p>
      </div>

      {pending.map((c) => (
        <div key={c.id} className="space-y-4">
          <ContractCard contract={c} />
          <StrategyPicker contract={c} />
        </div>
      ))}

      {active.map((c) => (
        <div key={c.id} className="space-y-4">
          <ContractCard contract={c} />
          {!gameOver && <ExecutionDashboard contract={c} />}
        </div>
      ))}

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
          No contracts yet. Win a proposal in the Bid Factory to get started.
        </p>
      )}
    </div>
  );
}
