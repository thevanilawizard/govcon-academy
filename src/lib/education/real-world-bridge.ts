import type { Opportunity } from "@/lib/game/types";

export interface RealWorldBridge {
  situation: string;
  proWouldDo: string;
  commonMistake: string;
  realWorldAction: string;
}

export const REAL_WORLD_BRIDGES: Record<string, RealWorldBridge> = {
  opportunity_viewed: {
    situation: "Evaluating a federal solicitation on SAM.gov",
    proWouldDo: "Run a 30-minute bid/no-bid with capture lead, contracts, and pricing — kill bad pursuits before spending $15K–$50K on a proposal.",
    commonMistake: "Chasing every opportunity that matches NAICS without checking set-aside, incumbent, or past performance fit.",
    realWorldAction: "Go to SAM.gov → Contract Opportunities → filter by your NAICS and set-aside type. Save searches for daily email alerts.",
  },
  proposal_win: {
    situation: "Winning a federal contract award",
    proWouldDo: "Within 48 hours: assign a program manager, notify subs, set up invoicing in WAWF/SF-1034, and schedule a COR kickoff within 10 days.",
    commonMistake: "Celebrating without setting up contract execution infrastructure — missed CDRLs on month 1 destroy CPARS.",
    realWorldAction: "Register in WAWF (Wide Area Workflow) at wawf.eb.mil — required for invoice submission at most agencies.",
  },
  proposal_loss: {
    situation: "Losing a competitive federal bid",
    proWouldDo: "Request a debrief within 3 business days under FAR 15.506. Ask: 'What was the winning price? How was past performance scored?'",
    commonMistake: "Moving on without a debrief — you never learn why you lost and repeat the same mistakes.",
    realWorldAction: "Email the CO's office: 'We respectfully request a post-award debrief per FAR 15.506 within 3 business days.'",
  },
  scope_creep: {
    situation: "COR requests work outside the contract PWS",
    proWouldDo: "Respond same day: 'We'd be glad to support — please initiate a bilateral mod so we can resource it properly.'",
    commonMistake: "Saying yes to preserve the relationship — you perform $20K–$100K of free work and train the COR to ask again.",
    realWorldAction: "Draft a modification request citing FAR 52.243-1 and the specific PWS paragraph the new work falls outside of.",
  },
  key_personnel: {
    situation: "Key personnel named in your proposal resigns mid-contract",
    proWouldDo: "Notify the COR within 24 hours and submit a substitution package with equal-or-better qualifications within 5 business days per FAR 52.237-2.",
    commonMistake: "Quietly backfilling without CO approval — unapproved substitutions are a material breach and CPARS event.",
    realWorldAction: "Prepare a bench of pre-cleared replacements with resumes matching the Key Personnel clause before award.",
  },
  stop_work: {
    situation: "Contracting Officer issues a stop-work order",
    proWouldDo: "Comply immediately, document idle costs daily, and track all stop-work days for a potential equitable adjustment under FAR 52.242-15.",
    commonMistake: "Continuing work after a stop-work — you cannot recover those costs and may face False Claims exposure.",
    realWorldAction: "Open a stop-work cost tracker spreadsheet the same day — labor, overhead, and sub idle costs are recoverable if unjustified.",
  },
  option_year: {
    situation: "Government decides whether to exercise an option year",
    proWouldDo: "Build a monthly performance packet for your COR starting 90 days before the option decision — document every CDRL and QASP metric.",
    commonMistake: "Assuming option years are automatic — they are unilateral rights, not guarantees, and funding can disappear.",
    realWorldAction: "Schedule a COR check-in 60 days before each option date and ask directly: 'Is funding in place for the next option year?'",
  },
  cash_crisis: {
    situation: "Running low on cash while waiting for government payment",
    proWouldDo: "Draw on a GovCon-specific line of credit (Live Oak, Parabilis, or invoice factoring at 2–3% discount). Submit all pending invoices immediately.",
    commonMistake: "Slow-walking invoices or hiring ahead of payment — payroll gaps kill more GovCon firms than bad performance.",
    realWorldAction: "Contact a GovCon lender or factor your oldest approved receivable — search 'government contract invoice factoring'.",
  },
  cpars_rating: {
    situation: "Receiving a CPARS performance evaluation",
    proWouldDo: "Review the draft within 14 days. Challenge any factual errors in writing with supporting documentation.",
    commonMistake: "Ignoring CPARS drafts — inaccurate ratings go permanent and follow you to every agency for 3 years.",
    realWorldAction: "Log into CPARS at cpars.gov and review all active evaluations. Set calendar reminders for draft deadlines.",
  },
  compliance_audit: {
    situation: "DCAA or CO requests cost or compliance documentation",
    proWouldDo: "Engage a GovCon accountant immediately. Pull contemporaneous cost records — never reconstruct after the fact.",
    commonMistake: "Not keeping contemporaneous cost data — TINA violations under FAR 15.403 carry False Claims Act exposure.",
    realWorldAction: "Search 'DCAA compliant accounting system requirements' and schedule a pre-award audit if pursuing cost-type work.",
  },
};

export function getRealWorldBridge(eventKey: string): RealWorldBridge {
  return REAL_WORLD_BRIDGES[eventKey] ?? REAL_WORLD_BRIDGES.opportunity_viewed;
}
