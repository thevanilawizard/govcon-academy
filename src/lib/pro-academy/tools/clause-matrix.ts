export type ContractTypeKey =
  | "ffp"
  | "ffp_commercial"
  | "cpff"
  | "cpif"
  | "tm"
  | "fpi"
  | "idiq"
  | "bpa";

export type SetAsideKey = "full_open" | "small_business" | "8a" | "sdvosb" | "wosb" | "hubzone";

export interface ClauseMatrixInput {
  contractType: ContractTypeKey;
  dollarValue: number;
  setAside: SetAsideKey;
  isCommercial: boolean;
  isDoD: boolean;
  hasOptions: boolean;
}

export interface ClauseMatrixRow {
  clause: string;
  title: string;
  applicability: "Mandatory" | "Conditional" | "Optional";
  notes: string;
}

const BASE_CLAUSES: Record<ContractTypeKey, ClauseMatrixRow[]> = {
  ffp: [
    { clause: "52.243-1", title: "Changes — Fixed-Price", applicability: "Mandatory", notes: "Standard changes clause for FFP." },
    { clause: "52.249-2", title: "Termination for Convenience (Fixed-Price)", applicability: "Mandatory", notes: "Required for all FFP contracts." },
    { clause: "52.204-21", title: "Basic Safeguarding of Covered Contractor Information", applicability: "Mandatory", notes: "All acquisitions." },
  ],
  ffp_commercial: [
    { clause: "52.212-4", title: "Contract Terms and Conditions — Commercial Items", applicability: "Mandatory", notes: "Primary terms for commercial." },
    { clause: "52.212-5", title: "Contract Terms and Conditions Required to Implement Statutes", applicability: "Mandatory", notes: "Check alternate paragraphs for dollar thresholds." },
    { clause: "52.204-21", title: "Basic Safeguarding", applicability: "Mandatory", notes: "All acquisitions." },
  ],
  cpff: [
    { clause: "52.216-7", title: "Allowable Cost and Payment", applicability: "Mandatory", notes: "Incorporates FAR Part 31." },
    { clause: "52.215-2", title: "Audit and Records — Negotiation", applicability: "Mandatory", notes: "Audit rights for cost-type." },
    { clause: "52.232-20", title: "Limitation of Cost", applicability: "Mandatory", notes: "Cost ceiling notification." },
    { clause: "52.243-2", title: "Changes — Cost-Reimbursement", applicability: "Mandatory", notes: "Changes under CR contracts." },
  ],
  cpif: [
    { clause: "52.216-10", title: "Incentive Fee", applicability: "Mandatory", notes: "CPIF incentive structure." },
    { clause: "52.216-7", title: "Allowable Cost and Payment", applicability: "Mandatory", notes: "Part 31 incorporated." },
    { clause: "52.215-2", title: "Audit and Records", applicability: "Mandatory", notes: "Audit rights." },
  ],
  tm: [
    { clause: "52.232-7", title: "Payments under T&M Contracts", applicability: "Mandatory", notes: "T&M payment clause." },
    { clause: "52.216-7", title: "Allowable Cost and Payment", applicability: "Mandatory", notes: "Material at cost." },
    { clause: "52.243-1", title: "Changes — Fixed-Price", applicability: "Conditional", notes: "If ceiling is FFP-based." },
  ],
  fpi: [
    { clause: "52.216-16", title: "Incentive Price Revision — Firm Target", applicability: "Mandatory", notes: "FPI incentive formula." },
    { clause: "52.243-1", title: "Changes — Fixed-Price", applicability: "Mandatory", notes: "Changes within scope." },
    { clause: "52.249-2", title: "Termination for Convenience", applicability: "Mandatory", notes: "T4C required." },
  ],
  idiq: [
    { clause: "52.216-18", title: "Ordering", applicability: "Mandatory", notes: "IDIQ ordering procedures." },
    { clause: "52.216-22", title: "Indefinite Quantity", applicability: "Mandatory", notes: "IDIQ quantity clause." },
    { clause: "52.204-21", title: "Basic Safeguarding", applicability: "Mandatory", notes: "All acquisitions." },
  ],
  bpa: [
    { clause: "52.213-4", title: "Terms and Conditions — Simplified Acquisitions", applicability: "Mandatory", notes: "BPA under Part 13." },
    { clause: "52.204-21", title: "Basic Safeguarding", applicability: "Mandatory", notes: "All acquisitions." },
  ],
};

