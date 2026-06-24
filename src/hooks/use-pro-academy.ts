"use client";

import { useCallback, useEffect, useState } from "react";
import type { ProAcademyProgress } from "@/lib/pro-academy/types";
import {
  loadProAcademyProgress,
  saveProAcademyProgress,
  updateProAcademyProgress,
} from "@/lib/pro-academy/progress";

export function useProAcademy() {
  const [progress, setProgress] = useState<ProAcademyProgress>(() => loadProAcademyProgress());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProAcademyProgress());
    setHydrated(true);
  }, []);

  const refresh = useCallback(() => {
    setProgress(loadProAcademyProgress());
  }, []);

  const update = useCallback((updater: (p: ProAcademyProgress) => ProAcademyProgress) => {
    const next = updateProAcademyProgress(updater);
    setProgress(next);
    return next;
  }, []);

  const save = useCallback((next: ProAcademyProgress) => {
    saveProAcademyProgress(next);
    setProgress(next);
  }, []);

  return { progress, hydrated, refresh, update, save };
}
