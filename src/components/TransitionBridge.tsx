
"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const fragments = [
  { label: "CURIOUS BY NATURE", position: "0%" },
  { label: "BUILT THROUGH PRACTICE", position: "35%" },
  { label: "ALWAYS IN MOTION", position: "72%" },
];

export default function TransitionBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const driftLeft = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["5%", "-8%"]
  );

  const driftRight = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-4%", "7%"]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.05, 0.48, 0.9],
    [0.15, 1, 0.7]
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.1, 0.65, 0.12]
  );

  return (
    <section
      ref={ref}
      aria-label="A little about my approach"
      className="relative overflow-hidden section-ink"
      style={{
        padding: "clamp(68px, 10vw, 132px) 0",
        isolation: "isolate",
      }}
    >
      {/* Ambient blue-violet light */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          style={{
            position: "absolute",
            width: "65vw",
            height: "65vw",
            maxWidth: "780px",
            maxHeight: "780px",
            minWidth: "300px",
            minHeight: "300px",
            top: "-65%",
            left: "15%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(101,169,255,0.2), rgba(139,124,255,0.09) 38%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
      </motion.div>

      {/* Oversized editorial typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative"
        style={{
          height: "clamp(155px, 24vw, 310px)",
        }}
      >
        <motion.div
          style={{ x: driftLeft }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          <span
            style={{
              fontSize: "clamp(43px, 8.5vw, 116px)",
              lineHeight: 1,
              letterSpacing: "-0.075em",
              fontWeight: 600,
              color: "var(--paper)",
              opacity: 0.09,
            }}
          >
            THINK DEEPLY. BUILD INTENTIONALLY.
          </span>
        </motion.div>

        <motion.div
          style={{ x: driftRight }}
          className="absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          <span
            style={{
              fontSize: "clamp(29px, 5vw, 68px)",
              lineHeight: 1,
              letterSpacing: "-0.055em",
              fontWeight: 500,
              color: "var(--lime)",
              opacity: 0.65,
            }}
          >
            LEARN · EXPLORE · CREATE
          </span>
        </motion.div>
      </div>

      {/* Identity fragments */}
      <div className="container-grid relative">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            paddingBottom: "clamp(35px, 6vw, 70px)",
          }}
        >
          {fragments.map((fragment, index) => (
            <motion.div
              key={fragment.label}
              initial={
                reduceMotion ? false : { opacity: 0, y: 14 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "clamp(8px, 1vw, 10px)",
                lineHeight: 1.7,
                letterSpacing: "0.09em",
                color: "var(--stone)",
                opacity: 0.7,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: index === 1 ? "var(--violet)" : "var(--lime)",
                  marginBottom: "15px",
                }}
              />
              {fragment.label}
            </motion.div>
          ))}
        </div>

        {/* Fine rule that leads into the next section */}
        <div
          style={{
            position: "relative",
            height: "1px",
            background: "rgba(244,241,234,0.12)",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              scaleX: lineScale,
              transformOrigin: "left",
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(90deg, var(--lime), var(--violet), transparent)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            paddingTop: "18px",
            color: "var(--stone)",
            opacity: 0.55,
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "9px",
            letterSpacing: "0.1em",
          }}
        >
          <span>THE MINDSET</span>
          <span>ABOUT — WORK — ENGINEERING — EXPERIMENTS</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 560px) {
          .container-grid > div:first-child {
            gap: 10px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
