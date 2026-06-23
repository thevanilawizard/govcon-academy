"use client";

import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function GameOverModal() {
  const router = useRouter();
  const gameOver = useGameStore((s) => s.gameOver);
  const form = useGameStore((s) => s.form);
  const resetGame = useGameStore((s) => s.resetGame);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const clearGameOver = useGameStore((s) => s.clearGameOver);

  if (!gameOver) return null;

  const handleNewGame = () => {
    resetGame();
    setGuestMode(false);
    clearGameOver();
    router.push("/intake");
  };

  const handleExit = () => {
    clearGameOver();
    router.push("/");
  };

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-lg" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-lg">{gameOver.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          {form && (
            <p className="text-muted-foreground">
              {form.companyName} — simulation ended
            </p>
          )}
          <p className="leading-relaxed">{gameOver.message}</p>
          <div className="p-4 rounded-lg border bg-amber-50 text-amber-950">
            <p className="text-xs font-medium mb-1">What this means in real life</p>
            <p className="text-xs leading-relaxed">{gameOver.teachable}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button onClick={handleNewGame}>Start New Game</Button>
          <Button variant="outline" onClick={handleExit}>
            Return to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
