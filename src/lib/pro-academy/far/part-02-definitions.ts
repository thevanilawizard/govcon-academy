import { proLesson, proModule, q, tf, fillBlank } from "../content-helpers";
import type { TrainingSection } from "@/lib/education/training/types";

const TRACK = "far" as const;
const MODULE_ID = "far-part-02";

function def(term: string, definition: string, example: string): TrainingSection {
  return {
    heading: term,
    content: `${definition} Example: ${example}`,
  };
}

const coreAcquisitionDefs: TrainingSection[] = [
  def("Acquisition", "The process of acquiring supplies or services by contract with appropriated funds through purchase or lease.", "Agency buys cloud hosting via competitive RFP."),
  def("Acquisition plan", "Written document describing the overall strategy for managing an acquisition.", "Plan documents competition strategy and milestones for a $50M IT program."),
  def("Agency", "An executive agency or a defense agency as defined in 5 U.S.C.", "Department of Veterans Affairs procuring medical IT."),
  def("Best value", "Expected outcome providing greatest overall benefit in response to requirements.", "Award to higher-priced offer with superior past performance."),
  def("Change order", "Written order directing a unilateral change within scope under the Changes clause.", "KO issues change order adding 500 user seats under FFP contract."),
  def("Claim", "Written demand seeking payment or adjustment under the Disputes clause.", "Contractor submits claim for constructive change after COR-directed extra testing."),
  def("Commercial item", "Product or service of a type customarily used by the general public or sold in the commercial marketplace per FAR 2.101.", "Off-the-shelf laptops sold through reseller channels."),
  def("Competitive procedures", "Methods including sealed bidding, competitive proposals, and simplified acquisition.", "Agency uses FAR Part 15 negotiated RFP with multiple offerors."),
  def("Contract", "Mutually binding legal relationship obligating seller to furnish supplies/services and buyer to pay.", "FFP task order under an IDIQ contract."),
  def("Contracting", "Purchasing, renting, leasing, or otherwise obtaining supplies or services from non-federal sources.", "KO negotiates award with responsible offeror."),
  def("Contracting officer", "Person with written authority to enter into, administer, or terminate contracts and bind the government.", "KO signs SF-33 award document."),
  def("Cost or pricing data", "All facts that prudent buyers/sellers would reasonably expect to affect price negotiations significantly.", "Historical labor rates and vendor quotes submitted under TINA."),
  def("Defective pricing", "Certified cost or pricing data that was inaccurate, incomplete, or noncurrent at certification.", "Failure to disclose known vendor discount triggers price reduction under FAR 15.407-1."),
  def("Delivery order", "Order for supplies placed against an established contract.", "Agency issues DO against GSA Schedule for 200 laptops."),
  def("Executive agency", "Cabinet departments and independent establishments in the executive branch.", "GSA, NASA, and DoD components are executive agencies."),
  def("Fixed-price contract", "Contract providing for a firm price or adjustable price not subject to cost reimbursement.", "FFP maintenance contract at $1.2M."),
  def("Indefinite-delivery contract", "Contract for indefinite quantity during a period within stated limits.", "5-year IDIQ with $10M ceiling and minimum $25K."),
  def("Micro-purchase", "Acquisition at or below the micro-purchase threshold (generally $10,000).", "Office supplies bought with government purchase card."),
  def("Modification", "Any written change in contract terms.", "Bilateral mod extending period of performance six months."),
  def("Negotiation", "Contracting through discussion and bargaining with offerors.", "Part 15 source selection with discussions and FPR."),
  def("Offer", "Response to a solicitation including bid or proposal.", "Final proposal revision submitted before due date."),
  def("Offeror", "Person who responds to a solicitation.", "Small business submitting quote on RFQ."),
  def("Option", "Unilateral right in a contract to purchase additional supplies or services per option clause.", "Agency exercises Option Year 2 on base contract."),
  def("Order", "Task order or delivery order under indefinite-delivery vehicle.", "TO under OASIS+ for cyber assessment."),
  def("Simplified acquisition threshold (SAT)", "Dollar threshold above which certain simplified procedures no longer apply (currently $250,000, subject to adjustment).", "Actions above SAT require additional competition documentation."),
  def("Sole source", "Contract awarded without full and open competition.", "8(a) sole source to qualified firm under FAR 19.808."),
  def("Subcontract", "Contract between prime and subordinate supplier for performance.", "Prime awards sub for specialized engineering labor."),
  def("Supplies", "All property except land or interest in land.", "Hardware, materials, and certain services treated as supplies."),
  def("Task order", "Order for services placed against an established contract.", "Cyber hunt TO under agency IDIQ."),
  def("United States", "The 50 states, District of Columbia, and outlying areas.", "Contract performance in Puerto Rico is within the United States for FAR purposes."),
];

