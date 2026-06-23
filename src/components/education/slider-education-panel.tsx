"use client";

import { SLIDER_EDUCATION } from "@/lib/education/proposal-education";
import type { EvalCriteria } from "@/lib/game/types";

type SliderKey = "technical" | "price" | "pastPerformance" | "teaming";

export function SliderEducationPanel({
  slider,
  evalCriteria,
}: {
  slider: SliderKey;
  evalCriteria?: EvalCriteria;
}) {
  if (slider === "teaming") {
    const edu = SLIDER_EDUCATION.teaming;
    return (
      <div className="p-4 rounded-lg border bg-blue-50 border-blue-100 text-sm space-y-2">
        <p className="font-medium text-blue-950">{edu.title}</p>
        <p className="text-xs text-blue-900 leading-relaxed">{edu.description}</p>
      </div>
    );
  }

  const edu = SLIDER_EDUCATION[slider];

  return (
    <div className="p-4 rounded-lg border bg-blue-50 border-blue-100 text-sm space-y-3">
      <p className="font-medium text-blue-950">{edu.title}</p>
      <p className="text-xs text-blue-900 leading-relaxed">{edu.whatEvaluatorsWant}</p>
      <div className="grid sm:grid-cols-3 gap-2 text-xs">
        <div className="p-2 rounded bg-white border">
          <p className="font-medium text-red-700 mb-1">Score 1</p>
          <p className="text-muted-foreground leading-snug">{edu.scale[1]}</p>
        </div>
        <div className="p-2 rounded bg-white border">
          <p className="font-medium text-amber-700 mb-1">Score 3</p>
          <p className="text-muted-foreground leading-snug">{edu.scale[3]}</p>
        </div>
        <div className="p-2 rounded bg-white border">
          <p className="font-medium text-emerald-700 mb-1">Score 5</p>
          <p className="text-muted-foreground leading-snug">{edu.scale[5]}</p>
        </div>
      </div>
      {"lptaNote" in edu && evalCriteria === "LPTA" && (
        <p className="text-xs text-blue-900 font-medium">{edu.lptaNote}</p>
      )}
      {"bestValueNote" in edu && evalCriteria === "Best Value" && (
        <p className="text-xs text-blue-900 font-medium">{edu.bestValueNote}</p>
      )}
      {"newFirmAdvice" in edu && (
        <p className="text-xs text-blue-800 italic">{edu.newFirmAdvice}</p>
      )}
      <div>
        <p className="text-xs font-medium mb-1">Common mistakes</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          {edu.mistakes.map((m) => (
            <li key={m}>• {m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
