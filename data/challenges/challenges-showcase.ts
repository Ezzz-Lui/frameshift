enum DifficultyLevel {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  CHALLENGER = "challenger",
}

enum ChallengeType {
  BUG_FIX = "bug-fix",
  FEATURE_ADDITION = "feature-addition",
  REFACTOR = "refactor",
}

interface Challenge {
  id: string;
  title: string;
  framework: string;
  difficulty: DifficultyLevel;
  type: ChallengeType;
  time: string;
  description: string;
  tags: string[];
  repoURL: string;
}

export const challenges: Challenge[] = [
  {
    id: "vue-state-management-bug",
    title: "Fix State Management Race Condition",
    framework: "Vue 3",
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.BUG_FIX,
    time: "2-3 hours",
    description:
      "Identify and fix a race condition in a Pinia store affecting real-time data synchronization.",
    tags: ["Pinia", "Composition API", "Async"],
    repoURL: "https://github.com/",
  },
  {
    id: "vue-component-refactor",
    title: "Refactor Component Architecture",
    framework: "Vue 3",
    difficulty: DifficultyLevel.MEDIUM,
    type: ChallengeType.REFACTOR,
    time: "3-4 hours",
    description:
      "Restructure a tightly-coupled component tree into composable, reusable modules.",
    tags: ["Composables", "Architecture", "DRY"],
    repoURL: "https://github.com/",
  },
  {
    id: "vue-form-validation",
    title: "Implement Dynamic Form Validation",
    framework: "Vue 3",
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.FEATURE_ADDITION,
    time: "2-3 hours",
    description:
      "Add a flexible validation system to a multi-step form with conditional field requirements.",
    tags: ["Forms", "Validation", "TypeScript"],
    repoURL: "https://github.com/",
  },
  {
    id: "vue-performance-optimization",
    title: "Optimize Large List Rendering",
    framework: "Vue 3",
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.REFACTOR,
    time: "3-4 hours",
    description:
      "Improve performance of a component rendering 10,000+ items with real-time updates.",
    tags: ["Performance", "Virtual Scroll", "Reactivity"],
    repoURL: "https://github.com/",
  },
  {
    id: "vue-api-integration",
    title: "Add Pagination and Filtering",
    framework: "Vue 3",
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.FEATURE_ADDITION,
    time: "1-2 hours",
    description:
      "Implement client-side pagination and filtering for a data table component.",
    tags: ["Data Tables", "Filtering", "UX"],
    repoURL: "https://github.com/",
  },
  {
    id: "vue-architecture-decision",
    title: "Design Plugin System Architecture",
    framework: "Vue 3",
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.REFACTOR,
    time: "4-5 hours",
    description:
      "Design and implement a plugin system that allows third-party extensions to the application.",
    tags: ["Architecture", "Design Patterns", "Extensibility"],
    repoURL: "https://github.com/",
  },
];
