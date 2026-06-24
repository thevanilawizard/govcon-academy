import type { AssessmentArea, QuizQuestion } from "../types";

function q(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

const ASSESSMENT_BANK: Record<AssessmentArea, QuizQuestion[]> = {
  far: [
    q(
      "far-1",
      "The Federal Acquisition Regulation (FAR) applies to:",
      ["All commercial sales worldwide", "Acquisitions by executive agencies", "State and local governments only", "Subcontractors exclusively"],
      1,
      "FAR applies to acquisitions by executive agencies of the federal government."
    ),
    q(
      "far-2",
      "Which FAR part governs contract pricing?",
      ["Part 6", "Part 15", "Part 31", "Part 45"],
      1,
      "FAR Part 15 covers contracting by negotiation including pricing."
    ),
    q(
      "far-3",
      "A Contracting Officer's warrant establishes:",
      ["Security clearance level", "Authority to bind the government", "Past performance rating", "Small business status"],
      1,
      "Only warranted Contracting Officers may bind the government per FAR 1.602."
    ),
    q(
      "far-4",
      "FAR 52.243-1 authorizes:",
      ["Termination for default", "Unilateral changes within general scope on FFP contracts", "Assignment of claims", "Progress payments"],
      1,
      "FAR 52.243-1 is the Changes clause for fixed-price contracts."
    ),
    q(
      "far-5",
      "Commercial item acquisitions are primarily governed by:",
      ["FAR Part 8", "FAR Part 12", "FAR Part 19", "FAR Part 37"],
      1,
      "FAR Part 12 implements commercial item acquisition procedures."
    ),
  ],
  dfars: [
    q(
      "dfars-1",
      "DFARS 252.204-7012 requires contractors to:",
      ["Submit SF-294 reports", "Safeguard Covered Defense Information per NIST 800-171", "Provide unlimited data rights", "Waive cyber insurance"],
      1,
      "7012 mandates NIST SP 800-171 safeguards for CDI on DoD contracts."
    ),
    q(
      "dfars-2",
      "DFARS 252.227-7013 governs:",
      ["Travel reimbursement", "Rights in technical data", "Small business goals", "EVM reporting"],
      1,
      "7013 is the primary DoD clause for noncommercial technical data rights."
    ),
    q(
      "dfars-3",
      "The DFARS supplements:",
      ["State procurement codes", "The FAR for DoD acquisitions", "Commercial UCC contracts", "Grant agreements only"],
      1,
      "DFARS is the DoD supplement to the FAR."
    ),
    q(
      "dfars-4",
      "DFARS 252.204-7019 requires:",
      ["Immediate contract termination for cyber breach", "Notice of NIST SP 800-171 DoD Assessment Requirements", "Unlimited software license to DoD", "Waiver of all cyber flow-downs"],
      1,
      "7019 addresses NIST assessment requirements in DoD solicitations and contracts."
    ),
    q(
      "dfars-5",
      "For noncommercial software, DFARS 252.227-7014 establishes:",
      ["Only unlimited rights", "Restricted rights for software developed at private expense", "No government rights", "Automatic open source release"],
      1,
      "7014 provides restricted rights for commercial computer software under defined conditions."
    ),
  ],
  administration: [
    q(
      "admin-1",
      "FAR 4.802 requires contract files to:",
      ["Be destroyed after award", "Include complete transaction history", "Exclude subcontract documents", "Remain with the KO only"],
      1,
      "Contract files must document the complete history of the transaction."
    ),
    q(
      "admin-2",
      "A cure notice is typically issued before:",
      ["Option exercise", "Termination for default", "Contract novation", "Commercial item purchase"],
      1,
      "Cure notices provide opportunity to correct before default termination."
    ),
    q(
      "admin-3",
      "Wide Area Workflow (WAWF) is used primarily for:",
      ["Proposal submission", "Electronic invoicing and receipt/acceptance", "CPARS reporting", "Protest filing"],
      1,
      "WAWF is DoD's electronic invoicing and acceptance system."
    ),
    q(
      "admin-4",
      "On cost-plus contracts, when EAC exceeds funded value you should:",
      ["Continue without notice", "Notify the KO and consider LOF notification", "Terminate the contract", "Switch to FFP billing"],
      1,
      "Early notification and Limitation of Funds compliance protect the contractor."
    ),
    q(
      "admin-5",
      "A constructive change occurs when:",
      ["The KO issues SF 30", "Government actions effectively change requirements without formal mod", "The contractor changes staff", "An option is unexercised"],
      1,
      "Constructive changes arise from informal government direction or changed conditions."
    ),
  ],
  pricing: [
    q(
      "price-1",
      "Cost realism analysis primarily evaluates:",
      ["Past performance", "Whether proposed costs will support performance", "Security clearance levels", "Organizational structure"],
      1,
      "Cost realism asks if the offeror can perform at proposed cost levels."
    ),
    q(
      "price-2",
      "Indirect rates are typically applied in this order:",
      ["G&A, OH, Fringe", "Fringe, OH, G&A", "OH, Fringe, G&A", "Fee, Fringe, OH"],
      1,
      "Standard order: fringe on labor, overhead on labor+fringe, G&A on total cost base."
    ),
    q(
      "price-3",
      "Most Probable Cost (MPC) adjustments apply when:",
      ["Price is too high", "Proposed costs are unrealistically low on cost-type", "Contract is commercial", "LPTA is used"],
      1,
      "MPC adjusts unrealistically low cost elements upward for evaluation."
    ),
    q(
      "price-4",
      "FAR 15.404-3 requires prime contractors to:",
      ["Accept sub quotes without review", "Perform price/cost analysis on subcontractor proposals", "Use only lowest sub price", "Waive analysis for small business subs"],
      1,
      "Primes must analyze and document subcontract pricing before agreement."
    ),
    q(
      "price-5",
      "Total evaluated price on a multi-year proposal typically includes:",
      ["Base year only", "Base year and all priced option years", "Fee only", "ODCs only"],
      1,
      "Evaluators compare total evaluated price including options when required by RFP."
    ),
  ],
  subcontracts: [
    q(
      "sub-1",
      "Consent to subcontract under FAR 52.244-2 is required:",
      ["Never", "When clause is in contract and thresholds/requirements apply", "Only for commercial items", "Only at closeout"],
      1,
      "Consent requirements depend on prime contract terms and subcontract type/value."
    ),
    q(
      "sub-2",
      "CPSR evaluates:",
      ["Subcontractor CPARS ratings", "Prime contractor purchasing system", "Government source selection", "Employee benefits"],
      1,
      "Contractor Purchasing System Review assesses prime purchasing policies and documentation."
    ),
    q(
      "sub-3",
      "SF-294 reports:",
      ["Invoice rejections", "Subcontract awards to small business", "EVM performance", "Export licenses"],
      1,
      "SF-294 is the Small Business Subcontracting Report."
    ),
    q(
      "sub-4",
      "On a set-aside service contract, FAR 52.219-14 generally requires the prime to perform:",
      ["10% of work", "50% of cost of contract performance (excl. materials)", "No minimum", "90% of work"],
      1,
      "Limitations on subcontracting require minimum prime performance percentages."
    ),
    q(
      "sub-5",
      "FFP subcontracts are best when:",
      ["Scope is highly uncertain", "Scope is well-defined and prime wants to transfer cost risk", "Prime wants to absorb all risk", "No deliverables exist"],
      1,
      "FFP subs fix price and transfer performance cost risk to the subcontractor."
    ),
  ],
  legal: [
    q(
      "legal-1",
      "ITAR controls:",
      ["All commercial software", "Defense articles and services on the USML", "Only exports to Canada", "Unclassified marketing materials only"],
      1,
      "ITAR regulates defense articles, services, and related technical data on the USML."
    ),
    q(
      "legal-2",
      "A deemed export occurs when:",
      ["Goods ship internationally", "Controlled technical data is released to a foreign national in the US", "A contract terminates", "An invoice is paid late"],
      1,
      "Sharing controlled data with foreign persons in the US is a deemed export."
    ),
    q(
      "legal-3",
      "Government Purpose Rights in technical data generally last:",
      ["30 days", "5 years from delivery", "Forever", "1 year"],
      1,
      "GPR typically restricts government use for 5 years from delivery for noncommercial data."
    ),
    q(
      "legal-4",
      "Unauthorized commitments may be resolved through:",
      ["Automatic payment", "Ratification per FAR 1.602-3", "COR email", "Verbal PM approval"],
      1,
      "Ratification is the formal process for validating commitments made without authority."
    ),
    q(
      "legal-5",
      "The False Claims Act creates liability for:",
      ["Honest billing errors promptly corrected", "Knowingly submitting false claims for payment", "Late deliverables", "Low CPARS ratings"],
      1,
      "FCA imposes liability for knowingly presenting false claims to the government."
    ),
  ],
  negotiation: [
    q(
      "neg-1",
      "BATNA stands for:",
      ["Best Alternative to Negotiated Agreement", "Basic Agreement Terms Act", "Budget Authorization Negotiation Analysis", "Bid Analysis for Technical Negotiations"],
      0,
      "BATNA is your best walk-away option if negotiation fails."
    ),
    q(
      "neg-2",
      "Mandatory FAR clauses in a prime contract are:",
      ["Fully negotiable", "Generally not negotiable", "Optional", "Negotiable only with COR approval"],
      1,
      "Prescribed FAR clauses cannot be altered without statutory/regulatory authority."
    ),
    q(
      "neg-3",
      "A Memorandum of Negotiation documents:",
      ["Only the final price agreed", "Analysis method and fair-and-reasonable determination", "Competitor proprietary data", "Informal verbal agreements only"],
      1,
      "MONs support price reasonableness with documented analysis."
    ),
    q(
      "neg-4",
      "When negotiating subcontracts, liability caps:",
      ["Should always be $0", "May not protect prime from full government liability", "Eliminate all prime risk", "Are required by FAR"],
      1,
      "Prime remains liable to government; sub liability caps may be insufficient for gov claims."
    ),
    q(
      "neg-5",
      "Reservation price in negotiation is:",
      ["The ideal outcome", "The worst terms you'll accept before walking away", "The competitor's price", "The IGCE"],
      1,
      "Reservation price is your walk-away threshold — below BATNA consideration."
    ),
  ],
  documents: [
    q(
      "doc-1",
      "Section M of an RFP defines:",
      ["Contract clauses", "Evaluation factors and subfactors", "Invoice instructions only", "Security clearance levels"],
      1,
      "Section M contains evaluation criteria for proposals."
    ),
    q(
      "doc-2",
      "Section B of a federal contract contains:",
      ["Supplies/services and prices (CLINs)", "Disputes procedures only", "Past performance", "Subcontractor list"],
      0,
      "Section B identifies CLINs, pricing, and funded amounts."
    ),
    q(
      "doc-3",
      "DD Form 254 establishes:",
      ["Invoice format", "Contract security classification requirements", "Small business goals", "EVM thresholds"],
      1,
      "DD 254 specifies security classification guidance for the contract."
    ),
    q(
      "doc-4",
      "A bilateral SF 30 modification requires:",
      ["KO signature only", "Both parties' signatures", "COR approval only", "DCAA approval"],
      1,
      "Bilateral mods require signatures of both the KO and contractor."
    ),
    q(
      "doc-5",
      "In a compliance matrix, each PWS requirement should map to:",
      ["A random proposal page", "A specific proposal section demonstrating compliance", "The cost volume only", "Past performance references only"],
      1,
      "Compliance matrices trace PWS requirements to proposal sections for evaluators."
    ),
  ],
  financial: [
    q(
      "fin-1",
      "FAR Part 31 addresses:",
      ["Contract formatting", "Contract cost principles and procedures", "Bid protests", "Security requirements"],
      1,
      "Part 31 defines allowability, allocability, and reasonableness of costs."
    ),
    q(
      "fin-2",
      "Entertainment costs under FAR 31.205-14 are:",
      ["Always allowable", "Unallowable", "Allowable with 50% cap", "Allowable on commercial contracts only"],
      1,
      "Entertainment and amusement costs are unallowable on government contracts."
    ),
    q(
      "fin-3",
      "Incurred Cost Submissions are generally due:",
      ["30 days after award", "6 months after fiscal year end", "At contract closeout only", "Never for FFP contracts"],
      1,
      "ICS is due 6 months after contractor fiscal year end per FAR 52.216-7."
    ),
    q(
      "fin-4",
      "CPI (Cost Performance Index) below 1.0 indicates:",
      ["Under budget performance", "Over budget for work performed", "Ahead of schedule", "Contract completion"],
      1,
      "CPI = EV/AC; below 1.0 means costs exceed earned value."
    ),
    q(
      "fin-5",
      "Prompt Payment Act interest applies when:",
      ["Invoice is rejected", "Proper invoice not paid within 30 days of acceptance", "Contract is terminated", "Mod is pending"],
      1,
      "PPA interest accrues after 30 days from receipt/acceptance of a proper invoice."
    ),
  ],
  interview: [
    q(
      "int-1",
      "In a behavioral interview, the STAR method stands for:",
      ["Strategy, Tactics, Action, Result", "Situation, Task, Action, Result", "Scope, Timeline, Analysis, Review", "Standard, Terms, Agreement, Rate"],
      1,
      "STAR structures behavioral answers: Situation, Task, Action, Result."
    ),
    q(
      "int-2",
      "When asked about a constructive change in an interview, you should mention:",
      ["Ignoring COR direction", "Documenting direction and submitting REA", "Performing all requested work without question", "Terminating the contract"],
      1,
      "Strong candidates document and assert rights professionally via REA."
    ),
    q(
      "int-3",
      "A strong answer about DCAA audits emphasizes:",
      ["Denying access", "Cooperation with controlled document production and written responses", "Verbal answers only", "Delaying responses indefinitely"],
      1,
      "Professional audit management balances cooperation with proper controls."
    ),
    q(
      "int-4",
      "When discussing subcontract management, key topics include:",
      ["Ignoring flow-down clauses", "Flow-down compliance, consent, price analysis, and performance oversight", "Paying subs before government pays", "Avoiding cure notices"],
      1,
      "Subcontract management spans flow-downs, consent, analysis, and performance."
    ),
    q(
      "int-5",
      "If an interviewer asks about pushing back on a PM, a strong answer shows:",
      ["Refusing all customer requests", "Professional pushback with regulatory basis and alternative solutions", "Always agreeing to avoid conflict", "Escalating to protest immediately"],
      1,
      "Effective contracts professionals say no with solutions — citing scope and offering mod/REA paths."
    ),
  ],
};

export function getAssessmentQuestions(area: AssessmentArea): QuizQuestion[] {
  return ASSESSMENT_BANK[area] ?? [];
}

export function getAllAssessmentQuestions(): QuizQuestion[] {
  return Object.values(ASSESSMENT_BANK).flat();
}
