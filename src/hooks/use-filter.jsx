"use client";

import { getNonEmptyFilterList } from "@/util/common";
import { useSearchParams } from "next/navigation";

export default function useFilter() {
  const searchParams = useSearchParams();
  const brand = getNonEmptyFilterList(searchParams.get("brand") ?? "");
  const viscosity = getNonEmptyFilterList(searchParams.get("viscosity") ?? "");
  const size = getNonEmptyFilterList(searchParams.get("size") ?? "");

  return { brand, viscosity, size };
}
