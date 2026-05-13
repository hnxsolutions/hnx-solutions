import { createSolutionMetadata, SolutionSeoPage } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const activeSlug = "booking-payment-system";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function BookingPaymentSystemPage() {
  return (
    <SolutionSeoPage
      category="web-saas"
      activeSlug={activeSlug}
      solutions={webSaasSolutions}
    />
  );
}