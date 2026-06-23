import {
  AGENCIES,
  DEFENSE_AGENCY_CODES,
  DEFENSE_OPPORTUNITY_TITLES,
  DEFAULT_BURN,
  NAICS_CODES,
  OPPORTUNITY_TITLES,
  SET_ASIDE_MAP,
} from "./constants";
import type {
  ChoiceEvent,
  ClearanceLevel,
  Contract,
  ContractExec,
  DeliveryStrategy,
  EvalCriteria,
  ExecEvent,
  FinState,
  IntakeForm,
  MatchTier,
  Opportunity,
  Profile,
  ProposalSliders,
  SetAsideId,
} from "./types";
import { aggregateFinFromInvoices, processInvoicePipeline, repayLineOfCredit } from "./cash-flow";
import {
  acceptSubmittedDeliverables,
  createQuarterInvoice,
  initializeContractExecution,
  maybeTriggerExecutionEvent,
  processDeliverablesAtQuarterEnd,
} from "./contract-execution";
import { generateCAGE, generateUEI, getCparsLabel, randomChoice, randomInt } from "../utils";

function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}

export function createProfile(): Profile {
  return {
    uei: generateUEI(),
    cageCode: generateCAGE(),
    contractsWon: 0,
    avgPerf: 0,
  };
}

export function createFinState(capital: number): FinState {
  return {
    cash: capital,
    burn: DEFAULT_BURN,
    revenue: 0,
    wins: 0,
    proposals: 0,
    totalValue: 0,
    receivables: 0,
    pendingApproval: 0,
    lineOfCreditLimit: Math.round(capital * 0.5),
    lineOfCreditUsed: 0,
  };
}

function playerQualifiesForSetAside(
  setAside: SetAsideId,
  playerSetAsides: SetAsideId[]
): boolean {
  if (setAside === "full_open" || setAside === "sb") return true;
  return playerSetAsides.includes(setAside);
}

function pickSetAside(playerSetAsides: SetAsideId[]): SetAsideId {
  if (Math.random() < 0.28) return "full_open";
  if (Math.random() < 0.45 && playerSetAsides.length > 0) {
    return randomChoice(playerSetAsides.filter((s) => s !== "sb") as SetAsideId[]) || "sb";
  }
  return "sb";
}

function getMatchTier(naicsMatch: boolean, saMatch: boolean): MatchTier {
  if (naicsMatch && saMatch) return "strong";
  if (naicsMatch || saMatch) return "partial";
  return "stretch";
}

export function normalizeIntakeForm(form: IntakeForm): IntakeForm {
  if (form.clearanceLevel) return form;
  return {
    ...form,
    clearanceLevel: form.hasClearance ? "secret" : "none",
  };
}

export function playerMeetsClearance(form: IntakeForm, opp: Opportunity): boolean {
  const normalized = normalizeIntakeForm(form);
  if (!opp.requiresClearance) return true;
  if (!opp.clearanceRequired) return normalized.clearanceLevel !== "none";
  if (opp.clearanceRequired === "secret") {
    return normalized.clearanceLevel === "secret" || normalized.clearanceLevel === "top_secret";
  }
  if (opp.clearanceRequired === "top_secret") {
    return normalized.clearanceLevel === "top_secret";
  }
  return normalized.clearanceLevel !== "none";
}

function pickClearanceRequirement(isDefense: boolean): {
  requiresClearance: boolean;
  clearanceRequired: ClearanceLevel | null;
} {
  const clearanceChance = isDefense ? 0.45 : 0.22;
  if (Math.random() >= clearanceChance) {
    return { requiresClearance: false, clearanceRequired: null };
  }
  const clearanceRequired: ClearanceLevel =
    isDefense && Math.random() < 0.55 ? "top_secret" : "secret";
  return { requiresClearance: true, clearanceRequired };
}

