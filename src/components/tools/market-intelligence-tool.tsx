"use client";

import { useState } from "react";
import { searchUsaSpendingRecipient, searchUsaSpendingAgency } from "@/lib/tools/api-client";
import { formatCurrency } from "@/lib/utils";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketIntelligenceTool() {
  const [companyQuery, setCompanyQuery] = useState("");
  const [agencyQuery, setAgencyQuery] = useState("");
  const [companyData, setCompanyData] = useState<Record<string, unknown> | null>(null);
  const [agencyData, setAgencyData] = useState<Record<string, unknown> | null>(null);
  const [loadingCompany, setLoadingCompany] = useState(false);
  const [loadingAgency, setLoadingAgency] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchCompany = async () => {
    setLoadingCompany(true);
    setError(null);
    try {
      const data = await searchUsaSpendingRecipient(companyQuery);
      setCompanyData(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Search failed");
    } finally {
      setLoadingCompany(false);
    }
  };

  const searchAgency = async () => {
    setLoadingAgency(true);
    setError(null);
    try {
      const data = await searchUsaSpendingAgency(agencyQuery);
      setAgencyData(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Search failed");
    } finally {
      setLoadingAgency(false);
    }
  };

  const now = new Date();
  const fyMonth = now.getMonth();
  const fyQuarter = fyMonth >= 9 ? "Q1 (Oct–Dec)" : fyMonth >= 6 ? "Q4 (Jul–Sep)" : fyMonth >= 3 ? "Q3 (Apr–Jun)" : "Q2 (Jan–Mar)";

  return (
    <div className="space-y-8">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Federal fiscal year intelligence</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2 text-muted-foreground">
          <p>Federal fiscal year: <strong>October 1 – September 30</strong>. Current period: <strong>{fyQuarter}</strong>.</p>
          <p><strong>Q4 surge (Aug–Sep):</strong> Agencies obligate remaining funds before year-end. Highest award velocity of the year — prime time for proposals and contract mods.</p>
          <p><strong>Q1 (Oct–Dec):</strong> New-year planning, sources sought, and market research. Strong period for shaping upcoming RFPs.</p>
          <p><strong>Best proposal months:</strong> Civilian agencies peak Aug–Sep; DoD often Q3–Q4 for new starts; GSA continuous but year-end for remaining schedule funds.</p>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">Company research (USASpending.gov)</h3>
        <p className="text-xs text-muted-foreground">Research competitors, find incumbents, identify teaming partners, and estimate award history.</p>
        <div className="flex gap-2">
          <Input placeholder="Company name (e.g., Booz Allen, SAIC)" value={companyQuery} onChange={(e) => setCompanyQuery(e.target.value)} />
          <Button onClick={searchCompany} disabled={loadingCompany}>Search</Button>
        </div>
        {loadingCompany && <AiLoading label="Querying USASpending.gov..." />}
        {companyData?.recipient != null && (
          <div className="p-4 rounded-lg border space-y-3 text-sm">
            <p className="font-medium">{String((companyData.recipient as Record<string, string>).name)}</p>
            <p className="text-xs text-muted-foreground">UEI: {(companyData.recipient as Record<string, string>).uei}</p>
            <p>Total award value (5 yr): <strong>{formatCurrency(Number(companyData.totalAwardValue ?? 0))}</strong> · {String(companyData.awardCount)} awards</p>
            <div>
              <p className="text-xs font-medium mb-1">Top agencies</p>
              {(companyData.topAgencies as Array<{ name: string; count: number }>)?.map((a) => (
                <Badge key={a.name} variant="outline" className="mr-1 mb-1">{a.name} ({a.count})</Badge>
              ))}
            </div>
            <div>
              <p className="text-xs font-medium mb-1">Top NAICS</p>
              {(companyData.topNaics as Array<{ code: string; count: number }>)?.map((n) => (
                <Badge key={n.code} variant="outline" className="mr-1 mb-1">{n.code} ({n.count})</Badge>
              ))}
            </div>
            <div className="text-xs space-y-1 border-t pt-2">
              <p className="font-medium">Recent awards</p>
              {(companyData.recentAwards as Array<Record<string, string>>)?.slice(0, 5).map((a, i) => (
                <p key={i} className="text-muted-foreground">{a["Award ID"]} · {a["Awarding Agency"]} · {a["Award Amount"]}</p>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium">Agency research</h3>
        <p className="text-xs text-muted-foreground">Understand buying patterns, NAICS focus, and small business spending trends.</p>
        <div className="flex gap-2">
          <Input placeholder="Agency name (e.g., Department of Veterans Affairs)" value={agencyQuery} onChange={(e) => setAgencyQuery(e.target.value)} />
          <Button onClick={searchAgency} disabled={loadingAgency}>Search</Button>
        </div>
        {loadingAgency && <AiLoading label="Querying agency spending data..." />}
        {agencyData?.agency != null && (
          <div className="p-4 rounded-lg border space-y-3 text-sm">
            <p className="font-medium">{(agencyData.agency as Record<string, string>).name}</p>
            <p className="text-xs">FY spend data available via USASpending public API</p>
            <div>
              <p className="text-xs font-medium mb-1">Top NAICS purchased</p>
              {(agencyData.topNaics as Array<Record<string, unknown>>)?.map((n, i) => (
                <p key={i} className="text-xs text-muted-foreground">{String(n.code)} — {String(n.description ?? "").slice(0, 60)}</p>
              ))}
            </div>
            {typeof agencyData.martinNote === "string" && agencyData.martinNote && (
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-xs">
                <span className="font-medium">Martin Business: </span>{agencyData.martinNote}
              </div>
            )}
          </div>
        )}
      </section>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="text-xs text-muted-foreground border-t pt-4 space-y-1">
        <p className="font-medium">What this teaches</p>
        <p>• Identify who wins contracts in your NAICS before you bid</p>
        <p>• Find the incumbent on any recompete by searching the prior prime</p>
        <p>• Spot agencies below SB goals who are actively seeking small business vendors</p>
        <p>• Estimate competitor pricing bands from historical award values</p>
      </div>
    </div>
  );
}
