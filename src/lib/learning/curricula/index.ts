import type { CurriculumLesson, LearningPath } from "../types";
import { CAREER_CURRICULUM } from "./career-track";
import { ENTREPRENEUR_CURRICULUM } from "./entrepreneur-track";
import { SIMULATOR_CURRICULUM } from "./simulator-track";

const CURRICULA: Record<LearningPath, CurriculumLesson[]> = {
  career: CAREER_CURRICULUM,
  entrepreneur: ENTREPRENEUR_CURRICULUM,
  simulator: SIMULATOR_CURRICULUM,
};

const ALL_LESSONS: CurriculumLesson[] = [
  ...CAREER_CURRICULUM,
  ...ENTREPRENEUR_CURRICULUM,
  ...SIMULATOR_CURRICULUM,
];

const LESSON_BY_ID = new Map(ALL_LESSONS.map((l) => [l.id, l]));

export function getCurriculum(path: LearningPath): CurriculumLesson[] {
  return CURRICULA[path];
}

export function getLesson(id: string): CurriculumLesson | undefined {
  return LESSON_BY_ID.get(id);
}

export function getAllLessons(path: LearningPath): CurriculumLesson[] {
  return getCurriculum(path);
}

export function getWeekLessons(path: LearningPath, week: number): CurriculumLesson[] {
  return getCurriculum(path).filter((l) => l.week === week);
}

export function getTodaysLesson(
  path: LearningPath,
  week: number,
  day: number
): CurriculumLesson | undefined {
  return getLesson(`${path}-w${week}-d${day}`);
}

export function getLessonIndex(path: LearningPath, lessonId: string): number {
  return getCurriculum(path).findIndex((l) => l.id === lessonId);
}

export { CAREER_CURRICULUM, ENTREPRENEUR_CURRICULUM, SIMULATOR_CURRICULUM };
