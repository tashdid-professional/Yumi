"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTermsConditionsData } from '@/src/services/api';
import type { TermsConditionsData } from '@/src/types';
import { motion } from 'framer-motion';

export default function TermsConditionsPage() {
  const [data, setData] = useState<TermsConditionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTermsConditionsData().then(setData).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-black font-serif text-2xl animate-pulse uppercase tracking-[0.2em]">Loading...</div>
      </main>
    );
  }

  if (!data) return null;

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[#F8F8F8] py-4">
        <div className="container flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.1em] text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-neutral-300">—</span>
          <span className="text-black font-medium">{data.title}</span>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-20 md:py-32 container max-w-4xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-5xl font-medium text-black mb-6">
            {data.title}
          </h1>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            Last Updated: {data.lastUpdated}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {data.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-black">
                {section.title}
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
