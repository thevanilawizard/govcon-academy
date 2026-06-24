"use client";

import { useState, type ComponentType } from "react";
import { TOOL_REGISTRY } from "@/lib/tools/registry";
import type { ToolId } from "@/lib/tools/types";
import { LiveSamTool } from "@/components/tools/live-sam-tool";
import { ProposalWorkshopTool } from "@/components/tools/proposal-workshop-tool";
import { ContractReviewTool } from "@/components/tools/contract-review-tool";
import { RateCalculatorTool } from "@/components/tools/rate-calculator-tool";
import { CareerBuilderTool } from "@/components/tools/career-builder-tool";
import { BidNoBidTool } from "@/components/tools/bid-no-bid-tool";
import { SourcesSoughtTool } from "@/components/tools/sources-sought-tool";
import { MarketIntelligenceTool } from "@/components/tools/market-intelligence-tool";
import { GlossaryTab } from "@/components/game/glossary-tab";
import { FieldManualTab } from "@/components/game/field-manual-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TOOL_COMPONENTS: Record<ToolId, ComponentType<{ onPracticeBid?: (id: string) => void }>> = {
  "live-sam": LiveSamTool,
  "proposal-workshop": ProposalWorkshopTool,
  "contract-review": ContractReviewTool,
  "rate-calculator": RateCalculatorTool,
  "career-builder": CareerBuilderTool,
  "bid-no-bid": BidNoBidTool,
  "sources-sought": SourcesSoughtTool,
  "market-intelligence": MarketIntelligenceTool,
};

type ExtendedToolId = ToolId | "glossary" | "field-manual";

const REFERENCE_TABS: { id: ExtendedToolId; title: string; description: string }[] = [
  {
    id: "glossary",
    title: "Glossary",
    description: "Essential federal contracting terms with examples and common mistakes.",
  },
  {
    id: "field-manual",
    title: "Field Manual",
    description: "FAR clause library, pinned terms, and compliance reference.",
  },
];

export function ToolsShell({
  initialTool = "proposal-workshop",
  onPracticeBid,
  standalone = false,
}: {
  initialTool?: ExtendedToolId;
  onPracticeBid?: (oppId: string) => void;
  standalone?: boolean;
}) {
  const [activeTool, setActiveTool] = useState<ExtendedToolId>(initialTool);

  return (
    <div className="space-y-6">
      {!standalone && (
        <div>
          <h2 className="text-xl font-medium mb-1">Professional Tools</h2>
          <p className="text-sm text-muted-foreground">
            Standalone GovCon tools — use on real work with or without the simulation.
          </p>
        </div>
      )}

      <Tabs value={activeTool} onValueChange={(v) => setActiveTool(v as ExtendedToolId)}>
        <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
          {TOOL_REGISTRY.map((t) => (
            <TabsTrigger key={t.id} value={t.id} className="text-xs">
              {t.title}
            </TabsTrigger>
          ))}
          {REFERENCE_TABS.map((t) => (
            <TabsTrigger key={t.id} value={t.id} className="text-xs">
              {t.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {TOOL_REGISTRY.map((t) => {
          const Comp = TOOL_COMPONENTS[t.id];
          return (
            <TabsContent key={t.id} value={t.id} className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">{t.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
                </CardHeader>
                <CardContent>
                  <Comp onPracticeBid={onPracticeBid} />
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}

        <TabsContent value="glossary">
          <GlossaryTab />
        </TabsContent>

        <TabsContent value="field-manual">
          <FieldManualTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
