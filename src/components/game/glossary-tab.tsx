import { ENHANCED_GLOSSARY } from "@/lib/education/glossary-full";

export function GlossaryTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Glossary</h2>
        <p className="text-sm text-muted-foreground">
          Essential federal contracting terms — plain English, real examples, and common mistakes
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {ENHANCED_GLOSSARY.map((item) => (
          <div key={item.term} className="p-4 rounded-lg border bg-white space-y-3">
            <h3 className="text-sm font-medium">{item.term}</h3>
            <p className="text-sm leading-relaxed">{item.definition}</p>
            <div>
              <p className="text-xs font-medium text-primary mb-1">Why it matters</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.whyItMatters}</p>
            </div>
            <div>
              <p className="text-xs font-medium mb-1">Real example</p>
              <p className="text-xs text-muted-foreground leading-relaxed italic">{item.example}</p>
            </div>
            <div className="p-2 rounded bg-red-50 border border-red-100">
              <p className="text-xs font-medium text-red-800 mb-1">Common mistake</p>
              <p className="text-xs text-red-900/90 leading-relaxed">{item.commonMistake}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
