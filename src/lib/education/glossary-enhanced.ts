import type { GlossaryTerm } from "@/lib/game/types";

export interface EnhancedGlossaryTerm extends GlossaryTerm {
  whyItMatters: string;
  example: string;
  commonMistake: string;
}

export const ENHANCED_GLOSSARY: EnhancedGlossaryTerm[] = [
  {
    term: "SAM.gov",
    definition: "The official U.S. government portal for contractor registration and all federal contract opportunities.",
    whyItMatters: "No active SAM registration means you cannot bid, receive awards, or get paid. It's the single gate to all federal contracting.",
    example: "Before bidding on a $400K VA IT contract, you verify your UEI is active in SAM.gov and your NAICS codes match the solicitation.",
    commonMistake: "Letting SAM registration expire — awards and payments halt immediately until you reactivate.",
  },
  {
    term: "UEI",
    definition: "Unique Entity Identifier — a free 12-character ID that replaced DUNS numbers in 2022.",
    whyItMatters: "Every invoice, contract, and payment references your UEI. It's how the government identifies your firm across all systems.",
    example: "Your SF-1034 invoice lists UEI ABC123DEF456 — the payment system routes funds to your bank account linked in SAM.gov.",
    commonMistake: "Confusing UEI with CAGE code — they serve different purposes (entity ID vs. facility ID).",
  },
  {
    term: "NAICS Code",
    definition: "Six-digit code classifying your business type and determining SBA small business size standards.",
    whyItMatters: "Wrong NAICS in SAM.gov means size protest risk and lost bids when evaluators check qualification against the solicitation NAICS.",
    example: "NAICS 541511 (Custom Computer Programming) has a $34M size standard — you must be under that in revenue to qualify as small.",
    commonMistake: "Registering only one NAICS when your firm performs multiple service types — you miss opportunities in other codes.",
  },
  {
    term: "CPARS",
    definition: "Contractor Performance Assessment Reporting System — the government's official past performance record.",
    whyItMatters: "CPARS ratings persist 3 years and directly affect evaluation scores on every future bid. One bad contract can follow you across agencies.",
    example: "A 'Very Good' CPARS on a $800K DoD help desk contract becomes a reference on your next $2M proposal.",
    commonMistake: "Not reviewing CPARS drafts within 14 days — inaccurate ratings go permanent if you don't challenge them.",
  },
  {
    term: "Set-Aside",
    definition: "A contract reserved for specific business categories, limiting competition to eligible firms.",
    whyItMatters: "Set-asides shrink the competitive pool dramatically. An SDVOSB set-aside at VA eliminates all non-SDVOSB firms from competing.",
    example: "A $1.2M HUBZone IT contract set aside under FAR 19.1305 — only HUBZone-certified firms can submit proposals.",
    commonMistake: "Bidding set-aside contracts without the certification active in SAM.gov — proposal rejected as non-responsive.",
  },
  {
    term: "FFP",
    definition: "Firm Fixed Price — one price at award; contractor owns all cost overrun risk.",
    whyItMatters: "Under FFP, every hour of unplanned work eats your margin. Pricing must include realistic contingency.",
    example: "You bid $500K FFP for help desk support — if labor costs run $520K, you absorb the $20K loss.",
    commonMistake: "Under-bidding FFP contracts to win, then cutting quality to protect margin — triggers CPARS downgrade.",
  },
  {
    term: "T&M",
    definition: "Time & Materials — payment based on actual labor hours at negotiated rates plus materials.",
    whyItMatters: "Less pricing risk but requires DCAA-auditable timekeeping and incurs more government oversight.",
    example: "A T&M contract bills 1,200 hours at $95/hr loaded rate — you invoice actuals monthly via SF-1034.",
    commonMistake: "Poor timekeeping on T&M — DCAA disallows hours and you cannot bill them.",
  },
  {
    term: "LPTA",
    definition: "Lowest Price Technically Acceptable — lowest price among technically acceptable offers wins.",
    whyItMatters: "Technical excellence beyond the minimum adds zero value. Proposal dollars spent on gold-plated technical volumes are wasted.",
    example: "Three firms meet technical minimums at $400K, $425K, $450K — the $400K offer wins regardless of technical scores above the floor.",
    commonMistake: "Writing a 50-page technical volume on an LPTA recompete — evaluators won't read it; price decides.",
  },
  {
    term: "Best Value",
    definition: "Trade-off evaluation weighing technical, past performance, and price.",
    whyItMatters: "Strong CPARS and technical approach can win at 5–10% higher price — the primary path for differentiated firms.",
    example: "Your $480K proposal beats a $450K competitor because your CPARS is Exceptional and your technical approach maps every PWS requirement.",
    commonMistake: "Ignoring the stated evaluation weights — if price is 40%, spend 40% of effort on the cost volume.",
  },
  {
    term: "FAR",
    definition: "Federal Acquisition Regulation — the rulebook for all federal purchases.",
    whyItMatters: "Every clause in your contract flows from the FAR. Violations trigger audits, payment withholds, and debarment.",
    example: "FAR 52.219-14 limits subcontracting to 50% of labor on small business set-asides — violating it risks termination.",
    commonMistake: "Treating FAR clauses as boilerplate — each one creates real obligations with real consequences.",
  },
  {
    term: "Debrief",
    definition: "Post-award meeting explaining your evaluation scores vs. the winner's.",
    whyItMatters: "Legally required on request within 3 business days (FAR 15.506). Free competitive intelligence for your next bid.",
    example: "After losing a $2M GSA order, you request a debrief and learn your past performance was scored 'Neutral' — you team with a stronger prime next time.",
    commonMistake: "Not requesting debriefs on losses — you repeat the same proposal mistakes on the next pursuit.",
  },
  {
    term: "Sources Sought",
    definition: "Market research notice published before a solicitation to gauge industry capability.",
    whyItMatters: "Agencies use responses to decide set-aside type and refine requirements. Responding builds visibility with the CO.",
    example: "VA publishes a Sources Sought for cyber services — you respond showing SDVOSB capability, influencing a subsequent SDVOSB set-aside.",
    commonMistake: "Ignoring Sources Sought notices — you miss the chance to shape the requirement before the RFP drops.",
  },
  {
    term: "REA",
    definition: "Request for Equitable Adjustment — formal claim for additional compensation when scope changes on a fixed-price contract.",
    whyItMatters: "Without a signed mod or REA, out-of-scope work is performed for free — the #1 margin killer in GovCon.",
    example: "COR asks for 200 extra hours of analysis not in the PWS — you submit an REA under FAR 52.243-1 for $19K before performing the work.",
    commonMistake: "Doing the work first and asking for payment later — the CO has no obligation to pay without a prior mod.",
  },
  {
    term: "SF-1034",
    definition: "Standard Form 1034 — Public Voucher for billing the government under fixed-price contracts.",
    whyItMatters: "Invoices must be correct and timely. Payment lag (Net-30 to Net-90) starts only after COR approval of your voucher.",
    example: "You submit SF-1034 for Q2 milestone payment of $42K — COR approves in 2 weeks, treasury pays in 45 days.",
    commonMistake: "Waiting until cash is critical to submit invoices — submit at each milestone to start the payment clock early.",
  },
  {
    term: "QASP",
    definition: "Quality Assurance Surveillance Plan — the CO's framework for monitoring your performance.",
    whyItMatters: "QASP findings feed directly into CPARS. Poor surveillance results = poor past performance = lost future bids.",
    example: "COR documents 3 missed status reports in QASP — your CPARS drops from Very Good to Satisfactory on the next evaluation.",
    commonMistake: "Treating COR requests informally — everything goes in the QASP record whether you realize it or not.",
  },
];
