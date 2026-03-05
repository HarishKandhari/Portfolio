"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      <span className="section-num">02</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-heading text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Career Journey</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
            Professional Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-indigo via-cyan/50 to-transparent opacity-40"
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[2.05rem] top-5 w-3 h-3 rounded-full bg-gradient-to-br from-indigo to-cyan border-2 border-bg animate-pulse-glow" />

                <motion.div
                  whileHover={{ borderColor: "rgba(139,92,246,0.3)", boxShadow: "0 4px 28px rgba(139,92,246,0.08)" }}
                  className="bg-surface border border-border rounded-2xl p-6 backdrop-blur-sm transition-all group relative overflow-hidden"
                >
                  {/* Hover glare */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="font-heading font-bold text-lg text-white">{exp.title}</h3>
                        <p className="font-heading font-bold text-cyan text-base mt-0.5">{exp.company}</p>
                        <p className="text-text-dim text-sm italic mt-0.5">{exp.project}</p>
                        <p className="text-text-dim text-xs mt-0.5">📍 {exp.location}</p>
                      </div>
                      <span className="shrink-0 font-heading text-xs font-semibold text-indigo bg-indigo/10 border border-indigo/20 px-3 py-1 rounded-full">
                        {exp.date}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-text-muted text-sm leading-relaxed">
                          <span className="text-indigo text-xs mt-[0.3rem] shrink-0">▸</span>
                          <span dangerouslySetInnerHTML={{ __html: bullet.replace(/<b>/g, '<strong class="text-white font-semibold">').replace(/<\/b>/g, "</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
