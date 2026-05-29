"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="relative w-full">
      {/* Top Banner - Only on Homepage, Not Sticky */}
      {isHome && (
        <div className="bg-[#4b6c5b] text-white py-2.5 text-center text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase">
          Free shipping on all U.S. orders $50+
        </div>
      )}

      {/* Main Navbar - Sticky */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-5 md:py-7 flex items-center justify-between">
          {/* Left: Navigation Menu */}
          <div className="hidden md:flex flex-1 gap-8 lg:gap-12">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "Blog", href: "/blog" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-gray-500 relative py-1 ${
                  pathname === link.href ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase inline-block">
              GLOWING
            </Link>
          </div>

          {/* Right: Search Only */}
          <div className="flex-1 flex justify-end">
            <button aria-label="Search" className="hover:text-gray-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
