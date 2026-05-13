"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  Check,
  Clock3,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  addOns,
  amcPlans,
  blogPosts,
  careerAreas,
  companyCards,
  crmGuideChecklist,
  featureCards,
  helpCenterItems,
  integrationCategories,
  integrationPricingRows,
  integrations,
  overviewCards,
  pricingPlans,
  roadmap,
  serviceTopics,
  slugify,
  trustCards,
  useCases,
  webinars,
  workflowScenarios,
} from "@/components/data/siteContent";
import { Button } from "@/components/ui/Button";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      {children}
    </main>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute left-[-10rem] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-200/60 blur-3xl" />
      <div className="absolute right-[-12rem] top-10 h-[32rem] w-[32rem] rounded-full bg-blue-200/55 blur-3xl" />
      <Reveal className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" showArrow>
            Book a CRM Consultation
          </Button>
          <Button href="/#home" variant="secondary" size="lg">
            Back to Home
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function IconGrid({ items, columns = "xl:grid-cols-3" }: { items: typeof featureCards; columns?: string }) {
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${columns}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            whileHover={{ y: -7 }}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-blue-700">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-slate-950">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

type ServiceTopicKey = keyof typeof serviceTopics;

export function ServiceTopicPage({ topicKey }: { topicKey: ServiceTopicKey }) {
  const topic = serviceTopics[topicKey];

  return (
    <PageShell>
      <PageHero eyebrow={topic.eyebrow} title={topic.title} description={topic.description} />
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading
            title="What this can include"
            description="HNX scopes each CRM system around your real modules, users, permission rules, workflow triggers, reporting needs, and integration points."
          />
          <IconGrid items={topic.cards} columns={topicKey === "industries" ? "xl:grid-cols-4" : "xl:grid-cols-3"} />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-full grid max-w-[min(92vw,1440px)] gap-6 lg:grid-cols-[0.9fr_1.1fr] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-sm">
            <Sparkles className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-slate-950">Built around ownership, not subscription dependency.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              HNX is not a generic SaaS CRM. We build custom CRM systems that your business can own, extend, and run
              around your own operations.
            </p>
            <Button href="/contact" className="mt-6" showArrow>
              Book a CRM Consultation
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Custom modules and fields",
              "Role-based access CRM",
              "Permission-based CRM rules",
              "Workflow automation",
              "CRM dashboard and reports",
              "AI CRM assistant",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Check className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <p className="mt-3 font-bold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ProductPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product"
        title="A workflow-first CRM product built for sales and operations."
        description="Explore the HNX system across lead capture, automation, integrations, dashboards, admin controls, and AI-ready growth layers."
      />
      <section id="product" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading
            eyebrow="Overview"
            title="From lead source to business report in one operating system."
            description="HNX turns scattered sales activity into a structured workflow your team can follow every day."
          />
          <IconGrid items={overviewCards} columns="xl:grid-cols-4" />
        </div>
      </section>
      <section id="features" className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Product features" description="Detailed modules for leads, teams, automations, dashboards, messaging, and AI support." />
          <IconGrid items={featureCards} />
        </div>
      </section>
      <section id="workflows" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Workflow automation examples" description="Practical CRM flows for routing, SLA follow-ups, proposal movement, payments, support escalation, and onboarding." />
          <div className="grid gap-5 lg:grid-cols-3">
            {workflowScenarios.map((workflow) => (
              <motion.article key={workflow.title} whileHover={{ y: -7 }} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{workflow.title}</h3>
                <div className="mt-4 space-y-3">
                  <p className="rounded-2xl bg-cyan-50 p-3 text-sm leading-6 text-slate-700"><strong>Trigger:</strong> {workflow.trigger}</p>
                  <p className="rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-700"><strong>Action:</strong> {workflow.action}</p>
                  <p className="rounded-2xl bg-blue-50 p-3 text-sm leading-6 text-slate-700"><strong>Report:</strong> {workflow.report}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="integrations" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Integration options" description="Connect HNX with lead sources, communication channels, payments, spreadsheets, APIs, and reports." />
          <IconGrid items={integrations} columns="xl:grid-cols-5" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {integrationCategories.map((category) => (
              <article key={category.title} className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="updates" className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Updates and roadmap" description="The CRM can grow from core modules into admin power, automation, and AI layers." />
          <IconGrid items={roadmap} columns="xl:grid-cols-4" />
        </div>
      </section>
    </PageShell>
  );
}

export function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="HNX exists for businesses that have outgrown scattered tools."
        description="We help teams move from spreadsheets, WhatsApp follow-ups, and generic CRM templates to a custom system built around how they actually operate."
      />
      <section id="company" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="About HNX" description="Service-provider built CRM, custom workflow-first implementation, practical automation, and scalable sales operations." />
          <IconGrid items={companyCards} />
        </div>
      </section>
      <section id="careers" className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Careers and future teams" description="Build the future of custom CRM, workflow automation, and AI-enabled business systems." />
          <IconGrid items={careerAreas} />
        </div>
      </section>
      <section id="blog" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="CRM blog library" description="20 practical posts on CRM strategy, automation, reporting, AI, integrations, and team accountability." />
          <BlogGrid />
        </div>
      </section>
      <section id="contact" className="py-16">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center shadow-[0_22px_70px_rgba(15,23,42,0.1)]">
            <Sparkles className="mx-auto h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-slate-950">Want to talk through your CRM workflow?</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Share your current process and we will recommend the right package, timeline, and roadmap.</p>
            <Button href="/contact" className="mt-6" showArrow>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function BlogGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {blogPosts.map((post) => (
        <motion.article key={post.title} whileHover={{ y: -7 }} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-blue-700">{post.category}</span>
          <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{post.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold text-slate-500">{post.readTime}</p>
            <Link href={`/blog/${slugify(post.title)}`} className="text-sm font-bold text-blue-700">
              Open
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Guides, webinars, help content, use cases, and CRM thinking."
        description="Use these resources to plan CRM adoption, prepare workflows, train users, and understand where automation can help."
      />
      <section id="help-center" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Help Center" description="Setup guidance, usage help, dashboard instructions, workflow support, and support request paths." />
          <IconGrid items={helpCenterItems} />
        </div>
      </section>
      <section id="crm-guide" className="py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="CRM Guide" description="Plan your CRM before you build it with this implementation checklist." />
          <div className="grid gap-3">
            {crmGuideChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span>
                <p className="font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="webinars" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Webinars" description="Live and recorded learning sessions for CRM automation, AI, reporting, and implementation planning." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {webinars.map((webinar) => (
              <motion.article key={webinar.title} whileHover={{ y: -7 }} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{webinar.format}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                    {webinar.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{webinar.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{webinar.description}</p>
                <Button href="/contact" variant="secondary" className="mt-5">
                  Register Interest
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="use-cases" className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Use Cases" description="Business-specific CRM workflows for sales, services, operations, and customer follow-ups." />
          <IconGrid items={useCases} columns="xl:grid-cols-4" />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="CRM blog resources" description="A larger library of practical CRM and automation topics." />
          <BlogGrid />
        </div>
      </section>
    </PageShell>
  );
}

export function PricingDetailPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Build-and-own CRM packages with clear scopes and optional add-ons."
        description="Pricing is based on the package structure from your OrgoCRM and VisionCRM pricing documents, adapted for HNX."
      />
      <section id="pricing" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Base packages" description="Choose the build scope that matches your team size, automation depth, integrations, and reporting needs." />
          <div className="grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <motion.article
                key={plan.name}
                whileHover={{ y: -7 }}
                className={`rounded-[30px] border p-6 shadow-[0_20px_60px_rgba(15,23,42,0.09)] ${
                  plan.featured ? "border-blue-200 bg-gradient-to-br from-blue-600 to-cyan-500 text-white" : "border-slate-200 bg-white"
                }`}
              >
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${plan.featured ? "bg-white/[0.18] text-white" : "bg-cyan-50 text-blue-700"}`}>
                  {plan.label}
                </span>
                <h2 className="mt-5 text-2xl font-bold">{plan.name}</h2>
                <p className={`mt-2 leading-7 ${plan.featured ? "text-blue-50" : "text-slate-600"}`}>{plan.description}</p>
                <p className="mt-6 text-4xl font-bold">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex gap-2 text-sm ${plan.featured ? "text-blue-50" : "text-slate-600"}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-white" : "text-blue-600"}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="addons" className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Add-ons and annual maintenance" description="Extend the CRM with automation, lead scoring, support workflows, payments, email sequences, and maintenance support." />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {addOns.map((addon) => (
                <div key={addon.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="font-bold text-slate-950">{addon.title}</p>
                  <p className="mt-1 text-sm font-bold text-blue-700">{addon.price}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{addon.description}</p>
                </div>
              ))}
            </div>
            <div id="amc" className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 shadow-sm">
              <BadgeIndianRupee className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold text-slate-950">Optional Annual Maintenance</h3>
              <div className="mt-5 space-y-3">
                {amcPlans.map((plan) => (
                  <p key={plan} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                    {plan}
                  </p>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                ROI note: a monthly CRM may look cheaper on day one, but HNX is designed as a build-and-own operating system for fewer missed leads, faster follow-ups, cleaner reporting, and better accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="integration-pricing" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Integration pricing context" description="Integration effort depends on data flow, API readiness, automation rules, dashboards, and maintenance needs." />
          <div className="grid gap-3">
            {integrationPricingRows.map((row) => (
              <div key={row.scope} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.8fr_0.7fr_1.5fr]">
                <p className="font-bold text-slate-950">{row.scope}</p>
                <p className="font-semibold text-blue-700">{row.includedIn}</p>
                <p className="leading-6 text-slate-600">{row.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Book your free CRM workflow discussion."
        description="Tell us how you currently manage leads, clients, follow-ups, and team work. We will map how HNX can fit your process."
      />
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto w-full grid max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-[1.05fr_0.95fr] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div id="workflow-audit" className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] sm:p-8">
            <form className="grid gap-4 sm:grid-cols-2">
              {["Full Name", "Business Email", "Phone / WhatsApp", "Company Name", "Business Type"].map((label) => (
                <div key={label}>
                  <label htmlFor={label} className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                  </label>
                  <input id={label} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100" />
                </div>
              ))}
              {["Current Lead Management Process", "Biggest CRM Challenge"].map((label) => (
                <div key={label} className="sm:col-span-2">
                  <label htmlFor={label} className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                  </label>
                  <textarea id={label} rows={5} className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100" />
                </div>
              ))}
              <Button type="submit" size="lg" className="sm:col-span-2" showArrow>
                Book a Free CRM Strategy Call
              </Button>
            </form>
          </div>
          <div id="next-steps" className="grid gap-5">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">What happens next?</h2>
              <div className="mt-5 space-y-4">
                {["We understand your current workflow.", "We identify lead leaks and manual work.", "We recommend the right package and roadmap.", "We share a clear build scope and next steps."].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span>
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {trustCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-slate-950">{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
              <Mail className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <p className="mt-3 font-bold text-slate-950">Prefer direct contact?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Share your CRM requirement, current tools, and team size. We will help you choose the right scope.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-blue-700">
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /> Phone / WhatsApp</span>
                <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" aria-hidden="true" /> CRM brief</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function SolutionsPage() {
  const solutions = [
    {
      id: "sales-crm",
      title: "Sales CRM",
      text: "Manage lead capture, assignment, pipelines, follow-ups, proposals, deal stages, revenue dashboards, and sales team accountability.",
    },
    {
      id: "support-crm",
      title: "Support CRM",
      text: "Track support tickets, customer issues, complaints, SLA escalation, resolution history, and customer communication.",
    },
    {
      id: "operations-crm",
      title: "Operations CRM",
      text: "Run internal tasks, approvals, documents, onboarding, process tracking, team handoffs, and manager reporting.",
    },
    {
      id: "ai-crm",
      title: "AI CRM",
      text: "Add lead scoring, next-best-action, message writing, summaries, report explanations, and internal CRM chatbot support.",
    },
    {
      id: "custom-crm-development",
      title: "Custom CRM Development",
      text: "Build an owned business CRM system with your modules, fields, users, permission sets, integrations, and dashboards.",
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Solutions"
        title="Custom CRM solutions for sales, support, operations, automation, and AI assistance."
        description="HNX builds business CRM systems around the way your team works, so leads, customers, tickets, tasks, permissions, workflows, reports, and AI insights stay connected."
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Solution areas" description="Use HNX as a sales CRM, support CRM, operations CRM, AI CRM layer, or complete custom CRM development partner." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {solutions.map((solution) => (
              <article key={solution.id} id={solution.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-blue-700" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-slate-950">{solution.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SectionHeading title="Industry use cases" description="Each solution combines lead capture, assignment, follow-up automation, dashboards, permissions, and manager visibility." />
          <IconGrid items={useCases} columns="xl:grid-cols-4" />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-slate-950">The solution starts with workflow mapping.</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We identify where leads come from, who owns each stage, what needs to happen next, where delays happen, and which dashboards leadership needs. Then the CRM is built around that process.
            </p>
            <Button href="/contact" className="mt-6" showArrow>
              Map My Workflow
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
