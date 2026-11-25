import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import BookingOrderAppClient from "./BookingOrderAppClient";

const activeSlug = "booking-order-app";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function BookingOrderAppPage() {
  return <BookingOrderAppClient />;
}
