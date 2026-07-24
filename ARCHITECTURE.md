# LUXE Commerce Suite — System Architecture

## Architecture Overview
The LUXE Next.js 16 Commerce Suite is built on **Clean Feature-Driven Architecture**, adhering strictly to decoupling UI components from underlying commerce APIs.

```text
[ React Server Components (RSC) & Next.js App Router ]
                  │
                  ▼
       [ Feature Modules (src/features/*) ]
                  │
                  ▼
       [ Zustand State Stores (src/store/*) ]
                  │
                  ▼
      [ Abstract Service Layer (src/lib/services/*) ]
      ├── ICommerceService (Mock / Shopify GraphQL)
      └── ICartService     (Mock / Shopify Cart API)
                  │
                  ▼
     [ Shopify Storefront API (GraphQL / REST) ]
```

## Core Architectural Guarantees
1. **Zero UI Business Logic**: UI components render view state and delegate mutations to typed services.
2. **Shopify API Plug-and-Play**: Swapping mock implementations for Shopify Storefront API requires changing only the service bindings in `src/lib/services/index.ts`.
3. **Optimistic UI Updates**: State mutations in `useCartStore` provide instant visual response while calling `ICartService` asynchronously.
4. **React Server Components (RSC) First**: Data fetching is executed on the server by default. Client components (`'use client'`) are strictly scoped to interactive primitives (drawers, variant selectors, modals).
