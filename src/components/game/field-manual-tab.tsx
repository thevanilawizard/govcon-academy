"use client";

import { useState } from "react";
import {
  EDUCATIONAL_TERMS,
  FAR_CLAUSES,
  searchFarClauses,
} from "@/lib/game/far-library";
import { useGameStore } from "@/lib/game/store";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FieldManualTab() {
  const [query, setQuery] = useState("");
  const companyOps = useGameStore((s) => s.companyOps);
  const pinTerm = useGameStore((s) => s.pinTerm);
  const completeFarModule = useGameStore((s) => s.completeFarModule);

  const pinnedTerms = EDUCATIONAL_TERMS.filter((t) =>
    companyOps?.pinnedTerms.includes(t.id)
  );
  const filteredClauses = searchFarClauses(query);

  const handleStudyClause = (clauseId: string) => {
    completeFarModule(clauseId);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-medium mb-1">Field Manual</h2>
        <p className="text-sm text-muted-foreground">
          Your personal reference built from FAR pop-ups and the clause library. Studying clauses before audits reduces penalties.
        </p>
      </div>

      {companyOps && (
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline">Compliance: {companyOps.complianceScore}/100</Badge>
          <Badge variant="outline">
            FAR modules studied: {companyOps.completedFarModules.length}/{FAR_CLAUSES.length}
          </Badge>
          <Badge variant="outline">Pinned terms: {companyOps.pinnedTerms.length}</Badge>
        </div>
      )}

      {pinnedTerms.length > 0 && (
        <section>
          <h3 className="text-sm font-medium mb-3">Pinned Terms</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {pinnedTerms.map((term) => (
              <Card key={term.id}>
                <CardContent className="p-4">
                  <p className="text-sm font-medium mb-1">{term.term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{term.definition}</p>
                  {term.farReference && (
                    <p className="text-xs text-primary mt-2">{term.farReference}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="text-sm font-medium mb-3">FAR Clause Library</h3>
        <Input
          placeholder="Search clauses (e.g. 52.219-9, pricing, SAM)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 max-w-md"
        />
        <div className="space-y-3">
          {filteredClauses.map((clause) => {
            const studied = companyOps?.completedFarModules.includes(clause.id);
            return (
              <Card key={clause.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm font-medium">
                      {clause.citation} — {clause.title}
                    </CardTitle>
                    {studied && (
                      <Badge className="bg-emerald-100 text-emerald-800 shrink-0">Studied</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{clause.summary}</p>
                  <p><span className="font-medium">Bid impact:</span> {clause.bidImpact}</p>
                  <p className="text-red-800 text-xs">
                    <span className="font-medium">If violated:</span> {clause.violationConsequence}
                  </p>
                  {!studied && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStudyClause(clause.id)}
                    >
                      Mark as Studied
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium mb-3">All Educational Terms</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {EDUCATIONAL_TERMS.map((term) => (
            <Card key={term.id}>
              <CardContent className="p-4 flex justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{term.term}</p>
                  <p className="text-xs text-muted-foreground mt-1">{term.definition}</p>
                </div>
                {!companyOps?.pinnedTerms.includes(term.id) && (
                  <Button size="sm" variant="ghost" onClick={() => pinTerm(term.id)}>
                    Pin
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
