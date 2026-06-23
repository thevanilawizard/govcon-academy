import type { CompanyOps, IntakeForm, Opportunity, Profile } from "@/lib/game/types";
import { SET_ASIDE_MAP } from "@/lib/game/constants";
import { playerMeetsClearance } from "@/lib/game/engine";

export interface OpportunityScore {
  grade: "A" | "B" | "C" | "D" | "F";
  total: number;
  breakdown: { label: string; points: number; max: number; note: string }[];
}

export function scoreOpportunity(
  opp: Opportunity,
  form: IntakeForm,
  profile: Profile,
  companyOps: CompanyOps | null
): OpportunityScore {
  const breakdown: OpportunityScore["breakdown"] = [];

  let saPts = 0;
  if (opp.saMatch) saPts = 30;
  else if (opp.setAside === "full_open" || opp.setAside === "sb") saPts = 15;
  breakdown.push({
    label: "Set-aside match",
    points: saPts,
    max: 30,
    note: opp.saMatch
      ? "You qualify — competition pool is restricted to firms like yours."
      : "You may not qualify — verify SAM.gov certifications before bidding.",
  });

  const naicsPts = opp.naicsMatch ? 20 : 0;
  breakdown.push({
    label: "NAICS match",
    points: naicsPts,
    max: 20,
    note: opp.naicsMatch
      ? `${opp.naicsCode} matches your registration.`
      : "NAICS mismatch — evaluators will scrutinize your qualifications.",
  });

  let daysPts = 0;
  if (opp.daysRemaining >= 21) daysPts = 15;
  else if (opp.daysRemaining >= 14) daysPts = 10;
  else if (opp.daysRemaining >= 10) daysPts = 5;
  breakdown.push({
    label: "Days remaining",
    points: daysPts,
    max: 15,
    note:
      opp.daysRemaining < 14
        ? "Under 14 days — usually not worth pursuing without an existing relationship."
        : `${opp.daysRemaining} days to prepare a compliant proposal.`,
  });

  const bonding = companyOps?.bondingCapacity ?? 750000;
  let valuePts = 0;
  if (opp.estimatedValue <= bonding * 0.5) valuePts = 15;
  else if (opp.estimatedValue <= bonding) valuePts = 10;
  else if (opp.estimatedValue <= bonding * 1.5) valuePts = 4;
  breakdown.push({
    label: "Value fit",
    points: valuePts,
    max: 15,
    note:
      profile.contractsWon === 0 && opp.estimatedValue > 500000
        ? "New firm + large value — past performance gap is hard to overcome."
        : `Est. ${(opp.estimatedValue / 1000).toFixed(0)}K vs bonding ${(bonding / 1000).toFixed(0)}K.`,
  });

  let compPts = 0;
  if (opp.competitionLevel === "low") compPts = 10;
  else if (opp.competitionLevel === "medium") compPts = 6;
  else compPts = 2;
  breakdown.push({
    label: "Competition",
    points: compPts,
    max: 10,
    note:
      opp.competitionLevel === "high"
        ? "High competition — expect a price war."
        : opp.competitionLevel === "low"
        ? "Low competition — agency may have a preferred vendor."
        : "Moderate competition.",
  });

  let clearancePts = 10;
  if (opp.requiresClearance && !playerMeetsClearance(form, opp)) clearancePts = 0;
  else if (opp.requiresClearance) clearancePts = 8;
  breakdown.push({
    label: "Clearance match",
    points: clearancePts,
    max: 10,
    note: opp.requiresClearance
      ? playerMeetsClearance(form, opp)
        ? "Clearance requirement met."
        : "Automatic disqualification — do not bid."
      : "No clearance required.",
  });

  const total = breakdown.reduce((s, b) => s + b.points, 0);
  const grade: OpportunityScore["grade"] =
    total >= 85 ? "A" : total >= 70 ? "B" : total >= 55 ? "C" : total >= 40 ? "D" : "F";

  return { grade, total, breakdown };
}

export function parseSolicitationNumber(solNum: string, agencyCode: string): string {
  const parts = solNum.split("-");
  if (parts.length >= 3) {
    return `Prefix "${parts[0]}" identifies the issuing office (${agencyCode}). "${parts[1]}" is the fiscal year. The sequence number "${parts.slice(2).join("-")}" is unique to this procurement. Together this tells you which agency office owns the buy and how fresh the requirement is.`;
  }
  return `This solicitation number ties this requirement to ${agencyCode}'s contracting office. In SAM.gov, the prefix identifies the agency component that will manage the award.`;
}

export function explainSetAside(opp: Opportunity): string {
  const info = SET_ASIDE_MAP[opp.setAside];
  if (opp.setAside === "full_open") {
    return "Full & Open means any qualified contractor can compete — you face the entire market including large primes. Set-asides restrict competition to certified small businesses, dramatically shrinking the pool.";
  }
  return `${info?.label ?? opp.setAsideLabel}: ${info?.description ?? ""} For this contract, only firms with this certification can win — if you hold it, your odds improve significantly.`;
}

export function explainNaics(opp: Opportunity, form: IntakeForm): string {
  const match = form.naicsCodes.includes(opp.naicsCode);
  return `${opp.naicsCode} — ${opp.naicsLabel}. NAICS defines the type of work and SBA size standard for this contract. ${
    match
      ? "You registered this code in SAM.gov — evaluators expect demonstrated experience here."
      : "This code is NOT in your SAM registration — propose only if you can justify capability or update your NAICS first."
  }`;
}

