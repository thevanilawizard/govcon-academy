"use client";

import { useState } from "react";
import { TRAINING_RESOURCES } from "@/lib/education/training/resources";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TrainingResourcesSection({ onBack }: { onBack: () => void }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = TRAINING_RESOURCES.find((r) => r.id === selectedId);

  const handleDownload = (title: string, content: string) => {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (selected) {
    return (
      <div className="space-y-4 max-w-3xl">
        <button type="button" onClick={() => setSelectedId(null)} className="text-xs text-muted-foreground hover:text-foreground">
          ← All resources
        </button>
        <div>
          <h2 className="text-xl font-medium">{selected.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{selected.description}</p>
        </div>
        <pre className="p-4 rounded-lg border bg-gray-50 text-xs whitespace-pre-wrap font-mono leading-relaxed max-h-[480px] overflow-y-auto">
          {selected.content}
        </pre>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => handleDownload(selected.title, selected.content)}>
            Download template
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigator.clipboard.writeText(selected.content)}
          >
            Copy to clipboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to program overview
      </button>
      <div>
        <h2 className="text-xl font-medium">Real world tools & templates</h2>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-2xl">
          Downloadable checklists, matrices, and worksheets used by contracts professionals
          daily. Copy into your compliance program or export as Markdown.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {TRAINING_RESOURCES.map((resource) => (
          <Card
            key={resource.id}
            className="cursor-pointer hover:border-primary/40 transition-colors"
            onClick={() => setSelectedId(resource.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground line-clamp-3">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
