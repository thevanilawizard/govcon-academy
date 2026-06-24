"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { useLearning } from "@/hooks/use-learning";
import { useGuestHydration } from "@/hooks/use-guest-hydration";
import { useGamePersistence } from "@/hooks/use-game-persistence";
import { LearningPathSelector } from "@/components/learning/learning-path-selector";
import type { LearningPath } from "@/lib/learning/types";
import { Button } from "@/components/ui/button";

export default function LearningPathPage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const { selectPath } = useLearning();
  const [selected, setSelected] = useState<LearningPath | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useGuestHydration();
  useGamePersistence();

  if (isLoaded && !form) {
    router.push("/intake");
    return null;
  }

  const handleContinue = () => {
    if (!selected) return;
    setSubmitting(true);
    selectPath(selected);
    if (selected === "simulator") {
      router.push("/simulator-orientation");
    } else {
      router.push("/setup");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <span className="text-lg font-medium text-primary">GovCon Academy</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl mb-10">
          <h1 className="text-2xl sm:text-3xl font-medium mb-3">What brought you to GovCon Academy?</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Choose your path — you can change this anytime from Profile settings.
          </p>
        </div>

        <LearningPathSelector
          selected={selected}
          onSelect={setSelected}
          disabled={submitting}
        />

        <div className="mt-10">
          <Button size="lg" disabled={!selected || submitting} onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </main>
    </div>
  );
}
