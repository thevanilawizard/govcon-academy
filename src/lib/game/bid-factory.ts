import type {
  BidFactoryDraft,
  BidWorksheet,
  CompanyOps,
  IntakeForm,
  Opportunity,
  PricingWorksheet,
  Profile,
  ProposalSliders,
  TeamingPartnerId,
} from "./types";
import { playerMeetsClearance } from "./engine";

export const BID_FACTORY_STEPS = [
  { step: 1, title: "Opportunity Research", description: "Review the solicitation and complete your bid/no-bid worksheet." },
  { step: 2, title: "Solicitation Analysis", description: "Identify Section L, M, C, and J in the RFP." },
  { step: 3, title: "Teaming & Subcontracting", description: "Select partners and meet subcontracting plan requirements." },
  { step: 4, title: "Pricing", description: "Build your cost proposal and compare to the IGCE." },
  { step: 5, title: "Technical Volume", description: "Assemble compliant proposal paragraphs and your compliance matrix." },
  { step: 6, title: "Submission & BAFO", description: "Review evaluation scores before final submission." },
  { step: 7, title: "Submit Proposal", description: "Submit to the agency and await evaluation." },
] as const;

export const TEAMING_PARTNERS: {
  id: TeamingPartnerId;
  name: string;
  capability: string;
  winBonus: number;
  bondingBonus: number;
  farNote: string;
}[] = [
  {
    id: "none",
    name: "No Partner (Prime Only)",
    capability: "You perform all work in-house",
    winBonus: 0,
    bondingBonus: 0,
    farNote: "You must meet FAR 52.219-14 limitations on subcontracting on set-aside contracts.",
  },
  {
    id: "cyber",
    name: "Clearance Cyber LLC",
    capability: "Secret/TS cleared staff, CMMC Level 2",
    winBonus: 8,
    bondingBonus: 0,
    farNote: "Teaming agreement required — flow-down clauses from prime to sub apply.",
  },
  {
    id: "mentor",
    name: "Apex Federal Solutions (Large Business)",
    capability: "Past performance, bonding capacity, 8(a) mentor-protégé eligible",
    winBonus: 11,
    bondingBonus: 500000,
    farNote: "Mentor-protégé relationships require SBA approval and a formal agreement.",
  },
  {
    id: "hubzone",
    name: "HUBZone Tech Partners",
    capability: "HUBZone-certified sub for subcontracting plan goals",
    winBonus: 5,
    bondingBonus: 0,
    farNote: "FAR 52.219-9 subcontracting plan goals must be met in good faith.",
  },
];

export const RFP_SECTION_PARAGRAPHS: {
  id: string;
  text: string;
  correctSection: "L" | "M" | "C" | "J";
}[] = [
  {
    id: "p1",
    text: "Offerors shall submit one electronic copy via SAM.gov by the date specified in Block 8.",
    correctSection: "L",
  },
  {
    id: "p2",
    text: "Technical capability shall be evaluated using the criteria in Table 1 — Approach (40%), Staffing (30%), Management (30%).",
    correctSection: "M",
  },
  {
    id: "p3",
    text: "The contractor shall provide 24/7 help desk support with 4-hour response time for Priority 1 incidents.",
    correctSection: "C",
  },
  {
    id: "p4",
    text: "Attachment J-1: SF 1449 Solicitation/Contract/Order for Commercial Items.",
    correctSection: "J",
  },
];

export const TECHNICAL_PARAGRAPH_POOL: {
  id: string;
  text: string;
  quality: "strong" | "weak" | "risky";
  label: string;
}[] = [
  {
    id: "t1",
    text: "Our team will use an Agile/Scrum methodology with 2-week sprints and daily standups to ensure agency visibility into progress and risk.",
    quality: "strong",
    label: "Addresses SOW requirement",
  },
  {
    id: "t2",
    text: "We are a leading provider of IT services with over 20 years of experience serving federal clients across multiple agencies.",
    quality: "weak",
    label: "Generic — doesn't address requirement",
  },
  {
    id: "t3",
    text: "We guarantee 100% uptime and zero defects for the entire contract period without exception.",
    quality: "risky",
    label: "Unenforceable — creates contract risk",
  },
  {
    id: "t4",
    text: "Our proposed staffing plan assigns a dedicated Service Desk Lead and backup coverage for all Priority 1 and Priority 2 tickets per Section C.",
    quality: "strong",
    label: "Maps to PWS requirement",
  },
  {
    id: "t5",
    text: "Our company values integrity, excellence, and customer service in all that we do.",
    quality: "weak",
    label: "Boilerplate — low evaluator score",
  },
];

export function createDefaultBidWorksheet(): BidWorksheet {
  return {
    hasPastPerformance: false,
    priceCompetitive: false,
    hasStaffCapacity: false,
    incumbentStrong: false,
  };
}

export function createDefaultPricing(opp: Opportunity): PricingWorksheet {
  const igce = generateIgce(opp.estimatedValue);
  return {
    directLaborHours: 2000,
    loadedLaborRate: 85,
    fringeRate: 28,
    overheadRate: 35,
    gaRate: 12,
    profitFee: 10,
    igce,
    bidPrice: 0,
    unbalancedPricing: false,
  };
}

