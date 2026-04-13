"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const impactAreas = [
  {
    id: "healthcare",
    title: "Healthcare",
    tagline: "Expanding access, extending lives",
    description:
      "From biotech breakthroughs to telemedicine platforms, we invest in ventures that make quality healthcare accessible to underserved populations worldwide.",
    stats: "Global digital health market projected at $660B by 2030",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accent: "text-gold-300",
    accentBg: "bg-gold-300/10",
  },
  {
    id: "energy",
    title: "Clean Energy",
    tagline: "Powering a sustainable tomorrow",
    description:
      "Backing next-generation renewable technologies, battery storage, and grid infrastructure that will power the transition to a zero-carbon economy.",
    stats: "Clean energy investment reached $1.8T globally in 2025",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    accent: "text-gold-400",
    accentBg: "bg-gold-400/10",
  },
  {
    id: "food-water",
    title: "Food & Water",
    tagline: "Nourishing communities, preserving resources",
    description:
      "Investing in agritech, sustainable farming, water purification, and supply chain innovation to address the fundamental needs of a growing population.",
    stats: "800M people lack basic access to clean drinking water",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    accent: "text-steel-300",
    accentBg: "bg-steel-300/10",
  },
  {
    id: "housing",
    title: "Housing",
    tagline: "Building dignity, one home at a time",
    description:
      "Supporting proptech, modular construction, and innovative financing models that expand affordable housing access for underserved communities globally.",
    stats: "1.6B people worldwide lack adequate housing",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    accent: "text-steel-400",
    accentBg: "bg-steel-400/10",
  },
  {
    id: "circular",
    title: "Circular Economy",
    tagline: "Eliminating waste, creating value",
    description:
      "Funding ventures that reimagine production and consumption — from advanced recycling to regenerative materials — turning waste streams into value streams.",
    stats: "Circular economy could generate $4.5T in economic benefits by 2030",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    accent: "text-gold-600",
    accentBg: "bg-gold-600/10",
  },
];

export default function ImpactAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      <div className="section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-400 mb-4 block">
            Where We Invest
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mb-6 leading-tight text-cream"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Five Sectors.{" "}
            <span className="gradient-text font-normal">Infinite Impact.</span>
          </h2>
          <p className="text-lg text-steel-400 leading-relaxed">
            We focus our capital on the sectors where financial returns and human
            progress converge most powerfully.
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                area.id === "circular" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative glass rounded-2xl p-8 h-full hover:border-gold-400/20 transition-all">
                <div
                  className={`w-16 h-16 rounded-2xl ${area.accentBg} flex items-center justify-center ${area.accent} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {area.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-cream">
                  {area.title}
                </h3>
                <p className={`text-sm font-medium ${area.accent} mb-4`}>
                  {area.tagline}
                </p>
                <p className="text-steel-400 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Stat reveal on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeArea === area.id ? "auto" : 0,
                    opacity: activeArea === area.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-cream/10">
                    <p className="text-sm text-steel-500 uppercase tracking-wider mb-1">
                      Market Insight
                    </p>
                    <p className="text-sm text-cream/70">{area.stats}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
