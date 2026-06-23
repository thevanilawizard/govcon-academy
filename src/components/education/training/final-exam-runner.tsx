"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import {
  buildFinalExamQuestions,
  scoreExamByCategory,
} from "@/lib/education/training/final-exam";
import {
  canAttemptFinalExam,
  isFinalExamPassed,
  mustReviewModules,
} from "@/lib/education/training/progress";
import {
  FINAL_EXAM_CATEGORY_TARGETS,
  FINAL_EXAM_MAX_ATTEMPTS,
  FINAL_EXAM_PASS_THRESHOLD,
  FINAL_EXAM_QUESTION_COUNT,
  FINAL_EXAM_TIME_LIMIT_SECONDS,
  type ExamCategory,
} from "@/lib/education/training/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 10;

const CATEGORY_LABELS: Record<ExamCategory, string> = {
  far: "FAR fundamentals",
  dfars: "DFARS & defense requirements",
  administration: "Contract administration",
  proposals: "Proposal writing & pricing",
  accounting: "Accounting & finance",
  ethics: "Ethics & compliance",
  scenario: "Scenario application",
};

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function FinalExamRunner({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete: (score: number, passed: boolean) => void;
}) {
  const training = useGameStore((s) => s.educationProgress.training);
  const recordFinalExamScore = useGameStore((s) => s.recordFinalExamScore);
  const questions = useMemo(() => buildFinalExamQuestions(), []);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(FINAL_EXAM_TIME_LIMIT_SECONDS);
  const [started, setStarted] = useState(false);
  const submittedRef = useRef(false);

  const attemptsUsed = training.finalExamAttempts;
  const attemptsRemaining = Math.max(0, FINAL_EXAM_MAX_ATTEMPTS - attemptsUsed);

  const handleSubmit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const topicScores = scoreExamByCategory(questions, answers);
    recordFinalExamScore(score, topicScores);
    setSubmitted(true);
  };

  useEffect(() => {
    if (!started || submitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = window.setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, submitted, timeLeft]);

  const pageQuestions = questions.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.ceil(questions.length / PAGE_SIZE);

  if (mustReviewModules(training)) {
    return (
      <div className="space-y-4 max-w-2xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <h2 className="text-xl font-medium">Final exam attempts exhausted</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You have used all {FINAL_EXAM_MAX_ATTEMPTS} attempts without reaching the{" "}
          {FINAL_EXAM_PASS_THRESHOLD}% passing score. Review the modules where your topic scores
          were weakest, then contact your program administrator if a reset is required.
        </p>
        {Object.keys(training.finalExamTopicScores).length > 0 && (
          <TopicScoreReport scores={training.finalExamTopicScores} />
        )}
      </div>
    );
  }

  if (!canAttemptFinalExam(training) && training.finalExamPassed) {
    return (
      <div className="space-y-4 max-w-2xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <h2 className="text-xl font-medium">Final exam passed</h2>
        <p className="text-sm text-muted-foreground">
          You scored {training.finalExamScore}% and earned the program certificate.
        </p>
        {Object.keys(training.finalExamTopicScores).length > 0 && (
          <TopicScoreReport scores={training.finalExamTopicScores} />
        )}
      </div>
    );
  }

  if (!started) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <h2 className="text-xl font-medium">Comprehensive Final Exam</h2>
        <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
          <p>
            {FINAL_EXAM_QUESTION_COUNT} questions · {FINAL_EXAM_PASS_THRESHOLD}% to pass ·{" "}
            {formatTime(FINAL_EXAM_TIME_LIMIT_SECONDS)} time limit
          </p>
          <p>
            Attempt {attemptsUsed + 1} of {FINAL_EXAM_MAX_ATTEMPTS}
            {attemptsRemaining <= 1 && attemptsUsed > 0 && (
              <span className="text-amber-700"> — final attempt</span>
            )}
          </p>
        </div>
        <div className="p-4 rounded-lg border text-xs space-y-1">
          <p className="font-medium text-sm mb-2">Topic coverage</p>
          {(Object.keys(FINAL_EXAM_CATEGORY_TARGETS) as ExamCategory[]).map((cat) => (
            <p key={cat} className="text-muted-foreground">
              {CATEGORY_LABELS[cat]}: {FINAL_EXAM_CATEGORY_TARGETS[cat]} questions
            </p>
          ))}
        </div>
        <Button onClick={() => setStarted(true)}>Begin exam</Button>
      </div>
    );
  }

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = isFinalExamPassed(score);
    const topicScores = scoreExamByCategory(questions, answers);

    return (
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-medium">Final Exam Results</h2>
        <p className="text-3xl font-medium">{score}%</p>
        <p className="text-sm text-muted-foreground">
          {correct} of {questions.length} correct · Pass threshold: {FINAL_EXAM_PASS_THRESHOLD}%
        </p>
        {!passed && attemptsRemaining > 0 && (
          <p className="text-sm text-amber-700">
            You have {attemptsRemaining} attempt{attemptsRemaining === 1 ? "" : "s"} remaining.
            Review weak topic areas before retaking.
          </p>
        )}
        {!passed && attemptsRemaining === 0 && (
          <p className="text-sm text-red-700">
            No attempts remaining. Complete module review before requesting another attempt.
          </p>
        )}
        <TopicScoreReport scores={topicScores} />
        <button type="button" className="text-sm underline" onClick={() => onComplete(score, passed)}>
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <Badge variant="outline" className={timeLeft < 600 ? "border-red-300 text-red-700" : ""}>
          Time remaining: {formatTime(timeLeft)}
        </Badge>
      </div>
      <h2 className="text-xl font-medium">Comprehensive Final Exam</h2>
      <p className="text-sm text-muted-foreground">
        Page {page + 1} of {totalPages} · {questions.length} questions ·{" "}
        {Object.keys(answers).length} answered
      </p>

      {pageQuestions.map((q, idx) => (
        <fieldset key={q.id} className="space-y-2 border rounded-lg p-4">
          <legend className="text-sm font-medium px-1">
            {page * PAGE_SIZE + idx + 1}. {q.question}
          </legend>
          {q.options.map((opt, optIdx) => {
            const selected = answers[q.id] === optIdx;
            return (
              <button
                key={opt}
                type="button"
                className={`w-full text-left text-sm p-2 rounded border ${
                  selected ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                }`}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: optIdx }))}
              >
                {opt}
              </button>
            );
          })}
        </fieldset>
      ))}

      <div className="flex gap-2 flex-wrap">
        {page > 0 && (
          <Button variant="outline" size="sm" onClick={() => setPage((p) => p - 1)}>
            Previous page
          </Button>
        )}
        {page < totalPages - 1 ? (
          <Button size="sm" onClick={() => setPage((p) => p + 1)}>
            Next page
          </Button>
        ) : (
          <Button size="sm" onClick={handleSubmit}>
            Submit final exam
          </Button>
        )}
      </div>
    </div>
  );
}

function TopicScoreReport({
  scores,
}: {
  scores: Partial<Record<ExamCategory, number>>;
}) {
  return (
    <div className="p-4 rounded-lg border space-y-2">
      <p className="text-sm font-medium">Performance by topic</p>
      {(Object.keys(FINAL_EXAM_CATEGORY_TARGETS) as ExamCategory[]).map((cat) => {
        const score = scores[cat];
        if (score === undefined) return null;
        return (
          <div key={cat} className="flex justify-between text-xs">
            <span className="text-muted-foreground">{CATEGORY_LABELS[cat]}</span>
            <span className={score >= FINAL_EXAM_PASS_THRESHOLD ? "text-emerald-700" : "text-amber-700"}>
              {score}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
