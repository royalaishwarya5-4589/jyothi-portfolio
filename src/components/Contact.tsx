
"use client";

import { motion, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    label: "EMAIL",
    value: "royalaishwarya5@gmail.com",
    href: "mailto:royalaishwarya5@gmail.com",
    number: "01",
  },
  {
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/jyothi-aiswarya-6b9723422/",
    number: "02",
  },
  {
    label: "GITHUB",
    value: "Explore my projects",
    href: "https://github.com/royalaishwarya5-4589",
    number: "03",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "clamp(96px, 13vw, 180px) clamp(22px, 7vw, 110px) 32px",
      }}
    >
      {/* Cinematic ambient lighting */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "min(75vw, 850px)",
          height: "min(75vw, 850px)",
          borderRadius: "50%",
          top: "-15%",
          right: "-25%",
          background:
            "radial-gradient(circle, rgba(101,169,255,0.15) 0%, rgba(139,124,255,0.09) 35%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "min(50vw, 550px)",
          height: "min(50vw, 550px)",
          borderRadius: "50%",
          bottom: "5%",
          left: "-25%",
          background:
            "radial-gradient(circle, rgba(139,124,255,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "42px",
          }}
        >
          <span
            style={{
              width: "30px",
              height: "1px",
              background: "var(--lime)",
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "var(--lime)",
            }}
          >
            HAVE A PROJECT IN MIND?
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          id="contact-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: 0,
            maxWidth: "1100px",
            fontSize: "clamp(48px, 10.5vw, 144px)",
            lineHeight: 0.94,
            letterSpacing: "-0.075em",
            fontWeight: 600,
            overflowWrap: "break-word",
          }}
        >
          LET&apos;S BUILD
          <br />
          <span
            style={{
              color: "var(--lime)",
              display: "inline-block",
            }}
          >
            WHAT&apos;S NEXT.
          </span>
        </motion.h2>

        {/* Supporting message */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12 }}
          style={{
            maxWidth: "480px",
            margin: "34px 0 0",
            color: "var(--stone)",
            opacity: 0.8,
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.9,
          }}
        >
          I&apos;m always interested in meaningful ideas, thoughtful
          collaborations, and building technology that makes a difference.
          Let&apos;s start a conversation.
        </motion.p>

        {/* Contact links */}
        <div
          style={{
            marginTop: "clamp(64px, 9vw, 120px)",
            borderTop: "1px solid rgba(244,241,234,0.16)",
          }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.number}
              href={link.href}
              target={
                link.href.startsWith("mailto:") ? undefined : "_blank"
              }
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="contact-link"
              style={{
                display: "grid",
                gridTemplateColumns: "60px minmax(90px, 0.7fr) minmax(0, 2fr) 32px",
                alignItems: "center",
                gap: "18px",
                padding: "26px 4px",
                borderBottom: "1px solid rgba(244,241,234,0.16)",
                color: "var(--paper)",
                textDecoration: "none",
                transition:
                  "color 220ms ease, padding-left 220ms ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "11px",
                  color: "var(--lime)",
                }}
              >
                {link.number}
              </span>

              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  opacity: 0.65,
                }}
              >
                {link.label}
              </span>

              <span
                style={{
                  fontSize: "clamp(14px, 2vw, 20px)",
                  overflowWrap: "anywhere",
                }}
              >
                {link.value}
              </span>

              <span
                aria-hidden="true"
                className="contact-arrow"
                style={{
                  fontSize: "22px",
                  color: "var(--lime)",
                  textAlign: "right",
                  transition: "transform 220ms ease",
                }}
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        {/* Personal signature */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
            paddingTop: "clamp(65px, 9vw, 110px)",
            paddingBottom: "44px",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.055em",
              }}
            >
              JYOTHI AISWARYA
              <span style={{ color: "var(--lime)" }}>.</span>
            </p>

            <p
              style={{
                margin: "12px 0 0",
                color: "var(--stone)",
                opacity: 0.7,
                fontSize: "12px",
                lineHeight: 1.8,
              }}
            >
              Computer Science Engineering
              <br />
              Building, learning, and moving forward.
            </p>
          </div>

          <a
            href="#top"
            className="back-to-top"
            style={{
              color: "var(--paper)",
              textDecoration: "none",
              fontSize: "12px",
              padding: "12px 0",
            }}
          >
            BACK TO TOP ↑
          </a>
        </div>

        {/* Footer — fixed year avoids unstable prerender-time Date */}
        <div
          style={{
            borderTop: "1px solid rgba(244,241,234,0.16)",
            paddingTop: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              color: "var(--stone)",
              opacity: 0.65,
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "10px",
              letterSpacing: "0.04em",
            }}
          >
            © 2026 JYOTHI AISWARYA
          </span>

          <span
            style={{
              color: "var(--stone)",
              opacity: 0.65,
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "10px",
              letterSpacing: "0.08em",
            }}
          >
            DESIGNED WITH INTENTION.
          </span>
        </div>
      </div>

      <style jsx>{`
        .contact-link:hover {
          color: var(--lime) !important;
          padding-left: 12px !important;
        }

        .contact-link:hover .contact-arrow {
          transform: translate(3px, -3px);
        }

        .back-to-top:hover {
          color: var(--lime) !important;
        }

        @media (max-width: 560px) {
          .contact-link {
            grid-template-columns: 28px minmax(0, 1fr) 24px !important;
            gap: 10px !important;
            padding: 22px 0 !important;
          }

          .contact-link > span:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
          }

          .contact-link > span:nth-child(3) {
            grid-column: 2;
            grid-row: 2;
          }

          .contact-link > span:nth-child(4) {
            grid-column: 3;
            grid-row: 1 / span 2;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-link,
          .contact-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