function buildOpportunity(
  agency: (typeof AGENCIES)[0],
  naics: (typeof NAICS_CODES)[0],
  title: string,
  isDefense: boolean,
  playerNaics: string[],
  playerSetAsides: SetAsideId[]
): Opportunity {
  const multiplier = isDefense ? 0.8 + Math.random() * 1.0 : 0.5 + Math.random();
  const estimatedValue = Math.round((naics.avgValue * multiplier) / 5000) * 5000;
  const setAside = pickSetAside(playerSetAsides);
  const naicsMatch = playerNaics.includes(naics.code);
  const saMatch = playerQualifiesForSetAside(setAside, playerSetAsides);
  const { requiresClearance, clearanceRequired } = pickClearanceRequirement(isDefense);

  const setAsideInfo = SET_ASIDE_MAP[setAside] || {
    id: "full_open" as SetAsideId,
    label: "Full & Open",
    description: "",
    strategicValue: "",
    bg: "#F1EFE8",
    text: "#444441",
  };

  return {
    id: uid(),
    solicitationNumber: `${agency.prefix}-25-R-${randomInt(1000, 9999)}`,
    title,
    agency: agency.name,
    agencyCode: agency.code,
    naicsCode: naics.code,
    naicsLabel: naics.label,
    estimatedValue,
    contractType: Math.random() < 0.6 ? "FFP" : "T&M",
    setAside,
    setAsideLabel: setAsideInfo.label,
    optionYears: randomInt(1, 4),
    daysRemaining: randomInt(8, 52),
    requiresClearance,
    clearanceRequired,
    isDefense,
    competitionLevel: randomChoice(["low", "medium", "high"] as const),
    evalCriteria: Math.random() < 0.44 ? "LPTA" : "Best Value",
    naicsMatch,
    saMatch,
    matchTier: getMatchTier(naicsMatch, saMatch),
  };
}

export function normalizeOpportunity(opp: Opportunity): Opportunity {
  return {
    ...opp,
    clearanceRequired: opp.clearanceRequired ?? (opp.requiresClearance ? "secret" : null),
    isDefense: opp.isDefense ?? DEFENSE_OPPORTUNITY_TITLES.includes(opp.title),
  };
}

export function createTutorialPracticeOpportunity(form: IntakeForm): Opportunity {
  const normalized = normalizeIntakeForm(form);
  const naicsCode = normalized.naicsCodes[0] || "541511";
  const naics = NAICS_CODES.find((n) => n.code === naicsCode) || NAICS_CODES[0];
  const agency = AGENCIES.find((a) => a.code === "VA") || AGENCIES[0];
  const setAside = normalized.setAsides.includes("sb") ? "sb" : normalized.setAsides[0] || "sb";
  const setAsideInfo = SET_ASIDE_MAP[setAside];

  return {
    id: "tutorial-practice",
    solicitationNumber: `${agency.prefix}-25-R-1001`,
    title: "IT Help Desk & Desktop Support Services",
    agency: agency.name,
    agencyCode: agency.code,
    naicsCode: naics.code,
    naicsLabel: naics.label,
    estimatedValue: 425000,
    contractType: "FFP",
    setAside,
    setAsideLabel: setAsideInfo.label,
    optionYears: 2,
    daysRemaining: 28,
    requiresClearance: false,
    clearanceRequired: null,
    isDefense: false,
    competitionLevel: "medium",
    evalCriteria: "Best Value",
    naicsMatch: true,
    saMatch: true,
    matchTier: "strong",
  };
}

export function getTutorialPracticeFeedback(
  winProb: number,
  sliders: ProposalSliders
): { outcome: "won" | "lost"; message: string } {
  const won = winProb >= 40;
  if (won) {
    return {
      outcome: "won",
      message: `Strong bid at ${winProb}% win probability. Your NAICS and set-aside alignment gave you a real advantage. Technical (${sliders.technical}/5) and price (${sliders.price}/5) were balanced for a Best Value evaluation. In real life, your next step is a delivery strategy decision and COR introduction within 30 days.`,
    };
  }
  return {
    outcome: "lost",
    message: `Your bid came in at ${winProb}% — below the competitive threshold. ${sliders.price < 3 ? "Price was too conservative for this Best Value evaluation." : ""}${sliders.technical < 3 ? " Technical approach needed more depth." : ""}${sliders.pastPerformance < 3 ? " Past performance score hurt you as a new entrant — consider a teaming partner (+11%)." : ""} Request a debrief within 3 business days. Every loss teaches you something if you ask.`,
  };
}

