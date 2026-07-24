# ADR 002: Abstract Data & Service Layer

## Status
Accepted

## Context
UI components must remain clean and agnostic of whether backend data originates from mock datasets, Shopify Storefront GraphQL, Customer Account API, or LLM Recommendation engines (OpenAI/Gemini).

## Decision
All data fetching and business mutations are encapsulated behind typed service interfaces in `src/lib/services/`:
- `ICommerceService` (`commerce.ts`)
- `ICartService` (`cart.ts`)
- `IConciergeService` (`concierge.ts`)
- `IRecommendationService` (`recommendation.ts`)
- `IWardrobeService` (`wardrobe.ts`)
- `IGiftService` (`gifting.ts`)

UI components consume singleton service instances (`commerceService`, `cartService`, etc.), ensuring zero business logic leaks into React components.

## Consequences
- **Pros**: Swapping mock data for live Shopify Storefront API endpoints requires changing only service bindings without editing UI files.
- **Cons**: Requires interface definitions in advance.
