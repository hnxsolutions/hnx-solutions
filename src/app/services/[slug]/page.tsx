import { notFound } from "next/navigation";
import { getServiceById, services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return {
      title: "Service Not Found | HNX Technologies",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | HNX Technologies`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}