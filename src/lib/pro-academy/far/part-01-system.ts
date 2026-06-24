import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-01";

const guidingPrinciplesSections: TrainingSection[] = [
  {
    heading: "1.102 — Vision and guiding principles",
    content:
      "The Federal Acquisition System delivers best-value products and services to the customer while maintaining public trust. The acquisition team must conduct business with integrity, fairness, and transparency; satisfy customer needs; maximize competition; and use commercial practices where practicable. These principles are not aspirational slogans—they drive protest outcomes, source selection documentation, and how COs justify tradeoffs.",
  },
  {
    heading: "1.102-2 — Best value and performance",
    content:
      "Best value means the expected outcome of an acquisition that provides the greatest overall benefit in response to the requirement. Price is not always the deciding factor. The government may pay more when technical superiority, past performance, or reduced risk justifies the premium. Contractors must map proposal strengths to evaluation factors; evaluators must document why a higher-priced offer represents greater benefit to the government.",
  },
  {
    heading: "1.301 — Agency acquisition regulations",
    content:
      "Agencies may issue FAR supplements (DFARS, HHSAR, GSAM, etc.) only to implement or supplement FAR policy—they cannot contradict the FAR. Supplements must be cleared through the FAR Council when they deviate from FAR policy. Contractors on defense work live under FAR + DFARS; civilian agencies may add their own layers. Always read the full clause stack, not FAR alone.",
  },
];

const coAuthoritySections: TrainingSection[] = [
  {
    heading: "1.602 — Contracting officer authority",
    content:
      "Only a contracting officer acting within the limits of their warrant may contractually bind the United States. Warrant limits are set by dollar value and contract type. Actions by CORs, program managers, or technical staff without CO authority do not obligate the government. Contractors who perform on unauthorized direction bear the risk of non-payment.",
  },
  {
    heading: "1.602-2 — Seven CO responsibilities",
    content:
      "COs must: (1) satisfy customer requirements consistent with FAR policy; (2) manage available funds; (3) ensure full and open competition where required; (4) treat offerors fairly and impartially; (5) demand integrity in all acquisition participants; (6) maximize small business participation; and (7) select contractors responsible to perform. Each duty creates audit and protest exposure if neglected.",
  },
  {
    heading: "1.602-3 — Ratification of unauthorized commitments",
    content:
      "When someone without authority commits the government, the agency may ratify the commitment if it was within available funds and otherwise proper. Ratification requires a written request, legal review, and approval by a CO with authority at least one level above the ratifying official. Ratification is not guaranteed—contractors cannot rely on it as a business strategy.",
  },
  {
    heading: "1.603 — Appointment and termination of CO authority",
    content:
      "Agencies select, appoint, and terminate contracting officers in writing. Appointment letters specify warrant level and limitations. Termination of warrant immediately ends bind authority. Contractors should verify the signing CO's authority on large or unusual actions.",
  },
  {
    heading: "1.604 — Contracting Officer's Representatives",
    content:
      "CORs are appointed in writing to monitor technical performance—they do not have authority to change contract terms, authorize overtime outside the PWS, or bind the government to additional scope. COR direction is not a contract modification. Liability for unauthorized commitments falls on the government employee who exceeded authority, not the contractor—unless the contractor knew or should have known the person lacked authority.",
  },
];

