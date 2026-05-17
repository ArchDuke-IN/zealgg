"use client";

import { ArrowUpRight, Code, Eye, Graph, TerminalWindow, ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { Testimonials } from "@/components/ui/testimonials-columns";

const CinematicHero = dynamic(() => import("@/components/CinematicHero").then(mod => mod.CinematicHero), { ssr: false, loading: () => <div className="min-h-[100dvh] w-full bg-[#050505]" /> });

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  protocolType: z.string().min(1, "Please select a protocol"),
  specifics: z.string().min(10, "Please provide more specifics"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function HomePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100", "blur-0");
            entry.target.classList.remove("translate-y-16", "opacity-0", "blur-[10px]");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const saasWorks = [
    { name: "Renee.cl", url: "https://www.renee.cl/" },
    { name: "Voiceflow", url: "https://www.voiceflow.com/" },
    { name: "ReverseLLMs", url: "https://reversellms.com/" }
  ];

  const webdevWorks = [
    { name: "Potomac Homebuyers", url: "https://potomachomebuyers.com/" },
    { name: "Dr Pote Vascular", url: "https://drpotevascular.com/" },
    { name: "Selite Construction", url: "https://seliteconstructionllc.com/contact-us" },
    { name: "Guru Nanak Fabrics", url: "https://gurunanakfabrics.in/" },
    { name: "Luxury At Affordable", url: "https://luxuryataffordable.myshopify.com" },
    { name: "MAM Originals", url: "https://mamoriginals.com/" },
    { name: "Jewellery Store", url: "https://jewellery-store-tau.vercel.app/" }
  ];

  const insights = [
    {
      date: "MAY 10, 2026",
      title: "How to Choose the Right Web Development Agency in 2026",
      category: "Web Development",
      slug: "web-development-agency-guide-2026"
    },
    {
      date: "APR 28, 2026",
      title: "Next.js SEO Optimization: The Complete Technical Guide",
      category: "Technical SEO",
      slug: "nextjs-seo-optimization-guide"
    },
    {
      date: "APR 15, 2026",
      title: "Website Design Trends 2026: What Top Agencies Are Building",
      category: "Design",
      slug: "website-design-trends-2026"
    }
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Protocol Transmitted successfully. Awaiting uplink.");
        reset();
      } else {
        toast.error("Failed to transmit. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <main ref={containerRef} className="bg-[#050505] text-white min-h-[100dvh] font-sans selection:bg-white selection:text-black overflow-hidden relative">
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-[0%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[130px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[140px] mix-blend-screen opacity-50" />
      </motion.div>

      {/* Floating Pill Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl px-8 py-4 flex items-center justify-between w-[90%] max-w-4xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <Link href="/" className="text-lg font-bold tracking-tight uppercase leading-none">ZEAL MEDIA</Link>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
          <a href="#expertise" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Expertise</a>
          <a href="#work" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Portfolio</a>
          <Link href="/insights" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Intelligence</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-emerald-400">Initialize</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <CinematicHero />

      {/* Expertise / Bento System */}
      <section id="expertise" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">01 / Engineering Primitives</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-6 w-full">
          <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-8 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <div className="h-full w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-b from-[#0A0A0A] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col justify-between items-start min-h-[400px]">
              <TerminalWindow weight="light" className="w-12 h-12 text-white/30 mb-12" />
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">SaaS & Protocol Design</h2>
                <p className="text-white/50 text-lg max-w-md leading-relaxed font-light">
                  From robust microservices to fluid React frontends, we sculpt platforms capable of scaling beautifully from Seed to Series C.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-4 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <div className="h-full w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-b from-[#0A0A0A] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col justify-between items-start min-h-[400px]">
              <Graph weight="light" className="w-10 h-10 text-white/30 mb-8" />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-4">SEO & Analytics</h2>
                <p className="text-white/50 leading-relaxed font-light">
                  Data-driven acquisition architecture. We embed SEO natively into the build process, capturing traffic autonomously.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-12 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <div className="w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-br from-[#0A0A0A] to-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <Eye weight="light" className="w-10 h-10 text-white/30 mb-8" />
                <h2 className="text-3xl font-semibold tracking-tight mb-6">Cinematic Frontend Development</h2>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  Websites aren&apos;t brochures; they are software. We utilize smooth bezier curves, precise spatial rhythm, and deep graphical performance to produce Apple-esque interfaces.
                </p>
              </div>
              <div className="shrink-0 group">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden bg-black/20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute inset-2 border border-white/5 rounded-full transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-4 border border-white/5 rounded-full transition-transform duration-1000 group-hover:scale-110" />
                  <Code weight="thin" className="w-12 h-12 text-white/20 group-hover:text-white transition-colors duration-700 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work System */}
      <section id="work" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-4 mb-24">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">02 / Curated Case Studies</span>
        </div>

        <div className="grid md:grid-cols-2 gap-20 w-full mb-32">
          <div className="space-y-4">
            <h3 className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] text-xs uppercase tracking-[0.2em] font-medium text-white/40 mb-8 pl-4">SaaS Platforms</h3>
            {saasWorks.map((work, idx) => (
              <a
                key={idx}
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className={`reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group flex items-center justify-between p-6 border-b border-white/5 hover:border-white/20 hover:bg-white/[0.01] hover:pl-10 cursor-pointer`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <span className="text-3xl tracking-tight font-light">{work.name}</span>
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors duration-500" weight="light" />
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] text-xs uppercase tracking-[0.2em] font-medium text-white/40 mb-8 pl-4">WebDev & SEO Architecture</h3>
            {webdevWorks.map((work, idx) => (
              <a
                key={idx}
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className={`reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group flex items-center justify-between p-6 border-b border-white/5 hover:border-white/20 hover:bg-white/[0.01] hover:pl-10 cursor-pointer`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <span className="text-xl md:text-3xl tracking-tight font-light">{work.name}</span>
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors duration-500" weight="light" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Insights / Intelligence Engine */}
      <section id="insights" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">03 / Signal Intelligence</span>
        </div>

        <div className="flex flex-col gap-6">
          {insights.map((insight, i) => (
             <div
              key={i}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors backdrop-blur-sm cursor-pointer"
             >
               <Link href={`/insights/${insight.slug}`} className="block w-full h-full"> 
                 <div className="w-full rounded-[calc(2rem-0.375rem)] bg-[#0A0A0A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                   <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full">
                      <span className="text-[10px] md:w-32 uppercase tracking-[0.2em] font-medium text-white/30 shrink-0">{insight.date}</span>
                      <h3 className="text-2xl md:text-3xl font-light tracking-tight w-full max-w-3xl group-hover:text-emerald-400 transition-colors duration-500">{insight.title}</h3>
                   </div>
                   <div className="flex items-center gap-6 shrink-0">
                      <span className="text-xs tracking-[0.1em] uppercase text-white/40 border border-white/10 px-4 py-2 rounded-full hidden md:block">{insight.category}</span>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <ArrowRight weight="light" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                 </div>
               </Link>
             </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors">
            View All Insights <ArrowRight weight="bold" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Terminal Contact Core */}
      <section id="contact" className="py-40 px-4 md:px-8 max-w-5xl mx-auto w-full relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] p-1.5 rounded-[3vw] bg-white/[0.015] border border-white/5 overflow-hidden backdrop-blur-2xl">
          <div className="rounded-[calc(3vw-0.375rem)] bg-[#070707] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 mb-6 block">04 / CRM Integration Request</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">INITIALIZE THE ENGINE.</h2>
              <p className="text-white/40 text-lg font-light">Prepare your specifications. We deploy custom digital solutions globally.</p>
            </div>

            <Toaster theme="dark" position="bottom-right" />
            <form className="space-y-6 relative z-10 max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      {...register("firstName")}
                      className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" 
                      aria-label="First name"
                    />
                  </div>
                  {errors.firstName && <span className="text-red-400 text-xs px-2">{errors.firstName.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      {...register("lastName")}
                      className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" 
                      aria-label="Last name"
                    />
                  </div>
                  {errors.lastName && <span className="text-red-400 text-xs px-2">{errors.lastName.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Official Email Identity" 
                    {...register("email")}
                    className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" 
                    aria-label="Email address"
                  />
                </div>
                {errors.email && <span className="text-red-400 text-xs px-2">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors relative">
                  <select 
                    {...register("protocolType")}
                    defaultValue="" 
                    className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white/50 text-sm focus:outline-none appearance-none focus:ring-1 focus:ring-emerald-500/50"
                    aria-label="Service type"
                  >
                    <option value="" disabled>Select Protocol Type...</option>
                    <option value="saas">SaaS Ecosystem</option>
                    <option value="ecommerce">E-commerce Evolution</option>
                    <option value="seo">SEO Dominance Campaign</option>
                    <option value="crm">Corporate CRM Portal</option>
                  </select>
                </div>
                {errors.protocolType && <span className="text-red-400 text-xs px-2">{errors.protocolType.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[2rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                  <textarea 
                    rows={4} 
                    placeholder="Protocol specifics..." 
                    {...register("specifics")}
                    className="w-full h-full bg-[#0A0A0A] rounded-[calc(2rem-2px)] px-6 py-6 text-white placeholder-white/30 text-sm focus:outline-none resize-none focus:ring-1 focus:ring-emerald-500/50"
                    aria-label="Project details"
                  ></textarea>
                </div>
                {errors.specifics && <span className="text-red-400 text-xs px-2">{errors.specifics.message}</span>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full relative flex items-center justify-between gap-6 px-8 py-5 rounded-full bg-white text-black mt-10 active:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-semibold text-[11px] uppercase tracking-[0.2em]">
                  {isSubmitting ? "Transmitting..." : "Transmit Specification"}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-black/20 group-hover:scale-110 group-hover:translate-x-1">
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Extreme Minimal Footer */}
      <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
        <div>ZEAL MEDIA / {new Date().getFullYear()}</div>
        <div className="mt-4 md:mt-0 flex gap-8">
          <Link href="/about" className="hover:text-white transition-colors duration-500">About</Link>
          <Link href="/privacy" className="hover:text-white transition-colors duration-500">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-500">Terms</Link>
        </div>
      </footer>
    </main>
  );
}
