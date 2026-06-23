"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { SET_ASIDES } from "@/lib/game/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { GuestBanner } from "@/components/game/guest-banner";
import { NAICS_CODES } from "@/lib/game/constants";
import { useGuestHydration } from "@/hooks/use-guest-hydration";
import { useGamePersistence } from "@/hooks/use-game-persistence";
import { createClient } from "@/lib/supabase/client";
import { loadGuestFromStorage } from "@/lib/guest-storage";

const SETUP_STEPS = [
  "What is SAM.gov?",
  "Your Unique Entity Identifier (UEI)",
  "CAGE Code & NAICS Registration",
  "Activate Set-Aside Certifications",
];

export default function SetupPage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const isGuest = useGameStore((s) => s.isGuest);
  const completeSetup = useGameStore((s) => s.completeSetup);
  const setUserId = useGameStore((s) => s.setUserId);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const [step, setStep] = useState(0);

  useGuestHydration();
  useGamePersistence();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserId(user.id);
        setGuestMode(false);
        return;
      }
      const guestData = loadGuestFromStorage();
      if (!isGuest && !guestData?.save?.form) {
        router.push("/");
      }
    });
  }, [router, setUserId, setGuestMode, isGuest]);

  useEffect(() => {
    if (!form || !profile) {
      router.push("/intake");
    }
  }, [form, profile, router]);

  if (!form || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const playerNaics = NAICS_CODES.filter((n) => form.naicsCodes.includes(n.code));
  const playerSetAsides = SET_ASIDES.filter((s) => form.setAsides.includes(s.id));

  const handleComplete = () => {
    completeSetup();
    router.push("/tutorial");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <span className="text-lg font-medium text-primary">GovCon Academy</span>
          <span className="text-sm text-muted-foreground ml-3">SAM.gov Registration</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {isGuest && <GuestBanner />}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            Step {step + 1} of {SETUP_STEPS.length} — {SETUP_STEPS[step]}
          </p>
          <div className="flex gap-1">
            {SETUP_STEPS.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
        </div>

        {step === 0 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">SAM.gov — Your Gateway to Federal Contracts</h1>
            <Card>
              <CardContent className="p-6 space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>SAM.gov</strong> (System for Award Management) is the official U.S. government
                  portal for contractor registration and all federal contract opportunities.
                </p>
                <p>It controls:</p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Your firm&apos;s eligibility to receive federal contracts</li>
                  <li>Your UEI, CAGE code, and NAICS registrations</li>
                  <li>Your set-aside certifications and small business status</li>
                  <li>All contract opportunities posted by federal agencies</li>
                </ul>
                <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-900">
                  No SAM.gov registration = no federal contracts. Period.
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Your Unique Entity Identifier</h1>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  In 2022, SAM.gov replaced the DUNS number with the UEI — a free, 12-character
                  alphanumeric identifier required for all federal contractors.
                </p>
                <div className="p-6 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Your assigned UEI</p>
                  <p className="text-3xl font-medium tracking-widest text-primary">{profile.uei}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  This UEI is permanently tied to {form.companyName} in SAM.gov.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">CAGE Code & NAICS Registration</h1>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-4 rounded-lg border bg-gray-50">
                  <p className="text-xs text-muted-foreground mb-1">CAGE Code (Commercial and Government Entity)</p>
                  <p className="text-2xl font-medium tracking-widest">{profile.cageCode}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Required for defense contracts. Used to pull your past performance history.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Registered NAICS Codes</p>
                  {playerNaics.map((n) => (
                    <div key={n.code} className="p-3 rounded-lg border mb-2 text-sm">
                      <span className="font-medium">{n.code}</span> — {n.label}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Set-Aside Certifications Activated</h1>
            <p className="text-sm text-muted-foreground">
              The following certifications are now active in SAM.gov for {form.companyName}:
            </p>
            {playerSetAsides.map((sa) => (
              <Card key={sa.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SetAsideBadge setAside={sa.id} />
                    <span className="text-xs text-emerald-600">✓ Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{sa.description}</p>
                  <p className="text-xs text-primary font-medium">{sa.strategicValue}</p>
                </CardContent>
              </Card>
            ))}
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-sm text-emerald-900">
              Registration complete. {form.companyName} is now eligible to bid on federal contracts.
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={() => step > 0 ? setStep(step - 1) : router.push("/intake")}>
            {step === 0 ? "Back" : "Previous"}
          </Button>
          {step < SETUP_STEPS.length - 1 ? (
            <Button onClick={() => setStep(step + 1)}>Next</Button>
          ) : (
            <Button onClick={handleComplete}>Continue to Tutorial</Button>
          )}
        </div>
      </main>
    </div>
  );
}
