"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { crmClass } from "./crmAnimationUtils";

type CrmRevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "card"
  | "pop"
  | "line"
  | "none";

type CrmRevealProps = {
  children?: ReactNode;
  className?: string;
  variant?: CrmRevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
};

const variantClasses: Record<CrmRevealVariant, string> = {
  "fade-up":
    "translate-y-6 opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:translate-y-9",
  "fade-left":
    "translate-x-3 opacity-0 data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100 sm:translate-x-8",
  "fade-right":
    "-translate-x-3 opacity-0 data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100 sm:-translate-x-8",
  "scale-in":
    "translate-y-5 scale-[0.96] opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:scale-100 data-[visible=true]:opacity-100",
  card:
    "translate-y-7 scale-[0.96] opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:scale-100 data-[visible=true]:opacity-100",
  pop:
    "scale-[0.82] opacity-0 data-[visible=true]:scale-100 data-[visible=true]:opacity-100",
  line:
    "origin-left scale-x-0 opacity-0 data-[visible=true]:scale-x-100 data-[visible=true]:opacity-100",
  none: "",
};

export default function CrmReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 780,
  once = true,
}: CrmRevealProps) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = revealRef.current;

    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setVisible(false);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={revealRef}
      data-visible={visible}
      className={crmClass(
        "crm-reveal transform-gpu transition-[opacity,transform] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none",
        variantClasses[variant],
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
