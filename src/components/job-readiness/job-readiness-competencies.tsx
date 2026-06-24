"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPETENCIES } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress, QuizQuestion } from "@/lib/job-readiness/types";

function CompetencyQuiz({
  title,
  questions,
  onBack,
  onComplete,
}: {
  title: string;
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

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
      return;
    }
    setFinished(true);
  };

  if (finished) {
    const passed = score >= 70;
    return (
      <div className="space-y-4 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-medium">{score}%</p>
            <Badge className={passed ? "bg-emerald-600" : "bg-amber-600"}>
              {passed ? "Passed" : "Review lesson"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {correct} of {total} correct.
          </p>
          <Button onClick={() => onComplete(score)}>{passed ? "Mark lesson complete" : "Try again"}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to lesson
      </button>
      <p className="text-sm font-medium">{title} — Question {current + 1} of {total}</p>
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
          <Button onClick={handleNext}>{current < total - 1 ? "Next question" : "See results"}</Button>
        </>
      )}
    </div>
  );
}

export function JobReadinessCompetencies({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);

  const allLessons = COMPETENCIES.flatMap((c) => c.lessons);
  const lesson = allLessons.find((l) => l.id === activeLesson);
  const doneCount = Object.values(progress.competencyProgress).filter((l) => l.lessonDone).length;

  const markLessonDone = (lessonId: string, quizScore?: number) => {
    onUpdate((p) => {
      const competencyProgress = {
        ...p.competencyProgress,
        [lessonId]: {
          ...p.competencyProgress[lessonId],
          lessonDone: true,
          quizScore: quizScore ?? p.competencyProgress[lessonId]?.quizScore,
        },
      };
      return syncSectionCertificate("competencies", { ...p, competencyProgress });
    });
    setQuizMode(false);
    setActiveLesson(null);
  };

  if (quizMode && lesson?.quiz) {
    return (
      <CompetencyQuiz
        title={lesson.title}
        questions={lesson.quiz}
        onBack={() => setQuizMode(false)}
        onComplete={(score) => {
          if (score >= 70) markLessonDone(lesson.id, score);
          else setQuizMode(false);
        }}
      />
    );
  }

  if (lesson) {
    const prog = progress.competencyProgress[lesson.id];
    return (
      <div className="space-y-4 max-w-3xl">
        <button
          type="button"
          onClick={() => setActiveLesson(null)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Back to competencies
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-medium">{lesson.title}</h2>
          {prog?.lessonDone && <Badge className="bg-emerald-600">Complete</Badge>}
        </div>
        <div className="space-y-6">
          {lesson.sections.map((sec) => (
            <div key={sec.heading}>
              <h3 className="text-base font-medium mb-2">{sec.heading}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{sec.content}</p>
            </div>
          ))}
        </div>
        {lesson.exercise && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{lesson.exercise.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{lesson.exercise.instructions}</CardContent>
          </Card>
        )}
        <div className="flex flex-wrap gap-2">
          {lesson.quiz && (
            <Button variant="outline" onClick={() => setQuizMode(true)}>
              Take quiz
            </Button>
          )}
          <Button onClick={() => markLessonDone(lesson.id)} disabled={!!prog?.lessonDone}>
            {prog?.lessonDone ? "Lesson complete" : "Mark lesson done"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Core competencies</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {doneCount}/{allLessons.length} lessons complete
        </p>
      </div>
      {COMPETENCIES.map((comp) => (
        <Card key={comp.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{comp.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {comp.lessons.map((l) => {
              const done = progress.competencyProgress[l.id]?.lessonDone;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setActiveLesson(l.id)}
                  className="w-full text-left p-3 rounded-lg border hover:border-primary/40 transition-colors flex items-center justify-between gap-2"
                >
                  <span className="text-sm">{l.title}</span>
                  {done ? (
                    <Badge className="bg-emerald-600 shrink-0">Done</Badge>
                  ) : (
                    <Badge variant="outline" className="shrink-0">
                      Start
                    </Badge>
                  )}
                </button>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
