import { exercise, lesson, q } from "./content-helpers";
import type { SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-4" as const;

const lessons = [
  lesson(
    "sr4-l1-risk-framework",
    SKILL_ID,
    "The Compliance Risk Framework — 6 Categories",
    [
      {
        heading: "1. Scope Risk",
        content:
          "Signs: vague PWS language ('as directed,' 'as needed'), unclear acceptance criteria, COR expanding scope verbally, PM agreeing to extra work without mod. Consequences: uncompensated work, schedule impact, CPARS downgrade if undelivered work was promised. Action: document every scope question in writing, submit contract modification request immediately when COR direction exceeds PWS, train PMs that verbal agreements are not contract changes.",
      },
      {
        heading: "2. Funding Risk",
        content:
          "Signs: incrementally funded contract, approaching limitation of funds threshold (75% per FAR 52.232-22), government slow to obligate option year funds, CLIN funding less than proposed value. Consequences: contractor must stop work when funding runs out — even if government wants continuation. Action: track funding weekly on cost-type contracts, send written notification at 75% threshold, escalate to KO 60 days before option funding needed.",
      },
      {
        heading: "3. Performance Risk",
        content:
          "Signs: schedule slippage on deliverables, key person departure without approved replacement, subcontractor missing milestones, technical problems affecting deliverable quality. Consequences: CPARS downgrade, cure notice from KO, potential termination for default under FAR 49. Action: notify government proactively with recovery plan — never hide problems. Document mitigation steps and revised schedule.",
      },
      {
        heading: "4. Subcontractor Risk",
        content:
          "Signs: sub missing deliverables, sub financial distress (late payroll, vendor complaints), sub attempting direct communication with government, sub violating flow-down clauses (cyber, EEO, safety). Consequences: prime is fully responsible for sub performance — prime CPARS reflects sub failures. Action: monthly sub performance reviews, written cure notices with specific deadlines, maintain backup sub identification for critical work.",
      },
      {
        heading: "5. Compliance Risk (Regulatory)",
        content:
          "Signs: CMMC requirement changes, new DFARS clauses in mods, SAM.gov registration expiring within 60 days, small business recertification needed, VETS-4212 reporting due, TINA threshold changes. Consequences: contract termination, suspension, debarment for serious violations (False Claims Act, Buy American violations). Action: compliance calendar with automated reminders, quarterly regulatory review of new FAR/DFARS updates, assign compliance owner for each requirement.",
      },
      {
        heading: "6. Financial Risk",
        content:
          "Signs: contract underfunded relative to scope, billing rates not matching proposal rates, unallowable costs being charged (entertainment, lobbying), invoice disputes with COR, indirect rate volatility. Consequences: DCAA disallowances, interest on unallowable costs, potential fraud allegations for intentional mischarging. Action: monthly cost review with finance, verify rates match contract/pricing, maintain DCAA-ready accounting with proper segregation.",
      },
    ],
    [
      q("sr4-l1-q1", "Scope risk is indicated by:", ["Clear PWS with measurable criteria", "Vague PWS language and verbal COR direction beyond PWS", "Fully funded contract", "Strong CPARS rating"], 1, "Vague scope and undocumented direction are primary scope risk indicators."),
      q("sr4-l1-q2", "FAR 52.232-22 limitation of funds notification is at:", ["25%", "50%", "75%", "100%"], 2, "Contractors must notify when approximately 75% of allotted funds are expended."),
      q("sr4-l1-q3", "When performance problems arise, you should:", ["Hide them until the KO discovers them", "Notify government proactively with a recovery plan", "Terminate the contract", "Blame the subcontractor publicly"], 1, "Proactive notification with recovery plans demonstrates management and protects CPARS."),
      q("sr4-l1-q4", "Prime contractor responsibility for sub performance means:", ["Prime CPARS is unaffected by sub failures", "Prime CPARS reflects sub performance failures", "Subs are independently rated", "Prime can ignore sub issues"], 1, "Prime is fully responsible — sub failures appear on prime CPARS."),
      q("sr4-l1-q5", "Financial risk from unallowable costs can lead to:", ["Higher profit", "DCAA disallowances and potential fraud allegations", "Automatic contract extension", "Better CPARS"], 1, "Unallowable costs trigger DCAA findings and potential False Claims Act exposure."),
    ],
    {
      exercise: exercise(
        "risk-assessment",
        "8-Scenario Risk Assessment",
        "For each scenario, identify the risk category, assign severity (Red/Yellow/Green), and recommend action. Martin Business reviews your assessments.",
        {
          scenarios: [
            { id: "rs-1", text: "COR emails PM: 'Start work on the new database migration — I know it's not in the PWS but we need it done by Friday.'", category: "scope", severity: "red", action: "Document COR direction; advise PM to hold work; route mod request through KO." },
            { id: "rs-2", text: "Cost-type contract has expended $740K of $1M funded CLIN — no incremental funding on horizon.", category: "funding", severity: "red", action: "Send FAR 52.232-22 notification immediately; escalate to KO for incremental funding." },
            { id: "rs-3", text: "Key personnel Program Manager gave 2-week notice; replacement needs 6 weeks for clearance crossover.", category: "performance", severity: "yellow", action: "Submit key personnel change request to KO; propose interim PM; notify COR of transition plan." },
            { id: "rs-4", text: "Subcontractor Apex Systems missed third consecutive deliverable and stopped responding to emails.", category: "subcontractor", severity: "red", action: "Issue written cure notice; activate backup sub; notify KO if prime deliverable at risk." },
            { id: "rs-5", text: "SAM.gov registration expires in 45 days; company has 3 active contracts.", category: "compliance", severity: "red", action: "Renew SAM immediately; verify reps/certs updated; alert all contract KOs if delay expected." },
            { id: "rs-6", text: "Finance reports billing rate of $142/hr but contract authorizes $138/hr on T&M CLIN.", category: "financial", severity: "yellow", action: "Stop billing at $142; correct to $138; review all prior invoices for overbilling; notify KO if material." },
            { id: "rs-7", text: "New DFARS 252.204-7021 CMMC requirement added via mod with 90-day compliance deadline.", category: "compliance", severity: "yellow", action: "Assess current CMMC status; develop implementation plan; request deadline extension if needed." },
            { id: "rs-8", text: "Option exercise window opens in 55 days; CPARS last rated 'Satisfactory' with no recent COR feedback.", category: "performance", severity: "yellow", action: "Schedule COR meeting; provide performance summary; proactively support option exercise decision." },
          ],
        }
      ),
    }
  ),
];

export const SR_SKILL_4: SrAdminSkill = {
  id: SKILL_ID,
  number: 4,
  title: "Compliance Risk Flagging",
  description: "Identify and flag contract compliance risks across 6 categories before they become problems.",
  lessons,
};
