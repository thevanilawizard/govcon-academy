"use client";

import { useMemo, useState } from "react";
import type { ProAcademyProgress } from "@/lib/pro-academy/types";
import { PRO_ACADEMY_TOOLS } from "@/lib/pro-academy/catalog";
import { toggleBookmarkedClause, recordToolUse } from "@/lib/pro-academy/progress";
import { searchFarClauses, getFarClauseById } from "@/lib/pro-academy/tools/far-navigator-data";
import {
  CONTRACT_TYPE_QUESTIONS,
  recommendContractType,
} from "@/lib/pro-academy/tools/contract-type-logic";
import { ALLOWABILITY_SCENARIOS } from "@/lib/pro-academy/tools/allowability-scenarios";
import { PRICE_ANALYSIS_SCENARIOS } from "@/lib/pro-academy/tools/price-analysis-scenarios";
import {
  SOURCE_SELECTION_PROPOSALS,
  SOURCE_SELECTION_FACTORS,
  getModelScores,
  getRecommendedCompetitiveRange,
  getModelBestValueDecision,
  SOURCE_SELECTION_BRANCHES,
} from "@/lib/pro-academy/tools/source-selection-data";
import {
  generateClauseMatrix,
  formatClauseMatrixText,
  CONTRACT_TYPE_OPTIONS,
  SET_ASIDE_OPTIONS,
  type ClauseMatrixInput,
  type ContractTypeKey,
  type SetAsideKey,
} from "@/lib/pro-academy/tools/clause-matrix";
import {
  calculateRates,
  defaultRateCalculatorState,
} from "@/lib/tools/rate-calculator";
import { callToolAi } from "@/lib/tools/api-client";
import { formatCurrency } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AiLoading } from "@/components/tools/shared/ai-loading";

