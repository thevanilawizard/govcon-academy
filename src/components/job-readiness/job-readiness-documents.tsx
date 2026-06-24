"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DOCUMENT_LIBRARY } from "@/lib/job-readiness/content";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";

export function JobReadinessDocuments({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeId, setActiveId] = useState(DOCUMENT_LIBRARY[0]?.id ?? "");

  const doc = DOCUMENT_LIBRARY.find((d) => d.id === activeId) ?? DOCUMENT_LIBRARY[0];
  const reviewed = progress.documentsReviewed.includes(doc.id);

  const toggleReviewed = () => {
    onUpdate((p) => {
      const documentsReviewed = reviewed
        ? p.documentsReviewed.filter((id) => id !== doc.id)
        : [...p.documentsReviewed, doc.id];
      return syncSectionCertificate("documents", { ...p, documentsReviewed });
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Document library</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {progress.documentsReviewed.length}/{DOCUMENT_LIBRARY.length} documents reviewed
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {DOCUMENT_LIBRARY.map((d) => (
          <Button
            key={d.id}
            variant={d.id === activeId ? "default" : "outline"}
            size="sm"
            className="text-xs"
            onClick={() => setActiveId(d.id)}
          >
            {d.title.slice(0, 30)}
            {progress.documentsReviewed.includes(d.id) && " ✓"}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 print-document">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{doc.title}</CardTitle>
            <p className="text-xs text-muted-foreground">{doc.docType}</p>
          </CardHeader>
          <CardContent>
            <pre className="text-xs whitespace-pre-wrap font-sans leading-relaxed max-h-[60vh] overflow-y-auto">
              {doc.content}
            </pre>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Annotations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[40vh] overflow-y-auto">
              {doc.annotations.map((a) => (
                <div
                  key={a.label}
                  className={`p-3 rounded-lg text-xs border ${a.risk ? "border-red-200 bg-red-50" : "border-blue-100 bg-blue-50"}`}
                >
                  <p className="font-medium mb-1">{a.label}</p>
                  <p className="text-muted-foreground">{a.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {doc.checklist && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Review checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-xs space-y-1 list-disc pl-4">
                  {doc.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-wrap gap-2 print:hidden">
            <Button size="sm" onClick={toggleReviewed}>
              {reviewed ? "Mark not reviewed" : "Mark reviewed"}
            </Button>
            <Button size="sm" variant="outline" onClick={() => window.print()}>
              Print document
            </Button>
          </div>
          {reviewed && <Badge className="bg-emerald-600">Reviewed</Badge>}
        </div>
      </div>
    </div>
  );
}
