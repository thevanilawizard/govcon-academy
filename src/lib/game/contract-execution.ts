import type {
  ChoiceEvent,
  Contract,
  ContractExec,
  Deliverable,
  GameOverState,
  GovInvoice,
} from "./types";
import { randomChoice } from "../utils";

function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}

const CDRL_TITLES = [
  "Monthly Status Report",
  "Quarterly Progress Briefing",
  "Deliverable Data Package",
  "Quality Assurance Report",
  "Invoice Support Documentation",
  "Risk Register Update",
];

export function pickPaymentTerms(): 30 | 60 | 90 {
  const roll = Math.random();
  if (roll < 0.35) return 30;
  if (roll < 0.7) return 60;
  return 90;
}

export function generateDeliverables(totalMonths: number): Deliverable[] {
  const deliverables: Deliverable[] = [];
  for (let month = 3; month <= totalMonths; month += 3) {
    deliverables.push({
      id: uid(),
      title: randomChoice(CDRL_TITLES),
      dueMonth: month,
      status: "pending",
    });
  }
  return deliverables;
}

export function initializeContractExecution(exec: ContractExec): ContractExec {
  return {
    ...exec,
    deliverables: exec.deliverables?.length ? exec.deliverables : generateDeliverables(exec.totalMonths),
    invoices: exec.invoices ?? [],
    qaspScore: exec.qaspScore ?? 85,
    consecutiveMissedDeliverables: exec.consecutiveMissedDeliverables ?? 0,
    stopWorkActive: exec.stopWorkActive ?? false,
    paymentTermsDays: exec.paymentTermsDays ?? pickPaymentTerms(),
  };
}

export function normalizeContractExec(exec: ContractExec): ContractExec {
  return initializeContractExecution({
    ...exec,
    deliverables: exec.deliverables ?? [],
    invoices: exec.invoices ?? [],
    qaspScore: exec.qaspScore ?? 85,
    consecutiveMissedDeliverables: exec.consecutiveMissedDeliverables ?? 0,
    stopWorkActive: exec.stopWorkActive ?? false,
    paymentTermsDays: exec.paymentTermsDays ?? 60,
  });
}

export function normalizeContract(contract: Contract): Contract {
  return {
    ...contract,
    exec: normalizeContractExec(contract.exec),
  };
}

export function createQuarterInvoice(contract: Contract, quarter: number): GovInvoice {
  const periodNum = Math.ceil(contract.exec.months / 3) || 1;
  return {
    id: uid(),
    contractId: contract.id,
    amount: contract.exec.grossMonthly * 3,
    periodLabel: `Q${periodNum} Performance — ${contract.title.slice(0, 40)}`,
    status: "draft",
    quarterCreated: quarter,
    paymentTermsDays: contract.exec.paymentTermsDays ?? 60,
  };
}

export function submitDeliverable(contract: Contract, deliverableId: string): Contract {
  const deliverables = contract.exec.deliverables.map((d) =>
    d.id === deliverableId && d.status === "pending"
      ? { ...d, status: "submitted" as const, submittedAtMonth: contract.exec.months }
      : d
  );
  return {
    ...contract,
    exec: { ...contract.exec, deliverables },
  };
}

export function acceptSubmittedDeliverables(contract: Contract): Contract {
  let qaspScore = contract.exec.qaspScore;
  const deliverables = contract.exec.deliverables.map((d) => {
    if (d.status === "submitted") {
      qaspScore = Math.min(100, qaspScore + 3);
      return { ...d, status: "accepted" as const };
    }
    return d;
  });
  return {
    ...contract,
    exec: { ...contract.exec, deliverables, qaspScore },
  };
}

export function submitGovInvoice(
  contract: Contract,
  invoiceId: string,
  quarter: number
): Contract {
  const invoices = contract.exec.invoices.map((inv) =>
    inv.id === invoiceId && inv.status === "draft"
      ? { ...inv, status: "submitted" as const, quarterSubmitted: quarter }
      : inv
  );
  return { ...contract, exec: { ...contract.exec, invoices } };
}

export interface DeliverableCheckResult {
  contract: Contract;
  missedCount: number;
  notification?: string;
}

export function processDeliverablesAtQuarterEnd(contract: Contract): DeliverableCheckResult {
  if (contract.status !== "active" || contract.exec.stopWorkActive) {
    return { contract, missedCount: 0 };
  }

  const currentMonth = contract.exec.months;
  let missedThisQuarter = 0;
  let consecutive = contract.exec.consecutiveMissedDeliverables;
  let qaspScore = contract.exec.qaspScore;

  const deliverables = contract.exec.deliverables.map((d) => {
    if (d.status !== "pending") return d;
    if (d.dueMonth <= currentMonth) {
      missedThisQuarter++;
      qaspScore = Math.max(0, qaspScore - 12);
      return { ...d, status: "missed" as const };
    }
    return d;
  });

  if (missedThisQuarter > 0) {
    consecutive += missedThisQuarter;
  } else if (
    deliverables.some(
      (d) =>
        d.dueMonth <= currentMonth && (d.status === "submitted" || d.status === "accepted")
    )
  ) {
    consecutive = 0;
  }

  return {
    contract: {
      ...contract,
      exec: {
        ...contract.exec,
        deliverables,
        qaspScore,
        consecutiveMissedDeliverables: consecutive,
      },
    },
    missedCount: missedThisQuarter,
    notification:
      missedThisQuarter > 0
        ? `Missed ${missedThisQuarter} CDRL(s) on "${contract.title}" — QASP ${qaspScore}/100`
        : undefined,
  };
}

