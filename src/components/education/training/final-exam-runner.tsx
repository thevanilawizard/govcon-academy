"use client";

import { useMemo, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { buildFinalExamQuestions } from "@/lib/education/training/final-exam";
import { isFinalExamPassed } from "@/lib/education/training/progress";
import { FINAL_EXAM_PASS_THRESHOLD } from "@/lib/education/training/types";

const PAGE_SIZE = 10;

export function FinalExamRunner({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete: (score: number, passed: boolean) => void;
}) {
  const recordFinalExamScore = useGameStore((s) => s.recordFinalExamScore);
  const questions = useMemo(() => buildFinalExamQuestions(), []);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const pageQuestions = questions.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.ceil(questions.length / PAGE_SIZE);

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = isFinalExamPassed(score);
    return (
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-medium">Final Exam Results</h2>
        <p className="text-3xl font-medium">{score}%</p>
        <p className="text-sm text-muted-foreground">
          {correct} of {questions.length} correct. Pass threshold: {FINAL_EXAM_PASS_THRESHOLD}%.
        </p>
        <button type="button" className="text-sm underline" onClick={() => onComplete(score, passed)}>
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back
      </button>
      <h2 className="text-xl font-medium">Comprehensive Final Exam</h2>
      <p className="text-sm text-muted-foreground">
        Page {page + 1} of {totalPages} · {questions.length} questions total · {FINAL_EXAM_PASS_THRESHOLD}% to pass
      </p>

      {pageQuestions.map((q, idx) => (
        <fieldset key={q.id} className="space-y-2 border rounded-lg p-4">
          <legend className="text-sm font-medium px-1">
            {page * PAGE_SIZE + idx + 1}. {q.question}
          </legend>
          {q.options.map((opt, optIdx) => {
            const selected = answers[q.id] === optIdx;
            const show = revealed[q.id];
            const isCorrect = optIdx === q.correctIndex;
            return (
              <button
                key={opt}
                type="button"
                disabled={show}
                className={`w-full text-left text-sm p-2 rounded border ${
                  show
                    ? isCorrect
                      ? "border-emerald-500 bg-emerald-50"
                      : selected
                      ? "border-red-300 bg-red-50"
                      : "opacity-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setAnswers((a) => ({ ...a, [q.id]: optIdx }));
                  setRevealed((r) => ({ ...r, [q.id]: true }));
                }}
              >
                {opt}
              </button>
            );
          })}
          {revealed[q.id] && (
            <p className="text-xs text-muted-foreground pt-1">{q.explanation}</p>
          )}
        </fieldset>
      ))}

      <div className="flex gap-2">
        {page > 0 && (
          <button type="button" className="text-sm underline" onClick={() => setPage((p) => p - 1)}>
            Previous page
          </button>
        )}
        {page < totalPages - 1 ? (
          <button type="button" className="text-sm underline" onClick={() => setPage((p) => p + 1)}>
            Next page
          </button>
        ) : (
          <button
            type="button"
            className="text-sm font-medium text-primary"
            onClick={() => {
              const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
              const score = Math.round((correct / questions.length) * 100);
              recordFinalExamScore(score);
              setSubmitted(true);
            }}
          >
            Submit final exam
          </button>
        )}
      </div>
    </div>
  );
}
