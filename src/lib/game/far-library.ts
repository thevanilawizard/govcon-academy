import type { FarClause, EducationalTerm } from "./types";

/** 20 critical FAR clauses for the in-game reference library. */
export const FAR_CLAUSES: FarClause[] = [
  {
    id: "52.204-7",
    citation: "FAR 52.204-7",
    title: "System for Award Management",
    summary:
      "Contractors must be registered in SAM.gov and maintain an active registration to receive federal awards.",
    bidImpact: "You cannot submit a proposal or receive payment without active SAM registration.",
    violationConsequence: "Proposal rejected; award withheld until registration is verified.",
    relatedSteps: [1, 6],
  },
  {
    id: "52.215-1",
    citation: "FAR 52.215-1",
    title: "Instructions to Offerors",
    summary:
      "Section L of the RFP tells you exactly how to format and submit your proposal — page limits, volumes, and required forms.",
    bidImpact: "Missing a Section L requirement means evaluators can reject your offer without reading it.",
    violationConsequence: "Proposal deemed non-responsive; automatic elimination.",
    relatedSteps: [2, 5, 6],
  },
  {
    id: "52.222-26",
    citation: "FAR 52.222-26",
    title: "Equal Opportunity",
    summary:
      "Requires affirmative action and equal employment opportunity compliance for all federal contractors.",
    bidImpact: "You must acknowledge EEO requirements in your proposal and maintain an EEO program.",
    violationConsequence: "Compliance findings, contract termination risk, and debarment exposure.",
    relatedSteps: [3, 6],
  },
  {
    id: "52.232-25",
    citation: "FAR 52.232-25",
    title: "Prompt Payment",
    summary:
      "The government must pay approved invoices within 30 days. Late payment triggers interest under the Prompt Payment Act.",
    bidImpact: "Plan cash flow around Net-30 to Net-90 reality — prompt payment interest is a small recovery, not a fix.",
    violationConsequence: "Cash flow crisis if you over-hire before payments arrive.",
    relatedSteps: [4, 7],
  },
  {
    id: "52.246-1",
    citation: "FAR 52.246-1",
    title: "Contractor Inspection Requirements",
    summary:
      "The contractor is responsible for quality control and must accept or reject supplies/services per contract specs.",
    bidImpact: "Your QASP score during execution reflects how well you meet this clause.",
    violationConsequence: "Corrective action, CPARS downgrade, or termination for default.",
    relatedSteps: [5, 7],
  },
  {
    id: "15.404",
    citation: "FAR 15.404",
    title: "Proposal Pricing Rules",
    summary:
      "Governs how the government evaluates price — price analysis for commercial items, cost analysis when certified data is required.",
    bidImpact: "Your pricing worksheet must be defensible. Unbalanced pricing can disqualify an otherwise low bid.",
    violationConsequence: "Bid rejected as non-competitive or unbalanced; potential TINA violations.",
    relatedSteps: [4, 6],
  },
  {
    id: "9.104",
    citation: "FAR 9.104",
    title: "Responsibility Standards",
    summary:
      "Before award, the CO must determine you are responsible — adequate resources, ethics, past performance, and financial capacity.",
    bidImpact: "Low bonding capacity or poor past performance can block award even if you are the low bidder.",
    violationConsequence: "Award denied; referral to SBA Certificate of Competency process.",
    relatedSteps: [1, 4, 6],
  },
  {
    id: "6.302",
    citation: "FAR 6.302",
    title: "Justifications for Sole-Source",
    summary:
      "Full and open competition is the default. Sole-source awards require a written justification under one of seven authorities.",
    bidImpact: "8(a) sole-source and other set-aside programs operate under these authorities — know when competition is waived.",
    violationConsequence: "Protest risk; GAO can sustain protests on inadequate justifications.",
    relatedSteps: [1],
  },
  {
    id: "8.405",
    citation: "FAR 8.405",
    title: "GSA Schedule Ordering",
    summary:
      "GSA Schedule holders compete at the task-order level. Agencies issue RFQs and evaluate best value among schedule holders.",
    bidImpact: "Unlocking a GSA Schedule opens a separate pipeline with different evaluation rules than open market RFPs.",
    violationConsequence: "Missing schedule terms in task order responses leads to rejection.",
    relatedSteps: [1, 4],
  },
  {
    id: "52.219-9",
    citation: "FAR 52.219-9",
    title: "Small Business Subcontracting Plan",
    summary:
      "Large business prime contractors must submit subcontracting plans with goals for small, HUBZone, SDVOSB, and WOSB firms.",
    bidImpact: "Contracts over $750K often require a plan. Prime contractors need qualified small business subs.",
    violationConsequence: "Liquidated damages, CPARS downgrade, and compliance audit findings.",
    relatedSteps: [3],
  },
  {
    id: "15.403",
    citation: "FAR 15.403",
    title: "Certified Cost or Pricing Data",
    summary:
      "When the TINA threshold applies (currently $2M+), you must certify that your cost data is accurate, complete, and current.",
    bidImpact: "Keep contemporaneous cost records. Auditors will compare your proposal to actual books and records.",
    violationConsequence: "-20 Past Performance; contract price adjustment; False Claims Act exposure.",
    relatedSteps: [4],
  },
  {
    id: "15.404-1",
    citation: "FAR 15.404-1",
    title: "Unbalanced Pricing",
    summary:
      "Front-loading line items to improve cash flow creates performance risk. COs reject unbalanced bids that distort total price.",
    bidImpact: "Spread labor and ODCs realistically across contract period. Do not game Year 1 pricing.",
    violationConsequence: "Bid rejected; potential responsibility determination failure.",
    relatedSteps: [4],
  },
  {
    id: "15.506",
    citation: "FAR 15.506",
    title: "Post-Award Debriefings",
    summary:
      "Offerors have a right to a debrief after award. Debriefs explain strengths, weaknesses, and competitor ranking.",
    bidImpact: "Always request a debrief on losses — it is free competitive intelligence for your next bid.",
    violationConsequence: "Missing debriefs means repeating the same proposal mistakes.",
    relatedSteps: [6],
  },
  {
    id: "52.243-1",
    citation: "FAR 52.243-1",
    title: "Changes — Fixed Price",
    summary:
      "When the government changes scope on a fixed-price contract, you may submit a Request for Equitable Adjustment (REA).",
    bidImpact: "Never do out-of-scope work on a handshake. Informal favors become uncompensated losses.",
    violationConsequence: "Unrecoverable costs; margin erosion; potential default if you stop work.",
    relatedSteps: [7],
  },
  {
    id: "52.219-14",
    citation: "FAR 52.219-14",
    title: "Limitations on Subcontracting",
    summary:
      "Small business primes on set-aside contracts must perform minimum percentages of work — 50% for services, 15% for construction.",
    bidImpact: "Your delivery strategy (self vs sub) directly affects compliance with this clause.",
    violationConsequence: "SBA size protest; contract cancellation; debarment points.",
    relatedSteps: [3, 7],
  },
  {
    id: "37.602",
    citation: "FAR 37.602",
    title: "Performance Work Statements",
    summary:
      "PWS describes outcomes rather than methods, giving contractors flexibility in how they achieve results.",
    bidImpact: "Map every PWS requirement to a proposal paragraph in your compliance matrix.",
    violationConsequence: "Weak technical scores; findings of non-compliance during evaluation.",
    relatedSteps: [2, 5],
  },
  {
    id: "31.201-2",
    citation: "FAR 31.201-2",
    title: "Determining Allowability of Costs",
    summary:
      "Only reasonable, allocable, and allowable costs can be charged to government contracts under cost-type arrangements.",
    bidImpact: "Your indirect rates must exclude unallowable costs like entertainment and lobbying.",
    violationConsequence: "DCAA questioned costs; rate disallowances; repayment demands.",
    relatedSteps: [4],
  },
  {
    id: "52.232-7",
    citation: "FAR 52.232-7",
    title: "Payments Under Fixed-Price Contracts",
    summary:
      "FFP contracts pay on delivery or at milestones — not on hours worked. Cash flow follows the payment schedule.",
    bidImpact: "Staff up only when contract revenue timeline supports it.",
    violationConsequence: "Cash runway collapse mid-contract.",
    relatedSteps: [4, 7],
  },
  {
    id: "42.704",
    citation: "FAR 42.704",
    title: "DCAA Audit Requirements",
    summary:
      "Defense Contract Audit Agency audits contractor cost accounting systems, incurred costs, and forward pricing rates.",
    bidImpact: "Maintain clean books. DCAA findings reduce compliance score and trigger audit events.",
    violationConsequence: "Compliance score collapse; debarment risk at zero.",
    relatedSteps: [4],
  },
  {
    id: "19.702",
    citation: "FAR 19.702",
    title: "Small Business Subcontracting Plan Requirements",
    summary:
      "Applies to contracts over $750,000 ($1.5M for construction). Plans set percentage goals by small business category.",
    bidImpact: "Identify HUBZone and SDVOSB subs before proposal submission if you are a large prime.",
    violationConsequence: "Compliance violation event; past performance penalty.",
    relatedSteps: [3],
  },
];

