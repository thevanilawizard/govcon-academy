"use client";

import type { ReactNode } from "react";
import { GLOSSARY_BY_TERM } from "@/lib/education/glossary-full";

const TERM_PATTERN = /\b([A-Z]{2,}(?:\/[A-Z]{2,})?|[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3})\b/g;

const LINKED_TERMS = new Set(
  Object.keys(GLOSSARY_BY_TERM).filter((k) => !k.includes(" "))
);

/** Wrap known glossary terms in lesson text with markdown-style links */
export function linkGlossaryTerms(text: string): string {
  return text.replace(TERM_PATTERN, (match) => {
    const key = match.toLowerCase();
    if (GLOSSARY_BY_TERM[key] || GLOSSARY_BY_TERM[match.toLowerCase().replace(/\s+/g, "-")]) {
      return `[${match}](#glossary-${encodeURIComponent(key)})`;
    }
    const aliases: Record<string, string> = {
      far: "far",
      dfars: "dfars",
      ko: "contracting-officer",
      cor: "contracting-officer-representative",
      cpars: "cpars",
      sam: "sam-gov",
      naics: "naics",
      ffp: "firm-fixed-price",
      "t&m": "time-and-materials",
      idiq: "idiq",
      wawf: "wawf",
      cmmc: "cmmc",
      dcaa: "dcaa",
      dcma: "dcma",
      oci: "organizational-conflict-of-interest",
      lpta: "lpta",
      pws: "performance-work-statement",
      cdrl: "cdrl",
      coc: "certificate-of-competency",
    };
    const slug = aliases[key];
    if (slug && GLOSSARY_BY_TERM[slug]) {
      return `[${match}](#glossary-${slug})`;
    }
    return match;
  });
}

export function renderLinkedText(
  text: string,
  onGlossaryClick: (term: string) => void
): ReactNode[] {
  const linked = linkGlossaryTerms(text);
  const parts = linked.split(/(\[[^\]]+\]\(#glossary-[^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(#glossary-([^)]+)\)$/);
    if (m) {
      return (
        <button
          key={i}
          type="button"
          onClick={() => onGlossaryClick(decodeURIComponent(m[2]))}
          className="text-primary underline underline-offset-2 hover:text-primary/80 font-medium"
        >
          {m[1]}
        </button>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
