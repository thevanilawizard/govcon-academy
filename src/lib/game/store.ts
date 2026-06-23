import { create } from "zustand";
import {
  advanceQuarter,
  applyDeliveryStrategy,
  calcTotalRevenue,
  createContract,
  createFinState,
  createProfile,
  generateOpportunities,
  normalizeIntakeForm,
  normalizeOpportunity,
  resolveChoiceEvent,
  resolveProposal,
  updateAvgPerf,
} from "./engine";
import {
  calculateComplianceScore,
  createCompanyOps,
  maybeTriggerComplianceAudit,
  updatePastPerformanceScore,
  updateProgressionStage,
} from "./bid-factory";
import {
  checkGameOverConditions,
  normalizeContract,
  submitDeliverable as submitDeliverableExec,
  submitGovInvoice,
} from "./contract-execution";
import { drawLineOfCredit } from "./cash-flow";
import {
  createEducationProgress,
  recordConceptLearned,
  type ConceptId,
} from "@/lib/education/concepts";
import type {
  BidFactoryDraft,
  CompanyOps,
  Contract,
  DeliveryStrategy,
  EducationProgress,
  FinState,
  GameOverState,
  GameSave,
  IntakeForm,
  MartinMessage,
  Notification,
  Opportunity,
  Profile,
  ProposalSliders,
  SubmittedProposal,
} from "./types";
import { uid } from "./store-utils";

function normalizeFin(fin: FinState): FinState {
  return {
    ...fin,
    receivables: fin.receivables ?? 0,
    pendingApproval: fin.pendingApproval ?? 0,
    lineOfCreditLimit: fin.lineOfCreditLimit ?? Math.round(fin.cash * 0.5),
    lineOfCreditUsed: fin.lineOfCreditUsed ?? 0,
  };
}

interface GameState {
  form: IntakeForm | null;
  profile: Profile | null;
  fin: FinState | null;
  quarter: number;
  opps: Opportunity[];
  submitted: SubmittedProposal[];
  contracts: Contract[];
  companyOps: CompanyOps | null;
  bidDraft: BidFactoryDraft | null;
  pendingAudit: ReturnType<typeof maybeTriggerComplianceAudit>;
  gameOver: GameOverState | null;
  educationProgress: EducationProgress;
  guidedMode: boolean;
  notifications: Notification[];
  martinMessages: MartinMessage[];
  selectedOppId: string | null;
  activeTab: string;
  isLoaded: boolean;
  userId: string | null;
  isGuest: boolean;
  tutorialCompleted: boolean;

  setUserId: (id: string | null) => void;
  setGuestMode: (guest: boolean) => void;
  setActiveTab: (tab: string) => void;
  setSelectedOppId: (id: string | null) => void;
  addNotification: (message: string, type?: Notification["type"]) => void;
  dismissNotification: (id: string) => void;
  addMartinMessage: (content: string, trigger: string, loading?: boolean) => string;
  updateMartinMessage: (id: string, content: string) => void;

  initFromIntake: (form: IntakeForm) => void;
  completeSetup: () => void;
  completeTutorial: () => void;
  loadSave: (save: GameSave) => void;
  resetGame: () => void;
  startOverFresh: () => void;
  getSaveData: () => GameSave;

  setBidDraft: (draft: BidFactoryDraft | null) => void;
  markTermSeen: (termId: string) => void;
  pinTerm: (termId: string) => void;
  completeFarModule: (farClauseId: string) => void;
  dismissAudit: () => void;
  applyAuditPenalty: (penalty: number, farClauseId: string) => void;
  submitDeliverable: (contractId: string, deliverableId: string) => void;
  submitInvoice: (contractId: string, invoiceId: string) => void;
  drawOnLineOfCredit: (amount: number) => void;
  clearGameOver: () => void;
  setGuidedMode: (on: boolean) => void;
  learnConcept: (conceptId: ConceptId) => void;
  recordDecision: (good: boolean) => void;

  submitProposal: (
    oppId: string,
    sliders: ProposalSliders,
    winProb: number,
    complianceScore?: number
  ) => string;
  resolvePendingProposal: (proposalId: string) => void;
  selectDeliveryStrategy: (contractId: string, strategy: DeliveryStrategy) => void;
  resolveChoice: (contractId: string, choiceId: string) => void;
  advanceToNextQuarter: () => string[];
  regenerateOpportunities: () => void;
}

