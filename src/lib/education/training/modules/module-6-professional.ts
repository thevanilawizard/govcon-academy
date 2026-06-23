import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";
import {
  FINAL_EXAM_MAX_ATTEMPTS,
  FINAL_EXAM_PASS_THRESHOLD,
  FINAL_EXAM_QUESTION_COUNT,
  FINAL_EXAM_TIME_LIMIT_SECONDS,
} from "../types";

export const MODULE_6: TrainingModule = {
  id: "certification",
  number: 6,
  title: "Professional Certification Prep",
  description:
    "Prepare for industry credentials and career advancement: NCMA certifications (CPCM, CFCM, CCCM), DAU defense acquisition training, contracts career paths, and the GovCon Academy comprehensive final exam.",
  careerOutcomes: [
    "Choose the right NCMA certification path for your federal contracting role",
    "Navigate DAU courses and defense acquisition workforce credentials",
    "Map career progression from contracts specialist to senior leadership",
    "Pass the 150-question comprehensive program final exam with confidence",
  ],
  lessons: [
    lesson(
      "certification",
      "6.1",
      "NCMA Certifications: CPCM, CFCM, CCCM",
      [
        "Distinguish CFCM, CPCM, and CCCM scope and eligibility requirements",
        "Understand NCMA exam structure, continuing education, and recertification",
        "Align certification study plans to FAR, commercial, and international contracting domains",
        "Apply certification credentials to résumés, proposals, and career advancement",
      ],
      [
        {
          heading: "NCMA Certification Landscape",
          content:
            "The National Contract Management Association (NCMA) offers credentials recognized across federal and commercial contracting. Certified Federal Contracts Manager (CFCM) focuses on U.S. federal acquisition regulation and government contract administration. Certified Professional Contracts Manager (CPCM) covers broader commercial and government contracting management principles. Certified Commercial Contracts Manager (CCCM) emphasizes commercial contract management practices. Contracts professionals often pursue CFCM first for GovCon roles, then CPCM for senior management positions spanning commercial and federal work.",
        },
        {
          heading: "Exam Content and Preparation",
          content:
            "NCMA exams test knowledge domains aligned to each credential: FAR structure, contract formation, administration, pricing, ethics, and commercial terms depending on the certification. Preparation typically combines NCMA study guides, this GovCon Academy curriculum, FAR flashcards, and practice exams. Most candidates need 80–120 hours of structured study. Contracts managers should schedule exam dates after completing Modules 1–5 content and block weekly study time rather than cramming.",
        },
        {
          heading: "Continuing Education and Recertification",
          content:
            "NCMA certifications require continuing education units (CEUs) over a recertification cycle—professional development courses, conference attendance, teaching, and published articles may qualify. Document CEUs as you earn them; last-minute scrambling risks lapse. Recertification maintains credential value on LinkedIn, proposal key personnel resumes, and corporate capability statements.",
        },
        {
          heading: "Leveraging Credentials in Practice",
          content:
            "Certifications signal baseline competence to employers, primes considering teaming agreements, and government evaluators reviewing key personnel qualifications. They do not replace experience—pair credentials with concrete achievements: mods negotiated, audits survived, proposals won. Contracts leaders should support staff certification with exam fees, study time, and bonus programs tied to credential attainment.",
        },
      ],
      "Research the NCMA certification that best fits your role—CFCM for federal-focused administrators, CPCM for broader contracts management. Download the official content outline, gap your knowledge against this program's modules, and schedule a target exam date three months out.",
      [
        q(
          "6-1-1",
          "CFCM certification primarily focuses on:",
          [
            "State and local procurement only",
            "U.S. federal contract management and FAR application",
            "Patent law and intellectual property litigation",
            "Commercial retail sales without contracts",
          ],
          1,
          "CFCM is NCMA's federal contracts management credential."
        ),
        tf(
          "6-1-2",
          "NCMA certifications require continuing education for recertification over a defined cycle.",
          true,
          "CEUs maintain credential validity and demonstrate ongoing professional development."
        ),
        scenario(
          "6-1-3",
          "A contracts specialist on a DoD prime administers CPFF task orders, mods, and WAWF invoicing daily but has no commercial contracting exposure. Which NCMA credential should they prioritize first?",
          [
            "CCCM only",
            "CFCM to validate federal contracting depth aligned to daily work",
            "No certification—experience is sufficient for all employers",
            "CPCM before any federal credential regardless of role",
          ],
          1,
          "CFCM aligns directly to federal contract administration roles on DoD and civilian agency contracts."
        ),
        q(
          "6-1-4",
          "CPCM certification covers:",
          [
            "Only invoice formatting",
            "Broader commercial and government contracts management principles",
            "Security clearance processing exclusively",
            "Grant administration for nonprofits only",
          ],
          1,
          "CPCM is NCMA's professional contracts manager credential spanning commercial and government domains."
        ),
        tf(
          "6-1-5",
          "Certifications should be paired with documented achievements such as mods negotiated and proposals supported—not listed alone without context.",
          true,
          "Credentials plus experience produce the strongest career and proposal narratives."
        ),
      ],
      {
        realWorldExercise:
          "Download the NCMA CFCM or CPCM content outline. Create a gap analysis spreadsheet mapping each domain to GovCon Academy lessons and external study resources. Mark three domains as priority based on your weakest quiz scores.",
        martinPrompt:
          "Compare NCMA CFCM, CPCM, and CCCM for a contracts manager at a $50M DoD services prime. Cover exam domains, study hours, recertification CEUs, and which credential wins on a proposal key personnel resume. Recommend one certification path and a 90-day study plan.",
      }
    ),
    lesson(
      "certification",
      "6.2",
      "DAU Certifications and Defense Acquisition Workforce",
      [
        "Describe DAU's role in defense acquisition workforce development",
        "Identify DAWIA/DAWF certification levels and career field mappings",
        "Select DAU courses relevant to industry contracts professionals",
        "Understand how government-side credentials differ from industry NCMA paths",
      ],
      [
        {
          heading: "Defense Acquisition University Overview",
          content:
            "Defense Acquisition University (DAU) trains the DoD acquisition workforce—contracting officers, program managers, and logisticians—through standardized courses and certification pathways. While DAU credentials are mandatory for military and civilian acquisition professionals, industry contracts staff benefit from selected courses covering FAR/DFARS application, contract types, source selection, and program management interfaces. Understanding DAU frameworks helps industry professionals speak the same language as their KO and PM counterparts.",
        },
        {
          heading: "DAWIA and DAWF Certification Framework",
          content:
            "Defense Acquisition Workforce Improvement Act (DAWIA) certifications assign levels (I, II, III) to career fields including contracting (CON), program management (PM), and business—financial management (BFM). Defense Acquisition Workforce Fundamentals (DAWF) provides baseline credentials. Each level requires specific DAU course completions, experience months, and sometimes an exam. Industry professionals do not earn DAWIA certifications but benefit from knowing level expectations when interfacing with warranted KOs and PMs on ACAT programs.",
        },
        {
          heading: "High-Value DAU Courses for Industry",
          content:
            "Useful courses for contractor contracts staff include CON courses on contract pricing, modifications, and administration; LOG courses on life-cycle logistics interfaces; and CLC courses on leadership. Many DAU courses are available online at no cost to industry personnel through the DAU iCatalog. Contracts managers should identify courses that fill gaps—cost analysis, EVMS interfaces, or systems engineering basics—rather than duplicating NCMA federal content.",
        },
        {
          heading: "Bridging Government and Industry Credentials",
          content:
            "Former government acquisition professionals transitioning to industry often hold DAWIA Level II or III contracting certifications plus warrant experience—a powerful combination with NCMA CFCM. Industry hires should respect that government-side training emphasizes statutory compliance and public accountability; industry adds profitability, capture, and audit defense. Teams blending both backgrounds outperform homogeneous staffs on complex DoD programs.",
        },
      ],
      "Browse the DAU iCatalog and enroll in one course aligned to your gap—CON 090 (Introduction to Government Contracting) if new to DoD, or a pricing or administration course if experienced. Complete the first module this week.",
      [
        tf(
          "6-2-1",
          "DAU primarily trains the DoD acquisition workforce including contracting officers and program managers.",
          true,
          "Defense Acquisition University is the DoD's acquisition training institution."
        ),
        q(
          "6-2-2",
          "DAWIA certification levels (I, II, III) apply to:",
          [
            "Only commercial retail employees",
            "Defense acquisition career fields such as contracting and program management",
            "State motor vehicle departments",
            "Subcontractors exclusively",
          ],
          1,
          "DAWIA establishes certification requirements for DoD acquisition career fields."
        ),
        scenario(
          "6-2-3",
          "Your new KO on a $100M DoD program references DAWIA Level III contracting requirements during kickoff. As the industry contracts manager, what is the best response?",
          [
            "Ignore DAWIA—it applies only to government employees",
            "Recognize the KO's credential framework, align communication to their expertise level, and consider complementary DAU courses for your staff",
            "Demand the KO waive all DFARS clauses",
            "Replace the KO through protest",
          ],
          1,
          "Understanding DAWIA helps industry staff collaborate effectively with warranted acquisition professionals."
        ),
        q(
          "6-2-4",
          "Many DAU courses are available to industry personnel through:",
          [
            "Paid subscription only through NCMA",
            "The DAU iCatalog, often at no cost for selected courses",
            "SAM.gov registration renewal",
            "CPARS submission portal",
          ],
          1,
          "DAU offers online courses accessible to defense industry professionals via the iCatalog."
        ),
        tf(
          "6-2-5",
          "Industry contracts professionals do not earn DAWIA certifications but benefit from understanding government-side credential expectations.",
          true,
          "DAWIA applies to DoD workforce members; industry staff gain collaboration value from knowing the framework."
        ),
      ],
      {
        realWorldExercise:
          "Create a DAU learning plan: list three iCatalog courses that fill gaps in your contracts knowledge (e.g., pricing, modifications, logistics). Enroll in one and document how its learning objectives map to your current contract portfolio.",
        martinPrompt:
          "Explain DAU, DAWIA Level I–III contracting certifications, and which DAU courses a GovCon contracts manager should take after NCMA CFCM prep. Cover how to collaborate with a DAWIA Level III KO on a $75M IDIQ and cite one specific CON course.",
      }
    ),
    lesson(
      "certification",
      "6.3",
      "Career Paths in Contracts",
      [
        "Map progression from contracts specialist through manager and director roles",
        "Identify skills that differentiate administrators from strategic contracts leaders",
        "Build cross-functional competencies in finance, capture, and program management",
        "Develop a personal individual development plan (IDP) with measurable milestones",
      ],
      [
        {
          heading: "Industry Role Progression",
          content:
            "Contracts Specialist or Analyst roles focus on administration: modifications, invoicing, clause compliance, and file maintenance. Senior specialists handle complex CPFF, IDIQ task orders, and subcontract portfolios. Contracts Manager leads a contract portfolio, interfaces with KOs, approves mods and billing, and mentors staff. Director or VP levels set policy, manage DCAA relationships, and support capture and pricing strategy. Compensation scales with responsibility, clearance, and program complexity—DoD classified portfolios command premiums.",
        },
        {
          heading: "Government-Side Mirror Paths",
          content:
            "On the government side, Contract Specialist and Contracting Officer paths progress through warrant levels with increasing dollar thresholds. COR certification is separate but interfaces daily with industry. Understanding both sides helps industry professionals anticipate KO incentives—compliance, mission delivery, audit defensibility—and frame negotiations productively.",
        },
        {
          heading: "Cross-Functional Competencies",
          content:
            "High-performing contracts professionals understand pricing and BOEs (finance), capture timelines (BD), and delivery realities (program management). Speak PWS language with engineers and audit language with DCAA. Soft skills—writing, negotiation, and customer relations—differentiate managers who resolve disputes from administrators who escalate them. Seek rotations through proposals, accounting, and program offices to build T-shaped skills.",
        },
        {
          heading: "Building Your Individual Development Plan",
          content:
            "Set twelve- to twenty-four-month goals: earn CFCM or CPCM, lead a kickoff and closeout, manage a claim with counsel, own a DFARS-heavy contract, and mentor junior staff. Document achievements for performance reviews and résumés. Network through NCMA chapters, ACT-IAC, and agency industry days. Contracts is a credentialed profession—treat learning as continuous, not a one-time course completion.",
        },
      ],
      "Draft a twenty-four-month IDP: target certification (CFCM or CPCM), two stretch assignments (lead mod negotiation, own WAWF invoicing for a DoD contract), and one external network event. Review with your manager quarterly.",
      [
        q(
          "6-3-1",
          "Contracts Manager roles typically include:",
          [
            "Only data entry with no customer contact",
            "Leading portfolios, KO relationships, and compliance strategy",
            "Replacing the Contracting Officer on mods",
            "Writing unrelated marketing copy only",
          ],
          1,
          "Manager roles add leadership, customer interface, and policy oversight to specialist duties."
        ),
        tf(
          "6-3-2",
          "Cross-functional skills valuable in contracts include pricing basics, capture timelines, and program delivery awareness.",
          true,
          "Effective contracts staff collaborate across finance, BD, and operations."
        ),
        scenario(
          "6-3-3",
          "A senior contracts specialist excels at mods and invoicing but avoids customer meetings and proposal support. Leadership asks who is ready for Contracts Manager. What development gap should be addressed first?",
          [
            "More filing alphabetization skills",
            "Customer engagement, cross-functional collaboration, and mentoring capability",
            "Elimination of all FAR knowledge",
            "Avoidance of DCAA entirely",
          ],
          1,
          "Manager readiness requires relationship management and strategic contribution beyond transactional admin."
        ),
        q(
          "6-3-4",
          "Professional development in contracts should be:",
          [
            "One-time onboarding only",
            "Continuous through certifications, stretch assignments, and regulatory updates",
            "Avoided after the first contract award",
            "Limited to CPARS narrative writing",
          ],
          1,
          "Regulatory and program complexity requires ongoing learning and credential maintenance."
        ),
        tf(
          "6-3-5",
          "An individual development plan (IDP) should include measurable milestones such as certification targets and stretch assignments.",
          true,
          "Structured IDPs drive intentional career progression in contracts."
        ),
      ],
      {
        realWorldExercise:
          "Write a 24-month IDP with at least four measurable goals: one certification, one technical stretch (DFARS-heavy contract ownership), one leadership stretch (mentoring or customer-facing role), and one external network commitment. Share it with a mentor or manager.",
        martinPrompt:
          "Map career paths in federal contracting from contracts specialist to VP at a mid-size GovCon. Cover industry and government-side progression, salary drivers, cross-functional skills, and a sample 24-month IDP for someone with three years of experience and CFCM in progress.",
      }
    ),
    lesson(
      "certification",
      "6.4",
      "Final Exam and Readiness Assessment",
      [
        "Understand the comprehensive final exam format and passing requirements",
        "Review content coverage across all eight program modules",
        "Apply effective exam preparation and test-taking strategies",
        "Assess personal readiness before attempting the final exam",
      ],
      [
        {
          heading: "Exam Overview",
          content:
            `The GovCon Academy comprehensive final exam is a ${FINAL_EXAM_QUESTION_COUNT}-question assessment covering the full Contracts Manager and Acquisition Specialist curriculum. Questions are drawn from lesson quiz banks across all modules plus supplemental scenario-based items testing integrated judgment. You must score at least ${FINAL_EXAM_PASS_THRESHOLD}% to pass and earn the program certificate. The exam has a ${FINAL_EXAM_TIME_LIMIT_SECONDS / 3600}-hour time limit and a maximum of ${FINAL_EXAM_MAX_ATTEMPTS} attempts before module review is required. Attempt only after completing all regular lessons with passing quiz scores (70%).`,
        },
        {
          heading: "Module Content Breakdown",
          content:
            "Module 1 — Foundations of Federal Contracting: FAR hierarchy, contract types, acquisition lifecycle, SAM.gov. Module 2 — The FAR in Depth: Parts 1–4, 9, 12, 15, 19, 31, 33, and 52 with regulatory deep dives. Module 3 — DFARS and DoD Contracting: DFARS structure, NIST 800-171 (252.204-7020), CMMC (252.204-7021), TINA (252.215-7010), export control (252.225-7048), cost principles (252.231-7000), accounting system admin (252.242-7006), CPSR (252.244-7001), FMS, and OTA. Module 4 — Contract Administration: mods, invoicing, CPARS, claims, closeout. Module 5 — Proposal Development: capture, Section L/M compliance, technical volumes, pricing. Module 6 — Professional Certification Prep: NCMA, DAU, career paths. Module 7 — Accounting & Finance: job costing, indirect rates, ICS, TINA, contract financing. Module 8 — Ethics & Compliance: FAR 3.1, FCA, FAR 52.203-13. Expect proportionally more questions from larger modules.",
        },
        {
          heading: "Preparation Strategy",
          content:
            "Review missed quiz questions from every lesson—explanations cite the governing FAR/DFARS principle. Complete all real-world exercises and interactive scenarios to cement applied knowledge. Use Martin AI prompts to drill weak domains. Focus extra study on FAR Part 15 source selection, Part 31 cost principles, DFARS cyber clauses, proposal compliance, accounting/indirect rates, ethics, and contract administration workflows. The final exam tests synthesis: scenario questions may combine COR direction limits, mod requirements, invoicing rules, DCAA audit response, and ethics in a single item.",
        },
        {
          heading: "Readiness Checklist and Exam Day",
          content:
            `Before starting, confirm: all regular lessons completed with ≥70% quiz scores; real-world exercises and scenarios attempted for weak areas; module certificates earned for Modules 1–8; quiet environment and three uninterrupted hours blocked. During the exam, read scenario stems carefully, eliminate clearly wrong answers, and flag FAR/DFARS citations mentally. You have ${FINAL_EXAM_MAX_ATTEMPTS} attempts maximum — each attempt generates a detailed score report by topic area. Passing unlocks the GovCon Academy Professional Certification and full program completion credit.`,
        },
      ],
      "Complete the readiness checklist: verify all module quizzes passed, re-take your three lowest-scoring lesson quizzes, and block three uninterrupted hours for the final exam. When ready, launch the exam from this lesson.",
      [],
      {
        isFinalExam: true,
        realWorldExercise:
          "Run a self-assessment: list your five weakest quiz domains, re-study those lessons, and score yourself on ten mixed practice questions before attempting the final exam.",
        martinPrompt:
          "Give me a final exam cram session covering all eight GovCon Academy modules. Ask me five scenario questions mixing FAR Part 15, DFARS cyber, proposal compliance, contract mods under Part 43, accounting/indirect rates, ethics, and NCMA certification paths. Explain each answer with citations.",
      }
    ),
  ],
};
