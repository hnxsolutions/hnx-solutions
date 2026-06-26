import {
  HiBriefcase,
  HiCode,
  HiCog,
  HiDeviceMobile,
  HiServer,
} from "react-icons/hi";
import {
  HomeSectionShell,
  IconBubble,
  SectionBadge,
  SectionHeading,
  SoftCard,
  TextArrowLink,
} from "./HomeSectionPrimitives";
import { startingPointCards } from "./homeSectionsData";

const startingIcons = [HiCode, HiDeviceMobile, HiBriefcase, HiCog, HiServer];

export default function HomeStartingPointSection() {
  return (
    <HomeSectionShell>
      <SectionBadge>Choose Your Starting Point</SectionBadge>
      <SectionHeading className="max-w-5xl">
        Start With What You Need. We&apos;ll Build The Rest.
      </SectionHeading>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {startingPointCards.map((card, index) => {
          const Icon = startingIcons[index];
          return (
            <SoftCard
              key={card.title}
              className="flex min-h-[190px] flex-col items-center justify-center p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(79,70,229,0.1)]"
            >
              <IconBubble tone="violet" className="mb-5 h-14 w-14 rounded-full">
                <Icon className="text-2xl" />
              </IconBubble>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </SoftCard>
          );
        })}
      </div>

      <div className="mt-10">
        <p className="max-w-3xl text-lg font-medium leading-8 text-slate-600 dark:text-slate-300">
          Not sure? We&apos;ll help you choose the perfect starting point for
          your business.
        </p>
        <TextArrowLink href="/contact" className="mt-6 text-base">
          Book a Free Consultation
        </TextArrowLink>
      </div>
    </HomeSectionShell>
  );
}
