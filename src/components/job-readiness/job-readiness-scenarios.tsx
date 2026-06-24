"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SCENARIOS } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress, ScenarioNode } from "@/lib/job-readiness/types";

function findNode(scenarioId: string, nodeId: string): ScenarioNode | undefined {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId);
  return scenario?.nodes.find((n) => n.id === nodeId);
}

export function JobReadinessScenarios({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [nodeId, setNodeId] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const [debrief, setDebrief] = useState<string | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId);
  const currentNode = scenario && nodeId ? findNode(scenario.id, nodeId) : null;

  const startScenario = (id: string) => {
    const s = SCENARIOS.find((sc) => sc.id === id);
    if (!s) return;
    setActiveScenarioId(id);
    setNodeId(s.nodes[0]?.id ?? null);
    setPath([]);
    setDebrief(null);
  };

  const chooseOption = (optionId: string, nextNodeId: string | undefined, consequence: string, isBest?: boolean) => {
    if (!scenario || !currentNode) return;
    setPath((p) => [...p, `${currentNode.prompt.slice(0, 40)}… → ${consequence}`]);
    const nextId = nextNodeId ?? currentNode.id;
    const nextNode = findNode(scenario.id, nextId);
    if (nextNode?.debrief) {
      setDebrief(nextNode.debrief);
      const bestCount = path.filter((_, i) => i >= 0).length + (isBest ? 1 : 0);
      const score = isBest ? 100 : Math.max(40, 100 - path.length * 15);
      onUpdate((p) => {
        const scenariosCompleted = p.scenariosCompleted.includes(scenario.id)
          ? p.scenariosCompleted
          : [...p.scenariosCompleted, scenario.id];
        const prevBest = p.scenarioBestScores[scenario.id] ?? 0;
        const scenarioBestScores = {
          ...p.scenarioBestScores,
          [scenario.id]: Math.max(prevBest, score),
        };
        return syncSectionCertificate("scenarios", { ...p, scenariosCompleted, scenarioBestScores });
      });
    } else if (nextNode) {
      setNodeId(nextId);
    }
  };

  const reset = () => {
    setActiveScenarioId(null);
    setNodeId(null);
    setPath([]);
    setDebrief(null);
  };

  if (debrief && scenario) {
    return (
      <div className="space-y-4 max-w-2xl">
        <Badge>Scenario {scenario.number} complete</Badge>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Debrief — {scenario.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">{debrief}</p>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">You learned</p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {scenario.teaches.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <Button onClick={reset}>Back to scenarios</Button>
              <Button variant="outline" onClick={() => startScenario(scenario.id)}>
                Retry scenario
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (scenario && currentNode) {
    return (
      <div className="space-y-4 max-w-2xl">
        <button type="button" onClick={reset} className="text-xs text-muted-foreground hover:text-foreground">
          ← All scenarios
        </button>
        <div>
          <Badge variant="outline">Scenario {scenario.number}</Badge>
          <h2 className="text-xl font-medium mt-2">{scenario.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">{scenario.setup}</p>
        </div>
        <Card>
          <CardContent className="p-4 space-y-4">
            <p className="text-sm font-medium">{currentNode.prompt}</p>
            <div className="space-y-2">
              {currentNode.options.map((opt) => (
                <Button
                  key={opt.id}
                  variant="outline"
                  className="w-full h-auto text-left whitespace-normal py-3 justify-start"
                  onClick={() => chooseOption(opt.id, opt.nextNodeId, opt.consequence, opt.isBest)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        {path.length > 0 && (
          <div className="text-xs text-muted-foreground space-y-1">
            {path.map((step) => (
              <p key={step}>· {step}</p>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Simulation scenarios</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {progress.scenariosCompleted.length}/{SCENARIOS.length} scenarios completed
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {SCENARIOS.map((s) => {
          const done = progress.scenariosCompleted.includes(s.id);
          const best = progress.scenarioBestScores[s.id];
          return (
            <Card
              key={s.id}
              className="cursor-pointer hover:border-primary/40 transition-colors"
              onClick={() => startScenario(s.id)}
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium">
                    {s.number}. {s.title}
                  </p>
                  {done && <Badge className="bg-emerald-600 shrink-0">Done</Badge>}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{s.setup}</p>
                {best !== undefined && (
                  <p className="text-xs text-muted-foreground">Best score: {best}%</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
