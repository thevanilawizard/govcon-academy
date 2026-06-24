import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-07";

const planElements: TrainingSection[] = [
  { heading: "Element 1 — Statement of need", content: "Describe the requiring activity's need including estimated value, capability gaps, and urgency." },
  { heading: "Element 2 — Applicable conditions", content: "Document conditions affecting acquisition—security, environmental, trade agreements, small business goals." },
  { heading: "Element 3 — Costs", content: "Program cost estimates, funding availability, and lifecycle cost considerations." },
  { heading: "Element 4 — Capability or performance", content: "Required performance capabilities and metrics aligned with strategic outcomes." },
  { heading: "Element 5 — Delivery or performance requirements", content: "Schedule, milestones, and performance periods including option structure." },
  { heading: "Element 6 — Trade-offs", content: "Expected tradeoffs among cost, capability, schedule, and risk." },
  { heading: "Element 7 — Risks", content: "Acquisition risks—technical, schedule, cost, vendor availability—and mitigation strategies." },
  { heading: "Element 8 — Acquisition streamlining", content: "Steps to simplify the acquisition consistent with FAR policy." },
  { heading: "Element 9 — Competition strategy", content: "Planned competition type, set-aside considerations, and market research results." },
  { heading: "Element 10 — Contract type selection", content: "Rationale for contract type aligned with risk allocation per FAR Part 16." },
  { heading: "Element 11 — Source-selection procedures", content: "Planned Part 14, 15, 13, or 12 procedures and evaluation approach." },
  { heading: "Element 12 — Acquisition considerations", content: "Government-furnished property, DOD-specific requirements, security, and sustainability." },
  { heading: "Element 13 — Budgeting and funding", content: "Funding profile, multiyear authority, and appropriation alignment." },
  { heading: "Element 14 — Product or service descriptions", content: "PWS/SOW/SOO approach and requirements documentation plan." },
  { heading: "Element 15 — Priorities", content: "Relative importance of cost, schedule, and performance." },
  { heading: "Element 16 — Contract administration", content: "COR appointment plan, surveillance approach, and payment strategy." },
  { heading: "Element 17 — Milestones", content: "Acquisition schedule from market research through award and performance." },
  { heading: "Element 18 — Coordination", content: "Legal, small business, security, and other stakeholder coordination." },
];

const planningSections: TrainingSection[] = [
  {
    heading: "FAR 7.101-102 — When acquisition plans are required",
    content:
      "Written acquisition plans are required for acquisitions meeting agency thresholds and for all acquisitions exceeding $50 million (or $25 million for major systems). Plans integrate requirements, competition, contract type, and administration strategy before solicitation release.",
  },
  {
    heading: "FAR 7.104 — General planning procedures",
    content:
      "Planning begins when agency need is identified. Teams conduct market research, consider commercial items, evaluate small business participation, and select appropriate procedures. Poor planning is the root cause of most protested sole sources and mismatched contract types.",
  },
  {
    heading: "FAR 7.105 — Eighteen required elements",
    content:
      "Written plans must address all elements in FAR 7.105(b)—from statement of need through coordination. Each element creates a paper trail supporting source selection and contract type decisions. Contractors who understand acquisition plans can predict evaluation factors and contract structure months before RFP release.",
  },
  {
    heading: "FAR 7.106-107 — Major systems",
    content:
      "Major system acquisitions require additional planning including risk management, test and evaluation, and sustainment considerations. Defense programs add DFARS and milestone requirements.",
  },
  {
    heading: "FAR 7.301-305 — Inherently governmental functions",
    content:
      "Contractors may not perform functions that must be performed by government personnel— inherently governmental functions include binding government decisions, certain command functions, and discretionary policy execution. Personal services contracts require compliance with FAR 37.104.",
  },
];

