type ServiceSectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function ServiceSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: ServiceSectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-black uppercase tracking-[0.22em] ${
          isDark ? "text-cyan-200" : "text-[#145cb7] dark:text-cyan-300"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl ${
          isDark ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 ${isDark ? "text-white/68" : "text-slate-600 dark:text-slate-300"}`}>
        {description}
      </p>
    </div>
  );
}
