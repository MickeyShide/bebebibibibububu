# Shide Portfolio

A React 19 + Vite portfolio experience optimized for maintainability, animation performance, and modern tooling.

## Tech Stack

- React 19 / TypeScript 5
- Vite 7 with Vitest, ESLint 9, and Prettier 3
- Tailwind CSS 3 for utility-first styling
- Framer Motion 12 for animation primitives

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173).

## Quality Checks

- `npm run lint` � ESLint (flat config) with React, TypeScript, a11y, Tailwind, and import rules
- `npm run typecheck` � strict TypeScript project validation
- `npm run test` � Vitest unit tests
- `npm run format` � Prettier with Tailwind class sorting

## Project Structure

```
src/
  app/               # Application shell, router, global styles
  entities/          # Domain data models, data sources, and helpers
  features/          # Feature modules (landing hero, projects)
  shared/            # Shared UI, config, and utilities
  types/             # Global TS type declarations
```

## Testing

Vitest is preconfigured with a jsdom environment and accessibility matchers. Example:

```bash
npm run test -- --watch
```

## Linting & Formatting

A Husky-managed pre-commit hook runs lint-staged to keep staged files clean. All ESLint rules target React 19 best practices with enforced import ordering and Tailwind class normalization.

## Production Build

```bash
npm run build
npm run preview
```

Vite builds with source maps and vendor chunk splitting for predictable deploys.
