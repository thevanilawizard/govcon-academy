import { exercise, lesson, q } from "./content-helpers";
import type { SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-5" as const;

const lessons = [
  lesson(
    "sr5-l1-portfolio-mgmt",
    SKILL_ID,
    "Managing a Contract Portfolio",
    [
      {
        heading: "Organizing Multiple Contracts Efficiently",
        content:
          "Senior contracts administrators manage 8-15 active contracts across multiple clients simultaneously. Build a master tracking spreadsheet (see Skill 7 Template 1) with columns: Contract Number, Client Name, Agency, Contract Type, POP Start/End, Funded Value, Ceiling, Monthly Revenue, Next Deliverable Due, Option Exercise Date, CPARS Rating, Risk Level (R/Y/G), Status Notes. Sort by next deadline and risk level — contracts with near-term deadlines and red flags get attention first.",
      },
      {
        heading: "Prioritization and Time Management",
        content:
          "Priority matrix: (1) Red risk + deadline within 7 days = immediate action; (2) Yellow risk + deadline within 14 days = this week; (3) Green + deadline within 30 days = scheduled; (4) Everything else = monthly routine. Block calendar time: Monday AM for invoicing across portfolio, Tuesday for COR meetings, Wednesday for mod review, Thursday for file management, Friday for reporting and next-week planning. Never let one client consume all your time — set boundaries and communicate proactively.",
      },
      {
        heading: "Escalation and Client Communication",
        content:
          "Escalate to client leadership when: funding will run out within 30 days with no incremental funding visible; CPARS rating at risk due to performance issues; legal/compliance issue requiring executive decision (signing release of claims, data rights dispute); or subcontractor failure threatening prime deliverable. Handle independently: routine invoicing, standard mod processing, deliverable tracking, file management. Weekly status email to each client leadership team: contracts on track (green), items needing attention (yellow), items requiring decision (red).",
      },
    ],
    [
      q("sr5-l1-q1", "Portfolio prioritization should focus first on:", ["Lowest-value contracts", "Red risk contracts with near-term deadlines", "Contracts with best CPARS", "Newest contracts only"], 1, "Red risk + imminent deadlines demand immediate attention."),
      q("sr5-l1-q2", "A master tracking spreadsheet should include:", ["Only contract numbers", "Contract number, client, agency, type, POP, funding, deliverables, options, CPARS, and risk level", "Employee salaries only", "Marketing data"], 1, "Comprehensive tracking enables portfolio-level decision making."),
      q("sr5-l1-q3", "Escalate to client leadership when:", ["Routine invoice is submitted", "Funding will run out in 30 days with no incremental funding visible", "Deliverable is on track", "File is organized"], 1, "Funding exhaustion requires executive awareness and decision."),
      q("sr5-l1-q4", "Weekly client status emails should use:", ["No structure", "Green/yellow/red status for each contract", "Only positive news", "Verbal updates only"], 1, "Structured R/Y/G status gives leadership actionable portfolio visibility."),
      q("sr5-l1-q5", "Time management across clients requires:", ["Working on whichever client calls first", "Blocked calendar time for recurring portfolio tasks", "Ignoring smaller clients", "Working weekends only"], 1, "Calendar blocking ensures every contract gets scheduled attention."),
    ],
    {
      exercise: exercise(
        "portfolio-tracker",
        "Build a 6-Contract Portfolio Tracker",
        "Build a master tracking spreadsheet for this 6-contract portfolio. Identify which 2 contracts need immediate attention and explain why.",
        {
          contracts: [
            { id: "c1", number: "W912HQ-24-C-0042", client: "Alpha Defense", agency: "USACE", type: "FFP", popEnd: "2025-09-30", funded: 1200000, ceiling: 6000000, nextDeliverable: "2025-06-28", optionDate: "2025-08-01", cpars: "Exceptional", risk: "green" },
            { id: "c2", number: "HQ0034-23-D-0015", client: "Beta Systems", agency: "DoD CIO", type: "T&M", popEnd: "2025-07-15", funded: 890000, ceiling: 890000, nextDeliverable: "2025-06-25", optionDate: null, cpars: "Satisfactory", risk: "yellow" },
            { id: "c3", number: "75FCMC22D0045", client: "Gamma Tech", agency: "GSA", type: "CPFF", popEnd: "2026-03-31", funded: 450000, ceiling: 2100000, nextDeliverable: "2025-07-01", optionDate: "2026-01-15", cpars: "Very Good", risk: "green" },
            { id: "c4", number: "N0018924C0012", client: "Delta Solutions", agency: "NAVSEA", type: "FFP", popEnd: "2025-06-30", funded: 675000, ceiling: 675000, nextDeliverable: "2025-06-20", optionDate: null, cpars: "Marginal", risk: "red" },
            { id: "c5", number: "36C10X24C0023", client: "Epsilon Services", agency: "VA", type: "IDIQ", popEnd: "2027-12-31", funded: 3200000, ceiling: 15000000, nextDeliverable: "2025-07-15", optionDate: "2026-10-01", cpars: "Satisfactory", risk: "green" },
            { id: "c6", number: "W56HZV24C0089", client: "Zeta Corp", agency: "Army", type: "CPFF", popEnd: "2025-08-31", funded: 380000, ceiling: 1900000, nextDeliverable: "2025-06-30", optionDate: "2025-07-15", cpars: "Satisfactory", risk: "yellow" },
          ],
          immediateAttention: [
            { id: "c4", reason: "RED risk + POP expires 6/30 + deliverable due 6/20 + Marginal CPARS — closeout and performance recovery needed immediately." },
            { id: "c2", reason: "YELLOW risk + POP expires 7/15 + deliverable due 6/25 + fully funded with no options — transition/closeout planning needed within 3 weeks." },
          ],
        }
      ),
    }
  ),
  lesson(
    "sr5-l2-clm-systems",
    SKILL_ID,
    "CLM Systems (Contract Lifecycle Management)",
    [
      {
        heading: "What CLM Systems Are and Why Firms Use Them",
        content:
          "CLM systems centralize contract data, automate workflows (mod routing, approval chains, renewal alerts), and provide portfolio-level reporting. They replace scattered spreadsheets and email chains with a single source of truth. Mid-size GovCon firms (50-500 employees) typically adopt CLM when managing 20+ active contracts or when audit findings cite poor contract documentation.",
      },
      {
        heading: "Common CLM Tools in GovCon",
        content:
          "Cobblestone Contract Insight — popular with mid-size contractors, strong FAR clause library. Ironclad — modern UI, good for commercial and federal hybrid firms. DocuSign CLM — integrates e-signature with lifecycle management. MS SharePoint — basic but functional for small firms with disciplined file naming. Deltek Costpoint — integrated ERP with contract module for firms needing accounting integration. JAMIS Prime — small business focused with built-in DCAA compliance features. Selection criteria: integration with accounting system, FAR clause tracking, reporting capability, user count pricing, and implementation timeline.",
      },
      {
        heading: "What to Track and When Spreadsheets Suffice",
        content:
          "Track in any CLM (or spreadsheet): contract metadata, CLIN funding/expenditure, mod history, deliverable schedule, key dates (options, renewals, compliance), correspondence log, and risk flags. Spreadsheets are sufficient when: portfolio is under 10 contracts, team is co-located, and audit history is clean. Move to CLM when: portfolio exceeds 15 contracts, multiple administrators share workload, audit findings cite documentation gaps, or client requires CLM-based reporting.",
      },
    ],
    [
      q("sr5-l2-q1", "CLM systems primarily provide:", ["Marketing automation", "Centralized contract data, workflow automation, and portfolio reporting", "Employee scheduling", "Proposal writing"], 1, "CLM centralizes contract lifecycle data and automates admin workflows."),
      q("sr5-l2-q2", "Deltek Costpoint CLM integrates with:", ["Social media", "Accounting/ERP systems", "Only email", "Gaming platforms"], 1, "Costpoint provides integrated ERP and contract management for GovCon firms."),
      q("sr5-l2-q3", "Spreadsheets are sufficient when:", ["Portfolio exceeds 50 contracts", "Portfolio is under 10 contracts with co-located team", "DCAA audit found documentation gaps", "Multiple admins share workload"], 1, "Small portfolios with disciplined teams can manage with spreadsheets effectively."),
      q("sr5-l2-q4", "A trigger to adopt CLM is:", ["First contract award", "Portfolio exceeds 15 contracts or audit findings cite documentation gaps", "Employee birthday", "New office opening"], 1, "Scale and audit pressure drive CLM adoption decisions."),
      q("sr5-l2-q5", "JAMIS Prime is focused on:", ["Large defense primes only", "Small business GovCon with DCAA compliance features", "Commercial retail", "Entertainment industry"], 1, "JAMIS targets small business federal contractors with built-in compliance."),
    ]
  ),
];

export const SR_SKILL_5: SrAdminSkill = {
  id: SKILL_ID,
  number: 5,
  title: "Multi-Client Contract Portfolio Management",
  description: "Organize and prioritize multiple contracts across clients with CLM systems and master tracking.",
  lessons,
};
