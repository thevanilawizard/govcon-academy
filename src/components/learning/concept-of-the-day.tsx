"use client";

import { CONCEPTS_OF_THE_DAY } from "@/lib/learning/concepts-365";
import { getConceptOfDayIndex } from "@/lib/learning/daily-drill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ConceptOfTheDay({ onLearnMore }: { onLearnMore?: (lessonId: string | null) => void }) {
  const concept = CONCEPTS_OF_THE_DAY[getConceptOfDayIndex()];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-medium">Concept of the Day</CardTitle>
          <Badge variant="outline">{concept.farClause}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm font-medium">{concept.name}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{concept.explanation}</p>
        <p className="text-xs italic text-muted-foreground border-l-2 pl-3">{concept.example}</p>
        <Badge variant="secondary" className="text-xs">
          {concept.category}
        </Badge>
        {concept.lessonId && onLearnMore && (
          <Button size="sm" variant="outline" onClick={() => onLearnMore(concept.lessonId)}>
            Learn more
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
