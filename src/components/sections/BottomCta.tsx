"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BottomCta() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.62, ease: "easeOut" }}
        className="mx-auto max-w-[min(92vw,1440px)] overflow-hidden rounded-[34px] border border-cyanGlow/28 bg-[radial-gradient(circle_at_12%_20%,rgba(20,241,217,0.24),transparent_24%),radial-gradient(circle_at_88%_14%,rgba(124,58,237,0.26),transparent_26%),linear-gradient(135deg,rgba(37,208,255,0.18),rgba(12,22,44,0.95)_52%,rgba(124,58,237,0.2))] p-6 shadow-glow sm:p-8 lg:p-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid h-32 w-32 place-items-center rounded-[30px] border border-white/15 bg-slate-950/45"
          >
            <div className="absolute inset-3 rounded-3xl bg-cyanGlow/12 blur-xl" />
            <Image
              src="/images/rocket-illustration.png"
              alt="Rocket illustration"
              width={120}
              height={120}
              className="relative h-24 w-24 object-contain drop-shadow-[0_0_24px_rgba(37,208,255,0.35)]"
            />
            <Sparkles className="absolute right-6 top-5 h-4 w-4 text-tealGlow" aria-hidden="true" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">Ready to Organize, Automate and Grow?</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-cyan-50/78">
              Join 150+ businesses that run their operations smarter with HNX.
            </p>
          </div>
          <Button href="/#consultation" size="lg" className="w-full !bg-none !bg-white !text-slate-950 hover:shadow-[0_0_38px_rgba(255,255,255,0.34)] lg:w-auto" showArrow>
            Book a CRM Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
