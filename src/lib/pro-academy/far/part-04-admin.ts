import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-04";

const adminSections: TrainingSection[] = [
  {
    heading: "FAR 4.102 — Contractor's signature",
    content:
      "Contracts are binding when signed by both parties. Electronic signatures are permitted when compliant with agency procedures. Contractors must ensure signatories have corporate authority—unauthorized signatures create enforceability disputes.",
  },
  {
    heading: "FAR 4.201-202 — Contract distribution",
    content:
      "Agencies distribute copies of contracts to required offices including payment office, auditing office, and contracting office. Contractors must maintain complete contract files mirroring government distribution for administration, audits, and closeout.",
  },
  {
    heading: "FAR 4.1101-1105 — SAM registration",
    content:
      "Offerors must be registered in SAM at time of award with current representations and certifications. Exceptions are narrow (classified acquisitions, foreign contracts in emergencies). Expired SAM blocks award and payment. Representations in SAM are legally binding—false certifications trigger False Claims Act exposure.",
  },
  {
    heading: "FAR 4.601-607 — FPDS reporting",
    content:
      "Agencies report contract actions in the Federal Procurement Data System. Data feeds USASpending, small business metrics, and market research. Contractors use FPDS for competitive intelligence—incumbent identification, pricing trends, and agency spending patterns.",
  },
  {
    heading: "FAR 4.702-705 — Contract files",
    content:
      "Agencies maintain official contract files per FAR 4.803 file content checklist. Contractors must retain records supporting costs, billing, modifications, and compliance for audit and claims. FAR 4.705 and agency supplements specify retention periods—typically 3-6 years after final payment, longer for certain records.",
  },
  {
    heading: "FAR 4.1201-1202 — Representations and certifications",
    content:
      "Offerors complete annual representations in SAM (small business status, tax delinquency, trafficking violations, etc.) and provide additional reps in solicitations. Changes in status during performance must be updated. Prime contractors flow down certain reps to subs via FAR 52.219-8 and related clauses.",
  },
];

export const FAR_PART_04 = proModule(
  MODULE_ID,
  TRACK,
  4,
  "FAR Part 4 — Administrative and Information Matters",
  "SAM registration, FPDS reporting, contract files, distribution, signatures, and representations that enable compliant contracting from registration through closeout.",
  [
    "Maintain active SAM registration with accurate representations",
    "Structure contract files for audit and closeout per FAR 4.803",
    "Use FPDS and USASpending for competitive market research",
    "Execute compliant contract signatures and distribution workflows",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "4.1", "Administrative Requirements and Contract Files",
      [
        "Apply contractor signature requirements under FAR 4.102",
        "Maintain contract distribution and file documentation per 4.201-202 and 4.702-705",
        "Execute SAM registration and representations under 4.1101 and 4.1201",
        "Understand FPDS reporting under 4.601-607",
      ],
      [
        { citation: "FAR 4.1102", text: "Offerors shall be registered in the System for Award Management (SAM) at the time an offer is submitted and at time of award, unless the acquisition is exempted from the requirement." },
        { citation: "FAR 4.803(a)", text: "The contract file shall include the items listed in this subsection, arranged in the order listed, unless the agency's file location guide requires a different arrangement." },
        { citation: "FAR 4.601", text: "The Federal Procurement Data System (FPDS) is the authoritative source for contract action reporting by federal agencies." },
      ],
      adminSections,
      "Set SAM renewal alerts 60 days before expiration—payment stops when SAM lapses. Build contract files with award, all mods, correspondence, invoices, property records, and ethics disclosures. Mirror FAR 4.803 checklist internally. Use FPDS to research incumbent awards before capture calls.",
      "COs cannot award to unregistered offerors except narrow exemptions. Incomplete contract files create audit findings and protest vulnerabilities. FPDS accuracy drives congressional reporting and small business goal achievement.",
      [
        { title: "SAM lapse during option exercise", situation: "Your SAM registration expires the week before the agency exercises Option Year 2. Finance reports payment hold.", whyItMatters: "FAR 4.1102 requires active SAM at award—including option exercises that obligate new funds." },
        { title: "Audit without supporting files", situation: "DCAA requests subcontract consent documentation and mod history for a questioned cost. Your file has emails but no executed mods.", whyItMatters: "FAR 4.803 content standards apply to government files; contractors need parallel documentation to defend billing and REAs." },
      ],
      [
        { violation: "Performing with expired SAM registration on active contract", consequence: "Payment suspension until SAM reactivated; potential false representation if certifications outdated." },
        { violation: "False small business representation in SAM on set-aside award", consequence: "False Claims Act liability; size protest; potential debarment under FAR 9.4." },
      ],
      [
        q("p04-1-1", "SAM registration is required at time of:", ["Award only, not offer", "Offer submission and award unless exempted", "Closeout only", "Protest filing"], 1, "FAR 4.1102 requires SAM registration at offer and award unless acquisition is exempted."),
        q("p04-1-2", "FPDS is used primarily for:", ["Employee payroll", "Federal contract action reporting", "Security clearance processing", "State tax filing"], 1, "FAR 4.601 establishes FPDS as authoritative contract action reporting system."),
        tf("p04-1-3", "FAR 4.803 specifies content requirements for official contract files.", true, "FAR 4.803 lists required contract file contents for agency files—contractors mirror for administration."),
        fillBlank("p04-1-4", "Annual representations and certifications are maintained in _____ under FAR 4.1201.", ["SAM", "CPARS", "FPDS only", "state court"], 0, "FAR 4.1201 requires representations and certifications in SAM."),
        q("p04-1-5", "Expired SAM registration typically causes:", ["Automatic contract extension", "Payment and award holds", "CPARS upgrade", "Protest dismissal"], 1, "Active SAM is prerequisite for award and payment across federal systems."),
        q("p04-1-6", "Contract file retention supports:", ["Marketing only", "Audits, claims, disputes, and closeout", "Eliminating competition", "Waiving DFARS"], 1, "FAR 4.705 and related policies require retention for audit and administration purposes."),
      ],
      { farPart: 4, farReferences: ["FAR 4.102", "FAR 4.1102", "FAR 4.601", "FAR 4.803", "FAR 4.1201"] }
    ),
  ],
  { farPart: 4 }
);
