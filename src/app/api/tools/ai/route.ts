import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { MARTIN_SYSTEM_PROMPT } from "@/lib/game/constants";

const TOOL_PROMPTS: Record<string, string> = {
  "opportunity-analysis": `You are Martin Business, a senior federal capture manager. Analyze the live SAM.gov opportunity against the player's profile. Structure your response with these headings:
## Fit Assessment
## PWS Complexity
## Likely Incumbent
## Set-Aside Strategy
## Red Flags
## Bid/No-Bid Recommendation
## Proposal Strategy (if bidding)
Be specific, cite FAR/DFARS where relevant, and give actionable advice.`,

  "proposal-grade": `You are Martin Business acting as a government source selection evaluator. Grade the proposal against Section M criteria. Return ONLY valid JSON with this structure:
{
  "technical": { "score": number, "grade": "A-F" },
  "requirements": { "score": number, "grade": "A-F" },
  "management": { "score": number, "grade": "A-F" } or null,
  "pastPerformance": { "score": number, "grade": "A-F" } or null,
  "priceAssessment": "string",
  "overallScore": number,
  "overallGrade": "A-F",
  "strengths": ["..."],
  "weaknesses": ["..."],
  "missing": ["..."],
  "suggestions": ["..."],
  "complianceNotes": ["..."],
  "verdict": "string",
  "biggestImprovement": "string",
  "lptaAssessment": "string",
  "nextSteps": ["..."]
}`,

  "proposal-rewrite": `You are Martin Business. Rewrite the provided proposal section to score higher with government evaluators. Return JSON:
{ "rewritten": "full rewritten text", "changes": ["what changed and why"] }`,

  "clause-analysis": `You are Martin Business, a contracts attorney specializing in FAR/DFARS. Analyze the pasted contract language. Return ONLY valid JSON:
{
  "identification": "clause name and citation",
  "requirement": "what it requires",
  "riskLevel": "Low|Medium|High|Critical",
  "riskColor": "green|yellow|red",
  "whatCouldGoWrong": ["..."],
  "scenarios": ["..."],
  "dollarExposure": "string",
  "negotiable": boolean,
  "negotiationGuide": "string",
  "alternativeLanguage": "sample alternative clause text",
  "plainEnglish": "string",
  "dayToDay": "string",
  "compliance": ["..."],
  "governmentPowers": ["..."],
  "relatedClauses": ["..."]
}`,

  "bid-no-bid": `You are Martin Business. Based on the structured bid/no-bid inputs, give a definitive recommendation. Return ONLY valid JSON:
{
  "recommendation": "BID|NO-BID|BID WITH CONDITIONS",
  "reasoning": "detailed paragraph",
  "focusAreas": ["top 3 if BID"],
  "conditions": ["if BID WITH CONDITIONS"],
  "changesNeeded": ["if NO-BID what would change the decision"],
  "expectedValueNote": "string"
}`,

  "sources-sought": `You are Martin Business. Draft a complete, professional sources sought response. Include these sections with markdown headings:
## Company Capabilities Statement
## Technical Capabilities
## Past Performance Summary (3 examples)
## Questions for the Agency (5-7 strategic questions)
## Teaming Interest
Also include a brief ## Why Sources Sought Matters section teaching the player.`,

  "rate-commentary": `You are Martin Business, a GovCon CFO advisor. Review the indirect rate structure provided. Explain what's driving each rate, whether rates are competitive for a small/mid GovCon firm, and 3 specific actions to improve competitiveness. Be concise and practical.`,

  "career-linkedin": `You are Martin Business, a federal contracting career coach. Generate LinkedIn optimization content. Return JSON:
{ "headlines": ["3 options"], "summary": "LinkedIn about section", "skills": ["skill list"] }`,

  "bid-history-review": `You are Martin Business. Review the player's bid/no-bid decision history and identify patterns, win-rate insights, and recommendations for improving capture discipline.`,
};

export async function POST(request: Request) {
  try {
    const { tool, prompt, context, jsonMode } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        message: "Add ANTHROPIC_API_KEY to enable AI-powered tools.",
        offline: true,
      });
    }

    const toolPrompt = TOOL_PROMPTS[tool] ?? MARTIN_SYSTEM_PROMPT;
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: jsonMode ? 4000 : 2500,
      system: `${MARTIN_SYSTEM_PROMPT}\n\n${toolPrompt}`,
      messages: [
        {
          role: "user",
          content: context ? `${context}\n\n---\n\n${prompt}` : prompt,
        },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const message = textBlock?.type === "text" ? textBlock.text : "";

    if (jsonMode) {
      try {
        const jsonMatch = message.match(/\{[\s\S]*\}/);
        const parsed = JSON.parse(jsonMatch?.[0] ?? message);
        return NextResponse.json(parsed);
      } catch {
        return NextResponse.json({ message, parseError: true });
      }
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Tools AI error:", error);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
