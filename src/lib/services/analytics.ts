import { Product, Cart, CartLineItem } from '@/types';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export interface AnalyticsEventItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  item_brand?: string;
  price?: number;
  quantity?: number;
}

class AnalyticsService {
  private hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const stored = localStorage.getItem('luxe_cookie_consent');
      if (!stored) return true; // Default consent enabled unless explicitly rejected
      const parsed = JSON.parse(stored);
      return parsed.analytics !== false;
    } catch (_e) {
      return true;
    }
  }

  private pushGtag(command: string, action: string, params?: Record<string, unknown>) {
    try {
      if (typeof window !== 'undefined' && window.gtag && this.hasConsent()) {
        window.gtag(command, action, params);
      }
    } catch (_e) {
      // Fail silently
    }
  }

  private pushFbq(event: string, params?: Record<string, unknown>) {
    try {
      if (typeof window !== 'undefined' && window.fbq && this.hasConsent()) {
        window.fbq('track', event, params);
      }
    } catch (_e) {
      // Fail silently
    }
  }

  pageView(url: string, title?: string) {
    this.pushGtag('event', 'page_view', {
      page_path: url,
      page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    });
  }

  viewItem(product: Product) {
    const item: AnalyticsEventItem = {
      item_id: product.id,
      item_name: product.title,
      item_category: product.category,
      item_brand: product.vendor,
      price: product.price.amount,
      quantity: 1,
    };

    this.pushGtag('event', 'view_item', {
      currency: product.price.currencyCode || 'USD',
      value: product.price.amount,
      items: [item],
    });

    this.pushFbq('ViewContent', {
      content_name: product.title,
      content_category: product.category,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price.amount,
      currency: product.price.currencyCode || 'USD',
    });
  }

  viewItemList(collectionName: string, products: Product[]) {
    const items: AnalyticsEventItem[] = products.map((p) => ({
      item_id: p.id,
      item_name: p.title,
      item_category: p.category,
      item_brand: p.vendor,
      price: p.price.amount,
    }));

    this.pushGtag('event', 'view_item_list', {
      item_list_name: collectionName,
      items,
    });
  }

  search(query: string, resultsCount: number) {
    this.pushGtag('event', 'search', {
      search_term: query,
      results_count: resultsCount,
    });
  }

  addToCart(product: Product, quantity = 1, _selectedVariantTitle?: string) {
    const item: AnalyticsEventItem = {
      item_id: product.id,
      item_name: product.title,
      item_category: product.category,
      item_brand: product.vendor,
      price: product.price.amount,
      quantity,
    };

    this.pushGtag('event', 'add_to_cart', {
      currency: product.price.currencyCode || 'USD',
      value: product.price.amount * quantity,
      items: [item],
    });

    this.pushFbq('AddToCart', {
      content_name: product.title,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price.amount * quantity,
      currency: product.price.currencyCode || 'USD',
    });
  }

  removeFromCart(lineItem: CartLineItem) {
    const item: AnalyticsEventItem = {
      item_id: lineItem.product.id,
      item_name: lineItem.product.title,
      item_brand: lineItem.product.vendor,
      price: lineItem.variant.price.amount,
      quantity: lineItem.quantity,
    };

    this.pushGtag('event', 'remove_from_cart', {
      currency: lineItem.variant.price.currencyCode || 'USD',
      value: lineItem.variant.price.amount * lineItem.quantity,
      items: [item],
    });
  }

  beginCheckout(cart: Cart) {
    const items: AnalyticsEventItem[] = cart.lines.map((line) => ({
      item_id: line.product.id,
      item_name: line.product.title,
      item_brand: line.product.vendor,
      price: line.variant.price.amount,
      quantity: line.quantity,
    }));

    this.pushGtag('event', 'begin_checkout', {
      currency: cart.total.currencyCode || 'USD',
      value: cart.total.amount,
      items,
    });

    this.pushFbq('InitiateCheckout', {
      num_items: cart.totalQuantity,
      value: cart.total.amount,
      currency: cart.total.currencyCode || 'USD',
    });
  }

  purchase(order: any) {
    const items: AnalyticsEventItem[] = (order.items || []).map((it: any) => ({
      item_id: it.id,
      item_name: it.title,
      price: it.price,
      quantity: it.quantity || 1,
    }));

    this.pushGtag('event', 'purchase', {
      transaction_id: order.orderId || order.id || order.orderNumber,
      value: order.total,
      tax: order.tax || 0,
      shipping: order.shippingCost || 0,
      currency: 'USD',
      items,
    });

    this.pushFbq('Purchase', {
      value: order.total,
      currency: 'USD',
      content_type: 'product',
    });
  }

  login(method = 'Email') {
    this.pushGtag('event', 'login', { method });
  }

  signUp(method = 'Email') {
    this.pushGtag('event', 'sign_up', { method });
  }

  addToWishlist(product: Product) {
    this.pushGtag('event', 'add_to_wishlist', {
      currency: product.price.currencyCode || 'USD',
      value: product.price.amount,
      items: [
        {
          item_id: product.id,
          item_name: product.title,
          price: product.price.amount,
        },
      ],
    });
  }

  newsletterSignup(location = 'Footer') {
    this.pushGtag('event', 'generate_lead', {
      lead_type: 'Newsletter',
      location,
    });
  }
}

export const analytics = new AnalyticsService();
