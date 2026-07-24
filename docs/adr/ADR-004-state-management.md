# ADR 004: Lightweight Global & Local State Management Strategy

## Status
Accepted

## Context
The application requires managing global UI states (persistent cart drawer, product comparison matrix, search overlays) without bundling heavy, boilerplate-heavy state libraries.

## Decision
We adopted **Zustand** for lightweight global state stores:
- `useCartStore`: Shopping bag drawer, line item updates, subtotal math.
- `useCompareStore`: Selected product comparison items (max 4) and comparison modal toggle.

Local ephemeral UI state (e.g. form fields, hover index) remains inside React `useState` / `useReducer`.

## Consequences
- **Pros**: Minimal bundle footprint (<2KB), zero Context Provider nesting overhead, atomic re-renders.
- **Cons**: Requires explicit store definitions.
