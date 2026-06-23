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

export interface FinState {
  cash: number;
  burn: number;
  revenue: number;
  wins: number;
  proposals: number;
  totalValue: number;
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
  result: ProposalResult;
  submittedAt: string;
  resolvedAt?: string;
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
  | "execution_event";

export interface MentorTopicPrompt {
  systemContext: string;
  userPrompt: string;
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
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
}

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
