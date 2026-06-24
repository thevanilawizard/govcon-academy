"use client";

import { useState } from "react";
import type { ProAcademyProgress, ProLesson } from "@/lib/pro-academy/types";
import { PRO_LESSON_PASS_THRESHOLD } from "@/lib/pro-academy/types";
import { useMartin } from "@/hooks/use-martin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProAcademyLessonView({
  lesson,
  progress,
  locked,
  onBack,
  onTakeQuiz,
}: {
  lesson: ProLesson;
  progress: ProAcademyProgress;
  locked: boolean;
  onBack: () => void;
  onTakeQuiz: () => void;
}) {
  const { askMartin } = useMartin();
  const [askingMartin, setAskingMartin] = useState(false);
  const bestScore = progress.quizBestScores[lesson.id];
  const completed = progress.lessonsCompleted.includes(lesson.id) && (bestScore ?? 0) >= PRO_LESSON_PASS_THRESHOLD;

  const handleAskMartin = async () => {
    setAskingMartin(true);
    await askMartin({ trigger: "education_lesson", prompt: lesson.martinPrompt });
    setAskingMartin(false);
  };

  if (locked) {
    return (
      <div className="space-y-4 max-w-3xl">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back to module
        </button>
        <p className="text-sm text-muted-foreground">Complete the previous lesson quiz to unlock this content.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to module
      </button>

      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="outline">Lesson {lesson.number}</Badge>
          {lesson.farPart && <Badge variant="outline">FAR Part {lesson.farPart}</Badge>}
          {completed && <Badge className="bg-emerald-600">Complete · {bestScore}%</Badge>}
        </div>
        <h2 className="text-xl font-medium">{lesson.title}</h2>
        {lesson.objectives.length > 0 && (
          <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
            {lesson.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        )}
      </div>

      {lesson.regulatoryQuotes && lesson.regulatoryQuotes.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Regulatory text</h3>
          {lesson.regulatoryQuotes.map((rq) => (
            <blockquote
              key={rq.citation}
              className="border-l-4 border-primary/40 pl-4 py-2 bg-gray-50 rounded-r-lg text-sm"
            >
              <p className="text-xs font-medium text-primary mb-1">{rq.citation}</p>
              <p className="italic text-gray-800">&ldquo;{rq.text}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {lesson.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h3 className="text-sm font-medium">{section.heading}</h3>
            <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">{section.content}</div>
          </section>
        ))}
      </div>

      {lesson.farReferences && lesson.farReferences.length > 0 && (
        <p className="text-xs text-muted-foreground">
          FAR references: {lesson.farReferences.join(", ")}
        </p>
      )}

      {lesson.realWorldApplication && (
        <div className="p-4 rounded-lg border bg-amber-50/50 text-sm">
          <p className="font-medium text-xs uppercase tracking-wide text-amber-800 mb-1">Real-world application</p>
          <p>{lesson.realWorldApplication}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        <Button onClick={onTakeQuiz}>
          {bestScore !== undefined ? `Retake quiz (best: ${bestScore}%)` : "Take lesson quiz"}
        </Button>
        <Button variant="outline" onClick={handleAskMartin} disabled={askingMartin}>
          {askingMartin ? "Asking Martin…" : "Ask Martin about this lesson"}
        </Button>
      </div>
    </div>
  );
}
