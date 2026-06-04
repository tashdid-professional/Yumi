"use client";

import { useEffect, useState, useRef } from "react";
import { getFeaturedProducts, getSiteConfig } from "@/src/services/api";
import type { Product, SiteConfig } from "@/src/types";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    Promise.all([getFeaturedProducts(), getSiteConfig()]).then(([products, config]) => {
      setFeaturedProducts(products);
      setSiteConfig(config);
      setLoading(false);
    });
  }, []);

  const totalProducts = featuredProducts.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(4);
      else if (window.innerWidth >= 640) setVisibleItems(2);
      else setVisibleItems(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (totalProducts > visibleItems) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = totalProducts - visibleItems;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000);
    } else {
      setCurrentIndex(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalProducts, visibleItems]);

  if (loading || !siteConfig) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="py-20 md:py-28 bg-white  container"
    >
      <div className="  text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold text-black mb-4">
            {siteConfig.featuredProducts.title}
          </h2>
          <p className="text-[#7e7e7e] text-sm md:text-[18px] font-medium">
            {siteConfig.featuredProducts.subtitle}
          </p>
        </div>

        <div className="relative -mx-4 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              width: `${(totalProducts / visibleItems) * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / totalProducts}%)`
            }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                style={{ width: `${100 / totalProducts}%` }}
                className="flex-none px-4"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
