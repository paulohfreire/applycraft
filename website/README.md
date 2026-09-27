# ApplyCraft landing page

Angular landing page for the ApplyCraft skills system. It is bilingual, prerendered as static HTML, responsive, accessible, and ready for Vercel previews.

## Development

Run commands from this directory:

```bash
pnpm install
pnpm start
```

The development server is available at `http://localhost:4200/`.

## Quality checks

```bash
pnpm lint
pnpm test:ci
pnpm build
```

Run all checks together with `pnpm check`. The production output is written to `dist/applycraft-website/browser/`.

## Structure

- `src/app/features/landing/landing-content.ts`: typed English and Brazilian Portuguese content.
- `src/app/features/landing/landing-page/`: page composition and preference state.
- `src/app/features/landing/workflow-demo/`: interactive application workflow.
- `src/app/features/landing/skill-card/`: reusable catalog card.
- `src/app/shared/`: brand and navigation components.

The page intentionally has no analytics and does not send candidate data anywhere.
