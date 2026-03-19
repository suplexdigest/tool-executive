"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/products";

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $200", min: 50, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "$500 - $1K", min: 500, max: 1000 },
  { label: "$1K - $5K", min: 1000, max: 5000 },
  { label: "$5K+", min: 5000, max: Infinity },
];

const SORT_OPTIONS = [
  { label: "Random", value: "random" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

export type Filters = {
  search: string;
  category: string;
  priceRange: { min: number; max: number };
  sort: string;
};

export default function SearchAndFilter({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search tools..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-8 text-sm text-foreground placeholder:text-muted focus:border-orange focus:outline-none"
          />
          {filters.search && (
            <button
              onClick={() => onChange({ ...filters, search: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
            showFilters
              ? "border-orange bg-orange/10 text-orange"
              : "border-border text-muted hover:border-orange/40"
          }`}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      <div className="no-scrollbar -mx-3 flex gap-1.5 overflow-x-auto px-3 sm:-mx-0 sm:px-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onChange({ ...filters, category: cat.slug })}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium transition-all sm:text-xs ${
              filters.category === cat.slug
                ? "bg-orange text-background"
                : "border border-border text-muted hover:border-orange/40 hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {showFilters && (
        <div className="flex gap-2 pt-1">
          <select
            value={`${filters.priceRange.min}-${filters.priceRange.max}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split("-").map(Number);
              onChange({ ...filters, priceRange: { min, max } });
            }}
            className="flex-1 rounded-lg border border-border bg-surface px-2 py-2 text-xs text-foreground focus:border-orange focus:outline-none"
          >
            {PRICE_RANGES.map((r) => (
              <option key={r.label} value={`${r.min}-${r.max}`}>
                {r.label}
              </option>
            ))}
          </select>
          <select
            value={filters.sort}
            onChange={(e) => onChange({ ...filters, sort: e.target.value })}
            className="flex-1 rounded-lg border border-border bg-surface px-2 py-2 text-xs text-foreground focus:border-orange focus:outline-none"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
