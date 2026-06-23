import type { RegulatoryDeepDive, SampleDocument } from "@/lib/education/training/types";

export function SampleDocumentsSection({ documents }: { documents: SampleDocument[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Sample documents</p>
      {documents.map((d) => (
        <article key={d.title} className="rounded-lg border overflow-hidden">
          <div className="px-4 py-2 bg-gray-100 border-b flex justify-between items-center">
            <h4 className="text-sm font-medium">{d.title}</h4>
            <span className="text-xs text-muted-foreground">{d.docType}</span>
          </div>
          <pre className="p-4 text-xs whitespace-pre-wrap font-mono bg-gray-50 text-gray-800 leading-relaxed">
            {d.content}
          </pre>
          <div className="p-4 space-y-2 border-t bg-white">
            {d.annotations.map((a) => (
              <div key={a.label} className="text-xs">
                <span className="font-medium text-primary">{a.label}: </span>
                <span className="text-muted-foreground">{a.text}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function RegulatoryDeepDiveSection({ dives }: { dives: RegulatoryDeepDive[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Regulatory deep dive</p>
      {dives.map((r) => (
        <article key={r.citation} className="p-4 rounded-lg border space-y-3 text-sm">
          <h4 className="font-medium text-primary">{r.citation}</h4>
          <blockquote className="p-3 rounded bg-gray-50 border-l-4 border-primary text-xs font-mono leading-relaxed">
            {r.regulatoryText}
          </blockquote>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-medium mb-1">Plain English</p>
              <p className="text-muted-foreground leading-relaxed">{r.plainEnglish}</p>
            </div>
            <div>
              <p className="font-medium mb-1">For contractors</p>
              <p className="text-muted-foreground leading-relaxed">{r.contractorImpact}</p>
            </div>
            <div>
              <p className="font-medium mb-1">For the government</p>
              <p className="text-muted-foreground leading-relaxed">{r.governmentImpact}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Common disputes</p>
              <p className="text-muted-foreground leading-relaxed">{r.commonDisputes}</p>
            </div>
          </div>
          {r.gaoCases && (
            <p className="text-xs">
              <span className="font-medium">GAO / case law: </span>
              {r.gaoCases}
            </p>
          )}
          {r.contractorAdvantage && (
            <p className="text-xs p-2 rounded bg-emerald-50 border border-emerald-100">
              <span className="font-medium">Contractor advantage: </span>
              {r.contractorAdvantage}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
