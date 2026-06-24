import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-09";

const responsibilitySections: TrainingSection[] = [
  {
    heading: "FAR 9.104-1 — Seven responsibility elements",
    content:
      "Prospective contractors must have: adequate financial resources or ability to obtain them; satisfactory record of integrity and ethics; ability to comply with delivery schedule; satisfactory performance record; necessary organization and experience; necessary operational controls; and authorization to operate. KO makes responsibility determination before award.",
  },
  {
    heading: "FAR 9.105-106 — Responsibility procedures",
    content:
      "COs evaluate responsibility using pre-award surveys, SAM data, CPARS, and other sources. Non-responsible determinations can be overcome with additional documentation. Small business responsibility determinations follow same standards.",
  },
  {
    heading: "FAR 9.201-207 — Debarment and suspension",
    content:
      "SAM Exclusions lists parties excluded from federal contracting for fraud, criminal conviction, willful failure to perform, and other causes. Suspension is temporary pending investigation; debarment generally up to three years. Affiliates and key personnel may be included. Existing contracts may continue or be terminated depending on circumstances.",
  },
];

const ociSections: TrainingSection[] = [
  {
    heading: "Type 1 — Biased ground rules OCI",
    content:
      "Contractor helped develop requirements, specifications, or RFP ground rules and gains unfair competitive advantage on follow-on competition. Example: SETA contractor writing PWS then bidding on implementation. Mitigation: firewall, divestiture of capture team, or exclusion from follow-on.",
  },
  {
    heading: "Type 2 — Impaired objectivity OCI",
    content:
      "Contractor's work requires it to evaluate itself, its products, or its affiliates—or provide advice where judgment could be biased. Example: contractor assessing effectiveness of its own software on advisory contract. Mitigation: third-party evaluation, recusal from self-assessment tasks.",
  },
  {
    heading: "Type 3 — Unequal access to information OCI",
    content:
      "Contractor has access to non-public competitively useful information through prior work and could use it on another acquisition. Example: access to competitor proprietary data on prime contract used to underbid on related RFP. Mitigation: data segregation, NDAs, limited access, or recusal.",
  },
  {
    heading: "FAR 9.505-507 — Mitigation and waiver",
    content:
      "COs identify OCIs before award. Offerors must disclose OCIs and propose mitigation plans. CO may reject proposal, require mitigation, or waive OCI if in government interest with neutral contracting officer review. Uncured OCIs lead to protest, termination, and False Claims Act exposure.",
  },
];

export const FAR_PART_09 = proModule(
  MODULE_ID,
  TRACK,
  9,
  "FAR Part 9 — Contractor Qualifications and OCI",
  "Responsible contractor standards, debarment/suspension, and the three organizational conflict of interest types with mitigation strategies.",
  [
    "Apply seven FAR 9.104-1 responsibility elements",
    "Screen SAM Exclusions before teaming and subcontract awards",
    "Identify and mitigate three OCI types under FAR 9.505",
    "Prepare OCI disclosure and mitigation plans for proposals",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "9.1", "Responsibility, Debarment, and Organizational Conflicts of Interest",
      [
        "Apply FAR 9.104-1 responsibility standards",
        "Explain debarment and suspension effects under 9.406-409",
        "Identify three OCI types under FAR 9.505 and mitigation under 9.506",
      ],
      [
        { citation: "FAR 9.104-1", text: "A prospective contractor must have adequate financial resources, a satisfactory record of integrity and business ethics, and the ability to perform on schedule, among other standards." },
        { citation: "FAR 9.505-1", text: "Bias in source selection may occur when a contractor is involved in preparing its own or another offeror's proposal, or when a contractor is involved in preparing specifications or work statements." },
        { citation: "FAR 9.505-2", text: "An OCI exists when a contractor's objectivity is impaired because of its relationship with the agency or other contractors." },
      ],
      [...responsibilitySections, ...ociSections],
      "Maintain responsibility documentation package: audited financials, ethics program, CPARS library, and relevant past performance. Screen all subs monthly in SAM. Before every proposal, run OCI checklist against prior advisory work on same program. Propose mitigation before CO identifies OCI unilaterally.",
      "COs must determine responsibility before award—low price does not override non-responsibility. OCI mitigation is evaluated during source selection. Debarment protects government from repeat bad actors.",
      [
        { title: "SETA follow-on OCI", situation: "Your firm wrote the RFP requirements as SETA contractor and now bids on the implementation contract without disclosure.", whyItMatters: "Classic biased ground rules OCI under FAR 9.505-1—protest likely sustained without mitigation or recusal from capture." },
        { title: "Debarred sub on team", situation: "Prime awards $500K sub to firm listed in SAM Exclusions without checking status.", whyItMatters: "FAR 9.405 prohibits contracting with excluded parties—prime faces termination and potential debarment." },
      ],
      [
        { violation: "Failure to disclose impaired objectivity OCI on evaluation contract", consequence: "Award cancellation; termination for default; suspension/debarment referral." },
        { violation: "Monthly SAM screening omitted for active subcontractors", consequence: "Flow-down violation; False Claims Act exposure if excluded sub performs on cost reimbursable work." },
      ],
      [
        q("p09-1-1", "FAR 9.104-1 responsibility elements include:", ["Lowest price only", "Financial resources, integrity, and ability to perform on schedule", "Large business certification", "Foreign ownership only"], 1, "FAR 9.104-1 lists seven minimum responsibility standards."),
        q("p09-1-2", "Biased ground rules OCI under FAR 9.505-1 occurs when:", ["Contractor hires veterans", "Contractor helped prepare specifications then bids on resulting acquisition", "Contractor uses commercial items", "Contractor has low price"], 1, "FAR 9.505-1 addresses bias from preparing specifications or ground rules."),
        q("p09-1-3", "Unequal access to information OCI involves:", ["Public SAM data", "Non-public competitively useful information from prior work", "Published GSA prices", "Open industry days"], 1, "FAR 9.505-3 covers unequal access to non-public competitive information."),
        tf("p09-1-4", "Debarred contractors appear on SAM Exclusions and generally cannot receive new awards.", true, "FAR 9.405 and SAM Exclusions prohibit award to debarred/suspended parties."),
        fillBlank("p09-1-5", "Impaired _____ OCI occurs when contractor objectivity is compromised on advisory work per FAR 9.505-2.", ["objectivity", "invoice", "delivery", "option"], 0, "FAR 9.505-2 defines impaired objectivity organizational conflicts of interest."),
        q("p09-1-6", "OCI mitigation plans may include:", ["Ignoring the conflict", "Firewalls, recusal, and data segregation", "Bribing the KO", "Deleting CPARS"], 1, "FAR 9.506 allows mitigation including firewalls, recusal, and other neutralizing measures."),
      ],
      { farPart: 9, farReferences: ["FAR 9.104", "FAR 9.405", "FAR 9.505", "FAR 9.506"] }
    ),
  ],
  { farPart: 9 }
);
