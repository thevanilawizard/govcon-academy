import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "acq-gov-admin";

export const ACQUISITION_GOV_ADMIN_MODULE = proModule(
  MODULE_ID,
  "acquisition",
  4,
  "Government Contract Administration",
  "COR duties, QASP implementation, CPARS from the government perspective, and contract file documentation standards.",
  [
    "Execute COR appointment limitations and documentation duties",
    "Implement QASP surveillance methods aligned with PWS metrics",
    "Prepare accurate CPARS evaluations and maintain government contract files",
  ],
  [
    proLesson(
      MODULE_ID,
      "acquisition",
      "GA.1",
      "COR Duties and Quality Assurance",
      [
        "Define COR authority limits vs contracting officer",
        "Implement QASP surveillance methods",
        "Document performance and direct contractor communications properly",
      ],
      [
        { citation: "FAR 1.604", text: "CORs shall not make any commitment or change that affects price, quality, quantity, delivery, or other terms and conditions of the contract." },
        { citation: "FAR 46.401", text: "The Government's quality assurance program shall be designed to ensure that supplies and services conform to contract requirements." },
      ],
      [
        { heading: "COR limits", content: "CORs monitor technical performance, accept deliverables when delegated, and document issues—they do not obligate funds or modify contract terms." },
        { heading: "QASP", content: "Quality Assurance Surveillance Plan tied to PWS metrics: 100% inspection for critical items, random sampling for routine services, periodic trend analysis." },
        { heading: "Documentation", content: "Daily logs, inspection reports, email to official file, and deficiency notices support CPARS and termination decisions." },
      ],
      "Build strong COR relationships but route all scope/price discussions through the CO via formal modifications.",
      "Effective COR/QASP execution catches performance issues early and supports accurate CPARS.",
      [{ title: "COR scope creep", situation: "COR emails contractor to add reports not in PWS; contractor performs without mod.", whyItMatters: "Unauthorized commitment; contractor may lose recovery or face performance risk." }],
      [{ violation: "COR signing contract modification", consequence: "Unauthorized action; ratification required or void." }],
      [
        q("ga-1-1", "CORs may NOT:", ["Monitor technical performance", "Change contract price or terms", "Document deficiencies", "Participate in QASP"], 1, "FAR 1.604 limits COR authority."),
        q("ga-1-2", "QASP aligns surveillance with:", ["PWS performance standards", "Contractor marketing", "Stock price", "Protest grounds"], 0, "QASP implements quality assurance per PWS."),
        tf("ga-1-3", "100% inspection may apply to critical deliverables.", true, "Surveillance method matched to risk."),
        q("ga-1-4", "Acceptance of deliverables when delegated to COR:", ["Eliminates CO role", "Must follow acceptance procedures in contract", "Waives all FAR clauses", "Replaces invoice"], 1, "Acceptance must comply with contract/FAR 46."),
        tf("ga-1-5", "COR documentation supports CPARS.", true, "Performance records feed CPARS evaluations."),
        q("ga-1-6", "Quality assurance appears in FAR:", ["Part 46", "Part 19", "Part 3 only", "Part 12 only"], 0, "FAR Part 46 quality assurance."),
      ],
      { farReferences: ["1.604", "46.401", "37.604"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "GA.2",
      "CPARS and Government Contract Files",
      [
        "Prepare CPARS evaluations using objective evidence",
        "Respond to contractor CPARS comments fairly",
        "Maintain contract files per FAR Part 4",
      ],
      [
        { citation: "FAR 42.1502", text: "Agencies shall prepare evaluations of contractor performance for each contract meeting thresholds." },
        { citation: "FAR 4.801", text: "Contracting offices shall establish files containing records documenting the rationale for actions taken at each step of the acquisition process." },
      ],
      [
        { heading: "CPARS government side", content: "Rate quality, schedule, cost control, management, and small business subcontracting where applicable. Use Exceptional through Unsatisfactory consistently with evidence." },
        { heading: "Contractor comments", content: "Contractors may respond to draft CPARS—government must consider factual rebuttals before finalizing." },
        { heading: "Contract file", content: "Includes acquisition plan, source selection record, mods, correspondence, QASP results, invoices, and closeout checklist per FAR 4.803." },
      ],
      "Draft CPARS comments with evidence when rated below Satisfactory—factual rebuttals can change final record.",
      "Accurate CPARS and complete files support future source selection and withstand audits and protests on administration.",
      [{ title: "Retaliatory CPARS", situation: "COR rates Unsatisfactory solely because contractor filed a claim.", whyItMatters: "May violate good faith; appeal and potential corrective action." }],
      [{ violation: "Finalizing negative CPARS without reviewing contractor rebuttal", consequence: "Agency policy violation; record may be amended on appeal." }],
      [
        q("ga-2-1", "CPARS evaluations are required per:", ["FAR 42.1502", "FAR Part 31", "State law", "Contractor policy"], 0, "FAR 42.1502 performance evaluation."),
        q("ga-2-2", "Contract files must document:", ["Rationale for acquisition and administration actions", "Personal social media", "Employee HR files unrelated to contract", "Competitor proposals after debrief"], 0, "FAR 4.801 documentation requirement."),
        tf("ga-2-3", "Contractors may comment on draft CPARS.", true, "CPARS process includes contractor response."),
        q("ga-2-4", "CPARS ratings include:", ["Exceptional through Unsatisfactory", "Only pass/fail", "Stock ratings", "Color blue only"], 0, "Standard CPARS rating scale."),
        tf("ga-2-5", "Incomplete contract files weaken protest and audit defense.", true, "FAR 4 requires comprehensive files."),
        q("ga-2-6", "Past performance in future source selection uses:", ["CPARS and other performance records", "Only price", "Only size standard", "Travel vouchers"], 0, "FAR 15.305 past performance evaluation."),
      ],
      { farReferences: ["42.1502", "4.801", "4.803"] }
    ),
  ]
);
