"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 130)
          current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[9999] bg-gradient-to-r from-indigo via-cyan to-violet"
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-heading font-bold text-xl gradient-text"
            whileHover={{ scale: 1.04 }}
          >
            HK
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`font-heading text-sm font-medium tracking-wide transition-colors relative group ${
                    active === href.slice(1) ? "text-white" : "text-text-muted hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo to-cyan transition-transform origin-left duration-300 ${
                      active === href.slice(1)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="mailto:harishk0072@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-cyan text-white px-4 py-2 rounded-lg font-heading text-sm font-semibold shadow-lg shadow-indigo/20"
            >
              Hire Me
            </motion.a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-text-muted rounded transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-5 h-0.5 bg-text-muted rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-text-muted rounded transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-16 left-0 right-0 z-40 overflow-hidden bg-bg/95 backdrop-blur-xl border-b border-border md:hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-text-muted hover:text-white text-base font-medium py-2 border-b border-border transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:harishk0072@gmail.com"
            className="font-heading text-indigo font-semibold py-2"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </>
  );
}
