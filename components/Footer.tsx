"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '@/public/datas/footer';
import { siteConfig } from '@/public/datas/homepage';




const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-16 pb-8 md:pt-20 md:pb-12 border-t border-gray-100">

      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-12 mb-16 md:mb-20">
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-[20px] font-semibold ">{footerData.company.title}</h4>
            <div className="space-y-4 text-[#7e7e7e] text-[15px] font-medium">
              <p className="leading-relaxed">
                Find a location nearest you.
            
                
              </p>
              <p className="text-gray-900 font-bold text-[16px]">{footerData.company.phone}</p>
              <p>{footerData.company.email}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-[20px] font-semibold ">{footerData.usefulLinks.title}</h4>
            <ul className="space-y-4">
              {footerData.usefulLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#7e7e7e] hover:text-gray-900 text-[15px] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h4 className="text-[20px] font-semibold ">{footerData.information.title}</h4>
            <ul className="space-y-4">
              {footerData.information.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#7e7e7e] hover:text-gray-900 text-[15px] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-[32px] md:text-[34px] font-semibold  leading-tight">
              {footerData.newsletter.title}
            </h2>
            <p className="text-[#7e7e7e] text-[15px] font-medium leading-relaxed">
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
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-200 gap-10">
          
          {/* Left: Copyright */}
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <p className="text-[#7e7e7e] text-[15px] font-medium">
              © Yumi 2026 | Powered by <a href="https://thebigdogdigital.com/" className="text-[#7e7e7e] hover:text-gray-900 font-bold" target="_blank">BigDog Digital</a>
            </p>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.png" 
                alt={siteConfig.name} 
                width={100} 
                height={40} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right: Social Links */}
          <div className="flex-1 flex justify-center md:justify-end items-center gap-6 order-3">
            <Link href="https://instagram.com" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
            <Link href="https://tiktok.com" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </Link>
            <Link href="https://facebook.com" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