const contractPricingDefs: TrainingSection[] = [
  def("Allowable cost", "Cost that meets FAR Part 31 reasonableness, allocability, and compliance tests.", "Direct labor at audited rates charged to CPFF contract."),
  def("Bid", "Offer submitted in response to sealed bidding.", "Firm fixed price bid on IFB construction project."),
  def("Bidder", "Entity submitting a bid.", "Construction firm submitting sealed bid envelope."),
  def("Certificate of Current Cost or Pricing Data", "Certification that cost or pricing data were accurate, complete, and current as of agreement date.", "Signed cert with final price negotiation under FAR 15.406-2."),
  def("Commercial product", "Article of supply sold in commercial market meeting FAR 2.101 criteria.", "Microsoft 365 subscription sold to commercial customers."),
  def("Commercial service", "Service sold competitively in substantial quantities at established catalog/market prices.", "Help desk service sold from published rate card."),
  def("Contract audit", "Examination of contractor records supporting proposed or billed costs.", "DCAA pre-award accounting system review."),
  def("Contract price", "Price paid or to be paid under contract for supplies or services.", "Total evaluated price on FFP CLIN structure."),
  def("Contractor", "Individual or entity that furnishes supplies or services under contract.", "Prime integrator performing IT modernization."),
  def("Cost analysis", "Review and evaluation of cost elements and profit in offeror proposal.", "CO performs cost analysis on sole-source CPFF proposal."),
  def("Cost realism", "Analysis assessing whether proposed costs reflect realistic assumptions.", "Agency finds proposed staffing hours unrealistically low."),
  def("Cost sharing", "Cost-reimbursement contract where contractor receives no fee and shares costs.", "Research contract with 50/50 cost split."),
  def("Cost-type contract", "Contract that provides for payment of allowable incurred costs.", "CPFF contract reimbursing audited allowable costs plus fixed fee."),
  def("Direct cost", "Cost identified specifically with a particular final cost objective.", "Named engineer labor on Contract Line Item 0001."),
  def("Disputes", "Contractual disagreements submitted under FAR 33.206 Disputes clause.", "Claim escalated to contracting officer final decision."),
  def("Equitable adjustment", "Adjustment to contract terms including price or delivery for government-caused changes.", "REA for constructive acceleration due to late GFP."),
  def("Facilities capital cost of money", "Allowable imputed cost of contractor capital under FAR 31.205-10.", "Calculated on facilities used on government contracts."),
  def("Fee", "Amount paid to contractor for profit or incentive.", "Fixed fee on CPFF contract at 8% of estimated cost."),
  def("Firm-fixed-price", "Contract with price not subject to adjustment except for authorized changes.", "FFP CLIN at $500,000 for deliverable software."),
  def("Forward pricing rate agreement (FPRA)", "Agreement on indirect rates for future contract pricing.", "DCAA-negotiated overhead and G&A rates for three years."),
  def("Indirect cost", "Cost not readily identified with single final cost objective, allocated via pools.", "Corporate accounting allocated across contracts via G&A rate."),
  def("Invoice", "Bill for supplies/services delivered under contract.", "Monthly SF-1034 progress invoice on cost-type contract."),
  def("Labor-hour contract", "T&M variant covering labor only, no materials.", "Staff augmentation at loaded hourly rates with ceiling."),
  def("Material cost", "Cost of goods incorporated into end item or consumed in performance.", "Server hardware billed as ODC at cost."),
  def("Overhead", "Indirect pool applied to direct cost base.", "20% overhead on direct labor for professional services."),
  def("Price analysis", "Examination of price without evaluation of cost elements.", "Comparison to GSA Schedule pricing for commercial item."),
  def("Profit", "Financial benefit after costs; negotiated per FAR 15.404-4 guidelines.", "10% profit on FFP based on performance risk."),
  def("Progress payment", "Advance payment based on costs incurred or percentage of completion.", "Liquidated from delivery payments on FFP production contract."),
  def("Reasonable cost", "Cost that prudent person would incur in conduct of competitive business.", "Market-rate senior engineer salary for classified work."),
  def("Time-and-materials contract", "Contract for direct labor at fixed hourly rates plus materials at cost.", "T&M sustainment with $2M ceiling price."),
];

