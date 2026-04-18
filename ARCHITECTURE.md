# Architecture & Decisions

## Tech Stack

React 19, Vite 7, TanStack Router + Query + Form, Tailwind CSS v4, shadcn/ui, Zod, Axios, react-i18next, Vitest + Testing Library, Bun

## Folder Structure

```
src/
├── components/          # Shared UI (+ ui/ for shadcn primitives)
├── features/artist/
│   ├── api/             # API calls + React Query options
│   ├── components/      # Feature UI
│   ├── dto/             # Raw API types + domain models
│   └── transformers/    # DTO → domain model mappers
├── lib/                 # Utils, context, i18n setup
├── locales/             # Translation JSON
├── routes/              # File-based routes
└── styles/              # Global CSS
```

Feature-first — everything related to "artist" lives under one folder. Easy to find, easy to extend, easy to delete.

## Decisions

### URL params as source of truth

Search state lives in the URL (`/search?query=...`) via TanStack Router's `validateSearch`. No `useState` for the search term. Pages are shareable, bookmarkable, and survive a refresh with zero extra code.

### Route-level prefetching

The artist detail route uses a `loader` that calls `queryClient.ensureQueryData()` before the component mounts. Combined with React Query's 5-minute `staleTime`, navigating to a previously-visited artist renders instantly from cache — no loading spinner.

### DTO → Transformer → Model

The external API returns messy data (numbers as strings, durations in ms, image URLs that need size suffixes). Transformer functions handle all of that, so components only deal with clean domain models. If the API changes, only the transformer and DTO types need updating.

### MusicBrainzID as the artist identifier

Used `strMusicBrainzID` instead of the API's internal `idArtist`. The internal ID only works for fetching artist details — top songs require the MusicBrainz ID, so using it as the primary identifier allows fetching both in parallel with `Promise.all`. It's also a stable, industry-standard ID that stays meaningful if the data source changes.

### API limitations

The free tier of the external API has some constraints worth noting:

- Artist search returns only 1 result per query (not a list).
- Top songs endpoint is capped at 1 result per artist.
- Some artists have incomplete data (missing bio, images) — the UI handles these gracefully with fallbacks.
- As a bonus, I added the youtube song link and extracted the song image from the youtube video ID.

### Pre-commit hooks

Husky runs `lint-staged` on every commit — Prettier formats, ESLint fixes. The repo never accumulates formatting drift.

### React Compiler

`babel-plugin-react-compiler` is enabled, which handles memoization automatically at build time. No manual `useMemo`/`useCallback` needed.

### Auto code-splitting

TanStack Router's `autoCodeSplitting: true` splits each route into its own chunk. The artist detail page bundle isn't loaded until the user actually navigates there.

### i18n from day one

All strings go through `react-i18next` with typed keys. Even with a single locale, it keeps copy out of component code and makes adding languages trivial later.

### View transitions

View transitions are used to animate the artist search preview and artist details page. Utilizing the modern browser API this allows for a smooth transition animation between pages with minimal setup and no additional dependencies.
