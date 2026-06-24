import type { RoadmapPhase } from "../types";

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: "phase-1-education",
    title: "Phase 1 — Education",
    timeframe: "0–6 months",
    steps: [
      {
        id: "complete-education-center",
        label: "Complete GovCon Academy Education Center (all 8 modules)",
        resources: [
          "Education Center → Modules 1–8",
          "Final certification exam",
          "Job Readiness Core Competencies",
        ],
      },
      {
        id: "dau-con-courses",
        label: "Register for free DAU courses: CON 100, CON 110, CON 120, CON 200 series",
        resources: [
          "https://dau.edu",
          "DAU CON 100: Introduction to Contracting",
          "DAU CON 110: Contract Fundamentals",
        ],
      },
      {
        id: "cfcm-study-guide",
        label: "Study NCMA CFCM exam guide and FAR Part 1–53 overview",
        resources: [
          "NCMA CFCM Study Guide (latest edition)",
          "FAR Part 1, 2, 6, 12, 15, 19 quick-reference cards",
        ],
      },
      {
        id: "join-ncma",
        label: "Join NCMA as a student member ($50/year)",
        resources: ["https://www.ncmahq.org", "NCMA Contract Management magazine"],
      },
      {
        id: "ncma-chapter-meeting",
        label: "Attend one local NCMA chapter meeting",
        resources: ["NCMA chapter directory", "LinkedIn NCMA local groups"],
      },
    ],
  },
  {
    id: "phase-2-certification",
    title: "Phase 2 — Certification",
    timeframe: "6–12 months",
    steps: [
      {
        id: "pass-cfcm",
        label: "Pass the CFCM exam (Certified Federal Contracts Manager)",
        resources: ["NCMA exam registration", "CFCM practice exams", "FAR flashcards"],
      },
      {
        id: "dau-con-270",
        label: "Complete DAU CON 270: Contractor's Commercial Item Proposals",
        resources: ["DAU iCatalog CON 270", "FAR Part 12 reference"],
      },
      {
        id: "dau-clm-049",
        label: "Complete DAU CLM 049: Contracting Officer's Representative",
        resources: ["DAU CLM 049 course materials", "COR Handbook"],
      },
      {
        id: "study-group",
        label: "Build a study group with other program participants",
        resources: ["GovCon Academy community", "Local NCMA study sessions"],
      },
    ],
  },
  {
    id: "phase-3-experience",
    title: "Phase 3 — Experience",
    timeframe: "12–24 months",
    steps: [
      {
        id: "apply-entry-level",
        label: "Apply for entry-level contracts positions (Administrator, Specialist I)",
        resources: ["USAJOBS GS-1102", "ClearanceJobs", "LinkedIn GovCon job alerts"],
      },
      {
        id: "target-training-programs",
        label: "Target companies with formal training programs (large defense primes)",
        resources: [
          "Lockheed Martin, Leidos, SAIC, Booz Allen career pages",
          "Rotational contracts programs",
        ],
      },
      {
        id: "government-side-entry",
        label: "Consider government-side entry: GS-1102 Contracting Officer series",
        resources: ["USAJOBS 1102 series", "DAWIA certification path overview"],
      },
      {
        id: "ncma-active-participation",
        label: "Join NCMA and participate actively — networking drives hiring in this field",
        resources: ["NCMA committees", "National Education Conference"],
      },
      {
        id: "ncma-relationships",
        label: "Build relationships at local NCMA events and industry days",
        resources: ["SAM.gov industry day calendar", "Local PTAC offices"],
      },
    ],
  },
  {
    id: "phase-4-advancement",
    title: "Phase 4 — Advancement",
    timeframe: "2–5 years",
    steps: [
      {
        id: "pursue-cpcm",
        label: "Pursue CPCM (Certified Professional Contracts Manager — highest NCMA credential)",
        resources: ["NCMA CPCM requirements", "Advanced FAR/DFARS study plan"],
      },
      {
        id: "obtain-clearance",
        label: "Obtain or upgrade security clearance — opens significantly more opportunities",
        resources: ["SF-86 preparation guide", "Clearance processing timelines by level"],
      },
      {
        id: "develop-specialty",
        label: "Develop a specialty: cybersecurity contracts, international, or commercial item contracting",
        resources: [
          "Education Center Module 3 (DFARS/Cyber)",
          "DAU CON 270 / CON 360",
        ],
      },
      {
        id: "mentor-juniors",
        label: "Begin mentoring junior contracts professionals",
        resources: ["NCMA mentor programs", "Internal company mentorship"],
      },
      {
        id: "present-ncma",
        label: "Present at an NCMA chapter meeting or national conference",
        resources: ["NCMA call for papers", "Case study from your portfolio (sanitized)"],
      },
    ],
  },
];
