"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { STATS } from "@/lib/data";

const TITLES = ["Data Scientist", "AI-ML Engineer", "GenAI Specialist", "MLOps Architect", "LLM Engineer"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
});

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        const duration = 1800;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(decimal ? (eased * value).toFixed(1) : Math.floor(eased * value).toString());
          if (p < 1) requestAnimationFrame(step);
          else setDisplay((decimal ? value.toFixed(1) : value.toString()) + suffix);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix, decimal]);

  return <span ref={ref}>{display}</span>;
}

function Typewriter() {
  const [text, setText] = useState("");
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TITLES[ti];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDeleting(true), 1600);
        else setCi((c) => c + 1);
      } else {
        setText(word.slice(0, ci - 1));
        if (ci - 1 === 0) { setDeleting(false); setTi((t) => (t + 1) % TITLES.length); }
        setCi((c) => c - 1);
      }
    }, deleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [ti, ci, deleting]);

  return (
    <span className="text-text-muted font-heading font-normal text-xl md:text-2xl">
      {text}
      <span className="inline-block w-0.5 h-5 bg-indigo ml-0.5 align-middle animate-[cursorBlink_1s_step-end_infinite]" />
    </span>
  );
}

function Avatar() {
  return (
    <div className="relative flex justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo via-cyan to-violet opacity-20 blur-3xl scale-[1.7] pointer-events-none" />

      {/* Slow orbiting ring with violet dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-14px] rounded-full pointer-events-none"
        style={{ border: "1.5px dashed rgba(139,92,246,0.22)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
      </motion.div>

      {/* Counter-orbit ring with amber dot */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-26px] rounded-full pointer-events-none"
        style={{ border: "1px dashed rgba(245,158,11,0.14)" }}
      >
        <div className="absolute bottom-[8%] right-[8%] w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
      </motion.div>

      {/* Gradient border */}
      <div
        className="relative w-52 h-52 rounded-full p-[2.5px]"
        style={{ background: "linear-gradient(135deg, #8b5cf6, #f59e0b, #ec4899, #8b5cf6)" }}
      >
        <div className="w-full h-full rounded-full bg-[#07040e] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
          {/* Inner radial highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.18),transparent_65%)] pointer-events-none" />
          {/* Monogram — swap inner content with <Image> when you add a photo */}
          <span className="font-heading font-bold text-6xl gradient-text leading-none tracking-tight relative z-10">HK</span>
          <span className="font-heading text-[10px] font-medium text-text-dim tracking-[0.35em] uppercase relative z-10">AI · ML</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 120, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if ("ontouchstart" in window) return;
    document.body.classList.add("has-cursor");
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); document.body.classList.remove("has-cursor"); };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 pointer-events-none z-[99998] w-8 h-8 rounded-full border border-indigo/60 -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        id="cursor-ring"
      />
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 pointer-events-none z-[99999] w-1.5 h-1.5 rounded-full bg-indigo -translate-x-1/2 -translate-y-1/2"
      />

      {/* Background orbs */}
      <div className="fixed top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo/10 blur-[110px] pointer-events-none z-0" />
      <div className="fixed bottom-[5%] left-[-8%] w-[450px] h-[450px] rounded-full bg-cyan/[0.07] blur-[100px] pointer-events-none z-0" />
      <div className="fixed top-[45%] left-[40%] w-[300px] h-[300px] rounded-full bg-violet/[0.06] blur-[80px] pointer-events-none z-0" />

      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        {/* Floating rings */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none animate-float hidden lg:block"
            {...(i === 0 && { style: { width: 320, height: 320, right: "8%", top: "15%", animationDelay: "0s", animationDuration: "10s", border: "1px solid rgba(139,92,246,0.08)" } })}
            {...(i === 1 && { style: { width: 180, height: 180, right: "22%", top: "55%", animationDelay: "-3s", animationDuration: "8s", border: "1px solid rgba(245,158,11,0.08)" } })}
            {...(i === 2 && { style: { width: 110, height: 110, right: "5%", top: "50%", animationDelay: "-5s", animationDuration: "12s", border: "1px solid rgba(236,72,153,0.07)" } })}
            {...(i === 3 && { style: { width: 60, height: 60, right: "35%", top: "22%", animationDelay: "-2s", animationDuration: "7s", border: "1px solid rgba(139,92,246,0.06)" } })}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-center">

            {/* Left: main content */}
            <div className="space-y-6">
              {/* Badge */}
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-indigo-dim border border-indigo/25 text-indigo-light px-4 py-1.5 rounded-full text-xs font-heading font-bold tracking-[0.1em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo animate-[badgePulse_2s_ease-in-out_infinite]" />
                  Available for Opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.div {...fadeUp(0.1)} className="space-y-0">
                <h1 className="font-heading font-bold leading-[0.9] tracking-[-0.04em]" style={{ fontSize: "clamp(4.5rem, 13vw, 9rem)" }}>
                  Harish
                </h1>
                <h1 className="font-heading font-bold leading-[0.9] tracking-[-0.04em] gradient-text" style={{ fontSize: "clamp(4.5rem, 13vw, 9rem)" }}>
                  Kandhari
                </h1>
              </motion.div>

              {/* Typewriter */}
              <motion.div {...fadeUp(0.2)}>
                <Typewriter />
              </motion.div>

              {/* Description */}
              <motion.p {...fadeUp(0.3)} className="text-text-muted text-base leading-[1.8] max-w-[560px]">
                Building production-grade ML and GenAI systems across finance, healthcare,
                retail, and insurance. Specializing in end-to-end ML lifecycle, LLM
                architectures, agentic AI, and scalable data pipelines.
              </motion.p>

              {/* Buttons */}
              <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-cyan text-white px-6 py-3 rounded-xl font-heading font-semibold text-sm shadow-lg shadow-indigo/25 transition-shadow"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-transparent border border-border text-white px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Avatar + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-col items-center gap-7"
            >
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <Avatar />
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.4)" }}
                    className="bg-surface border border-border rounded-2xl p-5 text-center backdrop-blur-sm transition-colors"
                  >
                    <div className="font-heading font-bold text-3xl gradient-text leading-none mb-1">
                      <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} />
                    </div>
                    <div className="font-heading text-text-dim text-[10px] font-semibold tracking-[0.12em] uppercase">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-heading text-text-dim text-[10px] tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-indigo/60 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes badgePulse {
          0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(139,92,246,0.5); }
          50% { opacity:.6; transform:scale(1.5); box-shadow:0 0 0 5px rgba(139,92,246,0); }
        }
        @keyframes cursorBlink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </>
  );
}
