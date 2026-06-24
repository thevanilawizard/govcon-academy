import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-14";

const sealedBiddingSections: TrainingSection[] = [
  {
    heading: "FAR 14.101-105 — Elements of sealed bidding",
    content:
      "Sealed bidding requires: preparation of IFB with clear specs; public opening of bids; evaluation without discussions; award to lowest responsive responsible bidder. Used when requirements firm, FFP appropriate, and adequate competition expected. No negotiations—bid exactly as specified.",
  },
  {
    heading: "FAR 14.201-205 — IFB preparation",
    content:
      "IFB includes invitation, specs, delivery schedule, bid form, and clauses. Ambiguous IFBs generate non-responsive bids and protests. Contractors must read every page—deviations often make bid non-responsive.",
  },
  {
    heading: "FAR 14.301-306 — Bid submission",
    content:
      "Bids delivered to designated office by opening time. Late bids rejected except narrow government-error exceptions. Bids must be sealed and marked per IFB instructions.",
  },
  {
    heading: "FAR 14.401-407 — Opening and recording",
    content:
      "Bids opened publicly at stated time; prices read aloud. Opening officer records bids; mistakes discovered at opening handled per FAR 14.407.",
  },
  {
    heading: "Responsive vs responsible",
    content:
      "Responsive: bid conforms to all material IFB requirements—no deviations, complete forms, correct price format. Responsible: bidder meets FAR 9.104-1 standards. Lowest responsive responsible bidder wins. You can be lowest but lose for non-responsiveness or non-responsibility.",
  },
  {
    heading: "Bid mistakes — FAR 14.407-408",
    content:
      "Before opening: withdraw or correct per IFB. After opening: clerical mistakes may be corrected before award if clear evidence; math errors corrected. Non-clerical errors generally stick—bid as submitted. Check unit prices vs extensions carefully.",
  },
];

export const FAR_PART_14 = proModule(
  MODULE_ID,
  TRACK,
  14,
  "FAR Part 14 — Sealed Bidding",
  "IFB elements, bid submission and opening, responsive vs responsible distinction, and bid mistake correction rules.",
  [
    "Apply sealed bidding procedures under FAR Part 14",
    "Distinguish responsive bids from responsible bidders",
    "Identify common non-responsive bid errors",
    "Handle bid mistakes before and after public opening",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "14.1", "Sealed Bidding Procedures and Bid Evaluation",
      [
        "Apply FAR 14.101 elements of sealed bidding",
        "Distinguish responsive vs responsible under 14.408",
        "Apply bid mistake rules under 14.407",
      ],
      [
        { citation: "FAR 14.101", text: "Sealed bidding is a method of contracting that employs competitive bids, public opening of bids, and award to the responsible bidder whose bid is responsive and conforms to the invitation for bids." },
        { citation: "FAR 14.404-1", text: "A bid is responsive if it conforms in all material respects to the invitation for bids." },
        { citation: "FAR 14.407", text: "The contracting officer may permit correction of a bid after bid opening if the correction does not change the bid materially and is in the interest of the Government." },
      ],
      sealedBiddingSections,
      "Bid construction is compliance—no win themes, no discussions. Triple-check material requirements, signatures, bid bonds, and unit price math. Lowest price wins among responsive responsible bidders—do not gold-plate. Use bid mistake procedures immediately at opening for clerical errors with clear evidence.",
      "COs must award without discussions to lowest responsive responsible bidder. Public opening ensures transparency. Improper responsiveness determinations are protestable at GAO.",
      [
        { title: "Non-responsive deviation", situation: "You submit 5% bid bond when IFB requires 10%; your price is lowest.", whyItMatters: "Material deviation makes bid non-responsive under FAR 14.404-1—award goes to next low responsive bidder." },
        { title: "Math error in extensions", situation: "Unit price correct but extended price wrong; opening officer flags discrepancy.", whyItMatters: "FAR 14.408 allows correction of math errors before award—unit price controls; failure to clarify may reject bid." },
      ],
      [
        { violation: "Material qualification or deviation in bid", consequence: "Bid rejected as non-responsive despite low price." },
        { violation: "Late bid submission blaming courier without government-caused delay", consequence: "Rejection under FAR 14.304—late bids not considered except narrow exceptions." },
      ],
      [
        q("p14-1-1", "Sealed bidding award goes to the lowest _____ responsible bidder.", ["responsive", "foreign", "incumbent", "small business only"], 0, "FAR 14.101—lowest responsive and responsible bidder wins."),
        q("p14-1-2", "A responsive bid:", ["May deviate on any term", "Conforms in all material respects to the IFB", "Requires negotiations", "Needs CPARS Exceptional"], 1, "FAR 14.404-1 defines responsive as conforming in all material respects."),
        tf("p14-1-3", "Sealed bidding generally allows no discussions with bidders.", true, "FAR 14.408—award on responsive bids without discussions."),
        fillBlank("p14-1-4", "Bids are opened _____ at the time stated in the IFB per FAR 14.401.", ["publicly", "secretly", "orally only", "by protest"], 0, "FAR 14.401 requires public opening at designated time."),
        q("p14-1-5", "Responsibility determinations under sealed bidding use:", ["FAR Part 9 standards", "Lowest price only", "CPARS alone", "State law"], 0, "FAR 14.408 references responsibility under FAR Subpart 9.1."),
        q("p14-1-6", "Clerical bid mistakes after opening may be corrected:", ["Never", "If correction does not change bid materially and evidence is clear", "Only by protest", "By COR approval"], 1, "FAR 14.407 permits limited post-opening corrections for clerical mistakes."),
      ],
      { farPart: 14, farReferences: ["FAR 14.101", "FAR 14.404", "FAR 14.407", "FAR 14.408"] }
    ),
  ],
  { farPart: 14 }
);
