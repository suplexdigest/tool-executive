"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";

function getAsinFromUrl(url: string): string {
  const match = url.match(/\/dp\/([A-Z0-9]+)/i);
  return match ? match[1] : "";
}

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const asin = getAsinFromUrl(product.affiliateUrl);
  const imageUrl = asin
    ? `https://images.amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX300_.jpg`
    : "";

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-orange/40 hover:shadow-md hover:shadow-orange/5"
    >
      <div className="flex h-44 items-center justify-center overflow-hidden bg-zinc-800/50 p-4 sm:h-52">
        {imageUrl && !imgError ? (
          <img
            src={imageUrl}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-orange/60">
              {product.brand.charAt(0)}
            </span>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-orange/40">
              {product.brand}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-orange sm:text-xs">
          {product.brand}
        </p>
        <h3 className="mt-1 text-sm font-bold leading-tight text-foreground group-hover:text-orange transition-colors sm:text-base line-clamp-2">
          {product.name}
        </h3>
        {product.price && (
          <p className="mt-1.5 text-base font-bold text-orange">{product.price}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange/10 px-2 py-0.5 text-[9px] font-medium text-orange sm:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-auto pt-3 text-[10px] font-semibold text-orange group-hover:underline sm:text-xs">
          View Deal &rarr;
        </span>
      </div>
    </Link>
  );
}
