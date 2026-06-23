import type {
  Agency,
  Background,
  CapitalTier,
  ClearanceLevel,
  GlossaryTerm,
  MentorTopic,
  MentorTopicPrompt,
  NaicsCode,
  SetAsideId,
  SetAsideInfo,
  TutorialStep,
} from "./types";

export const AGENCIES: Agency[] = [
  { name: "Dept. of Veterans Affairs", code: "VA", prefix: "36C776" },
  { name: "General Services Administration", code: "GSA", prefix: "47QTCA" },
  { name: "Dept. of Defense", code: "DoD", prefix: "W912HQ" },
  { name: "Dept. of Homeland Security", code: "DHS", prefix: "70RSAT" },
  { name: "HHS / National Institutes of Health", code: "HHS", prefix: "75N980" },
  { name: "Army Corps of Engineers", code: "USACE", prefix: "W912DY" },
  { name: "NASA", code: "NASA", prefix: "80ARC0" },
  { name: "Dept. of Energy", code: "DOE", prefix: "89303D" },
  { name: "Defense Information Systems Agency", code: "DISA", prefix: "DISA-HC" },
  { name: "Defense Logistics Agency", code: "DLA", prefix: "SPE4A6" },
];

export const DEFENSE_AGENCY_CODES = ["DoD", "DISA", "DLA", "USACE"];

export const CLEARANCE_OPTIONS: { value: ClearanceLevel; label: string; description: string }[] = [
  { value: "none", label: "No Clearance", description: "Not cleared — limited to unclassified contract work" },
  { value: "secret", label: "Secret", description: "Active Secret clearance — eligible for most classified IT and support contracts" },
  { value: "top_secret", label: "Top Secret", description: "Active Top Secret clearance — required for intelligence, SCIF, and high-sensitivity DoD work" },
];

export const NAICS_CODES: NaicsCode[] = [
  { code: "541511", label: "Custom Computer Programming Services", avgValue: 850000 },
  { code: "541512", label: "Computer Systems Design Services", avgValue: 1200000 },
  { code: "541611", label: "Management Consulting Services", avgValue: 650000 },
  { code: "561320", label: "Staffing & Temporary Employment", avgValue: 2100000 },
  { code: "541330", label: "Engineering Services", avgValue: 950000 },
  { code: "611430", label: "Professional Development Training", avgValue: 380000 },
  { code: "236220", label: "Commercial & Institutional Construction", avgValue: 3500000 },
  { code: "561210", label: "Facilities Support Services", avgValue: 1800000 },
  { code: "541519", label: "Other Computer Related Services", avgValue: 720000 },
  { code: "541690", label: "Scientific & Technical Consulting", avgValue: 480000 },
];

export const OPPORTUNITY_TITLES = [
  "IT Help Desk & Desktop Support Services",
  "Program Management Office Support",
  "Enterprise Systems Integration Services",
  "Administrative & Clerical Support Services",
  "Cybersecurity Assessment & Continuous Monitoring",
  "Technical Training Development & Delivery",
  "Financial Management Consulting Support",
  "Data Analytics & Business Intelligence",
  "Logistics & Supply Chain Management",
  "Facilities Operations & Maintenance Services",
  "Human Capital Advisory Services",
  "Cloud Migration & DevSecOps Support",
  "Strategic Communications & Public Outreach",
  "Medical Records & Health IT Management",
  "Acquisition & Contracting Support Services",
];

export const DEFENSE_OPPORTUNITY_TITLES = [
  "Cybersecurity & Information Assurance",
  "Intelligence Analysis Support",
  "Weapons System Maintenance",
  "Base Operations Support",
  "Defense Logistics",
  "Command & Control Systems",
  "Military Training & Simulation",
  "Sensitive Compartmented Information Facility (SCIF) Operations",
];

export const ALL_OPPORTUNITY_TITLES = [...OPPORTUNITY_TITLES, ...DEFENSE_OPPORTUNITY_TITLES];

