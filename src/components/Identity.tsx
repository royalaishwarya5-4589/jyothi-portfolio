
"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const interests = [
  {
    index: "01",
    title: "Software Development",
    desc: "Building thoughtful digital products with clean architecture and practical solutions.",
  },
  {
    index: "02",
    title: "Artificial Intelligence",
    desc: "Exploring how intelligent systems can make technology more useful and accessible.",
  },
  {
    index: "03",
    title: "Cybersecurity",
    desc: "Understanding how systems work, where they fail, and how to make them more resilient.",
  },
  {
    index: "04",
    title: "Data Structures & Algorithms",
    desc: "Strengthening the problem-solving foundations behind reliable software.",
  },
  {
    index: "05",
    title: "Education Technology",
    desc: "Building learning experiences that make technical education easier to explore.",
  },
];

function Interest({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group flex items-start gap-5"
      style={{
        paddingBlock: "1.1rem",
        borderBottom: "1px solid var(--ink-10)",
      }}
    >
      <span
        className="text-label shrink-0"
        style={{
          color: "var(--ink-60)",
          width: "2rem",
          paddingTop: "3px",
        }}
      >
        {index}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className="font-display font-semibold transition-transform duration-300 group-hover:translate-x-1"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            lineHeight: 1.3,
          }}
        >
          {title}
        </p>

        <p
          className="text-body"
          style={{
            color: "var(--ink-60)",
            fontSize: "0.875rem",
            marginTop: "0.3rem",
          }}
        >
          {desc}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="self-center shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ color: "var(--ink-60)" }}
      >
        →
      </span>
    </div>
  );
}

export default function Identity() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["5%", "0%"]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [reduceMotion ? 1 : 0, 1]
  );

  const reveal = reduceMotion
    ? { initial: false as const }
    : { initial: { opacity: 0, y: 18 } };

  const revealInView = reduceMotion
    ? {}
    : { whileInView: { opacity: 1, y: 0 } };

  const revealViewport = { once: true, margin: "-8%" as const };

  return (
    <section
      ref={ref}
      id="identity"
      className="section-paper relative"
      aria-labelledby="identity-heading"
    >
      <div className="rule-paper" />

      <div
        className="container-grid"
        style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}
      >
        <div className="mb-14 flex items-center gap-4">
          <span className="text-label" style={{ color: "var(--ink-60)" }}>
            CHAPTER 05 — ABOUT
          </span>

          <div className="rule-paper flex-1" />

          <span
            className="text-label"
            style={{ color: "var(--ink-60)", opacity: 0.4 }}
          >
            §005
          </span>
        </div>

        <div
          className="grid gap-12 lg:gap-16"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          }}
        >
          <div>
            <motion.h2
              id="identity-heading"
              style={{
                y: headingY,
                opacity: headingOpacity,
                color: "var(--ink)",
                fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              Still
              <br />
              learning.
              <br />
              <em
                style={{
                  color: "var(--ink)",
                  opacity: 0.38,
                  fontStyle: "italic",
                }}
              >
                Always
              </em>
              <br />
              building.
            </motion.h2>

            <motion.div
              {...reveal}
              {...revealInView}
              viewport={revealViewport}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1,
                    }
              }
            >
              <p
                className="text-body"
                style={{
                  color: "var(--ink-60)",
                  marginBottom: "1.25rem",
                }}
              >
                I&apos;m a Computer Science Engineering student at Sanskrithi
                School of Engineering, Puttaparthi. I build digital products,
                explore AI, and think about how technology can make learning
                more accessible.
              </p>

              <p
                className="text-body"
                style={{
                  color: "var(--ink-60)",
                  marginBottom: "1.25rem",
                  opacity: 0.85,
                }}
              >
                I&apos;m at the beginning of my engineering journey, learning
                by building, experimenting, and turning ideas into working
                projects. Every project is an opportunity to ask better
                questions and develop stronger technical skills.
              </p>

              <p
                className="text-body"
                style={{ color: "var(--ink-60)", opacity: 0.8 }}
              >
                As VP Education at Sanskrithi Toastmasters Club, I&apos;ve
                learned the value of communication, consistency, and helping
                others grow through learning.
              </p>
            </motion.div>

            <motion.div
              {...(reduceMotion
                ? { initial: false }
                : {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                  })}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["B.TECH CSE", "VP EDUCATION · TOASTMASTERS", "PUTTAPARTHI, IN"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="text-label"
                    style={{
                      border: "1px solid var(--ink-10)",
                      padding: "0.4rem 0.7rem",
                      borderRadius: "2px",
                      color: "var(--ink-60)",
                    }}
                  >
                    {chip}
                  </span>
                )
              )}
            </motion.div>

            <div
              style={{
                marginTop: "2.5rem",
                padding: "1.25rem",
                borderLeft: "2px solid var(--violet)",
                background: "rgba(139, 124, 255, 0.07)",
              }}
            >
              <p
                className="text-label"
                style={{ color: "var(--ink-60)", marginBottom: "0.5rem" }}
              >
                CURRENTLY BUILDING
              </p>

              <p
                className="font-display font-semibold"
                style={{
                  color: "var(--ink)",
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                }}
              >
                First Move (11~18)
              </p>

              <p
                className="text-body"
                style={{
                  color: "var(--ink-60)",
                  fontSize: "0.9rem",
                  marginTop: "0.35rem",
                }}
              >
                CODE • LEARN • BUILD — an educational platform project focused
                on making technology easier to learn.
              </p>

              <a
                href="https://first-move-11-18.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-label transition-opacity hover:opacity-60"
                style={{ color: "var(--ink)" }}
              >
                EXPLORE THE PROJECT <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            <motion.div
              {...(reduceMotion
                ? { initial: false }
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                  })}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ position: "relative" }}
            >
              <p
                className="text-label"
                style={{
                  color: "var(--ink-60)",
                  opacity: 0.55,
                  marginBottom: "0.75rem",
                }}
              >
                JYOTHI AISWARYA — 2026
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "360px",
                  aspectRatio: "3 / 4",
                  border: "1px solid var(--ink-10)",
                  overflow: "hidden",
                  borderRadius: "2px",
                  background: "var(--stone)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portrait.jpeg"
                  alt="Portrait of Jyothi Aiswarya"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(20%) contrast(1.04)",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: "auto 0 0",
                    padding: "2.5rem 0.9rem 0.7rem",
                    background:
                      "linear-gradient(to top, var(--paper), transparent)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    className="text-label"
                    style={{ color: "var(--ink-60)" }}
                  >
                    PUTTAPARTHI, IN
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--violet)",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "2.1rem",
                  right: 0,
                  width: "1rem",
                  height: "1rem",
                  borderTop: "2px solid var(--violet)",
                  borderRight: "2px solid var(--violet)",
                  opacity: 0.65,
                }}
              />
            </motion.div>

            <div>
              <p
                className="text-label"
                style={{
                  color: "var(--ink-60)",
                  opacity: 0.6,
                  marginBottom: "0.5rem",
                }}
              >
                WHAT I&apos;M EXPLORING
              </p>

              {interests.map((item, i) => (
                <motion.div
                  key={item.index}
                  {...(reduceMotion
                    ? { initial: false }
                    : {
                        initial: { opacity: 0, x: 14 },
                        whileInView: { opacity: 1, x: 0 },
                      })}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Interest {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rule-paper" />
    </section>
  );
}
