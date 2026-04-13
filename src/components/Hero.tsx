"use client";

import { motion } from "framer-motion";

const floatingOrbs = [
  { size: 320, x: "8%", y: "18%", color: "#E4BD86", delay: 0 },
  { size: 220, x: "72%", y: "55%", color: "#6C8CAE", delay: 2 },
  { size: 160, x: "78%", y: "12%", color: "#1D3656", delay: 4 },
  { size: 260, x: "28%", y: "68%", color: "#8E7146", delay: 1 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            opacity: 0.07,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,233,223,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(240,233,223,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gold-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          Invitation-Only Community
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-8 text-cream"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Investing in the
          <br />
          <span className="gradient-text font-normal">World We Want</span>
          <br />
          to Live In
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-steel-400 max-w-2xl mx-auto mb-12 leading-relaxed"
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
            className="px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-800 hover:from-gold-300 hover:to-gold-500 transition-all shadow-lg shadow-gold-400/15 hover:shadow-gold-400/30 hover:-translate-y-0.5"
          >
            Discover Our Mission
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-base font-medium rounded-full border border-steel-400/30 text-steel-300 hover:border-gold-400/50 hover:text-cream transition-all hover:-translate-y-0.5"
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
            className="w-6 h-10 rounded-full border-2 border-steel-500 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-gold-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