const competitionDeliveryDefs: TrainingSection[] = [
  def("Adequate price competition", "Two or more responsible offerors competing independently, or market forces sufficient to establish fair price.", "Three responsive quotes on commercial RFQ."),
  def("Brand name or equal", "Requirement specifying brand with acceptable equivalent products.", "Agency specifies Cisco router or equal meeting salient characteristics."),
  def("Competitive range", "Offerors realistically eligible for award after initial evaluation.", "Three of five offerors invited to discussions under FAR 15.306."),
  def("Debriefing", "Post-award explanation to unsuccessful offerors per FAR 15.506.", "Within-request debrief reveals evaluation weaknesses."),
  def("Delivery schedule", "Contract dates for delivery or performance.", "90-day ARO delivery on hardware CLIN."),
  def("Discussions", "Negotiations with offerors in competitive range after proposals received.", "CO discusses staffing weaknesses before FPR."),
  def("Evaluation factors", "Criteria used to assess proposals in negotiated acquisition.", "Technical approach, past performance, and price."),
  def("Full and open competition", "All responsible sources permitted to compete.", "Synopsis on SAM.gov with open RFP."),
  def("Invitation for bids (IFB)", "Sealed bidding solicitation under FAR Part 14.", "Construction IFB with firm bid opening date."),
  def("Justification and approval (J&A)", "Written document authorizing other than full and open competition.", "J&A citing FAR 6.302-1 only one responsible source."),
  def("Late proposal", "Offer received after due date—generally not considered.", "Proposal rejected unless late due to government error."),
  def("Lowest priced technically acceptable (LPTA)", "Award to lowest price among technically acceptable offers.", "Staff augmentation recompete won on price alone."),
  def("Market research", "Collecting and analyzing information about capabilities in marketplace.", "Sources Sought notice and industry day before RFP."),
  def("Past performance", "Record of contractor performance on relevant contracts.", "CPARS ratings fed into evaluation under FAR 15.305."),
  def("Performance work statement (PWS)", "Statement of work for performance-based acquisition describing outcomes.", "PWS defines service levels, not step-by-step methods."),
  def("Period of performance", "Time during which contract performance occurs.", "Base year plus four option years."),
  def("Proposal", "Offer in negotiated acquisition.", "Volume I technical, Volume II price submitted to RFP."),
  def("Responsible prospective contractor", "Offeror meeting integrity, capability, and financial standards of FAR 9.104-1.", "KO finds offeror responsible despite not being low bidder."),
  def("Responsive bid", "Bid conforming to all material IFB requirements.", "Bid with all required forms and no deviations."),
  def("Sealed bidding", "Competitive method with bids opened at public time.", "Lowest responsive responsible bidder wins."),
  def("Set-aside", "Acquisition reserved for small business or socioeconomic category.", "SDVOSB set-aside under FAR 19.502-2."),
  def("Small business concern", "Entity independently owned and operated, not dominant in field, meeting SBA size standard.", "8(a) firm under NAICS size standard."),
  def("Source selection", "Process of evaluating proposals and selecting awardee.", "SSA signs SSDD documenting best value decision."),
  def("Statement of objectives (SOO)", "High-level outcomes document allowing industry flexibility in approach.", "SOO states mission outcomes; offerors propose PWS."),
  def("Statement of work (SOW)", "Description of work to be performed, methods, and deliverables.", "Detailed SOW for engineering study with CDRLs."),
];

