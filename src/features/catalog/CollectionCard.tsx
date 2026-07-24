import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Collection } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

export interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-lumina-level2 flex flex-col justify-end min-h-[380px] p-8 transition-all duration-300 hover:scale-[1.01]"
    >
      {/* Hero Image Background with Glass Overlay */}
      {collection.image && (
        <Image
          src={collection.image.url}
          alt={collection.image.altText || collection.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <Badge variant="outline" className="w-fit text-blue-300 border-blue-400/30 bg-blue-500/10">
          {collection.itemCount || 12} Curated Pieces
        </Badge>

        <h3 className="text-2xl sm:text-3xl font-semibold font-serif text-white tracking-tight group-hover:text-blue-200 transition-colors">
          {collection.title}
        </h3>

        <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed max-w-md">
          {collection.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white pt-2 group-hover:translate-x-1 transition-transform">
          <span>Explore Capsule</span>
          <ArrowRight className="w-4 h-4 text-blue-400" />
        </div>
      </div>
    </Link>
  );
};
