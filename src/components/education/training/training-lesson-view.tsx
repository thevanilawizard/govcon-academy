"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import type { TrainingLesson } from "@/lib/education/training/types";
import { QUIZ_PASS_THRESHOLD } from "@/lib/education/training/types";
import { renderLinkedText } from "@/lib/education/glossary-links";
import { GLOSSARY_BY_TERM } from "@/lib/education/glossary-full";
import { useMartin } from "@/hooks/use-martin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export function TrainingLessonView({
  lesson,
  completed,
  bestScore,
  exerciseDone,
  locked,
  onBack,
  onTakeQuiz,
  onOpenFinalExam,
}: {
  lesson: TrainingLesson;
  completed: boolean;
  bestScore?: number;
  exerciseDone: boolean;
  locked: boolean;
  onBack: () => void;
  onTakeQuiz: () => void;
  onOpenFinalExam?: () => void;
}) {
  const markRealWorldExercise = useGameStore((s) => s.markRealWorldExercise);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const { askMartin } = useMartin();
  const [glossaryTerm, setGlossaryTerm] = useState<string | null>(null);
  const [askingMartin, setAskingMartin] = useState(false);

  const glossaryEntry = glossaryTerm ? GLOSSARY_BY_TERM[glossaryTerm] : null;

  const handleAskMartin = async () => {
    setAskingMartin(true);
    await askMartin({
      trigger: "education_lesson",
      prompt: lesson.martinPrompt,
    });
    setAskingMartin(false);
  };

  if (locked) {
    return (
      <div className="space-y-4 max-w-3xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back to module
        </button>
        <p className="text-sm text-muted-foreground">
          This lesson is locked. Complete the previous lesson with a {QUIZ_PASS_THRESHOLD}%+ quiz score to unlock.
        </p>
      </div>
    );
  }

  if (lesson.isFinalExam) {
    return (
      <div className="space-y-6 max-w-3xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back to module
        </button>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Lesson {lesson.number}</p>
          <h2 className="text-xl font-medium">{lesson.title}</h2>
        </div>
        {lesson.sections.map((section) => (
          <article key={section.heading} className="space-y-2">
            <h3 className="text-sm font-medium">{section.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {renderLinkedText(section.content, setGlossaryTerm)}
            </p>
          </article>
        ))}
        <Button onClick={onOpenFinalExam}>Begin 100-question final exam</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to module
      </button>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Lesson {lesson.number}</p>
        <h2 className="text-xl font-medium">{lesson.title}</h2>
        {completed && bestScore !== undefined && (
          <Badge className="mt-2 bg-emerald-600">Completed · Quiz {bestScore}%</Badge>
        )}
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Learning objectives</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          {lesson.objectives.map((o) => (
            <li key={o}>• {o}</li>
          ))}
        </ul>
      </div>

      {lesson.sections.map((section) => (
        <article key={section.heading} className="space-y-2">
          <h3 className="text-sm font-medium">{section.heading}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {renderLinkedText(section.content, setGlossaryTerm)}
          </p>
        </article>
      ))}

      <div className="p-4 rounded-lg border bg-amber-50 border-amber-200">
        <p className="text-xs font-medium text-amber-950 mb-1">Real world application</p>
        <p className="text-sm text-amber-900 leading-relaxed">
          {renderLinkedText(lesson.realWorldApplication, setGlossaryTerm)}
        </p>
      </div>

      {lesson.realWorldExercise && (
        <div className="p-4 rounded-lg border space-y-3">
          <p className="text-xs font-medium">Real world exercise</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{lesson.realWorldExercise}</p>
          <div className="flex items-start gap-2">
            <Checkbox
              id="exercise-done"
              checked={exerciseDone}
              onCheckedChange={(v) => {
                if (v) markRealWorldExercise(lesson.id);
              }}
            />
            <label htmlFor="exercise-done" className="text-sm leading-snug">
              I completed this exercise
            </label>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-2 border-t">
        <Button onClick={onTakeQuiz}>{completed ? "Retake quiz" : "Take lesson quiz"}</Button>
        <Button variant="outline" onClick={handleAskMartin} disabled={askingMartin}>
          {askingMartin ? "Martin is thinking..." : "Ask Martin"}
        </Button>
        {!completed && bestScore !== undefined && (
          <p className="text-sm text-amber-700 self-center">
            Previous: {bestScore}% — need {QUIZ_PASS_THRESHOLD}% to pass
          </p>
        )}
      </div>

      <Dialog open={!!glossaryEntry} onOpenChange={() => setGlossaryTerm(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">{glossaryEntry?.term}</DialogTitle>
          </DialogHeader>
          {glossaryEntry && (
            <div className="text-sm space-y-2">
              <p>{glossaryEntry.definition}</p>
              <p className="text-xs text-muted-foreground">{glossaryEntry.whyItMatters}</p>
              <Button size="sm" variant="outline" onClick={() => setActiveTab("glossary")}>
                Open full glossary
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
