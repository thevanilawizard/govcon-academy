"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AiLoading } from "@/components/tools/shared/ai-loading";
import { callToolAi } from "@/lib/tools/api-client";
import { syncSectionCertificate } from "@/lib/job-readiness/progress";
import type { JobReadinessProgress, QuizQuestion } from "@/lib/job-readiness/types";
import {
  CFCM_QUESTIONS,
  CFCM_STUDY_PLAN,
  CONTRACT_BRIEF_SECTIONS,
  EXCEL_TEMPLATES,
  SR_ADMIN_INTERVIEW_QUESTIONS,
  SR_ADMIN_PROGRAM,
  SR_ADMIN_RESUME_BULLETS,
  SR_ADMIN_SALARY_NEGOTIATION,
  SR_ADMIN_SKILLS,
  getAllSrAdminLessons,
  getSrAdminLessonById,
} from "@/lib/job-readiness/sr-admin";
import type { CfcmQuestion, CfcmTopic, SrAdminExercise } from "@/lib/job-readiness/sr-admin";

const CFCM_TOPIC_LABELS: Record<CfcmTopic, string> = {
  "contract-types": "Contract Types",
  competition: "Competition & Source Selection",
  "small-business": "Small Business",
  pricing: "Contract Pricing",
  administration: "Contract Administration",
  dfars: "DFARS & Defense",
};

const RISK_CATEGORIES = [
  { value: "scope", label: "Scope" },
  { value: "funding", label: "Funding" },
  { value: "performance", label: "Performance" },
  { value: "subcontractor", label: "Subcontractor" },
  { value: "compliance", label: "Compliance (Regulatory)" },
  { value: "financial", label: "Financial" },
];

