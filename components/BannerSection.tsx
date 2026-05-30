"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { promoBanners } from '@/public/datas/homepage';
import { motion } from 'framer-motion';

const BannerSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="container py-12 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promoBanners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative min-h-[400px] md:min-h-[480px] flex items-center overflow-hidden group"
          >
            {/* Background Image */}
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Optional Overlay to maintain brand color and readability */}
            <div className={`absolute inset-0 ${banner.bgColor} opacity-20 group-hover:opacity-10 transition-opacity duration-700`} />

            {/* Content Container */}
            <div className="relative z-10 w-full md:w-[75%] p-8 md:p-14">
              {banner.subtitle && (
                <span className="block text-[12px] md:text-[15px] font-semibold tracking-[1.5px] uppercase mb-4 drop-shadow-sm">
                  {banner.subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-[34px] font-semibold leading-tight mb-8  drop-shadow-md">
                {banner.title}
              </h2>
              {banner.description && (
                <p className="text-sm md:text-lg mb-10 max-w-[340px] leading-relaxed font-medium">
                  {banner.description}
                </p>
              )}
              <Link
                href={banner.buttonLink}
                className="inline-block bg-white text-black px-8 py-3.5 text-[16px] font-semibold  hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                {banner.buttonText}
              </Link>
            </div>
          </div>
        ))}

      </div>

    </motion.section>
  );
};

export default BannerSection;
