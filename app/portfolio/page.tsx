import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { caseStudies } from "@/src/lib/siteData";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Xigmaweb case studies showcasing scalable web products, mobile applications, staff augmentation, and QA transformations.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Proven Outcomes"
        title="Portfolio & Case Studies"
        description="We combine product engineering, talent scaling, and quality excellence to solve complex digital challenges for startups and enterprises."
        ctaPrimary={{ label: "Discuss Your Project", href: "/contact" }}
        ctaSecondary={{ label: "Explore Services", href: "/services" }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Showcase of recent engagements"
            description="Each case study highlights a distinct transformation journey, from architecture modernization to QA acceleration."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((study) => (
              <SectionCard
                key={study.title}
                badge={study.domain}
                title={study.title}
                description={study.summary}
                bullets={[`Impact: ${study.impact}`, "Delivery model: Agile pod engagement"]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            {
              title: "Architecture",
              desc: "Microservices, API strategy, cloud migration, and performance optimization.",
            },
            {
              title: "Execution",
              desc: "Cross-functional squads, transparent sprint governance, and measurable velocity.",
            },
            {
              title: "Business Impact",
              desc: "Revenue enablement, lower defect leakage, and reliable scaling for growth.",
            },
          ].map((item) => (
            <article key={item.title} className="glass rounded-2xl p-5">
              <h3 className="heading text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-indigo-100/85">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
