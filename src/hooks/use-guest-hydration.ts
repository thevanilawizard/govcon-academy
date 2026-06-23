"use client";

import { useEffect } from "react";
import { useGameStore } from "@/lib/game/store";
import { loadGuestFromStorage } from "@/lib/guest-storage";

/** Hydrate guest save from localStorage after a full page reload. */
export function useGuestHydration() {
  const isGuest = useGameStore((s) => s.isGuest);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const loadSave = useGameStore((s) => s.loadSave);
  const setGuestMode = useGameStore((s) => s.setGuestMode);

  useEffect(() => {
    if (isLoaded) return;

    const guest = loadGuestFromStorage();
    if (guest?.save?.form) {
      setGuestMode(true);
      loadSave(guest.save);
    }
  }, [isLoaded, loadSave, setGuestMode]);
}
