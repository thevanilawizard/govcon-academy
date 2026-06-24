import { lesson, q } from "./content-helpers";
import type { CfcmStudyWeek, SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-8" as const;

export const CFCM_STUDY_PLAN: CfcmStudyWeek[] = [
  {
    week: 1,
    title: "FAR Basics and Contract Types",
    topics: [
      "FAR structure and hierarchy (FAR → supplements → clauses)",
      "Contract types: FFP, FPI, CPFF, CPIF, CPAF, T&M, LH",
      "Contract type selection criteria (FAR 16.104)",
      "Fixed-price vs cost-reimbursement risk allocation",
      "Commercial item contracting (FAR Part 12)",
    ],
    resources: ["FAR Parts 1, 12, 16", "NCMA CFCM Study Guide Ch. 1-3", "GovCon Academy Module 1"],
    milestones: ["Complete 20 contract-type practice questions", "Score ≥70% on contract types mini-quiz"],
  },
  {
    week: 2,
    title: "Competition and Source Selection",
    topics: [
      "Full and open competition (FAR 6.102)",
      "Competitive procedures: sealed bidding (FAR 14) vs negotiated (FAR 15)",
      "Source selection methods: LPTA vs best value (FAR 15.101)",
      "Sole source justifications (FAR 6.302)",
      "Bundling and consolidation (FAR 7.107)",
    ],
    resources: ["FAR Parts 6, 7, 14, 15", "NCMA CFCM Study Guide Ch. 4-5"],
    milestones: ["Complete 20 competition practice questions", "Draft sole source justification outline"],
  },
  {
    week: 3,
    title: "Small Business Programs",
    topics: [
      "Small business size standards (FAR 19.102, 13 CFR 121)",
      "Set-aside types: 8(a), HUBZone, SDVOSB, WOSB, EDWOSB",
      "Limitation on subcontracting (FAR 52.219-14)",
      "Subcontracting plans (FAR 19.704)",
      "Small business subcontracting reporting (SF-294, SF-295)",
    ],
    resources: ["FAR Part 19", "NCMA CFCM Study Guide Ch. 6", "SBA size standard tables"],
    milestones: ["Complete 20 small business practice questions", "Calculate size standard for sample NAICS"],
  },
  {
    week: 4,
    title: "Contract Pricing",
    topics: [
      "Truth in Negotiations Act (FAR 15.403)",
      "Cost or pricing data requirements and thresholds",
      "Cost principles (FAR Part 31) — allowable vs unallowable",
      "Price analysis vs cost analysis (FAR 15.404)",
      "Indirect rates: fringe, overhead, G&A, fee",
    ],
    resources: ["FAR Parts 15.4, 31", "NCMA CFCM Study Guide Ch. 7-8", "GovCon Academy Module 7"],
    milestones: ["Complete 20 pricing practice questions", "Identify 10 unallowable costs from sample list"],
  },
  {
    week: 5,
    title: "Contract Administration",
    topics: [
      "Contract administration delegation (FAR 42.202)",
      "Modification types and authority (FAR 43)",
      "Changes clause (FAR 52.243) and constructive changes",
      "Termination for convenience vs default (FAR 49)",
      "Disputes and claims (FAR 33, CDA)",
      "Contract closeout (FAR 4.804)",
    ],
    resources: ["FAR Parts 4, 33, 42, 43, 49", "NCMA CFCM Study Guide Ch. 9-10"],
    milestones: ["Complete 20 administration practice questions", "Outline mod review checklist from memory"],
  },
  {
    week: 6,
    title: "DFARS and Defense-Specific Requirements",
    topics: [
      "DFARS structure and applicability",
      "Cybersecurity: DFARS 252.204-7012, 7019, 7020, 7021",
      "Safeguarding covered defense information",
      "CMMC and NIST SP 800-171",
      "Defense-specific clauses: data rights, technical data, software",
    ],
    resources: ["DFARS Parts 204, 227, 252", "NCMA CFCM Study Guide Ch. 11", "NIST SP 800-171 Rev 2"],
    milestones: ["Complete 20 DFARS practice questions", "Map DFARS cyber clauses to compliance actions"],
  },
  {
    week: 7,
    title: "Practice Exams and Weak Area Review",
    topics: [
      "Full 120-question timed mock exam (2 hours)",
      "Score analysis by topic area",
      "Targeted review of topics scoring below 70%",
      "Second mock exam focusing on weak areas",
      "Flashcard review of missed questions",
    ],
    resources: ["CFCM question bank (this program)", "NCMA practice exams", "Missed question log"],
    milestones: ["Complete Mock Exam 1 — target ≥70%", "Complete Mock Exam 2 — target ≥80%", "Review all missed questions"],
  },
  {
    week: 8,
    title: "Final Review and Exam",
    topics: [
      "Review all 6 topic areas — focus on lowest-scoring",
      "FAR index navigation practice (exam is open-book for FAR)",
      "Exam logistics: 120 questions, 2 hours, 70% passing, ~$390 member fee",
      "Day-before preparation: sleep, materials organized, test center confirmed",
      "Post-exam: continuing education requirements (80 hours per 5-year cycle)",
    ],
    resources: ["FAR (physical or digital)", "All practice question missed-log", "NCMA exam registration confirmation"],
    milestones: ["Final 120-question mock exam ≥80%", "Register for CFCM exam", "Take CFCM exam"],
  },
];

const lessons = [
  lesson(
    "sr8-l1-cfcm-overview",
    SKILL_ID,
    "CFCM Certification Overview",
    [
      {
        heading: "About the CFCM",
        content:
          "The Certified Federal Contracts Manager (CFCM) credential is offered by the National Contract Management Association (NCMA). It validates FAR-based contracting knowledge across contract types, competition, small business, pricing, administration, and supplements. Requirements: 24 hours of continuing education (this program contributes), relevant experience (typically 2+ years in contract management), and passing the exam. Exam format: 120 multiple-choice questions, 2 hours, 70% passing score (84 correct). Cost: approximately $390 for NCMA members, $490 for non-members.",
      },
      {
        heading: "Exam Content Areas",
        content:
          "Six primary topic areas mirror the FAR structure: (1) Contract Types and Selection — FFP, CPFF, T&M, IDIQ, commercial items; (2) Competition and Source Selection — FAR 6, 14, 15; (3) Small Business Programs — FAR 19, set-asides, subcontracting plans; (4) Contract Pricing — TINA, cost principles, price/cost analysis; (5) Contract Administration — mods, changes, termination, closeout, disputes; (6) DFARS and Supplements — cyber, data rights, defense-specific clauses. Questions require identifying the correct FAR citation and applying regulatory principles to scenarios.",
      },
      {
        heading: "How This Program Prepares You",
        content:
          "This program includes 120 CFCM-style practice questions organized by topic with FAR citations and explanations. Use the mock exam mode (120 questions, 2-hour timer) to simulate exam conditions. Track performance by topic to identify weak areas for targeted review. Combine with the 8-week study plan for structured preparation. Target: score ≥80% on mock exams before scheduling the real exam.",
      },
    ],
    [
      q("sr8-l1-q1", "The CFCM exam consists of:", ["50 questions, 1 hour", "120 questions, 2 hours", "200 questions, 4 hours", "10 essay questions"], 1, "CFCM exam: 120 multiple-choice questions in 2 hours."),
      q("sr8-l1-q2", "The CFCM passing score is:", ["50%", "60%", "70%", "90%"], 2, "70% passing score = 84 correct out of 120 questions."),
      q("sr8-l1-q3", "CFCM is offered by:", ["DCAA", "NCMA (National Contract Management Association)", "SBA", "GAO"], 1, "NCMA administers the CFCM certification program."),
      q("sr8-l1-q4", "CFCM continuing education requires:", ["No continuing education", "80 hours per 5-year cycle", "1 hour annually", "Retaking the full exam every year"], 1, "CFCM holders must complete 80 CE hours per 5-year recertification cycle."),
      q("sr8-l1-q5", "Before scheduling the CFCM exam, target mock exam score of:", ["50%", "60%", "≥80%", "100%"], 2, "Score ≥80% on practice exams to ensure comfortable margin above 70% passing threshold."),
    ]
  ),
  lesson(
    "sr8-l2-study-plan",
    SKILL_ID,
    "8-Week CFCM Study Plan",
    [
      {
        heading: "Weeks 1-2: Foundations and Competition",
        content:
          "Week 1 covers FAR structure, contract types (FFP through LH), and commercial item contracting. Complete 20 contract-type practice questions daily. Week 2 covers competition requirements, sealed bidding vs negotiation, source selection methods, and sole source justifications. Read FAR Parts 6, 14, and 15 alongside the study guide. Key milestone: score ≥70% on each topic mini-quiz before advancing.",
      },
      {
        heading: "Weeks 3-4: Small Business and Pricing",
        content:
          "Week 3 covers FAR Part 19 — size standards, set-aside types, limitation on subcontracting, and subcontracting plans. Practice calculating size standard compliance including affiliates. Week 4 covers TINA thresholds, cost principles (FAR Part 31), and price vs cost analysis. Know the difference between allowable and unallowable costs — this is heavily tested. Complete 20 practice questions per topic daily.",
      },
      {
        heading: "Weeks 5-6: Administration and DFARS",
        content:
          "Week 5 covers contract administration — mods, changes clause, constructive changes, termination, disputes, and closeout. This aligns directly with Skill 1 of this program. Week 6 covers DFARS — especially cybersecurity clauses (7012, 7019, 7020, 7021) and defense data rights. DFARS questions are increasingly common on the CFCM exam.",
      },
      {
        heading: "Weeks 7-8: Mock Exams and Final Review",
        content:
          "Week 7: Take full 120-question timed mock exam. Analyze scores by topic — any area below 70% gets 2 days of targeted review. Take second mock exam mid-week. Week 8: Final review of weakest topics, FAR index navigation practice (exam allows FAR reference), confirm exam registration and logistics. Target ≥80% on final mock before sitting for the real exam.",
      },
    ],
    [
      q("sr8-l2-q1", "Week 1 of the study plan focuses on:", ["DFARS cyber clauses", "FAR basics and contract types", "Resume writing", "Excel templates"], 1, "Week 1 builds foundation with FAR structure and contract types."),
      q("sr8-l2-q2", "Week 4 covers:", ["Contract closeout only", "Contract pricing — TINA, cost principles, price/cost analysis", "Interview prep", "Redlining"], 1, "Week 4 is dedicated to pricing — heavily tested on CFCM exam."),
      q("sr8-l2-q3", "During Week 7, you should:", ["Skip practice questions", "Take full 120-question timed mock exams and review weak areas", "Only read the FAR index", "Take the real exam without practice"], 1, "Week 7 mock exams simulate conditions and identify weak areas."),
      q("sr8-l2-q4", "Before the real exam, target mock score of:", ["50%", "≥80%", "60%", "Any score"], 1, "≥80% on mocks provides comfortable margin above 70% passing threshold."),
      q("sr8-l2-q5", "Daily practice during study weeks should include:", ["No practice questions", "20 practice questions per topic area", "Only reading without testing", "One question per week"], 1, "20 questions daily per topic builds retention and identifies gaps."),
    ]
  ),
];

export const SR_SKILL_8: SrAdminSkill = {
  id: SKILL_ID,
  number: 8,
  title: "CFCM Certification Preparation",
  description: "Complete CFCM exam prep with 120 practice questions, 8-week study plan, and mock exam mode.",
  lessons,
};
