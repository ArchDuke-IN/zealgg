"use client";

import { ArrowUpRight, Code, Eye, Graph, TerminalWindow, ArrowRight, Star, TrendingUp, Clock, Shield, Target } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { Testimonials } from "@/components/ui/testimonials-columns";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const CinematicHero = dynamic(() => import("@/components/CinematicHero").then(mod => mod.CinematicHero), { ssr: false, loading: () => <div className="min-h-[100dvh] w-full bg-[#050505]" /> });

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  protocolType: z.string().min(1, "Please select a service"),
  specifics: z.string().min(10, "Please provide more specifics"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const projects = [
  {
    name: "Renee.cl",
    url: "https://www.renee.cl/",
    category: "SaaS Platform",
    metrics: { traffic: "+280%", conversion: "+45%", speed: "98" },
    description: "Complete SaaS platform redesign with Next.js, resulting in 280% traffic increase",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
  },
  {
    name: "Voiceflow",
    url: "https://www.voiceflow.com/",
    category: "AI Platform",
    metrics: { traffic: "+340%", conversion: "+62%", speed: "96" },
    description: "AI-powered conversational platform with optimized user flows and conversion paths",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "Potomac Homebuyers",
    url: "https://potomachomebuyers.com/",
    category: "Real Estate",
    metrics: { traffic: "+420%", conversion: "+89%", speed: "99" },
    description: "Local SEO domination — #1 ranking for all target keywords in 3 months",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/20",
  },
  {
    name: "Dr Pote Vascular",
    url: "https://drpotevascular.com/",
    category: "Healthcare",
    metrics: { traffic: "+190%", conversion: "+73%", speed: "97" },
    description: "Medical practice website with appointment booking and local SEO optimization",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
  },
  {
    name: "Selite Construction",
    url: "https://seliteconstructionllc.com/",
    category: "Construction",
    metrics: { traffic: "+310%", conversion: "+55%", speed: "95" },
    description: "Premium construction company website with project showcase and lead generation",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20",
  },
  {
    name: "MAM Originals",
    url: "https://mamoriginals.com/",
    category: "E-commerce",
    metrics: { traffic: "+260%", conversion: "+41%", speed: "94" },
    description: "E-commerce platform with 2.3x conversion rate improvement and mobile optimization",
    color: "from-pink-500/20 to-pink-500/5",
    borderColor: "border-pink-500/20",
  },
];

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed in 4-8 weeks depending on complexity. A simple marketing site takes 2-4 weeks, while complex web applications or e-commerce platforms may take 8-12 weeks. We provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Will my website rank on Google?",
    answer: "Every website we build is engineered for search engine visibility from day one. We implement technical SEO, structured data, Core Web Vitals optimization, and semantic HTML. Most clients see significant ranking improvements within 2-3 months of launch.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We offer monthly maintenance packages that include performance monitoring, security updates, content updates, and SEO optimization. We treat every client relationship as a long-term partnership.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in Next.js, React, TypeScript, and modern JavaScript ecosystems. For e-commerce, we work with Shopify Plus and headless commerce solutions. Our backends use Node.js, Python, and cloud-native architectures.",
  },
  {
    question: "How much does a website cost?",
    answer: "Projects typically range from $5,000 to $50,000+ depending on scope and complexity. We provide detailed proposals after understanding your requirements. Every investment is designed to deliver measurable ROI through increased traffic and conversions.",
  },
];

