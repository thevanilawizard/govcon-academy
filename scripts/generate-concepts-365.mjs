/**
 * Generates src/lib/learning/concepts-365.ts with 365 daily concepts.
 * Run: node scripts/generate-concepts-365.mjs
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const TOPICS = [
  "FAR definitions and clauses",
  "Pricing concepts",
  "Contract administration",
  "DFARS requirements",
  "Career tips",
  "Business development tactics",
];

const SEED = [
  { name: "Constructive Change", far: "FAR 52.243-1", explain: "Government action that effectively changes contract requirements without a formal modification.", example: "A COR directs weekly reports not listed in the PWS; you perform them and fall behind on funded deliverables." },
  { name: "Best Value", far: "FAR 1.102-2", explain: "Tradeoff source selection where the government may pay more for superior technical or past performance.", example: "A $50K higher offer wins because the incumbent had Marginal CPARS and the challenger showed Exceptional past performance." },
  { name: "Limitation on Subcontracting", far: "FAR 52.219-14", explain: "On small business set-asides, the prime must perform minimum percentages of work with its own employees.", example: "A services prime subcontracts 70% of labor on an SDVOSB set-aside — SBA may recommend termination." },
  { name: "Truth in Negotiations Act", far: "FAR 15.403", explain: "Requires certified cost or pricing data on non-competitive actions over $2M.", example: "Undisclosed vendor quote discovered post-award triggers defective pricing recovery plus interest." },
  { name: "CPARS", far: "FAR 42.1503", explain: "Official past performance record used in source selection for years after contract completion.", example: "One Marginal rating on a $400K contract depresses evaluation scores on a $2M recompete." },
  { name: "Organizational Conflict of Interest", far: "FAR 9.505", explain: "Unfair competitive advantage from prior work — biased ground rules, impaired objectivity, or unequal access.", example: "Your firm helped draft the PWS then bids on the follow-on without mitigation — protest risk." },
  { name: "Equitable Adjustment", far: "FAR 52.243-1", explain: "Contractor compensation for government-directed changes within general scope.", example: "KO adds three deliverables via mod; you price delta labor and ODCs in a bilateral SF-30." },
  { name: "Prompt Payment Act", far: "FAR 52.232-25", explain: "Government must pay proper invoices within 30 days or owe interest.", example: "Invoice approved day 45 triggers automatic interest accrual on the unpaid balance." },
  { name: "Commercial Item", far: "FAR 2.101", explain: "Products or services sold in substantial quantities in the commercial marketplace.", example: "COTS software licensed to the public qualifies for streamlined Part 12 procedures." },
  { name: "IDIQ Fair Opportunity", far: "FAR 16.505", explain: "Task orders over $3M on multiple-award IDIQs generally require fair opportunity among holders.", example: "Agency must document rationale before sole-sourcing a $5M task to one GWAC holder." },
];

function padConcepts() {
  const concepts = [];
  let day = 1;
  for (const s of SEED) {
    concepts.push({ day, ...s, category: TOPICS[day % TOPICS.length] });
    day++;
  }
  const templates = [
    (n) => ({ name: `FAR Part ${(n % 53) + 1} Policy`, far: `FAR Part ${(n % 53) + 1}`, explain: `Part ${(n % 53) + 1} governs a slice of the federal acquisition lifecycle — know it before your next interview or proposal.`, example: `Contracts staff cite Part ${(n % 53) + 1} when scoping compliance reviews on active programs.` }),
    (n) => ({ name: `Indirect Rate Element ${n}`, far: "FAR 31.203", explain: "Indirect costs must be accumulated in homogeneous pools and allocated on a beneficial-cause basis.", example: "Misallocating executive time to direct contracts inflates bill rates and triggers DCAA questioned costs." }),
    (n) => ({ name: `Source Selection Factor ${n}`, far: "FAR 15.305", explain: "Evaluation factors must discriminate among offerors and align with Section M of the solicitation.", example: "Evaluators document strengths and weaknesses before competitive range decisions." }),
    (n) => ({ name: `Set-Aside Strategy ${n}`, far: "FAR 19.502-2", explain: "Rule of two requires set-aside when two or more small businesses are expected to compete.", example: "Market research showing three qualified HUBZone firms supports a total HUBZone set-aside." }),
    (n) => ({ name: `Contract Type Risk ${n}`, far: "FAR Part 16", explain: "Contract type allocates performance, cost, and administrative risk between parties.", example: "FFP shifts cost risk to contractor; CPFF requires adequate accounting systems and audits." }),
    (n) => ({ name: `DFARS Requirement ${n}`, far: "DFARS 252.204-7012", explain: "Defense contracts add cybersecurity, export control, and cost accounting requirements beyond FAR.", example: "CUI incidents must be reported within 72 hours under DFARS 7012." }),
  ];
  while (concepts.length < 365) {
    const n = concepts.length;
    const t = templates[n % templates.length](n);
    concepts.push({ day: concepts.length + 1, ...t, category: TOPICS[n % TOPICS.length] });
  }
  return concepts;
}

const concepts = padConcepts();
const lines = concepts.map(
  (c) => `  {
    day: ${c.day},
    name: ${JSON.stringify(c.name)},
    explanation: ${JSON.stringify(c.explain)},
    example: ${JSON.stringify(c.example)},
    farClause: ${JSON.stringify(c.far)},
    category: ${JSON.stringify(c.category)},
    lessonId: ${JSON.stringify(c.lessonId ?? null)},
  }`
);

const out = `/** Auto-generated — 365 Concept of the Day entries. */
import type { DailyConcept } from "./types";

export const CONCEPTS_OF_THE_DAY: DailyConcept[] = [
${lines.join(",\n")}
];

export function getConceptForDay(dayOfYear: number): DailyConcept {
  const idx = ((dayOfYear - 1) % 365 + 365) % 365;
  return CONCEPTS_OF_THE_DAY[idx];
}
`;

writeFileSync(join(__dirname, "../src/lib/learning/concepts-365.ts"), out);
console.log("Generated", concepts.length, "concepts");
