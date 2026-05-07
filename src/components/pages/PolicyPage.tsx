
type PolicyPageProps = {
  title: string;
  description: string;
  sections: Array<{
    title: string;
    text: string;
  }>;
};

export function PolicyPage({ title, description, sections }: PolicyPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">HNX</p>
          <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-10 space-y-4">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
