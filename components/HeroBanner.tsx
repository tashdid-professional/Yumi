"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getHeroSlides } from "@/src/services/api";
import type { HeroSlide } from "@/src/types";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroBanner() {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getHeroSlides().then((slides) => {
      setHeroSlides(slides);
      setLoading(false);
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, heroSlides.length]);

  if (loading || heroSlides.length === 0) return null;

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#f7f7f7]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />

          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <AnimatePresence mode="wait">
                {index === currentSlide && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    className="max-w-md"
                  >
                    <span className="block text-[12px] md:text-[15px] font-semibold tracking-[0.2em] uppercase mb-4">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-[56px] font-semibold leading-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg text-[#7e7e7e] mb-10 max-w-[320px] md:max-w-md">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.buttonLink}
                      className="inline-block bg-black text-white px-10 py-4 text-xs md:text-base font-semibold hover:bg-gray-800 transition-colors"
                    >
                      {slide.buttonText}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center items-center gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide ? (
              <div className="w-[12px] h-[12px] border border-black rounded-full flex items-center justify-center">
                <div className="w-[3px] h-[3px] bg-black rounded-full" />
              </div>
            ) : (
              <div className="w-[5px] h-[5px] bg-black rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
