"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import type { TrainingQuizQuestion } from "@/lib/education/training/types";
import { isQuizPassed } from "@/lib/education/training/progress";
import { QUIZ_PASS_THRESHOLD } from "@/lib/education/training/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TrainingQuiz({
  title,
  subtitle,
  questions,
  lessonId,
  onBack,
  onComplete,
}: {
  title: string;
  subtitle: string;
  questions: TrainingQuizQuestion[];
  lessonId: string;
  onBack: () => void;
  onComplete: (score: number) => void;
}) {
  const recordTrainingQuizScore = useGameStore((s) => s.recordTrainingQuizScore);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const correct = questions.filter((item) => answers[item.id] === item.correctIndex).length;
  const score = Math.round((correct / total) * 100);

  const handleSelect = (optIdx: number) => {
    if (revealed[q.id]) return;
    setAnswers((a) => ({ ...a, [q.id]: optIdx }));
    setRevealed((r) => ({ ...r, [q.id]: true }));
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
      return;
    }
    setFinished(true);
    recordTrainingQuizScore(lessonId, score);
  };

  if (finished) {
    const passed = isQuizPassed(score);
    return (
      <div className="space-y-6 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-medium">{score}%</p>
            <Badge className={passed ? "bg-emerald-600" : "bg-amber-600"}>
              {passed ? "Passed" : "Not passed"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {correct} of {total} correct. {passed
              ? "Next lesson unlocked."
              : `Need ${QUIZ_PASS_THRESHOLD}% to pass.`}
          </p>
          <Button onClick={() => onComplete(score)}>{passed ? "Continue" : "Review lesson"}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to lesson
      </button>

      <div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Question {current + 1} of {total}
          {q.type === "true_false" && " · True/False"}
          {q.type === "scenario" && " · Scenario"}
        </p>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium mb-2">{q.question}</legend>
        {q.options.map((opt, optIdx) => {
          const selected = answers[q.id] === optIdx;
          const show = revealed[q.id];
          const isCorrect = optIdx === q.correctIndex;
          let cls = "w-full text-left text-sm p-3 rounded-lg border transition-colors ";
          if (!show) cls += selected ? "border-primary bg-primary/5" : "hover:bg-gray-50";
          else if (isCorrect) cls += "border-emerald-500 bg-emerald-50";
          else if (selected) cls += "border-red-300 bg-red-50";
          else cls += "opacity-60";

          return (
            <button
              key={opt}
              type="button"
              disabled={show}
              className={cls}
              onClick={() => handleSelect(optIdx)}
            >
              {opt}
            </button>
          );
        })}
      </fieldset>

      {revealed[q.id] && (
        <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-900 leading-relaxed">
          {q.explanation}
        </div>
      )}

      {revealed[q.id] && (
        <Button onClick={handleNext}>
          {current < total - 1 ? "Next question" : "See results"}
        </Button>
      )}
    </div>
  );
}
