import type { AssessmentArea, CompanyProfile } from "./types";

export const COMPANY_PROFILES: CompanyProfile[] = [
  {
    id: "lockheed",
    name: "Lockheed Martin",
    focus: ["Deep DFARS", "Security clearance", "Large prime systems"],
    requiredSkills: ["dfars", "administration", "subcontracts", "legal", "pricing"],
  },
  {
    id: "booz",
    name: "Booz Allen Hamilton",
    focus: ["Consulting approach", "Proposals", "Staff augmentation"],
    requiredSkills: ["pricing", "documents", "interview", "administration", "far"],
  },
  {
    id: "saic",
    name: "SAIC",
    focus: ["IT services", "Enterprise contracts", "IDIQ task orders"],
    requiredSkills: ["administration", "pricing", "subcontracts", "far", "documents"],
  },
  {
    id: "leidos",
    name: "Leidos",
    focus: ["Health IT", "Defense", "Science & engineering"],
    requiredSkills: ["dfars", "administration", "pricing", "legal", "financial"],
  },
  {
    id: "mantech",
    name: "ManTech",
    focus: ["Cybersecurity", "Clearance-heavy", "Intel community"],
    requiredSkills: ["dfars", "legal", "subcontracts", "administration", "negotiation"],
  },
  {
    id: "caci",
    name: "CACI",
    focus: ["Intelligence community", "National security", "Technical services"],
    requiredSkills: ["legal", "dfars", "administration", "subcontracts", "interview"],
  },
  {
    id: "8a-mid",
    name: "Mid-size 8(a) firm",
    focus: ["Generalist skills", "Multiple agencies", "Small business compliance"],
    requiredSkills: ["far", "administration", "pricing", "subcontracts", "financial"],
  },
  {
    id: "startup",
    name: "Startup GovCon firm",
    focus: ["Entrepreneurial", "Capture + delivery", "Cash flow"],
    requiredSkills: ["pricing", "negotiation", "documents", "interview", "administration"],
  },
];
