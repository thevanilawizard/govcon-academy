"use client";

import { useEffect, useState } from "react";
import { EDUCATIONAL_TERM_MAP } from "@/lib/game/far-library";
import { useGameStore } from "@/lib/game/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FarTermTipProps {
  termId: string;
  children?: React.ReactNode;
}

/** Shows a first-time educational pop-up and lets players pin terms to their Field Manual. */
export function FarTermTip({ termId, children }: FarTermTipProps) {
  const term = EDUCATIONAL_TERM_MAP[termId];
  const seenTerms = useGameStore((s) => s.companyOps?.seenTerms ?? []);
  const markTermSeen = useGameStore((s) => s.markTermSeen);
  const pinTerm = useGameStore((s) => s.pinTerm);
  const completeFarModule = useGameStore((s) => s.completeFarModule);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (term && !seenTerms.includes(termId)) {
      setOpen(true);
      markTermSeen(termId);
    }
  }, [termId, term, seenTerms, markTermSeen]);

  if (!term) return <>{children}</>;

  const handlePin = () => {
    pinTerm(termId);
    if (term.farClauseId) completeFarModule(term.farClauseId);
    setOpen(false);
  };

  return (
    <>
      {children ?? (
        <button
          type="button"
          className="underline decoration-dotted underline-offset-2 text-primary"
          onClick={() => setOpen(true)}
        >
          {term.term.split("(")[0].trim()}
        </button>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">{term.term}</DialogTitle>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-muted-foreground">{term.definition}</p>
          {term.farReference && (
            <p className="text-xs text-primary font-medium">{term.farReference}</p>
          )}
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
              Got it
            </Button>
            <Button size="sm" onClick={handlePin}>
              Pin to Field Manual
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
