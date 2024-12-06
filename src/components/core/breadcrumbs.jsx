import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs py-4 mb-2 text-light-mid text-sm">
      <div className="container">
        <nav>
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="#" className="underline">
                Browse Categories
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-[#707070]" />
            </li>
            <li className="flex items-center">
              <Link href="#" className="underline">
                Lubricants
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-[#707070]" />
            </li>
            <li className="text-primary">Hydraulic Fluids</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
