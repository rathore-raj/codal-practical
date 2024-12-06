"use client";

import { Filter } from "lucide-react";
import Pagination from "./pagination";
import SortBy from "./sort-by";
import { AppContext } from "../providers/app-context";
import { useContext } from "react";

export default function Filters() {
  const { setIsSideBarOpen } = useContext(AppContext);

  return (
    <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
      <div className="text-sm">
        Showing <span className="font-semibold">1–12</span> of{" "}
        <span className="font-semibold">859</span>
      </div>
      <button
        className="md:hidden flex text-xs font-semibold gap-2 items-center"
        onClick={() => setIsSideBarOpen(true)}
      >
        <Filter size={18} />
        <span> Filter (0)</span>
      </button>
      <div className=" flex-wrap items-center lg:gap-5 gap-3 hidden md:flex">
        <SortBy />
        <Pagination />
      </div>
    </div>
  );
}
