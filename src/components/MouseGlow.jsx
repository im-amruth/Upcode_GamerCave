"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow({
  size = 300,
  opacity = 40,
  speed = 0.1,
}) {
  const glowRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      // interpolate (smoothly follow)
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * speed;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * speed;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${
          glowPos.current.x - size / 2
        }px, ${glowPos.current.y - size / 2}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", handleMove);
  }, [size, speed]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-1 rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity / 100,
        background: `radial-gradient(circle at center, 
          rgba(255, 255, 255, 0.15) 0%, 
          rgba(255, 255, 255, 0.1) 25%, 
          rgba(255, 255, 255, 0.05) 50%, 
          rgba(255, 255, 255, 0.02) 75%, 
          transparent 100%)`,
        filter: 'blur(80px)',
      }}
    ></div>
  );
}