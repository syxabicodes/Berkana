"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Reshape Capital Markets",
    description:
      "Women control trillions in global assets yet hold under 2% of venture capital leadership positions. We're building the infrastructure to change that.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Returns-First, Impact-Always",
    description:
      "We reject the myth that impact requires sacrifice. Every investment is evaluated through the dual lens of financial performance and measurable positive change.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Collective Intelligence",
    description:
      "One hundred of the world's most accomplished women investors sharing deal flow, market intelligence, and strategic networks that no individual can replicate alone.",
  },
];

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      <div className="section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Closing the <span className="gradient-text">$30 Trillion</span> Gap
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Women control a growing share of global wealth, yet remain
            systematically excluded from the investment structures that shape
            our world. Berkana Capital exists to bridge this divide — not with
            charity, but with conviction.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="gradient-border group"
            >
              <div className="relative bg-slate-900/80 rounded-2xl p-8 h-full hover:bg-slate-900/90 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-500/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="text-5xl text-brand-500/30 mb-4">&ldquo;</div>
          <p className="text-xl md:text-2xl text-slate-300 italic leading-relaxed">
            100 ultra-high-net-worth leaders, each allocating $1M annually into
            returns-focused, impact-aligned ventures, can drive returns, shape
            the world, and cement legacies.
          </p>
          <div className="mt-6 h-px w-16 mx-auto bg-gradient-to-r from-brand-500 to-gold-500" />
          <p className="mt-4 text-sm text-slate-500 uppercase tracking-widest">
            The Berkana Thesis
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
