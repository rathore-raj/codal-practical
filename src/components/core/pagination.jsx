
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Pagination() {
  return (
    <div className="flex items-center text-placeholder">
        <button
          className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm text-gray-500  
          disabled:opacity-50  border border-dark-gray border-r-0"
          disabled
        >
         <ChevronLeft />
        </button>
        <div className="text-sm  border border-dark-gray lg:py-4 py-3 lg:px-3 px-2">
          Page <span className="font-semibold">1</span> of{" "}
          <span className="font-semibold">12</span>
        </div>
        <button
          className="lg:px-3 px-2 lg:py-3.5 py-2.5 text-sm   border border-dark-gray border-l-0"
        >
        <ChevronRight />
        </button>
      </div>
  );
}
