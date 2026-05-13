import Link from "next/link";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import type { ServiceItem } from "@/data/services";

type ServiceCTAProps = {
  service: ServiceItem;
};

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="relative py-18 sm:py-22 lg:py-24">
      <div className="mx-auto w-full max-w-[min(92vw,1180px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="glass-card relative overflow-hidden rounded-[2rem] border border-(--border) p-7 text-center shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-10 md:p-14">
          <div className={`pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-linear-to-br ${service.accent} opacity-18 blur-3xl`} />
          <div className={`pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-linear-to-br ${service.accent} opacity-12 blur-3xl`} />

          <div className="relative z-10">
            <span className={`mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br ${service.accent} text-white shadow-[0_18px_48px_rgba(37,99,235,0.2)]`}>
              <Sparkles className="h-7 w-7" />
            </span>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-primary">Ready to start</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
              {service.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-(--text-soft) md:text-lg">
              {service.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={`btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r ${service.accent} px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 sm:text-base`}
              >
                <CalendarCheck className="h-5 w-5" />
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-(--border) bg-white/60 px-7 py-4 text-sm font-bold text-(--text) transition hover:border-primary/30 hover:bg-white/85 dark:bg-white/4 sm:text-base"
              >
                Explore More Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
