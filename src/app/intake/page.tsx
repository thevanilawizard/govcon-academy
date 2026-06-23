"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import {
  BACKGROUNDS,
  CAPITAL_TIERS,
  CLEARANCE_OPTIONS,
  NAICS_CODES,
  SET_ASIDES,
} from "@/lib/game/constants";
import type { Background, CapitalTier, ClearanceLevel, IntakeForm, SetAsideId } from "@/lib/game/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { SetAsideBadge } from "@/components/game/set-aside-badge";
import { GuestBanner } from "@/components/game/guest-banner";
import { createClient } from "@/lib/supabase/client";
import { useGuestHydration } from "@/hooks/use-guest-hydration";
import { useGamePersistence } from "@/hooks/use-game-persistence";

const STEPS = [
  "Founder & Company",
  "Startup Capital",
  "Background",
  "Set-Aside Certifications",
  "NAICS Codes",
  "Review & Confirm",
];

export default function IntakePage() {
  const router = useRouter();
  const initFromIntake = useGameStore((s) => s.initFromIntake);
  const setUserId = useGameStore((s) => s.setUserId);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const isGuest = useGameStore((s) => s.isGuest);

  useGuestHydration();
  useGamePersistence();

  const [step, setStep] = useState(0);
  const [founderName, setFounderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [capital, setCapital] = useState<CapitalTier>(75000);
  const [background, setBackground] = useState<Background>("new");
  const [setAsides, setSetAsides] = useState<SetAsideId[]>(["sb"]);
  const [naicsCodes, setNaicsCodes] = useState<string[]>([]);
  const [clearanceLevel, setClearanceLevel] = useState<ClearanceLevel>("none");

  const toggleSetAside = (id: SetAsideId) => {
    setSetAsides((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleNaics = (code: string) => {
    setNaicsCodes((prev) => {
      if (prev.includes(code)) return prev.filter((c) => c !== code);
      if (prev.length >= 3) return prev;
      return [...prev, code];
    });
  };

  const canProceed = () => {
    switch (step) {
      case 0: return founderName.trim() && companyName.trim();
      case 1: return !!capital;
      case 2: return !!background;
      case 3: return setAsides.length > 0;
      case 4: return naicsCodes.length > 0;
      case 5: return true;
      default: return false;
    }
  };

  const handleComplete = async () => {
    const form: IntakeForm = {
      founderName: founderName.trim(),
      companyName: companyName.trim(),
      capital,
      background,
      setAsides,
      naicsCodes,
      clearanceLevel,
    };

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUserId(user.id);
      setGuestMode(false);
    } else {
      setGuestMode(true);
    }

    initFromIntake(form);
    router.push("/setup");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <span className="text-lg font-medium text-primary">GovCon Academy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {isGuest && <GuestBanner />}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            Step {step + 1} of {STEPS.length} — {STEPS[step]}
          </p>
          <div className="flex gap-1">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>

        {step === 0 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Who&apos;s starting this firm?</h1>
            <div className="space-y-2">
              <Label htmlFor="founder">Founder Name</Label>
              <Input id="founder" value={founderName} onChange={(e) => setFounderName(e.target.value)} placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Your GovCon firm" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Startup Capital</h1>
            <p className="text-sm text-muted-foreground">How much cash does your firm start with? This determines your runway.</p>
            <div className="grid gap-3">
              {CAPITAL_TIERS.map((tier) => (
                <button
                  key={tier.value}
                  onClick={() => setCapital(tier.value)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    capital === tier.value ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg font-medium">{tier.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Your Background</h1>
            <div className="grid gap-3">
              {BACKGROUNDS.map((bg) => (
                <button
                  key={bg.value}
                  onClick={() => setBackground(bg.value)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    background === bg.value ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="font-medium">{bg.label}</span>
                  <p className="text-sm text-muted-foreground mt-1">{bg.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Set-Aside Certifications</h1>
            <p className="text-sm text-muted-foreground">Select all certifications your firm qualifies for.</p>
            <div className="space-y-3">
              {SET_ASIDES.map((sa) => (
                <Card
                  key={sa.id}
                  className={`cursor-pointer transition-colors ${
                    setAsides.includes(sa.id) ? "border-primary" : ""
                  }`}
                  onClick={() => toggleSetAside(sa.id)}
                >
                  <CardContent className="p-4 flex gap-3">
                    <Checkbox checked={setAsides.includes(sa.id)} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <SetAsideBadge setAside={sa.id} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{sa.description}</p>
                      <p className="text-xs text-primary">{sa.strategicValue}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">NAICS Codes</h1>
            <p className="text-sm text-muted-foreground">
              Select up to 3 NAICS codes that define your business ({naicsCodes.length}/3 selected)
            </p>
            <div className="grid gap-2">
              {NAICS_CODES.map((n) => (
                <button
                  key={n.code}
                  onClick={() => toggleNaics(n.code)}
                  disabled={!naicsCodes.includes(n.code) && naicsCodes.length >= 3}
                  className={`p-3 rounded-lg border text-left text-sm transition-colors ${
                    naicsCodes.includes(n.code) ? "border-primary bg-primary/5" : "hover:bg-gray-50 disabled:opacity-40"
                  }`}
                >
                  <span className="font-medium">{n.code}</span> — {n.label}
                  <span className="text-muted-foreground ml-2">(avg ${(n.avgValue / 1000).toFixed(0)}K)</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">Review Your Profile</h1>
            <div className="space-y-4 mb-6">
              <h2 className="text-sm font-medium">Security Clearance Level</h2>
              <p className="text-sm text-muted-foreground">
                Defense contracts often require cleared personnel. Select your highest active clearance.
              </p>
              <div className="grid gap-3">
                {CLEARANCE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setClearanceLevel(option.value)}
                    className={`p-4 rounded-lg border text-left transition-colors ${
                      clearanceLevel === option.value ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                    <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div><span className="text-muted-foreground">Founder</span><p className="font-medium">{founderName}</p></div>
                  <div><span className="text-muted-foreground">Company</span><p className="font-medium">{companyName}</p></div>
                  <div><span className="text-muted-foreground">Capital</span><p className="font-medium">${capital.toLocaleString()}</p></div>
                  <div><span className="text-muted-foreground">Background</span><p className="font-medium capitalize">{background.replace("_", " ")}</p></div>
                </div>
                <div>
                  <span className="text-muted-foreground">Set-Asides</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {setAsides.map((s) => <SetAsideBadge key={s} setAside={s} />)}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">NAICS Codes</span>
                  <p className="font-medium">{naicsCodes.join(", ")}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Security Clearance</span>
                  <p className="font-medium capitalize">
                    {CLEARANCE_OPTIONS.find((c) => c.value === clearanceLevel)?.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={() => step > 0 ? setStep(step - 1) : router.push("/")} disabled={step === 0 && false}>
            {step === 0 ? "Back to Home" : "Previous"}
          </Button>
          {step < STEPS.length - 1 ? (
            <Button onClick={() => setStep(step + 1)} disabled={!canProceed()}>Next</Button>
          ) : (
            <Button onClick={handleComplete}>Confirm & Continue to SAM.gov Setup</Button>
          )}
        </div>
      </main>
    </div>
  );
}
