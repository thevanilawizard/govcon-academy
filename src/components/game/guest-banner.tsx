"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/auth/auth-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGameStore } from "@/lib/game/store";
import { transferGuestSaveToSupabase } from "@/lib/guest-storage";
import { createClient } from "@/lib/supabase/client";

export function GuestBanner() {
  const router = useRouter();
  const [signupOpen, setSignupOpen] = useState(false);
  const [transferring, setTransferring] = useState(false);
  const getSaveData = useGameStore((s) => s.getSaveData);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const setUserId = useGameStore((s) => s.setUserId);

  const handleSignupSuccess = async () => {
    setTransferring(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const save = getSaveData();
      await transferGuestSaveToSupabase(user.id, save);
      setGuestMode(false);
      setUserId(user.id);
      setSignupOpen(false);
      router.refresh();
    } finally {
      setTransferring(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-sm text-amber-950">
        <p>
          Playing as guest — create a free account to save your progress permanently
        </p>
        <Button
          size="sm"
          variant="outline"
          className="shrink-0 border-amber-300 bg-white hover:bg-amber-100"
          onClick={() => setSignupOpen(true)}
          disabled={transferring}
        >
          Sign Up
        </Button>
      </div>

      <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create your free account</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mb-2">
            Your current game progress will transfer to your new account automatically.
          </p>
          <AuthForm mode="signup" onSuccess={handleSignupSuccess} />
        </DialogContent>
      </Dialog>
    </>
  );
}
