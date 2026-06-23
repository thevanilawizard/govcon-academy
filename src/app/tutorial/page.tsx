"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { TUTORIAL_STEPS } from "@/lib/game/constants";
import {
  calculateWinProbability,
  createTutorialPracticeOpportunity,
  getEvalGuidance,
  getTutorialPracticeFeedback,
  playerMeetsClearance,
} from "@/lib/game/engine";
import { formatCurrency, formatPercent, getWinProbColor } from "@/lib/utils";
import { TutorialCallout } from "@/components/tutorial/tutorial-callout";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { MATCH_BORDER_COLORS } from "@/lib/game/constants";
import { useMartin } from "@/hooks/use-martin";

export default function TutorialPage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const completeTutorial = useGameStore((s) => s.completeTutorial);
  const { askMartin } = useMartin();

  const [stepIndex, setStepIndex] = useState(0);
  const [technical, setTechnical] = useState(3);
  const [price, setPrice] = useState(3);
  const [pastPerformance, setPastPerformance] = useState(3);
  const [teamingPartner, setTeamingPartner] = useState(false);
  const [practiceResult, setPracticeResult] = useState<string | null>(null);
  const [practiceOutcome, setPracticeOutcome] = useState<"won" | "lost" | null>(null);

  useEffect(() => {
    if (!form || !profile) {
      router.push("/intake");
    }
  }, [form, profile, router]);

  if (!form || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const practiceOpp = createTutorialPracticeOpportunity(form);
  const sliders = { technical, price, pastPerformance, teamingPartner };
  const winProb = calculateWinProbability(practiceOpp, profile, form, sliders);
  const probStyle = getWinProbColor(winProb);
  const currentStep = TUTORIAL_STEPS[stepIndex];
  const showCallout = !practiceResult;

  const finishTutorial = async () => {
    completeTutorial();
    await askMartin({
      trigger: "game_start",
      prompt: `New GovCon firm just registered. ${form.companyName}, set-asides: ${form.setAsides.join(", ")}, NAICS: ${form.naicsCodes.join(", ")}, capital $${form.capital.toLocaleString()}. Give them a Q1 orientation — what to focus on, what to expect, what new firms usually get wrong.`,
    });
    router.push("/game");
  };

  const handleSkip = () => finishTutorial();
  const handleNext = () => {
    if (stepIndex < TUTORIAL_STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      finishTutorial();
    }
  };

  const handlePracticeSubmit = () => {
    const feedback = getTutorialPracticeFeedback(winProb, sliders);
    setPracticeOutcome(feedback.outcome);
    setPracticeResult(feedback.message);
  };

  const mockOpps = [
    { ...practiceOpp, matchTier: "strong" as const },
    {
      ...practiceOpp,
      id: "mock-2",
      title: "Enterprise Systems Integration Services",
      matchTier: "partial" as const,
      naicsMatch: true,
      saMatch: false,
    },
    {
      ...practiceOpp,
      id: "mock-3",
      title: "Defense Logistics",
      matchTier: "stretch" as const,
      naicsMatch: false,
      saMatch: false,
      isDefense: true,
    },
  ];

  const checks = [
    { label: "NAICS match", pass: practiceOpp.naicsMatch },
    { label: "Set-aside eligibility", pass: practiceOpp.saMatch },
    {
      label: "Clearance requirement",
      pass: !practiceOpp.requiresClearance || playerMeetsClearance(form, practiceOpp),
    },
    { label: "Competition level", pass: practiceOpp.competitionLevel !== "high", warn: false },
    { label: "Past performance", pass: profile.contractsWon > 0, warn: profile.contractsWon === 0 },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-medium text-primary">GovCon Academy</span>
            <span className="text-sm text-muted-foreground ml-3">Interactive Tutorial</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleSkip}>
            Skip tutorial
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <div data-tutorial-target="tutorial-opps-header">
          <h1 className="text-2xl font-medium mb-1">SAM.gov Opportunity Browser</h1>
          <p className="text-sm text-muted-foreground">
            Q1 2025 — 12 solicitations posted this quarter
          </p>
        </div>

        <section data-tutorial-target="tutorial-opp-tiers">
          <h2 className="text-sm font-medium mb-3 text-emerald-700">Strong Match</h2>
          <div className="grid gap-3 md:grid-cols-3 mb-6">
            {mockOpps.map((opp) => (
              <div
                key={opp.id}
                className="p-4 rounded-lg border-2 bg-white"
                style={{ borderColor: MATCH_BORDER_COLORS[opp.matchTier] }}
              >
                <p className="text-xs text-muted-foreground mb-1 capitalize">
                  {opp.matchTier === "strong"
                    ? "Strong Match"
                    : opp.matchTier === "partial"
                    ? "Partial Match"
                    : "Stretch"}
                </p>
                <h3 className="text-sm font-medium">{opp.title}</h3>
                <p className="text-xs text-muted-foreground mt-2">{formatCurrency(opp.estimatedValue)}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card data-tutorial-target="tutorial-solicitation-detail">
            <CardHeader>
              <CardTitle className="text-base font-medium">{practiceOpp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{practiceOpp.solicitationNumber}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Set-aside</span>
                <SetAsideBadge setAside={practiceOpp.setAside} />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">NAICS</span>
                <span>{practiceOpp.naicsCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Evaluation</span>
                <span>{practiceOpp.evalCriteria}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contract type</span>
                <span>{practiceOpp.contractType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Days remaining</span>
                <span>{practiceOpp.daysRemaining} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Value</span>
                <span className="font-medium">{formatCurrency(practiceOpp.estimatedValue)}</span>
              </div>
            </CardContent>
          </Card>

          <Card data-tutorial-target="tutorial-bid-analysis">
            <CardHeader>
              <CardTitle className="text-base font-medium">Bid/No-Bid Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {checks.map((c) => (
                  <li key={c.label} className="flex items-center gap-2 text-sm">
                    <span className={c.pass ? "text-emerald-600" : c.warn ? "text-amber-600" : "text-red-600"}>
                      {c.pass ? "✓" : c.warn ? "⚠" : "✗"}
                    </span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card data-tutorial-target="tutorial-proposal-sliders">
          <CardHeader>
            <CardTitle className="text-base font-medium">Proposal Builder</CardTitle>
            <p className="text-sm text-muted-foreground">{getEvalGuidance(practiceOpp.evalCriteria)}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Technical Approach</Label>
                <span className="text-sm text-muted-foreground">{technical}/5</span>
              </div>
              <Slider value={[technical]} min={1} max={5} step={1} onValueChange={([v]) => setTechnical(v)} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Price Competitiveness</Label>
                <span className="text-sm text-muted-foreground">{price}/5</span>
              </div>
              <Slider value={[price]} min={1} max={5} step={1} onValueChange={([v]) => setPrice(v)} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Past Performance</Label>
                <span className="text-sm text-muted-foreground">{pastPerformance}/5</span>
              </div>
              <Slider value={[pastPerformance]} min={1} max={5} step={1} onValueChange={([v]) => setPastPerformance(v)} />
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="tutorial-teaming"
                checked={teamingPartner}
                onCheckedChange={(v) => setTeamingPartner(!!v)}
              />
              <Label htmlFor="tutorial-teaming">Teaming Partner (+11% win probability)</Label>
            </div>
            <div className="p-4 rounded-lg border bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Win Probability</span>
                <span className={`text-2xl font-medium ${probStyle.color}`}>{formatPercent(winProb)}</span>
              </div>
              <p className={`text-sm mt-1 ${probStyle.color}`}>{probStyle.label}</p>
            </div>
          </CardContent>
        </Card>

        <Card data-tutorial-target="tutorial-submission-info">
          <CardContent className="p-4 text-sm text-muted-foreground">
            After submission, agencies evaluate proposals over 3–7 weeks. Wins enter contract setup and build your
            CPARS past performance record. Losses require debrief requests within 3 business days — always request one.
          </CardContent>
        </Card>

        <Card data-tutorial-target="tutorial-practice-bid">
          <CardHeader>
            <CardTitle className="text-base font-medium">Practice Bid</CardTitle>
            <p className="text-sm text-muted-foreground">
              Submit your practice proposal on the opportunity above to receive guided feedback.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {!practiceResult ? (
              <Button onClick={handlePracticeSubmit} className="w-full">
                Submit Practice Proposal
              </Button>
            ) : (
              <div
                className={`p-4 rounded-lg border ${
                  practiceOutcome === "won"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">
                    {practiceOutcome === "won" ? "Practice Win" : "Practice Loss"}
                  </Badge>
                  <span className="text-sm font-medium">{formatPercent(winProb)} win probability</span>
                </div>
                <p className="text-sm leading-relaxed">{practiceResult}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {showCallout && currentStep && (
        <TutorialCallout
          step={currentStep}
          stepIndex={stepIndex}
          totalSteps={TUTORIAL_STEPS.length}
          onNext={handleNext}
          onBack={() => setStepIndex(Math.max(0, stepIndex - 1))}
          onSkip={handleSkip}
          isLast={stepIndex === TUTORIAL_STEPS.length - 1}
        />
      )}
    </div>
  );
}
