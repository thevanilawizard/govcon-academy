import type {
  JobInterviewQuestion,
  ResumeBullet,
  SalaryNegotiationGuide,
} from "./types";

export const SR_ADMIN_INTERVIEW_QUESTIONS: JobInterviewQuestion[] = [
  {
    id: "srai-01",
    category: "technical",
    question: "Walk me through how you manage a contract cradle to grave.",
    keyPoints: [
      "Pre-award: solicitation review, compliance matrix, risk flagging, proposal support",
      "Award: 72-hour checklist — read contract, build brief, set up file, kickoff, issue subs",
      "Performance: monthly routine — invoicing, COR check-ins, funding tracking, mod processing",
      "Options: proactive notification, CPARS management, exercise/non-exercise transition",
      "Closeout: final invoice, release of claims, property return, sub closeout, records retention",
    ],
    modelAnswer:
      "I manage contracts across six phases. Pre-award, I review solicitations for compliance and risk — building the compliance matrix and flagging unusual clauses before we bid. At award, I execute a 72-hour checklist: read the full contract, build the contract brief, set up the electronic file per FAR 4.803, notify stakeholders, schedule kickoff, and issue subcontracts with proper flow-downs. During performance, I run a weekly monthly routine — invoicing in week 1, COR check-ins in week 2, funding and sub reviews in week 3, reporting in week 4. I track option exercise windows proactively and manage CPARS through documented performance. For closeout, I ensure final invoice reconciliation, release of claims review, government property return, subcontract closeout, and file retention per FAR 4.804. Across a portfolio of 10+ contracts, this systematic approach prevents the fire drills that create audit findings.",
    commonMistakes: [
      "Skipping pre-award or closeout — describing only performance phase",
      "Not mentioning contract briefs or file management",
      "Omitting subcontract administration",
      "Describing tasks without showing systematic process",
    ],
    followUps: [
      "What's in your 72-hour award checklist?",
      "How do you handle a contract with no incremental funding on a cost-type?",
      "Walk me through your closeout process for a CPFF contract.",
    ],
  },
  {
    id: "srai-02",
    category: "behavioral",
    question: "Give me an example of a compliance risk you caught early and how you handled it.",
    keyPoints: [
      "STAR method: Situation, Task, Action, Result",
      "Specific risk category (scope, funding, compliance, etc.)",
      "Early detection before impact",
      "Documented action and escalation",
      "Quantified result (cost saved, CPARS protected, etc.)",
    ],
    modelAnswer:
      "Situation: On a $2.1M CPFF contract, I was reviewing monthly funding during my week-3 routine and noticed we had expended 73% of CLIN 0001 funding with 4 months remaining on the POP. Task: I needed to ensure we didn't perform beyond funded limits and trigger a limitation of funds issue. Action: I immediately prepared the FAR 52.232-22 notification letter, quantified the burn rate projection showing funds would exhaust in 6 weeks, and sent it to the KO with a request for incremental funding. I also notified the PM to hold any non-critical ODC spending and briefed client leadership. Result: The KO obligated an additional $350K within 10 business days. We completed the period of performance without interruption, maintained our 'Very Good' CPARS rating, and the client cited this as an example of proactive contract management in our recompete proposal.",
    commonMistakes: [
      "Vague example without specific contract details or dollar amounts",
      "Describing a problem discovered by someone else",
      "No quantified result",
      "Risk discovered after damage was done rather than early",
    ],
    followUps: [
      "What would you have done if the KO didn't respond to your funding notification?",
      "How do you track funding across multiple cost-type contracts?",
      "Have you ever had to stop work due to funding exhaustion?",
    ],
  },
  {
    id: "srai-03",
    category: "scenario",
    question: "How do you handle a PM who keeps agreeing to work outside the contract scope?",
    keyPoints: [
      "Document the pattern — specific examples with dates",
      "Train PM on contract scope boundaries using the contract brief",
      "Intercept scope direction before work begins",
      "Route mod requests through KO — never perform out-of-scope work",
      "Escalate to leadership if pattern continues",
    ],
    modelAnswer:
      "This is one of the most common issues I face. First, I document every instance — date, what the COR or PM agreed to, and whether it was in the PWS. Second, I sit down with the PM and walk through the contract brief Section 2 (scope) and Section 5 (changes clause) so they understand the boundary. Third, I establish a rule: no work begins on anything not in the current PWS until I confirm a mod is in process or the direction is clearly within scope. When the PM agrees to out-of-scope work in a meeting, I follow up with an email: 'Per our discussion, Task X appears outside PWS Section 3.2. I am routing a modification request to the KO. Please hold performance until the mod is executed.' If the pattern continues after training and process, I escalate to the client leadership with a log of unauthorized commitments and the financial exposure. I've found that PMs respond when they see the REA dollar amount attached to undocumented scope.",
    commonMistakes: [
      "Saying you would just tell the PM to stop without a process",
      "Performing the work and submitting an REA later",
      "Blaming the PM without showing training/escalation approach",
      "Not mentioning the contract brief as a tool",
    ],
    followUps: [
      "What if the COR is the one directing out-of-scope work?",
      "How do you quantify the cost of unauthorized scope?",
      "Have you ever had to stop work mid-task due to scope issues?",
    ],
  },
  {
    id: "srai-04",
    category: "technical",
    question: "What's your redlining process for a teaming agreement?",
    keyPoints: [
      "Track Changes in Word with explanatory comments",
      "Priority provisions: workshare, exclusivity, post-award subcontract, termination",
      "FAR 52.219-14 compliance in workshare",
      "Redline summary document with top changes and rationale",
      "Escalate to legal for IP and liability provisions",
    ],
    modelAnswer:
      "When I receive a teaming agreement, I read it completely before opening Track Changes. I review against my checklist: workshare — is it expressed as cost of performance (not revenue) and compliant with FAR 52.219-14? Exclusivity — is duration reasonable (through award + 90 days, not perpetual)? Post-award subcontract — does it guarantee specific PWS sections, contract type, and POP, or just 'best efforts'? Proposal costs — does each party bear own costs? Termination — what happens to invested bid costs if the prime terminates? Governing law — is it our state or a neutral forum? I redline in Word with a comment on every change explaining the business reason. I send a redline summary listing my top 5-7 changes with rationale. For IP and unlimited liability provisions, I escalate to legal before sending. I never accept 'best efforts' language on post-award workshare — I redline to specific PWS sections and dollar values tied to the prime contract structure.",
    commonMistakes: [
      "Not mentioning FAR 52.219-14 workshare compliance",
      "Accepting 'best efforts' on post-award subcontract",
      "Redlining without explanatory comments",
      "Not sending a summary document to focus negotiation",
    ],
    followUps: [
      "What if the prime refuses to change the workshare provision?",
      "How do you handle a mutual NDA incorporated by reference?",
      "Walk me through redlining a one-sided NDA.",
    ],
  },
  {
    id: "srai-05",
    category: "technical",
    question: "How do you manage multiple contracts across different clients simultaneously?",
    keyPoints: [
      "Master tracking spreadsheet with R/Y/G risk indicators",
      "Priority matrix: red risk + near deadline first",
      "Calendar blocking for recurring portfolio tasks",
      "Weekly status reports to each client leadership",
      "Escalation criteria for funding, CPARS, and compliance issues",
    ],
    modelAnswer:
      "I currently manage 12 active contracts across 4 clients. I maintain a master tracking spreadsheet — contract number, client, agency, type, POP, funded value, next deliverable, option date, CPARS rating, and R/Y/G risk level. Every Monday I sort by risk and deadline to set the week's priorities. I block calendar time: Monday AM for invoicing across all contracts, Tuesday for COR meetings, Wednesday for mod review, Thursday for file management, Friday for reporting. Each client gets a weekly email with green/yellow/red status per contract. I escalate to client leadership when funding will run out in 30 days, CPARS is at risk, or a legal/compliance decision is needed. I handle independently: routine invoicing, standard mods, deliverable tracking, and file updates. The key is that no contract waits for a fire drill — the monthly routine from Skill 1 runs on schedule regardless of which client owns the contract.",
    commonMistakes: [
      "Saying you just work harder without a system",
      "No mention of prioritization or risk-based triage",
      "Treating all contracts equally regardless of risk/deadline",
      "No client communication structure",
    ],
    followUps: [
      "What's in your master tracking spreadsheet?",
      "How many contracts can one senior admin realistically manage?",
      "Tell me about a time you had conflicting deadlines across clients.",
    ],
  },
  {
    id: "srai-06",
    category: "technical",
    question: "What FAR clauses do you look for first when reviewing a new contract?",
    keyPoints: [
      "Changes clause (52.243-1/2) — scope change authority",
      "Limitation of funds (52.232-22) on cost-type",
      "Key personnel (52.215-12 or similar)",
      "Limitation on subcontracting (52.219-14) on set-asides",
      "Disputes (52.233-1), Termination (52.249-x), IP/Data Rights",
      "DFARS cyber (252.204-7012) on defense contracts",
    ],
    modelAnswer:
      "Within the first 30 minutes of reading a new contract, I locate these 10 clauses: (1) Changes — 52.243-1 or -2, to understand unilateral change authority and scope limits; (2) Limitation of Funds — 52.232-22 on cost-type, for the 75% notification threshold; (3) Key Personnel — to know who requires KO approval to replace; (4) Limitation on Subcontracting — 52.219-14 on set-asides; (5) Disputes — 52.233-1 and whether agency supplement applies; (6) Termination — 52.249-1/2 for T4C/T4D rights; (7) Payments/Invoicing — 52.232-x for WAWF or agency system; (8) Data Rights — DFARS 252.227-7013/7015 on defense; (9) Cyber — DFARS 252.204-7012/7019/7020 on defense; (10) Option provisions — 52.217-8/9 for exercise windows. These tell me my operational obligations, risk exposure, and compliance calendar before I read the rest of the boilerplate.",
    commonMistakes: [
      "Listing clauses without explaining why each matters",
      "Reading Section A first instead of operational clauses",
      "Missing DFARS clauses on defense contracts",
      "Not connecting clauses to action items",
    ],
    followUps: [
      "What do you do if a standard clause is missing from Section I?",
      "How do you handle DFARS 7012 on a contract awarded before CMMC requirements?",
      "What's the difference between 52.243-1 and 52.243-2?",
    ],
  },
  {
    id: "srai-07",
    category: "technical",
    question: "How do you build a contract brief?",
    keyPoints: [
      "7 sections: identification, scope, financials, deliverables, clauses, compliance calendar, risk flags",
      "Built within 24 hours of award",
      "Updated on every mod, personnel change, or new risk",
      "Distributed to PM, finance, legal, and leadership",
      "Version-controlled with date stamps",
    ],
    modelAnswer:
      "I build the contract brief within 24 hours of award using our 7-section template. Section 1: contract number, type, agency, KO/COR contacts, POP, and total value. Section 2: 2-3 sentence scope summary, work location, key personnel, and clearance requirements. Section 3: funded value vs ceiling, CLIN structure, option values, and LOF threshold. Section 4: deliverable table with frequency, due dates, recipients, and format — pulled from CDRLs. Section 5: non-standard clauses only — changes, key personnel, limitation on subcontracting, inspection, LDs, insurance, and any RED-flagged unusual clauses. Section 6: month-by-month compliance calendar — invoices, reports, option windows, SAM renewal, SF-294 dates. Section 7: R/Y/G risk flags across scope, funding, performance, sub, clearance, and compliance. I distribute to PM, finance, and leadership within 48 hours. Every mod triggers a brief update — I version-control as [Contract#]_Brief_v2_[date]. The brief is the document I hand a new PM on day one so they never operate without knowing the contract boundaries.",
    commonMistakes: [
      "Describing only 2-3 sections instead of all 7",
      "Not mentioning version control or update triggers",
      "Including every boilerplate clause instead of non-standard only",
      "Building the brief weeks after award instead of 24 hours",
    ],
    followUps: [
      "Show me an example of a risk flag that changed from green to red.",
      "How does the brief differ for a prime vs subcontractor admin?",
      "What if the PM ignores the brief and agrees to out-of-scope work?",
    ],
  },
  {
    id: "srai-08",
    category: "behavioral",
    question: "Tell me about a time you caught a compliance issue before it became a problem.",
    keyPoints: [
      "STAR method with specific compliance area",
      "Early detection through systematic review (not luck)",
      "Corrective action taken before government or auditor discovery",
      "Quantified impact of early catch",
      "Process improvement to prevent recurrence",
    ],
    modelAnswer:
      "Situation: During my quarterly SAM.gov review across a 4-client portfolio, I noticed one client's SAM registration was set to expire in 38 days — they had 3 active contracts totaling $4.5M. Task: An expired SAM registration makes the contractor ineligible for award modifications and payments. Action: I immediately flagged this as RED in my portfolio tracker, notified the client CEO and contracts director, and walked their admin through the SAM renewal process including updated reps and certs. I also checked all pending mods and invoices to ensure nothing would be blocked. Result: SAM was renewed 12 days before expiration with zero payment disruption. I then added SAM expiration dates to every contract brief's Section 6 compliance calendar and set 60- and 30-day automated reminders across the portfolio. This catch prevented what could have been a payment stoppage on $4.5M in active contracts. I now run a quarterly SAM audit across all clients as part of my standard portfolio routine.",
    commonMistakes: [
      "Example where the issue was already discovered by auditor or KO",
      "No systematic process — just happened to notice",
      "Not describing preventive process change afterward",
      "Vague without dollar amounts or contract count",
    ],
    followUps: [
      "What other compliance dates do you track in the calendar?",
      "How do you monitor SAM.gov across multiple clients?",
      "What happens if SAM expires mid-contract?",
    ],
  },
];

