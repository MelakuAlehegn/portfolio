"use client";

import { useEffect } from "react";

export function AmbientSpotlight() {
  useEffect(() => {
    const root = document.documentElement;
    let hasPointer = false;
    let frame = 0;

    const setPosition = (x: number, y: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--spotlight-x", `${x}px`);
        root.style.setProperty("--spotlight-y", `${y}px`);
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      hasPointer = true;
      setPosition(event.clientX, event.clientY);
    };

    const handleScroll = () => {
      if (hasPointer) return;

      const progress =
        window.scrollY /
        Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      setPosition(window.innerWidth * 0.58, window.innerHeight * (0.24 + progress * 0.32));
    };

    handleScroll();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return <div className="ambient-spotlight" aria-hidden="true" />;
}