export const FAR_CLAUSE_MAP = Object.fromEntries(
  FAR_CLAUSES.map((c) => [c.id, c])
) as Record<string, FarClause>;

/** Educational terms that trigger first-time pop-ups and can be pinned to the Field Manual. */
export const EDUCATIONAL_TERMS: EducationalTerm[] = [
  {
    id: "pws",
    term: "PWS (Performance Work Statement)",
    definition:
      "A type of SOW that describes outcomes rather than methods. Government prefers these because they give contractors flexibility.",
    farReference: "FAR 37.602",
    farClauseId: "37.602",
  },
  {
    id: "igce",
    term: "IGCE (Independent Government Cost Estimate)",
    definition:
      "The government's internal estimate of fair and reasonable price. Your bid is compared against it during evaluation.",
    farReference: "FAR 15.404",
    farClauseId: "15.404",
  },
  {
    id: "bafo",
    term: "BAFO (Best and Final Offer)",
    definition:
      "Final pricing round after discussions. You can fix weaknesses but cannot add new capabilities or scope.",
    farReference: "FAR 15.307",
  },
  {
    id: "tina",
    term: "TINA (Truth in Negotiations Act)",
    definition:
      "Requires certified cost or pricing data for acquisitions over the threshold (currently $2M). Data must be current, accurate, and complete.",
    farReference: "FAR 15.403",
    farClauseId: "15.403",
  },
  {
    id: "cpars",
    term: "CPARS (Contractor Performance Assessment)",
    definition:
      "Past performance rating system used by COs. Scores become your past performance record for future bids.",
    farReference: "FAR 42.1503",
  },
  {
    id: "lpta",
    term: "LPTA (Lowest Price Technically Acceptable)",
    definition:
      "Evaluation method where price wins among proposals that meet minimum technical standards. Common on recompetes.",
    farReference: "FAR 15.101-2",
  },
  {
    id: "ffp",
    term: "FFP (Firm Fixed Price)",
    definition:
      "Contract type where you absorb cost overrun risk. Profit depends on delivering under your proposed cost.",
    farReference: "FAR 16.202",
  },
  {
    id: "dcaa",
    term: "DCAA (Defense Contract Audit Agency)",
    definition:
      "Audits contractor cost accounting systems and incurred costs on DoD contracts. Findings affect compliance and rates.",
    farReference: "FAR 42.704",
    farClauseId: "42.704",
  },
  {
    id: "rea",
    term: "REA (Request for Equitable Adjustment)",
    definition:
      "Formal claim for additional compensation when the government changes scope on a fixed-price contract.",
    farReference: "FAR 52.243-1",
    farClauseId: "52.243-1",
  },
  {
    id: "qasp",
    term: "QASP (Quality Assurance Surveillance Plan)",
    definition:
      "The CO's plan for monitoring your performance. Poor QASP scores flow into CPARS and future win probability.",
    farReference: "FAR 46.401",
  },
];

export const EDUCATIONAL_TERM_MAP = Object.fromEntries(
  EDUCATIONAL_TERMS.map((t) => [t.id, t])
) as Record<string, EducationalTerm>;

export function searchFarClauses(query: string): FarClause[] {
  const q = query.toLowerCase().trim();
  if (!q) return FAR_CLAUSES;
  return FAR_CLAUSES.filter(
    (c) =>
      c.citation.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q)
  );
}
