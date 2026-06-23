"use client";

import type { TrainingModule } from "@/lib/education/training/types";
import { Button } from "@/components/ui/button";

export function ModuleCertificate({
  module,
  companyName,
  founderName,
  onBack,
}: {
  module: TrainingModule;
  companyName: string;
  founderName: string;
  onBack: () => void;
}) {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <button
        type="button"
        onClick={onBack}
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        ← Back to module
      </button>

      <div className="border-2 border-primary/30 rounded-xl p-8 bg-gradient-to-b from-white to-primary/5 text-center space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          GovCon Academy · Module Certificate
        </p>
        <h2 className="text-2xl font-medium text-primary">Certificate of Completion</h2>
        <p className="text-sm text-muted-foreground">This certifies that</p>
        <p className="text-xl font-medium">{founderName}</p>
        <p className="text-sm text-muted-foreground">{companyName}</p>
        <p className="text-sm leading-relaxed max-w-md mx-auto">
          has successfully completed all lessons and passed all quizzes in
        </p>
        <p className="text-lg font-medium">
          Module {module.number}: {module.title}
        </p>
        <p className="text-xs text-muted-foreground pt-4">Awarded {date}</p>
        <div className="pt-4 border-t text-left text-xs text-muted-foreground space-y-1 max-w-md mx-auto">
          <p className="font-medium text-foreground">Competencies demonstrated:</p>
          {module.careerOutcomes.map((o) => (
            <p key={o}>✓ {o}</p>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        This certificate reflects completion of GovCon Academy professional training content.
        Add it to your LinkedIn licenses & certifications or professional development file.
      </p>
    </div>
  );
}
