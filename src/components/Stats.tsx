"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 100,
    suffix: "",
    label: "Founding Members",
    sublabel: "Ultra-high-net-worth women investors",
    prefix: "",
  },
  {
    value: 100,
    suffix: "M",
    label: "Annual Capital Pool",
    sublabel: "Collectively deployed per year",
    prefix: "$",
  },
  {
    value: 5,
    suffix: "",
    label: "Impact Sectors",
    sublabel: "Healthcare, Energy, Food, Housing, Circular",
    prefix: "",
  },
  {
    value: 30,
    suffix: "T",
    label: "Untapped Opportunity",
    sublabel: "Women-controlled assets globally",
    prefix: "$",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="numbers" className="relative py-32 overflow-hidden">
      <div className="section-divider" />

      {/* Background effects */}
      <div className="absolute inset-0 particles-bg opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-400 mb-4 block">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Scale of Our <span className="gradient-text">Ambition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-300 h-full">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>
                <p className="text-white font-semibold text-lg mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-500 text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
