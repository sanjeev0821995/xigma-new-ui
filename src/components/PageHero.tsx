import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: PageHeroProps) {
  return (
    <section className="section-padding relative overflow-hidden soft-grid">
      <div className="aurora" />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="glass rounded-3xl p-7 md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/90">
            {eyebrow}
          </p>
          <h1 className="heading mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-indigo-100/85 md:text-lg">
            {description}
          </p>
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {ctaPrimary ? (
                <Link href={ctaPrimary.href} className="primary-btn" aria-label={ctaPrimary.label}>
                  {ctaPrimary.label}
                </Link>
              ) : null}
              {ctaSecondary ? (
                <Link
                  href={ctaSecondary.href}
                  className="secondary-btn"
                  aria-label={ctaSecondary.label}
                >
                  {ctaSecondary.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
