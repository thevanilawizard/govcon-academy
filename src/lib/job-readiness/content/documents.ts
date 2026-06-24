import type { DocumentLibraryItem } from "../types";

export const DOCUMENT_LIBRARY: DocumentLibraryItem[] = [
  {
    id: "doc-federal-contract",
    title: "Sample Federal Contract — IT Services (FFP)",
    docType: "Contract (W912HQ-24-C-0042)",
    content: `# CONTRACT W912HQ-24-C-0042

**Department of the Army — Corps of Engineers**
**Contract Type:** Firm-Fixed-Price
**NAICS:** 541512
**Total Funded Value:** $4,875,000.00

---

## SECTION A — SOLICITATION/CONTRACT FORM (SF 33)

**1. CONTRACT NO.** W912HQ-24-C-0042
**2. EFFECTIVE DATE** 01 October 2024
**3. SOLICITATION NO.** W912HQ-24-R-0089
**4. TYPE OF CONTRACT** Firm-Fixed-Price
**7. ADMINISTERED BY** U.S. Army Corps of Engineers, Baltimore District
**8. ITEM NO.** See Section B
**9. PERIOD OF PERFORMANCE** Base: 01 Oct 2024 – 30 Sep 2025
**Option 1:** 01 Oct 2025 – 30 Sep 2026 (Unilateral)

---

## SECTION B — SUPPLIES OR SERVICES AND PRICES

| CLIN | Description | Amount |
|------|-------------|--------|
| 0001 | Base Year IT Support Services | $2,250,000.00 |
| 0002 | Base Year Cybersecurity Monitoring | $675,000.00 |
| 0003AA | ODC — Travel (NTE) | $125,000.00 |
| 1001 | Option 1 IT Support Services | $2,350,000.00 |
| 1002 | Option 1 Cybersecurity Monitoring | $475,000.00 |

**Funded at Award:** CLINs 0001, 0002, 0003AA only ($3,050,000.00)
**Ceiling:** $4,875,000.00 (all CLINs)

---

## SECTION C — DESCRIPTION/SPECIFICATIONS

Contractor shall provide enterprise IT help desk (Tier 1-2), infrastructure monitoring, and cybersecurity operations center (SOC) support IAW Attachment J-1 (Performance Work Statement).

**Key Personnel:**
- Program Manager (PM-001): Full-time, named at award, replacement requires KO approval 30 days prior
- Lead Cyber Engineer (CE-002): TS/SCI eligible, named at award

**Place of Performance:** Contractor facility and government site (Fort Meade) — 40% on-site required.

**Deliverables:** Monthly status report (CDRL A001), Quarterly ISR (CDRL A002), Incident reports within 24 hours (CDRL A003).

---

## SECTION H — SPECIAL CONTRACT REQUIREMENTS

H.1 **Small Business Subcontracting Plan** required per FAR 19.704 — goals: 23% small business, 5% WOSB.
H.2 **Organizational Conflict of Interest (OCI)** mitigation plan incorporated as Attachment J-3.
H.3 **Key Personnel** — no substitution without KO written approval.

---

## SECTION I — CONTRACT CLAUSES

**I.1 FAR 52.243-1** Changes — Fixed-Price (AUG 1987)
**I.2 FAR 52.249-2** Termination for Convenience — Fixed-Price (JUN 2020)
**I.3 FAR 52.244-2** Subcontracts — Cost-Reimbursement (NOTE: included despite FFP — verify flow-down)
**I.4 DFARS 252.204-7012** Safeguarding Covered Defense Information (OCT 2016)
**I.5 DFARS 252.204-7019** Notice of NIST Assessment Requirements (DEC 2023)
**I.6 DFARS 252.227-7013** Rights in Technical Data — Noncommercial Items (FEB 2014)
**I.7 FAR 52.219-14** Limitations on Subcontracting (OCT 2022)
**I.8 FAR 52.232-25** Prompt Payment (JAN 2017)
**I.9 FAR 52.233-1** Disputes (MAY 2014)
**I.10 FAR 52.242-15** Stop-Work Order (AUG 1989)

---

## SECTION J — ATTACHMENTS

J-1 Performance Work Statement (45 pages)
J-2 DD Form 254 (Contract Security Classification Specification) — SECRET
J-3 OCI Mitigation Plan
J-4 CDRL Schedule
J-5 Wage Determination (SCA) — applicable to help desk staff at Fort Meade`,
    annotations: [
      {
        label: "Section B — Funded vs. Option CLINs",
        text: "Only base CLINs are funded at award ($3.05M). Option CLINs 1001/1002 cannot be invoiced until the KO exercises Option 1 via unilateral mod. Track option exercise deadline.",
      },
      {
        label: "FAR 52.243-1 Changes",
        text: "Authorizes KO to make unilateral changes within general scope. Constructive changes still require REA if no mod issued. Your primary tool for scope disputes.",
        risk: false,
      },
      {
        label: "FAR 52.244-2 on FFP Contract",
        text: "Unusual — consent-to-subcontract clause typically on cost-type. Verify whether consent is required for all subs or above threshold only. CPSR will check.",
        risk: true,
      },
      {
        label: "DFARS 252.204-7012 Cyber",
        text: "Mandatory for CUI/CDI. Requires NIST 800-171 compliance, incident reporting within 72 hours, and flow-down to all subs handling covered information.",
        risk: true,
      },
      {
        label: "Key Personnel Clause (Section C/H)",
        text: "Replacing PM or Lead Cyber Engineer without 30-day KO approval is a material breach. Staffing changes are not administrative — plan transitions early.",
        risk: true,
      },
      {
        label: "DD Form 254 — SECRET",
        text: "Attachment J-2 triggers personnel clearance requirements, facility clearance, and classified storage rules. Coordinate with FSO before hiring.",
        risk: true,
      },
      {
        label: "FAR 52.219-14 Limitations",
        text: "Prime must perform 50% of cost of contract performance (excl. materials) on this service contract if set-aside applies — verify contract type in SF 33.",
        risk: false,
      },
    ],
    checklist: [
      "Establish contract file with all Section J attachments",
      "Load CLINs 0001-0003AA into accounting — not option CLINs",
      "Brief security on DD 254 requirements",
      "Build flow-down matrix including 7012, 7013, 7019",
      "Identify key personnel and backup candidates",
      "Set option exercise reminder 60 days before base POP end",
      "Submit SF-294 small business reporting calendar",
    ],
  },
  {
    id: "doc-rfp-it-services",
    title: "Sample RFP — Best Value IT Services",
    docType: "RFP (W912HQ-24-R-0089)",
    content: `# REQUEST FOR PROPOSAL W912HQ-24-R-0089

**Enterprise IT and Cybersecurity Support Services**
**Set-Aside:** Total Small Business
**Contract Type:** Firm-Fixed-Price
**Evaluation:** Best Value Trade-Off

---

## SECTION L — INSTRUCTIONS TO OFFERORS

L.1 **Submission Deadline:** 15 August 2024, 3:00 PM EDT via PIEE
L.2 **Volume Limits:** Technical — 50 pages; Cost — no page limit; Past Performance — 10 pages
L.3 **Format:** 12-point font, 1-inch margins. Non-compliant proposals may be rejected without evaluation.
L.4 **Cost Proposal:** Submit Excel cost template (Attachment L-1) with fully burdened labor rates by category. Government will evaluate total evaluated price (base + all options).
L.5 **Questions:** Due 25 July 2024. Answers posted as Amendment 0003 only.

**Labor Categories (minimum qualifications in Attachment L-2):**
- LC-001 Program Manager — 10 yrs, PMP, active Secret clearance
- LC-002 Senior Systems Engineer — 8 yrs, CISSP preferred
- LC-003 IT Specialist — 3 yrs

---

## SECTION M — EVALUATION FACTORS

**Factor 1 — Technical Approach (Importance: Significantly More Important Than Price)**

Subfactors (equal weight within Factor 1):
- M.1.1 Understanding of Requirements and Risk Mitigation
- M.1.2 Staffing Plan and Key Personnel Qualifications
- M.1.3 Transition Plan (30-day transition-in required)

**Rating Scale:** Outstanding / Good / Acceptable / Marginal / Unacceptable
**Adjectival Rating Definitions:** See Table M-1. Unacceptable in any subfactor may eliminate offeror.

**Factor 2 — Past Performance (Importance: Equal to Price)**

Government will evaluate recency, relevancy, and confidence based on CPARS and references.

**Factor 3 — Price (Importance: Equal to Past Performance)**

Low price does not guarantee award. Evaluators will assess cost realism of labor hours on FFP. Unrealistically low hours may be adjusted upward for evaluation only.

**Trade-Off:** Government may pay premium for significantly superior technical solution per FAR 15.308.

---

## SECTION C — PERFORMANCE WORK STATEMENT (EXCERPT)

C.1 **Scope:** 24/7 SOC monitoring, Tier 1-2 help desk (500 users), patch management, vulnerability scanning.
C.2 **SLA:** Critical incidents — 15-minute response, 4-hour resolution target.
C.3 **Transition:** Full operational capability within 30 calendar days of award.

---

## COMPLIANCE MATRIX (DERIVED)

| PWS Ref | Requirement | Proposal Section | Compliant? |
|---------|-------------|------------------|------------|
| C.1 SOC | 24/7 monitoring | Technical §3.2 | |
| C.2 SLA | 15-min response | Technical §3.4 | |
| C.3 Transition | 30-day TOC | Technical §5.0 | |
| L.4 Cost | Excel template | Cost Volume | |`,
    annotations: [
      {
        label: "Section M — Factor Hierarchy",
        text: "Technical is 'Significantly More Important Than Price' — a strong technical proposal can beat lower-priced competitors. Do not bid LPTA strategy.",
      },
      {
        label: "Unacceptable Rating Risk",
        text: "One Unacceptable subfactor can eliminate the offeror entirely. Compliance matrix every PWS paragraph before writing prose.",
        risk: true,
      },
      {
        label: "Cost Realism on FFP",
        text: "Government may adjust unrealistically low labor hours upward for evaluation. Under-staffing hurts evaluated score even if price is lowest.",
        risk: true,
      },
      {
        label: "Section L Page Limits",
        text: "50-page technical limit is strict — non-compliance may cause rejection without evaluation. Use attachments only where permitted.",
        risk: true,
      },
      {
        label: "Total Evaluated Price",
        text: "Must price base + all option years in cost volume even though only base is funded at award. Highest total evaluated price comparison drives Factor 3.",
      },
    ],
    checklist: [
      "Build compliance matrix from full PWS before writing",
      "Map labor categories LC-001 through LC-003 to WBS",
      "Price all option years for total evaluated price",
      "Validate key personnel meet Attachment L-2 quals",
      "Independent review for Unacceptable risk areas",
      "Submit via PIEE before deadline — not email",
    ],
  },
  {
    id: "doc-dcaa-letter",
    title: "Sample DCAA Audit Notification Letter",
    docType: "DCAA Audit Notice (ICE-2024-0847)",
    content: `# DEFENSE CONTRACT AUDIT AGENCY
## Audit Notification Memorandum

**Date:** 14 November 2024
**To:** Apex Federal Solutions, Inc. — Attn: Controller
**From:** DCAA Columbus Field Office — Audit Manager J. Patterson
**Subject:** Incurred Cost Audit — Fiscal Years 2021, 2022, 2023

---

Dear Contractor:

This memorandum notifies you that DCAA will conduct an **incurred cost audit** of Apex Federal Solutions, Inc. for the fiscal years ending 31 December 2021, 2022, and 2023.

**Audit Objective:** Determine whether costs charged to flexibly-priced contracts are allowable, allocable, and reasonable IAW FAR Part 31 and CAS 401-420.

**Planned Start Date:** 02 December 2024
**Estimated Fieldwork:** 3 weeks on-site at your Reston, VA facility
**Audit Request Number:** ICE-2024-0847

**Initial Document Request (due within 10 business days):**
1. Incurred Cost Submissions (ICS) for FY21, FY22, FY23 with all schedules
2. General ledger, trial balance, and chart of accounts
3. Job cost ledger detail by contract
4. Indirect rate calculations and supporting worksheets
5. Timekeeping policies, timesheets (sample Q4 each year)
6. Executive compensation analysis (FAR 31.205-6)
7. Subcontract listing with prime contract cross-reference
8. Travel and ODC policies and sample testing populations
9. CAS disclosure statement (if applicable)
10. Contract briefs for all active flexibly-priced contracts

**Point of Contact:** DCAA Auditor T. Nguyen, t.nguyen@dcaa.mil, (614) 555-0182

Please confirm receipt and designate a contractor POC within **3 business days**.

Sincerely,
/s/ J. Patterson
Audit Manager`,
    annotations: [
      {
        label: "10-Day Document Deadline",
        text: "Missing this deadline creates presumption of non-cooperation and may expand audit scope. Assign owners day one — contracts, finance, HR.",
        risk: true,
      },
      {
        label: "Incurred Cost vs. System Audit",
        text: "This is an ICE audit of allowability/allocability — not a CPSR purchasing review. Focus on ICS reconciliation and FAR 31 compliance.",
      },
      {
        label: "Executive Compensation (Item 6)",
        text: "DCAA routinely questions exec comp exceeding benchmarks. Pull comp study and board minutes before they ask.",
        risk: true,
      },
      {
        label: "Designate POC in 3 Days",
        text: "Reply immediately confirming receipt. Single POC prevents auditors from getting conflicting answers from multiple staff.",
      },
      {
        label: "On-Site Fieldwork",
        text: "Prepare conference room, network read-only access, and escort protocol. Legal should brief employees on interview rights.",
      },
    ],
    checklist: [
      "Forward to Controller, Contracts VP, and Legal same day",
      "Confirm receipt within 3 business days with POC designation",
      "Assign document owners for all 10 request items",
      "Calendar 10-day submission deadline",
      "Reconcile ICS to general ledger before submission",
      "Brief staff on audit protocols and interview procedures",
      "Prepare executive comp support package proactively",
    ],
  },
  {
    id: "doc-bilateral-mod",
    title: "Sample Bilateral Contract Modification",
    docType: "SF 30 Modification (P00004)",
    content: `# STANDARD FORM 30 (REV. 11/2016)
## AMENDMENT OF SOLICITATION/MODIFICATION OF CONTRACT

**1. CONTRACT ID:** W912HQ-24-C-0042
**2. MODIFICATION NO.:** P00004
**3. EFFECTIVE DATE:** 15 March 2025
**4. TYPE:** Bilateral — Equitable Adjustment

**14. DESCRIPTION OF AMENDMENT/MODIFICATION:**

The parties agree to the following changes resulting from COR-directed additional vulnerability assessment services (Constructive Change CC-2025-003):

**Section B — Added CLIN:**
| CLIN | Description | Amount |
|------|-------------|--------|
| 0004 | Additional VA Services (Mar-May 2025) | $127,450.00 |

**Section C — Added:** PWS paragraph C.4.7 — Quarterly vulnerability assessments for classified enclave IAW Attachment J-1 Amendment 1.

**Section F — Period of Performance:** Base period extended through 15 June 2025 for CLIN 0004 only.

**Net Contract Value Change:** +$127,450.00
**New Total Funded Value:** $3,177,450.00

**15. PRICING NARRATIVE:** Price determined by negotiation of REA CC-2025-003 submitted 22 January 2025. Government accepted forward pricing at current labor rates. No fee adjustment on FFP.

**16. SIGNATURES:**
/a/ Sarah Chen, Contracting Officer — 15 March 2025
/a/ Michael Torres, Apex Federal Solutions — 18 March 2025`,
    annotations: [
      {
        label: "Bilateral Signature Required",
        text: "Both parties signed — work should not have been billed to CLIN 0004 before 18 March 2025. Verify no premature billing occurred.",
        risk: true,
      },
      {
        label: "Constructive Change Reference",
        text: "Mod cites REA CC-2025-003 — ensure REA file is closed and linked. Original COR emails should be in contract file tab 2.",
      },
      {
        label: "POP Extension",
        text: "Extension applies to CLIN 0004 only — base CLINs 0001-0002 POP unchanged unless separately modified. Track deliverable dates.",
      },
      {
        label: "PWS Amendment",
        text: "Attachment J-1 Amendment 1 must be filed in Section J. Update internal SOW distribution to program team.",
      },
    ],
    checklist: [
      "File signed SF 30 in contract file Tab 1",
      "Load CLIN 0004 funding in accounting system",
      "Distribute amended PWS to program team",
      "Close REA CC-2025-003 in tracking log",
      "Verify no billing occurred before effective date",
      "Update EAC and status report funding baseline",
    ],
  },
  {
    id: "doc-cure-notice",
    title: "Sample Cure Notice — Subcontractor Performance",
    docType: "Cure Notice (Prime to Sub)",
    content: `# CURE NOTICE
**Date:** 03 February 2025
**To:** NovaTech Solutions, LLC — Attn: Contract Manager Lisa Park
**From:** Apex Federal Solutions, Inc. — Subcontract W912HQ-24-C-0042-S001
**Subject:** Failure to Cure Performance Deficiencies — CDRL A002 Quarterly ISR

---

Dear Ms. Park:

Reference: Subcontract No. W912HQ-24-C-0042-S001 dated 15 October 2024
Prime Contract: W912HQ-24-C-0042

**Notice of Deficiency:**

You are hereby notified of the following failure to perform in accordance with Subcontract Section C and Exhibit B (Deliverables Schedule):

1. **Q2 Quarterly ISR (CDRL A002):** Due 15 January 2025 — NOT RECEIVED as of 03 February 2025 (19 days late)
2. **Critical Incident Report (CDRL A003):** Incident INC-2025-0042 dated 12 January 2025 — required within 24 hours; received 14 January 2025 (48 hours late)
3. **Staffing:** Lead Cyber Engineer (CE-002) removed 08 January 2025 without required 15-day prior written notice per Subcontract Section H.2

**Required Corrective Action:**

Within **ten (10) calendar days** of this notice (by 13 February 2025), you must:
- Submit Q2 ISR with all required data elements
- Provide root cause analysis and corrective action plan for late incident reporting
- Restore Lead Cyber Engineer or submit equally qualified replacement with resume for our approval

**Consequences of Failure to Cure:**

If deficiencies are not cured within the specified period, Apex Federal Solutions reserves all rights under Subcontract Section 12 (Default) including termination for default and pursuit of excess costs of reprocurement per FAR 49.402-5 flow-down.

**Prime Contract Impact:**

Failure to cure may affect our performance under prime contract W912HQ-24-C-0042 and will be documented for CPARS and past performance reporting.

/s/ Michael Torres
Contracts Manager, Apex Federal Solutions`,
    annotations: [
      {
        label: "10-Day Cure Period",
        text: "Calendar the deadline — 13 February 2025. Document all sub responses daily. If not cured, legal review before termination for default.",
        risk: true,
      },
      {
        label: "Specific Deficiencies",
        text: "Notice cites specific deliverables and contract sections — this is legally sufficient. Vague cure notices are harder to enforce.",
      },
      {
        label: "Key Personnel Violation",
        text: "Sub removed CE-002 without notice — separate breach from deliverable late. May support termination even if ISR is cured.",
        risk: true,
      },
      {
        label: "Reprocurement Costs",
        text: "FAR 49.402-5 flow-down allows recovery of excess reprocurement costs on default termination — preserve all cost documentation.",
      },
    ],
    checklist: [
      "File cure notice in prime and sub contract files",
      "Calendar cure deadline with daily follow-up",
      "Notify PM and prepare backup plan",
      "Assess whether government notification is required",
      "Document all sub communications after notice",
      "Engage legal if cure period expires without resolution",
    ],
  },
  {
    id: "doc-ics-simplified",
    title: "Sample Incurred Cost Submission (Simplified)",
    docType: "ICS — Schedule H Summary (FY2023)",
    content: `# INCURRED COST SUBMISSION — SCHEDULE H (SIMPLIFIED)
**Contractor:** Apex Federal Solutions, Inc.
**Fiscal Year:** 1 January – 31 December 2023
**Submission Date:** 30 April 2024 (within 6-month requirement)

---

## SCHEDULE H — SUMMARY OF DIRECT AND INDIRECT EXPENSES

| Line | Description | Amount |
|------|-------------|--------|
| 1 | Direct Labor | $12,450,000 |
| 2 | Direct Material | $890,000 |
| 3 | Other Direct Costs | $1,230,000 |
| 4 | Subcontractors | $4,560,000 |
| 5 | **Total Direct Costs** | **$19,130,000** |
| 6 | Fringe Benefits (32.1%) | $3,996,450 |
| 7 | Overhead (14.2%) | $3,287,919 |
| 8 | G&A (10.8%) | $2,864,436 |
| 9 | **Total Indirect Expense** | **$10,148,805** |
| 10 | **Total Costs Incurred** | **$29,278,805** |

---

## SCHEDULE I — GENERAL AND ADMINISTRATIVE EXPENSES (EXCERPT)

| Account | Description | Amount | Allowable? |
|---------|-------------|--------|------------|
| 6100 | Executive Salaries | $1,240,000 | Yes — with comp analysis |
| 6200 | Legal — Bid Protests | $85,000 | Partially — pre-award only |
| 6300 | Entertainment | $12,400 | **NO — FAR 31.205-14** |
| 6400 | Lobbying | $0 | N/A |

**Schedule M — Reconciliation to Books:** Total per Schedule H = Total per Trial Balance ✓

---

## SCHEDULE O — CONTRACT INFORMATION (EXCERPT)

| Contract | Type | Costs Claimed FY23 |
|----------|------|-------------------|
| W912HQ-22-C-0118 | CPFF | $4,200,000 |
| W912HQ-24-C-0042 | FFP | $1,850,000 |

**Note:** FFP costs tracked for price reasonableness and estimating — not billed on cost basis.`,
    annotations: [
      {
        label: "6-Month Submission Deadline",
        text: "ICS due 30 April for calendar FY ending 31 Dec — 6 months per FAR 52.216-7. Late submission triggers audit priority.",
        risk: true,
      },
      {
        label: "Entertainment — Unallowable",
        text: "$12,400 in account 6300 must be excluded from billings and shown in Schedule I as unallowable. DCAA will test this account.",
        risk: true,
      },
      {
        label: "Schedule M Reconciliation",
        text: "ICS must reconcile to audited financial statements. Any variance requires explanatory note — DCAA starts here.",
      },
      {
        label: "Indirect Rate Application Order",
        text: "Fringe on labor, OH on labor+fringe, G&A on total — verify rate buildup matches accounting system description.",
      },
      {
        label: "FFP on Schedule O",
        text: "FFP contract costs are tracked but not billed flexibly — ensure no CPFF billing on W912HQ-24-C-0042.",
      },
    ],
    checklist: [
      "Reconcile Schedule H to trial balance before submission",
      "Exclude all FAR 31.205 unallowables",
      "Verify indirect rate math matches forward rates",
      "Include executive compensation analysis",
      "Cross-reference Schedule O to job cost ledger",
      "Submit via DCAA electronic portal with receipt confirmation",
    ],
  },
  {
    id: "doc-teaming-agreement",
    title: "Sample Teaming Agreement",
    docType: "Teaming Agreement (Pre-Award)",
    content: `# TEAMING AGREEMENT
**Date:** 01 June 2024
**Prime:** Apex Federal Solutions, Inc. ("Prime")
**Subcontractor/Teaming Partner:** NovaTech Solutions, LLC ("Partner")

**Solicitation:** W912HQ-24-R-0089 — Enterprise IT and Cybersecurity Support

---

## 1. PURPOSE
Parties agree to team for the above solicitation with Apex as prime offeror and NovaTech as subcontractor upon award.

## 2. WORK SHARE
Partner shall perform **40%** of total contract value — specifically all cybersecurity/SOC functions (PWS Sections C.1.2 and C.2). Prime performs help desk and transition (60%).

## 3. EXclusivity
Partner agrees not to team with any other offeror for this solicitation. **Prime is NOT exclusive** — Prime may team with others on different solicitations.

## 4. PROPOSAL DEVELOPMENT
Partner shall provide technical input, resumes, and cost/pricing for its work share by 01 August 2024. Partner costs shall not exceed $1.9M (base year) without Prime written approval.

## 5. SUBCONTRACT NEGOTIATION
Upon award, parties shall negotiate subcontract in good faith within 30 days. Terms shall be consistent with this Agreement and prime contract requirements.

## 6. TERMINATION
Either party may terminate with 10 days written notice if: (a) solicitation cancelled, (b) other party fails to provide proposal inputs timely, or (c) award made to other team.

## 7. CONFIDENTIALITY
All proposal information exchanged is proprietary and marked accordingly.

## 8. DISPUTE RESOLUTION
Disputes under this Agreement resolved by senior executive negotiation; no litigation during proposal phase.

## 9. NO OBLIGATION TO AWARD
This Agreement does not obligate Prime to award subcontract — **negotiation in good faith only**.

**SIGNATURES:**
/s/ Michael Torres, Apex Federal Solutions
/s/ Lisa Park, NovaTech Solutions, LLC`,
    annotations: [
      {
        label: "Work Share — 40%",
        text: "Ambiguity risk: '40% of total contract value' vs. 40% of labor hours. Define metric precisely before signing — disputes after award are common.",
        risk: true,
      },
      {
        label: "Non-Reciprocal Exclusivity",
        text: "Partner cannot team elsewhere on THIS solicitation; Prime can. Negotiate mutual exclusivity if Partner insists.",
        risk: true,
      },
      {
        label: "Good Faith Only — No Obligation",
        text: "Section 9 means Prime is NOT bound to award sub at award. Partner has limited recourse if Prime selects different sub — legal review critical.",
        risk: true,
      },
      {
        label: "Cost Cap $1.9M",
        text: "Partner pricing capped for proposal — verify their input fits cap or amend before submission.",
      },
      {
        label: "30-Day Sub Negotiation",
        text: "Calendar subcontract negotiation immediately at award — delays affect startup and small business reporting.",
      },
    ],
    checklist: [
      "Clarify work share metric (% of value vs. hours vs. tasks)",
      "Negotiate mutual exclusivity if needed",
      "Legal review of 'good faith only' language",
      "Confirm Partner cost input within $1.9M cap",
      "Define IP and data rights for jointly developed proposal material",
      "Plan definitive subcontract negotiation timeline at award",
    ],
  },
  {
    id: "doc-subcontract-ffp",
    title: "Sample Subcontract — FFP Services",
    docType: "Subcontract (W912HQ-24-C-0042-S001)",
    content: `# SUBCONTRACT AGREEMENT
**Subcontract No.:** W912HQ-24-C-0042-S001
**Prime:** Apex Federal Solutions, Inc.
**Subcontractor:** NovaTech Solutions, LLC
**Prime Contract:** W912HQ-24-C-0042
**Type:** Firm-Fixed-Price
**Value:** $1,850,000.00
**POP:** 01 October 2024 – 30 September 2025

---

## ARTICLE 1 — SCOPE
Subcontractor shall perform cybersecurity/SOC services IAW Exhibit A (SOW extracted from prime PWS C.1.2, C.2).

## ARTICLE 2 — PRICE
FFP: $1,850,000.00 payable monthly upon acceptance of deliverables per Exhibit B.

## ARTICLE 3 — FLOW-DOWN CLAUSES (EXHIBIT C)
- FAR 52.243-1 Changes — Fixed-Price
- FAR 52.249-2 Termination for Convenience
- FAR 52.249-10 Default (fixed-price)
- DFARS 252.204-7012 Safeguarding CDI
- DFARS 252.204-7019 NIST Assessment Notice
- DFARS 252.227-7013 Rights in Technical Data
- FAR 52.222-26 Equal Opportunity
- FAR 52.222-50 Combating Trafficking
- FAR 52.244-2 Subcontracts (consent required >$150K)

## ARTICLE 4 — KEY PERSONNEL
Lead Cyber Engineer CE-002 — no substitution without Prime written consent.

## ARTICLE 5 — INVOICING
Submit invoices by 5th business day each month. Prime pays net-30 after government payment received.

## ARTICLE 6 — AUDIT RIGHTS
Prime and government may audit Subcontractor records related to this subcontract per FAR 52.215-2 flow-down.

## ARTICLE 7 — LIMITATION OF LIABILITY
**Subcontractor liability capped at $500,000 except for fraud, willful misconduct, or IP infringement.**

## ARTICLE 8 — TERMINATION
Prime may terminate for convenience or default per flowed clauses. Default termination requires 10-day cure notice.

---

**EXHIBIT B — DELIVERABLES**
| ID | Deliverable | Due |
|----|-------------|-----|
| A002 | Quarterly ISR | 15th of Jan/Apr/Jul/Oct |
| A003 | Incident Report | Within 24 hours |`,
    annotations: [
      {
        label: "Limitation of Liability — $500K Cap",
        text: "RED FLAG: Cap may be unenforceable for government-directed claims and doesn't protect Prime from full prime contract liability. Negotiate removal or increase to sub value.",
        risk: true,
      },
      {
        label: "Payment Net-30 After Government Pays",
        text: "Cash flow risk to sub — standard on government primes but document in negotiation. Consider partial progress payments for long POP.",
        risk: true,
      },
      {
        label: "DFARS 7012 Flow-Down",
        text: "Sub handling CDI must implement NIST 800-171. Verify sub's SPRS score before award. Prime liable for sub cyber failures.",
        risk: true,
      },
      {
        label: "Consent Threshold $150K",
        text: "Prime must obtain CO consent before sub-subcontracts exceeding $150K per flowed 52.244-2.",
      },
      {
        label: "FFP Risk on Sub",
        text: "FFP transfers cost risk to NovaTech — appropriate for defined SOC scope. Monitor deliverable acceptance strictly.",
      },
    ],
    checklist: [
      "Verify all prime mandatory clauses flowed per matrix",
      "Negotiate removal/increase of liability cap",
      "Confirm NovaTech SPRS/NIST compliance for 7012",
      "Load deliverable schedule into tracking system",
      "Ensure CO consent obtained for this sub if required on prime",
      "Document subcontract price analysis in prime contract file",
    ],
  },
];
