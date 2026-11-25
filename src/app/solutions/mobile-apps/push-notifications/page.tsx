import { createSolutionMetadata } from "@/components/solutions/shared/SolutionSeoPage";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";

import PushNotificationsClient from "./PushNotificationsClient";

const activeSlug = "push-notifications";

export const metadata = createSolutionMetadata({
  category: "mobile-apps",
  activeSlug,
  solutions: mobileAppSolutions,
});

export default function PushNotificationsPage() {
  return <PushNotificationsClient />;
}
