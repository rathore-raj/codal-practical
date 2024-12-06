"use client";
import React, {
  useContext,
  useEffect,
  useOptimistic,
  useTransition,
} from "react";
import Chip from "./chip";
import FilterAccordion from "./filter-accordion";
import SortBy from "./sort-by";
import { X } from "lucide-react";
import { AppContext } from "../providers/app-context";
import { Filters } from "@/data/filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getNonEmptyFilterList } from "@/util/common";

export default function FilterBar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(AppContext);
  const searchParams = useSearchParams();
  const currentBrands = searchParams.get("brand") ?? "";
  const currentViscosity = searchParams.get("viscosity") ?? "";
  const currentSize = searchParams.get("size") ?? "";

  const [filters, setFilters] = useOptimistic({
    brand: getNonEmptyFilterList(currentBrands),
    viscosity: getNonEmptyFilterList(currentViscosity),
    size: getNonEmptyFilterList(currentSize),
  });

  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    document.body.style.overflow = isSideBarOpen ? "hidden" : "auto";
    document.body.style.height = isSideBarOpen ? "100vh" : "auto";
  }, [isSideBarOpen]);

  const onFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    const currentFilterValues = filters[key];
    let updatedFilterValues;
    if (currentFilterValues.includes(value)) {
      updatedFilterValues = currentFilterValues.filter((val) => val !== value);
    } else {
      updatedFilterValues = [...currentFilterValues, value];
    }
    updatedFilterValues = updatedFilterValues.join(",");

    params.delete(key);
    params.delete("page");
    params.append("page", "1");

    if (updatedFilterValues.length) params.append(key, updatedFilterValues);

    startTransition(() => {
      setFilters({ ...filters, [key]: updatedFilterValues });
      push(`${pathname}?${params.toString()}`);
    });
  };

  const onClearAll = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("brand");
    params.delete("size");
    params.delete("viscosity");
    params.delete("page");
    params.append("page", "1");
    startTransition(() => {
      setFilters({ brand: [], size: [], viscosity: [] });
      push(`${pathname}?${params.toString()}`);
    });
  };

  const allFilterList = Object.entries(filters);
  const totalFilters = allFilterList.flatMap(([, val]) => val).length;

  return (
    <aside
      className={`filterBar transition ease-in-out w-full lg:w-3/12 md:w-2/5 shrink-0 bg-white md:static fixed z-10 top-0 left-0 overflow-hidden overflow-y-auto md:h-auto h-screen md:translate-x-0 ${
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
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
      <div className="font-semibold py-3 mb-4 hidden md:block">
        Filters({isPending ? ".." : totalFilters})
      </div>
      <div className="md:px-0 px-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-black font-semibold">Active Filters</span>
          <button className="text-sm text-error" onClick={onClearAll}>
            Clear All
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {!isPending &&
            allFilterList.flatMap(([key, list]) => {
              return list.map((val) => (
                <Chip
                  key={val}
                  filterKey={key}
                  text={val}
                  startTransition={startTransition}
                  setFilters={setFilters}
                />
              ));
            })}
        </div>
      </div>
      {Filters.map(({ label, filters }) => (
        <FilterAccordion key={label} title={label}>
          <ul className="font-sm">
            {filters.map((value) => (
              <li
                key={value}
                className="border-t border-stroke py-3 px-2 md:text-base text-xs cursor-pointer"
                onClick={() => onFilter(label.toLocaleLowerCase(), value)}
              >
                {value}
              </li>
            ))}
          </ul>
        </FilterAccordion>
      ))}
    </aside>
  );
}
