# LUXE Commerce Suite — Performance & Core Web Vitals Optimization Guide

## Target Performance Metrics
- **Largest Contentful Paint (LCP)**: < 1.2s
- **First Input Delay / INP**: < 50ms
- **Cumulative Layout Shift (CLS)**: < 0.01

## Applied Performance Strategies
1. **Next.js Font Optimization**: Self-hosted `Geist` and `Inter` Google Fonts via `next/font/google` with CSS variables to eliminate layout shifts.
2. **Next.js Image Loader**: All product and hero images utilize `next/image` with `sizes`, `priority` flags, and WebP/AVIF auto-conversions.
3. **Dynamic Feature Splitting**: Complex feature bundles (`ConciergeWidget`, `GiftBuilderClient`, `DigitalUnboxing`, `AIStylistDashboard`, `CustomerDashboardClient`, `LoyaltyDashboardClient`, `ReturnsPortalClient`) use Next.js `dynamic()` imports to minimize initial bundle payload.
4. **React Server Components**: 100% of route entries default to Server Components, reducing total client JS.