export const SET_ASIDES: SetAsideInfo[] = [
  {
    id: "sb",
    label: "Small Business",
    description: "General small business set-aside for firms meeting SBA size standards in their NAICS code.",
    strategicValue: "Broadest set-aside category — most federal opportunities are reserved for small businesses. Essential baseline certification.",
    bg: "#E6F1FB",
    text: "#0C447C",
  },
  {
    id: "sdvosb",
    label: "SDVOSB",
    description: "Service-Disabled Veteran-Owned Small Business — requires a veteran with a service-connected disability owning 51%+.",
    strategicValue: "Sole-source authority up to $5M at the VA. One of the most powerful certifications for IT services firms.",
    bg: "#E1F5EE",
    text: "#085041",
  },
  {
    id: "vosb",
    label: "Vet-Owned",
    description: "Veteran-Owned Small Business — requires a veteran owning 51%+ of the firm.",
    strategicValue: "Competitive set-aside across all agencies. Strong pipeline at DoD and VA with less stringent requirements than SDVOSB.",
    bg: "#EAF3DE",
    text: "#27500A",
  },
  {
    id: "wosb",
    label: "Woman-Owned",
    description: "Women-Owned Small Business — requires a woman owning 51%+ and managing day-to-day operations.",
    strategicValue: "Underutilized certification with strong agency goals. EDWOSB (economically disadvantaged) adds sole-source authority.",
    bg: "#EEEDFE",
    text: "#3C3489",
  },
  {
    id: "8a",
    label: "8(a) Program",
    description: "SBA Business Development Program — 9-year term with mentoring, training, and sole-source authority.",
    strategicValue: "Sole-source awards up to $4.5M for non-construction. One of the most powerful certifications in all of GovCon.",
    bg: "#FAEEDA",
    text: "#633806",
  },
  {
    id: "hubzone",
    label: "HUBZone",
    description: "Historically Underutilized Business Zone — firm must be located in and employ residents from a designated HUBZone.",
    strategicValue: "10% price preference in full-and-open competitions. You can win even at a price 10% higher than competitors.",
    bg: "#EAF3DE",
    text: "#3B6D11",
  },
];

export const SET_ASIDE_MAP = Object.fromEntries(
  SET_ASIDES.map((s) => [s.id, s])
) as Record<SetAsideId, SetAsideInfo>;

export const FULL_OPEN: SetAsideInfo = {
  id: "full_open",
  label: "Full & Open",
  description: "Unrestricted competition open to all qualified contractors regardless of size or certification.",
  strategicValue: "Highest competition but largest contract values. Requires strong past performance to compete effectively.",
  bg: "#F1EFE8",
  text: "#444441",
};

export const CAPITAL_TIERS: { value: CapitalTier; label: string }[] = [
  { value: 15000, label: "$15,000" },
  { value: 37500, label: "$37,500" },
  { value: 75000, label: "$75,000" },
  { value: 175000, label: "$175,000" },
  { value: 500000, label: "$500,000" },
];

export const BACKGROUNDS: { value: Background; label: string; description: string }[] = [
  { value: "military", label: "Military Veteran", description: "Former active duty or reserve service member" },
  { value: "federal", label: "Federal Employee", description: "Current or former federal civilian employee" },
  { value: "private", label: "Private Sector", description: "Corporate or commercial industry background" },
  { value: "entrepreneur", label: "Entrepreneur", description: "Previous business owner or startup experience" },
  { value: "new", label: "New to Business", description: "First-time business owner" },
];

export const DELIVERY_STRATEGIES = {
  self: {
    label: "Self-Perform",
    margin: 0.35,
    risk: "High",
    cparsCeiling: "Exceptional (5.0)",
    pros: ["Highest margin", "Full control", "Exceptional CPARS achievable"],
    cons: ["Hiring and performance risk all yours", "Payroll gap before government pays you", "Staff turnover hits CPARS directly"],
  },
  sub: {
    label: "Subcontract",
    margin: 0.15,
    risk: "Medium",
    cparsCeiling: "Very Good (4.0 max)",
    pros: ["Lower execution risk", "Faster to stand up", "No hiring required"],
    cons: ["Lowest margin", "Sub performance = your CPARS", "FAR 52.219-14 limits subcontracting to 50% on set-aside contracts"],
  },
  hybrid: {
    label: "Hybrid (Prime + Sub)",
    margin: 0.25,
    risk: "Medium",
    cparsCeiling: "Exceptional (5.0)",
    pros: ["Moderate margin", "FAR-compliant (self-perform >50% of labor)", "Exceptional achievable"],
    cons: ["Coordination overhead", "Two sources of performance risk", "More complex invoicing"],
  },
};

