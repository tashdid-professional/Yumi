"use client";

import { useEffect, useState, useRef } from "react";
import { products } from "@/public/datas/products";
import { siteConfig } from "@/public/datas/homepage";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const featuredProducts = products.filter((p) => p.featured);
  const totalProducts = featuredProducts.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
      }, 2000);
    } else {
      setCurrentIndex(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalProducts, visibleItems]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="py-20 md:py-28 bg-white  container"
    >
      <div className="  text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold text-black mb-4">
            {siteConfig.featuredProducts.title}
          </h2>
          <p className="text-[#7e7e7e] text-sm md:text-[18px] font-medium">
            {siteConfig.featuredProducts.subtitle}
          </p>
        </div>

        {/* Products Slider */}
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

