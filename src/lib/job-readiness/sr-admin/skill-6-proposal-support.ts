import { lesson, q } from "./content-helpers";
import type { SrAdminSkill } from "./types";

const SKILL_ID = "sr-skill-6" as const;

const lessons = [
  lesson(
    "sr6-l1-proposal-role",
    SKILL_ID,
    "The Contracts Administrator's Role in Proposals",
    [
      {
        heading: "You Are Not Writing the Technical Approach",
        content:
          "In a proposal, the contracts administrator is the compliance and risk gatekeeper — not the technical writer. Your 10 responsibilities: (1) Review solicitation for compliance requirements; (2) Build the compliance matrix mapping Section L to proposal locations; (3) Review representations and certifications for accuracy; (4) Verify SAM.gov registration and certifications are current; (5) Review teaming agreement workshare against FAR 52.219-14; (6) Review subcontractor quotes and flow-down compliance; (7) Review cost/price volume against Section L format requirements; (8) Flag legal risks in contract terms before submission; (9) Review Section H for unusual requirements; (10) Sign required certifications as authorized company representative.",
      },
      {
        heading: "Timeline and Coordination",
        content:
          "Start contracts review when the solicitation drops — not 48 hours before submission. Day 1-3: Read full solicitation, build compliance matrix, identify risks. Day 4-7: Review teaming agreements and sub quotes. Day 8-14: Review draft cost/price volume and reps/certs. Day 15+: Final compliance check, sign certifications, verify submission format. Attend color team reviews (Pink, Red, Gold) specifically to validate compliance — your 'non-compliant' flag at Gold team can save the bid.",
      },
      {
        heading: "Common Proposal Mistakes by Contracts Staff",
        content:
          "Missing Section L requirements in compliance matrix — fatal on best-value evaluations. Stale SAM.gov registration discovered after submission — can invalidate offer. False reps/certs — False Claims Act exposure. Teaming agreement workshare violating FAR 52.219-14 — can disqualify set-aside offer. Cost/price volume in wrong format — non-responsive. Not flagging unusual Section H clauses before bid — locks company into bad terms at award.",
      },
    ],
    [
      q("sr6-l1-q1", "The contracts admin's primary proposal role is:", ["Writing technical approach", "Compliance and risk gatekeeping", "Graphic design", "Printing and binding"], 1, "Contracts admin ensures compliance, reviews certifications, and flags legal risks."),
      q("sr6-l1-q2", "When should contracts review of a solicitation begin?", ["48 hours before submission", "Day 1 when solicitation drops", "After award", "During CPARS evaluation"], 1, "Start immediately — compliance matrix and risk review need time."),
      q("sr6-l1-q3", "A stale SAM.gov registration at submission can:", ["Have no effect", "Invalidate the offer", "Increase win probability", "Trigger automatic award"], 1, "Active SAM registration is required — stale registration can disqualify the offer."),
      q("sr6-l1-q4", "At color team reviews, contracts admin validates:", ["Graphic design quality", "Compliance with Section L requirements", "Font choices", "Page color scheme"], 1, "Compliance validation at color teams prevents non-responsive submissions."),
      q("sr6-l1-q5", "Teaming agreement workshare must comply with:", ["Company policy only", "FAR 52.219-14 limitation on subcontracting", "State law only", "No regulatory requirement"], 1, "Set-aside workshare must meet FAR 52.219-14 minimum performance requirements."),
    ]
  ),
  lesson(
    "sr6-l2-section-k",
    SKILL_ID,
    "Section K — Representations and Certifications",
    [
      {
        heading: "What Section K Is and Why Every Rep Matters",
        content:
          "Section K contains required certifications by the offeror — each is a legally binding representation. False certifications trigger False Claims Act liability (treble damages plus penalties). Key reps to review: Small Business Status (FAR 52.219-1), Set-Aside Eligibility (52.219-28 for SDVOSB, 52.219-27 for HUBZone), Debarment and Suspension (52.209-5), Equal Opportunity/Affirmative Action (52.222-22), Buy American (52.225-2), Trafficking in Persons (52.222-50), Whistleblower Protections (52.203-17), and CMMC/Cyber (DFARS 252.204-7019/7020 if defense).",
      },
      {
        heading: "Verification Before Signing",
        content:
          "Before signing any certification: verify SAM.gov reps/certs match what you're certifying in the proposal; confirm small business size standard calculation is current (include affiliates per 13 CFR 121); verify no debarred parties in ownership chain; confirm Buy American compliance for proposed products; verify CMMC/cyber status if DFARS applies. Annual update requirement: SAM.gov reps/certs must be updated annually — set calendar reminder 60 days before expiration.",
      },
      {
        heading: "Consequences of False Certifications",
        content:
          "False Claims Act (31 USC 3729): knowingly presenting false claims for payment — treble damages plus $5,000-$10,000 per claim. Criminal penalties for major fraud. Debarment from federal contracting. Recent enforcement: SDVOSB fraud cases resulting in debarment and criminal prosecution for certifying veteran status that didn't meet ownership/control requirements. When in doubt, do not sign — escalate to legal and executive leadership.",
      },
    ],
    [
      q("sr6-l2-q1", "False certifications in Section K can trigger:", ["Higher CPARS", "False Claims Act liability with treble damages", "Automatic contract extension", "Better payment terms"], 1, "False reps/certs create FCA exposure — one of the most serious compliance violations."),
      q("sr6-l2-q2", "FAR 52.209-5 certifies:", ["Small business status", "Debarment and suspension status", "Buy American compliance", "Cybersecurity maturity"], 1, "52.209-5 covers debarment, suspension, and proposed debarment status."),
      q("sr6-l2-q3", "SAM.gov reps/certs must be updated:", ["Never after initial registration", "Annually at minimum", "Only at contract closeout", "Every 10 years"], 1, "Annual SAM.gov update is required to maintain active registration and current certifications."),
      q("sr6-l2-q4", "Before signing Section K, verify:", ["Only the total price", "SAM.gov reps match proposal certifications, size standard, debarment status, and all applicable reps", "Only technical approach", "Graphic design"], 1, "Every certification must be verified against current company status before signing."),
      q("sr6-l2-q5", "SDVOSB certification fraud can result in:", ["Warning letter only", "Debarment and criminal prosecution", "Higher contract value", "Automatic renewal"], 1, "Set-aside fraud is aggressively prosecuted — debarment and criminal charges are real consequences."),
    ]
  ),
];

export const SR_SKILL_6: SrAdminSkill = {
  id: SKILL_ID,
  number: 6,
  title: "Proposal Support (Revenue Side)",
  description: "Contracts administrator responsibilities in proposals including compliance matrix and Section K review.",
  lessons,
};
