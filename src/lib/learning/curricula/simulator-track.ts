import type { CurriculumLesson } from "../types";
import { buildLesson, quizQuestion } from "./lesson-builder";

export interface OrientationSlide {
  title: string;
  bigIdea: string;
  whyItMatters: string;
  bullets: string[];
}

/** Flatten 5 orientation lessons into slide cards for the orientation UI. */
export function getOrientationSlides(): OrientationSlide[] {
  return SIMULATOR_CURRICULUM.map((lesson) => ({
    title: lesson.title,
    bigIdea: lesson.bigIdea,
    whyItMatters: lesson.whyItMatters,
    bullets: lesson.coreContent.map(
      (s) => `${s.heading}: ${s.content.slice(0, 120)}${s.content.length > 120 ? "…" : ""}`
    ),
  }));
}

/** Five orientation lessons before entering the simulator. */
export const SIMULATOR_CURRICULUM: CurriculumLesson[] = [
  buildLesson("simulator", 1, 1, "SAM.gov — Your Gateway to Federal Contracting", 2, "sam-market", {
    bigIdea: "SAM.gov is the mandatory registration portal — no active SAM means no contracts and no payments.",
    whyItMatters: "Every simulator action (bidding, winning, invoicing) assumes your UEI and NAICS are active in SAM.",
    consequence: "Expired SAM in the game mirrors real life: awards pause and cash stops.",
    coreSections: [
      {
        heading: "Slide 1: What SAM.gov controls",
        content: "SAM validates your identity (UEI), facility (CAGE), industry codes (NAICS), and eligibility for set-asides. It connects to FPDS, payment systems, and CPARS.",
        martinSays: "Before you bid on anything in this game, treat SAM like your business license — check it every Monday.",
        farCitation: "FAR 4.1102",
      },
      {
        heading: "Slide 2: UEI replaces DUNS",
        content: "The 12-character Unique Entity Identifier is free and required for all federal contractors since 2022.",
        martinSays: "You'll get a simulated UEI during setup. In real life, registration takes 7–10 business days — plan ahead.",
        farCitation: "FAR 4.1801",
      },
      {
        heading: "Slide 3: NAICS and size standards",
        content: "Your registered NAICS codes determine which opportunities appear in your search and whether you qualify as small business.",
        martinSays: "Pick NAICS codes you can actually perform — size protests hurt worse than a lost bid.",
        farCitation: "FAR 19.102",
      },
      {
        heading: "Slide 4: Reps and certifications",
        content: "Annual representations in SAM cover size status, ethics, and compliance. They must be current at award.",
        martinSays: "False reps create False Claims Act exposure — the game won't punish you, but real life will.",
        farCitation: "FAR 52.204-8",
      },
      {
        heading: "Slide 5: Opportunity discovery",
        content: "Federal solicitations publish on SAM.gov. Saved searches by NAICS and set-aside type build your pipeline.",
        martinSays: "In the simulator, check Opportunities every quarter — the best deals go to firms that monitor daily.",
        farCitation: "FAR 5.101",
      },
    ],
    realWorldExample: {
      scenario: "A player registers in the simulator with NAICS 541511 and SDVOSB set-aside.",
      action: "They filter opportunities for strong NAICS + set-aside matches (green border).",
      outcome: "Higher win probability on restricted competitions with fewer bidders.",
      lesson: "SAM data drives match quality — garbage in, garbage out.",
    },
    scenario: {
      prompt: "Your SAM registration expires mid-game. What happens?",
      options: [
        { id: "a", label: "Nothing — you can still bid", isCorrect: false, feedback: "Inactive SAM makes you ineligible for award." },
        { id: "b", label: "Renew immediately before submitting proposals", isCorrect: true, feedback: "Active SAM is a condition of award per FAR 4.1102." },
        { id: "c", label: "Use a teammate's UEI", isCorrect: false, feedback: "Misrepresentation creates fraud liability." },
        { id: "d", label: "Only bid micro-purchases", isCorrect: false, feedback: "SAM is required for federal contract awards generally." },
      ],
      farCitation: "FAR 4.1102",
    },
    quiz: [
      quizQuestion("q1", "SAM.gov registration is required for:", ["State contracts", "Federal contract awards", "Private sector only", "Grants only"], 1, "FAR 4.1102 mandates SAM for federal awards."),
      quizQuestion("q2", "UEI stands for:", ["Universal Entity Index", "Unique Entity Identifier", "Unified Export ID", "Unit Equipment ID"], 1, "UEI replaced DUNS per FAR 4.1801."),
      quizQuestion("q3", "NAICS codes determine:", ["Travel policy", "Business type and size standard", "Clearance level", "Invoice format"], 1, "NAICS classifies industry and SBA size standards."),
      quizQuestion("q4", "Opportunities are published on:", ["LinkedIn", "SAM.gov", "DCAA portal", "GSA Advantage only"], 1, "FAR 5.101 requires public notice on SAM."),
      quizQuestion("q5", "Reps and certs in SAM are updated:", ["Never", "Annually", "Every 10 years", "Only at protest"], 1, "FAR 52.204-8 requires annual representations."),
    ],
    simulatorPractice: "Complete the 4-step SAM registration walkthrough in /setup before playing.",
    nextPreview: "Next: Set-aside certifications and how they limit competition.",
    nextConnection: "SAM holds your certifications — they determine which opportunities you can pursue.",
  }),
  buildLesson("simulator", 1, 2, "Set-Asides — Competing Where You Have Advantage", 2, "small-business", {
    bigIdea: "Set-asides reserve contracts for small business categories, reducing competition for eligible firms.",
    whyItMatters: "In the simulator, set-aside match boosts win probability by up to 20 points.",
    consequence: "Bidding restricted competitions without eligibility wastes B&P and risks protest.",
    coreSections: [
      {
        heading: "Slide 1: What is a set-aside?",
        content: "Contracting officers set aside acquisitions for small business, 8(a), HUBZone, SDVOSB, WOSB, and other programs under FAR Part 19.",
        martinSays: "If you qualify for SDVOSB and the opp is SDVOSB — that's your lane. Don't chase full-and-open until you have CPARS.",
        farCitation: "FAR 19.502",
      },
      {
        heading: "Slide 2: The 8 major programs",
        content: "Small Business (SB), 8(a), HUBZone, SDVOSB, VOSB, WOSB, EDWOSB, and SDB — each has SBA certification rules and agency goals.",
        martinSays: "8(a) is the most powerful — sole-source up to $4.5M. But it takes years to get in.",
        farCitation: "FAR 19.803",
      },
      {
        heading: "Slide 3: Match tiers in the game",
        content: "Green border = NAICS and set-aside match. Amber = partial. Gray = stretch or full-and-open.",
        martinSays: "Bid green first. Amber if strategic. Gray only when you need past performance references.",
        farCitation: "FAR 19.203",
      },
      {
        heading: "Slide 4: Limitations on subcontracting",
        content: "On set-asides, primes must self-perform minimum percentages — typically 50% of labor cost on services.",
        martinSays: "Subcontract strategy is fine, but YOU must perform the core of the work. DCMA checks.",
        farCitation: "FAR 52.219-14",
      },
      {
        heading: "Slide 5: Certification maintenance",
        content: "Certifications require annual recertification and accurate SAM representations.",
        martinSays: "Size protests at award are brutal — keep your revenue data current.",
        farCitation: "FAR 19.301",
      },
    ],
    realWorldExample: {
      scenario: "Player with SDVOSB bids a VA set-aside with strong NAICS match.",
      action: "Win probability calculator adds +20 for set-aside match.",
      outcome: "Wins at 62% vs. 28% on a similar full-and-open opp.",
      lesson: "Set-asides are strategic filters — not just labels.",
    },
    scenario: {
      prompt: "You hold SB certification only. A WOSB set-aside appears. Should you bid?",
      options: [
        { id: "a", label: "Yes — small business covers all set-asides", isCorrect: false, feedback: "WOSB requires woman-owned certification." },
        { id: "b", label: "No — you are not eligible for WOSB-only competition", isCorrect: true, feedback: "Only eligible firms may bid restricted set-asides (FAR 19.502)." },
        { id: "c", label: "Yes with a waiver", isCorrect: false, feedback: "Set-aside eligibility is not waivable by the contractor." },
        { id: "d", label: "Protest after award", isCorrect: false, feedback: "Ineligible bidders should not submit — protest risk applies to winners." },
      ],
      farCitation: "FAR 19.502",
    },
    quiz: [
      quizQuestion("q1", "Set-asides primarily benefit:", ["Large primes", "Eligible small businesses", "Foreign firms", "Grantees"], 1, "FAR Part 19 reserves competition for small business programs."),
      quizQuestion("q2", "FAR 52.219-14 limits:", ["Travel", "Subcontracting on set-asides", "Profit", "Clearance"], 1, "Limitations on subcontracting apply to set-aside contracts."),
      quizQuestion("q3", "Strong match in the game means:", ["NAICS and set-aside both match", "Any NAICS", "Full-and-open only", "Highest price"], 0, "Strong match requires both NAICS and set-aside alignment."),
      quizQuestion("q4", "8(a) program offers:", ["No benefits", "Sole-source opportunities up to thresholds", "Automatic clearance", "State contracts"], 1, "8(a) includes sole-source authority per FAR 19.804."),
      quizQuestion("q5", "Certifications are verified via:", ["Email to COR", "SAM.gov representations", "Proposal cover letter", "CPARS"], 1, "SAM reps and certs confirm eligibility at award."),
    ],
    diagramId: "set-aside-tree",
    nextPreview: "Next: How proposals and win probability work.",
    nextConnection: "Set-aside match feeds directly into your proposal win calculation.",
  }),
  buildLesson("simulator", 1, 3, "Proposals — Building Bids That Win", 2, "proposals", {
    bigIdea: "Proposal quality, price posture, and past performance combine into win probability based on evaluation method.",
    whyItMatters: "The Bid Factory and proposal sliders mirror real LPTA vs Best Value tradeoffs.",
    consequence: "Misaligned proposal strategy on LPTA contracts burns margin without improving scores.",
    coreSections: [
      {
        heading: "Slide 1: Evaluation methods",
        content: "LPTA picks lowest price among technically acceptable offers. Best Value permits tradeoffs among technical, past performance, and price.",
        martinSays: "Read the eval criteria before you write a word. LPTA means price wins — don't gold-plate the technical volume.",
        farCitation: "FAR 15.101",
      },
      {
        heading: "Slide 2: The three sliders",
        content: "Technical Approach, Price Competitiveness, and Past Performance each scale 1–5 and weight differently by eval type.",
        martinSays: "On Best Value, a 5 on technical can offset a 3 on price. On LPTA, price dominates everything.",
        farCitation: "FAR 15.305",
      },
      {
        heading: "Slide 3: Bid/no-bid factors",
        content: "NAICS match, set-aside eligibility, clearance, competition level, and past performance feed the five-factor analysis.",
        martinSays: "No-bid is a win. Every bad bid costs $15K–$50K in real B&P.",
        farCitation: "FAR 7.104",
      },
      {
        heading: "Slide 4: Teaming partners",
        content: "Teaming adds +11% win probability by filling gaps in past performance, clearance, or technical depth.",
        martinSays: "Teaming is how you win before you have CPARS. Pick partners who complement, not duplicate.",
        farCitation: "FAR 9.6",
      },
      {
        heading: "Slide 5: Win probability bands",
        content: "Above 58% = strong position. 34–58% = competitive. Below 34% = consider passing.",
        martinSays: "I've passed on 40% bids that were strategically wrong and won 55% bids that built past performance.",
        farCitation: "FAR 15.308",
      },
    ],
    realWorldExample: {
      scenario: "Player submits Best Value bid with tech 5, price 2, past perf 2 on first contract.",
      action: "Technical differentiation partially offsets aggressive pricing.",
      outcome: "Wins against lower-priced but weaker technical competitor.",
      lesson: "Match slider investment to evaluation method.",
    },
    scenario: {
      prompt: "LPTA evaluation, you score tech 5 and price 2. Best move?",
      options: [
        { id: "a", label: "Increase technical to 5 and keep price high", isCorrect: false, feedback: "LPTA ignores technical excellence beyond acceptable." },
        { id: "b", label: "Meet minimum technical and maximize price competitiveness", isCorrect: true, feedback: "LPTA awards lowest price among acceptable offers (FAR 15.101-2)." },
        { id: "c", label: "Add teaming only", isCorrect: false, feedback: "Teaming helps but price dominates LPTA." },
        { id: "d", label: "Skip past performance", isCorrect: false, feedback: "Past performance still factors in evaluation." },
      ],
      farCitation: "FAR 15.101-2",
    },
    quiz: [
      quizQuestion("q1", "LPTA stands for:", ["Lowest Price Technically Acceptable", "Long Performance Technical Audit", "Limited Price Task Agreement", "Labor Pricing Technical Analysis"], 0, "FAR 15.101-2 defines LPTA."),
      quizQuestion("q2", "Best Value allows:", ["Price-only decisions", "Tradeoffs among factors", "No past performance review", "Oral bids only"], 1, "FAR 15.101-1 permits tradeoffs."),
      quizQuestion("q3", "Teaming in the simulator adds:", ["Nothing", "+11% win probability", "Automatic award", "CPARS bonus"], 1, "Teaming reflects partner strength in capture."),
      quizQuestion("q4", "Win probability below 34% suggests:", ["Automatic win", "Consider passing", "Mandatory bid", "Protest"], 1, "Low probability bids waste resources."),
      quizQuestion("q5", "Proposal sliders represent:", ["Travel costs", "Technical, price, and past performance posture", "Employee count", "SAM status"], 1, "Sliders map to evaluation factors."),
    ],
    diagramId: "source-selection",
    nextPreview: "Next: Delivery strategy after you win.",
    nextConnection: "Winning triggers the delivery decision — where margin and CPARS are set.",
  }),
  buildLesson("simulator", 1, 4, "Delivery Strategy — Self-Perform, Sub, or Hybrid", 2, "delivery", {
    bigIdea: "After award, you choose how to deliver: self-perform (high margin, high risk), subcontract (low margin), or hybrid (balanced).",
    whyItMatters: "Delivery strategy determines monthly revenue, CPARS ceiling, and execution events in the simulator.",
    consequence: "Wrong strategy on a set-aside can trigger FAR 52.219-14 violations and CPARS damage.",
    coreSections: [
      {
        heading: "Slide 1: Self-perform",
        content: "~35% net margin, highest CPARS potential (Exceptional), but all hiring and performance risk is yours.",
        martinSays: "Self-perform when you have the bench and the contract is in your core NAICS.",
        farCitation: "FAR 52.219-14",
      },
      {
        heading: "Slide 2: Subcontract",
        content: "~15% margin, faster stand-up, but prime remains 100% accountable for sub performance.",
        martinSays: "Sub when you need speed, but mirror prime deliverables in the subcontract or you'll get burned.",
        farCitation: "FAR 44.101",
      },
      {
        heading: "Slide 3: Hybrid",
        content: "~25% margin, self-perform >50% of labor for set-aside compliance, Exceptional CPARS achievable.",
        martinSays: "Hybrid is how most successful small primes scale — you manage, sub executes technical depth.",
        farCitation: "FAR 52.219-14",
      },
      {
        heading: "Slide 4: Cash flow impact",
        content: "Self-perform means payroll before government payment — the 60-day gap hits hardest here.",
        martinSays: "Watch runway. Revenue on paper doesn't pay rent — cash in bank does.",
        farCitation: "FAR 32.001",
      },
      {
        heading: "Slide 5: Execution events",
        content: "Each strategy has unique quarterly events: key personnel loss (self), sub default (sub), coordination failures (hybrid).",
        martinSays: "Read every event card — they're teaching moments, not random penalties.",
        farCitation: "FAR 42.1503",
      },
    ],
    realWorldExample: {
      scenario: "Player wins SDVOSB set-aside and chooses subcontract at 70% labor.",
      action: "DCMA flags potential FAR 52.219-14 violation.",
      outcome: "Performance penalty and legal review cost.",
      lesson: "Set-aside delivery must meet self-performance minimums.",
    },
    scenario: {
      prompt: "SDVOSB set-aside, no cleared staff yet, 30-day POP start. Best strategy?",
      options: [
        { id: "a", label: "100% subcontract", isCorrect: false, feedback: "Likely violates limitations on subcontracting." },
        { id: "b", label: "Hybrid with >50% self-performed management labor", isCorrect: true, feedback: "Hybrid meets compliance while leveraging sub technical depth." },
        { id: "c", label: "Decline the contract", isCorrect: false, feedback: "Hybrid or self-perform with rapid hiring may work." },
        { id: "d", label: "Self-perform with uncleared staff on classified work", isCorrect: false, feedback: "Clearance requirements must be met regardless of strategy." },
      ],
      farCitation: "FAR 52.219-14",
    },
    quiz: [
      quizQuestion("q1", "Self-perform typically offers:", ["Lowest margin", "Highest margin and CPARS potential", "No CPARS impact", "Automatic extension"], 1, "Self-perform carries highest margin but also highest risk."),
      quizQuestion("q2", "Prime contractors are responsible for:", ["Sub performance only on FFP", "All delivery regardless of subs", "Nothing after award", "COR decisions"], 1, "Prime remains accountable per FAR 42.1503."),
      quizQuestion("q3", "Hybrid requires on set-asides:", ["100% sub work", "Minimum self-performance per 52.219-14", "No management", "Waived compliance"], 1, "FAR 52.219-14 sets self-performance floors."),
      quizQuestion("q4", "Subcontract model CPARS ceiling is typically:", ["Exceptional only", "Very Good max in simulator", "Unsatisfactory", "Not rated"], 1, "Sub model caps CPARS at Very Good in game design."),
      quizQuestion("q5", "Payroll gap risk is highest on:", ["Sub-only with factoring", "Self-perform without reserves", "No contract", "Grant funding"], 1, "Self-perform requires paying staff before government pays you."),
    ],
    diagramId: "acquisition-lifecycle",
    nextPreview: "Next: CPARS and how performance affects future wins.",
    nextConnection: "Delivery choices during performance feed your CPARS record.",
  }),
  buildLesson("simulator", 1, 5, "CPARS — Your Permanent Performance Record", 2, "delivery", {
    bigIdea: "CPARS ratings (1–5) persist three years and directly affect future win probability.",
    whyItMatters: "The simulator calculates option year exercise and win probability from your performance score.",
    consequence: "Performance below 3.0 often means option years are not exercised — contract ends early.",
    coreSections: [
      {
        heading: "Slide 1: What CPARS measures",
        content: "Quality, schedule, cost control, management, and regulatory compliance — rated Exceptional to Unsatisfactory.",
        martinSays: "CORs take notes all year. CPARS isn't a surprise — it's a summary of your relationship.",
        farCitation: "FAR 42.1503",
      },
      {
        heading: "Slide 2: Rating thresholds in the game",
        content: "4.5+ = Exceptional. 3.5–4.49 = Very Good. 2.5–3.49 = Satisfactory. Below 2.5 = Marginal/Unsatisfactory.",
        martinSays: "Exceptional on a $400K contract is worth more than winning a $2M contract with Marginal CPARS.",
        farCitation: "FAR 42.1502",
      },
      {
        heading: "Slide 3: Option year exercise",
        content: "Performance ≥4.0: 88% exercise chance. ≥3.0: 66%. Below 3.0: 36%.",
        martinSays: "Option years are where profit lives — protect performance score like cash.",
        farCitation: "FAR 17.207",
      },
      {
        heading: "Slide 4: Win probability impact",
        content: "avgPerf ≥4.5 adds +18 to win probability; below 1.5 subtracts 20.",
        martinSays: "Past performance is the moat. Build it deliberately on every contract.",
        farCitation: "FAR 15.305",
      },
      {
        heading: "Slide 5: Recovery from bad events",
        content: "Scope creep, missed deliverables, and sub failures hurt performance — document recovery plans.",
        martinSays: "One bad quarter doesn't kill you. Ignoring COR concerns for two quarters does.",
        farCitation: "FAR 42.1503",
      },
    ],
    realWorldExample: {
      scenario: "Player handles scope creep with a mod request instead of absorbing work.",
      action: "Performance holds at 3.8 through option year review.",
      outcome: "Option exercised; win probability +10 on next bid.",
      lesson: "Professional administration protects CPARS.",
    },
    scenario: {
      prompt: "Performance drops to 2.8 at option year decision. Most likely outcome?",
      options: [
        { id: "a", label: "Automatic 5-year extension", isCorrect: false, feedback: "Low performance reduces exercise probability." },
        { id: "b", label: "Only 36% chance option is exercised", isCorrect: true, feedback: "Below 3.0 performance triggers low exercise rate in simulator." },
        { id: "c", label: "CPARS is deleted", isCorrect: false, feedback: "CPARS persists for three years." },
        { id: "d", label: "Win probability increases", isCorrect: false, feedback: "Low CPARS reduces future win probability." },
      ],
      farCitation: "FAR 17.207",
    },
    quiz: [
      quizQuestion("q1", "CPARS ratings persist approximately:", ["30 days", "3 years", "Forever", "1 week"], 1, "CPARS data supports past performance evaluation for years."),
      quizQuestion("q2", "Exceptional CPARS is typically:", ["Below 2.0", "4.5 and above", "Exactly 3.0", "Not scored"], 1, "FAR 42.1502 defines rating adjectives."),
      quizQuestion("q3", "Low CPARS reduces:", ["Nothing", "Future win probability", "SAM registration", "NAICS codes"], 1, "Past performance factors into source selection."),
      quizQuestion("q4", "COR input feeds:", ["Travel orders", "CPARS evaluations", "UEI assignment", "Protest decisions"], 1, "CORs monitor performance per FAR 1.602-2."),
      quizQuestion("q5", "You are ready to play when you understand:", ["Only pricing", "SAM, set-asides, proposals, delivery, and CPARS", "Nothing", "Only glossary"], 1, "Orientation covers the full game loop."),
    ],
    simulatorPractice: "Click Continue to launch the simulator and apply these concepts in Quarter 1.",
    nextPreview: "You're ready — enter the simulator and win your first contract.",
    nextConnection: "Education lessons unlock as you experience game events.",
  }),
];
