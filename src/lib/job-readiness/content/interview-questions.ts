import type { InterviewQuestion } from "../types";

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // Technical 1-20
  {
    id: "iq-01",
    category: "technical",
    question: "Walk me through the contract administration lifecycle from award to closeout.",
    keyPoints: [
      "Award receipt and kickoff",
      "Day-to-day admin: mods, invoicing, performance monitoring",
      "Change management and REAs/claims",
      "Subcontract administration",
      "Closeout requirements: final invoice, property, classified material, release of claims",
    ],
    modelAnswer:
      "From award, I establish the contract file per FAR 4.802, conduct an internal kickoff covering scope, CLINs, key clauses, and security requirements, and load the contract into our accounting system. During performance, I manage modifications, WAWF invoicing, COR correspondence, subcontract flow-downs, and EVM or status reporting. When changes occur, I evaluate whether they're within scope under the Changes clause or require an REA. I monitor funding burn rate on cost-type contracts and issue limitation of funds notices when appropriate. For closeout, I ensure all deliverables are accepted, final invoice submitted, release of claims executed, property and classified material accounted for, and the file is complete for audit — typically within the timeframe specified in FAR 4.804.",
    commonMistakes: [
      "Skipping kickoff or file setup",
      "Forgetting subcontract administration in the lifecycle",
      "Omitting closeout steps like release of claims",
      "Not mentioning compliance or audit readiness",
    ],
    followUps: [
      "What documents must be in the file at closeout?",
      "How do you handle an open REA at closeout?",
      "What's your process for a contract novation?",
    ],
  },
  {
    id: "iq-02",
    category: "technical",
    question: "What is the difference between a unilateral and bilateral contract modification?",
    keyPoints: [
      "Unilateral: KO alone, within scope changes, admin changes, option exercise",
      "Bilateral: both parties sign — out of scope, mutual agreement, equitable adjustments",
      "SF 30 format",
      "Risk of performing without proper mod type",
    ],
    modelAnswer:
      "A unilateral modification is issued by the Contracting Officer alone, typically for changes within the general scope under the Changes clause, exercise of options, or administrative updates like address changes. A bilateral modification requires both parties' signatures and is used when we're agreeing to terms outside unilateral authority — such as out-of-scope work, negotiated equitable adjustments, or mutual schedule changes. I always verify which type is appropriate before directing work; performing out-of-scope work based on a unilateral mod exposes the company to non-recovery risk.",
    commonMistakes: [
      "Saying CORs can issue either type",
      "Not connecting to Changes clause scope limits",
      "Ignoring SF 30 requirements",
    ],
    followUps: [
      "Can a unilateral mod increase contract price for out-of-scope work?",
      "What happens if you perform before the bilateral is signed?",
    ],
  },
  {
    id: "iq-03",
    category: "technical",
    question: "Explain the changes clause and how you would handle a constructive change.",
    keyPoints: [
      "FAR 52.243-1/2 authority and scope limits",
      "Constructive change examples: COR direction, defective specs, acceleration",
      "Document, notify, REA submission",
      "No performance without understanding entitlement",
    ],
    modelAnswer:
      "The Changes clause — 52.243-1 for fixed-price or 52.243-2 for cost-reimbursement — authorizes the KO to make unilateral changes within the general scope of the contract. A constructive change occurs when government actions effectively alter requirements without a formal mod — for example, a COR directing deliverables not in the PWS, or changed government-furnished equipment that breaks our design. I document the direction in writing, advise the PM to stop out-of-scope work, quantify cost and schedule impact, and submit an REA within a reasonable time with supporting correspondence, a delta estimate, and a request for bilateral mod. I track the six-year claims statute if the REA is denied.",
    commonMistakes: [
      "Performing additional work without documentation",
      "Confusing constructive change with formal mod",
      "Missing REA timeline and statute of limitations",
    ],
    followUps: [
      "What's the difference between an REA and a claim?",
      "How do you price a constructive change on FFP vs CPFF?",
    ],
  },
  {
    id: "iq-04",
    category: "technical",
    question: "What are the limitations on subcontracting under FAR 52.219-14?",
    keyPoints: [
      "Prime must perform minimum percentages by set-aside type",
      "50% for services (excluding cost of materials)",
      "Prohibition on pass-through arrangements",
      "Reporting and compliance monitoring",
    ],
    modelAnswer:
      "FAR 52.219-14 limits how much work a prime can subcontract on set-aside contracts. For services, the prime must perform at least 50% of the cost of contract performance — excluding cost of materials — with its own employees. Similar thresholds apply to construction and other set-asides. Pass-through arrangements where the prime adds no value violate the clause and can result in false claims, termination, and debarment. I monitor work share monthly, ensure our labor charges reflect prime performance, and document compliance for the KO and small business administration reviews.",
    commonMistakes: [
      "Quoting wrong percentages",
      "Not excluding cost of materials from calculation",
      "Ignoring pass-through prohibition",
    ],
    followUps: [
      "How does this apply to an SDVOSB set-aside?",
      "What if a key sub fails — can you replace them without violating limits?",
    ],
  },
  {
    id: "iq-05",
    category: "technical",
    question: "How do you determine if a cost is allowable under FAR Part 31?",
    keyPoints: [
      "Must be reasonable, allocable, and conform to CAS if applicable",
      "Subject to specific prohibitions in 31.205",
      "Contract terms may further restrict",
      "Documentation requirements",
    ],
    modelAnswer:
      "Under FAR Part 31, a cost must be reasonable, allocable to the contract, and consistently treated in accordance with GAAP and CAS if applicable. I check whether the specific cost type is addressed in 31.205 — for example, entertainment is unallowable, while certain training costs are allowable with limits. I also review contract-specific terms that may be more restrictive than the FAR. For allocability, I trace the charge to the benefiting contract via timesheets and job cost ledger entries. If DCAA questions a cost, I respond with the regulatory citation and supporting documentation showing reasonableness and allocability.",
    commonMistakes: [
      "Saying all business expenses are allowable",
      "Not mentioning allocability",
      "Forgetting contract-specific restrictions",
    ],
    followUps: [
      "Is executive compensation always allowable?",
      "How do you handle unallowable costs in your accounting system?",
    ],
  },
  {
    id: "iq-06",
    category: "technical",
    question: "What is an equitable adjustment and how do you calculate one?",
    keyPoints: [
      "Compensates for government-directed change impact",
      "Delta cost method: cost of changed work minus deleted work",
      "Schedule impact if applicable",
      "Fee treatment by contract type",
    ],
    modelAnswer:
      "An equitable adjustment compensates the contractor for increased or decreased costs and time resulting from a government-directed change. I calculate using the delta method: estimate the cost of performing the changed work at current rates, subtract any deleted work, and add schedule impact costs if the change affects the critical path. On fixed-price contracts, fee is typically embedded in the price; on cost-type, fee applies only to allowable changed costs per the contract. I support the calculation with a before-and-after WBS, labor hours, material quotes, and correspondence documenting the change. The REA packages this for negotiation into a bilateral mod.",
    commonMistakes: [
      "Including profit on cost-type changes incorrectly",
      "Not documenting deleted work credits",
      "Using outdated rates",
    ],
    followUps: [
      "How do you handle concurrent delays?",
      "What's the difference between forward pricing and retrospective REA?",
    ],
  },
  {
    id: "iq-07",
    category: "technical",
    question: "Explain the difference between LPTA and Best Value evaluation.",
    keyPoints: [
      "LPTA: lowest priced technically acceptable",
      "Best Value: trade-off among factors per Section M",
      "Cost realism on cost-type",
      "Proposal strategy differences",
    ],
    modelAnswer:
      "LPTA selects the lowest-priced offer that meets all technical acceptability thresholds — price is the primary discriminator once you're acceptable. Best Value allows the government to trade off price against non-price factors like technical approach, past performance, and management per the Section M stated order of importance. On Best Value, a higher-priced offer can win if it provides superior value. On cost-type Best Value, evaluators also perform cost realism and may adjust to Most Probable Cost. As a contracts professional supporting proposals, I ensure the cost volume aligns with the technical approach and that we don't underprice on cost-type procurements where realism adjustments hurt our evaluated score.",
    commonMistakes: [
      "Saying Best Value always means lowest price wins",
      "Ignoring cost realism",
      "Not referencing Section M",
    ],
    followUps: [
      "When is LPTA appropriate per FAR 15.101-2?",
      "How would you advise a PM on a Best Value recompete?",
    ],
  },
  {
    id: "iq-08",
    category: "technical",
    question: "What is the Prompt Payment Act and what happens if the government pays late?",
    keyPoints: [
      "30-day payment requirement for proper invoices",
      "Interest penalty on late payment",
      "Valid acceptance required to start clock",
      "Contractor responsibility to submit proper invoices",
    ],
    modelAnswer:
      "The Prompt Payment Act (31 U.S.C. 3903) requires the government to pay proper invoices within 30 days of receipt or acceptance, whichever is later. If payment is late, the contractor is entitled to interest penalties calculated per the Treasury rate. However, the invoice must be proper — correct CLIN, acceptance documented, no WAWF rejections. I track acceptance dates in our invoice log and follow up at day 25. If we hit day 31, I notify accounts receivable to calculate interest and submit a request. Chronic late payment on a contract may signal funding or COR acceptance issues worth escalating to the KO.",
    commonMistakes: [
      "Thinking the clock starts on invoice submission regardless of acceptance",
      "Not knowing interest is available",
      "Blaming government for improper invoices",
    ],
    followUps: [
      "How does WAWF rejection affect the payment clock?",
      "What's the difference between interest and a claim?",
    ],
  },
  {
    id: "iq-09",
    category: "technical",
    question: "How do you handle a situation where your COR is directing work outside the scope of the contract?",
    keyPoints: [
      "COR has no bind authority",
      "Document direction, stop out-of-scope work",
      "Notify KO, submit REA",
      "Protect company from unauthorized performance",
    ],
    modelAnswer:
      "I treat COR direction outside the PWS as a potential constructive change, not as binding order authority. I immediately document the direction in email, copying the KO, and advise the PM not to perform the additional work until we have a bilateral mod or REA acknowledgment. I analyze the PWS scope boundary, quantify impact, and submit an REA citing the COR correspondence. If the PM already started work, I preserve all costs separately in the job cost ledger for recovery. This protects the company from absorbing scope creep while maintaining a constructive relationship with the customer — I'm solving the problem, not blocking the mission.",
    commonMistakes: [
      "Telling the COR they have no authority in confrontational terms without solution",
      "Allowing work to continue without documentation",
      "Not involving the KO",
    ],
    followUps: [
      "What if the PM already promised the customer delivery?",
      "How do you handle a COR who insists it's in scope?",
    ],
  },
  {
    id: "iq-10",
    category: "technical",
    question: "What is a cure notice and when would you issue one?",
    keyPoints: [
      "Formal notice of deficiency with cure period",
      "Used before termination for default",
      "Must specify failures and required corrective action",
      "Document factual performance record",
    ],
    modelAnswer:
      "A cure notice is a formal letter notifying a contractor or subcontractor of specific performance deficiencies and providing a defined period — often 10 to 30 days — to cure before the government or prime proceeds toward termination for default. I issue one when performance failures are documented, prior informal efforts failed, and the contract requires a cure notice before default termination. The notice cites the contract requirement, describes the deficiency factually, states the cure deadline, and explains consequences of failure to cure. I avoid inflammatory language and stick to deliverable records, EVM data, and acceptance rejections as evidence.",
    commonMistakes: [
      "Confusing with letter of concern",
      "Vague deficiency descriptions",
      "Skipping prior documentation trail",
    ],
    followUps: [
      "What's the difference between cure notice and show cause?",
      "Have you ever issued one to a subcontractor?",
    ],
  },
  {
    id: "iq-11",
    category: "technical",
    question: "Explain the difference between a claim and an REA.",
    keyPoints: [
      "REA: request for adjustment before dispute",
      "Claim: formal dispute under CDA",
      "Certification requirements for claims over threshold",
      "Six-year statute",
    ],
    modelAnswer:
      "An REA is the contractor's request for an equitable adjustment when the government has directed a change or a constructive change has occurred — it's the opening negotiation position. If the KO denies the REA or fails to respond within a reasonable time, the contractor may submit a claim under the Contract Disputes Act via FAR 52.233-1. Claims over $100,000 require certification under 33.207 that the claim is made in good faith and the supporting data is accurate. REAs are less formal but should still be thorough. I always calendar the six-year statute of limitations from when the claim accrues.",
    commonMistakes: [
      "Using terms interchangeably",
      "Missing certification threshold",
      "Not mentioning CDA process",
    ],
    followUps: [
      "What forum handles claims — CO, board, or court?",
      "When does the clock start on the statute of limitations?",
    ],
  },
  {
    id: "iq-12",
    category: "technical",
    question: "What is privity of contract and why does it matter?",
    keyPoints: [
      "Direct contractual relationship",
      "Government-sub lack privity",
      "Prime liable to government for sub performance",
      "Pass-through claims concept",
    ],
    modelAnswer:
      "Privity of contract means a direct contractual relationship between two parties. The government and prime have privity; the government and subcontractor generally do not. This matters because subs cannot directly sue the government for payment or performance disputes — claims flow through the prime. The prime remains fully liable to the government for sub performance, which is why flow-down clauses, consent, and oversight are critical. In some cases, pass-through claims allow a sub's claim to be prosecuted by the prime for the sub's benefit, but strict procedural requirements apply.",
    commonMistakes: [
      "Thinking COR can direct sub directly for binding changes",
      "Not explaining prime's liability",
      "Ignoring pass-through claims entirely",
    ],
    followUps: [
      "Can a sub invoke the disputes clause directly against the government?",
      "How do you structure a pass-through claim?",
    ],
  },
  {
    id: "iq-13",
    category: "technical",
    question: "How do you manage a subcontractor who is behind schedule?",
    keyPoints: [
      "Document performance, root cause analysis",
      "Recovery plan requirement",
      "Cure notice if contractually appropriate",
      "Backup plans and government notification",
    ],
    modelAnswer:
      "First I verify the delay against the subcontract schedule and deliverable register — facts, not anecdotes. I meet with the sub to understand root cause and require a recovery plan with milestones within 48–72 hours. I increase oversight frequency — weekly status, earned value if applicable. If the sub misses recovery milestones, I issue a formal cure notice per the subcontract terms. Concurrently, I assess backup options: reallocation of work, alternate vendor, or prime absorption. I notify the government proactively if the prime milestone is at risk — customers hate surprises. All correspondence goes in the contract file.",
    commonMistakes: [
      "Waiting until government milestone is missed",
      "No documentation trail",
      "Immediate termination threat without cure process",
    ],
    followUps: [
      "When would you terminate a sub for default?",
      "How do you handle liquidated damages risk?",
    ],
  },
  {
    id: "iq-14",
    category: "technical",
    question: "What is CPARS and how does it affect future contract awards?",
    keyPoints: [
      "Contractor Performance Assessment Reporting System",
      "Past performance ratings by evaluator",
      "Contractor comment rights",
      "Impact on source selection",
    ],
    modelAnswer:
      "CPARS is the government's system for documenting contractor past performance on cost, schedule, quality, management, and regulatory compliance. Ratings range from Exceptional to Unsatisfactory. These ratings are referenced in future source selections — past performance is often a significant evaluation factor. I review CPARS evaluations within the comment period, provide factual rebuttals where ratings are unsupported, and ensure our PMs maintain documentation that supports strong ratings throughout performance. A pattern of Marginal or Unsatisfactory ratings can effectively exclude a contractor from winning new work.",
    commonMistakes: [
      "Not knowing contractor can comment",
      "Underestimating past performance weight in evaluations",
      "Ignoring CPARS until end of contract",
    ],
    followUps: [
      "How do you write an effective CPARS rebuttal?",
      "What if the COR rates you unfairly?",
    ],
  },
  {
    id: "iq-15",
    category: "technical",
    question: "Explain the difference between an IDIQ and a BPA.",
    keyPoints: [
      "IDIQ: definite task/delivery orders against broad scope",
      "BPA: simplified ordering against GSA schedule or existing contract",
      "Ceiling and funding mechanics differ",
      "Competition requirements for orders",
    ],
    modelAnswer:
      "An IDIQ contract establishes terms, labor categories, and a ceiling for an indefinite quantity of work — individual task orders define specific scope, price, and POP. A Blanket Purchase Agreement is a simplified ordering method, often against a GSA schedule or existing contract, for recurring needs without issuing a full contract each time. IDIQs typically involve FAR 16.504 competition rules for orders above thresholds. BPAs streamline ordering with agreed terms but have their own competition requirements under 8.405 for schedule BPAs. As contracts manager, I track IDIQ ceiling burn rates and ensure each order has proper funding before work starts.",
    commonMistakes: [
      "Treating them as identical",
      "Not mentioning order competition rules",
      "Confusing ceiling with funded value",
    ],
    followUps: [
      "When is fair opportunity required for an IDIQ order?",
      "How do you administer a BPA call?",
    ],
  },
  {
    id: "iq-16",
    category: "technical",
    question: "What costs are unallowable under FAR 31.205?",
    keyPoints: [
      "Specific prohibitions: entertainment, fines, lobbying, alcohol",
      "Bad debt, contingencies, contributions",
      "Must have compliant accounting system treatment",
      "Some costs have dollar limits",
    ],
    modelAnswer:
      "FAR 31.205 lists specifically unallowable costs including entertainment, amusement, alcohol, fines and penalties, lobbying, bad debts, contingencies, and certain executive compensation above benchmarks. Some costs are allowable with limits — like recruitment or training. Our accounting system must identify and exclude unallowables from billings on government contracts. I work with finance to ensure unallowables are in a separate general ledger pool and never charged to government contracts. DCAA routinely questions unallowable costs during incurred cost audits.",
    commonMistakes: [
      "Giving incomplete examples",
      "Not mentioning accounting system treatment",
      "Saying travel is always unallowable",
    ],
    followUps: [
      "Is interest expense allowable?",
      "What about company picnics and morale events?",
    ],
  },
  {
    id: "iq-17",
    category: "technical",
    question: "How do you price a Time & Materials contract?",
    keyPoints: [
      "Labor rates by category with fixed hourly rates",
      "Materials at cost plus handling if permitted",
      "Ceiling price or NTE limits",
      "Hours control and monitoring",
    ],
    modelAnswer:
      "T&M pricing establishes fixed hourly rates for each labor category — typically including wages, fringe, overhead, and G&A — plus materials at cost, optionally with a material handling charge if the contract permits. I build rates from our forward pricing rate proposal and ensure they match proposed labor qualifications. T&M contracts should include a ceiling or not-to-exceed amount to cap government liability. I monitor hours monthly against ceiling and notify the KO before approaching limits. Because T&M is least preferred type (FAR 16.601), I document why T&M is necessary when supporting proposal development.",
    commonMistakes: [
      "Not mentioning ceiling/NTE",
      "Including fee incorrectly in T&M rates",
      "No monitoring plan",
    ],
    followUps: [
      "Why is T&M considered high risk for the government?",
      "How do indirect rates apply in T&M rate buildup?",
    ],
  },
  {
    id: "iq-18",
    category: "technical",
    question: "What is the Truth in Negotiations Act and when does it apply?",
    keyPoints: [
      "FAR 15.403 certified cost or pricing data",
      "Threshold generally $2M for cost analysis",
      "Data must be accurate, complete, current as of agreement",
      "Defective pricing consequences",
    ],
    modelAnswer:
      "TINA, implemented in FAR 15.403, requires offerors to submit certified cost or pricing data when negotiating contracts, mods, or subcontracts above the threshold — currently $2 million — unless an exception applies such as adequate price competition or commercial item acquisition. The certification states data is accurate, complete, and current as of the date of agreement. If defective pricing is discovered — meaning data was not accurate, complete, and current — the government may reduce the price. I ensure our proposals and sub certifications are reviewed by finance and that we update data when costs change before agreement.",
    commonMistakes: [
      "Wrong threshold",
      "Not mentioning exceptions",
      "Confusing with price reasonableness",
    ],
    followUps: [
      "What are the TINA exceptions?",
      "How does defective pricing affect subcontractors?",
    ],
  },
  {
    id: "iq-19",
    category: "technical",
    question: "Explain what happens during contract closeout.",
    keyPoints: [
      "FAR Part 4.804 closeout procedures",
      "Final invoice and settlement",
      "Release of claims (SF 30 or equivalent)",
      "Property, classified material, patents",
      "Timeliness — 36-month goal",
    ],
    modelAnswer:
      "Closeout begins when physical performance is complete. I verify all deliverables are accepted, submit the final invoice, reconcile all mods and funding, and ensure subcontractor closeout is complete. The contractor and government execute a release of claims — the contractor releases unasserted claims and the government confirms no outstanding obligations. I account for government property, classified materials, and patent rights. FAR encourages closeout within 36 months of completion. For cost-type contracts, I support final rate adjustments and incurred cost submission reconciliation. Incomplete closeout creates audit findings and blocks KO closeout metrics.",
    commonMistakes: [
      "Thinking closeout is just final invoice",
      "Forgetting release of claims",
      "Ignoring subcontractor closeout",
    ],
    followUps: [
      "What if there's an open claim at closeout?",
      "How do you close out a term-for-convenience contract?",
    ],
  },
  {
    id: "iq-20",
    category: "technical",
    question: "What is a termination for convenience and how do you handle it?",
    keyPoints: [
      "Government right under FAR 52.249-2",
      "Stop work direction",
      "Termination settlement proposal",
      "Allowable costs: work performed, settlement expenses, reasonable profit on work done",
    ],
    modelAnswer:
      "Termination for convenience (T4C) is the government's right to end performance when it's in the government's interest — not due to contractor fault. Upon receiving the notice, I issue stop-work instructions to the team and subs, preserve records, and inventory materials and property. I develop a termination settlement proposal per FAR 49 documenting costs incurred, costs committed, settlement expenses, and reasonable profit on work performed. I negotiate with the KO for fair settlement. Subcontractors flow down T4C clauses so we recover sub settlement costs. Unlike default termination, T4C preserves the contractor's reputation and CPARS.",
    commonMistakes: [
      "Confusing with termination for default",
      "Continuing work after notice",
      "Not including subcontractor settlement costs",
    ],
    followUps: [
      "What costs are not allowable in a T4C settlement?",
      "How quickly must you submit the settlement proposal?",
    ],
  },
  // Behavioral 21-25
  {
    id: "iq-21",
    category: "behavioral",
    question: "Tell me about a time you identified a contract compliance issue and how you resolved it.",
    keyPoints: [
      "STAR method: Situation, Task, Action, Result",
      "Specific compliance issue (flow-down, LOF, TINA, etc.)",
      "Cross-functional coordination",
      "Measurable outcome",
    ],
    modelAnswer:
      "Situation: On a cost-plus Army contract, I discovered during a file review that we'd awarded a $900K subcontract without required CO consent under FAR 52.244-2. Task: I needed to cure the compliance gap before DCAA's upcoming audit. Action: I immediately halted sub performance billing, prepared a consent package with price analysis and flow-down matrix, and submitted it to the KO within 5 days. I briefed the PM on the delay risk and worked with the sub to maintain schedule while we waited. Result: CO granted consent retroactively with no disallowed costs. I implemented a consent checklist in our purchasing system that prevented recurrence — zero consent findings in the subsequent CPSR.",
    commonMistakes: [
      "Vague story without specifics",
      "Taking all credit without team mention",
      "No measurable result",
      "Choosing a trivial issue",
    ],
    followUps: [
      "What would you do if consent was denied?",
      "How did you communicate this to leadership?",
    ],
  },
  {
    id: "iq-22",
    category: "behavioral",
    question: "Describe a difficult negotiation you conducted and how you reached agreement.",
    keyPoints: [
      "Clear negotiation stakes",
      "Preparation: BATNA, targets, documentation",
      "Professional tone under pressure",
      "Win-win or documented impasse",
    ],
    modelAnswer:
      "Situation: A critical software sub held us hostage on a 15% rate increase mid-contract on a fixed-price prime — we faced a $180K overrun. Task: Renegotiate without delaying a government milestone 30 days out. Action: I prepared our BATNA — a qualified alternate vendor quote at 8% higher than original but below the sub's demand. I documented the sub's original proposal analysis and opened with data, not emotion. I offered a phased rate adjustment tied to deliverable milestones and restored audit rights they'd tried to remove. Result: Agreement at 7% increase with milestone tie-in, saving $95K vs. their demand and preserving the relationship for future work.",
    commonMistakes: [
      "Aggressive 'winner takes all' narrative",
      "No preparation details",
      "Badmouthing the other party",
    ],
    followUps: [
      "What was your walk-away point?",
      "How did you document the agreement?",
    ],
  },
  {
    id: "iq-23",
    category: "behavioral",
    question: "Tell me about a time a contract went off the rails and what you did.",
    keyPoints: [
      "Early identification",
      "Transparency with customer",
      "Recovery actions",
      "Lessons learned",
    ],
    modelAnswer:
      "Situation: Month 6 of a CPFF contract, EVM showed CPI at 0.78 — we'd burn 85% of funding at 50% completion due to scope creep from undocumented COR requests. Task: Stabilize performance and recover costs without destroying customer trust. Action: I halted undocumented work, compiled a constructive change file with 14 COR emails, submitted a $1.2M REA, and briefed the KO with a recovery plan. Internally, I re-baselined the schedule and added weekly EVM reviews. Result: KO negotiated a $940K bilateral mod within 60 days. CPI recovered to 0.96 by month 10. We earned a Satisfactory CPARS on management responsiveness despite the early overrun.",
    commonMistakes: [
      "Blaming only the customer or PM",
      "No metrics or timeline",
      "Not showing proactive communication",
    ],
    followUps: [
      "What would you do differently?",
      "How did you manage executive expectations?",
    ],
  },
  {
    id: "iq-24",
    category: "behavioral",
    question: "Describe how you managed competing priorities across multiple contracts.",
    keyPoints: [
      "Prioritization framework",
      "Risk-based triage",
      "Communication with stakeholders",
      "Tools and tracking",
    ],
    modelAnswer:
      "Situation: I simultaneously managed 8 contracts including 2 proposal deadlines, a DCAA audit response, and a cure notice on a sub. Task: Prioritize without dropping compliance deadlines. Action: I maintained a risk-ranked dashboard — legal/regulatory deadlines first (DCAA response due in 10 days), then customer-facing milestones, then internal proposals. I delegated file organization to a specialist, blocked 2 hours daily for audit response, and escalated the cure notice to our VP for sub negotiation support. I sent weekly priority summaries to my director. Result: DCAA response on time with zero findings, cure notice resolved within period, both proposals submitted — no missed invoice or mod deadlines across the portfolio.",
    commonMistakes: [
      "Claiming you do everything yourself",
      "No prioritization logic",
      "Multitasking without system",
    ],
    followUps: [
      "How many contracts do you think you can effectively manage?",
      "What do you drop first when overwhelmed?",
    ],
  },
  {
    id: "iq-25",
    category: "behavioral",
    question: "Tell me about a time you had to push back on a program manager or customer request.",
    keyPoints: [
      "Professional pushback with alternative",
      "Contract/regulatory basis",
      "Relationship preservation",
      "Outcome",
    ],
    modelAnswer:
      "Situation: Our PM committed to deliver a new analytics module in 3 weeks — not in the PWS and no mod funding. Task: Stop unauthorized performance without blocking the customer relationship. Action: I met with the PM privately first, then joined a call with the COR and KO. I explained the PWS scope boundary, cited the Changes clause, and presented a rough order magnitude of $85K and 6-week schedule. I offered to start REA drafting immediately if the COR confirmed requirement. Result: KO issued a bilateral mod within 10 days for $79K. PM learned to loop contracts in before customer commitments. COR appreciated the transparency.",
    commonMistakes: [
      "Framing as 'I said no' without solution",
      "Being confrontational with customer",
      "Capitulating and creating company loss",
    ],
    followUps: [
      "How do you build trust with PMs who see contracts as blockers?",
      "What if leadership overrides your recommendation?",
    ],
  },
  // Scenario 26-30
  {
    id: "iq-26",
    category: "scenario",
    question: "Your PM just verbally agreed to additional work with the COR. What do you do?",
    keyPoints: [
      "Stop unauthorized work",
      "Document and notify KO",
      "REA/mod path",
      "Coach PM on authority",
    ],
    modelAnswer:
      "Same day, I email the PM, COR, and KO documenting what was discussed and stating that performance cannot proceed without contract modification. I advise the PM to pause staffing and procurement for the new work. I analyze scope against the PWS, prepare a ROM estimate, and draft an REA within 48 hours. I schedule a 15-minute internal briefing for the PM on COR vs. KO authority and add a gate to our proposal/commitment checklist. The goal is to convert the verbal agreement into a funded bilateral mod while protecting the company from uncompensated work.",
    commonMistakes: [
      "Starting work to keep customer happy",
      "Publicly embarrassing the PM",
      "Waiting weeks to raise the issue",
    ],
    followUps: [
      "What if work already started?",
      "What if the COR says the PM's verbal agreement is binding?",
    ],
  },
  {
    id: "iq-27",
    category: "scenario",
    question: "DCAA shows up unannounced requesting access to your records. What is your first call?",
    keyPoints: [
      "Notify contracts leadership and legal",
      "Verify auditor credentials and engagement letter",
      "Cooperate but controlled access",
      "Not the KO first",
    ],
    modelAnswer:
      "My first call is to our Director of Contracts and General Counsel — not the KO. DCAA has audit rights under their engagement, but I need leadership and legal to verify the auditor's credentials, engagement letter scope, and whether this is an incurred cost audit, floorcheck, or system audit. I assign a single point of contact, schedule a conference room, and begin pulling the document list matching the audit type. I do not grant unfettered access to the entire network — controlled document production per legal guidance. I log all requests and responses from minute one.",
    commonMistakes: [
      "Calling the KO first",
      "Denying access outright",
      "Providing records without verification",
    ],
    followUps: [
      "What's the difference between DCAA and DCMA?",
      "How do you handle a questioned cost during the visit?",
    ],
  },
  {
    id: "iq-28",
    category: "scenario",
    question: "You discover a labor mischarge on a cost-plus contract. What do you do?",
    keyPoints: [
      "Correct the charge promptly",
      "Determine if systemic or isolated",
      "Notify finance and contracts leadership",
      "Consider disclosure obligations",
    ],
    modelAnswer:
      "I quantify the mischarge — which contract, amount, and period. I immediately notify finance to process a correcting journal entry and adjust the next invoice if already billed. I determine root cause: timesheet error, supervisor override, or system mapping failure. If isolated, I document correction and retrain the employee. If systemic or material, I escalate to contracts leadership and legal to evaluate False Claims Act exposure and whether voluntary disclosure is warranted. I preserve the original records and correction audit trail. On cost-plus, billing the government for unallowable or mischarged labor creates significant liability.",
    commonMistakes: [
      "Quietly fixing without documentation",
      "Ignoring pattern of mischarges",
      "Not adjusting invoices already submitted",
    ],
    followUps: [
      "At what dollar threshold would you involve legal?",
      "How do you prevent recurrence?",
    ],
  },
  {
    id: "iq-29",
    category: "scenario",
    question:
      "Your subcontractor just notified you they cannot deliver the key milestone. You have 10 days until it's due to the government. What do you do?",
    keyPoints: [
      "Assess sub recovery vs. backup plan immediately",
      "Notify government if prime milestone at risk",
      "Cure notice to sub",
      "Document everything",
    ],
    modelAnswer:
      "Hour one: call with the sub for root cause and honest recovery assessment — if they cannot make 10 days, I don't wait. I activate our backup plan: partial delivery from sub, prime surge support, or alternate vendor for non-critical path items. Same day, I notify the government PM and COR that we have a sub performance risk and present our mitigation plan with daily updates — don't surprise them on day 10. I issue a cure notice to the sub preserving termination rights. I document all costs separately for potential default termination recovery. Customer transparency plus aggressive mitigation is the only viable path.",
    commonMistakes: [
      "Hiding the problem until deadline",
      "Immediate termination without cure process",
      "No government notification",
    ],
    followUps: [
      "When would you terminate the sub for default?",
      "How do you handle liquidated damages?",
    ],
  },
  {
    id: "iq-30",
    category: "scenario",
    question: "The government has paid your invoice incorrectly — they underpaid by $40,000. What steps do you take?",
    keyPoints: [
      "Reconcile payment against invoice and contract",
      "Identify root cause: CLIN error, partial acceptance, withholding",
      "Contact KO or payment office with documentation",
      "Track Prompt Payment Act if delay continues",
    ],
    modelAnswer:
      "I reconcile the payment against our submitted WAWF invoice, CLIN funding, and any modification changes. I identify whether the underpayment is a CLIN mapping error, partial acceptance, progress payment withholding, or fee adjustment. I compile a payment discrepancy letter with invoice number, expected amount, received amount, and delta calculation. I contact the KO and payment office simultaneously with the documentation package. If not corrected within 30 days of proper invoice acceptance, I calculate Prompt Payment Act interest on the unpaid balance. I log the discrepancy in our AR tracker and escalate weekly until resolved.",
    commonMistakes: [
      "Accepting partial payment without follow-up",
      "Aggressive tone without documentation",
      "Not checking if rejection reason exists in WAWF",
    ],
    followUps: [
      "What if they claim our invoice was improper?",
      "Would you offset against future invoices?",
    ],
  },
];
