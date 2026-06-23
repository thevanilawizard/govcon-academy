const SAM_KEY = "govcon_samgov_api_key";
const TOOL_DATA = "govcon_tool_data";

export interface ToolPersistedData {
  proposalVersions: import("./types").ProposalVersion[];
  clauseLibrary: import("./types").SavedClauseAnalysis[];
  bidNoBidRecords: import("./types").BidNoBidRecord[];
  sourcesSoughtDrafts: import("./types").SourcesSoughtDraft[];
  rateCalculator?: import("./types").RateCalculatorState;
}

function defaultData(): ToolPersistedData {
  return {
    proposalVersions: [],
    clauseLibrary: [],
    bidNoBidRecords: [],
    sourcesSoughtDrafts: [],
  };
}

export function getSamGovApiKey(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(SAM_KEY) ?? process.env.NEXT_PUBLIC_SAMGOV_API_KEY ?? "";
}

export function setSamGovApiKey(key: string) {
  localStorage.setItem(SAM_KEY, key.trim());
}

export function clearSamGovApiKey() {
  localStorage.removeItem(SAM_KEY);
}

export function getToolData(): ToolPersistedData {
  if (typeof window === "undefined") return defaultData();
  try {
    const raw = localStorage.getItem(TOOL_DATA);
    if (!raw) return defaultData();
    return { ...defaultData(), ...JSON.parse(raw) };
  } catch {
    return defaultData();
  }
}

export function saveToolData(data: ToolPersistedData) {
  localStorage.setItem(TOOL_DATA, JSON.stringify(data));
}

export function updateToolData(partial: Partial<ToolPersistedData>) {
  const next = { ...getToolData(), ...partial };
  saveToolData(next);
  return next;
}
