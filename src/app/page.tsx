"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { checkSaveExists, loadGameSave } from "@/hooks/use-game-persistence";
import { useGameStore } from "@/lib/game/store";
import { AuthForm } from "@/components/auth/auth-form";
import { Button } from "@/components/ui/button";
import { useMartin } from "@/hooks/use-martin";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { EnvConfigError } from "@/components/env-config-error";
import {
  getGuestResumePath,
  hasGuestSave,
  loadGuestFromStorage,
  transferGuestSaveToSupabase,
} from "@/lib/guest-storage";
import { useGuestHydration } from "@/hooks/use-guest-hydration";

export default function LandingPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [hasSave, setHasSave] = useState(false);
  const [hasGuest, setHasGuest] = useState(false);
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);

  const loadSave = useGameStore((s) => s.loadSave);
  const resetGame = useGameStore((s) => s.resetGame);
  const setUserId = useGameStore((s) => s.setUserId);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const { askMartin } = useMartin();

  useGuestHydration();

  useEffect(() => {
    setHasGuest(hasGuestSave());
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user: u } }) => {
      if (u) {
        setUser({ id: u.id, email: u.email });
        setUserId(u.id);
        setGuestMode(false);
        const exists = await checkSaveExists(u.id);
        setHasSave(exists);
      }
      setChecking(false);
    });
  }, [setUserId, setGuestMode]);

  const handleContinue = async () => {
    if (!user) return;
    const save = await loadGameSave(user.id);
    if (save?.form) {
      loadSave(save);
      router.push(save.tutorialCompleted ? "/game" : "/tutorial");
      if (save.tutorialCompleted) {
        askMartin({
          trigger: "return",
          prompt: `Firm returning to Q${save.quarter}. ${save.form.companyName}, ${save.profile?.contractsWon ?? 0} contracts won, cash $${save.fin?.cash?.toLocaleString() ?? 0}. Brief them on their current position.`,
        });
      }
    }
  };

  const handleNewGame = () => {
    resetGame();
    setGuestMode(false);
    router.push("/intake");
  };

  const handlePlayAsGuest = () => {
    setGuestMode(true);
    const existing = loadGuestFromStorage();
    if (existing?.save?.form) {
      loadSave(existing.save);
      router.push(getGuestResumePath(existing.save));
      return;
    }
    resetGame();
    setGuestMode(true);
    router.push("/intake");
  };

  const handleAuthSuccess = async () => {
    const supabase = createClient();
    const {
      data: { user: u },
    } = await supabase.auth.getUser();
    if (!u) return;

    setUser({ id: u.id, email: u.email });
    setUserId(u.id);
    setGuestMode(false);

    const guest = loadGuestFromStorage();
    if (guest?.save?.form) {
      await transferGuestSaveToSupabase(u.id, guest.save);
      loadSave(guest.save);
      setHasSave(true);
      setHasGuest(false);
      setAuthMode(null);
      router.push(getGuestResumePath(guest.save));
      return;
    }

    const exists = await checkSaveExists(u.id);
    setHasSave(exists);
    setAuthMode(null);
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setHasSave(false);
    setUserId(null);
    setGuestMode(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isSupabaseConfigured()) {
    return <EnvConfigError />;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-medium text-primary">GovCon Academy</span>
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {authMode ? (
          <div className="flex flex-col items-center gap-4">
            <AuthForm mode={authMode} onSuccess={handleAuthSuccess} />
            <Button variant="ghost" onClick={() => setAuthMode(null)}>
              Back
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl">
            <h1 className="text-4xl font-medium mb-4 leading-tight">
              Learn federal contracting<br />by running your own firm
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              GovCon Academy is an educational simulator that teaches you how to start and run
              a federal government contracting business — from SAM.gov registration to winning
              contracts, with AI mentor Martin Business guiding your every decision.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { title: "SAM.gov Registration", desc: "UEI, CAGE code, NAICS, set-asides" },
                { title: "Realistic Bidding", desc: "Win probability, LPTA vs Best Value" },
                { title: "Contract Execution", desc: "Delivery strategy, CPARS, cash flow" },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded-lg border">
                  <h3 className="text-sm font-medium mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>

            {!user ? (
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => setAuthMode("signup")}>
                  Get Started
                </Button>
                <Button size="lg" variant="outline" onClick={() => setAuthMode("login")}>
                  Sign In
                </Button>
                <Button size="lg" variant="secondary" onClick={handlePlayAsGuest}>
                  {hasGuest ? "Continue as Guest" : "Play as Guest"}
                </Button>
                <Button size="lg" variant="ghost" onClick={() => router.push("/tools")}>
                  Professional Tools
                </Button>
              </div>
            ) : (
              <div className="flex gap-3">
                {hasSave && (
                  <Button size="lg" onClick={handleContinue}>
                    Continue Game
                  </Button>
                )}
                <Button
                  size="lg"
                  variant={hasSave ? "outline" : "default"}
                  onClick={handleNewGame}
                >
                  {hasSave ? "New Game" : "Start Game"}
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
