"use client";

import React from 'react';
import Link from 'next/link';
import { footerData } from '@/public/datas/footer';




const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-16 pb-8 md:pt-20 md:pb-12 border-t border-gray-100">

      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-12 mb-16 md:mb-20">
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-[18px] font-bold text-gray-900">{footerData.company.title}</h4>
            <div className="space-y-4 text-gray-500 text-[14px]">
              <p className="leading-relaxed">
                Find a location nearest you. See{' '}
                <Link href={footerData.company.storeLink} className="text-gray-900 font-bold underline underline-offset-4">
                  Our Stores
                </Link>
              </p>
              <p className="text-gray-900 font-bold text-[16px]">{footerData.company.phone}</p>
              <p>{footerData.company.email}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-[18px] font-bold text-gray-900">{footerData.usefulLinks.title}</h4>
            <ul className="space-y-4">
              {footerData.usefulLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h4 className="text-[18px] font-bold text-gray-900">{footerData.information.title}</h4>
            <ul className="space-y-4">
              {footerData.information.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-medium text-gray-900 leading-tight">
              {footerData.newsletter.title}
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              {footerData.newsletter.description}
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder={footerData.newsletter.placeholder}
                className="flex-grow bg-white border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:border-gray-900"
              />
              <button className="bg-black text-white px-8 py-3 text-[14px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                {footerData.newsletter.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-200 gap-8">
          {/* Copyright & Socials (Mobile stacked order adjustment) */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-auto">
            <p className="text-gray-400 text-[13px]">{footerData.copyright}</p>
            
            <div className="flex items-center gap-6">
              <Link href="https://instagram.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </Link>
              {/* TikTok Icon Svg */}

              <Link href="https://tiktok.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </Link>
              <Link href="https://facebook.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
            </div>

          </div>

          {/* Logo Center */}
          <div className="order-first md:order-none">
            <span className="text-[28px] md:text-[34px] font-medium tracking-[0.1em] text-gray-900 uppercase">
              {footerData.logo}
            </span>
          </div>

          <div className="hidden md:block w-10"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