export function generateClauseMatrix(input: ClauseMatrixInput): ClauseMatrixRow[] {
  const rows: ClauseMatrixRow[] = [...(BASE_CLAUSES[input.contractType] ?? BASE_CLAUSES.ffp)];

  if (input.dollarValue >= 750000 && input.setAside === "full_open") {
    rows.push({
      clause: "52.219-9",
      title: "Small Business Subcontracting Plan",
      applicability: "Mandatory",
      notes: "Required for contracts ≥ $750K with full and open competition.",
    });
  }

  if (input.setAside === "small_business" || input.setAside === "8a") {
    rows.push({
      clause: "52.219-1",
      title: "Small Business Program Representations",
      applicability: "Mandatory",
      notes: "Set-aside acquisitions require small business representations.",
    });
  }

  if (input.setAside === "8a") {
    rows.push({
      clause: "52.219-18",
      title: "8(a) Program Requirements",
      applicability: "Mandatory",
      notes: "8(a) sole-source or set-aside procedures.",
    });
  }

  if (input.dollarValue >= 2500 && input.contractType !== "ffp_commercial") {
    rows.push({
      clause: "52.222-41",
      title: "Service Contract Act",
      applicability: "Conditional",
      notes: "Required for service contracts over $2,500 with wage determination.",
    });
  }

  if (input.isDoD) {
    rows.push({
      clause: "252.204-7012",
      title: "Safeguarding Covered Defense Information (DFARS)",
      applicability: "Conditional",
      notes: "Required when CDI/CUI is involved on DoD contracts.",
    });
    rows.push({
      clause: "252.204-7019",
      title: "CMMC Requirements",
      applicability: "Conditional",
      notes: "DoD contracts may require CMMC certification.",
    });
  }

  if (input.hasOptions) {
    rows.push({
      clause: "52.217-8",
      title: "Option to Extend Services",
      applicability: "Conditional",
      notes: "Include when contract has option periods.",
    });
    rows.push({
      clause: "52.217-9",
      title: "Option to Extend the Term of the Contract",
      applicability: "Conditional",
      notes: "For option periods beyond base.",
    });
  }

  if (input.dollarValue >= 2500000) {
    rows.push({
      clause: "52.215-10",
      title: "Price Reduction for Defective Certified Cost/Pricing Data",
      applicability: "Conditional",
      notes: "TINA threshold — certified cost/pricing data required.",
    });
  }

  rows.push({
    clause: "52.204-7",
    title: "System for Award Management Registration",
    applicability: "Mandatory",
    notes: "Offerors must be registered in SAM.gov.",
  });

  return rows;
}

export function formatClauseMatrixText(input: ClauseMatrixInput, rows: ClauseMatrixRow[]): string {
  const header = [
    "FAR CLAUSE MATRIX",
    "=================",
    `Contract Type: ${input.contractType}`,
    `Dollar Value: $${input.dollarValue.toLocaleString()}`,
    `Set-Aside: ${input.setAside}`,
    `Commercial: ${input.isCommercial ? "Yes" : "No"}`,
    `DoD: ${input.isDoD ? "Yes" : "No"}`,
    "",
    "CLAUSE\tTITLE\tAPPLICABILITY\tNOTES",
    "------\t-----\t-------------\t-----",
  ];
  const lines = rows.map(
    (r) => `FAR ${r.clause}\t${r.title}\t${r.applicability}\t${r.notes}`
  );
  return [...header, ...lines].join("\n");
}

export const CONTRACT_TYPE_OPTIONS: { value: ContractTypeKey; label: string }[] = [
  { value: "ffp", label: "Firm-Fixed-Price" },
  { value: "ffp_commercial", label: "FFP — Commercial Item" },
  { value: "cpff", label: "Cost-Plus-Fixed-Fee" },
  { value: "cpif", label: "Cost-Plus-Incentive-Fee" },
  { value: "tm", label: "Time-and-Materials" },
  { value: "fpi", label: "Fixed-Price Incentive" },
  { value: "idiq", label: "IDIQ / Multiple Award" },
  { value: "bpa", label: "Blanket Purchase Agreement" },
];

export const SET_ASIDE_OPTIONS: { value: SetAsideKey; label: string }[] = [
  { value: "full_open", label: "Full and Open Competition" },
  { value: "small_business", label: "Small Business Set-Aside" },
  { value: "8a", label: "8(a) Sole Source / Set-Aside" },
  { value: "sdvosb", label: "SDVOSB Set-Aside" },
  { value: "wosb", label: "WOSB Set-Aside" },
  { value: "hubzone", label: "HUBZone Set-Aside" },
];