export function generateOpportunities(
  count: number,
  playerNaics: string[],
  playerSetAsides: SetAsideId[]
): Opportunity[] {
  const opps: Opportunity[] = [];
  const usedTitles = new Set<string>();
  const defenseAgencies = AGENCIES.filter((a) => DEFENSE_AGENCY_CODES.includes(a.code));

  for (let i = 0; i < count; i++) {
    const isDefense = Math.random() < 0.35;
    const titlePool = isDefense ? DEFENSE_OPPORTUNITY_TITLES : OPPORTUNITY_TITLES;
    let title = randomChoice(titlePool);
    while (usedTitles.has(title) && usedTitles.size < titlePool.length) {
      title = randomChoice(titlePool);
    }
    usedTitles.add(title);

    const agency = isDefense
      ? randomChoice(defenseAgencies.length > 0 ? defenseAgencies : AGENCIES)
      : randomChoice(AGENCIES);
    const naics = randomChoice(NAICS_CODES);

    opps.push(buildOpportunity(agency, naics, title, isDefense, playerNaics, playerSetAsides));
  }

  return opps;
}

export function calculateWinProbability(
  opp: Opportunity,
  profile: Profile,
  form: IntakeForm,
  sliders: ProposalSliders
): number {
  let score = 38;

  if (opp.saMatch) score += 20;
  else if (opp.setAside !== "full_open" && opp.setAside !== "sb") score -= 14;

  if (opp.naicsMatch) score += 12;

  if (opp.requiresClearance && !playerMeetsClearance(form, opp)) score -= 34;

  if (opp.competitionLevel === "low") score += 18;
  else if (opp.competitionLevel === "high") score -= 14;

  if (profile.contractsWon === 0) score -= 17;
  else if (profile.contractsWon <= 2) score -= 7;
  else if (profile.contractsWon <= 4) score += 0;
  else score += 9;

  if (profile.avgPerf >= 4.5) score += 18;
  else if (profile.avgPerf >= 3.5) score += 10;
  else if (profile.avgPerf >= 2.5) score += 0;
  else if (profile.avgPerf >= 1.5) score -= 10;
  else if (profile.avgPerf > 0) score -= 20;

  if (opp.evalCriteria === "LPTA") {
    score += (sliders.price - 3) * 7;
    score += (sliders.technical - 3) * 2;
  } else {
    score += (sliders.technical - 3) * 6;
    score += (sliders.price - 3) * 3;
    score += (sliders.pastPerformance - 3) * 4;
  }

  if (sliders.teamingPartner) score += 11;

  return Math.min(87, Math.max(5, Math.round(score)));
}

export function resolveProposal(winProb: number): boolean {
  return Math.random() * 100 < winProb;
}

export function createContract(opp: Opportunity): Contract {
  const totalMonths = 12 * (opp.optionYears + 1);
  return {
    id: uid(),
    oppId: opp.id,
    title: opp.title,
    agency: opp.agency,
    agencyCode: opp.agencyCode,
    value: opp.estimatedValue,
    optionYears: opp.optionYears,
    contractType: opp.contractType,
    setAside: opp.setAside,
    evalCriteria: opp.evalCriteria,
    status: "pending_setup",
    wonAt: new Date().toISOString(),
    exec: initializeContractExecution({
      strategy: null,
      margin: 0,
      grossMonthly: Math.round(opp.estimatedValue / totalMonths),
      netMonthly: 0,
      costMonthly: 0,
      performance: 3.0,
      months: 0,
      totalMonths,
      events: [],
      optYrDone: 0,
      cpars: [],
      pendingChoice: null,
      deliverables: [],
      invoices: [],
      qaspScore: 85,
      consecutiveMissedDeliverables: 0,
      stopWorkActive: false,
    }),
  };
}

export function applyDeliveryStrategy(
  contract: Contract,
  strategy: DeliveryStrategy
): Contract {
  const margins: Record<DeliveryStrategy, number> = {
    self: 0.35,
    sub: 0.15,
    hybrid: 0.25,
  };
  const margin = margins[strategy];
  const grossMonthly = contract.exec.grossMonthly;
  const netMonthly = Math.round(grossMonthly * margin);
  const costMonthly = grossMonthly - netMonthly;

  return {
    ...contract,
    status: "active",
    exec: initializeContractExecution({
      ...contract.exec,
      strategy,
      margin,
      grossMonthly,
      netMonthly,
      costMonthly,
    }),
  };
}

