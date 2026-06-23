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
import type {
  Contract,
  DeliveryStrategy,
  FinState,
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

interface GameState {
  form: IntakeForm | null;
  profile: Profile | null;
  fin: FinState | null;
  quarter: number;
  opps: Opportunity[];
  submitted: SubmittedProposal[];
  contracts: Contract[];
  notifications: Notification[];
  martinMessages: MartinMessage[];
  selectedOppId: string | null;
  activeTab: string;
  isLoaded: boolean;
  userId: string | null;
  tutorialCompleted: boolean;

  setUserId: (id: string | null) => void;
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
  getSaveData: () => GameSave;

  submitProposal: (oppId: string, sliders: ProposalSliders, winProb: number) => string;
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
  notifications: [] as Notification[],
  martinMessages: [] as MartinMessage[],
  selectedOppId: null as string | null,
  activeTab: "dashboard",
  isLoaded: false,
  userId: null as string | null,
  tutorialCompleted: false,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  setUserId: (id) => set({ userId: id }),
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
      isLoaded: true,
      tutorialCompleted: false,
    });
  },

  completeSetup: () => {
    const { form } = get();
    if (!form) return;
    const opps = generateOpportunities(12, form.naicsCodes, form.setAsides);
    set({ opps, activeTab: "dashboard" });
  },

  completeTutorial: () => set({ tutorialCompleted: true }),

  loadSave: (save) => {
    const form = save.form ? normalizeIntakeForm(save.form) : null;
    set({
      form,
      profile: save.profile,
      fin: save.fin,
      quarter: save.quarter,
      opps: save.opps.map(normalizeOpportunity),
      submitted: save.submitted,
      contracts: save.contracts,
      tutorialCompleted: save.tutorialCompleted ?? true,
      isLoaded: true,
    });
  },

  resetGame: () => set({ ...initialState, isLoaded: true }),

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
      tutorialCompleted: s.tutorialCompleted,
    };
  },

  submitProposal: (oppId, sliders, winProb) => {
    const { opps, submitted, fin } = get();
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
      result: "pending",
      submittedAt: new Date().toISOString(),
    };

    set({
      submitted: [...submitted, proposal],
      fin: { ...fin, proposals: fin.proposals + 1 },
      opps: opps.filter((o) => o.id !== oppId),
    });

    return proposalId;
  },

  resolvePendingProposal: (proposalId) => {
    const { submitted, contracts, fin, profile } = get();
    const proposal = submitted.find((p) => p.id === proposalId);
    if (!proposal || proposal.result !== "pending" || !fin || !profile) return;

    const won = resolveProposal(proposal.winProbability);
    const updatedProposal: SubmittedProposal = {
      ...proposal,
      result: won ? "won" : "lost",
      resolvedAt: new Date().toISOString(),
    };

    let updatedContracts = contracts;
    let updatedFin = fin;
    let updatedProfile = profile;

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

    set({
      submitted: submitted.map((p) => (p.id === proposalId ? updatedProposal : p)),
      contracts: updatedContracts,
      fin: updatedFin,
      profile: updatedProfile,
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
    const { contracts, fin } = get();
    if (!fin) return;

    const contract = contracts.find((c) => c.id === contractId);
    if (!contract) return;

    const { contract: updated, cashDelta } = resolveChoiceEvent(contract, choiceId);
    set({
      contracts: contracts.map((c) => (c.id === contractId ? updated : c)),
      fin: { ...fin, cash: fin.cash + cashDelta },
    });
  },

  advanceToNextQuarter: () => {
    const { fin, contracts, profile, quarter, form } = get();
    if (!fin || !profile || !form) return [];

    const result = advanceQuarter(fin, contracts);
    const updatedProfile = updateAvgPerf(profile, result.contracts);

    set({
      fin: result.fin,
      contracts: result.contracts,
      profile: updatedProfile,
      quarter: quarter + 1,
      opps: generateOpportunities(12, form.naicsCodes, form.setAsides),
    });

    return result.notifications;
  },

  regenerateOpportunities: () => {
    const { form } = get();
    if (!form) return;
    set({ opps: generateOpportunities(12, form.naicsCodes, form.setAsides) });
  },
}));
