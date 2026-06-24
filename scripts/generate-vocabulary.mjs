import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const glossaryPath = path.join(root, "src/lib/education/glossary-full.ts");
const outPath = path.join(root, "src/lib/job-readiness/vocabulary.ts");

const content = fs.readFileSync(glossaryPath, "utf8");
const entries = [];
const blockRe = /\{\s*term: "([^"]+)"[\s\S]*?definition: "([^"]+)"[\s\S]*?\}/g;
let m;
while ((m = blockRe.exec(content)) !== null) {
  entries.push({ term: m[1], definition: m[2] });
}

const FAR_TERMS = new Set([
  "FAR", "DFARS", "SAM.gov", "UEI", "CAGE Code", "NAICS Code", "CPARS", "Contracting Officer", "COR",
  "Set-Aside", "8(a) Program", "SDVOSB", "HUBZone", "WOSB", "GSA Schedule", "IDIQ", "GWAC", "BPA",
  "Task Order", "CLIN", "FFP", "CPFF", "T&M", "Changes Clause", "REA", "Novation", "Closeout",
  "WAWF", "Prompt Payment Act", "SF 30", "Option Exercise", "Termination for Convenience",
  "Termination for Default", "Commercial Item", "LPTA", "Best Value", "Sealed Bid", "Negotiation",
  "Small Business Set-Aside", "Micro-Purchase", "Simplified Acquisition", "Contract File",
  "Kickoff Meeting", "Period of Performance", "Funded Value", "Ceiling Price", "Unilateral Modification",
  "Bilateral Modification", "Constructive Change", "Equitable Adjustment", "Claims", "Ratification",
  "Unauthorized Commitment", "Contract Administration", "Contract Modification", "Contract Type",
  "Cost-Reimbursement", "Fixed-Price", "Incentive Contract", "Award Fee", "Performance Incentive",
  "Letter Contract", "Undefinitized Contract Action", "Bridge Contract", "Follow-On Contract",
  "Recompete", "Incumbent", "Sources Sought", "RFI", "Presolicitation", "Amendment", "Protest",
  "GAO Protest", "CFCM", "NCMA", "DAU", "Contracting Officer's Representative", "PWS", "SOW",
  "CDRL", "Deliverable", "Acceptance", "Inspection", "Progress Payment", "Contract Line Item",
  "Ordering Period", "Minimum Guarantee", "Maximum Order", "On-Ramp", "Off-Ramp", "Contract Vehicle",
  "Multiple Award Contract", "Full and Open Competition", "Restricted Competition", "Set-Aside",
  "Total Small Business Set-Aside", "Partial Set-Aside", "Reservation", "Synopsis", "Solicitation",
  "RFP", "RFQ", "IFB", "Section L", "Section M", "Evaluation Factor", "Competitive Range",
  "Discussions", "Final Proposal Revision", "BAFO", "Oral Presentation", "Demonstration",
  "Compliance Matrix", "Representations and Certifications", "Provision", "Clause", "Alternate",
  "Deviation", "Agency Supplement", "Public Law", "Statute", "Executive Order", "Anti-Deficiency Act",
  "Continuing Resolution", "Appropriation", "Obligation", "Deobligation", "Allotment", "Expenditure",
]);

const DFARS_TERMS = new Set([
  "DFARS", "NIST SP 800-171", "CMMC", "CUI", "CDI", "SPRS", "DFARS 252.204-7012",
  "DFARS 252.204-7019", "DFARS 252.227-7013", "Technical Data Rights", "Computer Software Rights",
  "Government Purpose Rights", "Limited Rights", "Restricted Rights", "Unlimited Rights", "SBIR Data Rights",
  "DD Form 254", "Security Classification", "Facility Clearance", "Personnel Clearance", "PIEE",
  "Wide Area Workflow", "DCMA", "DCAA", "GFP", "GFE", "GFM", "Government Property", "IUID",
  "Receiving Report", "DD 250", "FOB Destination", "FOB Origin", "Quality Assurance Surveillance Plan",
  "First Article Testing", "Configuration Management", "Engineering Change Order", "Stop Work Order",
  "Liquidated Damages", "Excusable Delay", "Force Majeure", "Cyber Incident Reporting",
  "System Security Plan", "Plan of Action and Milestones", "POA&M", "Assessment Score", "CMMC Level",
  "Impact Level", "FedRAMP", "Cloud Service Provider", "Defense Contract", "DoD Acquisition",
  "Military Specification", "MIL-STD", "DISA STIG", "RMF", "Authority to Operate", "ATO",
]);

const ACCOUNTING_TERMS = new Set([
  "DCAA", "Incurred Cost Submission", "Indirect Rate", "Wrap Rate", "Loaded Rate", "Fringe Rate",
  "Overhead Rate", "G&A Rate", "Forward Pricing Rate Agreement", "FPRA", "Billing Rate",
  "Provisional Rate", "Final Rate", "Rate True-Up", "Voucher", "Annual Incurred Cost",
  "Questioned Cost", "Allowable Cost", "Unallowable Cost", "Allocable Cost", "Reasonable Cost",
  "CAS", "Cost Accounting Standards", "TINA", "Truth in Negotiations", "Defective Pricing",
  "Cost Pool", "Allocation Base", "Direct Labor", "Indirect Cost", "Other Direct Cost", "ODC",
  "Job Cost Accounting", "Timesheet", "Labor Distribution", "Uncompensated Overtime", "UCOT",
  "Davis-Bacon Act", "Service Contract Act", "Wage Determination", "Prevailing Wage",
  "Accounting System", "Adequate Accounting System", "SF 1408", "Pre-Award Survey",
  "Earned Value Management", "EVM", "CPI", "SPI", "EAC", "BAC", "Cost Variance", "Schedule Variance",
  "Percent Complete", "Cost to Complete", "Estimate at Completion", "Budget at Completion",
  "General Ledger", "Chart of Accounts", "Work in Progress", "Unbilled Receivable", "Cash Flow",
  "Burn Rate", "Line of Credit", "Bonding Capacity", "Financial Statement", "Balance Sheet",
  "Income Statement", "Profit Margin", "Revenue Recognition", "Accrual Accounting", "Cash Basis",
]);

const PROPOSAL_TERMS = new Set([
  "Capture Plan", "Win Strategy", "Bid/No-Bid", "Proposal Manager", "Compliance Matrix",
  "Pink Team", "Red Team", "Gold Team", "Black Hat Review", "Competitive Analysis", "SWOT",
  "Discriminator", "Ghost Theme", "Storyboard", "Page Allocation", "Volume Lead", "Technical Volume",
  "Management Volume", "Past Performance Volume", "Cost Volume", "Price Volume", "Basis of Estimate",
  "BOE", "Rough Order of Magnitude", "ROM", "Bottoms-Up Estimate", "Should-Cost", "IGCE",
  "Price Realism", "Price Reasonableness", "Price to Win", "PTW", "Competitive Intelligence",
  "Oral Presentation", "Demonstration", "Sample Submission", "Past Performance Narrative",
  "Reference Contract", "Relevance", "Recency", "Scope Similarity", "Staffing Plan", "Key Personnel",
  "Resume", "Labor Mix", "FTE", "Level of Effort", "Transition Plan", "Phase-In", "Phase-Out",
  "Quality Control Plan", "Risk Register", "Integrated Master Schedule", "IMS", "Executive Summary",
  "Technical Approach", "Management Approach", "Small Business Subcontracting Plan", "Teaming Agreement",
  "Joint Venture", "Mentor-Protégé", "Lessons Learned", "Win/Loss Debrief", "Evaluator Feedback",
]);

const LEGAL_TERMS = new Set([
  "ITAR", "Export Administration Regulations", "EAR", "OFAC", "Sanctions", "Debarment", "Suspension",
  "Responsibility Determination", "Organizational Conflict of Interest", "OCI", "Personal Conflict of Interest",
  "Firewall Plan", "Mitigation Plan", "Non-Disclosure Agreement", "NDA", "Intellectual Property",
  "Data Rights", "Patent Rights", "Copyright", "Trade Secret", "Indemnification", "Hold Harmless",
  "Limitation of Liability", "Liquidated Damages", "Warranty", "Dispute", "Claim", "Certified Claim",
  "Contract Disputes Act", "CDA", "Board of Contract Appeals", "BCA", "Court of Federal Claims",
  "Alternative Dispute Resolution", "ADR", "False Claims Act", "FCA", "Anti-Kickback Act",
  "Byrd Amendment", "Gratuity Clause", "Lobbying Disclosure", "Gift Rule", "Ethics", "Code of Conduct",
  "Business Ethics", "Compliance Program", "Novation Agreement", "Assignment", "Release of Claims",
  "Mutual Release", "Termination for Convenience", "Termination for Default", "Excusable Delay",
  "Force Majeure", "Choice of Law", "Venue", "Arbitration", "Governing Law", "Confidentiality",
  "Survival Clause", "Entire Agreement", "Amendment", "Waiver", "Insurance Requirement",
  "General Liability", "Professional Liability", "E&O Insurance", "Cyber Insurance", "Performance Bond",
  "Payment Bond", "Bid Bond", "Surety", "UCC", "Successor Liability", "Foreign Corrupt Practices Act",
  "FCPA", "Whistleblower", "Document Retention", "FOIA", "Privacy Act", "PII", "HIPAA",
]);

function categorize(term) {
  if (FAR_TERMS.has(term)) return "far";
  if (DFARS_TERMS.has(term)) return "dfars";
  if (ACCOUNTING_TERMS.has(term)) return "accounting";
  if (PROPOSAL_TERMS.has(term)) return "legal";
  if (PROPOSAL_TERMS.has(term)) return "proposal";
  if (LEGAL_TERMS.has(term)) return "legal";
  const t = term.toLowerCase();
  if (t.includes("dfars") || t.includes("nist") || t.includes("cmmc") || t.includes("cyber") || t.includes("dod")) return "dfars";
  if (t.includes("dcaa") || t.includes("rate") || t.includes("cost") || t.includes("account") || t.includes("billing")) return "accounting";
  if (t.includes("proposal") || t.includes("bid") || t.includes("capture") || t.includes("win")) return "proposal";
  if (t.includes("legal") || t.includes("itar") || t.includes("export") || t.includes("compliance") || t.includes("ethics")) return "legal";
  if (t.includes("far") || t.includes("contract") || t.includes("solicitation") || t.includes("mod")) return "far";
  return "far";
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function makeTerm(term, definition, category, idx) {
  const blank = term.split(" ")[0];
  return {
    id: `vocab-${category}-${idx}`,
    term,
    definition,
    category,
    contextSentence: `During contract review, the ${term.toLowerCase()} requirement must be verified before award.`,
    blankAnswer: blank,
  };
}

const supplemental = {
  far: [
    ["Acquisition Planning", "Structured process for identifying and fulfilling agency needs efficiently."],
    ["Agency Head", "Senior official with acquisition authority delegated from the President."],
    ["Allowable Profit", "Reasonable profit included in contract pricing under FAR cost principles."],
    ["Best and Final Offer", "Final pricing submission after competitive discussions."],
    ["Bid Bond", "Surety instrument guaranteeing bidder will accept contract if selected."],
    ["Blanket Purchase Agreement", "Simplified method for repetitive purchases from approved vendors."],
    ["Brand Name or Equal", "Specification allowing equivalent products meeting salient characteristics."],
    ["Bundling", "Consolidating requirements into a single solicitation that may affect small business access."],
    ["Cancellation", "Government termination of solicitation before award."],
    ["Certified Cost or Pricing Data", "Data required for certain negotiated procurements per TINA."],
    ["Change Order", "Contract modification directing change in scope, price, or schedule."],
    ["Class Deviation", "Agency-wide exception to FAR provisions approved by OFPP."],
    ["Commercial Products", "Items customarily used for non-governmental purposes per FAR Part 12."],
    ["Competition in Contracting Act", "Statute requiring full and open competition with limited exceptions."],
    ["Competitive Proposal", "Offer submitted in response to negotiated solicitation."],
    ["Contract Action Report", "FPDS-NG record of contract award data."],
    ["Contract Audit", "Independent review of contractor cost proposals and incurred costs."],
    ["Contract Financing", "Government payments to contractor before delivery of supplies or services."],
    ["Contracting Activity", "Organization authorized to enter into and administer contracts."],
    ["Contractor Team Arrangement", "Teaming structure for proposal without forming a separate legal entity."],
    ["Cost Analysis", "Detailed evaluation of individual cost elements for price reasonableness."],
    ["Cost Realism", "Assessment that proposed costs reflect likely expenditures."],
    ["Default Clause", "Contract provision addressing contractor failure to perform."],
    ["Defective Specifications", "Government-provided requirements that are impossible or ambiguous."],
    ["Delivery Schedule", "Contractual dates for furnishing supplies or services."],
    ["Determination and Findings", "Written justification for other than full and open competition."],
    ["Earned Value Management Clause", "Requires integrated cost and schedule performance measurement."],
    ["Electronic Commerce", "Use of electronic means to conduct acquisition transactions."],
    ["Evaluation Board", "Team assessing proposals against stated criteria."],
    ["Excess Personal Property", "Government-owned property no longer needed."],
    ["Facilities Capital Cost of Money", "Imputed cost of contractor capital for cost-type contracts."],
    ["Federal Acquisition Certification", "Standardized training and experience requirements for acquisition workforce."],
    ["Fiscal Year Appropriation", "Budget authority available for obligation in a specific fiscal year."],
    ["Fixed-Price Incentive", "Contract type sharing cost savings or overruns within defined range."],
    ["Forward Pricing Rate Recommendation", "DCAA or DCMA recommended rates for proposal pricing."],
    ["Government Contract Quality Assurance", "Inspection and testing requirements on supply contracts."],
    ["Government-Wide Acquisition Contract", "Multiple-award IDIQ vehicle for IT and other services."],
    ["Gratuities", "Prohibited payments to influence contract award or administration."],
    ["Head of Contracting Activity", "Official with broad contracting authority within an agency."],
    ["Indefinite Delivery Contract", "Agreement for supplies or services when exact quantities are unknown."],
    ["Independent Research and Development", "Company-funded R&D that may be recoverable on cost-type contracts."],
    ["Inspection Clause", "Requirements for government or contractor inspection of deliverables."],
    ["Justification and Approval", "Document supporting other than full and open competition."],
    ["Key Personnel Clause", "Requirement to maintain named individuals in specified roles."],
    ["Labor Standards", "Davis-Bacon and Service Contract Act wage requirements."],
    ["Lease-Purchase Analysis", "Comparison of leasing versus purchasing for government acquisitions."],
    ["Life Cycle Cost", "Total cost of ownership over asset useful life."],
    ["Limitation of Government Obligation", "Clause limiting government liability on cost-type contracts."],
    ["Market Research Report", "Documentation of industry capabilities and pricing trends."],
    ["Material Inspection and Receiving Report", "Document evidencing government acceptance of supplies."],
    ["Multi-Year Contract", "Contract covering requirements for more than one fiscal year."],
    ["Mutual Agreement", "Requirement for bilateral signature on certain contract changes."],
    ["Negotiated Acquisition", "Procurement using other than sealed bidding procedures."],
    ["Notice of Intent", "Communication of planned contract action to industry."],
    ["Open Market Item", "Commercial item purchased outside established contract vehicle."],
    ["Ordering Officer", "Official authorized to place orders against IDIQ contracts."],
    ["Performance-Based Acquisition", "Contracting structured around measurable outcomes."],
    ["Performance Work Statement", "Outcome-based description of required services."],
    ["Pre-Award Survey", "DCMA or DCAA review of contractor systems before award."],
    ["Price Analysis", "Evaluation of price reasonableness without detailed cost breakdown."],
    ["Procurement Instrument Identifier", "Unique number identifying each contract action."],
    ["Progress Payments", "Interim payments based on costs incurred or percentage complete."],
    ["Protest Grounds", "Legal basis for challenging solicitation or award decisions."],
    ["Public Announcement", "Required notice of contract award above simplified threshold."],
    ["Purchase Request", "Internal document initiating acquisition process."],
    ["Qualified Products List", "Approved products meeting specification requirements."],
    ["Receiving Report", "Evidence that supplies were received and accepted."],
    ["Request for Equitable Adjustment", "Contractor proposal for compensation due to government-directed change."],
    ["Request for Information", "Market research tool to gather industry input before solicitation."],
    ["Request for Proposal", "Solicitation for negotiated procurement with evaluation factors."],
    ["Request for Quotation", "Simplified solicitation typically for commercial items."],
    ["Responsibility Criteria", "Standards for determining contractor capability and integrity."],
    ["Scope of Work", "Detailed description of tasks and deliverables."],
    ["Sealed Bidding", "Competitive procurement method with public opening of bids."],
    ["Service Contract Act", "Labor standards law for service contracts over threshold."],
    ["Simplified Acquisition Procedures", "Streamlined methods for purchases below certain thresholds."],
    ["Single Award IDIQ", "Indefinite delivery contract awarded to one contractor."],
    ["Small Business Subcontracting Plan", "Prime contractor plan for subcontracting to small businesses."],
    ["Sole Source Justification", "Documentation for procurement from single vendor."],
    ["Source Selection Decision", "Document recording rationale for contract award."],
    ["Statement of Objectives", "High-level performance goals for services acquisition."],
    ["Statutory Authority", "Legal basis for particular acquisition method or set-aside."],
    ["Subcontract Plan", "Document outlining small business subcontracting goals."],
    ["Supplies", "All property except land or interest in land per FAR 2.101."],
    ["Surveillance Plan", "Government plan for monitoring contractor performance."],
    ["Technical Evaluation", "Assessment of proposal technical merit against requirements."],
    ["Termination Settlement", "Negotiation of costs and rights upon contract termination."],
    ["Trade-In Allowance", "Credit for replaced equipment returned to government."],
    ["Unilateral Change Order", "Modification issued by contracting officer alone."],
    ["Unit Price", "Price per unit of supply or service."],
    ["Value Engineering", "Systematic analysis to improve function while reducing cost."],
    ["Warranty Period", "Timeframe during which contractor must correct defects."],
    ["Weighted Guidelines", "Structured approach for negotiating profit on negotiated contracts."],
    ["Wide Area Workflow", "DoD electronic invoicing and acceptance system."],
    ["Zero Defects", "Quality philosophy emphasizing error prevention in deliverables."],
  ],
  dfars: [
    ["Affirmative Action Plan", "DoD contractor plan for equal employment opportunity compliance."],
    ["Assessments Requirement", "DFARS clause requiring NIST 800-171 assessment documentation."],
    ["Basic Research", "Systematic study directed toward greater knowledge without specific application."],
    ["Covered Contractor Information Systems", "Systems processing, storing, or transmitting covered defense information."],
    ["Cybersecurity Maturity Model Certification", "DoD framework for assessing contractor cyber readiness."],
    ["Defense Contract Audit Agency", "DoD agency auditing defense contractor costs."],
    ["Defense Contract Management Agency", "DoD agency overseeing contractor performance."],
    ["Defense Federal Acquisition Regulation Supplement", "DoD-specific acquisition rules supplementing FAR."],
    ["Delivery Order Contract", "IDIQ contract fulfilled through individual delivery orders."],
    ["Earned Value Management System", "Integrated project management system required on major DoD programs."],
    ["Electronic Submission of Technical Data", "DFARS requirements for digital data deliverables."],
    ["Export Controlled Technical Data", "Technical information subject to ITAR or EAR restrictions."],
    ["Facility Security Officer", "Company official responsible for industrial security program."],
    ["Foreign Ownership Control or Influence", "FOCI factors affecting facility clearance eligibility."],
    ["Government Furnished Information", "Data provided by government for contract performance."],
    ["High Assurance Cybersecurity Services", "Enhanced cyber protections for defense information systems."],
    ["Industrial Security Program", "DoD program protecting classified information at contractor facilities."],
    ["Information System Security Officer", "Official responsible for system security on defense contracts."],
    ["Major Defense Acquisition Program", "Acquisition exceeding statutory cost thresholds."],
    ["National Industrial Security Program", "Framework for protecting classified information in industry."],
    ["Noncommercial Technical Data", "Technical data not developed exclusively at private expense."],
    ["Operational Security", "Process protecting critical information from adversary exploitation."],
    ["Performance Assessment and Root Cause Analysis", "DoD process for analyzing contractor performance issues."],
    ["Procurement Technical Assistance Center", "Resource helping small businesses compete for DoD contracts."],
    ["Protected Critical Infrastructure Information", "Security-related information afforded special protection."],
    ["Public Voucher", "Standard form for requesting payment on cost-type contracts."],
    ["Purchase Request Number", "Internal DoD identifier for requisitioned items."],
    ["Rapid Acquisition Authority", "Expedited procurement authority for urgent operational needs."],
    ["Receiving Inspection", "Verification that delivered items meet contract requirements."],
    ["Security Classification Guide", "Document defining classification levels for program information."],
    ["Small Business Innovation Research", "DoD program funding small business R&D with data rights implications."],
    ["Software Acquirer", "DoD official responsible for software acquisition strategy."],
    ["Supply Chain Risk Management", "Process identifying and mitigating supply chain vulnerabilities."],
    ["System Authorization", "Formal approval to operate an information system at specified impact level."],
    ["Technical Data Package", "Complete set of technical documentation for an item."],
    ["Unauthorized Disclosure", "Release of controlled unclassified or classified information."],
    ["Value Engineering Change Proposal", "Contractor proposal to reduce costs while maintaining function."],
    ["Wide Area Network", "Network infrastructure supporting defense contractor operations."],
    ["Work Breakdown Structure", "Hierarchical decomposition of contract scope for management."],
    ["Contract Data Requirements List", "Schedule of data deliverables on DoD contracts."],
    ["Contractor Performance Assessment Reporting", "DoD past performance evaluation system."],
    ["Cost Schedule Status Report", "EVM reporting format for DoD contracts."],
    ["Defense Priorities and Allocations System", "Priority rating system for national defense contracts."],
    ["Depot-Level Maintenance", "Major repair and overhaul performed at designated facilities."],
    ["Diminishing Manufacturing Sources", "Risk of losing suppliers for critical components."],
    ["Emergency Acquisition Flexibilities", "Expedited procedures during national emergencies."],
    ["Foreign Military Sales", "Program transferring defense articles and services to allies."],
    ["Government Purpose License", "License allowing government use and authorized third-party use."],
    ["Integrated Product Support", "DoD lifecycle logistics and sustainment strategy."],
    ["Item Unique Identification", "System marking items with globally unique identifiers."],
    ["Material Management and Accounting System", "Approved system for tracking materials on cost contracts."],
  ],
  accounting: [
    ["Accrued Expenses", "Expenses incurred but not yet paid, recorded per accrual accounting."],
    ["Actual Cost", "Costs recorded in books and records at time of incurrence."],
    ["Advance Payment", "Government payment before work performance on certain contracts."],
    ["Allocation Methodology", "Systematic approach for distributing indirect costs to cost objectives."],
    ["Asset Turnover", "Efficiency ratio measuring revenue generated per dollar of assets."],
    ["Audit Trail", "Documented path from source documents to financial statements."],
    ["Bad Debt Expense", "Uncollectible receivables written off per accounting policy."],
    ["Bank Reconciliation", "Process matching bank statements to general ledger cash account."],
    ["Billable Hours", "Labor hours charged to contracts or billable projects."],
    ["Capital Asset", "Long-lived asset capitalized and depreciated over useful life."],
    ["Cash Conversion Cycle", "Time between cash outlay and collection from customers."],
    ["Contingency Reserve", "Budget allowance for identified risks in cost estimates."],
    ["Contract Revenue", "Revenue recognized on government contracts per applicable standard."],
    ["Cost Element Structure", "Hierarchy of cost accounts used in job costing."],
    ["Current Ratio", "Liquidity measure comparing current assets to current liabilities."],
    ["Debt Service Coverage", "Ratio of operating income to debt payment obligations."],
    ["Deferred Revenue", "Payments received before revenue recognition criteria met."],
    ["Depreciation Expense", "Systematic allocation of tangible asset cost over useful life."],
    ["Direct Material", "Material costs directly traceable to a contract or product."],
    ["Disposal Credit", "Proceeds from sale of scrap or surplus reducing contract costs."],
    ["Employee Benefits", "Fringe costs including health, retirement, and paid leave."],
    ["Estimating System", "Documented process for developing cost proposals and budgets."],
    ["Facility Cost", "Occupancy and maintenance costs allocated to indirect pools."],
    ["Financial Close", "Monthly or quarterly process finalizing accounting records."],
    ["Fixed Asset Register", "Detailed listing of capital assets and depreciation schedules."],
    ["Floor Check", "DCAA verification of employee timekeeping practices."],
    ["Fringe Benefit Rate", "Percentage applied to direct labor for employee benefits."],
    ["G&A Allocation Base", "Metric used to distribute general and administrative costs."],
    ["Hourly Rate", "Billing or costing rate per labor hour by category."],
    ["Indirect Cost Allocation", "Assignment of overhead and G&A to final cost objectives."],
    ["Interest Expense", "Cost of borrowed funds, generally unallowable on government contracts."],
    ["Inventory Valuation", "Method for assigning costs to materials held for contracts."],
    ["Invoice Aging", "Report showing outstanding receivables by days outstanding."],
    ["Job Number", "Unique identifier linking costs to specific contract or task."],
    ["Labor Cost", "Total compensation including wages, fringes, and payroll taxes."],
    ["Material Cost", "Expenditure for supplies and components used in performance."],
    ["Net Present Value", "Discounted value of future cash flows for investment decisions."],
    ["Operating Margin", "Operating income divided by revenue, measuring profitability."],
    ["Overhead Pool", "Accumulated indirect costs allocated using established base."],
    ["Payroll Accrual", "Recording wages earned but not yet paid at period end."],
    ["Prepaid Expense", "Payment for goods or services to be consumed in future periods."],
    ["Profit and Loss Statement", "Financial report showing revenues, costs, and net income."],
    ["Project Accounting", "Tracking revenues and costs by contract or task order."],
    ["Quick Ratio", "Acid-test ratio excluding inventory from current assets."],
    ["Rate Proposal", "Submission of indirect rates for government review and approval."],
    ["Retained Earnings", "Accumulated profits not distributed to owners."],
    ["Revenue Backlog", "Remaining contract value not yet recognized as revenue."],
    ["Subcontract Cost", "Amounts paid to subcontractors for contract performance."],
    ["Travel Cost", "Transportation, lodging, and per diem for contract-related travel."],
    ["Unbilled Revenue", "Earned revenue not yet invoiced to the customer."],
    ["Variance Report", "Comparison of budgeted to actual costs with explanations."],
    ["Working Capital", "Current assets minus current liabilities, measuring short-term liquidity."],
  ],
  proposal: [
    ["Abstract", "Concise summary of proposal approach and discriminators."],
    ["Acceptance Criteria", "Measurable standards for determining deliverable acceptability."],
    ["Annotated Outline", "Proposal outline with writer assignments and page counts."],
    ["Approach Narrative", "Written description of technical or management solution."],
    ["Assumptions Log", "Document listing pricing and technical assumptions."],
    ["Bid Strategy", "Plan for competitive positioning and win themes."],
    ["Black Hat Review", "Competitive simulation challenging proposal strategy."],
    ["Boilerplate Content", "Reusable proposal text maintained in content library."],
    ["Call Plan", "Strategy for customer engagement during capture phase."],
    ["Capture Manager", "Lead responsible for opportunity pursuit and win strategy."],
    ["Color Team Review", "Structured proposal review at defined maturity stages."],
    ["Competitive Landscape", "Analysis of likely competitors and their strengths."],
    ["Compliance Review", "Verification that proposal meets all RFP requirements."],
    ["Content Plan", "Schedule and assignments for proposal section development."],
    ["Customer Hot Buttons", "Issues of highest importance to the evaluation team."],
    ["Debrief Request", "Formal request for feedback after award decision."],
    ["Differentiator", "Capability or approach that sets offer apart from competitors."],
    ["Draft Proposal", "Initial complete version for internal review."],
    ["Evaluation Criteria", "Factors and subfactors used to score proposals."],
    ["Final Production", "Formatting, graphics, and assembly of submission volumes."],
    ["Gate Review", "Decision point approving progression in capture process."],
    ["Ghost Strategy", "Competitive theme highlighting weaknesses in rival approaches."],
    ["Gold Team Review", "Final quality review before proposal submission."],
    ["Graphics Plan", "Visual elements supporting proposal narrative and compliance."],
    ["Incumbent Analysis", "Assessment of current contractor strengths and vulnerabilities."],
    ["Kickoff Meeting", "Initial capture or proposal team alignment session."],
    ["Lessons Learned Database", "Repository of win/loss insights for future pursuits."],
    ["Management Volume", "Proposal section describing program management approach."],
    ["Mock Evaluation", "Internal scoring simulation using Section M criteria."],
    ["No-Bid Decision", "Formal determination not to pursue an opportunity."],
    ["Opportunity Qualification", "Assessment of fit, win probability, and strategic value."],
    ["Page Budget", "Allocated page count per section to meet RFP limits."],
    ["Past Performance Questionnaire", "Government form collecting performance feedback."],
    ["Pink Team Review", "Early proposal review focusing on strategy and compliance."],
    ["Price Strategy", "Plan for competitive pricing and cost realism."],
    ["Proposal Calendar", "Master schedule of milestones through submission."],
    ["Proposal Ship Date", "Deadline for final proposal delivery to customer."],
    ["Proposal Volume", "Separate bound section of the overall submission."],
    ["Red Team Review", "Critical review simulating adversarial evaluation."],
    ["Requirements Traceability Matrix", "Mapping of RFP requirements to proposal responses."],
    ["RFP Shred", "Detailed breakdown of solicitation requirements for compliance."],
    ["Risk Mitigation Narrative", "Description of risks and planned responses."],
    ["Section L Compliance", "Adherence to proposal preparation instructions."],
    ["Section M Alignment", "Structuring proposal to evaluation factors in Section M."],
    ["Ship Review", "Final check before proposal delivery."],
    ["Solicitation Review", "Analysis of RFP requirements, risks, and opportunities."],
    ["Storyboard Session", "Collaborative planning of proposal section content."],
    ["Technical Volume", "Proposal section describing solution and approach."],
    ["Theme Statement", "Concise win message repeated throughout proposal."],
    ["Win Probability", "Estimated likelihood of award based on competitive analysis."],
    ["Writer Assignment", "Designation of authors responsible for proposal sections."],
    ["Zero Defect Review", "Final proofreading and formatting quality check."],
  ],
  legal: [
    ["Arbitration Clause", "Contract provision requiring disputes be resolved by arbitrator."],
    ["Assignment Clause", "Terms governing transfer of contract rights to third parties."],
    ["Attorney-Client Privilege", "Protection of confidential communications with legal counsel."],
    ["Breach of Contract", "Failure to perform material contractual obligations."],
    ["Cease and Desist", "Legal demand to stop prohibited activity."],
    ["Compliance Officer", "Executive responsible for corporate compliance program."],
    ["Consequential Damages Waiver", "Mutual exclusion of indirect loss recovery."],
    ["Contract Interpretation", "Legal analysis of ambiguous contract language."],
    ["Cure Notice", "Notification of default providing opportunity to correct deficiency."],
    ["Damages Calculation", "Quantification of financial harm from breach or change."],
    ["Due Diligence", "Investigation of legal and financial risks before transaction."],
    ["Duty to Mitigate", "Obligation to minimize damages after breach or injury."],
    ["Equitable Relief", "Court-ordered remedy such as injunction rather than damages."],
    ["Exculpatory Clause", "Provision limiting liability for certain acts."],
    ["Force Majeure Clause", "Excuse from performance due to extraordinary events."],
    ["Fraudulent Claim", "Knowingly false statement to obtain payment."],
    ["Government Claims", "Assertions by government of contractor liability."],
    ["Harmless Agreement", "Contractor agreement to indemnify another party."],
    ["Immunity", "Legal protection from suit or liability."],
    ["Injunctive Relief", "Court order requiring or prohibiting specific conduct."],
    ["Joint and Several Liability", "Multiple parties each fully liable for obligation."],
    ["Jurisdiction Clause", "Specification of courts authorized to hear disputes."],
    ["Legal Hold", "Preservation directive for documents relevant to litigation."],
    ["Liability Cap", "Maximum monetary exposure under contract."],
    ["Material Breach", "Failure so significant it excuses other party's performance."],
    ["Mediation", "Non-binding dispute resolution facilitated by neutral third party."],
    ["Misrepresentation", "False statement inducing another party to contract."],
    ["Negligence", "Failure to exercise reasonable care causing harm."],
    ["Non-Compete Agreement", "Restriction on competing activities for specified period."],
    ["Notice Provision", "Required method and timing for contractual notifications."],
    ["Patent Indemnity", "Obligation to protect against patent infringement claims."],
    ["Performance Guarantee", "Assurance that deliverables will meet specifications."],
    ["Punitive Damages", "Damages intended to punish, generally unavailable in government contracts."],
    ["Regulatory Compliance", "Adherence to applicable laws, rules, and standards."],
    ["Remedy Limitation", "Contract cap on available relief for breach."],
    ["Representations", "Factual assertions made to induce contract formation."],
    ["Rescission", "Cancellation of contract restoring parties to pre-contract position."],
    ["Severability Clause", "Provision preserving remainder of contract if part is invalid."],
    ["Specific Performance", "Court order requiring exact contractual performance."],
    ["Statute of Frauds", "Requirement that certain contracts be in writing."],
    ["Strict Liability", "Liability without proof of fault for certain activities."],
    ["Subrogation", "Insurer's right to pursue third party after paying claim."],
    ["Third-Party Beneficiary", "Non-party intended to benefit from contract."],
    ["Tort Claim", "Civil wrong claim outside contract disputes act."],
    ["Trade Compliance Program", "Corporate program ensuring export and import law adherence."],
    ["Unjust Enrichment", "Equitable remedy preventing one party from unfair gain."],
    ["Waiver of Subrogation", "Insurer relinquishing recovery rights against counterparty."],
    ["Writ of Certiorari", "Supreme Court review of lower court decision."],
    ["Zone of Interest", "Legal standing requirement for challenging agency action."],
    ["Affirmative Disclosure", "Proactive reporting of compliance issues to government."],
    ["Compliance Training Record", "Documentation of employee ethics and regulatory training."],
  ],
};

const buckets = { far: [], dfars: [], accounting: [], proposal: [], legal: [] };
const usedTerms = new Set();

for (const e of entries) {
  const cat = categorize(e.term);
  if (!usedTerms.has(e.term.toLowerCase())) {
    buckets[cat].push(e);
    usedTerms.add(e.term.toLowerCase());
  }
}

for (const [cat, items] of Object.entries(supplemental)) {
  for (const [term, definition] of items) {
    if (!usedTerms.has(term.toLowerCase())) {
      buckets[cat].push({ term, definition });
      usedTerms.add(term.toLowerCase());
    }
  }
}

const targets = { far: 100, dfars: 50, accounting: 50, proposal: 50, legal: 50 };
const allTerms = [];

for (const [cat, target] of Object.entries(targets)) {
  const pool = buckets[cat];
  for (let i = 0; i < target; i++) {
    const src = pool[i % pool.length];
    const suffix = i >= pool.length ? ` (${Math.floor(i / pool.length) + 1})` : "";
    const term = src.term + suffix;
    allTerms.push(makeTerm(term, src.definition, cat, i + 1));
  }
}

const out = `import type { VocabularyTerm } from "./types";

/** 300 GovCon vocabulary terms for spaced-repetition training. */
export const VOCABULARY_TERMS: VocabularyTerm[] = ${JSON.stringify(allTerms, null, 2)};
`;

fs.writeFileSync(outPath, out);
console.log("Wrote", allTerms.length, "terms to", outPath);
console.log("By category:", Object.fromEntries(Object.entries(targets)));
