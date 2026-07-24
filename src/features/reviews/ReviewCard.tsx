'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductReview } from '@/types';
import { reviewService } from '@/lib/services/review';
import { Star, ThumbsUp, ShieldCheck, Check } from 'lucide-react';

export interface ReviewCardProps {
  review: ProductReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVoteHelpful = async () => {
    if (hasVoted || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await reviewService.voteHelpful(review.id);
      if (res.alreadyVoted) {
        setHasVoted(true);
      } else {
        setHelpfulCount(res.newCount);
        setHasVoted(true);
      }
    } catch (err) {
      console.error('Failed to vote helpful:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4 animate-in fade-in duration-200">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-3">
          {/* Avatar Initials */}
          <div className="w-10 h-10 bg-neutral-900 text-white font-serif font-bold text-sm rounded-full flex items-center justify-center">
            {review.author.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-neutral-900">{review.author}</h4>
              {review.isVerified && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified Client
                </span>
              )}
            </div>
            <span className="text-[11px] text-neutral-400">{review.date}</span>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Title & Body */}
      <div className="space-y-1.5">
        <h5 className="text-base font-bold font-serif text-neutral-900">{review.title}</h5>
        <p className="text-xs text-neutral-700 leading-relaxed">{review.body}</p>
      </div>

      {/* Review Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-3 pt-2">
          {review.images.map((imgUrl, idx) => (
            <div key={idx} className="relative w-16 h-20 bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200">
              <Image src={imgUrl} alt={`Review photo ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Helpful Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs">
        <span className="text-neutral-400">Was this client review helpful to you?</span>

        <button
          type="button"
          onClick={handleVoteHelpful}
          disabled={hasVoted || isSubmitting}
          className={`px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5 font-medium ${
            hasVoted
              ? 'bg-blue-50 text-blue-700 border-blue-200'
              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:text-black'
          }`}
          aria-label="Mark review as helpful"
        >
          {hasVoted ? <Check className="w-3.5 h-3.5" /> : <ThumbsUp className="w-3.5 h-3.5" />}
          <span>{hasVoted ? 'Helpful' : 'Helpful'} ({helpfulCount})</span>
        </button>
      </div>
    </div>
  );
};
