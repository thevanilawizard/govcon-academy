"use client";

import {
  KNOWLEDGE_TOPICS,
  getTopicStatus,
  findTopicLabel,
  type TopicStatus,
} from "@/lib/learning/knowledge-map";
import type { LearningProgress } from "@/lib/learning/types";
import type { CurriculumLesson } from "@/lib/learning/types";
import { cn } from "@/lib/utils";

function topicStatusColor(status: TopicStatus): string {
  switch (status) {
    case "mastered":
      return "bg-emerald-500 hover:bg-emerald-600 text-white";
    case "studied":
      return "bg-amber-400 hover:bg-amber-500 text-gray-900";
    default:
      return "bg-gray-200 hover:bg-gray-300 text-gray-800";
  }
}

export function KnowledgeMap({
  progress,
  lessons,
  onTopicClick,
}: {
  progress: LearningProgress;
  lessons: CurriculumLesson[];
  onTopicClick?: (lessonId: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Knowledge Map</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {KNOWLEDGE_TOPICS.map((topic) => {
          const status = getTopicStatus(progress, topic.id);
          const targetLesson = lessons.find((l) => l.topicId === topic.id);
          return (
            <button
              key={topic.id}
              type="button"
              title={`${findTopicLabel(topic.id)}: ${topic.description}`}
              disabled={!targetLesson}
              onClick={() => targetLesson && onTopicClick?.(targetLesson.id)}
              className={cn(
                "aspect-square rounded-md p-2 text-left text-[10px] sm:text-xs font-medium transition-colors",
                topicStatusColor(status),
                !targetLesson && "opacity-40 cursor-default"
              )}
            >
              {topic.label}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-emerald-500" /> Mastered
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-amber-400" /> Studied
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-gray-200" /> Not started
        </span>
      </div>
    </div>
  );
}
