import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-13";

const simplifiedSections: TrainingSection[] = [
  {
    heading: "FAR 13.001 — Thresholds",
    content:
      "Micro-purchase threshold (generally $10,000): minimal documentation, purchase card authorized. Simplified acquisition threshold (SAT, currently $250,000): streamlined procedures—oral quotes, simplified evaluation, reduced documentation. Thresholds adjusted periodically by statute.",
  },
  {
    heading: "FAR 13.003-004 — Policy and legal effect of quotations",
    content:
      "Agencies use simplified procedures to minimize administrative burden. Quotations are not offers in the formal sense but acceptance creates binding contract. Contractors must treat RFQ responses as binding commitments when accepted.",
  },
  {
    heading: "FAR 13.106 — Soliciting competition",
    content:
      "COs shall promote competition to maximum practicable—typically three quotes when possible. Set-aside rules still apply. Oral solicitations permitted with documentation.",
  },
  {
    heading: "FAR 13.301 — Government purchase card",
    content:
      "Micro-purchases often use GPC—cardholders must not split requirements to avoid thresholds (anti-splitting rules). Contractors selling through GPC channels need streamlined invoicing.",
  },
  {
    heading: "FAR 13.303 — Blanket Purchase Agreements",
    content:
      "BPAs under Part 13 simplify repetitive buys. No guaranteed minimum. Agencies establish BPAs with single or multiple vendors after fair opportunity. Contractors compete on BPA setup then on each call/order.",
  },
  {
    heading: "FAR 13.500 — Commercial items above SAT",
    content:
      "Special simplified procedures for commercial items above SAT up to $7.5 million (with approval) or $13.5 million for contingency operations—extends Part 12 commercial benefits with Part 13 simplicity.",
  },
];

export const FAR_PART_13 = proModule(
  MODULE_ID,
  TRACK,
  13,
  "FAR Part 13 — Simplified Acquisition Procedures",
  "Micro-purchase and SAT thresholds, quotation procedures, purchase cards, BPAs, and commercial simplified procedures above SAT.",
  [
    "Apply micro-purchase and SAT thresholds to predict procedures",
    "Respond to simplified RFQs with binding quotation discipline",
    "Compete for Part 13 BPAs and GPC-driven orders",
    "Use FAR 13.500 for commercial items above SAT",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "13.1", "Simplified Acquisition Procedures and BPAs",
      [
        "Apply FAR 13.001 thresholds",
        "Execute competition requirements under 13.106",
        "Establish and compete under Part 13 BPAs",
      ],
      [
        { citation: "FAR 13.003(a)", text: "Agencies shall use simplified acquisition procedures for purchases at or below the simplified acquisition threshold." },
        { citation: "FAR 13.004", text: "A quotation is not an offer and, therefore, cannot be accepted to form a binding contract. However, a quotation may be used as the basis for a contract if the contracting officer concludes that the quotation meets the requirements of the solicitation." },
        { citation: "FAR 13.303-1", text: "A blanket purchase agreement is a simplified method of filling anticipated repetitive needs for supplies or services by establishing charge accounts with qualified sources of supply." },
      ],
      simplifiedSections,
      "Monitor SAM for RFQs under SAT—fast turnaround wins. Quote accurately—acceptance binds you even without formal Part 15 proposal. Pursue BPAs for recurring agency needs. Ensure purchase card customers have correct remittance data. For commercial items above SAT, educate COs on FAR 13.500 streamlined authority.",
      "COs must document fair price and competition even under simplified procedures. Split purchases to avoid thresholds violate FAR 13.003(c). BPAs require fair opportunity for multiple-award setups.",
      [
        { title: "Three-quote RFQ under SAT", situation: "Agency emails RFQ to three vendors for $180K maintenance; you have 48 hours to respond.", whyItMatters: "FAR 13.106 competition—late or incomplete quote loses; winning quote becomes contract basis under 13.004." },
        { title: "BPA call order", situation: "Agency with multi-award BPA issues call to lowest priced BPA holder for $90K order.", whyItMatters: "Part 13 BPA ordering requires fair opportunity among BPA holders—price competition at order level." },
      ],
      [
        { violation: "Casual email quote treated as non-binding then refusing award", consequence: "Reputation damage; potential breach if agency relied on quotation as contract basis per 13.004." },
        { violation: "Agency splitting $40K buy into four $9K micro-purchases", consequence: "Anti-splitting violation—contractor should not facilitate; IG issue for agency." },
      ],
      [
        q("p13-1-1", "Simplified acquisition procedures generally apply at or below:", ["SAT ($250,000, adjusted periodically)", "$10 million always", "$2,000 TINA threshold", "No limit"], 0, "FAR 13.003 applies simplified procedures at or below SAT."),
        q("p13-1-2", "Micro-purchase threshold is generally:", ["$10,000", "$250,000", "$2 million", "$7.5 million"], 0, "FAR 2.101 defines micro-purchase threshold—generally $10,000."),
        tf("p13-1-3", "Part 13 BPAs are used for anticipated repetitive needs.", true, "FAR 13.303-1 defines BPAs for repetitive simplified acquisitions."),
        fillBlank("p13-1-4", "COs should obtain _____ quotes if practicable under FAR 13.106.", ["three", "zero", "one hundred", "classified"], 0, "FAR 13.106 promotes competition—typically three sources when practicable."),
        q("p13-1-5", "FAR 13.500 provides special procedures for:", ["Classified only", "Commercial items above SAT", "Foreign military sales only", "Grants"], 1, "FAR 13.500 extends simplified procedures for certain commercial items above SAT."),
        q("p13-1-6", "Governmentwide commercial purchase cards are covered under:", ["FAR 13.301", "FAR Part 49", "FAR 52.243-1", "FAR Part 19 only"], 0, "FAR 13.301 addresses government purchase card use for micro-purchases."),
      ],
      { farPart: 13, farReferences: ["FAR 13.003", "FAR 13.106", "FAR 13.303", "FAR 13.500"] }
    ),
  ],
  { farPart: 13 }
);