export function calcTotalRevenue(contracts: Contract[]): number {
  return contracts
    .filter((c) => c.status === "active")
    .reduce((sum, c) => sum + c.exec.netMonthly, 0);
}

export function advanceQuarter(
  fin: FinState,
  contracts: Contract[],
  currentQuarter: number
): { fin: FinState; contracts: Contract[]; notifications: string[] } {
  const notifications: string[] = [];
  let updatedContracts = [...contracts];
  let updatedFin = { ...fin };
  let quarterCashDelta = 0;

  // Overhead burn + contract execution costs hit immediately (payroll/subs)
  const activeContracts = updatedContracts.filter((c) => c.status === "active");
  const quarterBurn = fin.burn * 3;
  const quarterExecutionCosts = activeContracts.reduce(
    (sum, c) => sum + (c.exec.stopWorkActive ? c.exec.costMonthly : c.exec.costMonthly * 3),
    0
  );
  updatedFin.cash -= quarterBurn + quarterExecutionCosts;

  if (quarterExecutionCosts > 0) {
    notifications.push(
      `Paid $${(quarterBurn + quarterExecutionCosts).toLocaleString()} in overhead and contract costs — government payment still pending on open invoices.`
    );
  }

  updatedContracts = updatedContracts.map((contract) => {
    if (contract.status !== "active") return contract;

    let c = { ...contract };
    let exec = { ...c.exec };
    exec.months += 3;

    // Accept deliverables submitted before quarter close
    c = acceptSubmittedDeliverables({ ...c, exec });
    exec = c.exec;

    // Check for missed CDRLs
    const deliverableResult = processDeliverablesAtQuarterEnd({ ...c, exec });
    c = deliverableResult.contract;
    exec = c.exec;
    if (deliverableResult.notification) notifications.push(deliverableResult.notification);

    // Create draft invoice for quarter (unless stop-work)
    if (!exec.stopWorkActive) {
      const newInvoice = createQuarterInvoice({ ...c, exec }, currentQuarter);
      exec.invoices = [...exec.invoices, newInvoice];
      notifications.push(
        `SF-1034 draft ready for "${c.title}" — $${newInvoice.amount.toLocaleString()} (Net-${exec.paymentTermsDays})`
      );
    }

    // Quarterly performance events
    const eventResult = processQuarterlyEvent({ ...c, exec });
    if (eventResult) {
      exec = eventResult.exec;
      quarterCashDelta += eventResult.cashDelta;
      if (eventResult.notification) notifications.push(eventResult.notification);
    }

    // Random mod / stop-work events
    const modEvent = maybeTriggerExecutionEvent({ ...c, exec });
    if (modEvent) {
      c = modEvent;
      exec = c.exec;
      notifications.push(`Execution decision required: ${exec.pendingChoice?.title} on "${c.title}"`);
    }

    const optYearBoundary = 12 * (exec.optYrDone + 1);
    if (exec.months >= optYearBoundary && exec.optYrDone < c.optionYears) {
      const cparsScore = Math.min(5, Math.max(1, exec.performance));
      const cparsLabel = getCparsLabel(cparsScore);
      exec.cpars = [
        ...exec.cpars,
        {
          quarter: Math.ceil(exec.months / 3),
          score: cparsScore,
          label: cparsLabel,
          optionYear: exec.optYrDone + 1,
        },
      ];
      exec.optYrDone += 1;

      let exerciseProb = 0.36;
      if (cparsScore >= 4.0) exerciseProb = 0.88;
      else if (cparsScore >= 3.0) exerciseProb = 0.66;

      if (Math.random() < exerciseProb) {
        notifications.push(
          `Option Year ${exec.optYrDone} exercised for "${c.title}" — CPARS: ${cparsLabel} (${cparsScore.toFixed(1)})`
        );
      } else {
        notifications.push(
          `Option Year ${exec.optYrDone} NOT exercised for "${c.title}" — contract ended early. CPARS: ${cparsLabel}`
        );
        return { ...c, status: "ended_early" as const, exec };
      }
    }

    if (exec.months >= exec.totalMonths) {
      notifications.push(`Contract "${c.title}" completed all option years.`);
      return { ...c, status: "ended" as const, exec };
    }

    return { ...c, exec };
  });

  // Process invoice payment pipeline across all contracts
  const allInvoices = updatedContracts.flatMap((c) => c.exec.invoices);
  const pipeline = processInvoicePipeline(allInvoices, currentQuarter + 1);
  updatedFin.cash += pipeline.cashReceived + quarterCashDelta;
  pipeline.latePaymentNotes.forEach((n) => notifications.push(n));

  // Re-attach processed invoices to contracts
  updatedContracts = updatedContracts.map((c) => ({
    ...c,
    exec: {
      ...c.exec,
      invoices: pipeline.invoices.filter((inv) => inv.contractId === c.id),
    },
  }));

  // Auto-repay line of credit when cash arrives
  if (pipeline.cashReceived > 0 && updatedFin.lineOfCreditUsed > 0) {
    updatedFin = repayLineOfCredit(updatedFin, pipeline.cashReceived * 0.3);
  }

  const activeNetMonthly = calcTotalRevenue(updatedContracts);
  updatedFin = aggregateFinFromInvoices(updatedFin, pipeline.invoices, activeNetMonthly);

  return { fin: updatedFin, contracts: updatedContracts, notifications };
}

