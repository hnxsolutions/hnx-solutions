import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type IndustrySeoItem = {
  title: string;
  description: string;
  canonicalPath: string;
  label: string;
  keywords: string[];
};

export const industrySeo: Record<string, IndustrySeoItem> = {
  "healthcare-crm": {
    label: "Healthcare",
    canonicalPath: "/industries/healthcare-crm",
    title: "Healthcare Digital Solutions | CRM, Patient Portal, Apps & Automation",
    description:
      "HNX Solutions builds healthcare CRM systems, patient portals, appointment automation, mobile apps, websites, dashboards, and secure digital workflows for clinics, hospitals, and healthcare providers.",
    keywords: ["healthcare CRM", "patient portal", "appointment automation", "healthcare app", "clinic CRM"],
  },
  healthcare: {
    label: "Healthcare",
    canonicalPath: "/industries/healthcare-crm",
    title: "Healthcare Digital Solutions | CRM, Patient Portal, Apps & Automation",
    description:
      "HNX Solutions builds healthcare CRM systems, patient portals, appointment automation, mobile apps, websites, dashboards, and secure digital workflows for clinics, hospitals, and healthcare providers.",
    keywords: ["healthcare CRM", "patient portal", "appointment automation", "healthcare app", "clinic CRM"],
  },
  "real-estate-crm": {
    label: "Real Estate",
    canonicalPath: "/industries/real-estate-crm",
    title: "Real Estate Digital Solutions | Property CRM, Portals & Automation",
    description:
      "HNX Solutions builds real estate CRM systems, property lead workflows, site visit tracking, broker dashboards, document portals, and sales automation for property businesses.",
    keywords: ["real estate CRM", "property CRM", "broker dashboard", "site visit tracking", "real estate automation"],
  },
  "education-crm": {
    label: "Education",
    canonicalPath: "/industries/education-crm",
    title: "Education Digital Solutions | Admissions CRM, Portals & Automation",
    description:
      "HNX Solutions builds education CRM systems for admissions, student enquiries, counselors, batches, fee follow-ups, parent communication, dashboards, and student portals.",
    keywords: ["education CRM", "admissions CRM", "student portal", "fee follow-up automation", "counselor dashboard"],
  },
  "manufacturing-crm": {
    label: "Manufacturing",
    canonicalPath: "/industries/manufacturing-crm",
    title: "Manufacturing Digital Solutions | CRM, Production & Workflow Systems",
    description:
      "HNX Solutions builds manufacturing CRM, production tracking, dealer workflows, inventory dashboards, quotation systems, approvals, and operational automation for factories and industrial teams.",
    keywords: ["manufacturing CRM", "production tracking", "dealer CRM", "inventory dashboard", "manufacturing automation"],
  },
  "retail-crm": {
    label: "Retail",
    canonicalPath: "/industries/retail-crm",
    title: "Retail Digital Solutions | CRM, POS, Loyalty & Ecommerce Systems",
    description:
      "HNX Solutions builds retail CRM systems, ecommerce workflows, customer loyalty systems, inventory dashboards, order tracking, marketing automation, and reporting for retail businesses.",
    keywords: ["retail CRM", "retail automation", "ecommerce CRM", "loyalty system", "inventory dashboard"],
  },
  "finance-crm": {
    label: "Finance",
    canonicalPath: "/industries/finance-crm",
    title: "Finance Digital Solutions | CRM, Loan Workflows & Dashboards",
    description:
      "HNX Solutions builds finance CRM systems for leads, loan workflows, document collection, client onboarding, advisor follow-ups, compliance visibility, and financial dashboards.",
    keywords: ["finance CRM", "loan CRM", "financial dashboard", "client onboarding", "document collection"],
  },
  "insurance-crm": {
    label: "Insurance",
    canonicalPath: "/industries/insurance-crm",
    title: "Insurance Digital Solutions | Policy CRM, Renewals & Automation",
    description:
      "HNX Solutions builds insurance CRM systems for policy leads, renewals, claims, document tracking, agent workflows, reminders, customer communication, and reporting.",
    keywords: ["insurance CRM", "policy CRM", "renewal automation", "claims workflow", "agent dashboard"],
  },
  "travel-crm": {
    label: "Travel",
    canonicalPath: "/industries/travel-crm",
    title: "Travel Digital Solutions | CRM, Booking, Itinerary & Lead Systems",
    description:
      "HNX Solutions builds travel CRM systems, itinerary workflows, booking management, lead follow-ups, customer portals, payment tracking, and travel business dashboards.",
    keywords: ["travel CRM", "booking CRM", "itinerary management", "travel lead automation", "travel dashboard"],
  },
  "automobile-crm": {
    label: "Automobile",
    canonicalPath: "/industries/automobile-crm",
    title: "Automobile Digital Solutions | Dealer CRM, Service & Lead Systems",
    description:
      "HNX Solutions builds automobile CRM systems for vehicle leads, test drives, service reminders, dealership workflows, inventory, customer communication, and sales dashboards.",
    keywords: ["automobile CRM", "dealer CRM", "vehicle lead management", "test drive CRM", "service reminder automation"],
  },
  "service-business-crm": {
    label: "Service Business",
    canonicalPath: "/industries/service-business-crm",
    title: "Service Business Digital Solutions | CRM, Booking & Workflow Systems",
    description:
      "HNX Solutions builds CRM, booking, support, task, follow-up, customer portal, payment, and reporting systems for service businesses and local teams.",
    keywords: ["service business CRM", "booking CRM", "support workflow", "local business automation", "service dashboard"],
  },
};

export function createIndustryMetadata(slug: string): Metadata {
  const item = industrySeo[slug] ?? industrySeo["service-business-crm"];

  return createMetadata({
    title: item.title,
    description: item.description,
    path: item.canonicalPath,
    keywords: item.keywords,
  });
}

export function IndustrySeoJsonLd({ slug }: { slug: string }) {
  const item = industrySeo[slug] ?? industrySeo["service-business-crm"];

  return (
    <JsonLd
      data={[
        createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: item.label, path: item.canonicalPath },
        ]),
        createServiceJsonLd({
          name: `${item.label} Digital Solutions`,
          description: item.description,
          path: item.canonicalPath,
          serviceType: "Industry Digital Solution",
        }),
      ]}
    />
  );
}
