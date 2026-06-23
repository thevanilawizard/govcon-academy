"use client";

import { useMemo, useState } from "react";
import {
  calculateRates,
  defaultRateCalculatorState,
  exportRatesCsv,
  type RateResults,
} from "@/lib/tools/rate-calculator";
import { getToolData, updateToolData } from "@/lib/tools/storage";
import type { RateCalculatorState } from "@/lib/tools/types";
import { callToolAi } from "@/lib/tools/api-client";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const COMP_COLORS = { green: "bg-emerald-600", yellow: "bg-amber-500", red: "bg-red-600" };

export function RateCalculatorTool() {
  const [state, setState] = useState<RateCalculatorState>(
    () => getToolData().rateCalculator ?? defaultRateCalculatorState()
  );
  const [commentary, setCommentary] = useState<string | null>(null);
  const [loadingCommentary, setLoadingCommentary] = useState(false);

  const results = useMemo(() => calculateRates(state), [state]);

  const persist = (next: RateCalculatorState) => {
    setState(next);
    updateToolData({ rateCalculator: next });
  };

  const updateLabor = (id: string, field: string, value: number | string) => {
    persist({
      ...state,
      laborCategories: state.laborCategories.map((c) =>
        c.id === id ? { ...c, [field]: typeof value === "string" ? value : Number(value) } : c
      ),
    });
  };

  const addLabor = () => {
    persist({
      ...state,
      laborCategories: [
        ...state.laborCategories,
        { id: crypto.randomUUID(), name: "New Role", salary: 80000, hoursPerYear: 2080, quantity: 1 },
      ],
    });
  };

  const getCommentary = async () => {
    setLoadingCommentary(true);
    try {
      const res = await callToolAi<{ message?: string }>(
        "rate-commentary",
        `Fringe: ${results.fringePct.toFixed(1)}%, OH: ${results.overheadPct.toFixed(1)}%, G&A: ${results.gaPct.toFixed(1)}%, Multiplier: ${results.fullyLoadedMultiplier.toFixed(2)}x\nDirect labor base: ${formatCurrency(results.directLaborBase)}`,
        JSON.stringify(state, null, 2)
      );
      setCommentary(res.message ?? "");
    } finally {
      setLoadingCommentary(false);
    }
  };

  const downloadCsv = () => {
    const blob = new Blob([exportRatesCsv(state, results)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "indirect-rates.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h3 className="text-sm font-medium">1. Direct labor</h3>
        {state.laborCategories.map((c) => (
          <div key={c.id} className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            <Input value={c.name} onChange={(e) => updateLabor(c.id, "name", e.target.value)} />
            <Input type="number" placeholder="Salary" value={c.salary} onChange={(e) => updateLabor(c.id, "salary", e.target.value)} />
            <Input type="number" placeholder="Hours/yr" value={c.hoursPerYear} onChange={(e) => updateLabor(c.id, "hoursPerYear", e.target.value)} />
            <Input type="number" placeholder="Qty" value={c.quantity} onChange={(e) => updateLabor(c.id, "quantity", e.target.value)} />
            <span className="self-center text-xs">{formatCurrency(c.salary * c.quantity)}</span>
          </div>
        ))}
        <Button size="sm" variant="outline" onClick={addLabor}>Add labor category</Button>
        <p className="text-sm">Direct labor base: <strong>{formatCurrency(results.directLaborBase)}</strong></p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">2. Fringe benefits</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {Object.entries(state.fringe).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2 text-xs">
              <label className="w-40 capitalize">{k.replace(/([A-Z])/g, " $1")}</label>
              <Input type="number" value={v} onChange={(e) => persist({ ...state, fringe: { ...state.fringe, [k]: Number(e.target.value) } })} />
            </div>
          ))}
        </div>
        <p className="text-sm">Fringe: {formatCurrency(results.fringeAmount)} · <RateBadge rate={results.fringePct} comp={results.competitiveness.fringe} /></p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">3. Overhead</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {Object.entries(state.overhead).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2 text-xs">
              <label className="w-40 capitalize">{k.replace(/([A-Z])/g, " $1")}</label>
              <Input type="number" value={v} onChange={(e) => persist({ ...state, overhead: { ...state.overhead, [k]: Number(e.target.value) } })} />
            </div>
          ))}
        </div>
        <p className="text-sm">OH rate: {results.overheadPct.toFixed(1)}% · <RateBadge rate={results.overheadPct} comp={results.competitiveness.overhead} /></p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">4. G&A</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {Object.entries(state.ga).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2 text-xs">
              <label className="w-40 capitalize">{k.replace(/([A-Z])/g, " $1")}</label>
              <Input type="number" value={v} onChange={(e) => persist({ ...state, ga: { ...state.ga, [k]: Number(e.target.value) } })} />
            </div>
          ))}
        </div>
        <p className="text-sm">G&A rate: {results.gaPct.toFixed(1)}% · <RateBadge rate={results.gaPct} comp={results.competitiveness.ga} /></p>
      </section>

      <section className="p-4 rounded-lg border bg-primary/5 space-y-2">
        <h3 className="text-sm font-medium">5. Fully loaded rate</h3>
        <p className="text-sm">Salary → + Fringe ({results.fringePct.toFixed(1)}%) → + OH ({results.overheadPct.toFixed(1)}%) → + G&A ({results.gaPct.toFixed(1)}%)</p>
        <p className="text-2xl font-medium">Multiplier: {results.fullyLoadedMultiplier.toFixed(2)}x</p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">6. Price build-up</h3>
        <Input type="number" placeholder="Fee %" value={state.priceBuildUp.feePct} onChange={(e) => persist({ ...state, priceBuildUp: { ...state.priceBuildUp, feePct: Number(e.target.value) } })} className="max-w-[120px]" />
        {state.laborCategories.map((c) => (
          <div key={c.id} className="flex items-center gap-2 text-sm">
            <span className="w-40">{c.name}</span>
            <Input
              type="number"
              placeholder="Hours"
              value={state.priceBuildUp.categories.find((x) => x.categoryId === c.id)?.hours ?? 0}
              onChange={(e) => {
                const hours = Number(e.target.value);
                const cats = state.priceBuildUp.categories.filter((x) => x.categoryId !== c.id);
                if (hours > 0) cats.push({ categoryId: c.id, hours });
                persist({ ...state, priceBuildUp: { ...state.priceBuildUp, categories: cats } });
              }}
              className="max-w-[100px]"
            />
          </div>
        ))}
        {results.priceBuildUp && (
          <div className="text-sm space-y-1 p-3 rounded border">
            <p>Cost: {formatCurrency(results.priceBuildUp.totalCost)}</p>
            <p>Fee ({state.priceBuildUp.feePct}%): {formatCurrency(results.priceBuildUp.fee)}</p>
            <p className="font-medium">Price: {formatCurrency(results.priceBuildUp.totalPrice)}</p>
          </div>
        )}
      </section>

      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={downloadCsv}>Download Excel (CSV)</Button>
        <Button size="sm" variant="outline" onClick={() => window.print()}>Print / PDF</Button>
        <Button size="sm" variant="outline" onClick={getCommentary} disabled={loadingCommentary}>Martin rate review</Button>
      </div>
      {loadingCommentary && <AiLoading />}
      {commentary && <div className="text-sm whitespace-pre-wrap p-4 rounded-lg border bg-gray-50">{commentary}</div>}
    </div>
  );
}

function RateBadge({ rate, comp }: { rate: number; comp: "green" | "yellow" | "red" }) {
  return <Badge className={COMP_COLORS[comp]}>{rate.toFixed(1)}%</Badge>;
}
