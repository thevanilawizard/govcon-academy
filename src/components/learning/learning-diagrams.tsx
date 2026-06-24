"use client";

import { useState } from "react";
import type { CurriculumLesson } from "@/lib/learning/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type DiagramId = NonNullable<CurriculumLesson["diagramId"]>;

export function LearningDiagrams({ diagramId }: { diagramId: DiagramId }) {
  switch (diagramId) {
    case "acquisition-lifecycle":
      return <AcquisitionLifecycle />;
    case "contract-anatomy":
      return <ContractAnatomy />;
    case "indirect-rates":
      return <IndirectRates />;
    case "source-selection":
      return <SourceSelectionFlow />;
    case "far-hierarchy":
      return <FarHierarchy />;
    case "set-aside-tree":
      return <SetAsideTree />;
    default:
      return null;
  }
}

function AcquisitionLifecycle() {
  const phases = [
    { id: "pre", label: "Pre-Award", owner: "CO / Industry", steps: ["Market research", "Solicitation", "Evaluation"] },
    { id: "award", label: "Award", owner: "CO", steps: ["Negotiation", "Award", "Kickoff"] },
    { id: "post", label: "Post-Award", owner: "COR / Contractor", steps: ["Performance", "Mods", "Invoicing"] },
    { id: "close", label: "Closeout", owner: "CO / Contractor", steps: ["Final invoice", "Property", "Release"] },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Acquisition Lifecycle</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {phases.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpen(open === p.id ? null : p.id)}
              className="flex-1 min-w-[120px] p-3 rounded-lg border text-left hover:border-primary"
            >
              <p className="text-sm font-medium">{p.label}</p>
              <Badge variant="outline" className="mt-1 text-[10px]">{p.owner}</Badge>
              {open === p.id && (
                <ul className="mt-2 text-xs text-muted-foreground list-disc pl-4">
                  {p.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ContractAnatomy() {
  const sections = [
    { id: "A", label: "Section A — Solicitation", detail: "Introductory material and contract form." },
    { id: "C", label: "Section C — SOW/PWS", detail: "Performance requirements and deliverables." },
    { id: "H", label: "Section H — Special Requirements", detail: "Security, staffing, and unique terms." },
    { id: "I", label: "Section I — Clauses", detail: "FAR/DFARS clauses incorporated by reference." },
    { id: "J", label: "Section J — Attachments", detail: "Supporting documents and templates." },
    { id: "M", label: "Section M — Evaluation", detail: "Factors and subfactors for source selection." },
  ];
  const [selected, setSelected] = useState(sections[0]);
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Contract Anatomy (UCF)</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelected(s)}
              className={`w-full text-left p-2 rounded border text-xs ${selected.id === s.id ? "border-primary bg-primary/5" : ""}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-muted/30 text-sm">{selected.detail}</div>
      </CardContent>
    </Card>
  );
}

function IndirectRates() {
  const [salary, setSalary] = useState(100000);
  const [fringe, setFringe] = useState(0.28);
  const [oh, setOh] = useState(0.45);
  const [ga, setGa] = useState(0.12);
  const [fee, setFee] = useState(0.08);
  const loaded = salary * (1 + fringe);
  const withOh = loaded * (1 + oh);
  const withGa = withOh * (1 + ga);
  const price = withGa * (1 + fee);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Indirect Rate Build-Up (live)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Base salary</Label>
            <Input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} />
          </div>
          <div>
            <Label className="text-xs">Fringe rate</Label>
            <Input type="number" step="0.01" value={fringe} onChange={(e) => setFringe(Number(e.target.value))} />
          </div>
          <div>
            <Label className="text-xs">Overhead rate</Label>
            <Input type="number" step="0.01" value={oh} onChange={(e) => setOh(Number(e.target.value))} />
          </div>
          <div>
            <Label className="text-xs">G&A rate</Label>
            <Input type="number" step="0.01" value={ga} onChange={(e) => setGa(Number(e.target.value))} />
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <p>Loaded labor: ${loaded.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p>+ Overhead: ${withOh.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p>+ G&A: ${withGa.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p className="font-medium text-primary">+ Fee → Price: ${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function SourceSelectionFlow() {
  const steps = ["RFP Release", "Proposals In", "Initial Eval", "Competitive Range", "Discussions", "FPR", "Best Value", "Award"];
  const [active, setActive] = useState(0);
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Source Selection Process</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {steps.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setActive(i)}
              className={`px-2 py-1 rounded text-xs border ${active === i ? "bg-primary text-primary-foreground" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Step {active + 1}: {steps[active]} — evaluators apply Section M factors and document the decision.
        </p>
      </CardContent>
    </Card>
  );
}

function FarHierarchy() {
  const layers = [
    { label: "FAR (Base)", detail: "Primary acquisition regulation for civilian agencies." },
    { label: "Agency Supplements", detail: "DFARS, HHSAR, GSAM — agency-specific additions." },
    { label: "Contract Clauses", detail: "FAR/DFARS 52.xxx incorporated into each award." },
    { label: "Task Orders", detail: "Specific work issued under IDIQ/GWAC vehicles." },
  ];
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">FAR Part Hierarchy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {layers.map((l, i) => (
          <div key={l.label} className="p-3 rounded-lg border ml-0" style={{ marginLeft: i * 12 }}>
            <p className="text-sm font-medium">{l.label}</p>
            <p className="text-xs text-muted-foreground">{l.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SetAsideTree() {
  const [step, setStep] = useState(0);
  const nodes = [
    "Value over $10,000?",
    "Reasonable expectation of 2+ small businesses?",
    "Which set-aside type applies?",
    "Verify limitations on subcontracting",
  ];
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Set-Aside Decision Tree</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {nodes.slice(0, step + 1).map((n, i) => (
          <div key={i} className="p-2 rounded border text-sm">{n}</div>
        ))}
        {step < nodes.length - 1 ? (
          <div className="flex gap-2">
            <button type="button" className="text-xs underline" onClick={() => setStep(step + 1)}>Yes →</button>
            <button type="button" className="text-xs text-muted-foreground" onClick={() => setStep(0)}>Reset</button>
          </div>
        ) : (
          <Badge>FAR Part 19 applies</Badge>
        )}
      </CardContent>
    </Card>
  );
}
