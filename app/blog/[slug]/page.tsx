"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { blogData } from '@/public/datas/homepage';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const postIndex = blogData.posts.findIndex(p => p.slug === slug);
  const post = blogData.posts[postIndex];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-medium">Post not found</h1>
      </div>
    );
  }

  // Navigation logic
  const prevPost = postIndex > 0 ? blogData.posts[postIndex - 1] : null;
  const nextPost = postIndex < blogData.posts.length - 1 ? blogData.posts[postIndex + 1] : null;

  // Related posts (excluding current)
  const relatedPosts = blogData.posts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] py-4">
        <div className="container flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.1em] text-neutral-500 overflow-hidden whitespace-nowrap text-ellipsis px-4">
          <Link href="/" className="hover:text-black transition-colors shrink-0">Home</Link>
          <span className="text-neutral-300 shrink-0">—</span>
          <Link href="/blog" className="hover:text-black transition-colors shrink-0">News</Link>
          <span className="text-neutral-300 shrink-0">—</span>
          <span className="text-black font-medium truncate">{post.title}</span>
        </div>
      </div>

      <article className="container max-w-5xl mx-auto py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#F5F5F5] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-black mb-6">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-medium text-black mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-[13px] text-neutral-400">
            <span>By <span className="text-black font-medium">{post.author}</span></span>
            <span className="text-neutral-300">|</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 md:mb-16 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="text-neutral-600 text-base md:text-[17px] leading-relaxed space-y-8">
            <p>{post.content}</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
              provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>

          {/* Navigation - Related Posts Links */}
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

      {/* Related Posts Section */}
      <section className="bg-white py-20 md:py-32 border-t border-neutral-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-medium text-black text-center mb-16 md:mb-20">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.id} href={`/blog/${rPost.slug}`} className="group cursor-pointer">
                <article>
                  <div className="relative aspect-square mb-6 overflow-hidden bg-neutral-100">
                    <Image
                      src={rPost.image}
                      alt={rPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-neutral-400 mb-2">
                    <span className="group-hover:text-black transition-colors">{rPost.category}</span>
                    <span>|</span>
                    <span>{rPost.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
