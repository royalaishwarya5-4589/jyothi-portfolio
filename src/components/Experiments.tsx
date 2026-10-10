
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const experiments = [
  {
    id: "code",
    label: "CODE",
    number: "01",
    status: "PRACTICE",
    desc: "Algorithms, problem-solving, and small builds that turn concepts into working knowledge.",
    detail: "LOGIC / STRUCTURES / IMPLEMENTATION",
    symbol: "</>",
  },
  {
    id: "ai",
    label: "AI & INTELLIGENCE",
    number: "02",
    status: "EXPLORING",
    desc: "Exploring how intelligent tools can make learning more useful, accessible, and interactive.",
    detail: "AI / HUMAN-CENTRED TOOLS",
    symbol: "✳",
  },
  {
    id: "ui",
    label: "INTERFACE",
    number: "03",
    status: "STUDIES",
    desc: "Visual systems, typography, and interactions shaped around clarity rather than decoration.",
    detail: "UI / UX / INTERACTION",
    symbol: "◫",
  },
  {
    id: "learning",
    label: "LEARNING SYSTEMS",
    number: "04",
    status: "ONGOING",
    desc: "Ways to structure knowledge, track progress, and make difficult technical ideas easier to learn.",
    detail: "EDUCATION / KNOWLEDGE DESIGN",
    symbol: "↗",
  },
];

export default function Experiments() {
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--ink)",
        color: "var(--paper)",
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          right: "-12rem",
          width: "26rem",
          height: "26rem",
          borderRadius: "50%",
          background: "var(--violet)",
          opacity: 0.08,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-grid" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          <span className="text-label" style={{ color: "var(--lime)" }}>
            04 / THE LAB
          </span>
          <div
            style={{
              height: "1px",
              flex: 1,
              background: "rgba(244, 241, 234, 0.18)",
            }}
          />
          <span className="text-label" style={{ color: "rgba(244,241,234,.5)" }}>
            CURIOSITY IN PRACTICE
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(2rem, 7vw, 7rem)",
            alignItems: "end",
            marginBottom: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
          >
            <p
              className="text-label"
              style={{ color: "rgba(244,241,234,.55)", marginBottom: "1.2rem" }}
            >
              NOT EVERYTHING STARTS WITH AN ANSWER.
            </p>

            <h2
              id="experiments-heading"
              className="font-display font-bold"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.075em",
                margin: 0,
              }}
            >
              The
              <br />
              <span style={{ color: "var(--lime)" }}>laboratory.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12 }}
          >
            <p
              style={{
                maxWidth: "39rem",
                color: "rgba(244,241,234,.72)",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              I learn by making things. Some experiments become projects;
              others help me understand a problem from a different angle.
              Each one is a chance to question, test, and improve.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "1.8rem",
                color: "rgba(244,241,234,.48)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "50%",
                  background: "var(--lime)",
                  boxShadow: "0 0 14px rgba(101,169,255,.55)",
                }}
              />
              ALWAYS LEARNING. ALWAYS ITERATING.
            </div>
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            borderTop: "1px solid rgba(244,241,234,.2)",
            borderLeft: "1px solid rgba(244,241,234,.2)",
          }}
        >
          {experiments.map((exp, index) => {
            const isActive = active === exp.id;

            return (
              <motion.button
                key={exp.id}
                type="button"
                aria-expanded={isActive}
                aria-controls={`experiment-detail-${exp.id}`}
                onClick={() => setActive(isActive ? null : exp.id)}
                onMouseEnter={() => setActive(exp.id)}
                onFocus={() => setActive(exp.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                style={{
                  position: "relative",
                  minHeight: "19rem",
                  padding: "clamp(1.4rem, 3vw, 2.3rem)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  textAlign: "left",
                  gap: "1.8rem",
                  color: "var(--paper)",
                  background: isActive
                    ? "rgba(139,124,255,.09)"
                    : "rgba(244,241,234,.015)",
                  border: "none",
                  borderRight: "1px solid rgba(244,241,234,.2)",
                  borderBottom: "1px solid rgba(244,241,234,.2)",
                  cursor: "pointer",
                  font: "inherit",
                  transition: "background 220ms ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--lime)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      border: "1px solid rgba(101,169,255,.35)",
                      padding: "0.4rem 0.55rem",
                    }}
                  >
                    {exp.status}
                  </span>

                  <span
                    className="text-label"
                    style={{ color: "rgba(244,241,234,.42)" }}
                  >
                    {exp.number}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "2.2rem",
                    lineHeight: 1,
                    color: isActive ? "var(--lime)" : "var(--violet)",
                    transition: reduceMotion ? "none" : "color 220ms ease",
                  }}
                >
                  {exp.symbol}
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    className="font-display font-bold"
                    style={{
                      fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                      letterSpacing: "-0.045em",
                      lineHeight: 1.1,
                      margin: "0 0 0.9rem",
                    }}
                  >
                    {exp.label}
                  </h3>

                  <p
                    style={{
                      color: "rgba(244,241,234,.65)",
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(244,241,234,.12)",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(244,241,234,.45)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.09em",
                    }}
                  >
                    {exp.detail}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--lime)",
                      fontSize: "1.2rem",
                      transform: isActive ? "translateX(3px)" : "none",
                      transition: reduceMotion ? "none" : "transform 220ms ease",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {experiments.map((exp) => (
          <div
            key={exp.id}
            id={`experiment-detail-${exp.id}`}
            hidden={active !== exp.id}
            style={{
              marginTop: "1rem",
              padding: "1.2rem 1.4rem",
              borderLeft: "2px solid var(--lime)",
              background: "rgba(139,124,255,.07)",
              color: "rgba(244,241,234,.75)",
              fontSize: "0.85rem",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "var(--paper)" }}>{exp.label}</strong>
            {" — "}
            This area represents ongoing exploration, not a claim that every
            idea is a finished or published project.
          </div>
        ))}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            marginTop: "2rem",
            color: "rgba(244,241,234,.4)",
            fontSize: "0.65rem",
            letterSpacing: "0.09em",
          }}
        >
          <span>PROCESS OVER PERFECTION.</span>
          <span>EXPERIMENTS CHANGE AS I LEARN.</span>
        </div>
      </div>
    </section>
  );
}
