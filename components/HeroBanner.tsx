"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/public/datas/homepage";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#f7f7f7]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url(${slide.backgroundImage})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-12">
              <div className={`max-w-xl transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}>
                <span className="block text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-gray-800 uppercase mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg text-gray-600 mb-10 max-w-[320px] md:max-w-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="inline-block bg-black text-white px-10 py-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
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
