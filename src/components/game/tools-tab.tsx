"use client";

import { useGameStore } from "@/lib/game/store";
import { ToolsShell } from "@/components/tools/tools-shell";
import type { ToolId } from "@/lib/tools/types";

export function ToolsTab({ initialTool }: { initialTool?: ToolId }) {
  const setActiveTab = useGameStore((s) => s.setActiveTab);

  return (
    <ToolsShell
      initialTool={initialTool}
      onPracticeBid={() => setActiveTab("proposals")}
    />
  );
}
