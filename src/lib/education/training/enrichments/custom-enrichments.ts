import { cs, doc, reg, registerEnrichments, scenario } from "../enrichment-helpers";

registerEnrichments({
  "foundations-1-1": {
    caseStudies: [
      cs(
        "Verbal COR Direction Without a Mod",
        "An IT services prime performed 400 hours of database migration work on COR email direction without a bilateral modification.",
        "The contracts manager assumed the COR could authorize scope.",
        "The CO denied payment of $186,000. CPARS dropped to Marginal for failure to manage changes.",
        "Only a warranted Contracting Officer can obligate funds — FAR 1.601 and 52.232-39."
      ),
      cs(
        "Reading the Clause Matrix First",
        "A new contracts specialist mapped every FAR 52.2xx clause in a DoD FFP services contract before kickoff.",
        "They identified 52.243-1, 52.237-2, and 52.219-14 as high-risk and briefed the PM.",
        "Two scope changes were properly modded in Year 1; zero unauthorized obligations.",
        "Finding and reading clauses before performance prevents the most common admin failures."
      ),
    ],
    interactiveScenario: scenario(
      "Your COR verbally asks you to expand scope to include weekly reports not in the PWS. What do you do?",
      [
        { id: "a", label: "Start the reports — keep the COR happy", consequence: "Unfunded work you cannot recover.", isCorrect: false },
        { id: "b", label: "Email the COR and CO requesting a bilateral mod citing FAR 52.243-1", consequence: "Proper path — work is funded or formally declined.", isCorrect: true },
        { id: "c", label: "Add reports and increase your next invoice", consequence: "Invoice rejection and potential FCA scrutiny.", isCorrect: false },
        { id: "d", label: "Refuse without explanation", consequence: "Damaged relationship without educating the COR on process.", isCorrect: false },
      ],
      "FAR 52.243-1 requires bilateral agreement for changes. Respond: 'Happy to support — please initiate a mod so you have funding coverage.'"
    ),
    sampleDocuments: [
      doc(
        "FAR 52.243-1 (Changes — Fixed Price) — Excerpt",
        "FAR Clause",
        `"Changes" means any written order designated as a change order, or any written change in the terms and conditions of the contract.\n\n(b) The Contracting Officer may at any time, by written order, make changes within the general scope of the contract in the drawings, designs, specifications, services, or other requirements.`,
        [
          { label: "Written order", text: "Verbal COR direction is not a change order." },
          { label: "General scope", text: "Changes outside PWS scope require negotiation, not unilateral direction." },
        ]
      ),
    ],
  },
  "dfars-3-3": {
    regulatoryDeepDives: [
      reg(
        "DFARS 252.204-7012",
        "The Contractor shall provide adequate security on all covered contractor information systems. The Contractor shall implement NIST SP 800-171 security requirements.",
        "If you handle Covered Defense Information, you must implement all 110 NIST 800-171 controls on applicable systems.",
        "Failure triggers breach reporting within 72 hours, potential False Claims Act exposure, and loss of future awards.",
        "DoD requires contractors to protect CDI at the same level as federal systems.",
        "Disputes over what constitutes CDI, adequate security, and flow-down to subs.",
        {
          gaoCases:
            "United States ex rel. Markus v. Aerojet Rocketdyne ($9M settlement) — cybersecurity certification misrepresentations.",
          contractorAdvantage:
            "Maintain SSP and POA&M; use them in proposals to demonstrate compliance maturity.",
        }
      ),
      reg(
        "DFARS 252.204-7020",
        "Contractors must provide access to facilities, systems, and personnel for DoD to assess NIST SP 800-171 implementation.",
        "DoD or a third party may assess your 800-171 compliance — you must cooperate.",
        "Prepare evidence packages before assessment; gaps become conditions on award or continuing eligibility.",
        "Government verifies that self-attestation in SPRS is accurate.",
        "Contractors dispute scope of assessor access and cost of remediation timelines.",
        {
          contractorAdvantage:
            "Score yourself honestly in SPRS — inflated scores discovered in assessment destroy credibility.",
        }
      ),
      reg(
        "DFARS 252.204-7021",
        "CMMC level required by the solicitation must be met at time of award and maintained throughout performance.",
        "CMMC Level 2 = third-party certification of 800-171 controls for most DoD contracts with CDI.",
        "Without certification when required, you are non-responsive or in breach.",
        "DoD uses CMMC to reduce cyber risk across the defense industrial base.",
        "Small firms struggle with cost and timeline — plan 12–18 months and $100K–$300K for Level 2.",
        {
          contractorAdvantage:
            "Achieving CMMC early is a discriminator in DoD capture — market it in proposals.",
        }
      ),
    ],
    sampleDocuments: [
      doc(
        "Sample DCAA Cybersecurity Finding",
        "Audit Finding Letter",
        `FINDING F-2024-003\nCondition: Contractor did not implement multi-factor authentication on system processing CDI.\nCause: POA&M item past due by 90 days.\nEffect: Unauthorized access risk; non-compliance with DFARS 252.204-7012.`,
        [
          { label: "Condition", text: "What the auditor observed — factual deficiency." },
          { label: "Cause", text: "Root cause — often overdue POA&M items." },
          { label: "Effect", text: "Risk to government — drives corrective action deadline." },
        ]
      ),
    ],
  },
  "proposals-5-2": {
    caseStudies: [
      cs(
        "Ignoring Section M",
        "A proposal team wrote a technically superior volume but never built a compliance matrix against Section M evaluation factors.",
        "They gold-plated technical content unrelated to scored subfactors.",
        "Evaluators scored them last on three of four factors despite strong narrative. Lost to a compliant mid-tier bidder.",
        "Section M is the scorecard — mirror its language and structure exactly."
      ),
      cs(
        "Compliance Matrix Win",
        "A $12M services bidder assigned a dedicated compliance lead who mapped every Section L requirement to proposal page numbers.",
        "Zero deficiencies in compliance review; evaluators found every answer quickly.",
        "Won Best Value with a 6% price premium over the low bidder.",
        "Compliance matrices win by making evaluators' jobs easy."
      ),
    ],
    sampleDocuments: [
      doc(
        "Sample Section M Evaluation Factor",
        "RFP Section M",
        `M.1 EVALUATION FACTORS (Order of importance)\nFactor 1 — Technical Approach (40%)\nFactor 2 — Past Performance (30%)\nFactor 3 — Price (30%)\n\nSubfactors under Technical: Understanding of PWS (50%), Staffing Plan (30%), Risk Mitigation (20%)`,
        [
          { label: "Factor weights", text: "Your proposal structure should mirror these weights in page allocation." },
          { label: "Subfactors", text: "Address each subfactor with explicit headings — evaluators score against these labels." },
        ]
      ),
    ],
  },
});
