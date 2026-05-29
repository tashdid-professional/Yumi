"use client";

import React from 'react';
import Link from 'next/link';
import { contactData } from '@/public/datas/homepage';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] py-4">
        <div className="container flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.1em] text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-neutral-300">—</span>
          <span className="text-black font-medium">Contact Us</span>
        </div>
      </div>

      {/* Keep In Touch Section */}
      <section className="py-20 md:py-26 container text-center">
        <div className="max-w-3xl mx-auto mb-10 ">
          <h1 className="text-3xl md:text-[40px] font-semibold text-black mb-8">
            {contactData.header.title}
          </h1>
          <p className="text-[#7e7e7e] text-sm md:text-[18px] leading-relaxed max-w-xl mx-auto font-medium">
            {contactData.header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 text-left max-w-2xl mx-auto">
          {/* Address */}
          <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-6">{contactData.address.title}</h3>
              <div className="text-[#7e7e7e] text-[14px] leading-relaxed space-y-4">
                <p>
                  {contactData.address.lines[0]}<br />
                  {contactData.address.lines[1]}
                </p>
                <p>
                  {contactData.address.lines[2]}<br />
                  {contactData.address.lines[3]}
                </p>
                
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-6">{contactData.contact.title}</h3>
              <div className="text-[#7e7e7e] text-[14px] leading-relaxed space-y-4">
                <p>Mobile: <span className="text-black font-medium">{contactData.contact.mobile}</span></p>
                <p>Hotline: <span className="text-black font-medium">{contactData.contact.hotline}</span></p>
                <p>E-mail: <span className="text-black font-medium text-[13px]">{contactData.contact.email}</span></p>
              </div>
            </div>
          </div>

     
        </div>
      </section>

      {/* Send A Message Section */}
      <section className="pt-10 pb-26 bg-white border-t border-neutral-100">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-semibold text-black text-center mb-16">
            {contactData.form.title}
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#f8f8f8] border-none px-6 py-4 text-[14px] outline-none focus:ring-1 focus:ring-neutral-200 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#f8f8f8] border-none px-6 py-4 text-[14px] outline-none focus:ring-1 focus:ring-neutral-200 transition-all"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={8}
              className="w-full bg-[#f8f8f8] border-none px-6 py-6 text-[14px] outline-none focus:ring-1 focus:ring-neutral-200 transition-all resize-none"
            />
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-black text-white px-12 py-4 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all active:scale-95"
              >
                {contactData.form.buttonText}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
