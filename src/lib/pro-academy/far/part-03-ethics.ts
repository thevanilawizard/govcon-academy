import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-03";

const standardsSections: TrainingSection[] = [
  {
    heading: "FAR 3.101 — Standards of conduct",
    content:
      "Government business must be conducted with the highest ethical standards. Contractors and government personnel may not engage in conduct that creates the appearance of impropriety or violates procurement integrity. Personal and organizational conflicts must be avoided or mitigated. The standard is public trust—not merely legal minimums.",
  },
  {
    heading: "FAR 3.104 — Procurement integrity",
    content:
      "Contractor bid or proposal information and source selection information are protected before contract award. Obtaining, disclosing, or using this information improperly violates the Procurement Integrity Act. Criminal penalties include fines up to $100,000 and imprisonment up to five years per violation. After award, post-employment restrictions limit former agency officials' communications with their former agency on behalf of contractors.",
  },
  {
    heading: "FAR 3.301 — Gratuities",
    content:
      "Agency heads may prescribe standards prohibiting contractors from giving gratuities to agency personnel. The widely cited $20 de minimis gift limit comes from agency supplemental ethics rules (e.g., DoD 5500.7-R), not the FAR dollar figure itself. Any gift intended to influence acquisition outcomes violates FAR 3.101-2 regardless of amount.",
  },
];

const ethicsProgramSections: TrainingSection[] = [
  {
    heading: "FAR 3.201-209 — Business ethics and compliance",
    content:
      "FAR Subpart 3.2 implements ethics requirements. FAR 52.203-13 requires contractors above the clause threshold to maintain a written code of business ethics, internal control system, and training program. Contractors must disclose credible evidence of violations of criminal law, civil False Claims Act, or significant overpayments. Failure to implement an adequate program can affect responsibility determinations.",
  },
  {
    heading: "FAR 3.501-503 — Kickbacks",
    content:
      "Kickbacks include any money, fee, commission, credit, gift, or thing of value provided for obtaining favorable treatment in connection with a prime contract or subcontract. Prime contractors must have written policies, educate employees, and report suspected kickbacks. The Anti-Kickback Act carries civil and criminal penalties.",
  },
];

const employeeContractSections: TrainingSection[] = [
  {
    heading: "FAR 3.601-606 — Contracts with government employees",
    content:
      "Agencies generally may not contract with current federal employees or their business concerns. Exceptions require legal review and high-level approval. Contractors must verify that key personnel are not improperly acting as both government decision-makers and contractor beneficiaries.",
  },
  {
    heading: "FAR 3.701-706 — Voiding and rescinding contracts",
    content:
      "Contracts procured through fraud, bribery, or conflict of interest may be voided or rescinded. The government may recover amounts expended and pursue suspension or debarment. Contractors lose revenue and face reputational destruction when awards are voided ab initio.",
  },
  {
    heading: "FAR 3.901-906 — Whistleblower protections",
    content:
      "Employees of contractors and subcontractors are protected from reprisal for lawful disclosure of fraud, waste, or abuse. Retaliation against whistleblowers creates separate liability and reinforces the need for non-retaliation policies and independent reporting channels.",
  },
];