export const SR_ADMIN_RESUME_BULLETS: ResumeBullet[] = [
  {
    id: "rb-01",
    template:
      "Managed cradle-to-grave contract administration for portfolio of [X] federal contracts valued at $[X]M across [agencies], ensuring FAR/DFARS compliance from pre-award through closeout.",
    placeholders: ["X contracts", "$XM total value", "agency names"],
    tips: [
      "Use specific numbers — '12 contracts' not 'multiple contracts'",
      "Name agencies: USACE, NAVSEA, VA, GSA",
      "Include contract types: FFP, T&M, CPFF, IDIQ",
    ],
  },
  {
    id: "rb-02",
    template:
      "Conducted FAR/DFARS compliance reviews for FFP, T&M, and CPFF contract types, identifying and resolving [X] compliance risks that prevented [specific outcome].",
    placeholders: ["number of risks", "outcome prevented"],
    tips: [
      "Quantify risks caught: '15 compliance risks'",
      "Name outcomes: 'payment stoppage', 'CPARS downgrade', 'unauthorized scope'",
      "Reference specific clauses: 52.232-22, 52.219-14, DFARS 7012",
    ],
  },
  {
    id: "rb-03",
    template:
      "Redlined and negotiated NDAs, teaming agreements, and contract modifications with [X] industry partners, ensuring FAR-compliant workshare and acceptable liability terms.",
    placeholders: ["number of partners/documents"],
    tips: [
      "Specify document types — don't just say 'contracts'",
      "Mention FAR 52.219-14 compliance in teaming workshare",
      "Include outcome: 'negotiated mutual NDA terms' or 'secured post-award sub guarantee'",
    ],
  },
  {
    id: "rb-04",
    template:
      "Built contract briefs for [X] contracts covering key clauses, deliverable schedules, compliance calendars, and risk flags used by program management and finance teams.",
    placeholders: ["number of briefs"],
    tips: [
      "Mention the 7-section template structure",
      "Note stakeholders: PM, finance, leadership",
      "Include update frequency: 'updated on every modification'",
    ],
  },
  {
    id: "rb-05",
    template:
      "Supported [X] proposal submissions including Section K certifications, compliance matrices, teaming agreement review, and subcontractor agreement compliance.",
    placeholders: ["number of proposals"],
    tips: [
      "Mention win rate if strong: 'supporting 8 proposals with 3 wins'",
      "Reference Section L compliance matrix specifically",
      "Note SAM.gov verification and reps/certs review",
    ],
  },
  {
    id: "rb-06",
    template:
      "Administered multi-client contract portfolio using master tracking spreadsheets and CLM systems, prioritizing [X] high-risk contracts and maintaining [X]% on-time deliverable submission rate.",
    placeholders: ["high-risk count", "on-time percentage"],
    tips: [
      "Quantify portfolio size and performance metrics",
      "Mention tools: Excel trackers, Cobblestone, Deltek, SharePoint",
      "Include CPARS achievement if strong",
    ],
  },
];

