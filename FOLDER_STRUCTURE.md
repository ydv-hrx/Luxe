# LUXE Commerce Suite — Project Directory Structure

```text
luxe/
├── public/                 # Static assets, favicon, SVGs
├── src/
│   ├── app/                # Next.js 16 App Router (RSC Pages & Layouts)
│   │   ├── (auth)/         # Authentication routes (login, register, recover)
│   │   ├── checkout/       # Multi-step checkout & payment flow
│   │   ├── orders/         # Order confirmation & tracking
│   │   ├── products/       # Product Detail Pages (/products/[handle])
│   │   ├── search/         # Instant predictive search hub
│   │   ├── shop/           # Collection catalog with filter tabs
│   │   ├── welcome/        # Brand manifesto portal
│   │   ├── globals.css     # Lumina design tokens & global CSS
│   │   ├── layout.tsx      # Root layout (TopNavBar, Footer, CartDrawer)
│   │   ├── loading.tsx     # Global page skeleton
│   │   └── error.tsx       # Accessible error boundary
│   ├── components/         # Reusable atomic UI & layout elements
│   │   ├── layout/         # TopNavBar, Footer, CartDrawer
│   │   └── ui/             # Button, GlassInput, Badge, PriceDisplay, ProductCard
│   ├── features/           # Domain feature modules
│   │   ├── catalog/        # FilterDrawer, ShopCatalogClient
│   │   ├── checkout/       # AddressForm, ShippingSelector, PaymentSection, OrderSummary
│   │   ├── compare/        # CompareTray, CompareModal
│   │   ├── product/        # ProductGallery, VariantSelector, ProductInformation, CompleteTheLook
│   │   └── search/         # SearchHub
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Data layer & service abstractions
│   │   └── services/       # Commerce & Cart service contracts (ICommerceService, ICartService)
│   │       ├── graphql/    # Shopify Storefront GraphQL queries
│   │       ├── cart.ts     # ICartService implementation
│   │       ├── commerce.ts # ICommerceService implementation
│   │       └── mockData.ts # Typed luxury dataset
│   ├── store/              # Zustand global state (useCartStore, useCompareStore)
│   ├── types/              # TypeScript domain models
│   └── utils/              # Formatting, validation helpers
├── ARCHITECTURE.md         # System architectural principles
├── COMPONENT_INDEX.md      # Full catalog of UI & feature components
├── FOLDER_STRUCTURE.md     # Directory sitemap
├── PROJECT_STATUS.md       # Phased implementation status
└── CHANGELOG.md            # Release history
```
