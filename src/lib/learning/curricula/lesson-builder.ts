import type {
  CurriculumLesson,
  KnowledgeTopicId,
  LearningPath,
} from "../types";

export interface LessonContentInput {
  bigIdea: string;
  whyItMatters: string;
  consequence: string;
  /** @deprecated use coreSections — coreContent alias supported for generated curricula */
  coreContent?: {
    heading: string;
    content: string;
    martinSays?: string;
    farCitation?: string;
  }[];
  coreSections?: {
    heading: string;
    content: string;
    martinSays?: string;
    farCitation?: string;
  }[];
  realWorldExample: CurriculumLesson["realWorldExample"];
  scenario: CurriculumLesson["scenario"];
  quiz: CurriculumLesson["quiz"];
  practicalExercise?: string;
  simulatorPractice?: string;
  diagramId?: CurriculumLesson["diagramId"];
  deepLink?: CurriculumLesson["deepLink"];
  nextPreview?: string;
  nextConnection?: string;
}

export function lessonId(path: LearningPath, week: number, day: number): string {
  return `${path}-w${week}-d${day}`;
}

export function buildLesson(
  path: LearningPath,
  week: number,
  day: number,
  title: string,
  minutes: number,
  topicId: KnowledgeTopicId,
  content: LessonContentInput
): CurriculumLesson {
  const id = lessonId(path, week, day);
  const sections = content.coreSections ?? content.coreContent ?? [];
  return {
    id,
    path,
    week,
    day,
    title,
    minutes,
    topicId,
    bigIdea: content.bigIdea,
    whyItMatters: content.whyItMatters,
    consequence: content.consequence,
    coreContent: sections,
    realWorldExample: content.realWorldExample,
    scenario: content.scenario,
    quiz: content.quiz.map((q) => ({
      ...q,
      id: q.id.includes(id) ? q.id : `${id}-${q.id}`,
    })),
    practicalExercise: content.practicalExercise,
    simulatorPractice: content.simulatorPractice,
    diagramId: content.diagramId,
    deepLink: content.deepLink,
    nextPreview: content.nextPreview ?? `Tomorrow: continue ${path} track week ${week}.`,
    nextConnection: content.nextConnection ?? "Each lesson builds on the last — stay consistent.",
  };
}

export function scenarioOption(
  id: string,
  label: string,
  isCorrect: boolean,
  feedback: string
) {
  return { id, label, isCorrect, feedback };
}

export function quizQuestion(
  suffix: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
) {
  return { id: suffix, question, options, correctIndex, explanation };
}

function defaultQuiz(prefix: string, topic: string) {
  return [
    {
      id: `${prefix}-q1`,
      question: `Which statement best describes ${topic}?`,
      options: [
        "It is optional guidance with no enforcement",
        "It is a core federal acquisition requirement",
        "It applies only to commercial items",
        "It replaces the FAR entirely",
      ],
      correctIndex: 1,
      explanation: `${topic} is governed by the FAR and agency supplements — see FAR 1.101 for acquisition policy objectives.`,
    },
    {
      id: `${prefix}-q2`,
      question: "Who is primarily responsible for ensuring compliance on a contract?",
      options: ["The COR alone", "The contractor", "The GAO", "The SBA"],
      correctIndex: 1,
      explanation: "Contractors must comply with contract terms and applicable regulations per FAR 52.252-2.",
    },
    {
      id: `${prefix}-q3`,
      question: "What is the first step when you encounter an ambiguous requirement?",
      options: [
        "Proceed with your interpretation",
        "Submit a question through the Q&A process",
        "Withdraw from the competition",
        "Ignore the requirement",
      ],
      correctIndex: 1,
      explanation: "Clarifications protect both parties — see FAR 15.206 for exchanges with offerors.",
    },
    {
      id: `${prefix}-q4`,
      question: "Which document typically defines performance requirements?",
      options: ["Section B", "Section C (SOW/PWS)", "Section A", "SF 1449 block 20"],
      correctIndex: 1,
      explanation: "Section C contains the statement of work or performance work statement per UCF structure.",
    },
    {
      id: `${prefix}-q5`,
      question: "Why does past performance matter in source selection?",
      options: [
        "It is never evaluated",
        "It predicts future performance risk",
        "It replaces price entirely",
        "It only applies to 8(a) contracts",
      ],
      correctIndex: 1,
      explanation: "Past performance is an indicator of ability to perform — FAR 15.305 and 42.1503.",
    },
  ];
}

function defaultScenario(prefix: string, topic: string) {
  return {
    prompt: `Your program manager asks you to proceed on ${topic} without written direction. What do you do?`,
    options: [
      { id: "a", label: "Proceed verbally to stay on schedule", isCorrect: false, feedback: "Verbal direction creates constructive change risk without documentation." },
      { id: "b", label: "Request written modification or COR direction", isCorrect: true, feedback: "Documented changes protect scope, funding, and CPARS — FAR 52.243-1." },
      { id: "c", label: "Bill as out-of-scope without notice", isCorrect: false, feedback: "Surprise billing damages customer trust and may be unallowable." },
      { id: "d", label: "Stop all work indefinitely", isCorrect: false, feedback: "Stopping without notice may be a default risk — communicate first." },
    ],
    farCitation: "FAR 52.243-1",
  };
}

export function buildStandardLesson(
  path: LearningPath,
  week: number,
  day: number,
  title: string,
  minutes: number,
  topicId: KnowledgeTopicId,
  bigIdea: string,
  extras?: Partial<LessonContentInput>
): CurriculumLesson {
  const prefix = lessonId(path, week, day);
  return buildLesson(path, week, day, title, minutes, topicId, {
    bigIdea,
    whyItMatters: extras?.whyItMatters ?? "Contracts professionals use this daily when working federal awards.",
    consequence: extras?.consequence ?? "Missteps here can cost protests, disallowed costs, or poor CPARS ratings.",
    coreSections: extras?.coreSections ??
      extras?.coreContent ?? [
        {
          heading: "Overview",
          content: `${title} covers essential federal contracting knowledge. Understanding this topic helps you navigate real solicitations and contract performance.`,
          martinSays: "I've seen firms lose awards because they skipped the fundamentals — don't be that firm.",
          farCitation: "FAR 1.102",
        },
        {
          heading: "Key concepts",
          content: `Focus on definitions, roles, and regulatory citations tied to ${title}. Link each concept to a contract clause or PWS requirement.`,
          martinSays: "When in doubt, cite the FAR section in writing — it shows you know the rules.",
          farCitation: "FAR 2.101",
        },
        {
          heading: "Application",
          content: `Apply ${title} on your next capture or administration task: identify where the requirement appears in Section L, M, or the PWS.`,
          farCitation: "FAR 7.105",
        },
      ],
    realWorldExample: extras?.realWorldExample ?? {
      scenario: `A junior contracts specialist faces a real ${title.toLowerCase()} situation on a $500K services contract.`,
      action: "They researched the FAR citation, documented the issue, and escalated to the CO with a recommended solution.",
      outcome: "The government issued a bilateral modification and the contractor avoided a CPARS downgrade.",
      lesson: "Regulatory literacy turns crises into manageable admin actions.",
    },
    scenario: extras?.scenario ?? defaultScenario(prefix, title),
    quiz: extras?.quiz ?? defaultQuiz(prefix, title),
    ...extras,
  });
}