export function explainContractType(type: Opportunity["contractType"]): string {
  if (type === "FFP") {
    return "Firm Fixed Price (FFP): You quote one price and own all cost overrun risk. If you deliver under budget, you keep the savings. If costs exceed your bid, you absorb the loss. Most common on recompetes and well-defined SOWs.";
  }
  return "Time & Materials (T&M): You bill actual labor hours at negotiated rates plus materials. The government bears more cost risk but requires detailed timekeeping, DCAA-auditable records, and tighter oversight.";
}

export function explainEvalCriteria(criteria: Opportunity["evalCriteria"]): string {
  if (criteria === "LPTA") {
    return "Lowest Price Technically Acceptable (LPTA): Meet minimum technical standards, then lowest price wins. Do not over-invest in technical writing — price dominates. Common on recompetes and commodity IT services.";
  }
  return "Best Value: Evaluators trade off technical approach, past performance, and price. A stronger technical proposal or CPARS record can win at a higher price. Typical for complex services and first-time awards.";
}

export function buildProfileAnalysis(
  opp: Opportunity,
  form: IntakeForm,
  profile: Profile,
  score: OpportunityScore
): string[] {
  const lines: string[] = [];
  if (opp.saMatch && opp.naicsMatch) {
    lines.push("Strong alignment — your SAM.gov profile matches both set-aside and NAICS. This is where you should spend proposal dollars.");
  }
  if (profile.contractsWon === 0) {
    lines.push("No federal past performance yet — consider teaming with an established prime or targeting smaller set-aside contracts under $250K.");
  }
  if (opp.evalCriteria === "LPTA") {
    lines.push("LPTA evaluation — prioritize aggressive pricing over technical polish. A 5 on technical won't beat a cheaper compliant bid.");
  }
  if (form.setAsides.includes("sdvosb") && opp.agencyCode === "VA") {
    lines.push("SDVOSB + VA agency — you may have sole-source pathways up to $5M under Public Law 109-461 if requirements align.");
  }
  if (score.grade === "A" || score.grade === "B") {
    lines.push(`Opportunity grade ${score.grade} (${score.total}/100) — this fits your current profile. Run a formal bid/no-bid before committing capture hours.`);
  } else {
    lines.push(`Opportunity grade ${score.grade} (${score.total}/100) — significant gaps exist. Not bidding is often the right business decision.`);
  }
  return lines;
}

export function getRedFlags(opp: Opportunity, form: IntakeForm, profile: Profile): string[] {
  const flags: string[] = [];

  if (opp.daysRemaining < 10) {
    flags.push(
      "Very short response time (under 10 days) — often means the agency already has a vendor in mind and is fulfilling competition requirements."
    );
  }
  if (opp.competitionLevel === "low" && profile.contractsWon === 0) {
    flags.push(
      "Low competition + no past performance — the agency likely has an incumbent relationship. You need a compelling differentiator to win."
    );
  }
  if (opp.setAside === "full_open" && !form.setAsides.length) {
    flags.push(
      "Full & Open with no set-aside advantage — you compete against every large and small business nationally. Only bid with a unique capability."
    );
  }
  if (opp.requiresClearance && opp.estimatedValue < 300000) {
    flags.push(
      "Small dollar value + clearance requirement — cleared labor is expensive. The math rarely supports profit on small classified contracts."
    );
  }
  if (opp.estimatedValue > 2000000 && profile.contractsWon < 2) {
    flags.push(
      "Large contract value for a new entrant — evaluators weight past performance heavily above $2M. Consider subbing first to build CPARS."
    );
  }
  if (opp.competitionLevel === "high" && opp.evalCriteria === "LPTA") {
    flags.push(
      "High competition + LPTA — expect a price war. Bid only if you have a credible cost advantage."
    );
  }

  return flags.slice(0, 3);
}

export const MARKET_INTELLIGENCE = [
  {
    title: "70% won before posting",
    text: "Industry data suggests roughly 70% of federal contracts are shaped before the solicitation drops — through market research, industry days, and COR relationships.",
  },
  {
    title: "Sources Sought notices",
    text: "Agencies publish Sources Sought on SAM.gov to gauge market capability before deciding set-aside type. Responding builds visibility and can influence requirement language.",
  },
  {
    title: "Agency small business goals",
    text: "Every agency has annual goals by set-aside type (SDVOSB, 8(a), HUBZone, WOSB). VA and DoD often exceed SDVOSB targets — align your certifications with high-goal agencies.",
  },
  {
    title: "Incumbent advantage",
    text: "On recompetes, the incumbent holds CPARS history, institutional knowledge, and often wrote the current PWS. Beating them requires a price or innovation breakthrough.",
  },
];

export const OPPORTUNITY_CHECKLIST = [
  "Set-aside type — does it match your SAM.gov certifications?",
  "NAICS code — registered and experienced in this work?",
  "Days remaining — 14+ days needed for a quality proposal",
  "Estimated value — fits bonding capacity and past performance level?",
  "Contract type — FFP (you own cost risk) or T&M (government owns it)?",
  "Evaluation — LPTA (price wins) or Best Value (balanced)?",
  "Competition — low may mean preferred vendor; high means price war",
  "Clearance — required clearance you don't hold = do not bid",
];
