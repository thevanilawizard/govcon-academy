"use client";

import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game/store";
import { SET_ASIDE_MAP } from "@/lib/game/constants";
import {
  formatCurrency,
  getCashColor,
  getComplianceColor,
  getRunwayDays,
  getRunwayMonths,
} from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useMartin } from "@/hooks/use-martin";
import { useJobReadiness } from "@/hooks/use-job-readiness";
import { MartinCard } from "@/components/game/martin-card";
import { EducationCenter } from "@/components/education/education-center";
import { computeOverallReadiness, getReadinessLevel } from "@/lib/job-readiness/scoring";

const STAGE_LABELS: Record<string, string> = {
  micro: "Micro (under $150K)",
  small_business: "Small Business",
  gsa_schedule: "GSA Schedule",
  idiq: "IDIQ / GWAC",
  prime: "Prime Contractor",
};

export function DashboardTab() {
  const router = useRouter();
  const form = useGameStore((s) => s.form);
  const profile = useGameStore((s) => s.profile);
  const fin = useGameStore((s) => s.fin);
  const companyOps = useGameStore((s) => s.companyOps);
  const gameOver = useGameStore((s) => s.gameOver);
  const quarter = useGameStore((s) => s.quarter);
  const contracts = useGameStore((s) => s.contracts);
  const opps = useGameStore((s) => s.opps);
  const martinMessages = useGameStore((s) => s.martinMessages);
  const advanceToNextQuarter = useGameStore((s) => s.advanceToNextQuarter);
  const addNotification = useGameStore((s) => s.addNotification);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const { askMartin } = useMartin();
  const { progress: readinessProgress, hydrated: readinessHydrated } = useJobReadiness();

  if (!form || !profile || !fin) return null;

  const activeContracts = contracts.filter((c) => c.status === "active");
  const pendingSetup = contracts.filter((c) => c.status === "pending_setup");
  const cashColor = getCashColor(fin.cash, fin.burn);
  const runwayMonths = getRunwayMonths(fin.cash, fin.burn, fin.revenue);
  const runwayDays = getRunwayDays(fin.cash, fin.burn, fin.revenue);
  const ops = companyOps;

  const handleAdvanceQuarter = async () => {
    const notifs = advanceToNextQuarter();
    notifs.forEach((n) => addNotification(n, "info"));
    await askMartin({
      trigger: "quarter_advance",
      prompt: `Starting Q${quarter + 1}. Cash: $${fin.cash.toLocaleString()}, ${fin.revenue > 0 ? `$${fin.revenue.toLocaleString()}/month revenue` : "no revenue yet"}, compliance ${ops?.complianceScore ?? 85}/100, ${activeContracts.map((c) => `${c.title} CPARS ${c.exec.performance.toFixed(1)}`).join(", ") || "no active contracts"}. What should this firm prioritize this quarter?`,
    });
  };

  const latestMartin = martinMessages[martinMessages.length - 1];
  const readinessScore = readinessHydrated ? computeOverallReadiness(readinessProgress) : 0;
  const readinessLevel = getReadinessLevel(readinessScore);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">{form.companyName}</h2>
          <p className="text-sm text-muted-foreground">
            Q{quarter} 2025 · UEI {profile.uei} · CAGE {profile.cageCode}
          </p>
          {ops && (
            <Badge variant="outline" className="mt-2">
              {STAGE_LABELS[ops.progressionStage] ?? ops.progressionStage}
            </Badge>
          )}
        </div>
        <Button onClick={handleAdvanceQuarter} disabled={!!gameOver}>
          Advance to Q{quarter + 1}
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Cash Runway</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-medium ${cashColor}`}>{formatCurrency(fin.cash)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {runwayDays >= 999 ? "∞" : `${runwayDays} days`} · {runwayMonths} months
            </p>
            {fin.cash <= fin.burn * 2 && (
              <p className="text-xs text-red-600 mt-1">Critical — submit invoices or draw on LOC</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Receivables</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{formatCurrency(fin.receivables ?? 0)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {formatCurrency(fin.pendingApproval ?? 0)} pending COR approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Past Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{ops?.pastPerformanceScore ?? 0}/100</p>
            <p className="text-xs text-muted-foreground mt-1">
              {profile.contractsWon} contracts · CPARS avg {profile.avgPerf > 0 ? profile.avgPerf.toFixed(1) : "—"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-medium ${getComplianceColor(ops?.complianceScore ?? 85)}`}>
              {ops?.complianceScore ?? 85}/100
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              SAM: {ops?.samStatus === "active" ? "Active ✓" : ops?.samStatus ?? "Active"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Line of Credit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">
              {formatCurrency((fin.lineOfCreditLimit ?? 0) - (fin.lineOfCreditUsed ?? 0))}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Available · {formatCurrency(fin.lineOfCreditUsed ?? 0)} drawn
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{formatCurrency(fin.revenue)}</p>
            <p className="text-xs text-muted-foreground mt-1">Burn: {formatCurrency(fin.burn)}/mo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">NAICS Registered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">{form.naicsCodes.join(", ")}</p>
            <p className="text-xs text-muted-foreground mt-1">Determines eligible solicitations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {form.setAsides.map((sa) => (
                <Badge key={sa} variant="outline" className="text-xs">
                  {SET_ASIDE_MAP[sa]?.label ?? sa}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Bonding Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{formatCurrency(ops?.bondingCapacity ?? 750000)}</p>
            <p className="text-xs text-muted-foreground mt-1">Max contract size you can pursue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium">{opps.length}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {activeContracts.length} active · {pendingSetup.length} pending setup
            </p>
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer hover:border-primary/40 transition-colors"
          onClick={() => router.push("/job-readiness")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Job Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-medium text-primary">
              {readinessHydrated ? `${readinessScore}%` : "—"}
            </p>
            {readinessHydrated && (
              <>
                <Progress value={readinessScore} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">{readinessLevel.label}</p>
              </>
            )}
            <Button variant="link" size="sm" className="px-0 mt-1 h-auto text-xs" onClick={(e) => { e.stopPropagation(); router.push("/job-readiness"); }}>
              Open program →
            </Button>
          </CardContent>
        </Card>
      </div>

      {latestMartin && (
        <MartinCard
          content={latestMartin.content}
          loading={latestMartin.loading}
          trigger={latestMartin.trigger}
        />
      )}

      <EducationCenter />
    </div>
  );
}
