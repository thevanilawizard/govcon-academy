import { NextResponse } from "next/server";
import { parseSamOpportunity } from "@/lib/tools/samgov";

const SAM_BASE = "https://api.sam.gov/opportunities/v2/search";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiKey = body.apiKey || process.env.SAMGOV_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "SAM.gov API key required" }, { status: 400 });
    }

    const postedTo = new Date();
    const postedFrom = new Date();
    postedFrom.setDate(postedFrom.getDate() - 90);

    const params = new URLSearchParams({
      api_key: apiKey,
      limit: String(body.limit ?? 25),
      offset: String(body.offset ?? 0),
      postedFrom: formatSamDate(postedFrom),
      postedTo: formatSamDate(postedTo),
    });

    if (body.keyword) params.set("q", body.keyword);
    if (body.naics) params.set("ncode", body.naics);
    if (body.setAside) {
      const samSetAside = SET_ASIDE_TO_SAM[body.setAside] ?? body.setAside;
      params.set("typeOfSetAside", samSetAside);
    }
    if (body.agency) params.set("deptname", body.agency);

    const res = await fetch(`${SAM_BASE}?${params.toString()}`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `SAM.gov returned ${res.status}: ${text.slice(0, 200)}` },
        { status: res.status }
      );
    }

    const json = await res.json();
    const rows = (json.opportunitiesData ?? json.data ?? []) as Record<string, unknown>[];
    let opportunities = rows.map((r) => parseSamOpportunity(r, body.profile ?? null));

    if (body.minValue != null) {
      opportunities = opportunities.filter(
        (o) => o.estimatedValue == null || o.estimatedValue >= body.minValue
      );
    }
    if (body.maxValue != null) {
      opportunities = opportunities.filter(
        (o) => o.estimatedValue == null || o.estimatedValue <= body.maxValue
      );
    }
    if (body.daysRemaining != null) {
      opportunities = opportunities.filter((o) => o.daysRemaining <= body.daysRemaining);
    }

    return NextResponse.json({
      totalRecords: json.totalRecords ?? opportunities.length,
      opportunities,
    });
  } catch (error) {
    console.error("SAM.gov search error:", error);
    return NextResponse.json({ error: "Failed to search SAM.gov" }, { status: 500 });
  }
}

function formatSamDate(d: Date) {
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
}

const SET_ASIDE_TO_SAM: Record<string, string> = {
  sb: "SBA",
  sdvosb: "SDVOSBC",
  vosb: "VSA",
  wosb: "WOSB",
  "8a": "8A",
  hubzone: "HZC",
  full_open: "NONE",
};
