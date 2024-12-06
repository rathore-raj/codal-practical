import React from "react";
import ProductImage from "@/assets/placeholder-600x400.jpg";
import Image from "next/image";

export default function ProductCard({
  data: { brand, name, sku, price, multipleSizes },
}) {
  return (
    <div className="product-card md:py-9 py-5 px-4 border border-light-gray flex flex-wrap">
      <div className="product-image aspect-[1.38/1] relative mb-6 w-full md:order-1 order-2">
        <Image
          src={ProductImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="text-blue md:mb-12 mb-8 w-full md:order-2 order-1">
        <h6 className="mb-2 md:text-sm text-xs font-semibold">{brand}</h6>
        <h3 className="md:text-2xl text-base font-bold">{name}</h3>
      </div>
      <div className="product-info w-full order-3">
        <div className="variant flex flex-wrap gap-2 items-center justify-between mb-3 md:text-base text-sm">
          <span className="text-placeholder">SKU: {sku}</span>
          {multipleSizes && (
            <span className="text-green">Multiple Sizes Available</span>
          )}
        </div>
        <div className="from text-blue md:text-lg  text-base mb-1">From</div>
        <div className="price font-semibold md:text-3xl text-xl mb-2">
          ${price}
        </div>
        <button className="text-sm uppercase w-full py-4 px-3 bg-yellow rounded-sm font-semibold">
          View Product
        </button>
      </div>
    </div>
  );
}
