import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "acq-role";

export const ACQUISITION_ROLE_MODULE = proModule(
  MODULE_ID,
  "acquisition",
  1,
  "The Acquisition Manager Role",
  "How Acquisition Managers differ from Contracts Managers, the acquisition team structure, and workforce certification paths.",
  [
    "Distinguish government-side acquisition roles from contractor contracts management",
    "Identify CO, COR, PM, and SSA responsibilities on the acquisition team",
    "Understand FAC-C and DAWIA certification requirements",
  ],
  [
    proLesson(
      MODULE_ID,
      "acquisition",
      "AM.1",
      "Acquisition Manager vs Contracts Manager",
      [
        "Contrast government acquisition workforce with industry contracts management",
        "Explain where Acquisition Managers sit in the federal buying process",
        "Identify overlapping knowledge domains both sides need",
      ],
      [
        { citation: "FAR 1.602-2", text: "Contracting officers are responsible for ensuring performance of all actions necessary for effective, efficient, and timely contract actions." },
        { citation: "FAR 1.604", text: "Contracting Officer's Representatives are appointed in writing and authorized in writing to perform specific technical or administrative functions." },
      ],
      [
        { heading: "Government side", content: "Acquisition Managers, Contract Specialists, and Contracting Officers work for federal agencies planning requirements, conducting market research, running source selection, and administering contracts on behalf of the taxpayer." },
        { heading: "Industry side", content: "Contracts Managers protect company interests—proposal compliance, negotiation, administration, billing, claims, and subcontract flow-down—for profit-making contractors." },
        { heading: "Shared knowledge", content: "Both sides must master FAR Parts 15, 16, 19, 31, and clause application—they sit across the table from each other using the same regulatory language." },
      ],
      "Understanding the government's internal roles helps you anticipate decisions, tailor proposals, and build COR relationships that support performance.",
      "Acquisition professionals must balance mission delivery, competition law, and fiscal accountability while managing multidisciplinary teams.",
      [{ title: "Wrong audience training", situation: "Company trains PMs on SSA debrief procedures meant for government evaluators.", whyItMatters: "Industry needs debrief response strategy—not SSA appointment authority." }],
      [{ violation: "Contractor employee acting as unauthorized CO", consequence: "Unauthorized commitment requiring ratification under FAR 1.602-3." }],
      [
        q("am-1-1", "Contracting Officers work on:", ["Contractor side only", "Government agency side", "State courts", "Foreign embassies only"], 1, "COs are government officials with warrant authority."),
        q("am-1-2", "Contracts Managers at GovCon firms focus on:", ["Writing agency acquisition plans", "Company proposal, negotiation, and contract administration", "Appropriations law exclusively", "Grant-making"], 1, "Industry contracts staff represent contractor interests."),
        tf("am-1-3", "Both acquisition and contracts professionals need FAR Part 15 knowledge.", true, "Negotiated procurement rules apply to both sides."),
        q("am-1-4", "CORs are:", ["Contracting Officers", "Appointed technical/administrative representatives", "Industry proposal managers", "Protest judges"], 1, "FAR 1.604 defines COR appointment."),
        tf("am-1-5", "Acquisition Managers typically work for executive agencies.", true, "Federal acquisition workforce serves agencies."),
        q("am-1-6", "FAC-C and DAWIA refer to:", ["Contractor accounting standards", "Federal acquisition certification programs", "Shipping terms", "Cyber frameworks"], 1, "Certification paths for acquisition workforce."),
      ],
      { farReferences: ["1.602-2", "1.604"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "AM.2",
      "The Acquisition Team",
      [
        "Map roles: CO, COR, PM, Legal, Small Business, Technical, Finance",
        "Explain Source Selection Authority placement",
        "Coordinate team decisions through acquisition lifecycle",
      ],
      [
        { citation: "FAR 1.102-3", text: "Acquisition team members are responsible for making integrated, informed, and timely decisions." },
        { citation: "FAR 15.303", text: "The source selection authority shall establish a source selection organization and procedures." },
      ],
      [
        { heading: "Core members", content: "Program Manager defines requirement; Contract Specialist/CO executes procurement; COR monitors performance post-award; Legal reviews strategy and documents; Small Business Advocate reviews set-aside; Technical/SMEs evaluate proposals; Finance builds IGCE." },
        { heading: "SSA", content: "Source Selection Authority appointee makes final source selection decision based on evaluation board recommendations—level rises with dollar value." },
      ],
      "Know who signs what on the government team—it predicts timeline and decision style on your capture.",
      "Integrated teams prevent the planning failures that cause re-solicitations, protests, and bad awards.",
      [{ title: "Legal late engagement", situation: "Agency skips legal review on sole-source J&A; GAO sustains protest.", whyItMatters: "Team coordination failure delays program 6 months." }],
      [{ violation: "COR directing contract scope changes without CO modification", consequence: "Unauthorized commitment; ratification or dispute." }],
      [
        q("am-2-1", "Source Selection Authority is established under:", ["FAR 15.303", "FAR Part 45", "FAR Part 31", "The Constitution Article I"], 0, "FAR 15.303 covers SSA."),
        q("am-2-2", "IGCE is typically built by:", ["Finance/cost analysts on government team", "Winning offeror", "SBA only", "DCAA only"], 0, "Independent Government Cost Estimate supports price analysis."),
        tf("am-2-3", "Small Business Advocate reviews acquisition for set-aside opportunities.", true, "Part 19 and agency policy require SB review."),
        q("am-2-4", "Integrated acquisition team concept appears in:", ["FAR 1.102-3", "FAR Part 52 only", "DFARS 252.204", "State law"], 0, "FAR 1.102-3 team responsibility."),
        tf("am-2-5", "PM defines mission need; CO executes binding contract actions.", true, "Requirement vs contracting authority split."),
        q("am-2-6", "Legal counsel involvement is critical for:", ["J&A, protests, and complex source selection", "Typing proposals", "Travel bookings", "CPARS color selection"], 0, "Legal reviews high-risk acquisition decisions."),
      ],
      { farReferences: ["1.102-3", "15.303", "7.104"] }
    ),
  ]
);