export default function HomePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        reset();
      } else {
        toast.error(result.error || 'Failed to send. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <main ref={containerRef} className="bg-[#050505] text-white min-h-[100dvh] font-sans selection:bg-white selection:text-black overflow-hidden relative">
      <h1 className="sr-only">ZEAL MEDIA — Web Development & SEO Agency</h1>
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-[0%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[130px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[140px] mix-blend-screen opacity-50" />
      </motion.div>

      <Navbar />

      <CinematicHero />

      {/* Trust Bar */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full border-y border-white/5 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/30 text-xs uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2"><Star className="text-emerald-400" weight="fill" size={14} /> 50+ Websites Delivered</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span className="flex items-center gap-2"><TrendingUp className="text-emerald-400" size={14} /> 300% Avg Traffic Growth</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span className="flex items-center gap-2"><Target className="text-emerald-400" size={14} /> 98 PageSpeed Score</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span className="flex items-center gap-2"><Shield className="text-emerald-400" size={14} /> Next.js Certified</span>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">01 / What We Build</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-6 w-full">
          <Link href="/services" className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-8 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-colors group">
            <div className="h-full w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-b from-[#0A0A0A] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col justify-between items-start min-h-[400px]">
              <TerminalWindow weight="light" className="w-12 h-12 text-white/30 mb-12" />
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 group-hover:text-emerald-400 transition-colors">Next.js & React Development</h2>
                <p className="text-white/50 text-lg max-w-md leading-relaxed font-light">
                  High-performance websites built with Server Components, edge caching, and static generation. Every project optimized for Core Web Vitals and search rankings.
                </p>
                <span className="text-emerald-400 text-xs uppercase tracking-[0.2em] mt-6 inline-flex items-center gap-2">View Services <ArrowRight weight="bold" className="w-3 h-3" /></span>
              </div>
            </div>
          </Link>

          <Link href="/services" className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-4 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-colors group">
            <div className="h-full w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-b from-[#0A0A0A] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col justify-between items-start min-h-[400px]">
              <Graph weight="light" className="w-10 h-10 text-white/30 mb-8" />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-4 group-hover:text-emerald-400 transition-colors">Technical SEO</h2>
                <p className="text-white/50 leading-relaxed font-light">
                  SEO built into every line of code. Structured data, sitemaps, canonical tags, and Core Web Vitals optimization from day one.
                </p>
              </div>
            </div>
          </Link>

          <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] md:col-span-12 p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <div className="w-full rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-br from-[#0A0A0A] to-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <Eye weight="light" className="w-10 h-10 text-white/30 mb-8" />
                <h2 className="text-3xl font-semibold tracking-tight mb-6">E-commerce & Custom Platforms</h2>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  From Shopify stores to headless commerce and custom SaaS platforms. We build digital products that scale with your business and dominate search results.
                </p>
              </div>
              <Link href="/contact" className="shrink-0 w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden bg-black/20 hover:border-emerald-500/30 transition-colors group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute inset-2 border border-white/5 rounded-full transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-4 border border-white/5 rounded-full transition-transform duration-1000 group-hover:scale-110" />
                <Code weight="thin" className="w-12 h-12 text-white/20 group-hover:text-emerald-400 transition-colors duration-700 relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase - NEW: Creative Our Work Section */}
      <section id="work" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">02 / Results That Speak</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
            <Clock size={14} />
            <span>Avg. project ROI: 340% within 6 months</span>
          </div>
        </div>

        {/* Featured Project - Large Card */}
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] mb-8">
          <a
            href={projects[activeProject].url}
            target="_blank"
            rel="noreferrer"
            className="group block p-1.5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-700"
          >
            <div className={`rounded-[calc(2.5rem-0.375rem)] bg-gradient-to-br ${projects[activeProject].color} p-10 md:p-16 min-h-[400px] flex flex-col md:flex-row justify-between gap-12`}>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-4 block">{projects[activeProject].category}</span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 group-hover:text-emerald-400 transition-colors duration-500">
                  {projects[activeProject].name}
                </h3>
                <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-8">
                  {projects[activeProject].description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 inline-flex items-center gap-2">
                    View Live Project <ArrowUpRight weight="bold" className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="flex md:flex-col gap-6 md:gap-8 shrink-0">
                <div className="text-center md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400">{projects[activeProject].metrics.traffic}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Traffic Growth</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400">{projects[activeProject].metrics.conversion}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Conversion Lift</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-amber-400">{projects[activeProject].metrics.speed}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">PageSpeed Score</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Project Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProject(idx)}
              className={`p-4 rounded-2xl border transition-all duration-500 text-left ${
                activeProject === idx
                  ? `bg-white/[0.05] ${project.borderColor} scale-[1.02]`
                  : 'bg-white/[0.01] border-white/5 hover:border-white/15'
              }`}
            >
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1">{project.category}</div>
              <div className={`text-sm font-medium ${activeProject === idx ? 'text-emerald-400' : 'text-white/70'}`}>{project.name}</div>
              <div className="text-xs text-emerald-400/60 mt-1">{project.metrics.traffic}</div>
            </button>
          ))}
        </div>

        {/* Additional Projects List */}
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(2).map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1">{project.category}</div>
                  <div className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors">{project.name}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-emerald-400">{project.metrics.traffic}</div>
                    <div className="text-[10px] text-white/30">traffic</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors duration-500" weight="light" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-500 ease-out">
            Get Results Like These <ArrowRight weight="bold" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">03 / Latest Insights</span>
        </div>

        <div className="flex flex-col gap-6">
          {[
            { date: "MAY 10, 2026", title: "How to Choose the Right Web Development Agency in 2026", category: "Web Development", slug: "web-development-agency-guide-2026" },
            { date: "APR 28, 2026", title: "Next.js SEO Optimization: The Complete Technical Guide", category: "Technical SEO", slug: "nextjs-seo-optimization-guide" },
            { date: "APR 15, 2026", title: "Website Design Trends 2026: What Top Agencies Are Building", category: "Design", slug: "website-design-trends-2026" }
          ].map((insight, i) => (
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

        <div className="text-center mt-12 reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors">
            View All Insights <ArrowRight weight="bold" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] p-1.5 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/10 via-white/[0.02] to-cyan-500/10 border border-white/10 backdrop-blur-md">
          <div className="rounded-[calc(2.5rem-0.375rem)] bg-[#0A0A0A] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">Ready to rank #1 on Google?</h2>
              <p className="text-white/50 text-lg max-w-lg">
                Let&apos;s build a website that not only looks incredible but dominates search results and converts visitors into customers.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 group relative inline-flex items-center justify-center gap-4 px-8 py-5 rounded-full bg-white text-black hover:bg-slate-200 transition-all duration-500 overflow-hidden active:scale-[0.98]">
              <span className="font-bold text-[11px] uppercase tracking-[0.2em]">Start Your Project</span>
              <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - AI SEO + Conversion */}
      <section className="py-32 px-4 md:px-8 max-w-4xl mx-auto w-full border-t border-white/5 relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqData.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-4 block">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">Everything You Need to Know</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-medium text-white pr-8">{faq.question}</h3>
                  <span className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </div>
                {openFaq === i && (
                  <p className="text-slate-400 mt-6 leading-relaxed text-base">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-40 px-4 md:px-8 max-w-5xl mx-auto w-full border-t border-white/5 relative z-10">
        <div className="reveal translate-y-16 opacity-0 blur-[10px] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] p-1.5 rounded-[3vw] bg-white/[0.015] border border-white/5 overflow-hidden backdrop-blur-2xl">
          <div className="rounded-[calc(3vw-0.375rem)] bg-[#070707] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 mb-6 block">04 / Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">LET&apos;S BUILD TOGETHER.</h2>
              <p className="text-white/40 text-lg font-light">Tell us about your project. We respond within 24 hours with a detailed proposal.</p>
            </div>

            <Toaster theme="dark" position="bottom-right" />
            <form className="space-y-6 relative z-10 max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                    <input type="text" placeholder="First Name" {...register("firstName")} className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" aria-label="First name" />
                  </div>
                  {errors.firstName && <span className="text-red-400 text-xs px-2">{errors.firstName.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                    <input type="text" placeholder="Last Name" {...register("lastName")} className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" aria-label="Last name" />
                  </div>
                  {errors.lastName && <span className="text-red-400 text-xs px-2">{errors.lastName.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                  <input type="email" placeholder="Email Address" {...register("email")} className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50" aria-label="Email address" />
                </div>
                {errors.email && <span className="text-red-400 text-xs px-2">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors relative">
                  <select {...register("protocolType")} defaultValue="" className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white/50 text-sm focus:outline-none appearance-none focus:ring-1 focus:ring-emerald-500/50" aria-label="Service type">
                    <option value="" disabled>What do you need?</option>
                    <option value="website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="webapp">Custom Web Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.protocolType && <span className="text-red-400 text-xs px-2">{errors.protocolType.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-[2px] rounded-[2rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
                  <textarea rows={4} placeholder="Tell us about your project..." {...register("specifics")} className="w-full h-full bg-[#0A0A0A] rounded-[calc(2rem-2px)] px-6 py-6 text-white placeholder-white/30 text-sm focus:outline-none resize-none focus:ring-1 focus:ring-emerald-500/50" aria-label="Project details" />
                </div>
                {errors.specifics && <span className="text-red-400 text-xs px-2">{errors.specifics.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="group w-full relative flex items-center justify-between gap-6 px-8 py-5 rounded-full bg-white text-black mt-10 active:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="font-semibold text-[11px] uppercase tracking-[0.2em]">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-black/20 group-hover:scale-110 group-hover:translate-x-1">
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
