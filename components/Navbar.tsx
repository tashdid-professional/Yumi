"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/public/datas/homepage";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // const isHome = pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Banner - Only on Homepage, Not Sticky */}
      {/* {isHome && ( */}
        <div className="bg-[#4b6c5b] text-white py-2 text-center text-[10px] sm:text-base font-medium ">
          {siteConfig.topBanner}
        </div>
      {/* )} */}

      {/* Main Navbar - Sticky */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto py-5 md:py-4 flex items-center justify-between">
          {/* Mobile: Hamburger Button */}
          <div className="flex md:hidden flex-1">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-black p-1 active:scale-95 transition-transform"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Left: Desktop Navigation Menu */}
          <div className="hidden md:flex flex-1 gap-8 lg:gap-12">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[14px] font-semibold tracking-[0.2em] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 ${
                  pathname === link.href ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="text-2xl md:text-[42px] font-semibold uppercase inline-block">
              {siteConfig.name}
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

        {/* Mobile Menu Drawer */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
              >
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50">
                  <span className="text-xl font-bold tracking-[0.2em] uppercase">Menu</span>
                  <button 
                    onClick={toggleMenu}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <nav className="flex-grow pt-10 px-8 space-y-8">
                  {siteConfig.navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-[18px] font-semibold tracking-[0.1em] uppercase transition-colors ${
                          pathname === link.href ? "text-black" : "text-gray-400 hover:text-black"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
