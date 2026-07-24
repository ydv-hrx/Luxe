# LUXE Commerce Suite — Shopify Storefront Setup Guide

## 1. Shopify Store Configuration
1. Log into your Shopify Admin dashboard.
2. Under **Settings > Apps and Sales Channels > Develop Apps**, create a custom app named `LUXE Headless Storefront`.

## 2. Storefront API Permissions
Enable the following Storefront API scopes:
- `read_products`
- `read_product_listings`
- `read_collections`
- `unauthenticated_read_product_inventory`
- `unauthenticated_write_checkouts`
- `unauthenticated_write_customers`

## 3. Product Metafields Setup
Create custom product metafield definitions in Shopify Admin (**Settings > Custom Data > Products**):
- `custom.subtitle` (Single line text)
- `custom.complete_the_look` (List of Product references)
- `custom.craftsmanship_origin` (Single line text)
- `custom.rfid_tag_id` (Single line text)
