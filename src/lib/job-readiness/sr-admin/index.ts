import { CFCM_QUESTIONS, CFCM_QUESTION_COUNT } from "./cfcm-questions";
import {
  SR_ADMIN_INTERVIEW_QUESTIONS,
  SR_ADMIN_RESUME_BULLETS,
  SR_ADMIN_SALARY_NEGOTIATION,
} from "./job-application-prep";
import { SR_SKILL_1 } from "./skill-1-cradle-to-grave";
import { SR_SKILL_2, CONTRACT_BRIEF_SECTIONS } from "./skill-2-contract-briefs";
import { SR_SKILL_3 } from "./skill-3-redlining";
import { SR_SKILL_4 } from "./skill-4-compliance-risk";
import { SR_SKILL_5 } from "./skill-5-portfolio";
import { SR_SKILL_6 } from "./skill-6-proposal-support";
import { SR_SKILL_7, EXCEL_TEMPLATES } from "./skill-7-excel";
import { SR_SKILL_8, CFCM_STUDY_PLAN } from "./skill-8-cfcm";
import type { SrAdminLesson, SrAdminProgram, SrAdminSkill, SrAdminSkillId } from "./types";

export const SR_ADMIN_PROGRAM: SrAdminProgram = {
  id: "sr-admin-program",
  title: "Sr. Contracts Administrator — Job Ready Program",
  subtitle:
    "Target $95K–$110K roles with cradle-to-grave contract management, FAR/DFARS compliance, redlining, contract briefs, and CFCM certification prep.",
  salaryRange: { min: 95000, max: 110000 },
  skillCount: 8,
  cfcmQuestionCount: CFCM_QUESTION_COUNT,
};

export const SR_ADMIN_SKILLS: SrAdminSkill[] = [
  SR_SKILL_1,
  SR_SKILL_2,
  SR_SKILL_3,
  SR_SKILL_4,
  SR_SKILL_5,
  SR_SKILL_6,
  SR_SKILL_7,
  SR_SKILL_8,
];

export function getAllSrAdminLessons(): SrAdminLesson[] {
  return SR_ADMIN_SKILLS.flatMap((skill) => skill.lessons);
}

export function getSkillById(id: string): SrAdminSkill | undefined {
  return SR_ADMIN_SKILLS.find((skill) => skill.id === id);
}

export function getSrAdminLessonById(id: string): SrAdminLesson | undefined {
  return getAllSrAdminLessons().find((lesson) => lesson.id === id);
}

export function getSrAdminLessonsBySkill(skillId: SrAdminSkillId): SrAdminLesson[] {
  const skill = getSkillById(skillId);
  return skill?.lessons ?? [];
}

export {
  SR_SKILL_1,
  SR_SKILL_2,
  SR_SKILL_3,
  SR_SKILL_4,
  SR_SKILL_5,
  SR_SKILL_6,
  SR_SKILL_7,
  SR_SKILL_8,
  CONTRACT_BRIEF_SECTIONS,
  EXCEL_TEMPLATES,
  CFCM_STUDY_PLAN,
  CFCM_QUESTIONS,
  CFCM_QUESTION_COUNT,
  SR_ADMIN_INTERVIEW_QUESTIONS,
  SR_ADMIN_RESUME_BULLETS,
  SR_ADMIN_SALARY_NEGOTIATION,
};

export type {
  SrAdminSkill,
  SrAdminSkillId,
  SrAdminLesson,
  SrAdminPhase,
  SrAdminExercise,
  SrAdminProgram,
  ContractBriefSection,
  ExcelTemplate,
  CfcmQuestion,
  CfcmTopic,
  CfcmStudyWeek,
  JobInterviewQuestion,
  ResumeBullet,
  SalaryNegotiationGuide,
} from "./types";
