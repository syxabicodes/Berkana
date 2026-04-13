"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4 block">
              Begin the Conversation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Invitation{" "}
              <span className="gradient-text">Awaits</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Berkana Capital membership is by invitation only. If you share our
              vision of deploying capital for both returns and impact, we'd love
              to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p className="text-slate-400 text-sm">
                    Pixel Towers (Towers 5 & 7), Al Reem Island
                    <br />
                    Makers District, Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400 text-sm">
                    welcome@berkanacapital.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-slate-400 text-sm">+971 56 818 4768</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              className="glass rounded-2xl p-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                  placeholder="Company or family office"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all resize-none"
                  placeholder="Tell us about your investment philosophy and interest in Berkana..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium hover:from-brand-400 hover:to-brand-500 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >
                Request Invitation
              </button>

              <p className="text-xs text-slate-500 text-center">
                All inquiries are confidential. Membership decisions are made by
                the Investment Committee.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
