"use client";

import { useState } from "react";
import type { InteractiveScenario } from "@/lib/education/training/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function WhatWouldYouDo({
  scenario: s,
  completed,
  onComplete,
}: {
  scenario: InteractiveScenario;
  completed: boolean;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const chosen = s.options.find((o) => o.id === selected);

  return (
    <div className="p-4 rounded-lg border bg-indigo-50/50 border-indigo-200 space-y-4">
      <div>
        <p className="text-xs font-medium text-indigo-900 uppercase tracking-wide mb-1">
          What Would You Do?
        </p>
        <p className="text-sm leading-relaxed">{s.prompt}</p>
      </div>

      <div className="space-y-2">
        {s.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={!!selected}
            onClick={() => {
              setSelected(opt.id);
              if (!completed) onComplete();
            }}
            className={`w-full text-left text-sm p-3 rounded-lg border transition-colors ${
              selected === opt.id
                ? opt.isCorrect
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-red-300 bg-red-50"
                : selected
                ? "opacity-50"
                : "hover:bg-white bg-white/80"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {chosen && (
        <div className="space-y-2 text-sm">
          <p className="font-medium">
            Consequence:{" "}
            <span className={chosen.isCorrect ? "text-emerald-700" : "text-red-700"}>
              {chosen.consequence}
            </span>
          </p>
          <div className="p-3 rounded bg-white border text-xs leading-relaxed">
            <Badge variant="outline" className="mb-2">
              {chosen.isCorrect ? "Best response" : "Correct approach"}
            </Badge>
            <p>{s.correctExplanation}</p>
          </div>
        </div>
      )}

      {completed && !selected && (
        <p className="text-xs text-muted-foreground">Scenario completed previously.</p>
      )}
    </div>
  );
}