export const MARTIN_SYSTEM_PROMPT = `You are Martin Business, a government contracting veteran with 22 years of experience. You started as a military veteran with an SDVOSB certification and built a federal IT services firm from $18K to $12M annual revenue, winning contracts at the VA, Army, DoD, and HHS. You sold the firm and now mentor new GovCon entrepreneurs.

Communication style:
- Direct and honest — no sugarcoating, no false reassurance
- Specific — cite real agencies, FAR part numbers, dollar thresholds, NAICS codes
- Teaching-focused — always explain the why behind every piece of advice
- Conversational — you've been there, not a textbook author
- 4–5 sentences maximum per response
- No preamble, no sign-off — just the advice, immediately`;

/** @deprecated use MARTIN_SYSTEM_PROMPT */
export const MARCUS_SYSTEM_PROMPT = MARTIN_SYSTEM_PROMPT;

export const MENTOR_TOPICS: MentorTopic[] = [
  { id: "delivery_strategy", title: "The delivery strategy decision", description: "Self-perform vs subcontract vs hybrid — the most important early contract decision" },
  { id: "cpars", title: "CPARS and past performance", description: "How government evaluates your performance and why it matters for future wins" },
  { id: "cor", title: "Managing your COR relationship", description: "Your Contracting Officer's Representative is your most important government contact" },
  { id: "scope_creep", title: "Scope creep and contract modifications", description: "Why absorbing extra work kills margins and how to handle COR requests properly" },
  { id: "cash_flow", title: "Cash flow and invoice factoring", description: "The 30-60 day payment gap and how successful GovCon firms manage it" },
  { id: "option_years", title: "Option year exercise strategy", description: "How CPARS scores determine whether the government renews your contract" },
  { id: "far_limits", title: "FAR limitations on subcontracting", description: "FAR 52.219-14 and the 50% self-performance rule on set-aside contracts" },
  { id: "bid_no_bid", title: "Bid/no-bid discipline", description: "How to evaluate opportunities and avoid wasting proposal dollars on unwinnable bids" },
  { id: "past_perf_zero", title: "Building past performance from zero", description: "Strategies for new entrants with no federal contract history" },
];

