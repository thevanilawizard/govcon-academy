import { NextResponse } from "next/server";
import { parseSamOpportunity } from "@/lib/tools/samgov";

const SAM_BASE = "https://api.sam.gov/opportunities/v2/search";

export async function POST(request: Request) {
  try {
    const { apiKey: userKey, noticeId, profile } = await request.json();
    const apiKey = userKey || process.env.SAMGOV_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "SAM.gov API key required" }, { status: 400 });
    }
    if (!noticeId) {
      return NextResponse.json({ error: "noticeId required" }, { status: 400 });
    }

    const params = new URLSearchParams({
      api_key: apiKey,
      noticeid: noticeId,
      limit: "1",
    });

    const res = await fetch(`${SAM_BASE}?${params.toString()}`);
    if (!res.ok) {
      return NextResponse.json({ error: `SAM.gov returned ${res.status}` }, { status: res.status });
    }

    const json = await res.json();
    const rows = (json.opportunitiesData ?? json.data ?? []) as Record<string, unknown>[];
    const raw = rows[0];
    if (!raw) {
      return NextResponse.json({ error: "Opportunity not found" }, { status: 404 });
    }

    const opportunity = parseSamOpportunity(raw, profile ?? null);
    const description =
      String(raw.description ?? "") ||
      [
        raw.title,
        raw.fullParentPathName,
        raw.naicsCode,
        raw.typeOfSetAsideDescription,
        raw.responseDeadLine,
      ]
        .filter(Boolean)
        .join("\n");

    return NextResponse.json({
      opportunity: { ...opportunity, description },
      rawDescription: description,
    });
  } catch (error) {
    console.error("SAM.gov opportunity error:", error);
    return NextResponse.json({ error: "Failed to fetch opportunity" }, { status: 500 });
  }
}
