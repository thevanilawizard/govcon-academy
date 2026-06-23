"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { deleteGameSave } from "@/hooks/use-game-persistence";
import { clearGuestStorage } from "@/lib/guest-storage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ResetGameButton({ quarter }: { quarter: number }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [resetting, setResetting] = useState(false);
  const startOverFresh = useGameStore((s) => s.startOverFresh);
  const isGuest = useGameStore((s) => s.isGuest);
  const userId = useGameStore((s) => s.userId);

  const handleConfirm = async () => {
    setResetting(true);
    try {
      if (isGuest) {
        clearGuestStorage();
      } else if (userId) {
        await deleteGameSave(userId);
      }
      startOverFresh();
      setOpen(false);
      router.push("/intake");
    } finally {
      setResetting(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Q{quarter} 2025</span>
        <span aria-hidden="true">·</span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-xs text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
        >
          Reset
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">Start over?</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed pt-1">
              Are you sure? This will delete all your progress and start a new game.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(false)} disabled={resetting}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleConfirm} disabled={resetting}>
              {resetting ? "Resetting..." : "Yes, start over"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
