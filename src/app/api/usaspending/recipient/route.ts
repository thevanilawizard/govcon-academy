import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    if (!name?.trim()) {
      return NextResponse.json({ error: "Company name required" }, { status: 400 });
    }

    const autocomplete = await fetch(
      "https://api.usaspending.gov/api/v2/autocomplete/recipient/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search_text: name, limit: 5 }),
      }
    );
    const autoData = await autocomplete.json();
    const recipient = autoData.results?.[0];
    if (!recipient) {
      return NextResponse.json({ error: "No matching recipient found", results: [] });
    }

    const spending = await fetch(
      "https://api.usaspending.gov/api/v2/search/spending_by_award/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filters: {
            recipient_search_text: [recipient.name],
            time_period: [
              { start_date: "2019-10-01", end_date: "2025-09-30" },
            ],
            award_type_codes: ["A", "B", "C", "D"],
          },
          fields: [
            "Award ID",
            "Recipient Name",
            "Award Amount",
            "Awarding Agency",
            "NAICS Code",
            "Start Date",
            "End Date",
          ],
          limit: 25,
          page: 1,
          sort: "Award Amount",
          order: "desc",
        }),
      }
    );

    const spendData = await spending.json();
    const awards = spendData.results ?? [];

    const totalAwards = awards.reduce(
      (sum: number, a: Record<string, string>) =>
        sum + parseFloat(String(a["Award Amount"] ?? 0).replace(/[^0-9.]/g, "")),
      0
    );

    const agencyCounts: Record<string, number> = {};
    const naicsCounts: Record<string, number> = {};
    for (const a of awards) {
      const agency = String(a["Awarding Agency"] ?? "Unknown");
      const naics = String(a["NAICS Code"] ?? "Unknown");
      agencyCounts[agency] = (agencyCounts[agency] ?? 0) + 1;
      naicsCounts[naics] = (naicsCounts[naics] ?? 0) + 1;
    }

    const topAgencies = Object.entries(agencyCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    const topNaics = Object.entries(naicsCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([code, count]) => ({ code, count }));

    return NextResponse.json({
      recipient: {
        name: recipient.name,
        uei: recipient.uei,
        duns: recipient.duns,
      },
      totalAwardValue: totalAwards,
      awardCount: awards.length,
      topAgencies,
      topNaics,
      recentAwards: awards.slice(0, 10),
    });
  } catch (error) {
    console.error("USASpending recipient error:", error);
    return NextResponse.json({ error: "Failed to search USASpending" }, { status: 500 });
  }
}
