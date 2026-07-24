# ADR 005: React Server Components (RSC) & Performance Boundaries

## Status
Accepted

## Context
Client-side JavaScript bundles must remain minimal to guarantee fast initial page loads (LCP < 1.2s, CLS < 0.01) across mobile and desktop viewports.

## Decision
1. **Server Components by Default**: All Next.js App Router pages (`/`, `/shop`, `/products/[handle]`, `/gifting`, `/concierge`, `/wardrobe`) and layouts are React Server Components (RSC).
2. **Strict Client Boundaries**: The `'use client'` directive is restricted exclusively to interactive primitives (e.g. `VariantSelector`, `ProductGallery`, `SearchHub`, `CompareTray`, `FilterDrawer`).
3. **Dynamic Imports & Streaming**: Heavy client feature components are dynamic imported with `<Suspense>` boundaries.

## Consequences
- **Pros**: Zero JS overhead for static layouts and server-fetched product data; optimal Core Web Vitals.
- **Cons**: Cannot pass non-serializable functions from RSC to Client Components.
