import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getServiceById, services } from "@/data/services";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type ServiceRouteProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | HNX Solutions",
      description: "The requested HNX Solutions service could not be found.",
      path: `/services/${serviceId}`,
    });
  }

  return createMetadata({
    title: `${service.title} Services | HNX Solutions`,
    description: service.fullDescription,
    path: `/services/${service.id}`,
    keywords: [
      service.title,
      service.badge,
      ...service.tags,
      ...service.features,
      "HNX Solutions services",
    ],
  });
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  if (serviceId !== service.id) {
    redirect(`/services/${service.id}`);
  }

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.id}` },
          ]),
          createServiceJsonLd({
            name: service.title,
            description: service.fullDescription,
            path: `/services/${service.id}`,
            serviceType: service.badge,
          }),
        ]}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
