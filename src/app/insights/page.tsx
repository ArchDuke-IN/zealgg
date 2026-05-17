"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

// Placeholder data representing a high-end blog structure
const POSTS = [
  {
    id: 1,
    title: "The Death of Static Content: Why Advanced Motion Correlates with SaaS Conversions.",
    category: "Design Engineering",
    date: "10 Oct 2026",
    slug: "death-of-static-content",
    imageSeed: "architecture"
  },
  {
    id: 2,
    title: "Headless CMS Architecture for Enterprise: Scaling Global Content Delivery.",
    category: "Web Development",
    date: "24 Sep 2026",
    slug: "headless-cms-enterprise",
    imageSeed: "server"
  },
  {
    id: 3,
    title: "Next.js 15: Optimizing React Server Components for Technical SEO.",
    category: "Performance & SEO",
    date: "12 Aug 2026",
    slug: "nextjs-seo-optimization",
    imageSeed: "abstract"
  }
];

export default function InsightsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <Link href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">INSIGHTS</span>
        </Link>
        <div className="flex gap-8 items-center">
            <Link href="/services" className="text-sm font-medium hover:text-white transition-colors duration-300 hidden md:block">
            SERVICES
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors duration-300">
            CONTACT
            </Link>
        </div>
      </nav>

      <section className="px-6 pt-48 pb-20 md:px-12 md:pt-64 md:pb-32 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl">
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-7xl font-semibold tracking-tighter leading-none text-white"
          >
            Signal Intelligence.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg text-slate-400 max-w-[50ch] leading-relaxed"
          >
            Engineering deep-dives, architectural post-mortems, and strategy protocols for modern web development.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {POSTS.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link 
                href={`/insights/${post.slug}`} 
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-6 md:p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-white/15 transition-colors duration-500"
              >
                <div className="w-full md:w-64 h-40 md:h-32 shrink-0 rounded-2xl overflow-hidden relative filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={`https://picsum.photos/seed/${post.imageSeed}/800/600`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-slate-500">
                    <span className="text-emerald-500">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300 max-w-2xl">
                    {post.title}
                  </h2>
                </div>
                
                <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowRight weight="bold" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
