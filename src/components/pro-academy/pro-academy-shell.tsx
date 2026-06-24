"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PRO_ACADEMY_SUBTITLE,
  PRO_ACADEMY_TITLE,
  getCumulativeExams,
  getFinalExamQuestions,
  getModuleAssessment,
  getProLessonById,
  getProModuleById,
} from "@/lib/pro-academy/catalog";
import {
  computeOverallProReadiness,
  isProLessonUnlocked,
  recordProLessonQuiz,
} from "@/lib/pro-academy/progress";
import {
  PRO_FINAL_EXAM_THRESHOLD,
  PRO_FINAL_EXAM_TIME_SECONDS,
  type ProAcademyTrack,
} from "@/lib/pro-academy/types";
import { useProAcademy } from "@/hooks/use-pro-academy";
import { ProAcademyOverview, type ProAcademyNavTarget } from "./pro-academy-overview";
import { ProAcademyTrackView } from "./pro-academy-track-view";
import { ProAcademyModuleView } from "./pro-academy-module-view";
import { ProAcademyLessonView } from "./pro-academy-lesson-view";
import { ProAcademyQuizRunner } from "./pro-academy-quiz-runner";
import { ProAcademyAssessmentRunner } from "./pro-academy-assessment-runner";
import { ProAcademyToolsPanel } from "./pro-academy-tools-panel";

type ShellView = "overview" | "module" | "lesson" | "quiz" | "assessment" | "cumulative" | "final-exam";
type ShellSection = "overview" | ProAcademyTrack | "tools" | "certification";

