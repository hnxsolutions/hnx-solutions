import Image from "next/image";
import type { ReactNode } from "react";

type ImageSlotProps = {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
};

export function ImageSlot({ src, alt, children, className = "", priority = false }: ImageSlotProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,208,255,0.28),transparent_28%),radial-gradient(circle_at_84%_78%,rgba(124,58,237,0.24),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.82),rgba(3,7,18,0.96))]" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover opacity-0 transition duration-500 group-hover:scale-[1.025]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        onLoad={(event) => {
          event.currentTarget.style.opacity = "1";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-slate-950/14 to-transparent" />
      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}
