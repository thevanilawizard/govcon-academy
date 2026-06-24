import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-17";

const specialSections: TrainingSection[] = [
  {
    heading: "FAR 17.101-105 — Multi-year contracting",
    content:
      "Multi-year contracts buy requirements for more than one year with defined quantities and pricing. Benefits: quantity discounts, contractor planning stability. Risks: cancellation ceiling limits government liability if program terminated—contractor prices cancellation costs into bid. Requires funding of first year and statutory authority.",
  },
  {
    heading: "FAR 17.200-208 — Options",
    content:
      "Options are unilateral rights to purchase additional supplies/services per FAR 52.217-8 or 52.217-9 clauses. Must be evaluated at award as part of total evaluated price. Exercise requires written notice within option period; funds must be available. Options are not guarantees—agency may decline.",
  },
  {
    heading: "Exercising options",
    content:
      "CO exercises unilaterally before option expiration with proper funding and determination that price remains fair and reasonable. Failure to document fair and reasonable price at exercise is protest ground. Contractors should track option exercise dates and fund status.",
  },
  {
    heading: "FAR 17.500-503 — Interagency acquisitions",
    content:
      "Economy Act (41 U.S.C. 1535): ordering agency reimburses servicing agency for costs. Non-Economy Act: GWACs, MACs, and assisted acquisitions where servicing agency has existing vehicle. Interagency orders require written agreement on scope, funding, and management.",
  },
];

export const FAR_PART_17 = proModule(
  MODULE_ID,
  TRACK,
  17,
  "FAR Part 17 — Special Contracting Methods",
  "Multi-year contracting, option clauses and exercise requirements, and interagency acquisitions under Economy Act and GWAC/MAC vehicles.",
  [
    "Evaluate multi-year contracts including cancellation ceiling risk",
    "Track option exercise timelines and fair and reasonable determinations",
    "Distinguish Economy Act from non-Economy Act interagency orders",
    "Price option years in proposals as part of total evaluated price",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "17.1", "Multi-Year Contracts, Options, and Interagency Acquisitions",
      [
        "Apply FAR 17.101 multi-year contracting requirements",
        "Exercise and plan options under FAR 17.208",
        "Execute interagency acquisitions under 17.502",
      ],
      [
        { citation: "FAR 17.101", text: "Multi-year contracting is a method of acquiring known requirements for more than one year, with a cancellation ceiling and other safeguards for the Government." },
        { citation: "FAR 17.208", text: "The contracting officer shall determine that the price is fair and reasonable before exercising an option." },
        { citation: "FAR 17.502-2", text: "Interagency acquisitions shall be supported by a written agreement between the requesting and servicing agency." },
      ],
      specialSections,
      "Include all option years in total evaluated price on proposals—winning base only to lose options hurts revenue planning. Track 52.217-9 exercise windows; remind CO before expiration with performance data supporting exercise. On multi-year bids, model cancellation ceiling impact on pricing. For interagency work, confirm whether Economy Act or GWAC path applies to predict funding flow.",
      "COs must fund first year of multi-year contracts and obtain legal authority. Option exercise requires fair and reasonable price documentation. Interagency orders need interagency agreements and compliance with ordering procedures.",
      [
        { title: "Missed option exercise window", situation: "Option Year 2 expires in 30 days; CO has not exercised; no funds on record.", whyItMatters: "Unexercised options lapse—contractor must stop work or negotiate new contract; revenue cliff under FAR 17.207." },
        { title: "Multi-year cancellation", situation: "Agency cancels Year 3 of multi-year contract citing program cut; cancellation ceiling pays $500K.", whyItMatters: "FAR 17.101 cancellation ceiling limits government liability—contractor priced expected cancellation cost at award." },
      ],
      [
        { violation: "Performing past option expiration without exercise mod", consequence: "Unauthorized obligation; non-payment risk; potential stop-work." },
        { violation: "Underpricing option years to win base then refusing performance", consequence: "Termination for default; CPARS Unsatisfactory; debarment risk." },
      ],
      [
        q("p17-1-1", "Multi-year contracts include a _____ ceiling limiting government cancellation liability.", ["cancellation", "profit", "CPARS", "protest"], 0, "FAR 17.101 multi-year contracts include cancellation ceiling for government protection."),
        q("p17-1-2", "Before exercising an option, the CO must determine price is:", ["Lowest ever paid", "Fair and reasonable", "Identical to GSA without analysis", "Set by subcontractor"], 1, "FAR 17.208 requires fair and reasonable price determination before option exercise."),
        tf("p17-1-3", "Options must be evaluated as part of total evaluated price at award.", true, "FAR 17.206 requires inclusion of options in total evaluated price."),
        fillBlank("p17-1-4", "Economy Act interagency acquisitions are authorized under _____ U.S.C. 1535.", ["41", "10", "18", "31"], 0, "FAR 17.502 references 41 U.S.C. 1535 Economy Act authority."),
        q("p17-1-5", "GWAC task orders are examples of:", ["Economy Act only", "Non-Economy Act interagency acquisitions", "Grants", "Sealed bids"], 1, "GWACs/MACs are non-Economy Act assisted acquisitions under FAR 17.5."),
        q("p17-1-6", "Unilateral option exercise requires:", ["Contractor agreement only", "Written notice by CO within option period with available funds", "COR email", "Protest filing"], 1, "FAR 17.207—CO exercises option unilaterally with notice and funding within option period."),
      ],
      { farPart: 17, farReferences: ["FAR 17.101", "FAR 17.208", "FAR 17.502"] }
    ),
  ],
  { farPart: 17 }
);