export function ProAcademyToolsPanel({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Pro Academy Tools</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Interactive FAR, pricing, and acquisition practice tools.
        </p>
      </div>

      <Tabs defaultValue={PRO_ACADEMY_TOOLS[0].id}>
        <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
          {PRO_ACADEMY_TOOLS.map((t) => (
            <TabsTrigger key={t.id} value={t.id} className="text-xs">
              {t.title.split(" ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="far-navigator">
          <FarNavigatorTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="contract-type-selector">
          <ContractTypeTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="price-analysis-trainer">
          <PriceAnalysisTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="allowability-tester">
          <AllowabilityTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="source-selection-simulator">
          <SourceSelectionTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="cost-volume-builder">
          <CostVolumeTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
        <TabsContent value="clause-matrix-builder">
          <ClauseMatrixTool progress={progress} onUpdate={onUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FarNavigatorTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchFarClauses(query), [query]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = selectedId ? getFarClauseById(selectedId) : null;

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search FAR parts, clauses, keywords…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {results.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedId(c.id)}
              className={`w-full text-left p-3 rounded-lg border text-sm ${selectedId === c.id ? "border-primary bg-primary/5" : "hover:bg-gray-50"}`}
            >
              <p className="font-medium">{c.citation}</p>
              <p className="text-xs text-muted-foreground">{c.title}</p>
            </button>
          ))}
        </div>
        {selected && (
          <div className="space-y-3 p-4 rounded-lg border text-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-medium">{selected.citation}</p>
                <p className="text-muted-foreground">{selected.title}</p>
              </div>
              <Button
                size="sm"
                variant={progress.bookmarkedClauses.includes(selected.id) ? "default" : "outline"}
                onClick={() => onUpdate((p) => toggleBookmarkedClause(p, selected.id))}
              >
                {progress.bookmarkedClauses.includes(selected.id) ? "Saved" : "Bookmark"}
              </Button>
            </div>
            <p>{selected.plainEnglish}</p>
            <p className="text-xs"><strong>Contractor:</strong> {selected.contractorImpact}</p>
            <p className="text-xs"><strong>Government:</strong> {selected.governmentImpact}</p>
            <p className="text-xs text-muted-foreground">
              Related: {selected.relatedClauses.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ContractTypeTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<ReturnType<typeof recommendContractType> | null>(null);
  const q = CONTRACT_TYPE_QUESTIONS[step];

  const finish = (finalAnswers: Record<string, string>) => {
    const rec = recommendContractType(finalAnswers);
    setResult(rec);
    onUpdate((p) => recordToolUse(p, "contract-type-selector", { answers: finalAnswers, result: rec }));
  };

  if (result) {
    return (
      <div className="space-y-4 max-w-xl">
        <Badge>{result.contractType}</Badge>
        <p className="text-sm">{result.rationale}</p>
        <p className="text-xs text-primary font-medium">{result.farCitation}</p>
        <p className="text-xs text-muted-foreground">{result.riskProfile}</p>
        <div>
          <p className="text-sm font-medium mb-2">Required clauses</p>
          <ul className="text-xs space-y-1 list-disc pl-4">
            {result.requiredClauses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <Button variant="outline" size="sm" onClick={() => { setResult(null); setStep(0); setAnswers({}); }}>
          Start over
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-xl">
      <p className="text-xs text-muted-foreground">Question {step + 1} of {CONTRACT_TYPE_QUESTIONS.length}</p>
      <p className="font-medium text-sm">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className="w-full text-left p-3 rounded-lg border text-sm hover:border-primary/40"
            onClick={() => {
              const next = { ...answers, [q.id]: opt.value };
              setAnswers(next);
              if (step >= CONTRACT_TYPE_QUESTIONS.length - 1) finish(next);
              else setStep((s) => s + 1);
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function AllowabilityTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const scenario = ALLOWABILITY_SCENARIOS[idx];

  return (
    <div className="space-y-4 max-w-xl">
      <p className="text-xs text-muted-foreground">Scenario {idx + 1} of {ALLOWABILITY_SCENARIOS.length}</p>
      <div className="p-4 rounded-lg border space-y-2 text-sm">
        <Badge variant="outline">{scenario.costCategory}</Badge>
        <p className="font-medium">{scenario.description}</p>
        <p className="text-muted-foreground">{scenario.context}</p>
        <p>Amount: {formatCurrency(scenario.amount)}</p>
      </div>
      {!selected ? (
        <div className="flex flex-wrap gap-2">
          {(["allowable", "unallowable", "conditionally_allowable"] as const).map((a) => (
            <Button key={a} variant="outline" size="sm" onClick={() => {
              setSelected(a);
              onUpdate((p) => recordToolUse(p, "allowability-tester", { scenarioId: scenario.id, answer: a }));
            }}>
              {a.replace("_", " ")}
            </Button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <Badge className={selected === scenario.answer ? "bg-emerald-600" : "bg-amber-600"}>
            {selected === scenario.answer ? "Correct" : `Correct: ${scenario.answer.replace("_", " ")}`}
          </Badge>
          <p className="text-sm">{scenario.explanation}</p>
          <p className="text-xs font-medium text-primary">{scenario.citation}</p>
          <Button size="sm" onClick={() => {
            setSelected(null);
            setIdx((i) => (i + 1) % ALLOWABILITY_SCENARIOS.length);
          }}>
            Next scenario
          </Button>
        </div>
      )}
    </div>
  );
}

function PriceAnalysisTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [response, setResponse] = useState("");
  const [grading, setGrading] = useState<{ score: number; feedback: string; technique: string; improvement: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const scenario = PRICE_ANALYSIS_SCENARIOS[idx];

  const grade = async () => {
    setLoading(true);
    try {
      const res = await callToolAi<{ score: number; feedback: string; technique: string; improvement: string }>(
        "price-analysis-grade",
        `Scenario: ${scenario.title}\n${scenario.situation}\nData: ${scenario.dataPoints.join("; ")}\nQuestion: ${scenario.question}\nStudent answer: ${response}`,
        `Model answer: ${scenario.modelAnswer}\nTechnique: ${scenario.recommendedTechnique}\nRubric: ${scenario.rubric.join(", ")}`,
        true
      );
      setGrading(res);
      onUpdate((p) => recordToolUse(p, "price-analysis-trainer", { scenarioId: scenario.id, score: res.score }));
    } catch {
      setGrading({
        score: 0,
        feedback: "AI grading unavailable. Compare your answer to the model answer below.",
        technique: scenario.recommendedTechnique,
        improvement: scenario.modelAnswer,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <p className="text-xs text-muted-foreground">Exercise {idx + 1} of {PRICE_ANALYSIS_SCENARIOS.length}</p>
      <div className="p-4 rounded-lg border space-y-2 text-sm">
        <p className="font-medium">{scenario.title}</p>
        <p>{scenario.situation}</p>
        <ul className="list-disc pl-4 text-muted-foreground">
          {scenario.dataPoints.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <p className="font-medium mt-2">{scenario.question}</p>
      </div>
      <textarea
        className="w-full min-h-32 p-3 rounded-lg border text-sm"
        placeholder="Describe your price analysis approach…"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <div className="flex gap-2">
        <Button size="sm" onClick={grade} disabled={!response.trim() || loading}>
          {loading ? "Grading…" : "Grade with Martin"}
        </Button>
        <Button size="sm" variant="outline" onClick={() => {
          setGrading(null);
          setResponse("");
          setIdx((i) => (i + 1) % PRICE_ANALYSIS_SCENARIOS.length);
        }}>
          Next exercise
        </Button>
      </div>
      {loading && <AiLoading />}
      {grading && (
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm space-y-2">
          <p><strong>Score:</strong> {grading.score}/100</p>
          <p>{grading.feedback}</p>
          <p className="text-xs"><strong>Technique:</strong> {grading.technique}</p>
          <p className="text-xs"><strong>Improve:</strong> {grading.improvement}</p>
          <p className="text-xs text-primary">{scenario.farCitation}</p>
        </div>
      )}
      {!grading && (
        <details className="text-xs text-muted-foreground">
          <summary className="cursor-pointer">Show model answer</summary>
          <p className="mt-2">{scenario.modelAnswer}</p>
        </details>
      )}
    </div>
  );
}

function SourceSelectionTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [phase, setPhase] = useState<"initial" | "competitive_range" | "final">("initial");
  const [selectedRange, setSelectedRange] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const modelScores = getModelScores();
  const branch = SOURCE_SELECTION_BRANCHES[phase];

  return (
    <div className="space-y-4">
      <p className="text-sm">{branch.prompt}</p>
      <div className="grid gap-3 md:grid-cols-3">
        {SOURCE_SELECTION_PROPOSALS.map((p) => (
          <div key={p.id} className="p-4 rounded-lg border text-sm space-y-2">
            <p className="font-medium">{p.vendor}</p>
            <p className="text-xs">Price: {formatCurrency(p.price)}</p>
            <p className="text-xs">Tech {p.technicalScore} · Mgmt {p.managementScore} · PP {p.pastPerformanceScore}</p>
            {phase === "competitive_range" && (
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={selectedRange.includes(p.id)}
                  onChange={(e) => {
                    setSelectedRange((prev) =>
                      e.target.checked ? [...prev, p.id] : prev.filter((id) => id !== p.id)
                    );
                  }}
                />
                In competitive range
              </label>
            )}
            {phase === "final" && (
              <Button size="sm" variant={winner === p.id ? "default" : "outline"} onClick={() => setWinner(p.id)}>
                Select winner
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="text-xs space-y-1">
        <p className="font-medium">Evaluation factors</p>
        {SOURCE_SELECTION_FACTORS.map((f) => (
          <p key={f.id}>{f.name} ({f.weight}%): {f.description}</p>
        ))}
      </div>

      {phase === "initial" && (
        <div className="text-xs">
          <p className="font-medium mb-1">Model weighted scores</p>
          {modelScores.map((s) => (
            <p key={s.proposalId}>#{s.rank} {s.vendor}: {s.weightedScore}</p>
          ))}
          <Button size="sm" className="mt-2" onClick={() => setPhase("competitive_range")}>
            Set competitive range
          </Button>
        </div>
      )}

      {phase === "competitive_range" && (
        <Button size="sm" onClick={() => {
          setPhase("final");
          onUpdate((p) => recordToolUse(p, "source-selection-simulator", { range: selectedRange }));
        }}>
          Confirm range &amp; make decision
        </Button>
      )}

      {phase === "final" && winner && (
        <div className="p-4 rounded-lg border text-sm space-y-2">
          <p>Your selection: {SOURCE_SELECTION_PROPOSALS.find((p) => p.id === winner)?.vendor}</p>
          <p className="text-xs">Model competitive range: {getRecommendedCompetitiveRange().join(", ")}</p>
          <p className="text-xs">{getModelBestValueDecision().rationale}</p>
          <Button size="sm" variant="outline" onClick={() => { setPhase("initial"); setWinner(null); setSelectedRange([]); }}>
            Restart simulation
          </Button>
        </div>
      )}
    </div>
  );
}

function CostVolumeTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [state, setState] = useState(defaultRateCalculatorState);
  const results = useMemo(() => calculateRates(state), [state]);

  const updateLabor = (id: string, field: string, value: number | string) => {
    setState((s) => ({
      ...s,
      laborCategories: s.laborCategories.map((c) =>
        c.id === id ? { ...c, [field]: typeof value === "string" ? value : Number(value) } : c
      ),
    }));
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">Build a cost volume with automatic rate buildup.</p>
      {state.laborCategories.map((c) => (
        <div key={c.id} className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <Input value={c.name} onChange={(e) => updateLabor(c.id, "name", e.target.value)} />
          <Input type="number" placeholder="Salary" value={c.salary} onChange={(e) => updateLabor(c.id, "salary", e.target.value)} />
          <Input type="number" placeholder="Qty" value={c.quantity} onChange={(e) => updateLabor(c.id, "quantity", e.target.value)} />
          <span className="self-center text-xs">{formatCurrency(c.salary * c.quantity)}</span>
        </div>
      ))}
      <div className="p-4 rounded-lg border text-sm space-y-1">
        <p>Direct labor: {formatCurrency(results.directLaborBase)}</p>
        <p>Fringe ({results.fringePct.toFixed(1)}%): {formatCurrency(results.fringeAmount)}</p>
        <p>Overhead ({results.overheadPct.toFixed(1)}%): {formatCurrency(results.overheadAmount)}</p>
        <p>G&amp;A ({results.gaPct.toFixed(1)}%): {formatCurrency(results.gaAmount)}</p>
        <p className="font-medium">Fully loaded: {formatCurrency(results.directLaborBase + results.fringeAmount + results.overheadAmount + results.gaAmount)} · Multiplier: {results.fullyLoadedMultiplier.toFixed(2)}x</p>
      </div>
      <Button size="sm" variant="outline" onClick={() => onUpdate((p) => recordToolUse(p, "cost-volume-builder", results))}>
        Save snapshot
      </Button>
    </div>
  );
}

function ClauseMatrixTool({
  progress,
  onUpdate,
}: {
  progress: ProAcademyProgress;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [input, setInput] = useState<ClauseMatrixInput>({
    contractType: "ffp",
    dollarValue: 1500000,
    setAside: "full_open",
    isCommercial: false,
    isDoD: true,
    hasOptions: true,
  });
  const rows = useMemo(() => generateClauseMatrix(input), [input]);
  const text = useMemo(() => formatClauseMatrixText(input, rows), [input, rows]);

  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "far-clause-matrix.txt";
    a.click();
    URL.revokeObjectURL(url);
    onUpdate((p) => recordToolUse(p, "clause-matrix-builder", input));
  };

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="text-xs space-y-1">
          Contract type
          <select
            className="w-full border rounded-md p-2 text-sm"
            value={input.contractType}
            onChange={(e) => setInput((i) => ({ ...i, contractType: e.target.value as ContractTypeKey }))}
          >
            {CONTRACT_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
        <label className="text-xs space-y-1">
          Dollar value
          <Input type="number" value={input.dollarValue} onChange={(e) => setInput((i) => ({ ...i, dollarValue: Number(e.target.value) }))} />
        </label>
        <label className="text-xs space-y-1">
          Set-aside
          <select
            className="w-full border rounded-md p-2 text-sm"
            value={input.setAside}
            onChange={(e) => setInput((i) => ({ ...i, setAside: e.target.value as SetAsideKey }))}
          >
            {SET_ASIDE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
        <div className="flex flex-wrap gap-4 text-xs items-end">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={input.isCommercial} onChange={(e) => setInput((i) => ({ ...i, isCommercial: e.target.checked }))} />
            Commercial
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={input.isDoD} onChange={(e) => setInput((i) => ({ ...i, isDoD: e.target.checked }))} />
            DoD
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={input.hasOptions} onChange={(e) => setInput((i) => ({ ...i, hasOptions: e.target.checked }))} />
            Options
          </label>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Clause</th>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Applicability</th>
              <th className="text-left p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.clause} className="border-b">
                <td className="p-2">FAR {r.clause}</td>
                <td className="p-2">{r.title}</td>
                <td className="p-2">{r.applicability}</td>
                <td className="p-2 text-muted-foreground">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button size="sm" onClick={download}>Download matrix (.txt)</Button>
    </div>
  );
}
