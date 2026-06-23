"use client";

import { useRef } from "react";
import { PROGRAM_TITLE, TRAINING_MODULES } from "@/lib/education/training";
import { Button } from "@/components/ui/button";

export function ProgramCertificate({
  companyName,
  founderName,
  examScore,
  onBack,
}: {
  companyName: string;
  founderName: string;
  examScore: number | null;
  onBack: () => void;
}) {
  const printRef = useRef<HTMLDivElement>(null);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground print:hidden">
        ← Back to Education Center
      </button>

      <div
        ref={printRef}
        id="program-certificate"
        className="border-2 border-emerald-600/40 rounded-xl p-10 bg-gradient-to-b from-white to-emerald-50 text-center space-y-4 print:border-2 print:p-12"
      >
        <p className="text-xs uppercase tracking-widest text-emerald-800">GovCon Academy · Professional Program</p>
        <h2 className="text-3xl font-medium text-emerald-900">{PROGRAM_TITLE}</h2>
        <p className="text-sm text-muted-foreground">Awarded to</p>
        <p className="text-2xl font-medium">{founderName}</p>
        <p className="text-sm">{companyName}</p>
        <p className="text-sm leading-relaxed max-w-lg mx-auto pt-2">
          For successful completion of all eight modules, professional lesson assessments, and the
          150-question comprehensive final exam
          {examScore !== null ? ` (score: ${examScore}%)` : ""} — preparing the recipient for Contracts
          Manager and Acquisition Specialist roles at federal contractors.
        </p>
        <p className="text-xs text-muted-foreground pt-4">{date}</p>
        <div className="pt-6 border-t text-left text-xs space-y-1 max-w-md mx-auto">
          {TRAINING_MODULES.map((m) => (
            <p key={m.id} className="text-muted-foreground">
              ✓ Module {m.number}: {m.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-2 print:hidden">
        <Button onClick={handleDownload}>Download PDF (Print)</Button>
        <p className="text-xs text-muted-foreground self-center">
          Use your browser&apos;s Print dialog and choose &quot;Save as PDF&quot;.
        </p>
      </div>
    </div>
  );
}
