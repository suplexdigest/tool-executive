"use client";

import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-orange/40 hover:shadow-lg hover:shadow-orange/5 sm:rounded-2xl"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-900">
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4">
          <span className="text-5xl font-black text-orange/80 sm:text-6xl">
            {product.brand.charAt(0)}
          </span>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-orange/60">
            {product.brand}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-muted/50">
            {product.category.replace(/-/g, " ")}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-orange sm:text-xs">
            {product.brand}
          </p>
        </div>
        <div className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-bold text-orange backdrop-blur sm:right-3 sm:top-3 sm:px-3 sm:py-1 sm:text-sm">
          View Deal
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="mb-0.5 text-sm font-bold leading-tight text-foreground group-hover:text-orange transition-colors sm:mb-1 sm:text-base">
          {product.name}
        </h3>
        <p className="mb-2 text-[11px] leading-relaxed text-muted line-clamp-2 sm:mb-3 sm:text-xs">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange/10 px-1.5 py-0.5 text-[9px] font-medium text-orange sm:px-2 sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-semibold text-orange group-hover:underline sm:text-xs">
            View Deal &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
