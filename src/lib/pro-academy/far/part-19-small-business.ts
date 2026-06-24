import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "far-part-19";

export const PART_19_MODULE = proModule(
  MODULE_ID,
  "far",
  19,
  "FAR Part 19: Small Business Programs",
  "Size standards, affiliation, set-asides, rule of two, and major socioeconomic programs—8(a), HUBZone, SDVOSB, and WOSB.",
  [
    "Determine small business size and affiliation risks before teaming",
    "Apply rule of two and set-aside strategies in capture planning",
    "Navigate 8(a), HUBZone, SDVOSB, and WOSB eligibility and sole-source thresholds",
    "Avoid misrepresentation and limitation-on-subcontracting violations",
  ],
  [
    proLesson(
      MODULE_ID,
      "far",
      "19.1",
      "Size Standards and Affiliation — FAR 19.101–19.102",
      [
        "Apply NAICS-based size standards",
        "Explain affiliation rules and ostensible subcontractor doctrine",
        "Respond to size protests",
      ],
      [
        { citation: "FAR 19.101", text: "Small business size standards define whether a business entity is small for the purpose of government procurement." },
        { citation: "FAR 19.101-2", text: "Affiliation exists when one business controls or has the power to control another, or when a third party controls or has the power to control both." },
      ],
      [
        { heading: "Size standards", content: "Each solicitation assigns a NAICS code with employee or revenue threshold. Count only the proposing entity and its affiliates unless exceptions apply." },
        { heading: "Affiliation", content: "Common affiliation: common ownership, shared officers, joint ventures, and the ostensible subcontractor rule when a sub performs primary requirements or prime is dependent on sub." },
      ],
      "Verify size at proposal and again at award—affiliation findings can disqualify you. Structure teaming so small prime truly performs core work on set-asides.",
      "SBA size determinations and protests protect set-aside integrity. COs must verify representations in SAM.",
      [{ title: "Ostensible sub trap", situation: "Small prime bids 8(a) set-aside but named large sub performs 70% of PWS with prime's key personnel from sub.", whyItMatters: "SBA may find affiliation or violation of limitation on subcontracting." }],
      [{ violation: "Misrepresenting small business status in SAM", consequence: "False Claims Act; debarment; contract rescission." }],
      [
        q("19-1-1", "Small business size is determined by:", ["Lowest price", "NAICS code size standard", "CPARS rating", "State incorporation"], 1, "FAR 19.101 ties size to NAICS standards."),
        q("19-1-2", "Affiliation may arise from:", ["Common ownership or control", "Different NAICS codes only", "Using GSA Schedule", "Having a CAGE code"], 0, "FAR 19.101-2 describes control-based affiliation."),
        tf("19-1-3", "The ostensible subcontractor rule can cause affiliation.", true, "Primary performance by sub may affiliate entities."),
        q("19-1-4", "Size protests are generally filed with:", ["GAO only", "SBA Area Office via contracting officer referral", "DCAA", "State court"], 1, "SBA adjudicates size determinations per Part 19."),
        tf("19-1-5", "Size is evaluated as of the date specified in the solicitation.", true, "Protest timing and size status reference solicitation dates."),
        q("19-1-6", "Affiliation analysis includes:", ["Only revenue", "Control relationships among businesses", "Employee hobbies", "Proposal color"], 1, "Control is central to affiliation."),
      ],
      { farPart: 19, farReferences: ["19.101", "19.102"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "19.2",
      "Set-Asides and Rule of Two — FAR 19.501–19.508",
      [
        "Explain total and partial set-asides",
        "Apply the rule of two for small business set-asides",
        "Document small business participation in acquisition planning",
      ],
      [
        { citation: "FAR 19.502-2", text: "The contracting officer shall set aside any acquisition over the micro-purchase threshold for small business participation when there is a reasonable expectation that offers will be obtained from at least two responsible small business concerns and award will be made at fair market price." },
        { citation: "FAR 19.501", text: "It is the policy of the Government to provide maximum practicable opportunities in its acquisitions to small business, veteran-owned small business, HUBZone small business, small disadvantaged business, and women-owned small business concerns." },
      ],
      [
        { heading: "Rule of two", content: "If the CO expects at least two responsible small businesses will submit offers at fair market price, the acquisition must be set aside for small business." },
        { heading: "Partial set-asides", content: "On large acquisitions, agencies may set aside a portion for small business when full set-aside is not practicable." },
      ],
      "Monitor sources sought and market research—document small business capability to influence set-aside decisions. Capture set-aside opportunities early with compliant teaming.",
      "COs must perform rule-of-two analysis and document results. Failure supports protest that competition was unduly restricted or not restricted when required.",
      [{ title: "Missed set-aside", situation: "Agency full-and-opens a $2M services buy though three small businesses attended industry day.", whyItMatters: "Protest may force set-aside and re-solicitation." }],
      [{ violation: "Skipping rule-of-two documentation", consequence: "Sustained protest; acquisition delay." }],
      [
        q("19-2-1", "Rule of two requires set-aside when:", ["Only one small business exists nationwide", "Two responsible small businesses expected at fair market price", "Incumbent is large business", "Protest is filed"], 1, "FAR 19.502-2 states the rule of two."),
        q("19-2-2", "Federal small business contracting goal is approximately:", ["5%", "23%", "50%", "100%"], 1, "Statutory/agency goal is 23% to small business."),
        tf("19-2-3", "Partial set-asides may be used on large acquisitions.", true, "FAR 19.502-3 addresses partial set-asides."),
        q("19-2-4", "Set-aside decisions should be documented in:", ["Oral COR memo only", "Market research and acquisition planning file", "Contractor proposal", "CPARS"], 1, "Documentation supports protest defense."),
        tf("19-2-5", "Small business set-asides apply above the micro-purchase threshold per 19.502-2.", true, "Micro-purchases follow Part 13 rules."),
        q("19-2-6", "Rule of two protects:", ["Incumbent large businesses", "Small business access to acquisitions", "Foreign suppliers only", "Grant recipients"], 1, "Policy maximizes small business opportunities."),
      ],
      { farPart: 19, farReferences: ["19.501", "19.502"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "19.3",
      "8(a) Business Development Program — FAR 19.700–19.705",
      [
        "Explain 8(a) eligibility and program phases",
        "Apply 8(a) sole-source and competitive thresholds",
        "Understand graduation and successor firm rules",
      ],
      [
        { citation: "FAR 19.804-1", text: "The SBA may authorize a contracting officer to award a sole-source 8(a) contract if the anticipated award price exceeds the applicable competitive threshold but does not exceed $4.5 million (non-manufacturing) or $7 million (manufacturing)." },
        { citation: "FAR 19.701", text: "The 8(a) program is a business development program for small disadvantaged businesses." },
      ],
      [
        { heading: "Eligibility", content: "Socially and economically disadvantaged individuals owning and controlling the firm. SBA certifies participants for up to nine years across developmental and transitional stages." },
        { heading: "Sole source vs competitive", content: "Below competitive thresholds, agencies may sole-source to qualified 8(a) firms through SBA acceptance. Above thresholds, competitive 8(a) pool may be required." },
      ],
      "8(a) firms must balance growth with graduation planning. Mentor-protégé and JVs expand capacity but trigger affiliation analysis.",
      "Agencies meet socioeconomic goals through 8(a) while SBA oversees business development and graduation.",
      [{ title: "Threshold breach", situation: "CO sole-sources $5M services contract to 8(a) without competitive requirement when above threshold.", whyItMatters: "Award may be invalid without proper SBA/CO authority." }],
      [{ violation: "8(a) prime performs only pass-through on contract", consequence: "Limitation on subcontracting violation; potential debarment." }],
      [
        q("19-3-1", "8(a) program targets:", ["Large businesses", "Small disadvantaged businesses", "Foreign entities", "Universities only"], 1, "FAR 19.701 defines 8(a) purpose."),
        q("19-3-2", "8(a) sole-source threshold for non-manufacturing is approximately:", ["$750,000", "$4.5 million", "$25 million", "$100,000"], 1, "FAR 19.804-1 states $4.5M non-manufacturing threshold (verify current FAR)."),
        tf("19-3-3", "8(a) participants may receive business development assistance from SBA.", true, "Program includes developmental support."),
        q("19-3-4", "Competitive 8(a) requirements apply when:", ["Award exceeds competitive thresholds", "Always on micro-purchases", "Never", "Only for foreign contracts"], 0, "Above thresholds competitive 8(a) procedures apply."),
        tf("19-3-5", "Graduation ends 8(a) program participation.", true, "Nine-year limit with transitional phase."),
        q("19-3-6", "Manufacturing 8(a) sole-source threshold is higher at approximately:", ["$4.5M", "$7M", "$1M", "$500K"], 1, "FAR 19.804-1 sets $7M for manufacturing."),
      ],
      { farPart: 19, farReferences: ["19.700", "19.804"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "19.4",
      "HUBZone Program — FAR 19.800–19.806",
      [
        "Identify HUBZone eligibility including principal office and employee rules",
        "Calculate 10% price evaluation preference",
        "Maintain HUBZone certification compliance",
      ],
      [
        { citation: "FAR 19.804-1", text: "HUBZone small business concerns may receive a price evaluation preference of 10 percent in full and open competition." },
        { citation: "FAR 19.801", text: "The HUBZone program encourages economic development in historically underutilized business zones." },
      ],
      [
        { heading: "Eligibility", content: "Firm must be small, certified HUBZone, principal office in HUBZone, and at least 35% of employees reside in a HUBZone." },
        { heading: "Price preference", content: "In full and open competition, HUBZone offerors may receive up to 10% price evaluation preference—effective bid price reduced for comparison." },
      ],
      "Maintain employee residence documentation—SBA and COs verify HUBZone compliance. Price preference can win full-and-open bids without set-aside.",
      "HUBZone preferences help agencies meet goals while directing work to distressed areas.",
      [{ title: "Employee residency failure", situation: "HUBZone prime loses certification when only 28% of employees reside in HUBZone.", whyItMatters: "Ineligible for preference; prior awards may be reviewed." }],
      [{ violation: "Falsifying employee HUBZone addresses", consequence: "Certification revocation; False Claims Act exposure." }],
      [
        q("19-4-1", "HUBZone price preference in full and open competition is:", ["1%", "10%", "50%", "None"], 1, "FAR 19.804-1 provides 10% evaluation preference."),
        q("19-4-2", "HUBZone firms must have principal office:", ["In a HUBZone", "In Washington DC only", "Overseas", "At incumbent location"], 0, "Principal office location is an eligibility requirement."),
        tf("19-4-3", "At least 35% of employees must reside in a HUBZone.", true, "Employee residency requirement is part of eligibility."),
        q("19-4-4", "HUBZone preference applies in:", ["Full and open competition", "Sealed bid only", "Grant programs", "State contracts only"], 0, "Preference applies when competing full and open."),
        tf("19-4-5", "HUBZone certification requires SBA approval.", true, "Firms must be certified HUBZone small businesses."),
        q("19-4-6", "Price evaluation preference effectively:", ["Raises the HUBZone offeror's evaluated price", "Lowers evaluated price for comparison purposes", "Eliminates technical evaluation", "Waives TINA"], 1, "10% preference improves competitiveness in price evaluation."),
      ],
      { farPart: 19, farReferences: ["19.800", "19.804"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "19.5",
      "SDVOSB and VOSB — FAR 19.1300–19.1307",
      [
        "Explain VA verification and Veterans First program",
        "Apply SDVOSB sole-source thresholds",
        "Understand limitation on subcontracting for service-disabled veteran firms",
      ],
      [
        { citation: "FAR 19.1405", text: "The Veterans Benefits Act establishes contracting goals and preferences for service-disabled veteran-owned small business concerns." },
        { citation: "FAR 19.1406", text: "For VA acquisitions, the Veterans First contracting program applies in accordance with VA regulations." },
      ],
      [
        { heading: "SDVOSB eligibility", content: "Small business owned and controlled by service-disabled veterans. VA maintains verification for VA procurements; SBA certification for other agencies per current rules." },
        { heading: "Sole source", content: "SDVOSB sole-source thresholds apply similar to other socioeconomic programs when only one qualified SDVOSB is available at fair price." },
      ],
      "On VA work, ensure CVE/VA verification current. Limit subcontracting on SDVOSB set-asides—perform core functions in-house.",
      "VA Veterans First prioritizes verified SDVOSB/VOSB before other small business set-asides for VA acquisitions.",
      [{ title: "Subcontracting limit breach", situation: "SDVOSB prime on set-aside subcontracts 65% of dollars to large business for core services.", whyItMatters: "Violation of 13 CFR 125.6 limitation on subcontracting; severe penalties." }],
      [{ violation: "Misrepresenting veteran ownership", consequence: "Penalties under 18 U.S.C.; debarment; contract termination." }],
      [
        q("19-5-1", "Veterans First applies primarily to:", ["All DoD contracts", "VA acquisitions", "Grants", "Foreign military sales only"], 1, "FAR 19.1406 references VA Veterans First program."),
        q("19-5-2", "SDVOSB concerns are owned and controlled by:", ["Any small business", "Service-disabled veterans", "8(a) graduates only", "Foreign nationals"], 1, "Ownership and control by service-disabled veterans required."),
        tf("19-5-3", "Limitation on subcontracting applies to SDVOSB set-asides.", true, "13 CFR 125.6 limits subcontracting on socioeconomic set-asides."),
        q("19-5-4", "VA verification historically required for:", ["VA SDVOSB/VOSB set-asides and preferences", "All GSA orders", "Commercial item buys only", "Grants"], 0, "VA maintained verification for VA procurements."),
        tf("19-5-5", "Misrepresenting SDVOSB status can trigger criminal penalties.", true, "False veteran ownership claims are prosecuted."),
        q("19-5-6", "SDVOSB goals support:", ["Foreign aid", "Federal agency veteran contracting goals", "State tax credits only", "DCAA audits"], 1, "Veterans Benefits Act establishes goals."),
      ],
      { farPart: 19, farReferences: ["19.1300", "19.1405", "19.1406"] }
    ),
    proLesson(
      MODULE_ID,
      "far",
      "19.6",
      "Women-Owned Small Business — FAR 19.1500–19.1506",
      [
        "Distinguish WOSB and EDWOSB",
        "Identify eligible NAICS for WOSB set-asides",
        "Apply WOSB sole-source authority",
      ],
      [
        { citation: "FAR 19.1505", text: "Contracting officers may set aside acquisitions for WOSB or EDWOSB concerns in NAICS codes in which SBA has determined WOSB concerns are underrepresented or substantially underrepresented." },
        { citation: "FAR 19.1506", text: "Sole-source awards to WOSB or EDWOSB concerns may be made when only one qualified concern can perform at fair and reasonable price within thresholds." },
      ],
      [
        { heading: "WOSB vs EDWOSB", content: "WOSB is woman-owned small business. EDWOSB adds economic disadvantage criteria similar to 8(a) economic disadvantage." },
        { heading: "Set-aside NAICS", content: "SBA designates eligible NAICS for WOSB/EDWOSB set-asides. COs must use correct NAICS and certification in SAM." },
      ],
      "Ensure WOSB certification in SAM for eligible NAICS. EDWOSB set-asides may have less competition—monitor SBA eligible industry list.",
      "WOSB program helps agencies meet 5% women-owned small business contracting goal.",
      [{ title: "Wrong NAICS", situation: "CO sets aside under WOSB- eligible NAICS but solicitation assigns non-eligible NAICS.", whyItMatters: "Set-aside may be improper; protest risk." }],
      [{ violation: "Male spouse controls WOSB decisions", consequence: "Loss of certification; award invalidation." }],
      [
        q("19-6-1", "WOSB set-asides apply in NAICS where SBA finds:", ["Underrepresentation of women-owned firms", "Only large businesses", "No small businesses", "Foreign dominance"], 0, "FAR 19.1505 ties set-asides to SBA NAICS determinations."),
        q("19-6-2", "EDWOSB adds:", ["Export license", "Economic disadvantage criteria", "Mandatory CPFF", "VA verification"], 1, "EDWOSB includes economic disadvantage."),
        tf("19-6-3", "WOSB sole-source requires only one qualified WOSB at fair price within thresholds.", true, "FAR 19.1506 authorizes sole-source within limits."),
        q("19-6-4", "Women-owned small business federal goal is approximately:", ["23%", "5%", "50%", "0%"], 1, "Statutory goal is 5% to WOSB."),
        tf("19-6-5", "WOSB concerns must be certified or self-certify per current SBA rules in SAM.", true, "Certification requirements updated by SBA; verify current rules."),
        q("19-6-6", "Set-aside eligibility depends on:", ["Proposal color scheme", "Correct NAICS and WOSB certification", "Lowest bid only", "Incumbent status"], 1, "NAICS and certification control eligibility."),
      ],
      { farPart: 19, farReferences: ["19.1500", "19.1505", "19.1506"] }
    ),
  ],
  { farPart: 19, isStandaloneCourse: true }
);
