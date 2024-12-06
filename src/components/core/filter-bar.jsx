"use client";
import React, { useContext, useEffect } from "react";
import Chip from "./chip";
import FilterAccordion from "./filter-accordion";
import SortBy from "./sort-by";
import { X } from "lucide-react";
import { AppContext } from "../providers/app-context";

export default function FilterBar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = isSideBarOpen ? "hidden" : "auto";
    document.body.style.height = isSideBarOpen ? "100vh" : "auto";
  }, [isSideBarOpen]);

  const defaultClass = `filterBar transition ease-in-out w-full lg:w-3/12 md:w-2/5 shrink-0 bg-white md:static fixed z-10 top-0 left-0 overflow-hidden overflow-y-auto md:h-auto h-screen md:translate-x-0 ${
    isSideBarOpen ? "translate-x-0" : "translate-x-[-100vw]"
  }`;

  return (
    <aside className={defaultClass}>
      <div className="sort-and-filter flex md:hidden  flex-wrap items-center justify-between py-6 px-4 border-b border-stroke mb-6">
        <span className="text-black text-xs font-semibold uppercase">
          Sort & Filters
        </span>
        <button onClick={() => setIsSideBarOpen(false)}>
          <X />
        </button>
      </div>

      <div className="block md:hidden w-full mb-8 px-4">
        <SortBy />
      </div>
      <div className="font-semibold py-3 mb-4 hidden md:block">Filters</div>
      <div className="md:px-0 px-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-black font-semibold">Active Filters</span>
          <button className="text-sm text-error">Clear All</button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <Chip text="Lube-Tech" />
          <Chip text="Hydraulic Fluid" />
          <Chip text="16 Gal Keg" />
        </div>
      </div>
      <FilterAccordion title="Brand">
        <ul className="font-sm ">
          <li className="border-t border-stroke py-3 px-2 md:text-base text-xs">
            Mobil
          </li>
          <li className="border-t border-stroke py-3 px-2 md:text-base text-xs">
            Old World
          </li>
          <li className="border-t border-stroke py-3 px-2 md:text-base text-xs">
            Peak
          </li>
        </ul>
      </FilterAccordion>
    </aside>
  );
}
