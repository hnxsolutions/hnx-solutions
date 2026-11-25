import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

import BookingPaymentSystemClient from "./BookingPaymentSystemClient";

const activeSlug = "booking-payment-system";

export const metadata = createSolutionMetadata({
  category: "web-saas",
  activeSlug,
  solutions: webSaasSolutions,
});

export default function BookingPaymentSystemPage() {
  return <BookingPaymentSystemClient />;
}
