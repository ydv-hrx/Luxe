# LUXE Commerce Suite — Vercel & Production Deployment Guide

## Deployment Environment: Vercel

### 1. Repository Setup
Push repository to GitHub / GitLab:
```bash
git add .
git commit -m "feat: complete LUXE Next.js 16 Commerce Suite"
git push origin main
```

### 2. Vercel Project Import
1. Connect Vercel account to GitHub.
2. Select repository `luxe`.
3. Select Framework Preset: **Next.js**.

### 3. Environment Variables Configured in Vercel Dashboard
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `STITCH_API_KEY`

### 4. Build Command
- Build Command: `next build`
- Output Directory: `.next`
- Node.js Version: `20.x` or `22.x`
