import type { ToolId } from "./types";

export const TOOL_REGISTRY: {
  id: ToolId;
  title: string;
  description: string;
  standalone: boolean;
}[] = [
  {
    id: "live-sam",
    title: "Live SAM.gov",
    description: "Search real federal contract opportunities from SAM.gov",
    standalone: true,
  },
  {
    id: "proposal-workshop",
    title: "Proposal Workshop",
    description: "AI proposal grader with scorecard and rewrite assistant",
    standalone: true,
  },
  {
    id: "contract-review",
    title: "Contract Review",
    description: "Instant FAR/DFARS clause risk analysis",
    standalone: true,
  },
  {
    id: "rate-calculator",
    title: "Rate Calculator",
    description: "Build fringe, overhead, and G&A indirect rates",
    standalone: true,
  },
  {
    id: "career-builder",
    title: "Career Builder",
    description: "Resume and LinkedIn content from your progress",
    standalone: true,
  },
  {
    id: "bid-no-bid",
    title: "Bid/No-Bid Tool",
    description: "Structured capture decision framework with AI recommendation",
    standalone: true,
  },
  {
    id: "sources-sought",
    title: "Sources Sought Generator",
    description: "Draft professional market research responses",
    standalone: true,
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    description: "Competitor and agency research via USASpending.gov",
    standalone: true,
  },
];
