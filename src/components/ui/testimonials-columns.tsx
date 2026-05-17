"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, company }, i) => (
                <div 
                  className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-lg max-w-sm w-full hover:border-white/20 transition-colors duration-500" 
                  key={i}
                >
                  <div className="text-white/80 text-sm leading-relaxed mb-6">{text}</div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium text-white text-sm tracking-tight">{name}</div>
                    <div className="text-white/50 text-xs tracking-tight">{role}</div>
                    {company && <div className="text-white/40 text-xs tracking-tight font-light">{company}</div>}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "ZEAL MEDIA transformed our online presence completely. Their approach to SEO and web design is unmatched. Our traffic increased by 300% within 6 months.",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "Potomac Homebuyers"
  },
  {
    text: "Their custom e-commerce solution was exactly what we needed. The platform is intuitive, fast, and has doubled our conversion rates.",
    name: "Michael Chen",
    role: "Operations Director",
    company: "Luxury At Affordable"
  },
  {
    text: "The SaaS platform they built for us is rock-solid. Performance is excellent, and the team provided outstanding post-launch support.",
    name: "Emma Rodriguez",
    role: "Product Lead",
    company: "Voiceflow"
  },
  {
    text: "Exceptional frontend development. The UI/UX is beautiful and the code quality is pristine. They understand modern web standards deeply.",
    name: "Dr. Pote Vascular",
    role: "Medical Practice Owner",
    company: "Dr Pote Vascular"
  },
  {
    text: "Our construction company needed a website that matched our premium brand. ZEAL MEDIA delivered exactly that. Highly professional team.",
    name: "James Mitchell",
    role: "CEO",
    company: "Selite Construction"
  },
  {
    text: "Working with ZEAL MEDIA was a game-changer for our e-commerce store. They implemented advanced analytics and optimization strategies.",
    name: "Priya Sharma",
    role: "Marketing Manager",
    company: "Jewellery Store"
  },
  {
    text: "The NextJS and React expertise is evident in every line of code. They built a scalable platform that grows with our business.",
    name: "Vikram Patel",
    role: "Technical Director",
    company: "Renee.cl"
  },
  {
    text: "Outstanding design thinking combined with technical excellence. They don't just build websites; they create digital experiences.",
    name: "Rachel Green",
    role: "Brand Director",
    company: "MAM Originals"
  },
  {
    text: "Their understanding of performance optimization and SEO architecture is exceptional. Our site ranks #1 for all our target keywords.",
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Guru Nanak Fabrics"
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-[#050505] py-32 px-4 md:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-white/20 py-2 px-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-white/60">
              Client Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center leading-tight mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-center text-white/50 text-lg max-w-xl leading-relaxed">
            See what our clients say about working with ZEAL MEDIA. From startups to enterprises, we deliver results that speak for themselves.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
