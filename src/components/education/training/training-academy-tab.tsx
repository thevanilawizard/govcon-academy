"use client";

import { useMemo, useState } from "react";
import { useGameStore } from "@/lib/game/store";
import {
  PROGRAM_SUBTITLE,
  PROGRAM_TITLE,
  TRAINING_MODULES,
  getLessonById,
  getModuleById,
} from "@/lib/education/training";
import {
  getModuleProgress,
  getProgramProgress,
  isLessonComplete,
  isLessonUnlocked,
  isModuleUnlocked,
  isQuizPassed,
} from "@/lib/education/training/progress";
import { QUIZ_PASS_THRESHOLD } from "@/lib/education/training/types";
import { ModuleCertificate } from "@/components/education/training/module-certificate";
import { ProgramCertificate } from "@/components/education/training/program-certificate";
import { TrainingLessonView } from "@/components/education/training/training-lesson-view";
import { TrainingQuiz } from "@/components/education/training/training-quiz";
import { FinalExamRunner } from "@/components/education/training/final-exam-runner";
import { TrainingResourcesSection } from "@/components/education/training/training-resources-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type View = "overview" | "module" | "lesson" | "quiz" | "final-exam" | "module-cert" | "program-cert" | "resources";

export function TrainingAcademyTab() {
  const form = useGameStore((s) => s.form);
  const educationProgress = useGameStore((s) => s.educationProgress);
  const setActiveTab = useGameStore((s) => s.setActiveTab);
  const [view, setView] = useState<View>("overview");
  const [moduleId, setModuleId] = useState<string | null>(null);
  const [lessonId, setLessonId] = useState<string | null>(null);

  const program = useMemo(
    () => getProgramProgress(educationProgress.training),
    [educationProgress.training]
  );

  const selectedModule = moduleId ? getModuleById(moduleId) : null;
  const selectedLesson = lessonId ? getLessonById(lessonId) : null;

  if (!form) return null;

  if (view === "program-cert" && educationProgress.training.programCertificateEarned) {
    return (
      <ProgramCertificate
        companyName={form.companyName}
        founderName={form.founderName}
        examScore={educationProgress.training.finalExamScore}
        onBack={() => setView("overview")}
      />
    );
  }

  if (view === "module-cert" && moduleId && selectedModule) {
    return (
      <ModuleCertificate
        module={selectedModule}
        companyName={form.companyName}
        founderName={form.founderName}
        onBack={() => setView("module")}
      />
    );
  }

  if (view === "resources") {
    return <TrainingResourcesSection onBack={() => setView("overview")} />;
  }

  if (view === "final-exam") {
    return (
      <FinalExamRunner
        onBack={() => setView("lesson")}
        onComplete={(score, passed) => {
          if (passed && educationProgress.training.programCertificateEarned) {
            setView("program-cert");
          } else {
            setModuleId("certification");
            setView("module");
          }
        }}
      />
    );
  }

  if (view === "quiz" && selectedLesson && !selectedLesson.isFinalExam) {
    return (
      <TrainingQuiz
        title={selectedLesson.title}
        subtitle={`Lesson ${selectedLesson.number} quiz`}
        questions={selectedLesson.quiz}
        lessonId={selectedLesson.id}
        onBack={() => setView("lesson")}
        onComplete={(score) => {
          if (isQuizPassed(score)) {
            const mod = getModuleById(selectedLesson.moduleId);
            const training = useGameStore.getState().educationProgress.training;
            if (mod && training.moduleCertificates.includes(mod.id)) {
              setModuleId(mod.id);
              setView("module-cert");
              return;
            }
          }
          setView("module");
        }}
      />
    );
  }

  if (view === "lesson" && selectedLesson) {
    return (
      <TrainingLessonView
        lesson={selectedLesson}
        completed={isLessonComplete(selectedLesson.id, educationProgress.training)}
        bestScore={educationProgress.training.quizBestScores[selectedLesson.id]}
        exerciseDone={educationProgress.training.realWorldExercisesCompleted.includes(selectedLesson.id)}
        scenarioDone={educationProgress.training.scenariosCompleted.includes(selectedLesson.id)}
        trainingProgress={educationProgress.training}
        locked={!isLessonUnlocked(selectedLesson.id, educationProgress.training)}
        onBack={() => setView("module")}
        onTakeQuiz={() => setView("quiz")}
        onOpenFinalExam={() => setView("final-exam")}
      />
    );
  }

  if (view === "module" && selectedModule) {
    const modProgress = getModuleProgress(selectedModule.id, educationProgress.training);
    const certified = educationProgress.training.moduleCertificates.includes(selectedModule.id);
    const moduleLocked = !isModuleUnlocked(selectedModule.id, educationProgress.training);

    if (moduleLocked) {
      return (
        <div className="space-y-4">
          <button type="button" onClick={() => setView("overview")} className="text-xs text-muted-foreground">
            ← All modules
          </button>
          <p className="text-sm text-muted-foreground">
            Complete the previous module to unlock this one.
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <button type="button" onClick={() => setView("overview")} className="text-xs text-muted-foreground hover:text-foreground">
          ← All modules
        </button>
        <div>
          <Badge variant="outline" className="mb-2">Module {selectedModule.number}</Badge>
          <h2 className="text-xl font-medium">{selectedModule.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{selectedModule.description}</p>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <Progress value={modProgress.percent} className="h-2 flex-1 max-w-xs" />
            <span>{modProgress.completed}/{modProgress.total} lessons</span>
            {certified && <Badge className="bg-emerald-600">Certificate earned</Badge>}
          </div>
        </div>

        {certified && (
          <Button variant="outline" size="sm" onClick={() => setView("module-cert")}>
            View module certificate
          </Button>
        )}

        <div className="space-y-3">
          {selectedModule.lessons.map((l) => {
            const unlocked = isLessonUnlocked(l.id, educationProgress.training);
            const done = isLessonComplete(l.id, educationProgress.training);
            const score = educationProgress.training.quizBestScores[l.id];
            return (
              <Card
                key={l.id}
                className={`transition-colors ${unlocked ? "cursor-pointer hover:border-primary/40" : "opacity-50"} ${done ? "border-emerald-200" : ""}`}
                onClick={() => {
                  if (!unlocked) return;
                  setLessonId(l.id);
                  setView("lesson");
                }}
              >
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Lesson {l.number}
                      {l.isFinalExam && " · Final exam"}
                      {!unlocked && " · Locked"}
                    </p>
                    <p className="font-medium text-sm">{l.title}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {l.isFinalExam ? (
                      educationProgress.training.finalExamPassed ? (
                        <Badge className="bg-emerald-600">{educationProgress.training.finalExamScore}%</Badge>
                      ) : (
                        <Badge variant="outline">150 questions · 3 hr</Badge>
                      )
                    ) : done ? (
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-800">{score}% ✓</Badge>
                    ) : score !== undefined ? (
                      <Badge variant="outline" className="text-amber-700">{score}% — retake</Badge>
                    ) : unlocked ? (
                      <Badge variant="outline">Start</Badge>
                    ) : (
                      <Badge variant="outline">Locked</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium">{PROGRAM_TITLE}</h2>
        <p className="text-sm text-muted-foreground mt-1">{PROGRAM_SUBTITLE}</p>
        <p className="text-sm mt-3 leading-relaxed max-w-2xl">
          Eight modules, 40 lessons, case studies, interactive scenarios, sample documents, and a{" "}
          150-question comprehensive final exam. Pass each lesson quiz at {QUIZ_PASS_THRESHOLD}%+ to
          unlock the next lesson. Earn module certificates and the full program credential by passing
          the final exam at 75%+ within three attempts.
        </p>
      </div>

      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Program progress</span>
            <span className="font-medium">
              {program.completedLessons}/{program.totalLessons} lessons · {program.modulesCertified}/
              {program.totalModules} certificates
            </span>
          </div>
          <Progress value={program.percent} className="h-2" />
          {educationProgress.training.finalExamPassed && (
            <p className="text-xs text-emerald-700">Final exam passed: {educationProgress.training.finalExamScore}%</p>
          )}
          {educationProgress.training.programCertificateEarned && (
            <Button size="sm" onClick={() => setView("program-cert")}>
              View & download certificate
            </Button>
          )}
        </CardContent>
      </Card>

      <div>
        <Button variant="outline" size="sm" onClick={() => setView("resources")}>
          Real world tools & templates
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {TRAINING_MODULES.map((mod) => {
          const mp = getModuleProgress(mod.id, educationProgress.training);
          const certified = educationProgress.training.moduleCertificates.includes(mod.id);
          const unlocked = isModuleUnlocked(mod.id, educationProgress.training);
          return (
            <Card
              key={mod.id}
              className={`transition-colors ${unlocked ? "cursor-pointer hover:border-primary/40" : "opacity-50"}`}
              onClick={() => {
                if (!unlocked) return;
                setModuleId(mod.id);
                setView("module");
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline">Module {mod.number}</Badge>
                  {!unlocked && <Badge variant="outline">Locked</Badge>}
                  {certified && <Badge className="bg-emerald-600 text-xs">Certified</Badge>}
                </div>
                <CardTitle className="text-base font-medium">{mod.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2">{mod.description}</p>
                <Progress value={mp.percent} className="h-1.5" />
                <p className="text-xs text-muted-foreground">{mp.completed}/{mp.total} lessons complete</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Button variant="link" className="px-0 text-xs" onClick={() => setActiveTab("dashboard")}>
        ← Back to dashboard
      </Button>
    </div>
  );
}
