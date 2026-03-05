"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Section number */}
      <span className="section-num">01</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Technical Arsenal</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
            Skills &amp; Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4"
          />
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              variants={item}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(99,102,241,0.35)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.08)",
              }}
              className={`bg-surface border border-border rounded-2xl p-6 backdrop-blur-sm transition-colors group relative overflow-hidden ${
                skill.span === 2 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-indigo/10 rounded-xl text-lg">
                    {skill.icon}
                  </div>
                  <h3 className="font-heading text-xs font-bold text-text-muted uppercase tracking-[0.08em]">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ backgroundColor: "rgba(99,102,241,0.18)", borderColor: "rgba(99,102,241,0.4)", color: "#a5b4fc" }}
                      className="inline-block bg-white/[0.04] border border-white/[0.07] text-text-muted text-[0.74rem] font-medium px-2.5 py-1 rounded-md transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
