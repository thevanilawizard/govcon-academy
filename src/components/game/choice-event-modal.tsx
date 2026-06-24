"use client";

import { useGameStore } from "@/lib/game/store";
import { EXECUTION_EDUCATION, getEventEducation } from "@/lib/education/execution-education";
import { RealWorldCallout } from "@/components/education/real-world-callout";
import { Button } from "@/components/ui/button";
import { useMartin } from "@/hooks/use-martin";

function eventKeyFromTitle(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("scope")) return "scope_creep";
  if (t.includes("key personnel") || t.includes("departure")) return "key_personnel";
  if (t.includes("stop-work") || t.includes("stop work")) return "stop_work";
  if (t.includes("option")) return "option_year";
  return "cash_crisis";
}

export function ChoiceEventModal() {
  const contracts = useGameStore((s) => s.contracts);
  const resolveChoice = useGameStore((s) => s.resolveChoice);
  const learnConcept = useGameStore((s) => s.learnConcept);
  const triggerGameEducationBridge = useGameStore((s) => s.triggerGameEducationBridge);
  const handleLearningGameEvent = useGameStore((s) => s.handleLearningGameEvent);
  const { askMartin } = useMartin();

  const contractWithChoice = contracts.find((c) => c.exec.pendingChoice);
  if (!contractWithChoice?.exec.pendingChoice) return null;

  const choice = contractWithChoice.exec.pendingChoice;
  const edu = getEventEducation(choice) ?? EXECUTION_EDUCATION.scope_creep;
  const eventKey = eventKeyFromTitle(choice.title);

  const handleChoice = async (choiceId: string, label: string) => {
    resolveChoice(contractWithChoice.id, choiceId);
    if (eventKey === "scope_creep") {
      learnConcept("scope_creep");
      triggerGameEducationBridge("scope_creep");
      if (choiceId === "mod" || choiceId === "rea") handleLearningGameEvent("scope_creep_handled");
    }
    if (eventKey === "key_personnel") learnConcept("key_personnel");
    if (eventKey === "option_year") {
      learnConcept("option_years");
      triggerGameEducationBridge("option_not_exercised");
    }
    if (eventKey === "stop_work") learnConcept("stop_work");
    await askMartin({
      trigger: "execution_event",
      prompt: `Execution event on '${contractWithChoice.title}': ${choice.title} — chose "${label}". CPARS now ${contractWithChoice.exec.performance.toFixed(1)}/5. Give 6-8 sentences citing ${edu.far}, what the CO can legally require, and one specific action.`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="w-full max-w-lg rounded-lg border bg-white p-6 shadow-xl space-y-4 my-8">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{contractWithChoice.title}</p>
          <h2 className="text-lg font-medium">{choice.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">{choice.description}</p>
        </div>

        <div className="p-4 rounded-lg border bg-amber-50 space-y-2 text-sm">
          <p className="font-medium text-amber-950">{edu.title}</p>
          <p className="text-xs text-amber-900 leading-relaxed">{edu.what}</p>
          <p className="text-xs"><span className="font-medium">FAR: </span>{edu.far}</p>
          <p className="text-xs"><span className="font-medium">CO rights: </span>{edu.coRights}</p>
          <p className="text-xs"><span className="font-medium">Action: </span>{edu.action}</p>
        </div>

        <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
          <p className="text-xs text-blue-900">{choice.teachable}</p>
        </div>

        <div className="space-y-2">
          {choice.choices.map((c) => (
            <Button
              key={c.id}
              variant="outline"
              className="w-full h-auto py-3 px-4 text-left justify-start whitespace-normal"
              onClick={() => handleChoice(c.id, c.label)}
            >
              <div>
                <span className="text-sm font-medium">{c.label}</span>
                <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
              </div>
            </Button>
          ))}
        </div>

        <RealWorldCallout eventKey={eventKey} />
      </div>
    </div>
  );
}
