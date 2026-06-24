import type { CfcmQuestion } from "./types";

function cfcmQ(
  id: string,
  topic: CfcmQuestion["topic"],
  question: string,
  options: string[],
  correctIndex: number,
  farCitation: string,
  explanation: string
): CfcmQuestion {
  return { id, topic, question, options, correctIndex, farCitation, explanation };
}

export const CFCM_QUESTIONS: CfcmQuestion[] = [
  cfcmQ(
    "cfcm-ct-01",
    "contract-types",
    "Which contract type places maximum cost risk on the contractor?",
    ["CPFF","FFP","T&M","Cost Plus Award Fee"],
    1,
    "FAR 16.202",
    "FFP — firm fixed price — contractor bears all cost overrun risk."
  ),
  cfcmQ(
    "cfcm-ct-02",
    "contract-types",
    "A CPFF contract is best used when:",
    ["Requirements are well-defined with stable specs","Requirements are uncertain and costs cannot be estimated accurately","Commercial items are being purchased","Competition is required by statute"],
    1,
    "FAR 16.302",
    "CPFF is for R&D or uncertain requirements where accurate cost estimation is not possible."
  ),
  cfcmQ(
    "cfcm-ct-03",
    "contract-types",
    "Under a T&M contract, the contractor is paid based on:",
    ["A fixed total price","Fixed hourly rates plus materials at cost","Award fee only","Cost plus fixed fee with no rate ceiling"],
    1,
    "FAR 16.601",
    "T&M pays fixed hourly rates for labor plus materials at cost — suitable when scope cannot be defined precisely."
  ),
  cfcmQ(
    "cfcm-ct-04",
    "contract-types",
    "An IDIQ contract allows the government to:",
    ["Award without competition each time","Issue task or delivery orders within stated limits without a new contract","Terminate at will without cause","Skip contract file documentation"],
    1,
    "FAR 16.504",
    "IDIQ provides for indefinite quantity within stated minimum/maximum limits via task or delivery orders."
  ),
  cfcmQ(
    "cfcm-ct-05",
    "contract-types",
    "FAR Part 12 commercial item contracting allows:",
    ["Only sealed bidding","Streamlined procedures with reduced cost/pricing data requirements","No contract clauses","Sole source without justification"],
    1,
    "FAR 12.202",
    "Part 12 provides streamlined acquisition procedures for commercial items."
  ),
  cfcmQ(
    "cfcm-ct-06",
    "contract-types",
    "A CPAF contract pays the contractor:",
    ["Only incurred costs","Incurred allowable costs plus an award fee based on performance evaluation","A fixed price regardless of cost","Hourly rates only"],
    1,
    "FAR 16.404",
    "CPAF includes allowable costs plus award fee determined by subjective performance evaluation."
  ),
  cfcmQ(
    "cfcm-ct-07",
    "contract-types",
    "FPI (Fixed Price Incentive) contracts include:",
    ["No incentive for cost control","A target cost, target profit, price ceiling, and share ratio","Award fee only","Unlimited ceiling price"],
    1,
    "FAR 16.204",
    "FPI provides cost incentive through target cost, profit, ceiling, and share ratio."
  ),
  cfcmQ(
    "cfcm-ct-08",
    "contract-types",
    "Labor-hour contracts differ from T&M because:",
    ["They include material costs","They do not include material costs — labor only","They are always FFP","They require sealed bidding"],
    1,
    "FAR 16.602",
    "Labor-hour contracts cover labor at fixed hourly rates but exclude material costs."
  ),
  cfcmQ(
    "cfcm-ct-09",
    "contract-types",
    "Contract type selection is governed by:",
    ["Contractor preference","FAR 16.104 — analysis of contract type factors","COR recommendation only","Lowest price only"],
    1,
    "FAR 16.104",
    "FAR 16.104 requires analysis of price/cost risk, quality requirements, and other factors."
  ),
  cfcmQ(
    "cfcm-ct-10",
    "contract-types",
    "On a cost-reimbursement contract, the contractor must:",
    ["Deliver at any cost without reimbursement limit","Notify the government when costs approach the limitation of funds threshold","Set their own fee without government approval","Skip cost accounting standards"],
    1,
    "FAR 52.232-22",
    "Limitation of Funds clause requires notification at ~75% of allotted funds expended."
  ),
  cfcmQ(
    "cfcm-ct-11",
    "contract-types",
    "A BPA (Blanket Purchase Agreement) is:",
    ["A type of subcontract","A simplified method of filling anticipated repetitive needs for supplies/services","A termination notice","A cost reimbursement vehicle only"],
    1,
    "FAR 16.703",
    "BPAs simplify repetitive purchases against pre-negotiated terms."
  ),
  cfcmQ(
    "cfcm-ct-12",
    "contract-types",
    "Which contract type is LEAST appropriate for well-defined commercial software?",
    ["FFP","CPFF","Commercial item FFP under Part 12","Both A and C are appropriate"],
    1,
    "FAR 16.202",
    "CPFF is inappropriate for well-defined commercial items — FFP or Part 12 is standard."
  ),
  cfcmQ(
    "cfcm-ct-13",
    "contract-types",
    "Level-of-effort contracts require the contractor to:",
    ["Deliver specific measurable outputs","Provide a specified level of effort over a stated period","Guarantee a fixed deliverable date","Accept unlimited liability"],
    1,
    "FAR 16.307",
    "Level-of-effort contracts obligate a specified effort level rather than specific deliverables."
  ),
  cfcmQ(
    "cfcm-ct-14",
    "contract-types",
    "Multi-year contracts require:",
    ["No congressional notification","Specific statutory authority and funding of first year plus cancellation ceiling","Only verbal approval","Commercial item status"],
    1,
    "FAR 17.105",
    "Multi-year contracts require statutory authority, first-year funding, and cancellation ceiling."
  ),
  cfcmQ(
    "cfcm-ct-15",
    "contract-types",
    "Cost-sharing contracts require the contractor to:",
    ["Receive full cost reimbursement","Share contract costs without profit/fee reimbursement","Accept FFP terms","Waive all data rights"],
    1,
    "FAR 16.303",
    "Cost-sharing — contractor shares costs and receives no fee on those shared costs."
  ),
  cfcmQ(
    "cfcm-ct-16",
    "contract-types",
    "Under FFP, a cost overrun is borne by:",
    ["The government","The contractor","The subcontractor only","DCAA"],
    1,
    "FAR 16.202-2",
    "FFP contractor accepts full responsibility for cost control — overruns are not reimbursed."
  ),
  cfcmQ(
    "cfcm-ct-17",
    "contract-types",
    "A time-and-materials order under an IDIQ must include:",
    ["No ceiling price","A ceiling price that the contract cannot exceed without a modification","Unlimited funding","Only labor costs"],
    1,
    "FAR 16.601",
    "T&M orders require a ceiling price that cannot be exceeded without a bilateral modification."
  ),
  cfcmQ(
    "cfcm-ct-18",
    "contract-types",
    "Contract types are prescribed in FAR Part:",
    ["Part 12","Part 16","Part 31","Part 49"],
    1,
    "FAR Part 16",
    "FAR Part 16 covers contract types and their selection."
  ),
  cfcmQ(
    "cfcm-ct-19",
    "contract-types",
    "CPIF contracts provide incentive for:",
    ["Schedule only","Cost control through a formula relating target cost to final price","Award fee only","No incentive"],
    1,
    "FAR 16.206",
    "CPIF uses a formula sharing savings/overruns between government and contractor."
  ),
  cfcmQ(
    "cfcm-ct-20",
    "contract-types",
    "For architect-engineer services, the appropriate contract type is typically:",
    ["FFP","Cost-plus-fixed-fee per FAR 36.102","Sealed bid","Commercial item"],
    1,
    "FAR 36.102",
    "A-E services use CPFF per FAR Part 36 — qualifications-based selection, not price competition."
  ),
  cfcmQ(
    "cfcm-comp-01",
    "competition",
    "Full and open competition is required unless:",
    ["The contractor requests otherwise","A statutory exception under FAR 6.302 applies","The COR approves","Price exceeds $1M"],
    1,
    "FAR 6.102",
    "FAR 6.102 establishes full and open competition as the standard; 6.302 lists exceptions."
  ),
  cfcmQ(
    "cfcm-comp-02",
    "competition",
    "Sealed bidding under FAR Part 14 requires:",
    ["Negotiation of terms","An Invitation for Bids (IFB) with award to lowest responsive responsible bidder","Best value trade-off","Oral presentations"],
    1,
    "FAR 14.104",
    "Sealed bidding awards to the lowest responsive, responsible bidder without negotiation."
  ),
  cfcmQ(
    "cfcm-comp-03",
    "competition",
    "Best value source selection allows the government to:",
    ["Award only on price","Trade off price and non-price factors per stated evaluation criteria","Skip evaluation","Award to incumbent automatically"],
    1,
    "FAR 15.101-1",
    "Best value permits trade-offs between price and non-price factors per Section M criteria."
  ),
  cfcmQ(
    "cfcm-comp-04",
    "competition",
    "LPTA (Lowest Price Technically Acceptable) means:",
    ["Highest technical score wins","Lowest priced offer meeting minimum technical requirements wins","Best value trade-off required","Past performance is most important"],
    1,
    "FAR 15.101-2",
    "LPTA awards to lowest price among technically acceptable proposals."
  ),
  cfcmQ(
    "cfcm-comp-05",
    "competition",
    "A Justification and Approval (J&A) is required for:",
    ["All contracts","Contracts awarded without full and open competition under FAR 6.302","Commercial item purchases under SAT","All subcontracts"],
    1,
    "FAR 6.303",
    "J&A documents the basis for other than full and open competition."
  ),
  cfcmQ(
    "cfcm-comp-06",
    "competition",
    "The simplified acquisition threshold (SAT) for commercial items is currently:",
    ["$250,000","$750,000 with annual adjustment","$10,000","$2,000"],
    1,
    "FAR 2.101",
    "SAT is $750,000 for commercial items (adjusted periodically by statute)."
  ),
  cfcmQ(
    "cfcm-comp-07",
    "competition",
    "Market research is required before:",
    ["Closeout only","All acquisitions to determine industry capabilities and competition","Subcontract awards only","Modifications only"],
    1,
    "FAR 10.001",
    "FAR Part 10 requires market research to identify commercial items and competition."
  ),
  cfcmQ(
    "cfcm-comp-08",
    "competition",
    "Bundling requirements under FAR 7.107 apply when:",
    ["Any contract is awarded","Requirements are consolidated in a manner that reduces small business access","Subcontracts are issued","Options are exercised"],
    1,
    "FAR 7.107",
    "Bundling analysis required when consolidation reduces small business participation."
  ),
  cfcmQ(
    "cfcm-comp-09",
    "competition",
    "A sources sought notice is used to:",
    ["Award a contract","Determine whether capable small businesses exist before setting aside","Terminate a contract","Modify a contract"],
    1,
    "FAR 5.205",
    "Sources sought notices gauge small business capability before set-aside decisions."
  ),
  cfcmQ(
    "cfcm-comp-10",
    "competition",
    "In negotiated acquisition, the Source Selection Authority:",
    ["Must select lowest price always","Makes the final award decision based on evaluation results","Is always the COR","Cannot consider past performance"],
    1,
    "FAR 15.308",
    "SSA makes the final source selection decision based on evaluation board recommendations."
  ),
  cfcmQ(
    "cfcm-comp-11",
    "competition",
    "Unsolicited proposals are governed by:",
    ["FAR Part 15 only","FAR 15.609 and agency procedures","DFARS exclusively","No regulation"],
    1,
    "FAR 15.609",
    "FAR 15.609 establishes procedures for evaluating unsolicited proposals."
  ),
  cfcmQ(
    "cfcm-comp-12",
    "competition",
    "The Competition in Contracting Act (CICA) requires:",
    ["No competition for commercial items","Full and open competition as the standard for federal acquisitions","Sole source for all DoD contracts","State and local competition rules"],
    1,
    "FAR 6.101",
    "CICA (10 USC 2304) mandates full and open competition."
  ),
  cfcmQ(
    "cfcm-comp-13",
    "competition",
    "A brand name or equal specification:",
    ["Eliminates all competition","Allows offerors to propose equal products meeting salient characteristics","Requires sole source","Is prohibited"],
    1,
    "FAR 11.104",
    "Brand name or equal allows competition while specifying minimum requirements."
  ),
  cfcmQ(
    "cfcm-comp-14",
    "competition",
    "Past performance evaluation in source selection:",
    ["Is prohibited","Is a standard evaluation factor assessing offeror track record","Only applies to small business","Replaces price evaluation"],
    1,
    "FAR 15.305",
    "Past performance is a standard evaluation factor in best value source selection."
  ),
  cfcmQ(
    "cfcm-comp-15",
    "competition",
    "Oral presentations in source selection are used to:",
    ["Replace written proposals entirely","Clarify or verify understanding of offeror approach","Negotiate final price only","Skip technical evaluation"],
    1,
    "FAR 15.102",
    "Oral presentations clarify/verify offeror understanding — not a substitute for written proposals."
  ),
  cfcmQ(
    "cfcm-comp-16",
    "competition",
    "A pre-solicitation notice (FAR 5.204) is required for:",
    ["All acquisitions","Acquisitions expected to exceed simplified acquisition threshold","Subcontracts only","Commercial items under micro-purchase"],
    1,
    "FAR 5.204",
    "Pre-solicitation notices provide industry advance notice of upcoming acquisitions."
  ),
  cfcmQ(
    "cfcm-comp-17",
    "competition",
    "The Davis-Bacon Act applies to:",
    ["All federal contracts","Construction contracts exceeding $2,000","Commercial item purchases only","Service contracts only"],
    1,
    "FAR 22.403",
    "Davis-Bacon requires prevailing wage rates on construction contracts over $2,000."
  ),
  cfcmQ(
    "cfcm-comp-18",
    "competition",
    "A critique of the source selection process must be documented in:",
    ["The contract file only","The Source Selection Decision Document (SSDD)","The invoice","SAM.gov"],
    1,
    "FAR 15.308",
    "SSDD records the SSA rationale including trade-off analysis for best value."
  ),
  cfcmQ(
    "cfcm-comp-19",
    "competition",
    "Set-aside decisions for small business require:",
    ["No market research","Market research and determination that small businesses can perform","Large business approval","International competition"],
    1,
    "FAR 19.502-2",
    "Set-asides require market research showing small business capability."
  ),
  cfcmQ(
    "cfcm-comp-20",
    "competition",
    "Reverse auctions in federal acquisition:",
    ["Are prohibited","May be used when FAR 15.203 conditions are met","Replace all sealed bidding","Require no competition"],
    1,
    "FAR 15.203",
    "Reverse auctions may be used when conditions in FAR 15.203 are satisfied."
  ),
  cfcmQ(
    "cfcm-sb-01",
    "small-business",
    "Small business size is determined by:",
    ["Total revenue only","NAICS code-specific size standard using employee count or revenue per 13 CFR 121","Contract value","Number of contracts held"],
    1,
    "FAR 19.102",
    "Size standards vary by NAICS — calculated per 13 CFR 121 including affiliates."
  ),
  cfcmQ(
    "cfcm-sb-02",
    "small-business",
    "FAR 52.219-14 requires the prime on a services set-aside to perform at least:",
    ["25% of contract cost","50% of the cost of contract performance excluding cost of materials","10% of revenue","No minimum"],
    1,
    "FAR 52.219-14",
    "Services set-aside: prime must perform 50% of cost of performance excluding materials."
  ),
  cfcmQ(
    "cfcm-sb-03",
    "small-business",
    "An 8(a) contract is set aside for:",
    ["Any small business","SBA-certified 8(a) Business Development Program participants","HUBZone businesses only","Large businesses with sub plans"],
    1,
    "FAR 19.804",
    "8(a) set-asides are for firms in the SBA 8(a) Business Development Program."
  ),
  cfcmQ(
    "cfcm-sb-04",
    "small-business",
    "A subcontracting plan is required when:",
    ["Contract value exceeds $750,000 ($1.5M for construction) and subcontracting is expected","All contracts regardless of value","Only for commercial items","Never for small business primes"],
    0,
    "FAR 19.702",
    "Subcontracting plans required when contract exceeds threshold and subcontracting opportunities exist."
  ),
  cfcmQ(
    "cfcm-sb-05",
    "small-business",
    "SDVOSB set-asides require the concern to be:",
    ["Any veteran-owned business","Small, at least 51% owned and controlled by service-disabled veteran(s)","Any size if veteran-owned","Certified by VA only"],
    1,
    "FAR 19.1406",
    "SDVOSB must be small and 51% owned/controlled by service-disabled veteran(s)."
  ),
  cfcmQ(
    "cfcm-sb-06",
    "small-business",
    "The SF-294 is:",
    ["An invoice form","Summary Subcontract Report for subcontracting plan compliance","A modification form","A security classification form"],
    1,
    "FAR 19.704",
    "SF-294 reports subcontracting achievements against plan goals."
  ),
  cfcmQ(
    "cfcm-sb-07",
    "small-business",
    "HUBZone certification requires the business to:",
    ["Be in any location","Be located in a Historically Underutilized Business Zone and 35% of employees reside in HUBZone","Be any small business","Have no employees"],
    1,
    "FAR 19.1305",
    "HUBZone requires location in designated zone and 35% employee HUBZone residency."
  ),
  cfcmQ(
    "cfcm-sb-08",
    "small-business",
    "WOSB/EDWOSB set-asides are for:",
    ["Any woman-owned business regardless of size","Small businesses at least 51% owned and controlled by women in eligible NAICS codes","All NAICS codes without restriction","Large businesses only"],
    1,
    "FAR 19.1506",
    "WOSB/EDWOSB set-asides apply to eligible NAICS where WOSB underrepresentation exists."
  ),
  cfcmQ(
    "cfcm-sb-09",
    "small-business",
    "Affiliation rules in size determination consider:",
    ["Only the bidding entity","Control relationships, common ownership, and joint ventures per 13 CFR 121.103","Only revenue","Only employee count of prime"],
    1,
    "13 CFR 121.103",
    "Affiliation rules aggregate employees/revenue of affiliated entities for size determination."
  ),
  cfcmQ(
    "cfcm-sb-10",
    "small-business",
    "A small business subcontracting plan must include:",
    ["Only large business subs","Goals by category (small, HUBZone, SDVOSB, WOSB, 8(a)) and reporting requirements","No goals","Only prime performance percentage"],
    1,
    "FAR 19.704",
    "Plans must include goals for each small business category and reporting via SF-294/295."
  ),
  cfcmQ(
    "cfcm-sb-11",
    "small-business",
    "The Nonmanufacturer Rule allows a small business to supply:",
    ["Any product without manufacturing","Products of another manufacturer on a supply contract without being the manufacturer","Only self-manufactured products","Products from any country"],
    1,
    "FAR 19.102(f)",
    "Nonmanufacturer rule permits reselling products of other manufacturers on supply set-asides."
  ),
  cfcmQ(
    "cfcm-sb-12",
    "small-business",
    "Small business size protest is filed with:",
    ["The contracting officer only","SBA Office of Hearings and Appeals","DCAA","GAO"],
    1,
    "FAR 19.302",
    "Size protests are filed with SBA OHA within specified timeframes."
  ),
  cfcmQ(
    "cfcm-sb-13",
    "small-business",
    "Total small business set-aside means:",
    ["Only 8(a) firms may bid","Any qualified small business may compete","Only HUBZone firms","Large businesses with waiver"],
    1,
    "FAR 19.502-2",
    "Total small business set-aside is open to all qualified small businesses."
  ),
  cfcmQ(
    "cfcm-sb-14",
    "small-business",
    "8(a) sole source contracts can be awarded up to:",
    ["$4 million for services, $6.5 million for manufacturing","$250,000 always","Unlimited without justification","$10,000"],
    0,
    "FAR 19.805-1",
    "8(a) sole source thresholds: $4M services, $6.5M manufacturing (adjusted periodically)."
  ),
  cfcmQ(
    "cfcm-sb-15",
    "small-business",
    "Subcontracting plan goals are expressed as:",
    ["Dollar amounts only","Percentage of total planned subcontracting dollars by category","Number of subs only","Employee count"],
    1,
    "FAR 19.704",
    "Goals are percentages of total planned subcontracting expenditure by small business category."
  ),
  cfcmQ(
    "cfcm-sb-16",
    "small-business",
    "A joint venture for a small business set-aside must:",
    ["Include a large business as managing partner","Meet SBA mentor-protégé or joint venture requirements per 13 CFR 121.103(h)","Have no size limit","Be unlimited in duration"],
    1,
    "13 CFR 121.103(h)",
    "Joint ventures must comply with SBA JV rules including size and structure requirements."
  ),
  cfcmQ(
    "cfcm-sb-17",
    "small-business",
    "The SF-295 reports:",
    ["Prime contract invoices","Individual Subcontract Reports (ISR) against subcontracting plan","CPARS ratings","Security incidents"],
    1,
    "FAR 19.704",
    "SF-295 (ISR) reports individual subcontract awards against plan goals."
  ),
  cfcmQ(
    "cfcm-sb-18",
    "small-business",
    "Small business goaling by agencies is tracked through:",
    ["CPARS only","Small Business Goaling Reports to SBA","DCAA audits only","WAWF"],
    1,
    "FAR 19.201",
    "Agencies report small business achievement against goals to SBA annually."
  ),
  cfcmQ(
    "cfcm-sb-19",
    "small-business",
    "Service-disabled veteran status for SDVOSB requires:",
    ["Any veteran ownership","Disability rating from service-connected condition per VA or DoD","Honorable discharge only without disability","Any military service regardless of disability"],
    1,
    "FAR 19.1401",
    "SDVOSB requires service-connected disability rating per VA/DoD criteria."
  ),
  cfcmQ(
    "cfcm-sb-20",
    "small-business",
    "Failure to comply with subcontracting plan goals can result in:",
    ["Automatic contract renewal","Liquidated damages and potential debarment","Higher CPARS only","No consequences"],
    1,
    "FAR 19.705-7",
    "Non-compliance with subcontracting plans may trigger liquidated damages assessment."
  ),
  cfcmQ(
    "cfcm-price-01",
    "pricing",
    "TINA (Truth in Negotiations Act) requires certified cost or pricing data when:",
    ["All contracts","Negotiated contract/modification exceeds threshold unless exception applies","Commercial items always","Subcontracts under $10K"],
    1,
    "FAR 15.403",
    "TINA applies above threshold unless an exception (commercial, adequate competition, etc.) applies."
  ),
  cfcmQ(
    "cfcm-price-02",
    "pricing",
    "Which cost is UNALLOWABLE under FAR Part 31?",
    ["Direct labor","Entertainment expenses","Indirect overhead","Direct materials"],
    1,
    "FAR 31.205-14",
    "Entertainment costs are expressly unallowable per FAR 31.205-14."
  ),
  cfcmQ(
    "cfcm-price-03",
    "pricing",
    "Price analysis is appropriate when:",
    ["Detailed cost data is required","Adequate price competition exists or prices are set by law/regulation","No competition exists and no exceptions apply","Cost-type contracts only"],
    1,
    "FAR 15.404-1",
    "Price analysis suffices when competition, catalog prices, or regulated prices establish reasonableness."
  ),
  cfcmQ(
    "cfcm-price-04",
    "pricing",
    "Cost analysis requires examining:",
    ["Only the total price","Individual cost elements for reasonableness and compliance with Part 31","Only profit/fee","Competitor prices only"],
    1,
    "FAR 15.404-1(c)",
    "Cost analysis evaluates individual cost elements for allowability and reasonableness."
  ),
  cfcmQ(
    "cfcm-price-05",
    "pricing",
    "The current TINA threshold (certified cost or pricing data) is approximately:",
    ["$750,000","$2,000,000 (adjusted periodically)","$10,000","$500,000"],
    1,
    "FAR 15.403-4",
    "TINA threshold is $2M (adjusted periodically by statute)."
  ),
  cfcmQ(
    "cfcm-price-06",
    "pricing",
    "Indirect cost rates include:",
    ["Direct labor only","Fringe, overhead, and G&A applied to cost base","Profit only","Travel only"],
    1,
    "FAR 31.203",
    "Indirect rates allocate fringe, overhead, and G&A to cost objectives."
  ),
  cfcmQ(
    "cfcm-price-07",
    "pricing",
    "A forward pricing rate agreement (FPRA) is:",
    ["A contract type","A pre-negotiated agreement on indirect cost rates for future contracts","A termination settlement","A subcontract template"],
    1,
    "FAR 42.170",
    "FPRA pre-negotiates indirect rates with DCAA/DCMA for use on future proposals."
  ),
  cfcmQ(
    "cfcm-price-08",
    "pricing",
    "Defective pricing occurs when:",
    ["Price is too high","Certified cost or pricing data submitted was inaccurate, incomplete, or noncurrent","Contract is FFP","No competition existed"],
    1,
    "FAR 15.407-1",
    "Defective pricing — inaccurate/incomplete/noncurrent certified data leading to inflated price."
  ),
  cfcmQ(
    "cfcm-price-09",
    "pricing",
    "Unallowable costs on government contracts include:",
    ["Direct materials and labor","Bad debts, fines, and lobbying costs per FAR 31.205","Approved overhead","Subcontractor costs with proper flow-down"],
    1,
    "FAR 31.205",
    "FAR 31.205 lists specific unallowable cost categories including lobbying, fines, bad debts."
  ),
  cfcmQ(
    "cfcm-price-10",
    "pricing",
    "Profit or fee negotiation considers:",
    ["Only contractor request","Contract type risk, contractor investment, performance record per FAR 15.404-4","Random percentage","Government budget only"],
    1,
    "FAR 15.404-4",
    "Weighted guidelines consider risk, facilities investment, efficiency, and management."
  ),
  cfcmQ(
    "cfcm-price-11",
    "pricing",
    "Cost realism analysis is performed on:",
    ["FFP contracts only","Cost-reimbursement proposals to assess probable cost of performance","Commercial items only","Sealed bids"],
    1,
    "FAR 15.404-1(d)",
    "Cost realism evaluates whether proposed costs reflect realistic execution on cost-type contracts."
  ),
  cfcmQ(
    "cfcm-price-12",
    "pricing",
    "A CAS (Cost Accounting Standards) noncompliance can result in:",
    ["No impact","Cost adjustments and potential penalties","Automatic contract award","Higher fee"],
    1,
    "FAR 30.202",
    "CAS noncompliance triggers cost adjustments to ensure consistent cost accounting."
  ),
  cfcmQ(
    "cfcm-price-13",
    "pricing",
    "Commercial item pricing under Part 12 typically uses:",
    ["Certified cost or pricing data always","Prices based on market research, catalog prices, or competitive quotes","Cost analysis only","Sealed bidding exclusively"],
    1,
    "FAR 12.209",
    "Commercial items use market-based pricing — reduced cost data requirements."
  ),
  cfcmQ(
    "cfcm-price-14",
    "pricing",
    "Make-or-buy programs require contractors to:",
    ["Outsource everything","Maintain records of decisions to manufacture or purchase per FAR 15.407-2","Only use subcontractors","Ignore cost analysis"],
    1,
    "FAR 15.407-2",
    "Make-or-buy programs document manufacturing vs purchasing decisions for cost reasonableness."
  ),
  cfcmQ(
    "cfcm-price-15",
    "pricing",
    "Facilities capital cost of money (FCCOM) is:",
    ["A penalty","An allowable cost representing the cost of contractor capital investment","Unallowable always","A fee component"],
    1,
    "FAR 31.205-10",
    "FCCOM compensates contractors for capital investment in facilities."
  ),
  cfcmQ(
    "cfcm-price-16",
    "pricing",
    "Price reasonableness for modifications uses:",
    ["No analysis required","Same standards as initial pricing — price/cost analysis per FAR 15.403","Only oral agreement","Contractor declaration alone"],
    1,
    "FAR 15.403-1",
    "Modifications require same price reasonableness determination as original award."
  ),
  cfcmQ(
    "cfcm-price-17",
    "pricing",
    "Contingency in proposals should be:",
    ["Maximized for profit","Excluded or clearly identified — not included as hidden reserve","Always 20% of cost","Ignored by evaluators"],
    1,
    "FAR 15.404-1",
    "Contingencies must be identified — hidden reserves violate cost/pricing integrity."
  ),
  cfcmQ(
    "cfcm-price-18",
    "pricing",
    "Interorganizational transfers between divisions are priced at:",
    ["Market price always","Actual cost per FAR 31.205-26 (with exceptions)","Zero","Arbitrary markup"],
    1,
    "FAR 31.205-26",
    "Interorganizational transfers generally at cost plus applicable indirect costs."
  ),
  cfcmQ(
    "cfcm-price-19",
    "pricing",
    "Audit rights in cost-type contracts allow the government to:",
    ["Never review costs","Audit contractor records per FAR 52.215-2 for allowability and reasonableness","Only review invoices","Audit only at closeout"],
    1,
    "FAR 52.215-2",
    "Audit clause grants government access to records supporting cost reimbursement."
  ),
  cfcmQ(
    "cfcm-price-20",
    "pricing",
    "Weighted guidelines for profit apply to:",
    ["Commercial items always","Negotiated acquisitions not covered by exceptions in FAR 15.404-4","All sealed bids","Micro-purchases"],
    1,
    "FAR 15.404-4",
    "Weighted guidelines apply to negotiated acquisitions except commercial items and certain exceptions."
  ),
  cfcmQ(
    "cfcm-admin-01",
    "administration",
    "Contract administration is delegated per:",
    ["COR discretion","FAR 42.202 to a Contract Administration Office (CAO)","Contractor request","Subcontractor agreement"],
    1,
    "FAR 42.202",
    "FAR 42 assigns administration to cognizant CAO/DCMA office."
  ),
  cfcmQ(
    "cfcm-admin-02",
    "administration",
    "A unilateral modification may be used for:",
    ["Out-of-scope work with price increase","Exercise of an option or administrative change","Settlement of claims","Scope changes requiring equitable adjustment"],
    1,
    "FAR 43.103",
    "Unilateral mods: options, admin changes, in-scope change orders."
  ),
  cfcmQ(
    "cfcm-admin-03",
    "administration",
    "The Changes clause (FAR 52.243-1) authorizes:",
    ["Any scope change without limit","Changes within the general scope of the contract","Only price decreases","Subcontractor direction"],
    1,
    "FAR 52.243-1",
    "Changes clause limits unilateral authority to modifications within general scope."
  ),
  cfcmQ(
    "cfcm-admin-04",
    "administration",
    "Constructive change occurs when:",
    ["A formal SF 30 is issued","Government conduct effectively changes requirements without a formal mod","Contractor changes approach voluntarily","Option is exercised"],
    1,
    "FAR 43.103",
    "Constructive change — government action altering requirements without formal modification."
  ),
  cfcmQ(
    "cfcm-admin-05",
    "administration",
    "Termination for convenience allows the government to:",
    ["Terminate only for contractor default","End performance when in the government interest with settlement payment","Terminate without any payment","Transfer the contract to another contractor"],
    1,
    "FAR 49.102",
    "T4C allows government to terminate when in its interest — contractor receives settlement."
  ),
  cfcmQ(
    "cfcm-admin-06",
    "administration",
    "Termination for default occurs when:",
    ["The government ends the contract for convenience","Contractor fails to perform and government terminates for breach","Option is not exercised","Contract expires naturally"],
    1,
    "FAR 49.402",
    "T4D — contractor breach triggers default termination with limited recovery."
  ),
  cfcmQ(
    "cfcm-admin-07",
    "administration",
    "The Contract Disputes Act statute of limitations is:",
    ["1 year","6 years from accrual of the claim","10 years","No limit"],
    1,
    "FAR 33.204",
    "CDA claims must be filed within 6 years of accrual."
  ),
  cfcmQ(
    "cfcm-admin-08",
    "administration",
    "A Request for Equitable Adjustment (REA) is:",
    ["A final invoice","A contractor request for adjustment due to government-caused changes","A subcontract only","A CPARS submission"],
    1,
    "FAR 33.203",
    "REA requests equitable adjustment for government-directed changes or constructive changes."
  ),
  cfcmQ(
    "cfcm-admin-09",
    "administration",
    "Contract closeout should occur within:",
    ["30 days of award","As promptly as conditions allow per FAR 4.804 — typically within 365 days of completion","10 years","Never — files remain open indefinitely"],
    1,
    "FAR 4.804",
    "Closeout should be completed as promptly as possible — target within 365 days."
  ),
  cfcmQ(
    "cfcm-admin-10",
    "administration",
    "Limitation of funds on CPFF contracts requires notification at:",
    ["100% expended","Approximately 75% of allotted funds expended","50% expended","25% expended"],
    1,
    "FAR 52.232-22",
    "Contractor must notify when ~75% of allotted funds are expended."
  ),
  cfcmQ(
    "cfcm-admin-11",
    "administration",
    "Government property under FAR 45 must be:",
    ["Retained by contractor at end","Accounted for and disposed per contract terms at closeout","Sold by contractor","Ignored if unused"],
    1,
    "FAR 45.602",
    "Government property must be accounted for and returned/disposed per contract."
  ),
  cfcmQ(
    "cfcm-admin-12",
    "administration",
    "CPARS evaluates contractor performance in areas including:",
    ["Only cost","Quality, schedule, cost control, management, and regulatory compliance","Only technical quality","Employee satisfaction only"],
    1,
    "FAR 42.1502",
    "CPARS evaluates quality, schedule, cost, management, and compliance."
  ),
  cfcmQ(
    "cfcm-admin-13",
    "administration",
    "A novation agreement is required when:",
    ["Contract is modified","Contractor transfers the contract to another party through sale/merger","Option is exercised","Invoice is submitted"],
    1,
    "FAR 42.12",
    "Novation transfers contract obligations to a successor entity with KO approval."
  ),
  cfcmQ(
    "cfcm-admin-14",
    "administration",
    "Post-award orientation conference should occur:",
    ["At closeout","Within a reasonable time after award to align all parties","Never — kickoff replaces it","Only for cost-type contracts"],
    1,
    "FAR 42.503",
    "Post-award conference aligns CO, COR, contractor, and admin office on requirements."
  ),
  cfcmQ(
    "cfcm-admin-15",
    "administration",
    "Value engineering changes under FAR 52.248-1:",
    ["Are prohibited","Share savings between government and contractor when cost reductions are proposed","Always increase cost","Apply only to commercial items"],
    1,
    "FAR 52.248-1",
    "VE clause incentivizes contractor-proposed cost reductions with shared savings."
  ),
  cfcmQ(
    "cfcm-admin-16",
    "administration",
    "A cure notice under termination for default:",
    ["Is optional","Must be issued giving contractor at least 10 days to cure the breach","Is issued after termination","Only applies to commercial items"],
    1,
    "FAR 49.402(b)",
    "Cure notice gives contractor minimum 10 days to remedy the breach before T4D."
  ),
  cfcmQ(
    "cfcm-admin-17",
    "administration",
    "Contract files must be maintained per:",
    ["Company preference","FAR 4.803 contract file documentation requirements","COR instruction only","No requirement"],
    1,
    "FAR 4.803",
    "FAR 4.803 prescribes required contract file contents and organization."
  ),
  cfcmQ(
    "cfcm-admin-18",
    "administration",
    "An assignment of claims allows:",
    ["Transfer of contract to another company","Assignment of receivables/claims to a bank or financing institution","Subcontract without approval","Scope change"],
    1,
    "FAR 32.803",
    "Assignment of claims assigns payment rights to a financing institution — not contract transfer."
  ),
  cfcmQ(
    "cfcm-admin-19",
    "administration",
    "Quality assurance under FAR 46 requires:",
    ["No inspection","Inspection and acceptance per contract terms before payment","Payment before delivery always","COR verbal approval only"],
    1,
    "FAR 46.401",
    "Inspection and acceptance per contract terms must precede payment."
  ),
  cfcmQ(
    "cfcm-admin-20",
    "administration",
    "Suspension of work under FAR 52.242-14:",
    ["Allows unlimited delay at contractor expense","Entitles contractor to equitable adjustment for authorized suspension","Terminates the contract automatically","Is always at contractor request"],
    1,
    "FAR 52.242-14",
    "Government-ordered suspension entitles contractor to equitable adjustment for delay costs."
  ),
  cfcmQ(
    "cfcm-dfars-01",
    "dfars",
    "DFARS applies to:",
    ["All federal agencies","Department of Defense acquisitions","SBA programs only","State governments"],
    1,
    "DFARS 201.101",
    "DFARS is the DoD supplement to the FAR."
  ),
  cfcmQ(
    "cfcm-dfars-02",
    "dfars",
    "DFARS 252.204-7012 requires contractors to:",
    ["Ignore cybersecurity","Provide adequate security for covered defense information and report cyber incidents within 72 hours","Use any IT system","Self-certify without standards"],
    1,
    "DFARS 252.204-7012",
    "7012 mandates NIST 800-171 security and 72-hour cyber incident reporting to DoD."
  ),
  cfcmQ(
    "cfcm-dfars-03",
    "dfars",
    "CMMC (Cybersecurity Maturity Model Certification) is:",
    ["Optional for all contractors","DoD program requiring third-party certification of cybersecurity practices","A commercial item standard only","Replaced by FAR Part 12"],
    1,
    "DFARS 252.204-7021",
    "CMMC requires third-party assessment of cybersecurity maturity for DoD contracts."
  ),
  cfcmQ(
    "cfcm-dfars-04",
    "dfars",
    "DFARS 252.204-7019 requires offerors to:",
    ["Skip cyber assessment","Have a current NIST SP 800-171 self-assessment posted in SPRS","Certify CMMC Level 3 always","Ignore CUI"],
    1,
    "DFARS 252.204-7019",
    "7019 requires current NIST 800-171 self-assessment score in SPRS at offer."
  ),
  cfcmQ(
    "cfcm-dfars-05",
    "dfars",
    "CUI (Controlled Unclassified Information) handling requires:",
    ["No special handling","Marking, safeguarding, and dissemination controls per NIST and DoD policy","Public release","Verbal protection only"],
    1,
    "DFARS 252.204-7012",
    "CUI requires specific marking, safeguarding, and access controls."
  ),
  cfcmQ(
    "cfcm-dfars-06",
    "dfars",
    "DFARS data rights for technical data generally provide the government:",
    ["Unlimited rights always","Rights determined by funding source — unlimited, government purpose, or limited per DFARS 227","No rights","Rights only at closeout"],
    1,
    "DFARS 227.7103",
    "Data rights vary by funding: unlimited (fully funded), GP (mixed), limited (private funding)."
  ),
  cfcmQ(
    "cfcm-dfars-07",
    "dfars",
    "The Berry Amendment (DFARS 252.225-7014) requires:",
    ["Foreign textiles always","Domestic food, clothing, fabrics, and hand tools on DoD contracts","No domestic preference","Commercial item exemption always"],
    1,
    "DFARS 252.225-7014",
    "Berry Amendment requires domestic food, clothing, tents, fabrics, and hand tools."
  ),
  cfcmQ(
    "cfcm-dfars-08",
    "dfars",
    "DFARS 252.225-7000 requires:",
    ["No disclosure","Disclosure of foreign sources for steel, iron, and manufactured goods","Only domestic sources","Waiver for all items"],
    1,
    "DFARS 252.225-7000",
    "Buy American disclosure for foreign end products and components."
  ),
  cfcmQ(
    "cfcm-dfars-09",
    "dfars",
    "Safeguarding Covered Defense Information requires compliance with:",
    ["No standard","NIST Special Publication 800-171","ISO 9001 only","CMMC Level 5 only"],
    1,
    "DFARS 252.204-7012",
    "7012 requires NIST SP 800-171 security controls for CUI on contractor systems."
  ),
  cfcmQ(
    "cfcm-dfars-10",
    "dfars",
    "DFARS 252.204-7020 (NIST Assessment) requires:",
    ["No assessment","Contractor to provide NIST 800-171 assessment results — self or third-party","Annual DCAA audit of cyber","Verbal certification only"],
    1,
    "DFARS 252.204-7020",
    "7020 requires documented NIST 800-171 assessment results."
  ),
  cfcmQ(
    "cfcm-dfars-11",
    "dfars",
    "Anti-human trafficking rules under DFARS 252.225-7044 apply to:",
    ["All contracts regardless of value","Contracts exceeding $500,000 performed outside the United States","Commercial items only","Domestic contracts only"],
    1,
    "DFARS 252.225-7044",
    "7044 applies to contracts over $500K with performance outside the US."
  ),
  cfcmQ(
    "cfcm-dfars-12",
    "dfars",
    "Contractor personnel in designated operational areas require:",
    ["No special training","Combatant Commander's rules and DFARS 252.225-7040 training requirements","Only passport","Commercial item exemption"],
    1,
    "DFARS 252.225-7040",
    "Personnel in designated areas must comply with COCOM rules and training."
  ),
  cfcmQ(
    "cfcm-dfars-13",
    "dfars",
    "DFARS 252.246-7001 requires:",
    ["No warranty","High-risk warranty for critical military items","Commercial warranty only","No inspection"],
    1,
    "DFARS 252.246-7001",
    "7001 imposes warranty requirements for critical military items."
  ),
  cfcmQ(
    "cfcm-dfars-14",
    "dfars",
    "Small business subcontracting under DFARS follows:",
    ["No requirements","FAR Part 19 requirements plus DFARS 219 supplement","Only state law","Prime discretion"],
    1,
    "DFARS 219",
    "DFARS 219 supplements FAR Part 19 for DoD small business programs."
  ),
  cfcmQ(
    "cfcm-dfars-15",
    "dfars",
    "DFARS 252.227-7015 requires:",
    ["No technical data delivery","Technical data delivery schedules per contract requirements","Unlimited rights to all data","Verbal data transfer"],
    1,
    "DFARS 252.227-7015",
    "7015 specifies technical data delivery requirements and schedules."
  ),
  cfcmQ(
    "cfcm-dfars-16",
    "dfars",
    "Cloud computing services under DFARS must:",
    ["Use any cloud provider","Meet FedRAMP and DoD cloud security requirements per DFARS 252.239-7010","Avoid cloud entirely","Use only government-owned systems"],
    1,
    "DFARS 252.239-7010",
    "DoD cloud services must meet FedRAMP and DoD SRG requirements."
  ),
  cfcmQ(
    "cfcm-dfars-17",
    "dfars",
    "The DFARS 252.203-7000 requirement addresses:",
    ["Cybersecurity","Contractor code of business ethics and conduct","Buy American","Data rights"],
    1,
    "DFARS 252.203-7000",
    "7000 requires contractor code of business ethics and conduct programs."
  ),
  cfcmQ(
    "cfcm-dfars-18",
    "dfars",
    "Export-controlled items (ITAR/EAR) in DoD contracts require:",
    ["No special handling","Compliance with export control regulations and DFARS flow-down clauses","Automatic unlimited rights","Public disclosure"],
    1,
    "DFARS 225.7901",
    "Export-controlled items require ITAR/EAR compliance and appropriate flow-downs."
  ),
  cfcmQ(
    "cfcm-dfars-19",
    "dfars",
    "DFARS 252.204-7021 (CMMC) will require:",
    ["Self-assessment only forever","Third-party CMMC certification at specified level for applicable contracts","No cyber requirements","Verbal compliance"],
    1,
    "DFARS 252.204-7021",
    "7021 phases in mandatory third-party CMMC certification."
  ),
  cfcmQ(
    "cfcm-dfars-20",
    "dfars",
    "DFARS deviation requests are processed through:",
    ["Contractor directly to Congress","DoD deviation approval process per DFARS 201.403","COR approval only","No process exists"],
    1,
    "DFARS 201.403",
    "DFARS deviations require approval through the DoD deviation process."
  ),
];

export const CFCM_QUESTION_COUNT = 120;