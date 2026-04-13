"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Curated Membership",
    description:
      "100 exceptional women investors are selected through a rigorous invitation process, each bringing unique expertise, networks, and capital commitment.",
    detail: "Annual commitment of $1M per member",
  },
  {
    number: "02",
    title: "Investment Committee",
    description:
      "Monthly sessions where members evaluate deal flow, share due diligence, and collectively decide on capital deployment through SPVs and fund-of-funds structures.",
    detail: "Monthly convening with structured deal review",
  },
  {
    number: "03",
    title: "Capital Deployment",
    description:
      "Strategic allocation through Special Purpose Vehicles and fund-of-funds into vetted, impact-aligned ventures across our five core sectors.",
    detail: "SPVs and fund-of-funds vehicles",
  },
  {
    number: "04",
    title: "Value Creation",
    description:
      "Beyond capital, members access a powerful platform of market intelligence, privileged deal access, and an unmatched network that amplifies every investment.",
    detail: "Intelligence, access, and network amplification",
  },
];

export default function InvestmentModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="model" className="relative py-32 overflow-hidden">
      <div className="section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold-400 mb-4 block">
            How It Works
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mb-6 leading-tight text-cream"
          >
            A Model Built for{" "}
            <span className="gradient-text font-normal">Collective Power</span>
          </h2>
          <p className="text-lg text-steel-400 leading-relaxed">
            Our strategic framework transforms individual capital into
            collective impact through a structured, transparent process.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/40 via-steel-400/30 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  }`}
                >
                  <span
                    className="text-6xl md:text-7xl font-bold text-gold-400/10 leading-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-cream mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-steel-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20">
                    {step.detail}
                  </span>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 shadow-lg shadow-gold-400/40 z-10">
                  <div className="absolute inset-0 rounded-full bg-gold-300 animate-ping opacity-20" />
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-8">
            <div className="text-left">
              <p className="text-cream font-semibold text-lg">
                Ready to join the consortium?
              </p>
              <p className="text-steel-400 text-sm">
                Membership is by invitation only. Begin the conversation.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-800 font-medium hover:shadow-lg hover:shadow-gold-400/20 transition-all"
            >
              Request Invitation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
