import type { CompanyOps, IntakeForm, Profile } from "@/lib/game/types";
import { SET_ASIDE_MAP } from "@/lib/game/constants";
import type { LiveSamOpportunity } from "./types";
import type { SetAsideId } from "@/lib/game/types";

const SAM_SET_ASIDE_MAP: Record<string, SetAsideId> = {
  SBA: "sb",
  SBP: "sb",
  "8A": "8a",
  "8AN": "8a",
  SDVOSBC: "sdvosb",
  SDVOSBS: "sdvosb",
  VSA: "vosb",
  VSS: "vosb",
  WOSB: "wosb",
  EDWOSB: "wosb",
  HZC: "hubzone",
  HZS: "hubzone",
  NONE: "full_open",
  NA: "full_open",
};

export function mapSamSetAside(code?: string, description?: string): { id: SetAsideId; label: string } {
  const key = (code ?? "").toUpperCase().replace(/\s/g, "");
  const id = SAM_SET_ASIDE_MAP[key] ?? "full_open";
  const label = description || SET_ASIDE_MAP[id]?.label || "Full & Open";
  return { id, label };
}

export function parseSamOpportunity(
  raw: Record<string, unknown>,
  form?: IntakeForm | null
): LiveSamOpportunity {
  const naicsCode = String(raw.naicsCode ?? raw.NAICSCode ?? "541611").slice(0, 6);
  const setAside = mapSamSetAside(
    String(raw.typeOfSetAside ?? raw.typeOfSetAsideCode ?? ""),
    String(raw.typeOfSetAsideDescription ?? raw.typeOfSetAsideDesc ?? "")
  );
  const deadline = String(raw.responseDeadLine ?? raw.responseDeadline ?? raw.archiveDate ?? "");
  const posted = String(raw.postedDate ?? raw.publishDate ?? "");
  const daysRemaining = deadline ? Math.max(0, Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000)) : 0;
  const naicsMatch = form ? form.naicsCodes.some((n) => naicsCode.startsWith(n) || n.startsWith(naicsCode)) : false;
  const saMatch = form
    ? setAside.id === "full_open" || form.setAsides.includes(setAside.id)
    : false;

  let matchTier: LiveSamOpportunity["matchTier"] = "stretch";
  if (naicsMatch && saMatch) matchTier = "strong";
  else if (naicsMatch || saMatch) matchTier = "partial";

  const opp: LiveSamOpportunity = {
    noticeId: String(raw.noticeId ?? raw.noticeID ?? raw.solicitationNumber ?? crypto.randomUUID()),
    solicitationNumber: String(raw.solicitationNumber ?? raw.solnum ?? "Pending"),
    title: String(raw.title ?? "Untitled Opportunity"),
    agency: String(raw.fullParentPathName ?? raw.department ?? raw.agency ?? "Federal Agency"),
    agencyCode: String(
      raw.organizationType ??
        (raw.officeAddress as Record<string, unknown> | undefined)?.city ??
        "GOV"
    )
      .slice(0, 8)
      .toUpperCase(),
    naicsCode,
    naicsLabel: String(raw.naicsDescription ?? naicsCode),
    setAside: setAside.id,
    setAsideLabel: setAside.label,
    postedDate: posted,
    responseDeadline: deadline,
    daysRemaining,
    estimatedValue: parseEstimatedValue(raw),
    description: String(raw.description ?? raw.additionalInfoLink ?? ""),
    uiLink: String(raw.uiLink ?? raw.additionalInfoLink ?? `https://sam.gov/opp/${raw.noticeId ?? ""}/view`),
    type: String(raw.type ?? raw.baseType ?? "Solicitation"),
    naicsMatch,
    saMatch,
    matchTier,
    grade: "C",
  };

  opp.grade = scoreLiveOpportunity(opp, form, null).grade;
  return opp;
}

function parseEstimatedValue(raw: Record<string, unknown>): number | null {
  const award = raw.award;
  if (award && typeof award === "object") {
    const amt = (award as Record<string, unknown>).amount;
    if (typeof amt === "number") return amt;
    if (typeof amt === "string") return parseFloat(amt.replace(/[^0-9.]/g, "")) || null;
  }
  const val = raw.estimatedValue ?? raw.awardAmount;
  if (typeof val === "number") return val;
  if (typeof val === "string") return parseFloat(val.replace(/[^0-9.]/g, "")) || null;
  return null;
}

export function scoreLiveOpportunity(
  opp: LiveSamOpportunity,
  form: IntakeForm | null | undefined,
  companyOps: CompanyOps | null
): { grade: LiveSamOpportunity["grade"]; total: number; breakdown: string[] } {
  let total = 0;
  const breakdown: string[] = [];

  const saPts = opp.saMatch ? 30 : opp.setAside === "full_open" ? 15 : 0;
  total += saPts;
  breakdown.push(`Set-aside: ${saPts}/30`);

  const naicsPts = opp.naicsMatch ? 20 : 0;
  total += naicsPts;
  breakdown.push(`NAICS: ${naicsPts}/20`);

  let daysPts = 0;
  if (opp.daysRemaining >= 21) daysPts = 15;
  else if (opp.daysRemaining >= 14) daysPts = 10;
  else if (opp.daysRemaining >= 7) daysPts = 5;
  total += daysPts;
  breakdown.push(`Timeline: ${daysPts}/15`);

  const bonding = companyOps?.bondingCapacity ?? 750000;
  let valuePts = 10;
  if (opp.estimatedValue) {
    if (opp.estimatedValue <= bonding * 0.5) valuePts = 15;
    else if (opp.estimatedValue <= bonding) valuePts = 10;
    else if (opp.estimatedValue <= bonding * 1.5) valuePts = 4;
    else valuePts = 0;
  }
  total += valuePts;
  breakdown.push(`Value fit: ${valuePts}/15`);

  total += opp.matchTier === "strong" ? 20 : opp.matchTier === "partial" ? 12 : 5;

  let grade: LiveSamOpportunity["grade"] = "F";
  if (total >= 85) grade = "A";
  else if (total >= 72) grade = "B";
  else if (total >= 58) grade = "C";
  else if (total >= 40) grade = "D";

  return { grade, total, breakdown };
}

export function liveSamToGameOpportunity(opp: LiveSamOpportunity): import("@/lib/game/types").Opportunity {
  return {
    id: `live-${opp.noticeId}`,
    solicitationNumber: opp.solicitationNumber,
    title: opp.title,
    agency: opp.agency,
    agencyCode: opp.agencyCode,
    naicsCode: opp.naicsCode,
    naicsLabel: opp.naicsLabel,
    estimatedValue: opp.estimatedValue ?? 500000,
    contractType: "FFP",
    setAside: opp.setAside,
    setAsideLabel: opp.setAsideLabel,
    optionYears: 4,
    daysRemaining: opp.daysRemaining,
    requiresClearance: false,
    clearanceRequired: null,
    isDefense: opp.agency.toLowerCase().includes("defense") || opp.agencyCode.includes("DOD"),
    competitionLevel: opp.setAside === "full_open" ? "high" : "medium",
    evalCriteria: "Best Value",
    naicsMatch: opp.naicsMatch,
    saMatch: opp.saMatch,
    matchTier: opp.matchTier,
  };
}
