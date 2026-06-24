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
import { ChoiceEventModal } from "@/components/game/choice-event-modal";
import { ComplianceAuditModal } from "@/components/game/compliance-audit-modal";
import { ProposalResultWatcher } from "@/components/game/proposal-result-watcher";
import { GameOverModal } from "@/components/game/game-over-modal";
import { GuidedMartinPanel } from "@/components/education/guided-martin-panel";
import { ToolsTab } from "@/components/game/tools-tab";
import { MyLearningTab } from "@/components/game/my-learning-tab";
import { ProfileSettingsPanel } from "@/components/learning/profile-settings-panel";
import { XpHeaderBar } from "@/components/learning/xp-header-bar";
import { ResetGameButton } from "@/components/game/reset-game-button";
import { Button } from "@/components/ui/button";
import { GameEducationBridgeWatcher } from "@/components/learning/game-education-bridge-watcher";
import { cn } from "@/lib/utils";

export default function GamePage() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const isGuest = useGameStore((s) => s.isGuest);
  const tutorialCompleted = useGameStore((s) => s.tutorialCompleted);
  const learningProgress = useGameStore((s) => s.learningProgress);
  const activeTab = useGameStore((s) => s.activeTab);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const setUserId = useGameStore((s) => s.setUserId);
  const setGuestMode = useGameStore((s) => s.setGuestMode);
  const guidedMode = useGameStore((s) => s.guidedMode);
  const setGuidedMode = useGameStore((s) => s.setGuidedMode);
  const setLearningNavMode = useGameStore((s) => s.setLearningNavMode);
  const quarter = useGameStore((s) => s.quarter);

  const navMode = learningProgress.navMode;
  const isLearnMode = navMode === "learn";

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
    if (isLoaded && form && !learningProgress.learningPath) {
      router.push("/learning-path");
      return;
    }
    if (isLoaded && form && !tutorialCompleted && learningProgress.learningPath !== "simulator") {
      router.push("/tutorial");
    }
  }, [isLoaded, form, tutorialCompleted, learningProgress.learningPath, router]);

  useEffect(() => {
    if (!isLoaded) return;
    const learnDefault = "my-learning";
    const playDefault = "dashboard";
    const defaultTab = isLearnMode ? learnDefault : playDefault;
    const learnTabs = ["my-learning", "todays-lesson", "practice", "tools", "profile"];
    const playTabs = ["dashboard", "opportunities", "proposals", "contracts", "learn", "tools"];
    const valid = isLearnMode ? learnTabs : playTabs;
    if (!valid.includes(activeTab)) {
      setActiveTab(defaultTab);
    }
  }, [isLoaded, isLearnMode, activeTab, setActiveTab]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);

  const toggleNavMode = () => {
    const next = isLearnMode ? "play" : "learn";
    setLearningNavMode(next);
  };

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-lg font-medium text-primary">GovCon Academy</span>
            <span className="text-sm text-muted-foreground ml-2 sm:ml-3 truncate">{form.companyName}</span>
          </div>
          <XpHeaderBar compact />
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <div className="flex rounded-lg border p-0.5 text-xs">
              <button
                type="button"
                onClick={() => !isLearnMode && toggleNavMode()}
                className={cn(
                  "px-3 py-1 rounded-md transition-colors",
                  isLearnMode ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )}
              >
                Learn Mode
              </button>
              <button
                type="button"
                onClick={() => isLearnMode && toggleNavMode()}
                className={cn(
                  "px-3 py-1 rounded-md transition-colors",
                  !isLearnMode ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )}
              >
                Play Mode
              </button>
            </div>
            <ResetGameButton quarter={quarter} />
            <Button
              size="sm"
              variant={guidedMode ? "default" : "outline"}
              onClick={() => setGuidedMode(!guidedMode)}
            >
              Guided {guidedMode ? "ON" : "OFF"}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
              Exit
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {isGuest && <GuestBanner />}
        <NotificationBanner />
        <GameEducationBridgeWatcher />
        <ProposalResultWatcher />
        <ChoiceEventModal />
        <ComplianceAuditModal />
        <GameOverModal />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="sticky top-[7.5rem] sm:top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-1 pb-3 mb-4 bg-white border-b">
            <TabsList className="flex flex-wrap h-auto gap-1 w-full">
              {isLearnMode ? (
                <>
                  <TabsTrigger value="my-learning">My Learning</TabsTrigger>
                  <TabsTrigger value="todays-lesson">Today&apos;s Lesson</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                  <TabsTrigger value="proposals">Bid Factory</TabsTrigger>
                  <TabsTrigger value="contracts">Contracts</TabsTrigger>
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </>
              )}
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0 w-full order-2 lg:order-1">
              {isLearnMode ? (
                <>
                  <TabsContent value="my-learning">
                    <MyLearningTab subTab="dashboard" />
                  </TabsContent>
                  <TabsContent value="todays-lesson">
                    <MyLearningTab subTab="todays-lesson" />
                  </TabsContent>
                  <TabsContent value="practice">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Practice in the simulator — switch to Play Mode for full access, or use quick links below.
                      </p>
                      <DashboardTab />
                    </div>
                  </TabsContent>
                  <TabsContent value="tools">
                    <ToolsTab />
                  </TabsContent>
                  <TabsContent value="profile">
                    <ProfileSettingsPanel />
                  </TabsContent>
                </>
              ) : (
                <>
                  <TabsContent value="dashboard"><DashboardTab /></TabsContent>
                  <TabsContent value="opportunities"><OpportunitiesTab /></TabsContent>
                  <TabsContent value="proposals"><ProposalsTab /></TabsContent>
                  <TabsContent value="contracts"><ContractsTab /></TabsContent>
                  <TabsContent value="learn">
                    <MyLearningTab subTab="dashboard" />
                  </TabsContent>
                  <TabsContent value="tools">
                    <ToolsTab />
                  </TabsContent>
                </>
              )}
            </div>
            {!isLearnMode && <GuidedMartinPanel />}
          </div>
        </Tabs>
      </main>
    </div>
  );
}