export const MENTOR_TOPIC_PROMPTS: Record<string, MentorTopicPrompt> = {
  delivery_strategy: {
    systemContext:
      "TOPIC FOCUS: Delivery strategy decision only. Cover self-perform (~35% margin), subcontract (~15% margin), and hybrid (~25% margin). Explain FAR 52.219-14 50% self-performance rule on set-asides. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain self-perform vs subcontract vs hybrid delivery with specific margin numbers (35%, 15%, 25%), CPARS ceilings for each, and FAR 52.219-14 compliance rules. Which should a new firm choose for their first contract?",
  },
  cpars: {
    systemContext:
      "TOPIC FOCUS: CPARS and past performance only. Cover the 5-point scale (Exceptional through Unsatisfactory), how ratings affect win probability (+18 to -20), and recovery from bad ratings. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain the CPARS 5-point scale, how each rating level affects future win probability in this simulator, and specific steps to recover from a Marginal or Unsatisfactory rating.",
  },
  cor: {
    systemContext:
      "TOPIC FOCUS: COR relationship management only. Explain who the COR is, communication cadence, what frustrates CORs, and trust-building tactics. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain who the COR is, how to communicate with them effectively, what behaviors damage the relationship, and how to build trust that protects your CPARS score.",
  },
  scope_creep: {
    systemContext:
      "TOPIC FOCUS: Scope creep and contract modifications only. Cover identification, bilateral mod process, and FAR language. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain how to identify scope creep, the correct process to submit a contract modification under FAR, and the exact language to use when a COR requests work outside the PWS.",
  },
  cash_flow: {
    systemContext:
      "TOPIC FOCUS: Cash flow and invoice factoring only. Cover Net 30/60 payment terms, factoring mechanics, typical 2-3% rates, and GovCon-specialized lenders. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain the Net 30/60 payment gap in GovCon, how invoice factoring works step by step, typical discount rates, and which lenders specialize in government receivables.",
  },
  option_years: {
    systemContext:
      "TOPIC FOCUS: Option year exercise strategy only. Cover performance thresholds (88%/66%/36% exercise rates), positioning for renewal, and handling non-exercise. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain what CPARS performance thresholds trigger option year exercise (4.0+ = 88%, 3.0+ = 66%, below 3.0 = 36%), how to position for renewal, and what to do if an option is not exercised.",
  },
  far_limits: {
    systemContext:
      "TOPIC FOCUS: FAR 52.219-14 limitations on subcontracting only. Cover the 50% rule, calculation method, and violation consequences. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain FAR 52.219-14 in detail: the 50% self-performance rule on small business set-asides, how labor cost percentage is calculated, and what a violation looks like in practice.",
  },
  bid_no_bid: {
    systemContext:
      "TOPIC FOCUS: Bid/no-bid discipline only. Cover the 4-question framework, pursuit cost calculation, and recompete walk-away criteria. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain the 4-question bid/no-bid framework, how to calculate pursuit costs (BD hours × loaded rate), and when to walk away from a recompete even if you are the incumbent.",
  },
  past_perf_zero: {
    systemContext:
      "TOPIC FOCUS: Building past performance from zero only. Cover subbing as a prime, teaming agreements, and earning CPARS as a subcontractor. Do NOT discuss unrelated topics.",
    userPrompt:
      "Explain how to build past performance from zero: subcontracting under a prime, structuring teaming agreements, and how to get a CPARS rating documented as a subcontractor.",
  },
};

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "welcome",
    title: "Welcome to the SAM.gov Opportunity Browser",
    content:
      "Every federal contract opportunity is posted on SAM.gov. Your firm is now registered — this is where you find work. Each quarter, 12 new solicitations appear. Your job is to find the ones you can actually win.",
    target: "tutorial-opps-header",
    placement: "bottom",
  },
  {
    id: "tiers",
    title: "Three-Tier Matching System",
    content:
      "Green border = Strong Match (your NAICS AND set-aside align). Amber = Partial Match (one aligns). Gray = Stretch (neither aligns). In real GovCon, strong matches are where you spend proposal dollars.",
    target: "tutorial-opp-tiers",
    placement: "bottom",
  },
  {
    id: "solicitation",
    title: "Reading a Solicitation",
    content:
      "Each field tells you something critical: Set-aside determines who can bid. NAICS defines the work type. Evaluation criteria (LPTA vs Best Value) tells you what wins. Contract type (FFP vs T&M) defines your cost risk. Days remaining is your deadline.",
    target: "tutorial-solicitation-detail",
    placement: "right",
  },
  {
    id: "bid_no_bid",
    title: "Bid/No-Bid Decision Framework",
    content:
      "Before writing a single page of proposal, run five checks: NAICS match, set-aside eligibility, clearance requirement, competition level, and past performance. Two or more failures = strong pass signal. Chasing unwinnable bids is how new firms go bankrupt.",
    target: "tutorial-bid-analysis",
    placement: "left",
  },
  {
    id: "sliders",
    title: "Proposal Builder Sliders",
    content:
      "Technical Approach = quality of your solution. Price Competitiveness = how aggressively you bid. Past Performance = strength of your references. On LPTA contracts, price dominates — crank price up, don't over-invest in technical. On Best Value, balance all three.",
    target: "tutorial-proposal-sliders",
    placement: "top",
  },
  {
    id: "submission",
    title: "After You Submit",
    content:
      "Agencies take 3–7 weeks to evaluate. You win or lose based on your scores vs. competitors. Every win builds past performance via CPARS — the government's permanent record of your performance that follows you for 3 years.",
    target: "tutorial-submission-info",
    placement: "bottom",
  },
  {
    id: "practice",
    title: "Your Practice Bid",
    content:
      "Time to apply what you learned. Review this opportunity, set your sliders, and submit. You'll get guided feedback on your bid decision — this is exactly how real capture managers debrief their teams.",
    target: "tutorial-practice-bid",
    placement: "top",
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: "SAM.gov", definition: "System for Award Management — official U.S. government portal for contractor registration and all contract opportunities. No registration = no federal contracts." },
  { term: "UEI", definition: "Unique Entity Identifier — 12-character alphanumeric ID replacing the DUNS number in 2022. Required for all federal contractors. Free through SAM.gov." },
  { term: "CAGE Code", definition: "Commercial and Government Entity code — 5-character DoD identifier. Required for defense contracts. Used to pull past performance history." },
  { term: "NAICS Code", definition: "North American Industry Classification System — 6-digit code defining your business type and small business size standard." },
  { term: "CPARS", definition: "Contractor Performance Assessment Reporting System — government's official record of your past performance. Ratings persist 3 years and directly affect future evaluation scores." },
  { term: "COR", definition: "Contracting Officer's Representative — the government employee who monitors your day-to-day contract performance and reports to the Contracting Officer." },
  { term: "Set-Aside", definition: "A federal contract reserved for specific business categories, limiting competition to eligible firms only." },
  { term: "SDVOSB", definition: "Service-Disabled Veteran-Owned Small Business — requires veteran with service-connected disability owning 51%+. Sole-source authority up to $5M at VA." },
  { term: "8(a) Program", definition: "SBA's Business Development Program — 9-year term, sole-source awards up to $4.5M for non-construction. One of the most powerful certifications in GovCon." },
  { term: "HUBZone", definition: "Historically Underutilized Business Zone — 10% price preference in full-and-open competitions. You can win even at a price 10% higher than competitors." },
  { term: "FFP", definition: "Firm Fixed Price — price set at award and never changes. You bear cost risk but keep all savings. Most common federal contract type." },
  { term: "T&M", definition: "Time & Materials — paid for labor hours at agreed rates plus materials. Less cost risk but requires detailed timekeeping and government oversight." },
  { term: "LPTA", definition: "Lowest Price Technically Acceptable — lowest price meeting minimum technical standards wins. Price completely dominates; technical quality beyond the minimum doesn't help." },
  { term: "Best Value", definition: "Evaluation method weighing technical approach, past performance, and price. Higher-quality proposals can win at higher prices." },
  { term: "Cure Notice", definition: "Formal government warning that contract performance is at risk. You have 10 days to respond with a recovery plan or face termination for default." },
  { term: "Limitations on Subcontracting", definition: "FAR 52.219-14 rule requiring self-performance of at least 50% of labor cost on small business set-aside contracts. Violation can cause contract termination and debarment." },
  { term: "Past Performance", definition: "Your documented track record on previous federal contracts. Evaluated through CPARS. The hardest part for new entrants — and the single biggest differentiator over time." },
  { term: "Debrief", definition: "Post-award meeting where the agency explains your evaluation scores vs. the winner's. Legally required on request within 3 business days of loss. Request every single one." },
  { term: "Invoice Factoring", definition: "Selling your government receivable to a factoring company at 2–3% discount to receive payment in 48 hours instead of waiting 30–60 days. Common in GovCon." },
  { term: "FAR", definition: "Federal Acquisition Regulation — the rules governing all federal purchases. Part 15 covers negotiated contracts; Part 19 covers small business programs." },
];

export const MATCH_BORDER_COLORS = {
  strong: "#5DCAA5",
  partial: "#EF9F27",
  stretch: "#9CA3AF",
};

export const DEFAULT_BURN = 3500;
