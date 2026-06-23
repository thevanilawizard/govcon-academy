import { lesson, q } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_1: TrainingModule = {
  id: "foundations",
  number: 1,
  title: "Foundations of Federal Contracting",
  description:
    "Build the core knowledge every contracts professional needs: how the federal acquisition system works, contract types, the acquisition lifecycle, and the SAM.gov ecosystem.",
  careerOutcomes: [
    "Navigate FAR hierarchy and identify which regulations apply to a given contract",
    "Distinguish contract types and explain risk allocation from a contractor perspective",
    "Map pre-award through closeout milestones on a real acquisition timeline",
    "Maintain SAM.gov registration and use public data for competitive intelligence",
  ],
  lessons: [
    lesson(
      "foundations",
      "1.1",
      "The Federal Acquisition System",
      [
        "Explain what the FAR is, why it exists, and who must follow it",
        "Describe the regulatory hierarchy from FAR through agency supplements to contract clauses",
        "Identify the roles of the KO, COR, and Program Manager",
        "Distinguish prime contractors from subcontractors and explain privity of contract",
      ],
      [
        {
          heading: "What the FAR Is and Why It Exists",
          content:
            "The Federal Acquisition Regulation (FAR) is the primary rulebook governing how executive agencies buy goods and services. Codified at 48 CFR Chapter 1, it exists to ensure the government obtains supplies and services efficiently, economically, and in the public interest while maintaining public trust. The FAR applies to all executive branch agencies unless a statute or agency-specific regulation provides an exception. For contractors, the FAR is not optional guidance—it is incorporated into nearly every federal contract through standard clauses and defines your obligations from proposal through closeout. Understanding the FAR is the baseline credential for any Contracts Manager or Acquisition Specialist role.",
        },
        {
          heading: "The Regulatory Hierarchy",
          content:
            "Federal acquisition law operates in layers. At the top sits statute (e.g., the Competition in Contracting Act). The FAR implements those statutes for all agencies. Agency supplements—such as the Defense Federal Acquisition Regulation Supplement (DFARS) for DoD, the HHS Acquisition Regulation (HHSAR), and the General Services Administration Acquisition Manual (GSAM)—add requirements specific to that agency's mission. Below supplements sit the solicitation and contract documents themselves, which incorporate FAR and supplement clauses by reference. When a clause appears in your contract, you must comply with it regardless of whether you read it. A contracts professional always checks which supplement applies before interpreting requirements.",
        },
        {
          heading: "Key Government Roles: KO, COR, and PM",
          content:
            "Only a Contracting Officer (KO)—a warranted official with authority to obligate government funds—can bind the government contractually. The Contracting Officer's Representative (COR) monitors day-to-day performance, accepts deliverables, and recommends actions to the KO, but cannot modify contract terms or authorize work outside scope. The Program Manager (PM) owns mission outcomes and often drives requirements, but likewise lacks contracting authority. Contractors who treat the COR as if they can approve scope changes without a KO modification create unauthorized obligations—a serious compliance risk under FAR 52.232-39. Knowing who can authorize what prevents costly disputes.",
        },
        {
          heading: "Prime, Subcontractor, and Privity of Contract",
          content:
            "The prime contractor holds the direct contract with the government and bears full responsibility for performance, even when subcontractors do the work. Subcontractors have no privity of contract with the government—they cannot file claims directly against the agency and must look to the prime for payment and direction. This is why prime contractors vet subcontractor responsibility under FAR Part 9 and flow down required clauses. Privity also explains why only the prime can request equitable adjustments or submit claims. As a contracts professional at a prime, you manage both the prime contract and the subcontract chain; at a sub, you must understand your flow-down obligations and the limits of your relationship with the government customer.",
        },
      ],
      "Open acquisition.gov, locate FAR 52.243-1 in the clause matrix for a fixed-price contract, and trace how it flows from Part 43 into your executed contract. Practice reading the clause text alongside the contract's changes article to understand what triggers a formal change order versus informal COR direction.",
      [
        q(
          "1-1-1",
          "What is the primary purpose of the FAR?",
          [
            "To set contractor profit margins",
            "To govern how executive agencies acquire supplies and services",
            "To replace state procurement laws for all businesses",
            "To establish security clearance requirements only",
          ],
          1,
          "FAR 1.101 states the vision of the FAR System is to deliver best value or, in certain cases, the lowest price, while maintaining the public's trust and fulfilling policy objectives."
        ),
        q(
          "1-1-2",
          "Which official has authority to bind the government contractually?",
          [
            "Contracting Officer Representative (COR)",
            "Program Manager (PM)",
            "Contracting Officer (KO)",
            "Technical Point of Contact (TPOC)",
          ],
          2,
          "Under FAR 1.601, only a Contracting Officer acting within the scope of their warrant may enter into, administer, or terminate contracts and make related determinations."
        ),
        q(
          "1-1-3",
          "What does 'privity of contract' mean for a subcontractor?",
          [
            "The sub can negotiate directly with the KO for scope changes",
            "The sub has a direct contractual relationship only with the prime, not the government",
            "The sub inherits all prime contract clauses automatically without flow-down",
            "The sub may protest awards at GAO independently of the prime",
          ],
          1,
          "Subcontractors lack privity with the government. Their rights and obligations flow through the prime contract and subcontract, not a direct agency agreement."
        ),
        q(
          "1-1-4",
          "Where do agency-specific requirements beyond the FAR typically appear?",
          [
            "Only in the contractor's internal policy manual",
            "In agency acquisition supplements such as DFARS or HHSAR",
            "In state commercial code",
            "In the contractor's proposal only",
          ],
          1,
          "Agency supplements (e.g., DFARS for DoD at 48 CFR Chapter 2) implement agency policies and add clauses and procedures on top of the FAR baseline."
        ),
        q(
          "1-1-5",
          "A COR emails you to start work on a new task not in the PWS. What is the correct contracts response?",
          [
            "Begin work immediately since the COR monitors performance",
            "Decline politely and request a contract modification signed by the KO",
            "Invoice the work as out-of-scope without documentation",
            "Ask the Program Manager to override the COR",
          ],
          1,
          "CORs cannot authorize out-of-scope work. FAR 52.232-39 makes unauthorized obligations unenforceable against the government; changes require KO action under FAR Part 43."
        ),
      ]
    ),
    lesson(
      "foundations",
      "1.2",
      "Types of Federal Contracts",
      [
        "Compare FFP, T&M, CPFF, IDIQ, and BPA contract structures",
        "Explain who bears cost and performance risk under each type",
        "Identify contract type from Section B of an executed contract",
        "Assess profitability implications from a contractor perspective",
      ],
      [
        {
          heading: "Firm Fixed Price (FFP)",
          content:
            "Under a Firm Fixed Price contract, the contractor delivers the specified scope for a set price regardless of actual costs incurred. FFP is appropriate when requirements are well-defined and cost risk is reasonably predictable. The contractor bears nearly all cost risk—if labor runs over or materials cost more than estimated, profit erodes. Conversely, efficient execution can yield strong margins. FFP is the government's preferred type for commercial-like acquisitions and stable requirements. Pricing an FFP bid requires rigorous basis-of-estimate discipline because there is no cost reimbursement safety net.",
        },
        {
          heading: "Time and Materials (T&M) and Labor-Hour",
          content:
            "T&M contracts pay for labor at specified rates plus materials at cost (with handling fees if allowed). They include a Not-to-Exceed (NTE) ceiling that caps total government liability. T&M is used when scope cannot be defined precisely at award but the government needs flexibility. Loaded labor rates must reflect direct labor, fringe, overhead, and sometimes G&A per the contract's rate structure. From a contractor view, T&M reduces pricing risk but caps upside; exceeding the NTE requires a modification. Labor-Hour contracts pay for labor only—common for advisory services.",
        },
        {
          heading: "Cost-Reimbursement: CPFF and Variants",
          content:
            "Cost Plus Fixed Fee (CPFF) reimburses allowable incurred costs plus a fixed fee that does not vary with actual cost (within contract limits). CPFF suits research, development, and other high-uncertainty efforts where fixed pricing would be impractical. The government retains audit rights under FAR Part 31 and clause 52.215-2; unallowable costs are not reimbursed. Cost Plus Incentive Fee (CPIF) and Cost Plus Award Fee (CPAF) add performance incentives. Contractors on cost-type work must maintain adequate accounting systems and understand allowable cost rules—a DCAA or cognizant audit may follow.",
        },
        {
          heading: "IDIQ, Task Orders, and BPAs",
          content:
            "Indefinite Delivery/Indefinite Quantity (IDIQ) contracts establish a ordering vehicle with stated minimum and maximum quantities or values over a base and option periods. Individual task or delivery orders compete (fully or among awardees on a multiple-award IDIQ) for specific work. Government-Wide Acquisition Contracts (GWACs) like OASIS or Alliant are large-scale IDIQ vehicles. Blanket Purchase Agreements (BPAs) under FAR Part 13 simplify repetitive buys against a established terms-and-conditions framework. IDIQs offer contractors pipeline visibility but require sustained capture on each order. BPAs favor incumbency and streamlined ordering for the agency.",
        },
        {
          heading: "Choosing and Reading Contract Type",
          content:
            "Contract type appears in Section B (Supplies or Services and Prices/Costs) of the uniform contract format. A contracts professional reads Section B together with Section H (special contract requirements) and the clause set to understand payment mechanics. FFP maximizes margin potential with discipline; T&M balances flexibility and risk; CPFF suits R&D with compliance overhead; IDIQs drive long-term revenue through order capture. Misidentifying type leads to pricing errors, invoice rejections, and audit findings.",
        },
      ],
      "Obtain a redacted contract award (via FOIA, a teammate, or a training sample) and locate Section B. Identify the contract type, any NTE ceilings, labor categories if T&M, and the payment clause (e.g., FAR 52.232-7 for T&M). Write a one-paragraph summary of who bears cost risk and how invoicing works.",
      [
        q(
          "1-2-1",
          "Under a Firm Fixed Price contract, who primarily bears cost overrun risk?",
          [
            "The government",
            "The contractor",
            "The Contracting Officer Representative",
            "The subcontractor exclusively",
          ],
          1,
          "FFP contracts place performance and cost risk on the contractor. The price is fixed regardless of actual costs, per FAR 16.202."
        ),
        q(
          "1-2-2",
          "What does a Not-to-Exceed (NTE) ceiling on a T&M contract limit?",
          [
            "The number of contractor employees",
            "Total government liability under the contract",
            "Subcontractor profit margins",
            "The COR's travel budget",
          ],
          1,
          "An NTE ceiling caps the maximum amount the government will pay. Work beyond the ceiling requires a bilateral modification by the KO."
        ),
        q(
          "1-2-3",
          "CPFF contracts reimburse which costs?",
          [
            "Only fixed fee amounts",
            "Allowable incurred costs plus a fixed fee",
            "All costs regardless of allowability",
            "Materials only, never labor",
          ],
          1,
          "Cost-reimbursement contracts pay allowable costs as defined in FAR Part 31, plus fee. Unallowable costs are the contractor's responsibility."
        ),
        q(
          "1-2-4",
          "Where in the uniform contract format is contract type and pricing typically found?",
          [
            "Section A — Solicitation/Contract Form",
            "Section B — Supplies or Services and Prices/Costs",
            "Section K — Representations and Certifications",
            "Section M — Evaluation Factors",
          ],
          1,
            "Section B identifies line items, quantities, unit prices or cost elements, and the overall contract type structure."
        ),
        q(
          "1-2-5",
          "An IDIQ contract is best described as:",
          [
            "A single delivery of all supplies at award",
            "A vehicle for issuing task or delivery orders up to stated min/max limits",
            "A grant, not a contract",
            "A subcontract only",
          ],
          1,
          "IDIQ contracts (FAR 16.504) provide for an indefinite quantity of supplies or services during a period, with stated minimums and maximums."
        ),
      ]
    ),
    lesson(
      "foundations",
      "1.3",
      "The Acquisition Lifecycle",
      [
        "Describe pre-award, award, and post-award phases and their key activities",
        "Identify milestone dates that matter for capture and proposal teams",
        "Explain how modifications, options, and closeout fit in post-award",
        "Map a solicitation timeline from market research through closeout",
      ],
      [
        {
          heading: "Pre-Award: Shaping the Requirement",
          content:
            "Pre-award begins long before an RFP drops. Agencies conduct market research (FAR 10) to understand industry capability and pricing. Sources Sought and Request for Information notices gauge small business participation and refine requirements. Draft RFPs and industry days give vendors opportunity to influence—but not improperly direct—the acquisition. For contractors, this phase is capture: building customer intimacy, shaping requirements toward your strengths, and deciding bid/no-bid. Missing pre-award engagement means competing on the government's terms alone, often at lower win rates.",
        },
        {
          heading: "Award Phase: Solicitation Through Selection",
          content:
            "The award phase opens with solicitation release on SAM.gov or agency portals. The Q&A period (often governed by FAR 15.206 for negotiated acquisitions) clarifies ambiguities; all answers are shared with offerors. Proposals must meet Section L (instructions) and address Section M (evaluation criteria) for maximum score. After submission, evaluators assess technical, past performance, and price. Negotiated procurements may include discussions, clarifications, and Final Proposal Revisions (FPRs). The KO makes the award; unsuccessful offerors may request a debrief under FAR 15.506. Understanding this timeline helps proposal managers allocate color team reviews and pricing finalization.",
        },
        {
          heading: "Post-Award: Performance Through Closeout",
          content:
            "Post-award starts with contract kickoff: confirming POP, key personnel, security requirements, and invoicing procedures. During performance, the contractor delivers against the PWS, manages subcontractors, and submits invoices. Contract modifications under FAR Part 43 implement scope, schedule, or funding changes. Option exercises extend performance when the government elects additional periods. Closeout (FAR 4.804) releases residual funds, settles subcontracts, and archives records after final payment. CPARS evaluations during performance affect future competitiveness. Contracts professionals touch every post-award milestone from setup through final release of claims.",
        },
        {
          heading: "Timeline Discipline for Business Development",
          content:
            "Dates drive GovCon pipeline management. Track solicitation issue date, questions due, proposal due, anticipated award, base period start, option decision points, and final POP. A 60-day proposal window on a must-win opportunity requires early teaming and pricing. Option years often depend on CPARS ratings—plan performance narratives accordingly. Mapping milestones on a shared timeline prevents missed Q&A deadlines, late mods, and expired options. This discipline separates reactive bid shops from strategic capture organizations.",
        },
      ],
      "Select an active SAM.gov opportunity in your NAICS. Build a timeline spreadsheet from posted date through estimated option end, marking Q&A due, proposal due, anticipated award, base POP, and option periods. Share with your capture lead to align proposal resources.",
      [
        q(
          "1-3-1",
          "Sources Sought notices primarily help the government:",
          [
            "Award contracts without competition",
            "Conduct market research and assess industry capability",
            "Debar non-responsive vendors",
            "Issue task orders on IDIQs",
          ],
          1,
          "Market research under FAR Part 10 includes issuing Sources Sought and RFIs to refine requirements and determine small business availability."
        ),
        q(
          "1-3-2",
          "Section L of an RFP defines:",
          [
            "Evaluation criteria and scoring",
            "Proposal preparation instructions",
            "Contract clauses only",
            "Invoice submission procedures post-award",
          ],
          1,
            "Section L tells offerors how to format and submit proposals. Non-compliance can render a proposal unacceptable regardless of merit."
        ),
        q(
          "1-3-3",
          "Contract modifications for scope changes are governed principally by:",
          [
            "FAR Part 43 — Contract Modifications",
            "FAR Part 19 — Small Business Programs",
            "FAR Part 31 — Cost Principles",
            "FAR Part 52 — Contract Clauses only",
          ],
          0,
          "FAR Part 43 establishes policies and procedures for modifying contracts. Bilateral mods require KO signature."
        ),
        q(
          "1-3-4",
          "When does post-award performance typically begin?",
          [
            "At industry day",
            "After contract kickoff following award and contract receipt",
            "When the draft RFP is published",
            "After CPARS closeout",
          ],
          1,
          "Performance begins after award, contract execution, and kickoff—when the contractor accepts the order and POP starts."
        ),
        q(
          "1-3-5",
          "Why do option exercise dates matter to contractors?",
          [
            "They determine SAM.gov registration renewal only",
            "They mark decision points where the government may extend or end the contract based on need and performance",
            "They replace the need for contract modifications",
            "They are irrelevant if CPARS is satisfactory",
          ],
          1,
          "Options give the government unilateral extension rights. Contractors must perform well through CPARS and maintain readiness as option decision windows approach."
        ),
      ]
    ),
    lesson(
      "foundations",
      "1.4",
      "SAM.gov and the Federal Contracting Ecosystem",
      [
        "Complete and maintain SAM.gov entity registration with correct representations",
        "Explain UEI, CAGE code, and NAICS selection implications",
        "Understand set-aside certifications and recertification requirements",
        "Use USAspending, FPDS, and SAM data for competitive intelligence",
      ],
      [
        {
          heading: "SAM.gov Registration in Depth",
          content:
            "System for Award Management (SAM.gov) is the authoritative registry for entities doing business with the federal government. Registration is free but requires annual renewal. Core Entity Information includes legal business name, physical address, and entity structure. Financial Information captures banking details for Electronic Funds Transfer—the government pays only registered accounts. Assertions and certifications include size status, disaster response, and various FAR representations that flow into offers. A contracts professional ensures registration stays active; an expired SAM blocks award and payment regardless of proposal quality.",
        },
        {
          heading: "UEI, CAGE, and the DUNS Transition",
          content:
            "In April 2022, the government replaced DUNS numbers with the Unique Entity Identifier (UEI) assigned in SAM.gov. The UEI is the sole identifier for federal awards and must appear on invoices and contract documents. Commercial and Government Entity (CAGE) codes are assigned by DLA for entities performing on DoD contracts or holding classified work; CAGE supports clearance and logistics systems. Contractors need both UEI (universal) and CAGE (especially for defense) correctly linked. Data mismatches between SAM, proposals, and contract awards cause payment delays and compliance audits.",
        },
        {
          heading: "NAICS Codes and Size Standards",
          content:
            "North American Industry Classification System (NAICS) codes describe what a business does. Contractors select primary and secondary NAICS in SAM. Size standards—usually average annual receipts or employee count—determine small business status per NAICS. Size is assessed at the contract level for set-asides (FAR 19.102). Choosing too broad a NAICS can disqualify you from small business set-asides; too narrow limits opportunity visibility. The SBA Table of Size Standards is the reference. Recertification is required when status changes or at option exercise on long-term contracts.",
        },
        {
          heading: "Set-Aside Certifications",
          content:
            "Small business programs—8(a), HUBZone, SDVOSB, WOSB, and others—require certification through SBA or VA (for VOSB/SDVOSB). Representations in SAM and offer submissions must be accurate; false claims trigger False Claims Act exposure. Large businesses must meet small business subcontracting plan requirements on contracts above thresholds (FAR 19.702). Understanding certification eligibility, maintenance, and recertification timing is essential for BD and contracts staff advising leadership on which opportunities to pursue.",
        },
        {
          heading: "Public Data for Competitive Intelligence",
          content:
            "USAspending.gov aggregates federal award data under the DATA Act. FPDS (Federal Procurement Data System) provides contract-level detail on awards, modifications, and NAICS. SAM.gov Contract Data and Entity Information reveal incumbent vendors, award values, and registration status. Beta.SAM consolidates opportunities and entity search. A contracts or capture analyst builds competitor profiles from this data: incumbents, pricing trends via modification history, agency spending patterns, and teaming targets. This open-source intelligence informs bid/no-bid and pricing strategy without proprietary access.",
        },
      ],
      "Pull your top three competitors from FPDS by NAICS and agency. For each, document total obligated dollars over three years, incumbent contracts expiring in the next 18 months, and small business tier. Present findings to your BD team as a capture intelligence brief.",
      [
        q(
          "1-4-1",
          "What identifier replaced DUNS for federal awards in 2022?",
          [
            "CAGE code",
            "Unique Entity Identifier (UEI)",
            "DUNS continued as primary",
            "Taxpayer Identification Number only",
          ],
          1,
          "SAM.gov now assigns the UEI as the official identifier for federal awards, replacing DUNS for entity identification."
        ),
        q(
          "1-4-2",
          "What happens if SAM.gov registration expires before award?",
          [
            "Award proceeds with a verbal waiver",
            "The entity cannot receive award or payment until registration is active",
            "Only small businesses are affected",
            "Payment continues but new bids are blocked",
          ],
          1,
          "Active SAM registration is required for award and payment. FAR 4.1101 requires contractors to be registered in SAM."
        ),
        q(
          "1-4-3",
          "Small business size status is generally determined by:",
          [
            "Total company revenue across all industries only",
            "NAICS-specific size standards (receipts or employees)",
            "Number of contracts held",
            "Years in business",
          ],
          1,
          "FAR 19.102 and SBA size standards tie small business status to the NAICS code assigned to the procurement."
        ),
        q(
          "1-4-4",
          "CAGE codes are especially important for:",
          [
            "All civilian agency IT contracts only",
            "DoD-related work, security clearance processing, and logistics",
            "Grant applications to NIH only",
            "State/local contracting",
          ],
          1,
          "DLA assigns CAGE codes used in DoD systems for entity identification, clearance sponsorship, and supply chain tracking."
        ),
        q(
          "1-4-5",
          "Which tool provides searchable federal spending and award data for competitive analysis?",
          [
            "USAspending.gov",
            "LinkedIn only",
            "DCAA audit portal",
            "Court of Federal Claims docket",
          ],
          0,
          "USAspending.gov publishes federal spending data under the DATA Act, enabling analysis of awards by agency, recipient, and NAICS."
        ),
      ]
    ),
  ],
};
