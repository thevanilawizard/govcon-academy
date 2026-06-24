import type { TrainingQuizQuestion, TrainingSection } from "@/lib/education/training/types";
import type {
  FarViolation,
  ProLesson,
  ProLessonScenario,
  ProModule,
  ProAcademyTrack,
  RegulatoryQuote,
} from "./types";

export function q(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  type: TrainingQuizQuestion["type"] = "multiple_choice"
): TrainingQuizQuestion {
  return { id, type, question, options, correctIndex, explanation };
}

export function tf(id: string, question: string, isTrue: boolean, explanation: string): TrainingQuizQuestion {
  return q(id, question, ["True", "False"], isTrue ? 0 : 1, explanation, "true_false");
}

export function fillBlank(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): TrainingQuizQuestion {
  return q(id, question, options, correctIndex, explanation, "scenario");
}

export function proLesson(
  moduleId: string,
  track: ProAcademyTrack,
  number: string,
  title: string,
  objectives: string[],
  regulatoryQuotes: RegulatoryQuote[],
  plainEnglishSections: TrainingSection[],
  contractorImpact: string,
  governmentImpact: string,
  scenarios: ProLessonScenario[],
  commonViolations: FarViolation[],
  quiz: TrainingQuizQuestion[],
  extras?: {
    farPart?: number;
    realWorldApplication?: string;
    realWorldExercise?: string;
    martinPrompt?: string;
    farReferences?: string[];
  }
): ProLesson {
  const quoteSections: TrainingSection[] = regulatoryQuotes.map((rq) => ({
    heading: `Regulatory text — ${rq.citation}`,
    content: `"${rq.text}"`,
  }));

  const impactSections: TrainingSection[] = [
    { heading: "Plain English", content: plainEnglishSections.map((s) => `${s.heading}: ${s.content}`).join("\n\n") },
    { heading: "What it means for the contractor", content: contractorImpact },
    { heading: "What it means for the government", content: governmentImpact },
  ];

  const scenarioSections: TrainingSection[] = scenarios.map((s) => ({
    heading: `Scenario: ${s.title}`,
    content: `${s.situation}\n\nWhy it matters: ${s.whyItMatters}`,
  }));

  const violationSections: TrainingSection[] =
    commonViolations.length > 0
      ? [
          {
            heading: "Common violations and consequences",
            content: commonViolations
              .map((v) => `• ${v.violation} — ${v.consequence}`)
              .join("\n"),
          },
        ]
      : [];

  return {
    id: `${moduleId}-${number.replace(/\./g, "-")}`,
    moduleId,
    track,
    farPart: extras?.farPart,
    number,
    title,
    objectives,
    sections: [...quoteSections, ...impactSections, ...scenarioSections, ...violationSections],
    regulatoryQuotes,
    contractorImpact,
    governmentImpact,
    scenarios,
    commonViolations,
    farReferences: extras?.farReferences,
    realWorldApplication:
      extras?.realWorldApplication ??
      `Apply ${title} on your next contract review or proposal. Identify one obligation triggered by this section and document it in your contract file.`,
    realWorldExercise: extras?.realWorldExercise,
    martinPrompt:
      extras?.martinPrompt ??
      `Teach ${title} to a Contracts Manager candidate. Quote the FAR, explain contractor vs government impact, give a dollar scenario, and one compliance action.`,
    quiz,
  };
}

export function proModule(
  id: string,
  track: ProAcademyTrack,
  number: number,
  title: string,
  description: string,
  careerOutcomes: string[],
  lessons: ProLesson[],
  extras?: { farPart?: number; isStandaloneCourse?: boolean }
): ProModule {
  return {
    id,
    track,
    farPart: extras?.farPart,
    isStandaloneCourse: extras?.isStandaloneCourse,
    number,
    title,
    description,
    careerOutcomes,
    lessons,
  };
}
