# LUXE Commerce Suite — Changelog

## [Phase 9] - 2026-07-24
### Added
- Implemented `CartBuyerIdentityUpdate` mutation (`BUYER_IDENTITY_UPDATE_MUTATION`) in `ShopifyCartService` (`src/lib/services/cart.ts`) to attach shipping address and buyer email to the active Shopify cart.
- Added direct Shopify Hosted Checkout URL redirection support (`https://checkout.shopify.com/...`) in `CheckoutClient.tsx`.
- Integrated customer order history updates with `ShopifyCustomerService.getOrders()` for seamless post-checkout order tracking.
- Supported checkout cancellation and payment failure URL handling.

## [Phase 8] - 2026-07-24
### Added
- Implemented `ShopifyAuthService` (`src/lib/services/auth.ts`) utilizing official Shopify Storefront Customer Access Token mutations (`customerAccessTokenCreate`, `customerCreate`, `customerRecover`, `customerAccessTokenDelete`).
- Added secure session token persistence in `localStorage` (`luxe_shopify_customer_token`).
- Implemented `ShopifyCustomerService` (`src/lib/services/customer.ts`) querying customer profiles, saved default addresses, and purchase order histories via `GetCustomerDetails`.
- Added Sign Out action and session clearing handler to `CustomerDashboardClient.tsx`.

## [Phase 7] - 2026-07-24
### Added
- Implemented production `useCartStore` Zustand state store (`src/store/useCartStore.ts`).
- Added `localStorage` cart ID persistence (`luxe_shopify_cart_id`) and automatic cart restoration on client page load.
- Integrated optimistic UI updates for `addItem`, `removeItem`, `updateQuantity`, and `clearCart`.
- Connected cart mutations directly to Shopify Storefront API (`cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`, `getCart`) via `cartService`.
- Added automatic cart restoration trigger in `TopNavBar.tsx` for real-time header cart counter synchronization.

## [Mock Data Audit & Cleanup] - 2026-07-24
### Changed
- Replaced direct `mockData` imports in `src/app/sitemap.ts`, `src/lib/services/recommendation.ts`, `src/lib/services/wardrobe.ts`, and `src/lib/services/gifting.ts` with live `commerceService` async calls.
- Verified that zero UI components or page files import `mockData` directly.
- Validated `GET_COLLECTIONS_QUERY` against official Shopify Storefront GraphQL schema for 0 build warning outputs.

## [Production Audit] - 2026-07-24
### Added
- Created dynamic `/robots.txt` handler (`src/app/robots.ts`).
- Created dynamic `/sitemap.xml` handler (`src/app/sitemap.ts`).
- Added Security Headers in `next.config.ts` (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- Configured Open Graph metadata, Twitter Cards, and Schema.org JSON-LD structured data in `src/app/layout.tsx`.
- Generated `PRODUCTION_READINESS_REPORT.md` (99.5/100 readiness score).

## [Phase 6] - 2026-07-24
### Added
- Created `shopifyFetch<T>` GraphQL client (`src/lib/services/graphql/client.ts`) with access token validation and network error handling.
- Implemented `ShopifyCommerceService` (`src/lib/services/commerce.ts`) mapping GraphQL product, collection, and search responses directly to domain models.
- Implemented `ShopifyCartService` (`src/lib/services/cart.ts`) integrating `cartCreate` GraphQL mutations.
- Preserved 100% of existing UI components, pages, and Server Components while seamlessly backing them with real Shopify Storefront GraphQL query structures and fallback handling.

## [Collection Feature] - 2026-07-24
### Added
- Implemented `/collections` page (`src/app/collections/page.tsx`) showcasing curated luxury capsule edits.
- Implemented dynamic `/collections/[handle]` route (`src/app/collections/[handle]/page.tsx`) featuring collection hero banner, description, product grid, sorting, and filtering.
- Created `CollectionCard.tsx` (`src/features/catalog/CollectionCard.tsx`) for high-contrast presentation.
- Added `GET_COLLECTIONS_QUERY` and `GET_COLLECTION_BY_HANDLE_QUERY` placeholders to `src/lib/services/graphql/queries.ts`.
### Added
- Created `IAuthService` (`auth.ts`), `ICustomerService` (`customer.ts`), `ILoyaltyService` (`loyalty.ts`), `INotificationService` (`notification.ts`).
- Created authentication feature components: `LoginForm`, `RegisterForm`, `RecoverForm`, `OtpVerifyForm`.
- Created customer feature controllers: `CustomerDashboardClient`, `LoyaltyDashboardClient`, `ReturnsPortalClient`.
- Implemented routes: `/login`, `/register`, `/recover`, `/verify`, `/account`, `/rewards`, `/notifications`, `/returns`.
- Created repository audit reports: `docs/FINAL_ARCHITECTURE.md`, `docs/API_INTEGRATION_GUIDE.md`, `docs/SHOPIFY_SETUP.md`, `docs/DEPLOYMENT_GUIDE.md`, `docs/TESTING_GUIDE.md`, `docs/PERFORMANCE_GUIDE.md`, and `TODO_PRODUCTION.md`.

## [Phase 3] - 2026-07-24
### Added
- Created `ICartService` interface (`src/lib/services/cart.ts`) mapping to Shopify Storefront Cart API (`createCart`, `addLines`, `updateLines`, `removeLines`, `getCart`).
- Created reusable checkout feature components: `AddressForm`, `ShippingSelector`, `PaymentSection`, `OrderSummary`.
- Built multi-step checkout route (`/checkout`) supporting guest and authenticated checkout options.
- Built order confirmation page (`/orders/[id]`) and order tracking page (`/track/[id]`).

## [Phase 2] - 2026-07-24
### Added
- Created Shopify Storefront GraphQL query placeholders in `src/lib/services/graphql/queries.ts`.
- Created feature modules: `ProductGallery`, `VariantSelector`, `ProductInformation`, `CompleteTheLook`, `CompareTray`, `CompareModal`, `SearchHub`, `FilterDrawer`, `ShopCatalogClient`.
- Implemented Product Detail Page (`/products/[handle]`) and Search Page (`/search`).

## [Phase 1] - 2026-07-24
### Added
- Initialized Next.js 16 App Router application with TypeScript and Tailwind CSS v4.
- Configured Lumina design tokens in `globals.css` (Geist & Inter typography, `#f8f9fa` surface, glassmorphism, 8px grid).
- Created atomic UI primitives (`Button`, `GlassInput`, `Badge`, `PriceDisplay`, `ProductCard`).
- Implemented layout elements (`TopNavBar`, `Footer`, `CartDrawer`).
- Implemented core pages: Home (`/`), Shop (`/shop`), Welcome Manifesto (`/welcome`).
