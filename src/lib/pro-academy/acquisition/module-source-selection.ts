import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "acq-source-selection";

export const ACQUISITION_SOURCE_SELECTION_MODULE = proModule(
  MODULE_ID,
  "acquisition",
  3,
  "Source Selection",
  "SSA, evaluation planning, color ratings, competitive range, discussions, best value, award, and debrief—from the government evaluator perspective.",
  [
    "Design evaluation factors that discriminate among offerors",
    "Apply color/adjectival and past performance confidence ratings",
    "Document competitive range, discussions, and best-value tradeoff decisions",
  ],
  [
    proLesson(
      MODULE_ID,
      "acquisition",
      "SS.1",
      "Source Selection Authority and Organization",
      [
        "Identify SSA appointment by threshold",
        "Describe SSAC and SSEB roles",
        "Establish source selection plan and evaluator standards",
      ],
      [
        { citation: "FAR 15.303", text: "The source selection authority shall establish a source selection organization and procedures and approve the source selection strategy." },
        { citation: "FAR 15.303", text: "Evaluators shall comply with standards of conduct and avoid conflicts of interest." },
      ],
      [
        { heading: "SSA", content: "Appointed in writing—often PCO for smaller actions; higher officials for major acquisitions. Makes final selection consistent with Section M." },
        { heading: "SSEB/SSAC", content: "Evaluation board scores proposals; advisory council supports SSA with documented recommendations." },
      ],
      "Offerors should understand SSA level signals approval timeline and debrief escalation path.",
      "SSA owns the selection decision; thorough documentation in SSEB reports protects against protests.",
      [{ title: "OCI on SSEB", situation: "Evaluator previously worked for Offeror A without recusal.", whyItMatters: "Protest on biased evaluation; selection invalidated." }],
      [{ violation: "SSA selects offeror not ranked per approved evaluation plan", consequence: "GAO sustained protest for inconsistent award." }],
      [
        q("ss-1-1", "SSA is addressed in FAR:", ["15.303", "Part 31", "Part 45", "Part 3 only"], 0, "FAR 15.303 source selection authority."),
        q("ss-1-2", "SSEB stands for:", ["Source Selection Evaluation Board", "Senior Systems Engineering Branch", "Small Business Executive Board", "Standard Supply Entry Base"], 0, "Evaluation board conducts proposal scoring."),
        tf("ss-1-3", "Evaluators must comply with standards of conduct.", true, "FAR 15.303 requires conduct compliance."),
        q("ss-1-4", "SSA approves:", ["Source selection strategy and final selection", "Contractor invoices only", "Travel vouchers", "Property disposal only"], 0, "SSA approves strategy and selection decision."),
        tf("ss-1-5", "SSAC advises SSA on evaluation results.", true, "Advisory council supports documented recommendation."),
        q("ss-1-6", "Conflict of interest on evaluation team can:", ["Improve scores", "Invalidate selection on protest", "Waive TINA", "Replace Section M"], 1, "OCI taints source selection integrity."),
      ],
      { farReferences: ["15.303", "3.104"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "SS.2",
      "Evaluation Factors and Rating Systems",
      [
        "Develop discriminators in evaluation factors and subfactors",
        "Apply relative importance statements vs numerical weights",
        "Use color/adjectival and past performance confidence ratings",
      ],
      [
        { citation: "FAR 15.305", text: "Evaluation factors and significant subfactors shall be tailored to the acquisition and shall address price or cost and past performance." },
        { citation: "FAR 15.305", text: "Past performance shall be evaluated using confidence ratings such as Substantial, Satisfactory, Limited, No, or Unknown Confidence." },
      ],
      [
        { heading: "Factor design", content: "Factors must differentiate offerors—vague factors like 'good management' fail to discriminate. Subfactors break down evaluation for consistent scoring." },
        { heading: "Color ratings", content: "Common adjectival: Outstanding/Blue, Good/Purple, Acceptable/Green, Marginal/Yellow, Unacceptable/Red. Risk: Low/Moderate/High." },
        { heading: "Past performance confidence", content: "Substantial, Satisfactory, Limited, No, Unknown Confidence—separate from adjectival technical ratings." },
      ],
      "Write proposals to Section M factors explicitly—evaluators score against stated subfactors, not your marketing brochure.",
      "Clear M section and evaluator training reduce scoring variance and protest risk.",
      [{ title: "Factor mismatch", situation: "Proposal emphasizes innovation though M weights past performance and price highest.", whyItMatters: "Lost tradeoff despite strong technical theme." }],
      [{ violation: "Undocumented evaluation factor added after proposals received", consequence: "Protest sustained for changing ground rules." }],
      [
        q("ss-2-1", "Section M must include:", ["Evaluation factors and subfactors", "Only CLIN prices", "Employee SSNs", "Travel per diem"], 0, "FAR 15.305 evaluation content."),
        q("ss-2-2", "Past performance confidence includes:", ["Substantial Confidence", "Purple rating", "FFP status", "Micro-purchase"], 0, "FAR 15.305 confidence ratings."),
        tf("ss-2-3", "Numerical weights may be used when stated in Section M.", true, "Agencies may use weights or relative importance language."),
        q("ss-2-4", "Unacceptable/Red rating typically means:", ["Proposal meets minimum", "Proposal fails to meet requirements", "Lowest price", "Best value"], 1, "Unacceptable indicates failure to meet threshold."),
        tf("ss-2-5", "Evaluation factors must be in the solicitation.", true, "Offerors entitled to know scoring criteria."),
        q("ss-2-6", "Risk ratings may include:", ["Low, Moderate, High", "Only price", "Only color blue", "SAM codes"], 0, "Risk assessment accompanies technical evaluation."),
      ],
      { farReferences: ["15.305", "15.304"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "SS.3",
      "Proposal Evaluation and Documentation",
      [
        "Distinguish deficiency, weakness, significant weakness, and strength",
        "Prepare individual evaluator reports and consensus records",
        "Maintain source selection documentation for protests",
      ],
      [
        { citation: "FAR 15.305", text: "A deficiency is a material failure of a proposal to meet a solicitation requirement." },
        { citation: "FAR 15.305", text: "The evaluation record shall document the evaluation of each proposal against the stated criteria." },
      ],
      [
        { heading: "Definitions", content: "Deficiency: material failure—may reject without discussions. Weakness: flaw that increases risk. Significant weakness: materially increases risk. Strength: appreciable advantage." },
        { heading: "Documentation", content: "Individual reports → consensus → SSEB summary → SSA decision. Record must support every rating with proposal citations." },
      ],
      "In debriefs, compare documented weaknesses to your proposal text—build compliance matrices mapping M factors to page numbers.",
      "Incomplete evaluation records lose GAO protests even if subjective judgment was reasonable.",
      [{ title: "Undocumented weakness", situation: "GAO finds evaluation cites weakness not supported in proposal or record.", whyItMatters: "Protest sustained; reevaluation ordered." }],
      [{ violation: "Evaluators scoring without reading cost volume", consequence: "Incomplete evaluation; sustained protest on price evaluation." }],
      [
        q("ss-3-1", "A deficiency is:", ["Minor typo", "Material failure to meet solicitation requirement", "Low price", "Strength"], 1, "FAR 15.305 definition."),
        q("ss-3-2", "Significant weakness:", ["Has no impact", "Materially increases performance risk", "Is a strength", "Means lowest price"], 1, "Higher severity than weakness."),
        tf("ss-3-3", "Evaluation records must support ratings with proposal references.", true, "Documentation requirement in 15.305."),
        q("ss-3-4", "Consensus evaluation means:", ["One evaluator decides secretly", "Evaluators reconcile scores with documented rationale", "CO sets price alone", "Skip Section M"], 1, "Consensus produces defensible unified record."),
        tf("ss-3-5", "Strengths are appreciable advantages.", true, "FAR 15.305 defines strengths."),
        q("ss-3-6", "Individual evaluator reports feed:", ["SSEB consensus and SSA decision", "Contractor payroll", "Travel system", "SAM"], 0, "Layered evaluation process."),
      ],
      { farReferences: ["15.305", "15.308"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "SS.4",
      "Competitive Range and Discussions",
      [
        "Establish competitive range criteria",
        "Notify excluded offerors and provide debriefs",
        "Conduct meaningful discussions without auctioning",
      ],
      [
        { citation: "FAR 15.306", text: "The contracting officer may establish a competitive range comprised of the most highly rated proposals." },
        { citation: "FAR 15.306(d)", text: "Discussions are tailored to each offeror's proposal and shall not be used to coerce or harass the offeror." },
      ],
      [
        { heading: "Competitive range", content: "Government narrows field to most highly rated proposals for discussions unless award without discussions is planned and stated." },
        { heading: "Excluded offerors", content: "Timely notification with debrief rights when excluded from competitive range after discussions phase begins." },
        { heading: "Meaningful discussions", content: "Must address significant weaknesses and allow FPRs that cure issues—not superficial clarifications labeled as discussions." },
      ],
      "If excluded from competitive range, request debrief immediately—learn weaknesses for next pursuit.",
      "Failure to hold meaningful discussions when required is top GAO protest ground.",
      [{ title: "Sham discussions", situation: "CO sends identical generic letter to all offerors calling it 'discussions.'", whyItMatters: "GAO finds discussions not meaningful; re-solicit or redo." }],
      [{ violation: "Establishing competitive range using unstated criteria", consequence: "Protest sustained for inconsistent evaluation." }],
      [
        q("ss-4-1", "Competitive range includes:", ["All offerors always", "Most highly rated proposals", "Lowest priced only", "Incumbent only"], 1, "FAR 15.306(c) competitive range."),
        q("ss-4-2", "Excluded offerors from competitive range receive:", ["No notice", "Notification and debrief opportunity", "Automatic award", "CPARS only"], 1, "FAR 15.305 and debrief rules apply."),
        tf("ss-4-3", "Discussions must be tailored to each offeror.", true, "FAR 15.306(d)."),
        q("ss-4-4", "Auctioning is:", ["Encouraged", "Prohibited", "Required on FFP", "Part of CPARS"], 1, "FAR 15.306(f) prohibits disclosing one offeror's price to another."),
        tf("ss-4-5", "Award without discussions must be stated in solicitation if used.", true, "Offerors entitled to know if discussions planned."),
        q("ss-4-6", "FPR follows:", ["Discussions when held", "Industry day only", "Contract closeout", "Invoice submission"], 0, "Final Proposal Revisions after discussions per 15.307."),
      ],
      { farReferences: ["15.306", "15.307", "15.505"] }
    ),
    proLesson(
      MODULE_ID,
      "acquisition",
      "SS.5",
      "Best Value, Award, and Debrief",
      [
        "Document best-value tradeoff in SSDD/IAD",
        "Apply 'significantly better' standard in tradeoffs",
        "Conduct compliant preaward and postaward debriefs",
      ],
      [
        { citation: "FAR 15.308", text: "The source selection decision shall be documented, and the documentation shall include the rationale for the decision." },
        { citation: "FAR 15.505", text: "Offerors excluded from the competitive range or otherwise eliminated from competition shall be debriefed." },
      ],
      [
        { heading: "Best value", content: "Tradeoff permits paying more than lowest price for significantly better technical/management/past performance when stated in M." },
        { heading: "SSDD/IAD", content: "Integrated Assessment and Source Selection Decision Document capture comparative analysis and SSA rationale." },
        { heading: "Debrief", content: "Postaward debrief within requested timeframe covers evaluation results, strengths/weaknesses, and ranking—not other offeror proprietary data." },
      ],
      "Use debrief intel for recompete—weaknesses are roadmap. Protect protest clock if challenging award.",
      "SSDD must show rational connection between evaluation and award—lowest price alone in tradeoff source selection loses protests.",
      [{ title: "Tradeoff not documented", situation: "SSA picks higher-priced offeror without documenting significant superiority.", whyItMatters: "GAO sustains protest for inadequate tradeoff rationale." }],
      [{ violation: "Debrief reveals another offeror's price", consequence: "Procurement integrity violation." }],
      [
        q("ss-5-1", "Best value tradeoff allows:", ["Automatic lowest price award always", "Paying more for significantly better non-cost factors", "No documentation", "Skipping Section M"], 1, "Tradeoff methodology in Section M."),
        q("ss-5-2", "SSDD documents:", ["SSA decision rationale", "Travel receipts", "Property records", "SAM password"], 0, "FAR 15.308 documentation."),
        tf("ss-5-3", "Debriefs must not disclose other offerors' proprietary information.", true, "Protected information rules apply."),
        q("ss-5-4", "Preaward notice requirements appear in:", ["FAR 15.503 area / agency supplements", "Part 45", "Part 31", "State law"], 0, "Notification before award per Part 15 subpart."),
        tf("ss-5-5", "Postaward debrief supports industry understanding of evaluation.", true, "FAR 15.506 postaward debrief."),
        q("ss-5-6", "Significantly better standard applies to:", ["Tradeoff source selection", "Sealed bidding", "Micro-purchases only", "Grants"], 0, "Tradeoff permits premium for significant advantage."),
      ],
      { farReferences: ["15.308", "15.503", "15.505", "15.506"] }
    ),
  ]
);
