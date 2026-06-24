export interface EvaluationFactor {
  id: string;
  name: string;
  weight: number;
  description: string;
}

export interface ProposalOffer {
  id: string;
  vendor: string;
  technicalScore: number;
  managementScore: number;
  pastPerformanceScore: number;
  price: number;
  strengths: string[];
  weaknesses: string[];
  significantWeaknesses: string[];
}

export interface SourceSelectionState {
  phase: "initial" | "competitive_range" | "final";
  inCompetitiveRange: string[];
  selectedWinner: string | null;
}

export const SOURCE_SELECTION_FACTORS: EvaluationFactor[] = [
  { id: "tech", name: "Technical Approach", weight: 40, description: "Understanding of PWS, methodology, risk mitigation" },
  { id: "mgmt", name: "Management Approach", weight: 25, description: "Staffing plan, QA, transition, communication" },
  { id: "pp", name: "Past Performance", weight: 25, description: "Relevance, recency, quality of references" },
  { id: "price", name: "Price", weight: 10, description: "Total evaluated price — lowest gets max price score" },
];

export const SOURCE_SELECTION_PROPOSALS: ProposalOffer[] = [
  {
    id: "alpha",
    vendor: "Alpha Systems Inc.",
    technicalScore: 92,
    managementScore: 88,
    pastPerformanceScore: 95,
    price: 4850000,
    strengths: ["Incumbent with identical scope CPARS Exceptional", "Proprietary automation reduces labor 15%", "Key personnel all named with 10+ yrs experience"],
    weaknesses: ["Price 8% above IGCE", "Limited innovation in technical volume"],
    significantWeaknesses: [],
  },
  {
    id: "beta",
    vendor: "Beta Federal Solutions",
    technicalScore: 85,
    managementScore: 90,
    pastPerformanceScore: 78,
    price: 4200000,
    strengths: ["Lowest price — 12% below IGCE", "Strong PM with PMP and similar agency experience", "Innovative DevSecOps approach"],
    weaknesses: ["Past performance reference only Satisfactory on smaller contract", "Proposed 2-week transition vs. 30-day PWS requirement"],
    significantWeaknesses: ["Transition plan creates moderate performance risk"],
  },
  {
    id: "gamma",
    vendor: "Gamma Consulting Group",
    technicalScore: 78,
    managementScore: 72,
    pastPerformanceScore: 82,
    price: 5100000,
    strengths: ["Strong technical lead", "Excellent past performance on adjacent program"],
    weaknesses: ["Management approach lacks detail on QA", "Highest price", "Staffing plan shows 20% junior labor"],
    significantWeaknesses: ["Management deficiency — insufficient QA methodology"],
  },
];

export function computeWeightedScore(proposal: ProposalOffer, lowestPrice: number): number {
  const priceScore = lowestPrice / proposal.price;
  const tech = (proposal.technicalScore / 100) * 40;
  const mgmt = (proposal.managementScore / 100) * 25;
  const pp = (proposal.pastPerformanceScore / 100) * 25;
  const price = priceScore * 10;
  return Math.round((tech + mgmt + pp + price) * 10) / 10;
}

export function getModelScores(): { proposalId: string; vendor: string; weightedScore: number; rank: number }[] {
  const lowest = Math.min(...SOURCE_SELECTION_PROPOSALS.map((p) => p.price));
  const scored = SOURCE_SELECTION_PROPOSALS.map((p) => ({
    proposalId: p.id,
    vendor: p.vendor,
    weightedScore: computeWeightedScore(p, lowest),
  }));
  scored.sort((a, b) => b.weightedScore - a.weightedScore);
  return scored.map((s, i) => ({ ...s, rank: i + 1 }));
}

export function getRecommendedCompetitiveRange(): string[] {
  return ["alpha", "beta"];
}

export function getModelBestValueDecision(): { winnerId: string; rationale: string } {
  return {
    winnerId: "alpha",
    rationale:
      "Alpha's superior past performance (Exceptional on identical scope) and technical score outweigh Beta's price advantage. Beta's transition weakness is a significant weakness under FAR 15.305. Alpha represents best value despite 15% price premium — consistent with FAR 15.308 tradeoff documentation.",
  };
}

export const SOURCE_SELECTION_BRANCHES = {
  initial: {
    prompt: "Review all three proposals. Score each factor and identify any deficiencies or significant weaknesses.",
    nextPhase: "competitive_range" as const,
  },
  competitive_range: {
    prompt: "Determine which offerors are in the competitive range for discussions under FAR 15.306.",
    nextPhase: "final" as const,
  },
  final: {
    prompt: "Make the best value source selection decision and document the tradeoff rationale.",
    nextPhase: "final" as const,
  },
};
