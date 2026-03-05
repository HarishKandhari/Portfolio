"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <span className="section-num">03</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-heading text-indigo text-xs font-bold tracking-[0.14em] uppercase mb-3">Personal Work</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] bg-gradient-to-r from-indigo to-cyan rounded-full mt-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.35)", boxShadow: "0 16px 48px rgba(139,92,246,0.12)" }}
              className="group relative bg-surface border border-border rounded-2xl p-7 overflow-hidden backdrop-blur-sm transition-all"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo to-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Background gradient blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)] bg-[size:200%_100%] bg-[-100%_0] group-hover:bg-[200%_0] transition-[background-position] duration-700" />

              <div className="relative z-10">
                <h3 className="font-heading font-bold text-xl mb-3">{project.name}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-heading text-cyan-light text-xs font-semibold px-2.5 py-1 rounded-md border border-cyan/20 bg-cyan/[0.07] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className="text-text-muted text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(/<b>/g, '<strong class="text-white font-semibold">').replace(/<\/b>/g, "</strong>"),
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
