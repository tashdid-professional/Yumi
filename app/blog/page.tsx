"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/public/datas/blogs';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] py-4">
        <div className="container flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.1em] text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-neutral-300">—</span>
          <span className="text-black font-medium">Blogs</span>
        </div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-20 md:py-24 container"
      >
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-[40px] font-semibold text-black">
            Blogs
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="wait">
            {currentBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: (index % 3) * 0.1 
                }}
              >
                <Link href={`/blog/${post.slug}`} className="group cursor-pointer">
                  <article>
                    <div className="relative mb-8 aspect-16/9 overflow-hidden bg-neutral-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <span className="bg-white px-4 py-1 text-[11px] uppercase tracking-wider text-black font-medium whitespace-nowrap shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 group-hover:text-neutral-600 transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <div className="flex items-center justify-center gap-2 text-[13px] text-neutral-400">
                        <span>By <span className="text-black font-medium">{post.author}</span></span>
                        <span className="text-neutral-300">|</span>
                        <span>{post.month} {post.day}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-24 md:mt-32 flex justify-center items-center gap-4">
            <button 
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 transition-all ${
                currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-neutral-400 hover:border-black hover:text-black'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                    currentPage === number 
                      ? "bg-black text-white" 
                      : "border border-transparent text-neutral-400 hover:text-black"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            <button 
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 transition-all ${
                currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-neutral-400 hover:border-black hover:text-black'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        )}
      </motion.section>
    </main>
  );
}

