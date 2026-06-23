import { MODULE_1 } from "./modules/module-1-foundations";
import { MODULE_2 } from "./modules/module-2-far";
import { MODULE_3 } from "./modules/module-3-dfars";
import { MODULE_4 } from "./modules/module-4-administration";
import { MODULE_5 } from "./modules/module-5-administration";
import { MODULE_6 } from "./modules/module-6-professional";
import type { TrainingLesson, TrainingModule } from "./types";

export const TRAINING_MODULES: TrainingModule[] = [
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5,
  MODULE_6,
];

export function getModuleById(id: string): TrainingModule | undefined {
  return TRAINING_MODULES.find((m) => m.id === id);
}

export function getLessonById(lessonId: string): TrainingLesson | undefined {
  for (const mod of TRAINING_MODULES) {
    const found = mod.lessons.find((l) => l.id === lessonId);
    if (found) return found;
  }
  return undefined;
}

export function getAllLessons(): TrainingLesson[] {
  return TRAINING_MODULES.flatMap((m) => m.lessons);
}

export function getFinalExamLesson(): TrainingLesson | undefined {
  return getAllLessons().find((l) => l.isFinalExam);
}

export const PROGRAM_TITLE = "GovCon Academy Professional Certification";
export const PROGRAM_SUBTITLE =
  "Contracts Manager & Acquisition Specialist Training Program";
