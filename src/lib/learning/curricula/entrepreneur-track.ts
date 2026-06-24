import type { CurriculumLesson } from "../types";
import { buildLesson } from "./lesson-builder";

export const ENTREPRENEUR_WEEKS = [
  {
    "week": 1,
    "title": "Getting Started"
  },
  {
    "week": 2,
    "title": "Finding Opportunities"
  },
  {
    "week": 3,
    "title": "Writing Proposals"
  },
  {
    "week": 4,
    "title": "Winning and Delivering"
  },
  {
    "week": 5,
    "title": "Getting Paid and Staying Solvent"
  },
  {
    "week": 6,
    "title": "Growing Your Pipeline"
  }
] as const;

export const ENTREPRENEUR_CURRICULUM: CurriculumLesson[] = [
  buildLesson("entrepreneur", 1, 1, "Is GovCon right for your business?", 15, "foundations", {
  "bigIdea": "Is GovCon right for your business? is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master is govcon right for your business? win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring is govcon right for your business? leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, is govcon right for your business? determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Step-by-step",
      "content": "Break is govcon right for your business? into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 1.102-2"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies is govcon right for your business? before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Is GovCon right for your business? turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip is govcon right for your business? and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete is govcon right for your business? checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 1.102-2"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Is GovCon right for your business? primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for is govcon right for your business?:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 1, 2, "SAM.gov registration step by step", 20, "sam-market", {
  "bigIdea": "SAM.gov registration step by step is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master sam.gov registration step by step win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring sam.gov registration step by step leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, sam.gov registration step by step determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Step-by-step",
      "content": "Break sam.gov registration step by step into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 4.1102"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies sam.gov registration step by step before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "SAM.gov registration step by step turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip sam.gov registration step by step and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete sam.gov registration step by step checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 4.1102"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "SAM.gov registration step by step primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for sam.gov registration step by step:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 1, 3, "Choosing your NAICS codes strategically", 15, "sam-market", {
  "bigIdea": "Choosing your NAICS codes strategically is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master choosing your naics codes strategically win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring choosing your naics codes strategically leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, choosing your naics codes strategically determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Step-by-step",
      "content": "Break choosing your naics codes strategically into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 4.1102"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 4.1102"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies choosing your naics codes strategically before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Choosing your NAICS codes strategically turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip choosing your naics codes strategically and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete choosing your naics codes strategically checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 4.1102"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Choosing your NAICS codes strategically primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for choosing your naics codes strategically:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 1, 4, "Set-aside certifications — which ones and how", 20, "small-business", {
  "bigIdea": "Set-aside certifications — which ones and how is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master set-aside certifications — which ones and how win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring set-aside certifications — which ones and how leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, set-aside certifications — which ones and how determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 19.502"
    },
    {
      "heading": "Step-by-step",
      "content": "Break set-aside certifications — which ones and how into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 19.502"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 19.502"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies set-aside certifications — which ones and how before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Set-aside certifications — which ones and how turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip set-aside certifications — which ones and how and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete set-aside certifications — which ones and how checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 19.502"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Set-aside certifications — which ones and how primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for set-aside certifications — which ones and how:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 1, 5, "Weekly review + simulator orientation", 20, "foundations", {
  "bigIdea": "Weekly review + simulator orientation is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master weekly review + simulator orientation win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring weekly review + simulator orientation leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, weekly review + simulator orientation determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Step-by-step",
      "content": "Break weekly review + simulator orientation into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 1.102-2"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 1.102-2"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies weekly review + simulator orientation before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Weekly review + simulator orientation turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip weekly review + simulator orientation and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete weekly review + simulator orientation checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 1.102-2"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Weekly review + simulator orientation primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for weekly review + simulator orientation:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "simulatorPractice": "Complete simulator orientation and run your first opportunity search."
}),
  buildLesson("entrepreneur", 2, 1, "How to search SAM.gov effectively", 20, "bid-capture", {
  "bigIdea": "How to search SAM.gov effectively is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master how to search sam.gov effectively win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring how to search sam.gov effectively leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, how to search sam.gov effectively determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Step-by-step",
      "content": "Break how to search sam.gov effectively into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 5.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies how to search sam.gov effectively before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "How to search SAM.gov effectively turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip how to search sam.gov effectively and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete how to search sam.gov effectively checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 5.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "How to search SAM.gov effectively primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for how to search sam.gov effectively:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 2, 2, "Reading a solicitation in 30 minutes", 20, "bid-capture", {
  "bigIdea": "Reading a solicitation in 30 minutes is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master reading a solicitation in 30 minutes win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring reading a solicitation in 30 minutes leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, reading a solicitation in 30 minutes determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Step-by-step",
      "content": "Break reading a solicitation in 30 minutes into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 5.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies reading a solicitation in 30 minutes before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Reading a solicitation in 30 minutes turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip reading a solicitation in 30 minutes and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete reading a solicitation in 30 minutes checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 5.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Reading a solicitation in 30 minutes primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for reading a solicitation in 30 minutes:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 2, 3, "Bid/no-bid decision framework", 15, "bid-capture", {
  "bigIdea": "Bid/no-bid decision framework is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master bid/no-bid decision framework win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring bid/no-bid decision framework leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, bid/no-bid decision framework determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Step-by-step",
      "content": "Break bid/no-bid decision framework into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 5.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies bid/no-bid decision framework before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Bid/no-bid decision framework turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip bid/no-bid decision framework and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete bid/no-bid decision framework checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 5.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Bid/no-bid decision framework primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for bid/no-bid decision framework:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 2, 4, "Pipeline management — how many bids to pursue", 15, "growth", {
  "bigIdea": "Pipeline management — how many bids to pursue is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master pipeline management — how many bids to pursue win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring pipeline management — how many bids to pursue leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, pipeline management — how many bids to pursue determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break pipeline management — how many bids to pursue into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies pipeline management — how many bids to pursue before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Pipeline management — how many bids to pursue turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip pipeline management — how many bids to pursue and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete pipeline management — how many bids to pursue checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Pipeline management — how many bids to pursue primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for pipeline management — how many bids to pursue:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 2, 5, "Weekly review + practice opportunity search", 20, "bid-capture", {
  "bigIdea": "Weekly review + practice opportunity search is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master weekly review + practice opportunity search win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring weekly review + practice opportunity search leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, weekly review + practice opportunity search determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Step-by-step",
      "content": "Break weekly review + practice opportunity search into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 5.101"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 5.101"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies weekly review + practice opportunity search before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Weekly review + practice opportunity search turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip weekly review + practice opportunity search and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete weekly review + practice opportunity search checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 5.101"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Weekly review + practice opportunity search primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for weekly review + practice opportunity search:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "simulatorPractice": "Search three live opportunities in the simulator and complete bid/no-bid on each."
}),
  buildLesson("entrepreneur", 3, 1, "Proposal structure and what evaluators want", 20, "proposals", {
  "bigIdea": "Proposal structure and what evaluators want is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master proposal structure and what evaluators want win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring proposal structure and what evaluators want leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, proposal structure and what evaluators want determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Step-by-step",
      "content": "Break proposal structure and what evaluators want into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.204"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies proposal structure and what evaluators want before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Proposal structure and what evaluators want turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip proposal structure and what evaluators want and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete proposal structure and what evaluators want checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.204"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Proposal structure and what evaluators want primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for proposal structure and what evaluators want:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 3, 2, "Technical approach — show don't tell", 20, "proposals", {
  "bigIdea": "Technical approach — show don't tell is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master technical approach — show don't tell win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring technical approach — show don't tell leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, technical approach — show don't tell determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Step-by-step",
      "content": "Break technical approach — show don't tell into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.204"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies technical approach — show don't tell before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Technical approach — show don't tell turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip technical approach — show don't tell and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete technical approach — show don't tell checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.204"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Technical approach — show don't tell primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for technical approach — show don't tell:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 3, 3, "Pricing your first proposal", 25, "pricing", {
  "bigIdea": "Pricing your first proposal is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master pricing your first proposal win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring pricing your first proposal leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, pricing your first proposal determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Step-by-step",
      "content": "Break pricing your first proposal into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.404-1"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies pricing your first proposal before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Pricing your first proposal turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip pricing your first proposal and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete pricing your first proposal checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.404-1"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Pricing your first proposal primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for pricing your first proposal:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 3, 4, "Past performance when you have none", 15, "proposals", {
  "bigIdea": "Past performance when you have none is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master past performance when you have none win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring past performance when you have none leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, past performance when you have none determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Step-by-step",
      "content": "Break past performance when you have none into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.204"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies past performance when you have none before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Past performance when you have none turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip past performance when you have none and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete past performance when you have none checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.204"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Past performance when you have none primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for past performance when you have none:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 3, 5, "Weekly review + practice proposal", 30, "proposals", {
  "bigIdea": "Weekly review + practice proposal is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master weekly review + practice proposal win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring weekly review + practice proposal leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, weekly review + practice proposal determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Step-by-step",
      "content": "Break weekly review + practice proposal into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.204"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.204"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies weekly review + practice proposal before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Weekly review + practice proposal turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip weekly review + practice proposal and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete weekly review + practice proposal checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.204"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Weekly review + practice proposal primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for weekly review + practice proposal:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "practicalExercise": "Draft a one-page technical approach outline mapped to Section M factors."
}),
  buildLesson("entrepreneur", 4, 1, "What happens after you win", 15, "administration", {
  "bigIdea": "What happens after you win is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master what happens after you win win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring what happens after you win leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, what happens after you win determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Step-by-step",
      "content": "Break what happens after you win into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 42.503"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies what happens after you win before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "What happens after you win turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip what happens after you win and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete what happens after you win checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 42.503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "What happens after you win primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for what happens after you win:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 4, 2, "Delivery strategy — self-perform vs subcontract", 20, "delivery", {
  "bigIdea": "Delivery strategy — self-perform vs subcontract is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master delivery strategy — self-perform vs subcontract win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring delivery strategy — self-perform vs subcontract leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, delivery strategy — self-perform vs subcontract determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Step-by-step",
      "content": "Break delivery strategy — self-perform vs subcontract into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 42.1503"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies delivery strategy — self-perform vs subcontract before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Delivery strategy — self-perform vs subcontract turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip delivery strategy — self-perform vs subcontract and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete delivery strategy — self-perform vs subcontract checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 42.1503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Delivery strategy — self-perform vs subcontract primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for delivery strategy — self-perform vs subcontract:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "diagramId": "acquisition-lifecycle"
}),
  buildLesson("entrepreneur", 4, 3, "Managing your first contract", 20, "administration", {
  "bigIdea": "Managing your first contract is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master managing your first contract win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring managing your first contract leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, managing your first contract determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Step-by-step",
      "content": "Break managing your first contract into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 42.503"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 42.503"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies managing your first contract before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Managing your first contract turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip managing your first contract and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete managing your first contract checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 42.503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Managing your first contract primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for managing your first contract:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 4, 4, "CPARS — how to earn Exceptional ratings", 15, "delivery", {
  "bigIdea": "CPARS — how to earn Exceptional ratings is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master cpars — how to earn exceptional ratings win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring cpars — how to earn exceptional ratings leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, cpars — how to earn exceptional ratings determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Step-by-step",
      "content": "Break cpars — how to earn exceptional ratings into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 42.1503"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies cpars — how to earn exceptional ratings before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "CPARS — how to earn Exceptional ratings turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip cpars — how to earn exceptional ratings and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete cpars — how to earn exceptional ratings checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 42.1503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "CPARS — how to earn Exceptional ratings primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for cpars — how to earn exceptional ratings:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 4, 5, "Weekly review + simulator contract execution", 20, "delivery", {
  "bigIdea": "Weekly review + simulator contract execution is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master weekly review + simulator contract execution win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring weekly review + simulator contract execution leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, weekly review + simulator contract execution determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Step-by-step",
      "content": "Break weekly review + simulator contract execution into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 42.1503"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 42.1503"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies weekly review + simulator contract execution before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Weekly review + simulator contract execution turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip weekly review + simulator contract execution and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete weekly review + simulator contract execution checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 42.1503"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Weekly review + simulator contract execution primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for weekly review + simulator contract execution:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "simulatorPractice": "Win a contract in the simulator and select a delivery strategy."
}),
  buildLesson("entrepreneur", 5, 1, "How federal invoicing works — WAWF", 20, "finance", {
  "bigIdea": "How federal invoicing works — WAWF is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master how federal invoicing works — wawf win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring how federal invoicing works — wawf leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, how federal invoicing works — wawf determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Step-by-step",
      "content": "Break how federal invoicing works — wawf into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 32.001"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies how federal invoicing works — wawf before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "How federal invoicing works — WAWF turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip how federal invoicing works — wawf and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete how federal invoicing works — wawf checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 32.001"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "How federal invoicing works — WAWF primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for how federal invoicing works — wawf:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 5, 2, "Cash flow management — the 60-day gap", 15, "finance", {
  "bigIdea": "Cash flow management — the 60-day gap is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master cash flow management — the 60-day gap win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring cash flow management — the 60-day gap leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, cash flow management — the 60-day gap determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Step-by-step",
      "content": "Break cash flow management — the 60-day gap into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 32.001"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies cash flow management — the 60-day gap before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Cash flow management — the 60-day gap turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip cash flow management — the 60-day gap and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete cash flow management — the 60-day gap checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 32.001"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Cash flow management — the 60-day gap primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for cash flow management — the 60-day gap:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 5, 3, "Invoice factoring and financing options", 15, "finance", {
  "bigIdea": "Invoice factoring and financing options is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master invoice factoring and financing options win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring invoice factoring and financing options leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, invoice factoring and financing options determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Step-by-step",
      "content": "Break invoice factoring and financing options into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 32.001"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies invoice factoring and financing options before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Invoice factoring and financing options turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip invoice factoring and financing options and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete invoice factoring and financing options checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 32.001"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Invoice factoring and financing options primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for invoice factoring and financing options:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 5, 4, "Indirect rates and pricing for profit", 25, "pricing", {
  "bigIdea": "Indirect rates and pricing for profit is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master indirect rates and pricing for profit win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring indirect rates and pricing for profit leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, indirect rates and pricing for profit determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Step-by-step",
      "content": "Break indirect rates and pricing for profit into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 15.404-1"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 15.404-1"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies indirect rates and pricing for profit before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Indirect rates and pricing for profit turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip indirect rates and pricing for profit and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete indirect rates and pricing for profit checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 15.404-1"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Indirect rates and pricing for profit primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for indirect rates and pricing for profit:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "diagramId": "indirect-rates"
}),
  buildLesson("entrepreneur", 5, 5, "Weekly review + financial simulator", 20, "finance", {
  "bigIdea": "Weekly review + financial simulator is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master weekly review + financial simulator win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring weekly review + financial simulator leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, weekly review + financial simulator determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Step-by-step",
      "content": "Break weekly review + financial simulator into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 32.001"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies weekly review + financial simulator before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Weekly review + financial simulator turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip weekly review + financial simulator and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete weekly review + financial simulator checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 32.001"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Weekly review + financial simulator primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for weekly review + financial simulator:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ],
  "simulatorPractice": "Advance one quarter in the simulator and review cash runway."
}),
  buildLesson("entrepreneur", 6, 1, "Business development in GovCon", 20, "growth", {
  "bigIdea": "Business development in GovCon is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master business development in govcon win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring business development in govcon leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, business development in govcon determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break business development in govcon into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies business development in govcon before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Business development in GovCon turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip business development in govcon and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete business development in govcon checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Business development in GovCon primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for business development in govcon:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 6, 2, "Teaming and subcontracting strategies", 20, "growth", {
  "bigIdea": "Teaming and subcontracting strategies is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master teaming and subcontracting strategies win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring teaming and subcontracting strategies leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, teaming and subcontracting strategies determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break teaming and subcontracting strategies into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies teaming and subcontracting strategies before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Teaming and subcontracting strategies turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip teaming and subcontracting strategies and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete teaming and subcontracting strategies checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Teaming and subcontracting strategies primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for teaming and subcontracting strategies:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 6, 3, "Agency relationships and capture management", 15, "growth", {
  "bigIdea": "Agency relationships and capture management is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master agency relationships and capture management win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring agency relationships and capture management leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, agency relationships and capture management determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break agency relationships and capture management into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies agency relationships and capture management before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Agency relationships and capture management turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip agency relationships and capture management and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete agency relationships and capture management checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Agency relationships and capture management primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for agency relationships and capture management:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 6, 4, "Year 2 — scaling from 1 contract to 5", 20, "growth", {
  "bigIdea": "Year 2 — scaling from 1 contract to 5 is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master year 2 — scaling from 1 contract to 5 win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring year 2 — scaling from 1 contract to 5 leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, year 2 — scaling from 1 contract to 5 determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break year 2 — scaling from 1 contract to 5 into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies year 2 — scaling from 1 contract to 5 before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Year 2 — scaling from 1 contract to 5 turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip year 2 — scaling from 1 contract to 5 and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete year 2 — scaling from 1 contract to 5 checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Year 2 — scaling from 1 contract to 5 primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for year 2 — scaling from 1 contract to 5:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
  buildLesson("entrepreneur", 6, 5, "Final assessment + growth plan", 30, "growth", {
  "bigIdea": "Final assessment + growth plan is essential for founders building a federal contracting business from zero past performance.",
  "whyItMatters": "Entrepreneurs who master final assessment + growth plan win faster and avoid cash-flow crises that kill 60% of new GovCon firms.",
  "consequence": "Ignoring final assessment + growth plan leads to bad bids, slow payment, and CPARS scores that block year-two growth.",
  "coreContent": [
    {
      "heading": "Founder perspective",
      "content": "As a new GovCon CEO, final assessment + growth plan determines whether you burn runway on bad pursuits or stack wins.",
      "martinSays": "I built my first firm to $12M by treating every lesson here as a gate before spending bid dollars.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Step-by-step",
      "content": "Break final assessment + growth plan into weekly actions: research, decision, documentation, execution.",
      "martinSays": "Founders who document decisions beat founders who rely on memory when DCAA calls.",
      "farCitation": "FAR 7.104"
    },
    {
      "heading": "Cash and compliance",
      "content": "Every operational choice affects cash runway and SAM compliance — connect them.",
      "martinSays": "Runway is measured in days, not quarters — price and invoice discipline keep you alive.",
      "farCitation": "FAR 32.001"
    },
    {
      "heading": "Simulator tie-in",
      "content": "Practice this concept in the GovCon Academy simulator immediately after reading.",
      "martinSays": "The game penalizes the same mistakes the FAR penalizes — use it.",
      "farCitation": "FAR 7.104"
    }
  ],
  "realWorldExample": {
    "scenario": "A startup founder applies final assessment + growth plan before their first VA set-aside bid.",
    "action": "They verify SAM, build a compliance checklist, and price with margin for 60-day payment lag.",
    "outcome": "First award in 7 months; positive cash at month 9.",
    "lesson": "Final assessment + growth plan turns hope into a repeatable business process."
  },
  "scenario": {
    "prompt": "Your co-founder wants to skip final assessment + growth plan and bid immediately. Best response?",
    "options": [
      {
        "id": "a",
        "label": "Bid anyway — speed wins",
        "isCorrect": false,
        "feedback": "Unprepared bids waste $15K–$50K each in labor and B&P."
      },
      {
        "id": "b",
        "label": "Complete final assessment + growth plan checklist before capture spend",
        "isCorrect": true,
        "feedback": "Discipline before pursuit protects runway."
      },
      {
        "id": "c",
        "label": "Hire a consultant and ignore internals",
        "isCorrect": false,
        "feedback": "Founders must own compliance — consultants don't go to jail for you."
      },
      {
        "id": "d",
        "label": "Only bid full-and-open",
        "isCorrect": false,
        "feedback": "Full-and-open without past performance is harder, not easier."
      }
    ],
    "farCitation": "FAR 7.104"
  },
  "quiz": [
    {
      "id": "q1",
      "question": "Final assessment + growth plan primarily helps founders:",
      "options": [
        "Avoid all risk",
        "Make disciplined bid and delivery decisions",
        "Eliminate competition",
        "Skip SAM"
      ],
      "correctIndex": 1,
      "explanation": "Structured learning reduces expensive mistakes."
    },
    {
      "id": "q2",
      "question": "SAM.gov registration is:",
      "options": [
        "Optional for micro purchases only",
        "Required before award",
        "Only for 8(a)",
        "Handled by the KO"
      ],
      "correctIndex": 1,
      "explanation": "FAR 4.1102 requires active SAM."
    },
    {
      "id": "q3",
      "question": "Cash runway should account for:",
      "options": [
        "Same-day payment",
        "30–90 day payment cycles",
        "No overhead",
        "Only payroll"
      ],
      "correctIndex": 1,
      "explanation": "Federal payment cycles create the classic 60-day gap."
    },
    {
      "id": "q4",
      "question": "Best practice for final assessment + growth plan:",
      "options": [
        "Verbal agreements",
        "Written documentation",
        "Ignore FAR",
        "Bid every opportunity"
      ],
      "correctIndex": 1,
      "explanation": "Documentation supports audits and REAs (FAR 31.201-2)."
    },
    {
      "id": "q5",
      "question": "Simulator practice reinforces:",
      "options": [
        "Only game mechanics",
        "Real FAR-driven business decisions",
        "Unrelated skills",
        "Marketing"
      ],
      "correctIndex": 1,
      "explanation": "The simulator mirrors actual GovCon constraints."
    }
  ]
}),
];