const initialState = {
  form: null,
  profile: null,
  fin: null,
  quarter: 1,
  opps: [] as Opportunity[],
  submitted: [] as SubmittedProposal[],
  contracts: [] as Contract[],
  companyOps: null as CompanyOps | null,
  bidDraft: null as BidFactoryDraft | null,
  pendingAudit: null,
  gameOver: null as GameOverState | null,
  educationProgress: createEducationProgress(),
  guidedMode: true,
  notifications: [] as Notification[],
  martinMessages: [] as MartinMessage[],
  selectedOppId: null as string | null,
  activeTab: "dashboard",
  isLoaded: false,
  userId: null as string | null,
  isGuest: false,
  tutorialCompleted: false,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  setUserId: (id) => set({ userId: id }),
  setGuestMode: (guest) => set({ isGuest: guest }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedOppId: (id) => set({ selectedOppId: id }),

  addNotification: (message, type = "info") =>
    set((s) => ({
      notifications: [...s.notifications, { id: uid(), message, type }],
    })),

  dismissNotification: (id) =>
    set((s) => ({
      notifications: s.notifications.filter((n) => n.id !== id),
    })),

  addMartinMessage: (content, trigger, loading = false) => {
    const id = uid();
    set((s) => ({
      martinMessages: [
        ...s.martinMessages,
        { id, content, trigger, timestamp: new Date().toISOString(), loading },
      ],
    }));
    return id;
  },

  updateMartinMessage: (id, content) =>
    set((s) => ({
      martinMessages: s.martinMessages.map((m) =>
        m.id === id ? { ...m, content, loading: false } : m
      ),
    })),

  initFromIntake: (form) => {
    const normalized = normalizeIntakeForm(form);
    const profile = createProfile();
    const fin = createFinState(normalized.capital);
    const opps = generateOpportunities(12, normalized.naicsCodes, normalized.setAsides);
    set({
      form: normalized,
      profile,
      fin,
      opps,
      quarter: 1,
      companyOps: createCompanyOps(normalized),
      bidDraft: null,
      educationProgress: createEducationProgress(),
      isLoaded: true,
      tutorialCompleted: false,
    });
  },

  completeSetup: () => {
    const { form, educationProgress } = get();
    if (!form) return;
    const opps = generateOpportunities(12, form.naicsCodes, form.setAsides);
    set({
      opps,
      activeTab: "dashboard",
      educationProgress: recordConceptLearned(educationProgress, "sam_registration"),
    });
  },

  completeTutorial: () =>
    set((s) => ({
      tutorialCompleted: true,
      educationProgress: recordConceptLearned(
        recordConceptLearned(
          recordConceptLearned(s.educationProgress, "bid_no_bid"),
          "solicitation_reading"
        ),
        "set_aside_types"
      ),
    })),

  loadSave: (save) => {
    const form = save.form ? normalizeIntakeForm(save.form) : null;
    let companyOps = save.companyOps ?? (form ? createCompanyOps(form) : null);
    if (save.profile && companyOps) {
      companyOps = updatePastPerformanceScore(save.profile, companyOps);
    }
    set({
      form,
      profile: save.profile,
      fin: save.fin ? normalizeFin(save.fin) : null,
      quarter: save.quarter,
      opps: save.opps.map(normalizeOpportunity),
      submitted: save.submitted,
      contracts: save.contracts.map(normalizeContract),
      companyOps,
      bidDraft: save.bidDraft ?? null,
      gameOver: save.gameOver ?? null,
      educationProgress: save.educationProgress ?? createEducationProgress(),
      tutorialCompleted: save.tutorialCompleted ?? true,
      isLoaded: true,
    });
  },

  resetGame: () => set({ ...initialState, isLoaded: true }),

  startOverFresh: () =>
    set((s) => ({
      ...initialState,
      isLoaded: true,
      userId: s.userId,
      isGuest: s.isGuest,
    })),

  getSaveData: () => {
    const s = get();
    return {
      form: s.form,
      profile: s.profile,
      fin: s.fin,
      quarter: s.quarter,
      opps: s.opps,
      submitted: s.submitted,
      contracts: s.contracts,
      companyOps: s.companyOps,
      bidDraft: s.bidDraft,
      gameOver: s.gameOver,
      educationProgress: s.educationProgress,
      tutorialCompleted: s.tutorialCompleted,
    };
  },

  setGuidedMode: (on) => set({ guidedMode: on }),

  learnConcept: (conceptId) =>
    set((s) => ({
      educationProgress: recordConceptLearned(s.educationProgress, conceptId),
    })),

  recordDecision: (good) =>
    set((s) => ({
      educationProgress: {
        ...s.educationProgress,
        goodDecisions: s.educationProgress.goodDecisions + (good ? 1 : 0),
        totalDecisions: s.educationProgress.totalDecisions + 1,
      },
    })),

  setBidDraft: (draft) => set({ bidDraft: draft }),

  markTermSeen: (termId) =>
    set((s) => {
      if (!s.companyOps || s.companyOps.seenTerms.includes(termId)) return s;
      return {
        companyOps: {
          ...s.companyOps,
          seenTerms: [...s.companyOps.seenTerms, termId],
        },
      };
    }),

  pinTerm: (termId) =>
    set((s) => {
      if (!s.companyOps || s.companyOps.pinnedTerms.includes(termId)) return s;
      return {
        companyOps: {
          ...s.companyOps,
          pinnedTerms: [...s.companyOps.pinnedTerms, termId],
          seenTerms: s.companyOps.seenTerms.includes(termId)
            ? s.companyOps.seenTerms
            : [...s.companyOps.seenTerms, termId],
        },
      };
    }),

  completeFarModule: (farClauseId) =>
    set((s) => {
      if (!s.companyOps || s.companyOps.completedFarModules.includes(farClauseId)) return s;
      return {
        companyOps: {
          ...s.companyOps,
          completedFarModules: [...s.companyOps.completedFarModules, farClauseId],
        },
      };
    }),

  dismissAudit: () => set({ pendingAudit: null }),

  applyAuditPenalty: (penalty, farClauseId) =>
    set((s) => {
      if (!s.companyOps || !s.profile || !s.fin) return s;
      const complianceScore = Math.max(0, s.companyOps.complianceScore - penalty);
      const pastPerformanceScore = Math.max(
        0,
        s.companyOps.pastPerformanceScore - Math.round(penalty * 0.5)
      );
      const companyOps = {
        ...s.companyOps,
        complianceScore,
        pastPerformanceScore,
        completedFarModules: s.companyOps.completedFarModules.includes(farClauseId)
          ? s.companyOps.completedFarModules
          : [...s.companyOps.completedFarModules, farClauseId],
      };
      const gameOver =
        checkGameOverConditions(s.fin.cash, complianceScore, s.contracts) ??
        s.gameOver;
      return {
        pendingAudit: null,
        companyOps,
        gameOver,
        profile: {
          ...s.profile,
          avgPerf: Math.max(0, s.profile.avgPerf - penalty / 20),
        },
      };
    }),

  submitDeliverable: (contractId, deliverableId) =>
    set((s) => ({
      contracts: s.contracts.map((c) =>
        c.id === contractId ? submitDeliverableExec(c, deliverableId) : c
      ),
    })),

  submitInvoice: (contractId, invoiceId) =>
    set((s) => ({
      contracts: s.contracts.map((c) =>
        c.id === contractId ? submitGovInvoice(c, invoiceId, s.quarter) : c
      ),
    })),

  drawOnLineOfCredit: (amount) =>
    set((s) => {
      if (!s.fin) return s;
      const fin = drawLineOfCredit(s.fin, amount);
      return { fin };
    }),

  clearGameOver: () => set({ gameOver: null }),

  submitProposal: (oppId, sliders, winProb, complianceScore) => {
    const { opps, submitted, fin, bidDraft } = get();
    const opp = opps.find((o) => o.id === oppId);
    if (!opp || !fin) return "";

    const proposalId = uid();
    const proposal: SubmittedProposal = {
      id: proposalId,
      oppId,
      opp,
      oppTitle: opp.title,
      agency: opp.agency,
      value: opp.estimatedValue,
      sliders,
      winProbability: winProb,
      complianceScore,
      result: "pending",
      submittedAt: new Date().toISOString(),
    };

    set({
      submitted: [...submitted, proposal],
      fin: { ...fin, proposals: fin.proposals + 1 },
      opps: opps.filter((o) => o.id !== oppId),
      bidDraft: bidDraft?.oppId === oppId ? null : bidDraft,
      selectedOppId: null,
    });

    return proposalId;
  },

  resolvePendingProposal: (proposalId) => {
    const { submitted, contracts, fin, profile, companyOps } = get();
    const proposal = submitted.find((p) => p.id === proposalId);
    if (!proposal || proposal.result !== "pending" || !fin || !profile || !companyOps) return;

    const won = resolveProposal(proposal.winProbability);
    const debrief = {
      technicalScore: proposal.sliders.technical * 20,
      priceScore: proposal.sliders.price * 20,
      pastPerfScore: proposal.sliders.pastPerformance * 20,
      competitorScore: won ? proposal.winProbability - 5 : proposal.winProbability + 8,
    };

    const updatedProposal: SubmittedProposal = {
      ...proposal,
      result: won ? "won" : "lost",
      resolvedAt: new Date().toISOString(),
      debrief,
    };

    let updatedContracts = contracts;
    let updatedFin = fin;
    let updatedProfile = profile;
    let updatedOps = companyOps;

    if (won) {
      const contract = createContract(proposal.opp);
      updatedContracts = [...contracts, contract];
      updatedFin = {
        ...fin,
        wins: fin.wins + 1,
        totalValue: fin.totalValue + proposal.value,
      };
      updatedProfile = { ...profile, contractsWon: profile.contractsWon + 1 };
    }

    updatedOps = updatePastPerformanceScore(updatedProfile, updatedOps);
    updatedOps = updateProgressionStage(
      updatedOps,
      updatedProfile.contractsWon,
      updatedFin.totalValue
    );

    set({
      submitted: submitted.map((p) => (p.id === proposalId ? updatedProposal : p)),
      contracts: updatedContracts,
      fin: updatedFin,
      profile: updatedProfile,
      companyOps: updatedOps,
    });
  },

  selectDeliveryStrategy: (contractId, strategy) => {
    const { contracts, fin } = get();
    if (!fin) return;

    const updatedContracts = contracts.map((c) =>
      c.id === contractId ? applyDeliveryStrategy(c, strategy) : c
    );
    const revenue = calcTotalRevenue(updatedContracts);

    set({
      contracts: updatedContracts,
      fin: { ...fin, revenue },
    });
  },

  resolveChoice: (contractId, choiceId) => {
    const { contracts, fin, quarter } = get();
    if (!fin) return;

    const contract = contracts.find((c) => c.id === contractId);
    if (!contract) return;

    const { contract: updated, cashDelta } = resolveChoiceEvent(contract, choiceId);
    let updatedFin = { ...fin, cash: fin.cash + cashDelta };

    if (choiceId === "loc") {
      updatedFin = drawLineOfCredit(updatedFin, 10000);
    }

    set({
      contracts: contracts.map((c) => (c.id === contractId ? updated : c)),
      fin: updatedFin,
    });
  },

  advanceToNextQuarter: () => {
    const { fin, contracts, profile, quarter, form, companyOps, gameOver } = get();
    if (!fin || !profile || !form || !companyOps || gameOver) return [];

    const result = advanceQuarter(fin, contracts, quarter);
    const updatedProfile = updateAvgPerf(profile, result.contracts);
    let updatedOps = updatePastPerformanceScore(updatedProfile, companyOps);
    updatedOps = updateProgressionStage(
      updatedOps,
      updatedProfile.contractsWon,
      result.fin.totalValue
    );

    const audit = maybeTriggerComplianceAudit(updatedOps, quarter);
    const notifications = [...result.notifications];
    if (audit) {
      notifications.push(
        audit.warned
          ? `Compliance audit triggered — you were warned via the FAR library. ${audit.title}`
          : `Compliance audit: ${audit.title}. Review the FAR library to avoid future penalties.`
      );
    }

    const nextGameOver =
      checkGameOverConditions(result.fin.cash, updatedOps.complianceScore, result.contracts) ??
      null;

    set({
      fin: result.fin,
      contracts: result.contracts,
      profile: updatedProfile,
      companyOps: updatedOps,
      quarter: quarter + 1,
      opps: generateOpportunities(12, form.naicsCodes, form.setAsides),
      pendingAudit: audit,
      gameOver: nextGameOver,
    });

    return notifications;
  },

  regenerateOpportunities: () => {
    const { form } = get();
    if (!form) return;
    set({ opps: generateOpportunities(12, form.naicsCodes, form.setAsides) });
  },
}));