function downloadCsv(filename: string, headers: string[], rows: string[][]) {
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const csv = [headers.map(escape).join(","), ...rows.map((r) => r.map(escape).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function parseMarkdownTable(table: string): { headers: string[]; rows: string[][] } {
  const lines = table.trim().split("\n").filter((l) => l.trim() && !l.includes("---"));
  const headers = lines[0]?.split("|").map((c) => c.trim()).filter(Boolean) ?? [];
  const rows = lines.slice(1).map((line) =>
    line
      .split("|")
      .map((c) => c.trim())
      .filter(Boolean)
  );
  return { headers, rows };
}

function SrAdminQuiz({
  title,
  questions,
  onBack,
  onComplete,
}: {
  title: string;
  questions: QuizQuestion[];
  onBack: () => void;
  onComplete: (score: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const correct = questions.filter((item) => answers[item.id] === item.correctIndex).length;
  const score = Math.round((correct / total) * 100);

  const handleSelect = (optIdx: number) => {
    if (revealed[q.id]) return;
    setAnswers((a) => ({ ...a, [q.id]: optIdx }));
    setRevealed((r) => ({ ...r, [q.id]: true }));
  };

  if (finished) {
    const passed = score >= 70;
    return (
      <div className="space-y-4 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-medium">{score}%</p>
            <Badge className={passed ? "bg-emerald-600" : "bg-amber-600"}>
              {passed ? "Passed" : "Review lesson"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {correct} of {total} correct.
          </p>
          <Button onClick={() => onComplete(score)}>{passed ? "Mark lesson complete" : "Try again"}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground">
        ← Back to lesson
      </button>
      <p className="text-sm font-medium">
        {title} — Question {current + 1} of {total}
      </p>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium mb-2">{q.question}</legend>
        {q.options.map((opt, optIdx) => {
          const selected = answers[q.id] === optIdx;
          const show = revealed[q.id];
          const isCorrect = optIdx === q.correctIndex;
          let cls = "w-full text-left text-sm p-3 rounded-lg border transition-colors ";
          if (!show) cls += selected ? "border-primary bg-primary/5" : "hover:bg-gray-50";
          else if (isCorrect) cls += "border-emerald-500 bg-emerald-50";
          else if (selected) cls += "border-red-300 bg-red-50";
          else cls += "opacity-60";
          return (
            <button key={opt} type="button" disabled={show} className={cls} onClick={() => handleSelect(optIdx)}>
              {opt}
            </button>
          );
        })}
      </fieldset>
      {revealed[q.id] && (
        <>
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm">{q.explanation}</div>
          <Button
            onClick={() => {
              if (current < total - 1) setCurrent((c) => c + 1);
              else setFinished(true);
            }}
          >
            {current < total - 1 ? "Next question" : "See results"}
          </Button>
        </>
      )}
    </div>
  );
}

function ContractBriefExercise({
  exercise,
  onComplete,
}: {
  exercise: SrAdminExercise;
  onComplete: () => void;
}) {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [grade, setGrade] = useState<{
    score: number;
    missed: string[];
    feedback: string;
    passed: boolean;
  } | null>(null);

  const runGrade = async () => {
    setLoading(true);
    setGrade(null);
    const briefText = CONTRACT_BRIEF_SECTIONS.map((section) => {
      const sectionFields = section.fields
        .map((f) => `${f.label}: ${fields[`${section.id}-${f.label}`] ?? "(empty)"}`)
        .join("\n");
      return `## Section ${section.number}: ${section.title}\n${sectionFields}`;
    }).join("\n\n");

    try {
      const res = await callToolAi<{
        score: number;
        missed: string[];
        feedback: string;
        passed: boolean;
      }>(
        "contract-brief-grade",
        `Contract: ${String(exercise.data?.contractId ?? "sample")}\n\nStudent contract brief:\n${briefText}`,
        JSON.stringify(exercise.data),
        true
      );
      setGrade(res);
      if (res.passed || res.score >= 70) onComplete();
    } catch {
      const filled = Object.values(fields).filter((v) => v.trim()).length;
      const totalFields = CONTRACT_BRIEF_SECTIONS.reduce((n, s) => n + s.fields.length, 0);
      const score = Math.round((filled / totalFields) * 100);
      setGrade({
        score,
        missed: filled < totalFields ? ["Complete all section fields for full credit"] : [],
        feedback: "AI grading unavailable — scored on field completion. Add ANTHROPIC_API_KEY for Martin review.",
        passed: score >= 70,
      });
      if (score >= 70) onComplete();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">{exercise.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{exercise.instructions}</p>
        {CONTRACT_BRIEF_SECTIONS.map((section) => (
          <div key={section.id} className="space-y-2">
            <p className="text-sm font-medium">
              Section {section.number}: {section.title}
            </p>
            {section.fields.map((field) => (
              <div key={field.label}>
                <label className="text-xs text-muted-foreground">{field.label}</label>
                <Textarea
                  rows={2}
                  className="mt-1 text-sm"
                  placeholder={field.example}
                  value={fields[`${section.id}-${field.label}`] ?? ""}
                  onChange={(e) =>
                    setFields((f) => ({ ...f, [`${section.id}-${field.label}`]: e.target.value }))
                  }
                />
              </div>
            ))}
          </div>
        ))}
        {loading && <AiLoading />}
        {grade && (
          <div className="p-3 rounded-lg border space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">{grade.score}%</span>
              <Badge className={grade.passed ? "bg-emerald-600" : "bg-amber-600"}>
                {grade.passed ? "Brief approved" : "Needs revision"}
              </Badge>
            </div>
            <p className="text-sm">{grade.feedback}</p>
            {grade.missed.length > 0 && (
              <ul className="text-xs text-amber-800 list-disc pl-4">
                {grade.missed.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        <Button onClick={runGrade} disabled={loading}>
          Submit for Martin review
        </Button>
      </CardContent>
    </Card>
  );
}

function RiskAssessmentExercise({
  exercise,
  onComplete,
}: {
  exercise: SrAdminExercise;
  onComplete: () => void;
}) {
  const scenarios =
    (exercise.data?.scenarios as {
      id: string;
      text: string;
      category: string;
      severity: string;
      action: string;
    }[]) ?? [];
  const [answers, setAnswers] = useState<
    Record<string, { category: string; severity: string; action: string }>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correct = 0;
    scenarios.forEach((s) => {
      const a = answers[s.id];
      if (a?.category === s.category && a?.severity === s.severity) correct += 1;
    });
    const computed = Math.round((correct / scenarios.length) * 100);
    setScore(computed);
    setSubmitted(true);
    if (computed >= 75) onComplete();
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">{exercise.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{exercise.instructions}</p>
        {scenarios.map((s, i) => (
          <div key={s.id} className="p-3 rounded-lg border space-y-2">
            <p className="text-sm font-medium">
              Scenario {i + 1}: {s.text}
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <select
                className="text-sm border rounded-md p-2"
                value={answers[s.id]?.category ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    [s.id]: { ...a[s.id], category: e.target.value, severity: a[s.id]?.severity ?? "", action: a[s.id]?.action ?? "" },
                  }))
                }
              >
                <option value="">Risk category…</option>
                {RISK_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              <select
                className="text-sm border rounded-md p-2"
                value={answers[s.id]?.severity ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({
                    ...a,
                    [s.id]: { ...a[s.id], severity: e.target.value, category: a[s.id]?.category ?? "", action: a[s.id]?.action ?? "" },
                  }))
                }
              >
                <option value="">Severity…</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>
            <Textarea
              rows={2}
              className="text-sm"
              placeholder="Recommended action…"
              value={answers[s.id]?.action ?? ""}
              onChange={(e) =>
                setAnswers((a) => ({
                  ...a,
                  [s.id]: { ...a[s.id], action: e.target.value, category: a[s.id]?.category ?? "", severity: a[s.id]?.severity ?? "" },
                }))
              }
            />
            {submitted && (
              <div className="text-xs p-2 rounded bg-blue-50 border border-blue-100">
                <p>
                  Expected: {s.category} / {s.severity.toUpperCase()}
                  {answers[s.id]?.category === s.category && answers[s.id]?.severity === s.severity
                    ? " ✓"
                    : " ✗"}
                </p>
                <p className="mt-1 text-muted-foreground">{s.action}</p>
              </div>
            )}
          </div>
        ))}
        {submitted && (
          <p className="text-sm font-medium">
            Score: {score}% ({Math.round((score / 100) * scenarios.length)} of {scenarios.length} category/severity
            matches)
          </p>
        )}
        <Button onClick={handleSubmit} disabled={submitted && score >= 75}>
          {submitted ? (score >= 75 ? "Exercise complete" : "Review answers above") : "Submit assessment"}
        </Button>
      </CardContent>
    </Card>
  );
}

function CfcmMockExam({
  onComplete,
}: {
  onComplete: (score: number) => void;
}) {
  const [started, setStarted] = useState(false);
  const [questions] = useState(() => [...CFCM_QUESTIONS].sort(() => Math.random() - 0.5));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(7200);

  useEffect(() => {
    if (!started || finished) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setFinished(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  const q = questions[current] as CfcmQuestion;
  const correct = questions.filter((item) => answers[item.id] === item.correctIndex).length;
  const score = Math.round((correct / questions.length) * 100);

  const topicScores = useMemo(() => {
    const byTopic: Record<string, { correct: number; total: number }> = {};
    questions.forEach((item) => {
      const topic = (item as CfcmQuestion).topic;
      if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0 };
      byTopic[topic].total += 1;
      if (answers[item.id] === item.correctIndex) byTopic[topic].correct += 1;
    });
    return byTopic;
  }, [answers, questions]);

  if (!started) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base">CFCM Mock Exam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            120 questions · 2-hour timer · 70% passing score · randomized from the full question bank
          </p>
          <Button onClick={() => setStarted(true)}>Start mock exam</Button>
        </CardContent>
      </Card>
    );
  }

  if (finished) {
    const passed = score >= 70;
    return (
      <div className="space-y-4 max-w-2xl">
        <div className="p-4 rounded-lg border space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-medium">{score}%</p>
            <Badge className={passed ? "bg-emerald-600" : "bg-amber-600"}>
              {passed ? "CFCM ready" : "Keep studying"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {correct} of {questions.length} correct · passing threshold 70%
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Score by topic</p>
            {Object.entries(topicScores).map(([topic, { correct: c, total }]) => (
              <div key={topic} className="flex justify-between text-xs">
                <span>{CFCM_TOPIC_LABELS[topic as CfcmTopic] ?? topic}</span>
                <span>
                  {Math.round((c / total) * 100)}% ({c}/{total})
                </span>
              </div>
            ))}
          </div>
          <Button onClick={() => onComplete(score)}>Save score</Button>
        </div>
      </div>
    );
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="flex justify-between text-sm">
        <span>
          Question {current + 1} of {questions.length}
        </span>
        <span className={secondsLeft < 600 ? "text-red-600 font-medium" : ""}>
          Time: {mins}:{secs.toString().padStart(2, "0")}
        </span>
      </div>
      <Progress value={((current + 1) / questions.length) * 100} />
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium mb-2">{q.question}</legend>
        {q.options.map((opt, optIdx) => (
          <button
            key={opt}
            type="button"
            className={`w-full text-left text-sm p-3 rounded-lg border transition-colors ${
              answers[q.id] === optIdx ? "border-primary bg-primary/5" : "hover:bg-gray-50"
            }`}
            onClick={() => setAnswers((a) => ({ ...a, [q.id]: optIdx }))}
          >
            {opt}
          </button>
        ))}
      </fieldset>
      <div className="flex gap-2">
        <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>
          Previous
        </Button>
        {current < questions.length - 1 ? (
          <Button onClick={() => setCurrent((c) => c + 1)}>Next</Button>
        ) : (
          <Button onClick={() => setFinished(true)}>Finish exam</Button>
        )}
      </div>
    </div>
  );
}

function CareerReadyPanel({
  progress,
  onUpdate,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
}) {
  const [activeId, setActiveId] = useState(SR_ADMIN_INTERVIEW_QUESTIONS[0]?.id ?? "");
  const [showModel, setShowModel] = useState(false);
  const question =
    SR_ADMIN_INTERVIEW_QUESTIONS.find((q) => q.id === activeId) ?? SR_ADMIN_INTERVIEW_QUESTIONS[0];

  const markPracticed = () => {
    onUpdate((p) => {
      const practiced = p.srAdminInterviewPracticed.includes(question.id)
        ? p.srAdminInterviewPracticed
        : [...p.srAdminInterviewPracticed, question.id];
      return { ...p, srAdminInterviewPracticed: practiced };
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Sr. Contracts Administrator — Career Ready</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Interview prep, resume bullets, and salary negotiation for $95K–$110K roles
        </p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Interview preparation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-muted-foreground">
            {progress.srAdminInterviewPracticed.length}/{SR_ADMIN_INTERVIEW_QUESTIONS.length} questions
            practiced
          </p>
          <div className="flex flex-wrap gap-1">
            {SR_ADMIN_INTERVIEW_QUESTIONS.map((q, i) => (
              <Button
                key={q.id}
                variant={q.id === activeId ? "default" : "outline"}
                size="sm"
                className="text-xs h-7"
                onClick={() => {
                  setActiveId(q.id);
                  setShowModel(false);
                }}
              >
                {i + 1}
                {progress.srAdminInterviewPracticed.includes(q.id) && " ✓"}
              </Button>
            ))}
          </div>
          <p className="text-sm font-medium">{question.question}</p>
          <Badge variant="outline">{question.category}</Badge>
          {showModel ? (
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                <p className="font-medium text-xs mb-1">Model answer</p>
                <p className="text-muted-foreground">{question.modelAnswer}</p>
              </div>
              <div>
                <p className="font-medium text-xs mb-1">Key points</p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  {question.keyPoints.map((kp) => (
                    <li key={kp}>{kp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-xs mb-1 text-red-700">What NOT to say</p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  {question.commonMistakes.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-xs mb-1">Follow-up questions</p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  {question.followUps.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Button variant="outline" size="sm" onClick={() => setShowModel(true)}>
              Show model answer
            </Button>
          )}
          <Button size="sm" onClick={markPracticed}>
            Mark practiced
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Resume bullets for this role</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {SR_ADMIN_RESUME_BULLETS.map((bullet) => (
            <div key={bullet.id} className="p-3 rounded-lg border text-sm space-y-2">
              <p className="font-medium">{bullet.template}</p>
              <p className="text-xs text-muted-foreground">
                Fill in: {bullet.placeholders.join(", ")}
              </p>
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                {bullet.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Salary negotiation (${SR_ADMIN_SALARY_NEGOTIATION.targetRange.min.toLocaleString()}–${SR_ADMIN_SALARY_NEGOTIATION.targetRange.max.toLocaleString()})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">{SR_ADMIN_SALARY_NEGOTIATION.marketContext}</p>
          <p>{SR_ADMIN_SALARY_NEGOTIATION.anchorStrategy}</p>
          <div>
            <p className="font-medium text-xs mb-1">If they won&apos;t move on salary, ask for:</p>
            <ul className="list-disc pl-4 text-muted-foreground">
              {SR_ADMIN_SALARY_NEGOTIATION.fallbackAsks.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          {SR_ADMIN_SALARY_NEGOTIATION.scripts.map((s) => (
            <div key={s.situation} className="p-3 rounded-lg bg-primary/5 border">
              <p className="font-medium text-xs">{s.situation}</p>
              <p className="text-muted-foreground mt-1">{s.script}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export function JobReadinessSrAdmin({
  progress,
  onUpdate,
  initialTab = "skills",
  standaloneTitle,
}: {
  progress: JobReadinessProgress;
  onUpdate: (updater: (p: JobReadinessProgress) => JobReadinessProgress) => void;
  initialTab?: "skills" | "cfcm" | "excel" | "career";
  standaloneTitle?: boolean;
}) {
  const [homeTab, setHomeTab] = useState(initialTab);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [cfcmTopic, setCfcmTopic] = useState<CfcmTopic | "all">("all");
  const [cfcmMock, setCfcmMock] = useState(false);

  const allLessons = getAllSrAdminLessons();
  const lesson = activeLessonId ? getSrAdminLessonById(activeLessonId) : null;
  const doneCount = Object.values(progress.srAdminProgress).filter((l) => l.lessonDone).length;
  const pct = Math.round((doneCount / allLessons.length) * 100);

  const markLessonDone = useCallback(
    (lessonId: string, quizScore?: number, exerciseDone?: boolean) => {
      onUpdate((p) => {
        const srAdminProgress = {
          ...p.srAdminProgress,
          [lessonId]: {
            ...p.srAdminProgress[lessonId],
            lessonDone: true,
            quizScore: quizScore ?? p.srAdminProgress[lessonId]?.quizScore,
            exerciseDone: exerciseDone ?? p.srAdminProgress[lessonId]?.exerciseDone,
          },
        };
        return syncSectionCertificate("sr-admin", { ...p, srAdminProgress });
      });
      setQuizMode(false);
      setActiveLessonId(null);
    },
    [onUpdate]
  );

  const markExerciseDone = useCallback(
    (lessonId: string) => {
      onUpdate((p) => ({
        ...p,
        srAdminProgress: {
          ...p.srAdminProgress,
          [lessonId]: { ...p.srAdminProgress[lessonId], lessonDone: p.srAdminProgress[lessonId]?.lessonDone ?? false, exerciseDone: true },
        },
      }));
    },
    [onUpdate]
  );

  const cfcmPracticeQuestions = useMemo(() => {
    if (cfcmTopic === "all") return CFCM_QUESTIONS.slice(0, 20);
    return CFCM_QUESTIONS.filter((q) => q.topic === cfcmTopic);
  }, [cfcmTopic]);

  if (cfcmMock) {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setCfcmMock(false)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Back to CFCM prep
        </button>
        <CfcmMockExam
          onComplete={(score) => {
            onUpdate((p) => ({
              ...p,
              srAdminCfcmMockScores: [...p.srAdminCfcmMockScores, score],
            }));
            setCfcmMock(false);
          }}
        />
      </div>
    );
  }

  if (quizMode && lesson?.quiz) {
    return (
      <SrAdminQuiz
        title={lesson.title}
        questions={lesson.quiz}
        onBack={() => setQuizMode(false)}
        onComplete={(score) => {
          if (score >= 70) markLessonDone(lesson.id, score);
          else setQuizMode(false);
        }}
      />
    );
  }

  if (lesson) {
    const prog = progress.srAdminProgress[lesson.id];
    return (
      <div className="space-y-4 max-w-3xl">
        <button
          type="button"
          onClick={() => setActiveLessonId(null)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          ← Back to skills
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-medium">{lesson.title}</h2>
          {prog?.lessonDone && <Badge className="bg-emerald-600">Complete</Badge>}
        </div>
        <div className="space-y-6">
          {lesson.sections.map((sec) => (
            <div key={sec.heading}>
              <h3 className="text-base font-medium mb-2">{sec.heading}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{sec.content}</p>
            </div>
          ))}
        </div>
        {lesson.exercise?.type === "contract-brief" && (
          <ContractBriefExercise
            exercise={lesson.exercise}
            onComplete={() => markExerciseDone(lesson.id)}
          />
        )}
        {lesson.exercise?.type === "risk-assessment" && (
          <RiskAssessmentExercise
            exercise={lesson.exercise}
            onComplete={() => markExerciseDone(lesson.id)}
          />
        )}
        {lesson.exercise &&
          lesson.exercise.type !== "contract-brief" &&
          lesson.exercise.type !== "risk-assessment" && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{lesson.exercise.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
                {lesson.exercise.instructions}
              </CardContent>
            </Card>
          )}
        <div className="flex flex-wrap gap-2">
          {lesson.quiz.length > 0 && (
            <Button variant="outline" onClick={() => setQuizMode(true)}>
              Take quiz
            </Button>
          )}
          <Button onClick={() => markLessonDone(lesson.id)} disabled={!!prog?.lessonDone}>
            {prog?.lessonDone ? "Lesson complete" : "Mark lesson done"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium">
          {standaloneTitle ? SR_ADMIN_PROGRAM.title : "Sr. Contracts Administrator"}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{SR_ADMIN_PROGRAM.subtitle}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline">
            ${SR_ADMIN_PROGRAM.salaryRange.min.toLocaleString()}–$
            {SR_ADMIN_PROGRAM.salaryRange.max.toLocaleString()} target
          </Badge>
          <Badge variant="outline">{SR_ADMIN_PROGRAM.skillCount} skills</Badge>
          <Badge variant="outline">{SR_ADMIN_PROGRAM.cfcmQuestionCount} CFCM questions</Badge>
        </div>
        <div className="mt-3 max-w-md">
          <div className="flex justify-between text-xs mb-1">
            <span>Program progress</span>
            <span>
              {doneCount}/{allLessons.length} lessons ({pct}%)
            </span>
          </div>
          <Progress value={pct} />
        </div>
      </div>

      <Tabs value={homeTab} onValueChange={(v) => setHomeTab(v as typeof homeTab)}>
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="skills">Job Ready — 8 Skills</TabsTrigger>
          <TabsTrigger value="cfcm">CFCM Prep</TabsTrigger>
          <TabsTrigger value="excel">Excel Templates</TabsTrigger>
          <TabsTrigger value="career">Career Ready</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-4 mt-4">
          {SR_ADMIN_SKILLS.map((skill) => (
            <Card key={skill.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Skill {skill.number}: {skill.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {skill.phases?.map((phase) => (
                  <div key={phase.id}>
                    <p className="text-xs font-medium text-primary mb-1">
                      Phase {phase.number}: {phase.title}
                    </p>
                    <div className="space-y-1">
                      {phase.lessons.map((l) => {
                        const done = progress.srAdminProgress[l.id]?.lessonDone;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => setActiveLessonId(l.id)}
                            className="w-full text-left text-sm p-2 rounded-md border hover:border-primary/40 flex justify-between items-center"
                          >
                            <span>{l.title}</span>
                            {done && <Badge className="text-xs bg-emerald-600">Done</Badge>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                {!skill.phases &&
                  skill.lessons.map((l) => {
                    const done = progress.srAdminProgress[l.id]?.lessonDone;
                    return (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => setActiveLessonId(l.id)}
                        className="w-full text-left text-sm p-2 rounded-md border hover:border-primary/40 flex justify-between items-center"
                      >
                        <span>{l.title}</span>
                        {done && <Badge className="text-xs bg-emerald-600">Done</Badge>}
                      </button>
                    );
                  })}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="cfcm" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">8-week CFCM study plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {CFCM_STUDY_PLAN.map((week) => (
                <div key={week.week} className="p-3 rounded-lg border text-sm">
                  <p className="font-medium">
                    Week {week.week}: {week.title}
                  </p>
                  <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1">
                    {week.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Practice by topic</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <select
                className="text-sm border rounded-md p-2 w-full max-w-xs"
                value={cfcmTopic}
                onChange={(e) => setCfcmTopic(e.target.value as CfcmTopic | "all")}
              >
                <option value="all">Mixed sample (20 questions)</option>
                {(Object.keys(CFCM_TOPIC_LABELS) as CfcmTopic[]).map((t) => (
                  <option key={t} value={t}>
                    {CFCM_TOPIC_LABELS[t]}
                  </option>
                ))}
              </select>
              {cfcmPracticeQuestions.length > 0 && (
                <SrAdminQuiz
                  key={`${cfcmTopic}-${cfcmPracticeQuestions.length}`}
                  title={`CFCM — ${cfcmTopic === "all" ? "Mixed practice" : CFCM_TOPIC_LABELS[cfcmTopic]}`}
                  questions={cfcmPracticeQuestions}
                  onBack={() => setCfcmTopic("all")}
                  onComplete={() => undefined}
                />
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Full mock exam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {progress.srAdminCfcmMockScores.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  Best mock score: {Math.max(...progress.srAdminCfcmMockScores)}% · Attempts:{" "}
                  {progress.srAdminCfcmMockScores.length}
                </p>
              )}
              <Button onClick={() => setCfcmMock(true)}>Start 120-question mock exam</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="excel" className="space-y-4 mt-4">
          {EXCEL_TEMPLATES.map((template) => {
            const { headers, rows } = parseMarkdownTable(template.markdownTable);
            return (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{template.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-xs text-muted-foreground list-disc pl-4">
                    {template.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      downloadCsv(
                        `${template.title.replace(/\s+/g, "-").toLowerCase()}.csv`,
                        headers.length ? headers : template.columns,
                        rows
                      )
                    }
                  >
                    Download CSV template
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="career" className="mt-4">
          <CareerReadyPanel progress={progress} onUpdate={onUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
