# ADR 001: Isolated Feature-Driven Architecture

## Status
Accepted

## Context
The LUXE platform includes diverse domain features: core commerce, multi-step checkout, interactive gifting, AI concierge chat, AI stylist recommendations, and digital wardrobe analytics. Monolithic UI structures risk tight coupling and circular dependencies.

## Decision
We enforce strict feature-level isolation under `src/features/<domain>/`.
- Feature modules (`concierge`, `gifting`, `stylist`, `wardrobe`, `catalog`, `checkout`, `product`, `search`, `compare`) MUST NOT import directly from each other.
- Shared primitives (buttons, inputs, cards) reside strictly in `src/components/ui/`.
- Domain data contracts reside in `src/types/`.

## Consequences
- **Pros**: Independent testability, zero cross-feature regression risk, effortless feature flag toggling.
- **Cons**: Slightly more initial boilerplate for shared types in `src/types/`.