interface EventTemplate {
  title: string;
  description: string;
  teachable: string;
  perfDelta: number;
  cashDelta?: number;
  revenueBoost?: number;
  isChoice?: boolean;
  choices?: ChoiceEvent["choices"];
}

const SELF_EVENTS: EventTemplate[] = [
  {
    title: "Deliverable accepted ahead of schedule",
    description: "Your team delivered the quarterly milestone two weeks early. Your COR submitted an informal note of commendation — positive CPARS trajectory.",
    teachable: "In Best Value contracts, delivery speed and quality are tracked throughout the base year. CPARS evaluations happen annually but CORs take notes on everything.",
    perfDelta: 0.3,
  },
  {
    title: "Government requests scope expansion",
    description: "Your COR wants to modify the contract to add work — a strong signal of confidence. You'll need a bilateral contract modification signed by both parties.",
    teachable: "A contract modification is good news. It means the agency trusts you and needs more. Document everything — scope changes without a signed mod can become a dispute.",
    perfDelta: 0.2,
    revenueBoost: 0.12,
  },
  {
    title: "Key personnel departure",
    description: "Your lead analyst resigned. You have 30 days to fill the role per the contract's Key Personnel clause. Recruiting fees and a temporary delivery gap.",
    teachable: "Most federal contracts have Key Personnel clauses requiring government approval for any substitutions. Losing a key person without a strong replacement plan is a CPARS event.",
    perfDelta: -0.35,
    cashDelta: -9000,
  },
  {
    title: "Missed quarterly deliverable",
    description: "Your team missed the Q2 status report deadline by 8 days. Your COR sent a written Concern — the first step toward a formal Cure Notice.",
    teachable: "A Cure Notice is a formal government warning that performance is at risk. If unresolved within 10 days, the government can terminate for default. Never ignore written concerns from your COR.",
    perfDelta: -0.45,
  },
  {
    title: "Scope creep request from COR",
    description: "Your COR is informally requesting work outside the PWS — analysis reports not in the original contract. They expect you to absorb it.",
    teachable: "Scope creep is the #1 margin killer in GovCon. The correct answer is always a contract modification — request it early and frame it as 'ensuring we have the funding to support your needs.'",
    perfDelta: 0,
    isChoice: true,
    choices: [
      { id: "a", label: "Comply (absorb the cost)", description: "Keeps the relationship. Costs you money and sets a precedent.", perfDelta: -0.1, cashDelta: -4000 },
      { id: "b", label: "Submit a contract mod request", description: "Correct per FAR. Takes 3–6 weeks to process.", perfDelta: 0.1 },
      { id: "c", label: "Push back immediately", description: "Technically right but may damage the COR relationship.", perfDelta: -0.2 },
    ],
  },
];

