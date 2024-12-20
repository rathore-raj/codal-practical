"use client";

import { mainNavLinks, secondaryNavLinks } from "@/data/header";
import useDisableBodyScroll from "@/hooks/use-disable-body-scroll";
import { ChevronDown, Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "../core/search-bar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  useDisableBodyScroll(isMobileMenuOpen);

  return (
    <header>
      <div className="header-top bg-black">
        <div className="container">
          <div className="header-inner flex items-center justify-between text-white py-3 xl:p-0">
            <button
              className="xl:hidden p-2 hover:bg-gray-800 rounded-full"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center xl:gap-6">
              <Link href="/" className="text-2xl font-bold">
                IPSUM
              </Link>
              <nav
                className={`fixed xl:static bg-black w-full transition ease-in-out duration-300 z-50	 top-16 left-0 overflow-y-auto h-screen xl:h-auto  ${
                  isMobileMenuOpen
                    ? "translate-x-0 xl:translate-x-0"
                    : "-translate-x-full xl:translate-x-0"
                }`}
              >
                <ul className="xl:flex items-center">
                  {mainNavLinks.map((link, index) => (
                    <li
                      key={link.label}
                      className={`py-5 px-3 flex items-center gap-1 cursor-pointer font-semibold text-xs border-r border-white20 ${
                        index === 0 ? "bg-gray" : ""
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={18} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden md:inline-block mr-16">
                <SearchBar />
              </div>
              <button
                className="hover:bg-gray-800 rounded-full mr-6"
                aria-label="User Profile"
              >
                <User className="h-5 w-5" />
              </button>
              <button
                className="hover:bg-gray-800 rounded-full"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block py-2 px-5 bg-gray">
        <SearchBar />
      </div>
      <div className="sub-menu bg-gray text-white text-xs">
        <div className="container">
          <ul className="hidden xl:flex items-center gap-8">
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
