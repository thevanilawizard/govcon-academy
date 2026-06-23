import { GLOSSARY } from "@/lib/game/constants";

export function GlossaryTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-1">Glossary</h2>
        <p className="text-sm text-muted-foreground">
          Essential federal contracting terms — {GLOSSARY.length} definitions
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {GLOSSARY.map((item) => (
          <div key={item.term} className="p-4 rounded-lg border bg-white">
            <h3 className="text-sm font-medium mb-1">{item.term}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
