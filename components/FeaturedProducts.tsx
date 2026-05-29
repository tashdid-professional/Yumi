"use client";

import { useEffect, useState, useRef } from "react";
import { products } from "@/public/datas/products";
import ProductCard from "./ProductCard";

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
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Get the skin you want to feel
          </p>
        </div>

        {/* Products Slider */}
        <div className="relative mx-auto max-w-[1400px] overflow-hidden">
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
    </section>
  );
}

