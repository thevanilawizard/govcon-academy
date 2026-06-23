"use client";

import { useCallback } from "react";
import { useGameStore } from "@/lib/game/store";
import { buildMartinContext } from "@/lib/game/engine";
import type { MartinTrigger } from "@/lib/game/types";

interface MartinCallOptions {
  trigger: MartinTrigger;
  prompt: string;
  topicId?: string;
}

export function useMartin() {
  const addMartinMessage = useGameStore((s) => s.addMartinMessage);
  const updateMartinMessage = useGameStore((s) => s.updateMartinMessage);
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const quarter = useGameStore((s) => s.quarter);
  const contracts = useGameStore((s) => s.contracts);

  const askMartin = useCallback(
    async ({ trigger, prompt, topicId }: MartinCallOptions) => {
      if (!form || !profile || !fin) return null;

      const msgId = addMartinMessage("", trigger, true);
      const context = buildMartinContext(form, profile, fin, quarter, contracts);

      try {
        const res = await fetch("/api/martin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, context, trigger, topicId }),
        });

        if (!res.ok) {
          const fallback = getFallbackResponse(trigger, topicId);
          updateMartinMessage(msgId, fallback);
          return fallback;
        }

        const data = await res.json();
        updateMartinMessage(msgId, data.message);
        return data.message;
      } catch {
        const fallback = getFallbackResponse(trigger, topicId);
        updateMartinMessage(msgId, fallback);
        return fallback;
      }
    },
    [form, profile, fin, quarter, contracts, addMartinMessage, updateMartinMessage]
  );

  return { askMartin };
}

function getFallbackResponse(trigger: MartinTrigger, topicId?: string): string {
  const topicFallbacks: Record<string, string> = {
    delivery_strategy:
      "Self-perform gives you 35% margin but full performance risk. Subcontract drops to 15% margin but you stand up faster. Hybrid at 25% is the sweet spot — you self-perform management while a sub handles technical delivery, staying FAR 52.219-14 compliant on set-asides.",
    cpars:
      "CPARS runs 1–5: Exceptional (4.5+) adds +18% to win probability, Very Good (+10), Satisfactory (0), Marginal (-10), Unsatisfactory (-20). One bad rating isn't fatal — document a recovery plan, communicate with your COR weekly, and deliver flawlessly for 12 months.",
    cor:
      "Your COR monitors daily performance and writes your CPARS. Communicate proactively — weekly status emails, never surprise them with bad news. What kills COR relationships: missed deadlines without warning, scope creep compliance, and going around them to the Contracting Officer.",
    scope_creep:
      "When a COR asks for work outside the PWS, your only correct answer is a bilateral contract modification. Use language like: 'To ensure we have adequate funding to support your requirements, we recommend a contract mod under FAR 43.103.' Never absorb it — that sets a precedent that destroys margins.",
    cash_flow:
      "Government pays Net 30–60. You pay staff every two weeks. Invoice factoring sells your receivable at 2–3% discount for payment in 48 hours. eCapital, Parabilis, and Riviera Finance specialize in GovCon factoring — use them before you miss payroll.",
    option_years:
      "Performance 4.0+ = 88% option exercise rate. 3.0–3.9 = 66%. Below 3.0 = 36%. Position for renewal by exceeding deliverables in Q3 of each option year and requesting a mid-period COR feedback session.",
    far_limits:
      "FAR 52.219-14 requires 50% of labor cost self-performed on small business set-asides. It's calculated on labor dollars, not total contract value. Violations trigger CO review, potential termination, and debarment risk.",
    bid_no_bid:
      "Four questions: Do we qualify (NAICS + set-aside)? Can we win (past perf + price)? Can we perform (delivery capacity)? Is it worth it (margin vs pursuit cost)? Pursuit cost = BD hours × $150 loaded rate. Walk away from recompetes where your CPARS is below 3.5.",
    past_perf_zero:
      "Subcontract under an established prime for 12–18 months to build CPARS. Structure a teaming agreement where you perform meaningful work scopes, not just admin. Prime contractors can document sub performance in CPARS — that's your entry point.",
  };

  if (trigger === "mentor_topic" && topicId && topicFallbacks[topicId]) {
    return topicFallbacks[topicId];
  }

  const fallbacks: Record<string, string> = {
    game_start:
      "Welcome to GovCon. Your first 90 days: finalize SAM.gov, target 5–10 agencies where your NAICS and set-asides align, and build teaming relationships. Most new firms burn cash on full-and-open bids they can't win.",
    return:
      "Good to see you back. Review your pipeline, check days remaining on open opportunities, and protect your cash runway.",
    quarter_advance:
      "New quarter, new opportunities. Prioritize bids with NAICS and set-aside alignment. Check in with your COR this week.",
    bid_detail:
      "Run your bid/no-bid checklist honestly. No NAICS match AND no set-aside eligibility = pass. Price aggressively on LPTA.",
    proposal_win:
      "Hard part starts now. First 30 days: COR liaison, delivery strategy, invoicing system. Government pays in 30–60 days — plan cash flow.",
    proposal_loss:
      "Request a debrief within 3 business days — legally required on request. Most losses are past performance or pricing, not technical.",
    strategy_pick:
      "Delivery strategy sets margin and risk for the entire contract. Document everything and never absorb scope creep without a mod.",
    execution_event:
      "Performance events are learning opportunities. CPARS scores persist 3 years and affect every future bid.",
    education_lesson:
      "In my twenty years in GovCon, the contracts professionals who succeed aren't the ones who memorize the FAR — they're the ones who know which clause applies when the COR sends that Friday afternoon email. Study the concept, then walk through a real scenario on your current contract.",
    guided:
      "I'm here in guided mode to walk you through each screen. Ask me anything about the opportunity, proposal, or contract in front of you.",
  };
  return fallbacks[trigger] || topicFallbacks.past_perf_zero;
}
