import type { EvalCriteria, Opportunity, ProposalSliders, SubmittedProposal } from "@/lib/game/types";

export const SLIDER_EDUCATION = {
  technical: {
    title: "Technical Approach",
    whatEvaluatorsWant:
      "Evaluators read for compliance with Section C (PWS) requirements — not marketing fluff. They score how your approach addresses each requirement with realistic methods, staffing, and risk mitigation.",
    scale: {
      1: "Non-responsive or generic boilerplate. Does not map to PWS requirements. Evaluators score as Unacceptable or Marginal.",
      3: "Meets minimum requirements with a credible approach. Acceptable on LPTA; middle of the pack on Best Value.",
      5: "Exceptional — clear methodology, risk mitigation, innovation tied to specific PWS paragraphs. Wins Best Value trade-offs.",
    },
    mistakes: [
      "Leading with company history instead of addressing the SOW",
      "Unenforceable promises (100% uptime guarantees)",
      "Missing the compliance matrix mapping Section C to proposal pages",
    ],
  },
  price: {
    title: "Price Competitiveness",
    whatEvaluatorsWant:
      "On LPTA, price is pass/fail among technically acceptable offers — lowest wins. On Best Value, price is weighted (often 30–40%) against technical and past performance.",
    scale: {
      1: "Well above the IGCE — scored non-competitive. On LPTA, you lose regardless of technical quality.",
      3: "Within competitive range of the Independent Government Cost Estimate. Viable but not a price leader.",
      5: "At or below IGCE sweet spot — price leader position. On LPTA, this is often the winning factor.",
    },
    mistakes: [
      "Bidding below cost to win — triggers responsibility concerns under FAR 9.104",
      "Using loaded rates without a defensible cost buildup (FAR 15.404)",
      "Ignoring unbalanced pricing rules when front-loading Year 1",
    ],
    lptaNote: "LPTA: Set technical to 3 (minimum acceptable) and push price to 4–5. Do not gold-plate the technical volume.",
    bestValueNote: "Best Value: Balance all three factors. A strong CPARS record lets you bid 5–10% higher and still win.",
  },
  pastPerformance: {
    title: "Past Performance",
    whatEvaluatorsWant:
      "CPARS ratings and relevancy to this contract type. Evaluators contact references and review PPIRS/CPARS for contracts of similar size, scope, and complexity.",
    scale: {
      1: "No relevant federal past performance — evaluators assign neutral or weak confidence. Common for new entrants.",
      3: "Some relevant experience — commercial work, sub work, or 1–2 similar contracts with Satisfactory CPARS.",
      5: "Strong CPARS (Very Good or Exceptional) on directly relevant contracts within the last 3 years.",
    },
    mistakes: [
      "Claiming past performance you cannot document in CPARS",
      "Ignoring teaming partners who bring stronger references",
      "Not requesting CPARS from primes after subcontract work",
    ],
    newFirmAdvice:
      "New firms: sub under a prime to earn documented CPARS, use teaming agreements with established partners, and target contracts under $250K where past performance weight is lower.",
  },
  teaming: {
    title: "Teaming Partner",
    description:
      "A teaming agreement (not a subcontract until award) lets you combine capabilities. Adds +11% win probability here and can fill past performance or clearance gaps. Flow-down FAR clauses apply to subs after award.",
  },
};

export function buildWinExplanation(
  proposal: SubmittedProposal,
  sliders: ProposalSliders
): { headline: string; factors: string[]; topFactor: string } {
  const factors: string[] = [];
  const weights: { name: string; score: number }[] = [
    { name: "Price competitiveness", score: sliders.price },
    { name: "Technical approach", score: sliders.technical },
    { name: "Past performance", score: sliders.pastPerformance },
  ];
  if (sliders.teamingPartner) {
    weights.push({ name: "Teaming partner strength", score: 4 });
  }
  if (proposal.opp.saMatch) factors.push("Set-aside eligibility restricted the competition pool in your favor.");
  if (proposal.opp.naicsMatch) factors.push("NAICS alignment met evaluator expectations for contractor qualification.");
  if (proposal.opp.evalCriteria === "LPTA" && sliders.price >= 4) {
    factors.push("LPTA evaluation — your aggressive pricing was likely the decisive factor.");
  }
  if (proposal.opp.evalCriteria === "Best Value" && sliders.technical >= 4) {
    factors.push("Best Value trade-off — technical differentiation offset any price premium.");
  }
  if (sliders.pastPerformance >= 4) factors.push("Strong past performance narrative increased evaluator confidence.");
  if (sliders.teamingPartner) factors.push("Teaming partner filled capability or reference gaps.");

  weights.sort((a, b) => b.score - a.score);
  const topFactor = weights[0]?.name ?? "Overall proposal strength";

  return {
    headline: `You won at ${Math.round(proposal.winProbability)}% win probability — here's what likely decided it.`,
    factors: factors.length ? factors : ["Your proposal met all evaluation criteria at a competitive level."],
    topFactor,
  };
}

export function buildLossDebrief(
  proposal: SubmittedProposal,
  sliders: ProposalSliders
): {
  headline: string;
  evaluationRoom: string;
  winnerProfile: string;
  actions: string[];
} {
  const actions: string[] = [];
  let evaluationRoom = "The evaluation panel scored technical, price, and past performance separately. ";
  let winnerProfile = "The winning offer likely had ";

  if (proposal.opp.evalCriteria === "LPTA") {
    evaluationRoom +=
      "Under LPTA, all technically acceptable proposals were ranked by price. Your technical score only needed to meet the floor — price determined the winner.";
    winnerProfile += "the lowest price among technically acceptable offers, possibly with an incumbent CPARS advantage you couldn't match.";
    if (sliders.price < 4) actions.push("On LPTA recompetes, build a sharper cost buildup (FAR 15.404) and target price score 4–5.");
  } else {
    evaluationRoom +=
      "Under Best Value, the winner achieved the best overall trade-off. A higher price can win with superior technical or past performance.";
    winnerProfile += "stronger CPARS references or a technical approach that mapped more completely to Section C requirements.";
    if (sliders.technical < 4) actions.push("Rebuild your compliance matrix — map every PWS paragraph to a specific proposal section.");
  }

  if (sliders.pastPerformance <= 2) {
    actions.push("Request a formal debrief under FAR 15.506 within 3 business days — ask specifically how past performance was scored.");
  }
  if (!proposal.opp.saMatch) {
    actions.push("This set-aside didn't match your certifications — filter opportunities to aligned set-asides only.");
  }
  actions.push("Review the Field Manual for FAR 15.506 debrief rights — free competitive intelligence for your next bid.");

  while (actions.length < 3) {
    actions.push("Run the 4-question bid/no-bid checklist before your next pursuit to avoid unwinnable bids.");
    break;
  }

  return {
    headline: "Mandatory debrief — what likely happened in the evaluation room",
    evaluationRoom,
    winnerProfile,
    actions: actions.slice(0, 3),
  };
}

export function getEvalGuidanceEducational(criteria: EvalCriteria): string {
  return criteria === "LPTA"
    ? "LPTA: Price dominates. Meet minimum technical (score 3) and maximize price competitiveness. Pursuit cost on unwinnable LPTA bids is how new firms go broke."
    : "Best Value: Invest proportionally — if price is 40% of evaluation, spend ~40% of proposal effort on the cost volume.";
}
