"use client";

import { useRef } from "react";

export function useTilt<T extends HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  const handleMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 14;
    const rotateY = (x - rect.width / 2) / 14;

    el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return { ref, handleMove, reset };
}