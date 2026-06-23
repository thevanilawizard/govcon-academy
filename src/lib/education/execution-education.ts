
export const CPARS_SCALE = [
  { score: 5, label: "Exceptional", meaning: "Exceeded requirements with no weaknesses. Top 10% of contractors.", bidImpact: "+18% win probability modifier in this simulator." },
  { score: 4, label: "Very Good", meaning: "Met requirements with minor strengths. Solid performance.", bidImpact: "Strong past performance narrative — competitive on Best Value." },
  { score: 3, label: "Satisfactory", meaning: "Met requirements. Neutral — neither helps nor hurts significantly.", bidImpact: "Neutral CPARS — price and technical must carry the win." },
  { score: 2, label: "Marginal", meaning: "Failed to meet some requirements. Documented weaknesses.", bidImpact: "-10% modifier — evaluators question your ability to perform." },
  { score: 1, label: "Unsatisfactory", meaning: "Failed to meet requirements. May trigger cure notice or termination.", bidImpact: "-20% modifier — avoid bidding until you recover with strong sub references." },
];

export const EXECUTION_EDUCATION: Record<string, {
  title: string;
  what: string;
  far: string;
  coRights: string;
  action: string;
}> = {
  scope_creep: {
    title: "Scope Creep",
    what: "Scope creep is when the COR requests work outside the Performance Work Statement without a contract modification. It happens constantly — CORs often don't understand the funding boundary.",
    far: "FAR 52.243-1 (Changes) and FAR 43.103 require bilateral modifications before out-of-scope work. Performing work without a mod is voluntary and unrecoverable.",
    coRights: "The Contracting Officer can only obligate funds through a signed modification. A COR cannot authorize out-of-scope work — only the CO can.",
    action: "Respond: 'Happy to support — let's get a mod in place so you have funding coverage.' Never absorb scope to preserve a relationship.",
  },
  key_personnel: {
    title: "Key Personnel Clause",
    what: "Most service contracts designate Key Personnel in the proposal — named individuals the government relied on when evaluating your offer. Replacing them requires CO approval.",
    far: "FAR 52.237-2 (Key Personnel) — substitutions require written notice and CO approval. Unapproved substitutions can be a material breach.",
    coRights: "The government can reject replacements who don't meet qualification requirements. You have 30 days typically to propose an acceptable substitute.",
    action: "Maintain a bench of pre-cleared replacements. Notify the COR immediately and submit a substitution request package within 5 business days.",
  },
  option_year: {
    title: "Option Years",
    what: "Option years are unilateral rights the government holds to extend the contract at predetermined prices. They are NOT guaranteed — the CO decides whether to exercise based on performance and funding.",
    far: "FAR 17.207 — the CO considers contractor performance, funding availability, and agency need before exercising an option.",
    coRights: "Exercise is unilateral — you cannot force an option year. Non-exercise ends the contract; you have no claim for lost expected revenue.",
    action: "Target CPARS 4.0+ before each option decision point. Document performance monthly so the COR advocates for exercise.",
  },
  stop_work: {
    title: "Stop-Work Order",
    what: "A stop-work order halts performance immediately — usually during a dispute, funding gap, or protest. You cannot bill new work until lifted.",
    far: "FAR 52.242-15 — you may be entitled to equitable adjustment for costs incurred during the stop-work period if it was unjustified.",
    coRights: "The CO has authority to stop work. You must comply — continuing work after a stop-work is at your own risk.",
    action: "Document idle costs daily. Submit a REA under FAR 52.243-1 if the stop-work exceeds 30 days without resolution.",
  },
  cpars: {
    title: "CPARS Rating Assigned",
    what: "CPARS (Contractor Performance Assessment Reporting System) is the government's permanent record of your performance. Ratings follow you for 3 years on every future bid.",
    far: "FAR 42.1503 — agencies must evaluate contractor performance on applicable contracts. Ratings are shared across agencies via CPARS.",
    coRights: "You have the right to comment on and challenge CPARS ratings within 30 days of posting.",
    action: "Review every CPARS draft within 14 days. Challenge inaccuracies in writing — they affect every bid for 3 years.",
  },
};

export function getEventEducation(event: { title: string }): typeof EXECUTION_EDUCATION.scope_creep | null {
  const t = event.title.toLowerCase();
  if (t.includes("scope") || t.includes("mod")) return EXECUTION_EDUCATION.scope_creep;
  if (t.includes("key personnel") || t.includes("departure") || t.includes("analyst")) return EXECUTION_EDUCATION.key_personnel;
  if (t.includes("option year") || t.includes("exercised")) return EXECUTION_EDUCATION.option_year;
  if (t.includes("stop-work") || t.includes("stop work")) return EXECUTION_EDUCATION.stop_work;
  if (t.includes("cpars") || t.includes("performance")) return EXECUTION_EDUCATION.cpars;
  return null;
}

export function explainOptionYearExercise(exercised: boolean, cparsScore: number): string {
  if (exercised) {
    return `Option exercised at CPARS ${cparsScore.toFixed(1)}/5. Under FAR 17.207, the CO exercised because performance and funding supported continuation. ${cparsScore >= 4 ? "Exceptional/Very Good performance makes exercise highly likely (88% probability band)." : "Satisfactory performance — exercise was probable but not guaranteed."}`;
  }
  return `Option NOT exercised at CPARS ${cparsScore.toFixed(1)}/5. The agency had unilateral rights under FAR 17.207 but chose not to continue — usually due to funding, changing requirements, or performance concerns. Your CPARS on this contract still follows you for 3 years.`;
}