export function createDefaultBidDraft(oppId: string, opp: Opportunity): BidFactoryDraft {
  return {
    oppId,
    step: 1,
    bidDecision: null,
    worksheet: createDefaultBidWorksheet(),
    sectionTags: {},
    teamingPartner: "none",
    subcontractingPlan:
      opp.estimatedValue >= 750000 ? { smallBusinessPct: 30, hubzonePct: 3 } : null,
    pricing: createDefaultPricing(opp),
    selectedTechnicalIds: [],
    bafoAccepted: null,
  };
}

export function generateIgce(estimatedValue: number): number {
  const variance = 0.92 + Math.random() * 0.16;
  return Math.round((estimatedValue * variance) / 1000) * 1000;
}

export function calculatePricingTotal(pricing: PricingWorksheet): number {
  const directLabor = pricing.directLaborHours * pricing.loadedLaborRate;
  const fringe = directLabor * (pricing.fringeRate / 100);
  const overhead = (directLabor + fringe) * (pricing.overheadRate / 100);
  const ga = (directLabor + fringe + overhead) * (pricing.gaRate / 100);
  const subtotal = directLabor + fringe + overhead + ga;
  const total = subtotal * (1 + pricing.profitFee / 100);
  return Math.round(total);
}

export function evaluatePricing(
  pricing: PricingWorksheet,
  igce: number
): {
  total: number;
  competitiveness: "too_high" | "sweet_spot" | "too_low";
  message: string;
  priceScore: number;
} {
  const total = calculatePricingTotal(pricing);
  const ratio = total / igce;

  if (ratio > 1.12) {
    return {
      total,
      competitiveness: "too_high",
      message: "Non-competitive — your price exceeds the IGCE. Evaluators will score price poorly.",
      priceScore: 1,
    };
  }
  if (ratio < 0.78) {
    return {
      total,
      competitiveness: "too_low",
      message: "Below cost — potential buyout/default risk. CO may question your responsibility under FAR 9.104.",
      priceScore: 2,
    };
  }
  const priceScore = ratio <= 1.02 ? 5 : ratio <= 1.06 ? 4 : 3;
  return {
    total,
    competitiveness: "sweet_spot",
    message: "Competitive range — price aligns with the IGCE sweet spot.",
    priceScore,
  };
}

export function scoreSectionAnalysis(sectionTags: Record<string, string>): number {
  let correct = 0;
  for (const para of RFP_SECTION_PARAGRAPHS) {
    if (sectionTags[para.id] === para.correctSection) correct++;
  }
  return correct;
}

export function scoreTechnicalParagraphs(selectedIds: string[]): number {
  let score = 0;
  for (const id of selectedIds) {
    const para = TECHNICAL_PARAGRAPH_POOL.find((p) => p.id === id);
    if (!para) continue;
    if (para.quality === "strong") score += 2;
    if (para.quality === "weak") score += 0;
    if (para.quality === "risky") score -= 2;
  }
  return Math.max(0, Math.min(5, score));
}

export function calculateComplianceScore(
  draft: BidFactoryDraft,
  opp: Opportunity,
  form: IntakeForm,
  companyOps: CompanyOps
): number {
  let score = companyOps.complianceScore;

  const sectionScore = scoreSectionAnalysis(draft.sectionTags);
  if (sectionScore < 3) score -= 8;
  else if (sectionScore === 4) score += 2;

  if (opp.estimatedValue >= 750000 && !draft.subcontractingPlan && draft.teamingPartner === "none") {
    score -= 12;
  }

  const pricingEval = evaluatePricing(draft.pricing, draft.pricing.igce);
  if (pricingEval.competitiveness === "too_low") score -= 6;
  if (draft.pricing.unbalancedPricing) score -= 15;

  const riskySelected = draft.selectedTechnicalIds.some((id) =>
    TECHNICAL_PARAGRAPH_POOL.find((p) => p.id === id && p.quality === "risky")
  );
  if (riskySelected) score -= 10;

  if (!opp.saMatch && opp.setAside !== "full_open" && opp.setAside !== "sb") score -= 8;

  return Math.max(0, Math.min(100, score));
}

export function bidWorksheetRecommendsBid(worksheet: BidWorksheet): boolean {
  const yesCount = [
    worksheet.hasPastPerformance,
    worksheet.priceCompetitive,
    worksheet.hasStaffCapacity,
    !worksheet.incumbentStrong,
  ].filter(Boolean).length;
  return yesCount >= 3;
}

export function draftToProposalSliders(draft: BidFactoryDraft): ProposalSliders {
  const technical = scoreTechnicalParagraphs(draft.selectedTechnicalIds);
  const priceEval = evaluatePricing(draft.pricing, draft.pricing.igce);
  const teamingPartner = draft.teamingPartner !== "none";
  const sectionScore = scoreSectionAnalysis(draft.sectionTags);

  return {
    technical: Math.max(1, Math.min(5, technical + Math.floor(sectionScore / 2))),
    price: priceEval.priceScore,
    pastPerformance: draft.worksheet.hasPastPerformance ? 4 : 2,
    teamingPartner,
  };
}

