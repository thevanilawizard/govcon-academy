import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_8: TrainingModule = {
  id: "ethics",
  number: 8,
  title: "Ethics and Compliance",
  description:
    "Build an ethical compliance culture for federal contracting: procurement integrity, gifts and gratuities, organizational conflicts of interest, False Claims Act liability, and mandatory business ethics programs under FAR 52.203-13.",
  careerOutcomes: [
    "Apply procurement integrity rules during capture and proposal phases",
    "Recognize False Claims Act exposure in billing, pricing, and performance reporting",
    "Implement FAR 52.203-13 business ethics and compliance program requirements",
    "Train staff on reporting channels, internal controls, and government investigation response",
    "Protect corporate reputation and eligibility through proactive ethics governance",
  ],
  lessons: [
    lesson(
      "ethics",
      "8.1",
      "Ethics in Federal Contracting",
      [
        "Apply FAR Part 3 procurement integrity and post-employment restrictions",
        "Navigate gifts, gratuities, and hospitality rules with government personnel",
        "Identify and mitigate organizational conflicts of interest under FAR 9.5",
        "Establish internal ethics training and disclosure programs for capture and performance staff",
      ],
      [
        {
          heading: "Procurement Integrity Act and FAR Part 3",
          content:
            "The Procurement Integrity Act (PIA), implemented through FAR Subpart 3.1 and 3.104, protects the integrity of the federal acquisition process. Contractors and their employees may not obtain or disclose contractor bid or proposal information or source selection information before contract award. After award, former agency officials face post-employment restrictions on communicating with their former agency on behalf of contractors on certain matters. Violations carry civil penalties up to $100,000 per violation and criminal sanctions. Contracts and BD staff must train teams before every proposal: do not ask for competitor pricing, draft evaluation results, or protected source selection documents. Document all agency interactions during capture.",
        },
        {
          heading: "Gifts, Gratuities, and Hospitality",
          content:
            "FAR 3.101-2 prohibits contractors from providing gifts, gratuities, or hospitality intended to influence government acquisition decisions. Agency supplemental regulations and standards of ethical conduct impose stricter limits—often a $20 de minimis threshold for gifts from contractors to government employees. Meals, event tickets, travel, and entertainment require scrutiny. Holiday gift baskets, golf outings, and conference sponsorships have triggered investigations. Contracts managers publish clear company policies: when in doubt, decline or seek ethics officer approval. Log all customer-facing hospitality in a central register. A $500 dinner with a source selection official can disqualify a proposal and end careers.",
        },
        {
          heading: "Organizational Conflicts of Interest (OCI)",
          content:
            "FAR Subpart 9.5 addresses organizational conflicts of interest that may arise when a contractor's work gives unfair competitive advantage, impairs objectivity, or creates biased ground rules. Common OCI scenarios: systems engineering and technical assistance (SETA) contractors competing on follow-on work; consultants who helped write requirements bidding on the resulting RFP; access to competitor proprietary data through teaming. Mitigation plans—firewalls, recusal, data segregation, or divestiture—must be proposed before award. Uncured OCIs lead to protest, termination, and debarment. Contracts professionals screen every capture opportunity against the company's OCI registry and prior advisory work on the same program.",
        },
        {
          heading: "Ethical Capture and Customer Engagement",
          content:
            "Lawful capture includes market research, industry days, RFIs, and white papers that inform agency needs. Unlawful capture includes obtaining competitor proposal information, coaching evaluators on scoring, or leveraging non-public agency data from a former employee who has not cleared post-employment restrictions. One-on-one meetings require careful preparation: stick to publicly available information and documented agency questions. Contracts managers attend capture meetings to flag ethics boundaries in real time. When an agency official offers inappropriate information, stop the conversation, document the event, and consult counsel—continuing the conversation can implicate both parties.",
        },
        {
          heading: "Building an Ethics Culture",
          content:
            "Ethics compliance is not a annual checkbox—it is embedded in BD, proposals, subcontracting, invoicing, and reporting. Leadership tone matters: executives who pressure staff to 'find a way' on billing or competitor intelligence create liability. Mandatory annual ethics training, a confidential hotline, non-retaliation policy, and visible enforcement of standards protect the organization. Contracts managers should integrate ethics checkpoints into gate reviews: capture approval, proposal pink team, invoice certification, and CPARS response. Document training completion and investigation outcomes for DCMA, agency ethics offices, and qui tam defense.",
        },
      ],
      "Review your company's gift and hospitality policy against FAR 3.101-2 and your top customer agency's ethics rules. Send a one-page refresher to all BD and contracts staff before the next customer event.",
      [
        {
          ...q(
            "8-1-1",
            "FAR 3.104 primarily restricts:",
            [
              "Employee vacation scheduling",
              "Disclosure or receipt of contractor bid/proposal and source selection information before award",
              "Use of commercial email systems",
              "Subcontractor logo placement",
            ],
            1,
            "FAR 3.104 implements Procurement Integrity Act protections for sensitive acquisition information."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-1-2",
            "Organizational conflicts of interest under FAR Subpart 9.5 may require mitigation plans such as firewalls or recusal.",
            true,
            "FAR 9.5 requires identification and mitigation of OCIs that could impair fair competition."
          ),
          examCategory: "ethics",
        },
        {
          ...scenario(
            "8-1-3",
            "A capture manager learns a competitor's proposed price from a government employee during source selection. What should the contracts manager direct?",
            [
              "Use the information to undercut the competitor's price",
              "Stop the conversation, refuse the information, document the incident, and consult ethics counsel",
              "Share the data with the proposal pricing team immediately",
              "Post the information on social media",
            ],
            1,
            "Procurement integrity prohibits obtaining or using protected source selection information; document and escalate."
          ),
          examCategory: "ethics",
        },
        {
          ...q(
            "8-1-4",
            "Gifts to government acquisition officials intended to influence contract decisions are:",
            [
              "Encouraged during the holidays",
              "Prohibited under FAR 3.101-2 and related agency ethics rules",
              "Unlimited if under $500",
              "Allowed if the COR approves verbally",
            ],
            1,
            "FAR 3.101-2 prohibits gratuities intended to influence acquisition outcomes."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-1-5",
            "Ethics training should be integrated into capture gate reviews, proposal milestones, and invoice certification workflows.",
            true,
            "Embedding ethics checkpoints operationalizes compliance beyond annual training."
          ),
          examCategory: "ethics",
        },
      ],
      {
        realWorldExercise:
          "Conduct an OCI screening on your top three pipeline opportunities. For each, document prior company work on the program, access to competitor data, and whether a mitigation plan is needed before bid submission.",
        martinPrompt:
          "Explain ethics in federal contracting for a BD director preparing for a $40M Army recompete. Cover FAR 3.104 procurement integrity, gift rules, OCI under FAR 9.5 with a SETA example, and one real-world enforcement outcome. Give me three ethics checkpoints to add to our capture gate review.",
      }
    ),
    lesson(
      "ethics",
      "8.2",
      "False Claims Act",
      [
        "Understand False Claims Act liability for knowing false submissions to the government",
        "Identify high-risk FCA scenarios in invoicing, cost reporting, and performance certifications",
        "Distinguish FCA civil penalties from criminal fraud and administrative remedies",
        "Implement compliance controls and response protocols for FCA investigations and qui tam suits",
      ],
      [
        {
          heading: "False Claims Act Framework",
          content:
            "The False Claims Act (FCA), 31 U.S.C. § 3729 et seq., imposes liability on anyone who knowingly submits or causes submission of false or fraudulent claims for payment to the United States. 'Knowingly' includes actual knowledge, deliberate ignorance, or reckless disregard of truth. Violations expose contractors to treble damages plus civil penalties per false claim (amount adjusted for inflation). The government or relators (whistleblowers) may bring qui tam actions; relators share in recoveries, creating strong incentives to report internal misconduct. FCA applies across all federal spending—healthcare, grants, and defense contracts. A single falsified labor invoice or inflated progress payment request can trigger multi-million dollar cases.",
        },
        {
          heading: "Common FCA Scenarios in GovCon",
          content:
            "High-risk areas include: billing for unperformed work or unapproved costs; charging unallowable costs to government contracts; misrepresenting compliance with contract requirements (cyber, Buy American, small business subcontracting); defective pricing under TINA submitted with knowledge of inaccuracy; and false certifications on invoices, representations, or CPARS-related performance reports. Cross-charging—billing the same hours to two contracts—is a recurring FCA fact pattern. Progress payment requests on undelivered work, inflated material costs, and ghost employees on timesheets have produced billion-dollar settlements. Contracts managers review invoice certifications knowing the certifier assumes FCA exposure.",
        },
        {
          heading: "FCA versus Other Remedies",
          content:
            "FCA is civil—not every billing error is an FCA violation. Negligent mistakes corrected upon discovery may be addressed through administrative repayment without FCA escalation. Defective pricing under FAR 15.407-1 is a contractual remedy unless the government proves knowing falsity. Criminal fraud under 18 U.S.C. § 287 requires intent to defraud. Suspension and debarment under FAR Subpart 9.4 address present responsibility separately from FCA damages. Understanding the spectrum helps compliance teams calibrate response: voluntary disclosure, repayment, and cooperation may reduce FCA exposure; concealment amplifies it.",
        },
        {
          heading: "Qui Tam and Investigation Response",
          content:
            "Relators file qui tam complaints under seal; the government investigates before deciding to intervene. Contractors may learn of investigations through CID (civil investigative demand), subpoena, or employee interviews. Upon notice: preserve documents immediately, engage experienced FCA counsel, notify insurers, suspend routine document destruction, and avoid retaliation against suspected whistleblowers. Internal investigation should run parallel under attorney-client privilege. Contracts and finance must not alter records or coach witnesses. Companies with robust compliance programs and voluntary self-disclosure may receive cooperation credit in settlement negotiations.",
        },
        {
          heading: "Preventive Controls",
          content:
            "Prevent FCA exposure through: segregated unallowable cost accounts; dual approval on invoice submissions; labor floor checks and timekeeping audits; subcontractor invoice verification against deliverable acceptance; TINA data validation before certification; and training on the meaning of invoice certifications. The certifying official under FAR 52.212-4 or agency equivalents attests that claims are true and correct—train certifiers on personal liability. Monthly contract status reviews comparing billed to performed work catch drift before it becomes an FCA pattern. Document corrective actions when internal audits find errors.",
        },
      ],
      "Review your invoice certification workflow. Identify who signs, what they verify, and whether training covers FCA exposure. Schedule a 30-minute briefing with certifying officials this month.",
      [
        {
          ...q(
            "8-2-1",
            "False Claims Act liability requires submission of false claims with:",
            [
              "Accidental typographical errors only",
              "Knowledge—including deliberate ignorance or reckless disregard of truth",
              "Approval from the COR",
              "Competition from three offerors",
            ],
            1,
            "31 U.S.C. § 3729(b)(1) defines 'knowingly' to include actual knowledge, deliberate ignorance, or reckless disregard."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-2-2",
            "Qui tam relators may file False Claims Act suits on behalf of the government and share in recoveries.",
            true,
            "FCA qui tam provisions authorize whistleblower suits with relator share of recovery."
          ),
          examCategory: "ethics",
        },
        {
          ...scenario(
            "8-2-3",
            "Finance discovers project managers routinely charging the same 8 hours to two government contracts. Billing has continued for six months. What is the contracts manager's priority?",
            [
              "Ignore because both contracts are with the same agency",
              "Stop the practice immediately, quantify exposure, notify leadership and counsel, and initiate corrective repayment",
              "Wait for DCAA to find it first",
              "Transfer employees to commercial work without review",
            ],
            1,
            "Cross-charging is a classic FCA fact pattern; immediate cessation, quantification, and counsel engagement are essential."
          ),
          examCategory: "ethics",
        },
        {
          ...q(
            "8-2-4",
            "FCA penalties may include:",
            [
              "Only a written warning",
              "Treble damages plus civil monetary penalties per false claim",
              "Automatic contract extension",
              "Mandatory award fee reduction only",
            ],
            1,
            "FCA authorizes treble damages and per-claim civil penalties for knowing false claims."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-2-5",
            "Voluntary disclosure and cooperation may reduce False Claims Act exposure in settlement negotiations.",
            true,
            "Proactive disclosure and remediation are factors in government FCA enforcement discretion."
          ),
          examCategory: "ethics",
        },
      ],
      {
        realWorldExercise:
          "Map your top five FCA risk areas (billing, labor charging, TINA, compliance certifications, sub invoicing) to existing internal controls. Identify one control gap and propose a remediation with owner and deadline.",
        martinPrompt:
          "Explain False Claims Act risk for a contracts manager certifying monthly invoices on $35M of CPFF and T&M work. Cover 31 U.S.C. § 3729 elements, three common GovCon FCA scenarios with dollar examples, qui tam basics, and invoice certification liability. Recommend one preventive control to implement this week.",
      }
    ),
    lesson(
      "ethics",
      "8.3",
      "Contractor Code of Business Ethics (FAR 52.203-13)",
      [
        "Determine applicability of FAR 52.203-13 based on contract value and performance period",
        "Implement required business ethics awareness and compliance program elements",
        "Establish internal control systems and disclosure obligations for misconduct",
        "Conduct periodic ethics training and maintain evidence for government review",
      ],
      [
        {
          heading: "FAR 52.203-13 Applicability",
          content:
            "FAR 52.203-13 (Contractor Code of Business Ethics and Conduct) applies to contracts exceeding $5.5 million (verify current threshold in FAR 52.203-13) with a performance period of 120 days or more, unless waived. The clause requires contractors to establish a written code of business ethics and conduct, make the code available to all employees, and exercise due diligence to prevent and detect violations. Noncompliance may affect past performance evaluations and present responsibility determinations. Prime contractors must flow down the substance of the clause to subcontractors performing subcontracts exceeding $500,000 (verify current flow-down threshold). Contracts managers verify clause presence in awards and track flow-down to major subs.",
        },
        {
          heading: "Required Program Elements",
          content:
            "An acceptable program includes: (1) a written code of business ethics and conduct covering corruption, conflicts of interest, billing integrity, and procurement integrity; (2) periodic ethics training for employees and subcontractors as appropriate; (3) internal control systems reasonably suited to detect and prevent improper conduct; (4) reporting mechanisms such as a hotline or website for confidential reporting; (5) disciplinary actions for violations; and (6) timely disclosure to the agency Office of Inspector General and contracting officer of credible evidence of violation of federal criminal law involving fraud, conflict of interest, bribery, or gratuity violations, or violation of the Civil False Claims Act in connection with the contract. Element (6) is mandatory—not discretionary.",
        },
        {
          heading: "Internal Controls and Disclosure",
          content:
            "Internal controls translate policy into operational checks: segregation of invoice approval, labor time audit sampling, sub invoice matching to deliverables, TINA review checklists, and OCI screening at capture. Disclosure obligations trigger when internal investigation confirms credible evidence of covered violations—not on every rumor. Upon trigger: notify the agency OIG and contracting officer within the timeframe specified in the clause (typically within 14 business days of confirmation). Coordinate with legal before disclosure. Failure to disclose when required is itself a compliance failure and may appear in suspension or debarment proceedings. Document investigation files, remediation, and disciplinary outcomes.",
        },
        {
          heading: "Training and Subcontractor Flow-Down",
          content:
            "Annual ethics training must reach employees who perform on or manage government contracts. Training content should cover the code, reporting channels, FCA basics, procurement integrity, and real company examples (anonymized). Subcontractors above the flow-down threshold must adopt comparable programs or comply with the prime's code as specified in the subcontract. Prime contractors remain accountable for monitoring sub compliance on ethics matters material to the prime's contract. Include ethics flow-down language in subcontract templates and verify acknowledgment during sub kickoff. A sub's FCA violation on your prime contract can trigger prime disclosure obligations.",
        },
        {
          heading: "Government Oversight and Past Performance",
          content:
            "Agencies may request evidence of ethics program implementation during source selection, post-award surveys, or misconduct investigations. CPARS may reference ethics failures. DCMA and OIG reviews assess whether the contractor maintained effective internal controls. Maintain an ethics program file: current code, training rosters, hotline logs (redacted), investigation summaries, disclosure correspondence, and board or executive certifications of program review. Contracts managers participate in annual program assessments and recommend improvements when audit or investigation trends reveal weak points—typically in labor charging, sub oversight, or capture activities.",
        },
      ],
      "Verify FAR 52.203-13 is in your template prime contract and subcontract flow-downs. Confirm your written code is published to all employees and schedule the next annual ethics training with attendance tracking.",
      [
        {
          ...q(
            "8-3-1",
            "FAR 52.203-13 applies to contracts generally exceeding:",
            [
              "$10,000 with any performance period",
              "$5.5 million with a performance period of 120 days or more",
              "$1 million regardless of period",
              "Only classified contracts",
            ],
            1,
            "52.203-13 prescribes applicability thresholds for business ethics program requirements—verify current dollar value in the clause."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-3-2",
            "Contractors must disclose credible evidence of certain criminal violations and False Claims Act violations to the agency OIG and contracting officer.",
            true,
            "52.203-13(b)(3)(ii) mandates timely disclosure of credible evidence of specified violations."
          ),
          examCategory: "ethics",
        },
        {
          ...scenario(
            "8-3-3",
            "An internal audit confirms a project lead knowingly billed 200 hours of unperformed work to a DoD contract. The amount is $18,000. What must the company do under FAR 52.203-13?",
            [
              "Handle internally with a verbal warning only",
              "Disclose to the agency OIG and contracting officer, remediate billing, and discipline responsible personnel",
              "Wait until DCAA discovers it during ICS",
              "Transfer the employee without disclosure",
            ],
            1,
            "Confirmed credible evidence of FCA-related fraud triggers mandatory disclosure under 52.203-13."
          ),
          examCategory: "ethics",
        },
        {
          ...q(
            "8-3-4",
            "A FAR 52.203-13 compliant program must include:",
            [
              "Only a website privacy policy",
              "Written code, periodic training, internal controls, reporting mechanism, and disclosure obligations",
              "Executive compensation caps",
              "Mandatory union membership",
            ],
            1,
            "52.203-13 enumerates required elements of the contractor business ethics and compliance program."
          ),
          examCategory: "ethics",
        },
        {
          ...tf(
            "8-3-5",
            "Prime contractors must flow down the substance of FAR 52.203-13 to qualifying subcontractors.",
            true,
            "52.203-13(d) requires flow-down to subcontracts at or above the specified threshold."
          ),
          examCategory: "ethics",
        },
      ],
      {
        realWorldExercise:
          "Audit your FAR 52.203-13 compliance file: locate the written code, last training roster, hotline poster, disclosure procedure, and subcontract flow-down language. Score each element pass/fail and assign remediation owners for any gaps.",
        martinPrompt:
          "Explain FAR 52.203-13 for a contracts manager at a $120M DoD prime. Cover applicability thresholds, all six program elements, mandatory disclosure triggers with a sample scenario, and subcontract flow-down requirements. Provide a compliance file checklist I can use before the next CPARS cycle.",
      }
    ),
  ],
};
