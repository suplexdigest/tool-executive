"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchAndFilter, { Filters } from "@/components/SearchAndFilter";
import InfiniteProductFeed from "@/components/InfiniteProductFeed";

const DEFAULT_FILTERS: Filters = {
  search: "",
  category: "all",
  priceRange: { min: 0, max: Infinity },
  sort: "random",
};

export default function HomePage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6">
        <SearchAndFilter filters={filters} onChange={setFilters} />
        <div className="mt-4">
          <InfiniteProductFeed filters={filters} />
        </div>
      </main>

      <Footer />
    </>
  );
}
