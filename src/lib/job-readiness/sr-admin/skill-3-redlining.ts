import { exercise, lesson, q } from "./content-helpers";
import type { SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-3" as const;

const lessons = [
  lesson(
    "sr3-l1-redlining-basics",
    SKILL_ID,
    "What Redlining Is and How to Do It Professionally",
    [
      {
        heading: "Redlining Defined",
        content:
          "Redlining is the professional practice of marking up a contract document with proposed changes using tracked changes in Microsoft Word. It is the standard method for negotiating NDAs, teaming agreements, subcontracts, and contract modifications in government contracting. Your redlines represent your company's position — every change must be intentional, explained, and defensible.",
      },
      {
        heading: "Professional Standards and Color Conventions",
        content:
          "Always use Track Changes in MS Word — never manually highlight or handwrite changes on PDFs for negotiation purposes. Convention: your changes in one color (typically red or blue), the other party's changes in another. Never accept the other party's tracked changes without reviewing each one individually. Add comments explaining the business reason for every change — 'Changed indemnification cap to $1M because unlimited liability is unacceptable for a $500K subcontract.' Negotiation etiquette: send a redline summary document listing your top 5-10 changes with rationale.",
      },
      {
        heading: "When to Redline vs Accept As-Is",
        content:
          "Redline when: the document creates liability beyond standard market terms; flow-down clauses from the prime are missing or incorrect; workshare, IP, or payment terms don't match your agreement; or governing law/dispute resolution favors the other party unfairly. Accept as-is when: terms are market-standard for the document type; you have low negotiating leverage (small sub on a large prime contract); or the document is a government-mandated form you cannot change. When in doubt, redline with a comment explaining your concern — the worst outcome is they reject your change; the best is they accept it.",
      },
    ],
    [
      q("sr3-l1-q1", "Redlining in GovCon typically uses:", ["Handwritten notes on PDFs", "Track Changes in Microsoft Word", "Email only", "Verbal agreements"], 1, "Track Changes in Word is the professional standard for contract negotiations."),
      q("sr3-l1-q2", "Every redline change should include:", ["Nothing — changes speak for themselves", "A comment explaining the business reason", "Only the other party's approval", "A legal citation only"], 1, "Comments explaining business rationale facilitate negotiation and create audit trail."),
      q("sr3-l1-q3", "You should redline when:", ["Terms are market-standard and acceptable", "Document creates liability beyond standard market terms", "The document is a government-mandated form", "You have no negotiating leverage"], 1, "Redline when terms create unacceptable risk — not when terms are standard."),
      q("sr3-l1-q4", "When reviewing the other party's redlines:", ["Accept all changes immediately", "Review each change individually before accepting", "Ignore their changes", "Delete their document"], 1, "Never bulk-accept — review each change for impact on your obligations."),
      q("sr3-l1-q5", "A redline summary document should list:", ["Every word in the contract", "Top 5-10 changes with rationale", "Only accepted changes", "Employee names"], 1, "Summary documents focus negotiation on key issues with business justification."),
    ]
  ),
  lesson(
    "sr3-l2-nda-redlining",
    SKILL_ID,
    "Redlining NDAs (Non-Disclosure Agreements)",
    [
      {
        heading: "Definition of Confidential Information",
        content:
          "The most common NDA problem: definition is too broad — 'all information disclosed' captures everything including publicly available data. Redline to: specifically exclude publicly available information, information already known to the receiving party, and independently developed information. Add exclusion for ITAR-controlled information (requires separate handling under export control regulations). Insist on mutual NDAs when both parties share proprietary information — one-way NDAs favor the disclosing party unfairly in teaming situations.",
      },
      {
        heading: "Permitted Disclosures, Term, and Remedies",
        content:
          "Add permitted disclosures: to employees with need-to-know, to legal counsel, and as required by law or court order (with notice obligation to the disclosing party). Term: 1-2 years is standard for business NDAs. Push back on perpetual NDAs — trade secrets may warrant longer protection but general business information should not be protected forever. Remedies: injunctive relief is standard and acceptable. Push back on unlimited liability — propose a cap tied to contract value or a fixed dollar amount. Add certification of destruction upon request for return of information.",
      },
    ],
    [
      q("sr3-l2-q1", "An overly broad NDA definition should be redlined to exclude:", ["Nothing — accept as-is", "Publicly available, already known, and independently developed information", "Only employee names", "Contract numbers"], 1, "Standard exclusions prevent NDA from covering information that isn't truly confidential."),
      q("sr3-l2-q2", "ITAR-controlled information in an NDA should:", ["Be included in general confidential definition", "Be excluded and handled under separate export control procedures", "Be ignored", "Be shared freely"], 1, "ITAR requires separate handling — cannot be managed under a standard business NDA."),
      q("sr3-l2-q3", "Standard NDA term length is:", ["Perpetual", "1-2 years", "30 days", "10 years for all information"], 1, "1-2 years is market standard; perpetual NDAs should be negotiated down."),
      q("sr3-l2-q4", "For teaming situations, prefer:", ["One-way NDA", "Mutual NDA when both parties share information", "No NDA", "Verbal agreement only"], 1, "Mutual NDAs protect both parties in bid teaming where information flows both directions."),
      q("sr3-l2-q5", "Unlimited liability in NDA remedies should be:", ["Accepted without question", "Redlined to add a cap tied to contract value", "Ignored", "Increased"], 1, "Cap liability at a reasonable amount — unlimited exposure is unacceptable."),
    ],
    {
      exercise: exercise(
        "redline",
        "Redline a One-Sided NDA",
        "Review the sample one-sided NDA from Apex Technologies. Identify 5 problematic provisions and write your redlines with explanations.",
        {
          documentType: "nda",
          vendor: "Apex Technologies",
          problematicClauses: [
            {
              id: "nda-1",
              section: "1.1 Definition of Confidential Information",
              text: "All information disclosed by Disclosing Party, whether oral, written, or electronic, shall be deemed Confidential Information.",
              issue: "Overly broad — captures public information and independently developed data.",
              redline: "Add exclusions for publicly available information, information already known, and independently developed information.",
            },
            {
              id: "nda-2",
              section: "3.1 Term",
              text: "This Agreement shall remain in effect in perpetuity.",
              issue: "Perpetual term is non-standard for business NDAs.",
              redline: "Change to 2-year term with 3-year protection for trade secrets.",
            },
            {
              id: "nda-3",
              section: "2.1 Permitted Use",
              text: "Receiving Party may use Confidential Information solely for the purpose stated herein and shall not disclose to any third party.",
              issue: "Missing permitted disclosures to employees, counsel, and as required by law.",
              redline: "Add permitted disclosures to need-to-know employees, legal counsel, and as required by law with notice.",
            },
            {
              id: "nda-4",
              section: "5.1 Remedies",
              text: "Receiving Party shall be liable for all damages, including consequential and punitive damages, without limitation.",
              issue: "Unlimited liability including punitive damages.",
              redline: "Cap liability at $500,000; limit to direct damages; retain injunctive relief.",
            },
            {
              id: "nda-5",
              section: "6.1 Governing Law",
              text: "This Agreement shall be governed by the laws of Delaware.",
              issue: "One-sided governing law when both parties are sharing information.",
              redline: "Change to mutual governing law of Virginia (both parties' state) or federal law if ITAR involved.",
            },
          ],
        }
      ),
    }
  ),
  lesson(
    "sr3-l3-teaming-redlining",
    SKILL_ID,
    "Redlining Teaming Agreements",
    [
      {
        heading: "Work Share — The Most Disputed Provision",
        content:
          "Work share specifies the exact percentage or dollar amount each party performs. Distinguish revenue share from labor share — FAR 52.219-14 limitation on subcontracting applies to cost of contract performance, not revenue. Specify: exact percentage by PWS section if possible, what happens if scope changes after award, and how workshare adjusts if the government reduces scope. Example redline: 'Prime shall perform no less than 50% of the cost of contract performance excluding materials, per FAR 52.219-14.'",
      },
      {
        heading: "Exclusivity, Proposal Costs, and Post-Award Workshare",
        content:
          "Exclusivity: specify duration (typically through award + 90 days), what happens if eliminated from competition, and what happens if you win but don't award the sub work. Proposal costs: each party typically bears own costs; specify whether winning reimburses proposal costs. Post-award workshare is the most important clause — tie to specific PWS sections, contract type, POP, and key personnel. Include termination provisions: what happens if you don't win, if scope is reduced, or if sub fails to perform.",
      },
      {
        heading: "Governing Law and Disputes",
        content:
          "Prefer your state's law. Add mediation before litigation — GovCon disputes are expensive and mediation preserves the business relationship needed for ongoing contract performance. Include a non-compete limitation: sub cannot bid against you on this opportunity during the teaming period but is free to compete on other opportunities.",
      },
    ],
    [
      q("sr3-l3-q1", "Work share in a teaming agreement should:", ["Be vague to allow flexibility", "Specify exact percentage/dollar amount and tie to PWS sections", "Only address revenue split", "Be decided after award"], 1, "Specific workshare prevents disputes and ensures FAR 52.219-14 compliance."),
      q("sr3-l3-q2", "FAR 52.219-14 limitation on subcontracting applies to:", ["Revenue share", "Cost of contract performance excluding materials", "Total contract value", "Profit only"], 1, "The limitation applies to performance cost, not revenue — a critical distinction in workshare."),
      q("sr3-l3-q3", "Standard exclusivity duration in teaming is:", ["Permanent", "Through award plus 90 days", "1 day", "10 years"], 1, "Exclusivity typically covers the bid period through 90 days after award decision."),
      q("sr3-l3-q4", "Proposal cost provisions typically state:", ["Prime pays all costs", "Each party bears its own proposal preparation costs", "Government reimburses all costs", "Sub pays all costs"], 1, "Each party typically bears own bid costs unless otherwise negotiated."),
      q("sr3-l3-q5", "Post-award workshare should tie to:", ["Only total dollar value", "Specific PWS sections, contract type, POP, and key personnel", "Employee preferences", "Marketing plans"], 1, "Detailed post-award workshare prevents scope and performance disputes."),
    ],
    {
      exercise: exercise(
        "redline",
        "Redline a Teaming Agreement",
        "Review the sample teaming agreement with TechBridge Solutions. Identify 6 problematic provisions and write appropriate redlines.",
        {
          documentType: "teaming-agreement",
          partner: "TechBridge Solutions",
          problematicClauses: [
            { id: "ta-1", section: "3.1 Work Share", text: "Subcontractor shall receive approximately 40% of contract revenue.", issue: "Revenue share vs labor share confusion; no FAR 219-14 compliance.", redline: "Subcontractor shall perform 40% of cost of contract performance per PWS Sections 3.1-3.4, compliant with FAR 52.219-14." },
            { id: "ta-2", section: "4.1 Exclusivity", text: "Subcontractor shall not team with any other prime on similar opportunities indefinitely.", issue: "Perpetual exclusivity is unreasonable.", redline: "Exclusivity limited to this solicitation through award decision plus 90 days." },
            { id: "ta-3", section: "5.2 Post-Award", text: "Prime shall use best efforts to award subcontract to Subcontractor.", issue: "'Best efforts' is unenforceable — no guaranteed workshare.", redline: "Prime shall award Subcontractor a subcontract for PWS Sections 3.1-3.4 at FFP, matching prime contract POP." },
            { id: "ta-4", section: "6.1 Proposal Costs", text: "Subcontractor shall bear all proposal costs including prime's proposal preparation.", issue: "Sub paying prime's proposal costs is non-standard.", redline: "Each party bears its own proposal preparation costs." },
            { id: "ta-5", section: "8.1 Termination", text: "Prime may terminate this agreement at any time for any reason without liability.", issue: "One-sided termination without protection for sub's invested bid costs.", redline: "If prime terminates after sub has invested >$25K in proposal, prime reimburses documented costs." },
            { id: "ta-6", section: "9.1 Governing Law", text: "California law applies; disputes resolved exclusively in California courts.", issue: "Unfavorable forum if your company is in Virginia.", redline: "Virginia law applies; disputes subject to mediation then litigation in Virginia." },
          ],
        }
      ),
    }
  ),
  lesson(
    "sr3-l4-mod-redlining",
    SKILL_ID,
    "Contract Modifications — Reviewing and Processing",
    [
      {
        heading: "Administrative vs Bilateral Modifications",
        content:
          "Administrative mods (unilateral): change of CO/COR, change of contractor address, option exercise, in-scope change orders. Review even unilateral mods — confirm they don't inadvertently change financial or performance obligations. Bilateral mods require your signature: scope changes with equitable adjustment, price adjustments, POP extensions, key personnel changes, requirement waivers, claim settlements. Never sign a bilateral mod you haven't read completely.",
      },
      {
        heading: "10-Step Review Process Before Signing",
        content:
          "1. Read the mod completely — don't skim. 2. Identify exactly what is changing (scope, price, POP, clauses, personnel). 3. Compare changed language to current contract — use redline comparison in Word. 4. Check: does this change scope? Price? Both? 5. Is the equitable adjustment fair based on your cost/schedule impact analysis? 6. Does it affect subcontractors? Issue corresponding sub mod. 7. Are new clauses being added? Review each for flow-down requirements. 8. Does it affect other contract provisions (insurance, security, reporting)? 9. Update contract brief immediately after signing. 10. Notify finance of any funding changes for accounting system update.",
      },
    ],
    [
      q("sr3-l4-q1", "Before signing a bilateral mod, step 1 is:", ["Sign immediately", "Read the mod completely", "Notify the COR only", "Update CPARS"], 1, "Complete reading is step 1 — never sign without full review."),
      q("sr3-l4-q2", "If a bilateral mod affects subcontractors, you must:", ["Ignore sub impact", "Issue a corresponding subcontract modification", "Terminate the sub", "Wait until closeout"], 1, "Prime mods that change scope/price must cascade to affected subcontractors."),
      q("sr3-l4-q3", "After signing a bilateral mod:", ["File it later", "Update contract brief and notify finance immediately", "Discard the old contract", "Nothing required"], 1, "Post-signature: update brief, notify finance, file mod, issue sub mods."),
      q("sr3-l4-q4", "An equitable adjustment review assesses:", ["Only the KO's mood", "Whether price/schedule adjustment fairly compensates your impact", "Employee preferences", "Office location"], 1, "Equitable adjustment must fairly compensate documented cost and schedule impact."),
      q("sr3-l4-q5", "Even unilateral mods should be reviewed because:", ["They never change anything", "They may inadvertently change financial or performance obligations", "Only bilateral mods matter", "The COR handles all reviews"], 1, "Unilateral mods can contain errors affecting price, scope, or clauses."),
    ],
    {
      exercise: exercise(
        "redline",
        "Review a Problematic Bilateral Modification",
        "Review proposed bilateral Mod P00003 to contract W912HQ-24-C-0042. Identify 3 problems and explain what you would do before signing.",
        {
          documentType: "modification",
          contractId: "W912HQ-24-C-0042",
          modNumber: "P00003",
          problematicClauses: [
            {
              id: "mod-1",
              section: "Modification Description",
              text: "This modification adds cybersecurity monitoring services (PWS Section 5.0) with no price adjustment.",
              issue: "Scope increase with zero compensation — out-of-scope work added without equitable adjustment.",
              action: "Reject signature; submit REA documenting cost/schedule impact; request bilateral mod with fair price adjustment.",
            },
            {
              id: "mod-2",
              section: "Added Clause",
              text: "Adds DFARS 252.204-7012 with compliance deadline of 30 days from mod effective date.",
              issue: "CMMC Level 2 compliance cannot be achieved in 30 days — unrealistic deadline creates default risk.",
              action: "Redline deadline to 180 days; cite industry standard implementation timeline; escalate to legal.",
            },
            {
              id: "mod-3",
              section: "Period of Performance",
              text: "Extends POP 6 months but CLIN 0001 funding unchanged at $800K.",
              issue: "POP extension without additional funding on FFP contract — contractor bears extended performance cost.",
              action: "Request funding increase proportional to extended period; do not sign until CLIN 0001 is incremented.",
            },
          ],
        }
      ),
    }
  ),
];

export const SR_SKILL_3: SrAdminSkill = {
  id: SKILL_ID,
  number: 3,
  title: "Redlining — NDAs, Teaming Agreements, Mods",
  description: "Professional redlining techniques for NDAs, teaming agreements, and contract modifications.",
  lessons,
};
