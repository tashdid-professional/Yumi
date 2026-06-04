"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFAQData } from '@/src/services/api';
import type { FAQData } from '@/src/types';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const [data, setData] = useState<FAQData | null>(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  useEffect(() => {
    getFAQData().then(setData).finally(() => setLoading(false));
  }, []);

  const toggleAccordion = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
          <span className="text-black font-medium">FAQ</span>
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
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="space-y-16">
          {data.categories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <h2 className="text-xl md:text-2xl font-medium text-black border-b border-neutral-100 pb-4">
                {category.name}
              </h2>
              <div className="divide-y divide-neutral-100">
                {category.questions.map((q) => (
                  <div key={q.id} className="py-6">
                    <button
                      onClick={() => toggleAccordion(q.id)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className={`text-[17px] font-medium transition-colors ${openIndex === q.id ? 'text-black' : 'text-neutral-600 group-hover:text-black'}`}>
                        {q.question}
                      </span>
                      <span className={`text-2xl transition-transform duration-300 ${openIndex === q.id ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === q.id ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-neutral-500 text-[15px] leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
