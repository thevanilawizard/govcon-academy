import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    if (!name?.trim()) {
      return NextResponse.json({ error: "Agency name required" }, { status: 400 });
    }

    const autocomplete = await fetch(
      "https://api.usaspending.gov/api/v2/autocomplete/agency/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search_text: name, limit: 3 }),
      }
    );
    const autoData = await autocomplete.json();
    const agency = autoData.results?.[0];
    if (!agency) {
      return NextResponse.json({ error: "Agency not found" });
    }

    const spending = await fetch(
      "https://api.usaspending.gov/api/v2/search/spending_by_category/naics/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filters: {
            agencies: [{ type: "awarding", tier: "toptier", name: agency.name }],
            time_period: [
              { start_date: "2024-10-01", end_date: "2025-09-30" },
            ],
          },
          category: "naics",
          limit: 10,
        }),
      }
    );

    const spendData = await spending.json();
    const naicsBreakdown = spendData.results ?? [];

    const totals = await fetch(
      "https://api.usaspending.gov/api/v2/search/spending_by_award_count/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filters: {
            agencies: [{ type: "awarding", tier: "toptier", name: agency.name }],
            time_period: [
              { start_date: "2024-10-01", end_date: "2025-09-30" },
            ],
          },
        }),
      }
    );

    const totalData = await totals.json();

    return NextResponse.json({
      agency: {
        name: agency.name,
        code: agency.code,
        id: agency.id,
      },
      fiscalYearSpend: totalData.results?.spending ?? totalData.spending ?? null,
      awardCount: totalData.results?.transactions ?? totalData.transactions ?? null,
      topNaics: naicsBreakdown.slice(0, 8).map((n: Record<string, unknown>) => ({
        code: n.code ?? n.naics_code,
        description: n.description ?? n.naics_description,
        amount: n.amount ?? n.aggregated_amount,
      })),
      martinNote: buildAgencyNote(agency.name),
    });
  } catch (error) {
    console.error("USASpending agency error:", error);
    return NextResponse.json({ error: "Failed to search agency" }, { status: 500 });
  }
}

function buildAgencyNote(agencyName: string) {
  const now = new Date();
  const month = now.getMonth();
  const isQ4 = month >= 6 && month <= 8;
  if (isQ4) {
    return `${agencyName} is in federal Q4 (Aug–Sep). Agencies accelerate spending to obligate remaining fiscal year funds — strong period for proposal submissions and contract awards.`;
  }
  if (month >= 9) {
    return `Federal fiscal year just started (Oct 1). ${agencyName} is building new-year acquisition plans — good time for sources sought responses and market research meetings.`;
  }
  return `Monitor ${agencyName}'s small business goals on SBA Scorecard. Agencies below SB targets actively seek qualified small business vendors mid-year.`;
}
