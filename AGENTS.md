# AGENTS.md file

## Dev environment tips
- Always check and read the router agents for context on how to work with the codebase and where find any feature or service.
- Use `bun run dev` to start the development server.
- Run `bun add <package_name>` to add the package to your workspace so NextJs, ESLint, and TypeScript can see it.
- Use `bun create next-app@latest <project_name>` to spin up a new React + NextJs package with TypeScript checks ready.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.

## Testing instructions

- Find the CI plan in the .github/workflows folder.
- Run `bun turbo run test --filter <project_name>` to run every check defined for that package.
- From the package root you can just call `bun test`. The commit should pass all tests before you merge.
- To focus on one step, add the Vitest pattern: `bun vitest run -t "<test name>"`.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run `bun lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions

- Title format: [<project_name>] - Short description of changes
- Description should include:
  - What was changed
  - Why it was changed
  - Commit references (if applicable)
- Always run `bun lint` and `bun test` before committing.

## Router of skills and agents

| Skill | Description | URL Location |
|------------|-------------|-------------|
| Router Agent | Main orchestrator agent that routes requests to specific skill agents based on user input. | 
| UI Skill Agent | Handles user interface interactions and manages front-end components. |
| Data Fetching Agent | Responsible for retrieving data from external APIs and databases. |
| Authentication Agent | Manages user authentication and authorization processes. |
| Commits and PR Agent | Specializes in generating commit messages and pull request descriptions based on code changes. |
| Architecture Agent | Focuses on high-level system design and architecture decisions. |
| Testing Agent | Creates and runs tests to ensure code quality and functionality. |
| Type safety Agent | Ensures type safety across the codebase, particularly in TypeScript projects. |
