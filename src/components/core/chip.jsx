import { getNonEmptyFilterList } from "@/util/common";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Chip({ filterKey, text, startTransition }) {
  const searchParams = useSearchParams();
  const filterValue = getNonEmptyFilterList(searchParams.get(filterKey));
  const { push } = useRouter();
  const pathname = usePathname();

  const onRemove = () => {
    const params = new URLSearchParams(searchParams);
    const values = filterValue.filter((val) => val !== text);
    params.delete(filterKey);
    if (values.length) params.append(filterKey, values.join(","));
    params.delete("page");
    params.append("page", "1");
    
    startTransition(() => {
      push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="bg-light-gray py-3 px-4 text-sm flex gap-1 items-center rounded-sm">
      <span>{text}</span>
      <X className="cursor-pointer" strokeWidth={1} onClick={onRemove} />
    </div>
  );
}