export const FAR_PART_02 = proModule(
  MODULE_ID,
  TRACK,
  2,
  "FAR Part 2 — Definitions",
  "Master the FAR definitions contracts professionals use daily—core acquisition, contract/pricing, and competition/delivery terms that control interpretation of every solicitation and clause.",
  [
    "Define 80+ FAR terms used in solicitations, contracts, and protests",
    "Apply defined terms to distinguish commercial items, modifications, and claims",
    "Use precise FAR vocabulary in proposals, REAs, and interview responses",
  ],
  [
    proLesson(
      MODULE_ID, TRACK, "2.1", "Core Acquisition Terms (30 Definitions)",
      ["Define 30 core acquisition terms from FAR Part 2", "Explain why defined terms control contract interpretation", "Apply definitions to solicitation and award documents"],
      [{ citation: "FAR 2.101", text: "Definitions in this section apply to the entire FAR unless another FAR part provides a different definition for use in that part." }],
      coreAcquisitionDefs,
      "Misusing defined terms kills proposals and claims. When a solicitation says 'offeror,' only the entity responding may bind pricing. 'Modification' requires CO action—internal change orders are not contract changes. Know SAT and micro-purchase thresholds to predict procedures and flow-down obligations.",
      "Agencies rely on Part 2 definitions for consistent interpretation across components. Evaluation plans, J&As, and protest decisions turn on whether an action was a 'delivery order' vs new acquisition, or 'negotiation' vs sealed bid.",
      [
        { title: "Commercial item argument", situation: "Agency issues cost-type RFP for software identical to your commercial SaaS product sold to banks.", whyItMatters: "FAR 2.101 commercial item definition supports requesting Part 12 procedures and reduced cost data under FAR 12.209." },
        { title: "Unauthorized scope creep", situation: "COR treats email requests as 'change orders' but no bilateral mod is signed.", whyItMatters: "FAR defines change order as written order under Changes clause—without it, extra work is not a contract 'modification.'" },
      ],
      [
        { violation: "Using 'quote' and 'proposal' interchangeably in compliance responses", consequence: "Non-responsive submission if solicitation requires formal proposal with certifications." },
        { violation: "Treating task orders as standalone contracts without reviewing parent IDIQ terms", consequence: "Missed flow-down clauses and incorrect competition assumptions." },
      ],
      [
        q("p02-1-1", "FAR Part 2 definitions apply:", ["Only to Part 2 solicitations", "To the entire FAR unless another part provides a different definition", "Only to DoD contracts", "Only when incorporated in Section H"], 1, "FAR 2.101 states definitions apply to the entire FAR unless another part defines differently."),
        q("p02-1-2", "A 'contracting officer' under FAR 2.101 is:", ["Any COR with technical authority", "A person with written authority to bind the government", "The contractor's contracts manager", "SBA size determination official"], 1, "FAR 2.101 defines contracting officer as person with written authority to enter into and administer contracts."),
        fillBlank("p02-1-3", "All property except land or interest in land is defined as _____ under FAR 2.101.", ["supplies", "services", "claims", "options"], 0, "FAR 2.101 defines supplies as all property except land or interest in land."),
        tf("p02-1-4", "The simplified acquisition threshold is currently $250,000 subject to periodic adjustment.", true, "FAR 2.101 defines SAT; threshold is adjusted per statute and FAR updates."),
        q("p02-1-5", "Defective pricing relates to:", ["Late delivery", "Inaccurate certified cost or pricing data", "CPARS ratings", "SAM expiration"], 1, "FAR 2.101 defines defective pricing in context of certified cost or pricing data accuracy."),
        q("p02-1-6", "An 'indefinite-delivery contract' is:", ["Always a single-year FFP order", "A contract for indefinite quantity during a period within stated limits", "A grant agreement", "A micro-purchase only"], 1, "FAR 2.101 defines indefinite-delivery contracts including IDIQ structures."),
      ],
      { farPart: 2 }
    ),
    proLesson(
      MODULE_ID, TRACK, "2.2", "Contract and Pricing Terms (30 Definitions)",
      ["Define 30 contract and pricing terms from FAR Part 2 and Part 15 cross-references", "Distinguish price analysis from cost analysis", "Identify TINA-related defined terms"],
      [{ citation: "FAR 15.401-1", text: "Cost or pricing data means all facts that a prudent buyer or seller would reasonably expect to affect price negotiations significantly as of the date of agreement on price." }],
      contractPricingDefs,
      "Pricing vocabulary drives audit defense. 'Cost or pricing data' is broader than accounting data—it includes vendor quotes you knew about but did not disclose. FFP vs cost-type definitions determine which clauses, billing systems, and DCAA scrutiny apply.",
      "COs use defined pricing terms to decide when TINA applies, whether price or cost analysis is appropriate, and how to document fair and reasonable pricing in the PNM.",
      [
        { title: "TINA exception dispute", situation: "Sole-source award over $2M; offeror claims commercial item exception but product is customized.", whyItMatters: "Defined 'commercial item' and 'cost or pricing data' determine whether certified data and FAR 52.215-10 apply." },
        { title: "T&M ceiling breach", situation: "Contractor continues billing after hitting T&M ceiling price.", whyItMatters: "Defined 'time-and-materials contract' includes ceiling—exceeding it without mod violates contract terms and may trigger False Claims Act exposure." },
      ],
      [
        { violation: "Certifying cost or pricing data while omitting known vendor rebates", consequence: "Defective pricing under FAR 15.407-1—price reduction plus interest and potential civil penalties." },
        { violation: "Billing G&A on T&M materials marked up with fee", consequence: "Unallowable under T&M structure where materials are at cost without fee per FAR 16.601." },
      ],
      [
        q("p02-2-1", "Price analysis under FAR 2.101 examines:", ["Only incurred costs after award", "Price without evaluation of individual cost elements", "CPARS narratives only", "Subcontractor debarment status"], 1, "Price analysis is examination of price without evaluating separate cost elements—distinct from cost analysis."),
        q("p02-2-2", "Cost or pricing data includes:", ["Future business strategy judgments only", "All facts prudent parties would expect to affect price negotiations significantly", "Publicly traded stock prices only", "Employee social media posts"], 1, "FAR 15.401-1 defines cost or pricing data broadly to include facts affecting price negotiations."),
        tf("p02-2-3", "On a firm-fixed-price contract, the contractor generally bears cost overrun risk.", true, "FFP definition at FAR 16.202—price not subject to adjustment based on cost experience except authorized changes."),
        q("p02-2-4", "A forward pricing rate agreement (FPRA) is:", ["A protest filing fee", "Agreement on indirect rates for future contract pricing", "SAM registration renewal", "Option exercise notice"], 1, "FPRA per FAR 2.101/15.407—negotiated indirect rates for future pricing."),
        fillBlank("p02-2-5", "Direct costs are identified specifically with a particular _____ cost objective.", ["final", "foreign", "optional", "debarred"], 0, "FAR 2.101 defines direct cost as identified with a particular final cost objective."),
        q("p02-2-6", "Progress payments are:", ["Penalties for late delivery", "Advance payments based on costs incurred or percentage of completion", "Annual small business rebates", "CPARS bonuses"], 1, "FAR 32.103 and related definitions—progress payments provide cash flow during performance."),
      ],
      { farPart: 2 }
    ),
    proLesson(
      MODULE_ID, TRACK, "2.3", "Competition and Delivery Terms (25 Definitions)",
      ["Define 20+ competition, source selection, and delivery terms", "Distinguish responsive vs responsible in sealed bidding", "Apply PWS/SOW/SOO definitions to requirements documents"],
      [{ citation: "FAR 2.101", text: "Performance-based acquisition means an acquisition structured around work statements that describe required results rather than methods." }],
      competitionDeliveryDefs,
      "Competition definitions predict your capture strategy. LPTA vs best value, set-aside eligibility, and debrief rights all turn on Part 2 vocabulary. PWS vs SOW vs SOO determines how much flexibility you have in proposing approach.",
      "Government source selection plans must use defined terms consistently. J&A authorities reference 'full and open competition' and 'sole source.' Evaluation documentation must distinguish discussions from clarifications.",
      [
        { title: "LPTA recompete trap", situation: "You invest in innovative technical solution on RFP stating LPTA evaluation.", whyItMatters: "Defined LPTA means lowest price among acceptable offers wins—extra technical value above floor is wasted spend." },
        { title: "SOO-based proposal", situation: "Agency issues SOO for cyber operations; offerors propose complete PWS.", whyItMatters: "SOO defines outcomes; your proposed PWS becomes binding if incorporated at award—definitions drive proposal strategy." },
      ],
      [
        { violation: "Bidding 8(a) set-aside without active certification in SAM", consequence: "Proposal rejection—misrepresentation of 'small business concern' status under FAR 19.308." },
        { violation: "Assuming late proposal will be accepted without government-caused delay", consequence: "Rejection under FAR 15.208—late is late except narrow exceptions." },
      ],
      [
        q("p02-3-1", "A responsive bid conforms to:", ["Only price requirements", "All material IFB requirements", "COR preferences", "Contractor internal policy"], 1, "Responsive bid meets all material solicitation requirements in sealed bidding context."),
        q("p02-3-2", "Full and open competition means:", ["Single vendor pre-selected", "All responsible sources permitted to compete", "Protest waived", "No synopsis required"], 1, "FAR 6.101—full and open competition is the default requiring all responsible sources able to compete."),
        tf("p02-3-3", "A Performance Work Statement describes required results rather than detailed methods.", true, "Performance-based acquisition and PWS focus on outcomes per FAR 37.602 and Part 2 cross-references."),
        q("p02-3-4", "Justification and Approval (J&A) documents authorize:", ["Automatic contract renewals", "Other than full and open competition", "DCAA audit waiver", "CPARS deletion"], 1, "FAR Subpart 6.3 J&A required for other than full and open competition."),
        fillBlank("p02-3-5", "Offerors realistically eligible for award after initial evaluation constitute the _____ range.", ["competitive", "debarment", "invoice", "option"], 0, "Competitive range under FAR 15.306(c)—offerors eligible for award consideration after evaluation."),
        q("p02-3-6", "Market research under FAR 2.101 supports:", ["Skipping competition", "Understanding industry capabilities before acquisition strategy", "Eliminating past performance evaluation", "Automatic sole source"], 1, "Market research collects marketplace information to plan competition and requirements per FAR Part 10."),
      ],
      { farPart: 2 }
    ),
  ],
  { farPart: 2 }
);
