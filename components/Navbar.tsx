"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSiteConfig, getProducts } from "@/src/services/api";
import type { SiteConfig, Product } from "@/src/types";

export default function Navbar() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [configLoading, setConfigLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getSiteConfig().then((config) => {
      setSiteConfig(config);
      setConfigLoading(false);
    });
    getProducts().then(setProducts);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isSearchOpen]);

  if (configLoading || !siteConfig) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto py-5 md:py-4 flex items-center justify-between">
          <div className="flex-1" />
          <div className="flex-1 md:flex-none text-center">
            <Image
              src="/images/logo.png"
              alt="Yumi"
              width={120}
              height={50}
              className="h-8 md:h-12 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex-1" />
        </div>
      </nav>
    );
  }

  return (
    <>
      <div className="bg-[#4b6c5b] text-white py-2 text-center text-[10px] sm:text-base font-medium ">
        {siteConfig.topBanner}
      </div>

      <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto py-5 md:py-4 flex items-center justify-between">
          <div className="flex lg:hidden flex-1">
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

          <div className="hidden lg:flex flex-1 gap-8 lg:gap-12">
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

          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={120}
                height={50}
                className="h-8 md:h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleSearch}
              aria-label="Search"
              className="hover:text-gray-400 transition-colors"
            >
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

      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              key="search-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSearch}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            />
            <motion.div
              key="search-content"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="fixed top-0 left-0 w-full bg-white z-[101] py-12 px-6 shadow-2xl max-h-screen overflow-y-auto"
            >
              <div className="container mx-auto">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Search Products</h2>
                  <button
                    onClick={toggleSearch}
                    className="p-2 hover:rotate-90 transition-transform duration-300"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSearch} className="relative mb-12">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-2xl md:text-5xl font-medium border-none outline-none placeholder:text-neutral-200"
                  />
                  <div className="absolute right-0 bottom-2 w-full h-[2px] bg-neutral-100 origin-left scale-x-100 transition-transform duration-700 mt-4" />
                </form>

                {searchQuery.trim().length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {products
                      .filter(p =>
                        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .slice(0, 4)
                      .map(product => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="group flex flex-col gap-4"
                        >
                          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-50">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">{product.name}</h3>
                            <p className="text-neutral-400 text-[12px] uppercase tracking-widest mt-1">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                )}

                {searchQuery.trim().length > 0 && products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <p className="text-neutral-400 text-center py-20">No products matching your search.</p>
                )}

                {searchQuery.trim().length > 0 && (
                   <div className="mt-12 pb-8 text-center">
                      <button
                        onClick={handleSearch}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-neutral-200 hover:decoration-black transition-all"
                      >
                        View All Results
                      </button>
                   </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] lg:hidden"
            />

            <motion.div
              key="mobile-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[101] lg:hidden shadow-2xl flex flex-col"
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
    </>
  );
}
