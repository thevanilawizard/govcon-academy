import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "far-part-16";

export const PART_16_MODULE = proModule(
  MODULE_ID,
  "far",
  16,
  "FAR Part 16: Types of Contracts",
  "Deep dive on fixed-price, cost-reimbursement, indefinite-delivery, time-and-materials, and ordering agreements—risk allocation, clauses, and when each type fits.",
  [
    "Recommend contract types based on requirement certainty and risk profile",
    "Calculate FPI and CPIF share ratios and final price/fee outcomes",
    "Administer IDIQ/GWAC task orders and understand fair opportunity rules",
    "Identify T&M surveillance requirements and BOA/BPA ordering differences",
  ],
  [
    proLesson(
      MODULE_ID,
      "far",
      "16.1",
      "Firm-Fixed-Price (FFP) — FAR 16.202",
      [
        "Explain FFP risk allocation between contractor and government",
        "Identify when FFP is appropriate and when it is not",
        "Administer FFP contracts for deliverable acceptance",
      ],
      [
        { citation: "FAR 16.202-1", text: "A firm-fixed-price contract provides for a price that is not subject to any adjustment on the basis of the contractor's cost experience in performing the contract." },
        { citation: "FAR 16.202-2", text: "This contract type places upon the contractor maximum risk and full responsibility for all costs and resulting profit or loss." },
      ],
      [
        { heading: "Risk on the contractor", content: "Under FFP, the contractor absorbs all cost overruns and keeps savings if costs come in below price. The government pays the stated price for compliant deliverables regardless of actual cost." },
        { heading: "Best use cases", content: "FFP fits well-defined requirements with stable technology and predictable costs—hardware buys, construction with complete designs, commercial products." },
      ],
      "Price your FFP proposals with contingency for unknowns. Change orders are your relief valve for government-directed scope growth—track baseline vs changes meticulously.",
      "FFP minimizes government cost risk and administrative burden when requirements are stable. The CO must ensure requirements are sufficiently defined before FFP selection.",
      [{ title: "Cost overrun on FFP IT build", situation: "A contractor underestimated integration hours on an FFP software deployment and loses $400K.", whyItMatters: "No cost reimbursement on FFP—margin erosion comes entirely from the contractor." }],
      [{ violation: "Charging government for overrun costs without a modification", consequence: "Unapproved work at contractor expense; possible termination for default if deliverables slip." }],
      [
        q("16-1-1", "Under FFP, cost overrun risk is borne by:", ["The government", "The contractor", "DCAA", "The COR"], 1, "FAR 16.202-2 places maximum cost risk on the contractor."),
        q("16-1-2", "FFP price adjustments based on actual costs are:", ["Automatic quarterly", "Not permitted except as stated in the contract", "Required by TINA", "Set by CPARS"], 1, "FFP price is fixed absent contract clauses for changes or EPA."),
        tf("16-1-3", "FFP is appropriate when requirements are well defined.", true, "Uncertain scope favors cost-reimbursement or incentive types."),
        q("16-1-4", "Administration focus on FFP contracts is primarily:", ["Auditing hourly timesheets", "Acceptance of deliverables at fixed price", "Award fee boards", "Rate reconciliations"], 1, "Performance and acceptance drive FFP admin."),
        tf("16-1-5", "Profit on FFP is unlimited if costs are controlled.", true, "Contractor keeps savings below the fixed price."),
        q("16-1-6", "Which clause family often appears on FFP supplies contracts?", ["52.216-7 (Allowable Cost)", "52.212-4 or 52.246-2 inspection clauses", "52.216-10 (Award Fee)", "52.232-20 Limitation of Cost only"], 1, "Inspection/acceptance clauses govern FFP deliverables."),
      ],
      { farPart: 16, farReferences: ["16.202"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.2",
      "Fixed-Price with Economic Price Adjustment (FPEPA) — FAR 16.203",
      [
        "Describe EPA types and when FPEPA is used",
        "Explain how index-based adjustments work",
        "Identify contractor pricing strategy for multi-year FPEPA",
      ],
      [
        { citation: "FAR 16.203", text: "A fixed-price contract with economic price adjustment provides for upward and downward revision of the stated contract price upon the occurrence of specified contingencies." },
      ],
      [
        { heading: "Why EPA exists", content: "Multi-year contracts face inflation and commodity volatility. FPEPA shares some market risk with the government through pre-defined adjustment formulas." },
        { heading: "EPA types", content: "Adjustments may track established catalog prices, actual cost changes of labor/materials, or published indexes (e.g., PPI, CPI)." },
      ],
      "Model index scenarios in proposals. Understand ceiling/floor on adjustments. Document base indices at award for later modification calculations.",
      "FPEPA protects agencies from bearing all inflation risk while preserving fixed-price discipline. COs must specify objective adjustment formulas.",
      [{ title: "Steel index spike", situation: "A construction FPEPA tied to steel indexes triggers a 12% price increase in Year 2.", whyItMatters: "Contractor avoids absorbing commodity shock; government pays formula-driven adjustment." }],
      [{ violation: "Invoking EPA without meeting contractual index triggers", consequence: "Disallowed price increase; potential claim denial." }],
      [
        q("16-2-1", "FPEPA allows price revision when:", ["The contractor feels margin pressure", "Specified contingencies in the contract occur", "CPARS is Satisfactory", "A competitor underbids"], 1, "FAR 16.203 ties adjustments to specified contingencies."),
        q("16-2-2", "EPA clauses may use:", ["Subjective KO judgment only", "Published economic indices", "Employee satisfaction surveys", "Protest outcomes"], 1, "Index-based EPAs are common under 16.203."),
        tf("16-2-3", "FPEPA is common on multi-year contracts with material cost exposure.", true, "EPA addresses inflation/commodity risk."),
        q("16-2-4", "FPEPA differs from FFP because:", ["There is no fixed price ever", "Stated price may adjust per formula", "Government pays all costs plus fee", "No deliverables required"], 1, "FPEPA modifies fixed price under defined events."),
        tf("16-2-5", "Contractors should document base indices at contract award.", true, "Adjustments compare to agreed baseline indices/prices."),
        q("16-2-6", "FPEPA shifts some market risk to:", ["The contractor exclusively", "Shared via formula between parties", "DCAA", "Subcontractors only"], 1, "EPA formulas allocate specified market risk."),
      ],
      { farPart: 16, farReferences: ["16.203"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.3",
      "Fixed-Price Incentive (FPI) — FAR 16.204",
      [
        "Identify FPI elements: target cost, target profit, ceiling, share ratio",
        "Calculate final price using an 80/20 share ratio example",
        "Contrast FPI with FFP and CPIF",
      ],
      [
        { citation: "FAR 16.204", text: "A fixed-price incentive contract is a fixed-price contract that provides for adjusting profit and establishing the final contract price by a formula based on the relationship of total final negotiated cost to total target cost." },
        { citation: "FAR 16.204-1", text: "The final price is subject to a price ceiling, negotiated at the outset." },
      ],
      [
        { heading: "FPI mechanics", content: "Parties negotiate target cost, target profit, ceiling price, and share ratio (e.g., 80/20). Final price adjusts based on actual cost vs target within the ceiling." },
        { heading: "80/20 example", content: "Target cost $1,000,000; target profit $100,000; ceiling $1,150,000; share ratio 80/20 (gov/contractor). Actual cost $1,100,000 → overrun $100,000. Contractor share 20% = $20,000 absorbed; government share 80% = $80,000. Final price = $1,100,000 + ($100,000 target profit - $20,000) = $1,180,000, capped at ceiling $1,150,000. Final price = $1,150,000." },
      ],
      "Model share ratio outcomes in Excel before negotiation. Control costs above target—your share of overruns erodes profit up to the ceiling.",
      "FPI motivates cost control while giving the government some overrun protection via the contractor share and price ceiling.",
      [{ title: "Ceiling hit", situation: "Development contract hits ceiling price with work remaining.", whyItMatters: "Contractor performs at no additional fee—effectively cost-sharing completion risk." }],
      [{ violation: "Misstating actual costs to manipulate share ratio", consequence: "False Claims Act exposure; defective pricing on subsequent mods." }],
      [
        q("16-3-1", "FPI final price is constrained by:", ["CPARS rating", "Negotiated ceiling price", "SAM registration", "Option exercise alone"], 1, "FAR 16.204-1 requires a price ceiling."),
        q("16-3-2", "In an 80/20 share ratio, 20% typically represents:", ["Government share of overrun", "Contractor share of overrun", "Fee percentage", "G&A rate"], 1, "Share ratio splits variance between parties."),
        q("16-3-3", "Target cost $1M, target profit $100K, actual $1.1M, 80/20 share, no ceiling: contractor absorbs:", ["$0", "$20,000 of overrun", "$100,000 of overrun", "Full $100K overrun"], 1, "20% of $100K overrun = $20K contractor share."),
        tf("16-3-4", "FPI is still a fixed-price family contract.", true, "Final price is determined by formula within ceiling."),
        q("16-3-5", "When actual cost exceeds target, contractor profit generally:", ["Increases automatically", "Decreases by contractor's share of overrun", "Is unchanged", "Doubles"], 1, "Overrun share reduces profit up to ceiling."),
        tf("16-3-6", "Ceiling price may cap final price below target plus adjusted profit.", true, "Ceiling is absolute cap per 16.204-1."),
      ],
      { farPart: 16, farReferences: ["16.204", "16.204-1"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.4",
      "Cost-Reimbursement Family: CPFF, CPIF, CPAF — FAR 16.301–16.306",
      [
        "Compare CPFF, CPIF, and CPAF fee structures",
        "Explain limitation of cost/funds clauses",
        "Describe award fee board process on CPAF",
      ],
      [
        { citation: "FAR 16.301-2", text: "Cost-reimbursement contracts are suitable for research and development work and for other contracts when uncertainties do not permit costs to be estimated with sufficient accuracy to use a fixed-price contract." },
        { citation: "FAR 16.306", text: "Cost-plus-fixed-fee (CPFF) contracts provide for payment of allowable incurred costs plus a fixed fee established at inception." },
      ],
      [
        { heading: "CPFF", content: "Pays allowable costs plus fixed fee (10% R&D / 15% other caps). Fee does not vary with cost—contractor lacks overrun incentive. Completion vs term forms differ on deliverable vs period performance." },
        { heading: "CPIF", content: "Adds incentive fee formula like FPI but on cost-reimbursement base—target cost, min/max fee, share ratio adjust fee based on final costs." },
        { heading: "CPAF", content: "Base fee (often zero or small) plus subjective award fee based on evaluation board scoring against award fee plan criteria." },
      ],
      "Requires DCAA-adequate accounting system. Monitor Limitation of Cost/Funds notices. On CPAF, document performance monthly against award fee plan metrics.",
      "Cost-type contracts fit uncertain R&D or complex services. Government bears cost risk but gains insight through audits and surveillance.",
      [{ title: "LOC breach", situation: "Contractor continues work after hitting limitation of cost without notification.", whyItMatters: "Government may not reimburse costs incurred after limit unless increased." }],
      [{ violation: "Billing unallowable costs on CPFF", consequence: "Disallowed costs, repayment, CPARS hit, potential FCA." }],
      [
        q("16-4-1", "Cost-reimbursement contracts are appropriate when:", ["Requirements are fully defined", "Cost cannot be estimated with sufficient accuracy for FFP", "No accounting system exists", "Commercial items are procured"], 1, "FAR 16.301-2 states suitability criteria."),
        q("16-4-2", "CPFF fee is:", ["Adjusted by share ratio only", "Fixed at inception", "Purely subjective each month", "Illegal on federal contracts"], 1, "FAR 16.306 defines fixed fee at inception."),
        q("16-4-3", "CPAF uses:", ["Share ratio only", "Award fee plan and evaluation board", "Sealed bidding", "No fee"], 1, "Award fee is subjective per performance evaluation."),
        tf("16-4-4", "CPIF combines cost reimbursement with incentive fee formula.", true, "CPIF parallels FPI incentives on allowable cost base."),
        q("16-4-5", "Statutory fee cap on CPFF for non-R&D is generally:", ["5%", "15%", "25%", "No cap"], 1, "FAR 16.306 and statute cap CPFF fee percentages."),
        tf("16-4-6", "Limitation of Cost clause requires contractor notification before exceeding authorized cost.", true, "FAR 52.232-20 requires notification at stated percentage of limit."),
      ],
      { farPart: 16, farReferences: ["16.301", "16.304", "16.305", "16.306"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.5",
      "IDIQ and GWAC Contracts — FAR 16.501, 16.505",
      [
        "Explain IDIQ minimum/maximum and ordering periods",
        "Apply fair opportunity requirements for task orders",
        "Distinguish single vs multiple award IDIQs and GWACs",
      ],
      [
        { citation: "FAR 16.501-1", text: "Indefinite-delivery contracts may provide for indefinite quantity of supplies or services during a specified period, with a stated minimum and maximum." },
        { citation: "FAR 16.505", text: "Each contract action exceeding $3 million shall be made on a competitive basis unless one of the exceptions in 16.505(b)(2) applies." },
      ],
      [
        { heading: "IDIQ structure", content: "Awards establish contract vehicle; work releases via delivery/task orders. Minimum guarantees must be economically beneficial to offerors. Maximum is obligation ceiling." },
        { heading: "Fair opportunity", content: "Multiple-award IDIQs generally require fair opportunity among holders for orders over $3M unless justified exception (urgency, logical follow-on, etc.)." },
        { heading: "GWACs", content: "Government-wide acquisition contracts (e.g., OASIS, Alliant) are multi-agency IDIQ vehicles with their own ordering procedures." },
      ],
      "Winning the IDIQ is only step one—capture task orders aggressively. Understand your vehicle's ordering procedures and protest rules (GAO task order protest thresholds).",
      "IDIQs provide flexible ordering but require documented fair opportunity and performance monitoring across orders.",
      [{ title: "Order protest", situation: "Agency issues $8M task order to incumbent without fair opportunity on a multiple-award IDIQ.", whyItMatters: "Eligible protest at GAO if threshold met; competition requirements violated." }],
      [{ violation: "Issuing sole-source order without required J&A/exception", consequence: "Protest sustained; order rescinded." }],
      [
        q("16-5-1", "IDIQ contracts include:", ["Only firm fixed price per order automatically", "Stated minimum and maximum quantities", "No ordering period", "Mandatory sealed bidding for orders"], 1, "FAR 16.501-1 requires min/max structure."),
        q("16-5-2", "Fair opportunity for orders over $3M applies to:", ["Single award IDIQ only", "Multiple-award IDIQs unless exception applies", "All commercial buys", "Grants"], 1, "FAR 16.505(b) establishes the rule."),
        tf("16-5-3", "GWACs are government-wide indefinite-delivery vehicles.", true, "GWACs support multi-agency ordering."),
        q("16-5-4", "Minimum guarantee on IDIQ exists to:", ["Eliminate all competition", "Ensure economic benefit to accept IDIQ award", "Waive TINA always", "Replace CPARS"], 1, "Minimum order quantity makes the vehicle viable for contractors."),
        tf("16-5-5", "Task order protests at GAO require meeting dollar/jurisdiction thresholds.", true, "Task order protest authority is limited by statute."),
        q("16-5-6", "Ordering period differs from performance period because:", ["They are identical terms", "Ordering period defines when agencies may issue orders", "Performance period replaces contract type", "Ordering period sets fee only"], 1, "Orders must fall within authorized ordering period."),
      ],
      { farPart: 16, farReferences: ["16.501", "16.505"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.6",
      "Time-and-Materials and Labor-Hour — FAR 16.601–16.602",
      [
        "Describe T&M and LH rate structures and ceiling requirements",
        "Explain government policy disfavoring T&M",
        "Identify surveillance requirements for T&M/LH",
      ],
      [
        { citation: "FAR 16.601", text: "A time-and-materials contract provides for acquiring supplies or services on the basis of direct labor hours at specified fixed hourly rates and material at cost." },
        { citation: "FAR 16.601", text: "A time-and-materials contract may be used only when it is not possible at the time of placing the contract to estimate accurately the extent or duration of the work." },
      ],
      [
        { heading: "T&M mechanics", content: "Labor billed at loaded hourly rates by category; materials at cost (often with handling fee restrictions). A ceiling price is required." },
        { heading: "Labor-hour", content: "LH contracts cover labor only—no material costs. Used when labor is the sole cost driver." },
        { heading: "Surveillance", content: "Higher government oversight—timesheet review, COR surveillance, audit of labor categories vs work performed." },
      ],
      "Expect heavy COR review of hours. Misaligned labor categories trigger withholds. Monitor ceiling burn rate weekly.",
      "T&M is last resort when scope cannot be defined. COs must document why other types won't work and enforce ceiling.",
      [{ title: "Ceiling exhaustion", situation: "Help desk T&M contract hits ceiling with three months of PoP remaining.", whyItMatters: "Work must stop or modification required—no additional reimbursement beyond ceiling." }],
      [{ violation: "Billing senior rates for junior work on T&M", consequence: "Disallowed charges; potential fraud referral if knowing." }],
      [
        q("16-6-1", "T&M contracts bill labor at:", ["Actual salary only without markup", "Specified fixed hourly rates by category", "Award fee points", "Random invoices"], 1, "FAR 16.601 defines fixed hourly rates."),
        q("16-6-2", "T&M may be used when:", ["Scope and duration cannot be estimated accurately at award", "Always preferred over FFP", "No ceiling is needed", "Commercial hardware is bought"], 0, "FAR 16.601 limits T&M to situations of uncertainty."),
        tf("16-6-3", "T&M requires a ceiling price.", true, "FAR 16.601 mandates a ceiling."),
        q("16-6-4", "Labor-hour contracts differ from T&M because:", ["They include materials at cost", "They cover labor only", "They are always FFP", "They prohibit timesheets"], 1, "FAR 16.602 covers labor-hour contracts."),
        tf("16-6-5", "Government policy generally disfavors T&M due to weak cost control.", true, "T&M places cost risk on government."),
        q("16-6-6", "T&M administration emphasizes:", ["Award fee boards only", "Timesheet and labor category surveillance", "Sealed bid openings", "Index adjustments"], 1, "Hours billed must match work performed and categories."),
      ],
      { farPart: 16, farReferences: ["16.601", "16.602"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "16.7",
      "BOA and BPA — FAR 16.701–16.706",
      [
        "Distinguish Basic Ordering Agreements from Blanket Purchase Agreements",
        "Identify when each ordering instrument is appropriate",
        "Explain ordering procedures under BOAs and BPAs",
      ],
      [
        { citation: "FAR 16.701", text: "A basic ordering agreement is a written instrument of understanding, negotiated between an agency and a contractor, that contains terms and clauses applying to future orders." },
        { citation: "FAR 16.701", text: "A blanket purchase agreement is a simplified method of filling anticipated repetitive needs for supplies or services by establishing charge agreements with qualified sources." },
      ],
      [
        { heading: "BOA", content: "Sets terms for future orders but is not a contract and does not obligate funds. Each order is a separate contract when issued." },
        { heading: "BPA", content: "Used for repetitive purchases—often against GSA Schedule or open market. May be single or multiple award. Calls are simplified acquisitions." },
        { heading: "When to use", content: "BOAs for long-term relationships with undefined quantities. BPAs for recurring office supplies, maintenance, or schedule orders below complex contract thresholds." },
      ],
      "Track BPA call limits and competition rules. BOA orders still need priced orders with terms incorporated from the BOA.",
      "BOAs/BPAs streamline repetitive buying while preserving competition and documentation requirements for individual orders.",
      [{ title: "BPA overuse", situation: "Agency routes $500K unique services buy through a supplies BPA without fair opportunity.", whyItMatters: "May violate competition and BPA scope—protest risk." }],
      [{ violation: "Treating BOA as funded contract without issuing orders", consequence: "No enforceable delivery obligation; accounting errors." }],
      [
        q("16-7-1", "A BOA is:", ["A funded contract for all future work", "An ordering agreement that is not a contract itself", "A grant instrument", "A protest venue"], 1, "FAR 16.701 states BOA is not a contract."),
        q("16-7-2", "BPAs are suited for:", ["One-time satellite launches only", "Repetitive anticipated needs", "Classified R&D only", "Personal services prohibited by law"], 1, "FAR 16.701 describes BPA purpose."),
        tf("16-7-3", "Orders under a BOA become contracts when issued.", true, "Each order incorporates BOA terms and funds."),
        q("16-7-4", "BPAs may be established against:", ["GSA Schedules and open market sources", "Only foreign vendors", "Grant recipients only", "Sealed bid IFBs only"], 0, "BPAs commonly attach to FSS contracts per Part 8/13."),
        tf("16-7-5", "BOAs contain terms/clauses applying to future orders.", true, "FAR 16.701 defines BOA content."),
        q("16-7-6", "Multiple-award BPAs may require fair opportunity among BPA holders.", ["Never", "Yes, per agency procedures and FAR", "Only for sealed bids", "Only above $100M"], 1, "Fair opportunity principles apply to multi-award BPAs."),
      ],
      { farPart: 16, farReferences: ["16.701", "16.703", "16.704"] }
    ),
  ],
  { farPart: 16, isStandaloneCourse: true }
);
