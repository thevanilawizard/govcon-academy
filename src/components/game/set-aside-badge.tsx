import { SET_ASIDE_MAP, FULL_OPEN } from "@/lib/game/constants";
import type { SetAsideId } from "@/lib/game/types";

export function SetAsideBadge({ setAside }: { setAside: SetAsideId }) {
  const info = SET_ASIDE_MAP[setAside] || FULL_OPEN;
  return (
    <span
      className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium"
      style={{ backgroundColor: info.bg, color: info.text }}
    >
      {info.label}
    </span>
  );
}
