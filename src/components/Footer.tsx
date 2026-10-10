
"use client";

import { motion, useReducedMotion } from "framer-motion";

const links = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/jyothi-aiswarya-6b9723422/",
  },
  {
    label: "GITHUB",
    href: "https://github.com/royalaishwarya5-4589",
  },
  {
    label: "FIRST MOVE",
    href: "https://first-move-11-18.vercel.app",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      aria-label="Portfolio footer"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--ink)",
        color: "var(--paper)",
        borderTop: "1px solid rgba(244,241,234,.16)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10rem",
          top: "-12rem",
          width: "30rem",
          height: "30rem",
          borderRadius: "50%",
          background: "var(--violet)",
          opacity: 0.1,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-grid"
        style={{
          position: "relative",
          paddingTop: "clamp(4rem, 10vw, 8rem)",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          <span className="text-label" style={{ color: "var(--lime)" }}>
            THE NEXT CHAPTER
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(244,241,234,.18)",
            }}
          />
          <span
            className="text-label"
            style={{ color: "rgba(244,241,234,.45)" }}
          >
            06 / END
          </span>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          style={{ maxWidth: "68rem" }}
        >
          <p
            className="text-label"
            style={{
              color: "rgba(244,241,234,.56)",
              marginBottom: "1.5rem",
            }}
          >
            HAVE AN IDEA? LET&apos;S TALK.
          </p>

          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(3rem, 9.5vw, 8.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.075em",
              margin: 0,
            }}
          >
            Let&apos;s make
            <br />
            <span style={{ color: "var(--lime)" }}>something</span>
            <br />
            meaningful.
          </h2>

          <p
            style={{
              maxWidth: "34rem",
              marginTop: "2rem",
              color: "rgba(244,241,234,.68)",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              lineHeight: 1.85,
            }}
          >
            I&apos;m interested in technology, thoughtful design, and ideas
            that make learning better. If you&apos;re building something
            interesting, I&apos;d love to hear about it.
          </p>

          <motion.a
            href="mailto:royalaishwarya5@gmail.com"
            whileHover={reduceMotion ? undefined : { x: 5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              marginTop: "2rem",
              padding: "1rem 1.25rem",
              minWidth: "min(100%, 19rem)",
              border: "1px solid rgba(101,169,255,.6)",
              color: "var(--paper)",
              background: "rgba(139,124,255,.08)",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
            }}
          >
            <span>GET IN TOUCH</span>
            <span aria-hidden="true" style={{ color: "var(--lime)" }}>
              ↗
            </span>
          </motion.a>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "2.5rem",
            alignItems: "end",
            marginTop: "clamp(5rem, 11vw, 9rem)",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(244,241,234,.16)",
          }}
        >
          <div>
            <p
              className="font-display font-bold"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.06em",
                margin: 0,
              }}
            >
              JA<span style={{ color: "var(--lime)" }}>.</span>
            </p>
            <p
              className="text-label"
              style={{
                color: "rgba(244,241,234,.65)",
                marginTop: "0.65rem",
              }}
            >
              JYOTHI AISWARYA
            </p>
            <p
              style={{
                color: "rgba(244,241,234,.42)",
                fontSize: "0.78rem",
                lineHeight: 1.8,
                marginTop: "0.5rem",
              }}
            >
              B.Tech CSE · Sanskrithi School of Engineering
              <br />
              Puttaparthi, India
            </p>
          </div>

          <nav aria-label="Social and project links">
            <p
              className="text-label"
              style={{
                color: "rgba(244,241,234,.42)",
                marginBottom: "1rem",
              }}
            >
              FIND ME ELSEWHERE
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem 1.5rem",
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(244,241,234,.72)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    transition: "color 180ms ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--lime)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color =
                      "rgba(244,241,234,.72)";
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </nav>

          <div
            style={{
              color: "rgba(244,241,234,.42)",
              fontSize: "0.7rem",
              lineHeight: 1.9,
            }}
          >
            <p style={{ margin: 0 }}>DESIGNED WITH INTENTION.</p>
            <p style={{ margin: 0 }}>BUILT TO KEEP LEARNING.</p>
            <p style={{ marginTop: "0.75rem" }}>
              © {new Date().getFullYear()} Jyothi Aiswarya
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            marginTop: "clamp(3rem, 7vw, 6rem)",
            overflow: "hidden",
            fontSize: "clamp(3.5rem, 14.5vw, 13rem)",
            fontWeight: 700,
            lineHeight: 0.8,
            letterSpacing: "-0.09em",
            whiteSpace: "nowrap",
            color: "transparent",
            WebkitTextStroke: "1px rgba(244,241,234,.12)",
            userSelect: "none",
          }}
        >
          KEEP BUILDING.
        </div>
      </div>
    </footer>
  );
}
