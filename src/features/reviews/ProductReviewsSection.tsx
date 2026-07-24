'use client';

import React, { useState, useEffect } from 'react';
import { ProductReview, ReviewSummary } from '@/types';
import { reviewService } from '@/lib/services/review';
import { ReviewCard } from './ReviewCard';
import { Button } from '@/components/ui/Button';
import { Star, Filter, SlidersHorizontal, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export interface ProductReviewsSectionProps {
  productId: string;
  productTitle: string;
}

export const ProductReviewsSection: React.FC<ProductReviewsSectionProps> = ({
  productId,
  productTitle,
}) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [summary, setSummary] = useState<ReviewSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'highest' | 'lowest'>('newest');
  const [withImagesOnly, setWithImagesOnly] = useState(false);

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [formRating, setFormRating] = useState(5);
  const [formAuthor, setFormAuthor] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formBody, setFormBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fetchReviewsData = async () => {
    setIsLoading(true);
    try {
      const [revs, summ] = await Promise.all([
        reviewService.getReviews(productId, sortOption, withImagesOnly),
        reviewService.getReviewSummary(productId),
      ]);
      setReviews(revs);
      setSummary(summ);
    } catch (err) {
      console.error('Failed to load product reviews:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviewsData();
  }, [productId, sortOption, withImagesOnly]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formBody.trim()) return;

    setIsSubmitting(true);
    try {
      await reviewService.submitReview({
        productId,
        author: formAuthor || 'Verified Client',
        rating: formRating,
        title: formTitle,
        body: formBody,
      });

      setSubmitSuccess(true);
      setFormTitle('');
      setFormBody('');
      setFormAuthor('');
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowForm(false);
      }, 2000);

      fetchReviewsData();
    } catch (err) {
      console.error('Failed to submit review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col gap-10 pt-10 border-t border-neutral-200/80">
      {/* Top Heading & Review Summary Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-neutral-900">
            Client Reviews & Evaluation
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Verified feedback from clientele regarding {productTitle}.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => setShowForm(!showForm)}
          className="gap-2 self-start md:self-auto"
        >
          <MessageSquarePlus className="w-4 h-4" />
          {showForm ? 'Close Form' : 'Write a Client Review'}
        </Button>
      </div>

      {/* Review Summary Breakdown Box */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 bg-neutral-50 rounded-3xl border border-neutral-200/80 shadow-lumina-level1">
          {/* Average Rating Score */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-6">
            <span className="text-5xl font-bold font-serif text-neutral-900">
              {summary.averageRating.toFixed(1)}
            </span>
            <div className="flex items-center gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(summary.averageRating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-neutral-500">
              Based on {summary.totalReviews} Verified Client Reviews
            </span>
          </div>

          {/* Star Rating Distribution Bars */}
          <div className="md:col-span-8 flex flex-col justify-center gap-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = summary.ratingBreakdown[star as 1 | 2 | 3 | 4 | 5] || 0;
              const percent = summary.totalReviews > 0 ? (count / summary.totalReviews) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-semibold text-neutral-700 flex items-center gap-1">
                    {star} <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" />
                  </span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-neutral-900 h-full rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-medium text-neutral-500">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Review Submission Form Modal / Drawer */}
      {showForm && (
        <form
          onSubmit={handleSubmitReview}
          className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300"
        >
          <h3 className="text-xl font-bold font-serif text-neutral-900">Write a Client Evaluation</h3>

          {submitSuccess ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you! Your evaluation has been published.</span>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Overall Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className="p-1 text-amber-400 focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= formRating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vane"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Headline / Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Impeccable Quality & Fit"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Detailed Evaluation</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about fit, feel, material softness, and overall impression..."
                  value={formBody}
                  onChange={(e) => setFormBody(e.target.value)}
                  className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <Button variant="primary" size="lg" isLoading={isSubmitting} type="submit" className="self-start">
                Submit Review
              </Button>
            </>
          )}
        </form>
      )}

      {/* Filter & Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-neutral-200/80">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span>Filter & Sort Reviews</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-neutral-700 select-none">
            <input
              type="checkbox"
              checked={withImagesOnly}
              onChange={(e) => setWithImagesOnly(e.target.checked)}
              className="rounded border-neutral-300 text-black focus:ring-black"
            />
            <span>With Photos Only</span>
          </label>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as any)}
            className="p-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none"
          >
            <option value="newest">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews List Grid */}
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2].map((n) => (
            <div key={n} className="h-40 bg-neutral-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-neutral-200/80 flex flex-col items-center gap-3">
          <Filter className="w-8 h-8 text-neutral-400" />
          <h4 className="text-base font-bold text-neutral-900">No Reviews Match Criteria</h4>
          <p className="text-xs text-neutral-500">Try adjusting your filters or be the first client to leave a review.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>
      )}
    </section>
  );
};
