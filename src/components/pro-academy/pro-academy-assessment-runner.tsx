"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TrainingQuizQuestion } from "@/lib/education/training/types";
import {
  PRO_FINAL_EXAM_MAX_ATTEMPTS,
  PRO_FINAL_EXAM_THRESHOLD,
  PRO_FINAL_EXAM_TIME_SECONDS,
  PRO_MODULE_ASSESSMENT_THRESHOLD,
} from "@/lib/pro-academy/types";
import {
  canAttemptProFinalExam,
  isModuleAssessmentPassed,
  recordCumulativeExam,
  recordModuleAssessment,
  recordProFinalExam,
} from "@/lib/pro-academy/progress";
import type { ProAcademyProgress } from "@/lib/pro-academy/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type AssessmentMode = "module" | "cumulative" | "final";

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ProAcademyAssessmentRunner({
  mode,
  title,
  questions,
  assessmentId,
  progress,
  timeLimitSeconds,
  passThreshold,
  onBack,
  onComplete,
  onUpdate,
}: {
  mode: AssessmentMode;
  title: string;
  questions: TrainingQuizQuestion[];
  assessmentId?: string;
  progress: ProAcademyProgress;
  timeLimitSeconds?: number;
  passThreshold: number;
  onBack: () => void;
  onComplete: (score: number, passed: boolean) => void;
  onUpdate: (updater: (p: ProAcademyProgress) => ProAcademyProgress) => void;
}) {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds ?? 0);
  const submittedRef = useRef(false);

  const pageSize = mode === "final" ? 10 : mode === "cumulative" ? 5 : 5;
  const totalPages = Math.ceil(questions.length / pageSize);
  const pageQuestions = questions.slice(page * pageSize, (page + 1) * pageSize);

  const handleSubmit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= passThreshold;

    if (mode === "module" && assessmentId) {
      onUpdate((p) => recordModuleAssessment(p, assessmentId, score));
    } else if (mode === "cumulative" && assessmentId) {
      onUpdate((p) => recordCumulativeExam(p, assessmentId, score));
    } else if (mode === "final") {
      onUpdate((p) => recordProFinalExam(p, score, p.finalExamTopicScores));
    }

    setSubmitted(true);
    onComplete(score, passed);
  };

  useEffect(() => {
    if (!started || submitted || !timeLimitSeconds) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = window.setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, submitted, timeLeft, timeLimitSeconds]);

  const attemptsRemaining = useMemo(() => {
    if (mode !== "final") return null;
    return Math.max(0, PRO_FINAL_EXAM_MAX_ATTEMPTS - progress.finalExamAttempts);
  }, [mode, progress.finalExamAttempts]);

  if (mode === "final" && !canAttemptProFinalExam(progress) && !progress.finalExamPassed) {
    return (
      <div className="space-y-4 max-w-2xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <h2 className="text-xl font-medium">Exam attempts exhausted</h2>
        <p className="text-sm text-muted-foreground">
          You have used all {PRO_FINAL_EXAM_MAX_ATTEMPTS} attempts. Review weak modules and contact your
          administrator if a reset is required.
        </p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">
          {questions.length} questions · {passThreshold}% to pass
          {timeLimitSeconds ? ` · ${formatTime(timeLimitSeconds)} time limit` : ""}
        </p>
        {mode === "final" && attemptsRemaining !== null && (
          <p className="text-sm">Attempts remaining: {attemptsRemaining}</p>
        )}
        <Button onClick={() => setStarted(true)}>Begin assessment</Button>
      </div>
    );
  }

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed =
      mode === "module" ? isModuleAssessmentPassed(score) : score >= passThreshold;
    return (
      <div className="space-y-4 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-medium">{score}%</p>
            <Badge className={passed ? "bg-emerald-600" : "bg-amber-600"}>
              {passed ? "Passed" : "Not passed"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {correct} of {questions.length} correct.
          </p>
          <Button onClick={onBack}>{passed ? "Continue" : "Back to review"}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Exit (progress lost)
        </button>
        {timeLimitSeconds ? (
          <Badge variant="outline">Time: {formatTime(timeLeft)}</Badge>
        ) : (
          <Badge variant="outline">
            Page {page + 1} of {totalPages}
          </Badge>
        )}
      </div>

      <h2 className="text-lg font-medium">{title}</h2>

      <div className="space-y-6">
        {pageQuestions.map((q, idx) => (
          <fieldset key={q.id} className="space-y-2 p-4 rounded-lg border">
            <legend className="text-sm font-medium px-1">
              {page * pageSize + idx + 1}. {q.question}
            </legend>
            {q.options.map((opt, optIdx) => (
              <label key={opt} className="flex items-start gap-2 text-sm p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === optIdx}
                  onChange={() => setAnswers((a) => ({ ...a, [q.id]: optIdx }))}
                  className="mt-1"
                />
                {opt}
              </label>
            ))}
          </fieldset>
        ))}
      </div>

      <div className="flex gap-3">
        {page > 0 && (
          <Button variant="outline" onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
        )}
        {page < totalPages - 1 ? (
          <Button onClick={() => setPage((p) => p + 1)}>Next page</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit assessment</Button>
        )}
      </div>
    </div>
  );
}

export {
  PRO_FINAL_EXAM_THRESHOLD,
  PRO_FINAL_EXAM_TIME_SECONDS,
  PRO_MODULE_ASSESSMENT_THRESHOLD,
};
