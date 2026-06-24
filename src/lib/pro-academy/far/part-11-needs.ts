import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-11";

const needsSections: TrainingSection[] = [
  {
    heading: "FAR 11.101-106 — Order of precedence",
    content:
      "When requirements documents conflict, order of precedence typically flows: technical specifications, then PWS/SOW, then drawings, then other attachments—exact order stated in solicitation Section C. Contractors must read precedence clause before resolving ambiguities in proposals and performance.",
  },
  {
    heading: "Statement of Work (SOW)",
    content:
      "SOW describes work in detail—methods, steps, deliverables, and standards. Common in research and engineering. Risk: overly prescriptive SOW limits innovation but creates clear compliance baseline. Bad SOWs mix requirements with evaluation criteria or include unstated assumptions.",
  },
  {
    heading: "Performance Work Statement (PWS)",
    content:
      "PWS defines required outcomes and performance standards for performance-based acquisition—not detailed procedures. Paired with Quality Assurance Surveillance Plan (QASP) defining how government monitors performance without dictating methods. Preferred for services under FAR Part 37.",
  },
  {
    heading: "Statement of Objectives (SOO)",
    content:
      "SOO states high-level objectives; offerors propose complete PWS showing how they will achieve outcomes. Maximizes industry innovation but requires careful proposal PWS review—incorporated PWS at award becomes binding.",
  },
  {
    heading: "Brand name or equal and specifications",
    content:
      "Brand name or equal allows equivalent products meeting salient characteristics. Design specifications tell contractor exactly what to build; performance specifications state required performance and let industry choose design. Performance specs preferred when market solutions exist.",
  },
];

export const FAR_PART_11 = proModule(
  MODULE_ID,
  TRACK,
  11,
  "FAR Part 11 — Describing Agency Needs",
  "Requirements document order of precedence, SOW vs PWS vs SOO, brand name or equal, and design vs performance specifications.",
  [
    "Apply FAR 11.101 order of precedence to resolve conflicts",
    "Distinguish SOW, PWS, and SOO in proposals and performance",
    "Write and evaluate performance-based requirements with QASP",
    "Use brand name or equal and performance specifications strategically",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "11.1", "Requirements Documents and Performance-Based Acquisition",
      [
        "Apply order of precedence under FAR 11.101-106",
        "Contrast SOW, PWS, and SOO",
        "Identify design vs performance specifications",
      ],
      [
        { citation: "FAR 11.101", text: "Agency requirements shall be stated in performance-based terms to the maximum extent practicable." },
        { citation: "FAR 11.002(a)", text: "In drafting requirements documents, agencies shall describe the required performance and leave maximum flexibility to industry to propose innovative solutions." },
        { citation: "FAR 37.602", text: "Performance work statements shall describe the required results in clear, measurable, and enforceable terms." },
      ],
      needsSections,
      "Map every PWS paragraph to proposal compliance matrix. On SOO acquisitions, your proposed PWS becomes the contract—scrub for unrealistic metrics before submission. Use brand name or equal to propose equivalent commercial product when agency names competitor brand. Flag ambiguous SOW language in Q&A to avoid scope disputes.",
      "Requirements offices must write measurable outcomes. Poor requirements drive claims, mod volume, and CPARS disputes. QASP must align with PWS metrics—CORs surveil outcomes not contractor methods on performance-based contracts.",
      [
        { title: "SOO incorporation trap", situation: "You propose aggressive service levels in PWS volume on SOO-based RFP; agency incorporates verbatim at award.", whyItMatters: "Your proposed PWS becomes binding contract language—underbid metrics become performance failures and CPARS hits." },
        { title: "Precedence conflict", situation: "Drawing specifies material A; PWS references material B; Section C silent on precedence.", whyItMatters: "FAR 11.101 order of precedence resolves conflict—missing precedence clause creates constructive change claims." },
      ],
      [
        { violation: "Performing to COR verbal interpretation ignoring PWS precedence", consequence: "Non-compliant deliverables rejected; no equitable adjustment if contract text clear." },
        { violation: "Proposal PWS on SOO acquisition with unmeasurable 'best effort' language", consequence: "Weak enforceability—or conversely, incorporated vague language cuts both ways at dispute time." },
      ],
      [
        q("p11-1-1", "FAR policy favors requirements stated in _____ terms.", ["performance-based", "brand-name only", "classified", "oral"], 0, "FAR 11.101 and 11.002(a) favor performance-based requirements."),
        q("p11-1-2", "A PWS differs from a detailed SOW because PWS:", ["Dictates every work step", "Describes required outcomes and performance standards", "Eliminates QASP", "Requires sealed bidding"], 1, "FAR 37.602—PWS focuses on results not methods."),
        tf("p11-1-3", "On SOO acquisitions, offerors typically propose a complete PWS.", true, "SOO states objectives; offerors propose PWS showing approach to achieve them."),
        fillBlank("p11-1-4", "Quality Assurance Surveillance Plans pair with _____ on performance-based service contracts.", ["PWS", "invoices", "debarment", "options"], 0, "QASP implements surveillance against PWS performance standards per FAR 46.401."),
        q("p11-1-5", "Brand name or equal provisions allow:", ["Only the named brand", "Equivalent products meeting salient characteristics", "No competition", "Automatic sole source"], 1, "FAR 11.104 brand name or equal allows acceptable equivalents."),
        q("p11-1-6", "Order of precedence for conflicting requirements is established in:", ["Contractor proposal only", "Solicitation Section C / contract schedule", "CPARS", "SAM"], 1, "FAR 11.106—precedence stated in solicitation and contract, typically Section C."),
      ],
      { farPart: 11, farReferences: ["FAR 11.101", "FAR 11.002", "FAR 37.602"] }
    ),
  ],
  { farPart: 11 }
);
