"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDiscoveryData } from '@/src/services/api';
import type { DiscoveryData } from '@/src/types';
import { motion } from 'framer-motion';

const DiscoverySection = () => {
  const [data, setData] = useState<DiscoveryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDiscoveryData().then(setData).finally(() => setLoading(false));
  }, []);

  if (loading || !data) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="container py-16 md:py-24 text-center"
    >
      <div className="max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[40px] font-semibold  mb-4">
          {data.heading}
        </h2>
        <p className="text-[#7e7e7e] text-sm md:text-[18px] leading-relaxed px-4">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 text-center">
        {data.items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <Link href={item.linkUrl} className="block overflow-hidden mb-6">
              <div className="relative aspect-[16/9]  overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>

            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-semibold  mb-4">
                {item.title}
              </h3>
              <Link
                href={item.linkUrl}
                className="group/link flex items-center gap-2  font-semibold  transition-colors"
              >
                {item.linkText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DiscoverySection;
