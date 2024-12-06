import React from "react";

import FilterBar from "./filter-bar";
import ProductCard from "./product-card";
import Pagination from "./pagination";
import Filters from "./filters";

export default function Products() {
  return (
    <div className="products flex flex-grow gap-4">
      <FilterBar />
      <section className="flex-grow">
      <Filters />
        <div className="grid xl:grid-cols-3 grid-cols-2 w-full md:mb-8 mb-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <Pagination />
        </div>
      </section>
    </div>
  );
}
