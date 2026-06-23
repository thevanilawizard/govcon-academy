import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_4: TrainingModule = {
  id: "administration",
  number: 4,
  title: "Contract Administration and Management",
  description:
    "Execute contracts from kickoff through closeout: performance management, modifications under FAR Part 43, subcontract oversight, compliant invoicing, closeout, and terminations.",
  careerOutcomes: [
    "Stand up contract administration files, kickoff governance, and CPARS-driven performance management",
    "Process bilateral and unilateral modifications and preserve equitable adjustment rights",
    "Administer subcontracts with proper flow-down, consent, and payment compliance",
    "Submit compliant invoices through WAWF and SF-1034 and manage cash flow",
    "Execute contract closeout and navigate terminations for convenience and default",
  ],
  lessons: [
    lesson(
      "administration",
      "4.1",
      "Contract Kickoff and Performance Management",
      [
        "Establish contract administration files and responsibility assignment matrices",
        "Conduct internal and external kickoff meetings with KO and COR",
        "Verify POP, funding, security, and key personnel requirements at start",
        "Track deliverables, acceptance, and CPARS evidence throughout performance",
        "Flow down clauses and reporting requirements to program teams and subcontractors",
      ],
      [
        {
          heading: "Contract Receipt and File Setup",
          content:
            "Upon award, contracts administration receives the fully executed contract, all attachments, Section I clauses, and any pre-award modifications. Create a contract file (physical or electronic) containing the award, PWS/SOW, pricing schedule, DD Form 254 if applicable, CDRLs, and correspondence. Build a responsibility assignment matrix (RAM): who owns invoicing, modifications, subcontracts, government property, security, CPARS narratives, and clause compliance. Missing setup causes missed POP start tasks, late invoicing, undetected clause obligations, and weak CPARS at option time. The first five business days after award are critical for administrative foundation.",
        },
        {
          heading: "Internal and External Kickoff",
          content:
            "Internal kickoff aligns program management, finance, HR, security, and subcontract administrators on scope, milestones, deliverables, staffing, and reporting cadence. External kickoff with the KO and COR confirms communication channels, acceptance criteria, invoicing instructions, WAWF routing, and COR authority limits. Document that unauthorized COR direction must be escalated for KO modification per FAR 52.232-39. Verify key personnel are on board with required clearances and certifications before billing labor. Kickoff minutes should capture agreed deliverable formats, CDRL schedules, and escalation paths.",
        },
        {
          heading: "POP, Funding, and CLIN Structure",
          content:
            "Period of Performance (POP) start and end dates govern labor charging and deliverable due dates—charging outside POP is unallowable and may be unbillable. Funded CLINs may differ from total contract value; do not perform or bill beyond obligated amounts without a modification. Understand option CLINs, incremental funding, and unilateral option exercise mechanics. Contracts staff reconcile ERP project numbers to contract CLINs for audit traceability and ensure program managers see funded versus unfunded ceiling clearly.",
        },
        {
          heading: "Performance Management and CPARS Preparation",
          content:
            "Contract success is measured against the PWS: timely deliverables, quality metrics, risk management, and proactive communication. Contracts administrators track deliverable due dates, acceptance records, monthly status meetings, and customer correspondence. Build a CPARS evidence folder from day one—acceptance emails, metrics dashboards, corrective actions, and customer commendations—not at evaluation time. Surprises at CPARS indicate weak in-performance tracking. Monthly COR touchpoints surface issues early and create a collaborative problem-solving record that supports Exceptional or Satisfactory ratings.",
        },
        {
          heading: "Briefing Teams on Flow-Down Obligations",
          content:
            "Translate Section I clauses into plain-language obligations for program staff: data rights, travel restrictions, OCI reporting, cyber, small business reporting, property rules, and export controls. Subcontract administrators issue awards with required flow-downs before subs start work. Kickoff is the last best moment to catch mismatches between proposal commitments and contract terms. A clause compliance matrix distributed at kickoff assigns each obligation an owner and first due date.",
        },
      ],
      "Within five business days of award, hold an internal kickoff using a checklist: executed contract, POP, funded CLINs, key personnel, DD254/cyber status, invoicing method, COR contact, CDRL calendar, and clause matrix owners. Schedule the customer kickoff and send a draft agenda for COR approval.",
      [
        q("4-1-1", "Unauthorized COR direction should be handled by:", ["Starting work immediately", "Escalating for KO contract modification per FAR 52.232-39", "Invoicing without documentation", "Ignoring the COR"], 1, "FAR 52.232-39 limits enforceability of unauthorized government commitments."),
        tf("4-1-2", "Funded CLINs indicate obligated funds available for performance and billing—not merely the total contract ceiling.", true, "Funding on CLINs limits billable performance to obligated amounts absent a modification adding funds."),
        q("4-1-3", "Period of Performance (POP) defines:", ["SAM expiration", "Authorized performance timeframe for labor and deliverables", "Proposal due date", "Protest window only"], 1, "POP bounds when contract performance and charging may occur."),
        scenario("4-1-4", "Award arrives Friday afternoon; POP starts Monday but your clause matrix is incomplete and key personnel lack required clearances. What is the best contracts action?", ["Bill all proposed staff Monday", "Brief leadership on compliance gaps, delay charging uncleared roles, complete kickoff checklist over the weekend, and request COR coordination on staffing plan", "Ignore DD254 requirements", "Issue subs without flow-down"], 1, "Starting performance without clearance, clause, and staffing compliance creates audit and CPARS risk from day one."),
        q("4-1-5", "A clause compliance matrix at kickoff helps:", ["Skip DFARS obligations", "Assign internal owners to contractual obligations", "Avoid all subcontracting", "Eliminate invoicing requirements"], 1, "Translating clauses into owned actions prevents compliance gaps during performance."),
      ],
      {
        realWorldExercise:
          "Draft a contract kickoff checklist and RAM for one active contract: list every admin function (mods, invoicing, CPARS, subs, property, security), assign names, and schedule internal and customer kickoffs within five business days of award.",
      }
    ),
    lesson(
      "administration",
      "4.2",
      "Contract Modifications",
      [
        "Distinguish bilateral, unilateral, and administrative modifications under FAR Part 43",
        "Apply the changes clause for scope, schedule, and pricing adjustments",
        "Document constructive changes and preserve claim rights under the disputes clause",
        "Process funding mods, option exercises, and administrative updates",
        "Align subcontract modifications with prime contract changes",
      ],
      [
        {
          heading: "FAR Part 43 Framework",
          content:
            "FAR Part 43 authorizes contract modifications—any written change in contract terms. Bilateral modifications require both parties' signatures; unilateral modifications are KO-only actions such as exercise of an option, change order under the changes clause within scope, or administrative updates (address changes, payment office changes). Only the Contracting Officer may execute modifications binding the government. Internal change orders without KO signature do not obligate the government. Contracts professionals route all customer change requests through a modification workflow with legal, finance, and program review before incurring significant cost.",
        },
        {
          heading: "Changes Clause and Equitable Adjustments",
          content:
            "FAR 52.243-1 (Changes—Fixed Price) entitles the contractor to equitable adjustment for KO-directed changes within the general scope of the contract. Document scope, schedule, and cost impact; submit a proposal for adjustment promptly per the clause's notification requirements—typically written notice within a specified period. Cardinal changes outside general scope may be breach rather than modification under the changes clause. T&M and cost-type contracts use different changes clauses (52.243-2, 52.243-3) with varying cost visibility. DFARS 252.243-7001 and 252.243-7002 add DoD-specific REA procedures on fixed-price contracts.",
        },
        {
          heading: "Constructive Changes and Claims Preservation",
          content:
            "Constructive changes occur when government actions force extra performance without a formal mod—specification interpretations, accelerated schedules, defective specifications, or excessive inspection. Contractors must notify the KO in writing and pursue adjustment under the disputes clause (FAR 52.233-1) if agreement fails. Missing notice deadlines can waive rights. Contracts staff issue letters documenting impact, quantifying cost and schedule, and reserving rights while continuing performance when directed. Contemporaneous records (emails, meeting notes, labor logs) support later REAs or claims.",
        },
        {
          heading: "Options, Funding, and Administrative Mods",
          content:
            "Option exercises are unilateral mods when contract terms permit. Verify CPARS, funding, and compliance status before assuming exercise. Incremental funding mods add obligated funds to CLINs without changing scope. Administrative mods update payment offices or COR designations. Administer mods chronologically in the contract file with updated POP summaries and CLIN funding tables after each execution. Mod trackers should show status: requested, priced, submitted, negotiated, executed.",
        },
        {
          heading: "Subcontract Mod Alignment",
          content:
            "When the prime receives a KO modification affecting subcontractor scope, flow bilateral sub modifications with aligned POP, pricing, and statement of work. Unilateral prime internal changes do not bind subs. Negotiate equitable adjustments with subs when the prime receives changes clause relief. Maintain privity discipline—the government does not direct subs without prime involvement except under novation or special agreements. Delayed sub mods create margin leakage and performance disputes.",
        },
      ],
      "When a COR requests work outside the PWS, issue a written impact notification within 48 hours citing FAR 52.243-1 (or applicable changes clause), estimate cost and schedule delta, and request a bilateral mod before incurring significant costs. Log all direction in the modification tracker.",
      [
        q("4-2-1", "Only the ___ may execute contract modifications binding the government.", ["COR", "Program Manager", "Contracting Officer (KO)", "Technical lead"], 2, "FAR 43.103 requires contracting officer action on modifications."),
        tf("4-2-2", "Constructive changes may arise when government actions require extra performance without a formal modification.", true, "Constructive changes result from government conduct that forces changed performance; contractors must preserve rights with timely notice."),
        q("4-2-3", "FAR 52.243-1 applies to equitable adjustments on:", ["Grants only", "Fixed-price contracts for KO-directed changes within scope", "Personal services agreements only", "Unregulated commercial sales"], 1, "52.243-1 is the standard Changes clause for fixed-price contracts."),
        scenario("4-2-4", "The COR emails 'start the extra reports immediately—we'll fix the mod later.' Labor cost is $80K. What should contracts management do?", ["Start work and hope for payment", "Send written notice of potential change, estimate impact, perform only if directed after documenting reservation of rights—or stop if unauthorized", "Bill as overhead without documentation", "Modify the subcontract unilaterally without prime KO mod"], 1, "Unauthorized direction risks non-reimbursement; preserve changes clause and disputes rights with written notice."),
        q("4-2-5", "Option exercise modifications are typically:", ["Bilateral only", "Unilateral when contract terms permit KO exercise", "Illegal on IDIQ contracts", "Submitted by subcontractors to GAO"], 1, "Option clauses grant the government unilateral right to extend when conditions are met."),
      ],
      {
        realWorldExercise:
          "Open a mod tracker for one contract: log the last three change requests with date received, notice letter sent (Y/N), estimated cost/schedule impact, KO mod status, and matching sub mod status.",
      }
    ),
    lesson(
      "administration",
      "4.3",
      "Subcontract Management",
      [
        "Issue subcontracts with required FAR and DFARS flow-down clauses",
        "Obtain consent to subcontract when required under FAR Part 44",
        "Monitor subcontractor performance, billing, and deliverable quality",
        "Process subcontract modifications aligned to prime contract changes",
        "Ensure subcontractor responsibility, SAM status, and prompt payment compliance",
      ],
      [
        {
          heading: "Subcontract Issuance and Flow-Down",
          content:
            "Prime contractors must translate prime contract requirements into subcontracts before subs begin work. Flow-down lists derive from the prime clause matrix—commercial items may use FAR 52.244-6, while defense subs need DFARS cyber, Buy American, data rights, and other mandatory clauses. Templates should be updated when prime awards add new clauses at mod or option. Never start sub work on a purchase order alone when the prime contract requires a fully flowed subcontract instrument. Legal review of flow-down completeness is standard on cost-type and classified contracts.",
        },
        {
          heading: "Consent to Subcontract and Novation",
          content:
            "FAR Part 44 requires Contracting Officer consent before awarding subcontracts on some contracts—especially cost-reimbursement, cost-plus, and contracts with special requirements. Consent packages include sub pricing, scope, flow-down, and responsibility documentation. Novation agreements (FAR 42.12) transfer prime contract obligation when the prime is acquired or restructured—distinct from routine sub awards. Contracts managers track consent requirements in the prime file and submit packages early to avoid performance delays.",
        },
        {
          heading: "Performance Oversight and Quality",
          content:
            "The prime remains accountable for overall performance regardless of sub contribution. Monitor sub deliverables, quality, staffing, and schedule against their SOW. Include flow-down of inspection and acceptance terms (FAR 52.246-4 for services). Weak sub performance damages prime CPARS and may trigger default. Contracts administrators require corrective action plans when deficiencies arise and document oversight in monthly status reports to the COR.",
        },
        {
          heading: "Billing and Payment Chain",
          content:
            "Prime invoices often embed sub costs—ensure sub invoices are allowable, allocable, and supported before inclusion in SF-1034 or WAWF submissions. FAR 52.232-40 (Prompt Payment Act—Subcontractors) may require timely payment to small business subs after prime receives payment. Withhold disputes should be documented. Never bill the government for sub work not performed or for unallowable sub charges. Match sub billing periods to prime POP and CLIN structure.",
        },
        {
          heading: "Subcontract Modifications and Closeout",
          content:
            "When prime receives a KO mod affecting sub scope, execute bilateral sub mods with aligned POP and pricing before sub performs changed work. Verify SAM exclusion status before initial award and at option periods. At prime closeout, confirm sub closeout, release of claims, and final invoice reconciliation. Privity runs through the prime—government typically directs subs through the prime contractor.",
        },
      ],
      "Before first sub kickoff on a new prime, run your flow-down checklist against the prime Section I clauses. Issue the subcontract only after Legal confirms cyber, data rights, small business, and export clauses match prime requirements and SAM verification is complete.",
      [
        q("4-3-1", "Prime contractors remain responsible for performance:", ["Only if subs fail CPARS", "Even when subcontractors perform portions of the work", "Never on small business set-asides", "Only on FFP contracts"], 1, "The prime holds the government contract and is accountable for total performance."),
        tf("4-3-2", "FAR Part 44 may require Contracting Officer consent before awarding certain subcontracts on cost-reimbursement contracts.", true, "FAR 44.2 requires KO consent for subcontracts on specified contract types and values."),
        q("4-3-3", "FAR 52.244-6 addresses:", ["Default termination only", "Subcontracts for commercial items and required flow-down terms", "CPARS ratings", "Security clearance processing"], 1, "52.244-6 prescribes terms for subcontracts involving commercial items."),
        scenario("4-3-4", "A sub submits a $200K invoice but your COR has not accepted the related prime deliverable and the sub contract lacks cyber flow-down. What should you do?", ["Bill the government immediately", "Withhold prime invoice inclusion, fix flow-down via sub mod, and align billing to accepted deliverables", "Pay the sub from personal funds", "Delete the prime contract file"], 1, "Billing unaccepted or non-compliant sub costs creates False Claims and audit exposure."),
        q("4-3-5", "Government typically directs subcontractors:", ["Directly without prime involvement", "Through the prime contractor absent novation or special arrangements", "Only via CPARS", "Via SAM.gov messaging"], 1, "Privity runs through the prime; direction to subs ordinarily flows via the prime-subcontract relationship."),
      ],
      {
        realWorldExercise:
          "Audit one active subcontract against the prime clause matrix: list any missing flow-down clauses, consent status, SAM verification date, and corrective actions needed before next invoice cycle.",
      }
    ),
    lesson(
      "administration",
      "4.4",
      "Invoicing and Getting Paid",
      [
        "Prepare SF-1034 Public Voucher and supporting documentation",
        "Navigate Wide Area WorkFlow (WAWF) receipt and acceptance paths",
        "Apply Prompt Payment Act rules under FAR 52.232-25 and small business flow-down",
        "Avoid common invoice rejection causes and manage days sales outstanding",
        "Reconcile billed amounts to funded CLINs and contract type rules",
      ],
      [
        {
          heading: "SF-1034 and Payment Documentation",
          content:
            "SF-1034 (Public Voucher) is the standard invoice form for many agency payments, especially cost-reimbursement and T&M contracts. It summarizes amounts claimed by CLIN, contract number, period, and accounting data. Supporting schedules show labor hours, rates, ODC detail, sub invoices, and fee calculations. Invoices must match contract type rules—do not bill fee on unallowables, exceed funded CLINs, or charge outside POP. Contracts administrators reconcile finance-generated invoices to the contract before submission and obtain authorized certifying official signature where required.",
        },
        {
          heading: "Wide Area WorkFlow (WAWF)",
          content:
            "Wide Area WorkFlow (WAWF) is DoD's electronic invoicing and receipt/acceptance system. Invoices route through defined roles: Contractor → COR (receipt/acceptance) → Payment office. Correct document type (cost voucher, receiving report, combo) and routing IDs (DoDAACs) are essential. Late COR acceptance delays payment even when work is complete. Train CORs on timely WAWF acceptance of deliverables. Monitor rejected documents daily and correct within suspense dates. Contracts staff maintain a WAWF cheat sheet per contract pinned in the admin file.",
        },
        {
          heading: "Prompt Payment Act and Cash Flow",
          content:
            "FAR 52.232-25 implements Prompt Payment Act requirements. After proper invoice receipt and acceptance, the government must pay within specified periods (often Net 30). Late payments accrue interest per the clause—contractors should track payment dates and assert interest when appropriate. FAR 52.232-40 accelerates payment to small business subcontractors when primes receive payment. Cash flow planning must account for acceptance lag plus payment terms—strong contract admin reduces days sales outstanding (DSO) and disputes.",
        },
        {
          heading: "FFP, T&M, and Cost-Type Billing Differences",
          content:
            "Firm Fixed Price contracts bill per CLIN structure—milestone, percentage of completion, or delivery-based—per contract schedule, not actual cost. T&M bills actual hours times negotiated rates with ODCs within NTE ceilings. Cost-type bills allowable costs plus fixed fee per SF-1034 schedules subject to provisional rate limits and fee withholding. Mixing billing models across CLINs on one contract is common on IDIQ task orders—verify each CLIN's type before every invoice cycle.",
        },
        {
          heading: "Rejections and Best Practices",
          content:
            "Common rejections: wrong contract or CLIN, math errors, missing acceptance, unallowable costs, period misalignment with POP, missing sub backup, and incorrect WAWF doc type. Maintain an invoice checklist aligned to contract billing instructions. Document retainage or withheld fee if contract requires. First three invoices on a new contract deserve line-by-line contracts review before submission. Rejected invoices reset Prompt Payment clocks—fix root causes, not symptoms.",
        },
      ],
      "Create an invoice checklist for your largest active contract: WAWF document type, COR and payment office DoDAACs, required attachments, CLIN mapping, POP period validation, and sub backup requirements. Review the first three invoices against the checklist before submission.",
      [
        q("4-4-1", "SF-1034 is used for:", ["Security clearance applications", "Public voucher/invoicing on many federal contracts", "Protest filings only", "SAM registration"], 1, "SF-1034 Public Voucher is a standard government invoice form for cost reimbursement and similar contracts."),
        tf("4-4-2", "Billing beyond funded CLIN amounts without a modification risks non-payment and compliance issues.", true, "Performance and billing should align to obligated funds unless a modification adds funding."),
        q("4-4-3", "WAWF primarily supports:", ["Proposal color teams", "Electronic invoicing, receipt, and acceptance for DoD", "CPARS only", "Grant applications"], 1, "Wide Area WorkFlow routes invoices and receiving reports to COR and payment offices."),
        scenario("4-4-4", "Finance submits a $500K voucher but the COR has not accepted three deliverables in WAWF and one CLIN is unfunded. What should the contracts manager do?", ["Submit anyway to meet month-end", "Hold the invoice, obtain acceptance, verify funding by CLIN, and resubmit when compliant", "Split the invoice across fiscal years without approval", "Bill against a different contract number"], 1, "Payment follows proper acceptance and funded CLIN alignment—non-compliant invoices are rejected and may create compliance exposure."),
        q("4-4-5", "FAR 52.232-25 addresses:", ["Data rights", "Prompt payment including interest on late payments", "Small business set-asides only", "Default termination procedures"], 1, "52.232-25 implements Prompt Payment Act requirements in contracts."),
      ],
      {
        realWorldExercise:
          "Build a WAWF routing card for one DoD contract: contract number, each CLIN's billing type, document type, COR DoDAAC, payment office DoDAAC, required attachments, and average acceptance-to-payment days from the last six vouchers.",
      }
    ),
    lesson(
      "administration",
      "4.5",
      "Contract Closeout",
      [
        "Distinguish physical completion from contractual closeout",
        "Execute closeout actions under FAR 4.804 and agency supplements",
        "Finalize invoices, release of claims, and property disposition",
        "Complete subcontract and classified material closeout",
        "Accelerate closeout to release residual funds and reduce audit exposure",
      ],
      [
        {
          heading: "Physical Completion vs. Contractual Closeout",
          content:
            "Physical completion occurs when all work is done and final deliverables are accepted. Contractual closeout completes administrative actions—final invoice, release of claims, property disposition, classified material return, patent/royalty reports, and subcontract closeout. A contract can be physically complete but remain open administratively for years, accumulating audit exposure and tying up management attention. Contracts managers maintain a closeout checklist per contract triggered 90 days before POP end.",
        },
        {
          heading: "FAR 4.804 Closeout Requirements",
          content:
            "FAR 4.804 establishes contract closeout policies for the government and contractor obligations to cooperate. Closeout includes confirming all invoices are paid or adjusted, resolving open modifications, disposing of government property per FAR Part 45, and submitting final patent and royalty reports if required. DFARS may add defense-specific closeout requirements for classified material and CDRL final submissions. The KO issues a contract closeout mod or confirmation when all administrative actions are complete.",
        },
        {
          heading: "Financial and Claims Resolution",
          content:
            "Submit final invoice reflecting all allowable costs and fee within contract terms. Execute release of claims or confirm no outstanding REAs before closeout where possible—unresolved claims may delay closeout but should be documented. Reconcile provisional billing rates to actual through final ICS on cost-type work. Retain records per FAR 52.215-2 audit and records retention requirements (typically three years after final payment, longer for certain issues).",
        },
        {
          heading: "Property, Classified Material, and Subcontract Closeout",
          content:
            "Return or dispose of GFP/GFE per contract and property clauses; obtain government confirmation of transfer or scrap. Return classified material and complete destruction certificates as directed by DD Form 254. Close all subcontracts with final payments, release of claims, and flow-down closeout certifications. Verify small business reporting (SF-294/SF-295) is current through contract end on applicable contracts.",
        },
        {
          heading: "Closeout Benefits and CPARS Final Evaluation",
          content:
            "Timely closeout releases residual funds the government may reclaim, clears DCAA audit windows where possible, and supports clean past performance for recompete. CPARS final evaluation occurs at physical completion on qualifying contracts—ensure the evidence folder supports your narrative. Contracts staff track open closeout items on a portfolio dashboard reported to leadership monthly.",
        },
      ],
      "For a contract within 90 days of POP end, open a closeout checklist: final deliverable acceptance status, open mods, final invoice timeline, GFP disposition plan, sub closeout dates, classified return (if any), and target KO closeout mod date.",
      [
        q("4-5-1", "Contract closeout policies appear in:", ["FAR 4.804", "FAR Part 19 only", "DFARS 252.204 only", "SAM.gov help pages"], 0, "FAR 4.804 establishes contract closeout policies and procedures."),
        tf("4-5-2", "A contract may be physically complete but remain open administratively until closeout actions are finished.", true, "Physical completion and contractual closeout are distinct milestones; admin closeout may lag performance."),
        q("4-5-3", "Closeout typically includes:", ["Ignoring final invoices", "Finalizing payments, property disposition, releases, and administrative actions", "Only marketing activities", "Automatic protest filing"], 1, "Closeout completes financial and administrative resolution of the contract relationship."),
        scenario("4-5-4", "POP ended six months ago; one GFP laptop is unaccounted for and the final invoice is draft. The KO requests closeout status. What do you prioritize?", ["Close immediately without property reconciliation", "Complete GFP inventory/disposition, finalize invoice, document any open claims, then request closeout mod", "Abandon the laptop", "Start a new contract to offset"], 1, "Property accountability and final invoicing are prerequisites to clean closeout."),
        q("4-5-5", "Audit record retention after final payment is commonly governed by:", ["FAR 52.215-2 Audit and Records—Retention", "CPARS only", "State UCC", "Commercial invoice terms"], 0, "FAR 52.215-2 and related clauses establish records retention periods for audit access."),
      ],
      {
        realWorldExercise:
          "Populate a closeout checklist for one ending contract with status (open/complete) for: final CDRL acceptance, GFP disposition, sub final payment, final SF-1034, release of claims, and CPARS final narrative submitted.",
      }
    ),
    lesson(
      "administration",
      "4.6",
      "Terminations",
      [
        "Distinguish termination for convenience (T4C) from termination for default (T4D)",
        "Apply FAR Part 49 and clauses 52.249-2 and 52.249-8",
        "Understand DFARS 252.249-7002 on DoD fixed-price terminations",
        "Manage settlement proposals, stop-work orders, and subcontract flow-through",
        "Mitigate default risk through performance management and cure notices",
      ],
      [
        {
          heading: "Termination for Convenience (T4C)",
          content:
            "Termination for convenience (T4C) allows the government to end performance when in its interest, not due to contractor fault. FAR 52.249-2 (Termination for Convenience of the Government—Fixed Price) and FAR 49.208 govern settlement. Contractors submit termination settlement proposals covering costs incurred, settlement expenses, and reasonable profit on completed work. T4C is not a penalty—it is a negotiated settlement. Contracts managers preserve cost records, comply with stop-work orders promptly, and mitigate continued costs after termination notice.",
        },
        {
          heading: "Termination for Default (T4D)",
          content:
            "Termination for default (T4D)—also called termination for cause on commercial items—results from contractor failure to deliver or other material breach. FAR 52.249-8 (Default) and FAR 49.402 apply. Consequences include excess reprocurement costs charged to the contractor, CPARS devastation, potential debarment, and loss of progress payments. Cure notices (FAR 49.402-5) may precede default on some contracts. Contracts professionals escalate performance issues to leadership before they reach cure or show-cause letters.",
        },
        {
          heading: "DFARS 252.249-7002 and DoD Considerations",
          content:
            "DFARS 252.249-7002 (Termination (Fixed-Price)) supplements FAR termination clauses on DoD fixed-price contracts with defense-specific provisions. DoD terminations may involve classified material return, DFARS property clauses, and DCMA involvement in settlement verification. Understand whether your contract incorporates 252.249-7002 alongside FAR 52.249-2 or default clauses. Settlement proposals on DoD contracts may face DCAA audit similar to incurred cost reviews.",
        },
        {
          heading: "Stop-Work Orders and Settlement Process",
          content:
            "FAR 52.242-15 (Stop-Work Order) halts performance pending decision—contractors must comply and minimize incurrence of new costs. After T4C notice, inventory work in progress, material, and sub contracts. Flow termination notices to subs and negotiate sub settlements aligned to prime settlement. Submit termination settlement proposals within prescribed periods; late submission waives recovery. Legal and finance lead settlement negotiation; contracts coordinates documentation.",
        },
        {
          heading: "Preventing Default and Documenting Excusable Delay",
          content:
            "Prevent default through aggressive CDRL management, COR communication, and early request for schedule mods when government-caused delays occur. FAR 52.249-14 (Excusable Delays) may relieve default when delay arises from causes beyond contractor control and without fault—document force majeure, government delays, and late GFP. Contemporaneous logs support conversion from default to convenience termination or excusable delay findings. Never ignore cure notices or show-cause letters—formal written responses with evidence are mandatory.",
        },
      ],
      "Review active contracts for default risk indicators: missed CDRLs, under-staffing against PWS, open cure notices, and unresolved COR concerns. For any contract with a stop-work or show-cause letter, open a termination response file with legal, finance, and program leadership within 24 hours.",
      [
        q("4-6-1", "Termination for convenience allows the government to:", ["Penalize contractor fraud automatically", "End performance in the government's interest with settlement", "Skip all payments", "Transfer the contract to a sub without notice"], 1, "T4C under FAR Part 49 ends performance for convenience with negotiated settlement, not as punishment."),
        tf("4-6-2", "Termination for default can result in excess reprocurement costs charged to the contractor and severe CPARS impact.", true, "T4D under FAR 52.249-8 carries financial and past performance consequences for material breach."),
        q("4-6-3", "FAR 52.249-14 addresses:", ["Buy American waivers", "Excusable delays that may relieve default", "Cyber incident reporting", "Small business plans"], 1, "52.249-14 covers excusable delays from causes beyond the contractor's control without fault."),
        scenario("4-6-4", "You receive a cure notice citing three late CDRLs. POP ends in 60 days. What is the contracts manager's best response?", ["Ignore the notice", "Immediate leadership briefing, corrective action plan to COR/KO with revised schedule, staffed deliverables, and legal review of default exposure", "Terminate all employees", "Submit a protest instead of delivering"], 1, "Cure notices require prompt corrective action and documented recovery plan to avoid default termination."),
        q("4-6-5", "DFARS 252.249-7002 supplements:", ["Commercial item warranties only", "Termination provisions on DoD fixed-price contracts", "SAM registration", "Proposal formatting"], 1, "252.249-7002 adds DoD-specific termination provisions for fixed-price contracts."),
      ],
      {
        realWorldExercise:
          "Draft a default-risk register for your contract portfolio: list contracts with missed deliverables, cure/show-cause history, or stop-work orders; assign mitigation owners and weekly review dates.",
      }
    ),
  ],
};
