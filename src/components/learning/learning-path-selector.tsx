"use client";

import type { LearningPath } from "@/lib/learning/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PATHS: {
  id: LearningPath;
  icon: string;
  title: string;
  subtitle: string;
  track: string;
  duration: string;
}[] = [
  {
    id: "career",
    icon: "💼",
    title: "I want a job in contracts",
    subtitle:
      "Prepare for a career as a Contracts Manager, Acquisition Specialist, or Contracts Administrator",
    track: "CAREER TRACK",
    duration: "8-week structured program",
  },
  {
    id: "entrepreneur",
    icon: "🏢",
    title: "I'm starting a GovCon firm",
    subtitle: "Learn how to register, bid, win, and deliver your first federal contracts",
    track: "ENTREPRENEUR TRACK",
    duration: "6-week launch program",
  },
  {
    id: "simulator",
    icon: "🎮",
    title: "I want to play the simulator",
    subtitle: "Jump into the game with a quick orientation and learn as you play",
    track: "SIMULATOR TRACK",
    duration: "Start in 10 minutes",
  },
];

export function LearningPathSelector({
  selected,
  onSelect,
  disabled,
}: {
  selected?: LearningPath | null;
  onSelect: (path: LearningPath) => void;
  disabled?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
      {PATHS.map((p) => (
        <button
          key={p.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(p.id)}
          className={cn(
            "text-left transition-all rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            disabled && "opacity-60 cursor-not-allowed"
          )}
        >
          <Card
            className={cn(
              "h-full hover:border-primary hover:shadow-md cursor-pointer",
              selected === p.id && "border-primary ring-2 ring-primary/20"
            )}
          >
            <CardHeader className="pb-2">
              <div className="text-3xl mb-2">{p.icon}</div>
              <CardTitle className="text-base leading-snug">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{p.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{p.track}</Badge>
                <Badge variant="outline">{p.duration}</Badge>
              </div>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
  );
}
