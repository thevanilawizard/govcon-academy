import type { CurriculumLesson } from "../types";
import { buildLesson } from "./lesson-builder";

export const CAREER_WEEKS = [
  {
    "week": 1,
    "title": "Federal Contracting Foundations"
  },
  {
    "week": 2,
    "title": "The FAR in Depth — Parts 1-15"
  },
  {
    "week": 3,
    "title": "Small Business and Set-Asides"
  },
  {
    "week": 4,
    "title": "Contract Pricing Fundamentals"
  },
  {
    "week": 5,
    "title": "Proposals and Source Selection"
  },
  {
    "week": 6,
    "title": "Contract Administration"
  },
  {
    "week": 7,
    "title": "DFARS and Defense Contracting"
  },
  {
    "week": 8,
    "title": "Job Readiness and Interview Prep"
  }
] as const;

export const CAREER_CURRICULUM: CurriculumLesson[] = [
  buildLesson("career", 1, 1, "What is the FAR and why does it exist?", 15, "far-core", {
  "bigIdea": "The Federal Acquisition Regulation (FAR) is the uniform rulebook that governs how executive agencies buy goods and services.",
  "whyItMatters": "Every clause in your contract traces to the FAR. Contracts professionals who cannot navigate it lose disputes, miss compliance obligations, and fail audits.",
  "consequence": "Performing work without understanding applicable FAR clauses exposes your firm to payment withholds, termination for default, and potential debarment.",
  "coreContent": [
    {
      "heading": "Origins and authority",
      "content": "Congress delegates procurement authority to agencies, but the FAR codifies uniform policies under 41 U.S.C. Chapter 7. The FAR Council (OFPP, GSA, DOD, NASA) maintains it. Agency supplements like DFARS layer on top but cannot contradict the FAR.",
      "martinSays": "I tell every new hire: read FAR Part 1 before you read anything else. It explains the acquisition principles that judges and GAO apply when things go wrong.",
      "farCitation": "FAR 1.101"
    },
    {
      "heading": "Structure of the FAR",
      "content": "The FAR is organized in 53 parts: Parts 1–4 cover general matters; Parts 5–12 cover acquisition planning and commercial items; Parts 13–19 cover simplified acquisition and small business; Parts 30–37 cover pricing; Parts 42–46 cover administration.",
      "martinSays": "When a KO cites 'FAR 15.306,' they mean the competitive range step in negotiated procurements — knowing part numbers saves hours in RFP review.",
      "farCitation": "FAR 1.105"
    },
    {
      "heading": "Contract clauses vs. FAR parts",
      "content": "FAR Part 52 contains standard solicitation provisions and contract clauses. The clause matrix in Section I of your contract tells you which clauses apply. Clause text is often identical to Part 52 text but incorporated by reference.",
      "martinSays": "Always build a clause matrix on day one of a new award. Missing a flow-down clause to subs has ended more prime contracts than bad pricing.",
      "farCitation": "FAR 52.101"
    },
    {
      "heading": "Contractor obligations",
      "content": "As a contractor, you must comply with all incorporated clauses whether or not you read them. Flow-down requirements mean prime contractors must push certain clauses to subcontractors.",
      "martinSays": "I've seen a $2M contract terminated because the prime never flowed down FAR 52.222-26 to a sub — the prime ate the violation.",
      "farCitation": "FAR 52.107"
    }
  ],
  "realWorldExample": {
    "scenario": "A mid-size IT contractor receives its first DoD task order with 87 incorporated clauses.",
    "action": "The contracts manager builds a compliance matrix mapping each clause to an owner, due date, and evidence file within the first week.",
    "outcome": "DCMA audit finds zero missing flow-downs; CPARS rates management responsiveness Very Good.",
    "lesson": "Treat the FAR as an operating system, not a reference book you open once."
  },
  "scenario": {
    "prompt": "Your PM says 'FAR doesn't apply to commercial items — skip the clause review.' The contract is under FAR Part 12. What do you do?",
    "options": [
      {
        "id": "a",
        "label": "Skip review — Part 12 contracts have no FAR clauses",
        "isCorrect": false,
        "feedback": "Part 12 still incorporates clauses from Part 52, often including changes, termination, and small business provisions."
      },
      {
        "id": "b",
        "label": "Review the clause matrix anyway and flow down required clauses to subs",
        "isCorrect": true,
        "feedback": "Correct. FAR 12.301 requires specific clauses even on commercial item acquisitions."
      },
      {
        "id": "c",
        "label": "Ask the COR to waive all FAR clauses",
        "isCorrect": false,
        "feedback": "CORs cannot waive statute-based requirements; only the KO can approve deviations per agency policy."
      },
      {
        "id": "d",
        "label": "Rely on the prime's template from a civilian agency",
        "isCorrect": false,
        "feedback": "DoD supplements (DFARS) add mandatory clauses not present on civilian contracts."
      }
    ],
    "farCitation": "FAR 12.301"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Who maintains the Federal Acquisition Regulation?",
      "options": [
        "Congress directly",
        "The FAR Council",
        "Individual contracting officers",
        "DCAA"
      ],
      "correctIndex": 1,
      "explanation": "The FAR Council maintains the FAR per FAR 1.201."
    },
    {
      "id": "q2",
      "question": "Where are standard contract clauses found?",
      "options": [
        "FAR Part 15",
        "FAR Part 52",
        "FAR Part 31",
        "DFARS 252.204"
      ],
      "correctIndex": 1,
      "explanation": "FAR Part 52 contains solicitation provisions and contract clauses."
    },
    {
      "id": "q3",
      "question": "Agency supplements like DFARS must:",
      "options": [
        "Contradict the FAR when DoD needs flexibility",
        "Supplement, not contradict, the FAR",
        "Replace the FAR entirely on defense contracts",
        "Apply only to grants"
      ],
      "correctIndex": 1,
      "explanation": "Supplements implement agency-specific policy without contradicting the FAR (FAR 1.304)."
    },
    {
      "id": "q4",
      "question": "Prime contractors must flow down certain clauses because:",
      "options": [
        "Subs prefer them",
        "FAR 52.107 and specific clause prescriptions require it",
        "CPARS requires it",
        "It reduces pricing"
      ],
      "correctIndex": 1,
      "explanation": "FAR 52.107 and individual clause prescriptions mandate flow-down to subcontractors."
    },
    {
      "id": "q5",
      "question": "The best first step when assigned a new federal contract is:",
      "options": [
        "Start billing immediately",
        "Build a clause compliance matrix",
        "Negotiate profit",
        "File a protest"
      ],
      "correctIndex": 1,
      "explanation": "A clause matrix maps obligations before performance begins — standard contracts practice."
    }
  ],
  "diagramId": "far-hierarchy"
}),
  buildLesson("career", 1, 2, "The acquisition team — who does what", 15, "foundations", {
  "bigIdea": "Federal acquisitions involve distinct roles — Contracting Officer, COR, PM, legal, and small business — each with defined authority.",
  "whyItMatters": "Misidentifying who can bind the government causes unauthorized obligations, the most expensive mistake in contract administration.",
  "consequence": "Acting on COR direction without a modification can leave your firm performing unfunded work with no recovery path.",
  "coreContent": [
    {
      "heading": "Contracting Officer (KO)",
      "content": "Only the Contracting Officer has authority to obligate government funds. KOs are warranted per agency policy and sign awards, modifications, and terminations.",
      "martinSays": "When a COR asks for extra work, my first question is always: 'Has the KO signed a mod?' Everything else is conversation.",
      "farCitation": "FAR 1.602"
    },
    {
      "heading": "Contracting Officer's Representative (COR)",
      "content": "CORs monitor technical performance day-to-day but cannot authorize scope changes or funding. They document performance for CPARS and QASP.",
      "martinSays": "Build a weekly rhythm with your COR — office hours, status template, escalation path. Good COR relationships prevent CPARS surprises.",
      "farCitation": "FAR 1.602-2"
    },
    {
      "heading": "Program Manager and requiring activity",
      "content": "The requiring activity defines the need; the PM translates mission requirements into PWS deliverables. They influence requirements but do not sign contracts.",
      "martinSays": "Early PM engagement in capture helps shape Section C before the RFP drops — after RFP release, you're mostly compliant, not creative.",
      "farCitation": "FAR 7.105"
    },
    {
      "heading": "Small business specialist and legal",
      "content": "Small business specialists advise on set-aside strategy and subcontracting plans. Legal reviews deviations, claims, and protests.",
      "martinSays": "Loop the SBLO before you finalize a teaming agreement — affiliation findings have killed more deals than bad technical scores.",
      "farCitation": "FAR 19.201"
    }
  ],
  "realWorldExample": {
    "scenario": "A COR emails: 'Add weekly cybersecurity dashboards — we need them starting Monday.' No mod exists.",
    "action": "The contracts manager acknowledges the need, cites the Changes clause, and submits a bilateral mod request with ROM pricing the same day.",
    "outcome": "KO issues a $45K mod within three weeks; contractor avoids unauthorized performance.",
    "lesson": "Only the KO binds the government — COR direction creates opportunity for a mod, not an obligation to perform."
  },
  "scenario": {
    "prompt": "The COR insists you begin new analytics work immediately. The KO is on leave for two weeks. What is the best action?",
    "options": [
      {
        "id": "a",
        "label": "Start work to preserve the relationship",
        "isCorrect": false,
        "feedback": "Unauthorized performance is at your financial risk per GAO precedent."
      },
      {
        "id": "b",
        "label": "Document the request and ask the KO's delegate for an expedited mod",
        "isCorrect": true,
        "feedback": "Correct — preserve the relationship while protecting the company legally."
      },
      {
        "id": "c",
        "label": "Refuse all communication until the KO returns",
        "isCorrect": false,
        "feedback": "Overcorrection damages the relationship; engage constructively while seeking formal authorization."
      },
      {
        "id": "d",
        "label": "Bill the work as out-of-scope on the next invoice",
        "isCorrect": false,
        "feedback": "Billing without a mod can trigger False Claims Act exposure."
      }
    ],
    "farCitation": "FAR 43.103"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Who can legally bind the government to a contract modification?",
      "options": [
        "COR",
        "Program Manager",
        "Contracting Officer",
        "Technical evaluator"
      ],
      "correctIndex": 2,
      "explanation": "Only the Contracting Officer has binding authority (FAR 1.602)."
    },
    {
      "id": "q2",
      "question": "The COR's primary role is:",
      "options": [
        "Obligating funds",
        "Technical monitoring and CPARS input",
        "Selecting the awardee",
        "Setting profit rates"
      ],
      "correctIndex": 1,
      "explanation": "CORs monitor performance per FAR 1.602-2."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance at COR direction may result in:",
      "options": [
        "Automatic payment",
        "No recovery without a signed mod",
        "Protest rights",
        "Higher CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO consistently holds contractors responsible for verifying KO authority."
    },
    {
      "id": "q4",
      "question": "Small business specialists advise on:",
      "options": [
        "Source selection scoring",
        "Set-aside and subcontracting strategy",
        "Invoice payment",
        "Security clearances"
      ],
      "correctIndex": 1,
      "explanation": "SB specialists support FAR Part 19 compliance."
    },
    {
      "id": "q5",
      "question": "The requiring activity is responsible for:",
      "options": [
        "Signing the contract",
        "Defining the mission need",
        "Approving invoices",
        "Conducting CPARS"
      ],
      "correctIndex": 1,
      "explanation": "Requirements flow from the requiring activity through the PM to the PWS."
    }
  ],
  "diagramId": "acquisition-lifecycle"
}),
  buildLesson("career", 1, 3, "Types of federal contracts — FFP, T&M, CPFF", 20, "foundations", {
  "bigIdea": "Contract type determines who bears cost risk: FFP shifts risk to the contractor; T&M and cost-type contracts share risk with the government.",
  "whyItMatters": "Choosing or accepting the wrong contract type without understanding margin and compliance implications destroys profitability.",
  "consequence": "On FFP contracts, cost overruns come from your fee; on cost-type, inadequate accounting systems stop billing entirely.",
  "coreContent": [
    {
      "heading": "Firm Fixed Price (FFP)",
      "content": "FFP establishes a fixed total price regardless of actual costs. The contractor earns profit by controlling costs below the price.",
      "martinSays": "I love FFP when scope is stable — every dollar saved drops to your bottom line. I fear FFP when the COR has a history of scope creep.",
      "farCitation": "FAR 16.202"
    },
    {
      "heading": "Time and Materials (T&M)",
      "content": "T&M pays for hours at specified rates plus materials. It requires a ceiling price and careful timekeeping per FAR 16.601.",
      "martinSays": "T&M is a training-wheels contract type — government accepts more risk, but they watch your hours like hawks.",
      "farCitation": "FAR 16.601"
    },
    {
      "heading": "Cost Plus Fixed Fee (CPFF)",
      "content": "CPFF reimburses allowable costs plus a fixed fee. It requires an adequate accounting system and DCAA scrutiny.",
      "martinSays": "If your accounting system isn't DCAA-ready, do not bid CPFF — you'll win and then not get paid.",
      "farCitation": "FAR 16.302"
    },
    {
      "heading": "Selecting contract type",
      "content": "FAR Part 16 guides the government toward appropriate types based on risk, price certainty, and complexity. Contractors should evaluate type during bid/no-bid.",
      "martinSays": "Always model three scenarios in pricing: optimistic, expected, and nightmare. On FFP, the nightmare scenario must still show margin.",
      "farCitation": "FAR 16.103"
    }
  ],
  "realWorldExample": {
    "scenario": "A contractor wins an FFP help desk contract but staffs with senior engineers at junior rates in the proposal.",
    "action": "Halfway through base year, turnover forces hiring at market rates; margins collapse.",
    "outcome": "Company re-baselines on the option year bid but earns only Satisfactory CPARS for cost control.",
    "lesson": "Match staffing plan to price — FFP rewards discipline, not heroics."
  },
  "scenario": {
    "prompt": "You can bid a $1.2M requirement as FFP or T&M. Scope is vague with likely engineering changes. Which approach protects a new firm?",
    "options": [
      {
        "id": "a",
        "label": "FFP with aggressive pricing to win",
        "isCorrect": false,
        "feedback": "Vague scope plus FFP equals margin risk for inexperienced firms."
      },
      {
        "id": "b",
        "label": "T&M with a not-to-exceed ceiling and clear labor categories",
        "isCorrect": true,
        "feedback": "T&M shares risk when scope uncertainty is high (FAR 16.601)."
      },
      {
        "id": "c",
        "label": "CPFF without an accounting system",
        "isCorrect": false,
        "feedback": "Cost-type requires adequate accounting per FAR 16.301-3."
      },
      {
        "id": "d",
        "label": "Decline to bid",
        "isCorrect": false,
        "feedback": "T&M is a legitimate strategy for uncertain scope."
      }
    ],
    "farCitation": "FAR 16.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Under FFP, cost overrun risk falls on:",
      "options": [
        "Government",
        "Contractor",
        "Subcontractor only",
        "Shared 50/50"
      ],
      "correctIndex": 1,
      "explanation": "FFP places cost risk on the contractor (FAR 16.202-1)."
    },
    {
      "id": "q2",
      "question": "T&M contracts require:",
      "options": [
        "No documentation",
        "A ceiling price and timekeeping controls",
        "DCAA audit before award always",
        "Fixed fee only"
      ],
      "correctIndex": 1,
      "explanation": "FAR 16.601 mandates ceiling prices and controls on T&M."
    },
    {
      "id": "q3",
      "question": "CPFF requires:",
      "options": [
        "No accounting system",
        "An adequate accounting system",
        "LPTA evaluation",
        "Commercial item procedures only"
      ],
      "correctIndex": 1,
      "explanation": "Cost-type contracts require adequate accounting (FAR 16.301-3)."
    },
    {
      "id": "q4",
      "question": "The government selects contract type based on:",
      "options": [
        "Contractor preference only",
        "Risk and price certainty per FAR Part 16",
        "Random assignment",
        "Past performance alone"
      ],
      "correctIndex": 1,
      "explanation": "FAR 16.103 guides contract type selection."
    },
    {
      "id": "q5",
      "question": "On FFP, contractor profit increases when:",
      "options": [
        "Costs increase",
        "Costs decrease below price",
        "Hours increase",
        "Government adds scope without mod"
      ],
      "correctIndex": 1,
      "explanation": "FFP profit comes from cost savings below the fixed price."
    }
  ],
  "practicalExercise": "Review a sample contract header and identify contract type, ceiling, and which FAR Part 16 subpart applies. Write two sentences on cost risk allocation."
}),
  buildLesson("career", 1, 4, "SAM.gov registration and the federal marketplace", 15, "sam-market", {
  "bigIdea": "SAM.gov is the mandatory gateway for federal contractor registration, entity validation, and opportunity discovery.",
  "whyItMatters": "Inactive SAM registration stops awards, payments, and eligibility for set-aside programs instantly.",
  "consequence": "An expired registration during award means the agency must cancel — you lose the win and damage past performance narratives.",
  "coreContent": [
    {
      "heading": "What SAM.gov controls",
      "content": "SAM validates your UEI, CAGE, NAICS, business type, and reps & certs. It feeds FPDS, CPARS, and payment systems.",
      "martinSays": "Check SAM weekly. I've seen a $900K award held for 11 days because an intern let registration lapse.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "UEI and entity registration",
      "content": "The Unique Entity Identifier replaced DUNS in 2022. Registration is free at SAM.gov and required before contract award.",
      "martinSays": "Screenshot your active registration status when you submit every proposal — evaluators check.",
      "farCitation": "FAR 4.1801"
    },
    {
      "heading": "Representations and certifications",
      "content": "Annual reps and certs in SAM cover size status, ethics, and compliance. False certifications trigger FCA liability.",
      "martinSays": "When your revenue crosses a size standard mid-year, update SAM immediately — size protests don't care about your good intentions.",
      "farCitation": "FAR 52.204-8"
    },
    {
      "heading": "Opportunity discovery",
      "content": "Contract opportunities publish on SAM.gov (and beta.SAM). Saved searches and NAICS filters build your pipeline.",
      "martinSays": "Build three saved searches: your primary NAICS, your set-aside type, and your target agency. Review every morning.",
      "farCitation": "FAR 5.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup wins a VA SDVOSB set-aside but SAM shows inactive due to missed annual renewal.",
    "action": "Contracts manager submits emergency renewal, contacts KO with proof of submission.",
    "outcome": "Award delayed 8 days; firm implements calendar alerts 30/60/90 days before expiration.",
    "lesson": "SAM is infrastructure — treat renewal like payroll, not paperwork."
  },
  "scenario": {
    "prompt": "Your SAM registration expires tomorrow. You have a proposal due tonight. What is the priority?",
    "options": [
      {
        "id": "a",
        "label": "Submit proposal first, fix SAM later",
        "isCorrect": false,
        "feedback": "Inactive SAM makes you ineligible for award (FAR 4.1102)."
      },
      {
        "id": "b",
        "label": "Renew SAM immediately, then submit proposal with active status",
        "isCorrect": true,
        "feedback": "Active registration is a condition of award."
      },
      {
        "id": "c",
        "label": "Ask the KO to waive SAM",
        "isCorrect": false,
        "feedback": "SAM is statutory — waivers are not available for standard acquisitions."
      },
      {
        "id": "d",
        "label": "Bid under a partner's SAM record",
        "isCorrect": false,
        "feedback": "Misrepresentation of eligibility creates fraud exposure."
      }
    ],
    "farCitation": "FAR 4.1102"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "SAM.gov registration is required for:",
      "options": [
        "Grants only",
        "Federal contract awards and payments",
        "State contracts",
        "Commercial sales"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires SAM registration."
    },
    {
      "id": "q2",
      "question": "The UEI replaced:",
      "options": [
        "CAGE code",
        "DUNS number",
        "NAICS code",
        "CPARS ID"
      ],
      "correctIndex": 1,
      "explanation": "UEI replaced DUNS per FAR 4.1801."
    },
    {
      "id": "q3",
      "question": "Representations and certifications in SAM are:",
      "options": [
        "Optional",
        "Required annually",
        "Required once ever",
        "Only for large business"
      ],
      "correctIndex": 1,
      "explanation": "FAR 52.204-8 requires annual reps and certs."
    },
    {
      "id": "q4",
      "question": "Federal contract opportunities are published on:",
      "options": [
        "USASpending only",
        "SAM.gov",
        "DCAA portal",
        "CPARS"
      ],
      "correctIndex": 1,
      "explanation": "FAR 5.101 requires public notice on SAM."
    },
    {
      "id": "q5",
      "question": "Inactive SAM status at award typically causes:",
      "options": [
        "Automatic extension",
        "Award delay or cancellation",
        "Higher fee",
        "LPTA evaluation"
      ],
      "correctIndex": 1,
      "explanation": "Agencies cannot award without active SAM registration."
    }
  ],
  "simulatorPractice": "Complete the SAM.gov registration walkthrough in the simulator setup flow and verify your UEI and NAICS codes."
}),
  buildLesson("career", 1, 5, "Weekly review quiz", 10, "foundations", {
  "bigIdea": "Week 1 integrated the FAR framework, acquisition roles, contract types, and SAM.gov — the four pillars of federal contracting literacy.",
  "whyItMatters": "Foundations determine whether later pricing, proposal, and administration lessons stick or collapse under real-world pressure.",
  "consequence": "Gaps in Week 1 material reappear as unauthorized obligations, wrong contract type bids, and registration failures.",
  "coreContent": [
    {
      "heading": "FAR recap",
      "content": "The FAR provides uniform acquisition policy; Part 52 clauses create binding obligations. Supplements add agency rules.",
      "martinSays": "If you remember one thing: clause matrix on every contract, day one.",
      "farCitation": "FAR 1.101"
    },
    {
      "heading": "Roles recap",
      "content": "KO binds the government; COR monitors performance; PM defines needs. Know who can authorize what.",
      "martinSays": "Unauthorized work is the silent margin killer — always get the mod.",
      "farCitation": "FAR 1.602"
    },
    {
      "heading": "Contract types recap",
      "content": "FFP = contractor cost risk. T&M = shared risk with ceiling. CPFF = cost reimbursement plus fee.",
      "martinSays": "Bid the contract type your accounting system and scope clarity can support.",
      "farCitation": "FAR 16.103"
    },
    {
      "heading": "SAM recap",
      "content": "Active SAM, correct NAICS, current reps and certs. Check it before every proposal.",
      "martinSays": "Set calendar reminders now — not after your first award delay.",
      "farCitation": "FAR 4.1102"
    }
  ],
  "realWorldExample": {
    "scenario": "A new hire skips Week 1 and jumps to proposal writing.",
    "action": "They submit a bid with expired SAM and miss a DFARS clause in the matrix.",
    "outcome": "Proposal rejected for eligibility; prime absorbs rework costs.",
    "lesson": "Foundations aren't optional — they're the guardrails."
  },
  "scenario": {
    "prompt": "Which Week 1 concept applies when a COR requests unfunded work?",
    "options": [
      {
        "id": "a",
        "label": "SAM.gov registration tiers",
        "isCorrect": false,
        "feedback": "Registration is unrelated to scope changes."
      },
      {
        "id": "b",
        "label": "KO authority and the Changes clause",
        "isCorrect": true,
        "feedback": "Only the KO can authorize changes via modification."
      },
      {
        "id": "c",
        "label": "FFP vs T&M pricing",
        "isCorrect": false,
        "feedback": "Contract type matters for pricing but the immediate issue is authorization."
      },
      {
        "id": "d",
        "label": "FAR Part 52 structure",
        "isCorrect": false,
        "feedback": "Too general — the specific issue is binding authority."
      }
    ],
    "farCitation": "FAR 43.103"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Standard contract clauses appear primarily in:",
      "options": [
        "FAR Part 12",
        "FAR Part 52",
        "FAR Part 31",
        "FAR Part 6"
      ],
      "correctIndex": 1,
      "explanation": "FAR Part 52 contains standard clauses."
    },
    {
      "id": "q2",
      "question": "The COR can:",
      "options": [
        "Sign modifications",
        "Monitor technical performance",
        "Obligate funds",
        "Award contracts"
      ],
      "correctIndex": 1,
      "explanation": "COR monitors performance per FAR 1.602-2."
    },
    {
      "id": "q3",
      "question": "FFP contracts place cost risk on:",
      "options": [
        "Government",
        "Contractor",
        "GSA",
        "SBA"
      ],
      "correctIndex": 1,
      "explanation": "FAR 16.202-1 allocates cost risk to contractors on FFP."
    },
    {
      "id": "q4",
      "question": "UEI is obtained through:",
      "options": [
        "DCAA",
        "SAM.gov",
        "CPARS",
        "GSA Schedule"
      ],
      "correctIndex": 1,
      "explanation": "UEI registration is via SAM.gov (FAR 4.1801)."
    },
    {
      "id": "q5",
      "question": "Agency supplements must:",
      "options": [
        "Contradict FAR",
        "Supplement FAR without contradiction",
        "Replace FAR",
        "Apply only to subs"
      ],
      "correctIndex": 1,
      "explanation": "FAR 1.304 governs supplement relationship."
    }
  ]
}),
  buildLesson("career", 2, 1, "FAR Parts 1-4: Authority, definitions, ethics", 20, "far-core", {
  "bigIdea": "FAR Parts 1-4 establish acquisition ethics, definitions, and general authority that every professional must internalize.",
  "whyItMatters": "FAR 3.101 prohibits gratuities; FAR 2.101 defines key terms used in every solicitation.",
  "consequence": "Ethics violations trigger suspension and debarment regardless of technical excellence.",
  "coreContent": [
    {
      "heading": "FAR Parts 1-4: Authority, definitions, ethics — core concept",
      "content": "FAR 3.101 prohibits gratuities; FAR 2.101 defines key terms used in every solicitation. Professionals use FAR 3.104 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — far parts 1-4: authority, definitions, ethics is where theory meets payroll.",
      "farCitation": "FAR 3.104"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 3.104. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 3.104"
    },
    {
      "heading": "Common pitfalls",
      "content": "Ethics violations trigger suspension and debarment regardless of technical excellence. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 3.104"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 3.104 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 3.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world far parts 1-4: authority, definitions, ethics situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 3.104, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "FAR Parts 1-4: Authority, definitions, ethics mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During far parts 1-4: authority, definitions, ethics, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 3.104 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 3.104 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 3.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs far parts 1-4: authority, definitions, ethics?",
      "options": [
        "FAR 3.104",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 3.104 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "FAR Parts 1-4: Authority, definitions, ethics most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 3.104."
    }
  ]
}),
  buildLesson("career", 2, 2, "FAR Parts 6-7: Competition and acquisition planning", 20, "far-core", {
  "bigIdea": "Full and open competition is the default; exceptions require documented justification per FAR Part 6.",
  "whyItMatters": "Acquisition plans under FAR Part 7 drive contract type, set-aside, and bundling decisions before RFP release.",
  "consequence": "Sole-source awards without proper J&A face protest and cancellation.",
  "coreContent": [
    {
      "heading": "FAR Parts 6-7: Competition and acquisition planning — core concept",
      "content": "Acquisition plans under FAR Part 7 drive contract type, set-aside, and bundling decisions before RFP release. Professionals use FAR 6.301 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — far parts 6-7: competition and acquisition planning is where theory meets payroll.",
      "farCitation": "FAR 6.301"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 6.301. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 6.301"
    },
    {
      "heading": "Common pitfalls",
      "content": "Sole-source awards without proper J&A face protest and cancellation. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 6.301"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 6.301 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 6.301"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world far parts 6-7: competition and acquisition planning situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 6.301, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "FAR Parts 6-7: Competition and acquisition planning mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During far parts 6-7: competition and acquisition planning, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 6.301 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 6.301 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 6.301"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs far parts 6-7: competition and acquisition planning?",
      "options": [
        "FAR 6.301",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 6.301 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "FAR Parts 6-7: Competition and acquisition planning most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 6.301."
    }
  ]
}),
  buildLesson("career", 2, 3, "FAR Part 12: Commercial items", 15, "far-core", {
  "bigIdea": "Part 12 streamlines acquisition of commercial products and services with simplified procedures.",
  "whyItMatters": "Commercial item determinations affect clause sets, TINA applicability, and pricing data requirements.",
  "consequence": "Misclassifying non-commercial work as commercial invites audit findings.",
  "coreContent": [
    {
      "heading": "FAR Part 12: Commercial items — core concept",
      "content": "Commercial item determinations affect clause sets, TINA applicability, and pricing data requirements. Professionals use FAR 12.102 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — far part 12: commercial items is where theory meets payroll.",
      "farCitation": "FAR 12.102"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 12.102. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 12.102"
    },
    {
      "heading": "Common pitfalls",
      "content": "Misclassifying non-commercial work as commercial invites audit findings. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 12.102"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 12.102 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 12.102"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world far part 12: commercial items situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 12.102, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "FAR Part 12: Commercial items mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During far part 12: commercial items, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 12.102 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 12.102 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 12.102"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs far part 12: commercial items?",
      "options": [
        "FAR 12.102",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 12.102 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "FAR Part 12: Commercial items most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 12.102."
    }
  ]
}),
  buildLesson("career", 2, 4, "FAR Part 15: Contracting by negotiation", 25, "far-core", {
  "bigIdea": "Part 15 governs negotiated procurements: source selection, discussions, and best value tradeoffs.",
  "whyItMatters": "Sections L and M of RFPs map directly to Part 15 evaluation procedures.",
  "consequence": "Non-compliant proposals are eliminated before price is even opened.",
  "coreContent": [
    {
      "heading": "FAR Part 15: Contracting by negotiation — core concept",
      "content": "Sections L and M of RFPs map directly to Part 15 evaluation procedures. Professionals use FAR 15.308 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — far part 15: contracting by negotiation is where theory meets payroll.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.308. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Common pitfalls",
      "content": "Non-compliant proposals are eliminated before price is even opened. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.308 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.308"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world far part 15: contracting by negotiation situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.308, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "FAR Part 15: Contracting by negotiation mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During far part 15: contracting by negotiation, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.308 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.308 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.308"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs far part 15: contracting by negotiation?",
      "options": [
        "FAR 15.308",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.308 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "FAR Part 15: Contracting by negotiation most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.308."
    }
  ]
}),
  buildLesson("career", 2, 5, "Weekly review quiz + scenario", 15, "far-core", {
  "bigIdea": "Week 2 connected ethics, competition, commercial procedures, and negotiated procurement.",
  "whyItMatters": "Part 15 appears on every major services RFP — mastery here separates analysts from managers.",
  "consequence": "Missing Section L compliance is the leading cause of eliminated proposals.",
  "coreContent": [
    {
      "heading": "Weekly review quiz + scenario — core concept",
      "content": "Part 15 appears on every major services RFP — mastery here separates analysts from managers. Professionals use FAR 15.306 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz + scenario is where theory meets payroll.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.306. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Common pitfalls",
      "content": "Missing Section L compliance is the leading cause of eliminated proposals. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.306 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.306"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz + scenario situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.306, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz + scenario mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz + scenario, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.306 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.306 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.306"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz + scenario?",
      "options": [
        "FAR 15.306",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.306 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz + scenario most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.306."
    }
  ],
  "practicalExercise": "Apply Weekly review quiz + scenario to a redacted contract excerpt: identify the controlling FAR reference, one compliance action, and one risk if ignored."
}),
  buildLesson("career", 3, 1, "FAR Part 19: The 8 set-aside programs", 20, "small-business", {
  "bigIdea": "FAR Part 19 implements small business set-asides: SB, 8(a), HUBZone, SDVOSB, WOSB, and more.",
  "whyItMatters": "Set-asides limit competition to eligible firms — your certifications are strategic assets.",
  "consequence": "Misrepresenting eligibility triggers False Claims Act liability and debarment.",
  "coreContent": [
    {
      "heading": "FAR Part 19: The 8 set-aside programs — core concept",
      "content": "Set-asides limit competition to eligible firms — your certifications are strategic assets. Professionals use FAR 19.502 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — far part 19: the 8 set-aside programs is where theory meets payroll.",
      "farCitation": "FAR 19.502"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 19.502. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 19.502"
    },
    {
      "heading": "Common pitfalls",
      "content": "Misrepresenting eligibility triggers False Claims Act liability and debarment. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 19.502"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 19.502 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 19.502"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world far part 19: the 8 set-aside programs situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 19.502, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "FAR Part 19: The 8 set-aside programs mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During far part 19: the 8 set-aside programs, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 19.502 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 19.502 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 19.502"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs far part 19: the 8 set-aside programs?",
      "options": [
        "FAR 19.502",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 19.502 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "FAR Part 19: The 8 set-aside programs most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 19.502."
    }
  ],
  "diagramId": "set-aside-tree"
}),
  buildLesson("career", 3, 2, "Size standards and affiliation rules", 15, "small-business", {
  "bigIdea": "SBA size standards vary by NAICS; affiliation rules aggregate related entities for size determination.",
  "whyItMatters": "Size protests at award can unseat winners months after celebration.",
  "consequence": "Winning a set-aside while oversized leads to termination for default.",
  "coreContent": [
    {
      "heading": "Size standards and affiliation rules — core concept",
      "content": "Size protests at award can unseat winners months after celebration. Professionals use 13 CFR 121.103 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — size standards and affiliation rules is where theory meets payroll.",
      "farCitation": "13 CFR 121.103"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is 13 CFR 121.103. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "13 CFR 121.103"
    },
    {
      "heading": "Common pitfalls",
      "content": "Winning a set-aside while oversized leads to termination for default. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "13 CFR 121.103"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite 13 CFR 121.103 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "13 CFR 121.103"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world size standards and affiliation rules situation on an active IDIQ task order.",
    "action": "The contracts manager opens 13 CFR 121.103, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Size standards and affiliation rules mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During size standards and affiliation rules, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow 13 CFR 121.103 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — 13 CFR 121.103 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "13 CFR 121.103"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs size standards and affiliation rules?",
      "options": [
        "13 CFR 121.103",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "13 CFR 121.103 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Size standards and affiliation rules most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per 13 CFR 121.103."
    }
  ]
}),
  buildLesson("career", 3, 3, "Limitations on subcontracting — FAR 52.219-14", 15, "small-business", {
  "bigIdea": "On set-asides, primes must self-perform minimum percentages of labor, cost, or work depending on contract type.",
  "whyItMatters": "Prime-sub splits must be modeled before proposal submission, not after award.",
  "consequence": "Violation can result in termination and referral for debarment.",
  "coreContent": [
    {
      "heading": "Limitations on subcontracting — FAR 52.219-14 — core concept",
      "content": "Prime-sub splits must be modeled before proposal submission, not after award. Professionals use FAR 52.219-14 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — limitations on subcontracting — far 52.219-14 is where theory meets payroll.",
      "farCitation": "FAR 52.219-14"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 52.219-14. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 52.219-14"
    },
    {
      "heading": "Common pitfalls",
      "content": "Violation can result in termination and referral for debarment. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 52.219-14"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 52.219-14 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 52.219-14"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world limitations on subcontracting — far 52.219-14 situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 52.219-14, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Limitations on subcontracting — FAR 52.219-14 mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During limitations on subcontracting — far 52.219-14, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 52.219-14 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 52.219-14 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 52.219-14"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs limitations on subcontracting — far 52.219-14?",
      "options": [
        "FAR 52.219-14",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 52.219-14 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Limitations on subcontracting — FAR 52.219-14 most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 52.219-14."
    }
  ]
}),
  buildLesson("career", 3, 4, "Set-aside strategy for contractors", 20, "small-business", {
  "bigIdea": "Eligible firms should align NAICS, certifications, and teaming to maximize set-aside access.",
  "whyItMatters": "Agency small business goals create recurring set-aside demand in your NAICS.",
  "consequence": "Competing full-and-open without past performance when set-asides fit wastes bid dollars.",
  "coreContent": [
    {
      "heading": "Set-aside strategy for contractors — core concept",
      "content": "Agency small business goals create recurring set-aside demand in your NAICS. Professionals use FAR 19.203 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — set-aside strategy for contractors is where theory meets payroll.",
      "farCitation": "FAR 19.203"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 19.203. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 19.203"
    },
    {
      "heading": "Common pitfalls",
      "content": "Competing full-and-open without past performance when set-asides fit wastes bid dollars. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 19.203"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 19.203 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 19.203"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world set-aside strategy for contractors situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 19.203, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Set-aside strategy for contractors mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During set-aside strategy for contractors, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 19.203 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 19.203 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 19.203"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs set-aside strategy for contractors?",
      "options": [
        "FAR 19.203",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 19.203 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Set-aside strategy for contractors most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 19.203."
    }
  ]
}),
  buildLesson("career", 3, 5, "Weekly review quiz", 10, "small-business", {
  "bigIdea": "Week 3 covered set-aside programs, size/protest risk, and subcontracting limitations.",
  "whyItMatters": "Small business strategy is half of capture for new entrants.",
  "consequence": "Affiliation surprises destroy otherwise strong proposals.",
  "coreContent": [
    {
      "heading": "Weekly review quiz — core concept",
      "content": "Small business strategy is half of capture for new entrants. Professionals use FAR 19.501 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz is where theory meets payroll.",
      "farCitation": "FAR 19.501"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 19.501. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 19.501"
    },
    {
      "heading": "Common pitfalls",
      "content": "Affiliation surprises destroy otherwise strong proposals. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 19.501"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 19.501 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 19.501"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 19.501, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 19.501 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 19.501 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 19.501"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz?",
      "options": [
        "FAR 19.501",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 19.501 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 19.501."
    }
  ],
  "practicalExercise": "Apply Weekly review quiz to a redacted contract excerpt: identify the controlling FAR reference, one compliance action, and one risk if ignored."
}),
  buildLesson("career", 4, 1, "Direct vs indirect costs", 20, "pricing", {
  "bigIdea": "Direct costs are identifiable to a contract; indirect costs are allocated via pools and bases.",
  "whyItMatters": "Misclassifying costs corrupts billing and triggers DCAA questioned costs.",
  "consequence": "Unallowable costs billed to the government create FCA exposure.",
  "coreContent": [
    {
      "heading": "Direct vs indirect costs — core concept",
      "content": "Misclassifying costs corrupts billing and triggers DCAA questioned costs. Professionals use FAR 31.202 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — direct vs indirect costs is where theory meets payroll.",
      "farCitation": "FAR 31.202"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 31.202. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 31.202"
    },
    {
      "heading": "Common pitfalls",
      "content": "Unallowable costs billed to the government create FCA exposure. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 31.202"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 31.202 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 31.202"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world direct vs indirect costs situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 31.202, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Direct vs indirect costs mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During direct vs indirect costs, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 31.202 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 31.202 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 31.202"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs direct vs indirect costs?",
      "options": [
        "FAR 31.202",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 31.202 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Direct vs indirect costs most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 31.202."
    }
  ]
}),
  buildLesson("career", 4, 2, "Indirect rate structures — fringe, OH, G&A", 25, "pricing", {
  "bigIdea": "Fringe, overhead, and G&A wrap direct labor into fully loaded rates per FAR Part 31.",
  "whyItMatters": "Rate structure must match your accounting system and disclosed in proposals.",
  "consequence": "Inconsistent rate application between contracts fails audits.",
  "coreContent": [
    {
      "heading": "Indirect rate structures — fringe, OH, G&A — core concept",
      "content": "Rate structure must match your accounting system and disclosed in proposals. Professionals use FAR 31.203 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — indirect rate structures — fringe, oh, g&a is where theory meets payroll.",
      "farCitation": "FAR 31.203"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 31.203. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 31.203"
    },
    {
      "heading": "Common pitfalls",
      "content": "Inconsistent rate application between contracts fails audits. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 31.203"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 31.203 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 31.203"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world indirect rate structures — fringe, oh, g&a situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 31.203, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Indirect rate structures — fringe, OH, G&A mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During indirect rate structures — fringe, oh, g&a, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 31.203 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 31.203 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 31.203"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs indirect rate structures — fringe, oh, g&a?",
      "options": [
        "FAR 31.203",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 31.203 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Indirect rate structures — fringe, OH, G&A most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 31.203."
    }
  ],
  "diagramId": "indirect-rates"
}),
  buildLesson("career", 4, 3, "Building a fully loaded labor rate", 20, "pricing", {
  "bigIdea": "Loaded rate = (Base + Fringe) × (1 + OH) × (1 + G&A) + Fee on applicable base.",
  "whyItMatters": "Evaluators reverse-engineer your rates — math errors are fatal in audits.",
  "consequence": "Underpricing labor categories you cannot staff destroys CPARS and margin.",
  "coreContent": [
    {
      "heading": "Building a fully loaded labor rate — core concept",
      "content": "Evaluators reverse-engineer your rates — math errors are fatal in audits. Professionals use FAR 15.404-1 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — building a fully loaded labor rate is where theory meets payroll.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.404-1. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Common pitfalls",
      "content": "Underpricing labor categories you cannot staff destroys CPARS and margin. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.404-1 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.404-1"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world building a fully loaded labor rate situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.404-1, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Building a fully loaded labor rate mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During building a fully loaded labor rate, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.404-1 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.404-1 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.404-1"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs building a fully loaded labor rate?",
      "options": [
        "FAR 15.404-1",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.404-1 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Building a fully loaded labor rate most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.404-1."
    }
  ]
}),
  buildLesson("career", 4, 4, "Cost allowability — FAR Part 31", 20, "pricing", {
  "bigIdea": "FAR 31.205 lists unallowable costs: entertainment, lobbying, unapproved compensation.",
  "whyItMatters": "Every invoice line must trace to allowable, allocable, reasonable costs.",
  "consequence": "Systematic unallowables lead to withholds and termination.",
  "coreContent": [
    {
      "heading": "Cost allowability — FAR Part 31 — core concept",
      "content": "Every invoice line must trace to allowable, allocable, reasonable costs. Professionals use FAR 31.201 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — cost allowability — far part 31 is where theory meets payroll.",
      "farCitation": "FAR 31.201"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 31.201. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 31.201"
    },
    {
      "heading": "Common pitfalls",
      "content": "Systematic unallowables lead to withholds and termination. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 31.201"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 31.201 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 31.201"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world cost allowability — far part 31 situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 31.201, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Cost allowability — FAR Part 31 mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During cost allowability — far part 31, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 31.201 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 31.201 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 31.201"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs cost allowability — far part 31?",
      "options": [
        "FAR 31.201",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 31.201 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Cost allowability — FAR Part 31 most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 31.201."
    }
  ]
}),
  buildLesson("career", 4, 5, "Weekly review quiz + pricing exercise", 20, "pricing", {
  "bigIdea": "Week 4 built the cost stack from direct labor through fee.",
  "whyItMatters": "Pricing fluency is mandatory for contracts managers at any firm with cost-type work.",
  "consequence": "DCAA finds what you cannot explain.",
  "coreContent": [
    {
      "heading": "Weekly review quiz + pricing exercise — core concept",
      "content": "Pricing fluency is mandatory for contracts managers at any firm with cost-type work. Professionals use FAR 31.001 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz + pricing exercise is where theory meets payroll.",
      "farCitation": "FAR 31.001"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 31.001. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 31.001"
    },
    {
      "heading": "Common pitfalls",
      "content": "DCAA finds what you cannot explain. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 31.001"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 31.001 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 31.001"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz + pricing exercise situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 31.001, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz + pricing exercise mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz + pricing exercise, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 31.001 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 31.001 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 31.001"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz + pricing exercise?",
      "options": [
        "FAR 31.001",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 31.001 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz + pricing exercise most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 31.001."
    }
  ],
  "practicalExercise": "Apply Weekly review quiz + pricing exercise to a redacted contract excerpt: identify the controlling FAR reference, one compliance action, and one risk if ignored."
}),
  buildLesson("career", 5, 1, "Reading an RFP — Sections L and M", 20, "proposals", {
  "bigIdea": "Section L tells you how to submit; Section M tells you how you will be scored.",
  "whyItMatters": "Compliance matrices mapping L to M are non-negotiable on competitive bids.",
  "consequence": "Non-compliant volumes are rejected without evaluation.",
  "coreContent": [
    {
      "heading": "Reading an RFP — Sections L and M — core concept",
      "content": "Compliance matrices mapping L to M are non-negotiable on competitive bids. Professionals use FAR 15.204 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — reading an rfp — sections l and m is where theory meets payroll.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.204. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Common pitfalls",
      "content": "Non-compliant volumes are rejected without evaluation. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.204 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.204"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world reading an rfp — sections l and m situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.204, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Reading an RFP — Sections L and M mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During reading an rfp — sections l and m, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.204 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.204 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.204"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs reading an rfp — sections l and m?",
      "options": [
        "FAR 15.204",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.204 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Reading an RFP — Sections L and M most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.204."
    }
  ],
  "diagramId": "contract-anatomy"
}),
  buildLesson("career", 5, 2, "Writing a winning technical approach", 20, "proposals", {
  "bigIdea": "Technical volumes must mirror Section M factors with clear proof points and staffing.",
  "whyItMatters": "Evaluators score what they can find quickly — structure wins.",
  "consequence": "Generic boilerplate scores Neutral and loses to compliant niche players.",
  "coreContent": [
    {
      "heading": "Writing a winning technical approach — core concept",
      "content": "Evaluators score what they can find quickly — structure wins. Professionals use FAR 15.305 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — writing a winning technical approach is where theory meets payroll.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.305. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Common pitfalls",
      "content": "Generic boilerplate scores Neutral and loses to compliant niche players. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.305 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.305"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world writing a winning technical approach situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.305, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Writing a winning technical approach mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During writing a winning technical approach, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.305 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.305 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.305"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs writing a winning technical approach?",
      "options": [
        "FAR 15.305",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.305 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Writing a winning technical approach most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.305."
    }
  ]
}),
  buildLesson("career", 5, 3, "Pricing strategy — LPTA vs Best Value", 20, "proposals", {
  "bigIdea": "LPTA selects lowest price among technically acceptable offers; Best Value permits tradeoffs.",
  "whyItMatters": "Misreading evaluation method causes misallocated proposal effort and wrong price posture.",
  "consequence": "Over-engineering technical on LPTA wastes bid budget; under-investing on Best Value kills you.",
  "coreContent": [
    {
      "heading": "Pricing strategy — LPTA vs Best Value — core concept",
      "content": "Misreading evaluation method causes misallocated proposal effort and wrong price posture. Professionals use FAR 15.101 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — pricing strategy — lpta vs best value is where theory meets payroll.",
      "farCitation": "FAR 15.101"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.101. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.101"
    },
    {
      "heading": "Common pitfalls",
      "content": "Over-engineering technical on LPTA wastes bid budget; under-investing on Best Value kills you. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.101"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.101 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world pricing strategy — lpta vs best value situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.101, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Pricing strategy — LPTA vs Best Value mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During pricing strategy — lpta vs best value, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.101 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.101 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs pricing strategy — lpta vs best value?",
      "options": [
        "FAR 15.101",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.101 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Pricing strategy — LPTA vs Best Value most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.101."
    }
  ],
  "diagramId": "source-selection"
}),
  buildLesson("career", 5, 4, "Past performance — what evaluators look for", 15, "proposals", {
  "bigIdea": "Past performance includes relevance, recency, quality (CPARS), and confidence assessment.",
  "whyItMatters": "CPARS narratives and references must align with Section M relevance criteria.",
  "consequence": "Weak past performance cannot be fixed in the proposal — it's built during execution.",
  "coreContent": [
    {
      "heading": "Past performance — what evaluators look for — core concept",
      "content": "CPARS narratives and references must align with Section M relevance criteria. Professionals use FAR 15.305 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — past performance — what evaluators look for is where theory meets payroll.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.305. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Common pitfalls",
      "content": "Weak past performance cannot be fixed in the proposal — it's built during execution. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.305"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.305 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.305"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world past performance — what evaluators look for situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.305, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Past performance — what evaluators look for mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During past performance — what evaluators look for, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.305 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.305 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.305"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs past performance — what evaluators look for?",
      "options": [
        "FAR 15.305",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.305 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Past performance — what evaluators look for most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.305."
    }
  ]
}),
  buildLesson("career", 5, 5, "Weekly review quiz + proposal exercise", 20, "proposals", {
  "bigIdea": "Week 5 connected RFP structure, technical writing, evaluation methods, and past performance.",
  "whyItMatters": "Proposal managers who understand Part 15 run higher win rates.",
  "consequence": "One missing L requirement eliminates months of capture work.",
  "coreContent": [
    {
      "heading": "Weekly review quiz + proposal exercise — core concept",
      "content": "Proposal managers who understand Part 15 run higher win rates. Professionals use FAR 15.308 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz + proposal exercise is where theory meets payroll.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.308. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Common pitfalls",
      "content": "One missing L requirement eliminates months of capture work. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.308"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.308 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.308"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz + proposal exercise situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.308, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz + proposal exercise mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz + proposal exercise, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.308 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.308 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.308"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz + proposal exercise?",
      "options": [
        "FAR 15.308",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.308 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz + proposal exercise most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.308."
    }
  ],
  "practicalExercise": "Apply Weekly review quiz + proposal exercise to a redacted contract excerpt: identify the controlling FAR reference, one compliance action, and one risk if ignored."
}),
  buildLesson("career", 6, 1, "The first 30 days of a new contract", 15, "administration", {
  "bigIdea": "Kickoff, clause matrix, staffing, security, and billing setup define early performance trajectory.",
  "whyItMatters": "The first 30 days set COR expectations and CPARS tone.",
  "consequence": "Missing kickoff deliverables creates immediate performance deficits.",
  "coreContent": [
    {
      "heading": "The first 30 days of a new contract — core concept",
      "content": "The first 30 days set COR expectations and CPARS tone. Professionals use FAR 42.503 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — the first 30 days of a new contract is where theory meets payroll.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 42.503. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Common pitfalls",
      "content": "Missing kickoff deliverables creates immediate performance deficits. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 42.503 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 42.503"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world the first 30 days of a new contract situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 42.503, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "The first 30 days of a new contract mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During the first 30 days of a new contract, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 42.503 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 42.503 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 42.503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs the first 30 days of a new contract?",
      "options": [
        "FAR 42.503",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 42.503 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "The first 30 days of a new contract most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 42.503."
    }
  ]
}),
  buildLesson("career", 6, 2, "Contract modifications and changes clause", 20, "administration", {
  "bigIdea": "FAR 52.243-1 Changes clause governs constructive changes and bilateral mods.",
  "whyItMatters": "Document every scope discussion; submit REAs when mods stall.",
  "consequence": "Performing without mods funds competitors who enforce boundaries.",
  "coreContent": [
    {
      "heading": "Contract modifications and changes clause — core concept",
      "content": "Document every scope discussion; submit REAs when mods stall. Professionals use FAR 52.243-1 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — contract modifications and changes clause is where theory meets payroll.",
      "farCitation": "FAR 52.243-1"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 52.243-1. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 52.243-1"
    },
    {
      "heading": "Common pitfalls",
      "content": "Performing without mods funds competitors who enforce boundaries. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 52.243-1"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 52.243-1 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 52.243-1"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world contract modifications and changes clause situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 52.243-1, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Contract modifications and changes clause mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During contract modifications and changes clause, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 52.243-1 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 52.243-1 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 52.243-1"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs contract modifications and changes clause?",
      "options": [
        "FAR 52.243-1",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 52.243-1 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Contract modifications and changes clause most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 52.243-1."
    }
  ]
}),
  buildLesson("career", 6, 3, "Subcontract management and flow-downs", 20, "administration", {
  "bigIdea": "Prime contractors remain responsible for sub performance and clause flow-down.",
  "whyItMatters": "Mirror prime deliverables and cure periods in every subcontract.",
  "consequence": "Sub default becomes prime CPARS default.",
  "coreContent": [
    {
      "heading": "Subcontract management and flow-downs — core concept",
      "content": "Mirror prime deliverables and cure periods in every subcontract. Professionals use FAR 44.101 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — subcontract management and flow-downs is where theory meets payroll.",
      "farCitation": "FAR 44.101"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 44.101. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 44.101"
    },
    {
      "heading": "Common pitfalls",
      "content": "Sub default becomes prime CPARS default. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 44.101"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 44.101 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 44.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world subcontract management and flow-downs situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 44.101, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Subcontract management and flow-downs mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During subcontract management and flow-downs, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 44.101 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 44.101 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 44.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs subcontract management and flow-downs?",
      "options": [
        "FAR 44.101",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 44.101 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Subcontract management and flow-downs most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 44.101."
    }
  ]
}),
  buildLesson("career", 6, 4, "CPARS — managing your performance record", 15, "administration", {
  "bigIdea": "CPARS ratings persist and drive future evaluation scores.",
  "whyItMatters": "Review CPARS drafts within 14 days and rebut inaccuracies.",
  "consequence": "One Marginal rating depresses win probability for three years.",
  "coreContent": [
    {
      "heading": "CPARS — managing your performance record — core concept",
      "content": "Review CPARS drafts within 14 days and rebut inaccuracies. Professionals use FAR 42.1503 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — cpars — managing your performance record is where theory meets payroll.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 42.1503. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Common pitfalls",
      "content": "One Marginal rating depresses win probability for three years. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 42.1503 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 42.1503"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world cpars — managing your performance record situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 42.1503, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "CPARS — managing your performance record mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During cpars — managing your performance record, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 42.1503 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 42.1503 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 42.1503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs cpars — managing your performance record?",
      "options": [
        "FAR 42.1503",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 42.1503 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "CPARS — managing your performance record most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 42.1503."
    }
  ]
}),
  buildLesson("career", 6, 5, "Weekly review quiz + scenario", 15, "administration", {
  "bigIdea": "Week 6 covered startup, mods, subs, and CPARS — the operating core of contract management.",
  "whyItMatters": "Administration failures destroy companies that win technically.",
  "consequence": "Constructive changes unrecorded become unrecoverable margin loss.",
  "coreContent": [
    {
      "heading": "Weekly review quiz + scenario — core concept",
      "content": "Administration failures destroy companies that win technically. Professionals use FAR 42.1502 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz + scenario is where theory meets payroll.",
      "farCitation": "FAR 42.1502"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 42.1502. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 42.1502"
    },
    {
      "heading": "Common pitfalls",
      "content": "Constructive changes unrecorded become unrecoverable margin loss. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 42.1502"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 42.1502 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 42.1502"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz + scenario situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 42.1502, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz + scenario mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz + scenario, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 42.1502 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 42.1502 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 42.1502"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz + scenario?",
      "options": [
        "FAR 42.1502",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 42.1502 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz + scenario most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 42.1502."
    }
  ]
}),
  buildLesson("career", 7, 1, "What DFARS is and how it works", 15, "dfars", {
  "bigIdea": "DFARS supplements the FAR for DoD acquisitions without contradicting it.",
  "whyItMatters": "Defense contracts carry clauses absent from civilian work.",
  "consequence": "Missing DFARS flow-downs fail CPSR and DCMA reviews.",
  "coreContent": [
    {
      "heading": "What DFARS is and how it works — core concept",
      "content": "Defense contracts carry clauses absent from civilian work. Professionals use DFARS 201.301 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — what dfars is and how it works is where theory meets payroll.",
      "farCitation": "DFARS 201.301"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is DFARS 201.301. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "DFARS 201.301"
    },
    {
      "heading": "Common pitfalls",
      "content": "Missing DFARS flow-downs fail CPSR and DCMA reviews. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "DFARS 201.301"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite DFARS 201.301 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "DFARS 201.301"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world what dfars is and how it works situation on an active IDIQ task order.",
    "action": "The contracts manager opens DFARS 201.301, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "What DFARS is and how it works mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During what dfars is and how it works, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow DFARS 201.301 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — DFARS 201.301 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "DFARS 201.301"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs what dfars is and how it works?",
      "options": [
        "DFARS 201.301",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "DFARS 201.301 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "What DFARS is and how it works most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per DFARS 201.301."
    }
  ]
}),
  buildLesson("career", 7, 2, "Security clearances and classified contracting", 20, "dfars", {
  "bigIdea": "Classified work requires DD254, cleared personnel, and NISPOM compliance.",
  "whyItMatters": "Facility clearance timelines can exceed six months — plan capture accordingly.",
  "consequence": "Performance without proper clearance violates contract security requirements.",
  "coreContent": [
    {
      "heading": "Security clearances and classified contracting — core concept",
      "content": "Facility clearance timelines can exceed six months — plan capture accordingly. Professionals use DFARS 252.204-7008 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — security clearances and classified contracting is where theory meets payroll.",
      "farCitation": "DFARS 252.204-7008"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is DFARS 252.204-7008. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "DFARS 252.204-7008"
    },
    {
      "heading": "Common pitfalls",
      "content": "Performance without proper clearance violates contract security requirements. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "DFARS 252.204-7008"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite DFARS 252.204-7008 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "DFARS 252.204-7008"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world security clearances and classified contracting situation on an active IDIQ task order.",
    "action": "The contracts manager opens DFARS 252.204-7008, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Security clearances and classified contracting mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During security clearances and classified contracting, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow DFARS 252.204-7008 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — DFARS 252.204-7008 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "DFARS 252.204-7008"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs security clearances and classified contracting?",
      "options": [
        "DFARS 252.204-7008",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "DFARS 252.204-7008 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Security clearances and classified contracting most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per DFARS 252.204-7008."
    }
  ]
}),
  buildLesson("career", 7, 3, "CMMC and cybersecurity requirements", 20, "dfars", {
  "bigIdea": "DFARS 252.204-7012 and CMMC require NIST 800-171 controls and incident reporting.",
  "whyItMatters": "SPRScore and POA&M remediation are bid table stakes for DoD IT.",
  "consequence": "Cyber non-compliance stops awards and triggers false claims exposure.",
  "coreContent": [
    {
      "heading": "CMMC and cybersecurity requirements — core concept",
      "content": "SPRScore and POA&M remediation are bid table stakes for DoD IT. Professionals use DFARS 252.204-7012 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — cmmc and cybersecurity requirements is where theory meets payroll.",
      "farCitation": "DFARS 252.204-7012"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is DFARS 252.204-7012. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "DFARS 252.204-7012"
    },
    {
      "heading": "Common pitfalls",
      "content": "Cyber non-compliance stops awards and triggers false claims exposure. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "DFARS 252.204-7012"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite DFARS 252.204-7012 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "DFARS 252.204-7012"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world cmmc and cybersecurity requirements situation on an active IDIQ task order.",
    "action": "The contracts manager opens DFARS 252.204-7012, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "CMMC and cybersecurity requirements mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During cmmc and cybersecurity requirements, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow DFARS 252.204-7012 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — DFARS 252.204-7012 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "DFARS 252.204-7012"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs cmmc and cybersecurity requirements?",
      "options": [
        "DFARS 252.204-7012",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "DFARS 252.204-7012 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "CMMC and cybersecurity requirements most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per DFARS 252.204-7012."
    }
  ]
}),
  buildLesson("career", 7, 4, "DCAA and DCMA — who they are and what they do", 20, "dfars", {
  "bigIdea": "DCAA audits cost proposals and accounting systems; DCMA monitors contractor performance.",
  "whyItMatters": "Inadequate accounting systems withhold billing on cost-type contracts.",
  "consequence": "Failed ICE audit blocks all cost-type revenue.",
  "coreContent": [
    {
      "heading": "DCAA and DCMA — who they are and what they do — core concept",
      "content": "Inadequate accounting systems withhold billing on cost-type contracts. Professionals use FAR 42.101 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — dcaa and dcma — who they are and what they do is where theory meets payroll.",
      "farCitation": "FAR 42.101"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 42.101. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 42.101"
    },
    {
      "heading": "Common pitfalls",
      "content": "Failed ICE audit blocks all cost-type revenue. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 42.101"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 42.101 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 42.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world dcaa and dcma — who they are and what they do situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 42.101, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "DCAA and DCMA — who they are and what they do mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During dcaa and dcma — who they are and what they do, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 42.101 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 42.101 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 42.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs dcaa and dcma — who they are and what they do?",
      "options": [
        "FAR 42.101",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 42.101 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "DCAA and DCMA — who they are and what they do most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 42.101."
    }
  ]
}),
  buildLesson("career", 7, 5, "Weekly review quiz", 10, "dfars", {
  "bigIdea": "Week 7 prepared you for defense-specific regulatory layers beyond civilian FAR.",
  "whyItMatters": "DoD work pays well but punishes compliance gaps harshly.",
  "consequence": "Cyber and accounting failures are company-ending events.",
  "coreContent": [
    {
      "heading": "Weekly review quiz — core concept",
      "content": "DoD work pays well but punishes compliance gaps harshly. Professionals use DFARS 242.75 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — weekly review quiz is where theory meets payroll.",
      "farCitation": "DFARS 242.75"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is DFARS 242.75. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "DFARS 242.75"
    },
    {
      "heading": "Common pitfalls",
      "content": "Cyber and accounting failures are company-ending events. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "DFARS 242.75"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite DFARS 242.75 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "DFARS 242.75"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world weekly review quiz situation on an active IDIQ task order.",
    "action": "The contracts manager opens DFARS 242.75, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Weekly review quiz mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During weekly review quiz, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow DFARS 242.75 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — DFARS 242.75 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "DFARS 242.75"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs weekly review quiz?",
      "options": [
        "DFARS 242.75",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "DFARS 242.75 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Weekly review quiz most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per DFARS 242.75."
    }
  ]
}),
  buildLesson("career", 8, 1, "Day in the life of a contracts manager", 15, "job-readiness", {
  "bigIdea": "Contracts managers balance compliance, customer relations, pricing, and crisis response daily.",
  "whyItMatters": "Interviewers test whether you understand the role beyond textbook FAR quotes.",
  "consequence": "Candidates who cannot describe daily workflow fail behavioral screens.",
  "coreContent": [
    {
      "heading": "Day in the life of a contracts manager — core concept",
      "content": "Interviewers test whether you understand the role beyond textbook FAR quotes. Professionals use FAR 1.602-2 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — day in the life of a contracts manager is where theory meets payroll.",
      "farCitation": "FAR 1.602-2"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 1.602-2. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 1.602-2"
    },
    {
      "heading": "Common pitfalls",
      "content": "Candidates who cannot describe daily workflow fail behavioral screens. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 1.602-2"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 1.602-2 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 1.602-2"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world day in the life of a contracts manager situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 1.602-2, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Day in the life of a contracts manager mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During day in the life of a contracts manager, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 1.602-2 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 1.602-2 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 1.602-2"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs day in the life of a contracts manager?",
      "options": [
        "FAR 1.602-2",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 1.602-2 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Day in the life of a contracts manager most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 1.602-2."
    }
  ]
}),
  buildLesson("career", 8, 2, "The 20 most common interview questions", 30, "job-readiness", {
  "bigIdea": "Behavioral questions probe constructive changes, audits, team conflict, and ethics.",
  "whyItMatters": "STAR-format answers with FAR citations differentiate strong candidates.",
  "consequence": "Vague answers about 'working with the customer' lose to structured examples.",
  "coreContent": [
    {
      "heading": "The 20 most common interview questions — core concept",
      "content": "STAR-format answers with FAR citations differentiate strong candidates. Professionals use FAR 3.101 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — the 20 most common interview questions is where theory meets payroll.",
      "farCitation": "FAR 3.101"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 3.101. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 3.101"
    },
    {
      "heading": "Common pitfalls",
      "content": "Vague answers about 'working with the customer' lose to structured examples. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 3.101"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 3.101 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 3.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world the 20 most common interview questions situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 3.101, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "The 20 most common interview questions mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During the 20 most common interview questions, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 3.101 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 3.101 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 3.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs the 20 most common interview questions?",
      "options": [
        "FAR 3.101",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 3.101 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "The 20 most common interview questions most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 3.101."
    }
  ]
}),
  buildLesson("career", 8, 3, "Interview simulation with Martin Business", 30, "job-readiness", {
  "bigIdea": "Live simulation builds fluency answering pricing, mod, and ethics scenarios under pressure.",
  "whyItMatters": "Practice converts knowledge into hire-ready communication.",
  "consequence": "Silence on scenario questions reads as inexperience regardless of credentials.",
  "coreContent": [
    {
      "heading": "Interview simulation with Martin Business — core concept",
      "content": "Practice converts knowledge into hire-ready communication. Professionals use FAR 15.306 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — interview simulation with martin business is where theory meets payroll.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 15.306. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Common pitfalls",
      "content": "Silence on scenario questions reads as inexperience regardless of credentials. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 15.306"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 15.306 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 15.306"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world interview simulation with martin business situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 15.306, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Interview simulation with Martin Business mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During interview simulation with martin business, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 15.306 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 15.306 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 15.306"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs interview simulation with martin business?",
      "options": [
        "FAR 15.306",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 15.306 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Interview simulation with Martin Business most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 15.306."
    }
  ],
  "deepLink": {
    "tab": "job-readiness/interview",
    "label": "Open Interview Simulation with Martin Business"
  }
}),
  buildLesson("career", 8, 4, "Resume and LinkedIn optimization", 20, "job-readiness", {
  "bigIdea": "Résumés must quantify contract value managed, mods negotiated, and tools mastered.",
  "whyItMatters": "Recruiters search NAICS, clearance, and NCMA credentials — optimize keywords.",
  "consequence": "Generic résumés never reach hiring managers at Lockheed, Leidos, or SAIC.",
  "coreContent": [
    {
      "heading": "Resume and LinkedIn optimization — core concept",
      "content": "Recruiters search NAICS, clearance, and NCMA credentials — optimize keywords. Professionals use FAR 4.1102 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — resume and linkedin optimization is where theory meets payroll.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 4.1102. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Common pitfalls",
      "content": "Generic résumés never reach hiring managers at Lockheed, Leidos, or SAIC. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 4.1102 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 4.1102"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world resume and linkedin optimization situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 4.1102, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Resume and LinkedIn optimization mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During resume and linkedin optimization, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 4.1102 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 4.1102 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 4.1102"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs resume and linkedin optimization?",
      "options": [
        "FAR 4.1102",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 4.1102 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Resume and LinkedIn optimization most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 4.1102."
    }
  ]
}),
  buildLesson("career", 8, 5, "Final certification exam", 90, "job-readiness", {
  "bigIdea": "The comprehensive exam validates integrated judgment across all eight weeks.",
  "whyItMatters": "Certification signals job-ready proficiency to employers.",
  "consequence": "Failing to certify leaves gaps visible to hiring managers.",
  "coreContent": [
    {
      "heading": "Final certification exam — core concept",
      "content": "Certification signals job-ready proficiency to employers. Professionals use FAR 1.102-2 daily when advising PMs, reviewing mods, and preparing audit responses.",
      "martinSays": "I've applied this on $50M+ in contract value — final certification exam is where theory meets payroll.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Regulatory framework",
      "content": "The controlling regulation is FAR 1.102-2. Read the prescription, alternates, and agency supplements that apply to your contract type and customer.",
      "martinSays": "Don't memorize — know where to look and what questions to ask.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Common pitfalls",
      "content": "Failing to certify leaves gaps visible to hiring managers. Teams that skip this step during kickoff pay for it during CPARS and closeout.",
      "martinSays": "Document your compliance approach in the contract file from day one.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Professional application",
      "content": "In interviews and on the job, cite FAR 1.102-2 when explaining your recommendation. Specificity builds credibility with KOs and hiring managers.",
      "martinSays": "Write one paragraph you could use in a status meeting tomorrow.",
      "farCitation": "FAR 1.102-2"
    }
  ],
  "realWorldExample": {
    "scenario": "A contracts team faces a real-world final certification exam situation on an active IDIQ task order.",
    "action": "The contracts manager opens FAR 1.102-2, briefs leadership, and implements a documented compliance plan within 48 hours.",
    "outcome": "Issue resolved without CPARS downgrade; customer cites responsiveness in evaluation input.",
    "lesson": "Final certification exam mastery prevents fire drills and protects margin."
  },
  "scenario": {
    "prompt": "During final certification exam, which action best protects the contractor?",
    "options": [
      {
        "id": "a",
        "label": "Verbal agreement with the COR",
        "isCorrect": false,
        "feedback": "COR direction without KO mod is unauthorized (FAR 1.602)."
      },
      {
        "id": "b",
        "label": "Follow FAR 1.102-2 and document the compliance path",
        "isCorrect": true,
        "feedback": "Correct — FAR 1.102-2 provides the authoritative framework."
      },
      {
        "id": "c",
        "label": "Wait until audit to gather evidence",
        "isCorrect": false,
        "feedback": "Documentation must be contemporaneous for REAs and claims."
      },
      {
        "id": "d",
        "label": "Delegate entirely to the PM without review",
        "isCorrect": false,
        "feedback": "Contracts managers retain compliance accountability."
      }
    ],
    "farCitation": "FAR 1.102-2"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Which regulation primarily governs final certification exam?",
      "options": [
        "FAR 1.102-2",
        "FAR 52.209-6",
        "FAR 9.405",
        "FAR 45.101"
      ],
      "correctIndex": 0,
      "explanation": "FAR 1.102-2 is the primary citation for this topic."
    },
    {
      "id": "q2",
      "question": "Who has authority to bind the government?",
      "options": [
        "COR",
        "KO",
        "PM",
        "Legal"
      ],
      "correctIndex": 1,
      "explanation": "Only the Contracting Officer binds the government (FAR 1.602)."
    },
    {
      "id": "q3",
      "question": "Unauthorized performance typically:",
      "options": [
        "Guarantees payment",
        "Is at contractor risk",
        "Triggers automatic mod",
        "Improves CPARS"
      ],
      "correctIndex": 1,
      "explanation": "GAO holds contractors responsible for verifying authority."
    },
    {
      "id": "q4",
      "question": "Documentation should be:",
      "options": [
        "Created after closeout",
        "Contemporaneous and auditable",
        "Verbal only",
        "Optional on FFP"
      ],
      "correctIndex": 1,
      "explanation": "Audit trails require contemporaneous records (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Final certification exam most directly supports:",
      "options": [
        "Only proposal writing",
        "Compliance and risk management",
        "Marketing only",
        "Travel approvals"
      ],
      "correctIndex": 1,
      "explanation": "This topic underpins compliance per FAR 1.102-2."
    }
  ],
  "deepLink": {
    "tab": "pro-academy/final-exam",
    "label": "Take the Pro Academy Final Certification Exam"
  }
}),
];
