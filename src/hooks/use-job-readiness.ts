"use client";

import { useCallback, useEffect, useState } from "react";
import type { JobReadinessProgress } from "@/lib/job-readiness/types";
import {
  loadJobReadinessProgress,
  saveJobReadinessProgress,
  updateJobReadiness,
} from "@/lib/job-readiness/progress";

export function useJobReadiness() {
  const [progress, setProgress] = useState<JobReadinessProgress>(() =>
    typeof window === "undefined" ? loadJobReadinessProgress() : loadJobReadinessProgress()
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadJobReadinessProgress());
    setHydrated(true);
  }, []);

  const refresh = useCallback(() => {
    setProgress(loadJobReadinessProgress());
  }, []);

  const update = useCallback(
    (updater: (p: JobReadinessProgress) => JobReadinessProgress) => {
      const next = updateJobReadiness(updater);
      setProgress(next);
      return next;
    },
    []
  );

  const save = useCallback((next: JobReadinessProgress) => {
    saveJobReadinessProgress(next);
    setProgress(next);
  }, []);

  return { progress, hydrated, refresh, update, save };
}
