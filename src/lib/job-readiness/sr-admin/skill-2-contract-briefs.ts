import { exercise, lesson, q } from "./content-helpers";
import type { ContractBriefSection, SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-2" as const;

export const CONTRACT_BRIEF_SECTIONS: ContractBriefSection[] = [
  {
    id: "brief-s1",
    number: 1,
    title: "Contract Identification",
    description: "Core identifiers and points of contact for the contract.",
    fields: [
      { label: "Contract Number", description: "Full contract number including agency prefix.", example: "W912HQ-24-C-0042" },
      { label: "Contract Type", description: "FFP, T&M, CPFF, CPFF-AF, IDIQ, BPA, etc.", example: "FFP" },
      { label: "Contracting Agency and Office", description: "Agency name and contracting office code.", example: "USACE Huntsville" },
      { label: "Contracting Officer", description: "KO name, email, phone.", example: "Jane Smith, jane.smith@usace.army.mil" },
      { label: "COR", description: "COR name, email, phone.", example: "Robert Jones, robert.j@usace.army.mil" },
      { label: "Prime Contractor", description: "Prime name if you are a subcontractor.", example: "N/A — we are prime" },
      { label: "Period of Performance", description: "Base year + all option periods with dates.", example: "Base: 10/1/24-9/30/25; Opt 1: 10/1/25-9/30/26" },
      { label: "Total Contract Value", description: "Base year, all options, total ceiling.", example: "Base $1.2M; Options $4.8M; Ceiling $6.0M" },
    ],
  },
  {
    id: "brief-s2",
    number: 2,
    title: "Scope Summary",
    description: "Plain-language summary of what the contract requires.",
    fields: [
      { label: "Scope Description", description: "2-3 sentences describing work performed.", example: "Provide IT help desk support, network administration, and cybersecurity monitoring for USACE district offices." },
      { label: "Work Location", description: "On-site, remote, government facility, or hybrid.", example: "Hybrid — 3 days on-site at Redstone Arsenal, 2 days remote" },
      { label: "Key Personnel", description: "Required key personnel names and roles.", example: "Program Manager: Sarah Lee; Lead Engineer: Mike Chen" },
      { label: "Security Clearance", description: "Required clearance levels and current status.", example: "Secret clearance required; all key personnel cleared" },
    ],
  },
  {
    id: "brief-s3",
    number: 3,
    title: "Financial Summary",
    description: "Funding structure, CLINs, and financial controls.",
    fields: [
      { label: "Base Year Funded Value", description: "Currently obligated amount for base period.", example: "$1,200,000" },
      { label: "Total Obligated Amount", description: "Sum of all currently funded CLINs.", example: "$1,200,000" },
      { label: "Total Contract Ceiling", description: "Maximum contract value including unfunded options.", example: "$6,000,000" },
      { label: "CLIN Structure", description: "Numbered list of CLINs with descriptions.", example: "0001: Base IT Support $800K; 0002: Cyber Monitoring $400K" },
      { label: "Option Periods", description: "Dates and values for each option.", example: "Opt 1: $1.2M (10/1/25-9/30/26)" },
      { label: "Fee/Profit Percentage", description: "Fee percentage on cost-type contracts.", example: "N/A — FFP contract" },
      { label: "Limitation of Funds Threshold", description: "Notification threshold and requirement.", example: "N/A — FFP; fully funded at award" },
    ],
  },
  {
    id: "brief-s4",
    number: 4,
    title: "Key Deliverables and Reports",
    description: "Table of all deliverables, frequency, and recipients.",
    fields: [
      { label: "Deliverable Name", description: "CDRL or PWS deliverable title.", example: "Monthly Status Report" },
      { label: "Frequency", description: "Monthly, quarterly, upon request, etc.", example: "Monthly" },
      { label: "Due Date", description: "Specific date or day of month.", example: "Last business day of each month" },
      { label: "Recipient", description: "CO, COR, PM, or other.", example: "COR" },
      { label: "Format Requirement", description: "Required format, template, or system.", example: "MS Word per Attachment 3 template" },
    ],
  },
  {
    id: "brief-s5",
    number: 5,
    title: "Key Contract Clauses and Obligations",
    description: "Non-standard clauses that create specific obligations.",
    fields: [
      { label: "Changes Clause", description: "What can and cannot be changed unilaterally.", example: "FAR 52.243-1 — within general scope only" },
      { label: "Key Personnel Clause", description: "Named personnel and approval process for changes.", example: "FAR 52.215-12 — PM and Lead Engineer; KO approval required" },
      { label: "Limitation on Subcontracting", description: "Required prime performance percentage.", example: "FAR 52.219-14 — 50% of services cost" },
      { label: "Inspection and Acceptance", description: "Who inspects, where, and timeline.", example: "COR acceptance within 10 business days of delivery" },
      { label: "Liquidated Damages", description: "Amount per day if applicable.", example: "None" },
      { label: "Insurance Requirements", description: "Required coverage types and limits.", example: "$1M general liability, $2M professional liability" },
      { label: "High-Risk Clauses", description: "Unusual or high-risk clauses highlighted.", example: "RED: DFARS 252.204-7012 — CMMC Level 2 required by 6/2025" },
    ],
  },
  {
    id: "brief-s6",
    number: 6,
    title: "Compliance Calendar",
    description: "Month-by-month recurring compliance actions.",
    fields: [
      { label: "Invoice Due Dates", description: "When invoices must be submitted.", example: "5th business day of each month" },
      { label: "Report Due Dates", description: "All recurring report deadlines.", example: "Monthly status: last business day; Quarterly EVM: 15th of Jan/Apr/Jul/Oct" },
      { label: "Option Exercise Windows", description: "Dates when government may exercise options.", example: "Opt 1 exercise window: 8/1/25 - 9/30/25" },
      { label: "Security Clearance Renewals", description: "Personnel clearance reinvestigation dates.", example: "Sarah Lee: Secret reinvestigation due 3/2026" },
      { label: "SAM.gov Renewal", description: "Annual registration expiration.", example: "SAM registration expires 11/15/25" },
      { label: "Subcontracting Plan Reporting", description: "SF-294 and related reporting dates.", example: "SF-294 due 10/30 annually" },
      { label: "Other Compliance Dates", description: "VETS-4212, CMMC, audit dates, etc.", example: "VETS-4212 due 9/30 annually" },
    ],
  },
  {
    id: "brief-s7",
    number: 7,
    title: "Risk Flags",
    description: "Red/Yellow/Green indicators across risk categories.",
    fields: [
      { label: "Scope Risk", description: "Is the PWS clear enough?", example: "YELLOW — 'as directed' language in Section C para 4.3" },
      { label: "Funding Risk", description: "Fully funded or incrementally funded?", example: "GREEN — base year fully funded at award" },
      { label: "Performance Risk", description: "Difficult technical requirements?", example: "YELLOW — CMMC Level 2 compliance by June 2025" },
      { label: "Subcontractor Risk", description: "Sole-source sub or multiple options?", example: "GREEN — two qualified subs under contract" },
      { label: "Clearance Risk", description: "Clearances required and current?", example: "GREEN — all key personnel cleared" },
      { label: "Compliance Risk", description: "Unusual reporting requirements?", example: "RED — DFARS 7012 cyber reporting within 72 hours of incident" },
    ],
  },
];

const lessons = [
  lesson(
    "sr2-l1-what-is-brief",
    SKILL_ID,
    "What Is a Contract Brief and Why It Matters",
    [
      {
        heading: "The Contract Brief Defined",
        content:
          "A contract brief is a 1-2 page summary of a contract's key information designed for internal stakeholders who will never read the full contract. Program managers use it to make staffing and scope decisions. Finance uses it to set up accounting codes and track funding. Executives use it to assess portfolio risk. Legal uses it to identify clauses requiring ongoing monitoring. You build it within 24 hours of award and update it every time the contract changes.",
      },
      {
        heading: "Why Contract Briefs Prevent Failures",
        content:
          "A good contract brief prevents three common failures: (1) Unauthorized commitments — when a PM agrees to work the COR requests because they don't know what's in scope; (2) Scope disputes — when teams perform out-of-scope work because deliverables weren't clearly communicated; (3) Compliance failures — when recurring reporting deadlines are missed because no one tracked them. The contract brief is your single source of truth for internal contract awareness.",
      },
      {
        heading: "When and How to Update",
        content:
          "Update the contract brief when: a modification is signed (scope, price, or POP change); key personnel change; funding is incrementally added; a new risk is identified; option is exercised or not exercised; or a new deliverable or reporting requirement is added. Version-control the brief — name it [Contract#]_Brief_v[number]_[date]. Archive prior versions. Distribute updates to all stakeholders who received the original.",
      },
    ],
    [
      q("sr2-l1-q1", "A contract brief is typically:", ["50+ pages", "1-2 pages summarizing key contract information", "Only for the KO", "Optional and rarely used"], 1, "Contract briefs are concise 1-2 page summaries for internal stakeholders."),
      q("sr2-l1-q2", "Contract briefs should be updated when:", ["Never after award", "Every time the contract changes via mod, personnel change, or new risk", "Only at closeout", "Annually regardless of changes"], 1, "Update on every material change — mods, personnel, funding, risks."),
      q("sr2-l1-q3", "A contract brief prevents:", ["Higher revenue", "Unauthorized commitments, scope disputes, and compliance failures", "CPARS ratings", "Subcontractor performance"], 1, "Briefs give internal teams contract awareness without reading the full document."),
      q("sr2-l1-q4", "Who uses the contract brief?", ["Only contracts staff", "PM, finance, executives, and legal", "Only the COR", "Subcontractors only"], 1, "Multiple internal stakeholders rely on the brief for decisions."),
      q("sr2-l1-q5", "When should the first contract brief be created?", ["At closeout", "Within 24 hours of award", "After first invoice", "Never"], 1, "Build the initial brief within 24 hours of award as part of the 72-hour checklist."),
    ]
  ),
  lesson(
    "sr2-l2-brief-sections",
    SKILL_ID,
    "What Goes in a Contract Brief — All 7 Sections",
    [
      {
        heading: "Sections 1-3: Identification, Scope, and Financials",
        content:
          "Section 1 captures contract number, type, agency, KO/COR contacts, POP, and total value. Section 2 summarizes scope in 2-3 sentences, work location, key personnel, and clearance requirements. Section 3 details funded value, ceiling, CLIN structure, option values, fee percentage (if cost-type), and limitation of funds threshold. These three sections answer: what contract is this, what are we doing, and what is the money?",
      },
      {
        heading: "Sections 4-5: Deliverables and Clauses",
        content:
          "Section 4 is a table of all deliverables and reports with frequency, due dates, recipients, and format requirements — pull directly from CDRLs and Section C. Section 5 lists only clauses that create obligations different from standard: changes, key personnel, limitation on subcontracting, inspection/acceptance, liquidated damages, insurance, and any unusual clauses highlighted in RED. Do not list every boilerplate clause — focus on what creates action items.",
      },
      {
        heading: "Sections 6-7: Compliance Calendar and Risk Flags",
        content:
          "Section 6 is a month-by-month calendar of recurring actions: invoice dates, report deadlines, option windows, clearance renewals, SAM.gov renewal, SF-294 dates, VETS-4212, and any contract-specific compliance dates. Section 7 assigns Red/Yellow/Green risk indicators across six categories: scope, funding, performance, subcontractor, clearance, and compliance. Update risk flags monthly — a green flag can turn red quickly if funding isn't obligated or a sub underperforms.",
      },
    ],
    [
      q("sr2-l2-q1", "Section 5 of the contract brief should list:", ["Every clause in the contract", "Only clauses creating obligations different from standard", "Only payment clauses", "Employee names only"], 1, "Focus on non-standard and high-risk clauses — not boilerplate."),
      q("sr2-l2-q2", "The compliance calendar in Section 6 includes:", ["Only invoice dates", "Invoices, reports, option windows, SAM renewal, and all recurring compliance dates", "Employee birthdays", "Marketing deadlines"], 1, "Section 6 tracks every recurring compliance action month-by-month."),
      q("sr2-l2-q3", "Risk flags use which color system?", ["Blue/Orange/Purple", "Red/Yellow/Green", "Black/White", "No color system"], 1, "Red/Yellow/Green provides at-a-glance risk assessment across six categories."),
      q("sr2-l2-q4", "Section 4 deliverable table should include:", ["Only deliverable names", "Name, frequency, due date, recipient, and format requirement", "Only due dates", "Pricing information"], 1, "Complete deliverable tracking requires all five data points."),
      q("sr2-l2-q5", "Section 3 financial summary must distinguish:", ["Employee salaries", "Funded value vs total ceiling", "Office locations", "CPARS ratings"], 1, "Funded vs ceiling distinction is critical for cash flow and risk management."),
    ],
    {
      exercise: exercise(
        "contract-brief",
        "Build a Complete Contract Brief",
        "Using contract W912HQ-24-C-0042 (FFP IT Support, $1.2M base, 4 option years, USACE), build all 7 sections of the contract brief. Martin Business will grade your brief and identify missed sections.",
        {
          contractId: "W912HQ-24-C-0042",
          contractType: "FFP",
          agency: "USACE Huntsville",
          baseValue: 1200000,
          ceilingValue: 6000000,
          optionYears: 4,
          sections: CONTRACT_BRIEF_SECTIONS.map((s) => s.id),
          gradingCriteria: [
            "All 7 sections completed",
            "KO and COR contact information included",
            "CLIN structure documented",
            "Deliverable table with at least 3 entries",
            "At least 2 non-standard clauses identified",
            "Compliance calendar with monthly entries",
            "Risk flags assigned with justification",
          ],
          sampleDeliverables: [
            { name: "Monthly Status Report", frequency: "Monthly", dueDate: "Last business day", recipient: "COR" },
            { name: "Quarterly EVM Report", frequency: "Quarterly", dueDate: "15th of quarter month", recipient: "CO" },
            { name: "Annual Subcontracting Report", frequency: "Annual", dueDate: "October 30", recipient: "CO" },
          ],
        }
      ),
    }
  ),
];

export const SR_SKILL_2: SrAdminSkill = {
  id: SKILL_ID,
  number: 2,
  title: "Building Contract Briefs",
  description: "Create 1-2 page contract briefs with all 7 sections for internal stakeholder decision-making.",
  lessons,
};
