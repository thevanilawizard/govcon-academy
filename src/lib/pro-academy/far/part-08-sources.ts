import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-08";

const sourcesSections: TrainingSection[] = [
  {
    heading: "FAR 8.002 — Required sources priority order",
    content:
      "Agencies must use required sources in order: (1) Federal Prison Industries (UNICOR); (2) AbilityOne participating nonprofit agencies; (3) Federal Supply Schedules; (4) Government-wide acquisition contracts; (5) Other mandatory sources (commissary, etc.). This order affects whether your commercial offer can compete.",
  },
  {
    heading: "FAR 8.101-106 — UNICOR (Federal Prison Industries)",
    content:
      "UNICOR supplies must be procured from Federal Prison Industries when listed on UNICOR schedule unless waived by agency head. Waivers require documentation when commercial products are less expensive or do not meet delivery requirements.",
  },
  {
    heading: "FAR 8.501-508 — AbilityOne program",
    content:
      "AbilityOne nonprofit agencies employing people who are blind or have significant disabilities receive mandatory source priority for products on the Procurement List. COs must obtain from AbilityOne unless exception applies.",
  },
  {
    heading: "FAR 8.701-706 — Federal Supply Schedules (FSS)",
    content:
      "GSA and VA Federal Supply Schedules are multiple-award indefinite-delivery contracts. Ordering activities may place orders directly against schedules when needs are within scope. Schedules provide pre-negotiated terms and streamlined ordering.",
  },
  {
    heading: "FAR 8.1101-1106 — GSA Schedule ordering procedures",
    content:
      "For orders over $3,000 (below SAT) agencies may order directly. Above SAT, fair opportunity required unless exception applies—RFQ to multiple schedule holders, consideration of three quotes when practicable. Blanket Purchase Agreements against schedules simplify repetitive ordering.",
  },
];

export const FAR_PART_08 = proModule(
  MODULE_ID,
  TRACK,
  8,
  "FAR Part 8 — Required Sources and GSA Schedules",
  "Mandatory source priorities, UNICOR, AbilityOne, Federal Supply Schedules, and fair opportunity ordering procedures.",
  [
    "Apply FAR 8.002 required sources priority order",
    "Explain GSA Schedule ordering and fair opportunity rules",
    "Identify when UNICOR and AbilityOne mandatory sources apply",
    "Compete effectively on FSS task orders and BPAs",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "8.1", "Required Sources and Federal Supply Schedules",
      [
        "Apply FAR 8.002 priority list in order",
        "Execute GSA Schedule ordering under 8.1104-1106",
        "Identify UNICOR and AbilityOne mandatory source rules",
      ],
      [
        { citation: "FAR 8.002", text: "Agencies shall satisfy requirements for supplies and services from or through the sources and publications listed, in the order shown." },
        { citation: "FAR 8.405-2", text: "Orders at or below the micro-purchase threshold may be placed with any schedule contractor that can meet the agency's needs." },
        { citation: "FAR 8.405-3", text: "For orders exceeding the micro-purchase threshold, the ordering activity shall provide fair opportunity to be considered." },
      ],
      sourcesSections,
      "Hold a GSA Schedule (MAS) to access streamlined ordering channels. Respond aggressively to RFQs on GSA eBuy—fair opportunity still requires competition among schedule holders. Price to win task orders knowing agencies compare three quotes when practicable. Monitor AbilityOne/UNICOR list for products that block your commercial offering.",
      "COs must check mandatory sources before open market procurement. Failure to use required sources causes audit findings. Schedule ordering must document fair opportunity for orders above micro-purchase threshold.",
      [
        { title: "GSA fair opportunity RFQ", situation: "Agency posts RFQ on eBuy to three MAS holders for $800K IT modernization order.", whyItMatters: "FAR 8.405-3 fair opportunity applies—your quote must be responsive and competitive among schedule holders, not just technically acceptable." },
        { title: "AbilityOne conflict", situation: "Your commercial office furniture bid loses because product is on AbilityOne Procurement List.", whyItMatters: "FAR 8.501 mandatory source priority overrides open market for listed products unless waiver granted." },
      ],
      [
        { violation: "Open market buy without checking AbilityOne Procurement List", consequence: "Agency contracting violation; contract cancellation and reprocurement." },
        { violation: "Assuming GSA Schedule guarantees orders without marketing", consequence: "Zero revenue—fair opportunity requires active RFQ response and competitive pricing." },
      ],
      [
        q("p08-1-1", "First priority among required sources under FAR 8.002 is:", ["Open market", "Federal Prison Industries (UNICOR)", "GSA Schedule only", "Foreign sources"], 1, "FAR 8.002 lists UNICOR first among required sources."),
        q("p08-1-2", "Fair opportunity on GSA Schedule orders applies for orders exceeding:", ["Micro-purchase threshold", "Only $10 million", "Never required", "State threshold"], 0, "FAR 8.405-3 requires fair opportunity for orders exceeding micro-purchase threshold."),
        tf("p08-1-3", "AbilityOne products on the Procurement List have mandatory source priority.", true, "FAR 8.501-508 implement AbilityOne mandatory source requirements."),
        fillBlank("p08-1-4", "Federal Supply Schedules are multiple-award _____ contracts per FAR 8.701.", ["indefinite-delivery", "sealed-bid", "grant", "cooperative"], 0, "FAR 8.701—FSS are multiple-award indefinite-delivery contracts."),
        q("p08-1-5", "GSA Schedule ordering procedures appear primarily in:", ["FAR 8.405", "FAR Part 31", "FAR Part 49", "FAR 52.219 only"], 0, "FAR 8.405 and 8.1104-1106 govern schedule ordering procedures."),
        q("p08-1-6", "UNICOR waiver may be granted when:", ["Any contractor requests", "Commercial product is less expensive or UNICOR cannot meet delivery", "Never", "Only for foreign products"], 1, "FAR 8.604 allows waivers when UNICOR cannot meet requirements or price/delivery disadvantages agency."),
      ],
      { farPart: 8, farReferences: ["FAR 8.002", "FAR 8.405", "FAR 8.501", "FAR 8.701"] }
    ),
  ],
  { farPart: 8 }
);
