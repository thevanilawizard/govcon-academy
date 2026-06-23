import type { ConceptId, EducationProgress, SkillId } from "@/lib/education/concepts";

export type SetAsideId = "sb" | "sdvosb" | "vosb" | "wosb" | "8a" | "hubzone" | "full_open";
export type Background = "military" | "federal" | "private" | "entrepreneur" | "new";
export type CapitalTier = 15000 | 37500 | 75000 | 175000 | 500000;
export type ContractType = "FFP" | "T&M";
export type EvalCriteria = "LPTA" | "Best Value";
export type CompetitionLevel = "low" | "medium" | "high";
export type DeliveryStrategy = "self" | "sub" | "hybrid";
export type ContractStatus = "pending_setup" | "active" | "ended" | "ended_early";
export type MatchTier = "strong" | "partial" | "stretch";
export type ProposalResult = "pending" | "won" | "lost";
export type ClearanceLevel = "none" | "secret" | "top_secret";
export type SamRegistrationStatus = "active" | "expired" | "pending";
export type ProgressionStage = "micro" | "small_business" | "gsa_schedule" | "idiq" | "prime";
export type TeamingPartnerId = "none" | "cyber" | "mentor" | "hubzone";
export type BidFactoryStepNum = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface IntakeForm {
  founderName: string;
  companyName: string;
  capital: CapitalTier;
  background: Background;
  setAsides: SetAsideId[];
  naicsCodes: string[];
  clearanceLevel: ClearanceLevel;
  /** @deprecated migrated to clearanceLevel */
  hasClearance?: boolean;
}

export interface Profile {
  uei: string;
  cageCode: string;
  contractsWon: number;
  avgPerf: number;
}

export interface CompanyOps {
  samStatus: SamRegistrationStatus;
  pastPerformanceScore: number;
  bondingCapacity: number;
  complianceScore: number;
  progressionStage: ProgressionStage;
  seenTerms: string[];
  pinnedTerms: string[];
  completedFarModules: string[];
}

export interface BidWorksheet {
  hasPastPerformance: boolean;
  priceCompetitive: boolean;
  hasStaffCapacity: boolean;
  incumbentStrong: boolean;
}

export interface PricingWorksheet {
  directLaborHours: number;
  loadedLaborRate: number;
  fringeRate: number;
  overheadRate: number;
  gaRate: number;
  profitFee: number;
  igce: number;
  bidPrice: number;
  unbalancedPricing: boolean;
}

export interface BidFactoryDraft {
  oppId: string;
  step: BidFactoryStepNum;
  bidDecision: "bid" | "no_bid" | null;
  worksheet: BidWorksheet;
  sectionTags: Record<string, string>;
  teamingPartner: TeamingPartnerId;
  subcontractingPlan: { smallBusinessPct: number; hubzonePct: number } | null;
  pricing: PricingWorksheet;
  selectedTechnicalIds: string[];
  bafoAccepted: boolean | null;
}

export interface FarClause {
  id: string;
  citation: string;
  title: string;
  summary: string;
  bidImpact: string;
  violationConsequence: string;
  relatedSteps: number[];
}

export interface EducationalTerm {
  id: string;
  term: string;
  definition: string;
  farReference?: string;
  farClauseId?: string;
}

export type InvoiceStatus = "draft" | "submitted" | "approved" | "paid" | "late";
export type DeliverableStatus = "pending" | "submitted" | "accepted" | "missed";
export type GameOverReason = "bankruptcy" | "debarment" | "default_termination";

export interface Deliverable {
  id: string;
  title: string;
  dueMonth: number;
  status: DeliverableStatus;
  submittedAtMonth?: number;
}

export interface GovInvoice {
  id: string;
  contractId: string;
  amount: number;
  periodLabel: string;
  status: InvoiceStatus;
  quarterCreated: number;
  quarterSubmitted?: number;
  quarterApproved?: number;
  quarterPaid?: number;
  paymentTermsDays: 30 | 60 | 90;
  interestAmount?: number;
}

export interface GameOverState {
  reason: GameOverReason;
  title: string;
  message: string;
  teachable: string;
}

export interface FinState {
  cash: number;
  burn: number;
  revenue: number;
  wins: number;
  proposals: number;
  totalValue: number;
  receivables: number;
  pendingApproval: number;
  lineOfCreditLimit: number;
  lineOfCreditUsed: number;
}

