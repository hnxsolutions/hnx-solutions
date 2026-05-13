import type { SolutionCard, SolutionPageData, SolutionStat } from "./types";
import { enhanceSolutions } from "./contentEnhancements";

const href = (slug: string) => `/solutions/design-growth/${slug}`;

const stat = (label: string, value: string, note: string): SolutionStat => ({
  label,
  value,
  note,
});

const card = (
  title: string,
  text: string,
  icon: SolutionCard["icon"],
): SolutionCard => ({
  title,
  text,
  icon,
});

const designGrowthSolutionsBase: SolutionPageData[] = [
  {
    slug: "brand-positioning",
    label: "Brand Positioning",
    href: href("brand-positioning"),
    icon: "Sparkles",
    eyebrow: "Brand Strategy",
    headline: "Position your brand so customers understand why you matter.",
    description:
      "Clarify audience, category, message, proof points, offers, and competitive angle before design or campaigns begin.",
    problem:
      "Many businesses look polished but still sound unclear, making it harder for customers to trust, compare, and buy.",
    solution:
      "HNX defines the brand position, narrative, messaging system, offers, and conversion themes that guide the customer journey.",
    impact:
      "Your website, sales material, ads, and pitch become more consistent, credible, and easier to act on.",
    stats: [
      stat("Message", "Clear", "Audience, problem, offer, proof"),
      stat("Position", "Defined", "Category and differentiation"),
      stat("Offers", "Sharper", "Better conversion framing"),
      stat("Assets", "Aligned", "Website, campaigns, and sales copy"),
    ],
    problems: [
      card("Unclear value", "Customers cannot quickly understand what makes the business different.", "SearchCheck"),
      card("Inconsistent messaging", "Website, sales, and campaign copy all say different things.", "FileText"),
      card("Weak proof", "Claims are not supported by outcomes, process, or trust signals.", "ShieldCheck"),
      card("Generic offers", "Services are described as features instead of business outcomes.", "Sparkles"),
    ],
    flow: [
      card("Audience clarity", "Define who the brand serves, what they care about, and what blocks action.", "Users"),
      card("Positioning", "Choose the category, promise, proof, and differentiation angle.", "Sparkles"),
      card("Messaging system", "Create headline themes, offer copy, objections, and trust language.", "FileText"),
      card("Activation", "Apply positioning across website, sales decks, campaigns, and content.", "Rocket"),
    ],
    modules: [
      card("Audience profile", "Segments, pain points, buying triggers, objections, and language cues.", "Users"),
      card("Positioning statement", "A clear business category, promise, customer value, and proof structure.", "Sparkles"),
      card("Messaging map", "Homepage, service, campaign, and sales message blocks.", "FileText"),
      card("Offer architecture", "Packages, CTAs, proof points, and conversion-focused framing.", "CheckCircle2"),
    ],
    process: [
      card("Research", "Review market, competitors, customers, offers, and current messaging.", "SearchCheck"),
      card("Strategy", "Define differentiation, value proposition, and trust framework.", "Sparkles"),
      card("Messaging", "Write clear copy blocks for web, sales, and campaigns.", "FileText"),
      card("Launch guide", "Document how the brand should show up across channels.", "Palette"),
    ],
    useCases: [
      card("New company launch", "Create a sharp message before building the website or pitch.", "Rocket"),
      card("Service repositioning", "Move from generic service language to business outcome language.", "Sparkles"),
      card("Campaign clarity", "Align ads and landing pages around the same promise.", "BarChart3"),
      card("Sales enablement", "Give teams consistent language for calls, decks, and proposals.", "Users"),
    ],
    preview: {
      title: "Brand Positioning Board",
      subtitle: "Audience, promise, proof, offers, objections, and message blocks.",
      metrics: [
        stat("Segments", "4", "Priority customer groups"),
        stat("Proof Points", "12", "Mapped to buyer concerns"),
        stat("Offer Themes", "6", "Ready for campaigns"),
      ],
      rows: ["Primary promise selected", "Objection language written", "Homepage hero copy approved", "Offer proof mapped"],
    },
    ctaTitle: "Make your brand easier to understand and trust.",
    ctaText:
      "We can clarify your positioning before your next website, pitch, or campaign goes live.",
  },
  {
    slug: "ui-ux-design",
    label: "UI/UX Design",
    href: href("ui-ux-design"),
    icon: "Palette",
    eyebrow: "Interface Design",
    headline: "Interfaces designed for clarity, trust, and action.",
    description:
      "Design websites, dashboards, apps, portals, and admin systems with usable flows, polished visuals, and responsive layouts.",
    problem:
      "Poor UI makes products feel harder than they are, causing users to hesitate, abandon, or rely on support.",
    solution:
      "HNX designs user flows, wireframes, visual systems, interactive states, and handoff-ready screens for development.",
    impact:
      "Customers move faster, teams support less confusion, and your product feels more credible.",
    stats: [
      stat("Flows", "Mapped", "User paths and edge states"),
      stat("Screens", "Responsive", "Desktop, tablet, and mobile"),
      stat("System", "Reusable", "Components and interaction patterns"),
      stat("Handoff", "Ready", "Specs for development"),
    ],
    problems: [
      card("Confusing journeys", "Users cannot find the next step or understand what changed.", "Workflow"),
      card("Inconsistent UI", "Screens look like separate decisions instead of one product.", "Layers3"),
      card("Weak mobile UX", "Layouts break down on smaller screens and touch interactions.", "Smartphone"),
      card("Developer gaps", "Designs lack states, spacing, behavior, and implementation clarity.", "Code2"),
    ],
    flow: [
      card("Map users", "Understand roles, goals, decision points, and pain in the current experience.", "Users"),
      card("Wireframe flows", "Shape the structure before visual polish begins.", "Layers3"),
      card("Design system", "Create reusable components, states, typography, and layout rules.", "Palette"),
      card("Handoff", "Provide developer-ready screens, specs, and interaction notes.", "Code2"),
    ],
    modules: [
      card("User flows", "Role-based journeys for onboarding, conversion, dashboards, and actions.", "Workflow"),
      card("Wireframes", "Clear structure for pages, forms, tables, filters, and modals.", "Layers3"),
      card("Visual design", "Modern, responsive screens with polished spacing, hierarchy, and states.", "Palette"),
      card("Design handoff", "Components, states, responsive notes, and implementation-ready details.", "Code2"),
    ],
    process: [
      card("UX audit", "Review current flows, friction, content, hierarchy, and mobile behavior.", "SearchCheck"),
      card("Structure", "Create wireframes and user journeys for the core experience.", "Layers3"),
      card("Visual polish", "Apply brand, components, interactions, and responsive layouts.", "Palette"),
      card("Handoff review", "Walk through states, edge cases, and developer expectations.", "CheckCircle2"),
    ],
    useCases: [
      card("SaaS dashboard", "Design analytics, tables, settings, roles, and admin workflows.", "LayoutDashboard"),
      card("Mobile app UI", "Create touch-friendly screens for customer and staff apps.", "Smartphone"),
      card("Website redesign", "Improve clarity, trust, conversion, and responsive behavior.", "Code2"),
      card("Portal UX", "Design self-service flows for clients, teams, and customers.", "Users"),
    ],
    preview: {
      title: "UI/UX Design System",
      subtitle: "Flows, screen states, reusable components, and responsive specs.",
      metrics: [
        stat("Screens", "42", "Designed for launch scope"),
        stat("Components", "28", "Reusable UI patterns"),
        stat("States", "90+", "Empty, loading, error, success"),
      ],
      rows: ["Dashboard wireframe approved", "Mobile navigation refined", "Table filters designed", "Developer handoff notes ready"],
    },
    ctaTitle: "Design the experience before users struggle with it.",
    ctaText:
      "We can design clear, premium, responsive interfaces for your website, app, portal, or dashboard.",
  },
  {
    slug: "design-system",
    label: "Design System",
    href: href("design-system"),
    icon: "Layers3",
    eyebrow: "Reusable Product Design",
    headline: "A design system that keeps every screen consistent.",
    description:
      "Create reusable UI components, typography, colors, spacing rules, states, and documentation for faster product design and development.",
    problem:
      "Products become inconsistent when every new page introduces slightly different buttons, cards, tables, forms, and spacing.",
    solution:
      "HNX builds a reusable design system that aligns brand, product UI, and developer implementation.",
    impact:
      "Your team ships faster, maintains visual quality, and avoids rebuilding the same interface patterns repeatedly.",
    stats: [
      stat("Components", "Reusable", "Buttons, inputs, cards, tables, nav"),
      stat("States", "Complete", "Hover, loading, error, empty, success"),
      stat("Tokens", "Defined", "Color, type, radius, spacing"),
      stat("Handoff", "Clean", "Design and dev alignment"),
    ],
    problems: [
      card("UI drift", "Repeated elements look and behave differently across the product.", "Layers3"),
      card("Slow production", "Designers and developers rebuild common patterns every sprint.", "Activity"),
      card("Missing states", "Loading, empty, error, disabled, and success states are forgotten.", "CheckCircle2"),
      card("Brand inconsistency", "Product screens no longer feel aligned with the company identity.", "Palette"),
    ],
    flow: [
      card("Audit UI", "Find repeated patterns, inconsistencies, and missing states.", "SearchCheck"),
      card("Define tokens", "Set typography, color, spacing, radius, elevation, and motion rules.", "Palette"),
      card("Build components", "Create reusable UI patterns for forms, cards, tables, nav, and dashboards.", "Layers3"),
      card("Document usage", "Explain states, variants, responsive behavior, and implementation notes.", "FileText"),
    ],
    modules: [
      card("Design tokens", "Color, typography, spacing, radius, borders, shadows, and motion rules.", "Palette"),
      card("Component library", "Buttons, inputs, cards, tables, charts, modals, tabs, and navigation.", "Layers3"),
      card("State library", "Loading, empty, error, success, disabled, hover, selected, and active states.", "CheckCircle2"),
      card("Documentation", "Usage guidance, accessibility notes, and developer handoff details.", "FileText"),
    ],
    process: [
      card("Inventory", "Catalog existing UI and identify the components worth standardizing.", "SearchCheck"),
      card("Foundation", "Define visual tokens and base interaction rules.", "Palette"),
      card("Components", "Create reusable components and variants with responsive behavior.", "Layers3"),
      card("Adoption", "Document how teams should use and extend the system.", "Users"),
    ],
    useCases: [
      card("SaaS products", "Keep dashboards, settings, billing, and admin screens consistent.", "LayoutDashboard"),
      card("Web platforms", "Create consistent marketing and app surfaces across the site.", "Code2"),
      card("Multi-team delivery", "Help design and development teams move from the same system.", "Users"),
      card("Product redesign", "Rebuild visual foundations before redesigning core screens.", "Palette"),
    ],
    preview: {
      title: "Design System Library",
      subtitle: "Tokens, components, variants, states, and documentation.",
      metrics: [
        stat("Tokens", "64", "Visual decisions captured"),
        stat("Components", "36", "Reusable patterns"),
        stat("Variants", "120+", "States and sizes"),
      ],
      rows: ["Button variants documented", "Table states completed", "Color tokens approved", "Form error states designed"],
    },
    ctaTitle: "Give your product a reusable design foundation.",
    ctaText:
      "We can create a design system that keeps screens consistent and speeds up future builds.",
  },
  {
    slug: "landing-pages",
    label: "Landing Pages",
    href: href("landing-pages"),
    icon: "LayoutDashboard",
    eyebrow: "Conversion Pages",
    headline: "Landing pages built to turn attention into qualified leads.",
    description:
      "Design and build campaign pages with sharp offers, proof, lead forms, tracking, responsive sections, and CRM capture.",
    problem:
      "Ads and outreach waste budget when landing pages are generic, slow, unclear, or disconnected from follow-up.",
    solution:
      "HNX creates focused landing pages with conversion structure, tracking, lead capture, and follow-up paths.",
    impact:
      "Campaign traffic gets a clearer path to inquire, book, buy, or start a conversation.",
    stats: [
      stat("Offer", "Focused", "Single campaign objective"),
      stat("Lead Capture", "Connected", "Forms, CRM, email, and alerts"),
      stat("Tracking", "Ready", "Analytics, pixels, events, and funnels"),
      stat("Speed", "Optimized", "Fast responsive pages"),
    ],
    problems: [
      card("Weak campaign fit", "The page does not match the ad promise or buyer intent.", "Rocket"),
      card("Too many distractions", "Visitors face navigation, generic content, and unclear next steps.", "Workflow"),
      card("Missing proof", "Claims are not backed by outcomes, testimonials, process, or trust markers.", "ShieldCheck"),
      card("No follow-up", "Leads enter a form but do not trigger CRM, alerts, or nurture.", "Network"),
    ],
    flow: [
      card("Offer strategy", "Define the target audience, promise, CTA, objections, and proof.", "Sparkles"),
      card("Page structure", "Build sections around problem, solution, proof, process, and action.", "LayoutDashboard"),
      card("Lead capture", "Connect forms to CRM, email alerts, automation, and qualification fields.", "Users"),
      card("Measure", "Track events, conversion rate, source quality, and follow-up speed.", "BarChart3"),
    ],
    modules: [
      card("Conversion layout", "Hero, proof, benefits, process, use cases, FAQ, and CTA sections.", "LayoutDashboard"),
      card("Lead forms", "Smart form fields, validation, spam control, routing, and notifications.", "FileText"),
      card("Campaign tracking", "Analytics events, pixels, UTM capture, conversion goals, and reporting.", "BarChart3"),
      card("Follow-up automation", "CRM capture, email alerts, WhatsApp triggers, and nurture sequences.", "Workflow"),
    ],
    process: [
      card("Campaign brief", "Clarify source, audience, promise, objection, and conversion goal.", "SearchCheck"),
      card("Copy and design", "Create a focused page with persuasive structure and visual polish.", "Palette"),
      card("Build and connect", "Develop the page, forms, tracking, and CRM handoff.", "Code2"),
      card("Optimize", "Review behavior and improve sections, copy, forms, and CTAs.", "BarChart3"),
    ],
    useCases: [
      card("Paid ads", "Send traffic to a page built for one offer and one CTA.", "Rocket"),
      card("Lead generation", "Capture qualified inquiries with structured form data.", "Users"),
      card("Product launch", "Explain a new product, offer, or campaign with proof and action.", "Sparkles"),
      card("Local services", "Turn search and ad traffic into calls, bookings, or consultations.", "CheckCircle2"),
    ],
    preview: {
      title: "Landing Page Performance Board",
      subtitle: "Traffic, conversion, source quality, form status, and follow-up speed.",
      metrics: [
        stat("Conversion", "8.4%", "Qualified form submissions"),
        stat("Lead Source", "Tracked", "UTM and campaign data"),
        stat("Follow-up", "3m", "Average alert response"),
      ],
      rows: ["Hero CTA clicked", "Qualified lead captured", "CRM record created", "Retargeting pixel fired"],
    },
    ctaTitle: "Turn campaign traffic into measurable leads.",
    ctaText:
      "We can create a focused landing page system with tracking, forms, and follow-up built in.",
  },
  {
    slug: "seo-growth",
    label: "SEO Growth",
    href: href("seo-growth"),
    icon: "SearchCheck",
    eyebrow: "Search Growth Systems",
    headline: "SEO systems that make organic growth measurable.",
    description:
      "Improve technical SEO, page structure, schema, content planning, indexing, analytics, and search performance reporting.",
    problem:
      "Businesses publish pages without a technical foundation, content strategy, or clear way to measure search growth.",
    solution:
      "HNX builds SEO-ready site structures, technical fixes, schema, content maps, and dashboards for ongoing improvement.",
    impact:
      "Your site becomes easier for search engines to understand and easier for the team to improve over time.",
    stats: [
      stat("Technical SEO", "Clean", "Indexing, sitemap, robots, speed"),
      stat("Schema", "Structured", "Rich search context"),
      stat("Content", "Mapped", "Topics, intent, and internal links"),
      stat("Reporting", "Clear", "Traffic, rankings, leads, and actions"),
    ],
    problems: [
      card("Indexing gaps", "Important pages are missing, blocked, duplicated, or poorly structured.", "SearchCheck"),
      card("Slow pages", "Performance issues reduce user trust and search quality.", "Activity"),
      card("Weak content map", "Pages do not align with search intent or business conversion paths.", "FileText"),
      card("No visibility", "Traffic data is not connected to leads, pages, or decisions.", "BarChart3"),
    ],
    flow: [
      card("Audit", "Review technical SEO, structure, indexing, speed, content, and analytics.", "SearchCheck"),
      card("Fix foundation", "Improve metadata, sitemap, robots, schema, internal links, and performance.", "Code2"),
      card("Map content", "Plan pages around search intent, business priority, and conversion paths.", "FileText"),
      card("Measure growth", "Track traffic, rankings, leads, page quality, and next actions.", "BarChart3"),
    ],
    modules: [
      card("Technical SEO", "Metadata, headings, canonical logic, sitemap, robots, redirects, and speed.", "Code2"),
      card("Schema markup", "Structured data for services, FAQs, organization, products, and content.", "FileText"),
      card("Content strategy", "Topic clusters, search intent, page outlines, and internal linking plan.", "SearchCheck"),
      card("SEO dashboard", "Search Console, analytics, page performance, conversions, and reporting.", "BarChart3"),
    ],
    process: [
      card("Audit", "Identify technical blockers, content gaps, and measurement issues.", "SearchCheck"),
      card("Implement", "Fix SEO foundations and tracking across the site.", "Code2"),
      card("Plan content", "Create a prioritized map of pages and topics.", "FileText"),
      card("Review", "Measure search movement and turn findings into next actions.", "BarChart3"),
    ],
    useCases: [
      card("Service businesses", "Rank better for services, locations, and customer intent pages.", "Users"),
      card("SaaS websites", "Build search pages around features, use cases, and comparisons.", "LayoutDashboard"),
      card("Local SEO", "Improve location pages, schema, maps signals, and conversion paths.", "SearchCheck"),
      card("Content growth", "Turn blog and resource planning into a measurable search system.", "FileText"),
    ],
    preview: {
      title: "SEO Growth Dashboard",
      subtitle: "Indexing, clicks, impressions, page health, and conversion signals.",
      metrics: [
        stat("Clicks", "+38%", "Organic traffic trend"),
        stat("Pages Indexed", "124", "Validated URLs"),
        stat("Leads", "42", "Organic conversions"),
      ],
      rows: ["Schema added to service pages", "Sitemap refreshed", "Slow page flagged", "New topic cluster planned"],
    },
    ctaTitle: "Make SEO a system, not a guessing game.",
    ctaText:
      "We can improve your technical SEO, content map, and reporting so organic growth is easier to manage.",
  },
  {
    slug: "analytics-setup",
    label: "Analytics Setup",
    href: href("analytics-setup"),
    icon: "BarChart3",
    eyebrow: "Measurement Systems",
    headline: "Analytics setup that shows what visitors actually do.",
    description:
      "Configure analytics, events, funnels, pixels, dashboards, CRM capture, and reporting around meaningful business actions.",
    problem:
      "Traffic numbers alone do not show which campaigns, pages, and actions create qualified leads or revenue.",
    solution:
      "HNX sets up analytics and conversion tracking that ties user behavior to pages, sources, forms, and business outcomes.",
    impact:
      "You can see what is working, where users drop, and which improvements deserve attention.",
    stats: [
      stat("Events", "Mapped", "Clicks, forms, calls, bookings, payments"),
      stat("Funnels", "Visible", "Drop-off and conversion paths"),
      stat("Sources", "Tracked", "UTM, campaigns, and channels"),
      stat("Reports", "Useful", "Dashboards tied to business actions"),
    ],
    problems: [
      card("Vanity metrics", "Teams see traffic but not qualified actions or source quality.", "BarChart3"),
      card("Missing events", "Important clicks, forms, calls, and bookings are not tracked.", "Activity"),
      card("Campaign confusion", "UTMs, pixels, and conversion goals are inconsistent.", "Network"),
      card("No dashboard", "Data exists in tools but not in a decision-friendly format.", "LayoutDashboard"),
    ],
    flow: [
      card("Define actions", "Choose the events that represent interest, intent, and revenue.", "CheckCircle2"),
      card("Install tracking", "Set up analytics, pixels, tags, UTMs, goals, and events.", "Code2"),
      card("Build dashboard", "Create simple reports for traffic, sources, funnels, and conversion.", "LayoutDashboard"),
      card("Use insights", "Review patterns and decide what to improve next.", "Sparkles"),
    ],
    modules: [
      card("Event plan", "A clear map of clicks, forms, bookings, calls, downloads, and purchases.", "CheckCircle2"),
      card("Tracking setup", "Analytics, pixels, conversion goals, UTM capture, and tag configuration.", "Network"),
      card("Funnel reports", "Landing page, form, checkout, booking, or lead flow performance.", "BarChart3"),
      card("Dashboard view", "Readable reports for founders, marketing, sales, and operations.", "LayoutDashboard"),
    ],
    process: [
      card("Measurement plan", "Choose business questions and the events needed to answer them.", "SearchCheck"),
      card("Implementation", "Configure analytics tools, tags, pixels, UTMs, and conversion goals.", "Code2"),
      card("Validation", "Test events, forms, attribution, and dashboard accuracy.", "CheckCircle2"),
      card("Reporting", "Create a dashboard and review cadence for ongoing decisions.", "BarChart3"),
    ],
    useCases: [
      card("Campaign tracking", "Measure source, click, form, and conversion quality.", "Rocket"),
      card("Website analytics", "Understand page behavior, drop-offs, and top conversion paths.", "LayoutDashboard"),
      card("Lead attribution", "Connect inquiries to pages, campaigns, UTMs, and sales outcomes.", "Users"),
      card("Product analytics", "Track onboarding, feature usage, retention, and upgrade signals.", "Activity"),
    ],
    preview: {
      title: "Analytics Command Center",
      subtitle: "Events, sources, funnels, conversions, and campaign performance.",
      metrics: [
        stat("Events", "38", "Validated tracking points"),
        stat("Funnels", "6", "Conversion paths monitored"),
        stat("Attribution", "Clean", "UTMs and sources captured"),
      ],
      rows: ["Contact form event verified", "Meta pixel firing", "Booking funnel drop-off found", "Organic lead attributed"],
    },
    ctaTitle: "Track the actions that actually matter.",
    ctaText:
      "We can configure analytics, events, dashboards, and reporting so decisions are based on useful data.",
  },
  {
    slug: "campaign-optimization",
    label: "Campaign Optimization",
    href: href("campaign-optimization"),
    icon: "Activity",
    eyebrow: "Growth Optimization",
    headline: "Improve campaigns with better pages, tracking, and follow-up.",
    description:
      "Review traffic, offers, landing pages, forms, events, lead quality, and follow-up workflows to improve campaign performance.",
    problem:
      "Campaigns often fail because ads, landing pages, tracking, and sales follow-up are optimized separately.",
    solution:
      "HNX analyzes the full path from click to lead to conversion and improves the weak points with practical experiments.",
    impact:
      "You reduce wasted spend, improve lead quality, and build a clearer system for ongoing campaign learning.",
    stats: [
      stat("Funnel", "Audited", "Ad click to follow-up path"),
      stat("Experiments", "Planned", "Copy, page, form, and CTA tests"),
      stat("Lead Quality", "Tracked", "Source and qualification signals"),
      stat("Reporting", "Actionable", "What changed and why"),
    ],
    problems: [
      card("High spend, low quality", "Campaigns generate traffic but not enough qualified conversations.", "CreditCard"),
      card("Page mismatch", "Landing pages do not match the ad, audience, or offer.", "LayoutDashboard"),
      card("Form friction", "Forms ask too much, too little, or fail to route leads properly.", "FileText"),
      card("Slow follow-up", "Good leads lose interest because alerts and nurture are weak.", "Bell"),
    ],
    flow: [
      card("Review funnel", "Audit source, landing page, tracking, form, CRM, and follow-up.", "SearchCheck"),
      card("Find friction", "Identify the pages, fields, messages, or steps reducing conversion.", "Activity"),
      card("Run improvements", "Test offer, copy, layout, CTA, form, and automation changes.", "Sparkles"),
      card("Measure quality", "Track not just leads, but qualified leads and business outcomes.", "BarChart3"),
    ],
    modules: [
      card("Funnel audit", "End-to-end review from ad promise to lead qualification.", "SearchCheck"),
      card("Landing page updates", "Improve offer clarity, proof, CTA, layout, and mobile experience.", "LayoutDashboard"),
      card("Form optimization", "Refine fields, validation, routing, spam control, and conversion events.", "FileText"),
      card("Follow-up system", "Connect CRM, alerts, WhatsApp, email, and lead scoring.", "Workflow"),
    ],
    process: [
      card("Baseline", "Collect current traffic, conversion, source, and follow-up data.", "BarChart3"),
      card("Diagnose", "Find the biggest conversion and lead quality blockers.", "SearchCheck"),
      card("Improve", "Apply focused changes to page, form, tracking, and nurture.", "Sparkles"),
      card("Review", "Measure results and plan the next optimization cycle.", "Activity"),
    ],
    useCases: [
      card("Lead generation ads", "Improve landing pages and follow-up for paid campaigns.", "Users"),
      card("Service offers", "Clarify promise, proof, pricing, and next step for inquiries.", "Sparkles"),
      card("Webinar campaigns", "Optimize registration, reminders, attendance, and post-event follow-up.", "Bell"),
      card("Product launches", "Measure interest, segment leads, and improve conversion paths.", "Rocket"),
    ],
    preview: {
      title: "Campaign Optimization Board",
      subtitle: "Traffic, landing page conversion, lead quality, and follow-up speed.",
      metrics: [
        stat("CPL", "-22%", "After funnel improvements"),
        stat("Lead Quality", "+31%", "Qualified inquiry rate"),
        stat("Follow-up", "5m", "Average response time"),
      ],
      rows: ["Ad-message mismatch fixed", "Form fields reduced", "CRM alerts connected", "CTA test launched"],
    },
    ctaTitle: "Make your campaigns easier to measure and improve.",
    ctaText:
      "We can optimize the full path from campaign traffic to qualified lead follow-up.",
  },
];

export const designGrowthSolutions = enhanceSolutions("design-growth", designGrowthSolutionsBase);
