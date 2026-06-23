import type {
  CaseStudy,
  InteractiveScenario,
  RegulatoryDeepDive,
  SampleDocument,
  TrainingLesson,
} from "./types";

export type LessonEnrichment = {
  caseStudies?: CaseStudy[];
  interactiveScenario?: InteractiveScenario;
  sampleDocuments?: SampleDocument[];
  regulatoryDeepDives?: RegulatoryDeepDive[];
  sections?: TrainingLesson["sections"];
};

export const LESSON_ENRICHMENTS: Record<string, LessonEnrichment> = {};

export function registerEnrichments(map: Record<string, LessonEnrichment>) {
  Object.assign(LESSON_ENRICHMENTS, map);
}

export function cs(
  title: string,
  situation: string,
  decision: string,
  outcome: string,
  lessonLearned: string
): CaseStudy {
  return { title, situation, decision, outcome, lessonLearned };
}

export function scenario(
  prompt: string,
  options: InteractiveScenario["options"],
  correctExplanation: string
): InteractiveScenario {
  return { prompt, options, correctExplanation };
}

export function doc(
  title: string,
  docType: string,
  content: string,
  annotations: SampleDocument["annotations"]
): SampleDocument {
  return { title, docType, content, annotations };
}

export function reg(
  citation: string,
  regulatoryText: string,
  plainEnglish: string,
  contractorImpact: string,
  governmentImpact: string,
  commonDisputes: string,
  extras?: { gaoCases?: string; contractorAdvantage?: string }
): RegulatoryDeepDive {
  return {
    citation,
    regulatoryText,
    plainEnglish,
    contractorImpact,
    governmentImpact,
    commonDisputes,
    gaoCases: extras?.gaoCases,
    contractorAdvantage: extras?.contractorAdvantage,
  };
}
