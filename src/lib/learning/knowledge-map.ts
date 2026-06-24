import type { KnowledgeTopicId, LearningProgress } from "./types";
import { MASTERY_THRESHOLD } from "./types";
import { getCurriculum } from "./curricula";

export interface KnowledgeTopic {
  id: KnowledgeTopicId;
  label: string;
  description: string;
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  { id: "foundations", label: "Foundations", description: "Acquisition roles, contract types, and core concepts" },
  { id: "far-core", label: "FAR Core", description: "Federal Acquisition Regulation structure and Parts 1–15" },
  { id: "small-business", label: "Small Business", description: "Set-asides, size standards, and subcontracting limits" },
  { id: "pricing", label: "Pricing", description: "Cost buildup, indirect rates, and allowability" },
  { id: "proposals", label: "Proposals", description: "RFP compliance, source selection, and capture" },
  { id: "administration", label: "Administration", description: "Mods, subs, kickoff, and day-to-day contract management" },
  { id: "dfars", label: "DFARS", description: "Defense supplements, cyber, clearances, and audits" },
  { id: "job-readiness", label: "Job Readiness", description: "Interview prep, day-in-life, and certification" },
  { id: "sam-market", label: "SAM & Market", description: "Registration, NAICS, and opportunity discovery" },
  { id: "bid-capture", label: "Bid & Capture", description: "Pipeline, bid/no-bid, and solicitation analysis" },
  { id: "delivery", label: "Delivery", description: "Execution strategy, CPARS, and performance" },
  { id: "finance", label: "Finance", description: "Invoicing, cash flow, and contract financing" },
  { id: "growth", label: "Growth", description: "Business development, teaming, and scaling" },
];

export type TopicStatus = "not-started" | "studied" | "mastered";

export function getLessonsForTopic(path: LearningProgress["learningPath"], topicId: KnowledgeTopicId) {
  if (!path) return [];
  return getCurriculum(path).filter((l) => l.topicId === topicId);
}

export function getTopicStatus(progress: LearningProgress, topicId: KnowledgeTopicId): TopicStatus {
  const path = progress.learningPath;
  if (!path) return "not-started";

  const lessons = getLessonsForTopic(path, topicId);
  if (!lessons.length) return "not-started";

  let completed = 0;
  let mastered = 0;

  for (const lesson of lessons) {
    const lp = progress.lessonProgress[lesson.id];
    if (!lp?.completedAt) continue;
    completed++;
    const score = lp.quizScore ?? 0;
    const pct = (score / 5) * 100;
    if (pct >= MASTERY_THRESHOLD) mastered++;
  }

  if (completed === 0) return "not-started";
  if (mastered === lessons.length) return "mastered";
  return "studied";
}

export function getTopicProgress(progress: LearningProgress, topicId: KnowledgeTopicId) {
  const path = progress.learningPath;
  if (!path) return { completed: 0, total: 0, avgScore: 0 };

  const lessons = getLessonsForTopic(path, topicId);
  let completed = 0;
  let scoreSum = 0;
  let scored = 0;

  for (const lesson of lessons) {
    const lp = progress.lessonProgress[lesson.id];
    if (lp?.completedAt) {
      completed++;
      if (lp.quizScore !== undefined) {
        scoreSum += lp.quizScore;
        scored++;
      }
    }
  }

  return {
    completed,
    total: lessons.length,
    avgScore: scored ? Math.round((scoreSum / scored / 5) * 100) : 0,
  };
}

export function findTopicLabel(topicId: KnowledgeTopicId): string {
  return KNOWLEDGE_TOPICS.find((t) => t.id === topicId)?.label ?? topicId;
}
