type SectionCardProps = {
  title: string;
  description: string;
  bullets?: string[];
  badge?: string;
};

export function SectionCard({ title, description, bullets, badge }: SectionCardProps) {
  return (
    <article className="glass card-hover rounded-2xl p-6">
      {badge ? (
        <span className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-sky-100">
          {badge}
        </span>
      ) : null}
      <h3 className="heading text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-indigo-100/90">{description}</p>
      {bullets?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-indigo-100/85">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
