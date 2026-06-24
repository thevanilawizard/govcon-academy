import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-06";

const competitionSections: TrainingSection[] = [
  {
    heading: "FAR 6.101 — Full and open competition default",
    content:
      "Agencies shall use competitive procedures unless a statutory exception applies and is documented. Full and open competition means all responsible prospective contractors may compete. Set-asides are still competition within a defined pool—not an exception to the competition principle itself.",
  },
  {
    heading: "FAR 6.102 — Sealed bidding vs negotiation",
    content:
      "Sealed bidding (Part 14) requires firm fixed-price, clear specs, and adequate competition—award to lowest responsive responsible bidder. Negotiation (Part 15) allows tradeoffs among price, technical, past performance, and other factors when sealed bidding is not appropriate.",
  },
  {
    heading: "FAR 6.302-1 — Only one responsible source",
    content:
      "Exception when the supplies or services required are available from only one responsible source and no other type of supplies or services will satisfy agency requirements. Common in proprietary maintenance or unique legacy systems. Requires J&A with market research showing no alternatives.",
  },
  {
    heading: "FAR 6.302-2 — Unusual and compelling urgency",
    content:
      "Exception when urgency precludes competitive procedures and failure to obtain supplies/services would seriously injure government interests. J&A must show why normal competition timeline is impossible. Not a shortcut for poor planning.",
  },
  {
    heading: "FAR 6.302-3 — Industrial mobilization or expert services",
    content:
      "Exception to maintain facilities, producers, or experts needed in national emergency or to maintain ready source for national defense. Used sparingly for defense industrial base sustainment or unique expert services.",
  },
  {
    heading: "FAR 6.302-4 — International agreement",
    content:
      "Exception when a statute or treaty expressly limits sources (e.g., certain foreign military sales arrangements or international cooperative programs).",
  },
  {
    heading: "FAR 6.302-5 — Authorized or required by statute",
    content:
      "Exception when statute expressly authorizes or requires other than full and open competition—8(a) sole source, AbilityOne, small business programs, etc. Must cite specific statutory authority in J&A.",
  },
  {
    heading: "FAR 6.302-6 — National security",
    content:
      "Exception when disclosure of agency needs would compromise national security and limiting sources is essential. Often tied to classified acquisitions with appropriate security controls.",
  },
  {
    heading: "FAR 6.302-7 — Public interest",
    content:
      "Exception when HCA determines in writing that it is not in public interest to compete. Rare—requires senior approval and strong documentation. GAO scrutinizes heavily.",
  },
  {
    heading: "J&A requirements — FAR 6.303",
    content:
      "Written J&A must cite authority, identify vendor, explain why competition not used, describe efforts to identify other sources, and certify price reasonableness. Approval levels increase with dollar value per agency thresholds. Public availability after award (redacted) enables contractor protest of improper sole source.",
  },
];

export const FAR_PART_06 = proModule(
  MODULE_ID,
  TRACK,
  6,
  "FAR Part 6 — Competition Requirements",
  "Full and open competition, sealed bidding vs negotiation, all seven FAR 6.302 authorities, and Justification and Approval documentation.",
  [
    "Apply the full and open competition default rule",
    "Identify valid FAR 6.302-1 through 6.302-7 authorities",
    "Draft and review J&A content for sole-source actions",
    "Protest or support sole-source decisions with market research",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "6.1", "Competition Policy and Other Than Full and Open Competition",
      [
        "Apply FAR 6.101 full and open competition requirement",
        "Contrast sealed bidding and negotiation under 6.102",
        "Identify all seven 6.302 authorities and J&A requirements",
      ],
      [
        { citation: "FAR 6.101", text: "Contracting officers shall promote and provide for full and open competition in soliciting offers and awarding Government contracts over the micro-purchase threshold." },
        { citation: "FAR 6.302-1", text: "Only one responsible source and no other supplies or services will satisfy agency requirements." },
        { citation: "FAR 6.303-2", text: "Each justification shall include sufficient facts and rationale to justify the use of other than full and open competition." },
      ],
      competitionSections,
      "Challenge improper sole sources with market research showing viable alternatives. On set-asides, still compete aggressively within the pool. When incumbent claims proprietary lock-in, document commercial substitutes. Read J&As on SAM.gov after award to identify protest grounds or follow-on opportunities.",
      "COs must document competition strategy in acquisition plans. Improper sole source causes GAO sustained protests, IG findings, and reputational damage. J&A approval chains enforce accountability at escalating dollar thresholds.",
      [
        { title: "Brand-name sole source", situation: "Agency issues sole-source J&A under 6.302-1 for software available from three commercial vendors with API integration.", whyItMatters: "If alternatives satisfy requirements, 6.302-1 fails—contractors can protest or offer 'or equal' solutions during market research." },
        { title: "Urgency J&A after delayed planning", situation: "Program office delayed RFP six months then cites 6.302-2 urgency for sole source to incumbent.", whyItMatters: "GAO rejects urgency created by agency lack of planning—J&A must show compelling urgency not self-inflicted delay." },
      ],
      [
        { violation: "Sole source without J&A or wrong 6.302 authority cited", consequence: "GAO protest sustained; contract cancellation; agency recompete." },
        { violation: "Accepting sole-source follow-on without verifying proprietary justification", consequence: "Missed competitive opportunity; potential inflated pricing without market discipline." },
      ],
      [
        q("p06-1-1", "The default competition requirement under FAR 6.101 is:", ["Sole source", "Full and open competition", "Sealed bidding only", "No synopsis"], 1, "FAR 6.101 requires full and open competition unless an exception applies."),
        q("p06-1-2", "FAR 6.302-2 authorizes other than full and open competition for:", ["Lowest price preference", "Unusual and compelling urgency", "Any convenient timeline", "Foreign products only"], 1, "FAR 6.302-2 covers unusual and compelling urgency that precludes normal competition."),
        q("p06-1-3", "FAR 6.302-5 covers exceptions:", ["Never used", "Authorized or required by statute", "Only for micro-purchases", "Only for construction"], 1, "FAR 6.302-5 implements statutory set-aside and sole-source programs like 8(a)."),
        tf("p06-1-4", "FAR 6.302-7 public interest exception requires written HCA determination.", true, "FAR 6.302-7 requires head of contracting activity written determination that competition is not in public interest."),
        fillBlank("p06-1-5", "A written _____ document is required for other than full and open competition per FAR 6.303.", ["Justification and Approval", "CPARS", "invoice", "option"], 0, "FAR 6.303 requires Justification and Approval for other than full and open competition."),
        q("p06-1-6", "Sealed bidding under FAR 6.102 is appropriate when:", ["Requirements are unclear", "Firm fixed price, clear specs, and adequate competition exist", "Best value tradeoffs are required", "Only one vendor exists"], 1, "FAR 6.101(a) and Part 14—sealed bidding when requirements firm, FFP appropriate, and adequate competition expected."),
        q("p06-1-7", "FAR 6.302-1 requires showing:", ["Lowest price only", "Only one responsible source and no other supplies/services satisfy requirements", "National security clearance", "Small business status"], 1, "FAR 6.302-1 elements—unique source and no satisfactory alternative."),
      ],
      { farPart: 6, farReferences: ["FAR 6.101", "FAR 6.302", "FAR 6.303"] }
    ),
  ],
  { farPart: 6 }
);
