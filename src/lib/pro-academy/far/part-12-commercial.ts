import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-12";

const commercialSections: TrainingSection[] = [
  {
    heading: "FAR 12.101-102 — Commercial item definition and policy",
    content:
      "Government shall acquire commercial items to maximum extent practicable. Commercial items meet FAR 2.101 definition—products/services sold in commercial marketplace with evolution and competition. Customization that does not change commercial character may still qualify.",
  },
  {
    heading: "FAR 12.203 — Solicitation, evaluation, and award",
    content:
      "Part 12 procedures streamline synopsis, combined synopsis/solicitation, oral presentations in some cases, and simplified evaluation. Combined RFQ/RFP formats common for commercial buys below SAT.",
  },
  {
    heading: "FAR 12.301-303 — Clauses and contract format",
    content:
      "FAR 52.212-1 through 52.212-5 replace many standard clauses with commercial-tailored provisions. Only clauses listed in 52.212-5 apply by reference—reduced flow-down burden. Contract format uses simplified uniform contract format where appropriate.",
  },
  {
    heading: "FAR 12.209 — Pricing data",
    content:
      "When adequate price competition exists or prices set by catalog/market, certified cost or pricing data requirements are reduced. Commercial item pricing based on established catalog or market prices limits TINA burden—major contractor advantage.",
  },
  {
    heading: "Arguing for commercial treatment",
    content:
      "In proposals and Q&A, cite FAR 2.101 definition, provide catalog pricing, reseller quotes, and evidence of sales to commercial customers. Separate clearly commercial products from government-unique integration. Document market research per FAR 10.001.",
  },
];

export const FAR_PART_12 = proModule(
  MODULE_ID,
  TRACK,
  12,
  "FAR Part 12 — Commercial Item Acquisitions",
  "Commercial item definition, streamlined procedures, tailored clauses under 52.212-4/5, and strategies to obtain Part 12 treatment.",
  [
    "Apply FAR 2.101/12.101 commercial item definition",
    "Use Part 12 streamlined solicitation and evaluation procedures",
    "Identify applicable 52.212 clauses vs full FAR clause set",
    "Argue for commercial item determination in proposals",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "12.1", "Commercial Item Acquisition Procedures",
      [
        "Define commercial items under FAR 12.101",
        "Apply Part 12 evaluation and award procedures",
        "Identify 52.212-4/5 tailored commercial clauses",
      ],
      [
        { citation: "FAR 12.102", text: "Contracting officers shall use commercial item contracting procedures to the maximum extent practicable." },
        { citation: "FAR 12.209(a)", text: "When adequate price competition is expected, contracting officers may use simplified acquisition procedures for commercial items." },
        { citation: "FAR 52.212-4", text: "Contract Terms and Conditions—Commercial Products and Commercial Services." },
      ],
      commercialSections,
      "Structure offerings as catalog products with optional configuration within commercial norms. Provide published price lists, GSA comparisons, and commercial customer references. Push back when agency issues non-commercial RFP for clearly commercial products—cite FAR 12.102 in Q&A. Enjoy reduced audit rights but still comply with 52.212-5 mandatory flow-downs.",
      "COs must document commercial item determinations. Improper non-commercial treatment increases acquisition cost and timeline. Part 12 supports agency goals for commercial practices per FAR 1.102-2.",
      [
        { title: "Commercial vs custom split", situation: "RFP covers COTS licenses (commercial) plus custom interfaces (possibly non-commercial).", whyItMatters: "Separate CLINs allow Part 12 procedures and reduced TINA on commercial portion while negotiating custom work appropriately." },
        { title: "Catalog price challenge", situation: "KO requests certified cost data on $500K commercial software available on public price list with three resellers.", whyItMatters: "FAR 12.209 limits cost data when commercial pricing adequate—push for price analysis only." },
      ],
      [
        { violation: "Submitting full TINA backup without checking commercial item exceptions", consequence: "Unnecessary disclosure of proprietary data; weakened negotiation position." },
        { violation: "Claiming commercial item without market evidence for heavily customized solution", consequence: "Defective pricing finding if later determined non-commercial; false certification exposure." },
      ],
      [
        q("p12-1-1", "FAR 12.102 requires use of commercial procedures:", ["Never", "To the maximum extent practicable", "Only above $10M", "Only for foreign items"], 1, "FAR 12.102 mandates commercial item procedures to maximum extent practicable."),
        q("p12-1-2", "Standard commercial terms appear in:", ["FAR 52.212-4", "FAR 52.249-8 only", "FAR Part 31", "DFARS 252.225 only"], 0, "FAR 52.212-4 is primary commercial products and services terms clause."),
        tf("p12-1-3", "Part 12 acquisitions generally reduce certified cost or pricing data requirements when commercial pricing is adequate.", true, "FAR 12.209 limits cost data requirements for commercial items with adequate pricing."),
        fillBlank("p12-1-4", "Commercial items are defined in FAR _____ and Part 12.", ["2.101", "49.101", "19.001", "45.101"], 0, "FAR 2.101 provides commercial product/service definitions used in Part 12."),
        q("p12-1-5", "FAR 52.212-5 applies:", ["No clauses to commercial contracts", "Only listed clauses by reference to commercial contracts", "All Part 52 clauses automatically", "Only state law"], 1, "FAR 52.212-5 incorporates only specified clauses for commercial item contracts."),
        q("p12-1-6", "Custom development to unique government specs typically:", ["Automatically qualifies as commercial", "May fail commercial item definition without market evidence", "Eliminates all contract terms", "Requires sealed bidding"], 1, "Heavy government-unique modification may fall outside FAR 2.101 commercial definition."),
      ],
      { farPart: 12, farReferences: ["FAR 12.102", "FAR 12.209", "FAR 52.212-4", "FAR 52.212-5"] }
    ),
  ],
  { farPart: 12 }
);
