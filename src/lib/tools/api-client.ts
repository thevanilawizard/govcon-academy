export async function callToolAi<T = { message: string }>(
  tool: string,
  prompt: string,
  context?: string,
  jsonMode?: boolean
): Promise<T> {
  const res = await fetch("/api/tools/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tool, prompt, context, jsonMode }),
  });
  if (!res.ok) throw new Error("AI request failed");
  return res.json();
}

export async function searchSamGov(
  apiKey: string,
  params: import("./types").SamSearchParams
) {
  const res = await fetch("/api/samgov/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, ...params }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "SAM.gov search failed");
  return data;
}

export async function fetchSamOpportunity(apiKey: string, noticeId: string) {
  const res = await fetch("/api/samgov/opportunity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, noticeId }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Failed to fetch opportunity");
  return data;
}

export async function searchUsaSpendingRecipient(name: string) {
  const res = await fetch("/api/usaspending/recipient", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Search failed");
  return data;
}

export async function searchUsaSpendingAgency(name: string) {
  const res = await fetch("/api/usaspending/agency", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Search failed");
  return data;
}

export async function searchUsaJobs(keyword: string, apiKey?: string) {
  const res = await fetch("/api/usajobs/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword, apiKey }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "USAJobs search failed");
  return data;
}
