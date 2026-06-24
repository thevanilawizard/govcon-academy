import { lesson, q } from "./content-helpers";
import type { ExcelTemplate, SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-7" as const;

export const EXCEL_TEMPLATES: ExcelTemplate[] = [
  {
    id: "excel-t1",
    title: "Contract Tracking Master Sheet",
    description: "All active contracts in one portfolio view with conditional formatting and auto-calculations.",
    columns: [
      "Contract Number",
      "Client Name",
      "Agency",
      "Contract Type",
      "POP Start",
      "POP End",
      "Funded Value",
      "Ceiling Value",
      "Monthly Revenue",
      "Next Deliverable Due",
      "Option Exercise Date",
      "CPARS Rating",
      "Risk Level",
      "Status Notes",
    ],
    markdownTable: `| Contract Number | Client Name | Agency | Type | POP Start | POP End | Funded | Ceiling | Monthly Rev | Next Deliverable | Option Date | CPARS | Risk | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| W912HQ-24-C-0042 | Alpha Defense | USACE | FFP | 10/1/24 | 9/30/25 | $1,200,000 | $6,000,000 | $100,000 | 6/28/25 Status Rpt | 8/1/25 | Exceptional | GREEN | On track |
| HQ0034-23-D-0015 | Beta Systems | DoD CIO | T&M | 7/15/23 | 7/15/25 | $890,000 | $890,000 | $74,167 | 6/25/25 Invoice | N/A | Satisfactory | YELLOW | POP ending — plan closeout |
| 75FCMC22D0045 | Gamma Tech | GSA | CPFF | 4/1/22 | 3/31/26 | $450,000 | $2,100,000 | $37,500 | 7/1/25 EVM Rpt | 1/15/26 | Very Good | GREEN | Incremental funding needed Q3 |
| N0018924C0012 | Delta Solutions | NAVSEA | FFP | 1/1/24 | 6/30/25 | $675,000 | $675,000 | $112,500 | 6/20/25 Final Del | N/A | Marginal | RED | Closeout — CPARS recovery |
| 36C10X24C0023 | Epsilon Svc | VA | IDIQ | 1/1/24 | 12/31/27 | $3,200,000 | $15,000,000 | $66,667 | 7/15/25 Task Order | 10/1/26 | Satisfactory | GREEN | Task order pipeline strong |
| W56HZV24C0089 | Zeta Corp | Army | CPFF | 9/1/24 | 8/31/25 | $380,000 | $1,900,000 | $31,667 | 6/30/25 Cost Rpt | 7/15/25 | Satisfactory | YELLOW | 72% funds expended — notify KO |`,
    features: [
      "Conditional formatting: red for overdue deliverables, yellow for due within 7 days, green for on track",
      "Auto-calculating funded vs expended percentage per contract",
      "Option exercise date countdown with 60/30/7-day alerts",
      "Sortable by risk level, next deadline, or client",
      "Filter views by agency, contract type, or CPARS rating",
    ],
    conditionalFormatting: [
      "POP End date past today → row highlight RED",
      "Next Deliverable within 7 days → cell highlight YELLOW",
      "Risk Level = RED → entire row bold red text",
      "Option Exercise Date within 60 days → cell highlight ORANGE",
    ],
  },
  {
    id: "excel-t2",
    title: "CLIN/Funding Tracker",
    description: "Track each CLIN separately with funded amount, expended, remaining, and limitation of funds alerts.",
    columns: [
      "Contract Number",
      "CLIN",
      "Description",
      "Contract Type",
      "Funded Amount",
      "Expended",
      "Remaining",
      "% Expended",
      "LOF Threshold (75%)",
      "Alert Status",
    ],
    markdownTable: `| Contract | CLIN | Description | Type | Funded | Expended | Remaining | % Expended | LOF 75% | Alert |
|---|---|---|---|---|---|---|---|---|---|
| W56HZV24C0089 | 0001 | Base Engineering | CPFF | $380,000 | $273,600 | $106,400 | 72.0% | $285,000 | YELLOW — approaching 75% |
| W56HZV24C0089 | 0002 | Travel ODCs | CPFF | $45,000 | $12,300 | $32,700 | 27.3% | $33,750 | GREEN |
| 75FCMC22D0045 | 0001 | Base IT Services | CPFF | $450,000 | $198,000 | $252,000 | 44.0% | $337,500 | GREEN |
| 75FCMC22D0045 | 0002 | ODCs | CPFF | $75,000 | $68,250 | $6,750 | 91.0% | $56,250 | RED — exceeds 75%, notify KO |
| HQ0034-23-D-0015 | 0001 | T&M Labor | T&M | $890,000 | $847,500 | $42,500 | 95.2% | $667,500 | RED — near exhaustion |`,
    features: [
      "Percentage expended auto-calculated: Expended / Funded",
      "Color coding: green <60%, yellow 60-75%, red >75%",
      "LOF threshold column auto-calculates 75% of funded amount",
      "Alert status formula flags YELLOW at 60% and RED at 75%",
      "Pivot table ready for portfolio-level funding summary",
    ],
    conditionalFormatting: [
      "% Expended > 75% → RED background",
      "% Expended 60-75% → YELLOW background",
      "% Expended < 60% → GREEN background",
    ],
  },
  {
    id: "excel-t3",
    title: "Deliverable Tracker",
    description: "All deliverables across all contracts with due dates, responsible party, and status filtering.",
    columns: [
      "Contract Number",
      "Deliverable Name",
      "CDRL/Ref",
      "Frequency",
      "Due Date",
      "Responsible Party",
      "Recipient",
      "Format",
      "Status",
      "Date Submitted",
    ],
    markdownTable: `| Contract | Deliverable | CDRL | Frequency | Due Date | Responsible | Recipient | Format | Status | Submitted |
|---|---|---|---|---|---|---|---|---|---|
| W912HQ-24-C-0042 | Monthly Status Report | A001 | Monthly | 6/28/25 | Sarah Lee | COR | Word/Att 3 | In Progress | — |
| W912HQ-24-C-0042 | Quarterly EVM Report | A002 | Quarterly | 7/15/25 | Mike Chen | CO | Excel/Att 4 | Not Started | — |
| HQ0034-23-D-0015 | Final Performance Report | B001 | One-time | 7/10/25 | Sarah Lee | COR | PDF | Not Started | — |
| N0018924C0012 | Final Deliverable Package | C001 | One-time | 6/20/25 | Mike Chen | COR | PDF/USB | OVERDUE | — |
| 75FCMC22D0045 | Monthly Cost Report | A001 | Monthly | 7/5/25 | Finance Team | COR | Costpoint | In Progress | — |
| 36C10X24C0023 | Task Order Status | D001 | Per TO | 7/15/25 | Sarah Lee | COR | Email | Not Started | — |`,
    features: [
      "Filter by contract, due date range, or status (Overdue/In Progress/Submitted/Accepted)",
      "Overdue deliverables auto-highlighted in red",
      "Due within 7 days highlighted in yellow",
      "Auto-sort by due date ascending",
      "Summary count: total deliverables, overdue, due this week",
    ],
    conditionalFormatting: [
      "Due Date past today AND Status ≠ Submitted → RED",
      "Due Date within 7 days AND Status = Not Started → YELLOW",
      "Status = Accepted → GREEN",
    ],
  },
  {
    id: "excel-t4",
    title: "Subcontractor Payment Tracker",
    description: "Track sub invoices, Prompt Payment Act 7-day compliance, and running subcontract balances.",
    columns: [
      "Prime Contract",
      "Subcontractor",
      "Sub Contract #",
      "Invoice #",
      "Invoice Amount",
      "Date Received",
      "Date Approved",
      "Gov Payment Date",
      "Sub Payment Due (Gov+7)",
      "Sub Payment Date",
      "Days to Pay",
      "PPA Compliant",
      "Running Balance",
    ],
    markdownTable: `| Prime | Sub | Sub # | Invoice | Amount | Received | Approved | Gov Paid | Due (Gov+7) | Sub Paid | Days | PPA OK | Balance |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| W912HQ-24-C-0042 | Apex Systems | SUB-001 | INV-1042 | $45,000 | 6/1/25 | 6/3/25 | 6/10/25 | 6/17/25 | 6/14/25 | 4 | YES | $155,000 |
| W912HQ-24-C-0042 | Apex Systems | SUB-001 | INV-1043 | $52,000 | 7/1/25 | 7/3/25 | 7/8/25 | 7/15/25 | — | — | PENDING | $207,000 |
| 75FCMC22D0045 | TechBridge | SUB-003 | INV-2201 | $28,500 | 6/5/25 | 6/7/25 | 6/12/25 | 6/19/25 | 6/22/25 | 10 | NO | $84,500 |`,
    features: [
      "Sub Payment Due auto-calculates: Gov Payment Date + 7 calendar days",
      "PPA Compliant flag: YES if paid within 7 days, NO if late",
      "Running balance per subcontract",
      "Alert for invoices received but not approved within 5 business days",
      "Monthly summary: total sub payments, PPA compliance rate",
    ],
    conditionalFormatting: [
      "PPA Compliant = NO → RED row",
      "Sub Payment Due within 2 days and not paid → YELLOW",
      "Days to Pay > 7 → RED text",
    ],
  },
  {
    id: "excel-t5",
    title: "Contract Mod Log",
    description: "All modifications by contract with type, changes, financial impact, and running mod totals.",
    columns: [
      "Contract Number",
      "Mod Number",
      "Mod Date",
      "Mod Type",
      "Description",
      "Scope Change",
      "Price Change",
      "POP Change",
      "New Clauses",
      "Signed Date",
      "Running Mod Total",
    ],
    markdownTable: `| Contract | Mod # | Date | Type | Description | Scope | Price | POP | New Clauses | Signed | Running Total |
|---|---|---|---|---|---|---|---|---|---|---|
| W912HQ-24-C-0042 | P00001 | 11/15/24 | Unilateral | Exercise Option 1 | No | +$1,200,000 | +1 year | None | 11/15/24 | $1,200,000 |
| W912HQ-24-C-0042 | P00002 | 2/20/25 | Admin | Change of COR | No | $0 | No | None | 2/20/25 | $1,200,000 |
| W912HQ-24-C-0042 | P00003 | 5/10/25 | Bilateral | Add cyber monitoring | Yes | +$85,000 | No | DFARS 7012 | 5/15/25 | $1,285,000 |
| 75FCMC22D0045 | P00001 | 1/10/25 | Unilateral | Incremental funding CLIN 0001 | No | +$200,000 | No | None | 1/10/25 | $200,000 |
| W56HZV24C0089 | P00001 | 3/1/25 | Bilateral | Key personnel change | No | $0 | No | None | 3/5/25 | $0 |`,
    features: [
      "Running mod total auto-sums price changes per contract",
      "Filter by mod type (Unilateral/Bilateral/Admin)",
      "Track new clauses added via mods for flow-down to subs",
      "Chronological log supports audit trail",
      "Summary: total mods per contract, total dollar impact across portfolio",
    ],
    conditionalFormatting: [
      "Mod Type = Bilateral AND Signed Date blank → YELLOW (pending signature)",
      "Price Change > $100,000 → bold highlight",
      "New Clauses column not empty → ORANGE (review for flow-down)",
    ],
  },
];

const lessons = [
  lesson(
    "sr7-l1-excel-skills",
    SKILL_ID,
    "Excel Skills Every Contracts Administrator Needs",
    [
      {
        heading: "Why Excel Is Your Primary Tool",
        content:
          "Despite CLM systems, Excel remains the contracts administrator's most-used tool. You will build compliance matrices, contract briefs, funding trackers, deliverable schedules, sub payment logs, and portfolio dashboards in Excel daily. Master these functions: VLOOKUP/XLOOKUP for cross-referencing CLIN data, conditional formatting for deadline alerts, pivot tables for portfolio summaries, IF formulas for automated risk flags, and data validation for dropdown status fields.",
      },
      {
        heading: "Five Templates You Must Know",
        content:
          "Template 1 — Contract Tracking Master Sheet: all active contracts in one view with R/Y/G conditional formatting. Template 2 — CLIN/Funding Tracker: per-CLIN funded/expended/remaining with 75% LOF alerts. Template 3 — Deliverable Tracker: all deliverables across contracts with overdue highlighting. Template 4 — Subcontractor Payment Tracker: PPA 7-day compliance monitoring. Template 5 — Contract Mod Log: modification history with running financial impact. Each template is available for download with sample data and formulas pre-built.",
      },
      {
        heading: "Best Practices for Contract Excel Files",
        content:
          "Naming convention: [Contract#]_[TemplateType]_[Date].xlsx. Lock formula cells to prevent accidental overwrites. Use separate tabs for raw data vs calculated views. Back up to shared drive daily. Never embed confidential contract data in personal cloud storage. Include a 'README' tab explaining column definitions and formula logic for audit trail and handoff to backup administrator.",
      },
    ],
    [
      q("sr7-l1-q1", "The CLIN/Funding Tracker alerts at 75% because:", ["It's arbitrary", "FAR 52.232-22 requires notification at approximately 75% of funds expended", "DCAA requires it", "COR requests it"], 1, "LOF clause requires written notification at ~75% — tracker automates compliance."),
      q("sr7-l1-q2", "Sub Payment Tracker monitors compliance with:", ["FAR 52.219-14", "Prompt Payment Act 7-day flow-down (FAR 52.232-40)", "Buy American Act", "TINA"], 1, "PPA requires primes to pay subs within 7 days of receiving government payment."),
      q("sr7-l1-q3", "Conditional formatting in the master sheet uses:", ["Random colors", "Red for overdue, yellow for due soon, green for on track", "No color coding", "Only blue"], 1, "R/Y/G conditional formatting provides at-a-glance portfolio status."),
      q("sr7-l1-q4", "Contract Mod Log running total tracks:", ["Employee hours", "Cumulative price impact of all modifications per contract", "Travel expenses only", "CPARS scores"], 1, "Running mod total shows cumulative financial impact of all contract changes."),
      q("sr7-l1-q5", "Excel file naming convention should be:", ["Random names", "[Contract#]_[TemplateType]_[Date].xlsx", "First name only", "No convention"], 1, "Consistent naming enables search and audit retrieval across portfolio."),
    ]
  ),
];

export const SR_SKILL_7: SrAdminSkill = {
  id: SKILL_ID,
  number: 7,
  title: "Excel and Documentation for Contracts",
  description: "Five downloadable Excel templates for contract tracking, funding, deliverables, sub payments, and mod logs.",
  lessons,
};
