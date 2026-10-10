
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/* ─── Animated letter ─────────────────────────────────────── */

function AnimLetter({
  char,
  delay,
  reduceMotion,
}: {
  char: string;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={reduceMotion ? false : { y: "105%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }
      }
    >
      {char}
    </motion.span>
  );
}

/* ─── Clipped text line ───────────────────────────────────── */

function LineClip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0.9 }}>
      {children}
    </div>
  );
}

/* ─── India live clock ────────────────────────────────────── */
function LiveClock(_props: { reduceMotion: boolean }) {
  return (
    <time aria-label="India Standard Time">
      IST · UTC+05:30
    </time>
  );
}
/* ─── Scroll cue ─────────────────────────────────────────── */

function ScrollCue({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduceMotion ? 0 : 1.3, duration: 0.7 }}
      className="flex items-center gap-3"
    >
      <div
        className="relative flex h-8 w-5 flex-col items-center"
        aria-hidden="true"
      >
        <motion.div
          className="w-px"
          style={{ background: "var(--lime)" }}
          animate={
            reduceMotion
              ? { height: "100%" }
              : { height: ["0%", "100%", "0%"] }
          }
          transition={{
            duration: 1.8,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            repeatDelay: 0.8,
          }}
        />
      </div>

      <span
        className="text-label"
        style={{ color: "var(--stone-40)" }}
      >
        SCROLL TO EXPLORE
      </span>
    </motion.div>
  );
}

/* ─── Main hero ───────────────────────────────────────────── */

