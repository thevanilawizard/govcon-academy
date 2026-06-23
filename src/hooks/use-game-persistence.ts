"use client";

import { useEffect, useRef } from "react";
import { useGameStore } from "@/lib/game/store";
import { createClient } from "@/lib/supabase/client";
import { saveGuestToStorage } from "@/lib/guest-storage";
import type { GameSave } from "@/lib/game/types";

export function useGamePersistence() {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const isGuest = useGameStore((s) => s.isGuest);
  const tutorialCompleted = useGameStore((s) => s.tutorialCompleted);
  const stateRef = useRef({
    isLoaded: false,
    userId: null as string | null,
    isGuest: false,
    form: null as GameSave["form"],
    saveData: null as GameSave | null,
  });

  const isLoaded = useGameStore((s) => s.isLoaded);
  const userId = useGameStore((s) => s.userId);
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const quarter = useGameStore((s) => s.quarter);
  const opps = useGameStore((s) => s.opps);
  const submitted = useGameStore((s) => s.submitted);
  const contracts = useGameStore((s) => s.contracts);
  const companyOps = useGameStore((s) => s.companyOps);
  const bidDraft = useGameStore((s) => s.bidDraft);
  const educationProgress = useGameStore((s) => s.educationProgress);

  useEffect(() => {
    stateRef.current = {
      isLoaded,
      userId,
      isGuest,
      form,
      saveData: {
        form,
        profile,
        fin,
        quarter,
        opps,
        submitted,
        contracts,
        companyOps,
        bidDraft,
        educationProgress,
        tutorialCompleted,
      },
    };
  }, [
    isLoaded,
    userId,
    isGuest,
    form,
    profile,
    fin,
    quarter,
    opps,
    submitted,
    contracts,
    companyOps,
    bidDraft,
    educationProgress,
    tutorialCompleted,
  ]);

  useEffect(() => {
    if (!isLoaded || !form) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const { saveData, userId: uid, isGuest: guest } = stateRef.current;
      if (!saveData) return;

      if (guest) {
        saveGuestToStorage(saveData);
        return;
      }

      if (!uid) return;

      const supabase = createClient();
      await supabase.from("game_saves").upsert(
        {
          user_id: uid,
          form: saveData.form,
          profile: saveData.profile,
          fin: saveData.fin,
          quarter: saveData.quarter,
          opps: saveData.opps,
          submitted: saveData.submitted,
          contracts: saveData.contracts,
          company_ops: saveData.companyOps,
          bid_draft: saveData.bidDraft,
          education_progress: saveData.educationProgress,
          tutorial_completed: saveData.tutorialCompleted ?? false,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    }, 1000);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [
    isLoaded,
    userId,
    isGuest,
    form,
    profile,
    fin,
    quarter,
    opps,
    submitted,
    contracts,
    companyOps,
    bidDraft,
    educationProgress,
    tutorialCompleted,
  ]);
}

export async function loadGameSave(userId: string): Promise<GameSave | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("game_saves")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;
  const save = data as GameSave & {
    tutorial_completed?: boolean;
    company_ops?: GameSave["companyOps"];
    bid_draft?: GameSave["bidDraft"];
    education_progress?: GameSave["educationProgress"];
  };
  return {
    ...save,
    companyOps: save.companyOps ?? save.company_ops ?? null,
    bidDraft: save.bidDraft ?? save.bid_draft ?? null,
    educationProgress: save.educationProgress ?? save.education_progress ?? null,
    tutorialCompleted: save.tutorialCompleted ?? save.tutorial_completed ?? true,
  };
}

export async function deleteGameSave(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.from("game_saves").delete().eq("user_id", userId);
}

export async function checkSaveExists(userId: string): Promise<boolean> {
  const supabase = createClient();
  const { data } = await supabase
    .from("game_saves")
    .select("id")
    .eq("user_id", userId)
    .single();
  return !!data;
}
