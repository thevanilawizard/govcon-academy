"use client";

import { useState } from "react";
import { useGameStore } from "@/lib/game/store";
import { callToolAi } from "@/lib/tools/api-client";
import { getToolData, updateToolData } from "@/lib/tools/storage";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { SET_ASIDE_MAP } from "@/lib/game/constants";

export function SourcesSoughtTool() {
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const contracts = useGameStore((s) => s.contracts);
  const [noticeText, setNoticeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [drafts, setDrafts] = useState(() => getToolData().sourcesSoughtDrafts);

  const generate = async () => {
    setLoading(true);
    const context = [
      `Company: ${form?.companyName ?? "Your Company"}`,
      `Founder: ${form?.founderName ?? ""}`,
      `NAICS: ${form?.naicsCodes.join(", ") ?? ""}`,
      `Set-asides: ${form?.setAsides.map((s) => SET_ASIDE_MAP[s]?.label).join(", ") ?? ""}`,
      `UEI: ${profile?.uei ?? ""}`,
      `Contracts won: ${profile?.contractsWon ?? 0}`,
      `Revenue: ${fin?.revenue ?? 0}`,
      `Past contracts: ${contracts.filter((c) => c.status !== "pending_setup").map((c) => `${c.title} (${c.agency})`).join("; ") || "Simulated portfolio"}`,
    ].join("\n");

    try {
      const res = await callToolAi<{ message?: string }>(
        "sources-sought",
        `Sources sought notice:\n${noticeText}`,
        context
      );
      const text = res.message ?? "";
      setResponse(text);
      const draft = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), noticeText, response: text };
      const next = [draft, ...drafts].slice(0, 20);
      setDrafts(next);
      updateToolData({ sourcesSoughtDrafts: next });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg border bg-amber-50 text-sm space-y-2">
        <p className="font-medium text-amber-950">Why sources sought responses matter</p>
        <ul className="text-xs text-amber-900 list-disc list-inside space-y-1">
          <li>Agencies use responses to justify set-asides and shape final RFP requirements</li>
          <li>A strong response gets you on the agency&apos;s radar before competition opens</li>
          <li>Strategic questions can influence evaluation criteria in your favor</li>
          <li>Do NOT include proprietary pricing, internal rates, or competitor criticism</li>
        </ul>
      </div>

      <textarea
        className="w-full min-h-[160px] rounded-md border p-3 text-sm"
        placeholder="Paste the sources sought notice text here..."
        value={noticeText}
        onChange={(e) => setNoticeText(e.target.value)}
      />

      {loading && <AiLoading label="Generating professional sources sought response..." />}
      <Button onClick={generate} disabled={loading || !noticeText.trim()}>Generate response</Button>

      {response && (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(response)}>Copy response</Button>
          </div>
          <div className="prose prose-sm max-w-none whitespace-pre-wrap p-4 rounded-lg border bg-gray-50 text-sm leading-relaxed">
            {response}
          </div>
        </div>
      )}

      {drafts.length > 0 && (
        <div className="border-t pt-4 space-y-2">
          <p className="text-sm font-medium">Saved drafts</p>
          {drafts.slice(0, 5).map((d) => (
            <button
              key={d.id}
              type="button"
              className="w-full text-left p-2 rounded border text-xs hover:bg-gray-50"
              onClick={() => { setNoticeText(d.noticeText); setResponse(d.response); }}
            >
              {new Date(d.createdAt).toLocaleDateString()} · {d.noticeText.slice(0, 60)}...
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
