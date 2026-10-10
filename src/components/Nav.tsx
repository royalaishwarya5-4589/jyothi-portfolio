"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#identity",    label: "About"       },
  { href: "#first-move", label: "Work"         },
  { href: "#engineering",label: "Engineering"  },
  { href: "#experiments",label: "Lab"          },
  { href: "#contact",    label: "Contact"      },
];

const sectionIds = ["hero", "identity", "first-move", "engineering", "experiments", "journey", "contact"];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("hero");

  const opacity = useTransform(scrollY, [40, 100], [0, 1]);

  /* Track which section is in view */
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Close menu on escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Fixed bar ────────────────────────────────────────────── */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50"
        aria-label="Main navigation"
      >
        <div
          className="container-grid flex items-center justify-between py-5"
          style={{ pointerEvents: scrolled ? "auto" : "none" }}
        >
          {/* Monogram */}
          <a
            href="#hero"
            className="font-mono text-label"
            style={{ color: "var(--paper)", textDecoration: "none", mixBlendMode: "difference" }}
            aria-label="Back to top"
          >
            <span style={{ color: "var(--lime)" }}>JA</span>
            <span style={{ color: "var(--stone-40)" }}> — PORTFOLIO</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" style={{ mixBlendMode: "difference" }}>
            {navLinks.map(({ href, label }) => {
              const sId = href.replace("#", "");
              const isActive = active === sId || (active === "first-move" && sId === "first-move");
              return (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-label link-line"
                  style={{
                    color: isActive ? "var(--paper)" : "var(--stone-40)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {label}
                </a>
              );
            })}

            {/* Availability pill */}
            <span
              className="text-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                border: "1px solid var(--stone-15)",
                padding: "0.25rem 0.65rem",
                borderRadius: "20px",
                color: "var(--stone-40)",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--lime)",
                  flexShrink: 0,
                }}
              />
              OPEN TO CONNECT
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-label"
            style={{
              color: "var(--paper)",
              mixBlendMode: "difference",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              pointerEvents: scrolled ? "auto" : "none",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <motion.span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--paper)",
                transformOrigin: "center",
              }}
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--paper)",
              }}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--paper)",
                transformOrigin: "center",
              }}
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 section-ink flex flex-col"
            style={{ paddingTop: "5rem" }}
            aria-modal="true"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="container-grid flex flex-col flex-1 justify-center gap-2">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 3.5rem)",
                    letterSpacing: "-0.025em",
                    color: "var(--paper)",
                    textDecoration: "none",
                    paddingBlock: "0.6rem",
                    borderBottom: "1px solid var(--stone-10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {label}
                  <span style={{ fontSize: "1rem", color: "var(--stone-40)" }} aria-hidden="true">↗</span>
                </motion.a>
              ))}
            </div>

            {/* Bottom meta */}
            <div className="container-grid pb-10">
              <p className="text-label" style={{ color: "var(--stone-25)" }}>
                JYOTHI AISWARYA — PORTFOLIO 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
