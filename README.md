# MusicFlow

A music artist search and discovery app built with React 19, TanStack Router, and TanStack Query.

## Prerequisites

- [Bun](https://bun.sh) v1.0+ (used as package manager and runtime)
- Node.js 20+ (required by some tooling)

## Installation

```bash
bun install
```

## Running the App

```bash
# Development server with HMR
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

## Testing

```bash
# Run tests
bun run test

# Run tests with UI
bun run test:ui
```

## Linting & Formatting

```bash
# Lint
bun run lint
```

Prettier and ESLint run automatically on staged files via a Husky pre-commit hook (configured with `lint-staged`).

## Architecture & Design Decisions

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a detailed breakdown of the technical decisions, folder structure, and patterns used throughout the project.
