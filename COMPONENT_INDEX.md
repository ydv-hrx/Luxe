# LUXE Commerce Suite — Component Index

## Atomic UI Components (`src/components/ui/`)
| Component | Type | Props / Responsibilities |
| :--- | :--- | :--- |
| `Button` | Server/Client Ready | Lumina button variants (`primary`, `secondary`, `outline`, `ghost`), scale animations, loading spinners |
| `GlassInput` | Server/Client Ready | Lumina floating-label input with backdrop blur, icon support, error feedback |
| `Badge` | Server Component | Status pills (`primary`, `default`, `success`, `warning`, `outline`) |
| `PriceDisplay` | Server Component | Currency formatter with comparison pricing |
| `ProductCard` | Client Component | Responsive portrait product card with hover quick-add and wishlist actions |
| `NewsletterForm` | Client Component | Newsletter subscription form with submit state feedback |

## Layout Components (`src/components/layout/`)
| Component | Type | Responsibilities |
| :--- | :--- | :--- |
| `TopNavBar` | Client Component | Glassmorphic top navigation bar with search modal trigger, cart counter, and brand logo |
| `Footer` | Server Component | Multi-column luxury footer with value propositions, links, and newsletter |
| `CartDrawer` | Client Component | Slide-over cart drawer displaying line items, shipping progress bar, and checkout CTA |

## Feature Modules (`src/features/`)
| Module | Components | Responsibilities |
| :--- | :--- | :--- |
| `product` | `ProductGallery`, `VariantSelector`, `ProductInformation`, `CompleteTheLook` | PDP media showcase, color/size option selector, garment provenance, and styling curation |
| `catalog` | `ShopCatalogClient`, `FilterDrawer` | Interactive catalog grid, price slider, color swatches, and stock filter controls |
| `compare` | `CompareTray`, `CompareModal` | Floating compare bar and full specification matrix comparison modal |
| `search` | `SearchHub` | Instant predictive search overlay with real-time query filtering |
| `checkout` | `AddressForm`, `ShippingSelector`, `PaymentSection`, `OrderSummary` | Reusable multi-step checkout primitives for shipping, payment, and order calculation |
