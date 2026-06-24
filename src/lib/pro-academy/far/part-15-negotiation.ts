import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "far-part-15";

export const PART_15_MODULE = proModule(
  MODULE_ID,
  "far",
  15,
  "FAR Part 15: Contracting by Negotiation",
  "Master negotiated acquisitions from pre-solicitation industry exchanges through source selection, discussions, pricing under TINA, and award documentation.",
  [
    "Lead proposal teams through RFP Sections L and M with pricing strategy aligned to evaluation factors",
    "Distinguish clarifications, communications, and discussions—and respond effectively to FPR requests",
    "Prepare certified cost or pricing data packages and defend price reasonableness in negotiation",
    "Identify procurement integrity risks and late-proposal pitfalls before they disqualify your offer",
  ],
  [
    proLesson(
      MODULE_ID,
      "far",
      "15.1",
      "Applicability and Definitions (15.000–15.002)",
      [
        "Define negotiation in the FAR context versus sealed bidding",
        "Identify when FAR Part 15 applies versus Parts 13 or 14",
        "Explain the relationship between Part 15 and agency supplements",
      ],
      [
        {
          citation: "FAR 15.000",
          text: "This part prescribes policies and procedures governing competitive and noncompetitive negotiated acquisitions.",
        },
        {
          citation: "FAR 15.002",
          text: "Contracting officers shall use the policies in this part in conjunction with the policies and procedures for planning, contract formation, and contract administration in parts 1, 5, 6, 7, 8, 13, 14, 35, 36, and 41.",
        },
      ],
      [
        {
          heading: "What negotiation means here",
          content:
            "In FAR Part 15, negotiation does not mean haggling at a bazaar. It means the government selects a contractor through competitive or noncompetitive procedures that allow evaluation of proposals, exchanges with offerors, and award based on stated evaluation criteria—not automatic award to the lowest sealed bid.",
        },
        {
          heading: "When Part 15 applies",
          content:
            "Part 15 governs most acquisitions above simplified thresholds where the agency uses requests for proposals (RFPs) rather than invitations for bids. Part 13 simplified procedures and Part 14 sealed bidding have their own rules. Part 12 commercial item acquisitions may use Part 15 procedures with tailored clauses.",
        },
      ],
      "If your opportunity is an RFP under Part 15, expect proposal volumes, evaluation factors, possible discussions, and certified cost or pricing data when TINA applies. Your team must read Sections L and M as binding instructions.",
      "Part 15 gives contracting officers structured authority to conduct negotiated procurements, document source selection decisions, and balance technical quality with price in best-value awards.",
      [
        {
          title: "RFP vs IFB confusion",
          situation:
            "A capture manager treats an Army RFP like a sealed bid, submitting a one-page price sheet with no technical volume.",
          whyItMatters:
            "Part 15 RFPs require full proposals evaluated against Section M factors. Incomplete submissions may be rejected or rated Unacceptable, wasting bid and proposal costs.",
        },
      ],
      [
        {
          violation: "Using Part 14 bid procedures on a Part 15 RFP",
          consequence: "Nonresponsive proposal or elimination for failure to follow Section L instructions.",
        },
        {
          violation: "Ignoring agency FAR supplements (e.g., DFARS) that modify Part 15",
          consequence: "Proposal noncompliance and lost competitiveness on mandatory requirements.",
        },
      ],
      [
        q("15-1-1", "FAR Part 15 primarily governs:", ["Sealed bidding only", "Negotiated acquisitions", "Grant agreements", "State procurements"], 1, "FAR 15.000 states Part 15 prescribes policies for competitive and noncompetitive negotiated acquisitions."),
        q("15-1-2", "Negotiated acquisition under the FAR typically involves:", ["Automatic award to lowest bidder", "Evaluation of proposals against stated criteria", "No exchanges with offerors", "Oral quotes only"], 1, "Part 15 procedures include proposal evaluation, possible discussions, and documented source selection."),
        tf("15-1-3", "Part 15 applies exclusively and cannot be used with Part 12 commercial procedures.", false, "Part 12 acquisitions may use Part 15 source selection procedures with tailored clauses."),
        q("15-1-4", "Contracting officers must use Part 15 policies together with:", ["Only Part 52 clauses", "Parts 1, 5, 6, 7, and other cited parts per 15.002", "State commercial law exclusively", "Subcontractor flow-downs only"], 1, "FAR 15.002 cross-references planning, competition, and formation parts."),
        q("15-1-5", "A services RFP with best-value tradeoff evaluation is governed by:", ["FAR Part 14", "FAR Part 15", "FAR Part 45 only", "The U.S. Tax Code"], 1, "Best-value negotiated procurements fall under Part 15 source selection procedures."),
        tf("15-1-6", "Noncompetitive negotiated awards may still require Part 15 pricing and documentation.", true, "Part 15 covers both competitive and noncompetitive negotiated actions."),
      ],
      { farPart: 15, farReferences: ["15.000", "15.001", "15.002"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.2",
      "Exchanges with Industry (15.100–15.101)",
      [
        "Describe pre-solicitation industry engagement permitted under Part 15",
        "Identify procurement integrity limits during industry exchanges",
        "Use industry days and one-on-one meetings strategically as an offeror",
      ],
      [
        {
          citation: "FAR 15.100",
          text: "The purpose of exchanges with industry before receipt of proposals is to improve the understanding of agency requirements and industry capabilities, thereby allowing potential offerors to judge whether or how they can compete.",
        },
        {
          citation: "FAR 15.101",
          text: "General. (a) Exchanges with industry before receipt of proposals are encouraged. (b) Exchanges with industry before receipt of proposals are subject to the restrictions in 3.104 and 15.201.",
        },
      ],
      [
        {
          heading: "Purpose of early exchanges",
          content:
            "Before an RFP drops, the government may hold industry days, publish draft requirements, or meet individually with vendors to refine requirements and gauge market capability. Contractors use these sessions to shape realistic proposals and identify teaming partners.",
        },
        {
          heading: "Integrity boundaries",
          content:
            "Procurement integrity rules (FAR 3.104) protect source selection and contractor bid information. Government personnel cannot disclose protected information. Offerors must not receive unfair competitive advantage from improper disclosures.",
        },
      ],
      "Industry exchanges let you influence requirements early, validate staffing assumptions, and build relationships—without submitting a binding offer. Document what you learn and what you do not receive (protected information).",
      "Early engagement reduces bad requirements, improves competition, and supports realistic IGCEs. The CO must balance openness with procurement integrity.",
      [
        {
          title: "Industry day intelligence",
          situation:
            "At a pre-solicitation conference, the PM states the agency expects 24/7 help desk coverage though the draft PWS is silent.",
          whyItMatters:
            "Oral statements may become evaluation expectations. Adjust your basis of estimate and note the statement in your proposal assumptions.",
        },
      ],
      [
        {
          violation: "Disclosing competitor proposal information during one-on-one meetings",
          consequence: "Procurement integrity violation; potential criminal penalties under 41 U.S.C. 2102.",
        },
        {
          violation: "Basing pricing on improperly obtained source selection information",
          consequence: "Bid protest sustain; possible suspension or debarment.",
        },
      ],
      [
        q("15-2-1", "The purpose of pre-proposal industry exchanges is to:", ["Lock in vendor pricing", "Improve understanding of requirements and industry capabilities", "Award the contract early", "Waive competition requirements"], 1, "FAR 15.100 states the purpose is improved mutual understanding."),
        q("15-2-2", "Pre-proposal exchanges are subject to restrictions in:", ["FAR Part 45 only", "FAR 3.104 and 15.201", "The Davis-Bacon Act", "State ethics codes only"], 1, "FAR 15.101(b) cites procurement integrity and pre-solicitation exchange rules."),
        tf("15-2-3", "Industry days before RFP release are discouraged under Part 15.", false, "FAR 15.101(a) encourages exchanges before receipt of proposals."),
        q("15-2-4", "Contractors should treat oral statements at industry days as:", ["Legally binding contract terms", "Potentially informative but subordinate to the final RFP", "Automatically incorporated in their cost data", "Prohibited from consideration"], 1, "Only the RFP and amendments control; oral statements may inform planning but are not contract terms."),
        q("15-2-5", "Procurement integrity protects:", ["Only contractor pricing after award", "Source selection information and contractor bid/proposal information", "Public tax records", "Employee personnel files unrelated to procurement"], 1, "FAR 3.104 defines protected categories of information."),
        tf("15-2-6", "One-on-one meetings with the CO before RFP release may be permitted when properly controlled.", true, "Individual exchanges are allowed subject to integrity rules and equal treatment principles."),
      ],
      { farPart: 15, farReferences: ["15.100", "15.101", "3.104"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.3",
      "Pre-Solicitation Exchanges (15.201)",
      [
        "Explain what government officials may discuss before RFP release",
        "Identify information contractors should not expect before solicitation",
        "Use pre-solicitation feedback to refine capture strategy",
      ],
      [
        {
          citation: "FAR 15.201",
          text: "Exchanges with industry before receipt of proposals may include conferences, public meetings, and one-on-one meetings. The contracting officer is not required to treat all offerors alike when conducting pre-solicitation exchanges.",
        },
        {
          citation: "FAR 15.201(c)",
          text: "The contracting officer may not disclose information regarding the agency's evaluation criteria, ranking of offerors, or other information that would give an offeror an unfair competitive advantage.",
        },
      ],
      [
        {
          heading: "What can be discussed",
          content:
            "Agencies may clarify high-level requirements, explain procurement schedules, and discuss general industry capabilities. Draft RFPs and RFIs help the government refine specifications before formal solicitation.",
        },
        {
          heading: "What cannot be disclosed",
          content:
            "Evaluation weights, internal scoring plans, competitor-specific information, and source selection sensitive data are off limits. Contractors should not ask questions designed to probe protected information.",
        },
      ],
      "Use RFIs and draft solicitations to submit capability statements and suggested requirement language. Never build a win strategy around insider evaluation data—it is illegal and protestable.",
      "Pre-solicitation exchanges improve requirements quality while preserving competition integrity. COs document significant exchanges in the acquisition file.",
      [
        {
          title: "Draft RFP comment",
          situation:
            "Your engineer proposes alternate performance metrics in response to a draft PWS that would reduce your cost but still meet mission needs.",
          whyItMatters:
            "Constructive pre-solicitation feedback can reshape requirements in your favor if adopted in the final RFP.",
        },
      ],
      [
        {
          violation: "CO shares planned Section M weightings with one vendor",
          consequence: "Procurement integrity breach; protest likely sustained; potential criminal referral.",
        },
      ],
      [
        q("15-3-1", "Under 15.201, the CO is not required to:", ["Follow the FAR", "Treat all offerors alike during pre-solicitation exchanges", "Document the acquisition", "Publish a synopsis"], 1, "FAR 15.201 states equal treatment is not required at this stage, unlike post-proposal exchanges."),
        q("15-3-2", "Which may NOT be disclosed in pre-solicitation exchanges?", ["General schedule information", "Agency evaluation criteria rankings", "High-level mission needs", "Industry day logistics"], 1, "FAR 15.201(c) prohibits disclosure that creates unfair competitive advantage."),
        tf("15-3-3", "Draft solicitations are a legitimate pre-solicitation exchange tool.", true, "Agencies often issue draft RFPs to refine requirements before final release."),
        q("15-3-4", "Contractors should respond to RFIs with:", ["Certified cost or pricing data", "Capability statements and requirement feedback", "Final binding prices", "Protest arguments"], 1, "RFIs gather market information; they are not offers."),
        q("15-3-5", "Pre-solicitation exchanges differ from post-proposal discussions because:", ["They occur before proposals are submitted", "They require certified cost data", "They always establish competitive range", "They replace the PWS"], 0, "15.201 governs the pre-proposal phase; 15.306 governs post-proposal exchanges."),
        tf("15-3-6", "Asking the CO how proposals will be scored by name is appropriate.", false, "Evaluation criteria details that advantage one offeror are protected."),
      ],
      { farPart: 15, farReferences: ["15.201", "3.104"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.4",
      "RFP Content and Contract Format (15.203–15.204)",
      [
        "Identify required RFP content under Part 15",
        "Navigate Sections A through M and their administration impact",
        "Map proposal instructions to contract formation documents",
      ],
      [
        {
          citation: "FAR 15.203",
          text: "Requests for proposals (RFPs) are used in negotiated acquisitions. They conform to the uniform contract format in 15.204.",
        },
        {
          citation: "FAR 15.204",
          text: "The uniform contract format is divided into sections A through M. Sections A through I may be incorporated in the contract; Sections J through M are primarily for proposal preparation and source selection.",
        },
      ],
      [
        {
          heading: "RFP essentials",
          content:
            "An RFP includes requirements documents, instructions (Section L), evaluation criteria (Section M), pricing schedule (Section B), and proposed clauses (Section K). Amendments modify these sections and must be acknowledged.",
        },
        {
          heading: "Sections A–M",
          content:
            "Section A: face page. B: supplies/services and prices. C: description/specs. D: packaging. E: inspection/acceptance. F: deliverables. G: admin data. H: special clauses. I: contract clauses. J: list of attachments. K: reps/certs and statements. L: instructions. M: evaluation.",
        },
      ],
      "Your proposal must mirror Section L exactly. Section M drives color ratings and win themes. Sections B and C become the contract baseline at award—errors in CLIN structure haunt administration for years.",
      "The uniform format ensures offerors compare apples to apples and that awarded content flows cleanly into the contract instrument.",
      [
        {
          title: "Section L trap",
          situation:
            "A proposal team submits 15 pages for the technical volume when Section L sets a 10-page limit excluding resumes.",
          whyItMatters:
            "Exceeding page limits can make the proposal noncompliant and Unacceptable without evaluation of merit.",
        },
      ],
      [
        {
          violation: "Ignoring Section K certification requirements",
          consequence: "Proposal rejection or responsibility determination failure.",
        },
      ],
      [
        q("15-4-1", "RFPs in negotiated acquisitions must conform to:", ["FAR Part 31 format", "The uniform contract format in 15.204", "Commercial invoice format", "Sealed bid tabulations"], 1, "FAR 15.203 references 15.204 uniform format."),
        q("15-4-2", "Sections J through M are primarily for:", ["Contract administration after award", "Proposal preparation and source selection", "DCAA audit", "Property disposal"], 1, "FAR 15.204 distinguishes incorporated sections A–I from J–M."),
        q("15-4-3", "Section M contains:", ["Inspection criteria", "Evaluation factors and subfactors", "Wage determinations", "Shipping instructions"], 1, "Section M states how proposals will be evaluated."),
        tf("15-4-4", "Section L instructions are binding on offerors.", true, "Failure to follow Section L can render a proposal nonresponsive."),
        q("15-4-5", "Pricing schedules appear in Section:", ["A", "B", "M", "K"], 1, "Section B covers supplies/services and prices/CLINs."),
        tf("15-4-6", "Sections A through I may be incorporated into the contract at award.", true, "FAR 15.204 states A–I may be incorporated; J–M generally do not become contract sections."),
      ],
      { farPart: 15, farReferences: ["15.203", "15.204"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.5",
      "Solicitation, Amendments, and Late Proposals (15.205–15.207)",
      [
        "Explain synopsis and response time requirements",
        "Process amendments and acknowledgment obligations",
        "Apply the late proposal rule and its narrow exceptions",
      ],
      [
        {
          citation: "FAR 15.206",
          text: "If the solicitation is amended, the contracting officer shall amend it in writing and provide amended solicitations to all potential offerors who received the solicitation or who were identified on a distribution list.",
        },
        {
          citation: "FAR 15.207",
          text: "Late proposals, modifications, and withdrawals are not considered unless the contracting officer determines that accepting the late offer would not delay award and one of the exceptions in 15.208 applies.",
        },
      ],
      [
        {
          heading: "Amendments",
          content:
            "Any change to requirements, dates, or clauses after RFP release requires a written amendment distributed to the solicitation list. Offerors must acknowledge amendments—often in the proposal transmittal letter—to confirm they priced the current version.",
        },
        {
          heading: "Late proposals",
          content:
            "Proposals received after the deadline are generally rejected. Exceptions under 15.208 are narrow (e.g., government-caused delay, emergency). Do not rely on exceptions—submit early with time zone confirmation.",
        },
      ],
      "Maintain an amendment log tied to BOE revisions. Missing Amendment 3 that adds a labor category can make your price unrealistically low and trigger realism concerns—or noncompliance.",
      "Amendments preserve fair notice. Strict receipt controls protect the integrity of competition and support protest defense.",
      [
        {
          title: "Midnight deadline miss",
          situation:
            "A prime's portal upload completes at 12:04 AM Eastern though the RFP stated 5:00 PM local time at the contracting office.",
          whyItMatters:
            "Late submission is at CO discretion under 15.207–15.208; default is rejection. A $2M pursuit can end over four minutes.",
        },
      ],
      [
        {
          violation: "Failing to acknowledge material amendments in the proposal",
          consequence: "Proposal evaluated on outdated requirements; potential rejection.",
        },
        {
          violation: "Assuming email to the CO satisfies proposal receipt",
          consequence: "Late or invalid submission unless RFP explicitly allows email.",
        },
      ],
      [
        q("15-5-1", "Solicitation amendments must be:", ["Oral only", "In writing and distributed to the solicitation list", "Posted on social media", "Sent only to the incumbent"], 1, "FAR 15.206 requires written amendments to all who received the solicitation."),
        q("15-5-2", "Late proposals are:", ["Always accepted if high quality", "Generally not considered unless 15.208 exceptions apply", "Automatically the winner if lowest price", "Accepted if postmarked on time"], 1, "FAR 15.207 establishes the default rejection rule."),
        tf("15-5-3", "Offerors should track amendments against their basis of estimate.", true, "Pricing and staffing must reflect the current solicitation."),
        q("15-5-4", "Synopsis requirements for negotiated acquisitions appear in:", ["FAR Part 5 cross-referenced from Part 15", "FAR Part 31", "The Constitution", "DFARS 252.225 only"], 0, "Part 5 governs publicizing requirements including SAM.gov synopses."),
        q("15-5-5", "Safeguarding proprietary proposal information is addressed in:", ["15.207 and related provisions", "FAR Part 45 only", "The Small Business Act", "State UCC"], 0, "FAR 15.207 covers handling proposals and information after receipt."),
        tf("15-5-6", "The CO may accept a late proposal if delay to award would not occur and a 15.208 exception applies.", true, "Both conditions must be met per 15.207."),
      ],
      { farPart: 15, farReferences: ["15.205", "15.206", "15.207", "15.208"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.6",
      "Exchanges After Proposal Receipt (15.306)",
      [
        "Distinguish clarifications, communications, and discussions",
        "Define deficiencies, weaknesses, and significant weaknesses",
        "Plan Final Proposal Revision (FPR) strategy",
      ],
      [
        {
          citation: "FAR 15.306",
          text: "Exchanges with offerors after receipt of proposals may include clarifications, communications, and discussions.",
        },
        {
          citation: "FAR 15.306(d)",
          text: "Discussions are exchanges between the Government and offerors in the competitive range, after initial proposals, that may occur before award and are tailored to each offeror's proposal.",
        },
        {
          citation: "FAR 15.306(f)",
          text: "The contracting officer may not engage in auctioning. Auctioning is the practice of disclosing one offeror's price to another offeror.",
        },
      ],
      [
        {
          heading: "Three types of exchanges",
          content:
            "Clarifications resolve minor questions without changing terms. Communications (when competitive range exists) allow limited contact without full discussions. Discussions are tailored exchanges to cure weaknesses—may lead to FPRs.",
        },
        {
          heading: "Deficiency vs weakness",
          content:
            "A deficiency is a material failure to meet requirements—a proposal may be rejected without discussions. Weaknesses and significant weaknesses are evaluable flaws that may be cured through discussions and FPRs.",
        },
        {
          heading: "FPR strategy",
          content:
            "Final Proposal Revisions are offerors' last best offer after discussions. Price increases without new scope often hurt competitiveness. Technical FPRs must fully cure identified weaknesses.",
        },
      ],
      "When you enter competitive range, assign a negotiation team. Document every government question and your responses. Never ask for competitor pricing—the CO cannot auction.",
      "COs must conduct meaningful discussions when held, treat offerors fairly, and avoid revealing protected information. Documentation supports protest defense.",
      [
        {
          title: "Discussion misread",
          situation:
            "An evaluator email asks you to 'confirm you can staff all cleared positions Day 1' though your proposal stated 90-day ramp.",
          whyItMatters:
            "This may signal a significant weakness. An FPR committing to Day 1 staffing without proof creates performance risk.",
        },
      ],
      [
        {
          violation: "CO discloses Offeror A's price to Offeror B",
          consequence: "Auctioning prohibited by 15.306(f); protest sustained; potential integrity investigation.",
        },
        {
          violation: "Offeror raises price in FPR without new scope or government-caused cost",
          consequence: "Loss of best-value position; possible elimination.",
        },
      ],
      [
        q("15-6-1", "Auctioning under Part 15 means:", ["Multiple rounds of oral presentations", "Disclosing one offeror's price to another", "Establishing competitive range", "Requesting final proposal revisions"], 1, "FAR 15.306(f) defines and prohibits auctioning."),
        q("15-6-2", "Discussions occur with offerors:", ["Before proposals are submitted", "In the competitive range after initial proposals", "Only after contract award", "Only for commercial items"], 1, "FAR 15.306(d) limits discussions to competitive range offerors."),
        q("15-6-3", "A deficiency is:", ["A minor typo", "A material failure to meet a requirement", "A strength", "An optional enhancement"], 1, "Deficiencies may justify rejection without discussions."),
        tf("15-6-4", "Clarifications may not be used to cure proposal weaknesses.", true, "Clarifications address minor uncertainties; weaknesses require discussions/FPRs."),
        q("15-6-5", "Final Proposal Revisions are:", ["Initial proposal submissions", "Revised proposals after discussions", "Debrief slides", "Unilateral government changes"], 1, "FPRs follow exchanges when discussions are held."),
        tf("15-6-6", "Discussions must be tailored to each offeror's proposal.", true, "FAR 15.306(d) requires tailored discussions."),
      ],
      { farPart: 15, farReferences: ["15.306", "15.307"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.7",
      "Contract Pricing and TINA (15.400–15.403)",
      [
        "Define cost or pricing data, price analysis, and cost analysis",
        "Apply TINA threshold and exceptions",
        "Explain defective pricing consequences",
      ],
      [
        {
          citation: "FAR 15.403-1",
          text: "Contracting officers shall obtain the type and amount of data sufficient to determine a fair and reasonable price.",
        },
        {
          citation: "FAR 15.403-4",
          text: "Cost or pricing data shall be obtained when negotiating a contract, subcontract, or modification expected to exceed $2 million (unless an exception applies).",
        },
        {
          citation: "FAR 15.407-1",
          text: "If, after award, cost or pricing data are found to be inaccurate, incomplete, or noncurrent as of the date of agreement on price, a price adjustment may be required.",
        },
      ],
      [
        {
          heading: "Pricing data hierarchy",
          content:
            "The CO first seeks price analysis (comparison, market data). When price analysis is insufficient, cost analysis of detailed data is required. On noncompetitive actions over $2M, certified cost or pricing data (TINA) is generally required unless an exception applies.",
        },
        {
          heading: "TINA exceptions",
          content:
            "Common exceptions: adequate price competition, prices set by law/regulation, commercial items, and waiver. Subcontractors must flow down TINA when prime certification is required.",
        },
        {
          heading: "Defective pricing",
          content:
            "If certified data was incomplete or inaccurate and the price should have been lower, the government may reduce the contract price plus interest. This is not fraud—it is a data defect—but knowing false certification triggers False Claims Act exposure.",
        },
      ],
      "Build Table 15-2 compliant spreadsheets before negotiation. Certify only after full disclosure. Audit subcontractor data with the same rigor as prime data.",
      "COs must document fair and reasonable price determinations. TINA protects taxpayers on sole-source and limited-competition buys.",
      [
        {
          title: "Missing subcontract data",
          situation:
            "A prime certifies current cost or pricing data but omits a major sub's updated labor rates that increased 8% after proposal submission.",
          whyItMatters:
            "Defective pricing adjustment could reduce contract value and damage CPARS integrity ratings.",
        },
      ],
      [
        {
          violation: "Certifying data as current while withholding known rate increases",
          consequence: "Defective pricing recovery plus interest; potential False Claims Act if knowing.",
        },
      ],
      [
        q("15-7-1", "The current TINA threshold for certified cost or pricing data is:", ["$750,000", "$2,000,000", "$10,000,000", "$250,000"], 1, "FAR 15.403-4 sets the $2 million threshold (verify current FAR for updates)."),
        q("15-7-2", "An exception to TINA includes:", ["Sole source without competition", "Adequate price competition", "Cost-plus contracts only", "Foreign purchases only"], 1, "Adequate price competition is a statutory/regulatory exception."),
        tf("15-7-3", "Defective pricing requires intent to defraud before price adjustment.", false, "Defective pricing is a data accuracy issue; fraud is separate."),
        q("15-7-4", "Cost or pricing data means:", ["Future business judgments", "Facts that prudent buyers/sellers would expect to affect price negotiations", "Marketing brochures", "Employee resumes"], 1, "FAR 15.401 defines cost or pricing data."),
        q("15-7-5", "Table 15-2 provides:", ["Organizational conflict of interest rules", "Instructions for submitting cost or pricing data", "Small business goals", "Property clauses"], 1, "FAR 15.408 references Table 15-2 format."),
        tf("15-7-6", "Subcontractors may need to submit certified data when flowed down by the prime.", true, "Prime certification often requires subcontractor data support."),
      ],
      { farPart: 15, farReferences: ["15.401", "15.403", "15.407"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.8",
      "Proposal Analysis and Negotiation Documentation (15.404–15.408)",
      [
        "Apply price and cost analysis techniques under 15.404",
        "Identify unbalanced pricing and most probable cost",
        "Document negotiations in the Price Negotiation Memorandum",
      ],
      [
        {
          citation: "FAR 15.404-1",
          text: "The contracting officer shall perform price analysis when cost or pricing data are not required.",
        },
        {
          citation: "FAR 15.404-1(g)",
          text: "Unbalanced pricing may indicate an improper understanding of the work or a potential performance risk.",
        },
        {
          citation: "FAR 15.406-3",
          text: "The price negotiation memorandum (PNM) shall reflect the pre-negotiation objectives, the negotiation results, and the basis for determining that the negotiated price is fair and reasonable.",
        },
      ],
      [
        {
          heading: "Analysis techniques",
          content:
            "Price analysis uses comparison, historical prices, market research, and parametric methods. Cost analysis evaluates each cost element when price analysis is insufficient. Technical analysis validates labor hours and assumptions.",
        },
        {
          heading: "Unbalanced pricing",
          content:
            "Front-loading early CLINs or inflating low-quantity lines may distort evaluated price and signal performance risk. Legitimate variation must be explained in the cost narrative.",
        },
        {
          heading: "PNM content",
          content:
            "The PNM records pre-negotiation objectives, walk-through of data, concessions, and final fair-and-reasonable determination. On cost-type work, most probable cost may be evaluated.",
        },
      ],
      "Align CLIN pricing with performance schedule. Explain spikes in BOEs. In negotiation, know your floor (walk-away) and document concessions tied to scope—not vague 'team discounts.'",
      "COs defend award decisions with PNM and source selection documents. Unbalanced pricing may justify rejection or adjusted evaluated price.",
      [
        {
          title: "Front-loaded CLIN",
          situation:
            "Year 1 labor CLIN is priced 40% above IGCE while out-year CLINs are 15% below market.",
          whyItMatters:
            "Government may reject as unbalanced or adjust evaluated price, assuming early overpricing offsets later underperformance risk.",
        },
      ],
      [
        {
          violation: "Submitting unbalanced pricing without narrative justification",
          consequence: "Proposal rejection or adverse realism finding.",
        },
      ],
      [
        q("15-8-1", "Price analysis is required when:", ["Cost or pricing data are not required", "Always on cost-plus contracts only", "Never on competitive awards", "Only below micro-purchase threshold"], 0, "FAR 15.404-1 directs price analysis when certified data not required."),
        q("15-8-2", "Unbalanced pricing may indicate:", ["Superior technical approach", "Improper understanding or performance risk", "Mandatory fee reduction", "Commercial item status"], 1, "FAR 15.404-1(g) warns of risk from unbalanced pricing."),
        q("15-8-3", "The PNM documents:", ["Only the winning offeror's past performance", "Pre-negotiation objectives and negotiation results", "Employee timesheets", "Subcontractor SAM registrations"], 1, "FAR 15.406-3 defines PNM content."),
        tf("15-8-4", "Most probable cost may be used when evaluating cost-type proposals.", true, "FAR 15.404-1(d) addresses most probable cost on cost reimbursement actions."),
        q("15-8-5", "Cost analysis is generally required when:", ["Price analysis provides reasonable assurance of fair price", "Price analysis is insufficient and data are required", "The item is commercial", "The action is below SAT"], 1, "Cost analysis supports fair and reasonable determination when price analysis alone is inadequate."),
        tf("15-8-6", "FPRAs and FPRRs support forward pricing under 15.407.", true, "FAR 15.407 addresses forward pricing rate agreements and recommendations."),
      ],
      { farPart: 15, farReferences: ["15.404", "15.405", "15.406", "15.407"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "15.9",
      "Unsolicited Proposals (15.500–15.506)",
      [
        "Define unsolicited proposals and when agencies accept them",
        "Prepare compliant unsolicited proposal packages",
        "Understand evaluation and rejection procedures",
      ],
      [
        {
          citation: "FAR 15.501",
          text: "An unsolicited proposal is a written proposal submitted to a federal agency on the initiative of the offeror for the purpose of obtaining a contract and that is not in response to a solicitation.",
        },
        {
          citation: "FAR 15.503",
          text: "Agencies shall evaluate unsolicited proposals for public interest and benefit, availability of funds, and contribution to agency missions.",
        },
      ],
      [
        {
          heading: "What qualifies",
          content:
            "Unsolicited proposals must be innovative, independently originated, and detailed enough for evaluation—not marketing brochures or routine capability statements. They include technical approach, cost estimates, and data rights assertions.",
        },
        {
          heading: "Agency process",
          content:
            "Agencies assign evaluators, may request clarifications, and respond accept/reject/defer. Acceptance does not guarantee award—a competitive solicitation may still follow.",
        },
      ],
      "Use unsolicited proposals sparingly for truly unique IP or methods. Protect proprietary data markings. Do not bypass competition rules expecting sole-source award.",
      "Agencies encourage innovation but must protect fair competition and avoid appearance of directed awards without proper justification.",
      [
        {
          title: "Marketing deck rejection",
          situation:
            "A startup submits a glossy brochure as an 'unsolicited proposal' for AI software with no cost breakdown.",
          whyItMatters:
            "FAR 15.502 content requirements are not met; agency returns without evaluation.",
        },
      ],
      [
        {
          violation: "Using unsolicited proposal to circumvent competition without J&A",
          consequence: "Protest; OIG scrutiny; rejection of proposal.",
        },
      ],
      [
        q("15-9-1", "An unsolicited proposal is:", ["Any email to the CO", "A detailed offeror-initiated proposal not in response to a solicitation", "A response to an RFI", "A protest"], 1, "FAR 15.501 defines unsolicited proposals."),
        q("15-9-2", "Agencies evaluate unsolicited proposals for:", ["Lowest bidder status", "Public interest, funds, and mission contribution", "Political endorsements", "Incumbent preference only"], 1, "FAR 15.503 states evaluation criteria."),
        tf("15-9-3", "Acceptance of an unsolicited proposal always results in sole-source award.", false, "Acceptance may lead to further action but does not guarantee sole-source contract."),
        q("15-9-4", "Unsolicited proposals should include:", ["Technical approach and cost estimate", "Only a company brochure", "Protest arguments", "Sealed bid form"], 0, "FAR 15.502 lists required content elements."),
        q("15-9-5", "Marketing materials alone typically:", ["Qualify as unsolicited proposals", "Do not meet unsolicited proposal requirements", "Trigger automatic award", "Replace SAM registration"], 1, "Routine marketing does not satisfy 15.502."),
        tf("15-9-6", "Agencies may request clarifications during unsolicited proposal evaluation.", true, "FAR 15.504–15.505 address evaluation and negotiations."),
      ],
      { farPart: 15, farReferences: ["15.500", "15.501", "15.503", "15.506"] }
    ),
  ],
  { farPart: 15, isStandaloneCourse: true }
);
