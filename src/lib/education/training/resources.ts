import type { TrainingResource } from "./types";

export const TRAINING_RESOURCES: TrainingResource[] = [
  {
    id: "contract-compliance-checklist",
    title: "Contract Compliance Checklist",
    description:
      "Pre-award through closeout compliance verification checklist for contracts managers administering federal contracts.",
    content: `# Contract Compliance Checklist

**Contract Number:** ____________________  
**Customer / Agency:** ____________________  
**Contract Type:** ____________________  
**POP Start / End:** ____________________  
**Contracts Manager:** ____________________  
**Review Date:** ____________________

---

## 1. Pre-Award / Award Setup

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1.1 | Contract file opened; award document, SF 33/1449, and all attachments saved | ☐ Pass ☐ Fail ☐ N/A | |
| 1.2 | SAM.gov registration active; reps & certs current for award date | ☐ Pass ☐ Fail ☐ N/A | |
| 1.3 | Section I clauses reviewed; mandatory flow-down list extracted | ☐ Pass ☐ Fail ☐ N/A | |
| 1.4 | Accounting system / billing rates verified for contract type | ☐ Pass ☐ Fail ☐ N/A | |
| 1.5 | Security requirements (DD 254, CMMC, facility clearance) mapped to program | ☐ Pass ☐ Fail ☐ N/A | |
| 1.6 | Small business subcontracting plan submitted (if required) | ☐ Pass ☐ Fail ☐ N/A | |
| 1.7 | Insurance / bonding certificates on file per clause requirements | ☐ Pass ☐ Fail ☐ N/A | |
| 1.8 | ERP project / charge codes established and mapped to CLINs | ☐ Pass ☐ Fail ☐ N/A | |

---

## 2. Kickoff and Performance Start

| # | Item | Status | Notes |
|---|------|--------|-------|
| 2.1 | Internal kickoff completed; PWS, CDRLs, and milestones distributed | ☐ Pass ☐ Fail ☐ N/A | |
| 2.2 | Government kickoff held; COR/KO contacts documented | ☐ Pass ☐ Fail ☐ N/A | |
| 2.3 | Subcontracts executed with required flow-down clauses | ☐ Pass ☐ Fail ☐ N/A | |
| 2.4 | Labor categories and rates match contract / mod pricing | ☐ Pass ☐ Fail ☐ N/A | |
| 2.5 | Travel, ODC, and fee billing rules documented for finance | ☐ Pass ☐ Fail ☐ N/A | |
| 2.6 | Quality / acceptance criteria understood for each deliverable | ☐ Pass ☐ Fail ☐ N/A | |

---

## 3. Ongoing Administration (Monthly / Quarterly)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 3.1 | Funded value vs. cumulative billed reconciled | ☐ Pass ☐ Fail ☐ N/A | |
| 3.2 | Labor charging within POP; no unapproved overtime to government | ☐ Pass ☐ Fail ☐ N/A | |
| 3.3 | Deliverables tracked; acceptance documented before billing | ☐ Pass ☐ Fail ☐ N/A | |
| 3.4 | Mods / REAs processed before performing out-of-scope work | ☐ Pass ☐ Fail ☐ N/A | |
| 3.5 | Subcontractor invoices verified against prime deliverable acceptance | ☐ Pass ☐ Fail ☐ N/A | |
| 3.6 | CPARS evidence folder updated (metrics, correspondence, commendations) | ☐ Pass ☐ Fail ☐ N/A | |
| 3.7 | Cyber incident reporting obligations reviewed (if DFARS 7012 applies) | ☐ Pass ☐ Fail ☐ N/A | |
| 3.8 | Ethics / OCI issues screened on scope changes and teaming additions | ☐ Pass ☐ Fail ☐ N/A | |

---

## 4. Invoicing and Financial Compliance

| # | Item | Status | Notes |
|---|------|--------|-------|
| 4.1 | Invoice format matches agency requirement (WAWF, IPP, SF-1034) | ☐ Pass ☐ Fail ☐ N/A | |
| 4.2 | Provisional billing rates applied per latest agreement | ☐ Pass ☐ Fail ☐ N/A | |
| 4.3 | Unallowable costs excluded from billings | ☐ Pass ☐ Fail ☐ N/A | |
| 4.4 | Invoice certified by authorized official | ☐ Pass ☐ Fail ☐ N/A | |
| 4.5 | Progress payment liquidation tracked (if FFP with financing) | ☐ Pass ☐ Fail ☐ N/A | |

---

## 5. Closeout

| # | Item | Status | Notes |
|---|------|--------|-------|
| 5.1 | Final deliverable accepted; final invoice submitted | ☐ Pass ☐ Fail ☐ N/A | |
| 5.2 | ICS submitted and rate agreement finalized (cost-type) | ☐ Pass ☐ Fail ☐ N/A | |
| 5.3 | Release of claims / property disposition complete | ☐ Pass ☐ Fail ☐ N/A | |
| 5.4 | Records retention period documented (FAR 52.215-2) | ☐ Pass ☐ Fail ☐ N/A | |
| 5.5 | Closeout mod or confirmation received from CO | ☐ Pass ☐ Fail ☐ N/A | |

---

**Reviewer Signature:** ____________________ **Date:** __________  
**Program Manager Acknowledgment:** ____________________ **Date:** __________`,
  },
  {
    id: "proposal-compliance-matrix",
    title: "Proposal Compliance Matrix Template",
    description:
      "Section L and Section M cross-reference matrix for RFP compliance tracking through color team reviews.",
    content: `# Proposal Compliance Matrix

**Solicitation Number:** ____________________  
**Proposal Due Date/Time:** ____________________  
**Proposal Manager:** ____________________  
**Contracts Lead:** ____________________  
**Last Updated:** ____________________

---

## Instructions

1. Extract every "shall," "must," and "will" from Section L (Instructions) and Section M (Evaluation).
2. Assign a unique Requirement ID to each row.
3. Map each requirement to proposal volume, page, and paragraph.
4. Update status at Pink, Red, Gold, and White team gates.

**Status Key:** NS = Not Started | IP = In Progress | D = Draft Complete | R = Reviewed | C = Compliant

---

## Section L — Instructions to Offerors

| Req ID | Section L Ref | Requirement Summary | Volume | Page / Para | Owner | Pink | Red | Gold | Notes |
|--------|---------------|---------------------|--------|-------------|-------|------|-----|------|-------|
| L-001 | L.1 | Proposal due via portal by 2:00 PM ET; 5 copies + 1 original | Admin | Cover | | | | | |
| L-002 | L.4.2 | Technical volume max 50 pages, 12-pt Times New Roman, 1" margins | Tech | All | | | | | |
| L-003 | L.4.3 | Price volume separate; use Attachment J-1 pricing template | Price | All | | | | | |
| L-004 | L.5.1 | Acknowledge all amendments; list by number on cover letter | Admin | CL-1 | | | | | |
| L-005 | L.6 | Key personnel resumes max 2 pages each; include clearance level | Tech | App A | | | | | |
| L-006 | L.7.2 | Past performance questionnaire contacts; min 3 references | PP | Vol III | | | | | |
| L-007 | L.8 | Signed SF 33 / representations and certifications | Admin | App B | | | | | |
| L-008 | | | | | | | | | |
| L-009 | | | | | | | | | |
| L-010 | | | | | | | | | |

---

## Section M — Evaluation Factors

| Req ID | Section M Ref | Factor / Subfactor | Weight | Proposal Response Location | Strength / Risk | Gold Review | Notes |
|--------|---------------|-------------------|--------|---------------------------|-----------------|-------------|-------|
| M-001 | M.2.1 | Technical Approach — Understanding of PWS | 30% | Tech §3.1–3.4 | | | |
| M-002 | M.2.2 | Technical Approach — Management Plan | 20% | Tech §4.1–4.6 | | | |
| M-003 | M.3.1 | Past Performance — Relevance | 20% | PP Vol III | | | |
| M-004 | M.3.2 | Past Performance — Quality / Schedule | 10% | PP Vol III | | | |
| M-005 | M.4 | Price / Cost realism | 20% | Price Vol | | | |
| M-006 | | | | | | | |

---

## Section C / PWS Traceability

| PWS Para | Requirement Text (Summary) | Proposal Response | Compliant (Y/N) | Comment |
|----------|---------------------------|-------------------|-----------------|---------|
| C.1.1 | | | | |
| C.1.2 | | | | |
| C.2.1 | | | | |
| C.3.1 | | | | |

---

## Fatal Risk Checklist (Verify Before Submission)

| # | Fatal Risk Item | Verified |
|---|-----------------|----------|
| 1 | All amendments incorporated | ☐ |
| 2 | Page limits met in all volumes | ☐ |
| 3 | File naming convention per Section L | ☐ |
| 4 | Required forms signed by authorized official | ☐ |
| 5 | Submission portal tested; confirmation receipt plan | ☐ |
| 6 | No proprietary data in wrong volume / unmarked | ☐ |

**Contracts Lead Sign-Off:** ____________________ **Date:** __________`,
  },
  {
    id: "indirect-rate-calculation",
    title: "Indirect Rate Calculation Spreadsheet",
    description:
      "Text-table template for computing fringe, overhead, and G&A rates with loaded labor rate example.",
    content: `# Indirect Rate Calculation Worksheet

**Contractor Name:** ____________________  
**Fiscal Year:** ____________________  
**Prepared By:** ____________________  
**Date:** ____________________  
**Purpose:** ☐ Provisional Billing ☐ Forward Pricing ☐ ICS Schedule H

---

## Step 1 — Fringe Pool

| Account / Description | GL Account | Amount ($) |
|-----------------------|------------|------------|
| Employer FICA / Medicare | | |
| FUTA / SUI | | |
| Health insurance (employer share) | | |
| Dental / vision (employer share) | | |
| 401(k) match | | |
| Paid leave (PTO accrual) | | |
| Worker's compensation | | |
| Employee stock / other fringe | | |
| **Less:** Unallowable fringe items | | ( ) |
| **Total Fringe Pool (A)** | | **$__________** |

**Fringe Allocation Base:** Direct Labor (excluding subcontracts) = **$__________ (B)**  
**Fringe Rate (A ÷ B):** **__________%**

---

## Step 2 — Overhead Pool

| Account / Description | GL Account | Amount ($) |
|-----------------------|------------|------------|
| Facility rent / depreciation | | |
| Utilities (allocable portion) | | |
| Indirect supervision | | |
| Indirect engineering / PM support | | |
| Office supplies (indirect) | | |
| IT infrastructure (indirect) | | |
| Depreciation — indirect assets | | |
| **Less:** Unallowable OH items | | ( ) |
| **Total Overhead Pool (C)** | | **$__________** |

**Overhead Allocation Base:** Direct Labor + Fringe = **$__________ (D)**  
**Overhead Rate (C ÷ D):** **__________%**

---

## Step 3 — G&A Pool

| Account / Description | GL Account | Amount ($) |
|-----------------------|------------|------------|
| Executive management | | |
| Finance / accounting | | |
| Legal (non-billable) | | |
| HR / recruiting | | |
| Bid & proposal (unbillable portion) | | |
| Corporate insurance | | |
| **Less:** Unallowable G&A items | | ( ) |
| **Total G&A Pool (E)** | | **$__________** |

**G&A Allocation Base (Total Cost Input):**

| Base Component | Amount ($) |
|----------------|------------|
| Direct Labor + Fringe | |
| Overhead | |
| ODCs (excluding subs) | |
| Subcontractors (if in base per policy) | |
| **Total G&A Base (F)** | **$__________** |

**G&A Rate (E ÷ F):** **__________%**

---

## Step 4 — Loaded Labor Rate Example

| Element | Rate / Amount |
|---------|---------------|
| Direct Labor Rate (Grade ___, Step ___) | $________ / hr |
| × Fringe (___%) | $________ / hr |
| = Subtotal after Fringe | $________ / hr |
| × Overhead (___%) | $________ / hr |
| = Subtotal after OH | $________ / hr |
| × G&A (___%) | $________ / hr |
| **Fully Loaded Labor Rate** | **$________ / hr** |

---

## Step 5 — Reconciliation

| Check | Amount ($) | Notes |
|-------|------------|-------|
| Total indirect pools (A + C + E) | | |
| Tie to Schedule H / trial balance | | |
| Variance | | Explain if > 0.5% |

**Finance Review:** ____________________ **Contracts Review:** ____________________ **Date:** __________`,
  },
  {
    id: "subcontract-flowdown-checklist",
    title: "Subcontract Flow-Down Clause Checklist",
    description:
      "Prime contractor checklist for mandatory FAR/DFARS clause flow-down to subcontractors by contract type and value.",
    content: `# Subcontract Flow-Down Clause Checklist

**Prime Contract Number:** ____________________  
**Prime Contract Type:** ____________________  
**Subcontractor Name:** ____________________  
**Subcontract Number:** ____________________  
**Subcontract Value:** $____________________  
**Subcontract Type:** ____________________  
**Contracts Manager:** ____________________  
**Review Date:** ____________________

---

## Instructions

Mark each clause: **FD** = Full Flow-Down required | **AP** = Applicable terms only | **NA** = Not applicable | **CO** = Custom / agency-specific

Verify clause text, alternates, and fill-ins match prime contract. Document deviations requiring CO approval.

---

## Mandatory FAR Clauses (Typical)

| Clause | Title | Required? | Flow-Down | Alternate / Fill-In Verified | Sub Acknowledged |
|--------|-------|-----------|-----------|------------------------------|------------------|
| 52.203-13 | Contractor Code of Business Ethics | If prime included | AP (>$500K sub) | | ☐ |
| 52.203-17 | Contractor Employee Whistleblower Rights | If prime included | FD | | ☐ |
| 52.204-21 | Basic Safeguarding of Covered Contractor IT | If prime included | FD | | ☐ |
| 52.219-8 | Utilization of Small Business Concerns | If prime included | FD (>$750K sub) | | ☐ |
| 52.222-26 | Equal Opportunity | If prime included | FD | | ☐ |
| 52.222-36 | Equal Opportunity for Workers with Disabilities | If prime included | FD | | ☐ |
| 52.222-50 | Combating Trafficking in Persons | If prime included | FD | | ☐ |
| 52.223-18 | Encouraging Contractor Policies to Ban Texting | If prime included | FD | | ☐ |
| 52.225-13 | Restrictions on Certain Foreign Purchases | If prime included | FD | | ☐ |
| 52.232-40 | Providing Accelerated Payments to Small Business Subs | If prime included | FD | | ☐ |
| 52.244-6 | Subcontracts for Commercial Products | If prime included | AP | | ☐ |

---

## DFARS Clauses (DoD Contracts — If in Prime)

| Clause | Title | Required? | Flow-Down | Notes | Sub Acknowledged |
|--------|-------|-----------|-----------|-------|------------------|
| 252.204-7012 | Safeguarding Covered Defense Information / CUI | If prime included | FD to subs handling CDI | CMMC level: _____ | ☐ |
| 252.204-7019 | Notice of NIST SP 800-171 DoD Assessment | If prime included | FD as applicable | | ☐ |
| 252.225-7001 | Buy American — Balance of Payments | If prime included | FD | | ☐ |
| 252.225-7048 | Export Controls | If prime included | FD | | ☐ |
| 252.242-7006 | Accounting System Administration | If prime included | AP to cost-type subs | | ☐ |
| 252.246-7007 | Counterfeit Electronic Part Detection | If prime included | FD | | ☐ |

---

## Subcontract-Specific Compliance

| Item | Status | Notes |
|------|--------|-------|
| Limitation on subcontracting (if prime is small business set-aside) | ☐ Verified | |
| TINA / certified cost data flow-down (if prime required data from sub) | ☐ Verified | |
| Security classification / DD 254 requirements | ☐ Verified | |
| Insurance levels match or exceed prime requirements | ☐ Verified | |
| Payment terms comply with 52.232-40 (small business subs) | ☐ Verified | |
| IP / data rights flow-down per prime Section H | ☐ Verified | |
| OCI representation from subcontractor | ☐ Verified | |
| SAM.gov active registration confirmed | ☐ Verified | |

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Contracts Manager | | | |
| Subcontract Administrator | | | |
| Legal Review (if deviations) | | | |

**Deviation Log (if any):**

| Clause | Deviation Description | CO Approval (Y/N) | Approval Date |
|--------|----------------------|-------------------|---------------|
| | | | |`,
  },
  {
    id: "contract-kickoff-agenda",
    title: "Contract Kickoff Meeting Agenda",
    description:
      "Structured agenda for internal and government contract kickoff meetings covering roles, compliance, and performance baseline.",
    content: `# Contract Kickoff Meeting Agenda

**Contract Title:** ____________________  
**Contract Number:** ____________________  
**Meeting Type:** ☐ Internal Kickoff ☐ Government Kickoff ☐ Combined  
**Date / Time:** ____________________  
**Location / Teams Link:** ____________________  
**Facilitator:** ____________________  
**Note Taker:** ____________________

---

## Attendees

| Name | Role | Organization | Email |
|------|------|--------------|-------|
| | Contracting Officer (KO) | Government | |
| | Contracting Officer's Representative (COR) | Government | |
| | Contracts Manager | Prime | |
| | Program Manager | Prime | |
| | Finance / Billing Lead | Prime | |
| | Security Officer (if applicable) | Prime | |
| | Subcontract Manager (if applicable) | Prime | |
| | | | |

---

## Agenda (90 Minutes — Adjust as Needed)

### 1. Welcome and Introductions (10 min)
- Round-robin: name, role, contract responsibility
- Meeting objectives and ground rules

### 2. Contract Overview (15 min)
- Contract type, total value, funded amount at award
- Period of performance (base + options)
- CLIN structure and funding profile
- Key deliverables and milestones
- Place of performance and travel expectations

### 3. Roles and Communication (10 min)
- KO, COR, and contractor PM primary contacts
- Communication protocol (email, ticketing, status meetings)
- Modification and change request process
- Escalation path for disputes

### 4. Technical and Performance Requirements (15 min)
- PWS / SOW walkthrough — critical requirements highlighted
- CDRLs: delivery schedule, format, acceptance criteria
- Quality standards and inspection procedures
- Transition plan (if applicable)

### 5. Administrative and Compliance (20 min)
- Invoicing method (WAWF, IPP, SF-1034) and frequency
- Labor categories, rates, and timekeeping requirements
- ODC, travel, and fee billing rules
- Security: clearance levels, CUI / CMMC, facility requirements
- Required reports and government property (if any)
- Small business subcontracting plan obligations (if applicable)
- Ethics, OCI, and FAR 52.203-13 awareness

### 6. Risk Review and Open Items (10 min)
- Top five performance risks identified
- Assumptions requiring government clarification
- Open action items with owners and due dates

### 7. Next Steps and Close (10 min)
- Confirm recurring meeting cadence
- Distribution of kickoff notes and action item log
- Target date for sub kickoffs (if prime)

---

## Action Item Log

| # | Action Item | Owner | Due Date | Status |
|---|-------------|-------|----------|--------|
| 1 | | | | Open |
| 2 | | | | Open |
| 3 | | | | Open |
| 4 | | | | Open |
| 5 | | | | Open |

---

## Post-Meeting Distribution

- [ ] Kickoff minutes sent within 5 business days
- [ ] Contract file updated with attendee contacts
- [ ] ERP / charge codes activated
- [ ] Internal compliance checklist initiated
- [ ] Subcontract flow-down initiated (if applicable)

**Approved by Contracts Manager:** ____________________ **Date:** __________`,
  },
  {
    id: "dcaa-audit-preparation",
    title: "DCAA Audit Preparation Checklist",
    description:
      "Pre-audit readiness checklist for DCAA proposal, accounting system, incurred cost, and billing rate audits.",
    content: `# DCAA Audit Preparation Checklist

**Contractor Name:** ____________________  
**CAGE Code:** ____________________  
**Audit Type:** ☐ Pre-Award Accounting System ☐ Forward Pricing ☐ Incurred Cost ☐ Billing Rates ☐ Floor Check  
**Fiscal Year / Proposal Ref:** ____________________  
**Auditor Name / Office:** ____________________  
**Expected Audit Start:** ____________________  
**Compliance Lead:** ____________________  
**Contracts Lead:** ____________________

---

## A. General Audit Readiness

| # | Item | Ready (Y/N) | Location / Owner | Notes |
|---|------|-------------|------------------|-------|
| A.1 | Single point of contact assigned for audit coordination | | | |
| A.2 | Conference room / virtual access scheduled for entrance conference | | | |
| A.3 | Document request log established | | | |
| A.4 | Legal / executive notified of audit commencement | | | |
| A.5 | Staff briefed on auditor interview protocol | | | |

---

## B. Accounting System Adequacy (Pre-Award / Form 1107)

| # | DCAA Criterion | Ready (Y/N) | Evidence | Notes |
|---|----------------|-------------|----------|-------|
| B.1 | Proper segregation of direct costs from indirect costs | | Chart of accounts, sample JEs | |
| B.2 | Accumulation of costs by contract line item | | Job cost report by CLIN | |
| B.3 | Timekeeping — daily recording, employee signature, supervisor approval | | Sample timesheets (4 weeks) | |
| B.4 | Labor distribution reconciles to payroll | | Labor distribution report | |
| B.5 | Interim determination of costs (monthly close) | | Monthly job cost close calendar | |
| B.6 | Exclusion of unallowable costs | | Unallowable cost account policy | |
| B.7 | Identification of costs by contract and organizational unit | | Org structure + charge codes | |
| B.8 | Consistent cost accounting practices | | Disclosure statement (if CAS) | |

---

## C. Forward Pricing / Proposal Audit

| # | Item | Ready (Y/N) | Reference | Notes |
|---|------|-------------|-----------|-------|
| C.1 | Proposal adequacy checklist completed per DCAA guidance | | | |
| C.2 | BOE backup for labor hours, rates, ODCs, subs | | | |
| C.3 | Subcontractor quotes with scope alignment | | | |
| C.4 | TINA certification / exception documentation (if applicable) | | | |
| C.5 | Forward pricing rate letter or rate build-up schedules | | | |
| C.6 | Escalation / trend analysis support | | | |

---

## D. Incurred Cost Submission (ICS)

| # | Item | Ready (Y/N) | Reference | Notes |
|---|------|-------------|-----------|-------|
| D.1 | ICS submitted via ICE portal by deadline | | ICE confirmation | |
| D.2 | Schedule H — indirect expense pools reconciled to GL | | | |
| D.3 | Contract listing complete (all subject contracts) | | | |
| D.4 | Subcontractor incurred cost data collected | | | |
| D.5 | Unallowable costs identified and excluded | | | |
| D.6 | Claimed vs. billed reconciliation by contract | | | |
| D.7 | Prior year audit findings resolved or status documented | | | |

---

## E. Billing Rates and Invoicing

| # | Item | Ready (Y/N) | Reference | Notes |
|---|------|-------------|-----------|-------|
| E.1 | Provisional billing rate letter current | | | |
| E.2 | Invoices tie to contract CLINs and funded amounts | | Sample 3 invoices | |
| E.3 | Fee calculation correct for contract type | | | |
| E.4 | Progress payment status reconciled (if FFP) | | | |

---

## F. Interview and Walkthrough Preparation

| # | Topic | Presenter | Materials Ready |
|---|-------|-----------|-----------------|
| F.1 | Timekeeping process walkthrough | HR / Payroll | Policy, system demo |
| F.2 | Billing and invoice approval workflow | Finance | Flowchart, samples |
| F.3 | Purchasing and subcontract administration | Procurement | PO samples, sub files |
| F.4 | Contracts administration and mods | Contracts | Mod log, status report |

---

## G. Common Finding Prevention

| Risk Area | Preventive Control Verified | Y/N |
|-----------|----------------------------|-----|
| Cross-charging between contracts | | |
| Billing ahead of funding | | |
| Charging outside POP | | |
| Unallowable costs in pools | | |
| Unsupported ODCs | | |
| Sub invoices without deliverable acceptance | | |

**Exit Conference Date:** __________ **Audit Report Expected:** __________  
**Compliance Lead Sign-Off:** ____________________ **Date:** __________`,
  },
  {
    id: "incurred-cost-submission-schedule",
    title: "Incurred Cost Submission Schedule Template",
    description:
      "Fiscal year ICS preparation timeline with milestones from year-end close through DCAA ICE portal submission.",
    content: `# Incurred Cost Submission (ICS) Schedule

**Contractor Name:** ____________________  
**Fiscal Year End:** ____________________  
**ICS Due Date (6 months after FYE):** ____________________  
**DCAA Cognizant Office:** ____________________  
**ICS Coordinator:** ____________________  
**Contracts Lead:** ____________________  
**Finance Lead:** ____________________

---

## Master Timeline

| Milestone | Target Date | Owner | Status | Notes |
|-----------|-------------|-------|--------|-------|
| **M1** Fiscal year-end close initiated | FYE + 0 days | Controller | ☐ | Hard close calendar published |
| **M2** Trial balance and GL reconciliation complete | FYE + 30 days | Accounting | ☐ | All JE entries posted |
| **M3** Direct cost accumulation by contract verified | FYE + 35 days | Job Cost Accountant | ☐ | Tie to contracts database |
| **M4** Indirect pool compilation (Fringe, OH, G&A) | FYE + 40 days | Cost Accountant | ☐ | Unallowables removed |
| **M5** Schedule H draft — pool costs and rates | FYE + 45 days | Cost Accountant | ☐ | Rate calc workpapers |
| **M6** Subcontractor ICS data collection complete | FYE + 50 days | Subcontracts | ☐ | See sub tracker below |
| **M7** Claimed vs. billed reconciliation by contract | FYE + 55 days | Contracts / Finance | ☐ | Resolve variances > $________ |
| **M8** Management review and executive sign-off | FYE + 60 days | CFO | ☐ | |
| **M9** ICE portal submission | FYE + 150 days (or earlier) | ICS Coordinator | ☐ | Target: 30 days before deadline |
| **M10** DCAA audit entrance conference | TBD post-submission | ICS Coordinator | ☐ | |
| **M11** Audit response to questioned costs | Per audit schedule | Finance / Contracts | ☐ | |
| **M12** Final rate agreement executed | TBD | CFO / Contracts | ☐ | |

---

## Contract Listing (ICS Subject Contracts)

| Contract # | Agency | Type | FY Costs ($) | Cumulative Billed ($) | Sub ICS Required | Included in ICS (Y/N) |
|------------|--------|------|--------------|----------------------|------------------|----------------------|
| | | | | | ☐ | ☐ |
| | | | | | ☐ | ☐ |
| | | | | | ☐ | ☐ |
| | | | | | ☐ | ☐ |
| | | | | | ☐ | ☐ |

**Total FY Subject Contract Costs:** $____________________

---

## Subcontractor ICS Tracker

| Subcontractor | Sub # | FY Charges to Prime ($) | ICS Received (Y/N) | Date Received | Audited (Y/N) | Follow-Up Owner |
|---------------|-------|-------------------------|-------------------|---------------|---------------|-----------------|
| | | | | | | |
| | | | | | | |
| | | | | | | |

---

## Rate Reconciliation Summary

| Pool | FY Pool Cost ($) | Allocation Base ($) | Computed Rate (%) | Prior Provisional Rate (%) | Variance (%) |
|------|------------------|---------------------|-------------------|---------------------------|--------------|
| Fringe | | | | | |
| Overhead | | | | | |
| G&A | | | | | |

**Variance Explanation (if any rate change > 2%):**

_______________________________________________________________

---

## ICE Portal Checklist

| # | Item | Complete (Y/N) |
|---|------|----------------|
| 1 | ICE account credentials verified | ☐ |
| 2 | Prior year submission accessible for reference | ☐ |
| 3 | All schedules uploaded and validated | ☐ |
| 4 | Submission confirmation saved to audit file | ☐ |
| 5 | CO and DCAA auditor notified of submission | ☐ |

**ICS Certifying Official:** ____________________ **Submission Date:** __________`,
  },
  {
    id: "bid-no-bid-framework",
    title: "Bid/No-Bid Decision Framework Worksheet",
    description:
      "Weighted scorecard for capture teams to document bid/no-bid decisions before committing proposal resources.",
    content: `# Bid / No-Bid Decision Framework

**Opportunity Name:** ____________________  
**Solicitation / Forecast ID:** ____________________  
**Estimated Contract Value:** $____________________  
**Customer / Agency:** ____________________  
**Incumbent:** ____________________  
**Proposal Due Date:** ____________________  
**Decision Date:** ____________________  
**Capture Manager:** ____________________  
**Contracts Manager:** ____________________

---

## Decision Thresholds

| Total Weighted Score | Recommendation |
|---------------------|----------------|
| 4.0 – 5.0 | **BID** — Approve pursuit; allocate proposal budget |
| 3.0 – 3.9 | **CONDITIONAL BID** — Pursue only if identified gaps close within _____ days |
| 2.0 – 2.9 | **NO-BID** — Decline unless strategic override approved by __________ |
| Below 2.0 | **NO-BID** — Document and archive |

---

## Scoring Criteria (Rate 1–5: 1 = Poor, 5 = Excellent)

| # | Factor | Weight | Score (1–5) | Weighted Score | Evidence / Notes |
|---|--------|--------|-------------|----------------|------------------|
| 1 | Customer relationship and intel quality | 15% | | | |
| 2 | Technical / mission fit with core capabilities | 20% | | | |
| 3 | Competitive position vs. incumbent and competitors | 15% | | | |
| 4 | Past performance relevance and CPARS strength | 15% | | | |
| 5 | Price to win / cost competitiveness | 15% | | | |
| 6 | Compliance risk (set-aside, clearance, CMMC, flow-down) | 10% | | | |
| 7 | Staffing availability and key personnel readiness | 5% | | | |
| 8 | Profit potential and strategic value | 5% | | | |
| | **TOTAL** | **100%** | | **_______** | |

---

## Compliance Gate (Must Pass — Any Fail Triggers No-Bid Unless Waived)

| Gate | Pass (Y/N) | Issue Description | Mitigation |
|------|------------|-------------------|------------|
| Eligible for set-aside / NAICS size standard | | | |
| Required facility clearance achievable by proposal date | | | |
| CMMC / cyber level achievable at proposed cost | | | |
| No uncured OCI blocking pursuit | | | |
| Teaming agreements feasible for gaps | | | |
| Proposal budget available ($________ estimated) | | | |

---

## Competitive Landscape

| Competitor | Strengths | Weaknesses | Intelligence Source |
|------------|-----------|------------|---------------------|
| Incumbent: | | | |
| Competitor 2: | | | |
| Competitor 3: | | | |
| **Our discriminators:** | | | |

---

## Resource Estimate

| Resource | Estimate | Notes |
|----------|----------|-------|
| Proposal budget ($) | | |
| Capture labor (hours) | | |
| Proposal labor (hours) | | |
| Travel / ODC ($) | | |
| Sub/teaming cost in price ($) | | |
| Target PWin (%) | | |

---

## Decision Record

**Recommendation:** ☐ BID ☐ CONDITIONAL BID ☐ NO-BID

**Rationale (3–5 sentences):**

_______________________________________________________________  
_______________________________________________________________  
_______________________________________________________________

| Approver | Role | Signature | Date |
|----------|------|-----------|------|
| | Capture Manager | | |
| | Contracts Manager | | |
| | BD / Executive Sponsor | | |

**If NO-BID:** Notification to pipeline board date: __________  
**If BID:** Proposal kickoff date scheduled: __________`,
  },
  {
    id: "teaming-agreement-checklist",
    title: "Teaming Agreement Key Terms Checklist",
    description:
      "Pre-award teaming agreement term sheet checklist covering roles, exclusivity, IP, and proposal obligations.",
    content: `# Teaming Agreement Key Terms Checklist

**Opportunity:** ____________________  
**Prime Candidate:** ____________________  
**Teaming Partner:** ____________________  
**Estimated Value:** $____________________  
**Anticipated RFP Date:** ____________________  
**Contracts Lead:** ____________________  
**Review Date:** ____________________

---

## 1. Structure and Roles

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Prime / sub relationship defined (prime holds contract) | | |
| Work share by percentage or CLIN | | Prime: ___% / Sub: ___% |
| Partner's scope clearly mapped to PWS sections | | |
| Key personnel identified by party | | |
| Geographic / facility responsibilities | | |
| Set-aside compliance: limitation on subcontracting analyzed | | |

---

## 2. Exclusivity and Term

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Exclusive teaming for this opportunity (Y/N) | | |
| Effective date and termination triggers | | |
| Auto-termination if RFP not released by __________ | | |
| Survival clauses post-termination (confidentiality, IP) | | |
| Non-compete scope if teaming ends (reasonable?) | | Legal review: ☐ |

---

## 3. Proposal Development Obligations

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Proposal cost sharing formula | | Prime: ___% / Sub: ___% |
| Data deliverables and due dates (resumes, PP, pricing, tech) | | |
| Pricing exchange method and TINA responsibilities | | |
| Gate review participation requirements | | |
| Non-compliance remedies if partner misses deadlines | | |
| Agency communications protocol (prime controls) | | |

---

## 4. Pricing and Subcontract Terms

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Subcontract type anticipated (FFP, CPFF, T&M) | | |
| Negotiated rates or not-to-exceed inserted at award | | |
| Flow-down of all mandatory prime clauses acknowledged | | |
| Payment terms (e.g., net 30; small business prompt pay if applicable) | | |
| Subcontract award timeline after prime award | | |

---

## 5. Intellectual Property and Data Rights

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Background IP defined and protected by each party | | |
| Foreground IP ownership for jointly developed items | | |
| Government purpose license implications understood | | |
| DFARS 252.227-7013 / 7014 flow-down reviewed | | |
| Proprietary data marking and handling | | |

---

## 6. Confidentiality and Procurement Integrity

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Mutual NDA or confidentiality section | | |
| Procurement integrity / no protected source selection info | | |
| OCI representations by each party | | |
| Publicity / press release approval | | |

---

## 7. Risk and Dispute Resolution

| Term | Agreed (Y/N) | Details |
|------|--------------|---------|
| Limitation of liability cap | | $________ or ___% of work share |
| Indemnification scope (IP, employee actions, cyber) | | |
| Dispute resolution (negotiation → mediation → jurisdiction) | | |
| Governing law and venue | | |

---

## 8. Signature and Legal Review

| Item | Status |
|------|--------|
| Legal counsel review complete | ☐ |
| Authorized signatories confirmed | ☐ |
| Teaming agreement executed | ☐ Date: __________ |
| Copy filed in capture / contract record | ☐ |

**Contracts Manager:** ____________________ **Legal:** ____________________ **Date:** __________`,
  },
  {
    id: "cpars-response-letter",
    title: "CPARS Response Letter Template",
    description:
      "Contractor response template for addressing less-than-satisfactory CPARS evaluations with corrective action evidence.",
    content: `# CPARS Response Letter Template

---

**[Company Letterhead]**

[Date]

**Via Email / CPARS System**

[Contracting Officer Name]  
[Agency / Contracting Office]  
[Address]

**Subject: Contractor Response to CPARS Evaluation — Contract [Contract Number], Evaluation Period [Start Date] to [End Date]**

Dear [Contracting Officer Last Name / "Contracting Officer"]:

[Company Name] respectfully submits this response to the Contractor Performance Assessment Reporting System (CPARS) evaluation for Contract **[Contract Number]**, **[Contract Title]**, for the period **[Evaluation Period Start]** through **[Evaluation Period End]**.

We appreciate the government's assessment and the opportunity to provide additional context. We take performance feedback seriously and are committed to continuous improvement on **[Agency Name]** programs.

---

## 1. Summary of Evaluation Received

We understand the evaluation reflected the following overall ratings:

| Evaluation Area | Rating Received |
|-----------------|-----------------|
| Quality | [Rating] |
| Schedule | [Rating] |
| Cost Control | [Rating] |
| Management | [Rating] |
| Small Business Subcontracting | [Rating / N/A] |
| **Overall** | **[Overall Rating]** |

---

## 2. Contractor Response by Factor

### Quality — [Rating Received]

**Government Concern (summarize):**  
[Brief summary of the CPARS narrative concern, e.g., "Deliverable revisions required on Reports X and Y."]

**Contractor Context:**  
[Provide factual context: acceptance dates, COR approvals, root cause analysis. Example: "Report X was accepted without revision on [date] per COR email attached as Exhibit A. Report Y required one revision cycle due to a scope clarification issued via Mod P00003 on [date]; final version accepted [date]."]

**Corrective Action Taken:**  
[Describe process improvements: added QA checkpoint, revised template, assigned dedicated reviewer, etc.]

---

### Schedule — [Rating Received]

**Government Concern (summarize):**  
[Summary]

**Contractor Context:**  
[Explain schedule performance data: milestones met, delays attributable to government-caused factors if applicable and documented, recovery plans executed.]

**Corrective Action Taken:**  
[Describe schedule management improvements: integrated master schedule updates, weekly risk reviews, etc.]

---

### Cost Control — [Rating Received]

**Government Concern (summarize):**  
[Summary]

**Contractor Context:**  
[Provide burn rate data, EAC vs. budget, fee performance, funding status.]

**Corrective Action Taken:**  
[Describe cost control measures implemented.]

---

### Management — [Rating Received]

**Government Concern (summarize):**  
[Summary]

**Contractor Context:**  
[Describe communication cadence, staffing stability, issue resolution examples, COR working relationship.]

**Corrective Action Taken:**  
[Describe management changes or process enhancements.]

---

## 3. Supporting Evidence (Attachments)

| Exhibit | Description |
|---------|-------------|
| A | COR acceptance emails for deliverables cited in evaluation |
| B | Monthly status report excerpts showing schedule adherence |
| C | Corrective action plan (dated [date]) |
| D | [Additional exhibits as applicable] |

---

## 4. Request

Based on the additional information and evidence provided, we respectfully request that the CPARS evaluation be **reviewed and revised** to reflect:

- [Specific requested change, e.g., "Quality rating revised to Satisfactory based on documented acceptance of all CDRLs within the evaluation period."]

- [Additional requests as applicable]

We welcome the opportunity to discuss this response at your convenience. [Program Manager Name] ([email], [phone]) and [Contracts Manager Name] ([email], [phone]) are available for a meeting.

Thank you for your consideration and for the partnership on this important mission.

Respectfully,

**[Name]**  
**[Title]**  
**[Company Name]**  
**[Email | Phone]**

---

## Internal Use Only — Before Sending

| Checklist Item | Verified |
|----------------|----------|
| Factual statements supported by contract file evidence | ☐ |
| No argumentative or disparaging tone | ☐ |
| COR consulted internally (relationship preserved) | ☐ |
| Legal / executive review if rating affects pending competitions | ☐ |
| Copy uploaded to contract file and CPARS system per agency process | ☐ |`,
  },
];
