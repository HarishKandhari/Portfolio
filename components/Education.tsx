"use client";

import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      <span className="section-num">04</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-heading text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Background</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">Education &amp; Certifications</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <p className="font-heading text-text-dim text-xs font-bold tracking-[0.12em] uppercase mb-5">Education</p>
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.school}
                  variants={item}
                  whileHover={{ borderColor: "rgba(139,92,246,0.3)", y: -2 }}
                  className="bg-surface border border-border rounded-2xl p-5 backdrop-blur-sm transition-all"
                >
                  <h3 className="font-heading font-bold text-base mb-1">{edu.school}</h3>
                  <p className="text-text-muted text-sm mb-2">{edu.degree}</p>
                  <p className="font-heading text-indigo text-sm font-semibold">CGPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <p className="font-heading text-text-dim text-xs font-bold tracking-[0.12em] uppercase mb-5">Certifications</p>
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={item}
                  whileHover={{ borderColor: "rgba(245,158,11,0.28)", y: -2 }}
                  className="bg-surface border border-border rounded-2xl p-5 flex items-center gap-4 backdrop-blur-sm transition-all"
                >
                  <div className="w-11 h-11 flex items-center justify-center text-xl bg-cyan/[0.08] border border-cyan/15 rounded-xl shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">{cert.name}</p>
                    <p className="font-heading text-text-dim text-xs mt-0.5">{cert.org}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
