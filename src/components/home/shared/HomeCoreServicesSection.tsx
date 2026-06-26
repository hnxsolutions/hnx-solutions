import {
  HiBriefcase,
  HiCloud,
  HiCode,
  HiCog,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  IconBubble,
  PrimaryArrowLink,
  SectionBadge,
  SectionCopy,
  SectionHeading,
  SoftCard,
} from "./HomeSectionPrimitives";
import { coreServices } from "./homeSectionsData";

const serviceIcons = [
  HiCode,
  HiDeviceMobile,
  HiBriefcase,
  HiCog,
  HiLightningBolt,
  HiCloud,
];

export default function HomeCoreServicesSection() {
  return (
    <HomeSectionShell framed>
      <SectionBadge>Core Services</SectionBadge>
      <SectionHeading>
        Powerful Solutions. Built Around <GradientWord>You.</GradientWord>
      </SectionHeading>
      <SectionCopy>
        End-to-end digital solutions designed to streamline operations,
        accelerate growth, and deliver measurable results.
      </SectionCopy>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {coreServices.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <SoftCard
              key={service.title}
              className="min-h-[250px] p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(79,70,229,0.12)]"
            >
              <IconBubble tone="violet" className="mx-auto mb-5 h-14 w-14">
                <Icon className="text-2xl" />
              </IconBubble>
              <h3 className="mx-auto max-w-36 text-base font-black leading-6 text-slate-950 dark:text-white">
                {service.title}
              </h3>
              <div className="mx-auto my-5 h-px w-24 bg-slate-200 dark:bg-white/10" />
              <p className="text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </SoftCard>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <PrimaryArrowLink href="/services">View All Services</PrimaryArrowLink>
      </div>
    </HomeSectionShell>
  );
}
