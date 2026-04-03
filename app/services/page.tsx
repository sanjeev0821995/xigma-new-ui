import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { serviceItems } from "@/src/lib/siteData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Xigmaweb Technologies services including web development, app development, staff augmentation, and QA testing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services Overview"
        title="End-to-End IT Services Designed for Scale and Speed"
        description="We combine engineering excellence, domain depth, and delivery rigor to help organizations launch products, optimize operations, and scale teams faster."
        ctaPrimary={{ label: "Schedule Consultation", href: "/contact" }}
        ctaSecondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Comprehensive service capabilities under one roof"
            description="From product engineering to quality assurance and talent augmentation, each service line is tailored to your business priorities."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceItems.map((service) => (
              <div key={service.title}>
                <SectionCard
                  title={service.title}
                  description={service.description}
                  bullets={service.highlights}
                  badge="Core Service"
                />
                <Link
                  href={service.href}
                  className="mt-3 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  Explore {service.title} -&gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
