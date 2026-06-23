import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_5: TrainingModule = {
  id: "proposals",
  number: 5,
  title: "Proposal Writing and Business Development",
  description:
    "Turn capture intelligence into compliant, evaluator-ready proposals: pre-award BD, RFP analysis, technical writing, pricing strategy, and past performance narratives that win best-value awards.",
  careerOutcomes: [
    "Run pre-proposal BD activities that shape opportunities before RFP release",
    "Dissect RFP Sections L, M, and C to build compliance-driven proposal outlines",
    "Draft technical volumes mapped to PWS requirements and evaluation factors",
    "Develop defensible pricing and past performance packages that survive scrutiny",
  ],
  lessons: [
    lesson(
      "proposals",
      "5.1",
      "Pre-Proposal Business Development",
      [
        "Define capture phases from opportunity identification through proposal kickoff",
        "Conduct bid/no-bid analysis with documented decision criteria",
        "Apply ethical requirement shaping through market research and customer engagement",
        "Build win themes and discriminators aligned to anticipated evaluation factors",
      ],
      [
        {
          heading: "Capture Lifecycle Before the RFP",
          content:
            "Business development for federal contracts begins when a mission need surfaces—not when the solicitation posts. Early capture includes opportunity qualification, customer mapping, competitive assessment, teaming strategy, and pipeline gate reviews. Contracts and BD professionals maintain a disciplined pipeline: pursue, monitor, or no-bid. Resources are finite; a documented no-bid protects proposal budgets for winnable pursuits. Capture plans record customer pain points, budget timing, incumbent weaknesses, decision-makers, and your discriminators. That intelligence drives shaping strategy and later proposal themes.",
        },
        {
          heading: "Ethical Requirement Shaping",
          content:
            "Shaping influences requirements through lawful market research: Sources Sought responses, industry days, RFIs, and white papers. Contractors may clarify mission problems and suggest performance-based structures—but must avoid obtaining unfair competitive advantage or violating OCI rules under FAR 9.505. One-on-one meetings must stay within agency ethics boundaries. Document shaping activities for transparency. Effective shaping aligns the eventual RFP with your strengths without writing a specification that names your product or excludes responsible competitors.",
        },
        {
          heading: "Bid/No-Bid Framework",
          content:
            "Bid/no-bid decisions weigh customer relationship, incumbent position, technical fit, past performance, price to win, staffing availability, clearance and facility requirements, and profit potential. Contracts managers contribute compliance risk: set-aside eligibility, limitation on subcontracting, cyber/CMMC cost, and flow-down complexity. Score each factor; leadership approves pursuit. A documented no-bid is preferable to a late, non-compliant proposal that damages credibility with the agency and wastes six-figure proposal costs.",
        },
        {
          heading: "Win Themes and Discriminators",
          content:
            "Win themes are three to five customer-focused messages repeated across volumes—e.g., 'Reduced transition risk through incumbent staff retention.' Discriminators are provable strengths competitors lack. Themes must anticipate Section M evaluation factors even before the RFP drops. Capture intelligence from pre-award engagement informs which themes resonate. Contracts staff ensure themes do not promise terms the company cannot contractually support: unlimited liability, uncertified clearances, or unrealistic staffing.",
        },
      ],
      "For your top pipeline opportunity, draft a one-page capture plan: customer pain points, incumbent profile, your discriminators, teaming gaps, and a bid/no-bid scorecard. Schedule a shaping touchpoint—industry day, RFI response, or customer briefing—before draft RFP if agency policy allows.",
      [
        q(
          "5-1-1",
          "Capture activities ideally begin:",
          [
            "After contract award to the incumbent",
            "Before RFP release during opportunity identification and shaping",
            "Only during the final proposal revision",
            "At contract closeout",
          ],
          1,
          "Early capture shapes requirements and positions the team before formal solicitation."
        ),
        tf(
          "5-1-2",
          "Ethical requirement shaping includes paying government officials to write specifications favorable to your company.",
          false,
          "Shaping must occur through lawful market research and customer engagement within agency ethics rules—not improper influence."
        ),
        scenario(
          "5-1-3",
          "Your capture lead wants to pursue a $40M recompete where the incumbent holds strong CPARS and your firm lacks a clearance facility required in the draft PWS. What should the contracts manager recommend first?",
          [
            "Bid aggressively and assume the agency will waive the facility requirement",
            "Document bid/no-bid factors including compliance gaps and present a scored recommendation to leadership",
            "Skip capture planning and start writing the technical volume",
            "Submit a protest before the RFP releases",
          ],
          1,
          "Structured bid/no-bid analysis surfaces fatal compliance gaps before committing proposal resources."
        ),
        q(
          "5-1-4",
          "Win themes should align with:",
          [
            "Internal org chart titles only",
            "Anticipated Section M evaluation factors and customer mission outcomes",
            "Subcontractor logo placement",
            "Unrelated marketing slogans",
          ],
          1,
          "Evaluators score against Section M; themes should map directly to stated factors."
        ),
        tf(
          "5-1-5",
          "OCI concerns during capture relate to FAR 9.505 and prior access to competitive information.",
          true,
          "FAR 9.505 addresses organizational conflicts that can arise from advisory or systems work during capture."
        ),
      ],
      {
        realWorldExercise:
          "Build a bid/no-bid scorecard for one live opportunity in your pipeline. Weight at least six factors (customer relationship, technical fit, past performance, price to win, compliance risk, staffing). Score each 1–5, document the total, and brief leadership with a pursue or no-bid recommendation.",
        martinPrompt:
          "Walk me through pre-proposal business development for a $25M DoD IT services recompete. Cover capture phases, ethical shaping under FAR 9.505, a bid/no-bid scorecard with dollar thresholds, and three win themes tied to anticipated Section M factors. Give me one action to take this week.",
      }
    ),
    lesson(
      "proposals",
      "5.2",
      "Reading an RFP Like a Professional",
      [
        "Parse Uniform Contract Format: Sections L, M, C, and J",
        "Build a compliance matrix mapping every requirement to proposal responses",
        "Identify fatal non-compliance risks in formatting and submission rules",
        "Extract evaluation strategy from Section M factor weights and rating definitions",
      ],
      [
        {
          heading: "RFP Section Anatomy",
          content:
            "Uniform Contract Format organizes solicitations: Section C (Description/Specs or PWS), Section L (Instructions, Conditions, and Notices to Offerors), Section M (Evaluation Factors for Award), and Section J (List of Attachments). Section L is mandatory—deviation can render a proposal unacceptable. Section M tells you how evaluators score; Section C defines what you must perform. Professional readers start with L and M, then C, to build the compliance framework before writers draft a single page.",
        },
        {
          heading: "Building the Compliance Matrix",
          content:
            "A compliance matrix lists every Section L requirement—page limits, font, volumes, required tables, certifications—and Section C/M technical elements with proposal page and paragraph cross-references. Color teams use it to find gaps. Include submission mechanics: portal, copies, file names, and due time zone. One missed attachment or exceeded page limit can eliminate an otherwise strong bid. The contracts lead owns matrix accuracy through Pink, Red, and Gold team reviews.",
        },
        {
          heading: "Scoring Strategy from Section M",
          content:
            "Extract factor weights, subfactors, adjectival or color rating definitions, and whether tradeoffs apply. Allocate page count proportionally to weighted factors—do not cap price at ten pages when technical is seventy percent of the decision. Identify rated versus pass/fail items. Map proof points—past performance references, resumes, methodologies—to each subfactor. Non-price factors often decide best-value awards; compliance alone is insufficient to win.",
        },
        {
          heading: "Common Compliance Failures",
          content:
            "Frequent mistakes: wrong NAICS or size representation, missing SAM reps and certs, unsigned forms, proprietary marking errors, failure to acknowledge amendments, and generic boilerplate ignoring Section C paragraph numbering. Contracts staff maintain a proposal checklist tied to FAR 52.212-1 or 52.215-1 representations, Section K, and agency-specific certifications. Automated portals reject late uploads—build buffer time and verify amendment incorporation.",
        },
      ],
      "On your next active RFP, build a compliance matrix within forty-eight hours of release: every Section L 'shall' and Section M factor mapped to a draft outline owner. Run a Pink Team review checking only compliance before refining win themes.",
      [
        scenario(
          "5-2-1",
          "An RFP states technical approach is 70% of the evaluation and price is 30%. Section L limits the technical volume to 30 pages. Your proposal manager allocates 25 pages to corporate history and 5 pages to the PWS response. What is the professional contracts response?",
          [
            "Approve—the corporate history builds credibility",
            "Restructure the outline to mirror Section C paragraphs and allocate pages proportional to Section M weights",
            "Ignore Section L page limits because evaluators prefer longer proposals",
            "Move all technical content to the price volume",
          ],
          1,
          "Proposal structure must comply with Section L and maximize scores against weighted Section M factors."
        ),
        q(
          "5-2-2",
          "Section L of an RFP contains:",
          [
            "Evaluation criteria only",
            "Instructions to offerors",
            "Historical pricing data",
            "CPARS ratings",
          ],
          1,
          "Section L prescribes proposal preparation and submission instructions."
        ),
        tf(
          "5-2-3",
          "Non-compliance with Section L can result in proposal rejection as unacceptable regardless of technical merit.",
          true,
          "Failure to follow instructions can render a proposal non-responsive."
        ),
        q(
          "5-2-4",
          "A compliance matrix primarily maps:",
          [
            "Employee vacation schedules to payroll",
            "RFP requirements to specific proposal locations and owners",
            "Subcontractor logos to color palettes",
            "Only CLIN pricing to invoices",
          ],
          1,
          "The matrix ensures every requirement is addressed and traceable for reviewers."
        ),
        tf(
          "5-2-5",
          "Section M defines how proposals will be evaluated and rated.",
          true,
          "Section M states evaluation factors, subfactors, and rating methodology."
        ),
      ],
      {
        realWorldExercise:
          "Download an active or sample RFP and create a compliance matrix with columns for requirement ID, source (L/M/C), requirement text, proposal section owner, page limit, and status. Flag any 'shall' requirements with no assigned writer within 24 hours.",
        martinPrompt:
          "Teach me to read an RFP like a contracts professional. Walk through Sections L, M, C, and J on a negotiated best-value procurement over $10M. Show how to build a compliance matrix, cite FAR 15.204-2 where relevant, and identify two fatal compliance risks. Include one action for today.",
      }
    ),
    lesson(
      "proposals",
      "5.3",
      "Writing a Winning Technical Proposal",
      [
        "Structure technical approaches mapped to PWS/SOW paragraph numbering",
        "Develop management plans covering staffing, QA, risk, and transition",
        "Present key personnel and past performance for maximum evaluator clarity",
        "Facilitate color team reviews with actionable, factor-based feedback",
      ],
      [
        {
          heading: "Technical Approach Structure",
          content:
            "Evaluators score compliance with Section C requirements—not marketing fluff. Use the PWS paragraph numbering as your outline. For each requirement, state understanding, approach, deliverables, and risks with mitigations. Graphics help when they clarify workflow or organization. Avoid unsupported superlatives; cite metrics, tools, and methodologies you will actually deploy. Contracts professionals verify that proposed approaches do not commit to non-compliant staffing—uncleared personnel on classified tasks—or unauthorized assumptions about government-furnished property.",
        },
        {
          heading: "Management Volume Essentials",
          content:
            "Management proposals cover program organization, staffing plan, transition and reverse transition, quality assurance, safety, risk management, and communication with the KO and COR. Key personnel resumes must match Section L format and clearance or certification requirements. Staffing matrices show labor categories, FTE, and ramp-up aligned to the pricing volume. Surge and retention strategies address evaluator concerns about continuity. Name accountable leads—not generic team language.",
        },
        {
          heading: "Proof Points and Discriminators in Narrative",
          content:
            "Weave win themes into technical text without breaking compliance mapping. Each major section should include a discriminator backed by evidence: a tool, metric, contract cite, or certification. Evaluators read dozens of proposals; clear headings mirroring the PWS and explicit 'we will comply with paragraph X by doing Y' language reduces evaluator fatigue and scoring variance. Contracts staff cross-check that narrative commitments match priced staffing and subcontractor scope.",
        },
        {
          heading: "Color Team Process",
          content:
            "Pink Team: early compliance and outline review. Red Team: full draft against Section M with scoring simulation. Gold Team: final polish and production check. Contracts lead participates in each, focusing on L/M compliance, representations consistency with pricing, and flow-down or teaming commitments. Feedback must be specific—'missing PWS 3.2.1 test approach' fixes proposals; 'weak technical' does not.",
        },
      ],
      "Draft your technical volume outline mirroring Section C paragraph numbers. For each paragraph, assign a writer, a past performance cite, and a risk mitigation. Run a Red Team scoring mock using Section M adjectival definitions before finalizing.",
      [
        q(
          "5-3-1",
          "Technical proposals should primarily address:",
          [
            "Generic company history only",
            "Section C/PWS requirements with explicit compliance mapping",
            "Unrelated commercial product catalogs",
            "Only pricing assumptions",
          ],
          1,
          "Evaluators assess how the offeror will meet the stated performance work statement."
        ),
        tf(
          "5-3-2",
          "Key personnel resumes must typically match Section L format and required qualifications or clearances.",
          true,
          "Section L specifies key personnel content, often including clearance and experience minimums."
        ),
        scenario(
          "5-3-3",
          "Red Team reviewers find your draft scores 'Acceptable' on technical but your competitor narrative cites specific metrics for every PWS paragraph. Section M allows tradeoffs favoring superior technical approach. What is the best next step?",
          [
            "Submit as-is because Acceptable meets the threshold",
            "Revise weak paragraphs with quantified approaches, proof points, and risk mitigations tied to each PWS requirement",
            "Reduce price by 40% without changing technical content",
            "Remove past performance to save pages",
          ],
          1,
          "In best-value tradeoffs, superior non-price factors can justify award despite higher price."
        ),
        q(
          "5-3-4",
          "Red Team reviews should simulate:",
          [
            "Only grammar and spelling checks",
            "Evaluation against Section M factors and scoring criteria",
            "Invoice processing workflows",
            "SAM renewal procedures",
          ],
          1,
          "Red Teams score drafts as evaluators would, identifying weaknesses before submission."
        ),
        tf(
          "5-3-5",
          "Management plans should include staffing, QA, risk, transition, and communication with the government.",
          true,
          "Management volumes demonstrate ability to organize and control performance."
        ),
      ],
      {
        realWorldExercise:
          "Write one complete PWS paragraph response using the four-part structure: understanding, approach, deliverables, risks/mitigations. Have a colleague score it against the Section M adjectival rating definition for that subfactor.",
        martinPrompt:
          "Help me write a winning technical proposal section for a PWS cybersecurity monitoring requirement on a DoD contract. Use paragraph-mapped structure, cite DFARS 252.204-7012 implications, include a measurable discriminator, and explain how a Red Team would score it. Give one writing action for today.",
      }
    ),
    lesson(
      "proposals",
      "5.4",
      "Pricing Strategy",
      [
        "Align price volume format with Section L and contract type",
        "Build labor, material, ODC, and indirect elements with BOE traceability",
        "Apply competitive price-to-win analysis and risk contingency",
        "Coordinate pricing with TINA, cost realism, and DCAA expectations",
      ],
      [
        {
          heading: "Price Volume Format and Contract Type",
          content:
            "Section L dictates pricing format: Excel templates, labor category matrices, FFP line items, or cost element breakdowns by CLIN. Match contract type—FFP sum on CLINs, T&M loaded rates with not-to-exceed, or cost elements with fee for CPFF. Cross-foot totals across volumes; mismatches between narrative staffing and priced FTE are common evaluator findings. Contracts professionals reconcile technical staffing plans with the price volume before submission.",
        },
        {
          heading: "Basis of Estimate (BOE) Discipline",
          content:
            "Each priced element needs BOE backup: labor hours from staffing plan times negotiated or provisional rates; ODCs from quotes; subcontracts from signed or draft sub quotes with flow-down costs; indirect rates from accounting with escalation policies documented. Traceability supports TINA certification, cost realism, and post-award audits. Use consistent version control between final proposal and certified cost or pricing data submission.",
        },
        {
          heading: "Price-to-Win and Competitive Analysis",
          content:
            "Price-to-win analysis combines independent cost estimates, incumbent public pricing signals, competitor intelligence, and customer budget data. Price is not cost—winning bids balance competitiveness with margin and risk. Under-pricing creates cost realism findings and post-award losses; over-pricing loses on LPTA or tight best-value tradeoffs. Contracts and finance align on walk-away price, target price, and stretch price before FPR.",
        },
        {
          heading: "Cost Realism, TINA, and DCAA",
          content:
            "Evaluators perform price analysis and may perform cost analysis. Cost realism checks whether proposed costs reflect likely performance—under-staffing may score well on price but fail realism. DCAA may audit proposals on DoD cost submissions. Contracts coordinates with finance on FAR 52.215-20 certification timing and updates through agreement. Defective pricing and unrealistic bids create post-award pain.",
        },
      ],
      "Build a BOE traceability table linking each priced labor category to staffing plan hours, rate source (provisional or audited), and escalation policy. Reconcile total FTE in the price volume to the technical staffing matrix before Pink Team.",
      [
        tf(
          "5-4-1",
          "Mismatches between technical staffing plans and priced FTE are a common cause of evaluator findings.",
          true,
          "Evaluators cross-check narrative and price volumes for consistency."
        ),
        q(
          "5-4-2",
          "Cost realism analysis evaluates whether:",
          [
            "The KO personally favors the offeror",
            "Proposed costs reflect what performance will likely require",
            "SAM registration is current",
            "Subs hold small business certifications",
          ],
          1,
          "FAR 15.404-1(d) addresses cost realism where proposed costs may not reflect actual performance costs."
        ),
        scenario(
          "5-4-3",
          "Your capture team wants to bid 20% below the independent cost estimate to win an LPTA recompete. Finance shows the BOE already excludes profit. What should the contracts manager advise?",
          [
            "Proceed—LPTA always rewards lowest price regardless of realism",
            "Assess cost realism risk, document margin and performance risk, and verify the BOE supports the proposed price or adjust staffing",
            "Remove all indirect rates from the proposal",
            "Certify cost data without finance review",
          ],
          1,
          "Even on LPTA, unsupportable pricing creates performance failure and potential compliance exposure."
        ),
        q(
          "5-4-4",
          "TINA certification under FAR 52.215-20 requires data to be:",
          [
            "Complete, accurate, and current as of agreement date",
            "Approximate estimates only",
            "Submitted orally to the KO",
            "Provided only after contract award",
          ],
          0,
          "Certified cost or pricing data must be current, accurate, and complete when certified at negotiation agreement."
        ),
        tf(
          "5-4-5",
          "Price-to-win analysis should consider incumbent pricing signals, customer budget, and competitor intelligence—not cost alone.",
          true,
          "Winning price balances competitiveness, realism, and acceptable margin."
        ),
      ],
      {
        realWorldExercise:
          "For a sample or active bid, create a one-page price-to-win summary: independent cost estimate, incumbent signal, target/win/stretch prices, and the BOE element driving the largest risk. Review with finance before any FPR.",
        martinPrompt:
          "Explain pricing strategy for a $15M cost-plus-fixed-fee DoD proposal subject to TINA. Cover BOE traceability, FAR 52.215-20 certification timing, cost realism under FAR 15.404-1, and price-to-win versus walk-away price. Include a dollar example and one action for today.",
      }
    ),
    lesson(
      "proposals",
      "5.5",
      "Past Performance",
      [
        "Select relevant contracts matching size, scope, and complexity of the requirement",
        "Structure past performance narratives tied to Section M evaluation factors",
        "Prepare reference contacts and CPARS-aligned evidence",
        "Apply FAR 15.305 alternatives when prime past performance is limited",
      ],
      [
        {
          heading: "Relevancy and Recency Standards",
          content:
            "Evaluators assess whether your past performance is relevant—similar scope, complexity, dollar value, and customer environment—and recent, typically within three to five years depending on RFP language. A $2M commercial help desk cite may not support a $50M classified enterprise contract. Contracts professionals curate a past performance library tagged by NAICS, contract type, agency, clearance level, and CPARS ratings for rapid proposal insertion.",
        },
        {
          heading: "Narrative Structure for Evaluators",
          content:
            "Each past performance entry should include contract number, customer, dollar value, POP, role (prime or sub), description, challenges, outcomes, and explicit tie to Section M subfactors. Use CPARS ratings and quote reference feedback when favorable. Avoid vague superlatives; provide metrics—uptime percentages, on-time delivery rates, defect counts. Evaluators read quickly; a table of contents and consistent formatting across references reduces scoring friction.",
        },
        {
          heading: "Reference Management",
          content:
            "Provide reference contact name, title, phone, and email per Section L. Notify references before submission and share the PWS summary so they can speak to relevant work. Surprises damage relationships and produce weak phone survey results. Contracts staff track reference usage across concurrent proposals to avoid over-contacting the same KO on multiple bids.",
        },
        {
          heading: "Limited Past Performance Strategies",
          content:
            "When prime past performance is thin, FAR 15.305 allows evaluators to consider subcontractor past performance, key personnel experience, and other past performance with clear explanation. Document teaming agreements authorizing sub PP use. Never fabricate or misrepresent contract roles—responsibility and fraud exposure are real. Startup primes should invest early in sub teaming and personnel with transferable agency experience.",
        },
      ],
      "Update your past performance library: for each active contract over $1M, write a one-paragraph summary tagged to NAICS, agency, contract type, CPARS rating, and three Section M-style factor keywords. Identify gaps for your next target pursuit.",
      [
        q(
          "5-5-1",
          "Past performance entries should tie explicitly to:",
          [
            "Unrelated commercial sales only",
            "Section M evaluation factors and requirement relevancy",
            "Employee hobbies",
            "Proposal font choices",
          ],
          1,
          "Evaluators score PP against stated factors and relevancy criteria in Section M."
        ),
        tf(
          "5-5-2",
          "When prime past performance is limited, FAR 15.305 allows consideration of subcontractor and key personnel past performance.",
          true,
          "Evaluators may consider relevant PP from subs and key personnel when prime history is limited."
        ),
        scenario(
          "5-5-3",
          "You are a small business prime with no prior contracts at the target agency but your proposed program manager led two similar efforts as a sub. Section M weights past performance at 30%. What is the strongest approach?",
          [
            "Omit past performance entirely",
            "Present the PM's relevant contracts with clear role description and authorization, tied to Section M subfactors",
            "List unrelated contracts to increase volume",
            "Fabricate a prime contract number",
          ],
          1,
          "Key personnel and sub PP are legitimate when properly documented under FAR 15.305."
        ),
        q(
          "5-5-4",
          "Before listing a reference contact, you should:",
          [
            "Never notify them to preserve surprise",
            "Notify them and share relevant scope so they can support the survey",
            "Use only personal email addresses",
            "Substitute corporate switchboard numbers only",
          ],
          1,
          "Prepared references produce stronger surveys and preserve customer relationships."
        ),
        tf(
          "5-5-5",
          "CPARS ratings and narrative feedback can strengthen past performance volumes when aligned to proposal factors.",
          true,
          "Favorable CPARS data provides objective performance evidence for evaluators."
        ),
      ],
      {
        realWorldExercise:
          "Draft one complete past performance write-up for a relevant contract: include CPARS rating, metrics, challenges overcome, and a explicit mapping to three Section M subfactors from a target RFP. Send a courtesy note to the reference contact.",
        martinPrompt:
          "Help me build a past performance narrative for a contracts manager role on a VA IT services bid. Explain relevancy/recency, FAR 15.305 alternatives when prime PP is thin, CPARS integration, and reference etiquette. Include a sample paragraph with dollar value and timeline.",
      }
    ),
  ],
};
