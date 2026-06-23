import { lesson, q, tf, scenario } from "../content-helpers";
import type { TrainingModule } from "../types";

export const MODULE_7: TrainingModule = {
  id: "accounting",
  number: 7,
  title: "Accounting and Finance",
  description:
    "Master government contract accounting fundamentals: FAR Part 31 cost principles, indirect rate structures, Incurred Cost Submissions, Truthful Cost or Pricing Data (TINA), and contract financing mechanisms that keep compliant contractors cash-positive.",
  careerOutcomes: [
    "Maintain DCAA-acceptable accounting systems aligned to DFARS 252.242-7006",
    "Build and defend indirect rate structures for proposals and ICS reconciliation",
    "Prepare timely Incurred Cost Submissions and respond to DCAA audit findings",
    "Apply TINA certification requirements and avoid defective pricing exposure",
    "Navigate progress payments, performance-based payments, and contract financing risks",
  ],
  lessons: [
    lesson(
      "accounting",
      "7.1",
      "Government Contract Accounting Basics",
      [
        "Apply FAR Part 31 cost principles to classify direct and indirect costs",
        "Maintain accounting system attributes required for government contract work",
        "Identify common unallowable costs and their audit consequences",
        "Reconcile job cost ledgers to contract CLINs for billing and audit traceability",
      ],
      [
        {
          heading: "FAR Part 31 Cost Principles Framework",
          content:
            "FAR Part 31 establishes the cost principles governing what contractors may charge to government contracts. Subpart 31.2 applies to commercial organizations; 31.3 covers nonprofits. Costs must be reasonable, allocable, and consistent with generally accepted accounting principles (GAAP). Reasonableness asks whether a prudent person would pay the amount under the circumstances. Allocability requires a clear causal or beneficial relationship to the contract. Consistency demands uniform treatment of similar costs across accounting periods. Contracts and finance staff must know Part 31 before approving invoices, pricing proposals, or ICS line items—DCAA auditors test every classification against these three tests.",
        },
        {
          heading: "Direct versus Indirect Cost Segregation",
          content:
            "Direct costs are identifiable to a single contract or task order—labor charged to a project code, ODCs tied to a CLIN, subcontractor costs for specific deliverables. Indirect costs benefit multiple contracts and require allocation through pools: fringe, overhead, and G&A. A compliant system segregates direct from indirect at the transaction level, not through month-end journal adjustments. Labor is the highest audit risk: employees must record time daily, supervisors must approve, and the labor distribution system must map hours to the correct contract or indirect charge number. Mischarging $50K of engineering hours to a fixed-price CLIN can trigger questioned costs, profit recapture, and CPARS commentary on billing integrity.",
        },
        {
          heading: "Accounting System Requirements",
          content:
            "Government contractors performing cost-reimbursement, T&M, or other covered work need accounting systems meeting criteria in DFARS 252.242-7006 and DCAA Contract Audit Manual guidance. Required attributes include: accumulation of costs by contract line item; segregation of direct and indirect costs; timekeeping and labor distribution; interim determination of costs; exclusion of unallowable costs; identification of costs by contract and by organizational unit; and consistent application of cost accounting practices. DCAA uses Form 1408 for pre-award surveys and Form 1107 for adequacy determinations. An inadequate system blocks new cost-type awards and triggers payment withholding under DFARS 252.242-7005.",
        },
        {
          heading: "Unallowable Costs and Compliance",
          content:
            "Certain costs are expressly unallowable under FAR 31.205—advertising, entertainment, fines, lobbying, alcohol, and bad debts are common examples. Other costs are conditionally allowable with limits—interest (31.205-20), executive compensation (31.205-6), and IR&D (31.205-18). Contractors must maintain a separate unallowable cost pool or account and ensure these costs never appear on government invoices. Penalties for charging unallowables include repayment with interest, suspension of progress payments, and potential False Claims Act exposure if billing was knowing. Contracts managers review monthly unallowable cost reports and confirm proposal BOEs exclude prohibited items.",
        },
        {
          heading: "Contract-to-Ledger Reconciliation",
          content:
            "Every government contract maps to ERP project numbers, charge codes, and CLIN structures. Contracts administrators reconcile funded values, obligated amounts, and billed-to-date against the accounting system monthly. Discrepancies—billing ahead of funding, charging to expired POP, or CLIN mismatches—surface in DCAA floor checks and ICS audits. Establish a contract status report tying finance, contracts, and program management to one data source. Before each invoice cycle, verify cumulative billed amounts do not exceed funded CLIN ceilings and that direct labor rates match negotiated or provisional billing rates.",
        },
      ],
      "Audit your accounting system against DCAA's 14 adequacy criteria this week. Identify one gap—timekeeping approval workflow, unallowable cost segregation, or CLIN-level accumulation—and assign an owner with a 30-day remediation target.",
      [
        {
          ...q(
            "7-1-1",
            "Under FAR Part 31, costs charged to government contracts must be:",
            [
              "Only the lowest bid regardless of documentation",
              "Reasonable, allocable, and consistently treated",
              "Identical to commercial pricing without review",
              "Approved verbally by the COR",
            ],
            1,
            "FAR 31.201-2 requires costs to be reasonable, allocable, and applied consistently."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-1-2",
            "Entertainment and lobbying costs are generally unallowable under FAR 31.205.",
            true,
            "FAR 31.205 prohibits or limits specific cost categories including entertainment and lobbying."
          ),
          examCategory: "accounting",
        },
        {
          ...scenario(
            "7-1-3",
            "An engineer charges 40 hours to a fixed-price DoD contract CLIN, but the work supported internal R&D for a commercial product. DCAA requests supporting records. What is the likely outcome?",
            [
              "Costs remain billable because the employee is cleared",
              "Hours are questioned as unallocable to the contract and may be unallowable if deemed mischarging",
              "The COR can retroactively approve any charges",
              "Fixed-price contracts have no audit risk",
            ],
            1,
            "Labor must be allocable to the contract charged; mischarging triggers questioned costs regardless of contract type."
          ),
          examCategory: "accounting",
        },
        {
          ...q(
            "7-1-4",
            "DFARS 252.242-7006 primarily addresses:",
            [
              "Cybersecurity incident reporting",
              "Accounting system administration and adequacy criteria",
              "Buy American domestic content",
              "Small business subcontracting plans",
            ],
            1,
            "252.242-7006 prescribes acceptable accounting system standards enforced through DCAA reviews."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-1-5",
            "Contractors should maintain separate tracking of unallowable costs to prevent billing them to the government.",
            true,
            "Segregating unallowables is a core accounting system requirement and audit defense practice."
          ),
          examCategory: "accounting",
        },
      ],
      {
        realWorldExercise:
          "Pull your last three government invoices and trace one labor line item from timesheet through labor distribution to the SF-1034 or WAWF submission. Document each approval step and identify any break in the CLIN-to-ledger chain.",
        martinPrompt:
          "Explain government contract accounting basics for a contracts manager at a $30M services contractor. Cover FAR 31.201-2 reasonableness tests, direct versus indirect segregation, one unallowable cost example under 31.205, and DFARS 252.242-7006 adequacy criteria. Include a dollar amount at audit risk and one action I should take today.",
      }
    ),
    lesson(
      "accounting",
      "7.2",
      "Indirect Rate Structures",
      [
        "Define fringe, overhead, and G&A pools and their allocation bases",
        "Calculate provisional, final, and forward pricing indirect rates",
        "Understand rate impacts on proposal pricing and contract profitability",
        "Prepare for DCAA forward pricing rate audits and rate agreement negotiations",
      ],
      [
        {
          heading: "Indirect Rate Pool Architecture",
          content:
            "Indirect rates allocate shared costs to contracts through structured pools. The fringe pool typically includes payroll taxes, insurance, and paid leave applied to direct labor or total labor base. Overhead (OH) pools capture facility, supervision, and engineering support costs allocated over a base such as direct labor or direct labor plus fringe. General and Administrative (G&A) pools cover executive management, finance, legal, and bid-and-proposal costs, usually allocated over total cost input (TCI) or a modified TCI base. Pool structure must be consistent year to year unless a change is documented, justified, and disclosed per CAS if applicable. Arbitrary year-end reclassifications to improve rate competitiveness invite DCAA scrutiny.",
        },
        {
          heading: "Rate Calculation Mechanics",
          content:
            "Rate equals pool costs divided by allocation base for the period. Example: $2.4M fringe pool ÷ $12M direct labor base = 20% fringe rate. Provisional billing rates are negotiated with DCAA or the contracting officer for interim invoicing on cost-type work—actual rates are trued up through ICS and final rate agreements. Forward pricing rates project future period costs for proposal pricing; DCAA may audit and recommend rates before award. Contracts professionals must understand that a 2% G&A miscalculation on a $50M cost proposal shifts price by $1M and affects competitive position and fee recovery.",
        },
        {
          heading: "Proposal and Billing Rate Alignment",
          content:
            "Proposals must use rates supportable by forward pricing submissions or historical audited rates adjusted for known changes. Billing at provisional rates during performance creates over/under billings reconciled at year end. Fixed-price contracts embed indirect rates at award—cost growth in overhead pools erodes margin unless scope changes support equitable adjustments. T&M contracts bill at specified loaded rates; rate escalation clauses may apply on option years. Contracts managers coordinate with finance to ensure mod pricing uses current forward pricing rate letters, not stale provisional rates from two fiscal years prior.",
        },
        {
          heading: "DCAA Rate Audits and Agreements",
          content:
            "DCAA forward pricing audits examine pool composition, base adequacy, exclusions, and trend analysis. Auditors compare proposed rates to historical actuals and industry benchmarks. A rate agreement documents negotiated final or forward rates between the contractor and CFA—typically DCAA for DoD contractors. Disagreements may defer to contracting officer determination. Questioning a pool base—such as improperly including B&P in G&A twice—can reduce allowable billings by hundreds of thousands. Maintain rate calculation workpapers with pool composition schedules, base reconciliations, and tie-outs to the general ledger.",
        },
        {
          heading: "Strategic Rate Management",
          content:
            "Leadership decisions on facilities, hiring, and bid investment directly affect rates. A new $500K/year lease added to the overhead pool without a proportional base increase raises OH rates and makes future proposals less competitive. Conversely, under-absorbing indirect costs during growth years depresses rates temporarily but creates catch-up billing later. Contracts and finance should model rate sensitivity before major corporate investments. On recompetes, analyze whether incumbent loaded rates in the pricing model match current forward pricing—evaluators and DCAA will compare.",
        },
      ],
      "Request your finance team produce a one-page rate build-up: fringe, OH, and G&A pools, bases, and resulting loaded labor rate for your largest active cost-type contract. Verify the rates match your latest provisional billing rate letter or forward pricing submission.",
      [
        {
          ...q(
            "7-2-1",
            "A typical indirect rate structure for government contractors includes:",
            [
              "Only material markup",
              "Fringe, overhead, and G&A pools with defined allocation bases",
              "Sales tax and VAT exclusively",
              "Subcontractor fee only",
            ],
            1,
            "Standard GovCon rate structures use fringe, OH, and G&A pools allocated over documented bases."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-2-2",
            "Provisional billing rates are later reconciled to actual indirect rates through Incurred Cost Submissions.",
            true,
            "Cost-type billing at provisional rates requires year-end reconciliation via ICS and rate agreements."
          ),
          examCategory: "accounting",
        },
        {
          ...scenario(
            "7-2-3",
            "Your finance team proposes moving all B&P costs from G&A to a direct charge on one capture effort to lower the G&A rate on a $80M proposal. As contracts manager, what is your concern?",
            [
              "None—any reclassification improves competitiveness",
              "Inconsistent cost allocation may violate FAR 31 consistency rules and DCAA forward pricing standards",
              "B&P is always direct-chargeable to contracts",
              "G&A rates are not evaluated in proposals",
            ],
            1,
            "Cost reclassifications solely to manipulate rates violate consistency principles and invite defective pricing or audit findings."
          ),
          examCategory: "accounting",
        },
        {
          ...q(
            "7-2-4",
            "Forward pricing rates are used primarily for:",
            [
              "Historical tax filings only",
              "Estimating and negotiating costs on future proposals and modifications",
              "SAM.gov registration",
              "CPARS self-assessment",
            ],
            1,
            "Forward pricing rates project future indirect costs for proposal pricing and DCAA audit support."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-2-5",
            "A rate agreement documents negotiated indirect rates between the contractor and the cognizant federal agency.",
            true,
            "Rate agreements formalize final or forward pricing rates after DCAA or CFA review."
          ),
          examCategory: "accounting",
        },
      ],
      {
        realWorldExercise:
          "Build a simplified indirect rate calculation spreadsheet for your organization: list each pool's costs, identify the allocation base, compute fringe/OH/G&A rates, and calculate a fully loaded labor rate for one pay grade. Compare results to your last DCAA forward pricing submission.",
        martinPrompt:
          "Walk me through indirect rate structures for a $45M DoD engineering services contractor. Explain fringe, OH, and G&A pools with sample dollar amounts, show how a 22% OH rate loads a $95/hr direct rate, and describe how DCAA audits forward pricing rates. Recommend one rate governance action for contracts and finance.",
      }
    ),
    lesson(
      "accounting",
      "7.3",
      "Incurred Cost Submissions (ICS)",
      [
        "Identify contracts and fiscal years requiring Incurred Cost Submissions",
        "Assemble ICS schedules reconciling books to claimed costs and indirect rates",
        "Meet DCAA ICE portal submission deadlines and documentation standards",
        "Respond to ICS audit findings and negotiate final indirect rate agreements",
      ],
      [
        {
          heading: "ICS Purpose and Regulatory Basis",
          content:
            "Incurred Cost Submissions (ICS) are annual reports reconciling actual costs incurred on flexibly priced contracts—cost-reimbursement, T&M, and time-and-materials with cost elements—to the amounts billed and the indirect rates applied. FAR 52.216-7 (Allowable Cost and Payment) and agency supplements require submission within six months of fiscal year end unless extended. The ICS enables DCAA to audit actual rates, identify questioned costs, and establish final rate agreements that adjust prior provisional billings. Failure to submit timely ICS delays contract closeout, blocks new awards on some agencies' systems, and may trigger unilateral rate determinations by the government.",
        },
        {
          heading: "ICS Content and Schedules",
          content:
            "A complete ICS includes: listing of all contracts subject to submission; Schedule H (Statement of Indirect Expenses) showing pool costs and computed rates; reconciliation of books of account to claimed costs; identification of unallowable costs excluded; subcontractor incurred cost data; and claimed versus billed comparisons by contract. Supporting schedules tie general ledger accounts to pool definitions. Materiality thresholds determine which contracts appear on detailed schedules. Contracts managers ensure the contract list matches the contracts database—missing a $3M CPFF task order omits costs from rate calculations and creates reconciliation errors DCAA will find.",
        },
        {
          heading: "DCAA ICE Portal and Submission Timeline",
          content:
            "DoD contractors submit ICS electronically through DCAA's Incurred Cost Electronically (ICE) portal. Registration requires a DCAA ICE account linked to the contractor's CAGE code and CFA assignment. Internal timeline: fiscal year close (e.g., December 31) → financial statement preparation (60 days) → ICS assembly and management review (30 days) → submission by June 30. Build subcontractor ICS collection into the timeline—prime contractors must include sub costs in rate calculations and may need audited sub data. Document extensions requested and granted; do not assume silence equals approval.",
        },
        {
          heading: "Audit Process and Questioned Costs",
          content:
            "After ICS submission, DCAA assigns auditors who review pool composition, base calculations, unallowable cost exclusions, and contract-level charges. Questioned costs may arise from misallocated labor, unsupported ODCs, unallowable items charged to government work, or subcontractor noncompliance. Contractors receive a Form 1 (Audit Report) or equivalent with findings. Response requires factual rebuttal with documentation—not argument alone. Agreed questioned costs may be credited against future billings or repaid. Unresolved findings can escalate to contracting officer intervention and payment suspension.",
        },
        {
          heading: "Final Rate Agreement and Closeout Impact",
          content:
            "Successful ICS audit culminates in a final indirect rate agreement for the fiscal year, adjusting provisional billings to actuals. Over-billings require refund or credit; under-billings may be recovered through supplemental invoices where contract terms permit. Final rates feed forward pricing for subsequent proposals. ICS completion is prerequisite to contract closeout on cost-type work—physical completion without ICS resolution leaves billions industry-wide in unsettled balances. Contracts administrators track ICS status per contract in the closeout pipeline and escalate delinquent subcontractor submissions that block prime ICS certification.",
        },
      ],
      "Draft an ICS internal schedule for your next fiscal year end: milestone dates for GL close, pool reconciliation, subcontractor data collection, management review, ICE submission, and DCAA audit response. Assign owners to each milestone.",
      [
        {
          ...q(
            "7-3-1",
            "Incurred Cost Submissions are generally required for:",
            [
              "All firm-fixed-price contracts under $10K",
              "Flexibly priced contracts such as cost-reimbursement and T&M per FAR 52.216-7",
              "Commercial item purchases using FAR Part 12 procedures only",
              "Grant applications to NIH",
            ],
            1,
            "FAR 52.216-7 requires annual ICS for applicable flexibly priced contracts."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-3-2",
            "ICS submissions are typically due six months after the contractor's fiscal year end unless extended.",
            true,
            "FAR 52.216-7 establishes the six-month submission deadline standard."
          ),
          examCategory: "accounting",
        },
        {
          ...scenario(
            "7-3-3",
            "Your prime ICS is due in 45 days but a major subcontractor has not provided audited incurred cost data for $4M in charges. What should the contracts manager prioritize?",
            [
              "Submit ICS excluding all subcontractor costs",
              "Escalate sub data collection, document the delay, request extension if needed, and do not certify incomplete data",
              "Fabricate sub rates based on prior year",
              "Skip ICS because the prime audit is optional",
            ],
            1,
            "Incomplete subcontractor data undermines ICS accuracy; pursue data, document efforts, and seek extension rather than certifying false information."
          ),
          examCategory: "accounting",
        },
        {
          ...q(
            "7-3-4",
            "Schedule H in an ICS primarily shows:",
            [
              "Employee vacation balances",
              "Statement of indirect expenses and computed rates",
              "Security clearance roster",
              "Proposal color team schedules",
            ],
            1,
            "Schedule H presents indirect pool costs and calculated fringe, OH, and G&A rates."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-3-5",
            "Final rate agreements from ICS audits adjust provisional billings to actual indirect rates for the fiscal year.",
            true,
            "ICS reconciliation trues up provisional billing rates to audited actual rates."
          ),
          examCategory: "accounting",
        },
      ],
      {
        realWorldExercise:
          "Create an ICS contract listing spreadsheet: every active cost-type and T&M contract, fiscal year, obligated value, cumulative billed, subcontractor ICS required (Y/N), and closeout hold status. Flag contracts missing from last year's submission.",
        martinPrompt:
          "Explain Incurred Cost Submissions for a contracts manager preparing FY2025 ICS on $60M of CPFF and T&M DoD work. Cover FAR 52.216-7 deadlines, ICE portal steps, Schedule H contents, and how questioned costs on a $250K ODC finding get resolved. Give me a 90-day pre-submission checklist.",
      }
    ),
    lesson(
      "accounting",
      "7.4",
      "Truthful Cost or Pricing Data (TINA)",
      [
        "Determine when TINA and certified cost or pricing data requirements apply",
        "Distinguish certified cost or pricing data from other than certified data",
        "Execute FAR 52.215-20 certification and maintain data current through agreement",
        "Identify defective pricing consequences under FAR 15.407-1",
      ],
      [
        {
          heading: "TINA Statutory Framework",
          content:
            "The Truth in Negotiations Act (TINA), codified at 10 U.S.C. § 3705 and implemented through FAR 15.403-4 and 15.406-2, requires offerors to submit certified cost or pricing data when negotiating certain contracts above the threshold (adjusted periodically; verify current FAR 15.403-4 threshold) unless a statutory exception applies. Certified cost or pricing data means all facts that a prudent buyer or seller would reasonably expect to affect price negotiations significantly. The requirement protects the government from information asymmetry in sole-source and noncompetitive negotiations. Contracts managers must know when TINA applies before proposal submission—not after the KO requests certification.",
        },
        {
          heading: "Exceptions to Certification",
          content:
            "FAR 15.403-1 lists exceptions: adequate price competition, commercial items, prices set by law or regulation, and waiver by the contracting officer. 'Adequate price competition' requires meaningful comparison of offers—not a single responsive bid. Commercial item determinations under FAR Part 12 may eliminate certification on qualifying items. When an exception applies, offerors may submit data other than certified cost or pricing data—information without the TINA certification under FAR 52.215-21. Misapplying exceptions leads to either over-disclosure in competitive bids or under-disclosure in sole-source negotiations—the latter carries criminal and civil penalties.",
        },
        {
          heading: "Certification and Data Currency",
          content:
            "FAR 52.215-20 requires the offeror to certify that to the best of its knowledge, the cost or pricing data submitted were accurate, complete, and current as of the date of agreement on price or an earlier date specified by the agency. Data must remain current through final agreement—material changes in labor rates, subcontractor quotes, or material costs after submission require disclosure before price agreement. The certifying official is typically a company officer with authority to bind the organization. Contracts professionals coordinate with finance and pricing to update submissions when subs re-quote or labor markets shift during prolonged negotiations.",
        },
        {
          heading: "Defective Pricing",
          content:
            "FAR 15.407-1 addresses defective pricing: when certified data were inaccurate, incomplete, or noncurrent, and the government increased the contract price by a significant amount because of the defect. The government may recover the overpayment plus interest through a price adjustment. Defective pricing is not fraud—it is a contractual remedy for data defects—but knowing submission of false data crosses into False Claims Act territory. Common defects: outdated sub quotes, omitted escalation, incorrect labor mix, failure to disclose known schedule delays affecting cost. Document the data trail from BOE to certification to defend accuracy or support voluntary disclosure.",
        },
        {
          heading: "Contracts Manager TINA Workflow",
          content:
            "Before proposal submission: confirm TINA applicability and applicable threshold; verify exception documentation if claiming commercial item or competition; ensure BOE ties to accounting system data; obtain subcontractor certified data or flow-down commitments; and schedule certifying official review. During negotiation: track data updates, issue supplemental disclosures before agreement, and retain negotiation logs. After award: monitor for post-award audit requests comparing certified data to actual costs—significant variances trigger defective pricing reviews. On a $15M sole-source CPFF award, a 5% defective pricing finding costs $750K plus interest.",
        },
      ],
      "Review your last negotiated proposal over the TINA threshold. Trace the FAR 52.215-20 certification date to final price agreement and list any cost changes between those dates that should have been disclosed.",
      [
        {
          ...q(
            "7-4-1",
            "Certified cost or pricing data under TINA means:",
            [
              "Only the competitor's published price list",
              "All facts a prudent buyer would expect to significantly affect price negotiations",
              "Marketing brochures without cost detail",
              "Verbal estimates from the capture manager",
            ],
            1,
            "TINA defines certified cost or pricing data as all facts materially affecting price negotiations."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-4-2",
            "Adequate price competition is an exception that may eliminate the requirement for certified cost or pricing data.",
            true,
            "FAR 15.403-1(b)(1) provides adequate price competition as a TINA exception."
          ),
          examCategory: "accounting",
        },
        {
          ...scenario(
            "7-4-3",
            "During sole-source negotiation of a $12M CPFF contract, your key subcontractor raises its quote by $400K after your FAR 52.215-20 certification but before price agreement. What must you do?",
            [
              "Absorb the increase silently to preserve the relationship",
              "Disclose the updated subcontractor data to the government before final price agreement",
              "Withdraw from the competition without notice",
              "Certify that no changes occurred",
            ],
            1,
            "Material cost changes after certification must be disclosed and data kept current through agreement per FAR 15.406-2."
          ),
          examCategory: "accounting",
        },
        {
          ...q(
            "7-4-4",
            "Defective pricing under FAR 15.407-1 may result in:",
            [
              "Automatic contract termination for default",
              "Government recovery of price increase attributable to inaccurate certified data plus interest",
              "Mandatory debarment without review",
              "Loss of SAM registration only",
            ],
            1,
            "15.407-1 provides price adjustment remedies when defective certified data caused government overpayment."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-4-5",
            "FAR 52.215-20 certification must be executed by an authorized company official.",
            true,
            "The certificate requires signature by someone with authority to bind the offeror."
          ),
          examCategory: "accounting",
        },
      ],
      {
        realWorldExercise:
          "Build a TINA decision tree for your pipeline: contract type, dollar value, competition status, commercial item status, and resulting data requirement (certified, other than certified, or none). Apply it to three active opportunities.",
        martinPrompt:
          "Explain TINA and certified cost or pricing data for a sole-source $18M cost-plus negotiation. Cover FAR 15.403-4 threshold check, exceptions, 52.215-20 certification workflow, and a defective pricing example with dollar impact. Tell me what contracts must verify before the certifying official signs.",
      }
    ),
    lesson(
      "accounting",
      "7.5",
      "Contract Financing",
      [
        "Distinguish progress payments, performance-based payments, and commercial financing",
        "Apply FAR 52.232-16 progress payment rates and liquidation rules",
        "Understand advance payments and their rare approval requirements",
        "Manage cash flow risks from financing withholdings and audit adjustments",
      ],
      [
        {
          heading: "Purpose of Government Contract Financing",
          content:
            "Government contract financing provides contractors cash flow during performance so they need not fully self-fund long-cycle production or services. Financing is not a profit center—it is a bridge repaid through delivery and liquidation on firm-fixed-price contracts or through cost billing on cost-type work. FAR Part 32 governs contract financing policies. The government minimizes its financial risk through lien rights on contractor assets, progress payment liquidation schedules, and audit rights. Contracts managers coordinate with finance to model cash flow impact of financing terms during proposal and negotiation—winning a $20M FFP contract without progress payments may require a credit line the company cannot support.",
        },
        {
          heading: "Progress Payments on Fixed-Price Contracts",
          content:
            "FAR 52.232-16 provides customary progress payments on FFP contracts, typically at 80% of eligible costs incurred (90% for small businesses). Eligible costs include labor, materials, and subcontracts directly attributable to the contract, minus profit and unallowable items. Liquidation occurs as deliveries are accepted—progress payments applied to delivered items convert to contract payments. The liquidation rate (often 80/20) determines how quickly progress payments convert. Stop-work orders, terminations, or performance delays disrupt liquidation and can leave the contractor owing repayments. Track cumulative progress payments against contract value and delivery schedule monthly.",
        },
        {
          heading: "Performance-Based Payments (PBP)",
          content:
            "Performance-based payments under FAR 52.232-32 link financing to achievement of defined events or milestones rather than cost incurrence. PBP shifts risk from cost-based financing to deliverable completion—favorable for well-defined programs with measurable milestones. Each event has a defined amount and acceptance criteria. Unlike progress payments, PBP amounts are not tied to costs incurred, reducing government exposure to inefficient spending. Contracts professionals structure event definitions with clear acceptance authority and dates. Poorly written milestones—'Phase 1 complete' without objective criteria—create disputes over payment eligibility.",
        },
        {
          heading: "Advance Payments and Unusual Financing",
          content:
            "Advance payments under FAR 52.232-12 are rare—government pays before performance and assumes higher risk. Approval requires strong justification, congressional notification in some cases, and adequate security. Commercial item financing under FAR 52.232-27 follows different rules aligned to commercial practices. Cost-type contracts generally do not use progress payments; they bill allowable costs through SF-1034 or WAWF as incurred. Letter of credit financing and loan guarantees appear in specialized acquisitions. Contracts staff flag non-standard financing requests early—negotiating advance payments without CFO and legal review creates repayment obligations the company may not survive if performance fails.",
        },
        {
          heading: "Cash Flow and Audit Intersection",
          content:
            "Progress payment eligibility depends on acceptable accounting systems and compliant cost incurrence. DCAA questioned costs reduce eligible progress payment bases. DFARS 252.242-7005 allows withholding up to 5% (or more with approval) of progress payments when accounting or estimating systems are deficient. Termination for default accelerates repayment of unliquidated progress payments. Model worst-case scenarios: 20% billing hold on a $10M contract strains $2M in working capital. Align financing strategy with ICS timelines—provisional rate over-billings may require refunds that coincide with progress payment liquidation shortfalls. Finance, contracts, and program management should review cash flow monthly on financed contracts.",
        },
      ],
      "For your largest FFP contract with progress payments, calculate current liquidation status: cumulative progress payments, accepted deliveries, and unliquidated balance. Flag any delivery delays that could trigger repayment obligations.",
      [
        {
          ...q(
            "7-5-1",
            "Customary progress payments under FAR 52.232-16 on FFP contracts are typically based on:",
            [
              "Profit margin only",
              "Eligible costs incurred attributable to the contract",
              "Employee attendance records",
              "CPARS ratings",
            ],
            1,
            "Progress payments reimburse a percentage of eligible costs incurred on FFP contracts."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-5-2",
            "Performance-based payments link financing to achievement of defined events rather than costs incurred.",
            true,
            "FAR 52.232-32 PBP ties payments to milestone completion, not cost incurrence."
          ),
          examCategory: "accounting",
        },
        {
          ...scenario(
            "7-5-3",
            "A contractor on a $15M FFP production contract has received $9M in progress payments but delivery delays mean only $5M in accepted items. What risk does the contracts manager face?",
            [
              "No risk—progress payments never require repayment",
              "Unliquidated progress payments may exceed acceptable levels and require repayment or accelerated delivery",
              "The COR automatically converts progress payments to award fee",
              "Liquidation applies only at contract closeout regardless of delivery",
            ],
            1,
            "Progress payments must liquidate against deliveries; delays create unliquidated balances requiring repayment or correction."
          ),
          examCategory: "accounting",
        },
        {
          ...q(
            "7-5-4",
            "Advance payments under FAR 52.232-12 are:",
            [
              "Standard on all commercial item contracts",
              "Rare and require strong justification and adequate security",
              "Automatic for small businesses",
              "Identical to progress payments",
            ],
            1,
            "Advance payments before performance are uncommon and tightly controlled under FAR 52.232-12."
          ),
          examCategory: "accounting",
        },
        {
          ...tf(
            "7-5-5",
            "DFARS 252.242-7005 may authorize withholding of progress payments when contractor business systems are deficient.",
            true,
            "252.242-7005 permits payment withholding for inadequate accounting, estimating, and other covered systems."
          ),
          examCategory: "accounting",
        },
      ],
      {
        realWorldExercise:
          "Build a 12-month cash flow model for one FFP contract with progress payments: monthly cost incurrence, progress payment receipts, delivery schedule, liquidation, and net cash position. Identify the month of maximum unliquidated progress payment exposure.",
        martinPrompt:
          "Explain contract financing for a contracts manager on a $25M FFP DoD manufacturing contract. Compare progress payments under 52.232-16 versus performance-based payments under 52.232-32, cover liquidation mechanics with sample dollar amounts, and describe how a DCAA questioned cost finding affects eligible progress payment bases.",
      }
    ),
  ],
};
