"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function BlogPost() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <Link href="/insights" className="flex items-center gap-3 text-sm font-medium hover:text-white transition-colors duration-300">
          <ArrowLeft /> BACK TO INSIGHTS
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8 text-xs font-mono uppercase tracking-widest text-emerald-500">
              <span>Web Development</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-500">24 Sep 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.1] text-white">
              Headless CMS Architecture for Enterprise: Scaling Global Content Delivery.
            </h1>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-emerald-400 prose-img:rounded-3xl"
        >
          <div className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden mb-16 relative">
             <img src="https://picsum.photos/seed/server/1920/1080" alt="Server room" className="w-full h-full object-cover filter grayscale opacity-80" />
          </div>

          <p className="lead text-2xl text-slate-300 leading-relaxed mb-12">
            The traditional monolithic CMS architecture is failing modern enterprise requirements. When delivering omni-channel experiences globally, decoupling the rendering layer from content management is no longer a luxury—it's a technical mandate.
          </p>

          <h2 className="text-3xl text-white mt-16 mb-8">The Monolith Bottleneck</h2>
          <p className="text-slate-400 mb-8">
            Standard systems tightly couple the frontend templating with backend database management. This limits the ability to push high-end Javascript experiences to the edge. Enterprise web development thrives on Next.js, allowing the edge network to serve cached static assets instantly, a paradigm impossible with legacy monoliths.
          </p>

          <h2 className="text-3xl text-white mt-16 mb-8">Performance & SEO Implications</h2>
          <p className="text-slate-400 mb-8">
            SEO rankings fundamentally rely on Core Web Vitals—specifically LCP (Largest Contentful Paint) and TTFB (Time to First Byte). By migrating to a headless architecture powered by a React Server Component pipeline, we observe an average TTFB reduction of 400ms.
          </p>

          <blockquote className="border-l-2 border-emerald-500 pl-8 my-16 text-2xl text-white italic">
            "An enterprise deploying a headless CMS on the edge essentially nullifies traditional server response latency."
          </blockquote>
        </motion.div>
      </article>
    </main>
  );
}
