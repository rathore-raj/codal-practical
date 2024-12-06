import { X } from "lucide-react";
import React from "react";

export default function Chip({ text }) {
  return (
    <div className="bg-light-gray py-3 px-4 text-sm flex gap-1 items-center rounded-sm">
      <span>{text}</span>
      <X strokeWidth={1} />
    </div>
  );
}