export function calculateBidFactoryWinProbability(
  opp: Opportunity,
  profile: Profile,
  form: IntakeForm,
  draft: BidFactoryDraft,
  companyOps: CompanyOps
): number {
  const sliders = draftToProposalSliders(draft);
  let score = 38;

  if (opp.saMatch) score += 20;
  else if (opp.setAside !== "full_open" && opp.setAside !== "sb") score -= 14;
  if (opp.naicsMatch) score += 12;
  if (opp.requiresClearance && !playerMeetsClearance(form, opp)) score -= 34;

  if (opp.competitionLevel === "low") score += 18;
  else if (opp.competitionLevel === "high") score -= 14;

  const ppScore = companyOps.pastPerformanceScore;
  if (ppScore >= 80) score += 15;
  else if (ppScore >= 60) score += 8;
  else if (ppScore >= 40) score += 0;
  else if (ppScore >= 20) score -= 10;
  else score -= 18;

  if (opp.evalCriteria === "LPTA") {
    score += (sliders.price - 3) * 7;
    score += (sliders.technical - 3) * 2;
  } else {
    score += (sliders.technical - 3) * 6;
    score += (sliders.price - 3) * 4;
    score += (sliders.pastPerformance - 3) * 5;
  }

  const partner = TEAMING_PARTNERS.find((p) => p.id === draft.teamingPartner);
  if (partner && partner.id !== "none") score += partner.winBonus;

  if (sliders.teamingPartner) score += 5;

  const compliance = calculateComplianceScore(draft, opp, form, companyOps);
  if (compliance < 50) score -= 20;
  else if (compliance < 70) score -= 10;
  else if (compliance >= 85) score += 5;

  if (opp.estimatedValue > companyOps.bondingCapacity) score -= 25;

  return Math.max(5, Math.min(87, score));
}

export function createCompanyOps(form: IntakeForm): CompanyOps {
  const bondingMap: Record<number, number> = {
    15000: 150000,
    37500: 350000,
    75000: 750000,
    175000: 1500000,
    500000: 5000000,
  };

  return {
    samStatus: "active",
    pastPerformanceScore: 0,
    bondingCapacity: bondingMap[form.capital] ?? 750000,
    complianceScore: 85,
    progressionStage: "micro",
    seenTerms: [],
    pinnedTerms: [],
    completedFarModules: [],
  };
}

export function updatePastPerformanceScore(profile: Profile, companyOps: CompanyOps): CompanyOps {
  let score = 0;
  if (profile.contractsWon === 0) {
    score = 0;
  } else {
    score = Math.min(100, profile.contractsWon * 12 + profile.avgPerf * 12);
  }
  return { ...companyOps, pastPerformanceScore: Math.round(score) };
}

export function updateProgressionStage(
  companyOps: CompanyOps,
  contractsWon: number,
  totalValue: number
): CompanyOps {
  let stage = companyOps.progressionStage;
  if (totalValue >= 2000000) stage = "idiq";
  else if (contractsWon >= 3 && companyOps.complianceScore >= 75) stage = "small_business";
  return { ...companyOps, progressionStage: stage };
}

export interface ComplianceAuditEvent {
  id: string;
  title: string;
  description: string;
  farClauseId: string;
  penalty: number;
  warned: boolean;
}

export function maybeTriggerComplianceAudit(
  companyOps: CompanyOps,
  quarter: number
): ComplianceAuditEvent | null {
  if (quarter < 2 || Math.random() > 0.35) return null;

  const audits: Omit<ComplianceAuditEvent, "warned">[] = [
    {
      id: "audit-tina",
      title: "DCAA Cost Data Request",
      description:
        "The Contracting Officer is requesting your certified cost or pricing data under FAR 15.403. You didn't keep contemporaneous records.",
      farClauseId: "15.403",
      penalty: 20,
    },
    {
      id: "audit-subcontracting",
      title: "Subcontracting Plan Review",
      description:
        "SBA is reviewing your subcontracting plan under FAR 52.219-9. Small business goals were not met last quarter.",
      farClauseId: "52.219-9",
      penalty: 12,
    },
    {
      id: "audit-los",
      title: "Limitations on Subcontracting Finding",
      description:
        "A competitor filed a size protest alleging you violated FAR 52.219-14 by subcontracting too much work on a set-aside contract.",
      farClauseId: "52.219-14",
      penalty: 15,
    },
  ];

  const audit = audits[Math.floor(Math.random() * audits.length)];
  const warned = companyOps.completedFarModules.includes(audit.farClauseId);

  return { ...audit, warned };
}

export function getRunwayDays(cash: number, burn: number, revenue: number): number {
  const netBurn = burn - revenue;
  if (netBurn <= 0) return 999;
  return Math.floor((cash / netBurn) * 30);
}
