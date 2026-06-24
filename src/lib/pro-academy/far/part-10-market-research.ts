import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-10";

const marketResearchSections: TrainingSection[] = [
  {
    heading: "FAR 10.001 — Market research policy",
    content:
      "Agencies must conduct market research appropriate to the circumstances before developing requirements and soliciting offers. Market research is required before soliciting offers for major acquisitions and supports commercial item determinations, small business set-aside decisions, and competition strategy.",
  },
  {
    heading: "FAR 10.001(a) — Seven determinations",
    content:
      "Market research must determine: (1) capabilities to meet agency needs; (2) whether commercial items or nondevelopmental items are available; (3) customary practices and pricing; (4) industry structure and competition; (5) small business capabilities; (6) technology trends; and (7) other industry factors affecting acquisition. Your RFI responses directly feed these determinations.",
  },
  {
    heading: "Sources Sought and RFIs",
    content:
      "Sources Sought notices identify potential sources and inform set-aside decisions—they are not solicitations and do not obligate the government. RFIs gather information for requirements development without binding offerors. Industry days provide face-to-face capability demonstrations. Respond professionally—evaluators remember quality inputs.",
  },
  {
    heading: "Documenting and using market research data",
    content:
      "Agencies document market research in acquisition files. Contractors use FPDS, USASpending, SAM.gov entity search, and agency forecasts for competitive intelligence. Document your own market research in proposals to support commercial item assertions and price reasonableness.",
  },
];

export const FAR_PART_10 = proModule(
  MODULE_ID,
  TRACK,
  10,
  "FAR Part 10 — Market Research",
  "Market research policy, the seven FAR 10.001(a) determinations, Sources Sought, RFIs, industry days, and competitive intelligence tools.",
  [
    "Execute the seven FAR 10.001(a) market research determinations",
    "Respond effectively to Sources Sought and RFIs",
    "Use FPDS, SAM.gov, and USASpending for capture intelligence",
    "Document market research supporting commercial item claims",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "10.1", "Market Research Policy and Procedures",
      [
        "Apply FAR 10.001 market research requirements",
        "Execute seven determinations under 10.001(a)",
        "Distinguish Sources Sought, RFI, and solicitation",
      ],
      [
        { citation: "FAR 10.001(a)", text: "Market research shall determine the availability of commercial items and commercial practices, capabilities of small business concerns, and other industry capabilities to meet agency requirements." },
        { citation: "FAR 10.002", text: "Market research is a continuous process of gathering and analyzing information about capabilities within the market to satisfy agency needs." },
      ],
      marketResearchSections,
      "Treat every Sources Sought as a capture event—submit capability statements even when not planning to bid immediately. Use RFIs to shape requirements toward your commercial offerings. Mine FPDS for incumbent contract numbers, values, and NAICS before pricing. Build a market research appendix for commercial item proposals citing catalog pricing and competitor public rates.",
      "COs must document market research before solicitation and cite it in J&As and acquisition plans. Inadequate market research supports protests of sole-source and brand-name requirements. Small business office uses market research for rule-of-two set-aside decisions.",
      [
        { title: "Sources Sought shapes set-aside", situation: "Agency posts Sources Sought for cyber services; only two small businesses respond among eight total responses.", whyItMatters: "Market research under FAR 10.001(a)(5) may fail rule-of-two—agency may proceed full and open, changing your teaming strategy." },
        { title: "Commercial item market research", situation: "You document three commercial SaaS products meeting 80% of requirements at published pricing.", whyItMatters: "Supports agency commercial item determination under FAR 10.001(a)(2) and Part 12 streamlined acquisition." },
      ],
      [
        { violation: "Ignoring Sources Sought because RFP is 'six months away'", consequence: "Requirements shaped without your input; competitor becomes incumbent de facto; set-aside decision finalized against you." },
        { violation: "Commercial item claim without market research documentation", consequence: "Cost-type procedures imposed; TINA applies; proposal non-compliant with Part 12 assertions." },
      ],
      [
        q("p10-1-1", "Market research under FAR 10.001 must determine whether _____ items are available.", ["only custom", "commercial", "foreign-only", "classified-only"], 1, "FAR 10.001(a)(2) requires determining availability of commercial items and practices."),
        q("p10-1-2", "Sources Sought notices are:", ["Binding solicitations", "Market research tools to identify sources—not solicitations", "Invoice forms", "Debarment lists"], 1, "Sources Sought support market research and set-aside analysis without obligating government to procure."),
        tf("p10-1-3", "Market research is required before soliciting offers for major acquisitions.", true, "FAR 10.001 requires market research appropriate to circumstances including before major solicitations."),
        fillBlank("p10-1-4", "FPDS and USASpending help contractors conduct _____ for competitive intelligence.", ["market research", "payroll", "security clearance", "debarment"], 0, "FAR 10.002 continuous process—contractors use public data systems for market research."),
        q("p10-1-5", "FAR 10.001(a) includes determining capabilities of:", ["Only large businesses", "Small business concerns and overall industry", "Foreign governments only", "State agencies"], 1, "FAR 10.001(a)(5) requires assessing small business capabilities among market research determinations."),
        q("p10-1-6", "RFIs differ from solicitations because:", ["RFIs always result in award", "RFIs gather information without binding offerors to performance", "RFIs require TINA certification", "RFIs replace SAM registration"], 1, "RFIs are information-gathering market research tools—not binding solicitations."),
      ],
      { farPart: 10, farReferences: ["FAR 10.001", "FAR 10.002"] }
    ),
  ],
  { farPart: 10 }
);
