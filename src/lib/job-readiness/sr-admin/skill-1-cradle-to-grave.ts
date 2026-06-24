import { exercise, lesson, q } from "./content-helpers";
import type { SrAdminPhase, SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-1" as const;

const phase1Lessons = [
  lesson(
    "sr1-l1-pre-award",
    SKILL_ID,
    "Your Role in the Pre-Award Phase",
    [
      {
        heading: "Reading Solicitations as a Contracts Professional",
        content:
          "Before your company submits a proposal, the contracts administrator is the compliance gatekeeper. Read the solicitation in this order: Section L (Instructions) to understand format and page limits; Section M (Evaluation) to know what drives the win; Section C (PWS/SOW) for scope boundaries; Section B (Pricing) for CLIN structure and contract type; Section H (Special Requirements) for unusual obligations; Section I (Clauses) for mandatory and special terms; Section J (Attachments) for detailed requirements, security specs, and CDRLs. Your job is not to write the technical volume — it is to ensure the proposal team understands every contractual obligation before committing company resources.",
      },
      {
        heading: "Building a Compliance Matrix in Excel",
        content:
          "A compliance matrix maps every Section L requirement to a proposal page or volume location. Columns: Requirement ID (L.1, L.2…), Requirement Text (verbatim from Section L), Proposal Location (Volume/Page), Compliance Status (Compliant/Partial/Non-Compliant), Notes. Build it before writing begins — not after. Flag any requirement the team cannot meet; that drives a bid/no-bid decision or a pre-award question. For best-value evaluations, missing a Section L requirement can be a fatal flaw even if your technical approach is superior.",
      },
      {
        heading: "Contract Risk Review Before Proposal Submission",
        content:
          "Scan for these red flags before the proposal goes out: (1) Unusual clauses creating unlimited liability or broad indemnification; (2) Missing standard FAR clauses that should be present for the contract type; (3) Ambiguous scope language like 'and other tasks as directed' without a changes clause limitation; (4) Aggressive inspection and acceptance terms with subjective criteria; (5) Problematic IP clauses granting unlimited rights to government or prime; (6) Onerous liquidated damages provisions without corresponding schedule flexibility. Document each finding in a risk memo for management and legal review.",
      },
      {
        heading: "Supporting the Proposal Team",
        content:
          "Your pre-award checklist: Review representations and certifications (Section K) for accuracy — false certifications trigger False Claims Act exposure. Verify SAM.gov registration is active with correct NAICS, size standard, and reps/certs current. Confirm set-aside eligibility matches the solicitation (SDVOSB, 8(a), etc.). Review teaming agreement workshare against FAR 52.219-14 limitation on subcontracting. Review subcontractor proposals for flow-down compliance and pricing consistency. Review cost/price volume against Section L format requirements — wrong format can render the proposal non-responsive.",
      },
      {
        heading: "Pre-Award Questions: How, What, and What Not to Ask",
        content:
          "Submit questions through the designated portal before the deadline stated in the solicitation. Ask clarifying questions about ambiguous requirements, conflicting clauses, or missing information. Do not ask questions that reveal your proprietary approach, pricing strategy, or teaming structure. Do not ask the government to redesign the acquisition. Frame questions neutrally: 'Section C, paragraph 3.2.1 references deliverable X but Attachment 2 lists deliverable Y. Please clarify which deliverable applies.' Document all Q&A responses — they become part of the solicitation and bind both parties at award.",
      },
    ],
    [
      q(
        "sr1-p1-q1",
        "In what order should a contracts administrator prioritize solicitation sections?",
        ["B → C → H → I → J", "L → M → C → B → H → I → J", "I → A → M → L", "J → H → C → B"],
        1,
        "Section L (instructions) and M (evaluation) define compliance and win strategy; then C, B, H, I, J define scope, pricing, and obligations."
      ),
      q(
        "sr1-p1-q2",
        "What is the primary purpose of a compliance matrix?",
        [
          "To track subcontractor invoices",
          "To map Section L requirements to proposal locations ensuring full compliance",
          "To calculate indirect rates",
          "To document CPARS ratings",
        ],
        1,
        "The compliance matrix ensures every Section L requirement is addressed in the proposal — a non-responsive proposal can be rejected regardless of technical merit."
      ),
      q(
        "sr1-p1-q3",
        "Which is a pre-award red flag requiring escalation?",
        [
          "Standard FAR 52.233-1 Disputes clause",
          "Unlimited data rights grant to the government without compensation",
          "Net-30 payment terms",
          "FFP contract type",
        ],
        1,
        "Broad IP/data rights grants without compensation create long-term competitive harm and should be flagged before proposal submission."
      ),
      q(
        "sr1-p1-q4",
        "False representations in Section K can trigger:",
        [
          "Automatic contract award",
          "False Claims Act liability and potential debarment",
          "Higher CPARS ratings",
          "Expedited payment",
        ],
        1,
        "False certifications in Section K create False Claims Act exposure — every representation must be verified before submission."
      ),
      q(
        "sr1-p1-q5",
        "When submitting pre-award questions, you should NOT:",
        [
          "Ask for clarification of conflicting requirements",
          "Reveal your proprietary technical approach or pricing strategy",
          "Request clarification of ambiguous deliverable dates",
          "Ask about missing attachment references",
        ],
        1,
        "Pre-award questions become public record. Never reveal competitive strategy, pricing, or proprietary approaches."
      ),
    ],
    {
      phaseId: "sr1-phase-1",
      exercise: exercise(
        "compliance-matrix",
        "RFP Compliance Matrix and Risk Identification",
        "Review sample RFP W912HQ-24-R-0087 (IT Support Services, SDVOSB set-aside, $4.2M ceiling, 1 base + 4 option years). Identify 5 compliance risks and build a compliance matrix mapping Section L requirements to proposal locations.",
        {
          rfpId: "W912HQ-24-R-0087",
          risks: [
            {
              id: "risk-1",
              category: "scope",
              finding:
                "Section C paragraph 4.3 requires 'all tasks as directed by the COR' without a corresponding changes clause limitation in Section I.",
              severity: "red",
              action: "Submit pre-award question requesting clarification; flag for legal review.",
            },
            {
              id: "risk-2",
              category: "ip",
              finding:
                "Section H includes DFARS 252.227-7020 requiring unlimited rights to all software developed under the contract.",
              severity: "red",
              action: "Evaluate data rights assertion strategy; escalate to legal before bid decision.",
            },
            {
              id: "risk-3",
              category: "clauses",
              finding:
                "Section I missing FAR 52.243-1 Changes clause for this FFP contract.",
              severity: "yellow",
              action: "Submit pre-award question; note as negotiation item if awarded.",
            },
            {
              id: "risk-4",
              category: "acceptance",
              finding:
                "Section C acceptance criteria states 'government satisfaction' without measurable performance standards.",
              severity: "yellow",
              action: "Propose measurable acceptance criteria in technical volume; flag subjective acceptance risk.",
            },
            {
              id: "risk-5",
              category: "liquidated-damages",
              finding:
                "Section H includes $2,500/day liquidated damages for schedule delays without force majeure carve-out.",
              severity: "red",
              action: "Quantify schedule risk; propose LD cap or force majeure exception in pre-award question.",
            },
          ],
          matrixRows: [
            { reqId: "L.3.1", requirement: "Technical Volume — max 30 pages, 12pt font", location: "Vol II, pp. 1-28", status: "Compliant" },
            { reqId: "L.4.2", requirement: "Past Performance — 3 references within 5 years", location: "Vol III, pp. 1-12", status: "Compliant" },
            { reqId: "L.5.1", requirement: "Price Volume — CLIN-level pricing per Section B", location: "Vol IV, pp. 1-8", status: "Compliant" },
            { reqId: "L.6.3", requirement: "Subcontracting Plan per FAR 19.704", location: "Vol I, Attachment A", status: "Compliant" },
            { reqId: "L.7.1", requirement: "Signed SF 33 or cover letter with authorized signatory", location: "Vol I, p. 1", status: "Compliant" },
          ],
        }
      ),
    }
  ),
];

const phase2Lessons = [
  lesson(
    "sr1-l2-award-72hr",
    SKILL_ID,
    "What to Do in the First 72 Hours After Award",
    [
      {
        heading: "Read the Contract Completely Before Doing Anything Else",
        content:
          "When award notification arrives, resist the urge to start work immediately. Read the entire contract — Sections A through M and all attachments — before directing any performance. Compare the awarded contract to your proposal: did anything change? Are there new clauses, different CLIN values, or modified POP dates? Courts apply the 'duty to read' doctrine — you are bound by what you signed regardless of what you proposed. Document any discrepancies between proposal and award immediately.",
      },
      {
        heading: "Build the Contract Brief and Set Up the File",
        content:
          "Within 24 hours: Build a contract brief (see Skill 2) summarizing scope, financials, key clauses, deliverables, and risk flags for internal stakeholders. Identify all deliverables and due dates from Section C and CDRLs. Identify all reporting requirements (monthly status, quarterly business reviews, EVM reports). Set up the contract file per FAR 4.803 — electronic folder with standard subfolders: Award Documents, Modifications, Correspondence, Invoices, Deliverables, Subcontracts, Compliance. Notify PM, finance, HR, security, and legal of the award with the contract brief attached.",
      },
      {
        heading: "Kickoff, Subcontracts, and CLM Setup",
        content:
          "Schedule the contract kickoff meeting within 5 business days of award (see next lesson). If subcontracts are required, issue them within 72 hours — subs cannot perform until their subcontract is executed and flow-down clauses are incorporated. Load the contract into your CLM system with all CLINs, funded values, POP dates, and key personnel. Set calendar reminders for: first invoice date, first deliverable due date, option exercise window, limitation of funds threshold (cost-type), and SAM.gov renewal. The first 72 hours set the tone for the entire contract — sloppy setup creates audit findings years later.",
      },
    ],
    [
      q(
        "sr1-p2a-q1",
        "What is the first action after receiving a contract award?",
        [
          "Issue subcontracts immediately",
          "Read the entire contract and compare to proposal",
          "Submit the first invoice",
          "Schedule CPARS review",
        ],
        1,
        "Read the complete awarded contract before directing any work — you are bound by awarded terms under the duty to read doctrine."
      ),
      q(
        "sr1-p2a-q2",
        "Within 72 hours of award, you should:",
        [
          "Wait for the COR to contact you",
          "Build contract brief, set up file, notify stakeholders, schedule kickoff, issue subs",
          "Begin performance without documentation",
          "Submit final invoice",
        ],
        1,
        "The 72-hour window covers file setup, brief creation, stakeholder notification, kickoff scheduling, and subcontract issuance."
      ),
      q(
        "sr1-p2a-q3",
        "The 'duty to read' doctrine means:",
        [
          "Only the KO must read the contract",
          "Contractors are bound by contract terms whether or not they read them",
          "Verbal briefings override written terms",
          "Proposal terms govern if different from award",
        ],
        1,
        "Contractors cannot later claim ignorance of contract terms — the duty to read applies at award."
      ),
      q(
        "sr1-p2a-q4",
        "When should subcontracts be issued after prime award?",
        [
          "After first invoice",
          "Within 72 hours — subs cannot perform without executed subcontract",
          "At contract closeout",
          "Only if the KO requests it",
        ],
        1,
        "Subs need executed subcontracts with flow-down clauses before performing — delay exposes the prime to compliance and performance risk."
      ),
      q(
        "sr1-p2a-q5",
        "What should you compare between proposal and award?",
        [
          "Only the total price",
          "Clauses, CLIN values, POP dates, and any terms that changed from proposal",
          "Only Section C scope",
          "Nothing — award is always identical to proposal",
        ],
        1,
        "Award terms may differ from proposal — identify and document discrepancies immediately."
      ),
    ],
    { phaseId: "sr1-phase-2" }
  ),
  lesson(
    "sr1-l3-kickoff",
    SKILL_ID,
    "Contract Kickoff Meeting",
    [
      {
        heading: "Who Must Attend and What to Cover",
        content:
          "Required attendees: Contracting Officer (or designee), COR, your PM, contracts administrator, legal (if unusual clauses), finance, key personnel named in the contract, and major subcontractor representatives. Cover: scope of work and PWS walkthrough, period of performance and milestones, all deliverables with due dates, reporting requirements and formats, invoicing procedures (WAWF or agency system), security and clearance requirements, key personnel and any approval processes, subcontracting plan obligations, and points of contact for all parties.",
      },
      {
        heading: "Documentation and the 5-Day Rule",
        content:
          "Distribute kickoff meeting minutes within 5 business days to all attendees and file in the contract folder. Minutes must document: attendees, scope confirmed, deliverable schedule agreed, reporting requirements understood, invoicing process confirmed, any open issues or action items with owners and due dates. If the COR or KO made any statements that could affect scope or schedule, document them verbatim. Undocumented COR direction is the #1 source of constructive change disputes.",
      },
      {
        heading: "When the COR Tries to Expand Scope at Kickoff",
        content:
          "This happens frequently. If the COR says 'we also need you to do X' and X is not in the PWS, respond professionally: 'That sounds like it may be outside our current scope. Let me document this and work with the KO on whether a modification is needed before we proceed.' Never agree verbally to out-of-scope work — even at kickoff. Document the direction, notify the PM to hold performance, and route a mod request through the KO. Performing out-of-scope work without a bilateral mod is the fastest path to uncompensated effort.",
      },
      {
        heading: "Kickoff Agenda Template",
        content:
          "1. Introductions and roles (5 min) | 2. Contract overview — number, type, value, POP (10 min) | 3. Scope walkthrough — PWS section by section (20 min) | 4. Deliverables and CDRL schedule (10 min) | 5. Reporting and invoicing procedures (10 min) | 6. Security, clearance, and key personnel (10 min) | 7. Subcontracting plan and small business goals (5 min) | 8. Open issues and action items (10 min) | 9. Next steps and points of contact (5 min). Total: 85 minutes. Send agenda 48 hours before the meeting.",
      },
    ],
    [
      q(
        "sr1-p2b-q1",
        "Kickoff meeting minutes must be distributed within:",
        ["24 hours", "5 business days", "30 days", "At closeout"],
        1,
        "Document and distribute kickoff minutes within 5 business days — undocumented COR direction causes constructive change disputes."
      ),
      q(
        "sr1-p2b-q2",
        "If the COR directs out-of-scope work at kickoff, you should:",
        [
          "Agree verbally and start work immediately",
          "Document the direction and route a modification request through the KO before performing",
          "Ignore the direction",
          "Perform the work and submit an REA later",
        ],
        1,
        "Never perform out-of-scope work without a bilateral mod — document, hold performance, and route through the KO."
      ),
      q(
        "sr1-p2b-q3",
        "Which attendee is NOT typically required at kickoff?",
        [
          "COR",
          "Key personnel named in contract",
          "Company cafeteria manager",
          "Major subcontractor representative",
        ],
        2,
        "Kickoff requires CO/COR, PM, contracts admin, finance, key personnel, and major subs — not unrelated staff."
      ),
      q(
        "sr1-p2b-q4",
        "Undocumented COR direction most commonly leads to:",
        [
          "Higher CPARS ratings",
          "Constructive change disputes and uncompensated work",
          "Faster payment",
          "Automatic contract extensions",
        ],
        1,
        "Verbal COR direction without documentation is the primary source of constructive change claims."
      ),
      q(
        "sr1-p2b-q5",
        "The kickoff agenda should be sent:",
        ["At the meeting", "48 hours before the meeting", "After closeout", "Only if the KO requests it"],
        1,
        "Send the agenda 48 hours in advance so all parties can prepare and identify issues."
      ),
    ],
    { phaseId: "sr1-phase-2" }
  ),
];

const phase3Lessons = [
  lesson(
    "sr1-l4-monthly-routine",
    SKILL_ID,
    "Monthly Contract Administration Routine",
    [
      {
        heading: "Week 1: Invoicing, Subcontractor Payments, and Status",
        content:
          "Week 1 of each month: Submit invoices via WAWF or the agency's designated system — late invoices delay cash flow and can trigger CPARS comments. Verify all subcontractor invoices are received, reviewed for allowability and flow-down compliance, and approved. Pay approved subcontractor invoices within 7 days of receiving government payment (Prompt Payment Act flow-down under FAR 52.232-40). Update the contract status report with current funding burn rate, deliverable status, and open actions. Review deliverable due dates for the coming month and alert responsible parties 2 weeks before each due date.",
      },
      {
        heading: "Week 2: COR Check-In and Open Actions",
        content:
          "Week 2: Conduct COR check-in meeting — review performance status, pending deliverables, and any government concerns. Review pending modifications — track status of mods you've requested and mods awaiting your signature. Review outstanding contract actions (OCAs) from the kickoff or prior months. Update the contract brief if anything changed: new mod signed, key personnel change, funding update, or new risk identified. File all correspondence in the contract folder the same day it is sent or received.",
      },
      {
        heading: "Week 3: Funding, Subcontractor Performance, and Options",
        content:
          "Week 3: Review funding status — on cost-type contracts, calculate percentage of funds expended against FAR 52.232-22 limitation of funds threshold (typically 75%). If approaching threshold, prepare written notification to the KO. Review subcontractor performance — are subs meeting deliverables and quality standards? Flag scope issues to the PM in writing. Check option period timing — are you within the exercise window? If option exercise is 60 days away, notify the COR and KO proactively with performance summary.",
      },
      {
        heading: "Week 4: Reporting and Forward Planning",
        content:
          "Week 4: Submit monthly status report (due date varies by contract — typically last business day of month). Review CPARS interim feedback if the government provides it. Prepare for next month: update compliance calendar, refresh deliverable tracker, and identify any contracts in the portfolio needing escalation. This weekly rhythm prevents the 'fire drill' pattern that defines junior administrators — senior administrators run the contract on a predictable schedule.",
      },
    ],
    [
      q(
        "sr1-p3a-q1",
        "Under the Prompt Payment Act flow-down, prime contractors must pay subs within:",
        ["30 days of invoice", "7 days of receiving government payment", "90 days", "At closeout only"],
        1,
        "FAR 52.232-40 requires primes to pay subs within 7 days of receiving government payment."
      ),
      q(
        "sr1-p3a-q2",
        "The limitation of funds notification threshold under FAR 52.232-22 is typically:",
        ["50% of funds expended", "75% of funds expended", "100% of funds expended", "25% of funds expended"],
        1,
        "Contractors must notify the government when approximately 75% of allotted funds are expended on cost-type contracts."
      ),
      q(
        "sr1-p3a-q3",
        "Week 2 of the monthly routine focuses on:",
        [
          "Final closeout",
          "COR check-in, pending mods, and open contract actions",
          "SAM.gov renewal only",
          "Proposal writing",
        ],
        1,
        "Week 2 covers COR engagement, modification tracking, and outstanding action items."
      ),
      q(
        "sr1-p3a-q4",
        "When should you notify the government about an approaching option period?",
        [
          "After the option expires",
          "Proactively when within the exercise window — typically 60 days before",
          "Never — it's the government's responsibility",
          "Only at closeout",
        ],
        1,
        "Proactive notification 60 days before option exercise demonstrates performance management and protects revenue."
      ),
      q(
        "sr1-p3a-q5",
        "Late invoice submission most directly impacts:",
        [
          "CPARS quality rating",
          "Cash flow and may trigger CPARS management comments",
          "Security clearance",
          "Option exercise rights",
        ],
        1,
        "Late invoicing delays payment and can result in CPARS comments on business-like conduct."
      ),
    ],
    { phaseId: "sr1-phase-3" }
  ),
  lesson(
    "sr1-l5-file-management",
    SKILL_ID,
    "Contract File Management",
    [
      {
        heading: "Required Documents at Award",
        content:
          "Per FAR 4.803, the contract file at award must include: signed contract (SF 26/33/1447), all attachments and exhibits, SF 30 for any pre-award mods, subcontracting plan (if applicable), DD Form 254 (if classified), wage determinations (if SCA), novation/assignment documentation (if applicable), and the contract brief. Also include: proposal copy (for reference), negotiation memorandum, and compliance matrix from the bid. Missing award documents are the first finding in any DCAA or CPSR audit.",
      },
      {
        heading: "Documents Added During Performance",
        content:
          "During performance, add to the file: all SF 30 modifications (signed), correspondence with CO/COR (email and letters), invoices and payment vouchers, deliverable acceptance documents, REAs and claims with supporting documentation, subcontract files (each sub gets a subfolder), key personnel change requests, property records (if GFP/GFE involved), and inspection/acceptance records. Date-stamp and index every document. If it's not in the file, it didn't happen for audit purposes.",
      },
      {
        heading: "Retention Requirements and Electronic Organization",
        content:
          "Retention periods vary: cost-type contract records — minimum 4 years after final payment (FAR 4.804-4); certain property and pricing records — longer. Organize electronically with consistent naming: [Contract#]_[DocType]_[Date]_[Description]. Standard subfolders: 01-Award, 02-Mods, 03-Correspondence, 04-Invoices, 05-Deliverables, 06-Subcontracts, 07-Compliance, 08-Closeout. Restrict access by role — finance sees invoices, PM sees deliverables, legal sees claims. Back up daily.",
      },
      {
        heading: "What Auditors Look For First",
        content:
          "DCAA auditors start with: (1) Is the contract file complete at award? (2) Are all mods properly executed and filed? (3) Do invoices match contract CLINs and funded amounts? (4) Are subcontractor costs supported by executed subcontracts with proper flow-downs? (5) Are timekeeping and labor charges consistent with contract requirements? (6) Are REAs/claims properly documented with correspondence trail? Prepare for audit by running a quarterly file completeness check against a standard checklist.",
      },
    ],
    [
      q(
        "sr1-p3b-q1",
        "Per FAR 4.803, which document is required in the contract file at award?",
        ["Employee vacation records", "Signed contract and all attachments", "Marketing materials", "Prior employer references"],
        1,
        "FAR 4.803 specifies required contract file contents — signed contract and attachments are mandatory at award."
      ),
      q(
        "sr1-p3b-q2",
        "Cost-type contract records must be retained for at least:",
        ["1 year", "4 years after final payment", "10 years", "30 days"],
        1,
        "FAR 4.804-4 requires retention of cost-type records for minimum 4 years after final payment."
      ),
      q(
        "sr1-p3b-q3",
        "DCAA auditors typically review first:",
        [
          "Employee social media",
          "Contract file completeness, mods, invoices, and subcontract support",
          "Office layout",
          "Company stock price",
        ],
        1,
        "Auditors verify file completeness, modification execution, invoice accuracy, and subcontract documentation."
      ),
      q(
        "sr1-p3b-q4",
        "If a document is not in the contract file:",
        [
          "It can be recreated later without consequence",
          "It effectively did not happen for audit and dispute purposes",
          "The KO will provide a copy",
          "Only oral testimony is needed",
        ],
        1,
        "Audit and dispute resolution depend on documented evidence in the contract file."
      ),
      q(
        "sr1-p3b-q5",
        "Electronic file naming should follow:",
        [
          "Random names for security",
          "Consistent convention: Contract#_DocType_Date_Description",
          "First name of employee only",
          "No naming convention needed",
        ],
        1,
        "Consistent naming enables search, audit retrieval, and portfolio management across multiple contracts."
      ),
    ],
    { phaseId: "sr1-phase-3" }
  ),
];

const phase4Lessons = [
  lesson(
    "sr1-l6-modifications-overview",
    SKILL_ID,
    "Contract Modifications — Lifecycle Overview",
    [
      {
        heading: "Where Modifications Fit in the Lifecycle",
        content:
          "Contract modifications occur throughout performance — not just at the end. Phase 4 of cradle-to-grave administration covers every mod from administrative updates to multimillion-dollar scope changes. As the contracts administrator, you are the gatekeeper: no mod gets signed without your review, no contract brief gets updated without a signed mod, and no subcontractor gets directed to changed work without a corresponding sub mod.",
      },
      {
        heading: "Unilateral vs Bilateral — Quick Reference",
        content:
          "Unilateral mods (KO alone): administrative changes (CO/COR/address), option exercise, change orders within scope under the Changes clause. Bilateral mods (both parties sign): scope changes with equitable adjustment, price changes, POP extensions, key personnel changes, claim settlements, waiver of requirements. Your review checklist before signing any bilateral: (1) Read completely; (2) Identify what changed; (3) Compare to current contract; (4) Verify scope/price impact; (5) Assess equitable adjustment fairness; (6) Check subcontractor impact; (7) Review new clauses; (8) Update contract brief; (9) Notify finance of funding changes; (10) File signed mod immediately.",
      },
      {
        heading: "Deep Dive in Skill 3",
        content:
          "Skill 3 (Redlining — NDAs, Teaming Agreements, Mods) provides detailed training on reviewing bilateral modifications, identifying problematic mod language, and redlining mod terms before signature. Complete Skill 3 before processing your first bilateral mod independently.",
      },
    ],
    [
      q(
        "sr1-p4-q1",
        "A unilateral modification is issued by:",
        ["Both parties", "The Contracting Officer alone", "The COR", "The subcontractor"],
        1,
        "Unilateral mods are issued by the KO for administrative changes, options, and in-scope change orders."
      ),
      q(
        "sr1-p4-q2",
        "Before signing a bilateral mod, you must:",
        [
          "Sign immediately to avoid delay",
          "Review completely, assess scope/price impact, check sub impact, update contract brief",
          "Delegate to the PM without review",
          "Wait until closeout",
        ],
        1,
        "Full review before signature prevents unauthorized commitments and ensures subcontractor alignment."
      ),
      q(
        "sr1-p4-q3",
        "After signing a bilateral mod, you must:",
        [
          "Discard the old contract",
          "Update contract brief, notify finance, file signed mod, issue sub mod if needed",
          "Submit final invoice",
          "Nothing — mods are self-executing",
        ],
        1,
        "Post-signature actions: update brief, notify finance, file mod, and cascade to subcontractors."
      ),
      q(
        "sr1-p4-q4",
        "Which requires a bilateral modification?",
        [
          "Change of COR name",
          "Scope change with equitable adjustment",
          "Change of contractor address",
          "Exercise of an option",
        ],
        1,
        "Scope changes with price/schedule impact require bilateral agreement — not unilateral KO action."
      ),
      q(
        "sr1-p4-q5",
        "Detailed mod redlining training is covered in:",
        ["Skill 7 Excel", "Skill 3 Redlining", "Skill 8 CFCM", "Vocabulary trainer"],
        1,
        "Skill 3 covers detailed modification review and redlining procedures."
      ),
    ],
    { phaseId: "sr1-phase-4" }
  ),
];

const phase5Lessons = [
  lesson(
    "sr1-l7-option-years",
    SKILL_ID,
    "Managing Option Periods",
    [
      {
        heading: "Option Exercise Mechanics and Timing",
        content:
          "Option periods are unilateral rights reserved to the government — typically exercisable 30-60 days before the current period expires (check your specific contract language in Section B or clause 52.217-9). The KO exercises options via unilateral SF 30. If the government misses the exercise window, the option expires — you have no obligation to continue performance. Track option dates in your CLM system and compliance calendar with 90-, 60-, and 30-day alerts.",
      },
      {
        heading: "Your Obligation to Notify and Position for Exercise",
        content:
          "While option exercise is the government's unilateral right, senior administrators proactively notify the COR and KO when the exercise window approaches — typically 60 days out. Provide a performance summary highlighting deliverables met, CPARS-qualifying achievements, and value delivered. Strong CPARS ratings and documented performance increase option exercise probability. Maintain the COR relationship through regular check-ins — the COR's input often influences the KO's exercise decision.",
      },
      {
        heading: "When the Option Is Not Exercised",
        content:
          "If the government does not exercise: (1) Review stop-work or termination provisions — you may receive a formal stop-work order or simply run out of POP; (2) Submit final invoice for all accepted work through the end of the current period; (3) Begin transition planning — knowledge transfer, document handoff, personnel reassignment; (4) Initiate closeout procedures (see Phase 6); (5) Issue subcontractor termination or closeout mods. Do not assume the government will exercise — always have a staffing and revenue contingency plan.",
      },
    ],
    [
      q(
        "sr1-p5-q1",
        "Option exercise is typically:",
        [
          "A bilateral agreement requiring contractor consent",
          "A unilateral government right exercised via SF 30",
          "Automatic at POP end",
          "Requested by the contractor",
        ],
        1,
        "Options are unilateral government rights — the KO exercises via SF 30 within the contract-specified window."
      ),
      q(
        "sr1-p5-q2",
        "If the government misses the option exercise window:",
        [
          "The contractor must continue performance",
          "The option expires — no obligation to continue",
          "The contractor can exercise the option",
          "Performance continues indefinitely",
        ],
        1,
        "Missed exercise windows mean expired options — the contractor has no obligation to continue."
      ),
      q(
        "sr1-p5-q3",
        "You should notify the government about approaching options:",
        [
          "Never — it's their decision",
          "Proactively at 60 days with performance summary",
          "Only after the option expires",
          "Through a formal REA",
        ],
        1,
        "Proactive notification with performance data supports exercise decisions and demonstrates management maturity."
      ),
      q(
        "sr1-p5-q4",
        "When an option is not exercised, first steps include:",
        [
          "Continue performance indefinitely",
          "Final invoice, transition planning, and closeout initiation",
          "File a claim automatically",
          "Ignore subcontractor obligations",
        ],
        1,
        "Non-exercise triggers final invoicing, transition, sub closeout, and contract closeout procedures."
      ),
      q(
        "sr1-p5-q5",
        "Option exercise dates should be tracked with alerts at:",
        ["Only expiration date", "90, 60, and 30 days before exercise window", "Never", "Closeout only"],
        1,
        "Multiple advance alerts ensure proactive government engagement and internal planning."
      ),
    ],
    { phaseId: "sr1-phase-5" }
  ),
];

const phase6Lessons = [
  lesson(
    "sr1-l8-closeout",
    SKILL_ID,
    "Complete Closeout Procedures",
    [
      {
        heading: "Closeout Triggers and the Contractor Checklist",
        content:
          "Closeout begins when: final delivery is accepted, final payment is received, or the period of performance expires (whichever applies). Contractor checklist: (1) Submit final invoice and reconcile all CLINs to zero balance; (2) Execute Release of Contractor Claims (typically FAR 52.233-3 or agency equivalent); (3) Return all government property per FAR 45 and property clause; (4) Close out all subcontracts — final sub invoices, release of claims, property return; (5) Dispose of classified material per DD 254 and NISPOM requirements; (6) Verify records retention compliance.",
      },
      {
        heading: "Release of Claims and DCAA Final Audit",
        content:
          "The Release of Contractor Claims is a bilateral document — read it carefully before signing. You are waiving the right to assert claims not listed as exceptions. On cost-type contracts, DCAA may conduct a final audit — ensure all costs are supported, indirect rates are applied correctly, and unallowable costs are excluded. Do not sign the release until all REAs/claims are resolved or explicitly listed as exceptions. The six-year claims statute of limitations (Contract Disputes Act) applies to unresolved claims.",
      },
      {
        heading: "Records Retention and What to Keep",
        content:
          "After closeout: retain the complete contract file per FAR 4.804 — minimum 4 years after final payment for most records. Property records, pricing data, and certified cost or pricing data may require longer retention. Mark the file 'CLOSED' with closeout date and final contract value. Archive electronically with restricted access. Maintain a closeout log across your portfolio tracking: contract number, closeout date, release signed date, final value, and any open exceptions. Incomplete closeout is a common finding in contractor purchasing system reviews.",
      },
    ],
    [
      q(
        "sr1-p6-q1",
        "Closeout is triggered by:",
        [
          "Contractor request only",
          "Final delivery acceptance, final payment, or POP expiration",
          "CPARS submission",
          "New contract award",
        ],
        1,
        "Closeout begins upon final delivery/payment or POP expiration."
      ),
      q(
        "sr1-p6-q2",
        "Before signing Release of Contractor Claims, you must:",
        [
          "Sign immediately to speed closeout",
          "Resolve all REAs/claims or list them as explicit exceptions",
          "Ignore outstanding claims",
          "Delegate to the PM without review",
        ],
        1,
        "Signing the release waives unlisted claims — resolve or except all claims before signing."
      ),
      q(
        "sr1-p6-q3",
        "Cost-type contract closeout may include:",
        ["Marketing review", "DCAA final audit", "Proposal re-write", "New bid submission"],
        1,
        "DCAA conducts final audits on cost-type contracts to verify allowability and proper rate application."
      ),
      q(
        "sr1-p6-q4",
        "Contract records must typically be retained for:",
        ["30 days", "Minimum 4 years after final payment", "1 year", "Forever"],
        1,
        "FAR 4.804-4 specifies minimum retention periods — typically 4 years after final payment."
      ),
      q(
        "sr1-p6-q5",
        "Subcontract closeout requires:",
        [
          "Only prime closeout",
          "Final sub invoices, release of claims, and property return for each sub",
          "Ignoring sub obligations",
          "Automatic closeout with prime",
        ],
        1,
        "Each subcontract must be individually closed out with final invoices and release of claims."
      ),
    ],
    { phaseId: "sr1-phase-6" }
  ),
];

export const SR_SKILL_1_PHASES: SrAdminPhase[] = [
  {
    id: "sr1-phase-1",
    skillId: SKILL_ID,
    number: 1,
    title: "Pre-Award",
    description: "Before the contract exists — solicitation review, compliance matrix, and proposal support.",
    lessons: phase1Lessons,
  },
  {
    id: "sr1-phase-2",
    skillId: SKILL_ID,
    number: 2,
    title: "Award",
    description: "First 72 hours after award and contract kickoff meeting.",
    lessons: phase2Lessons,
  },
  {
    id: "sr1-phase-3",
    skillId: SKILL_ID,
    number: 3,
    title: "Contract Performance",
    description: "Monthly administration routine and contract file management.",
    lessons: phase3Lessons,
  },
  {
    id: "sr1-phase-4",
    skillId: SKILL_ID,
    number: 4,
    title: "Contract Modifications",
    description: "Modification types and review process — deep dive in Skill 3.",
    lessons: phase4Lessons,
  },
  {
    id: "sr1-phase-5",
    skillId: SKILL_ID,
    number: 5,
    title: "Option Periods",
    description: "Managing option years, exercise windows, and non-exercise transition.",
    lessons: phase5Lessons,
  },
  {
    id: "sr1-phase-6",
    skillId: SKILL_ID,
    number: 6,
    title: "Contract Closeout",
    description: "Complete closeout procedures, release of claims, and records retention.",
    lessons: phase6Lessons,
  },
];

export const SR_SKILL_1: SrAdminSkill = {
  id: SKILL_ID,
  number: 1,
  title: "Cradle-to-Grave Contract Management",
  description:
    "Complete walkthrough of every phase of a federal contract's life — from pre-award solicitation review through closeout.",
  phases: SR_SKILL_1_PHASES,
  lessons: SR_SKILL_1_PHASES.flatMap((p) => p.lessons),
};
