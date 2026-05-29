import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { discoveryData } from '@/public/datas/homepage';


const DiscoverySection = () => {
  return (
    <section className="container py-16 md:py-24 text-center">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
          {discoveryData.heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed px-4">
          {discoveryData.description}
        </p>
      </div>

      {/* Discovery Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center">
        {discoveryData.items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* Image Wrapper */}
            <Link href={item.linkUrl} className="block overflow-hidden mb-6">
              <div className="relative aspect-[16/9] md:aspect-[3/2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
                {item.title}
              </h3>
              <Link
                href={item.linkUrl}
                className="group/link flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-900 hover:text-gray-600 transition-colors"
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
    </section>
  );
};

export default DiscoverySection;
