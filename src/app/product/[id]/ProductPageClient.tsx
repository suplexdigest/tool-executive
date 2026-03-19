"use client";

import { useState } from "react";
import { Product } from "@/data/products";

export default function ProductPageClient({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900 sm:rounded-2xl">
      {imgError ? (
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <span className="text-6xl">{product.brand.charAt(0)}</span>
            <p className="mt-2 text-sm text-muted">{product.brand}</p>
          </div>
        </div>
      ) : (
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}
