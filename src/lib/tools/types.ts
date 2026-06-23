import type { EvalCriteria, SetAsideId, IntakeForm } from "@/lib/game/types";

export type ToolId =
  | "live-sam"
  | "proposal-workshop"
  | "contract-review"
  | "rate-calculator"
  | "career-builder"
  | "bid-no-bid"
  | "sources-sought"
  | "market-intelligence";

export interface LiveSamOpportunity {
  noticeId: string;
  solicitationNumber: string;
  title: string;
  agency: string;
  agencyCode: string;
  naicsCode: string;
  naicsLabel: string;
  setAside: SetAsideId;
  setAsideLabel: string;
  postedDate: string;
  responseDeadline: string;
  daysRemaining: number;
  estimatedValue: number | null;
  description: string;
  uiLink: string;
  type: string;
  naicsMatch: boolean;
  saMatch: boolean;
  matchTier: "strong" | "partial" | "stretch";
  grade: "A" | "B" | "C" | "D" | "F";
}

export interface SamSearchParams {
  keyword?: string;
  naics?: string;
  setAside?: string;
  agency?: string;
  minValue?: number;
  maxValue?: number;
  daysRemaining?: number;
  limit?: number;
  offset?: number;
  profile?: IntakeForm | null;
}

export interface ProposalVersion {
  id: string;
  name: string;
  createdAt: string;
  sectionM: string;
  evalType: EvalCriteria;
  contractType: string;
  pws: string;
  technical: string;
  management: string;
  pastPerformance: string;
  price: number;
  scorecard?: ProposalScorecard;
}

export interface ProposalScorecard {
  technical: { score: number; grade: string };
  requirements: { score: number; grade: string };
  management?: { score: number; grade: string };
  pastPerformance?: { score: number; grade: string };
  priceAssessment: string;
  overallScore: number;
  overallGrade: string;
  strengths: string[];
  weaknesses: string[];
  missing: string[];
  suggestions: string[];
  complianceNotes: string[];
  verdict: string;
  biggestImprovement: string;
  lptaAssessment: string;
  nextSteps: string[];
}

export interface SavedClauseAnalysis {
  id: string;
  createdAt: string;
  clauseText: string;
  contractType: string;
  role: "prime" | "sub";
  tags: string[];
  analysis: ClauseAnalysis;
}

export interface ClauseAnalysis {
  identification: string;
  requirement: string;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  riskColor: "green" | "yellow" | "red";
  whatCouldGoWrong: string[];
  scenarios: string[];
  dollarExposure: string;
  negotiable: boolean;
  negotiationGuide: string;
  alternativeLanguage: string;
  plainEnglish: string;
  dayToDay: string;
  compliance: string[];
  governmentPowers: string[];
  relatedClauses: string[];
}

export interface BidNoBidRecord {
  id: string;
  createdAt: string;
  title: string;
  solicitationNumber: string;
  recommendation: "BID" | "NO-BID" | "BID WITH CONDITIONS";
  reasoning: string;
  inputs: Record<string, unknown>;
  outcome?: "won" | "lost" | "pending" | "passed";
}

export interface RateCalculatorState {
  laborCategories: {
    id: string;
    name: string;
    salary: number;
    hoursPerYear: number;
    quantity: number;
  }[];
  fringe: {
    healthInsurance: number;
    dentalVision: number;
    lifeInsurance: number;
    match401kPct: number;
    ptoDays: number;
    workersCompPct: number;
    unemploymentPct: number;
  };
  overhead: {
    rent: number;
    utilities: number;
    equipmentSoftware: number;
    directSupervision: number;
  };
  ga: {
    executiveSalaries: number;
    accountingFinance: number;
    hr: number;
    itInfrastructure: number;
    businessDevelopment: number;
    legal: number;
  };
  priceBuildUp: {
    categories: { categoryId: string; hours: number }[];
    feePct: number;
  };
}

export interface SourcesSoughtDraft {
  id: string;
  createdAt: string;
  noticeText: string;
  response: string;
}
