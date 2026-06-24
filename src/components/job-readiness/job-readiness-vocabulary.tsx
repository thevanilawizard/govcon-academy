"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { VOCABULARY_TERMS } from "@/lib/job-readiness/vocabulary";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress, VocabularyTerm } from "@/lib/job-readiness/types";

type Mode = "flashcard" | "drill" | "blank";

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function pickDrillCards(progress: JobReadinessProgress, count = 10): VocabularyTerm[] {
  const stats = progress.vocabularyCardStats;
  const sorted = [...VOCABULARY_TERMS].sort((a, b) => {
    const sa = stats[a.id] ?? { correct: 0, wrong: 0 };
    const sb = stats[b.id] ?? { correct: 0, wrong: 0 };
    const ra = sa.wrong / Math.max(1, sa.correct + sa.wrong);
    const rb = sb.wrong / Math.max(1, sb.correct + sb.wrong);
    return rb - ra;
  });
  return sorted.slice(0, count);
}

export function JobReadinessVocabulary({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [mode, setMode] = useState<Mode>("drill");
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [blankAnswer, setBlankAnswer] = useState("");
  const [blankResult, setBlankResult] = useState<"correct" | "wrong" | null>(null);

  const drillCards = useMemo(() => pickDrillCards(progress), [progress]);
  const cards = mode === "flashcard" ? VOCABULARY_TERMS : drillCards;
  const card = cards[cardIdx % cards.length];

  const recordAnswer = (correct: boolean) => {
    if (!card) return;
    onUpdate((p) => {
      const prev = p.vocabularyCardStats[card.id] ?? { correct: 0, wrong: 0 };
      const vocabularyCardStats = {
        ...p.vocabularyCardStats,
        [card.id]: {
          correct: prev.correct + (correct ? 1 : 0),
          wrong: prev.wrong + (correct ? 0 : 1),
        },
      };
      let vocabularyMastered = p.vocabularyMastered;
      if (correct && prev.correct + 1 >= 3 && !vocabularyMastered.includes(card.id)) {
        vocabularyMastered = [...vocabularyMastered, card.id];
      }
      const today = getToday();
      let vocabularyStreak = p.vocabularyStreak;
      if (p.vocabularyLastDrill !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().slice(0, 10);
        vocabularyStreak = p.vocabularyLastDrill === yStr ? p.vocabularyStreak + 1 : 1;
      }
      return syncSectionCertificate("vocabulary", {
        ...p,
        vocabularyCardStats,
        vocabularyMastered,
        vocabularyStreak,
        vocabularyLastDrill: today,
      });
    });
    setFlipped(false);
    setBlankAnswer("");
    setBlankResult(null);
    setCardIdx((i) => i + 1);
  };

  const checkBlank = () => {
    if (!card) return;
    const ok = blankAnswer.trim().toLowerCase() === card.blankAnswer.toLowerCase();
    setBlankResult(ok ? "correct" : "wrong");
    recordAnswer(ok);
  };

  const masteredPct = Math.round((progress.vocabularyMastered.length / VOCABULARY_TERMS.length) * 100);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-medium">Vocabulary trainer</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {progress.vocabularyMastered.length}/{VOCABULARY_TERMS.length} mastered · Streak: {progress.vocabularyStreak} days
          </p>
          <Progress value={masteredPct} className="mt-2 max-w-xs" />
        </div>
        <div className="flex flex-wrap gap-1">
          {(["drill", "flashcard", "blank"] as Mode[]).map((m) => (
            <Button key={m} size="sm" variant={mode === m ? "default" : "outline"} onClick={() => { setMode(m); setCardIdx(0); setFlipped(false); }}>
              {m === "drill" ? "Daily 10" : m === "flashcard" ? "Flashcards" : "Blank fill"}
            </Button>
          ))}
        </div>
      </div>

      {card && (
        <Card className="max-w-xl mx-auto">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{card.category}</Badge>
              <span className="text-xs text-muted-foreground">
                Card {(cardIdx % cards.length) + 1} of {cards.length}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-center min-h-[200px] flex flex-col justify-center">
            {mode === "blank" ? (
              <>
                <p className="text-sm leading-relaxed">
                  {card.contextSentence.replace(new RegExp(card.blankAnswer, "i"), "______")}
                </p>
                <Input
                  value={blankAnswer}
                  onChange={(e) => setBlankAnswer(e.target.value)}
                  placeholder="Type the missing term"
                  className="max-w-xs mx-auto"
                  onKeyDown={(e) => e.key === "Enter" && checkBlank()}
                />
                {blankResult === "wrong" && (
                  <p className="text-sm text-red-600">Answer: {card.blankAnswer}</p>
                )}
                <Button size="sm" onClick={checkBlank} disabled={!blankAnswer.trim()}>
                  Check
                </Button>
              </>
            ) : (
              <>
                <p className="text-xl font-medium">{flipped ? card.definition : card.term}</p>
                {!flipped && <p className="text-xs text-muted-foreground">Tap to reveal</p>}
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => setFlipped(!flipped)}>
                    {flipped ? "Show term" : "Show definition"}
                  </Button>
                  {flipped && (
                    <>
                      <Button size="sm" variant="outline" onClick={() => recordAnswer(false)}>
                        Missed
                      </Button>
                      <Button size="sm" onClick={() => recordAnswer(true)}>
                        Got it
                      </Button>
                    </>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex flex-wrap gap-2 justify-center">
        {(["far", "dfars", "accounting", "proposal", "legal"] as const).map((cat) => {
          const count = VOCABULARY_TERMS.filter((t) => t.category === cat).length;
          const mastered = progress.vocabularyMastered.filter((id) =>
            VOCABULARY_TERMS.find((t) => t.id === id)?.category === cat
          ).length;
          return (
            <Badge key={cat} variant="outline" className="text-xs">
              {cat}: {mastered}/{count}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