export default function Hero() {
  const reduceMotionPreference = useReducedMotion();
  const prefersReduced = reduceMotionPreference ?? false;

  const { scrollY } = useScroll();

  const nameY = useTransform(scrollY, [0, 500], ["0%", "-5%"]);
  const nameOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const metadataOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const cueOpacity = useTransform(scrollY, [0, 140], [1, 0]);

  const firstName = "JYOTHI".split("");
  const lastName = "AISWARYA".split("");

  return (
    <section
      id="hero"
      className="section-ink relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Introduction — Jyothi Aiswarya"
      style={{
        minHeight: "100svh",
        isolation: "isolate",
      }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="grid-mark" style={{ left: "33.333%" }} />
        <div className="grid-mark" style={{ left: "66.666%" }} />

        <div
          className="absolute left-0 right-0"
          style={{
            top: "75%",
            height: "1px",
            background: "var(--stone-10)",
          }}
        />
      </div>

      {/* Ambient accent lighting */}
      <div
        className="pointer-events-none absolute"
        aria-hidden="true"
        style={{
          zIndex: -1,
          width: "min(70vw, 850px)",
          height: "min(70vw, 850px)",
          top: "-15%",
          right: "-20%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(101,169,255,0.12), rgba(139,124,255,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Top metadata */}
      <motion.div
        style={{ opacity: prefersReduced ? 1 : metadataOpacity }}
        className="container-grid relative z-10 flex items-start justify-between pt-7 sm:pt-8"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className="text-label"
            style={{ color: "var(--stone-40)" }}
          >
            PORTFOLIO
          </span>
          <span
            className="text-label"
            style={{ color: "var(--stone-25)" }}
          >
            2026
          </span>
        </div>

        <div className="hidden flex-col items-center gap-1 md:flex">
          <span
            className="font-display font-bold"
            aria-hidden="true"
            style={{
              fontSize: "clamp(3rem, 4vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              color: "var(--stone-10)",
            }}
          >
            001
          </span>
        </div>

        <div className="flex flex-col items-end gap-1.5 text-right">
          <span
            className="text-label"
            style={{ color: "var(--stone-40)" }}
          >
            IST <span className="tabular-nums"><LiveClock reduceMotion={prefersReduced} /></span>
          </span>
          <span
            className="text-label"
            style={{ color: "var(--stone-25)" }}
          >
            PUTTAPARTHI, IN
          </span>
        </div>
      </motion.div>

      {/* Portrait */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: prefersReduced ? 0 : 0.5,
          duration: prefersReduced ? 0 : 1.1,
        }}
        className="pointer-events-none absolute inset-y-0 right-0"
        style={{
          width: "clamp(220px, 42vw, 600px)",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portrait.jpeg"
          alt=""
          fetchPriority="high"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            mixBlendMode: "luminosity",
            opacity: 0.72,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--ink) 0%, rgba(16,24,39,0.8) 12%, transparent 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--ink) 0%, transparent 38%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, var(--ink) 0%, transparent 22%)",
          }}
        />
      </motion.div>

      {/* Main identity */}
      <motion.div
        style={
          prefersReduced
            ? {}
            : { y: nameY, opacity: nameOpacity }
        }
        className="container-grid relative z-10 flex flex-1 flex-col justify-center"
      >
        <div
          className="relative"
          style={{
            paddingTop: "clamp(45px, 7vh, 90px)",
            paddingBottom: "clamp(28px, 5vh, 56px)",
          }}
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: prefersReduced ? 0 : 0.35,
              duration: 0.6,
            }}
            style={{ marginBottom: "clamp(16px, 2.5vw, 28px)" }}
          >
            <span
              className="text-label"
              style={{
                color: "var(--stone-40)",
                letterSpacing: "0.15em",
              }}
            >
              COMPUTER SCIENCE ENGINEERING STUDENT
            </span>
          </motion.div>

          {/* First name */}
          <LineClip>
            <h1
              className="text-hero-name font-display"
              style={{
                color: "var(--paper)",
                lineHeight: 0.88,
                margin: 0,
              }}
            >
              {firstName.map((char, index) => (
                <AnimLetter
                  key={`${char}-${index}`}
                  char={char}
                  delay={0.08 + index * 0.055}
                  reduceMotion={prefersReduced}
                />
              ))}

              <motion.span
                className="inline-block rounded-full align-middle"
                aria-hidden="true"
                style={{
                  width: "clamp(7px, 0.9vw, 15px)",
                  height: "clamp(7px, 0.9vw, 15px)",
                  background: "var(--lime)",
                  marginLeft: "0.3em",
                  marginBottom: "0.12em",
                }}
                initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: prefersReduced ? 0 : 0.65,
                  duration: prefersReduced ? 0 : 0.45,
                }}
              />
            </h1>
          </LineClip>

          {/* Divider */}
          <motion.div
            initial={prefersReduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: prefersReduced ? 0 : 0.65,
              duration: prefersReduced ? 0 : 0.75,
            }}
            aria-hidden="true"
            style={{
              height: "1px",
              background: "var(--stone-15)",
              transformOrigin: "left",
              margin: "clamp(10px, 1.3vw, 20px) 0",
            }}
          />

          {/* Last name */}
          <LineClip>
            <div
              className="text-hero-name font-display"
              aria-label="Aiswarya"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(244,241,234,0.88)",
                paddingLeft: "clamp(12px, 5vw, 90px)",
                lineHeight: 0.88,
              }}
            >
              {lastName.map((char, index) => (
                <AnimLetter
                  key={`${char}-${index}`}
                  char={char}
                  delay={0.3 + index * 0.05}
                  reduceMotion={prefersReduced}
                />
              ))}
            </div>
          </LineClip>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: prefersReduced ? 0 : 0.8,
              duration: 0.6,
            }}
            className="mt-5 flex justify-end"
          >
            <span
              className="text-label"
              style={{
                color: "var(--stone-40)",
                letterSpacing: "0.12em",
              }}
            >
              CREATIVE TECHNOLOGIST ↗
            </span>
          </motion.div>
        </div>

        {/* Personal descriptor tags */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: prefersReduced ? 0 : 1,
            duration: 0.7,
          }}
          className="flex flex-wrap items-center gap-2.5"
          style={{
            marginTop: "clamp(18px, 3vh, 36px)",
            marginBottom: "clamp(32px, 5vh, 56px)",
          }}
        >
          <span className="tag tag-lime">Builder</span>
          <span className="tag">Learner</span>
          <span className="tag">VP Education · Toastmasters</span>
          <span
            className="text-label"
            style={{
              color: "var(--stone-25)",
              marginLeft: "0.25rem",
            }}
          >
            — Building First Move (11~18)
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        style={{ opacity: prefersReduced ? 1 : cueOpacity }}
        className="container-grid relative z-10 flex items-end justify-between gap-6 pb-7 sm:pb-8"
      >
        <ScrollCue reduceMotion={prefersReduced} />

        <motion.span
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: prefersReduced ? 0 : 1.2,
            duration: 0.5,
          }}
          className="text-label hidden sm:block"
          style={{ color: "var(--stone-25)" }}
        >
          SANSKRITHI SCHOOL OF ENGINEERING
        </motion.span>
      </motion.div>

      {/* Responsive refinements */}
      <style jsx>{`
        @media (max-width: 640px) {
          #hero .text-label {
            letter-spacing: 0.08em;
          }
        }

        @media (max-width: 480px) {
          #hero .text-hero-name {
            font-size: clamp(3.1rem, 14vw, 5rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #hero * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
