# LUXE Commerce Suite — Testing & Quality Assurance Guide

## Automated & Manual Testing Protocol

### 1. Build Verification Test
Run production compiler build check:
```bash
npm run build
```
Verify 0 compilation errors and 0 hydration warnings.

### 2. Core User Flows to Validate
- **Cart & Checkout Flow**: Add Cashmere Hoodie to bag -> Open slide-out CartDrawer -> Proceed to Checkout -> Complete 3-step checkout form -> Verify Order Confirmation redirect (`/orders/LX-XXXXX`).
- **Product Discovery & Comparison**: Browse `/shop` -> Filter by Knits -> Click Compare on 2 garments -> Verify floating CompareTray -> Open CompareModal matrix.
- **Bespoke Gifting Studio**: Navigate to `/gifting` -> Complete 4-step builder -> Click Digital Reveal -> Verify ribbon untie animation.
- **AI Concierge Live Chat**: Click floating Concierge trigger -> Type "cashmere sizing query" -> Verify automated assistant response.
