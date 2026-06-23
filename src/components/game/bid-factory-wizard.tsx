"use client";

import { useEffect, useMemo, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import type { BidFactoryDraft, Opportunity } from "@/lib/game/types";
import {
  BID_FACTORY_STEPS,
  RFP_SECTION_PARAGRAPHS,
  TEAMING_PARTNERS,
  TECHNICAL_PARAGRAPH_POOL,
  bidWorksheetRecommendsBid,
  calculateBidFactoryWinProbability,
  calculateComplianceScore,
  calculatePricingTotal,
  createDefaultBidDraft,
  draftToProposalSliders,
  evaluatePricing,
  scoreSectionAnalysis,
} from "@/lib/game/bid-factory";
import { formatCurrency, formatPercent, getComplianceColor, getWinProbColor } from "@/lib/utils";
import { FarTermTip } from "@/components/game/far-term-tip";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { playerMeetsClearance } from "@/lib/game/engine";
import { SliderEducationPanel } from "@/components/education/slider-education-panel";

interface BidFactoryWizardProps {
  opp: Opportunity;
  onSubmit: (winProb: number, complianceScore: number, sliders: ReturnType<typeof draftToProposalSliders>) => void;
  onCancel: () => void;
  submitting: boolean;
}

export function BidFactoryWizard({ opp, onSubmit, onCancel, submitting }: BidFactoryWizardProps) {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const companyOps = useGameStore((s) => s.companyOps);
  const bidDraft = useGameStore((s) => s.bidDraft);
  const setBidDraft = useGameStore((s) => s.setBidDraft);

  const [draft, setDraft] = useState<BidFactoryDraft>(() =>
    bidDraft?.oppId === opp.id ? bidDraft : createDefaultBidDraft(opp.id, opp)
  );

  useEffect(() => {
    setBidDraft(draft);
  }, [draft, setBidDraft]);

  const complianceScore = form && companyOps
    ? calculateComplianceScore(draft, opp, form, companyOps)
    : 0;
  const winProb = form && profile && companyOps
    ? calculateBidFactoryWinProbability(opp, profile, form, draft, companyOps)
    : 0;
  const probStyle = getWinProbColor(winProb);
  const pricingEval = evaluatePricing(draft.pricing, draft.pricing.igce);
  const pricingTotal = calculatePricingTotal(draft.pricing);
  const sectionScore = scoreSectionAnalysis(draft.sectionTags);

  const canProceed = useMemo(() => {
    switch (draft.step) {
      case 1:
        return draft.bidDecision !== null;
      case 2:
        return sectionScore >= 3;
      case 3:
        if (opp.estimatedValue >= 750000 && draft.teamingPartner === "none") {
          return !!draft.subcontractingPlan;
        }
        return true;
      case 4:
        return pricingEval.competitiveness === "sweet_spot" && !draft.pricing.unbalancedPricing;
      case 5:
        return draft.selectedTechnicalIds.length >= 2;
      case 6:
      case 7:
        return true;
      default:
        return false;
    }
  }, [draft, opp.estimatedValue, sectionScore, pricingEval]);

  if (!form || !profile || !companyOps) return null;

  const updateDraft = (patch: Partial<BidFactoryDraft>) =>
    setDraft((d) => ({ ...d, ...patch }));

  const goNext = () => {
    if (draft.step < 7) updateDraft({ step: (draft.step + 1) as BidFactoryDraft["step"] });
  };

  const goBack = () => {
    if (draft.step > 1) updateDraft({ step: (draft.step - 1) as BidFactoryDraft["step"] });
  };

  const handleSubmit = () => {
    const sliders = draftToProposalSliders(draft);
    onSubmit(winProb, complianceScore, sliders);
  };

  const stepMeta = BID_FACTORY_STEPS[draft.step - 1];

  return (
    <div className="space-y-6">
      <div>
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-muted-foreground hover:text-foreground mb-2"
        >
          ← Back to proposal history
        </button>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-medium">{opp.title}</h2>
            <p className="text-sm text-muted-foreground">
              {opp.solicitationNumber} · {opp.agency} · {formatCurrency(opp.estimatedValue)}
            </p>
          </div>
          <div className="text-right text-sm">
            <p className={`font-medium ${getComplianceColor(complianceScore)}`}>
              Compliance {complianceScore}/100
            </p>
            <p className={`font-medium ${probStyle.color}`}>Win {formatPercent(winProb)}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Step {draft.step} of 7 — {stepMeta.title}</span>
          <span>{Math.round((draft.step / 7) * 100)}%</span>
        </div>
        <Progress value={(draft.step / 7) * 100} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">{stepMeta.description}</p>
      </div>

      {draft.step === 1 && (
        <Step1Research opp={opp} form={form} draft={draft} updateDraft={updateDraft} />
      )}
      {draft.step === 2 && (
        <Step2Solicitation draft={draft} updateDraft={updateDraft} sectionScore={sectionScore} />
      )}
      {draft.step === 3 && (
        <Step3Teaming opp={opp} draft={draft} updateDraft={updateDraft} />
      )}
      {draft.step === 4 && (
        <Step4Pricing draft={draft} updateDraft={updateDraft} pricingEval={pricingEval} pricingTotal={pricingTotal} evalCriteria={opp.evalCriteria} />
      )}
      {draft.step === 5 && (
        <Step5Technical draft={draft} updateDraft={updateDraft} evalCriteria={opp.evalCriteria} />
      )}
      {draft.step === 6 && (
        <Step6Review
          opp={opp}
          draft={draft}
          winProb={winProb}
          complianceScore={complianceScore}
          pricingTotal={pricingTotal}
        />
      )}
      {draft.step === 7 && (
        <Step7Submit
          opp={opp}
          winProb={winProb}
          complianceScore={complianceScore}
          probStyle={probStyle}
          pricingTotal={pricingTotal}
        />
      )}

      <div className="flex justify-between pt-4 border-t">
        <Button variant="outline" onClick={draft.step === 1 ? onCancel : goBack}>
          {draft.step === 1 ? "Cancel" : "Previous"}
        </Button>
        {draft.step === 1 && draft.bidDecision === "no_bid" ? (
          <Button variant="secondary" onClick={onCancel}>
            Pass on Opportunity
          </Button>
        ) : draft.step < 7 ? (
          <Button onClick={goNext} disabled={!canProceed}>
            Next Step
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={submitting || !canProceed}>
            {submitting ? "Submitting — agency evaluating..." : "Submit Proposal"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Step1Research({
  opp,
  form,
  draft,
  updateDraft,
}: {
  opp: Opportunity;
  form: NonNullable<ReturnType<typeof useGameStore.getState>["form"]>;
  draft: BidFactoryDraft;
  updateDraft: (p: Partial<BidFactoryDraft>) => void;
}) {
  const recommendsBid = bidWorksheetRecommendsBid(draft.worksheet);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">SAM.gov Listing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Agency</span>
            <span>{opp.agency}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Contract type</span>
            <span><FarTermTip termId="ffp">{opp.contractType}</FarTermTip></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Set-aside</span>
            <SetAsideBadge setAside={opp.setAside} />
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">NAICS</span>
            <span>{opp.naicsCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Due in</span>
            <span>{opp.daysRemaining} days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Est. value</span>
            <span className="font-medium">{formatCurrency(opp.estimatedValue)}</span>
          </div>
          {opp.requiresClearance && (
            <p className="text-amber-700 text-xs">
              Requires clearance — you {playerMeetsClearance(form, opp) ? "qualify" : "do NOT qualify"}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Bid/No-Bid Worksheet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(
            [
              ["hasPastPerformance", "Do you have relevant past performance?"],
              ["priceCompetitive", "Is your price likely to be competitive vs. IGCE?"],
              ["hasStaffCapacity", "Do you have staff to execute?"],
              ["incumbentStrong", "Is the incumbent strong? (check = risk)"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="flex items-start gap-3">
              <Checkbox
                id={key}
                checked={draft.worksheet[key]}
                onCheckedChange={(v) =>
                  updateDraft({
                    worksheet: { ...draft.worksheet, [key]: !!v },
                  })
                }
              />
              <Label htmlFor={key} className="text-sm leading-snug">{label}</Label>
            </div>
          ))}
          <div className={`p-3 rounded-lg border text-sm ${recommendsBid ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
            {recommendsBid
              ? "Worksheet suggests BID — but verify compliance and pricing before committing."
              : "Worksheet suggests NO-BID — not bidding is often the right answer."}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={draft.bidDecision === "bid" ? "default" : "outline"}
              onClick={() => updateDraft({ bidDecision: "bid" })}
            >
              Bid
            </Button>
            <Button
              size="sm"
              variant={draft.bidDecision === "no_bid" ? "default" : "outline"}
              onClick={() => updateDraft({ bidDecision: "no_bid" })}
            >
              No-Bid
            </Button>
          </div>
        </CardContent>
      </Card>

      <SliderEducationPanel slider="pastPerformance" evalCriteria={opp.evalCriteria} />
    </div>
  );
}

function Step2Solicitation({
  draft,
  updateDraft,
  sectionScore,
}: {
  draft: BidFactoryDraft;
  updateDraft: (p: Partial<BidFactoryDraft>) => void;
  sectionScore: number;
}) {
  const sections = ["L", "M", "C", "J"] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Tag RFP Sections</CardTitle>
        <p className="text-sm text-muted-foreground">
          Match each paragraph to Section L (Instructions), M (Evaluation), C (SOW), or J (Attachments).
          Score: {sectionScore}/4
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {RFP_SECTION_PARAGRAPHS.map((para) => (
          <div key={para.id} className="p-4 rounded-lg border space-y-3">
            <p className="text-sm">{para.text}</p>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={draft.sectionTags[para.id] === s ? "default" : "outline"}
                  onClick={() =>
                    updateDraft({
                      sectionTags: { ...draft.sectionTags, [para.id]: s },
                    })
                  }
                >
                  Section {s}
                </Button>
              ))}
            </div>
          </div>
        ))}
        {sectionScore < 3 && (
          <p className="text-sm text-red-600">
            Miss Section L or M and evaluators may reject your proposal as non-responsive.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function Step3Teaming({
  opp,
  draft,
  updateDraft,
}: {
  opp: Opportunity;
  draft: BidFactoryDraft;
  updateDraft: (p: Partial<BidFactoryDraft>) => void;
}) {
  return (
    <div className="space-y-6">
      <SliderEducationPanel slider="teaming" evalCriteria={opp.evalCriteria} />
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Teaming Partners</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {TEAMING_PARTNERS.map((partner) => (
            <button
              key={partner.id}
              type="button"
              onClick={() => updateDraft({ teamingPartner: partner.id })}
              className={`p-4 rounded-lg border text-left transition-colors ${
                draft.teamingPartner === partner.id ? "border-primary bg-primary/5" : "hover:bg-gray-50"
              }`}
            >
              <p className="font-medium text-sm">{partner.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{partner.capability}</p>
              <p className="text-xs text-primary mt-2">{partner.farNote}</p>
              {partner.winBonus > 0 && (
                <Badge variant="outline" className="mt-2">+{partner.winBonus}% win probability</Badge>
              )}
            </button>
          ))}
        </CardContent>
      </Card>

      {opp.estimatedValue >= 750000 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Subcontracting Plan — FAR 52.219-9
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Contracts over {formatCurrency(750000)} require small business subcontracting goals.
            </p>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label>Small Business %</Label>
              <Input
                type="number"
                min={0}
                max={100}
                value={draft.subcontractingPlan?.smallBusinessPct ?? 30}
                onChange={(e) =>
                  updateDraft({
                    subcontractingPlan: {
                      smallBusinessPct: Number(e.target.value),
                      hubzonePct: draft.subcontractingPlan?.hubzonePct ?? 3,
                    },
                  })
                }
              />
            </div>
            <div>
              <Label>HUBZone %</Label>
              <Input
                type="number"
                min={0}
                max={100}
                value={draft.subcontractingPlan?.hubzonePct ?? 3}
                onChange={(e) =>
                  updateDraft({
                    subcontractingPlan: {
                      smallBusinessPct: draft.subcontractingPlan?.smallBusinessPct ?? 30,
                      hubzonePct: Number(e.target.value),
                    },
                  })
                }
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Step4Pricing({
  draft,
  updateDraft,
  pricingEval,
  pricingTotal,
  evalCriteria,
}: {
  draft: BidFactoryDraft;
  updateDraft: (p: Partial<BidFactoryDraft>) => void;
  pricingEval: ReturnType<typeof evaluatePricing>;
  pricingTotal: number;
  evalCriteria: Opportunity["evalCriteria"];
}) {
  const updatePricing = (patch: Partial<typeof draft.pricing>) =>
    updateDraft({ pricing: { ...draft.pricing, ...patch, bidPrice: 0 } });

  const directLabor = draft.pricing.directLaborHours * draft.pricing.loadedLaborRate;
  const fringe = directLabor * (draft.pricing.fringeRate / 100);
  const overhead = (directLabor + fringe) * (draft.pricing.overheadRate / 100);
  const ga = (directLabor + fringe + overhead) * (draft.pricing.gaRate / 100);

  return (
    <div className="space-y-6">
      <SliderEducationPanel slider="price" evalCriteria={evalCriteria} />
      <FarTermTip termId="igce" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Cost Buildup Worksheet</CardTitle>
          <p className="text-sm text-muted-foreground">
            IGCE (government estimate): <span className="font-medium">{formatCurrency(draft.pricing.igce)}</span>
          </p>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          {(
            [
              ["directLaborHours", "Direct Labor Hours", draft.pricing.directLaborHours],
              ["loadedLaborRate", "Loaded Labor Rate ($/hr)", draft.pricing.loadedLaborRate],
              ["fringeRate", "Fringe Benefits (%)", draft.pricing.fringeRate],
              ["overheadRate", "Overhead (%)", draft.pricing.overheadRate],
              ["gaRate", "G&A (%)", draft.pricing.gaRate],
              ["profitFee", "Profit/Fee (%)", draft.pricing.profitFee],
            ] as const
          ).map(([key, label, value]) => (
            <div key={key}>
              <Label>{label}</Label>
              <Input
                type="number"
                value={value}
                onChange={(e) => updatePricing({ [key]: Number(e.target.value) })}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2 text-sm">
          <div className="flex justify-between"><span>Direct Labor</span><span>{formatCurrency(directLabor)}</span></div>
          <div className="flex justify-between"><span>+ Fringe ({draft.pricing.fringeRate}%)</span><span>{formatCurrency(fringe)}</span></div>
          <div className="flex justify-between"><span>+ Overhead ({draft.pricing.overheadRate}%)</span><span>{formatCurrency(overhead)}</span></div>
          <div className="flex justify-between"><span>+ G&A ({draft.pricing.gaRate}%)</span><span>{formatCurrency(ga)}</span></div>
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Total with {draft.pricing.profitFee}% fee</span>
            <span>{formatCurrency(pricingTotal)}</span>
          </div>
          <div className={`p-3 rounded-lg mt-2 ${
            pricingEval.competitiveness === "sweet_spot"
              ? "bg-emerald-50 text-emerald-900"
              : "bg-red-50 text-red-900"
          }`}>
            {pricingEval.message}
          </div>
          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="unbalanced"
              checked={draft.pricing.unbalancedPricing}
              onCheckedChange={(v) =>
                updateDraft({
                  pricing: { ...draft.pricing, unbalancedPricing: !!v },
                })
              }
            />
            <Label htmlFor="unbalanced" className="text-xs leading-snug">
              Front-load Year 1 pricing to improve cash flow (triggers FAR 15.404-1 unbalanced pricing risk)
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Step5Technical({
  draft,
  updateDraft,
  evalCriteria,
}: {
  draft: BidFactoryDraft;
  updateDraft: (p: Partial<BidFactoryDraft>) => void;
  evalCriteria: Opportunity["evalCriteria"];
}) {
  const togglePara = (id: string) => {
    const selected = draft.selectedTechnicalIds.includes(id)
      ? draft.selectedTechnicalIds.filter((x) => x !== id)
      : [...draft.selectedTechnicalIds, id];
    updateDraft({ selectedTechnicalIds: selected });
  };

  return (
    <div className="space-y-4">
      <SliderEducationPanel slider="technical" evalCriteria={evalCriteria} />
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Technical Volume — Compliance Matrix</CardTitle>
          <p className="text-sm text-muted-foreground">
            Select 2+ paragraphs that address <FarTermTip termId="pws">PWS</FarTermTip> requirements.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {TECHNICAL_PARAGRAPH_POOL.map((para) => {
            const selected = draft.selectedTechnicalIds.includes(para.id);
            return (
              <button
                key={para.id}
                type="button"
                onClick={() => togglePara(para.id)}
                className={`w-full p-4 rounded-lg border text-left text-sm transition-colors ${
                  selected ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className={
                      para.quality === "strong"
                        ? "text-emerald-700"
                        : para.quality === "risky"
                        ? "text-red-700"
                        : "text-amber-700"
                    }
                  >
                    {para.label}
                  </Badge>
                </div>
                <p>{para.text}</p>
              </button>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

function Step6Review({
  opp,
  draft,
  winProb,
  complianceScore,
  pricingTotal,
}: {
  opp: Opportunity;
  draft: BidFactoryDraft;
  winProb: number;
  complianceScore: number;
  pricingTotal: number;
}) {
  const sliders = draftToProposalSliders(draft);
  const bafoChance = winProb >= 34 && winProb <= 70;

  return (
    <div className="space-y-4">
      <FarTermTip termId="bafo" />
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Evaluation Preview</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Technical</p>
            <p className="text-xl font-medium">{sliders.technical * 20}/100</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-xl font-medium">{sliders.price * 20}/100</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="text-xs text-muted-foreground">Past Performance</p>
            <p className="text-xl font-medium">{sliders.pastPerformance * 20}/100</p>
          </div>
        </CardContent>
      </Card>
      <div className="p-4 rounded-lg border bg-gray-50 text-sm space-y-1">
        <p>Proposed price: {formatCurrency(pricingTotal)} vs IGCE {formatCurrency(draft.pricing.igce)}</p>
        <p>Win probability: {formatPercent(winProb)} · Compliance: {complianceScore}/100</p>
        <p className="text-muted-foreground">
          Evaluation: {opp.evalCriteria} · {bafoChance ? "30% chance of BAFO/discussions if submitted" : "Award likely without discussions"}
        </p>
      </div>
    </div>
  );
}

function Step7Submit({
  opp,
  winProb,
  complianceScore,
  probStyle,
  pricingTotal,
}: {
  opp: Opportunity;
  winProb: number;
  complianceScore: number;
  probStyle: ReturnType<typeof getWinProbColor>;
  pricingTotal: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Ready to Submit</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Your proposal package is complete. After submission, the agency will evaluate over 3–7 weeks.
          Losses trigger a mandatory debrief under FAR 15.506.
        </p>
        <div className="p-4 rounded-lg border bg-gray-50">
          <p className="text-sm"><span className="text-muted-foreground">Opportunity:</span> {opp.title}</p>
          <p className="text-sm"><span className="text-muted-foreground">Price:</span> {formatCurrency(pricingTotal)}</p>
          <p className={`text-2xl font-medium mt-2 ${probStyle.color}`}>{formatPercent(winProb)} win probability</p>
          <p className={`text-sm ${getComplianceColor(complianceScore)}`}>Compliance score: {complianceScore}/100</p>
        </div>
      </CardContent>
    </Card>
  );
}
