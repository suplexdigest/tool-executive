"use client";

import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-orange/40 hover:shadow-md hover:shadow-orange/5 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-orange sm:text-xs">
            {product.brand}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-tight text-foreground group-hover:text-orange transition-colors sm:text-base">
            {product.name}
          </h3>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted line-clamp-2 sm:text-xs">
            {product.description}
          </p>
          <div className="mt-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              {product.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange/10 px-2 py-0.5 text-[9px] font-medium text-orange sm:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="rounded-full bg-orange/10 px-3 py-1 text-[10px] font-bold text-orange sm:text-xs">
            {product.category.replace(/-/g, " ")}
          </span>
          <span className="mt-2 text-[10px] font-semibold text-orange group-hover:underline sm:text-xs">
            View Deal &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