export const SR_ADMIN_SALARY_NEGOTIATION: SalaryNegotiationGuide = {
  targetRange: { min: 95000, max: 110000 },
  marketContext:
    "Senior Contracts Administrator roles at defense and civilian federal contractors in the DC metro, Huntsville, San Diego, and Colorado Springs markets typically range $95K-$110K for candidates with 6+ years of federal contract administration experience. CFCM certification, multi-client portfolio experience, and DFARS expertise command the upper end. Remote positions may offer $90K-$105K.",
  anchorStrategy:
    "Anchor at $110K citing your specific experience: portfolio size, contract types managed, CFCM progress, and redlining/contract brief expertise from this program. Justify with market data from Glassdoor, ClearanceJobs, and NCMA salary surveys. If they offer $95K, counter at $105K with specific value propositions. Accept $102K+ as a strong outcome. Never accept the first offer without negotiating.",
  fallbackAsks: [
    "Additional PTO — request 22-25 days instead of standard 15-18",
    "Signing bonus — $5,000-$10,000 to bridge gap if base salary is firm",
    "Remote/hybrid flexibility — 2-3 days remote saves commute costs",
    "Professional development budget — CFCM exam fee (~$500), NCMA membership (~$250/year), training courses",
    "Earlier performance review — 6-month instead of 12-month first review with compensation adjustment",
    "Annual certification bonus — $1,000 upon CFCM completion",
  ],
  scripts: [
    {
      situation: "They offer $95K — bottom of range",
      script:
        "Thank you for the offer — I'm excited about this role. Based on my experience managing a [X]-contract portfolio across [agencies] and my CFCM preparation, I was targeting $108K. I believe my cradle-to-grave administration experience and redlining expertise align with the senior level you're hiring for. Is there flexibility to $105K?",
    },
    {
      situation: "They say salary is non-negotiable at $100K",
      script:
        "I understand the base is firm at $100K. Could we discuss a signing bonus of $5,000 to recognize my immediate contribution, plus a professional development budget for my CFCM exam and NCMA membership? I'd also appreciate a 6-month performance review with compensation adjustment opportunity.",
    },
    {
      situation: "They ask your salary expectation upfront",
      script:
        "Based on my research for senior contracts administrator roles in this market with my experience level, I'm targeting $105K-$110K. I'm flexible depending on the total compensation package including benefits, PTO, and professional development support.",
    },
    {
      situation: "Remote role offers $92K",
      script:
        "For a remote senior contracts admin role, my research shows $98K-$105K is market rate for 6+ years experience. Given my multi-client portfolio management and DFARS expertise, I'd like to target $100K with a professional development stipend for CFCM certification.",
    },
  ],
};