const SUB_EVENTS: EventTemplate[] = [
  {
    title: "Subcontractor delivered on time",
    description: "Your sub met all quarterly milestones and deliverables. You passed the performance review cleanly. COR noted satisfactory execution.",
    teachable: "When subs perform well, you get the credit. Build strong sub relationships — they are your delivery engine when you're priming.",
    perfDelta: 0.2,
  },
  {
    title: "Subcontractor missed a deliverable",
    description: "Your sub failed to deliver the technical report on time. As the prime contractor, you are 100% accountable to the government — sub performance is your CPARS.",
    teachable: "This is the core risk of the subcontract model. Your subcontract must include the same performance standards, deliverable dates, and reporting requirements as your prime contract.",
    perfDelta: -0.55,
  },
  {
    title: "FAR limitations on subcontracting flagged",
    description: "Your contracting officer reviewed your labor breakdown and flagged a potential violation of the 50% self-performance rule for this set-aside contract. Legal review required.",
    teachable: "Under FAR 52.219-14, for small business set-aside contracts you must perform at least 50% of the cost of labor yourself. Violation can result in contract termination and potential debarment.",
    perfDelta: -0.3,
    cashDelta: -6000,
  },
  {
    title: "Sub invoice dispute — cash flow gap",
    description: "Your sub is disputing line items on their invoice. You still owe them under the subcontract, but the government hasn't paid your prime invoice yet. Classic GovCon cash trap.",
    teachable: "Invoice factoring exists for exactly this scenario. You sell your government receivable to a factoring company at 2–3% discount and receive payment in 48 hours — keeping your sub paid and relationships intact.",
    perfDelta: -0.1,
    cashDelta: -7000,
  },
  {
    title: "Sub is underperforming mid-contract",
    description: "Your sub is 3 weeks behind on deliverables with no recovery plan. Your next CPARS interim review is in 60 days.",
    teachable: "Your subcontract should mirror your prime contract: same deliverables, same deadlines, same cure notice provisions. If it doesn't, you have no leverage when a sub fails.",
    perfDelta: 0,
    isChoice: true,
    choices: [
      { id: "a", label: "Issue a cure notice to the sub", description: "Formal legal step. Protects you and creates a paper trail.", perfDelta: 0.1, cashDelta: -2000 },
      { id: "b", label: "Replace the sub immediately", description: "Fast but expensive. 30-day gap while a new sub onboards.", perfDelta: 0, cashDelta: -12000 },
      { id: "c", label: "Absorb the work with your own staff", description: "Most expensive option but best CPARS outcome if you recover the deliverable.", perfDelta: 0.2, cashDelta: -8000 },
    ],
  },
];

const HYBRID_EVENTS: EventTemplate[] = [
  {
    title: "Hybrid team performed above expectations",
    description: "Your in-house management team and technical sub delivered a strong quarterly review. COR specifically praised the management depth.",
    teachable: "The hybrid model's advantage: you take credit for management excellence while your sub provides technical depth. This is how many successful GovCon firms scale profitably.",
    perfDelta: 0.3,
  },
  {
    title: "Sub delivered early — captured savings",
    description: "Your sub completed the technical deliverable ahead of schedule. Under your FFP subcontract, the savings stay with you.",
    teachable: "Under a Firm Fixed Price subcontract, if your sub delivers under budget, the savings are yours. This is why FFP with subs can be highly profitable — but only if you've scoped the work correctly.",
    perfDelta: 0.2,
    revenueBoost: 0.05,
  },
  {
    title: "Coordination failure between staff and sub",
    description: "Your in-house team and sub produced conflicting outputs — version control and communication broke down. The COR noticed duplicate deliverables and raised a concern.",
    teachable: "Most hybrid failures are integration failures, not performance failures. You need clear SOWs for each team, weekly standups between both, and a single deliverable owner on your side.",
    perfDelta: -0.3,
    cashDelta: -4000,
  },
  {
    title: "Sub wants to renegotiate rate mid-contract",
    description: "Your sub's labor costs have increased and they're requesting a rate renegotiation. Your prime contract price is fixed.",
    teachable: "This is why subcontracts should be Firm Fixed Price for as much work as possible — it fixes your cost exposure regardless of the sub's internal cost changes.",
    perfDelta: 0,
    isChoice: true,
    choices: [
      { id: "a", label: "Negotiate a partial rate increase", description: "Keeps the relationship. Squeezes your margin slightly.", perfDelta: 0.05, cashDelta: -5000 },
      { id: "b", label: "Hold firm on original rate", description: "They may underperform or depart. Contract is at risk.", perfDelta: -0.1 },
      { id: "c", label: "Source a replacement sub now", description: "Disruption, but protects your long-term margin.", perfDelta: -0.1, cashDelta: -8000 },
    ],
  },
];

