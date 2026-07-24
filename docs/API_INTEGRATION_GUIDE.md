# LUXE Commerce Suite — API Integration Guide

## Overview
This document guides engineering teams on plugging live API endpoints (Shopify Storefront API, Shopify Customer Account API, OpenAI/Gemini LLM) into the abstract service layer.

## 1. Shopify Storefront GraphQL Integration
To switch `commerceService` and `cartService` from mock mode to live Shopify GraphQL:

1. Populate environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=luxe-atelier.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_access_token_here
   SHOPIFY_STOREFRONT_API_VERSION=2026-04
   ```

2. Update `src/lib/services/commerce.ts` to instantiate `ShopifyCommerceService` using the GraphQL queries from `src/lib/services/graphql/queries.ts`:
   ```typescript
   export const commerceService: ICommerceService =
     process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
       ? new ShopifyCommerceService()
       : new MockCommerceService();
   ```

## 2. Shopify Customer Account API Integration
To connect `/account`, `/login`, `/register`, `/verify` to Shopify Customer Account API (OAuth 2.0 PKCE):

1. Bind `authService` (`src/lib/services/auth.ts`) to Shopify's Customer Account API endpoint (`https://shopify.com/authentication/<shop_id>/oauth/authorize`).
2. Exchange authorization codes for Customer Access Tokens and pass them to `customerService.getProfile()`.

## 3. OpenAI / Gemini AI Recommendation Service
To connect `/wardrobe` and `/gifting` to live LLM APIs:
- Pass product tags, climate preference, and style DNA to Gemini 1.5 Pro endpoint in `recommendationService.getStylistRecommendations()`.
