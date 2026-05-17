"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "@phosphor-icons/react"

function StarParticles(props: any) {
  const ref = useRef<any>()
  
  // Generate random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#34d399"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 3D WebGL Background Engine */}
      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-[#050505] via-[#050505] to-[#0A0A0A]">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-10" />
         
         <div className="absolute inset-0 z-0 opacity-80 h-[100vh]">
          <Canvas camera={{ position: [0, 0, 1] }}>
             <StarParticles />
          </Canvas>
         </div>

         {/* Cinematic overlay gradients */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 h-full w-full" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.05)_0%,transparent_60%)] z-10" />
      </div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-20"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Award Winning Digital Agency</span>
        </div>

        <motion.h1 
          className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-white leading-[0.85] mb-8"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          ZEAL <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-white to-slate-700 italic font-light relative">
            MEDIA
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl text-slate-400 max-w-2xl font-light tracking-tight leading-relaxed mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          We engineer <span className="text-white font-medium">high-conversion SaaS</span> and dominate <span className="text-emerald-400 font-medium tracking-normal text-2xl md:text-4xl px-2">technical SEO</span> benchmarks out of the box.
        </motion.p>

        <motion.div 
          className="opacity-0 translate-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="group relative inline-flex items-center justify-center gap-6 px-10 py-6 rounded-full bg-white text-black hover:bg-slate-200 transition-all duration-500 overflow-hidden isolate shadow-[0_0_40px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95">
             <span className="relative z-10 font-bold text-xs tracking-[0.2em] uppercase">Initialize Project</span>
             <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/10 group-hover:scale-110 transition-transform duration-500">
               <ArrowUpRight weight="bold" className="w-5 h-5" />
             </span>
             <div className="absolute inset-0 bg-emerald-400 translate-y-[110%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </a>
        </motion.div>
      </motion.div>

       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards] hidden md:flex">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-emerald-500/50">Scroll Engine</span>
          <div className="w-[1px] h-24 bg-white/10 overflow-hidden relative">
             <motion.div 
                className="w-full h-1/2 bg-gradient-to-b from-emerald-400 to-transparent origin-top"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
          </div>
       </div>
    </section>
  )
}
