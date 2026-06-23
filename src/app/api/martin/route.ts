import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { MARTIN_SYSTEM_PROMPT, MENTOR_TOPIC_PROMPTS } from "@/lib/game/constants";

export async function POST(request: Request) {
  try {
    const { prompt, context, trigger, topicId } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        message:
          "Martin is offline — add your ANTHROPIC_API_KEY to enable AI mentoring. Focus on set-aside aligned opportunities where your NAICS codes match, and protect your cash runway above all else.",
      });
    }

    let systemPrompt = MARTIN_SYSTEM_PROMPT;
    let userContent = `${context}\n\n${prompt}`;

    if (trigger === "mentor_topic" && topicId && MENTOR_TOPIC_PROMPTS[topicId]) {
      const topic = MENTOR_TOPIC_PROMPTS[topicId];
      systemPrompt = `${MARTIN_SYSTEM_PROMPT}\n\n${topic.systemContext}`;
      userContent = `${context}\n\n${topic.userPrompt}`;
    }

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: "user", content: userContent }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const message = textBlock?.type === "text" ? textBlock.text : "No response generated.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Martin API error:", error);
    return NextResponse.json(
      {
        message:
          "Martin hit a snag. Prioritize opportunities where you have both NAICS and set-aside alignment, and never bid on contracts requiring clearance you don't hold.",
      },
      { status: 500 }
    );
  }
}
