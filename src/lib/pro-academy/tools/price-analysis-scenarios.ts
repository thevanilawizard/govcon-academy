export interface PriceAnalysisScenario {
  id: string;
  title: string;
  situation: string;
  dataPoints: string[];
  question: string;
  recommendedTechnique: string;
  modelAnswer: string;
  farCitation: string;
  rubric: string[];
}

export const PRICE_ANALYSIS_SCENARIOS: PriceAnalysisScenario[] = [
  {
    id: "pa01",
    title: "Competitive range price reasonableness",
    situation: "Three offerors submitted on an FFP services recompete. Prices: $4.2M, $4.8M, $5.1M. Incumbent is middle offeror.",
    dataPoints: ["IGCE: $4.5M", "Incumbent current contract: $4.6M/year", "Low offeror has limited past performance on similar scope"],
    question: "Which price analysis technique should the CO apply and what concerns exist with the low offeror?",
    recommendedTechnique: "Price analysis — comparison of competitive offers",
    modelAnswer: "Apply price analysis per FAR 15.404-1(b)(2)(ii) by comparing competitive offers. The low offer at $4.2M is 7% below IGCE and 10% below incumbent. Perform price realism review: verify the low offeror understands staffing levels, wage determinations, and escalation. Document that price reasonableness is supported by competition but flag realism risk given limited past performance.",
    farCitation: "FAR 15.404-1(b)(2)",
    rubric: ["Identifies competitive price analysis", "References IGCE comparison", "Discusses price realism vs. reasonableness", "Notes documentation requirement"],
  },
  {
    id: "pa02",
    title: "Single offer — catalog pricing",
    situation: "Only one vendor responded to a commercial item buy for ruggedized laptops. Vendor cites GSA schedule pricing.",
    dataPoints: ["GSA schedule price: $2,850/unit", "Commercial catalog list: $3,100/unit", "Quantity: 200 units"],
    question: "How do you determine price reasonableness with a single offer?",
    recommendedTechnique: "Price analysis — established catalog or market prices",
    modelAnswer: "Use established catalog/market prices per FAR 15.404-1(b)(2)(iii). Compare GSA schedule price to commercial catalog and recent agency purchase history. Document that schedule pricing reflects pre-negotiated fair and reasonable rates. Request price reduction if catalog shows lower commercial pricing.",
    farCitation: "FAR 15.404-1(b)(2)(iii)",
    rubric: ["Catalog/market price technique", "GSA schedule as benchmark", "Single-offer documentation", "FAR 15.404 reference"],
  },
  {
    id: "pa03",
    title: "Cost realism on CPFF",
    situation: "Cost-reimbursement R&D proposal with $12M target cost. Labor mix shows 40% senior engineers at below-market rates.",
    dataPoints: ["Proposal: avg senior rate $95/hr", "BLS/OES benchmark: $125/hr", "No basis of estimate for hours"],
    question: "What analysis is required and what adjustment might the government make?",
    recommendedTechnique: "Cost realism analysis",
    modelAnswer: "Perform cost realism analysis per FAR 15.404-1(d). Low labor rates may indicate unrealistic staffing plan; government may adjust evaluation for realism by using reasonable rates. Request BOE for hours. Document adjustments in competitive range determination.",
    farCitation: "FAR 15.404-1(d)",
    rubric: ["Cost realism vs. price analysis distinction", "Rate benchmark comparison", "BOE request", "Evaluation adjustment concept"],
  },
  {
    id: "pa04",
    title: "TINA threshold — certified cost data",
    situation: "Modification increasing contract value by $1.5M, bringing total to $2.8M. Original award was $1.3M commercial FFP.",
    dataPoints: ["Modification requires pricing of new CLINs", "Total now exceeds TINA threshold", "Contractor claims commercial item exemption"],
    question: "Is certified cost/pricing data required for the modification?",
    recommendedTechnique: "Cost analysis with certified cost/pricing data",
    modelAnswer: "Total value now exceeds $2.5M TINA threshold. Unless commercial item exception applies per FAR 15.403-1(c), obtain certified cost/pricing data for the modification. Perform cost analysis per FAR 15.404-1(c). Document commerciality determination if claiming exemption.",
    farCitation: "FAR 15.403-1, FAR 15.404-1(c)",
    rubric: ["TINA threshold recognition", "Modification aggregation", "Commercial item exception", "Cost analysis requirement"],
  },
  {
    id: "pa05",
    title: "Unbalanced pricing detection",
    situation: "FFP construction proposal with 15 CLINs. CLIN 3 (mobilization) priced at 35% of total; CLIN 8 (closeout) at 0.5%.",
    dataPoints: ["Total proposed price: $8M", "Front-loaded CLIN 3: $2.8M", "Industry norm: mobilization 8-12%"],
    question: "Identify the pricing risk and recommended CO action.",
    recommendedTechnique: "Price analysis — unbalanced pricing review",
    modelAnswer: "Identify potentially unbalanced pricing per FAR 15.404-1(g). Front-loaded mobilization may indicate proposal gaming for early cash flow. Evaluate performance risk if front-loaded CLINs under-run. Request revised pricing or document risk acceptance in source selection.",
    farCitation: "FAR 15.404-1(g)",
    rubric: ["Unbalanced pricing identification", "Performance risk", "Front-loading concern", "CO action options"],
  },
  {
    id: "pa06",
    title: "Historical prices comparison",
    situation: "Agency re-procuring janitorial services at 5 locations. Same scope as prior contract.",
    dataPoints: ["Prior contract (3 yrs ago): $1.1M/year", "New proposal: $1.45M/year", "CPI increase ~12% over period", "New wage determination increases labor 8%"],
    question: "Use historical pricing to assess reasonableness.",
    recommendedTechnique: "Price analysis — historical prices paid",
    modelAnswer: "Apply historical prices technique per FAR 15.404-1(b)(2)(iv). Adjust prior price for wage determination changes, CPI, and scope verification. Expected range ~$1.32-1.38M. Proposed $1.45M is 5-10% above adjusted historical — request breakdown of escalation beyond WD/CPI.",
    farCitation: "FAR 15.404-1(b)(2)(iv)",
    rubric: ["Historical price technique", "Escalation adjustments", "WD impact", "Quantitative comparison"],
  },
  {
    id: "pa07",
    title: "Parametric estimating",
    situation: "Software development effort — 500 function points proposed at $1,200/FP.",
    dataPoints: ["Industry parametric range: $800-$1,100/FP for similar apps", "Offeror cites agile methodology premium", "No complexity adjustment documented"],
    question: "Evaluate using parametric analysis.",
    recommendedTechnique: "Parametric estimating / cost analysis",
    modelAnswer: "Use parametric estimating per FAR 15.404-1(b)(2)(vii). Compare $1,200/FP to industry benchmarks. Request complexity factors and reuse assumptions. Rate above benchmark requires justification or negotiation.",
    farCitation: "FAR 15.404-1(b)(2)(vii)",
    rubric: ["Parametric technique", "Benchmark comparison", "Complexity factors", "Negotiation leverage"],
  },
  {
    id: "pa08",
    title: "Independent government cost estimate",
    situation: "Complex weapons system sustainment — sole source to OEM. No competition.",
    dataPoints: ["OEM proposal: $45M/year", "Program office IGCE: $38M", "Last independent estimate 2 years old: $40M"],
    question: "What role does the IGCE play in price analysis?",
    recommendedTechnique: "Cost analysis with IGCE comparison",
    modelAnswer: "Without competition, use cost analysis per FAR 15.404-1(c). Compare proposal to updated IGCE and independent government cost estimate. Document variances by WBS element. Negotiate to IGCE-supported rates or require certified cost/pricing data.",
    farCitation: "FAR 15.404-1(c), FAR 15.404-1(b)(2)(viii)",
    rubric: ["IGCE as benchmark", "Sole-source cost analysis", "WBS variance analysis", "Negotiation strategy"],
  },
  {
    id: "pa09",
    title: "Rate buildup verification",
    situation: "Cost-reimbursement proposal: direct labor $2M, fringe 32%, OH 145%, G&A 12%, fee 8%.",
    dataPoints: ["Fringe benchmark: 28-35%", "OH rate high vs. peer contractors at 110-130%", "Forward pricing rate agreement expired"],
    question: "Analyze indirect rate buildup for reasonableness.",
    recommendedTechnique: "Cost analysis — rate verification",
    modelAnswer: "Perform cost analysis on rate buildup per FAR 15.404-1(c) and Part 31. Compare fringe/OH/G&A to FPRA, DCMA approved rates, and industry benchmarks. OH at 145% exceeds peers — request pool composition, base allocation, and CAS compliance. Consider requiring updated FPRA.",
    farCitation: "FAR 15.404-1(c), FAR 31.201",
    rubric: ["Rate buildup analysis", "Benchmark comparison", "FPRA reference", "Part 31 allowability link"],
  },
  {
    id: "pa10",
    title: "Price realism on LPTA",
    situation: "LPTA IT help desk recompete. Low offeror 22% below incumbent and 18% below IGCE.",
    dataPoints: ["Staffing plan: 12 FTE vs. IGCE 16 FTE", "Help desk tier-1 rate: $42/hr vs. WD minimum $38/hr loaded", "Transition period: 15 days vs. 30 in PWS"],
    question: "Can the CO award LPTA to the low offeror? What analysis is required?",
    recommendedTechnique: "Price realism analysis (even under LPTA)",
    modelAnswer: "Under LPTA, award goes to lowest technically acceptable offer, but CO must still determine price reasonableness per FAR 15.404-1. Conduct price realism analysis: staffing at 75% of IGCE and compressed transition create performance risk. Document that low price is reasonable only if offeror demonstrates understanding; otherwise reject as unrealistically low per FAR 15.404-1(d).",
    farCitation: "FAR 15.404-1(d), FAR 15.101-2",
    rubric: ["LPTA vs. realism distinction", "Staffing adequacy", "Unrealistically low price", "Documentation for award"],
  },
];

export function getPriceAnalysisScenario(id: string): PriceAnalysisScenario | undefined {
  return PRICE_ANALYSIS_SCENARIOS.find((s) => s.id === id);
}
