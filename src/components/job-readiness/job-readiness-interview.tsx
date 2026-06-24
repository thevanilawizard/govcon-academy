"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { INTERVIEW_QUESTIONS } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import { callToolAi } from "@/lib/tools/api-client";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";
import { AiLoading } from "@/components/tools/shared/ai-loading";

type SimResult = {
  score: number;
  strong: string[];
  missing: string[];
  betterAnswer: string;
  wouldAdvance: boolean;
};

export function JobReadinessInterview({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeId, setActiveId] = useState(INTERVIEW_QUESTIONS[0]?.id ?? "");
  const [showModel, setShowModel] = useState(false);
  const [simMode, setSimMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [simResult, setSimResult] = useState<SimResult | null>(null);

  const question = INTERVIEW_QUESTIONS.find((q) => q.id === activeId) ?? INTERVIEW_QUESTIONS[0];
  const answer = progress.interviewAnswers[question.id] ?? "";

  const saveAnswer = (text: string) => {
    onUpdate((p) => ({
      ...p,
      interviewAnswers: { ...p.interviewAnswers, [question.id]: text },
    }));
  };

  const markPracticed = () => {
    onUpdate((p) => {
      const practiced = p.interviewPracticed.includes(question.id)
        ? p.interviewPracticed
        : [...p.interviewPracticed, question.id];
      return syncSectionCertificate("interview", { ...p, interviewPracticed: practiced });
    });
  };

  const runSimulation = async () => {
    if (!answer.trim()) return;
    setLoading(true);
    setSimResult(null);
    try {
      const res = await callToolAi<SimResult>(
        "interview-simulation",
        `Question: ${question.question}\n\nModel answer: ${question.modelAnswer}\n\nKey points: ${question.keyPoints.join("; ")}\n\nCandidate answer:\n${answer}`,
        undefined,
        true
      );
      setSimResult(res);
      if (typeof res.score === "number") {
        onUpdate((p) => ({
          ...p,
          interviewSimScores: [...p.interviewSimScores, res.score],
        }));
      }
    } catch {
      setSimResult({
        score: 0,
        strong: [],
        missing: ["AI unavailable — add ANTHROPIC_API_KEY"],
        betterAnswer: question.modelAnswer.slice(0, 200),
        wouldAdvance: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-medium">Interview prep</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {progress.interviewPracticed.length}/{INTERVIEW_QUESTIONS.length} questions practiced
          </p>
        </div>
        <Button
          variant={simMode ? "default" : "outline"}
          size="sm"
          onClick={() => {
            setSimMode(!simMode);
            setSimResult(null);
          }}
        >
          {simMode ? "Simulation ON" : "Simulation mode"}
        </Button>
      </div>

      <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
        {INTERVIEW_QUESTIONS.map((q, i) => (
          <Button
            key={q.id}
            variant={q.id === activeId ? "default" : "outline"}
            size="sm"
            className="text-xs h-7"
            onClick={() => {
              setActiveId(q.id);
              setShowModel(false);
              setSimResult(null);
            }}
          >
            {i + 1}
            {progress.interviewPracticed.includes(q.id) && " ✓"}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{question.category}</Badge>
            {progress.interviewPracticed.includes(question.id) && (
              <Badge className="bg-emerald-600">Practiced</Badge>
            )}
          </div>
          <CardTitle className="text-base font-medium mt-2">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Your practice answer</p>
            <Textarea
              value={answer}
              onChange={(e) => saveAnswer(e.target.value)}
              placeholder="Draft your answer using STAR for behavioral questions..."
              className="min-h-[140px]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={markPracticed}>
              Mark practiced
            </Button>
            <Button size="sm" variant="outline" onClick={() => setShowModel(!showModel)}>
              {showModel ? "Hide model answer" : "Show model answer"}
            </Button>
            {simMode && (
              <Button size="sm" variant="secondary" onClick={runSimulation} disabled={loading || !answer.trim()}>
                Run AI simulation
              </Button>
            )}
          </div>

          {loading && <AiLoading />}

          {simResult && (
            <div className="p-4 rounded-lg border space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">{simResult.score}/10</span>
                <Badge variant={simResult.wouldAdvance ? "default" : "outline"}>
                  {simResult.wouldAdvance ? "Would advance" : "Needs work"}
                </Badge>
              </div>
              {simResult.strong?.length > 0 && (
                <p>
                  <span className="font-medium">Strong: </span>
                  {simResult.strong.join("; ")}
                </p>
              )}
              {simResult.missing?.length > 0 && (
                <p>
                  <span className="font-medium">Missing: </span>
                  {simResult.missing.join("; ")}
                </p>
              )}
              <p className="text-muted-foreground">{simResult.betterAnswer}</p>
            </div>
          )}

          {showModel && (
            <div className="space-y-4 p-4 rounded-lg bg-muted/40">
              <div>
                <p className="text-xs font-medium mb-1">Model answer</p>
                <p className="text-sm leading-relaxed">{question.modelAnswer}</p>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Key points</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  {question.keyPoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Common mistakes</p>
                <ul className="text-sm space-y-1 list-disc pl-4 text-red-800">
                  {question.commonMistakes.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Follow-ups</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  {question.followUps.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