export const FAR_PART_07 = proModule(
  MODULE_ID,
  TRACK,
  7,
  "FAR Part 7 — Acquisition Planning",
  "Acquisition plan requirements, all 18 FAR 7.105 elements, major systems planning, and inherently governmental function limits.",
  [
    "Identify when written acquisition plans are required",
    "Explain all 18 FAR 7.105(b) acquisition plan elements",
    "Connect acquisition plans to predicted RFP structure and evaluation",
    "Recognize inherently governmental function restrictions",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "7.1", "Acquisition Plans and the 18 Required Elements",
      [
        "Apply FAR 7.101-102 acquisition plan thresholds",
        "Document all 18 elements under FAR 7.105(b)",
        "Identify IG function restrictions under 7.305",
      ],
      [
        { citation: "FAR 7.105(b)", text: "The plan shall include the information listed in this subsection, as applicable." },
        { citation: "FAR 7.101", text: "Acquisition planning should begin when the agency need is identified and should be documented in an acquisition plan." },
        { citation: "FAR 7.305", text: "Agencies shall not contract for the performance of inherently governmental functions." },
      ],
      [...planningSections, ...planElements],
      "Read acquisition forecasts and industry days to infer plan content before RFP. Align capture strategy to stated competition strategy and contract type. If agency plans LPTA on complex services, prepare minimal technical floor pricing. Challenge IG violations in Q&A when agency outsources binding decisions to contractors.",
      "Program offices and COs must complete plans before solicitation. Incomplete plans cause protest vulnerabilities, wrong contract types, and audit findings. Small business office review is mandatory at key milestones.",
      [
        { title: "Predicting contract type from plan", situation: "Acquisition plan Element 10 selects CPFF because requirements are undefined and high technical risk.", whyItMatters: "You can pre-position DCAA-ready accounting systems and staffing models before RFP drops—Element 10 telegraphs pricing and compliance burden." },
        { title: "IG function in source selection support", situation: "Agency RFP asks contractor to score proposals and recommend award without CO oversight.", whyItMatters: "FAR 7.305 and OFPP policy prohibit contractors from performing inherently governmental source selection decisions." },
      ],
      [
        { violation: "Bidding without reading agency acquisition forecast/plan assumptions", consequence: "Misaligned proposal—wrong contract type pricing model and surprise evaluation methodology." },
        { violation: "Accepting task to make binding source selection decisions as contractor advisor", consequence: "IG violation; contract termination; personal and corporate liability." },
      ],
      [
        q("p07-1-1", "Written acquisition plans under FAR 7.105 are required for acquisitions exceeding:", ["$10,000", "$50 million (or $25 million for major systems)", "$1 billion only", "No threshold"], 1, "FAR 7.104 and 7.105 establish thresholds including $50M/$25M major system requirements."),
        q("p07-1-2", "FAR 7.105(b) requires how many categories of plan content?", ["5", "12", "18", "30"], 2, "FAR 7.105(b) lists 18 required acquisition plan elements."),
        tf("p07-1-3", "Acquisition planning should begin when agency need is identified per FAR 7.101.", true, "FAR 7.101 directs planning to begin when need is identified."),
        fillBlank("p07-1-4", "Agencies shall not contract for performance of inherently _____ functions per FAR 7.305.", ["governmental", "commercial", "foreign", "optional"], 0, "FAR 7.305 prohibits contracting for inherently governmental functions."),
        q("p07-1-5", "Element 9 of the acquisition plan addresses:", ["Invoice format only", "Competition strategy", "Employee vacation", "CPARS appeals"], 1, "FAR 7.105(b)(9) covers planned competition strategy including set-asides and market research."),
        q("p07-1-6", "Element 10 of the acquisition plan documents:", ["Contract type selection rationale", "Holiday schedule", "SAM renewal", "Protest filing fees"], 0, "FAR 7.105(b)(10) requires contract type selection and rationale."),
      ],
      { farPart: 7, farReferences: ["FAR 7.101", "FAR 7.105", "FAR 7.305"] }
    ),
  ],
  { farPart: 7 }
);
