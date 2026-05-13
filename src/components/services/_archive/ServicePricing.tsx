  import Link from "next/link";
  import { ArrowRight, CheckCircle2 } from "lucide-react";
  import type { ServiceItem } from "@/data/services";

  type ServicePricingProps = {
    service: ServiceItem;
  };

  export default function ServicePricing({ service }: ServicePricingProps) {
    return (
      <section id="pricing" className="relative py-18 sm:py-22 lg:py-24">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Packages</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
                {service.startingPrice}
              </h2>
            </div>
            <p className="text-base leading-8 text-(--text-soft) md:text-lg">
              Pick the closest starting point, then we shape the final scope around your goals, timeline, integrations, content, and launch requirements.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {service.packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl ${
                  pkg.popular
                    ? "border-primary/35 bg-white/88 dark:bg-white/9"
                    : "border-(--border) bg-white/68 dark:bg-white/5"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${service.accent} ${pkg.popular ? "opacity-100" : "opacity-55"}`} />
                {pkg.popular ? (
                  <span className="absolute right-5 top-5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-primary">
                    Best Value
                  </span>
                ) : null}

                <h3 className="pr-24 text-2xl font-black text-(--text)">{pkg.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-(--text-soft)">{pkg.description}</p>
                <p className={`mt-6 bg-linear-to-r ${service.accent} bg-clip-text text-4xl font-black text-transparent`}>
                  {pkg.price}
                </p>

                <div className="mt-6 grid gap-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-(--text-muted)">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${
                    pkg.popular
                      ? `btn-shine bg-linear-to-r ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.2)]`
                      : "border border-(--border) bg-white/55 text-(--text) hover:border-primary/30 hover:bg-white/80 dark:bg-white/4"
                  }`}
                >
                  Get This Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
