"use client";

import { useEffect, useRef, useState } from "react";
import type { TutorialStep } from "@/lib/game/types";

interface TutorialCalloutProps {
  step: TutorialStep;
  stepIndex: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  isLast: boolean;
}

export function TutorialCallout({
  step,
  stepIndex,
  totalSteps,
  onNext,
  onBack,
  onSkip,
  isLast,
}: TutorialCalloutProps) {
  const [position, setPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!step.target) {
      setPosition(null);
      return;
    }

    const updatePosition = () => {
      const el = document.querySelector(`[data-tutorial-target="${step.target}"]`);
      if (!el) {
        setPosition(null);
        return;
      }
      const rect = el.getBoundingClientRect();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [step.target, stepIndex]);

  const calloutStyle = (): React.CSSProperties => {
    if (!position) {
      return { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 60 };
    }

    const placement = step.placement || "bottom";
    const base: React.CSSProperties = {
      position: "absolute",
      zIndex: 60,
      maxWidth: 380,
    };

    switch (placement) {
      case "top":
        return { ...base, top: position.top - 16, left: position.left, transform: "translateY(-100%)" };
      case "left":
        return { ...base, top: position.top, left: position.left - 16, transform: "translateX(-100%)" };
      case "right":
        return { ...base, top: position.top, left: position.left + position.width + 16 };
      default:
        return { ...base, top: position.top + 80, left: position.left };
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" />

      {position && step.target && (
        <div
          className="absolute z-[55] rounded-lg ring-4 ring-primary ring-offset-2 pointer-events-none"
          style={{
            top: position.top - 4,
            left: position.left - 4,
            width: position.width + 8,
            height:
              (document.querySelector(`[data-tutorial-target="${step.target}"]`)?.getBoundingClientRect()
                .height ?? 0) + 8,
          }}
        />
      )}

      <div ref={calloutRef} style={calloutStyle()} className="bg-white rounded-lg border shadow-xl p-5">
        <p className="text-xs text-muted-foreground mb-2">
          Step {stepIndex + 1} of {totalSteps}
        </p>
        <h3 className="text-base font-medium mb-2">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.content}</p>
        <div className="flex items-center justify-between gap-2">
          <button onClick={onSkip} className="text-xs text-muted-foreground hover:text-foreground">
            Skip tutorial
          </button>
          <div className="flex gap-2">
            {stepIndex > 0 && (
              <button
                onClick={onBack}
                className="text-sm px-3 py-1.5 rounded-md border hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={onNext}
              className="text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLast ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
