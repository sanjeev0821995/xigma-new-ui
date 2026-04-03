import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { StatsCounter } from "@/src/components/StatsCounter";
import { homeStats, serviceItems, testimonials } from "@/src/lib/siteData";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Innovating digital solutions for tomorrow with web development, mobile apps, staffing, and QA services.",
};

export default function HomePage() {
  return (
    <div>
      <PageHero
        eyebrow="Xigmaweb Technologies Pvt Ltd"
        title="Innovating Digital Solutions for Tomorrow"
        description="We design, build, and scale mission-critical software products with modern engineering, trusted QA, and high-performance talent solutions."
        ctaPrimary={{ label: "Hire Talent", href: "/services/staff-augmentation" }}
        ctaSecondary={{ label: "Get a Quote", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Performance that speaks through measurable outcomes"
            description="Our delivery playbook blends design thinking, agile execution, and quality engineering to drive business impact."
          />
          <StatsCounter stats={homeStats} />
        </div>
      </section>

      <section className="section-padding pt-2">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Core service offerings"
            description="From idea to execution, Xigmaweb supports your complete digital journey."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {serviceItems.map((service) => (
              <div key={service.href}>
                <SectionCard
                  title={service.title}
                  description={service.description}
                  bullets={service.highlights}
                />
                <Link
                  href={service.href}
                  className="mt-2 inline-block text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  Explore service ->
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-2">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Client testimonials"
            description="Trusted by startups and enterprise teams for speed, quality, and transparency."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="glass card-hover rounded-2xl p-6">
                <p className="text-sm leading-7 text-indigo-100/90">"{testimonial.quote}"</p>
                <div className="mt-5">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-indigo-100/80">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-2">
        <div className="mx-auto max-w-6xl">
          <div className="glass rounded-3xl p-8 text-center md:p-10">
            <h2 className="heading text-3xl font-semibold text-white md:text-4xl">
              Ready to accelerate your product roadmap?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-indigo-100/85">
              Partner with a team that understands scalability, engineering excellence, and
              business outcomes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="primary-btn">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="secondary-btn">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