export const FAR_PART_03 = proModule(
  MODULE_ID,
  TRACK,
  3,
  "FAR Part 3 — Improper Business Practices and Personal Conflicts",
  "Full coverage of procurement integrity, gratuities, kickbacks, business ethics programs, government employee contracting restrictions, voiding authority, and whistleblower protections.",
  [
    "Apply Procurement Integrity Act rules during capture and proposal",
    "Implement FAR 52.203-13 business ethics program requirements",
    "Recognize kickback and gratuity violations before they trigger investigations",
    "Navigate whistleblower and disclosure obligations professionally",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "3.1", "Standards of Conduct and Procurement Integrity",
      ["Apply FAR 3.101 ethical standards", "Identify protected procurement information under 3.104", "Apply gratuity rules under 3.301 and 3.101-2"],
      [
        { citation: "FAR 3.101-1", text: "Government business shall be conducted in a manner above reproach and, except as authorized by statute or regulation, with complete impartiality and with preferential treatment for none." },
        { citation: "FAR 3.104-3", text: "No person shall knowingly obtain contractor bid or proposal information or source selection information before the award of a Federal agency procurement contract to which the information relates." },
        { citation: "FAR 3.101-2", text: "Contractors shall not offer gratuities to Government personnel." },
      ],
      standardsSections,
      "Train capture and proposal teams before every bid: never ask for competitor pricing, draft evaluation scores, or protected source selection documents. Refuse improperly offered information, document the incident, and call ethics counsel. Publish a gift policy stricter than the customer's supplemental ethics rules.",
      "COs and source selection officials face criminal exposure for disclosing protected information. Agencies must train personnel on post-employment restrictions and monitor communications with industry during active competitions.",
      [
        { title: "Competitor price leak", situation: "A government employee tells your capture manager the incumbent's proposed price during source selection.", whyItMatters: "FAR 3.104 prohibits obtaining contractor bid/proposal information before award. Using it exposes your firm to civil penalties and possible disqualification." },
        { title: "Holiday gift basket", situation: "Your BD team sends $150 gift baskets to the source selection panel during active evaluation.", whyItMatters: "FAR 3.101-2 prohibits gratuities intended to influence acquisition outcomes—amount and timing create appearance of impropriety regardless of intent." },
      ],
      [
        { violation: "Using competitor proposal information obtained from government source", consequence: "Procurement Integrity Act civil penalties up to $100,000 per violation; criminal penalties up to $100,000 fine and 5 years imprisonment under 41 U.S.C. 2105." },
        { violation: "Failing to stop conversation when offered source selection information", consequence: "Appearance of complicity; protest risk and agency referral to Inspector General." },
      ],
      [
        q("p03-1-1", "FAR 3.104 protects before award:", ["Only classified contracts", "Contractor bid/proposal and source selection information", "Contractor employee HR records", "Public SAM.gov data"], 1, "FAR 3.104-3 restricts obtaining or disclosing protected contractor bid/proposal and source selection information."),
        q("p03-1-2", "Criminal penalties under procurement integrity can include fines up to _____ and imprisonment up to five years.", ["$1,000", "$100,000", "$10 million", "No criminal penalties"], 1, "41 U.S.C. 2105 and FAR 3.104 reference criminal penalties including fines up to $100,000 and imprisonment up to 5 years."),
        tf("p03-1-3", "FAR 3.101-2 allows gratuities to CORs if under $20.", false, "FAR 3.101-2 prohibits gratuities to government personnel; de minimis limits come from agency ethics supplements, not a FAR $20 rule."),
        fillBlank("p03-1-4", "Government business shall be conducted in a manner above _____ per FAR 3.101-1.", ["reproach", "budget", "protest", "option"], 0, "FAR 3.101-1 requires conduct above reproach with impartiality."),
        q("p03-1-5", "When offered protected source selection information, a contractor should:", ["Use it to win", "Refuse it, stop the conversation, document, and consult ethics counsel", "Share with teaming partners", "Post anonymously online"], 1, "Best practice aligned with FAR 3.104—refuse protected information and escalate."),
        tf("p03-1-6", "Post-employment restrictions under procurement integrity limit certain communications by former agency officials with their former agency.", true, "FAR 3.104-2 implements post-employment restrictions for covered officials."),
      ],
      { farPart: 3, farReferences: ["FAR 3.101", "FAR 3.104", "FAR 3.301"] }
    ),
    proLesson(
      MODULE_ID, TRACK, "3.2", "Business Ethics Programs and Kickbacks",
      ["Implement FAR 3.201-209 and FAR 52.203-13 requirements", "Define kickbacks under FAR 3.501", "Execute reporting requirements under 3.502-503"],
      [
        { citation: "FAR 52.203-13(c)", text: "The Contractor shall establish and maintain an ongoing business ethics awareness and compliance program and internal control system that are suitable to the size of the company and volume of Government contracting." },
        { citation: "FAR 3.502-1", text: "Kickbacks include any money, fee, commission, credit, gift, thing of value, or compensation of any kind which is provided to any prime contractor, prime contractor employee, subcontractor, or subcontractor employee for the purpose of improperly obtaining or rewarding favorable treatment." },
      ],
      ethicsProgramSections,
      "If FAR 52.203-13 is in your contract, maintain a written ethics code, annual training records, internal controls, and a disclosure process for credible evidence of violations. Flow ethics requirements to subs. Investigate kickback rumors immediately—primes are liable for sub misconduct affecting government contracts.",
      "Agencies expect contractors to self-police. COs may consider ethics program adequacy in responsibility determinations. Kickback investigations trigger DCIS, OIG, and DOJ involvement.",
      [
        { title: "Subcontractor referral fee", situation: "A sub offers your program manager a personal referral fee for steering a subcontract award on a prime contract.", whyItMatters: "FAR 3.502 defines kickbacks broadly—personal payments for favorable treatment violate the Anti-Kickback Act and company ethics policy." },
        { title: "Mandatory disclosure trigger", situation: "Internal audit finds credible evidence that billing included knowingly false labor hours on a cost-type CLIN.", whyItMatters: "FAR 52.203-13 requires disclosure of credible evidence of significant overpayments or False Claims Act violations." },
      ],
      [
        { violation: "No written ethics code on contract with FAR 52.203-13", consequence: "Non-compliance with contract terms; negative responsibility assessment; potential suspension." },
        { violation: "Ignoring employee report of sub kickback scheme", consequence: "Anti-Kickback Act liability; False Claims Act treble damages if billing affected." },
      ],
      [
        q("p03-2-1", "FAR 52.203-13 requires contractors to maintain:", ["Only oral ethics guidance", "Written code of business ethics and internal control system", "Unlimited gift budgets", "Waivers for all subs"], 1, "FAR 52.203-13(c) mandates written ethics program and internal controls scaled to company size."),
        q("p03-2-2", "Kickbacks under FAR 3.502 include:", ["Only cash payments", "Any thing of value for improperly obtaining favorable treatment", "Market research reports", "Approved trade show attendance"], 1, "FAR 3.502-1 defines kickbacks broadly to include any thing of value for improper favorable treatment."),
        tf("p03-2-3", "Prime contractors must report suspected kickbacks under FAR 3.503.", true, "FAR 3.503 requires reporting suspected kickbacks to the agency Inspector General or law enforcement."),
        fillBlank("p03-2-4", "Contractors must disclose credible evidence of _____ violations under FAR 52.203-13(b)(3).", ["False Claims Act", "state tax", "CPARS", "option"], 0, "FAR 52.203-13(b)(3) requires disclosure of credible evidence of False Claims Act violations among other violations."),
        q("p03-2-5", "Business ethics training under FAR 52.203-13 must be:", ["Optional for executives only", "Ongoing and suitable to company size and contract volume", "Eliminated after first award", "Delegated entirely to government"], 1, "FAR 52.203-13(c)(2) requires ongoing ethics awareness and compliance training."),
        q("p03-2-6", "Anti-Kickback Act violations can result in:", ["Automatic contract extension", "Civil and criminal penalties", "CPARS Exceptional rating", "SAM bonus points"], 1, "41 U.S.C. Anti-Kickback Act provides civil and criminal remedies for kickbacks on government contracts."),
      ],
      { farPart: 3, farReferences: ["FAR 3.201", "FAR 3.501", "FAR 52.203-13"] }
    ),
    proLesson(
      MODULE_ID, TRACK, "3.3", "Government Employee Contracts, Voiding, and Whistleblowers",
      ["Apply FAR 3.601-606 restrictions on contracting with government employees", "Explain voiding authority under 3.701-706", "Apply whistleblower protections under 3.901-906"],
      [
        { citation: "FAR 3.601-1", text: "Agencies shall not enter into contracts with Government employees or with business concerns owned or substantially owned or controlled by Government employees, except as specifically provided by law or regulation." },
        { citation: "FAR 3.704", text: "When a contract is voided, the Government may recover amounts expended under the contract and the contractor shall be liable to the Government for those amounts." },
        { citation: "FAR 3.906", text: "Contractors and subcontractors shall inform employees in writing of employee whistleblower rights and remedies under 41 U.S.C. 4712." },
      ],
      employeeContractSections,
      "Screen new hires and consultants for recent federal employment. Teaming agreements should represent that partners are not current agency employees with conflicts. Maintain whistleblower non-retaliation policy and post required notices—retaliation creates separate liability beyond the underlying fraud.",
      "Agencies void tainted contracts and recover payments. IG and law enforcement coordinate on fraud cases. Whistleblower protections encourage internal reporting before qui tam filings.",
      [
        { title: "Former KO joins contractor", situation: "Recently retired KO joins your firm and immediately leads capture on their former agency's recompete.", whyItMatters: "Post-employment and 3.601 restrictions may prohibit or limit activity; failure to clear restrictions voids awards and triggers investigations." },
        { title: "Employee retaliation", situation: "Manager demotes employee who reported fraudulent billing to the IG hotline.", whyItMatters: "FAR 3.906 and 41 U.S.C. 4712 protect whistleblowers—retaliation creates independent liability and damages morale/compliance culture." },
      ],
      [
        { violation: "Awarding sub to company owned by active agency employee", consequence: "Contract voidable under FAR 3.704; debarment; recovery of government expenditures." },
        { violation: "Retaliating against employee who disclosed fraud to Inspector General", consequence: "Whistleblower reprisal liability under 41 U.S.C. 4712; reinstatement and compensatory damages." },
      ],
      [
        q("p03-3-1", "FAR 3.601 generally prohibits contracts with:", ["Large businesses", "Government employees and their business concerns", "Foreign nationals only", "All subcontractors"], 1, "FAR 3.601-1 restricts contracting with government employees and their business concerns except as authorized."),
        q("p03-3-2", "When a contract is voided under FAR 3.704, the government may:", ["Pay double the contract price", "Recover amounts expended under the contract", "Ignore fraud", "Automatically recompete"], 1, "FAR 3.704 allows government recovery of amounts expended when contract is voided."),
        tf("p03-3-3", "Contractors must inform employees in writing of whistleblower rights under FAR 3.906.", true, "FAR 3.906 requires written notification of 41 U.S.C. 4712 whistleblower rights."),
        fillBlank("p03-3-4", "Contracts procured through bribery or conflict of interest may be _____ or rescinded under FAR Subpart 3.7.", ["voided", "extended", "protested only", "classified"], 0, "FAR 3.701-706 authorize voiding or rescinding tainted contracts."),
        q("p03-3-5", "Whistleblower protections under 41 U.S.C. 4712 apply to:", ["Only federal employees", "Contractor and subcontractor employees making protected disclosures", "Only KOs", "Foreign contractors only"], 1, "FAR 3.901-906 implement whistleblower protections for contractor/subcontractor employees."),
        q("p03-3-6", "Voiding a contract for fraud means:", ["Contract remains valid with penalty fee", "Government may treat contract as invalid from inception and recover payments", "Contractor keeps all payments", "Only COR is liable"], 1, "Void ab initio treats contract as invalid; FAR 3.704 enables recovery of expended amounts."),
      ],
      { farPart: 3, farReferences: ["FAR 3.601", "FAR 3.701", "FAR 3.901"] }
    ),
  ],
  { farPart: 3 }
);
