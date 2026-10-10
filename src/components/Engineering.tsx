
"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const categories = [
  {
    id: "programming",
    index: "01",
    title: "PROGRAMMING",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    desc: "Exploring programming through problem-solving, application development, and core computer science concepts.",
  },
  {
    id: "web",
    index: "02",
    title: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js"],
    desc: "Exploring the technologies behind responsive interfaces, interactive experiences, and full-stack web applications.",
  },
  {
    id: "data",
    index: "03",
    title: "DATA & ALGORITHMS",
    skills: ["Data Structures", "Algorithms", "SQL", "Git"],
    desc: "Building a stronger foundation in problem-solving, data organization, databases, and version control.",
  },
  {
    id: "ai",
    index: "04",
    title: "INTELLIGENT SYSTEMS",
    skills: [
      "Artificial Intelligence",
      "AI-powered applications",
      "Automation",
      "Pyodide",
    ],
    desc: "Exploring practical AI integration and interactive learning tools through experimentation and project work.",
  },
  {
    id: "security",
    index: "05",
    title: "CYBERSECURITY",
    skills: [
      "Cybersecurity",
      "Security fundamentals",
      "System thinking",
    ],
    desc: "Developing an understanding of security principles, system behavior, and ways to build more resilient software.",
  },
];

export default function Engineering() {
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const activeCategory = categories.find((category) => category.id === active);

  return (
    <section
      id="engineering"
      className="section-paper relative"
      aria-labelledby="engineering-heading"
    >
      <div className="rule-paper" />

      <div
        className="container-grid"
        style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}
      >
        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <span className="text-label" style={{ color: "var(--ink-60)" }}>
            CHAPTER 03 — ENGINEERING
          </span>

          <div className="rule-paper flex-1" />

          <span
            className="text-label"
            style={{ color: "var(--ink-60)", opacity: 0.4 }}
          >
            §003
          </span>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reduceMotion ? 0 : 0.75 }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <h2
            id="engineering-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "var(--ink)",
            }}
          >
            Ideas into
            <br />
            <em style={{ fontStyle: "italic", color: "var(--violet)" }}>
              engineering.
            </em>
          </h2>

          <p
            className="text-body"
            style={{
              color: "var(--ink-60)",
              maxWidth: "48ch",
              marginTop: "1.5rem",
            }}
          >
            The technologies and concepts I&apos;m exploring to turn ideas
            into useful digital experiences.
          </p>
        </motion.div>

        <div
          className="grid gap-8 lg:gap-0"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          }}
        >
          <div
            style={{
              borderRight: "1px solid var(--ink-10)",
              paddingRight: "clamp(0rem, 2vw, 1.5rem)",
            }}
          >
            {categories.map((category, i) => {
              const isActive = active === category.id;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : i * 0.05,
                  }}
                  onClick={() =>
                    setActive(isActive ? null : category.id)
                  }
                  aria-expanded={isActive}
                  aria-controls={`engineering-panel-${category.id}`}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    textAlign: "left",
                    gap: "clamp(1rem, 2.5vw, 2.5rem)",
                    paddingBlock: "clamp(1.25rem, 2vw, 1.75rem)",
                    paddingInline: "0.5rem",
                    border: "none",
                    borderBottom: "1px solid var(--ink-10)",
                    cursor: "pointer",
                    background: isActive
                      ? "rgba(139, 124, 255, 0.08)"
                      : "transparent",
                    color: "var(--ink)",
                  }}
                  className="group"
                >
                  <span
                    className="text-label shrink-0"
                    style={{
                      color: isActive ? "var(--violet)" : "var(--ink-60)",
                      opacity: isActive ? 1 : 0.55,
                      minWidth: "2rem",
                    }}
                  >
                    {category.index}
                  </span>

                  <span
                    className="font-display font-semibold flex-1"
                    style={{
                      fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {category.title}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--violet)",
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                      transition: reduceMotion
                        ? "none"
                        : "transform 0.25s ease",
                    }}
                  >
                    →
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            style={{
              paddingInline: "clamp(0rem, 4vw, 3.5rem)",
              paddingTop: "clamp(1rem, 2vw, 2rem)",
              minHeight: "20rem",
              minWidth: 0,
            }}
          >
            <AnimatePresence mode="wait">
              {activeCategory ? (
                <motion.div
                  key={activeCategory.id}
                  id={`engineering-panel-${activeCategory.id}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                >
                  <p
                    className="text-label"
                    style={{
                      color: "var(--violet)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {activeCategory.index} / 05 — {activeCategory.title}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.6rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {activeCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-label"
                        style={{
                          border: "1px solid var(--ink-10)",
                          padding: "0.45rem 0.7rem",
                          borderRadius: "2px",
                          color: "var(--ink)",
                          background: "rgba(139, 124, 255, 0.05)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-body"
                    style={{
                      color: "var(--ink-60)",
                      maxWidth: "38ch",
                      lineHeight: 1.8,
                    }}
                  >
                    {activeCategory.desc}
                  </p>

                  <div
                    aria-hidden="true"
                    style={{
                      width: "3rem",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--lime), var(--violet))",
                      marginTop: "2rem",
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  style={{ paddingTop: "1rem" }}
                >
                  <p
                    className="text-label"
                    style={{ color: "var(--ink-60)", opacity: 0.65 }}
                  >
                    EXPLORE THE TOOLKIT <span aria-hidden="true">↗</span>
                  </p>

                  <p
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.035em",
                      color: "var(--ink)",
                      marginTop: "2rem",
                      maxWidth: "13ch",
                    }}
                  >
                    Every skill starts with a question.
                  </p>

                  <p
                    className="text-body"
                    style={{
                      color: "var(--ink-60)",
                      maxWidth: "32ch",
                      marginTop: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    Select a category to explore the technologies and concepts
                    behind my learning and project work.
                  </p>

                  <div
                    aria-hidden="true"
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      marginTop: "2rem",
                    }}
                  >
                    {[0, 1, 2].map((item) => (
                      <span
                        key={item}
                        style={{
                          width: item === 0 ? "2rem" : "0.5rem",
                          height: "3px",
                          background:
                            item === 0 ? "var(--violet)" : "var(--ink-10)",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="rule-paper" />
    </section>
  );
}
