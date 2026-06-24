"use client";

import { useState } from "react";
import { callToolAi } from "@/lib/tools/api-client";
import { getToolData, updateToolData } from "@/lib/tools/storage";
import type { BidNoBidRecord } from "@/lib/tools/types";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type YesNoPartial = "yes" | "no" | "partial";

export function BidNoBidTool() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [solNum, setSolNum] = useState("");
  const [agency, setAgency] = useState("");
  const [naics, setNaics] = useState("");
  const [setAside, setSetAside] = useState("");
  const [value, setValue] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [incumbentKnown, setIncumbentKnown] = useState("unknown");
  const [recompete, setRecompete] = useState(false);

  const [qualifications, setQualifications] = useState<Record<string, YesNoPartial>>({});
  const [competitive, setCompetitive] = useState<Record<string, string>>({});
  const [strategic, setStrategic] = useState<Record<string, boolean>>({});
  const [bidHours, setBidHours] = useState("");
  const [loadedRate, setLoadedRate] = useState("150");
  const [winProb, setWinProb] = useState("25");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [records, setRecords] = useState<BidNoBidRecord[]>(() => getToolData().bidNoBidRecords);

  const qualQuestions = [
    "NAICS registered?",
    "Set-aside qualified?",
    "Security clearance met?",
    "3 past performance references?",
    "Key personnel available?",
    "Can meet deadline?",
    "Staffing capacity?",
    "Financial capacity before first invoice?",
  ];

  const setQual = (q: string, v: YesNoPartial) => setQualifications({ ...qualifications, [q]: v });

  const bidCost = (Number(bidHours) || 0) * (Number(loadedRate) || 0);
  const expectedValue = (Number(value) || 0) * ((Number(winProb) || 0) / 100);

  const runAnalysis = async () => {
    setLoading(true);
    const inputs = {
      opportunity: { title, solNum, agency, naics, setAside, value, daysLeft, incumbentKnown, recompete },
      qualifications,
      competitive,
      strategic,
      costToBid: { bidHours, loadedRate, bidCost, winProb, expectedValue },
    };
    try {
      const res = await callToolAi<Record<string, unknown>>(
        "bid-no-bid",
        JSON.stringify(inputs, null, 2),
        undefined,
        true
      );
      setResult(res);
      const record: BidNoBidRecord = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        title,
        solicitationNumber: solNum,
        recommendation: (res.recommendation as BidNoBidRecord["recommendation"]) ?? "NO-BID",
        reasoning: String(res.reasoning ?? ""),
        inputs,
      };
      const next = [record, ...records].slice(0, 30);
      setRecords(next);
      updateToolData({ bidNoBidRecords: next });
      setStep(6);
    } finally {
      setLoading(false);
    }
  };

  const reviewHistory = async () => {
    setLoading(true);
    try {
      const res = await callToolAi<{ message?: string }>(
        "bid-history-review",
        JSON.stringify(records.slice(0, 15), null, 2)
      );
      setResult({ historyReview: res.message });
    } finally {
      setLoading(false);
    }
  };

  if (step === 6 && result) {
    const rec = String(result.recommendation ?? "");
    const recColor = rec.includes("BID WITH") ? "bg-amber-500" : rec.includes("NO-BID") ? "bg-red-600" : "bg-emerald-600";
    return (
      <div className="space-y-4">
        <button type="button" className="text-xs text-muted-foreground" onClick={() => setStep(1)}>← New analysis</button>
        {result.historyReview ? (
          <div className="text-sm whitespace-pre-wrap p-4 rounded-lg border">{String(result.historyReview)}</div>
        ) : (
          <>
            <Badge className={`text-lg px-4 py-2 ${recColor}`}>{rec}</Badge>
            <p className="text-sm leading-relaxed">{String(result.reasoning)}</p>
            {Array.isArray(result.focusAreas) && (
              <div><p className="text-sm font-medium">Focus areas</p><ul className="list-disc list-inside text-sm text-muted-foreground">{(result.focusAreas as string[]).map((f) => <li key={f}>{f}</li>)}</ul></div>
            )}
            {Array.isArray(result.conditions) && (result.conditions as string[]).length > 0 && (
              <div><p className="text-sm font-medium">Conditions</p><ul className="list-disc list-inside text-sm">{(result.conditions as string[]).map((f) => <li key={f}>{f}</li>)}</ul></div>
            )}
            <p className="text-xs text-muted-foreground">Expected value: {expectedValue.toLocaleString()} · Bid cost: {bidCost.toLocaleString()}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-1 flex-wrap">
        {[1, 2, 3, 4, 5].map((s) => (
          <Badge key={s} variant={step === s ? "default" : "outline"}>Step {s}</Badge>
        ))}
      </div>

      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-3">
          <Input placeholder="Contract title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input placeholder="Solicitation number" value={solNum} onChange={(e) => setSolNum(e.target.value)} />
          <Input placeholder="Agency" value={agency} onChange={(e) => setAgency(e.target.value)} />
          <Input placeholder="NAICS" value={naics} onChange={(e) => setNaics(e.target.value)} />
          <Input placeholder="Set-aside type" value={setAside} onChange={(e) => setSetAside(e.target.value)} />
          <Input placeholder="Estimated value $" type="number" value={value} onChange={(e) => setValue(e.target.value)} />
          <Input placeholder="Days remaining" type="number" value={daysLeft} onChange={(e) => setDaysLeft(e.target.value)} />
          <select className="rounded-md border p-2 text-sm" value={incumbentKnown} onChange={(e) => setIncumbentKnown(e.target.value)}>
            <option value="unknown">Incumbent unknown</option>
            <option value="yes">Incumbent known</option>
            <option value="no">No incumbent</option>
          </select>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={recompete} onChange={(e) => setRecompete(e.target.checked)} /> Recompete</label>
          <Button onClick={() => setStep(2)}>Continue</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          {qualQuestions.map((q) => (
            <div key={q} className="flex items-center justify-between gap-4 text-sm">
              <span>{q}</span>
              <div className="flex gap-1">
                {(["yes", "partial", "no"] as YesNoPartial[]).map((v) => (
                  <Button key={v} size="sm" variant={qualifications[q] === v ? "default" : "outline"} onClick={() => setQual(q, v)}>{v}</Button>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={() => setStep(3)}>Continue</Button>
        </div>
      )}

      {step === 3 && (
        <div className="grid gap-3">
          {[
            ["competitors", "Competitors likely?", "1-3 / 4-7 / 8+"],
            ["incumbentBeat", "Can you beat incumbent?", "yes / no / unknown"],
            ["priceComp", "Price competitiveness", "Lowest / Competitive / High"],
            ["technicalDiff", "Technical differentiation", "Strong / Average / Weak"],
            ["goodCustomer", "Good customer for you?", "yes / no"],
          ].map(([key, label, hint]) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="text-sm">{label}</label>
              <Input placeholder={hint} value={competitive[key] ?? ""} onChange={(e) => setCompetitive({ ...competitive, [key]: e.target.value })} />
            </div>
          ))}
          <Button onClick={() => setStep(4)}>Continue</Button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-2">
          {[
            "Advances strategic goal?",
            "Reference contract for future bids?",
            "Important agency relationship?",
            "Opens new NAICS/set-aside?",
            "Valuable teaming partner?",
          ].map((q) => (
            <label key={q} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={strategic[q] ?? false} onChange={(e) => setStrategic({ ...strategic, [q]: e.target.checked })} />
              {q}
            </label>
          ))}
          <Button onClick={() => setStep(5)}>Continue</Button>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-3">
          <Input placeholder="Proposal hours" type="number" value={bidHours} onChange={(e) => setBidHours(e.target.value)} />
          <Input placeholder="Loaded rate ($/hr)" type="number" value={loadedRate} onChange={(e) => setLoadedRate(e.target.value)} />
          <Input placeholder="Win probability %" type="number" value={winProb} onChange={(e) => setWinProb(e.target.value)} />
          <p className="text-sm">Bid cost: ${bidCost.toLocaleString()} · Expected value: ${expectedValue.toLocaleString()}</p>
          {loading && <AiLoading label="Martin is preparing your bid/no-bid recommendation..." />}
          <Button onClick={runAnalysis} disabled={loading}>Get AI recommendation</Button>
        </div>
      )}

      {records.length > 0 && (
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Decision history ({records.length})</p>
            <Button size="sm" variant="outline" onClick={reviewHistory} disabled={loading}>Review patterns</Button>
          </div>
          {(() => {
            const bidYes = records.filter((r) => r.recommendation === "BID" || r.recommendation === "BID WITH CONDITIONS");
            const withOutcome = bidYes.filter((r) => r.outcome && r.outcome !== "pending");
            const wins = withOutcome.filter((r) => r.outcome === "won").length;
            if (withOutcome.length > 0) {
              return (
                <p className="text-xs text-muted-foreground mb-2">
                  Win rate on BID decisions: {Math.round((wins / withOutcome.length) * 100)}% ({wins}/{withOutcome.length} tracked)
                </p>
              );
            }
            return null;
          })()}
          {records.slice(0, 8).map((r) => (
            <div key={r.id} className="text-xs py-2 border-b last:border-0 space-y-1">
              <div className="flex justify-between gap-2">
                <span>{r.title || r.solicitationNumber}</span>
                <Badge variant="outline">{r.recommendation}</Badge>
              </div>
              <div className="flex gap-1">
                {(["won", "lost", "passed", "pending"] as const).map((o) => (
                  <button
                    key={o}
                    type="button"
                    className={`px-2 py-0.5 rounded border text-[10px] ${r.outcome === o ? "bg-primary text-primary-foreground" : "opacity-60"}`}
                    onClick={() => {
                      const next = records.map((rec) =>
                        rec.id === r.id ? { ...rec, outcome: o } : rec
                      );
                      setRecords(next);
                      updateToolData({ bidNoBidRecords: next });
                    }}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
