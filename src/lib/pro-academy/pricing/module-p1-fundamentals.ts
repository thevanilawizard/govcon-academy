import { proLesson, proModule, q, tf } from "../content-helpers";

const MODULE_ID = "pricing-p1";

export const PRICING_P1_MODULE = proModule(
  MODULE_ID,
  "pricing",
  1,
  "P1: Cost Accounting Fundamentals",
  "Direct vs indirect costs, labor and ODC structures, indirect rate pools, and fully loaded rate calculations for government proposals.",
  [
    "Build fringe, overhead, and G&A rate structures aligned with DCAA expectations",
    "Calculate fully loaded labor rates from base salary through fee",
    "Classify costs correctly as direct or indirect for proposal and audit defense",
  ],
  [
    proLesson(
      MODULE_ID,
      "pricing",
      "P1.1",
      "Cost Concepts: Direct, Indirect, and Allocation",
      [
        "Distinguish direct from indirect costs under FAR Part 31",
        "Define final vs intermediate cost objectives",
        "Apply allocation methods: beneficial relationship, cause and effect, equitable distribution",
      ],
      [
        { citation: "FAR 31.201-4", text: "A cost is allocable if it is incurred specifically for the contract; or benefits both the contract and other work, and can be distributed in reasonable proportion to the benefits received." },
        { citation: "FAR 31.202", text: "Direct costs are those identified specifically with a particular final cost objective." },
      ],
      [
        { heading: "Direct costs", content: "Direct labor, ODCs, and subcontracts charged to a contract because they specifically benefit that contract effort." },
        { heading: "Indirect costs", content: "Costs that benefit multiple contracts and are accumulated in pools (fringe, overhead, G&A) then allocated via rates." },
        { heading: "Homogeneous pools", content: "Pools must contain similar costs allocated with consistent bases—mixing unrelated costs invites DCAA questioned costs." },
      ],
      "Misclassified costs fail audit and inflate or deflate rates. Align your chart of accounts with proposal structure before first bill.",
      "Government relies on consistent cost accounting for fair pricing and audit. CAS-covered contractors face additional consistency requirements.",
      [{ title: "G&A on one contract", situation: "CFO charges entire executive salary to a single high-profile contract.", whyItMatters: "Executive costs are typically G&A—not direct—creating unallowable or misallocated costs." }],
      [{ violation: "Charging corporate marketing to direct labor pool", consequence: "Pool contamination; rate disallowance; repricing." }],
      [
        q("p1-1-1", "Direct costs are:", ["Always unallowable", "Identified specifically with a final cost objective", "Only fringe benefits", "Only on T&M contracts"], 1, "FAR 31.202 defines direct costs."),
        q("p1-1-2", "Allocability requires:", ["Random assignment", "Beneficial relationship to the contract", "KO oral approval only", "No documentation"], 1, "FAR 31.201-4 sets allocability tests."),
        tf("p1-1-3", "Indirect costs are allocated through homogeneous pools.", true, "Consistent pool structure supports rate development."),
        q("p1-1-4", "Final cost objectives are typically:", ["Contracts or deliverables", "Only G&A pool", "Employee personal accounts", "State tax filings"], 0, "Contracts are final objectives receiving allocated indirects."),
        tf("p1-1-5", "Cause-and-effect is a valid allocation method.", true, "FAR 31.201-4 describes allocation methods."),
        q("p1-1-6", "Mixing unallowable costs into indirect pools:", ["Is recommended", "Contaminates pools and risks disallowance", "Eliminates audits", "Is required by TINA"], 1, "Unallowables must be excluded per 31.201-2."),
      ],
      { farReferences: ["31.201", "31.202", "31.203"] }
    ),
    proLesson(
      MODULE_ID,
      "pricing",
      "P1.2",
      "Direct Labor Categories and Loaded Rates",
      [
        "Define labor categories consistent with PWS and proposal",
        "Calculate unloaded vs loaded labor rates",
        "Handle overtime, PTO, and consultant labor",
      ],
      [
        { citation: "FAR 31.205-6", text: "Compensation for personal services must be reasonable for the work performed and conform to established policies consistently applied." },
      ],
      [
        { heading: "Labor categories", content: "Categories must map to PWS skill requirements. 'Senior Engineer' in proposal must match employee qualifications billed." },
        { heading: "Loaded vs unloaded", content: "Unloaded rate is base salary divided by hours. Loaded rate adds fringe, overhead, G&A, and optionally fee for billing/proposal price." },
        { heading: "Overtime and PTO", content: "Overtime must be authorized and allowable. PTO accrual is typically in fringe pool, not double-counted as direct hours." },
      ],
      "Maintain a labor mapping matrix: employee → labor category → contract CLIN. Consultants need allowable sub/consultant documentation per 31.205-33.",
      "Government evaluates labor realism—hours and rates must be credible vs PWS and historical data.",
      [{ title: "Category mismatch", situation: "Staff billed at 'Principal' rates though resumes support 'Senior Analyst' only.", whyItMatters: "Invoice disallowance and potential fraud if knowing." }],
      [{ violation: "Billing uncompensated overtime routinely without disclosure", consequence: "Defective pricing or labor mischarging findings." }],
      [
        q("p1-2-1", "Unloaded labor rate typically equals:", ["Salary plus fee", "Base salary divided by productive hours", "G&A only", "Travel per diem"], 1, "Base hourly rate excludes indirects and fee."),
        q("p1-2-2", "Labor categories must align with:", ["Random HR titles only", "PWS requirements and billed qualifications", "CPARS colors", "Protest grounds"], 1, "Misalignment triggers audit findings."),
        tf("p1-2-3", "Consultant labor requires documentation per FAR 31.205-33.", true, "Consultant costs have specific allowability rules."),
        q("p1-2-4", "PTO costs are commonly treated in:", ["Fringe pool", "Travel ODCs", "Fee only", "Unallowable always"], 0, "Fringe typically includes paid leave."),
        tf("p1-2-5", "Overtime premium must be authorized to be allowable.", true, "Unauthorized OT may be questioned."),
        q("p1-2-6", "Loaded rate includes:", ["Fringe and overhead/G&A as applicable", "Only base pay", "Only fee", "State sales tax"], 0, "Loaded rates stack indirect structures on base labor."),
      ],
      { farReferences: ["31.205-6", "31.205-33"] }
    ),
    proLesson(
      MODULE_ID,
      "pricing",
      "P1.3",
      "Other Direct Costs (ODCs)",
      [
        "Price travel, materials, subs, and consultants in proposals",
        "Apply FAR 31.205-46 travel allowability",
        "Document ODC basis of estimate",
      ],
      [
        { citation: "FAR 31.205-46", text: "Travel costs are allowable when they follow agency regulations or GSA FTR, and are reasonable." },
        { citation: "FAR 31.205-33", text: "Professional and consultant services must be supported by evidence of services rendered and reasonableness of fees." },
      ],
      [
        { heading: "Travel", content: "Use GSA per diem for lodging/meals unless actual cost justified. First class generally unallowable. Document trip purpose and contract benefit." },
        { heading: "Subcontracts", content: "Include sub BOEs, competition evidence, and flow-down compliance. Prime remains responsible for sub cost allowability on cost-type." },
        { heading: "Materials and ODCs", content: "Material handling overhead may apply. Scrap/spoilage must be reasonable and allocable." },
      ],
      "Every ODC line needs a BOE: quotes, historical actuals, or parametric basis. Travel without pre-approval on cost-type may be disallowed.",
      "COs and auditors test ODC realism— inflated travel or unexplained sub costs trigger negotiations or withholds.",
      [{ title: "First class airfare", situation: "Project lead books business class on 2-hour flight without FAR deviation approval.", whyItMatters: "FAR 31.205-46 limits first/business class without justification." }],
      [{ violation: "Subcontract without price analysis documentation", consequence: "FAR 15.404-3 flow-down violation on prime; questioned costs." }],
      [
        q("p1-3-1", "Travel per diem rates come from:", ["Contractor preference", "GSA/FTR unless contract specifies otherwise", "Employee choice", "Protest board"], 1, "FAR 31.205-46 references FTR/GSA rates."),
        q("p1-3-2", "Consultant costs require:", ["Only an invoice", "Evidence of services and reasonableness", "No documentation on FFP", "Lobbying disclosure only"], 1, "FAR 31.205-33 sets documentation standards."),
        tf("p1-3-3", "Subcontract BOEs should include competition or sole-source justification.", true, "Prime must document subcontract pricing per FAR 15.404-3."),
        q("p1-3-4", "Material handling overhead:", ["Never exists", "May apply when material is direct cost", "Is always G&A", "Replaces fringe"], 1, "Material OH allocates handling costs to material direct cost."),
        tf("p1-3-5", "Spouse travel is generally unallowable.", true, "FAR 31.205-46 restricts companion travel."),
        q("p1-3-6", "ODCs must be:", ["Reasonable and allocable to the contract", "Always 10% of labor", "Unallowable on FFP", "Excluded from proposals"], 0, "FAR 31.201-2 applies to all cost elements."),
      ],
      { farReferences: ["31.205-33", "31.205-46", "31.205-26"] }
    ),
    proLesson(
      MODULE_ID,
      "pricing",
      "P1.4",
      "Indirect Rate Structure: Fringe, Overhead, G&A",
      [
        "Build fringe, overhead, and G&A pools with typical contents",
        "Select appropriate allocation bases",
        "Benchmark rates by company size",
      ],
      [
        { citation: "FAR 31.203", text: "Indirect costs are those incurred for common or joint objectives and not readily identified with a final cost objective." },
      ],
      [
        { heading: "Fringe", content: "Pool: FICA, unemployment, health, retirement, PTO accrual. Base: often direct labor dollars. Typical 25–40%." },
        { heading: "Overhead", content: "Pool: indirect labor, facilities, project support equipment. Base: direct labor or direct labor + fringe for services. Typical 15–40%." },
        { heading: "G&A", content: "Pool: executive, finance, HR, legal, BD (allowable portion), corporate IT. Base: total cost input or value-added. Typical 10–25%." },
      ],
      "Rates must match actual accounting system—proposal rates different from books trigger realism issues and billing problems.",
      "DCAA reviews pool composition and base consistency for adequacy under DFARS 252.242-7006 on DoD contracts.",
      [{ title: "Rate mismatch", situation: "Proposal uses 22% overhead; accounting system runs 31% actual.", whyItMatters: "Cost overrun on FFP or billing shortfall on cost-type; defective pricing risk." }],
      [{ violation: "BD costs in direct overhead pool without allowability review", consequence: "Unallowable selling costs in pool; rate adjustment." }],
      [
        q("p1-4-1", "Fringe pool typically includes:", ["FICA and health benefits", "Federal income tax", "Lobbying", "Fines"], 0, "Fringe covers payroll-related benefits and taxes on labor."),
        q("p1-4-2", "G&A pool commonly includes:", ["Executive and corporate staff costs", "Direct project labor", "Contract-specific travel", "CLIN 0001 only"], 0, "G&A is corporate-level indirect."),
        tf("p1-4-3", "Overhead base is often direct labor dollars on services contracts.", true, "Common structure though company practice varies."),
        q("p1-4-4", "Typical fringe rates for GovCon services are roughly:", ["1–5%", "25–40%", "100–200%", "0%"], 1, "Market range cited in training materials."),
        tf("p1-4-5", "Homogeneous pools improve audit defensibility.", true, "Mixed pools draw DCAA questions."),
        q("p1-4-6", "Indirect rates allocate:", ["Only unallowables", "Joint costs not directly identifiable to contracts", "Only fee", "State taxes only"], 1, "FAR 31.203 defines indirect costs."),
      ],
      { farReferences: ["31.203", "31.204"] }
    ),
    proLesson(
      MODULE_ID,
      "pricing",
      "P1.5",
      "Fully Loaded Labor Rate Calculation",
      [
        "Calculate fully loaded cost from base salary through G&A",
        "Add fee to determine billable proposal rate",
        "Apply escalation for multi-year proposals",
      ],
      [
        { citation: "FAR 15.404-4", text: "Profit or fee prenegotiation objectives should reflect the complexity and risk of the work." },
      ],
      [
        { heading: "Step-by-step example", content: "Senior Engineer: $120,000 salary ÷ 2,080 = $57.69/hr base. Fringe 32% on base = $18.46 → $76.15. OH 20% on base = $11.54 → $87.69 before G&A. G&A 15% on total cost input ≈ $13.15 → ~$100.84 cost. Fee 10% → ~$110.92 billable." },
        { heading: "Wrap vs multiplicative", content: "Companies use different wrap formulas—document yours consistently between proposals and accounting." },
        { heading: "Escalation", content: "Apply 2–4% annual escalation on labor rates for option years using ECI or company policy." },
      ],
      "Build an Excel rate model tied to your accounting system. Sensitize fringe and G&A ±2% to understand competitive band.",
      "Evaluators compare loaded rates to IGCE and historical data—unrealistically low rates trigger realism discussions.",
      [{ title: "Lowball rates", situation: "Proposal loads senior labor at $75/hr when company actual is $105/hr.", whyItMatters: "Realism finding or post-award performance failure." }],
      [{ violation: "Using loaded rates that omit known upcoming health premium increase", consequence: "Defective pricing if certified data omitted." }],
      [
        q("p1-5-1", "Base hourly rate from $120K salary over 2,080 hours is approximately:", ["$57.69", "$120", "$240", "$30"], 0, "120000/2080 ≈ 57.69."),
        q("p1-5-2", "Fringe at 32% on $57.69 adds approximately:", ["$18.46", "$5", "$100", "$0"], 0, "57.69 × 0.32 ≈ 18.46."),
        tf("p1-5-3", "Fee is applied after direct and indirect costs for proposal pricing.", true, "Fee is separate from cost buildup unless cost-plus-fee structure."),
        q("p1-5-4", "Fully loaded billable rate includes:", ["Base, fringe, OH, G&A, and fee as applicable", "Only base salary", "Only G&A", "Travel only"], 0, "Full stack produces billable rate."),
        tf("p1-5-5", "Escalation is commonly applied to option year labor rates.", true, "Multi-year proposals include escalation assumptions."),
        q("p1-5-6", "Rate models must reconcile to:", ["Accounting system actuals", "Marketing brochures only", "Protest decisions", "SAM profile"], 0, "Proposal/accounting alignment is audit critical."),
      ],
      { farReferences: ["15.404-4", "31.201-2"] }
    ),
  ]
);