export interface Opportunity {
  id: string;
  solicitationNumber: string;
  title: string;
  agency: string;
  agencyCode: string;
  naicsCode: string;
  naicsLabel: string;
  estimatedValue: number;
  contractType: ContractType;
  setAside: SetAsideId;
  setAsideLabel: string;
  optionYears: number;
  daysRemaining: number;
  requiresClearance: boolean;
  clearanceRequired: ClearanceLevel | null;
  isDefense: boolean;
  competitionLevel: CompetitionLevel;
  evalCriteria: EvalCriteria;
  naicsMatch: boolean;
  saMatch: boolean;
  matchTier: MatchTier;
}

export interface ProposalSliders {
  technical: number;
  price: number;
  pastPerformance: number;
  teamingPartner: boolean;
}

export interface SubmittedProposal {
  id: string;
  oppId: string;
  opp: Opportunity;
  oppTitle: string;
  agency: string;
  value: number;
  sliders: ProposalSliders;
  winProbability: number;
  complianceScore?: number;
  result: ProposalResult;
  submittedAt: string;
  resolvedAt?: string;
  debrief?: {
    technicalScore: number;
    priceScore: number;
    pastPerfScore: number;
    competitorScore: number;
  };
}

export interface ExecEvent {
  id: string;
  title: string;
  description: string;
  teachable: string;
  perfDelta: number;
  cashDelta?: number;
  revenueBoost?: number;
  quarter: number;
}

export interface ChoiceOption {
  id: string;
  label: string;
  description: string;
  perfDelta: number;
  cashDelta?: number;
}

export interface ChoiceEvent {
  id: string;
  title: string;
  description: string;
  teachable: string;
  choices: ChoiceOption[];
}

export interface CparsRecord {
  quarter: number;
  score: number;
  label: string;
  optionYear: number;
}

export interface ContractExec {
  strategy: DeliveryStrategy | null;
  margin: number;
  grossMonthly: number;
  netMonthly: number;
  costMonthly: number;
  performance: number;
  months: number;
  totalMonths: number;
  events: ExecEvent[];
  optYrDone: number;
  cpars: CparsRecord[];
  pendingChoice: ChoiceEvent | null;
  deliverables: Deliverable[];
  invoices: GovInvoice[];
  qaspScore: number;
  consecutiveMissedDeliverables: number;
  stopWorkActive: boolean;
  paymentTermsDays?: 30 | 60 | 90;
}

export interface Contract {
  id: string;
  oppId: string;
  title: string;
  agency: string;
  agencyCode: string;
  value: number;
  optionYears: number;
  contractType: ContractType;
  setAside: SetAsideId;
  evalCriteria: EvalCriteria;
  status: ContractStatus;
  wonAt: string;
  exec: ContractExec;
}

export interface GameSave {
  id?: string;
  user_id?: string;
  form: IntakeForm | null;
  profile: Profile | null;
  fin: FinState | null;
  quarter: number;
  opps: Opportunity[];
  submitted: SubmittedProposal[];
  contracts: Contract[];
  companyOps?: CompanyOps | null;
  bidDraft?: BidFactoryDraft | null;
  educationProgress?: EducationProgress | null;
  gameOver?: GameOverState | null;
  tutorialCompleted?: boolean;
  updated_at?: string;
}

export interface MartinMessage {
  id: string;
  content: string;
  trigger: string;
  timestamp: string;
  loading?: boolean;
}

export type MartinTrigger =
  | "game_start"
  | "return"
  | "quarter_advance"
  | "bid_detail"
  | "proposal_win"
  | "proposal_loss"
  | "strategy_pick"
  | "mentor_topic"
  | "execution_event"
  | "education_lesson"
  | "guided";

export interface MentorTopicPrompt {
  systemContext: string;
  userPrompt: string;
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  realWorldTip?: string;
  target?: string;
  placement?: "top" | "bottom" | "left" | "right";
}

export interface Agency {
  name: string;
  code: string;
  prefix: string;
}

export interface NaicsCode {
  code: string;
  label: string;
  avgValue: number;
}

export interface SetAsideInfo {
  id: SetAsideId;
  label: string;
  description: string;
  strategicValue: string;
  bg: string;
  text: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  whyItMatters?: string;
  example?: string;
  commonMistake?: string;
}

export type { EducationProgress, ConceptId, SkillId };

export interface MentorTopic {
  id: string;
  title: string;
  description: string;
}

export interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}
