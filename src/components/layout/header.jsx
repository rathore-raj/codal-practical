"use client";

import { ChevronDown, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const mainNavLinks = [
  { label: "Browse Categories", href: "#" },
  { label: "Who We Serve", href: "#" },
  { label: "What We Do", href: "#" },
  { label: "Who We Are", href: "#" },
];

const secondaryNavLinks = [
  { label: "Lubricants", href: "/lubricants" },
  { label: "Chemicals", href: "/chemicals" },
  { label: "Supplies", href: "/supplies" },
  { label: "Equipment", href: "/equipment" },
  { label: "Auto Parts", href: "/auto-parts" },
  { label: "Purchased Products", href: "/purchased-products" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <div className="header-top bg-black">
        <div className="container">
          <div className="header-inner flex items-center justify-between text-white">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold">
                IPSUM
              </Link>
              <nav className="hidden md:flex items-center">
                {mainNavLinks.map((link, index) => (
                  <ul key={link.label}>
                    <li
                      className={`py-5 px-3 flex items-center gap-1 cursor-pointer font-semibold text-xs border-r border-white20 ${
                        index === 0 ? "bg-gray" : ""
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={18} />
                    </li>
                  </ul>
                ))}
              </nav>
            </div>
            <button
              className="md:hidden p-2 hover:bg-gray-800 rounded-full"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <input
                  type="search"
                  placeholder="Search by keyword, brand or SKU..."
                  className="w-64 bg-lightest-gray border py-2 px-3 pr-10 text-sm focus:outline-none rounded-sm"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              <button
                className="p-2 hover:bg-gray-800 rounded-full"
                aria-label="User Profile"
              >
                <User className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-800 rounded-full"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-menu bg-gray text-white text-xs">
        <div className="container">
          <ul className="flex items-center gap-8">
            {secondaryNavLinks.map((link) => (
              <li key={link.label} className="py-4">
                <Link href={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
