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

enum FrameworkType {
  VUE = "Vue 3",
  DJANGO = "Django",
  REACT = "React",
  NEXTJS = "Next.js",
  SVELTEKIT = "SvelteKit",
  NUXTJS = "Nuxt.js",
  REMIX = "Remix",
  ASTRO = "Astro",
}

interface ResourcesURL {
  url: { name: string; link: string }[];
}

interface ChallengeAuthor {
  name: string;
  github?: string;
}

export interface Challenge {
  id: string;
  title: string;
  framework: FrameworkType;
  difficulty: DifficultyLevel;
  type: ChallengeType;
  time: string;
  description: string;
  tags: string[];
  repoURL: string;
  resourcesURL?: ResourcesURL["url"];
  objectives?: string[];
  requirements?: string[];
  hints?: string[];
  author?: ChallengeAuthor;
  completions?: number;
  rating?: number;
}

export const challenges: Challenge[] = [
  {
    id: "vue-state-management-bug",
    title: "Fix State Management Race Condition",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.BUG_FIX,
    time: "2-3 hours",
    description:
      "Identify and fix a race condition in a Pinia store affecting real-time data synchronization. The application displays inconsistent data when multiple API calls are made simultaneously, causing user confusion and potential data corruption.",
    tags: ["Pinia", "Composition API", "Async", "Race Conditions"],
    repoURL: "https://github.com/frameshift-challenges/vue-race-condition",
    resourcesURL: [
      { name: "Pinia Documentation", link: "https://pinia.vuejs.org/" },
      {
        name: "Vue Composition API Guide",
        link: "https://vuejs.org/guide/extras/composition-api-faq.html",
      },
      {
        name: "JavaScript Promises",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      },
    ],
    objectives: [
      "Understand how race conditions occur in asynchronous state management",
      "Learn to implement proper request cancellation patterns",
      "Master debouncing and throttling techniques for API calls",
      "Implement optimistic updates with rollback mechanisms",
    ],
    requirements: [
      "Basic understanding of Vue 3 and Composition API",
      "Familiarity with Pinia state management",
      "Knowledge of JavaScript async/await patterns",
    ],
    hints: [
      "Look at how the store handles concurrent API requests",
      "Consider using AbortController for request cancellation",
      "Check if there's proper state cleanup between requests",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 234,
    rating: 4.8,
  },
  {
    id: "vue-component-refactor",
    title: "Refactor Component Architecture",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.MEDIUM,
    type: ChallengeType.REFACTOR,
    time: "3-4 hours",
    description:
      "Restructure a tightly-coupled component tree into composable, reusable modules. The current implementation has prop drilling issues and components that are difficult to test in isolation.",
    tags: ["Composables", "Architecture", "DRY", "Testing"],
    repoURL: "https://github.com/frameshift-challenges/vue-refactor",
    resourcesURL: [
      {
        name: "Vue Composables Guide",
        link: "https://vuejs.org/guide/reusability/composables.html",
      },
      {
        name: "Provide/Inject Pattern",
        link: "https://vuejs.org/guide/components/provide-inject.html",
      },
      {
        name: "Vue Testing Library",
        link: "https://testing-library.com/docs/vue-testing-library/intro/",
      },
    ],
    objectives: [
      "Extract reusable logic into composables",
      "Implement provide/inject for deeply nested components",
      "Create a clean component interface with proper props/emits",
      "Write unit tests for the refactored components",
    ],
    requirements: [
      "Strong understanding of Vue 3 component patterns",
      "Experience with composables and reactivity",
      "Basic testing knowledge",
    ],
    hints: [
      "Identify repeated logic that can be extracted",
      "Map out the component dependency tree first",
      "Consider using provide/inject for shared state",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 456,
    rating: 4.6,
  },
  {
    id: "vue-form-validation",
    title: "Implement Dynamic Form Validation",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.FEATURE_ADDITION,
    time: "2-3 hours",
    description:
      "Add a flexible validation system to a multi-step form with conditional field requirements. The form should validate in real-time and provide helpful error messages.",
    tags: ["Forms", "Validation", "TypeScript", "UX"],
    repoURL: "https://github.com/frameshift-challenges/vue-form-validation",
    resourcesURL: [
      { name: "VeeValidate", link: "https://vee-validate.logaretm.com/v4/" },
      { name: "Zod Validation", link: "https://zod.dev/" },
      {
        name: "Form Design Patterns",
        link: "https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/",
      },
    ],
    objectives: [
      "Implement real-time field validation",
      "Create conditional validation rules based on form state",
      "Display user-friendly error messages",
      "Handle form submission with proper error handling",
    ],
    requirements: [
      "Basic Vue 3 knowledge",
      "Understanding of form handling in web apps",
    ],
    hints: [
      "Start by defining your validation schema",
      "Consider using a validation library like VeeValidate or Zod",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 892,
    rating: 4.9,
  },
  {
    id: "vue-performance-optimization",
    title: "Optimize Large List Rendering",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.HARD,
    type: ChallengeType.REFACTOR,
    time: "3-4 hours",
    description:
      "Improve performance of a component rendering 10,000+ items with real-time updates. The current implementation causes significant lag and high memory usage.",
    tags: ["Performance", "Virtual Scroll", "Reactivity", "Memory"],
    repoURL: "https://github.com/frameshift-challenges/vue-performance",
    resourcesURL: [
      {
        name: "Vue Virtual Scroller",
        link: "https://github.com/Akryum/vue-virtual-scroller",
      },
      {
        name: "Vue Performance Guide",
        link: "https://vuejs.org/guide/best-practices/performance.html",
      },
      {
        name: "Chrome DevTools Performance",
        link: "https://developer.chrome.com/docs/devtools/performance/",
      },
    ],
    objectives: [
      "Implement virtual scrolling for large datasets",
      "Optimize reactive data structures for performance",
      "Reduce unnecessary re-renders",
      "Profile and measure performance improvements",
    ],
    requirements: [
      "Understanding of Vue reactivity system",
      "Knowledge of browser performance profiling",
      "Experience with large data handling",
    ],
    hints: [
      "Use shallowRef for large arrays that don't need deep reactivity",
      "Consider implementing windowing/virtualization",
      "Profile first to identify actual bottlenecks",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 167,
    rating: 4.7,
  },
  {
    id: "vue-api-integration",
    title: "Add Pagination and Filtering",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.FEATURE_ADDITION,
    time: "1-2 hours",
    description:
      "Implement client-side pagination and filtering for a data table component. Users should be able to search, filter by category, and navigate through pages seamlessly.",
    tags: ["Data Tables", "Filtering", "UX", "Pagination"],
    repoURL: "https://github.com/frameshift-challenges/vue-pagination",
    resourcesURL: [
      { name: "Vue Use Collection", link: "https://vueuse.org/" },
      { name: "TanStack Table", link: "https://tanstack.com/table/latest" },
    ],
    objectives: [
      "Implement pagination with configurable page sizes",
      "Add search functionality with debouncing",
      "Create filter dropdowns for categorical data",
      "Maintain URL state for shareable filtered views",
    ],
    requirements: [
      "Basic Vue 3 knowledge",
      "Understanding of array methods (filter, slice, sort)",
    ],
    hints: [
      "Use computed properties for filtered/paginated data",
      "Consider URL query parameters for state persistence",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 243,
    rating: 4.5,
  },
  {
    id: "vue-architecture-decision",
    title: "Design Plugin System Architecture",
    framework: FrameworkType.VUE,
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.REFACTOR,
    time: "4-5 hours",
    description:
      "Design and implement a plugin system that allows third-party extensions to the application. The system should support plugin registration, lifecycle hooks, and sandboxed execution.",
    tags: ["Architecture", "Design Patterns", "Extensibility", "Security"],
    repoURL: "https://github.com/frameshift-challenges/vue-plugin-system",
    resourcesURL: [
      {
        name: "Vue Plugin Guide",
        link: "https://vuejs.org/guide/reusability/plugins.html",
      },
      {
        name: "Plugin Architecture Patterns",
        link: "https://martinfowler.com/articles/plugins.html",
      },
    ],
    objectives: [
      "Design a flexible plugin registration system",
      "Implement plugin lifecycle hooks",
      "Create a sandboxed execution environment",
      "Build a plugin API with proper type definitions",
    ],
    requirements: [
      "Advanced Vue 3 knowledge",
      "Understanding of design patterns",
      "TypeScript proficiency",
    ],
    hints: [
      "Study how Vue's own plugin system works",
      "Consider using dependency injection patterns",
      "Think about plugin isolation for security",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 89,
    rating: 4.9,
  },
  {
    id: "django-auth-bug",
    title: "Refactor API View using Django REST Framework",
    framework: FrameworkType.DJANGO,
    difficulty: DifficultyLevel.CHALLENGER,
    type: ChallengeType.REFACTOR,
    time: "4-5 hours",
    description:
      "Refactor an API view to improve authentication and authorization using Django REST Framework. The current implementation has security vulnerabilities and poor separation of concerns.",
    tags: ["Django", "REST Framework", "Authentication", "Security"],
    repoURL: "https://github.com/frameshift-challenges/django-auth-refactor",
    resourcesURL: [
      {
        name: "DRF Authentication",
        link: "https://www.django-rest-framework.org/api-guide/authentication/",
      },
      {
        name: "DRF Permissions",
        link: "https://www.django-rest-framework.org/api-guide/permissions/",
      },
      {
        name: "Django Security Guide",
        link: "https://docs.djangoproject.com/en/stable/topics/security/",
      },
    ],
    objectives: [
      "Implement proper JWT authentication",
      "Create custom permission classes",
      "Add rate limiting and throttling",
      "Implement proper error handling and logging",
    ],
    requirements: [
      "Strong Python and Django knowledge",
      "Understanding of REST API principles",
      "Basic security concepts",
    ],
    hints: [
      "Start by auditing the current authentication flow",
      "Consider using SimpleJWT for token management",
      "Implement permission classes for fine-grained access control",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 156,
    rating: 4.6,
  },
  {
    id: "react-hooks-optimization",
    title: "Fix Infinite Re-render Loop",
    framework: FrameworkType.REACT,
    difficulty: DifficultyLevel.MEDIUM,
    type: ChallengeType.BUG_FIX,
    time: "1-2 hours",
    description:
      "Debug and fix an infinite re-render loop caused by improper useEffect dependencies. The component causes the browser to freeze and memory usage to spike.",
    tags: ["Hooks", "useEffect", "Performance", "Debugging"],
    repoURL: "https://github.com/frameshift-challenges/react-rerender-bug",
    resourcesURL: [
      {
        name: "React useEffect Guide",
        link: "https://react.dev/reference/react/useEffect",
      },
      {
        name: "useCallback Documentation",
        link: "https://react.dev/reference/react/useCallback",
      },
      {
        name: "React DevTools Profiler",
        link: "https://react.dev/learn/react-developer-tools",
      },
    ],
    objectives: [
      "Identify the cause of infinite re-renders",
      "Properly configure useEffect dependencies",
      "Implement memoization where needed",
      "Use React DevTools to verify the fix",
    ],
    requirements: [
      "Understanding of React hooks",
      "Familiarity with React component lifecycle",
    ],
    hints: [
      "Check object references in dependency arrays",
      "Look for functions being recreated on every render",
      "Consider using useCallback or useMemo",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 678,
    rating: 4.7,
  },
  {
    id: "nextjs-ssr-hydration",
    title: "Fix Hydration Mismatch Error",
    framework: FrameworkType.NEXTJS,
    difficulty: DifficultyLevel.MEDIUM,
    type: ChallengeType.BUG_FIX,
    time: "2-3 hours",
    description:
      "Resolve hydration mismatch errors occurring when server-rendered content doesn't match client-side rendering. This causes visual flickering and console errors in production.",
    tags: ["SSR", "Hydration", "Server Components", "Debugging"],
    repoURL: "https://github.com/frameshift-challenges/nextjs-hydration",
    resourcesURL: [
      {
        name: "Next.js Hydration Docs",
        link: "https://nextjs.org/docs/messages/react-hydration-error",
      },
      {
        name: "React Server Components",
        link: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      },
    ],
    objectives: [
      "Understand the hydration process in Next.js",
      "Identify server/client rendering mismatches",
      "Implement proper client-only rendering patterns",
      "Test SSR behavior in development and production",
    ],
    requirements: [
      "Experience with Next.js App Router",
      "Understanding of server vs client rendering",
    ],
    hints: [
      "Look for browser-only APIs being called during SSR",
      "Check for dynamic content like dates or random values",
      "Consider using 'use client' directive appropriately",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 423,
    rating: 4.8,
  },
  {
    id: "nextjs-api-caching",
    title: "Implement API Route Caching Strategy",
    framework: FrameworkType.NEXTJS,
    difficulty: DifficultyLevel.HARD,
    type: ChallengeType.FEATURE_ADDITION,
    time: "3-4 hours",
    description:
      "Design and implement a caching strategy for API routes to improve performance and reduce database load. The application currently makes redundant API calls causing slow page loads.",
    tags: ["Caching", "API Routes", "Performance", "Redis"],
    repoURL: "https://github.com/frameshift-challenges/nextjs-caching",
    resourcesURL: [
      {
        name: "Next.js Caching",
        link: "https://nextjs.org/docs/app/building-your-application/caching",
      },
      { name: "Vercel KV", link: "https://vercel.com/docs/storage/vercel-kv" },
      {
        name: "HTTP Caching",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
      },
    ],
    objectives: [
      "Implement response caching with proper cache invalidation",
      "Set up cache headers for static and dynamic content",
      "Create a revalidation strategy for stale data",
      "Monitor cache hit rates and performance improvements",
    ],
    requirements: [
      "Next.js App Router experience",
      "Understanding of HTTP caching concepts",
      "Basic Redis knowledge is helpful",
    ],
    hints: [
      "Use Next.js built-in caching mechanisms first",
      "Consider cache-control headers for different routes",
      "Implement proper cache invalidation on data mutations",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 234,
    rating: 4.5,
  },
  {
    id: "sveltekit-auth-flow",
    title: "Build OAuth Authentication Flow",
    framework: FrameworkType.SVELTEKIT,
    difficulty: DifficultyLevel.MEDIUM,
    type: ChallengeType.FEATURE_ADDITION,
    time: "3-4 hours",
    description:
      "Implement a complete OAuth 2.0 authentication flow with GitHub as the provider. Include proper session management, protected routes, and user profile storage.",
    tags: ["OAuth", "Authentication", "Sessions", "Security"],
    repoURL: "https://github.com/frameshift-challenges/sveltekit-oauth",
    resourcesURL: [
      { name: "SvelteKit Auth", link: "https://kit.svelte.dev/docs/auth" },
      { name: "Lucia Auth", link: "https://lucia-auth.com/" },
      {
        name: "GitHub OAuth Docs",
        link: "https://docs.github.com/en/apps/oauth-apps",
      },
    ],
    objectives: [
      "Set up OAuth flow with GitHub provider",
      "Implement secure session management",
      "Create protected route middleware",
      "Store and retrieve user profile data",
    ],
    requirements: [
      "SvelteKit basics",
      "Understanding of OAuth 2.0 flow",
      "Basic security concepts",
    ],
    hints: [
      "Consider using Lucia for auth abstraction",
      "Store sessions in a database, not just cookies",
      "Implement CSRF protection",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 312,
    rating: 4.7,
  },
  {
    id: "remix-data-loading",
    title: "Optimize Nested Route Data Loading",
    framework: FrameworkType.REMIX,
    difficulty: DifficultyLevel.HARD,
    type: ChallengeType.REFACTOR,
    time: "3-4 hours",
    description:
      "Refactor data loading patterns in a Remix application with deeply nested routes. Currently, waterfalls cause slow page loads and poor user experience.",
    tags: ["Data Loading", "Performance", "Loaders", "Parallel"],
    repoURL: "https://github.com/frameshift-challenges/remix-data-loading",
    resourcesURL: [
      {
        name: "Remix Loaders",
        link: "https://remix.run/docs/en/main/route/loader",
      },
      {
        name: "Parallel Data Loading",
        link: "https://remix.run/docs/en/main/guides/parallel-data-loading",
      },
    ],
    objectives: [
      "Identify data loading waterfalls",
      "Implement parallel data fetching",
      "Use defer for non-critical data",
      "Add proper loading states",
    ],
    requirements: [
      "Remix fundamentals",
      "Understanding of data loading patterns",
    ],
    hints: [
      "Map out the current loading sequence",
      "Use Promise.all for independent requests",
      "Consider defer for below-the-fold content",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 145,
    rating: 4.6,
  },
  {
    id: "astro-islands-architecture",
    title: "Convert to Islands Architecture",
    framework: FrameworkType.ASTRO,
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.REFACTOR,
    time: "2-3 hours",
    description:
      "Refactor a JavaScript-heavy page to use Astro's islands architecture. Reduce the JavaScript bundle size while maintaining interactivity where needed.",
    tags: ["Islands", "Performance", "Partial Hydration", "Bundle Size"],
    repoURL: "https://github.com/frameshift-challenges/astro-islands",
    resourcesURL: [
      {
        name: "Astro Islands",
        link: "https://docs.astro.build/en/concepts/islands/",
      },
      {
        name: "Client Directives",
        link: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
      },
    ],
    objectives: [
      "Identify components that need client-side interactivity",
      "Convert static content to Astro components",
      "Use appropriate client directives",
      "Measure bundle size reduction",
    ],
    requirements: [
      "Basic Astro knowledge",
      "Understanding of hydration concepts",
    ],
    hints: [
      "Start by identifying which components need JavaScript",
      "Use client:visible for below-fold interactive content",
      "Consider client:idle for non-critical interactivity",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 567,
    rating: 4.8,
  },
  {
    id: "react-context-optimization",
    title: "Optimize Context Provider Performance",
    framework: FrameworkType.REACT,
    difficulty: DifficultyLevel.HARD,
    type: ChallengeType.REFACTOR,
    time: "2-3 hours",
    description:
      "Fix performance issues caused by a monolithic Context provider that triggers unnecessary re-renders across the entire component tree.",
    tags: ["Context API", "Performance", "State Management", "Memoization"],
    repoURL: "https://github.com/frameshift-challenges/react-context-perf",
    resourcesURL: [
      {
        name: "React Context",
        link: "https://react.dev/reference/react/useContext",
      },
      {
        name: "Optimizing Context",
        link: "https://react.dev/reference/react/memo",
      },
    ],
    objectives: [
      "Split monolithic context into smaller providers",
      "Implement proper memoization strategies",
      "Use context selectors pattern",
      "Profile and verify performance improvements",
    ],
    requirements: [
      "Strong React knowledge",
      "Understanding of React rendering behavior",
    ],
    hints: [
      "Separate frequently changing state from stable state",
      "Consider using multiple contexts",
      "Look into libraries like use-context-selector",
    ],
    author: { name: "Kevin Thompson", github: "kevreact" },
    completions: 289,
    rating: 4.7,
  },
  {
    id: "nuxt-seo-optimization",
    title: "Implement Dynamic SEO Meta Tags",
    framework: FrameworkType.NUXTJS,
    difficulty: DifficultyLevel.EASY,
    type: ChallengeType.FEATURE_ADDITION,
    time: "1-2 hours",
    description:
      "Add comprehensive SEO meta tags including Open Graph, Twitter Cards, and structured data for a content-heavy Nuxt application.",
    tags: ["SEO", "Meta Tags", "Open Graph", "Structured Data"],
    repoURL: "https://github.com/frameshift-challenges/nuxt-seo",
    resourcesURL: [
      {
        name: "Nuxt SEO",
        link: "https://nuxt.com/docs/getting-started/seo-meta",
      },
      { name: "Open Graph Protocol", link: "https://ogp.me/" },
      { name: "Schema.org", link: "https://schema.org/" },
    ],
    objectives: [
      "Implement dynamic meta tags for all pages",
      "Add Open Graph tags for social sharing",
      "Include Twitter Card meta tags",
      "Add JSON-LD structured data",
    ],
    requirements: ["Basic Nuxt knowledge", "Understanding of SEO concepts"],
    hints: [
      "Use useHead composable for dynamic meta",
      "Create reusable SEO composables",
      "Test with social media debuggers",
    ],
    author: { name: "Luis Ramos", github: "Ezzz-Lui" },
    completions: 734,
    rating: 4.4,
  },
];

export async function getChallengeBySlug(id: string) {
  return challenges.find((c) => c.id === id) ?? null;
}
