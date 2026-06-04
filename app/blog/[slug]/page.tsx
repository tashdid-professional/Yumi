"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getBlogs } from '@/src/services/api';
import type { Blog } from '@/src/types';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs().then(setBlogs).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-black font-serif text-2xl animate-pulse uppercase tracking-[0.2em]">Loading...</div>
      </div>
    );
  }

  const postIndex = blogs.findIndex(p => p.slug === slug);
  const post = blogs[postIndex];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-medium">Post not found</h1>
      </div>
    );
  }

  const prevPost = postIndex > 0 ? blogs[postIndex - 1] : null;
  const nextPost = postIndex < blogs.length - 1 ? blogs[postIndex + 1] : null;

  const relatedPosts = blogs
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[#F8F8F8] py-4">
        <div className="container flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.1em] text-neutral-500 overflow-hidden whitespace-nowrap text-ellipsis px-4">
          <Link href="/" className="hover:text-black transition-colors shrink-0">Home</Link>
          <span className="text-neutral-300 shrink-0">—</span>
          <Link href="/blog" className="hover:text-black transition-colors shrink-0">Blogs</Link>
          <span className="text-neutral-300 shrink-0">—</span>
          <span className="text-black font-medium truncate">{post.title}</span>
        </div>
      </div>

      <article className="container max-w-5xl mx-auto py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#F5F5F5] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-black mb-6">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-[40px] font-semibold text-black mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-[13px] text-neutral-400">
            <span>By <span className="text-black font-medium">{post.author}</span></span>
            <span className="text-neutral-300">|</span>
            <span>{post.month} {post.day}</span>
          </div>
        </div>

        <div className="relative aspect-[16/9] mb-12 md:mb-16 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-justify mx-auto">
          <div className="text-neutral-600 text-base md:text-[17px] leading-relaxed space-y-8">
            <p>{post.description}</p>
          </div>

          <div className="mt-20 py-10 border-t border-b border-neutral-100 flex flex-col md:flex-row justify-between gap-10">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="flex items-center gap-6 group max-w-xs transition-all">
                <div className="shrink-0 text-neutral-400 group-hover:text-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Previous</span>
                  <p className="text-[14px] font-medium text-black line-clamp-2 leading-snug">{prevPost.title}</p>
                </div>
              </Link>
            )}

            <div className="flex-1 hidden md:block" />

            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="flex items-center justify-end text-right gap-6 group max-w-xs transition-all">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Next</span>
                  <p className="text-[14px] font-medium text-black line-clamp-2 leading-snug">{nextPost.title}</p>
                </div>
                <div className="shrink-0 text-neutral-400 group-hover:text-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>
      </article>

      <section className="bg-white py-20 md:py-32 border-t border-neutral-100">
        <div className="container">
          <h2 className="text-3xl md:text-[34px] font-semibold text-black text-center mb-16 md:mb-20">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.id} href={`/blog/${rPost.slug}`} className="group cursor-pointer">
                <article>
                  <div className="relative aspect-16/9 mb-6 overflow-hidden bg-neutral-100">
                    <Image
                      src={rPost.image}
                      alt={rPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-neutral-400 mb-3">
                    <span className="group-hover:text-black transition-colors">{rPost.category}</span>
                    <span>|</span>
                    <span>{rPost.month} {rPost.day}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black leading-snug group-hover:text-neutral-600 transition-colors">
                    {rPost.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
