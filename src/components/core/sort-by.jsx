import React from "react";

export default function SortBy() {
  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor="sort" className="font-semibold">
        Sort By:
      </label>
      <select
        id="sort"
        className="lg:p-4 p-3 lg:min-w-[210px] min-w-[180px] text-sm border border-dark-gray text-light-mid"
      >
        <option value="price-high">Price: High to Low</option>
        <option value="price-low">Price: Low to High</option>
        <option value="newest">Newest Arrivals</option>
        <option value="oldest">Oldest Listings</option>
      </select>
    </div>
  );
}
