"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { useLearning } from "@/hooks/use-learning";
import { useGuestHydration } from "@/hooks/use-guest-hydration";
import { useGamePersistence } from "@/hooks/use-game-persistence";
import { getOrientationSlides } from "@/lib/learning/curricula/simulator-track";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SLIDES = getOrientationSlides();

export default function SimulatorOrientationPage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const { setNavMode } = useLearning();
  const setLearningNavMode = useGameStore((s) => s.setLearningNavMode);
  const [slide, setSlide] = useState(0);
  useGamePersistence();

  if (isLoaded && !form) {
    router.push("/intake");
    return null;
  }

  const current = SLIDES[slide];
  const isLast = slide >= SLIDES.length - 1;

  const handleFinish = () => {
    setNavMode("play");
    setLearningNavMode("play");
    router.push("/game");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-medium text-primary">Simulator Orientation</span>
          <Badge variant="outline">
            {slide + 1} / {SLIDES.length}
          </Badge>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <Progress value={((slide + 1) / SLIDES.length) * 100} className="h-2 mb-8" />

        <Card>
          <CardContent className="p-6 sm:p-8 space-y-4">
            <h1 className="text-xl sm:text-2xl font-medium">{current.title}</h1>
            <p className="text-lg font-medium text-primary">{current.bigIdea}</p>
            <p className="text-sm text-muted-foreground">{current.whyItMatters}</p>
            <ul className="space-y-2">
              {current.bullets.map((b) => (
                <li key={b} className="text-sm flex gap-2">
                  <span className="text-primary">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={() => setSlide(Math.max(0, slide - 1))} disabled={slide === 0}>
            Previous
          </Button>
          {isLast ? (
            <Button onClick={handleFinish}>Enter Simulator</Button>
          ) : (
            <Button onClick={() => setSlide(slide + 1)}>Next</Button>
          )}
        </div>
      </main>
    </div>
  );
}
