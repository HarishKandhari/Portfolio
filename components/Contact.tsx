"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harishkandhari",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/harishkandhari",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <span className="section-num">05</span>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-heading text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Let&apos;s Connect</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
            Let&apos;s Work Together
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface border border-border rounded-3xl p-10 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Open to discussing new opportunities, interesting AI/ML challenges,
              or just connecting with fellow data enthusiasts.
            </p>

            <motion.a
              href="mailto:harishk0072@gmail.com"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(139,92,246,0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-cyan text-white px-8 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-lg shadow-indigo/25 mb-8 transition-shadow"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send Me an Email
            </motion.a>

            <div className="flex flex-wrap justify-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.4)", backgroundColor: "rgba(139,92,246,0.1)", color: "#c4b5fd" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-border rounded-xl font-heading text-text-muted text-sm font-medium transition-all"
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
