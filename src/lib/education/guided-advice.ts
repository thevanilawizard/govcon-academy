import type { Opportunity } from "@/lib/game/types";

type Screen = "dashboard" | "opportunities" | "proposals" | "contracts" | "field-manual" | "martin";

export function getGuidedAdvice(
  screen: Screen,
  context?: { opp?: Opportunity; hoveredOppId?: string; quarter?: number }
): string {
  switch (screen) {
    case "dashboard":
      return `Weekly briefing: Focus on opportunities graded A or B in your pipeline. Cash runway is your survival metric — if receivables exceed 60 days, draw on your line of credit or factor an invoice. Q${context?.quarter ?? 1} is for building past performance, not chasing $5M contracts with zero CPARS. Action: advance the quarter only after submitting all pending SF-1034 invoices.`;

    case "opportunities":
      if (context?.opp) {
        const o = context.opp;
        if (o.daysRemaining < 14) {
          return `This one concerns me — ${o.daysRemaining} days left is tight unless you have an existing COR relationship. Under FAR 15.208, late proposals are non-responsive. I'd pass unless you're the incumbent. Action: filter for 21+ days remaining on your next search.`;
        }
        if (!o.saMatch && o.setAside !== "full_open") {
          return `Set-aside mismatch — you don't hold the ${o.setAsideLabel} certification active in SAM.gov. Evaluators will reject as non-responsive under FAR 52.219-1. Action: verify your SAM.gov certifications match before clicking Bid Factory.`;
        }
        if (o.evalCriteria === "LPTA") {
          return `LPTA at ${o.agencyCode} — price wins among technically acceptable offers. Don't spend $30K on a gold-plated technical volume. Action: run your cost buildup first and set price competitiveness to 4–5 in the Bid Factory.`;
        }
        return `Solid look — check the Opportunity Grade before committing capture hours. If it's B or above and your bid/no-bid worksheet passes 3 of 4 questions, proceed. Action: open the full breakdown and read the red flags section.`;
      }
      return `Browse with discipline: 70% of contracts are shaped before posting. Look for set-aside match first — it shrinks your competition pool by 80% or more. Action: click any A-grade opportunity and read 'What this means for you.'`;

    case "proposals":
      return `Bid Factory mode — Step 4 (Pricing) is where new contractors lose the most money. Build your cost buildup before setting sliders. On LPTA, price at 4–5 and technical at 3. Action: complete the IGCE comparison in Step 4 before touching Step 5.`;

    case "contracts":
      return `Execution is where firms actually make or lose money. Submit CDRLs before quarter-end — two consecutive misses trigger default termination under FAR 52.249-8. Action: submit any draft SF-1034 invoices now, then advance the quarter.`;

    case "field-manual":
      return `Study FAR 52.219-14 and 15.403 before your next audit event — the simulator rewards players who mark clauses as studied. Action: mark 3 clauses as studied that relate to your active contract type.`;

    default:
      return `Ask me about bid/no-bid discipline, CPARS strategy, or cash flow — I'll give you specific FAR citations and dollar thresholds. Action: pick the mentor topic matching your biggest current risk.`;
  }
}

export function getGuidedOpportunityHover(opp: Opportunity): string {
  if (opp.requiresClearance) {
    return `"${opp.title}" — clearance required. If you don't hold ${opp.clearanceRequired ?? "Secret"}, this is an automatic pass. Don't waste proposal dollars.`;
  }
  if (opp.estimatedValue > 1500000 && opp.competitionLevel === "high") {
    return `"${opp.title}" — $${(opp.estimatedValue / 1e6).toFixed(1)}M full competition. Without Exceptional CPARS, you're funding someone else's price war. Consider teaming.`;
  }
  if (opp.saMatch && opp.naicsMatch) {
    return `"${opp.title}" — strong profile match. Run bid/no-bid, but this is worth a capture plan. Check the grade before committing.`;
  }
  return `"${opp.title}" — review the red flags before bidding. Not every SAM.gov posting is worth a proposal.`;
}
