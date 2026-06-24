import type { ScenarioDefinition } from "../types";

export const SCENARIOS: ScenarioDefinition[] = [
  {
    id: "scenario-01",
    number: 1,
    title: "The Unauthorized Commitment",
    setup:
      "Your Program Manager promised the Army COR that your team would deliver a custom analytics dashboard in 2 weeks — work not in the PWS and worth approximately $95,000. The COR expects delivery. The PM says 'we already committed, just get it done.'",
    teaches: ["FAR 1.602-3 ratification", "PM oversight", "Unauthorized commitments", "KO authority"],
    nodes: [
      {
        id: "s1-n1",
        prompt: "The PM asks you to assign developers today. What is your immediate response?",
        options: [
          {
            id: "s1-o1a",
            label: "Assign developers — customer relationship comes first",
            nextNodeId: "s1-n2a",
            consequence: "Team begins $95K of uncompensated work. Costs accumulate without funding or mod.",
          },
          {
            id: "s1-o1b",
            label: "Stop work and initiate ratification/REA process with KO",
            nextNodeId: "s1-n2b",
            isBest: true,
            consequence: "Work paused. You preserve cost recovery rights and comply with contract scope.",
          },
          {
            id: "s1-o1c",
            label: "Tell the COR the PM misspoke and refuse to engage",
            nextNodeId: "s1-n2c",
            consequence: "Customer relationship damaged without offering a compliance-based solution path.",
          },
        ],
      },
      {
        id: "s1-n2a",
        prompt: "Two weeks later, no mod has been issued and the customer is angry. Finance shows $78K in unbillable labor. What now?",
        options: [
          {
            id: "s1-o2a",
            label: "Submit ratification request with documented costs per FAR 1.602-3",
            nextNodeId: "s1-end",
            isBest: true,
            consequence: "Ratification is the proper remedy for unauthorized government commitments — may recover costs if approved within 180 days.",
          },
          {
            id: "s1-o2a-alt",
            label: "Absorb the cost to preserve the relationship",
            nextNodeId: "s1-end-bad",
            consequence: "Company eats $78K. PM learns wrong lesson. Pattern may repeat.",
          },
        ],
      },
      {
        id: "s1-n2b",
        prompt: "You draft the ratification package. The KO asks why work hasn't started. How do you respond?",
        options: [
          {
            id: "s1-o2b",
            label: "Explain unauthorized commitment rules and offer REA with ROM pending ratification",
            nextNodeId: "s1-end",
            isBest: true,
            consequence: "KO understands the issue. Ratification or bilateral mod likely within 2 weeks.",
          },
          {
            id: "s1-o2b-alt",
            label: "Start work while ratification is pending without written acknowledgment",
            nextNodeId: "s1-end-bad",
            consequence: "If ratification denied, all costs are unrecoverable.",
          },
        ],
      },
      {
        id: "s1-n2c",
        prompt: "The COR escalates to the KO about your 'uncooperative' team. The KO calls you directly.",
        options: [
          {
            id: "s1-o2c",
            label: "Explain scope limits professionally and propose ratification/mod path",
            nextNodeId: "s1-end",
            isBest: true,
            consequence: "KO appreciates compliance awareness. Issue resolved through proper channels.",
          },
          {
            id: "s1-o2c-alt",
            label: "Blame the PM publicly on the call",
            nextNodeId: "s1-end-bad",
            consequence: "Internal dysfunction exposed to customer. Relationship and credibility damaged.",
          },
        ],
      },
      {
        id: "s1-end",
        prompt: "Debrief",
        options: [{ id: "s1-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Unauthorized commitments require ratification under FAR 1.602-3 or conversion to a bilateral mod. Never perform out-of-scope work without KO authority. Implement a commitment gate requiring contracts review before customer promises.",
      },
      {
        id: "s1-end-bad",
        prompt: "Debrief",
        options: [{ id: "s1-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Performing without authority or absorbing costs teaches the organization the wrong behavior. The correct path: stop work, document, ratify or mod, then perform. PM training and commitment checkpoints prevent recurrence.",
      },
    ],
  },
  {
    id: "scenario-02",
    number: 2,
    title: "The DCAA Surprise Visit",
    setup:
      "Monday 8:15 AM: Two DCAA auditors arrive at reception requesting immediate access to incurred cost records for FY2021-2023. Your Controller is traveling. They have a notification letter dated 2 weeks ago that was misrouted to a former employee's inbox.",
    teaches: ["DCAA audit rights", "Questioned cost response", "Accounting system requirements"],
    nodes: [
      {
        id: "s2-n1",
        prompt: "Auditors want to start in the finance server room immediately. Your first action?",
        options: [
          {
            id: "s2-o1a",
            label: "Grant full building and server access — cooperate fully",
            nextNodeId: "s2-n2a",
            consequence: "Auditors access uncontrolled environments. Legal concerns about scope creep.",
          },
          {
            id: "s2-o1b",
            label: "Verify credentials, notify leadership/legal, set controlled document production",
            nextNodeId: "s2-n2b",
            isBest: true,
            consequence: "Professional reception. Single POC assigned. Audit proceeds on your terms.",
          },
          {
            id: "s2-o1c",
            label: "Refuse entry until Controller returns in 3 days",
            nextNodeId: "s2-n2c",
            consequence: "DCAA reports non-cooperation. Audit scope may expand.",
          },
        ],
      },
      {
        id: "s2-n2b",
        prompt: "Auditors question $47K in executive compensation on Contract ABC-123. They want an answer today.",
        options: [
          {
            id: "s2-o2b",
            label: "Provide verbal estimate — you'll research later",
            nextNodeId: "s2-end-bad",
            consequence: "Verbal statements become audit record. Incorrect answer creates finding.",
          },
          {
            id: "s2-o2b-best",
            label: "Acknowledge question, commit to written response within agreed timeframe with comp analysis",
            nextNodeId: "s2-n3",
            isBest: true,
            consequence: "Time to prepare FAR 31.205-6 support. Professional handling.",
          },
        ],
      },
      {
        id: "s2-n2a",
        prompt: "Auditors find entertainment expenses charged to government contracts in the general ledger.",
        options: [
          {
            id: "s2-o2a",
            label: "Immediately acknowledge error and describe corrective action",
            nextNodeId: "s2-end",
            isBest: true,
            consequence: "Transparency may reduce penalties. Corrective action plan expected.",
          },
          {
            id: "s2-o2a-alt",
            label: "Claim they're business development meals — allowable",
            nextNodeId: "s2-end-bad",
            consequence: "FAR 31.205-14 makes entertainment unallowable. Finding escalates.",
          },
        ],
      },
      {
        id: "s2-n2c",
        prompt: "DCAA sends non-cooperation memo to your contracting officer. What do you do?",
        options: [
          {
            id: "s2-o2c",
            label: "Immediately contact DCAA, apologize, provide access with legal oversight",
            nextNodeId: "s2-n3",
            isBest: true,
            consequence: "Damage control. Audit resumes with proper controls.",
          },
        ],
      },
      {
        id: "s2-n3",
        prompt: "Audit ends with Draft Finding on unallowable entertainment ($12,400). Your response?",
        options: [
          {
            id: "s2-o3",
            label: "Written response with corrective action plan and accounting system fix",
            nextNodeId: "s2-end",
            isBest: true,
            consequence: "Finding may be sustained but corrective action mitigates repeat findings.",
          },
          {
            id: "s2-o3-alt",
            label: "Dispute without evidence",
            nextNodeId: "s2-end-bad",
            consequence: "Finding sustained. Potential repayment demand.",
          },
        ],
      },
      {
        id: "s2-end",
        prompt: "Debrief",
        options: [{ id: "s2-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Cooperate with DCAA but control access through legal and leadership. Never give verbal answers to questioned costs. Respond in writing with FAR citations and evidence. Fix accounting system unallowable cost pools immediately.",
      },
      {
        id: "s2-end-bad",
        prompt: "Debrief",
        options: [{ id: "s2-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Uncontrolled access, verbal misstatements, and disputing clear unallowables without evidence worsen audit outcomes. Professional document production and written responses are essential.",
      },
    ],
  },
  {
    id: "scenario-03",
    number: 3,
    title: "The Scope Dispute",
    setup:
      "The government COR says you're 4 weeks behind on Deliverable D-005. Your PM argues the COR directed 3 additional reports not in the PWS, consuming 600 hours. No mod was issued. The KO schedules a performance meeting.",
    teaches: ["Changes clause", "Constructive changes", "REA development"],
    nodes: [
      {
        id: "s3-n1",
        prompt: "Before the KO meeting, what do you prepare?",
        options: [
          {
            id: "s3-o1a",
            label: "Apologize and commit to on-time delivery without discussion of extra work",
            nextNodeId: "s3-end-bad",
            consequence: "You absorb 600 hours. Constructive change rights waived by performance.",
          },
          {
            id: "s3-o1b",
            label: "Compile COR email trail, PWS scope analysis, and draft REA with $57K impact",
            nextNodeId: "s3-n2",
            isBest: true,
            consequence: "Fact-based position ready for negotiation.",
          },
        ],
      },
      {
        id: "s3-n2",
        prompt: "At the meeting, the KO says 'just get back on schedule — we'll figure out money later.'",
        options: [
          {
            id: "s3-o2a",
            label: "Accept verbal assurance and continue all work",
            nextNodeId: "s3-end-bad",
            consequence: "'Later' often means never. REA statute clock runs.",
          },
          {
            id: "s3-o2b",
            label: "Request written confirmation that REA is under consideration; submit REA within 48 hours",
            nextNodeId: "s3-n3",
            isBest: true,
            consequence: "Preserves rights. Documents KO acknowledgment.",
          },
        ],
      },
      {
        id: "s3-n3",
        prompt: "KO offers 50% of your REA ($28.5K) via unilateral mod. Your response?",
        options: [
          {
            id: "s3-o3a",
            label: "Accept partial settlement and close REA",
            nextNodeId: "s3-end",
            isBest: true,
            consequence: "Pragmatic settlement. Document release of remaining claim if accepting.",
          },
          {
            id: "s3-o3b",
            label: "Reject and file certified claim for full amount",
            nextNodeId: "s3-end",
            consequence: "Valid but relationship-costly. Appropriate if evidence strongly supports full REA.",
          },
        ],
      },
      {
        id: "s3-end",
        prompt: "Debrief",
        options: [{ id: "s3-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Constructive changes from COR direction outside PWS entitle you to an equitable adjustment. Document everything, submit REA promptly, and never rely on verbal 'we'll pay you later' assurances.",
      },
      {
        id: "s3-end-bad",
        prompt: "Debrief",
        options: [{ id: "s3-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Absorbing scope creep without REA submission destroys profitability and CPARS. The Changes clause protects contractors who document and assert rights professionally.",
      },
    ],
  },
  {
    id: "scenario-04",
    number: 4,
    title: "The Failing Subcontractor",
    setup:
      "NovaTech, your key cyber sub, is 6 weeks behind on ISR deliverables. Government milestone MS-004 is due in 3 weeks. NovaTech's PM says they need 5 more weeks minimum.",
    teaches: ["Subcontract management", "Cure notices", "Government communication"],
    nodes: [
      {
        id: "s4-n1",
        prompt: "NovaTech confirms they cannot make the 3-week deadline. First action?",
        options: [
          {
            id: "s4-o1a",
            label: "Wait — maybe they'll catch up",
            nextNodeId: "s4-end-bad",
            consequence: "Government milestone missed. CPARS hit. No time for cure or backup.",
          },
          {
            id: "s4-o1b",
            label: "Issue cure notice, activate backup plan, notify government same day",
            nextNodeId: "s4-n2",
            isBest: true,
            consequence: "Preserves termination rights. Customer gets transparency.",
          },
        ],
      },
      {
        id: "s4-n2",
        prompt: "Backup plan: prime team absorbs 60% of remaining work at overtime cost. Government asks if you'll meet milestone.",
        options: [
          {
            id: "s4-o2a",
            label: "Guarantee on-time delivery without caveats",
            nextNodeId: "s4-n3",
            consequence: "High risk if backup plan fails. Commitment may exceed authority.",
          },
          {
            id: "s4-o2b",
            label: "Present recovery plan with 85% confidence, daily status updates, and risk disclosure",
            nextNodeId: "s4-n3",
            isBest: true,
            consequence: "Honest assessment preserves trust even if slight delay occurs.",
          },
        ],
      },
      {
        id: "s4-n3",
        prompt: "Cure period expires — NovaTech still non-compliant. Next step?",
        options: [
          {
            id: "s4-o3a",
            label: "Terminate for default and reprocure with alternate vendor",
            nextNodeId: "s4-end",
            isBest: true,
            consequence: "Proper escalation after cure failure. Document reprocurement costs.",
          },
          {
            id: "s4-o3b",
            label: "Extend cure period indefinitely — they're trying hard",
            nextNodeId: "s4-end-bad",
            consequence: "Weakens default case. Continued performance risk.",
          },
        ],
      },
      {
        id: "s4-end",
        prompt: "Debrief",
        options: [{ id: "s4-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Issue cure notice early, notify government proactively, activate backup plans, and terminate for default only after proper cure process. Document all reprocurement costs for recovery.",
      },
      {
        id: "s4-end-bad",
        prompt: "Debrief",
        options: [{ id: "s4-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Waiting and indefinite cure extensions expose the prime to government default. Early action and transparent communication are essential subcontract management skills.",
      },
    ],
  },
  {
    id: "scenario-05",
    number: 5,
    title: "The Protest",
    setup:
      "You won a $5M IT services contract. Three days after award, the KO issues a stop-work order — competitor filed a GAO protest alleging evaluation unfairness in the technical factor.",
    teaches: ["GAO protest process", "Stop-work orders", "FAR 52.233-3"],
    nodes: [
      {
        id: "s5-n1",
        prompt: "Stop-work order received. Immediate actions?",
        options: [
          {
            id: "s5-o1a",
            label: "Continue minimal work to stay on schedule",
            nextNodeId: "s5-end-bad",
            consequence: "Violates stop-work order. Costs unrecoverable.",
          },
          {
            id: "s5-o1b",
            label: "Comply with stop-work, notify subs, preserve costs, support agency protest response",
            nextNodeId: "s5-n2",
            isBest: true,
            consequence: "Compliant. Costs preserved for potential recovery.",
          },
        ],
      },
      {
        id: "s5-n2",
        prompt: "Subcontractor wants to bill for staff they kept assigned during stop-work.",
        options: [
          {
            id: "s5-o2a",
            label: "Pay sub invoices — they're incurring cost",
            nextNodeId: "s5-end-bad",
            consequence: "Prime absorbs idle sub costs without government reimbursement.",
          },
          {
            id: "s5-o2b",
            label: "Issue stop-work to subs, document standby costs per FAR 52.242-15",
            nextNodeId: "s5-n3",
            isBest: true,
            consequence: "Standby costs may be recoverable if protest resolved in your favor.",
          },
        ],
      },
      {
        id: "s5-n3",
        prompt: "GAO dismisses protest as untimely — agency lifts stop-work 45 days after award. Your cost impact is $180K idle labor.",
        options: [
          {
            id: "s5-o3",
            label: "Submit request for equitable adjustment for standby costs",
            nextNodeId: "s5-end",
            isBest: true,
            consequence: "Proper recovery path for government-caused delay.",
          },
        ],
      },
      {
        id: "s5-end",
        prompt: "Debrief",
        options: [{ id: "s5-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Comply with stop-work orders immediately. Flow stop-work to subs. Document standby costs. Support agency protest response. Seek equitable adjustment for delay costs when work resumes.",
      },
      {
        id: "s5-end-bad",
        prompt: "Debrief",
        options: [{ id: "s5-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Working through a stop-work order or paying subs during suspension creates unrecoverable costs. Strict compliance and cost documentation protect the contractor.",
      },
    ],
  },
  {
    id: "scenario-06",
    number: 6,
    title: "The Cost Overrun",
    setup:
      "Month 8 of a 12-month CPFF contract: 90% of $2M funding spent. EVM shows EAC of $2.6M. PM wants to 'manage it internally' until option year.",
    teaches: ["FAR 52.232-22 Limitation of Funds", "Cost overrun management", "Government notification"],
    nodes: [
      {
        id: "s6-n1",
        prompt: "CPI is 0.80. What is your obligation?",
        options: [
          {
            id: "s6-o1a",
            label: "Agree with PM — notify government at month 10",
            nextNodeId: "s6-end-bad",
            consequence: "Government learns late. Limitation of Funds rights triggered. CPARS damage.",
          },
          {
            id: "s6-o1b",
            label: "Notify KO immediately with updated EAC and request funding/mod",
            nextNodeId: "s6-n2",
            isBest: true,
            consequence: "Early transparency. Time to negotiate additional funding.",
          },
        ],
      },
      {
        id: "s6-n2",
        prompt: "KO says no additional funding available this fiscal year. Options?",
        options: [
          {
            id: "s6-o2a",
            label: "Issue limitation of funds notification per FAR 52.232-22 when 75% threshold hit",
            nextNodeId: "s6-n3",
            isBest: true,
            consequence: "Contractor protected from performing at own expense beyond funded amount.",
          },
          {
            id: "s6-o2b",
            label: "Continue performance — don't embarrass the program office",
            nextNodeId: "s6-end-bad",
            consequence: "Contractor performs $600K at risk of non-reimbursement.",
          },
        ],
      },
      {
        id: "s6-n3",
        prompt: "Government directs you to continue critical work without additional funding.",
        options: [
          {
            id: "s6-o3",
            label: "Document direction, submit REA, perform only until LOF threshold reached",
            nextNodeId: "s6-end",
            isBest: true,
            consequence: "Balanced compliance — mission support with cost protection.",
          },
        ],
      },
      {
        id: "s6-end",
        prompt: "Debrief",
        options: [{ id: "s6-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "On cost-type contracts, notify the KO early when EAC exceeds funded value. Use Limitation of Funds clause to stop work at unfunded threshold. Never absorb overruns silently.",
      },
      {
        id: "s6-end-bad",
        prompt: "Debrief",
        options: [{ id: "s6-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Hidden overruns on CPFF contracts create massive unrecoverable costs and CPARS failures. Early notification and LOF compliance are mandatory contract administration skills.",
      },
    ],
  },
  {
    id: "scenario-07",
    number: 7,
    title: "The Termination for Convenience",
    setup:
      "The Army exercises Termination for Convenience on your $3.2M FFP contract with 30 days notice — program restructuring. You have $1.1M in inventory, 40 staff, and 3 active subcontracts.",
    teaches: ["T4C process", "Settlement proposals", "FAR 49 allowable costs"],
    nodes: [
      {
        id: "s7-n1",
        prompt: "T4C notice received. Day 1 actions?",
        options: [
          {
            id: "s7-o1a",
            label: "Stop all work immediately including orderly shutdown per FAR 49",
            nextNodeId: "s7-n2",
            isBest: true,
            consequence: "Proper stop-work. Mitigation of costs begins.",
          },
          {
            id: "s7-o1b",
            label: "Continue through current milestones to help the customer",
            nextNodeId: "s7-end-bad",
            consequence: "Post-termination costs may be unallowable in settlement.",
          },
        ],
      },
      {
        id: "s7-n2",
        prompt: "Subcontractors demand payment for full contract value.",
        options: [
          {
            id: "s7-o2a",
            label: "Flow T4C notice to subs and negotiate termination settlements",
            nextNodeId: "s7-n3",
            isBest: true,
            consequence: "Sub settlement costs are allowable in prime T4C proposal.",
          },
          {
            id: "s7-o2b",
            label: "Pay subs in full to maintain relationships",
            nextNodeId: "s7-end-bad",
            consequence: "Overpayment not recoverable from government.",
          },
        ],
      },
      {
        id: "s7-n3",
        prompt: "Settlement proposal due in 60 days. What's included?",
        options: [
          {
            id: "s7-o3",
            label: "Costs incurred, settlement expenses, reasonable profit on work done, inventory disposition",
            nextNodeId: "s7-end",
            isBest: true,
            consequence: "Complete FAR 49 settlement. Maximizes recovery.",
          },
        ],
      },
      {
        id: "s7-end",
        prompt: "Debrief",
        options: [{ id: "s7-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "T4C is a right, not a penalty. Stop work appropriately, flow down to subs, inventory materials, and submit thorough settlement proposal within deadline. Reasonable profit on work performed is allowable on FFP T4C.",
      },
      {
        id: "s7-end-bad",
        prompt: "Debrief",
        options: [{ id: "s7-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Continuing work after T4C or overpaying subs reduces settlement recovery. Follow FAR 49 systematically.",
      },
    ],
  },
  {
    id: "scenario-08",
    number: 8,
    title: "The Bad CPARS Rating",
    setup:
      "CPARS evaluation for your recently completed contract: Overall 'Marginal' — Schedule rated 'Marginal' due to two late deliverables caused by government-furnished equipment delays you documented extensively.",
    teaches: ["CPARS process", "Contractor comments", "Documentation importance"],
    nodes: [
      {
        id: "s8-n1",
        prompt: "You have 30 days to comment. Approach?",
        options: [
          {
            id: "s8-o1a",
            label: "Accept rating — not worth fighting the government",
            nextNodeId: "s8-end-bad",
            consequence: "Marginal rating affects future win probability for 3+ years.",
          },
          {
            id: "s8-o1b",
            label: "Draft factual rebuttal with GFE delay documentation and request rating reconsideration",
            nextNodeId: "s8-n2",
            isBest: true,
            consequence: "Professional challenge with evidence.",
          },
        ],
      },
      {
        id: "s8-n2",
        prompt: "Evaluator responds: 'Rating stands but your comments are noted.'",
        options: [
          {
            id: "s8-o2a",
            label: "Request CPARS review by contracting officer per program guidance",
            nextNodeId: "s8-n3",
            isBest: true,
            consequence: "Additional review layer. Comments permanently attached to rating.",
          },
          {
            id: "s8-o2b",
            label: "Escalate to protest",
            nextNodeId: "s8-end-bad",
            consequence: "CPARS not protestable to GAO. Relationship damage.",
          },
        ],
      },
      {
        id: "s8-n3",
        prompt: "For future contracts, how do you prevent recurrence?",
        options: [
          {
            id: "s8-o3",
            label: "Implement CPARS diary — document government-caused delays in real time with formal notices",
            nextNodeId: "s8-end",
            isBest: true,
            consequence: "Proactive documentation supports future rebuttals and REAs.",
          },
        ],
      },
      {
        id: "s8-end",
        prompt: "Debrief",
        options: [{ id: "s8-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Always comment on unsupported CPARS ratings within 30 days. Provide factual rebuttals with documentation. CPARS comments stay with the rating permanently — future evaluators see your side.",
      },
      {
        id: "s8-end-bad",
        prompt: "Debrief",
        options: [{ id: "s8-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Accepting unfair CPARS ratings or protesting CPARS directly hurts your past performance record. Document performance issues contemporaneously and use the comment process.",
      },
    ],
  },
  {
    id: "scenario-09",
    number: 9,
    title: "The Teaming Dispute",
    setup:
      "You won W912HQ-24-C-0042. NovaTech (teaming partner) claims the teaming agreement promised them 45% work share but your proposal and planned subcontract reflect 35%. The agreement says 'approximately 40% of contract value.'",
    teaches: ["Teaming agreements", "Work share disputes", "Contract interpretation"],
    nodes: [
      {
        id: "s9-n1",
        prompt: "NovaTech threatens litigation. First step?",
        options: [
          {
            id: "s9-o1a",
            label: "Increase their share to 45% to avoid conflict",
            nextNodeId: "s9-end-bad",
            consequence: "Prime margin erodes. Other teaming partners notice.",
          },
          {
            id: "s9-o1b",
            label: "Review teaming agreement with legal; analyze proposal work share documentation",
            nextNodeId: "s9-n2",
            isBest: true,
            consequence: "Fact-based position before negotiation.",
          },
        ],
      },
      {
        id: "s9-n2",
        prompt: "Agreement says 'approximately 40%' — NovaTech performed 35% in proposal cost volume. Negotiation?",
        options: [
          {
            id: "s9-o2a",
            label: "Offer 40% in definitive subcontract matching agreement language",
            nextNodeId: "s9-n3",
            isBest: true,
            consequence: "Reasonable interpretation of 'approximately 40%.'",
          },
          {
            id: "s9-o2b",
            label: "Hold at 35% — proposal controls",
            nextNodeId: "s9-end-bad",
            consequence: "Litigation risk. Damaged partner relationship on active contract.",
          },
        ],
      },
      {
        id: "s9-n3",
        prompt: "Agreement reached at 40%. Document?",
        options: [
          {
            id: "s9-o3",
            label: "Definitive subcontract + settlement memo releasing teaming dispute claims",
            nextNodeId: "s9-end",
            isBest: true,
            consequence: "Clean start on performance. Dispute closed.",
          },
        ],
      },
      {
        id: "s9-end",
        prompt: "Debrief",
        options: [{ id: "s9-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Define work share precisely in teaming agreements (% of value, hours, or tasks). 'Approximately' creates disputes. At award, negotiate definitive subcontract in good faith and document settlements.",
      },
      {
        id: "s9-end-bad",
        prompt: "Debrief",
        options: [{ id: "s9-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Vague teaming terms cause post-award litigation. Neither capitulation nor rigid under-performance serves the prime — interpret agreement reasonably and document resolution.",
      },
    ],
  },
  {
    id: "scenario-10",
    number: 10,
    title: "The ITAR Violation",
    setup:
      "Your engineering lead forwarded ITAR-controlled technical drawings to a Canadian subcontractor employee without checking export classification. The drawings are marked ITAR on the title block. The sub employee is a foreign national.",
    teaches: ["ITAR compliance", "Voluntary disclosure", "Corrective action programs"],
    nodes: [
      {
        id: "s10-n1",
        prompt: "You learn of the transfer this morning. Immediate action?",
        options: [
          {
            id: "s10-o1a",
            label: "Delete the email and hope no one noticed",
            nextNodeId: "s10-end-bad",
            consequence: "Obstruction. Criminal exposure increases dramatically.",
          },
          {
            id: "s10-o1b",
            label: "Contain data, notify legal and Empowered Official, begin violation assessment",
            nextNodeId: "s10-n2",
            isBest: true,
            consequence: "Proper escalation. Voluntary disclosure option preserved.",
          },
        ],
      },
      {
        id: "s10-n2",
        prompt: "Legal confirms ITAR violation — unauthorized export of USML Category XI data.",
        options: [
          {
            id: "s10-o2a",
            label: "Voluntary disclosure to DDTC with corrective action plan",
            nextNodeId: "s10-n3",
            isBest: true,
            consequence: "May significantly reduce penalties. Demonstrates good faith.",
          },
          {
            id: "s10-o2b",
            label: "Internal discipline only — no external disclosure",
            nextNodeId: "s10-end-bad",
            consequence: "If discovered later, penalties escalate. Potential debarment.",
          },
        ],
      },
      {
        id: "s10-n3",
        prompt: "Corrective action plan elements?",
        options: [
          {
            id: "s10-o3",
            label: "Retraining, technology control plan update, marking review, sub flow-down audit",
            nextNodeId: "s10-end",
            isBest: true,
            consequence: "Comprehensive CAP satisfies DDTC expectations.",
          },
        ],
      },
      {
        id: "s10-end",
        prompt: "Debrief",
        options: [{ id: "s10-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "ITAR violations require immediate legal escalation. Voluntary disclosure to DDTC may reduce penalties. Implement technology control plans, marking procedures, and training. Deemed exports to foreign nationals in the US require authorization.",
      },
      {
        id: "s10-end-bad",
        prompt: "Debrief",
        options: [{ id: "s10-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Covering up ITAR violations creates criminal liability. DDTC voluntary disclosure and corrective action are the professional response. Fines can reach $1M+ per violation with debarment.",
      },
    ],
  },
  {
    id: "scenario-11",
    number: 11,
    title: "The WAWF Invoice Crisis",
    setup:
      "Month-end: $420K in WAWF invoices rejected — CLIN mapping errors after Mod P00003 restructured CLINs. Finance needs cash in 5 days for payroll.",
    teaches: ["WAWF troubleshooting", "CLIN management", "Invoice reconciliation"],
    nodes: [
      {
        id: "s11-n1",
        prompt: "Three CLINs rejected for 'Invalid CLIN/SLIN combination.' First step?",
        options: [
          {
            id: "s11-o1a",
            label: "Resubmit same invoices — maybe WAWF glitch",
            nextNodeId: "s11-end-bad",
            consequence: "Duplicate rejections. Payment delay continues.",
          },
          {
            id: "s11-o1b",
            label: "Compare Mod P00003 CLIN structure to WAWF CLIN setup; contact COR for acceptance re-link",
            nextNodeId: "s11-n2",
            isBest: true,
            consequence: "Root cause identified — CLIN 0002 split into 0002AA/0002AB.",
          },
        ],
      },
      {
        id: "s11-n2",
        prompt: "COR confirms acceptance under old CLIN numbers. Resolution?",
        options: [
          {
            id: "s11-o2",
            label: "Request KO admin mod to align WAWF; resubmit with correct CLINs and new acceptance",
            nextNodeId: "s11-end",
            isBest: true,
            consequence: "Invoices accepted within 3 days. Prompt Payment clock restarts.",
          },
        ],
      },
      {
        id: "s11-end",
        prompt: "Debrief",
        options: [{ id: "s11-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "After every mod, verify WAWF CLIN structure matches Section B. Coordinate with COR on acceptance under new CLINs before resubmitting invoices.",
      },
      {
        id: "s11-end-bad",
        prompt: "Debrief",
        options: [{ id: "s11-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Resubmitting rejected invoices without fixing CLIN mapping wastes time. Always trace rejections to mod changes and acceptance records.",
      },
    ],
  },
  {
    id: "scenario-12",
    number: 12,
    title: "The OCI Discovery",
    setup:
      "Mid-proposal: you discover your proposed PM previously supported the same program as a government employee 8 months ago. RFP requires OCI mitigation plan. Proposal due in 5 days.",
    teaches: ["Organizational Conflict of Interest", "FAR 9.5", "Mitigation plans"],
    nodes: [
      {
        id: "s12-n1",
        prompt: "Potential impaired objectivity OCI. Action?",
        options: [
          {
            id: "s12-o1a",
            label: "Swap PM without disclosure — no one will know",
            nextNodeId: "s12-end-bad",
            consequence: "False certification. Potential protest and debarment.",
          },
          {
            id: "s12-o1b",
            label: "Disclose to proposal lead; draft mitigation plan with firewalled alternate PM",
            nextNodeId: "s12-n2",
            isBest: true,
            consequence: "Transparent mitigation. Proposal remains compliant.",
          },
        ],
      },
      {
        id: "s12-n2",
        prompt: "CO requests revised mitigation with organizational chart showing firewall.",
        options: [
          {
            id: "s12-o2",
            label: "Submit firewall plan excluding former gov employee from evaluation-sensitive work",
            nextNodeId: "s12-end",
            isBest: true,
            consequence: "CO accepts mitigation. Proposal proceeds.",
          },
        ],
      },
      {
        id: "s12-end",
        prompt: "Debrief",
        options: [{ id: "s12-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "OCI must be disclosed and mitigated — never hidden. Firewalls, personnel swaps, and blind reviews are standard mitigations. False OCI certifications create severe consequences.",
      },
      {
        id: "s12-end-bad",
        prompt: "Debrief",
        options: [{ id: "s12-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Concealing OCI is worse than the OCI itself. Proactive disclosure and mitigation preserve bid integrity.",
      },
    ],
  },
  {
    id: "scenario-13",
    number: 13,
    title: "The TINA Defect",
    setup:
      "Post-award: finance discovers submitted certified cost data used outdated indirect rates — actual rates 2.3% higher. Contract value $4.5M. TINA applied.",
    teaches: ["TINA/FAR 15.403", "Defective pricing", "Price reduction"],
    nodes: [
      {
        id: "s13-n1",
        prompt: "Defective pricing likely. Response?",
        options: [
          {
            id: "s13-o1a",
            label: "Quietly use correct rates on billing — no need to tell KO",
            nextNodeId: "s13-end-bad",
            consequence: "Billing mismatch discovered at audit. False Claims exposure.",
          },
          {
            id: "s13-o1b",
            label: "Notify KO, quantify impact, propose price reduction per FAR 15.407",
            nextNodeId: "s13-n2",
            isBest: true,
            consequence: "Good faith disclosure. Reduced penalties.",
          },
        ],
      },
      {
        id: "s13-n2",
        prompt: "KO requests $103K price reduction. Negotiate?",
        options: [
          {
            id: "s13-o2a",
            label: "Accept if math verified; document bilateral mod",
            nextNodeId: "s13-end",
            isBest: true,
            consequence: "Clean resolution. Updated rates in system.",
          },
          {
            id: "s13-o2b",
            label: "Refuse — rates were close enough",
            nextNodeId: "s13-end-bad",
            consequence: "KO issues unilateral price reduction. Relationship damaged.",
          },
        ],
      },
      {
        id: "s13-end",
        prompt: "Debrief",
        options: [{ id: "s13-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Certified cost data must be current as of agreement. Defective pricing triggers price reduction. Proactive disclosure and accurate rate updates prevent False Claims Act exposure.",
      },
      {
        id: "s13-end-bad",
        prompt: "Debrief",
        options: [{ id: "s13-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Hiding defective pricing is a False Claims Act violation. Report promptly and negotiate price reduction.",
      },
    ],
  },
  {
    id: "scenario-14",
    number: 14,
    title: "The Limitation of Funds Letter",
    setup:
      "CPFF contract: 80% funding consumed at 55% completion. PM insists on continuing aggressive hiring. No mod pending.",
    teaches: ["FAR 52.232-22", "LOF notifications", "Funding management"],
    nodes: [
      {
        id: "s14-n1",
        prompt: "When do you issue LOF notification?",
        options: [
          {
            id: "s14-o1a",
            label: "At 100% funding — maximize performance first",
            nextNodeId: "s14-end-bad",
            consequence: "Contractor performs unfunded work at own risk.",
          },
          {
            id: "s14-o1b",
            label: "Now — at 80% with projected overrun; notify per 52.232-22",
            nextNodeId: "s14-n2",
            isBest: true,
            consequence: "Government on notice. Contractor protected.",
          },
        ],
      },
      {
        id: "s14-n2",
        prompt: "Government doesn't respond to LOF within 30 days.",
        options: [
          {
            id: "s14-o2",
            label: "Stop incurring costs beyond funded threshold except safe shutdown costs",
            nextNodeId: "s14-end",
            isBest: true,
            consequence: "LOF clause protection activated.",
          },
        ],
      },
      {
        id: "s14-end",
        prompt: "Debrief",
        options: [{ id: "s14-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Issue LOF notification before exceeding funded value. If government doesn't increase funding within specified period, stop work except safe shutdown. Never hire aggressively into unfunded backlog.",
      },
      {
        id: "s14-end-bad",
        prompt: "Debrief",
        options: [{ id: "s14-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Waiting until 100% funding on CPFF contracts means performing at your own expense. LOF clause exists to protect contractors.",
      },
    ],
  },
  {
    id: "scenario-15",
    number: 15,
    title: "The Hurricane Delay",
    setup:
      "Category 3 hurricane hits your primary performance site. 2-week shutdown. Contract has Default clause but no specific force majeure clause. Milestone due in 10 days.",
    teaches: ["Excusable delay", "FAR 52.249-10", "Schedule extensions"],
    nodes: [
      {
        id: "s15-n1",
        prompt: "Force majeure not explicitly in contract. Approach?",
        options: [
          {
            id: "s15-o1a",
            label: "Notify KO immediately of delay; request schedule extension mod citing government delay excusable under Default clause",
            nextNodeId: "s15-n2",
            isBest: true,
            consequence: "Formal notice preserves rights. Default avoided.",
          },
          {
            id: "s15-o1b",
            label: "Work remotely and hope to make milestone",
            nextNodeId: "s15-end-bad",
            consequence: "Unsafe. Incomplete deliverable. Default risk remains.",
          },
        ],
      },
      {
        id: "s15-n2",
        prompt: "KO asks for impact assessment.",
        options: [
          {
            id: "s15-o2",
            label: "Submit delay notification with recovery schedule and no-cost time extension request",
            nextNodeId: "s15-end",
            isBest: true,
            consequence: "Bilateral time extension mod issued. Default avoided.",
          },
        ],
      },
      {
        id: "s15-end",
        prompt: "Debrief",
        options: [{ id: "s15-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Notify KO immediately of force majeure delays. Request schedule extension with recovery plan. Document that delay is beyond contractor control to avoid default termination.",
      },
      {
        id: "s15-end-bad",
        prompt: "Debrief",
        options: [{ id: "s15-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Silence during force majeure events leads to default notices. Communicate early with impact assessment and extension request.",
      },
    ],
  },
  {
    id: "scenario-16",
    number: 16,
    title: "The CPSR Failure",
    setup:
      "DCMA CPSR finds your purchasing system 'inadequate' — missing subcontract price analysis on 12 of 20 sampled subs.",
    teaches: ["CPSR", "FAR 44.3", "Purchasing system remediation"],
    nodes: [
      {
        id: "s16-n1",
        prompt: "Inadequate rating received. Impact?",
        options: [
          {
            id: "s16-o1a",
            label: "Ignore — fix it on next audit in 3 years",
            nextNodeId: "s16-end-bad",
            consequence: "KO may withhold consent on all subs. Billing disruptions.",
          },
          {
            id: "s16-o1b",
            label: "Immediate corrective action plan; retroactive price analysis on open subs",
            nextNodeId: "s16-n2",
            isBest: true,
            consequence: "Demonstrates good faith. Faster re-review.",
          },
        ],
      },
      {
        id: "s16-n2",
        prompt: "Remediation plan due in 30 days.",
        options: [
          {
            id: "s16-o2",
            label: "Implement mandatory contracts review gate before sub award + training",
            nextNodeId: "s16-end",
            isBest: true,
            consequence: "System fix addresses root cause. Re-review scheduled.",
          },
        ],
      },
      {
        id: "s16-end",
        prompt: "Debrief",
        options: [{ id: "s16-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "CPSR inadequate rating affects all contracts. Retroactively fix documentation gaps and implement pre-award contracts review for every subcontract.",
      },
      {
        id: "s16-end-bad",
        prompt: "Debrief",
        options: [{ id: "s16-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Ignoring CPSR findings triggers consent withholding and billing holds. Immediate remediation is required.",
      },
    ],
  },
  {
    id: "scenario-17",
    number: 17,
    title: "The Small Business Pass-Through",
    setup:
      "SDVOSB set-aside contract: PM wants to subcontract 70% to a large business 'systems integrator' while prime performs program management only.",
    teaches: ["FAR 52.219-14", "Limitations on subcontracting", "Set-aside compliance"],
    nodes: [
      {
        id: "s17-n1",
        prompt: "PM says 'everyone does this on set-asides.' Your response?",
        options: [
          {
            id: "s17-o1a",
            label: "Approve — we need their technical capability",
            nextNodeId: "s17-end-bad",
            consequence: "Violation of 52.219-14. False Claims Act exposure. Debarment risk.",
          },
          {
            id: "s17-o1b",
            label: "Reject — prime must perform 50% of cost of performance; restructure work share",
            nextNodeId: "s17-n2",
            isBest: true,
            consequence: "Compliance maintained. Alternative structure explored.",
          },
        ],
      },
      {
        id: "s17-n2",
        prompt: "Restructured plan: prime performs 55% with augmented technical staff, sub at 45%.",
        options: [
          {
            id: "s17-o2",
            label: "Document work share analysis in contract file; monitor monthly",
            nextNodeId: "s17-end",
            isBest: true,
            consequence: "Compliant structure with ongoing monitoring.",
          },
        ],
      },
      {
        id: "s17-end",
        prompt: "Debrief",
        options: [{ id: "s17-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "FAR 52.219-14 requires primes on set-aside service contracts to perform 50% of cost of performance. Pass-through arrangements violate the clause and create False Claims Act liability.",
      },
      {
        id: "s17-end-bad",
        prompt: "Debrief",
        options: [{ id: "s17-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "'Everyone does it' is not a defense. SDVOSB pass-through schemes result in debarment and qui tam actions. Restructure work share or decline the approach.",
      },
    ],
  },
  {
    id: "scenario-18",
    number: 18,
    title: "The Data Rights Dispute",
    setup:
      "KO directs delivery of software source code with 'unlimited rights' — but your company developed it entirely at private expense before contract. Contract includes DFARS 252.227-7014.",
    teaches: ["DFARS 7013/7014", "Data rights", "Limited rights assertions"],
    nodes: [
      {
        id: "s18-n1",
        prompt: "Source code delivery requested on DD Form 1423. Action?",
        options: [
          {
            id: "s18-o1a",
            label: "Deliver source code — customer is always right",
            nextNodeId: "s18-end-bad",
            consequence: "Government acquires unlimited rights to your commercial product.",
          },
          {
            id: "s18-o1b",
            label: "Assert limited rights/ restricted rights with private expense determination; propose licensed delivery",
            nextNodeId: "s18-n2",
            isBest: true,
            consequence: "IP protected. Negotiation opened.",
          },
        ],
      },
      {
        id: "s18-n2",
        prompt: "KO agrees to object code delivery with limited rights license.",
        options: [
          {
            id: "s18-o2",
            label: "Document bilateral mod to CDRL; mark software with restricted rights legend",
            nextNodeId: "s18-end",
            isBest: true,
            consequence: "IP preserved. Contract compliant.",
          },
        ],
      },
      {
        id: "s18-end",
        prompt: "Debrief",
        options: [{ id: "s18-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Assert data rights BEFORE delivery. Software developed at private expense qualifies for restricted/limited rights under DFARS 7014. Never deliver source code without rights analysis.",
      },
      {
        id: "s18-end-bad",
        prompt: "Debrief",
        options: [{ id: "s18-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Delivering unlimited rights data destroys competitive advantage. Mark proprietary data and negotiate CDRLs that match your rights assertion.",
      },
    ],
  },
  {
    id: "scenario-19",
    number: 19,
    title: "The Classified Spill",
    setup:
      "An employee uploaded SECRET presentation slides to an unclassified SharePoint folder accessible by uncleared team members on a classified contract.",
    teaches: ["Classified information handling", "DD 254 compliance", "Incident reporting"],
    nodes: [
      {
        id: "s19-n1",
        prompt: "Spill discovered during routine audit. First action?",
        options: [
          {
            id: "s19-o1a",
            label: "Delete file quietly and warn employee",
            nextNodeId: "s19-end-bad",
            consequence: "Spill unreported. Security violation escalates. Facility clearance at risk.",
          },
          {
            id: "s19-o1b",
            label: "Contain access, notify FSO and government security officer within 24 hours",
            nextNodeId: "s19-n2",
            isBest: true,
            consequence: "Proper spill response initiated.",
          },
        ],
      },
      {
        id: "s19-n2",
        prompt: "FSO requires spill report and employee suspension pending investigation.",
        options: [
          {
            id: "s19-o2",
            label: "Cooperate fully; implement additional training and access controls",
            nextNodeId: "s19-end",
            isBest: true,
            consequence: "Spill contained. Corrective actions documented.",
          },
        ],
      },
      {
        id: "s19-end",
        prompt: "Debrief",
        options: [{ id: "s19-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Classified spills require immediate FSO notification and government security reporting. Never conceal spills. DD 254 obligations include incident reporting and access control.",
      },
      {
        id: "s19-end-bad",
        prompt: "Debrief",
        options: [{ id: "s19-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Concealing classified spills jeopardizes facility clearance and contracts. Report immediately per DD 254 and NISPOM requirements.",
      },
    ],
  },
  {
    id: "scenario-20",
    number: 20,
    title: "The Prompt Payment Fight",
    setup:
      "Government underpaid $40K on accepted WAWF invoice — applied progress payment withholding rate incorrectly on CPFF contract. Payroll due in 7 days.",
    teaches: ["Prompt Payment Act", "Payment reconciliation", "KO escalation"],
    nodes: [
      {
        id: "s20-n1",
        prompt: "Payment discrepancy identified. First step?",
        options: [
          {
            id: "s20-o1a",
            label: "Wait for next invoice cycle — it'll balance out",
            nextNodeId: "s20-end-bad",
            consequence: "Cash flow crisis. Interest clock not started properly.",
          },
          {
            id: "s20-o1b",
            label: "Reconcile invoice to Mod and FAR 52.232-16; submit payment discrepancy letter to KO and payment office",
            nextNodeId: "s20-n2",
            isBest: true,
            consequence: "Documented dispute with math attached.",
          },
        ],
      },
      {
        id: "s20-n2",
        prompt: "No response in 15 days. Next action?",
        options: [
          {
            id: "s20-o2a",
            label: "Escalate to KO supervisor; calculate Prompt Payment Act interest from acceptance date",
            nextNodeId: "s20-n3",
            isBest: true,
            consequence: "Escalation gets attention. Interest claim preserved.",
          },
          {
            id: "s20-o2b",
            label: "Withhold deliverables until paid",
            nextNodeId: "s20-end-bad",
            consequence: "Breach of contract. CPARS damage.",
          },
        ],
      },
      {
        id: "s20-n3",
        prompt: "KO corrects payment and agrees to interest on $40K for 20 days late.",
        options: [
          {
            id: "s20-o3",
            label: "Accept correction; document in AR log; update WAWF setup to prevent recurrence",
            nextNodeId: "s20-end",
            isBest: true,
            consequence: "Full recovery plus interest.",
          },
        ],
      },
      {
        id: "s20-end",
        prompt: "Debrief",
        options: [{ id: "s20-done", label: "Continue", consequence: "Complete" }],
        debrief:
          "Reconcile every payment against WAWF acceptance and contract terms. Dispute in writing immediately. Prompt Payment Act entitles you to interest after 30 days. Never withhold performance for payment disputes.",
      },
      {
        id: "s20-end-bad",
        prompt: "Debrief",
        options: [{ id: "s20-done-bad", label: "Continue", consequence: "Complete" }],
        debrief:
          "Waiting or withholding deliverables worsens payment disputes. Document, escalate, and claim Prompt Payment Act interest.",
      },
    ],
  },
];
