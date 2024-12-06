"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FilterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filterAccordion mb-6 last:mb-0">
      <div
        className="flex justify-between items-center cursor-pointer mb-4 md:px-0 px-4"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold">{title}</h3>
        <span className="text-green">
          {isOpen ? (
            <span>
              <Minus />
            </span> // Minus icon
          ) : (
            <span>
              <Plus />
            </span> // Plus icon
          )}
        </span>
      </div>
      {isOpen && children}
    </div>
  );
};

export default FilterAccordion;
