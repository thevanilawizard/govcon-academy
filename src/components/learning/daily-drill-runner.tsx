"use client";

import { useMemo, useState } from "react";
import { useLearning } from "@/hooks/use-learning";
import {
  buildDailyDrill,
  gradeDrill,
  isDrillCompleteToday,
  type DailyDrillItem,
} from "@/lib/learning/daily-drill";
import { recordDailyDrillComplete } from "@/lib/learning/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function DailyDrillRunner({ onComplete }: { onComplete?: () => void }) {
  const { progress, save } = useLearning();
  const drill = useMemo(() => buildDailyDrill(progress), [progress]);
  const alreadyDone = isDrillCompleteToday(progress);

  const [itemIndex, setItemIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<
    { itemIndex: number; selectedIndex?: number; flashcardCorrect?: boolean }[]
  >([]);
  const [done, setDone] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const item = drill.items[itemIndex];
  const total = drill.items.length;

  if (alreadyDone && !done) {
    return (
      <Card>
        <CardContent className="p-6 text-center space-y-2">
          <Badge variant="secondary">✓ Today&apos;s drill complete</Badge>
          <p className="text-sm text-muted-foreground">
            🔥 {progress.streakDays} day streak · Come back tomorrow
          </p>
        </CardContent>
      </Card>
    );
  }

  if (done) {
    return (
      <Card>
        <CardContent className="p-6 text-center space-y-3">
          <p className="text-lg font-medium">Drill complete!</p>
          <p className="text-sm text-muted-foreground">
            Score: {finalScore}/{total} · +50 XP · 🔥 {progress.streakDays} day streak
          </p>
          <Button onClick={onComplete}>Back to dashboard</Button>
        </CardContent>
      </Card>
    );
  }

  const advance = (answer: { itemIndex: number; selectedIndex?: number; flashcardCorrect?: boolean }) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    setSelectedIndex(null);
    setSubmitted(false);
    setShowFlashcardAnswer(false);

    if (itemIndex >= total - 1) {
      const { progress: graded, result } = gradeDrill(progress, nextAnswers);
      save(recordDailyDrillComplete(graded, result.score, result.total));
      setFinalScore(result.score);
      setDone(true);
    } else {
      setItemIndex(itemIndex + 1);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Daily Drill</CardTitle>
          <Badge variant="outline">🔥 {progress.streakDays} day streak</Badge>
        </div>
        <p className="text-xs text-muted-foreground">
          Question {itemIndex + 1} of {total} · ~5 minutes
        </p>
        <Progress value={((itemIndex + 1) / total) * 100} className="h-1.5 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <DrillItemView
          item={item}
          showFlashcardAnswer={showFlashcardAnswer}
          selectedIndex={selectedIndex}
          submitted={submitted}
          onShowAnswer={() => setShowFlashcardAnswer(true)}
          onSelect={setSelectedIndex}
          onSubmit={() => setSubmitted(true)}
          onFlashcard={(correct) => advance({ itemIndex, flashcardCorrect: correct })}
          onChoice={() => {
            if (selectedIndex === null) return;
            advance({ itemIndex, selectedIndex });
          }}
        />
      </CardContent>
    </Card>
  );
}

function DrillItemView({
  item,
  showFlashcardAnswer,
  selectedIndex,
  submitted,
  onShowAnswer,
  onSelect,
  onSubmit,
  onFlashcard,
  onChoice,
}: {
  item: DailyDrillItem;
  showFlashcardAnswer: boolean;
  selectedIndex: number | null;
  submitted: boolean;
  onShowAnswer: () => void;
  onSelect: (i: number) => void;
  onSubmit: () => void;
  onFlashcard: (correct: boolean) => void;
  onChoice: () => void;
}) {
  if (item.type === "flashcard") {
    return (
      <>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Flashcard</p>
        <p className="text-lg font-medium">{item.term}</p>
        {showFlashcardAnswer ? (
          <p className="text-sm text-muted-foreground">{item.definition}</p>
        ) : (
          <Button variant="outline" onClick={onShowAnswer}>
            Show definition
          </Button>
        )}
        {showFlashcardAnswer && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onFlashcard(false)}>
              Missed it
            </Button>
            <Button onClick={() => onFlashcard(true)}>Got it</Button>
          </div>
        )}
      </>
    );
  }

  const prompt = item.type === "scenario" ? item.prompt : item.question;
  const options = item.options;
  const explanation = item.explanation;

  return (
    <>
      <p className="text-xs text-muted-foreground uppercase tracking-wide">
        {item.type === "scenario" ? "Scenario" : "FAR Citation"}
      </p>
      <p className="text-sm font-medium">{prompt}</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            type="button"
            disabled={submitted}
            onClick={() => onSelect(i)}
            className={`w-full text-left p-3 rounded-lg border text-sm ${
              selectedIndex === i ? "border-primary bg-primary/5" : "hover:bg-muted/50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {submitted && <p className="text-sm text-muted-foreground">{explanation}</p>}
      {!submitted ? (
        <Button disabled={selectedIndex === null} onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button onClick={onChoice}>Next</Button>
      )}
    </>
  );
}
