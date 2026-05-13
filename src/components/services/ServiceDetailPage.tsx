"use client";

import type { ComponentType } from "react";
import type { ServiceItem } from "@/data/services";
import WebDevelopmentDetailPage from "@/components/services/development/WebDevelopmentDetailPage";
import SaasDevelopmentDetailPage from "@/components/services/development/SaasDevelopmentDetailPage";
import MobileAppDevelopmentDetailPage from "@/components/services/development/MobileAppDevelopmentDetailPage";
import CustomCrmSystemsDetailPage from "@/components/services/development/CustomCrmSystemsDetailPage";
import AiAutomationDetailPage from "@/components/services/automation/AiAutomationDetailPage";
import WorkflowAutomationDetailPage from "@/components/services/automation/WorkflowAutomationDetailPage";
import ApiDevelopmentDetailPage from "@/components/services/automation/ApiDevelopmentDetailPage";
import IntegrationServicesDetailPage from "@/components/services/automation/IntegrationServicesDetailPage";
import DevopsDeploymentDetailPage from "@/components/services/cloud-devops/DevopsDeploymentDetailPage";
import CloudInfrastructureDetailPage from "@/components/services/cloud-devops/CloudInfrastructureDetailPage";
import MaintenanceSupportDetailPage from "@/components/services/cloud-devops/MaintenanceSupportDetailPage";
import SecurityComplianceDetailPage from "@/components/services/cloud-devops/SecurityComplianceDetailPage";
import UiUxDesignDetailPage from "@/components/services/design-growth/UiUxDesignDetailPage";
import LandingPagesCampaignsDetailPage from "@/components/services/design-growth/LandingPagesCampaignsDetailPage";
import SeoAnalyticsDetailPage from "@/components/services/design-growth/SeoAnalyticsDetailPage";
import BrandIdentityDetailPage from "@/components/services/design-growth/BrandIdentityDetailPage";

type ServiceDetailPageProps = {
  service: ServiceItem;
};

type ServiceDetailComponent = ComponentType<ServiceDetailPageProps>;

const serviceDetailPages: Record<string, ServiceDetailComponent> = {
  "web-development": WebDevelopmentDetailPage,
  "saas-development": SaasDevelopmentDetailPage,
  "mobile-app-development": MobileAppDevelopmentDetailPage,
  "custom-crm-systems": CustomCrmSystemsDetailPage,
  "ai-automation": AiAutomationDetailPage,
  "workflow-automation": WorkflowAutomationDetailPage,
  "api-development": ApiDevelopmentDetailPage,
  "integration-services": IntegrationServicesDetailPage,
  "devops-deployment": DevopsDeploymentDetailPage,
  "cloud-infrastructure": CloudInfrastructureDetailPage,
  "maintenance-support": MaintenanceSupportDetailPage,
  "security-compliance": SecurityComplianceDetailPage,
  "ui-ux-design": UiUxDesignDetailPage,
  "landing-pages-campaigns": LandingPagesCampaignsDetailPage,
  "seo-analytics": SeoAnalyticsDetailPage,
  "brand-identity": BrandIdentityDetailPage,
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const DetailPage = serviceDetailPages[service.id] ?? WebDevelopmentDetailPage;

  return <DetailPage service={service} />;
}
