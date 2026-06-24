import type { CompetencyLesson, QuizQuestion } from "../types";

export interface Competency {
  id: string;
  title: string;
  lessons: CompetencyLesson[];
}

function q(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

export const COMPETENCIES: Competency[] = [
  {
    id: "comp-1-review",
    title: "Contract Review and Negotiation",
    lessons: [
      {
        id: "lesson-read-30-min",
        competencyId: "comp-1-review",
        title: "How to Read a Contract in 30 Minutes",
        sections: [
          {
            heading: "The 5 Sections Every Contracts Manager Reads First",
            content:
              "When you receive a new contract or mod, read in this order: (1) Section B — Supplies/Services and Prices to understand CLINs, funding, and contract type; (2) Section C — Statement of Work to define scope boundaries; (3) Section H — Special Contract Requirements for unusual obligations; (4) Section I — Contract Clauses for mandatory and special terms; (5) Section J — Attachments for PWS details, DD 254s, and data rights exhibits. This sequence tells you what you're delivering, for how much, under what rules, before you read the boilerplate in Section A.",
          },
          {
            heading: "Section B: CLINs, Funding, and Contract Type",
            content:
              "Each Contract Line Item Number (CLIN) identifies a separable unit of supply or service with its own price, amount, and sometimes period of performance. Distinguish ceiling price from funded value — on IDIQ and cost-type contracts you may have $10M ceiling but only $500K funded. Contract type (FFP, CPFF, T&M) determines your risk profile and which clauses apply. Note whether options are unilateral (government may exercise) or require bilateral agreement.",
          },
          {
            heading: "Section C and H: Scope and Special Requirements",
            content:
              "The PWS or SOW in Section C defines performance standards, deliverables, and acceptance criteria. Section H captures requirements that don't fit standard clause language — key personnel, security clearances, place of performance, reporting requirements, and agency-specific mandates. Red flags: scope that says 'and other tasks as directed' without a changes clause limitation, or performance standards that are subjective without measurable criteria.",
          },
          {
            heading: "Section I: The 10 Clauses to Find Immediately",
            content:
              "Locate these clauses within minutes: Changes (52.243-x), Termination (52.249-x), Payments/Invoicing (52.232-x), Limitation of Funds (52.232-22 on cost-type), Disputes (52.233-1), Intellectual Property/Data Rights, Small Business Limitations (52.219-14), Security (DFARS 252.204-7012 if defense), Assignment/Novation (42.12), and Option provisions. Missing standard clauses or presence of unusual alternates signals negotiation gaps or heightened risk.",
          },
          {
            heading: "Section J and Red Flags",
            content:
              "Attachments often contain the detailed PWS, Wage Determinations (Service Contract Act), DD Form 254 (security classification), and CDRLs (deliverable schedule). Read attachments — courts apply the 'duty to read' doctrine; you cannot later claim you didn't know what Attachment 3 required. Red flags: unlimited liability, broad data rights grants (unlimited rights), absent limitation of funds on CPFF, OCI clauses without company review, and ambiguous deliverable dates.",
          },
        ],
        exercise: {
          type: "timed-search",
          title: "10-Minute Contract Scavenger Hunt",
          instructions:
            "Using Document Library Contract W912HQ-24-C-0042, find: (1) total funded value, (2) POP end date, (3) Changes clause number, (4) key personnel requirement, (5) data rights clause. You have 10 minutes. Score based on accuracy and citation of section/paragraph.",
          data: { documentId: "doc-federal-contract", timeLimitMinutes: 10 },
        },
        quiz: [
          q(
            "read-q1",
            "In what order should a contracts manager prioritize contract sections on first read?",
            ["A → M → B", "B → C → H → I → J", "I → A → B → C", "J → H → C → B"],
            1,
            "Section B (pricing), C (scope), H (special requirements), I (clauses), and J (attachments) provide the operational picture fastest."
          ),
          q(
            "read-q2",
            "What is the difference between ceiling price and funded value?",
            [
              "They are always identical",
              "Ceiling is maximum contract potential; funded is currently obligated",
              "Funded is always higher than ceiling",
              "Ceiling applies only to commercial items",
            ],
            1,
            "Ceiling price caps total contract value; funded value is what the government has obligated and you may currently invoice against."
          ),
          q(
            "read-q3",
            "Which attachment commonly establishes security classification requirements?",
            ["SF 30", "DD Form 254", "SF 294", "DD Form 250"],
            1,
            "DD Form 254 (Contract Security Classification Specification) defines classified access requirements."
          ),
          q(
            "read-q4",
            "A 'duty to read' doctrine means:",
            [
              "The government must explain every clause",
              "Contractors are bound by contract terms whether or not they read them",
              "Only the KO must read the contract",
              "Verbal briefings override written terms",
            ],
            1,
            "Contractors are responsible for understanding contract terms at award; failure to read is not a defense."
          ),
        ],
      },
      {
        id: "lesson-negotiation",
        competencyId: "comp-1-review",
        title: "Contract Negotiation Fundamentals",
        sections: [
          {
            heading: "What Is Actually Negotiable",
            content:
              "In federal contracting, mandatory FAR/DFARS clauses are not negotiable — the KO must include them. Negotiable elements include: price, delivery schedule (within reason), specific terms in Section H, data rights assertions, subcontracting plans, and some payment terms. Commercial item acquisitions under FAR Part 12 allow more flexibility. Subcontract negotiations are more flexible but must comply with prime contract flow-downs.",
          },
          {
            heading: "Negotiation Framework: BATNA, Target, Reservation",
            content:
              "BATNA (Best Alternative to Negotiated Agreement) is your walk-away option — know it before any negotiation. Target price is your ideal outcome; reservation price is the worst you'll accept. Document positions in a negotiation plan approved by management. For subcontracts, BATNA may be an alternate vendor quote; for prime proposals, it may be no-bid.",
          },
          {
            heading: "Commercial vs. Negotiated Contracts",
            content:
              "Commercial item contracting (FAR Part 12) relies on market pricing and catalog/comparison analysis — less cost detail required. Negotiated acquisitions (FAR Part 15) require cost or pricing data when thresholds are met (TINA/FAR 15.403). Tailor your negotiation strategy: commercial negotiations focus on terms and delivery; negotiated focus on rates, fee, and cost substantiation.",
          },
          {
            heading: "Documenting Results",
            content:
              "Every negotiation must produce a Memorandum of Negotiation (MON) or Price Negotiation Memorandum documenting: method of analysis, data relied upon, concessions made, and final fair and reasonable determination. For subcontracts, the prime's subcontract negotiation memo supports CPSR and DCAA review. Poor documentation is the #1 finding in purchasing system reviews.",
          },
        ],
        exercise: {
          type: "negotiation",
          title: "Subcontract Negotiation Simulation",
          instructions:
            "Negotiate with vendor 'Apex Systems' on a $650K T&M subcontract. They want net-45 payment, no audit rights, and 15% rate escalation. Your budget is $620K with net-30 and full flow-downs. Reach agreement within 3 rounds or document impasse with alternate vendor recommendation.",
          data: { vendorName: "Apex Systems", budget: 620000, rounds: 3 },
        },
        quiz: [
          q(
            "neg-q1",
            "Which of the following is NOT negotiable in a standard FAR contract?",
            ["Delivery schedule", "Mandatory FAR 52.233-1 Disputes clause", "Price", "Data rights assertions"],
            1,
            "Mandatory FAR clauses prescribed by regulation cannot be deleted or altered without statutory authority."
          ),
          q(
            "neg-q2",
            "BATNA stands for:",
            [
              "Best Alternative to Negotiated Agreement",
              "Basic Agreement Terms and Negotiation Act",
              "Budget Authorization for Negotiated Awards",
              "Bid Analysis for Technical Negotiations",
            ],
            0,
            "BATNA is your best option if negotiations fail — it defines your walk-away point."
          ),
          q(
            "neg-q3",
            "A Memorandum of Negotiation should document:",
            [
              "Only the final price",
              "Analysis method, data relied upon, and fair-and-reasonable conclusion",
              "The competitor's proprietary pricing",
              "Verbal agreements not in the contract",
            ],
            1,
            "MONs must support the fair-and-reasonable price determination with documented analysis."
          ),
          q(
            "neg-q4",
            "When negotiating subcontracts, the prime must ensure:",
            [
              "Sub terms are more favorable than prime terms",
              "Required flow-down clauses from the prime contract are included",
              "Subs are exempt from audit",
              "Payment terms always exceed net-60",
            ],
            1,
            "Prime contractors must flow down mandatory clauses; failure creates compliance and audit risk."
          ),
        ],
      },
    ],
  },
  {
    id: "comp-2-pricing",
    title: "Proposal Pricing and Cost Analysis",
    lessons: [
      {
        id: "lesson-cost-volume",
        competencyId: "comp-2-pricing",
        title: "Cost Volume Development",
        sections: [
          {
            heading: "Cost Volume Structure",
            content:
              "A cost volume presents your price proposal in government-standard format: direct labor by category and year, indirect rate application, ODCs, subcontracts, and fee. Organize by CLIN and contract year (base + option years). Evaluators should trace any CLIN total to supporting schedules without guessing.",
          },
          {
            heading: "Direct Labor",
            content:
              "Define labor categories matching the RFP and PWS — title, qualifications, hours, and rates. Hours must be realistic and traceable to the work breakdown structure. Use historical experience, analogous contracts, or bottom-up estimating. Misaligned categories (proposing a 'Senior Analyst' for work requiring a 'Subject Matter Expert') trigger cost realism adjustments.",
          },
          {
            heading: "ODCs and Subcontracts",
            content:
              "Other Direct Costs include travel, materials, equipment, consultants, and other pass-through items. Subcontracts require separate basis-of-estimate documentation and price analysis per FAR 15.404-3. Include consultant agreements and justify each ODC line — evaluators downgrade unsupported ODCs.",
          },
          {
            heading: "Indirect Rates and Fee",
            content:
              "Apply fringe, overhead, and G&A in the order specified by your accounting system and the RFP. Use current provisional or forward pricing rates — not outdated fiscal year rates. Fee (profit) varies by contract type and agency: typically lower on cost-type, higher on FFP where you bear risk. Total evaluated price may differ from base year price when options are included.",
          },
        ],
        exercise: {
          type: "cost-volume",
          title: "Build a Complete Cost Volume",
          instructions:
            "Using the sample RFP labor categories, input hours and rates to build a 3-year cost volume. Apply fringe 32%, OH 15%, G&A 12%, fee 10%. Tool validates math and flags categories exceeding RFP caps.",
          data: { rfpId: "doc-rfp-it-services", years: 3 },
        },
        quiz: [
          q(
            "cv-q1",
            "Direct labor rates in a cost volume should reflect:",
            ["Lowest possible wages", "Realistic rates for proposed labor categories", "Government GS pay scales only", "Subcontractor rates without markup"],
            1,
            "Rates must be realistic for the qualifications proposed — cost realism analysis evaluates this."
          ),
          q(
            "cv-q2",
            "Fringe, overhead, and G&A are applied:",
            ["In random order", "In the order specified by the accounting system and RFP", "Only at contract closeout", "Only to subcontracts"],
            1,
            "Indirect cost order matters — typically fringe on labor, OH on labor+fringe, G&A on total cost base."
          ),
          q(
            "cv-q3",
            "Total evaluated price on a multi-year proposal includes:",
            ["Base year only", "Base year plus all option years priced", "Only the lowest year", "Fee only"],
            1,
            "Evaluators compare total evaluated price including option years when the RFP requires it."
          ),
        ],
      },
      {
        id: "lesson-price-reasonableness",
        competencyId: "comp-2-pricing",
        title: "Price Reasonableness and Cost Realism Analysis",
        sections: [
          {
            heading: "Price Reasonableness vs. Cost Realism",
            content:
              "Price reasonableness asks: is the total price fair to the government? Cost realism asks: can the offeror actually perform at the proposed cost? On cost-reimbursement contracts, unrealistically low costs may be adjusted upward to Most Probable Cost (MPC). On FFP, low price may win but creates performance risk if you cannot execute profitably.",
          },
          {
            heading: "Government Analysis Techniques",
            content:
              "COs use price analysis (comparison, catalog, market) and cost analysis (detailed cost review). Should-cost analysis estimates what performance should cost independent of your proposal. Historical data from FPDS, GSA schedules, and independent government cost estimates (IGCE) benchmark your price.",
          },
          {
            heading: "When Low Price Hurts You",
            content:
              "A price 20% below the IGCE triggers scrutiny — evaluators may find your proposal unrealistic, not competitive. Cost realism downgrades reduce your evaluated score on best-value procurements. Winning at a price you cannot perform creates CPARS problems, financial losses, and potential TINA issues if costs were misstated.",
          },
        ],
        exercise: {
          type: "pricing",
          title: "Competitive Price Position Analysis",
          instructions:
            "Given competitor pricing ($4.2M), IGCE ($4.8M), and your cost buildup ($4.0M cost, 8% fee), determine whether to hold price, adjust hours, or accept realism risk. Document your recommendation.",
          data: { competitorPrice: 4200000, igce: 4800000, yourCost: 4000000 },
        },
        quiz: [
          q(
            "pr-q1",
            "Cost realism analysis primarily applies to:",
            ["Commercial item acquisitions", "Cost-reimbursement and T&M contracts", "Micro-purchases", "Grant agreements only"],
            1,
            "Cost realism ensures proposed costs will support performance — critical on cost-type where government reimburses costs."
          ),
          q(
            "pr-q2",
            "Most Probable Cost (MPC) adjustments:",
            ["Reduce price to LPTA minimum", "Increase evaluated cost when proposed costs are unrealistically low", "Eliminate fee entirely", "Apply only to subcontracts"],
            1,
            "MPC adjusts unrealistically low cost elements to what the government believes is most likely."
          ),
          q(
            "pr-q3",
            "Should-cost analysis is performed by:",
            ["The offeror only", "The government to estimate reasonable cost independent of the proposal", "The subcontractor", "DCAA only at closeout"],
            1,
            "Should-cost is an independent government estimate of what performance should cost."
          ),
        ],
      },
      {
        id: "lesson-sub-price-analysis",
        competencyId: "comp-2-pricing",
        title: "Subcontractor Price Analysis",
        sections: [
          {
            heading: "FAR 15.404-3 Requirements",
            content:
              "Prime contractors must perform price or cost analysis on all subcontractor and consultant proposals before agreement. Document the analysis in the contract file. Acceptable techniques: comparison of competitive quotes, established catalog prices, market research, parametric estimates, and cost analysis when price analysis is insufficient.",
          },
          {
            heading: "Price vs. Cost Analysis",
            content:
              "Price analysis determines fair price without examining detailed cost elements — use when adequate competition exists or commercial items are involved. Cost analysis examines individual cost elements — required for sole-source subs, cost-type subs, or when price analysis is inadequate.",
          },
          {
            heading: "Certified Cost or Pricing Data",
            content:
              "When TINA applies (generally acquisitions over $2M needing cost analysis), subs must submit certified cost or pricing data. Prime must analyze and may need to submit prime-level certification. Defective pricing — data that was not accurate, complete, and current — triggers price reductions.",
          },
        ],
        quiz: [
          q(
            "spa-q1",
            "Prime contractors must document subcontract price analysis:",
            ["Only if DCAA requests it", "Before subcontract agreement per FAR 15.404-3", "At contract closeout only", "Only for subs over $10M"],
            1,
            "FAR 15.404-3 requires analysis and documentation before consummating subcontracts."
          ),
          q(
            "spa-q2",
            "Adequate price competition among subs typically supports:",
            ["Cost analysis only", "Price analysis without detailed cost breakdown", "No analysis required", "Waiving all flow-down clauses"],
            1,
            "Competitive quotes often support price analysis rather than full cost analysis."
          ),
          q(
            "spa-q3",
            "Defective pricing under TINA may result in:",
            ["Automatic contract termination", "Price reduction for understated costs", "Subcontract novation", "CPARS upgrade"],
            1,
            "If certified data was defective, the government may reduce the contract price accordingly."
          ),
        ],
      },
    ],
  },
  {
    id: "comp-3-admin",
    title: "Contract Administration",
    lessons: [
      {
        id: "lesson-file-mgmt",
        competencyId: "comp-3-admin",
        title: "Contract File Management",
        sections: [
          {
            heading: "FAR 4.802 Requirements",
            content:
              "Each contract file must document the complete history: award documents, mods, correspondence, invoices, acceptance records, subcontracts, REAs/claims, and closeout. Files must be sufficient for audit — if it's not in the file, it didn't happen. Electronic files are acceptable if they meet retrieval and retention requirements.",
          },
          {
            heading: "Organization from Award to Closeout",
            content:
              "Use a standard tab structure: (1) Contract instrument and mods, (2) Administration correspondence, (3) Performance/deliverables, (4) Invoicing and payment, (5) Subcontracts, (6) Claims/disputes, (7) Closeout. Index documents on receipt. Assign a file custodian for each contract.",
          },
          {
            heading: "What Auditors Look For",
            content:
              "DCAA and CPSR auditors sample files for: subcontract price analysis, consent documentation, flow-down evidence, COR direction letters, and timely REA submissions. Missing consent or price analysis is a recurring finding. Retention: typically 3–6 years after final payment, longer for certain contract types.",
          },
        ],
        exercise: {
          type: "file-organize",
          title: "Organize the Messy Contract File",
          instructions:
            "Sort 25 random documents into correct file tabs and identify 5 missing required documents for a cost-plus contract with subs.",
          data: { contractType: "CPFF", hasSubcontracts: true },
        },
        quiz: [
          q(
            "file-q1",
            "FAR 4.802 requires contract files to:",
            ["Contain only the signed contract", "Include complete history of the transaction", "Be destroyed after 1 year", "Exclude subcontract documents"],
            1,
            "Files must document the complete transaction history for audit and reference."
          ),
          q(
            "file-q2",
            "Subcontract price analysis should be filed:",
            ["With the subcontract in the prime contract file", "In the sub's office only", "Only in DCAA's system", "Not retained"],
            1,
            "Prime must retain subcontract analysis — CPSR and DCAA review prime files."
          ),
        ],
      },
      {
        id: "lesson-evm",
        competencyId: "comp-3-admin",
        title: "Monitoring Performance and EVM",
        sections: [
          {
            heading: "Earned Value Management Basics",
            content:
              "EVM integrates scope, schedule, and cost. BCWS (Planned Value) is budgeted cost of work scheduled; BCWP (Earned Value) is budgeted cost of work performed; ACWP (Actual Cost) is actual cost of work performed. CPI = BCWP/ACWP (cost efficiency); SPI = BCWP/BCWS (schedule efficiency). CPI below 1.0 means over budget; SPI below 1.0 means behind schedule.",
          },
          {
            heading: "Performance Letters",
            content:
              "Escalation ladder: informal discussion → letter of concern → cure notice (FAR 49) → show cause → termination. Document factually without admitting liability. Cure notices must specify deficiencies, corrective action required, and deadline — typically 10–30 days depending on contract.",
          },
          {
            heading: "Recovery Planning",
            content:
              "When CPI and SPI both decline, develop a recovery plan: re-baseline schedule, add resources, descope with government agreement, or request equitable adjustment if government-caused. Early transparency preserves customer relationships; hiding overruns destroys CPARS and trust.",
          },
        ],
        exercise: {
          type: "evm",
          title: "EVM Analysis and Letter Draft",
          instructions:
            "Given monthly EVM data showing CPI 0.82 and SPI 0.91, determine status and draft the appropriate letter to a underperforming subcontractor.",
          data: { cpi: 0.82, spi: 0.91, contractValue: 3500000 },
        },
        quiz: [
          q(
            "evm-q1",
            "CPI of 0.85 means:",
            ["15% under budget", "15% over budget for work performed", "On schedule", "Contract is complete"],
            1,
            "CPI = EV/AC; 0.85 means you're spending more than planned for earned value."
          ),
          q(
            "evm-q2",
            "A cure notice should include:",
            ["Vague performance concerns", "Specific deficiencies and corrective action deadline", "Immediate termination order", "Price reduction demand"],
            1,
            "Cure notices must specify deficiencies and allow a defined period to cure."
          ),
        ],
      },
      {
        id: "lesson-changes",
        competencyId: "comp-3-admin",
        title: "Managing Contract Changes",
        sections: [
          {
            heading: "Changes Clause and Constructive Changes",
            content:
              "The Changes clause authorizes the KO to make unilateral changes within the general scope of the contract. Constructive changes occur when government actions (COR directions, defective specs, accelerated schedule) effectively change requirements without a formal mod. Document and submit REA within reasonable time.",
          },
          {
            heading: "Scope Creep and REAs",
            content:
              "Track all out-of-scope requests. When COR directs additional work, notify PM immediately, perform no work without authority, and submit REA with cost/schedule impact. REA is a request; a claim is a dispute after the government denies or fails to respond. Six-year statute of limitations applies to claims under the Contract Disputes Act.",
          },
          {
            heading: "Pricing Equitable Adjustments",
            content:
              "Forward pricing method: estimate cost of changed work using current rates, apply fee per contract type, add schedule impact costs if any. For deleted work, credit the government. Support with time sheets, correspondence, and delta WBS. Negotiate bilaterally when possible.",
          },
        ],
        exercise: {
          type: "rea",
          title: "Draft REA for Constructive Change",
          instructions:
            "COR verbally directed 3 additional deliverables not in PWS. Calculate $127K impact and draft REA letter with supporting schedule.",
          data: { additionalHours: 900, blendedRate: 95, odcIncrease: 42000 },
        },
        quiz: [
          q(
            "chg-q1",
            "A constructive change occurs when:",
            ["The KO issues SF 30", "Government actions effectively change requirements without formal mod", "The contractor changes staffing", "An option year is exercised"],
            1,
            "Constructive changes arise from informal government direction or changed conditions."
          ),
          q(
            "chg-q2",
            "Statute of limitations for claims under the Contract Disputes Act is generally:",
            ["1 year", "3 years", "6 years", "10 years"],
            2,
            "Claims must generally be submitted within 6 years of accrual."
          ),
          q(
            "chg-q3",
            "An REA differs from a claim because:",
            ["REA is always denied", "REA is a request before formal dispute; claim follows denial or inaction", "Claims require no documentation", "REAs apply only to commercial items"],
            1,
            "REA is the precursor — a claim is the formal dispute mechanism."
          ),
        ],
      },
    ],
  },
  {
    id: "comp-4-subs",
    title: "Subcontract Management",
    lessons: [
      {
        id: "lesson-sub-types",
        competencyId: "comp-4-subs",
        title: "Subcontract Types and When to Use Each",
        sections: [
          {
            heading: "Fixed Price Subcontracts",
            content:
              "FFP subs transfer cost overrun risk to the subcontractor — use when scope is well-defined. Protects the prime on FFP prime contracts. Require clear deliverables and acceptance criteria. Monitor for quality, not cost (unless changes occur).",
          },
          {
            heading: "T&M and Cost-Type Subs",
            content:
              "T&M subs are appropriate for level-of-effort or undefined scope but expose the prime to cost growth — cap hours and require monthly burn reports. Cost-type subs are rare but required when the prime is cost-type and scope is uncertain. Government may require consent and cost analysis.",
          },
          {
            heading: "Letter Subcontracts and Flow-Downs",
            content:
              "Letter subs authorize work before definitive agreement — use only in emergencies with tight timelines to definitive sub. Flow down all mandatory clauses: Changes, Termination, EEO, Small Business, Cyber (7012), Rights in Data, and 18+ others depending on contract. Maintain a flow-down matrix by prime clause.",
          },
        ],
        quiz: [
          q(
            "subt-q1",
            "FFP subcontracts are best when:",
            ["Scope is undefined", "Scope is well-defined and risks should transfer to sub", "Prime wants to absorb all cost risk", "No deliverables exist"],
            1,
            "FFP subs fix price and transfer performance cost risk to the subcontractor."
          ),
          q(
            "subt-q2",
            "Letter subcontracts should be used:",
            ["For all sub awards", "Only in emergencies with quick conversion to definitive agreement", "Never", "Only for commercial items under $10K"],
            1,
            "Letter subs are interim instruments — convert to definitive agreements promptly."
          ),
        ],
      },
      {
        id: "lesson-sub-oversight",
        competencyId: "comp-4-subs",
        title: "Subcontractor Oversight",
        sections: [
          {
            heading: "Consent and CPSR",
            content:
              "Obtain consent when required before sub award. CPSR (Contractor Purchasing System Review) evaluates whether your purchasing policies and documentation meet FAR requirements — findings affect all contracts. Maintain purchasing system description and train buyers/contracts staff.",
          },
          {
            heading: "Invoicing, Performance, and Termination",
            content:
              "Review sub invoices against deliverable acceptance before payment — prime remains liable to government. Issue cure notices for performance failures; document before termination for default. Termination for convenience flow-down allows recovery of allowable costs.",
          },
          {
            heading: "Small Business Reporting",
            content:
              "SF-294 reports subcontract awards to small business; SF-295 reports payments. Prime must meet subcontracting plan goals or document good faith efforts. False reporting creates False Claims Act exposure.",
          },
        ],
        exercise: {
          type: "flowdown",
          title: "Build Subcontract Clause Matrix",
          instructions:
            "Given prime contract W912HQ-24-C-0042, identify all clauses requiring flow-down and map to subcontract section numbers.",
          data: { documentId: "doc-federal-contract" },
        },
        quiz: [
          q(
            "over-q1",
            "CPSR evaluates:",
            ["Only subcontractor performance", "The prime contractor's purchasing system", "Government contracting offices", "Employee security clearances"],
            1,
            "CPSR reviews whether the prime's purchasing policies and documentation comply with FAR."
          ),
          q(
            "over-q2",
            "SF-294 is used to report:",
            ["Invoice rejections", "Subcontract awards to small business", "EVM data", "Export licenses"],
            1,
            "SF-294 reports subcontracting achievement against the small business plan."
          ),
        ],
      },
    ],
  },
  {
    id: "comp-5-legal",
    title: "Legal and Compliance",
    lessons: [
      {
        id: "lesson-contract-law",
        competencyId: "comp-5-legal",
        title: "Contract Law Fundamentals for Contracts Managers",
        sections: [
          {
            heading: "Elements and Authority",
            content:
              "Valid contracts require offer, acceptance, and consideration. Only Contracting Officers with warranted authority can bind the government (FAR 1.602). CORs, PMs, and technical leads cannot commit government funds. Unauthorized commitments (FAR 1.602-3) may be ratified but create risk for both parties.",
          },
          {
            heading: "Unauthorized Commitments and Ratification",
            content:
              "When a government employee commits without authority, the contractor should stop work and request ratification. Ratification requires funding, compliance review, and approval within 180 days (or as specified). Performing without ratification risks non-payment.",
          },
          {
            heading: "Mistake and Ambiguity",
            content:
              "Mutual mistake may permit reformation; unilateral mistake generally does not. Patent ambiguity ( obvious on reading) is construed against the drafter (usually government); latent ambiguity requires extrinsic evidence. The duty to read binds you to contract terms — read before signing.",
          },
        ],
        quiz: [
          q(
            "law-q1",
            "Only who can bind the government to a contract?",
            ["COR", "Program Manager", "Contracting Officer with warrant", "Technical Lead"],
            2,
            "FAR 1.602 limits bind authority to warranted Contracting Officers."
          ),
          q(
            "law-q2",
            "Unauthorized commitments may be resolved through:",
            ["Automatic payment", "Ratification per FAR 1.602-3", "COR email confirmation", "Verbal agreement"],
            1,
            "Ratification is the formal process to validate commitments made without authority."
          ),
        ],
      },
      {
        id: "lesson-export-controls",
        competencyId: "comp-5-legal",
        title: "Export Controls for Defense Contractors",
        sections: [
          {
            heading: "ITAR vs. EAR",
            content:
              "ITAR (22 CFR 120-130) controls defense articles and services on the USML — licenses required for export. EAR (15 CFR 730-774) controls dual-use items on the CCL — may be license-free depending on classification and destination. Misclassification is a common violation.",
          },
          {
            heading: "Deemed Export and Compliance",
            content:
              "Sharing controlled technical data with foreign nationals in the US is a 'deemed export' requiring authorization. Build technology control plans, mark controlled data, train employees, and screen visitors. Violations: criminal penalties up to $1M per violation, debarment, imprisonment.",
          },
          {
            heading: "Compliance Program",
            content:
              "Designate Empowered Official, maintain commodity jurisdiction determinations, log exports, and conduct annual training. Voluntary disclosure of violations may reduce penalties — consult legal immediately upon discovery.",
          },
        ],
        quiz: [
          q(
            "itar-q1",
            "A deemed export occurs when:",
            ["Goods ship overseas", "Controlled technical data is shared with a foreign national in the US", "A contract is terminated", "An invoice is rejected"],
            1,
            "Releasing ITAR/EAR-controlled data to foreign persons in the US is a deemed export."
          ),
          q(
            "itar-q2",
            "ITAR primarily controls:",
            ["Dual-use commercial electronics", "Defense articles and services on the USML", "All software globally", "Only nuclear materials"],
            1,
            "ITAR covers defense articles, services, and related technical data on the USML."
          ),
        ],
      },
      {
        id: "lesson-ip-rights",
        competencyId: "comp-5-legal",
        title: "Intellectual Property in Government Contracts",
        sections: [
          {
            heading: "Data Rights Framework",
            content:
              "FAR 52.227-14 (Rights in Data — General) and DFARS 252.227-7013/7014 govern technical data and computer software rights. Categories: Unlimited Rights (government owns/reproduces freely), Government Purpose Rights (GPR — 5-year restriction from delivery), Limited Rights (commercial/non-government data), and SBIR data rights.",
          },
          {
            heading: "Marking and Protection",
            content:
              "Mark proprietary data with restricted rights legends per contract before delivery. Failure to mark may grant broader government rights. In proposals, identify data you will deliver with limited rights and justify — evaluators assess whether restrictions are acceptable.",
          },
          {
            heading: "Unlimited Rights Risk",
            content:
              "Unlimited rights mean the government can use, modify, and disclose data without restriction — you lose competitive advantage. Negotiate GPR or limited rights when data was developed at private expense. DFARS distinguishes developed exclusively at government expense vs. mixed funding.",
          },
        ],
        quiz: [
          q(
            "ip-q1",
            "Government Purpose Rights typically restrict government use for:",
            ["1 year", "5 years from delivery", "Forever", "30 days"],
            1,
            "GPR generally lasts 5 years from delivery for non-commercial technical data."
          ),
          q(
            "ip-q2",
            "Failure to mark proprietary data before delivery may result in:",
            ["Automatic contract termination", "Government receiving broader rights than intended", "Higher fee", "CPARS upgrade"],
            1,
            "Proper marking is essential to preserve limited or restricted rights."
          ),
          q(
            "ip-q3",
            "DFARS 252.227-7013 governs:",
            ["Travel costs", "Rights in technical data", "Small business reporting", "EVM requirements"],
            1,
            "DFARS 7013 is the primary clause for technical data rights in DoD contracts."
          ),
        ],
      },
    ],
  },
];
