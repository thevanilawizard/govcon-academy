import { defaultEnrichment, mergeEnrichment } from "./default-enrichment";
import { LESSON_ENRICHMENTS } from "./enrichment-helpers";
import type { TrainingLesson } from "./types";

export function enrichLesson(lesson: TrainingLesson): TrainingLesson {
  const custom = LESSON_ENRICHMENTS[lesson.id];
  const merged = mergeEnrichment(lesson, custom);
  return {
    ...lesson,
    sections: merged.sections ? [...lesson.sections, ...merged.sections] : lesson.sections,
    caseStudies: merged.caseStudies,
    interactiveScenario: merged.interactiveScenario,
    sampleDocuments: merged.sampleDocuments,
    regulatoryDeepDives: merged.regulatoryDeepDives,
  };
}

export function enrichModuleLessons(lessons: TrainingLesson[]): TrainingLesson[] {
  return lessons.map(enrichLesson);
}
