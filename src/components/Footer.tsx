"use client";

import BerkanaLogo from "./BerkanaLogo";

const footerLinks = [
  {
    heading: "Navigate",
    links: [
      { label: "Mission", href: "#mission" },
      { label: "Impact Areas", href: "#impact" },
      { label: "Investment Model", href: "#model" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BerkanaLogo className="w-7 h-auto text-gold-400" />
              <span
                className="text-lg tracking-[0.2em] uppercase text-cream font-semibold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Berkana Capital
              </span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-md mb-6">
              An invitation-only community of 100 impact-aligned women
              investors. Investing in the world we want to live in.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-navy-500/30 border border-steel-600/20 flex items-center justify-center text-steel-400 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-lg bg-navy-500/30 border border-steel-600/20 flex items-center justify-center text-steel-400 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-400 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-500">
            &copy; {new Date().getFullYear()} Berkana Capital. All rights
            reserved.
          </p>
          <p className="text-xs text-steel-600">Abu Dhabi, UAE</p>
        </div>
      </div>
    </footer>
  );
}
