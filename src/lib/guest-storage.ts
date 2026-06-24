import type { GameSave } from "@/lib/game/types";

const STORAGE_KEY = "govcon-academy-guest";

interface GuestStoragePayload {
  isGuest: boolean;
  save: GameSave;
}

export function saveGuestToStorage(save: GameSave): void {
  if (typeof window === "undefined") return;
  const payload: GuestStoragePayload = { isGuest: true, save };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function loadGuestFromStorage(): GuestStoragePayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GuestStoragePayload;
    if (!parsed.isGuest || !parsed.save) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasGuestSave(): boolean {
  const data = loadGuestFromStorage();
  return !!data?.save?.form;
}

export function clearGuestStorage(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export async function transferGuestSaveToSupabase(
  userId: string,
  save: GameSave
): Promise<void> {
  const { createClient } = await import("@/lib/supabase/client");
  const supabase = createClient();
  await supabase.from("game_saves").upsert(
    {
      user_id: userId,
      form: save.form,
      profile: save.profile,
      fin: save.fin,
      quarter: save.quarter,
      opps: save.opps,
      submitted: save.submitted,
      contracts: save.contracts,
      company_ops: save.companyOps,
      bid_draft: save.bidDraft,
      education_progress: save.educationProgress,
      tutorial_completed: save.tutorialCompleted ?? false,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  clearGuestStorage();
}

export function getGuestResumePath(save: GameSave): string {
  if (!save.form) return "/intake";
  if (!save.learningProgress?.learningPath) return "/learning-path";
  if (!save.tutorialCompleted && save.learningProgress.learningPath !== "simulator") return "/tutorial";
  return "/game";
}
