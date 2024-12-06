"use client";

import { getCurrentPage } from "@/util/common";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition, useOptimistic } from "react";

const searchParamsName = "page";

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const currentPage = getCurrentPage(+searchParams.get(searchParamsName));
  const [page, setPage] = useOptimistic(currentPage);
  const pathname = usePathname();
  const { push } = useRouter();

  const onPageChange = (type) => {
    const params = new URLSearchParams(searchParams);
    let value;
    if (type === "previous") {
      value = Math.max(page - 1, 1);
    } else {
      value = Math.min(page + 1, 3);
    }
    params.delete(searchParamsName);
    params.append(searchParamsName, value);
    startTransition(() => {
      setPage(value);
      push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="flex items-center text-placeholder">
      <button
        className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm text-gray-500  
          disabled:opacity-50  border border-dark-gray border-r-0"
        disabled={page === 1}
        onClick={() => onPageChange("previous")}
      >
        <ChevronLeft />
      </button>
      <div className="text-sm  border border-dark-gray lg:py-4 py-3 lg:px-3 px-2">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>
      <button
        className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm   border border-dark-gray border-l-0 disabled:opacity-50"
        onClick={() => onPageChange("next")}
        disabled={page === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
