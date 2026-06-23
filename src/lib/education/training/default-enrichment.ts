import type { TrainingLesson } from "./types";
import type { LessonEnrichment } from "./enrichment-helpers";
import { cs, doc, reg, scenario } from "./enrichment-helpers";

/** Ensures every lesson has professional training content even without custom enrichment */
export function defaultEnrichment(lesson: TrainingLesson): LessonEnrichment {
  const modLabel = lesson.moduleId.replace(/-/g, " ");
  return {
    caseStudies: [
      cs(
        `${lesson.title}: The Cost of Assumption`,
        `A mid-size ${modLabel} contractor won a recompete and assigned a junior contracts specialist to administer it without reviewing ${lesson.title} requirements in the contract file.`,
        `They assumed standard commercial practice applied and did not document COR direction or verify clause flow-downs.`,
        `A CPARS downgrade and $340,000 in unrecoverable scope absorbed over two option years followed. The firm lost the recompete by 12 evaluation points.`,
        `${lesson.title} is not academic — it governs daily decisions on cash, compliance, and past performance.`
      ),
      cs(
        `${lesson.title}: Getting It Right`,
        `A small business contracts manager at a civilian agency prime faced the exact situation described in this lesson during Q3 performance.`,
        `They stopped work, cited the governing FAR/DFARS provision in writing, and requested a bilateral modification before proceeding.`,
        `The CO issued a mod within 10 days, funding $127,000 in additional scope. CPARS remained Exceptional and the option was exercised.`,
        `Professional discipline on ${lesson.title} converts risk into funded scope and protects your 3-year CPARS record.`
      ),
    ],
    interactiveScenario: scenario(
      `During performance on an active contract related to "${lesson.title}", your COR sends a Friday 4:00 PM email directing action that may exceed the current PWS. What do you do?`,
      [
        {
          id: "a",
          label: "Begin work immediately — the COR represents the government",
          consequence:
            "You perform $15,000–$80,000 of unrecoverable work. FAR 52.232-39 makes unauthorized obligations unenforceable.",
          isCorrect: false,
        },
        {
          id: "b",
          label: "Reply in writing requesting a bilateral modification before starting",
          consequence:
            "Work stops briefly but the CO has time to obligate funds. This is the standard contracts professional response.",
          isCorrect: true,
        },
        {
          id: "c",
          label: "Bill it as out-of-scope on the next invoice without a mod",
          consequence:
            "Invoice rejection, potential False Claims Act exposure, and damaged COR relationship.",
          isCorrect: false,
        },
        {
          id: "d",
          label: "Have your sub absorb the work to preserve the prime relationship",
          consequence:
            "Prime remains liable. Sub costs hit your margin with no government funding path.",
          isCorrect: false,
        },
      ],
      `Under FAR 52.243-1 and 52.232-39, only a Contracting Officer can authorize out-of-scope work via bilateral modification. The correct response: acknowledge the COR's need, explain the PWS boundary, and offer to support a mod immediately. This lesson (${lesson.title}) exists because this scenario ends careers when handled wrong.`
    ),
    sampleDocuments: [
      doc(
        "Sample Contract Reference Excerpt",
        "Contract Article / PWS",
        `(Reference for ${lesson.number} — ${lesson.title})\n\nC.1 SCOPE\nThe Contractor shall provide all personnel, equipment, and management necessary to perform the requirements of this PWS.\n\nC.2 PERIOD OF PERFORMANCE\nBase year plus four option years at the discretion of the Government.\n\nH.1 SPECIAL REQUIREMENTS\nSee applicable FAR/DFARS clauses incorporated by reference.`,
        [
          { label: "Section C", text: "Statement of Work — your performance obligation. Every deliverable must trace here." },
          { label: "Section H", text: "Special requirements — often where DFARS cyber, security, and data rights clauses appear." },
          { label: "Option language", text: "Unilateral government right — not guaranteed revenue. Performance drives exercise." },
        ]
      ),
    ],
    regulatoryDeepDives:
      lesson.moduleId === "far-depth" || lesson.moduleId === "dfars"
        ? [
            reg(
              "FAR 1.602-2",
              "Contracting officers are responsible for ensuring performance of all necessary actions for effective contracting, including compliance with the requirements of the FAR.",
              "The KO — not the COR or PM — holds contracting authority and obligation authority.",
              "You must route scope, funding, and terms changes through the KO. COR direction alone is not enough.",
              "The government uses warranted KOs to maintain fiscal control and uniform application of acquisition law.",
              "Disputes arise when contractors perform on COR verbal direction without mods — the classic unauthorized obligation problem.",
              {
                gaoCases:
                  "GAO B-309068 and related decisions consistently hold contractors responsible for verifying KO authority on changes.",
                contractorAdvantage:
                  "Document every change request in writing to create an auditable trail for REAs and claims.",
              }
            ),
          ]
        : undefined,
  };
}

export function mergeEnrichment(
  lesson: TrainingLesson,
  custom?: LessonEnrichment
): LessonEnrichment {
  const base = defaultEnrichment(lesson);
  if (!custom) return base;
  return {
    caseStudies: custom.caseStudies ?? base.caseStudies,
    interactiveScenario: custom.interactiveScenario ?? base.interactiveScenario,
    sampleDocuments: custom.sampleDocuments ?? base.sampleDocuments,
    regulatoryDeepDives: custom.regulatoryDeepDives ?? base.regulatoryDeepDives,
    sections: custom.sections,
  };
}
