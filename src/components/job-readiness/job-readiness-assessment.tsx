"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ASSESSMENT_AREAS } from "@/lib/job-readiness/catalog";
import { getAssessmentQuestions } from "@/lib/job-readiness/content";
import { averageAssessmentScore } from "@/lib/job-readiness/progress";
import type { AssessmentArea, JobReadinessProgress, QuizQuestion } from "@/lib/job-readiness/types";

function AreaQuiz({
  area,
  questions,
  onBack,
  onComplete,
}: {
  area: AssessmentArea;
  questions: QuizQuestion[];
  onBack: () => void;
  onComplete: (score: number) => void;
}) {
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

  if (finished) {
    return (
      <div className="space-y-4 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <p className="text-2xl font-medium">{score}%</p>
          <p className="text-sm text-muted-foreground">
            {correct} of {total} correct in {ASSESSMENT_AREAS.find((a) => a.id === area)?.label}
          </p>
          <Button onClick={() => onComplete(score)}>Save score & continue</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to areas
      </button>
      <p className="text-sm font-medium">
        {ASSESSMENT_AREAS.find((a) => a.id === area)?.label} — Question {current + 1} of {total}
      </p>
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
            <button key={opt} type="button" disabled={show} className={cls} onClick={() => handleSelect(optIdx)}>
              {opt}
            </button>
          );
        })}
      </fieldset>
      {revealed[q.id] && (
        <>
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm">{q.explanation}</div>
          <Button
            onClick={() => {
              if (current < total - 1) setCurrent((c) => c + 1);
              else setFinished(true);
            }}
          >
            {current < total - 1 ? "Next question" : "See results"}
          </Button>
        </>
      )}
    </div>
  );
}

export function JobReadinessAssessment({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeArea, setActiveArea] = useState<AssessmentArea | null>(null);
  const avg = averageAssessmentScore(progress);
  const completedAreas = ASSESSMENT_AREAS.filter((a) => progress.assessmentScores[a.id] !== undefined).length;

  if (activeArea) {
    const questions = getAssessmentQuestions(activeArea);
    return (
      <AreaQuiz
        area={activeArea}
        questions={questions}
        onBack={() => setActiveArea(null)}
        onComplete={(score) => {
          onUpdate((p) => ({
            ...p,
            assessmentScores: { ...p.assessmentScores, [activeArea]: score },
            assessmentTakenAt: new Date().toISOString(),
          }));
          setActiveArea(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Skills assessment</h2>
        <p className="text-sm text-muted-foreground mt-1">
          10-area readiness quiz — scores feed your overall readiness and company fit analysis.
        </p>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-wrap items-center gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Average score</p>
            <p className="text-3xl font-medium text-primary">{avg}%</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <Progress value={avg} />
            <p className="text-xs text-muted-foreground mt-1">
              {completedAreas}/{ASSESSMENT_AREAS.length} areas assessed
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 gap-3">
        {ASSESSMENT_AREAS.map((area) => {
          const score = progress.assessmentScores[area.id];
          return (
            <Card key={area.id} className="cursor-pointer hover:border-primary/40" onClick={() => setActiveArea(area.id)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{area.label}</CardTitle>
                  {score !== undefined ? (
                    <Badge variant={score >= 70 ? "default" : "outline"}>{score}%</Badge>
                  ) : (
                    <Badge variant="outline">Not taken</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground">5 questions · Click to {score !== undefined ? "retake" : "start"}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
