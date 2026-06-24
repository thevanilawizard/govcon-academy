import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "acq-planning";

export const ACQUISITION_PLANNING_MODULE = proModule(
  MODULE_ID,
  "acquisition",
  2,
  "Acquisition Planning",
  "Planning failures, the twelve acquisition decisions, market research, requirements development, and acquisition plan content.",
  [
    "Identify the seven common acquisition planning failures",
    "Apply the twelve acquisition strategy decisions",
    "Conduct and document market research per FAR Part 10",
  ],
  [
    proLesson(
      MODULE_ID,
      "acquisition",
      "AP.1",
      "Planning Failures and the Twelve Decisions",
      [
        "Recognize seven acquisition planning failures that drive protests and poor outcomes",
        "Apply the twelve acquisition strategy decisions",
        "Link planning decisions to contract type and source selection approach",
      ],
      [
        { citation: "FAR 7.104", text: "Acquisition planning should begin as soon as the agency need is identified and should be documented in the acquisition plan." },
        { citation: "FAR 7.105", text: "Written acquisition plans shall describe the planned acquisition with sufficient detail to understand and evaluate the strategy." },
      ],
      [
        { heading: "Seven common failures", content: "(1) Vague requirements, (2) inadequate market research, (3) wrong contract type, (4) unrealistic schedule, (5) insufficient funding alignment, (6) skipped small business review, (7) weak source selection planning." },
        { heading: "Twelve decisions", content: "Mission need validation; make vs buy; contract type; competition strategy; set-aside; source selection approach; evaluation methodology; incentive use; logistics/contract administration; risk allocation; funding profile; transition/sustainment." },
      ],
      "Contractors can diagnose bad RFPs from planning gaps—ask targeted questions in industry day and use protests when planning violates competition rules.",
      "Solid acquisition plans reduce rework, protests, and cost growth—they are mandatory for many thresholds per agency policy.",
      [{ title: "Vague PWS protest", situation: "RFP PWS says 'provide excellent IT support' with no metrics.", whyItMatters: "Ambiguous requirements force inflated pricing and disputes; protest on unclear evaluation." }],
      [{ violation: "Skipping documented acquisition plan on required action", consequence: "Agency policy violation; GAO protest on inadequate planning." }],
      [
        q("ap-1-1", "Acquisition planning should begin:", ["After contract award", "When agency need is identified", "At closeout", "Only on FFP"], 1, "FAR 7.104 early planning requirement."),
        q("ap-1-2", "Written acquisition plans are required content under:", ["FAR 7.105", "FAR Part 45", "FAR Part 3 only", "State UCC"], 0, "FAR 7.105 contents."),
        tf("ap-1-3", "Wrong contract type selection is a common planning failure.", true, "Part of seven failures framework in training."),
        q("ap-1-4", "Twelve decisions include:", ["Contract type and competition strategy", "Employee vacation policy", "Stock ticker", "Grant writing"], 0, "Strategy decisions drive procurement approach."),
        tf("ap-1-5", "Inadequate market research is a planning failure.", true, "Market research supports realistic strategy."),
        q("ap-1-6", "Acquisition plans link to:", ["Source selection and administration strategy", "Only shipping", "CPARS contractor comments", "Personal ethics"], 0, "Plan integrates lifecycle decisions."),
      ],
      { farReferences: ["7.104", "7.105"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "AP.2",
      "Market Research and Requirements Development",
      [
        "Conduct market research per FAR Part 10",
        "Use sources sought, RFIs, and industry days appropriately",
        "Write PWS requirements that reduce disputes",
      ],
      [
        { citation: "FAR 10.001", text: "Market research is collecting and analyzing information about capabilities within the market to satisfy agency needs." },
        { citation: "FAR 10.001(a)", text: "Market research shall determine availability of commercial items, extent of competition, and customary practices." },
      ],
      [
        { heading: "Market research tools", content: "SAM.gov, FPDS, USASpending, sources sought notices, RFIs, industry days, one-on-one sessions, trade shows." },
        { heading: "Good PWS", content: "Measurable outcomes, QASP metrics, clear deliverables, defined interfaces—not tools or staffing dictation unless necessary." },
      ],
      "Respond to sources sought even when no RFP yet—it influences set-aside and requirement shaping.",
      "Documented market research supports competition decisions and set-aside determinations under Part 19.",
      [{ title: "RFI ignored", situation: "Agency issues RFI; only incumbent responds; agency claims only one source.", whyItMatters: "Weak market research record supports protest of sole-source." }],
      [{ violation: "PWS written around single vendor proprietary system without J&A", consequence: "Limited competition protest; corrective action." }],
      [
        q("ap-2-1", "Market research determines among other things:", ["Availability of commercial items and competition", "Employee birthdays", "Contractor stock price", "Court judgments"], 0, "FAR 10.001(a) lists research objectives."),
        q("ap-2-2", "Sources sought notices help:", ["Gauge small business capability", "Award contract automatically", "Replace FPDS", "Waive TINA always"], 0, "Sources sought support rule-of-two analysis."),
        tf("ap-2-3", "RFIs are not offers and do not bind the government.", true, "RFI gathers information only."),
        q("ap-2-4", "Performance Work Statements emphasize:", ["Outcomes and measurable standards", "Specific contractor staffing names", "Vendor part numbers only", "Lobbying plans"], 0, "PWS focuses on performance outcomes per Part 37."),
        tf("ap-2-5", "Industry days should be documented in the acquisition file.", true, "Documentation supports planning decisions."),
        q("ap-2-6", "SAM.gov and FPDS support:", ["Market research and competition analysis", "Only payroll", "Only travel", "Only protests"], 0, "Public data tools for market research."),
      ],
      { farReferences: ["10.001", "7.202", "37.602"] }
    ),
  ]
);
