import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_3: TrainingModule = {
  id: "dfars",
  number: 3,
  title: "DFARS and Defense Contracting",
  description:
    "Navigate defense-specific acquisition requirements: the DFARS framework, security clearances and export controls, cybersecurity and CMMC, DCMA and DCAA oversight, and the DFARS clause library every defense contractor must master.",
  careerOutcomes: [
    "Interpret DFARS supplements, PGI guidance, and clause flow-down to subcontractors",
    "Coordinate DD Form 254, facility clearances, CUI, and ITAR/EAR export compliance",
    "Implement NIST SP 800-171, SSP/POA&M, and DFARS 252.204-7012 cybersecurity requirements",
    "Work effectively with DCMA on CDRLs, EVM, and GFE and with DCAA on audits and ICS",
    "Administer key DFARS Part 252 clauses across the contract lifecycle",
  ],
  lessons: [
    lesson(
      "dfars",
      "3.1",
      "The DFARS: What It Is and Why It Exists",
      [
        "Explain DFARS authority, scope, and relationship to the FAR",
        "Describe how DFARS supplements and deviates from FAR provisions",
        "Use DFARS PGI to interpret contracting officer prescriptions",
        "Identify which DoD components and agencies apply DFARS requirements",
        "Locate DFARS Part 252 clauses and flow-down obligations in defense contracts",
      ],
      [
        {
          heading: "Authority and Scope of the DFARS",
          content:
            "The Defense Federal Acquisition Regulation Supplement (DFARS) codifies Department of Defense acquisition policy at 48 CFR Chapter 2. Issued by the Defense Acquisition Regulations System (DARS) under statutory and DoD directive authority, it implements defense-unique requirements the baseline FAR does not address—operational security, domestic industrial base protection, contractor business systems, and defense-specific contract administration. Every contractor performing on DoD contracts must comply with DFARS clauses incorporated in the solicitation and award, whether personnel read the full text or not. Civilian agency contracts may incorporate DFARS clauses when DoD funds are involved or when working as a subcontractor to a prime holding DFARS-heavy terms.",
        },
        {
          heading: "How DFARS Supplements the FAR",
          content:
            "DFARS parts mirror FAR structure where practical—Part 204 for administrative matters, Part 212 for commercial items, Part 215 for negotiated procurements—but add or tighten requirements. A supplement may add entirely new clauses in Part 252, prescribe stricter versions of FAR clauses, or implement Public Law such as the Berry Amendment or Buy American Act for DoD. When FAR and DFARS conflict on DoD contracts, DFARS generally controls unless FAR explicitly provides otherwise. Contracts professionals navigate the DFARS table of contents alongside the FAR to determine which prescription applies to a given contract type, dollar threshold, and item classification.",
        },
        {
          heading: "PGI: Procedures, Guidance, and Information",
          content:
            "DFARS PGI (Procedures, Guidance, and Information) appears in a parallel section of each part and provides acquisition workforce interpretation—it is not binding on contractors the way clause text is, but it reveals how contracting officers are instructed to apply prescriptions. PGI explains when clauses are mandatory, how fill-ins should be completed, and what documentation KOs expect at award. Savvy contracts managers read PGI when a DFARS prescription seems ambiguous, because it clarifies intent behind cyber flow-down, business system reviews, and domestic preference exceptions. PGI also cross-references DoD manuals and policy memos that drive clause selection in solicitations.",
        },
        {
          heading: "DoD Components and Agency Applicability",
          content:
            "DFARS applies to defense agencies within DoD—Army, Navy, Air Force, Space Force, Defense Logistics Agency, Missile Defense Agency, and others—as well as contracts funded by DoD even when executed by other departments in some cases. Other agencies maintain their own supplements (HHSAR, GSAM, NASA FAR Supplement) with different clause libraries. A contractor supporting multiple agencies must track which supplement governs each contract. Subcontractors inherit DFARS terms through prime flow-down even when the sub never holds a direct DoD contract. Misidentifying the applicable supplement leads to wrong compliance matrices and missed flow-down obligations.",
        },
        {
          heading: "DFARS Part 252 and Prime Flow-Down",
          content:
            "DFARS Part 252 is the defense clause library—analogous to FAR Part 52. Clauses like 252.204-7012 (Safeguarding Covered Defense Information), 252.225-7001 (Buy American), and 252.242-7006 (Accounting System Administration) appear routinely in Section I. Alternates and fill-ins (CMMC levels, assessment dates, reporting intervals) must be completed accurately at award. Prime contractors must flow down DFARS clauses when the clause text or prescription requires it—often to all tiers handling covered defense information, export-controlled items, or cost data. Failure to flow down mandatory clauses exposes the prime to corrective action, withheld payments, and False Claims Act risk.",
        },
      ],
      "On your next DoD contract award, extract every DFARS 252 clause from Section I into a compliance matrix. For each clause, note the prescribing DFARS section, whether PGI indicates mandatory flow-down, assign an internal owner (Legal, IT, Finance, or Operations), and compare against your standard subcontract template before first sub award.",
      [
        q("3-1-1", "The DFARS is codified at:", ["48 CFR Chapter 1", "48 CFR Chapter 2", "48 CFR Chapter 15 only", "10 USC only"], 1, "DFARS appears at 48 CFR Chapter 2 as DoD's acquisition supplement."),
        tf("3-1-2", "On DoD contracts, DFARS provisions generally control when they conflict with FAR unless FAR states otherwise.", true, "Agency supplements implement DoD-specific requirements that supersede conflicting FAR text on defense acquisitions."),
        q("3-1-3", "DFARS PGI primarily provides:", ["Contractor billing rates", "Procedures, guidance, and information for the acquisition workforce", "CMMC certification credentials", "Subcontractor profit caps"], 1, "PGI assists contracting officers; contractors use it to understand agency intent behind clause prescriptions."),
        scenario("3-1-4", "Your company wins a Navy contract. The subcontractor asks whether DFARS applies to their commercial-item sub. What is the best contracts response?", ["DFARS never applies to commercial subs", "Review Section I and each 252.x clause for mandatory flow-down to subs at all tiers handling covered work", "Only prime contracts need compliance", "Subs follow state law only"], 1, "Many DFARS clauses explicitly require flow-down regardless of commercial status when subs handle covered defense information or items."),
        q("3-1-5", "DFARS contract clauses are primarily located in:", ["Part 252", "Part 31", "Part 12 only", "FAR 52.301"], 0, "DFARS Part 252 contains defense-specific contract clauses analogous to FAR Part 52."),
      ],
      {
        realWorldExercise:
          "Build a DFARS clause compliance matrix for one active or sample DoD contract: list every 252.x clause, its prescription reference, flow-down requirement (Y/N), assigned owner, and first compliance action due date.",
      }
    ),
    lesson(
      "dfars",
      "3.2",
      "Security Clearances and Classified Contracting",
      [
        "Explain DD Form 254 purpose and contract security classification specifications",
        "Coordinate Facility Clearance (FCL) and Personnel Clearance (PCL) under NISPOM",
        "Distinguish classified performance from CUI-only contract security needs",
        "Apply ITAR and EAR export control requirements in defense subcontracting",
        "Manage subcontractor clearance, visit authorization, and security flow-down",
      ],
      [
        {
          heading: "DD Form 254: Contract Security Classification Specification",
          content:
            "DD Form 254 is issued by the government to inform contractors of security classification requirements on classified contracts. It specifies the classification level, special access programs, safeguarding requirements, submittal instructions for classified material, and cognizant security office points of contact. The 254 travels with the contract—prime and subcontractors must receive appropriate excerpts or their own 254s before accessing classified information. Contracts professionals verify the 254 matches solicitation security language and PWS requirements before performance begins. Missing or outdated 254s delay staffing and create security violations if work starts without proper authorization.",
        },
        {
          heading: "Facility Clearance (FCL) and Personnel Clearance (PCL)",
          content:
            "A Facility Clearance (FCL) authorizes a company to store and perform on classified information at a cleared facility under the National Industrial Security Program Operating Manual (NISPOM, 32 CFR Part 117). Personnel Clearances (PCL)—Confidential, Secret, Top Secret—are sponsored by a cleared contractor holding an FCL under DD Form 441 (Department of Defense Security Agreement). Key personnel clauses may require named cleared staff at award. Contracts managers track clearance levels against PWS labor categories, initiation timelines (often 6–18 months for Secret), and continuous evaluation requirements. The Facility Security Officer (FSO) is the primary operational partner for contracts staff on clearance matters.",
        },
        {
          heading: "CUI vs. Classified Contracting",
          content:
            "Not all defense work requires classified access—many contracts are unclassified but include Controlled Unclassified Information (CUI) marked per the CUI Registry and protected under DFARS cyber clauses rather than NISPOM classified storage requirements. DD Form 254 applies to classified contracts; CUI contracts rely on marking guides, DD254-equivalent security classification guidance in some programs, and NIST SP 800-171 controls. Misidentifying the regime leads to under-protection (spills, violations) or over-scoping clearance costs. At kickoff, read Section H, the DD Form 254 (if any), cyber clauses, and PWS security language together to determine the correct compliance framework.",
        },
        {
          heading: "ITAR and EAR Export Controls",
          content:
            "International Traffic in Arms Regulations (ITAR, 22 CFR Parts 120–130) control defense articles and services on the U.S. Munitions List—requiring export licenses, technical data protections, and foreign person access restrictions. Export Administration Regulations (EAR, 15 CFR Parts 730–774) govern dual-use commercial items on the Commerce Control List with Export Control Classification Numbers (ECCNs). DFARS clause 252.225-7048 (Export-Controlled Items) flows ITAR/EAR obligations to contractors and subs. Contracts managers ensure subcontracts prohibit unauthorized export, require employee citizenship verification where needed, and coordinate with trade compliance before foreign nationals touch controlled technical data.",
        },
        {
          heading: "Subcontractor Clearance and Visit Authorization",
          content:
            "Subcontractors performing classified work need appropriate FCL at their facility, PCL for employees, and subcontracts flowing security requirements from the prime's DD Form 254. Visit requests for uncleared personnel require government approval through the cognizant security office. Contracts staff coordinate with the FSO before assigning staff or subs to classified task orders and document clearance status in the compliance matrix alongside key personnel certifications. Prime contractors remain accountable for sub security violations—flow-down of DD254 requirements and DFARS security clauses is mandatory, not discretionary.",
        },
      ],
      "At contract kickoff, obtain the DD Form 254 (or confirm unclassified/CUI-only status). Meet with your FSO to map required clearance levels to each PWS labor category, verify ITAR/EAR markings on deliverables, and build a staffing plan with clearance initiation dates at least 90 days before performance start.",
      [
        q("3-2-1", "DD Form 254 specifies:", ["Invoice payment terms", "Contract security classification and safeguarding requirements", "Indirect billing rates", "CPARS rating criteria"], 1, "DD Form 254 is the Contract Security Classification Specification for classified DoD contracts."),
        tf("3-2-2", "Unclassified contracts with CUI may require NIST 800-171 safeguarding without a Secret-level Facility Clearance.", true, "CUI/CDI protection uses cyber and marking requirements—not the same as classified FCL, though programs may combine both."),
        q("3-2-3", "ITAR primarily controls:", ["All commercial software exports", "Defense articles and services on the U.S. Munitions List", "Only classified SECRET documents", "Invoice data sent overseas"], 1, "ITAR (22 CFR 120–130) governs defense articles, services, and related technical data on the USML."),
        scenario("3-2-4", "A sub employee without a PCL requests access to SECRET engineering drawings to meet a deadline. What should the contracts manager do?", ["Allow access with a non-disclosure agreement", "Deny access and coordinate with the FSO for proper clearance or visit authorization before any classified access", "Have the COR email the drawings unencrypted", "Transfer the work to an uncleared cloud folder"], 1, "Classified access requires appropriate PCL and authorized facilities under NISPOM—shortcuts create serious security violations."),
        q("3-2-5", "Personnel clearances for contractor employees are typically sponsored by:", ["The employee personally only", "A cleared contractor with FCL under DD Form 441", "SAM.gov registration", "The COR exclusively"], 1, "Cleared contractors sponsor employee PCLs as part of the National Industrial Security Program framework."),
      ],
      {
        realWorldExercise:
          "For one classified or CUI contract, create a security staffing matrix: PWS labor category, required clearance or CUI access level, current employee status, DD254 block reference, and ITAR/EAR touchpoint (Y/N) for each deliverable.",
      }
    ),
    lesson(
      "dfars",
      "3.3",
      "DFARS Cybersecurity Requirements",
      [
        "Explain DFARS 252.204-7012 and NIST SP 800-171 control requirements",
        "Describe CMMC 2.0 levels and assessment expectations in solicitations",
        "Develop System Security Plans (SSP) and Plans of Action and Milestones (POA&M)",
        "Implement cyber incident reporting and subcontractor flow-down",
        "Coordinate SPRS scoring and related DFARS cyber clauses 7019–7021",
      ],
      [
        {
          heading: "DFARS 252.204-7012: Safeguarding Covered Defense Information",
          content:
            "Clause 252.204-7012 requires contractors and subcontractors to provide adequate security on covered contractor information systems per NIST SP 800-171 Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations. Covered Defense Information (CDI) is unclassified technical or operational information related to designated missions, marked with distribution statements, or provided under contract. Required security elements span 14 control families: access control, awareness training, audit and accountability, configuration management, identification and authentication, incident response, maintenance, media protection, personnel security, physical protection, risk assessment, security assessment, system and communications protection, and system and information integrity.",
        },
        {
          heading: "NIST SP 800-171 Implementation",
          content:
            "NIST SP 800-171 defines 110 security requirements (controls) mapped to the 14 families. Contractors must implement all applicable controls on systems that process, store, or transmit CDI—not enterprise-wide unless CDI commingles. Implementation evidence includes policies, configuration baselines, access lists, encryption settings, and vulnerability scan results. Contracts staff coordinate with IT security to scope environments (on-prem, cloud, sub-managed) and confirm cloud service offerings meet FedRAMP Moderate equivalency or agency-approved alternatives where required. Gap assessments against 800-171 drive POA&M priorities before customer or DCMA review.",
        },
        {
          heading: "System Security Plan (SSP) and POA&M",
          content:
            "The System Security Plan documents how each NIST 800-171 control is implemented—or planned—for each covered system boundary. The Plan of Action and Milestones (POA&M) lists unimplemented controls, risk ratings, remediation steps, responsible owners, and target completion dates. DFARS expects contractors to maintain current SSP and POA&M artifacts and make them available to DoD upon request. Contracts managers ensure POA&M items have funded remediation plans and executive visibility—open POA&M items beyond agreed timelines can block award on follow-on contracts or trigger SPRS score degradation.",
        },
        {
          heading: "CMMC 2.0 Program",
          content:
            "Cybersecurity Maturity Model Certification (CMMC) 2.0 builds on NIST 800-171 with assessment requirements for the defense industrial base. Level 1 (Foundational) covers basic safeguarding of Federal Contract Information with annual self-assessment. Level 2 (Advanced) aligns with NIST 800-171 and may require third-party assessment (C3PAO) or self-assessment depending on program priority and data sensitivity. Level 3 (Expert) adds enhanced controls from NIST SP 800-172 for the highest-risk programs. Solicitations increasingly specify required CMMC level at award through DFARS 252.204-7021. Contracts professionals coordinate assessment budgeting, timeline, and flow-down before bidding CMMC-gated opportunities.",
        },
        {
          heading: "Incident Reporting and Related Clauses",
          content:
            "DFARS 252.204-7012(c) requires contractors to report cyber incidents affecting covered systems or CDI to DoD within 72 hours of discovery via the mandatory reporting procedures (currently through DC3/DIBNET channels as updated in clause text). Related clauses 252.204-7019 (Notice of NIST SP 800-171 DoD Assessment Requirements), 252.204-7020 (NIST SP 800-171 DoD Assessment Requirements), and 252.204-7021 (CMMC Level Requirement) tie assessment scores in SPRS (Supplier Performance Risk System) to eligibility. Prime contractors must flow 252.204-7012 and applicable cyber clauses to all subs whose systems handle CDI. Maintain incident playbooks, training records, and flow-down evidence for audits.",
        },
      ],
      "Inventory all systems that will store CDI on your next DoD award. Assign a NIST 800-171 control owner for each of the 14 families, draft SSP and POA&M items for gaps, update subcontract templates to flow 252.204-7012, and verify SPRS score meets solicitation requirements before proposal submission.",
      [
        q("3-3-1", "DFARS 252.204-7012 requires security per:", ["ISO 9001", "NIST SP 800-171", "CMMC only without NIST", "FAR Part 31"], 1, "252.204-7012 mandates adequate security on covered contractor information systems per NIST SP 800-171."),
        tf("3-3-2", "Cyber incident reporting under 252.204-7012 requires notification within 72 hours of discovery for covered incidents.", true, "DFARS 252.204-7012(c) requires rapid reporting of cyber incidents affecting CDI or contractor systems."),
        q("3-3-3", "A System Security Plan (SSP) documents:", ["Only employee vacation schedules", "How NIST 800-171 controls are implemented for covered system boundaries", "Subcontractor profit margins", "CPARS narrative drafts"], 1, "The SSP maps control implementation to each system processing, storing, or transmitting CDI."),
        scenario("3-3-4", "Your POA&M shows 15 open NIST 800-171 gaps and the RFP requires CMMC Level 2 at award in 90 days. What is the contracts manager's best first step?", ["Ignore gaps until after award", "Escalate to leadership with remediation timeline, cost estimate, and bid/no-bid recommendation tied to SPRS and assessment requirements", "Delete the POA&M", "Bill the government for cyber fixes without a mod"], 1, "Open POA&M gaps and CMMC timelines are bid decisions requiring executive risk assessment and funded remediation plans."),
        q("3-3-5", "CMMC 2.0 Level 2 generally aligns with:", ["No security requirements", "NIST SP 800-171 practices for handling CUI", "Classified processing only", "FAR Part 12 commercial exemptions"], 1, "CMMC Level 2 maps to NIST 800-171 controls for CUI protection in the defense industrial base."),
      ],
      {
        realWorldExercise:
          "Complete a NIST 800-171 self-assessment for one covered system: score each of the 14 control families, document findings in a POA&M with owners and dates, and draft SSP sections for the three weakest families.",
      }
    ),
    lesson(
      "dfars",
      "3.4",
      "Defense Contract Management Agency (DCMA)",
      [
        "Describe DCMA's post-award role in contract administration and oversight",
        "Explain the Administrative Contracting Officer (ACO) function distinct from the procuring KO",
        "Manage Government Furnished Equipment (GFE) and Government Furnished Property (GFP)",
        "Apply Earned Value Management (EVM) requirements under DFARS 252.234-7002",
        "Administer Contract Data Requirements List (CDRL) deliverables on DD Form 1423",
      ],
      [
        {
          heading: "DCMA Mission and Contractor Interface",
          content:
            "The Defense Contract Management Agency (DCMA) provides post-award contract administration for DoD and other agencies. DCMA ensures contractors deliver quality products on time and at projected cost through surveillance of manufacturing, financial, and delivery performance. Unlike the procuring Contracting Officer who awarded the contract, DCMA's Administrative Contracting Officer (ACO) handles day-to-day administration—mods within delegated authority, property accountability, progress payments, and quality assurance coordination. Contracts managers at defense contractors should know their assigned DCMA ACO, plant location, and the DCMA Form 644 (Contract Administration Services) listing delegated functions.",
        },
        {
          heading: "The Administrative Contracting Officer (ACO)",
          content:
            "The ACO is a warranted contracting officer located at or near the contractor facility with authority delegated from the procuring KO. ACOs negotiate forward pricing rate agreements, approve billing rates, process certain modifications, and resolve administrative issues during performance. The procuring KO retains authority for scope changes, terminations, and major pricing actions unless specifically delegated. Contractors must route ACO-directed actions through contracts staff to verify the ACO has proper delegation—acting on unauthorized direction creates the same risks as unauthorized COR direction. Maintain a contact log distinguishing KO, COR, and ACO communications.",
        },
        {
          heading: "Government Furnished Equipment and Property (GFE/GFP)",
          content:
            "Government Furnished Equipment (GFE) and Government Furnished Property (GFP) are items provided by the government for contract performance—tools, test equipment, material, or data. DFARS and FAR Part 45 clauses require contractors to establish property management systems, mark government property, perform inventories, and report discrepancies. DCMA conducts property management system reviews. Contracts administrators track GFP on contract schedules, ensure subs receiving GFP flow down property clauses, and coordinate disposition at closeout. Lost or misaccounted GFP can result in financial liability and CPARS hits.",
        },
        {
          heading: "Earned Value Management (EVM)",
          content:
            "Earned Value Management integrates scope, schedule, and cost to measure program performance. DFARS 252.234-7002 (Earned Value Management System) applies to cost or incentive contracts meeting dollar thresholds, requiring an EVMS compliant with ANSI/EIA-748 and DCMA or cognizant agency review. Contractors submit Integrated Program Management Reports (IPMR) or CPR formats per CDRL. Contracts managers ensure EVM reporting CDRLs are staffed, that baseline changes follow change control, and that variance reports trigger management review before DCMA surveillance identifies trends. Weak EVM performance affects CPARS and option exercise decisions.",
        },
        {
          heading: "Contract Data Requirements List (CDRLs)",
          content:
            "CDRLs on DD Form 1423 specify data deliverables—technical reports, schedules, EVM data, quality records—with due dates, distribution, and approval requirements. Each CDRL line item ties to a Data Item Description (DID). Missing CDRLs are among the fastest paths to CPARS downgrades and default termination on performance-based contracts. Contracts administrators maintain a CDRL calendar integrated with program management, track government acceptance in WAWF or customer systems, and flow CDRL obligations to subcontractors where prime deliverables depend on sub data. DCMA monitors CDRL compliance during routine surveillance.",
        },
      ],
      "Build a CDRL master schedule for your largest DoD contract: list every DD Form 1423 line item, due date, responsible author, approval authority, and WAWF submission method. Share with your DCMA ACO contact at kickoff and confirm GFP/GFE accountability procedures.",
      [
        q("3-4-1", "DCMA primarily provides:", ["Pre-award source selection", "Post-award contract administration and surveillance", "Security clearance adjudication", "Proposal color team reviews"], 1, "DCMA administers contracts after award, including quality, property, and progress payment oversight."),
        tf("3-4-2", "The Administrative Contracting Officer (ACO) may have delegated authority for billing rates and certain modifications separate from the procuring KO.", true, "ACOs receive delegated authority from procuring KOs for specified administration functions per the contract administration services letter."),
        q("3-4-3", "Earned Value Management System requirements for DoD contracts appear in:", ["FAR 52.219-14", "DFARS 252.234-7002", "DFARS 252.225-7001", "FAR Part 19 only"], 1, "252.234-7002 prescribes EVMS requirements for qualifying DoD contracts."),
        scenario("3-4-4", "DCMA notifies you that two consecutive CDRLs were late and GFP inventory is overdue. What should contracts management prioritize?", ["Ignore until CPARS posts", "Immediate corrective action plan with revised CDRL calendar, property inventory completion, and ACO briefing", "Terminate all subs", "Stop all invoicing permanently"], 1, "Late CDRLs and property discrepancies require documented corrective action before they trigger default or CPARS downgrades."),
        q("3-4-5", "CDRL deliverables are specified on:", ["SF-1034", "DD Form 1423", "DD Form 254", "SAM.gov profile"], 1, "DD Form 1423 is the Contract Data Requirements List identifying data deliverables and schedules."),
      ],
      {
        realWorldExercise:
          "Create a 90-day CDRL and property compliance calendar: every DD Form 1423 item, GFP serial numbers requiring inventory, EVM report due dates, and assigned owners with escalation paths to the ACO.",
      }
    ),
    lesson(
      "dfars",
      "3.5",
      "Defense Contract Audit Agency (DCAA)",
      [
        "Describe DCAA's role in pre-award and post-award audits",
        "Identify major DCAA audit types: proposal, accounting system, incurred cost, and billing rates",
        "Prepare adequate accounting systems under DFARS 252.242-7006",
        "Submit Incurred Cost Submissions (ICS) and respond to audit findings",
        "Apply Truth in Negotiations Act and certified cost or pricing data requirements",
      ],
      [
        {
          heading: "DCAA Mission and Audit Types",
          content:
            "The Defense Contract Audit Agency (DCAA) provides audit services for DoD and other agencies under the cognizant federal agency (CFA) framework. Pre-award audits include proposal adequacy reviews, forward pricing rate recommendations, and accounting system adequacy examinations. Post-award audits cover Incurred Cost Submissions (ICS), provisional billing rate audits, floor checks, and compliance with FAR Part 31 cost principles. A DCAA finding—questioned costs, inadequate system, or defective pricing—can block award, withhold payments under DFARS 252.242-7005, or trigger repayments. Contracts and finance treat DCAA as a core stakeholder in all cost-reimbursement and T&M defense work.",
        },
        {
          heading: "Accounting System Adequacy Under DFARS 252.242-7006",
          content:
            "DFARS 252.242-7006 (Accounting System Administration) requires an acceptable accounting system for certain cost-type, time-and-materials, and other covered contracts. Criteria include proper segregation of direct and indirect costs, accumulation by contract line item, timekeeping, labor distribution, interim determination of costs, and exclusion of unallowable costs. DCAA uses Form 1408 (Preaward Survey of Prospective Contractor Accounting System) and Form 1107 (Audit Report on Contractor's Accounting System) to document adequacy. Deficiencies must be corrected within prescribed periods or the government may withhold payments under DFARS 252.242-7005 (Contractor Business Systems). System adequacy is prerequisite to competitive cost proposals.",
        },
        {
          heading: "Incurred Cost Submission (ICS)",
          content:
            "Cost-reimbursement and some other contract types require annual Incurred Cost Submission (ICS)—historically SF 1408 and now primarily electronic submission through the DCAA ICE (Incurred Cost Electronically) portal per DFARS and agency guidance. The ICS reconciles claimed costs to audited books, allocates indirect rates, and identifies questioned costs. Contracts managers coordinate with finance to meet submission deadlines (typically six months after fiscal year end), ensure subcontractor cost data is included, and track DCAA audit status. Late or incomplete ICS submissions delay final rate agreements and closeout.",
        },
        {
          heading: "Forward Pricing, Billing Rates, and TINA",
          content:
            "DCAA forward pricing audits support negotiation of rates and proposals. Provisional billing rates require periodic adjustment to actuals through ICS and rate reconciliation. When the Truth in Negotiations Act (TINA) applies, offerors must submit certified cost or pricing data—all facts a prudent buyer would consider—and certify under FAR 52.215-20. Defective pricing (FAR 15.407-1) requires price adjustment if certified data were inaccurate and the government overpaid. Contracts professionals ensure proposals distinguish facts from judgments, update data through the agreement date, and document exceptions to certification.",
        },
        {
          heading: "Working Productively with DCAA",
          content:
            "Establish a single point of contact for audit coordination. Maintain organized contract files, timekeeping records, and BOE traceability DCAA can follow from proposal to ledger. Respond to Information Requests (IRs) completely and on time. Dispute questioned costs through the disputes process rather than ignoring findings. Contracts executives attend entrance and exit conferences for major audits. Proactive adequacy—before RFP submission—reduces pre-award delays and post-award withholds that damage cash flow on CPFF and T&M contracts.",
        },
      ],
      "Before submitting a cost proposal on a TINA-covered DoD RFP, walk DCAA's proposal adequacy checklist: trace each labor hour to a staffing plan, tie rates to audited forward pricing or provisional rate letter, confirm accounting system adequacy status, and obtain management sign-off on the FAR 52.215-20 certification.",
      [
        q("3-5-1", "DCAA primarily supports:", ["Grant writing", "Audit of defense contractor costs, systems, and proposals", "Security clearance processing", "CPARS narrative writing"], 1, "DCAA audits contractor proposals, accounting systems, incurred costs, and billing rates for DoD and other agencies."),
        tf("3-5-2", "DFARS 252.242-7006 prescribes acceptable accounting system criteria for covered DoD contracts.", true, "252.242-7006 establishes accounting system administration requirements enforced through DCAA adequacy reviews."),
        q("3-5-3", "Incurred Cost Submissions (ICS) are required for:", ["All FFP contracts regardless of type", "Cost-reimbursement and certain other contract types per contract terms and regulations", "SAM registration renewals only", "Commercial item purchases under $10,000"], 1, "ICS requirements apply to cost-type and other contracts where FAR/DFARS and contract clauses require annual incurred cost reporting."),
        scenario("3-5-4", "DCAA questions $400K in labor charges citing missing timesheets and mischarged indirect costs. What should contracts management do first?", ["Rebill the same amounts next month", "Work with finance to gather supporting records, assess allowability under FAR Part 31, and respond formally to the audit finding", "Ignore DCAA until closeout", "Certify new pricing data without review"], 1, "Questioned costs require documented response with FAR Part 31 analysis and complete audit trail support."),
        q("3-5-5", "Certified cost or pricing data under TINA is required when:", ["Never on FFP", "TINA applies and no adequate price competition exception exists", "Only for foreign subs", "SAM is expired"], 1, "FAR 15.403 and TINA require certified cost or pricing data when thresholds and exceptions do not apply."),
      ],
      {
        realWorldExercise:
          "Prepare an ICS readiness checklist for your company: fiscal year close timeline, ICE portal access, contract list requiring submission, subcontractor cost collection process, and DCAA auditor contact log.",
      }
    ),
    lesson(
      "dfars",
      "3.6",
      "Key DFARS Clauses for Defense Contractors",
      [
        "Navigate DFARS Part 252 as the defense clause library",
        "Apply cyber clauses 252.204-7012, 7019, 7020, and 7021",
        "Administer domestic preference, export control, and data rights clauses",
        "Understand business system, changes, EVM, and termination clauses",
        "Build a clause compliance matrix with flow-down flags for subcontractors",
      ],
      [
        {
          heading: "Cyber and Information Security Clauses",
          content:
            "252.204-7012 (Safeguarding Covered Defense Information and Cyber Incident Reporting) is the cornerstone cyber clause requiring NIST SP 800-171 compliance and 72-hour incident reporting. 252.204-7019 (Notice of NIST SP 800-171 DoD Assessment Requirements) requires contractors to post current assessment scores to SPRS. 252.204-7020 (NIST SP 800-171 DoD Assessment Requirements) governs medium and high assessments. 252.204-7021 (Contractor Compliance with the Cybersecurity Maturity Model Certification Level Requirement) specifies required CMMC level at award. All require flow-down to subs whose systems handle CDI. Contracts managers treat these as a suite—not isolated obligations.",
        },
        {
          heading: "Domestic Preference and Export Control Clauses",
          content:
            "252.225-7001 (Buy American—Balance of Payments Program—DoD) restricts use of foreign end products on DoD contracts with exceptions for qualifying countries and commercial off-the-shelf items. 252.225-7048 (Export-Controlled Items) requires compliance with ITAR and EAR, flowing export obligations to subs. 252.225-7057 (Reporting Requirements for Contracted Services) mandates reporting of contractor and sub personnel performing in designated operational areas. These clauses interact with supply chain, trade compliance, and HR systems—contracts staff coordinate with operations to verify country of origin and export classifications before delivery.",
        },
        {
          heading: "Data Rights and Intellectual Property",
          content:
            "252.227-7013 (Rights in Technical Data—Noncommercial Items) and 252.227-7014 (Rights in Noncommercial Computer Software and Noncommercial Computer Software Documentation) define government license rights (unlimited, government purpose, limited) based on funding source and development context. Incorrect data rights assertions in deliverable markings create disputes and limit commercial reuse. Contracts professionals map PWS deliverables to required license rights at proposal, verify DFARS supplement tables in Section H, and flow matching terms to subs generating technical data or software for the government.",
        },
        {
          heading: "Business Systems, Changes, and EVM Clauses",
          content:
            "252.242-7005 (Contractor Business Systems) allows payment withholding when accounting, estimating, purchasing, EVMS, or material management systems are deficient. 252.242-7006 (Accounting System Administration) sets accounting system criteria enforced by DCAA. 252.243-7001 (Changes—Fixed-Price) and 252.243-7002 (Requests for Equitable Adjustment—Fixed-Price) govern DoD fixed-price change orders and REA procedures. 252.234-7002 (Earned Value Management System) requires ANSI/EIA-748 compliant EVMS on qualifying contracts. 252.246-7007 (Contractor Counterfeit Electronic Part Detection and Avoidance System) mandates supply chain controls for electronic parts.",
        },
        {
          heading: "Termination, Small Business, and Key Personnel Clauses",
          content:
            "252.249-7002 (Termination (Fixed-Price)) supplements FAR termination clauses for DoD fixed-price contracts. 252.219-7003 (Small Business Subcontracting Plan (DoD)) adds DoD-specific small business reporting to prime plans. 252.237-9000 (Key Personnel) requires prior approval before replacing named key personnel—a common compliance trap on staffed services contracts. Contracts managers extract every applicable 252.x clause at award, assign owners, flag mandatory flow-down, and review the matrix at each mod, option exercise, and sub award. Clause-by-clause review of Section I is the baseline skill for defense contracts professionals.",
        },
      ],
      "Perform a clause-by-clause review of Section I on your most complex DoD contract. For each 252.x clause listed in this lesson, document: present (Y/N), fill-in values, internal owner, flow-down required (Y/N), and first compliance deliverable due date.",
      [
        q("3-6-1", "DFARS 252.204-7012 primarily addresses:", ["Buy American requirements", "Safeguarding Covered Defense Information and cyber incident reporting", "Default termination", "Small business goals only"], 1, "252.204-7012 is the core DFARS cyber clause requiring NIST 800-171 and incident reporting."),
        tf("3-6-2", "DFARS 252.225-7001 implements DoD Buy American requirements that may restrict foreign end products.", true, "252.225-7001 applies the Balance of Payments Program Buy American requirements to DoD acquisitions."),
        q("3-6-3", "DFARS 252.227-7013 governs:", ["Prompt payment interest", "Rights in technical data for noncommercial items", "EVM reporting formats only", "Security clearance levels"], 1, "252.227-7013 defines government license rights in noncommercial technical data."),
        scenario("3-6-4", "A new DoD FFP contract includes 252.243-7001, 252.242-7006, and 252.204-7012. The program manager wants to skip the clause matrix and start billing immediately. What do you recommend?", ["Proceed without documentation", "Complete the clause compliance matrix with owners and flow-down flags before performance and billing begin", "Flow only FAR clauses to subs", "Delete DFARS clauses from the file copy"], 1, "Defense contracts require systematic clause administration—especially business system, changes, and cyber clauses—before performance starts."),
        q("3-6-5", "DFARS 252.242-7005 (Contractor Business Systems) allows:", ["Automatic contract extensions", "Withholding of payments when specified business systems are deficient", "Waiving all audit rights", "Eliminating subcontractor flow-down"], 1, "252.242-7005 authorizes withholding when accounting, EVMS, or other covered systems fail to meet standards."),
      ],
      {
        realWorldExercise:
          "Complete a Section I clause matrix covering all 252.x clauses cited in this lesson for one contract: clause number, title, fill-in values, owner, flow-down (Y/N), and subcontract template updated (Y/N).",
      }
    ),
  ],
};
