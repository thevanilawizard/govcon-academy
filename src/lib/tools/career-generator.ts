import type { IntakeForm, Profile, FinState, Contract, SubmittedProposal } from "@/lib/game/types";
import type { TrainingProgress } from "@/lib/education/training/types";
import { TRAINING_MODULES } from "@/lib/education/training/catalog";
import { getCparsLabel, formatCurrency } from "@/lib/utils";

export interface CareerResume {
  professionalSummary: string;
  education: string[];
  skills: string[];
  experienceBullets: string[];
  certifications: string[];
}

export function generateCareerResume(input: {
  form: IntakeForm | null;
  profile: Profile | null;
  fin: FinState | null;
  contracts: Contract[];
  submitted: SubmittedProposal[];
  quarter: number;
  training: TrainingProgress;
}): CareerResume {
  const { form, profile, fin, contracts, submitted, quarter, training } = input;
  const modulesCompleted = training.moduleCertificates.length;
  const wins = fin?.wins ?? 0;
  const proposals = fin?.proposals ?? 0;
  const winRate = proposals ? Math.round((wins / proposals) * 100) : 0;
  const activeContracts = contracts.filter((c) => c.status === "active");
  const totalValue = activeContracts.reduce((s, c) => s + c.value, 0);
  const avgCpars =
    activeContracts.length > 0
      ? activeContracts.reduce((s, c) => {
          const latest = c.exec?.cpars?.[c.exec.cpars.length - 1];
          return s + (latest?.score ?? 3.5);
        }, 0) / activeContracts.length
      : profile?.avgPerf ?? 3.5;

  const skills = new Set<string>([
    "FAR/DFARS compliance",
    "SAM.gov registration and management",
  ]);

  if (modulesCompleted >= 1) skills.add("Federal acquisition fundamentals");
  if (training.moduleCertificates.includes("far-depth")) skills.add("FAR Parts 1-52 interpretation");
  if (training.moduleCertificates.includes("dfars")) skills.add("CMMC/cybersecurity compliance");
  if (training.moduleCertificates.includes("administration")) skills.add("Contract administration");
  if (training.moduleCertificates.includes("proposals")) skills.add("Proposal writing");
  if (training.moduleCertificates.includes("accounting")) {
    skills.add("Cost/price analysis");
    skills.add("Indirect rate development");
    skills.add("DCAA audit preparation");
  }
  if (training.moduleCertificates.includes("ethics")) skills.add("Ethics and compliance programs");
  if (wins > 0) skills.add("Past performance management");
  if (form?.setAsides.length) skills.add("Small business set-aside strategy");
  skills.add("Subcontract management");

  const education: string[] = [];
  if (training.programCertificateEarned) {
    education.push(
      `GovCon Academy — Federal Contracting Professional Certificate (${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })})`
    );
    education.push(
      `Final exam score: ${training.finalExamScore}% (passing grade: 75%+)`
    );
  }
  TRAINING_MODULES.filter((m) => training.moduleCertificates.includes(m.id)).forEach((m) => {
    education.push(`Module ${m.number}: ${m.title}`);
  });

  const experienceBullets: string[] = [];
  if (activeContracts.length || wins) {
    experienceBullets.push(
      `Managed simulated federal contract portfolio of ${activeContracts.length || wins} contract(s) valued at ${formatCurrency(totalValue || fin?.totalValue || 0)} over ${quarter} quarter(s), achieving ${getCparsLabel(avgCpars)} CPARS performance rating`
    );
  }
  if (proposals > 0) {
    experienceBullets.push(
      `Developed winning proposal strategy across ${proposals} capture(s), achieving ${winRate}% bid-to-award ratio on simulated federal opportunities`
    );
  }
  experienceBullets.push(
    "Executed delivery strategy decisions across self-perform, subcontract, and hybrid models on federal service contracts"
  );

  const professionalSummary = form
    ? `Federal contracts professional with demonstrated knowledge of FAR Parts 1-52, DFARS cybersecurity requirements, and defense contract administration. ${training.programCertificateEarned ? "Completed GovCon Academy's comprehensive 8-module training program covering contract lifecycle management, proposal development, and DCAA compliance." : `Completed ${modulesCompleted} of 8 GovCon Academy training modules.`} ${form.companyName} specializes in ${form.naicsCodes.join(", ")} NAICS with ${form.setAsides.join(", ")} set-aside certifications.`
    : "Federal contracts professional building expertise in FAR/DFARS compliance, proposal development, and contract administration through GovCon Academy's professional training program.";

  const certifications: string[] = [];
  if (training.programCertificateEarned) {
    certifications.push("GovCon Academy Professional Certificate — NCMA exam readiness: CFCM/CPCM track");
  }
  if (training.moduleCertificates.includes("certification")) {
    certifications.push("Professional certification prep module completed (NCMA/DAU pathways)");
  }

  return {
    professionalSummary,
    education,
    skills: Array.from(skills),
    experienceBullets,
    certifications,
  };
}

export function mapJobQualificationMatch(
  qualifications: string | undefined,
  skills: string[]
): number {
  if (!qualifications) return 40;
  const text = qualifications.toLowerCase();
  const matched = skills.filter((s) => {
    const tokens = s.toLowerCase().split(/[\s/]+/);
    return tokens.some((t) => t.length > 3 && text.includes(t));
  });
  return Math.min(95, Math.round(35 + (matched.length / Math.max(skills.length, 1)) * 60));
}
