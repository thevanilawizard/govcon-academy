"use client";

import { useGameStore } from "@/lib/game/store";
import { Button } from "@/components/ui/button";
import { useMartin } from "@/hooks/use-martin";

export function ChoiceEventModal() {
  const contracts = useGameStore((s) => s.contracts);
  const resolveChoice = useGameStore((s) => s.resolveChoice);
  const { askMartin } = useMartin();

  const contractWithChoice = contracts.find((c) => c.exec.pendingChoice);
  if (!contractWithChoice?.exec.pendingChoice) return null;

  const choice = contractWithChoice.exec.pendingChoice;

  const handleChoice = async (choiceId: string, label: string) => {
    resolveChoice(contractWithChoice.id, choiceId);
    await askMartin({
      trigger: "execution_event",
      prompt: `Execution event on '${contractWithChoice.title}': ${choice.title} — chose "${label}". Performance score now ${contractWithChoice.exec.performance.toFixed(1)}/5. What should the firm do?`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-lg border bg-white p-6 shadow-xl space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{contractWithChoice.title}</p>
          <h2 className="text-lg font-medium">{choice.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">{choice.description}</p>
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
      </div>
    </div>
  );
}
