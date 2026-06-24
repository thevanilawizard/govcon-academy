"use client";

import { useState } from "react";
import type { CurriculumLesson } from "@/lib/learning/types";
import { LESSON_SECTIONS, QUIZ_PASS_COUNT, QUIZ_TOTAL } from "@/lib/learning/types";
import { useLearning } from "@/hooks/use-learning";
import { getPathLabel } from "@/lib/learning/game-bridges";
import { getLessonIndex, getCurriculum } from "@/lib/learning/curricula";
import { renderLinkedText } from "@/lib/education/glossary-links";
import { GLOSSARY_BY_TERM } from "@/lib/education/glossary-full";
import { LearningDiagrams } from "@/components/learning/learning-diagrams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function LessonViewer({
  lesson,
  onBack,
  onComplete,
  onOpenGlossary,
}: {
  lesson: CurriculumLesson;
  onBack: () => void;
  onComplete?: () => void;
  onOpenGlossary?: () => void;
}) {
  const { progress, markSectionComplete, completeLesson } = useLearning();
  const lp = progress.lessonProgress[lesson.id];
  const [sectionIdx, setSectionIdx] = useState(() => {
    const done = lp?.sectionsCompleted ?? [];
    const next = LESSON_SECTIONS.findIndex((s) => !done.includes(s));
    return next >= 0 ? next : 0;
  });
  const [scenarioChoice, setScenarioChoice] = useState<string | null>(null);
  const [scenarioSubmitted, setScenarioSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [exerciseDone, setExerciseDone] = useState(lp?.exerciseDone ?? false);
  const [glossaryTerm, setGlossaryTerm] = useState<string | null>(null);

  const sectionId = LESSON_SECTIONS[sectionIdx];
  const trackLessons = getCurriculum(lesson.path);
  const trackProgress = ((getLessonIndex(lesson.path, lesson.id) + 1) / trackLessons.length) * 100;
  const sectionProgress = ((sectionIdx + 1) / LESSON_SECTIONS.length) * 100;
  const glossaryEntry = glossaryTerm ? GLOSSARY_BY_TERM[glossaryTerm] : null;

  const goNext = () => {
    markSectionComplete(lesson.id, sectionId);
    if (sectionIdx < LESSON_SECTIONS.length - 1) {
      setSectionIdx(sectionIdx + 1);
      setScenarioSubmitted(false);
      setScenarioChoice(null);
      setQuizSubmitted(false);
    }
  };

  const goPrev = () => {
    if (sectionIdx > 0) setSectionIdx(sectionIdx - 1);
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    let score = 0;
    lesson.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correctIndex) score += 1;
    });
    if (score >= QUIZ_PASS_COUNT) {
      completeLesson(lesson.id, score, lesson.minutes, !lp?.quizScore);
      onComplete?.();
    }
  };

  const quizScore = lesson.quiz.reduce(
    (acc, q, i) => acc + (quizAnswers[i] === q.correctIndex ? 1 : 0),
    0
  );

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-3">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-medium">{lesson.title}</h1>
          <Badge variant="outline">
            Week {lesson.week}, Day {lesson.day}
          </Badge>
          <Badge variant="secondary">{lesson.minutes} min</Badge>
          <Badge>{getPathLabel(lesson.path)}</Badge>
        </div>
        <Progress value={trackProgress} className="h-2" />
        <Progress value={sectionProgress} className="h-1" indicatorClassName="bg-emerald-600" />
        <p className="text-xs text-muted-foreground">
          Section {sectionIdx + 1} of {LESSON_SECTIONS.length}: {sectionId.replace("-", " ")}
        </p>
      </div>

      {sectionId === "big-idea" && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-medium text-primary">The Big Idea</h2>
            <p className="text-lg font-medium">{lesson.bigIdea}</p>
            <div>
              <p className="text-xs font-medium mb-1">Why it matters</p>
              <p className="text-sm text-muted-foreground">{lesson.whyItMatters}</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50 border border-red-100">
              <p className="text-xs font-medium text-red-800 mb-1">If you ignore this</p>
              <p className="text-sm text-red-900/90">{lesson.consequence}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {sectionId === "core-content" && (
        <div className="space-y-4">
          {lesson.coreContent.map((sec, i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-3">
                <h2 className="text-sm font-medium">{sec.heading}</h2>
                <p className="text-sm leading-relaxed">{renderLinkedText(sec.content, setGlossaryTerm)}</p>
                {sec.farCitation && (
                  <Badge variant="outline">{sec.farCitation}</Badge>
                )}
                {sec.martinSays && (
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm">
                    <p className="text-xs font-medium text-blue-800 mb-1">Martin says</p>
                    <p className="text-blue-900/90">{sec.martinSays}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          {lesson.diagramId && <LearningDiagrams diagramId={lesson.diagramId} />}
        </div>
      )}

      {sectionId === "real-world" && (
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-sm font-medium">Real World Example</h2>
            <p className="text-sm">{lesson.realWorldExample.scenario}</p>
            <p className="text-sm"><strong>Action:</strong> {lesson.realWorldExample.action}</p>
            <p className="text-sm"><strong>Outcome:</strong> {lesson.realWorldExample.outcome}</p>
            <p className="text-sm text-primary">{lesson.realWorldExample.lesson}</p>
          </CardContent>
        </Card>
      )}

      {sectionId === "scenario" && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-medium">What Would You Do?</h2>
            <p className="text-sm">{lesson.scenario.prompt}</p>
            <div className="space-y-2">
              {lesson.scenario.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  disabled={scenarioSubmitted}
                  onClick={() => setScenarioChoice(opt.id)}
                  className={`w-full text-left p-3 rounded-lg border text-sm ${
                    scenarioChoice === opt.id ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {scenarioSubmitted && (
              <div className="space-y-2">
                {lesson.scenario.options.map((opt) => (
                  <p
                    key={opt.id}
                    className={`text-sm p-2 rounded ${opt.id === scenarioChoice ? (opt.isCorrect ? "bg-emerald-50" : "bg-red-50") : ""}`}
                  >
                    {opt.feedback}
                  </p>
                ))}
                <Badge variant="outline">{lesson.scenario.farCitation}</Badge>
              </div>
            )}
            {!scenarioSubmitted ? (
              <Button
                disabled={!scenarioChoice}
                onClick={() => {
                  setScenarioSubmitted(true);
                  markSectionComplete(lesson.id, "scenario");
                }}
              >
                Check answer
              </Button>
            ) : null}
          </CardContent>
        </Card>
      )}

      {sectionId === "quiz" && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-medium">Quiz — pass {QUIZ_PASS_COUNT}/{QUIZ_TOTAL}</h2>
            {lesson.quiz.map((q, qi) => (
              <div key={q.id} className="space-y-2 pb-4 border-b last:border-0">
                <p className="text-sm font-medium">{qi + 1}. {q.question}</p>
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    disabled={quizSubmitted}
                    onClick={() => setQuizAnswers({ ...quizAnswers, [qi]: oi })}
                    className={`w-full text-left p-2 rounded border text-sm ${
                      quizAnswers[qi] === oi ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
                {quizSubmitted && (
                  <p className={`text-xs ${quizAnswers[qi] === q.correctIndex ? "text-emerald-700" : "text-red-700"}`}>
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
            {!quizSubmitted ? (
              <Button
                disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
                onClick={handleQuizSubmit}
              >
                Submit quiz
              </Button>
            ) : (
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Score: {quizScore}/{QUIZ_TOTAL}
                  {quizScore >= QUIZ_PASS_COUNT ? " — Passed!" : " — Retake to pass"}
                </p>
                {quizScore < QUIZ_PASS_COUNT && (
                  <Button variant="outline" onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); }}>
                    Retake quiz
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {sectionId === "exercise" && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-medium">Practical Exercise</h2>
            {lesson.practicalExercise && (
              <p className="text-sm text-muted-foreground">{lesson.practicalExercise}</p>
            )}
            {lesson.simulatorPractice && (
              <p className="text-sm text-muted-foreground">{lesson.simulatorPractice}</p>
            )}
            {!lesson.practicalExercise && !lesson.simulatorPractice && (
              <p className="text-sm text-muted-foreground">
                Review today&apos;s content and note one action for your next contract task.
              </p>
            )}
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={exerciseDone} onCheckedChange={(c) => setExerciseDone(!!c)} />
              Mark exercise complete
            </label>
          </CardContent>
        </Card>
      )}

      {sectionId === "next" && (
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-sm font-medium">What&apos;s Next</h2>
            <p className="text-sm">{lesson.nextPreview}</p>
            <p className="text-sm text-muted-foreground">{lesson.nextConnection}</p>
            {lesson.deepLink && (
              <Button variant="outline" size="sm">
                {lesson.deepLink.label}
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={goPrev} disabled={sectionIdx === 0}>
          Previous
        </Button>
        {sectionId !== "quiz" || (quizSubmitted && quizScore >= QUIZ_PASS_COUNT) ? (
          <Button onClick={goNext} disabled={sectionIdx >= LESSON_SECTIONS.length - 1}>
            {sectionIdx >= LESSON_SECTIONS.length - 1 ? "Done" : "Next section"}
          </Button>
        ) : null}
      </div>

      <Dialog open={!!glossaryEntry} onOpenChange={() => setGlossaryTerm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{glossaryEntry?.term}</DialogTitle>
          </DialogHeader>
          <p className="text-sm">{glossaryEntry?.definition}</p>
          {onOpenGlossary && (
            <Button variant="outline" size="sm" onClick={onOpenGlossary}>
              Open full glossary
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
