# TODO Production Checklist — LUXE Commerce Launch

Everything required before deploying the LUXE platform to live production:

- [ ] **Shopify Storefront API Credentials**: Set `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` and `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` in production `.env`.
- [ ] **Shopify Customer Account API OAuth**: Connect OAuth 2.0 PKCE authentication flow in `src/lib/services/auth.ts`.
- [ ] **OpenAI / Gemini API Keys**: Configure LLM API key for live AI Concierge & Style DNA recommendations.
- [ ] **Payment Gateway**: Connect Stripe / Shopify Payments production credentials for credit cards, Apple Pay, and Shop Pay.
- [ ] **Domain & SSL Setup**: Point `luxe.com` DNS records to Vercel edge deployment.
- [ ] **Analytics & Tracking**: Inject Google Tag Manager / GA4 e-commerce tracking scripts into `src/app/layout.tsx`.
- [ ] **Sentry Error Monitoring**: Configure `@sentry/nextjs` DSN for real-time error reporting.