function processQuarterlyEvent(
  contract: Contract
): { exec: ContractExec; notification: string | null; cashDelta: number } | null {
  if (Math.random() < 0.38) return null;

  const strategy = contract.exec.strategy;
  if (!strategy) return null;

  const pool =
    strategy === "self" ? SELF_EVENTS : strategy === "sub" ? SUB_EVENTS : HYBRID_EVENTS;
  const template = randomChoice(pool);
  const exec = { ...contract.exec };

  if (template.isChoice && template.choices) {
    exec.pendingChoice = {
      id: uid(),
      title: template.title,
      description: template.description,
      teachable: template.teachable,
      choices: template.choices,
    };
    return {
      exec,
      notification: `Decision required: ${template.title} on "${contract.title}"`,
      cashDelta: 0,
    };
  }

  exec.performance = Math.min(5, Math.max(1, exec.performance + template.perfDelta));
  if (template.revenueBoost) {
    exec.netMonthly = Math.round(exec.netMonthly * (1 + template.revenueBoost));
  }
  const event: ExecEvent = {
    id: uid(),
    title: template.title,
    description: template.description,
    teachable: template.teachable,
    perfDelta: template.perfDelta,
    cashDelta: template.cashDelta,
    revenueBoost: template.revenueBoost,
    quarter: Math.ceil(exec.months / 3),
  };
  exec.events = [...exec.events, event];

  return {
    exec,
    notification: `${template.title} on "${contract.title}" — performance ${exec.performance.toFixed(1)}/5`,
    cashDelta: template.cashDelta || 0,
  };
}

export function resolveChoiceEvent(
  contract: Contract,
  choiceId: string
): { contract: Contract; cashDelta: number } {
  const choice = contract.exec.pendingChoice?.choices.find((c) => c.id === choiceId);
  if (!choice || !contract.exec.pendingChoice) {
    return { contract, cashDelta: 0 };
  }

  const exec = { ...contract.exec };
  exec.performance = Math.min(5, Math.max(1, exec.performance + choice.perfDelta));
  exec.events = [
    ...exec.events,
    {
      id: uid(),
      title: contract.exec.pendingChoice.title,
      description: `${choice.label}: ${choice.description}`,
      teachable: contract.exec.pendingChoice.teachable,
      perfDelta: choice.perfDelta,
      cashDelta: choice.cashDelta,
      quarter: Math.ceil(exec.months / 3),
    },
  ];
  exec.pendingChoice = null;

  return {
    contract: { ...contract, exec },
    cashDelta: choice.cashDelta || 0,
  };
}

export function updateAvgPerf(profile: Profile, contracts: Contract[]): Profile {
  const allCpars = contracts.flatMap((c) => c.exec.cpars);
  if (allCpars.length === 0) return profile;
  const avg = allCpars.reduce((sum, c) => sum + c.score, 0) / allCpars.length;
  return { ...profile, avgPerf: Math.round(avg * 100) / 100 };
}

export function getEvalGuidance(criteria: EvalCriteria): string {
  if (criteria === "LPTA") {
    return "Price dominates. Meet minimum technical standards and price aggressively. Don't over-invest in technical writing.";
  }
  return "Balance all three factors. Technical and past performance differentiation can offset a higher price.";
}

export function buildMartinContext(
  form: IntakeForm,
  profile: Profile,
  fin: FinState,
  quarter: number,
  contracts: Contract[]
): string {
  const normalized = normalizeIntakeForm(form);
  const activeContracts = contracts
    .filter((c) => c.status === "active")
    .map((c) => `${c.title} (CPARS: ${c.exec.performance.toFixed(1)})`)
    .join(", ");

  const clearanceLabel =
    normalized.clearanceLevel === "none"
      ? "none"
      : normalized.clearanceLevel === "secret"
      ? "Secret"
      : "Top Secret";

  return `Company: ${normalized.companyName} | Set-asides: ${normalized.setAsides.join(", ")} | NAICS: ${normalized.naicsCodes.join(", ")} | Clearance: ${clearanceLabel} | Contracts won: ${profile.contractsWon} | Cash: $${fin.cash.toLocaleString()} | Q${quarter} 2025 | Active contracts: ${activeContracts || "none"}`;
}

/** @deprecated use buildMartinContext */
export const buildMarcusContext = buildMartinContext;
