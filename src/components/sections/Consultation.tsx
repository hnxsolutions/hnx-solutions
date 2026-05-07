"use client";

import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Star, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";

const stats = [
  { label: "Trusted by Businesses", value: "150+", icon: UsersRound },
  { label: "Customer Satisfaction", value: "4.9/5", icon: Star },
  { label: "Data Security", value: "100%", icon: ShieldCheck },
];

export function Consultation() {
  return (
    <section id="consultation" className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.62, ease: "easeOut" }}
        className="mx-auto grid max-w-[min(95vw,1600px)] gap-6 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8 lg:p-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyanGlow/12 blur-3xl" />
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Headphones className="h-4 w-4" aria-hidden="true" />
              Free strategy call
            </div>
            <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">Book Your Free CRM Consultation</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your business and we’ll show you how HNX can help you grow.
            </p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="full-name" placeholder="Enter your name" />
              <Field label="Work Email" name="work-email" type="email" placeholder="you@company.com" />
              <Field label="Company Name" name="company-name" placeholder="Company name" />
              <Field label="Phone Number" name="phone-number" type="tel" placeholder="+91 98765 43210" />
              <div className="sm:col-span-2">
                <label htmlFor="challenges" className="mb-2 block text-sm font-medium text-slate-200">
                  What are your biggest CRM challenges?
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  rows={5}
                  placeholder="Tell us where your current workflow slows down..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/58 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/55 focus:ring-4 focus:ring-cyanGlow/10"
                />
              </div>
              <Button type="submit" className="sm:col-span-2" size="lg" showArrow>
                Book a CRM Consultation
              </Button>
            </form>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <Icon className="h-5 w-5 text-tealGlow" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ImageSlot src="/images/consultant.jpg" alt="Customer support consultant placeholder" className="min-h-[620px] shadow-card">
          <div className="flex h-full flex-col justify-between p-6">
            <div className="ml-auto max-w-[15rem] rounded-3xl border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyanGlow">Live CRM audit</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Identify automation gaps before your first build sprint.</p>
            </div>
            <div className="max-w-sm rounded-3xl border border-white/10 bg-slate-950/76 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyanGlow to-violetGlow text-sm font-bold text-white">
                  GC
                </span>
                <div>
                  <p className="font-semibold text-white">HNX Consultant</p>
                  <p className="text-xs text-slate-400">Workflow mapping specialist</p>
                </div>
              </div>
              <div className="space-y-2">
                {["Lead capture paths", "Follow-up SLAs", "Dashboard KPIs"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <ShieldCheck className="h-4 w-4 text-tealGlow" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ImageSlot>
      </motion.div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

function Field({ label, name, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/58 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/55 focus:ring-4 focus:ring-cyanGlow/10"
      />
    </div>
  );
}
