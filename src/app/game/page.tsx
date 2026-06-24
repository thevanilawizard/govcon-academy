"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { useGamePersistence } from "@/hooks/use-game-persistence";
import { useGuestHydration } from "@/hooks/use-guest-hydration";
import { createClient } from "@/lib/supabase/client";
import { loadGuestFromStorage } from "@/lib/guest-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotificationBanner } from "@/components/game/notification-banner";
import { GuestBanner } from "@/components/game/guest-banner";
import { DashboardTab } from "@/components/game/dashboard-tab";
import { OpportunitiesTab } from "@/components/game/opportunities-tab";
import { ProposalsTab } from "@/components/game/proposals-tab";
import { ContractsTab } from "@/components/game/contracts-tab";
import { MartinTab } from "@/components/game/martin-tab";
import { GlossaryTab } from "@/components/game/glossary-tab";
import { ChoiceEventModal } from "@/components/game/choice-event-modal";
import { ComplianceAuditModal } from "@/components/game/compliance-audit-modal";
import { FieldManualTab } from "@/components/game/field-manual-tab";
import { ProposalResultWatcher } from "@/components/game/proposal-result-watcher";
import { GameOverModal } from "@/components/game/game-over-modal";
import { GuidedMartinPanel } from "@/components/education/guided-martin-panel";
import { TrainingAcademyTab } from "@/components/education/training/training-academy-tab";
import { ToolsTab } from "@/components/game/tools-tab";
import { JobReadinessTab } from "@/components/game/job-readiness-tab";
import { ProAcademyTab } from "@/components/game/pro-academy-tab";
import { ResetGameButton } from "@/components/game/reset-game-button";
import { Button } from "@/components/ui/button";

export default function GamePage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const isGuest = useGameStore((s) => s.isGuest);
  const tutorialCompleted = useGameStore((s) => s.tutorialCompleted);
  const activeTab = useGameStore((s) => s.activeTab);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const setUserId = useGameStore((s) => s.setUserId);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const guidedMode = useGameStore((s) => s.guidedMode);
  const setGuidedMode = useGameStore((s) => s.setGuidedMode);
  const quarter = useGameStore((s) => s.quarter);

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
      const guestActive = isGuest || !!guestData?.save?.form;
      if (!guestActive) {
        router.push("/");
      }
    });
  }, [router, setUserId, setGuestMode, isGuest]);

  useEffect(() => {
    if (isLoaded && !form) {
      router.push("/intake");
      return;
    }
    if (isLoaded && form && !tutorialCompleted) {
      router.push("/tutorial");
    }
  }, [isLoaded, form, tutorialCompleted, router]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);

  if (!form) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading game...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-medium text-primary">GovCon Academy</span>
            <span className="text-sm text-muted-foreground ml-3">{form.companyName}</span>
          </div>
          <div className="flex items-center gap-4">
            <ResetGameButton quarter={quarter} />
            <Button
              size="sm"
              variant={guidedMode ? "default" : "outline"}
              onClick={() => setGuidedMode(!guidedMode)}
            >
              Guided Mode {guidedMode ? "ON" : "OFF"}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
              Exit
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6">
        {isGuest && <GuestBanner />}
        <NotificationBanner />
        <ProposalResultWatcher />
        <ChoiceEventModal />
        <ComplianceAuditModal />
        <GameOverModal />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="sticky top-16 z-30 -mx-6 px-6 pt-1 pb-3 mb-4 bg-white border-b">
            <TabsList className="flex flex-wrap h-auto gap-1 w-full">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="proposals">Bid Factory</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="academy">Education Center</TabsTrigger>
              <TabsTrigger value="job-readiness">Job Readiness</TabsTrigger>
              <TabsTrigger value="pro-academy">Pro Academy</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="field-manual">Field Manual</TabsTrigger>
              <TabsTrigger value="martin">Martin</TabsTrigger>
              <TabsTrigger value="glossary">Glossary</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0 w-full order-2 lg:order-1">
              <TabsContent value="dashboard"><DashboardTab /></TabsContent>
              <TabsContent value="opportunities"><OpportunitiesTab /></TabsContent>
              <TabsContent value="proposals"><ProposalsTab /></TabsContent>
              <TabsContent value="contracts"><ContractsTab /></TabsContent>
              <TabsContent value="academy"><TrainingAcademyTab /></TabsContent>
              <TabsContent value="job-readiness"><JobReadinessTab /></TabsContent>
              <TabsContent value="pro-academy"><ProAcademyTab /></TabsContent>
              <TabsContent value="tools"><ToolsTab /></TabsContent>
              <TabsContent value="field-manual"><FieldManualTab /></TabsContent>
              <TabsContent value="martin"><MartinTab /></TabsContent>
              <TabsContent value="glossary"><GlossaryTab /></TabsContent>
            </div>
            <GuidedMartinPanel />
          </div>
        </Tabs>
      </main>
    </div>
  );
}
