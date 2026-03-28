"use client";

import { Product } from "@/data/products";

export default function ProductPageClient({ product }: { product: Product }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900 sm:rounded-2xl">
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <span className="text-7xl font-black text-orange/80 sm:text-8xl">
          {product.brand.charAt(0)}
        </span>
        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-orange/60 sm:text-base">
          {product.brand}
        </p>
        <p className="mt-1 text-xs uppercase tracking-wider text-muted/50">
          {product.category.replace(/-/g, " ")}
        </p>
      </div>
    </div>
  );
}
