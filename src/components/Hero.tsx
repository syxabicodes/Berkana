"use client";

import { motion } from "framer-motion";

const floatingOrbs = [
  { size: 300, x: "10%", y: "20%", color: "brand-500", delay: 0 },
  { size: 200, x: "70%", y: "60%", color: "gold-500", delay: 2 },
  { size: 150, x: "80%", y: "15%", color: "brand-700", delay: 4 },
  { size: 250, x: "30%", y: "70%", color: "brand-600", delay: 1 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background:
              orb.color === "gold-500"
                ? "#F5C842"
                : orb.color === "brand-700"
                  ? "#034a92"
                  : orb.color === "brand-600"
                    ? "#045CB4"
                    : "#046BD2",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Invitation-Only Community
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
        >
          Investing in the
          <br />
          <span className="gradient-text">World We Want</span>
          <br />
          to Live In
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A curated consortium of 100 ultra-high-net-worth women leaders
          deploying capital into impact-aligned ventures that drive returns and
          shape the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#mission"
            className="px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-400 hover:to-brand-500 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            Discover Our Mission
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-base font-medium rounded-full border border-slate-700 text-slate-300 hover:border-brand-500 hover:text-white transition-all hover:-translate-y-0.5"
          >
            Request Invitation
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-brand-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
