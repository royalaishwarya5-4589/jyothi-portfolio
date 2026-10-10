
"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const timeline = [
  {
    id: "edu",
    chapter: "EDUCATION",
    marker: "2022",
    title: "B.Tech Computer Science & Engineering",
    body: "Studying at Sanskrithi School of Engineering, Puttaparthi, building a foundation in computer science and software development.",
    note: "ONGOING",
    accent: false,
  },
  {
    id: "learning",
    chapter: "FOUNDATIONS",
    marker: "2023",
    title: "Learning to build",
    body: "Exploring programming and web technologies, turning concepts into practical experiments and small projects.",
    note: null,
    accent: false,
  },
  {
    id: "building",
    chapter: "EXPLORATION",
    marker: "2024",
    title: "From concepts to projects",
    body: "Moving beyond tutorials to explore how software ideas can become useful, working products.",
    note: null,
    accent: false,
  },
  {
    id: "firstmove",
    chapter: "FEATURED PROJECT",
    marker: "2025",
    title: "First Move (11~18)",
    body: "Developing an educational technology platform built around the idea of making technical learning more accessible.",
    note: "PROJECT",
    accent: true,
  },
  {
    id: "leadership",
    chapter: "LEADERSHIP",
    marker: "2025",
    title: "VP Education — Toastmasters",
    body: "Serving as VP Education at Sanskrithi Toastmasters Club, strengthening communication, organization, and peer learning.",
    note: "LEADERSHIP",
    accent: false,
  },
  {
    id: "next",
    chapter: "WHAT'S NEXT",
    marker: "→",
    title: "Learning by building",
    body: "Continuing to explore software engineering, AI, cybersecurity, and education technology—one project and one problem at a time.",
    note: "IN PROGRESS",
    accent: false,
    future: true,
  },
];

export default function Journey() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0.05, 0.8],
    reduceMotion ? ["0%", "0%"] : ["0%", "100%"]
  );

  return (
    <section
      ref={ref}
      id="journey"
      className="section-paper relative"
      aria-labelledby="journey-heading"
    >
      <div className="rule-paper" />

      <div
        className="container-grid"
        style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}
      >
        <div
          className="mb-12 flex items-center gap-4 md:mb-16"
        >
          <span className="text-label" style={{ color: "var(--ink-60)" }}>
            CHAPTER 06 — JOURNEY
          </span>

          <div className="rule-paper flex-1" />

          <span
            className="text-label"
            style={{ color: "var(--ink-60)", opacity: 0.4 }}
          >
            §006
          </span>
        </div>

        <motion.h2
          id="journey-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reduceMotion ? 0 : 0.75 }}
          className="font-display font-bold"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "var(--ink)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          A work
          <br />
          <em style={{ fontStyle: "italic", color: "var(--violet)" }}>
            in progress.
          </em>
        </motion.h2>

        <div style={{ position: "relative" }}>
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "6.5rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--ink-10)",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "6.5rem",
              top: 0,
              width: "2px",
              height: lineHeight,
              background:
                "linear-gradient(to bottom, var(--lime), var(--violet))",
              transformOrigin: "top",
            }}
          />

          <div className="flex flex-col">
            {timeline.map((entry, i) => (
              <motion.article
                key={entry.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(3.5rem, 10vw, 7rem) minmax(0, 1fr)",
                  gap: "clamp(1rem, 4vw, 4rem)",
                  paddingBlock: "clamp(1.5rem, 3vw, 2.5rem)",
                  borderBottom: "1px solid var(--ink-10)",
                  opacity: entry.future ? 0.75 : 1,
                }}
              >
                <div style={{ paddingTop: "0.2rem" }}>
                  <span
                    className="text-label"
                    style={{
                      color: entry.accent ? "var(--violet)" : "var(--ink-60)",
                      fontWeight: entry.accent ? 700 : 400,
                    }}
                  >
                    {entry.marker}
                  </span>
                </div>

                <div style={{ minWidth: 0 }}>
                  <p
                    className="text-label"
                    style={{
                      color: entry.accent ? "var(--violet)" : "var(--ink-60)",
                      opacity: entry.accent ? 1 : 0.65,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {entry.chapter}

                    {entry.note && (
                      <span
                        style={{
                          display: "inline-block",
                          marginLeft: "0.75rem",
                          marginTop: "0.25rem",
                          color: entry.accent ? "var(--violet)" : "var(--ink-60)",
                          border: `1px solid ${
                            entry.accent ? "var(--violet)" : "var(--ink-10)"
                          }`,
                          padding: "0.2rem 0.45rem",
                          borderRadius: "2px",
                          fontSize: "0.65rem",
                        }}
                      >
                        {entry.note}
                      </span>
                    )}
                  </p>

                  <h3
                    className="font-display font-semibold"
                    style={{
                      fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)",
                      letterSpacing: "-0.025em",
                      color: "var(--ink)",
                      marginBottom: "0.65rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {entry.title}
                  </h3>

                  <p
                    className="text-body"
                    style={{
                      color: "var(--ink-60)",
                      fontSize: "0.9rem",
                      maxWidth: "54ch",
                      lineHeight: 1.75,
                    }}
                  >
                    {entry.body}
                  </p>

                  {entry.id === "firstmove" && (
                    <a
                      href="https://first-move-11-18.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-label transition-opacity hover:opacity-60"
                      style={{ color: "var(--violet)" }}
                    >
                      VIEW PROJECT <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="rule-paper" />
    </section>
  );
}
