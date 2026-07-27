<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Luxora Project Instructions

## Project

Luxora is a production-grade Shopify Headless Commerce platform.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Shopify Admin GraphQL API
- Shopify Storefront GraphQL API
- React Hook Form
- Zod
- Zustand

## Architecture

UI
↓

Server Actions
↓

Service Layer
↓

Shopify GraphQL Client
↓

Shopify APIs

Never bypass this architecture.

## Rules

- Never redesign UI
- Never change layouts
- Never change spacing
- Never change typography
- Never change colors
- Reuse existing services
- Reuse existing server actions
- Reuse GraphQL fragments
- No duplicated logic
- Strict TypeScript
- Never use any

## Completed Modules

- Shopify Admin Foundation
- Product Manager
- Collection Manager
- Media Library
- Homepage Builder

## Validation

Always run:

npm run lint

npm run build

Fix all TypeScript errors.

Fix all ESLint warnings.