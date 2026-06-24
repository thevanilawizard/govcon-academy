import type { JobReadinessSectionId } from "./types";

export const JOB_READINESS_TITLE = "Contract Manager Job Readiness Program";
export const JOB_READINESS_SUBTITLE =
  "The most practical job-specific training for Contracts Manager and Contracts Administrator roles at defense and civilian federal contractors.";

export const JOB_READINESS_SECTIONS: {
  id: JobReadinessSectionId;
  title: string;
  description: string;
}[] = [
  {
    id: "overview",
    title: "Program overview",
    description: "Your readiness score, salary intelligence, and company fit analysis.",
  },
  {
    id: "day-in-life",
    title: "Day in the life",
    description: "What a Contracts Manager actually does hour by hour.",
  },
  {
    id: "competencies",
    title: "Core competencies",
    description: "Contract review, pricing, administration, subs, and legal.",
  },
  {
    id: "interview",
    title: "Interview prep",
    description: "30 common questions with model answers and simulation mode.",
  },
  {
    id: "documents",
    title: "Document library",
    description: "Annotated real-world contract documents.",
  },
  {
    id: "assessment",
    title: "Skills assessment",
    description: "10-area readiness assessment with company-specific gaps.",
  },
  {
    id: "roadmap",
    title: "Career roadmap",
    description: "Interactive 4-phase professional development plan.",
  },
  {
    id: "vocabulary",
    title: "Vocabulary trainer",
    description: "300 terms with spaced repetition and daily drills.",
  },
  {
    id: "scenarios",
    title: "Simulation scenarios",
    description: "20 branching scenarios teaching critical CM skills.",
  },
  {
    id: "sr-admin",
    title: "Sr. Contracts Admin",
    description:
      "Job Ready Program: cradle-to-grave, contract briefs, redlining, CFCM prep, and Career Ready interview prep for $95K–$110K roles.",
  },
];

export const ASSESSMENT_AREAS = [
  { id: "far" as const, label: "FAR Knowledge" },
  { id: "dfars" as const, label: "DFARS Knowledge" },
  { id: "administration" as const, label: "Contract Administration" },
  { id: "pricing" as const, label: "Pricing & Cost Analysis" },
  { id: "subcontracts" as const, label: "Subcontract Management" },
  { id: "legal" as const, label: "Legal & Compliance" },
  { id: "negotiation" as const, label: "Negotiation Skills" },
  { id: "documents" as const, label: "Document Review" },
  { id: "financial" as const, label: "Financial Acumen" },
  { id: "interview" as const, label: "Interview Readiness" },
];
