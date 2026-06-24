import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  OutlineButton,
  PrimaryButton,
  SuiteHeader,
  SuiteIconBox,
  SuitePanel,
  SuiteSection,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteWhyChoose() {
  const { whyChoose } = fullBusinessSuiteData;

  return (
    <SuiteSection id="why-choose" className="bg-white">
      <SuitePanel className="p-5 sm:p-6 lg:p-7">
        <SuiteHeader
          eyebrow={whyChoose.eyebrow}
          title={whyChoose.title}
          description={whyChoose.description}
          center
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.cards.map((card) => (
            <article key={card.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <SuiteIconBox icon={card.icon} tone={card.tone} className="h-11 w-11 rounded-xl" iconClassName="h-5 w-5" />
              <div>
                <h3 className="text-base font-black text-[#06143a]">{card.title}</h3>
                <p className="mt-1 text-sm font-medium leading-6 text-[#445579]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/contact">{"Let's Build Your Business System"}</PrimaryButton>
          <OutlineButton href="/contact">Schedule a Free Consultation</OutlineButton>
        </div>
      </SuitePanel>
    </SuiteSection>
  );
}
