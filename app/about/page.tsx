import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Xigmaweb Technologies Pvt Ltd, our vision, mission, and leadership focused on reliable digital growth.",
};

const leaders = [
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    description:
      "Drives product innovation and long-term client partnerships across global delivery programs.",
  },
  {
    name: "Ananya Iyer",
    role: "VP - Engineering",
    description:
      "Leads architecture strategy for enterprise web and mobile ecosystems with quality-first practices.",
  },
  {
    name: "Sameer Kulkarni",
    role: "Director - Talent Solutions",
    description:
      "Builds high-performance engineering teams through data-led contract-to-hire staffing models.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Xigmaweb"
        title="Engineering trust through innovation and delivery excellence"
        description="Xigmaweb Technologies Pvt Ltd was founded to help organizations build robust digital products and scale teams quickly. We blend product engineering, talent strategy, and quality assurance into one integrated delivery model."
        ctaPrimary={{ label: "Explore Services", href: "/services" }}
        ctaSecondary={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Story"
            subtitle="From startup collaborator to enterprise transformation partner."
          />
          <div className="glass rounded-3xl p-6 md:p-8">
            <p className="text-indigo-100/90 leading-8">
              Starting as a focused product development studio, Xigmaweb grew into a full-service
              IT partner trusted by startups, scale-ups, and enterprises. Our teams have delivered
              web platforms, mobile experiences, and QA automation frameworks that improve speed,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2">
          <SectionCard
            badge="Vision"
            title="Digital solutions that scale with confidence"
            description="To be the most trusted technology partner for companies building category-leading digital products."
            bullets={[
              "User-first product engineering",
              "Cloud-ready architecture standards",
              "Outcome-driven collaboration",
            ]}
          />
          <SectionCard
            badge="Mission"
            title="Reliable execution with measurable business value"
            description="We combine modern engineering, expert talent, and quality-first delivery to solve critical business challenges."
            bullets={[
              "Accelerate launch cycles",
              "Reduce operational risk",
              "Build sustainable technology capabilities",
            ]}
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Leadership Team" subtitle="Experienced leaders with global delivery expertise." />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {leaders.map((leader) => (
              <SectionCard
                key={leader.name}
                title={leader.name}
                description={leader.description}
                badge={leader.role}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
