"use client";

import { getRealWorldBridge } from "@/lib/education/real-world-bridge";
import { Card, CardContent } from "@/components/ui/card";

export function RealWorldCallout({ eventKey }: { eventKey: string }) {
  const bridge = getRealWorldBridge(eventKey);

  return (
    <Card className="border-blue-200 bg-blue-50/80">
      <CardContent className="p-4 space-y-3 text-sm">
        <p className="font-medium text-blue-950">In Real Life</p>
        <p className="text-blue-900 leading-relaxed">{bridge.situation}</p>
        <div>
          <p className="text-xs font-medium text-blue-800 mb-1">What a seasoned pro would do</p>
          <p className="text-xs text-blue-900 leading-relaxed">{bridge.proWouldDo}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-red-800 mb-1">Most common mistake</p>
          <p className="text-xs text-red-900/90 leading-relaxed">{bridge.commonMistake}</p>
        </div>
        <div className="p-3 rounded-lg bg-white border border-blue-200">
          <p className="text-xs font-medium text-primary mb-1">Take action today</p>
          <p className="text-xs leading-relaxed">{bridge.realWorldAction}</p>
        </div>
      </CardContent>
    </Card>
  );
}
