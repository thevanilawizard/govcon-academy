export interface ContractTypeQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface ContractTypeResult {
  contractType: string;
  farCitation: string;
  rationale: string;
  requiredClauses: string[];
  riskProfile: string;
}

export const CONTRACT_TYPE_QUESTIONS: ContractTypeQuestion[] = [
  {
    id: "q1",
    question: "How well defined are the requirements?",
    options: [
      { label: "Fully defined — clear specs and deliverables", value: "defined" },
      { label: "Partially defined — some uncertainty remains", value: "partial" },
      { label: "Undefined — research or exploration needed", value: "undefined" },
    ],
  },
  {
    id: "q2",
    question: "What is the expected contract duration?",
    options: [
      { label: "Less than 6 months", value: "short" },
      { label: "6 months to 2 years", value: "medium" },
      { label: "More than 2 years with options", value: "long" },
    ],
  },
  {
    id: "q3",
    question: "Is this a commercial item or service?",
    options: [
      { label: "Yes — meets FAR 2.101 commercial definition", value: "commercial" },
      { label: "Modified commercial — mostly off-the-shelf", value: "modified" },
      { label: "No — custom development or unique requirements", value: "noncommercial" },
    ],
  },
  {
    id: "q4",
    question: "What is the government's cost risk tolerance?",
    options: [
      { label: "Low — contractor should bear cost risk", value: "low_gov_risk" },
      { label: "Moderate — shared risk acceptable", value: "moderate" },
      { label: "High — government will reimburse allowable costs", value: "high_gov_risk" },
    ],
  },
  {
    id: "q5",
    question: "Can labor hours be estimated reliably?",
    options: [
      { label: "Yes — historical data supports estimates", value: "reliable" },
      { label: "Somewhat — wide confidence interval", value: "uncertain" },
      { label: "No — cannot estimate hours at award", value: "unknown" },
    ],
  },
  {
    id: "q6",
    question: "Is the acquisition value above the TINA threshold ($2.5M)?",
    options: [
      { label: "No — below certified cost data threshold", value: "below_tina" },
      { label: "Yes — certified cost/pricing data required", value: "above_tina" },
      { label: "Unknown at this stage", value: "unknown_tina" },
    ],
  },
  {
    id: "q7",
    question: "Does the work involve incentive for cost/schedule performance?",
    options: [
      { label: "Yes — measurable performance targets exist", value: "incentive_yes" },
      { label: "Partial — some metrics, not comprehensive", value: "incentive_partial" },
      { label: "No — standard performance only", value: "incentive_no" },
    ],
  },
  {
    id: "q8",
    question: "What is the primary deliverable type?",
    options: [
      { label: "Supplies/products with firm quantity", value: "supplies" },
      { label: "Services — labor-based performance", value: "services" },
      { label: "Construction or major system development", value: "construction" },
    ],
  },
];

export function recommendContractType(answers: Record<string, string>): ContractTypeResult {
  const req = answers.q1;
  const commercial = answers.q3;
  const risk = answers.q4;
  const hours = answers.q5;
  const deliverable = answers.q8;
  const incentive = answers.q7;

  if (commercial === "commercial" && req === "defined") {
    return {
      contractType: "Firm-Fixed-Price (Commercial Item)",
      farCitation: "FAR 12.207, FAR 16.103",
      rationale: "Commercial items with definite requirements favor FFP under Part 12 streamlined procedures.",
      requiredClauses: ["FAR 52.212-4", "FAR 52.212-5", "FAR 52.204-21"],
      riskProfile: "Contractor bears full cost risk; minimal cost data required.",
    };
  }

  if (req === "undefined" || risk === "high_gov_risk") {
    return {
      contractType: "Cost-Plus-Fixed-Fee (CPFF)",
      farCitation: "FAR 16.306",
      rationale: "Undefined requirements or high government cost risk warrant cost-reimbursement with fee.",
      requiredClauses: ["FAR 52.216-7", "FAR 52.215-2", "FAR 52.232-20", "FAR 52.243-2"],
      riskProfile: "Government bears most cost risk; requires adequate accounting system.",
    };
  }

  if (incentive === "incentive_yes" && req === "defined" && deliverable === "construction") {
    return {
      contractType: "Fixed-Price Incentive (FPI)",
      farCitation: "FAR 16.403",
      rationale: "Defined construction/development with measurable targets supports FPI for cost/schedule incentives.",
      requiredClauses: ["FAR 52.216-16", "FAR 52.243-1", "FAR 52.249-2"],
      riskProfile: "Shared risk through incentive formula; ceiling price limits government exposure.",
    };
  }

  if (hours === "unknown" || (hours === "uncertain" && req === "partial")) {
    return {
      contractType: "Time-and-Materials (T&M)",
      farCitation: "FAR 16.601",
      rationale: "When labor hours cannot be estimated reliably, T&M with ceiling is appropriate as last resort.",
      requiredClauses: ["FAR 52.232-7", "FAR 52.216-7", "FAR 52.243-1"],
      riskProfile: "Government bears cost risk for hours; must establish ceiling price.",
    };
  }

  if (req === "partial" && risk === "moderate") {
    return {
      contractType: "Cost-Plus-Incentive-Fee (CPIF)",
      farCitation: "FAR 16.405",
      rationale: "Partially defined scope with shared risk supports CPIF with target cost and fee adjustment.",
      requiredClauses: ["FAR 52.216-10", "FAR 52.216-7", "FAR 52.215-2"],
      riskProfile: "Shared cost risk with incentive formula tied to target cost.",
    };
  }

  if (deliverable === "supplies" && req === "defined") {
    return {
      contractType: "Firm-Fixed-Price (Supplies)",
      farCitation: "FAR 16.202-1",
      rationale: "Definite supply requirements with firm quantity support FFP supplies contract.",
      requiredClauses: ["FAR 52.246-2", "FAR 52.243-1", "FAR 52.249-2"],
      riskProfile: "Contractor bears full cost and performance risk.",
    };
  }

  if (deliverable === "services" && hours === "reliable" && req === "defined") {
    return {
      contractType: "Firm-Fixed-Price (Level of Effort / Services)",
      farCitation: "FAR 16.103, FAR 37.102",
      rationale: "Services with reliable LOE estimates and defined requirements support FFP service contracts.",
      requiredClauses: ["FAR 52.243-1", "FAR 52.222-41", "FAR 52.249-2"],
      riskProfile: "Contractor bears risk of efficient performance within fixed price.",
    };
  }

  return {
    contractType: "Firm-Fixed-Price (Default)",
    farCitation: "FAR 16.103",
    rationale: "When requirements are sufficiently defined, FFP is the preferred contract type per FAR 16.103.",
    requiredClauses: ["FAR 52.243-1", "FAR 52.249-2", "FAR 52.204-21"],
    riskProfile: "Contractor bears cost risk; government pays fixed price for deliverables.",
  };
}
