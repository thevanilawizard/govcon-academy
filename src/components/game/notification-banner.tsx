"use client";

import { X } from "lucide-react";
import { useGameStore } from "@/lib/game/store";

export function NotificationBanner() {
  const notifications = useGameStore((s) => s.notifications);
  const dismiss = useGameStore((s) => s.dismissNotification);

  if (notifications.length === 0) return null;

  const colors = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    error: "bg-red-50 border-red-200 text-red-900",
  };

  return (
    <div className="space-y-2 mb-6">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-start justify-between gap-3 px-4 py-3 rounded-lg border text-sm ${colors[n.type]}`}
        >
          <span>{n.message}</span>
          <button onClick={() => dismiss(n.id)} className="shrink-0 opacity-60 hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
