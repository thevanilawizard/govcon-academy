import { lesson, q } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_2: TrainingModule = {
  id: "far-depth",
  number: 2,
  title: "The FAR in Depth",
  description:
    "Master the FAR parts that govern contractor qualifications, negotiated acquisitions, small business rules, cost principles, disputes, and the clause library every contracts professional must know.",
  careerOutcomes: [
    "Apply FAR Parts 1–4, 9, 12, 15, 19, 31, 33, and 52 in daily contract administration",
    "Respond to responsibility determinations, OCI concerns, and evaluation strategies",
    "Structure indirect rates and assess protest and claims options",
    "Conduct clause-by-clause contract reviews using the FAR 52 matrix",
  ],
  lessons: [
    lesson(
      "far-depth",
      "2.1",
      "FAR Part 1–4: General Provisions",
      [
        "Summarize FAR 1 purpose, authority, and issuance structure",
        "Apply key definitions from FAR Part 2 in contract interpretation",
        "Identify improper business practices and OCI requirements under FAR Part 3",
        "Understand administrative requirements in FAR Part 4 for contract files and reporting",
      ],
      [
        {
          heading: "FAR Part 1: Purpose, Authority, and Issuance",
          content:
            "FAR Part 1 establishes the vision and policies of the Federal Acquisition System. It explains that the FAR is issued jointly by the Secretary of Defense, Administrator of GSA, and Administrator of NASA under the authority of the Office of Federal Procurement Policy. Part 1 also defines the FAR Council's role in maintaining and updating the regulation. For contractors, Part 1 answers 'why does this rule exist?' when interpreting ambiguous clauses. It emphasizes competition, integrity, and commercial practices—principles that underpin protests, ethics programs, and streamlined procedures elsewhere in the FAR.",
        },
        {
          heading: "FAR Part 2: Essential Definitions",
          content:
            "FAR Part 2 and the contract clause FAR 52.202-1 supply definitions that control contract interpretation. Terms like 'contracting officer,' 'commercial item,' 'subcontract,' and 'United States' have specific regulatory meanings that may differ from common usage. When a dispute turns on whether work is a 'change' or a 'cardinal change,' or whether an item qualifies as 'commercial,' Part 2 and the clause definitions govern. Contracts professionals bookmark Part 2 and the 52.202-1 definitions incorporated in every contract. Misreading a defined term can invalidate a claim or compliance assertion.",
        },
        {
          heading: "FAR Part 3: Ethics and Conflicts of Interest",
          content:
            "FAR Part 3 prohibits gratuities, kickbacks, and improper business practices. It requires contractors to disclose violations and cooperate with investigations. Organizational Conflict of Interest (OCI) mitigation plans prevent unfair competitive advantage from prior work—common in systems engineering and advisory contracts. Personal conflicts of interest rules restrict employee conduct when performing government work. FAR 52.203-13 mandates written codes of business ethics and conduct for contractors above thresholds, with training and internal control systems. A contracts manager who suspects OCI or a reporting obligation must escalate immediately to legal and ethics officials.",
        },
        {
          heading: "FAR Part 4: Administrative and Information Matters",
          content:
            "FAR Part 4 covers administrative processes: contract reporting to FPDS, safeguarding contractor information systems, and maintenance of contract files. It cross-references SAM registration (Part 4.11) and paperless contracting. Contractors must report first-tier subcontract awards and comply with data reporting for commercial and non-commercial items. Part 4 also addresses Safeguarding Covered Defense Information when combined with DFARS clauses. Understanding Part 4 helps contracts staff ensure the company meets reporting deadlines and preserves records the government may audit under FAR 52.215-2.",
        },
      ],
      "Your company is shortlisted for a follow-on contract where your team helped draft the current program's requirements as a consultant. Draft an OCI mitigation memo identifying the impaired objectivity, unequal access, and biased ground rules risks, and propose firewalls or recusal steps before proposal submission.",
      [
        q("2-1-1", "FAR Part 1 primarily establishes:", ["Contract pricing formulas", "The policies and vision of the Federal Acquisition System", "DCAA audit procedures", "State licensing rules"], 1, "FAR 1.102 states the vision of the FAR System and related acquisition policies for executive agencies."),
        q("2-1-2", "Defined terms in a contract are typically controlled by:", ["The contractor's proposal alone", "FAR 52.202-1 and FAR Part 2", "State law", "Industry custom only"], 1, "FAR 52.202-1 incorporates Part 2 definitions into the contract unless specifically overridden."),
        q("2-1-3", "Organizational Conflict of Interest (OCI) concerns arise when:", ["A contractor hires retired military", "Performance on one contract creates unfair competitive advantage on another", "A subcontractor is small business", "The KO delegates duties to a COR"], 1, "FAR 9.505 addresses OCIs including biased ground rules, impaired objectivity, and unequal access to information."),
        q("2-1-4", "FAR 52.203-13 requires certain contractors to:", ["Waive all profit", "Maintain a written code of business ethics and conduct", "Use only cost-plus contracts", "Protest all losses"], 1, "FAR 52.203-13 (Contractor Code of Business Ethics and Conduct) mandates ethics programs for contractors meeting the clause threshold."),
        q("2-1-5", "SAM registration requirements for contractors appear in:", ["FAR Part 4", "FAR Part 52 only", "DFARS Part 252 only", "The U.S. Code Title 10"], 0, "FAR 4.1101–4.1105 require SAM registration for contractors doing business with the government."),
      ]
    ),
    lesson(
      "far-depth",
      "2.2",
      "FAR Part 9: Contractor Qualifications",
      [
        "Explain responsible contractor standards the government applies before award",
        "Describe SAM exclusion and debarment impacts",
        "Interpret CPARS ratings and response strategies for negative evaluations",
        "Apply prime contractor subcontractor responsibility obligations",
      ],
      [
        {
          heading: "Responsible Contractor Determination",
          content:
            "Before award, the KO must determine the prospective contractor responsible—having adequate financial resources, a satisfactory record of integrity and business ethics, necessary organization and experience, and the ability to comply with the proposed delivery or performance schedule (FAR 9.104-1). Non-responsibility findings can disqualify an otherwise low bidder. Contractors respond with responsibility documentation: financial statements, organizational charts, relevant past performance, and quality certifications. Understanding this standard helps proposal teams pre-position evidence and respond to pre-award surveys.",
        },
        {
          heading: "Exclusions and Debarment",
          content:
            "SAM Exclusions lists parties debarred, suspended, or proposed for debarment from receiving federal contracts. Causes include fraud, criminal conviction, and willful failure to perform. A prime cannot award subcontracts to excluded entities (FAR 9.405). Contracts professionals must verify SAM status before teaming agreements and subcontract execution. Debarment can extend to affiliates and key personnel in egregious cases. Monthly SAM screening of subs and vendors is a basic compliance control.",
        },
        {
          heading: "Past Performance and CPARS",
          content:
            "Past performance is a major evaluation factor in best-value acquisitions (FAR 15.305). CPARS (Contractor Performance Assessment Reporting System) captures narrative assessments and ratings: Exceptional, Very Good, Satisfactory, Marginal, Unsatisfactory, plus N/A for new work. Contractors receive CPARS notifications and may submit comments before ratings finalize. A Marginal or Unsatisfactory rating hurts future wins. Contracts managers should review draft CPARS with program leads, provide factual rebuttals with evidence, and maintain a library of performance success stories for proposals.",
        },
        {
          heading: "Subcontractor Responsibility",
          content:
            "Prime contractors must determine subcontractor responsibility for subcontracts above the simplified acquisition threshold (FAR 9.405-2). This includes SAM checks, financial capability for the subcontract scope, and integrity review. On small business set-asides, primes remain accountable for limitation on subcontracting compliance. Flow-down of FAR clauses does not replace responsibility vetting. A weak or excluded sub puts the prime's performance and compliance at risk.",
        },
      ],
      "When notified of a draft CPARS rating below Satisfactory, assemble a response within the comment period citing deliverable acceptance records, customer emails, and metrics showing requirement compliance. Coordinate with the COR to ensure factual accuracy before the rating locks.",
      [
        q("2-2-1", "A responsible prospective contractor must have:", ["The lowest price only", "Adequate financial resources, integrity, experience, and ability to perform on schedule", "A large business certification", "No subcontractors"], 1, "FAR 9.104-1 lists minimum standards for responsibility determinations."),
        q("2-2-2", "SAM Exclusions prevent:", ["Only grant applications", "Award to debarred or suspended entities", "Commercial sales", "State contracting only"], 1, "FAR 9.405 prohibits contracting with excluded parties listed in SAM."),
        q("2-2-3", "CPARS ratings are used primarily to:", ["Set contractor tax rates", "Document and evaluate contractor performance for future source selection", "Determine security clearance levels", "Replace invoice approval"], 1, "FAR 42.1503 requires performance evaluation; CPARS feeds past performance evaluations under FAR 15.305."),
        q("2-2-4", "Contractors may respond to draft CPARS evaluations by:", ["Protesting at GAO", "Submitting comments for consideration before finalization", "Refusing all future work", "Modifying the contract unilaterally"], 1, "The CPARS process allows contractor comments on draft ratings before they become part of the past performance record."),
        q("2-2-5", "Prime contractors must determine subcontractor responsibility for subcontracts:", ["Never", "Above the simplified acquisition threshold per FAR 9.405-2", "Only on cost-plus contracts", "Only for foreign subs"], 1, "FAR 9.405-2 requires prime contractors to determine that proposed subs are responsible before award of subcontracts above the SAT."),
      ]
    ),
    lesson(
      "far-depth",
      "2.3",
      "FAR Part 12: Commercial Item Acquisitions",
      [
        "Define 'commercial item' and 'commercial service' under the FAR",
        "Apply streamlined procedures available for commercial acquisitions",
        "Explain contractor advantages under Part 12 contracts",
        "Argue for commercial item treatment in proposals when appropriate",
      ],
      [
        {
          heading: "What Makes an Item Commercial",
          content:
            "FAR 2.101 defines commercial products and services—including items of a type customarily used by the general public, sold in substantial quantities in the commercial marketplace, and offered without modification substantially the same as market items. Commercial services are those sold competitively in substantial quantities based on established catalog or market prices. This definition matters because commercial acquisitions use tailored clauses, simplified certification requirements, and often FFP with less intrusive cost data demands.",
        },
        {
          heading: "Streamlined Acquisition Procedures",
          content:
            "FAR Part 12 implements policies favoring commercial items: combined synopsis/solicitation options, oral proposals in some cases, and reduced certified cost or pricing data requirements when commercial item pricing is adequate (FAR 12.209). The government may use FAR Part 13 simplified procedures for commercial buys below thresholds. For contractors, Part 12 means faster awards, fewer audit rights on pricing, and clause sets under 52.212-4/5 tailored to commercial practice rather than full cost-type governance.",
        },
        {
          heading: "Commercial Item vs. Commercial Service",
          content:
            "Products and services are evaluated separately under the definition. A software license may be commercial; customized development integrating that software may not be. Services performed on-site to government specifications often fail the commercial service test. Contracts professionals work with technical leads to map deliverables to catalog offerings and document commercial market pricing via GSA schedules, published price lists, or competitor quotes to support commercial item determinations in proposals.",
        },
        {
          heading: "Contractor Strategy for Part 12 Treatment",
          content:
            "Winning Part 12 treatment reduces compliance burden and pricing scrutiny. In proposals, cite the commercial item definition, provide market pricing evidence, and describe offerings 'of a type' sold to other customers without government-unique modifications. If the agency issues a non-commercial solicitation for clearly commercial products, ask a timely Q&A question citing FAR 12.203 policy to prefer commercial items. Document the commercial supply chain for audit defense.",
        },
      ],
      "For an upcoming IT hardware plus installation RFP, separate catalog hardware (commercial product) from configured integration labor. Build a price rationale using manufacturer MSRP and reseller quotes to support a commercial item determination and reduced cost data submission.",
      [
        q("2-3-1", "Commercial items under the FAR are defined in:", ["FAR Part 31", "FAR 2.101", "DFARS 252.204-7012", "FAR Part 43"], 1, "FAR 2.101 provides the regulatory definition of commercial products and commercial services."),
        q("2-3-2", "A primary contractor benefit of FAR Part 12 acquisitions is:", ["Mandatory cost-plus pricing", "Tailored clauses and reduced cost data requirements for commercial pricing", "Exemption from all FAR clauses", "No past performance evaluation"], 1, "FAR Part 12 streamlines procedures and limits certified cost or pricing data when adequate commercial pricing exists (FAR 12.209)."),
        q("2-3-3", "FAR policy on commercial items is to:", ["Avoid them", "Acquire commercial items to the maximum extent practicable", "Use only for foreign vendors", "Require them to be cost-reimbursable"], 1, "FAR 12.102 and 12.203 establish preference for commercial items when they meet agency needs."),
        q("2-3-4", "Which clause is commonly used for commercial item contracts?", ["FAR 52.212-4", "FAR 52.232-7 only", "FAR 52.243-1 only", "FAR 52.249-8 only"], 0, "FAR 52.212-4 (Contract Terms and Conditions—Commercial Products and Commercial Services) is the standard commercial terms clause."),
        q("2-3-5", "Custom development to unique government specs typically:", ["Automatically qualifies as commercial", "May not meet the commercial item definition without market evidence", "Is always exempt from DFARS", "Requires no contract"], 1, "Items substantially modified for government-unique requirements may fall outside the FAR 2.101 commercial item definition."),
      ]
    ),
    lesson(
      "far-depth",
      "2.4",
      "FAR Part 15: Contracting by Negotiation",
      [
        "Describe source selection factors: technical, management, past performance, and price",
        "Contrast LPTA and best value tradeoff evaluation methodologies",
        "Distinguish discussions from clarifications and understand FPR procedures",
        "Apply debrief rights and price reasonableness concepts",
      ],
      [
        {
          heading: "Source Selection and Evaluation Factors",
          content:
            "FAR Part 15 governs negotiated procurements without sealed bidding. Section M of the RFP states evaluation factors and subfactors—commonly technical approach, management, past performance, and price/cost. Adjectival ratings (Outstanding, Good, Acceptable, etc.) or color ratings map to scores. Evaluators document strengths, weaknesses, deficiencies, and risks. Non-compliance with Section L can eliminate an offer regardless of technical merit. Contracts and proposal staff must align color team reviews to each factor's weight and language.",
        },
        {
          heading: "LPTA vs. Best Value Tradeoff",
          content:
            "Lowest Price Technically Acceptable (LPTA) awards to the lowest-priced offeror whose proposal meets minimum technical acceptability—common for commoditized services. Best Value Tradeoff allows the government to pay a premium for superior technical or past performance (FAR 15.101-1). Tradeoff decisions must be documented and linked to Section M. Mispricing a best-value bid is fatal; under LPTA, price dominates after threshold compliance. Proposal strategy differs sharply between the two.",
        },
        {
          heading: "Discussions, Clarifications, and FPRs",
          content:
            "Clarifications (FAR 15.306) resolve minor uncertainties without changing proposal terms. Discussions are exchanges leading offerors to revise proposals—competitive range required. After discussions, the government may request Final Proposal Revisions (FPRs) on specific items like price. Offerors cannot improve unrelated areas in FPRs. Understanding where you stand in competitive range—often inferred from discussion questions—guides how aggressively to sharpen price and remediate weaknesses.",
        },
        {
          heading: "Price Reasonableness, Cost Realism, and Debriefs",
          content:
            "The government assesses price reasonableness (FAR 15.404-1) using techniques from market comparisons to cost analysis. Cost realism reviews check whether proposed costs reflect what performance will actually require—critical on cost-reimbursement bids. After award, unsuccessful offerors may request debriefings (FAR 15.506) within specified deadlines; debriefs reveal strengths/weaknesses and selection rationale—valuable intelligence for the next bid. Document debrief requests immediately; deadlines are short and jurisdictional for protests.",
        },
      ],
      "On your next best-value RFP, build a compliance matrix mapping every Section M subfactor to specific proposal page references and win themes. After award or loss, request a debrief within the FAR 15.506 window and log evaluator feedback into your capture database.",
      [
        q("2-4-1", "Under LPTA, award goes to:", ["Highest technical score regardless of price", "Lowest price among technically acceptable proposals", "The incumbent only", "Random selection among small businesses"], 1, "FAR 15.101-2 describes LPTA: award on lowest price where proposals meet acceptability standards."),
        q("2-4-2", "Best value tradeoff allows:", ["Award without documentation", "Paying a premium for non-cost factors when justified", "Skipping price evaluation", "Single-source always"], 1, "FAR 15.101-1 permits tradeoffs among cost and non-cost factors when in the government's best interest."),
        q("2-4-3", "Discussions under FAR Part 15 require:", ["Sealed bidding", "Establishing a competitive range of offerors", "No KO involvement", "Oral awards only"], 1, "FAR 15.306 requires competitive range determination before conducting discussions with offerors."),
        q("2-4-4", "Cost realism analysis evaluates whether:", ["The KO likes the offeror", "Proposed costs reflect what performance will likely require", "SAM is current", "Subs are small business"], 1, "FAR 15.404-1(d) addresses cost realism for cost-reimbursement and other types where proposed costs may not reflect actual performance costs."),
        q("2-4-5", "Debriefings for unsuccessful offerors are addressed in:", ["FAR 15.506", "FAR 31.201", "FAR 43.103", "FAR 52.249-8"], 0, "FAR 15.506 establishes debriefing rights and procedures for negotiated procurements."),
      ]
    ),
    lesson(
      "far-depth",
      "2.5",
      "FAR Part 19: Small Business Programs",
      [
        "Calculate small business size status using NAICS-based standards",
        "Identify the eight primary socioeconomic programs and set-aside types",
        "Apply limitation on subcontracting rules under FAR 52.219-14",
        "Understand subcontracting plan requirements and Certificate of Competency",
      ],
      [
        {
          heading: "Size Standards and Determination Timing",
          content:
            "Small business status depends on NAICS-specific size standards—typically average annual receipts over five years or average employees. Affiliation rules aggregate related entities (FAR 19.101 and SBA regulations). Size is determined at the time of offer for set-aside procurements and for recertification at option exercise on long-term contracts. Misrepresenting size risks suspension, debarment, and False Claims Act liability. Contracts staff coordinate with finance to maintain accurate size calculations.",
        },
        {
          heading: "Socioeconomic Programs and Set-Asides",
          content:
            "Programs include small business (SB), small disadvantaged business (SDB), 8(a) Business Development, HUBZone, service-disabled veteran-owned (SDVOSB), veteran-owned (VOSB), and women-owned (WOSB/EDWOSB). FAR 19.502 requires contracting officers to set aside acquisitions for small business when two or more responsible small business concerns are expected to submit offers at fair market prices. Rule of Two analysis is foundational for BD. Each program has certification and eligibility rules administered largely by SBA.",
        },
        {
          heading: "Limitations on Subcontracting (52.219-14)",
          content:
            "On set-aside and certain other contracts, the clause FAR 52.219-14 limits how much work a small business prime may subcontract. For services, at least 50% of personnel costs must be incurred by the prime (excluding materials). For supplies, the prime must perform manufacturing or supply 50% of cost. Calculation methodology and exceptions matter for compliance. Prime contracts managers track labor charging and subcontract spend to prove compliance during audits and option recertification.",
        },
        {
          heading: "Subcontracting Plans and COC",
          content:
            "Large businesses winning contracts above FAR 19.702 thresholds must submit acceptable small business subcontracting plans with measurable goals. Prime compliance is monitored via SF-294/SF-295 reports. Certificate of Competency (COC) allows SBA to certify a small business as responsible when a KO issues a negative responsibility determination—the business may then receive the contract. Knowing COC rights protects small business offerors from arbitrary non-responsibility findings.",
        },
      ],
      "For a services set-aside you hold as a small business prime, build a monthly spreadsheet tracking prime labor dollars vs. subcontractor labor dollars against the 50% rule in FAR 52.219-14. Flag gaps before option recertification.",
      [
        q("2-5-1", "Small business size is generally based on:", ["Company age", "NAICS-specific receipts or employee thresholds", "Number of contracts", "Geography only"], 1, "FAR 19.102 and SBA size standards tie status to NAICS and prescribed metrics."),
        q("2-5-2", "The Rule of Two requires set-aside when:", ["Any large business expresses interest", "Two or more responsible small businesses are expected to compete at fair market prices", "Price exceeds $1 million", "Work is classified"], 1, "FAR 19.502-2 mandates small business set-asides when the Rule of Two is satisfied."),
        q("2-5-3", "On a services set-aside, FAR 52.219-14 generally requires the prime to perform at least:", ["10% of contract value", "50% of the cost of contract performance incurred for personnel", "No self-performance", "100% without subs"], 1, "FAR 52.219-14 limits subcontracting; for services contracts, at least 50% of personnel costs must be by the prime's own employees."),
        q("2-5-4", "Large business subcontracting plans are required when:", ["Never", "Contract exceeds the threshold in FAR 19.702 and is not set aside", "Only on grants", "Only overseas"], 1, "FAR 19.702 requires subcontracting plans for other than small business concerns on contracts above specified dollar thresholds."),
        q("2-5-5", "A Certificate of Competency (COC) is issued by:", ["The Contracting Officer", "SBA to certify small business responsibility after a negative determination", "DCAA", "GAO"], 1, "FAR 19.6 and SBA regulations allow SBA to issue a COC when a small business is found non-responsible by the KO."),
      ]
    ),
    lesson(
      "far-depth",
      "2.6",
      "FAR Part 31: Contract Cost Principles",
      [
        "Distinguish allowable from unallowable costs under FAR 31.201-2",
        "Structure direct and indirect costs in a compliant accounting system",
        "Explain fringe, overhead, and G&A pools and rate calculation basics",
        "Identify when CAS applies and how uncompensated overtime affects audits",
      ],
      [
        {
          heading: "Allowable vs. Unallowable Costs",
          content:
            "FAR 31.201-2 requires costs to be reasonable, allocable, and conform to CAS (if applicable), the contract terms, and FAR 31.205 specific cost principles. Unallowable costs—entertainment, certain lobbying, alcohol, bad debts, fines—cannot be charged to government contracts directly or indirectly. The chosen accounting practice must be consistent. Charging unallowables triggers DCAA questioned costs, withholding, and potential False Claims exposure. Contracts and finance must maintain a current unallowable cost list and train project managers on charging practices.",
        },
        {
          heading: "Direct and Indirect Cost Structure",
          content:
            "Direct costs are identifiable to a final cost objective (contract, task order). Indirect costs benefit multiple objectives and accumulate in pools—fringe benefits, overhead (site or org), and General & Administrative (G&A). Rates allocate indirect pools to direct cost bases via approved formulas in the contractor's disclosure statement or accounting manual. A sound structure supports competitive pricing and audit defense. Small GovCon firms often start with fringe + overhead on direct labor and G&A on total cost input.",
        },
        {
          heading: "Indirect Rate Pools and Calculation",
          content:
            "Fringe pools include payroll taxes, insurance, and PTO allocated to labor. Overhead covers facilities, management, and bid & proposal not charged direct. G&A captures executive admin, legal, and corporate functions. Rates = pool costs ÷ allocation base (e.g., direct labor dollars). Forward pricing rates may be provisional until audited and finalized. Contracts professionals reviewing proposals must understand whether quoted rates are provisional, audited, or internal management estimates.",
        },
        {
          heading: "CAS and Uncompensated Overtime",
          content:
            "Cost Accounting Standards (CAS) apply to contracts above the Truth in Negotiations threshold when the contractor receives a single CAS-covered award or exceeds total CAS-covered awards in a cost accounting period (FAR 9903). CAS requires consistency in cost allocation and disclosure. Uncompensated overtime—salary-exempt employees working beyond 40 hours without extra pay—must be accounted for consistently; DCAA scrutinizes whether labor rates reflect actual hours. Inconsistent OT treatment distorts billing rates and draws audit findings.",
        },
      ],
      "Build a simplified indirect rate model for a 25-person GovCon firm: direct labor, fringe at ~35% of labor, overhead at ~120% of direct labor, G&A at 15% of total cost input. Validate that no unallowable costs from FAR 31.205 are in any pool.",
      [
        q("2-6-1", "A cost must be ___ to be allowable under FAR Part 31.", ["Reasonable, allocable, and per contract terms and 31.205", "The highest in industry", "Approved by the COR", "Fixed fee only"], 0, "FAR 31.201-2 sets the basic requirements for allowability."),
        q("2-6-2", "Entertainment costs are generally:", ["Always allowable", "Unallowable per FAR 31.205-14", "Allowable on CPFF only", "Allowable with COR email"], 1, "FAR 31.205-14 restricts entertainment costs as unallowable except in limited circumstances."),
        q("2-6-3", "G&A pools typically allocate costs such as:", ["Direct material for one contract only", "Corporate executive administration benefiting all contracts", "Travel to one customer site only", "Proposal costs always direct"], 1, "G&A captures organization-wide management costs allocated across contracts via an approved base."),
        q("2-6-4", "CAS applies when:", ["Never for small business", "Thresholds in FAR 9903 are met via CAS-covered contract awards", "Only on commercial items", "Only overseas"], 1, "CAS coverage triggers based on contract value and aggregate CAS-covered awards per 48 CFR 9903."),
        q("2-6-5", "Uncompensated overtime concerns arise when:", ["Employees take PTO", "Exempt staff work extra hours without pay but bill full rates inconsistently", "Contract is FFP", "Subs are used"], 1, "DCAA examines whether labor recording and billing reflect actual hours for salaried staff working uncompensated OT."),
      ]
    ),
    lesson(
      "far-depth",
      "2.7",
      "FAR Part 33: Protests, Disputes, and Appeals",
      [
        "Explain GAO protest grounds, timelines, and typical outcomes",
        "Compare agency-level, GAO, and Court of Federal Claims protest forums",
        "Apply the disputes clause framework for claims under FAR 33.2",
        "Decide when protest or claim escalation is appropriate",
      ],
      [
        {
          heading: "Bid Protests at GAO",
          content:
            "The Government Accountability Office adjudicates bid protests from interested parties challenging solicitation defects, award decisions, or exclusion from competitive range. Automatic stay of award may apply if protest is timely filed after proposal submission or within 10 days of debrief (with debrief request). GAO resolves most protests in 100 days. Common grounds: unequal treatment, unreasonable evaluation, and violation of procurement statutes or FAR. Success rates are modest but protests can correct errors and preserve customer relationships when handled professionally.",
        },
        {
          heading: "Agency Protests and Court of Federal Claims",
          content:
            "Agency-level protests (FAR 33.103) are fastest and cheapest—filed with the contracting activity before GAO or COFC. Court of Federal Claims (COFC) offers a judicial forum with different timelines and standards; often used when GAO deadline passed or for more complex legal theories. Choice of forum affects automatic stay rights and discovery. Legal counsel leads, but contracts staff supply the procurement record, debrief notes, and evaluation documents.",
        },
        {
          heading: "Contract Disputes and Claims",
          content:
            "FAR 33.2 and clause FAR 52.233-1 govern disputes after contract award. Contractors must submit certified claims over $100,000 (or as adjusted) under the Contract Disputes Act. Claims require specific fact, law, and dollar amount. The KO issues a contracting officer's final decision; appeal paths include the agency board (ASBCA for DoD) or COFC. Unlike protests, claims address performance issues—delays, changes, differing site conditions. Document contemporaneously; the disputes clause is your roadmap.",
        },
        {
          heading: "Practical Decision Framework",
          content:
            "Protest when procurement integrity or evaluation fairness is compromised and the opportunity justifies legal cost. Pursue claims when performance entitlements exceed informal negotiation potential. Contracts managers preserve emails, daily logs, RFIs, and mod history as claim support. Missing CDA deadlines forfeits rights. Coordinate with counsel early—debrief timing interacts with protest windows.",
        },
      ],
      "After a lost best-value award where the winner's past performance was comparable but price was 15% higher, review the debrief within 24 hours with counsel. Calendar GAO protest deadlines from debrief date and assemble the evaluation record if a protest is viable.",
      [
        q("2-7-1", "GAO bid protests must generally be filed:", ["Within 1 year of contract completion", "Within specified deadlines after proposal submission or debrief", "Only after contract closeout", "Only by the KO"], 1, "GAO timeliness rules require protests within 10 days of debrief (when requested) or before award in pre-award protests."),
        q("2-7-2", "Agency-level protests are described in:", ["FAR 33.103", "FAR 19.502", "DFARS 252.204", "FAR Part 12 only"], 0, "FAR 33.103 establishes agency office of protest procedures as an alternative to GAO/COFC."),
        q("2-7-3", "The Disputes clause is:", ["FAR 52.233-1", "FAR 52.219-14", "FAR 52.232-25", "FAR 52.246-4"], 0, "FAR 52.233-1 (Disputes) implements FAR 33.2 and the Contract Disputes Act framework."),
        q("2-7-4", "Certified claims over the threshold require:", ["COR signature only", "Certification under the Contract Disputes Act with specific cost and fact detail", "A protest at GAO", "No documentation"], 1, "The CDA requires certified claims for amounts above the adjusted threshold, with certification of accuracy and good faith."),
        q("2-7-5", "ASBCA primarily hears appeals from:", ["State contractors", "DoD and certain agency contract disputes", "Patent cases only", "SAM registration denials"], 1, "The Armed Services Board of Contract Appeals handles appeals from contracting officer final decisions on many DoD and civilian agency contracts."),
      ]
    ),
    lesson(
      "far-depth",
      "2.8",
      "FAR Part 52: Contract Clauses",
      [
        "Navigate the FAR clause matrix and prescription sections",
        "Interpret the most critical FAR 52 clauses for daily administration",
        "Map clause prescriptions to contract type and acquisition context",
        "Conduct systematic clause-by-clause contract reviews",
      ],
      [
        {
          heading: "How to Read a Contract Clause",
          content:
            "FAR Part 52 contains standard contract clauses prescribed elsewhere in the FAR. Each clause has a prescription (e.g., FAR 16.506 for IDIQ clauses) stating when it applies. The matrix at FAR 52.301 maps required clauses by solicitation provision and contract clause numbers. Alternate versions (Alt I, II) modify text for specific scenarios. Clauses incorporated by reference are binding even if full text is not in the PDF. Contracts professionals trace each clause back to its prescription to know obligations, flow-down requirements, and remedies.",
        },
        {
          heading: "Ethics, Audit, and Payment Clauses",
          content:
            "Key clauses include 52.203-13 (Contractor Code of Business Ethics), 52.215-2 (Audit and Records—Government Access to Contractor Records), 52.232-25 (Prompt Payment—interest on late payments), and 52.232-39 (Unenforceability of Unauthorized Obligations). These govern ethics programs, DCAA/IG audit access, payment timelines, and the rule that COR direction cannot create binding obligations. Know them by heart for kickoff briefings and sub flow-down checklists.",
        },
        {
          heading: "Changes, Subcontracts, Data, and Default",
          content:
            "52.243-1 (Changes—Fixed Price) defines the changes clause for FFP contracts—equitable adjustments for KO-directed changes within scope. 52.244-6 (Subcontracts for Commercial Items) flows commercial terms to subs. 52.227-14 (Rights in Data) allocates IP rights in technical data and software. 52.249-8 (Default) and 52.249-14 (Excusable Delays) define termination for default vs. excusable delay remedies. Misunderstanding data rights or changes clauses causes the most expensive disputes.",
        },
        {
          heading: "Small Business, Labor, Insurance, and Inspection",
          content:
            "52.219-8 (Utilization of Small Business Concerns) and 52.219-14 (Limitations on Subcontracting) drive socioeconomic compliance. 52.222-26 (Equal Opportunity) and related labor clauses impose EEO and affirmative action obligations. 52.228-7 (Insurance—Liability to Third Persons) specifies insurance minimums. 52.246-4 (Inspection of Services) ties acceptance to KO/COR inspection rights. Review these on every new award and verify subs receive required flow-downs.",
        },
        {
          heading: "Clause Review Methodology",
          content:
            "On contract receipt, build a clause compliance matrix: clause number, title, prescription FAR section, flow-down required (Y/N), responsible internal owner, and key obligation summary. Flag deviations from the standard FAR text in Section I. Cross-check DFARS alternates on DoD work. This matrix becomes the admin playbook for invoicing, property, security, and closeout.",
        },
      ],
      "For your next contract award, create a clause matrix covering at minimum 52.203-13, 52.215-2, 52.219-14, 52.227-14, 52.232-25, 52.232-39, 52.233-1, 52.243-1, and 52.249-14. Assign each clause an internal owner and kickoff briefing slide.",
      [
        q("2-8-1", "FAR 52.301 provides:", ["Invoice templates", "A matrix of solicitation provisions and contract clause numbers", "CPARS ratings", "Security clearance forms"], 1, "FAR 52.301 lists required provisions and clauses for inclusion in solicitations and contracts."),
        q("2-8-2", "Unauthorized obligations by contractor personnel are addressed in:", ["FAR 52.232-39", "FAR 52.212-4 only", "FAR 52.222-26", "FAR 52.228-7"], 0, "FAR 52.232-39 makes certain unauthorized commitments unenforceable against the government."),
        q("2-8-3", "Equitable adjustments for changes on FFP contracts use:", ["FAR 52.243-1", "FAR 52.249-8", "FAR 52.203-13", "FAR 52.246-4 only"], 0, "FAR 52.243-1 is the standard Changes clause for fixed-price contracts."),
        q("2-8-4", "Technical data rights are principally governed by:", ["FAR 52.227-14", "FAR 52.232-25", "FAR 52.219-8", "FAR 52.242-13"], 0, "FAR 52.227-14 (Rights in Data—General) allocates data rights between government and contractor."),
        q("2-8-5", "Prompt Payment Act interest for late government payments appears in:", ["FAR 52.232-25", "FAR 52.233-1", "FAR 52.215-2", "FAR 52.244-6"], 0, "FAR 52.232-25 implements prompt payment policies including interest on late payments."),
      ]
    ),
  ],
};
