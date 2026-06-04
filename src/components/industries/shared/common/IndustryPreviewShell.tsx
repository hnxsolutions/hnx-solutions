"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type IndustryPreviewShellProps = {
  children: ReactNode;
};

export default function IndustryPreviewShell({
  children,
}: IndustryPreviewShellProps) {
  return (
    <main className="page-shell relative isolate overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#070b14] dark:text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-80 dark:opacity-45"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.96))] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.14),transparent_30%),linear-gradient(180deg,rgba(7,11,20,0.98),rgba(2,6,23,0.98))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:bg-[linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.06)_1px,transparent_1px)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </main>
  );
}
