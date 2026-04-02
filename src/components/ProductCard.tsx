"use client";

import Link from "next/link";
import { Product } from "@/data/products";

const BRAND_COLORS: Record<string, string> = {
  Festool: "from-emerald-900/40 to-emerald-950/60",
  "Snap-on": "from-red-900/40 to-red-950/60",
  SawStop: "from-amber-900/40 to-amber-950/60",
  Hilti: "from-red-900/40 to-red-950/60",
  Milwaukee: "from-red-900/40 to-red-950/60",
  DeWalt: "from-yellow-900/40 to-yellow-950/60",
  Makita: "from-teal-900/40 to-teal-950/60",
  Bosch: "from-blue-900/40 to-blue-950/60",
  Klein: "from-orange-900/40 to-orange-950/60",
  Knipex: "from-blue-900/40 to-blue-950/60",
  Wera: "from-green-900/40 to-green-950/60",
  Stanley: "from-yellow-900/40 to-yellow-950/60",
  Lincoln: "from-red-900/40 to-red-950/60",
  Miller: "from-blue-900/40 to-blue-950/60",
  Caterpillar: "from-yellow-900/40 to-yellow-950/60",
  "John Deere": "from-green-900/40 to-green-950/60",
  Ingersoll: "from-green-900/40 to-green-950/60",
};

function getBrandGradient(brand: string): string {
  for (const [key, val] of Object.entries(BRAND_COLORS)) {
    if (brand.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return "from-zinc-800/60 to-zinc-900/80";
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-orange/40 hover:shadow-md hover:shadow-orange/5"
    >
      <div className={`flex h-32 flex-col items-center justify-center bg-gradient-to-br ${getBrandGradient(product.brand)} p-4`}>
        <span className="text-5xl font-black text-orange/70 transition-transform group-hover:scale-110">
          {product.brand.charAt(0)}
        </span>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange/50">
          {product.brand}
        </p>
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
