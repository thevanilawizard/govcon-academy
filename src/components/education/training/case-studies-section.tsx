import type { CaseStudy } from "@/lib/education/training/types";

export function CaseStudiesSection({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Case studies</p>
      {studies.map((cs) => (
        <article key={cs.title} className="p-4 rounded-lg border space-y-2 text-sm">
          <h4 className="font-medium">{cs.title}</h4>
          <p>
            <span className="text-muted-foreground">Situation: </span>
            {cs.situation}
          </p>
          <p>
            <span className="text-muted-foreground">Decision: </span>
            {cs.decision}
          </p>
          <p>
            <span className="text-muted-foreground">Outcome: </span>
            {cs.outcome}
          </p>
          <p className="p-2 rounded bg-amber-50 border border-amber-100 text-amber-950 text-xs leading-relaxed">
            <span className="font-medium">Lesson: </span>
            {cs.lessonLearned}
          </p>
        </article>
      ))}
    </div>
  );
}
