import { ProductReview, ReviewSummary } from '@/types';

export interface IReviewService {
  getReviews(productId: string, sort?: 'newest' | 'oldest' | 'highest' | 'lowest' | 'most-helpful', filterWithImages?: boolean): Promise<ProductReview[]>;
  getReviewSummary(productId: string): Promise<ReviewSummary>;
  voteHelpful(reviewId: string): Promise<{ newCount: number; alreadyVoted: boolean }>;
  submitReview(data: { productId: string; author: string; rating: number; title: string; body: string }): Promise<ProductReview>;
}

const VOTED_KEY = 'luxe_voted_reviews';

class MockReviewService implements IReviewService {
  private reviewsStore: Map<string, ProductReview[]> = new Map();

  constructor() {
    this.seedReviews();
  }

  private seedReviews() {
    const defaultReviews: ProductReview[] = [
      {
        id: 'rev-101',
        productId: 'prod-1',
        author: 'Elena Rostova',
        rating: 5,
        title: 'Unparalleled Grade-A Softness & Silhouette',
        body: 'The 12-gauge Mongolian cashmere feels incredibly cloud-like against the skin. The slouch fit drape sits perfectly over tailored trousers.',
        date: '2026-07-20',
        isVerified: true,
        helpfulCount: 24,
        images: [
          'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
        ],
      },
      {
        id: 'rev-102',
        productId: 'prod-1',
        author: 'Marcus Vance',
        rating: 5,
        title: 'Exceptional Quality & White-Glove Packaging',
        body: 'Arrived in the signature magnetic black box with custom monogramming. Highly recommended for executive travel capsule wardrobes.',
        date: '2026-07-10',
        isVerified: true,
        helpfulCount: 18,
      },
      {
        id: 'rev-103',
        productId: 'prod-1',
        author: 'Sophia Chen',
        rating: 4,
        title: 'Timeless Aesthetic & Fit',
        body: 'Beautiful architectural cut. Fits true to size with a comfortable relaxed shoulder line.',
        date: '2026-06-28',
        isVerified: true,
        helpfulCount: 9,
      },
    ];

    this.reviewsStore.set('prod-1', defaultReviews);
  }

  async getReviews(
    productId: string,
    sort: 'newest' | 'oldest' | 'highest' | 'lowest' = 'newest',
    filterWithImages = false
  ): Promise<ProductReview[]> {
    let list = this.reviewsStore.get(productId) || [
      {
        id: `rev-${productId}-1`,
        productId,
        author: 'Julian Vane',
        rating: 5,
        title: 'Superb Craftsmanship',
        body: 'Remarkable weight and hand-feel. One of the finest luxury pieces in my collection.',
        date: '2026-07-15',
        isVerified: true,
        helpfulCount: 14,
        images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80'],
      },
      {
        id: `rev-${productId}-2`,
        productId,
        author: 'Victoria Sterling',
        rating: 5,
        title: 'Flawless Finish',
        body: 'Seamless stitching and rich color depth.',
        date: '2026-07-02',
        isVerified: true,
        helpfulCount: 8,
      },
    ];

    if (filterWithImages) {
      list = list.filter((r) => r.images && r.images.length > 0);
    }

    const sorted = [...list].sort((a, b) => {
      if (sort === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sort === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sort === 'highest') return b.rating - a.rating;
      if (sort === 'lowest') return a.rating - b.rating;
      return 0;
    });

    return Promise.resolve(sorted);
  }

  async getReviewSummary(productId: string): Promise<ReviewSummary> {
    const list = await this.getReviews(productId);
    if (list.length === 0) {
      return {
        averageRating: 5.0,
        totalReviews: 0,
        ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      };
    }

    const totalReviews = list.length;
    const sum = list.reduce((acc, r) => acc + r.rating, 0);
    const averageRating = parseFloat((sum / totalReviews).toFixed(1));

    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    list.forEach((r) => {
      const rounded = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5;
      breakdown[rounded] = (breakdown[rounded] || 0) + 1;
    });

    return {
      averageRating,
      totalReviews,
      ratingBreakdown: breakdown,
    };
  }

  async voteHelpful(reviewId: string): Promise<{ newCount: number; alreadyVoted: boolean }> {
    if (typeof window !== 'undefined') {
      try {
        const votedStr = localStorage.getItem(VOTED_KEY);
        const votedIds: string[] = votedStr ? JSON.parse(votedStr) : [];
        if (votedIds.includes(reviewId)) {
          return { newCount: 0, alreadyVoted: true };
        }
        votedIds.push(reviewId);
        localStorage.setItem(VOTED_KEY, JSON.stringify(votedIds));
      } catch (e) {
        console.error('Failed to store voted review in localStorage:', e);
      }
    }

    for (const [_prodId, list] of this.reviewsStore.entries()) {
      const found = list.find((r) => r.id === reviewId);
      if (found) {
        found.helpfulCount += 1;
        return { newCount: found.helpfulCount, alreadyVoted: false };
      }
    }

    return { newCount: 15, alreadyVoted: false };
  }

  async submitReview(data: { productId: string; author: string; rating: number; title: string; body: string }): Promise<ProductReview> {
    const newReview: ProductReview = {
      id: `rev-${Date.now()}`,
      productId: data.productId,
      author: data.author || 'Anonymous Client',
      rating: data.rating,
      title: data.title,
      body: data.body,
      date: new Date().toISOString().split('T')[0],
      isVerified: true,
      helpfulCount: 0,
    };

    const current = this.reviewsStore.get(data.productId) || [];
    this.reviewsStore.set(data.productId, [newReview, ...current]);
    return Promise.resolve(newReview);
  }
}

export const reviewService: IReviewService = new MockReviewService();
