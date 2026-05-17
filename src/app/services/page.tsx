"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ChartLineUp, Database, HardDrives, Headset, DeviceMobile } from "@phosphor-icons/react";
import Link from "next/link";

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <Link href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">SERVICES</span>
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors duration-300">
          START A PROJECT
        </Link>
      </nav>

      <section className="relative px-6 pt-48 pb-32 md:px-12 md:pt-64 md:pb-48 max-w-7xl mx-auto">
        <div className="absolute inset-0 max-w-full overflow-hidden pointer-events-none -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/40 blur-[120px]"
          />
        </div>

        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl">
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white"
          >
            Engineering scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Web Architectures.
            </span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-slate-400 max-w-[65ch] leading-relaxed"
          >
            We deploy modern Javascript ecosystems—Next.js, React, and robust backend microservices. SEO optimized at the edge, meticulously engineered for performance.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 grid-flow-dense"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden md:col-span-2 md:row-span-2">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform">
              <Code size={120} weight="thin" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[300px]">
              <h2 className="text-3xl tracking-tight text-white mb-4">React & Next.js Ecosystems</h2>
              <p className="text-slate-400 max-w-md leading-relaxed">
                We utilize Server Components, edge caching, and static generation to build lightning-fast web applications. Top-tier core web vitals ensure high ranks on Google.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <Database size={48} weight="light" className="text-emerald-400" />
            </div>
            <h3 className="text-xl text-white mb-3">Custom CRM Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tailored internal tools and data management systems, engineered with TypeScript and high-security backend layers.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <ChartLineUp size={48} weight="light" className="text-cyan-400" />
            </div>
            <h3 className="text-xl text-white mb-3">Technical SEO</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Programmatic SEO strategies, dynamic XML sitemaps, semantic HTML, and rapid time-to-first-byte (TTFB).
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-48 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl tracking-tighter text-white mb-8">Ready to dominate your industry?</h2>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:scale-105 transition-transform duration-500 ease-out">
              Initiate Project <ArrowUpRight weight="bold" />
            </Link>
          </div>
          <div className="flex flex-col gap-6 text-slate-400 w-full max-w-md">
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Frontend Architecture</span>
              <span className="text-white">Next.js / React</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Backend & API</span>
              <span className="text-white">Node / Serverless</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Design Engineering</span>
              <span className="text-white">Framer Motion</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