export const FAR_PART_01 = proModule(
  MODULE_ID,
  TRACK,
  1,
  "FAR Part 1 — The Federal Acquisition System",
  "Master the vision, guiding principles, agency supplement rules, and contracting officer authority framework that governs every federal acquisition.",
  [
    "Explain FAR guiding principles and best-value mandate in source selection interviews",
    "Identify when agency supplements apply and how they interact with the FAR",
    "Distinguish CO authority from COR technical direction on active contracts",
    "Recognize unauthorized commitment risk and ratification limits",
  ],
  [
    proLesson(
      MODULE_ID,
      TRACK,
      "1.1",
      "Guiding Principles and Agency Regulations",
      [
        "Apply FAR 1.102 guiding principles to acquisition decisions",
        "Explain best value under FAR 1.102-2 beyond lowest price",
        "Determine when agency FAR supplements are permitted under 1.301",
      ],
      [
        {
          citation: "FAR 1.102",
          text: "The vision of the Federal Acquisition System is to deliver best value products or services to the customer. The System will simplify and streamline the acquisition process, and promote competition.",
        },
        {
          citation: "FAR 1.102-2",
          text: "The acquisition team shall use the best business practices and commercial practices to the maximum extent practicable. Best value must be achieved.",
        },
        {
          citation: "FAR 1.301",
          text: "Agency acquisition regulations shall implement or supplement the policies and procedures in the FAR. Agency acquisition regulations shall not deviate from the FAR.",
        },
      ],
      guidingPrinciplesSections,
      "Your proposals must align with evaluation factors that reflect best value—not just lowest price. When an agency cites commercial practices, tailor your solution to catalog offerings and market pricing. Track which FAR supplements apply to your customer (DFARS for DoD) and flow those requirements into compliance matrices.",
      "COs must document how their acquisition satisfies guiding principles and achieves best value. They cannot issue internal policies that contradict the FAR. Supplemental regulations like DFARS add mandatory clauses and procedures that the acquisition team must follow without exception.",
      [
        {
          title: "Best value tradeoff on a recompete",
          situation:
            "Your firm bids $2.1M on an IT support recompete. The incumbent bids $1.95M with a Satisfactory CPARS. Your CPARS is Exceptional and your technical approach reduces help desk tickets by 30% per the agency's own metrics.",
          whyItMatters:
            "Under FAR 1.102-2, the SSA may award to you at higher price if the documented benefit exceeds the price premium. Your proposal must quantify operational savings to give evaluators a defensible tradeoff narrative.",
        },
        {
          title: "DFARS clause you did not expect",
          situation:
            "A civilian agency issues an RFP citing FAR Part 12, but the contract includes DFARS 252.204-7012 because the work supports a DoD program office.",
          whyItMatters:
            "Agency supplements implement FAR policy for specific contexts. You must comply with the full incorporated clause set regardless of which agency issued the solicitation.",
        },
      ],
      [
        {
          violation: "Pricing to win on LPTA without reading evaluation methodology",
          consequence:
            "Gold-plated technical volumes wasted; lost bid. FAR 1.102-2 best value applies even when price is heavily weighted—failure to align proposal to stated factors is a common capture error.",
        },
        {
          violation: "Ignoring agency supplement requirements in compliance matrix",
          consequence:
            "Non-responsive proposal or post-award compliance failure. FAR 1.301 makes supplements mandatory where incorporated.",
        },
      ],
      [
        q("p01-1-1", "FAR 1.102 establishes that the acquisition system must:", ["Eliminate all competition", "Deliver best value products or services", "Use sealed bidding exclusively", "Waive small business goals"], 1, "FAR 1.102 states the vision of delivering best value while simplifying acquisition and promoting competition."),
        tf("p01-1-2", "Under FAR 1.102-2, best value always means the lowest priced offer.", false, "FAR 1.102-2 requires best value achievement—price is one factor among technical merit, past performance, and risk."),
        q("p01-1-3", "Agency acquisition regulations under FAR 1.301 may:", ["Contradict the FAR when approved by the contractor", "Implement or supplement FAR policies without deviating from the FAR", "Replace the FAR entirely for commercial items", "Eliminate competition requirements"], 1, "FAR 1.301 limits supplements to implementation or supplementation—they cannot deviate from FAR policy."),
        fillBlank("p01-1-4", "The acquisition team shall use _____ practices to the maximum extent practicable per FAR 1.102-2.", ["commercial", "foreign", "sole-source", "classified"], 0, "FAR 1.102-2 directs use of best business practices and commercial practices to the maximum extent practicable."),
        q("p01-1-5", "Which document layer sits directly below the FAR in the regulatory hierarchy?", ["State procurement codes", "Agency FAR supplements such as DFARS", "Contractor internal policies", "GAO decisions only"], 1, "Agency supplements like DFARS implement and supplement FAR policy per FAR 1.301."),
        tf("p01-1-6", "FAR guiding principles require acquisition team members to conduct business with integrity, fairness, and transparency.", true, "FAR 1.102 lists integrity, fairness, and transparency among core acquisition team responsibilities."),
      ],
      { farPart: 1, farReferences: ["FAR 1.102", "FAR 1.102-2", "FAR 1.301"] }
    ),
    proLesson(
      MODULE_ID,
      TRACK,
      "1.2",
      "Contracting Officer Authority and COR Limits",
      [
        "Define contracting officer bind authority under FAR 1.602",
        "List the seven CO responsibilities in FAR 1.602-2",
        "Explain unauthorized commitment ratification under 1.602-3",
        "Distinguish CO appointment under 1.603 from COR delegation under 1.604",
      ],
      [
        {
          citation: "FAR 1.602-1",
          text: "Contracting officers have authority to enter into, administer, or terminate contracts and make related determinations and findings. Contracting officers may bind the Government only to the extent of the authority delegated to them.",
        },
        {
          citation: "FAR 1.602-3(a)",
          text: "Ratification is the act of approving an unauthorized commitment by an official who has the authority to do so.",
        },
        {
          citation: "FAR 1.604",
          text: "Contracting Officer's Representatives are individuals designated in writing by the contracting officer to monitor contractor performance. CORs shall not be delegated authority to contractually bind the Government.",
        },
      ],
      coAuthoritySections,
      "Never begin out-of-scope work on COR verbal or email direction alone. Route change requests through a formal modification process signed by the CO. When a COR insists work is 'already approved,' ask for the SF-30 mod number. Document unauthorized direction to support a Request for Equitable Adjustment if the government later ratifies or denies payment.",
      "COs carry personal accountability for warrant compliance. Unauthorized commitments create fiscal law violations and audit findings. Agencies appoint CORs in writing with specific limitations; exceeding COR authority triggers ratification procedures or leaves the contractor unpaid.",
      [
        {
          title: "COR directs extra sprint without a mod",
          situation:
            "The COR emails your project lead: 'Add two developers for six weeks to meet the milestone—we need this done.' No SF-30 modification is issued. Your team performs the work.",
          whyItMatters:
            "FAR 1.604 limits CORs to monitoring performance. Without CO signature, the government has no contractual obligation to pay. GAO consistently holds contractors responsible for verifying KO authority before incurring costs.",
        },
        {
          title: "Ratification after unauthorized order",
          situation:
            "A program analyst without warrant ordered $80K in equipment. Delivery occurred. The agency legal office begins ratification under FAR 1.602-3.",
          whyItMatters:
            "Ratification requires funds availability, proper purpose, and approval by a higher-level CO. Until ratified, the contractor bears collection risk. Even successful ratification may take months.",
        },
      ],
      [
        {
          violation: "Performing COR-directed scope without CO-signed modification",
          consequence:
            "Unrecoverable costs or lengthy REA/claim process. Unauthorized obligation rules under FAR 1.602-3 do not guarantee payment.",
        },
        {
          violation: "Assuming any government employee can bind the agency",
          consequence:
            "Financial loss and potential CPARS hit for 'non-cooperation' if you refuse informally but perform without protection.",
        },
      ],
      [
        q("p01-2-1", "Who may contractually bind the United States?", ["Any federal employee", "Only a contracting officer within warrant limits", "Contractor program managers", "CORs with written technical authority"], 1, "FAR 1.602-1 limits bind authority to contracting officers acting within delegated warrant."),
        q("p01-2-2", "FAR 1.602-2 requires COs to:", ["Waive competition on all actions", "Ensure full and open competition where required", "Delegate bind authority to CORs", "Accept lowest price without evaluation"], 1, "FAR 1.602-2 lists ensuring full and open competition among the seven CO responsibilities."),
        q("p01-2-3", "Ratification of an unauthorized commitment under FAR 1.602-3 requires:", ["Automatic approval within 24 hours", "Written request, legal review, and CO approval at higher level", "Contractor waiver only", "COR signature"], 1, "FAR 1.602-3 sets formal ratification procedures including legal review and higher-level CO approval."),
        tf("p01-2-4", "A COR may contractually bind the Government if the COR has extensive technical expertise.", false, "FAR 1.604 explicitly states CORs shall not be delegated authority to contractually bind the Government."),
        fillBlank("p01-2-5", "CO warrant authority is established through written _____ under FAR 1.603.", ["appointment", "invoice", "protest", "CPARS"], 0, "FAR 1.603 governs selection, appointment, and termination of contracting officer authority in writing."),
        q("p01-2-6", "If a contractor performs on unauthorized COR direction and ratification is denied, the contractor typically:", ["Automatically receives payment under quantum meruit", "Bears the risk of non-payment for unauthorized work", "May unilaterally modify the contract", "Protests at GAO for automatic recovery"], 1, "Without CO authority or successful ratification, unauthorized work is not a binding government obligation."),
      ],
      { farPart: 1, farReferences: ["FAR 1.602", "FAR 1.602-2", "FAR 1.602-3", "FAR 1.603", "FAR 1.604"] }
    ),
  ],
  { farPart: 1 }
);