const MOD_EVENTS: Omit<ChoiceEvent, "id">[] = [
  {
    title: "Scope Creep — Informal COR Request",
    description:
      "Your COR is asking for additional analysis not in the PWS. They expect you to absorb it without a modification.",
    teachable:
      "Never perform out-of-scope work on a handshake. Submit a Request for Equitable Adjustment (REA) under FAR 52.243-1.",
    choices: [
      {
        id: "absorb",
        label: "Absorb the work (informal favor)",
        description: "Damages margin and sets precedent. No REA filed.",
        perfDelta: -0.15,
        cashDelta: -6000,
      },
      {
        id: "mod",
        label: "Request formal contract modification",
        description: "Correct approach — bilaterally signed mod required before work.",
        perfDelta: 0.1,
      },
      {
        id: "rea",
        label: "File REA under FAR 52.243-1",
        description: "Preserves your rights. Takes time but protects margin.",
        perfDelta: 0.05,
        cashDelta: -1500,
      },
    ],
  },
  {
    title: "Stop-Work Order Issued",
    description:
      "The Contracting Officer issued a stop-work order pending a contract dispute. You cannot bill new work until lifted.",
    teachable:
      "Stop-work orders halt revenue immediately. You may recover idle costs if the stop-work was unjustified — document everything.",
    choices: [
      {
        id: "idle",
        label: "Stand down staff (reduce burn)",
        description: "Preserves cash but delays deliverables when work resumes.",
        perfDelta: -0.1,
        cashDelta: -3000,
      },
      {
        id: "retain",
        label: "Keep key staff on standby",
        description: "Ready to restart fast but burns cash with no revenue.",
        perfDelta: 0,
        cashDelta: -12000,
      },
      {
        id: "loc",
        label: "Draw on line of credit to cover payroll",
        description: "Keeps team intact — debt must be repaid when invoices pay.",
        perfDelta: 0.05,
        cashDelta: -2000,
      },
    ],
  },
];

export function maybeTriggerExecutionEvent(contract: Contract): Contract | null {
  if (contract.status !== "active" || contract.exec.pendingChoice) return null;
  if (Math.random() > 0.28) return null;

  const template = randomChoice(MOD_EVENTS);
  return {
    ...contract,
    exec: {
      ...contract.exec,
      stopWorkActive: template.title.includes("Stop-Work") ? true : contract.exec.stopWorkActive,
      pendingChoice: { ...template, id: uid() },
    },
  };
}

export function liftStopWork(contract: Contract): Contract {
  return {
    ...contract,
    exec: { ...contract.exec, stopWorkActive: false },
  };
}

export function checkGameOverConditions(
  cash: number,
  complianceScore: number,
  contracts: Contract[]
): GameOverState | null {
  if (cash <= 0) {
    return {
      reason: "bankruptcy",
      title: "Bankruptcy — Firm Closed",
      message:
        "Your cash runway hit zero while waiting on government payments and covering payroll. Without a line of credit or faster invoicing, the firm cannot continue operations.",
      teachable:
        "Government contractors often fail from cash timing, not performance. Net-30 to Net-90 payment lag means you need a line of credit, factoring, or careful hiring pace. Prompt payment interest (FAR 52.232-25) helps but does not replace cash planning.",
    };
  }

  if (complianceScore <= 0) {
    return {
      reason: "debarment",
      title: "Debarment — Excluded from Federal Contracting",
      message:
        "Your compliance score reached zero after repeated FAR violations and audit findings. The government has suspended and proposed you for debarment.",
      teachable:
        "Debarment excludes you from all federal contracts for a period (typically 3 years). It results from fraud, repeated compliance failures, or responsibility determinations under FAR 9.104.",
    };
  }

  const defaultContract = contracts.find(
    (c) => c.status === "active" && c.exec.consecutiveMissedDeliverables >= 2
  );
  if (defaultContract) {
    return {
      reason: "default_termination",
      title: "Terminated for Default",
      message: `You missed consecutive CDRL deliverables on "${defaultContract.title}". The Contracting Officer terminated the contract for default under FAR 52.249-8.`,
      teachable:
        "Termination for default destroys past performance and may trigger debarment review. Always submit CDRLs on time or request a schedule mod before the due date.",
    };
  }

  return null;
}
