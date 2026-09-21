# WIIZ | Techprise — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS implementation of the [Figma design](https://www.figma.com/design/gyKUYCQXZc9jB7RH3XeGje/AI-Infratech?node-id=25-792).

## Getting started

This environment doesn't have Node.js installed, so dependencies haven't been installed yet. On a machine with Node 18.18+:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script             | Description                        |
| ------------------ | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm run build`     | Production build                    |
| `npm run start`     | Serve the production build          |
| `npm run lint`      | Run ESLint                          |
| `npm run typecheck` | Run the TypeScript compiler (no emit) |

## Project structure

```
src/
  app/                  Routes, layout, metadata, sitemap/robots
  components/
    icons/               Inline SVG icon components (decorative + metric icons)
    layout/              Navbar, MobileNav, Footer — page chrome
    sections/            One component per landing-page section
    ui/                  Reusable, presentation-only primitives (Button, Badge, Card, ...)
  lib/
    data/                Static content, typed and separated from markup
    types/                Shared domain types
    utils/                Small helpers (e.g. `cn` class merger)
    constants/           Site-wide config (name, URL, SEO defaults)
public/
  brand/                Logo lockups (SVG)
  images/               Illustrations, photography, partner logos (PNG)
```

### Design principles applied

- **Single responsibility** — each section component renders one part of the page; content lives in `lib/data`, not inline in JSX.
- **Open/closed** — `Button`/`Badge` extend via a `variant` prop and a style map; `MetricCard` resolves its icon through a registry (`metric-icon-registry.tsx`), so new metrics or icons don't require editing the card.
- **Liskov substitution** — `Button` (link) and `SubmitButton` (native `<button>`) share the same base/variant style contract, so they're visually interchangeable wherever either fits the semantics.
- **Interface segregation** — component props are scoped to what each component actually needs (e.g. `ServiceCardProps` vs `SolutionCardProps`) rather than one shared "content" shape.
- **Dependency inversion** — sections depend on typed data shapes from `lib/types`, not on hardcoded content, so the content source can change (CMS, API) without touching presentation components.

## SEO

- Per-route `metadata` via the App Router `Metadata` API, with a title template, Open Graph, and Twitter card data centralized in `lib/constants/site.ts`.
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- `Organization` JSON-LD in the root layout.
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, a skip-to-content link, and descriptive image `alt` text throughout.
- Images served through `next/image` for automatic responsive sizing, lazy loading, and AVIF/WebP output.

## Notes

- Assets were exported from the Figma file and live under `public/`.
- `/privacy-policy` and `/terms-of-service` are placeholder pages — replace their copy before shipping.
- The contact form (`components/sections/ContactForm.tsx`) is wired up client-side with a submission state machine; point it at your lead-capture endpoint by replacing the stub in `handleSubmit`.
