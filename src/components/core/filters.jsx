"use client";

import { getNonEmptyFilterList } from "@/util/common";
import { Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "../providers/app-context";
import Pagination from "./pagination";
import SortBy from "./sort-by";

export default function Filters({
  totalPages,
  totalDataLength,
  indexOfLastProduct,
  indexOfFirstProduct,
}) {
  const { setIsSideBarOpen } = useContext(AppContext);
  const searchParams = useSearchParams();
  const currentBrands = getNonEmptyFilterList(searchParams.get("brand") ?? "");
  const currentViscosity = getNonEmptyFilterList(
    searchParams.get("viscosity") ?? ""
  );
  const currentSize = getNonEmptyFilterList(searchParams.get("size") ?? "");
  const filterCount = [...currentBrands, ...currentViscosity, ...currentSize]
    .length;

  return (
    <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
      <div className="text-sm">
        Showing{" "}
        <span className="font-semibold">
          {indexOfFirstProduct}–{Math.min(indexOfLastProduct, totalDataLength)}
        </span>{" "}
        of <span className="font-semibold">{totalDataLength}</span>
      </div>
      <button
        className="md:hidden flex text-xs font-semibold gap-2 items-center"
        onClick={() => setIsSideBarOpen(true)}
      >
        <Filter size={18} />
        <span> Filter ({filterCount})</span>
      </button>
      <div className=" flex-wrap items-center lg:gap-5 gap-3 hidden md:flex">
        <SortBy />
        {indexOfFirstProduct > 0 && <Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}
