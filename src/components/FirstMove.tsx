"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Tech pill ──────────────────────────────────────────────── */
function TechPill({ label }: { label: string }) {
  return (
    <span
      className="text-label"
      style={{
        border: "1px solid var(--lime-30)",
        color: "rgba(199, 255, 61, 0.65)",
        padding: "0.3rem 0.65rem",
        borderRadius: "2px",
        transition: "border-color 0.3s ease, color 0.3s ease",
        cursor: "default",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--lime)";
        (e.currentTarget as HTMLElement).style.color = "var(--lime)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--lime-30)";
        (e.currentTarget as HTMLElement).style.color = "rgba(199, 255, 61, 0.65)";
      }}
    >
      {label}
    </span>
  );
}

const tech = [
  "Python", "JavaScript", "TypeScript",
  "Next.js", "React", "HTML & CSS",
  "Git", "SQL", "Node.js",
];

const context = [
  { label: "Role",    value: "Sole Builder" },
  { label: "Type",    value: "EdTech Platform" },
  { label: "Target",  value: "Learners aged 11–18" },
  { label: "Status",  value: "Live & Ongoing", accent: true },
];

/* ─── Visual framework placeholder ──────────────────────────── */

function ProjectFrame() {
  const [hovered, setHovered] = useState(false);

  const courses = [
    { name: "Python Programming", detail: "Learn · Practice · Build", progress: "72%", width: "72%" },
    { name: "Java Development", detail: "Core concepts to OOP", progress: "38%", width: "38%" },
    { name: "Web Development", detail: "HTML · CSS · JavaScript", progress: "56%", width: "56%" },
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
        borderRadius: "8px",
        border: "1px solid rgba(101,169,255,0.4)",
        background: "#101827",
        padding: "clamp(12px, 2.5vw, 28px)",
        transition: "border-color 0.3s ease",
        borderColor: hovered ? "#65A9FF" : "rgba(101,169,255,0.4)",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          gap: "clamp(8px, 1.5vw, 16px)",
          color: "#F4F1EA",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Product header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "10px",
            borderBottom: "1px solid rgba(244,241,234,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "7px",
                background: "#65A9FF",
                color: "#101827",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              FM
            </div>
            <div>
              <div style={{ fontSize: "clamp(11px, 1.4vw, 15px)", fontWeight: 700 }}>
                First Move
              </div>
              <div style={{ fontSize: "9px", color: "#AAB8CB" }}>
                CODE · LEARN · BUILD
              </div>
            </div>
          </div>
          <span
            style={{
              fontSize: "9px",
              color: "#65A9FF",
              border: "1px solid rgba(101,169,255,0.35)",
              borderRadius: "20px",
              padding: "5px 9px",
            }}
          >
            LEARNING SPACE
          </span>
        </div>

        {/* Welcome area */}
        <div>
          <div style={{ fontSize: "clamp(16px, 2.5vw, 27px)", fontWeight: 700, letterSpacing: "-0.7px" }}>
            Learn by building.
          </div>
          <div style={{ color: "#AAB8CB", fontSize: "clamp(9px, 1vw, 12px)", marginTop: "5px" }}>
            Your next skill starts with one step.
          </div>
        </div>

        {/* Learning summary */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "8px",
          }}
        >
          {[
            ["01", "Learn"],
            ["02", "Practice"],
            ["03", "Build"],
          ].map(([number, label]) => (
            <div
              key={number}
              style={{
                border: "1px solid rgba(244,241,234,0.12)",
                borderRadius: "6px",
                padding: "clamp(7px, 1.2vw, 13px)",
                background: "rgba(244,241,234,0.035)",
              }}
            >
              <div style={{ color: "#65A9FF", fontSize: "10px", marginBottom: "5px" }}>
                {number}
              </div>
              <div style={{ fontSize: "clamp(9px, 1.2vw, 13px)", fontWeight: 600 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Course list */}
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: "clamp(7px, 1vw, 12px)" }}>
          <div style={{ fontSize: "10px", color: "#AAB8CB", letterSpacing: "1px" }}>
            EXPLORE LEARNING PATHS
          </div>
          {courses.map((course) => (
            <div key={course.name}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "clamp(9px, 1.2vw, 13px)", fontWeight: 600 }}>
                    {course.name}
                  </div>
                  <div style={{ fontSize: "clamp(8px, 0.9vw, 10px)", color: "#AAB8CB", marginTop: "3px" }}>
                    {course.detail}
                  </div>
                </div>
                <div style={{ color: "#65A9FF", fontSize: "10px", flexShrink: 0 }}>
                  {course.progress}
                </div>
              </div>
              <div style={{ height: "3px", background: "rgba(244,241,234,0.12)", borderRadius: "5px", marginTop: "6px", overflow: "hidden" }}>
                <div
                  style={{
                    width: course.width,
                    height: "100%",
                    background: "#65A9FF",
                    borderRadius: "5px",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(244,241,234,0.12)", paddingTop: "9px", color: "#AAB8CB", fontSize: "9px" }}>
          <span>YOUR JOURNEY. YOUR PACE.</span>
          <span style={{ color: "#65A9FF", fontWeight: 700 }}>FIRST MOVE ↗</span>
        </div>
      </div>
    </div>
  );
}
/* ─── Main section ───────────────────────────────────────────── */
export default function FirstMove() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineWidth  = useTransform(scrollYProgress, [0.08, 0.45], ["0%", "100%"]);
  const titleY     = useTransform(scrollYProgress, [0.04, 0.3],  ["4%", "0%"]);
  const titleFade  = useTransform(scrollYProgress, [0.04, 0.28], [0, 1]);
  const frameScale = useTransform(scrollYProgress, [0.1, 0.4],   [0.96, 1]);

  return (
    <section
      ref={ref}
      id="first-move"
      className="section-ink relative"
      aria-label="First Move — featured project"
    >
      {/* Paper→Ink seam */}
      <div className="section-paper">
        <div className="container-grid"><div className="rule-paper" /></div>
      </div>

      <div className="container-grid" style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>

        {/* ── Section overline ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
          style={{ marginBottom: "clamp(3rem, 5vw, 5rem)" }}
        >
          <span className="fm-marker">01 / SELECTED WORK</span>
          <div style={{ flex: 1, height: "1px", background: "var(--lime-30)" }} />
          <span className="text-label" style={{ color: "var(--stone-25)" }}>§002</span>
        </motion.div>

        {/* ── Project name block ─────────────────────────── */}
        <motion.div
          style={{ y: titleY, opacity: titleFade }}
          className="mb-10"
        >
          {/* Tags row */}
          <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span className="tag tag-lime">EDTECH PLATFORM</span>
            <span className="tag">2025 — ONGOING</span>
          </div>

          {/* FIRST MOVE — large display */}
          <div style={{ overflow: "hidden" }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.6rem, 10vw, 11rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "var(--paper)",
              }}
            >
              FIRST MOVE
            </h2>
          </div>

          {/* (11~18) — contrasting ghost */}
          <div
            className="font-display"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 5.5rem)",
              letterSpacing: "-0.02em",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px var(--lime-30)",
              marginTop: "0.05em",
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
            aria-hidden="true"
          >
            (11~18)
            <span
              className="text-label"
              style={{ color: "var(--stone-40)", alignSelf: "center" }}
            >
              CODE · LEARN · BUILD
            </span>
          </div>

          {/* Animated underline */}
          <motion.div
            style={{
              width: lineWidth,
              height: "1px",
              background: "var(--lime-30)",
              marginTop: "1rem",
            }}
          />
        </motion.div>

        {/* ── Visual frame ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: frameScale, marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <ProjectFrame />
        </motion.div>

        {/* ── Content grid ───────────────────────────────── */}
        <div
          className="grid gap-14"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }}
        >
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label" style={{ color: "var(--stone-40)", marginBottom: "1rem" }}>
              WHAT IT IS
            </p>
            <p className="text-body" style={{ color: "var(--paper-80)", marginBottom: "1.2rem" }}>
              An educational technology platform designed to help learners
              progress from foundational concepts toward advanced technical
              learning. The name carries an idea: anyone can make their first
              move into technology, no matter where they start.
            </p>
            <p className="text-body" style={{ color: "var(--paper-60)", marginBottom: "1.2rem" }}>
              Designed for learners aged 11 to 18 who want to understand how
              things actually work — not just follow instructions.
            </p>
            <p className="text-body" style={{ color: "var(--stone-60)" }}>
              My most substantial project to date. A genuine attempt at building
              something useful that reflects what I actually believe about
              learning and technology.
            </p>
          </motion.div>

          {/* Right — metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            {/* Tech stack */}
            <div style={{ marginBottom: "2.5rem" }}>
              <p className="text-label" style={{ color: "var(--stone-40)", marginBottom: "0.9rem" }}>
                BUILT WITH
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {tech.map((t) => <TechPill key={t} label={t} />)}
              </div>
            </div>

            {/* Context table */}
            <div>
              <p className="text-label" style={{ color: "var(--stone-40)", marginBottom: "0.9rem" }}>
                CONTEXT
              </p>
              <div>
                {context.map(({ label, value, accent }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBlock: "0.55rem",
                      borderBottom: "1px solid var(--stone-10)",
                    }}
                  >
                    <span className="text-label" style={{ color: "var(--stone-40)" }}>{label}</span>
                    <span
                      className="text-label"
                      style={{ color: accent ? "var(--lime)" : "var(--stone-60)" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── CTA buttons ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "3rem" }}
        >
          <a
            href="https://first-move-11-18.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--lime)",
              color: "var(--ink)",
              padding: "0.9rem 1.75rem",
              borderRadius: "2px",
              fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
              letterSpacing: "-0.01em",
              transition: "background 0.3s ease, transform 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--paper)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--lime)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            VISIT PROJECT <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://github.com/royalaishwarya5-4589/First-Move--11-18--Learning-Platform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid var(--stone-25)",
              color: "var(--stone-60)",
              padding: "0.9rem 1.5rem",
              borderRadius: "2px",
              transition: "border-color 0.3s ease, color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--stone-60)";
              (e.currentTarget as HTMLElement).style.color = "var(--paper)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--stone-25)";
              (e.currentTarget as HTMLElement).style.color = "var(--stone-60)";
            }}
          >
            VIEW GITHUB →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
