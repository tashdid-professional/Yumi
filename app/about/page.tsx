"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAboutData } from '@/src/services/api';
import type { AboutData } from '@/src/types';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutData().then(setData).finally(() => setLoading(false));
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[500px] md:h-[550px] flex items-center overflow-hidden bg-white"
      >
        <div className="container relative z-10 lg:pl-30">
          <div className="max-w-2xl">
             <span className="text-[15px] font-semibold uppercase tracking-[1.5px] text-black mb-8 block opacity-80">
                {data.hero.subtitle}
             </span>
             <h1 className="text-5xl md:text-[56px] font-semibold text-black leading-[1.1] tracking-tight">
                {data.hero.title}
             </h1>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none">
           <Image
             src={data.hero.backgroundImage}
             alt="About Hero"
             fill
             className="object-cover md:object-right opacity-90"
             priority
           />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-32 md:py-42 container text-center"
      >
         <div className="max-w-4xl mx-auto md:space-y-10">
            <div className="flex justify-center">
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10C30 10 24 20 24 28C24 34 28 38 30 38C32 38 36 34 36 28C36 20 30 10 30 10Z" fill="#A8BCA1"/>
                  <path d="M18 25C18 25 12 33 12 40C12 45 15 48 18 48C21 48 24 45 24 40C24 33 18 25 18 25Z" fill="#A8BCA1" opacity="0.5"/>
                  <path d="M42 25C42 25 48 33 48 40C48 45 45 48 42 48C39 48 36 45 36 40C36 33 42 25 42 25Z" fill="#A8BCA1" opacity="0.5"/>
               </svg>
            </div>
            <h2 className="text-3xl md:text-[34px] font-semibold text-black leading-[1.2] max-w-xl mx-auto px-4">
               {data.missionStatement.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-[#7e7e7e] font-medium text-[15px] md:text-[17px] leading-relaxed px-4 md:px-0 opacity-90">
                 {data.missionStatement.description}
              </p>
            </div>
         </div>
      </motion.section>

      <section className="pb-24 md:pb-44 space-y-20 lg:pl-30">
         {data.sections.map((section) => (
            <motion.div
               key={section.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="container"
            >
               <div className={`flex flex-col md:flex-row items-center gap-12 `}>
                  <div className={`relative aspect-[5/4] w-full md:w-1/2 overflow-hidden ${section.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                     <Image
                       src={section.image}
                       alt={section.title}
                       fill
                       className="object-cover"
                     />
                  </div>
                  <div className={`w-full md:w-1/2 space-y-6 md:space-y-8 ${section.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                     <h2 className="text-3xl md:text-[44px] font-medium text-black leading-tight">
                        {section.title}
                     </h2>
                     <p className="text-neutral-500 text-sm md:text-[15px] leading-relaxed max-w-lg">
                        {section.description}
                     </p>
                  </div>
               </div>
            </motion.div>
         ))}
      </section>
    </main>
  );
}
