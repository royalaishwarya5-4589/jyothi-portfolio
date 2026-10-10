"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorBloom() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.hover
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const animate = () => {
      const lerpFactor = 0.12;
      current.current.x += (pos.current.x - current.current.x) * lerpFactor;
      current.current.y += (pos.current.y - current.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x - 6}px, ${current.current.y - 6}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameRef.current);
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className={`cursor-bloom ${hovering ? "hovering" : ""}`}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