export function ProAcademyShell({ standalone = false }: { standalone?: boolean }) {
  const { progress, hydrated, update } = useProAcademy();
  const [section, setSection] = useState<ShellSection>("overview");
  const [view, setView] = useState<ShellView>("overview");
  const [track, setTrack] = useState<ProAcademyTrack>("far");
  const [moduleId, setModuleId] = useState<string | null>(null);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);

  const overall = computeOverallProReadiness(progress);
  const selectedModule = moduleId ? getProModuleById(moduleId) : null;
  const selectedLesson = lessonId ? getProLessonById(lessonId) : null;

  const navigate = (target: ProAcademyNavTarget) => {
    if (target === "tools") {
      setSection("tools");
      setView("overview");
      return;
    }
    if (target === "certification") {
      setSection("certification");
      setView("overview");
      return;
    }
    setSection(target);
    setTrack(target);
    setView("overview");
    setModuleId(null);
    setLessonId(null);
  };

  if (!hydrated) {
    return <p className="text-sm text-muted-foreground">Loading Pro Academy progress…</p>;
  }

  if (view === "final-exam") {
    return (
      <ProAcademyAssessmentRunner
        mode="final"
        title="GovCon Pro Academy Certification Exam"
        questions={getFinalExamQuestions()}
        progress={progress}
        timeLimitSeconds={PRO_FINAL_EXAM_TIME_SECONDS}
        passThreshold={PRO_FINAL_EXAM_THRESHOLD}
        onBack={() => { setView("overview"); setSection("certification"); }}
        onComplete={() => { setView("overview"); setSection("certification"); }}
        onUpdate={update}
      />
    );
  }

  if (view === "assessment" && assessmentId && moduleId) {
    const assessment = getModuleAssessment(moduleId);
    if (assessment) {
      return (
        <ProAcademyAssessmentRunner
          mode="module"
          title={assessment.title}
          questions={assessment.questions}
          assessmentId={assessment.id}
          progress={progress}
          passThreshold={assessment.passThreshold}
          onBack={() => setView("module")}
          onComplete={() => setView("module")}
          onUpdate={update}
        />
      );
    }
  }

  if (view === "cumulative" && assessmentId) {
    const exam = getCumulativeExams().find((e) => e.id === assessmentId);
    if (exam) {
      return (
        <ProAcademyAssessmentRunner
          mode="cumulative"
          title={exam.title}
          questions={exam.questions}
          assessmentId={exam.id}
          progress={progress}
          passThreshold={exam.passThreshold}
          onBack={() => setView("overview")}
          onComplete={() => setView("overview")}
          onUpdate={update}
        />
      );
    }
  }

  if (view === "quiz" && selectedLesson) {
    return (
      <ProAcademyQuizRunner
        title={selectedLesson.title}
        subtitle={`Lesson ${selectedLesson.number} quiz`}
        questions={selectedLesson.quiz}
        farCitation={selectedLesson.farReferences?.[0]}
        onBack={() => setView("lesson")}
        onComplete={(score) => {
          update((p) => recordProLessonQuiz(p, selectedLesson.id, score));
          setView("module");
        }}
      />
    );
  }

  if (view === "lesson" && selectedLesson) {
    return (
      <ProAcademyLessonView
        lesson={selectedLesson}
        progress={progress}
        locked={!isProLessonUnlocked(selectedLesson.id, progress)}
        onBack={() => setView("module")}
        onTakeQuiz={() => setView("quiz")}
      />
    );
  }

  if (view === "module" && selectedModule) {
    return (
      <ProAcademyModuleView
        module={selectedModule}
        progress={progress}
        onBack={() => setView("overview")}
        onSelectLesson={(id) => { setLessonId(id); setView("lesson"); }}
        onStartAssessment={(id) => { setAssessmentId(id); setView("assessment"); }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {!standalone && (
        <div>
          <h2 className="text-xl font-medium mb-1">{PRO_ACADEMY_TITLE}</h2>
          <p className="text-sm text-muted-foreground">{PRO_ACADEMY_SUBTITLE}</p>
        </div>
      )}

      <div className="p-4 rounded-lg border bg-primary/5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Pro readiness</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-medium text-primary">{overall}%</span>
            {progress.certificationEarned && <Badge className="bg-emerald-600">Certified</Badge>}
          </div>
          <Progress value={overall} className="mt-2 max-w-md" />
        </div>
      </div>

      <Tabs
        value={section}
        onValueChange={(v) => {
          const s = v as ShellSection;
          setSection(s);
          setView("overview");
          setModuleId(null);
          setLessonId(null);
          if (s === "far" || s === "pricing" || s === "acquisition") setTrack(s);
        }}
      >
        <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
          <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
          <TabsTrigger value="far" className="text-xs">FAR Mastery</TabsTrigger>
          <TabsTrigger value="pricing" className="text-xs">Pricing</TabsTrigger>
          <TabsTrigger value="acquisition" className="text-xs">Acquisition</TabsTrigger>
          <TabsTrigger value="tools" className="text-xs">Tools</TabsTrigger>
          <TabsTrigger value="certification" className="text-xs">Certification Exam</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <ProAcademyOverview progress={progress} onNavigate={navigate} />
        </TabsContent>
        <TabsContent value="far">
          <ProAcademyTrackView
            track="far"
            progress={progress}
            onBack={() => setSection("overview")}
            onSelectModule={(id) => { setModuleId(id); setTrack("far"); setView("module"); }}
          />
        </TabsContent>
        <TabsContent value="pricing">
          <ProAcademyTrackView
            track="pricing"
            progress={progress}
            onBack={() => setSection("overview")}
            onSelectModule={(id) => { setModuleId(id); setTrack("pricing"); setView("module"); }}
          />
        </TabsContent>
        <TabsContent value="acquisition">
          <ProAcademyTrackView
            track="acquisition"
            progress={progress}
            onBack={() => setSection("overview")}
            onSelectModule={(id) => { setModuleId(id); setTrack("acquisition"); setView("module"); }}
          />
        </TabsContent>
        <TabsContent value="tools">
          <ProAcademyToolsPanel progress={progress} onUpdate={update} />
        </TabsContent>
        <TabsContent value="certification">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-lg font-medium">Certification Exam</h3>
            <p className="text-sm text-muted-foreground">
              200 questions · 4-hour time limit · 75% to pass · maximum 3 attempts. Complete all module
              assessments before attempting.
            </p>
            {progress.finalExamPassed ? (
              <Badge className="bg-emerald-600">Passed · {progress.finalExamScore}%</Badge>
            ) : (
              <p className="text-sm">Attempts used: {progress.finalExamAttempts} / 3</p>
            )}
            <Button onClick={() => setView("final-exam")} disabled={progress.finalExamPassed}>
              {progress.finalExamPassed ? "Certification earned" : "Begin certification exam"}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
