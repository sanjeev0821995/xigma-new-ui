type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const supportingText = description ?? subtitle;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-200/90">{eyebrow}</p>
      ) : null}
      <h2 className="heading text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {supportingText ? (
        <p className="mt-3 text-base leading-7 text-indigo-100/85">{supportingText}</p>
      ) : null}
    </div>
  );
}
