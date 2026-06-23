"use client";

import { useGameStore } from "@/lib/game/store";
import { MENTOR_TOPICS } from "@/lib/game/constants";
import { MartinCard } from "@/components/game/martin-card";
import { Button } from "@/components/ui/button";
import { useMartin } from "@/hooks/use-martin";

export function MartinTab() {
  const martinMessages = useGameStore((s) => s.martinMessages);
  const contracts = useGameStore((s) => s.contracts);
  const { askMartin } = useMartin();

  const activeCount = contracts.filter((c) => c.status === "active").length;

  const handleTopic = (topic: (typeof MENTOR_TOPICS)[0]) => {
    askMartin({
      trigger: "mentor_topic",
      topicId: topic.id,
      prompt: topic.title,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Martin Business — AI Mentor</h2>
        <p className="text-sm text-muted-foreground">
          22-year GovCon veteran. Ask about strategy, CPARS, cash flow, and more.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Topics</h3>
        <div className="grid gap-2 md:grid-cols-3">
          {MENTOR_TOPICS.map((topic) => (
            <Button
              key={topic.id}
              variant="outline"
              className="h-auto py-3 px-4 text-left justify-start whitespace-normal"
              onClick={() => handleTopic(topic)}
            >
              <span className="text-sm">{topic.title}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Conversation</h3>
        {martinMessages.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Martin will appear here as you play. Try asking about a topic above.
          </p>
        ) : (
          [...martinMessages].reverse().map((msg) => (
            <MartinCard
              key={msg.id}
              content={msg.content}
              loading={msg.loading}
              trigger={msg.trigger}
            />
          ))
        )}
      </div>
    </div>
  );
}
