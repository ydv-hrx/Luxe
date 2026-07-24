# ADR 003: Cart Service & Shopify API Contract Alignment

## Status
Accepted

## Context
The shopping cart must support local optimistic UI updates while maintaining 100% GraphQL schema compatibility with Shopify Storefront Cart API (`cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`).

## Decision
We implemented `ICartService` with standard line item structures (`merchandiseId`, `quantity`) and synchronized Zustand state (`useCartStore`).
- `CartDrawer` renders state and dispatches service calls.
- `cartService.checkout(...)` generates direct redirect URLs (`/orders/[id]` or Shopify hosted checkout).

## Consequences
- **Pros**: Zero fake checkout logic; seamless transition to production Shopify checkout endpoints.
- **Cons**: Requires keeping local Zustand store in sync with server cart responses.
