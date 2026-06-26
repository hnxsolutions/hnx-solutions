import Image from "next/image";
import Link from "next/link";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBriefcase,
  HiCog,
  HiHeart,
  HiOfficeBuilding,
  HiShoppingCart,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  IconBubble,
  SectionBadge,
  SectionCopy,
  SectionHeading,
  TextArrowLink,
} from "./HomeSectionPrimitives";
import { industryCards } from "./homeSectionsData";

const industryIcons = [
  HiHeart,
  HiAcademicCap,
  HiOfficeBuilding,
  HiShoppingCart,
  HiBriefcase,
  HiCog,
];

export default function HomeIndustrySolutionsSection() {
  return (
    <HomeSectionShell framed>
      <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div>
          <SectionBadge>Industry Solutions</SectionBadge>
          <SectionHeading className="max-w-xl">
            Built For Your Industry. Designed For{" "}
            <GradientWord>Growth.</GradientWord>
          </SectionHeading>
          <SectionCopy>
            We build systems that understand the challenges of your industry and
            the workflows that drive it. From front-office to back-office, we
            help you streamline operations, improve experiences, and scale with
            confidence.
          </SectionCopy>
          <TextArrowLink href="/industries" className="mt-7 text-base">
            Explore All Industries
          </TextArrowLink>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industryCards.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <Link
                href="/industries"
                key={industry.title}
                className="group overflow-hidden rounded-[1.15rem] border border-slate-200/80 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(79,70,229,0.12)] dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="relative h-42 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} solution preview`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-3 transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent opacity-30" />
                </div>
                <div className="relative p-5 pt-0">
                  <IconBubble tone="violet" className="-mt-6 mb-4 h-12 w-12 rounded-xl">
                    <Icon className="text-xl" />
                  </IconBubble>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                    {industry.description}
                  </p>
                  <div className="mt-5 flex justify-end text-xl text-blue-700 transition group-hover:translate-x-1">
                    <HiArrowRight />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </HomeSectionShell>
  );
}
