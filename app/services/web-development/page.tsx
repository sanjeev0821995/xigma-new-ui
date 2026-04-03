import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Build scalable and secure web products with React, Angular, Node.js, and cloud-native engineering from Xigmaweb.",
};

const technologies = [
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
];

const portfolioHighlights = [
  {
    title: "FinTech Customer Portal",
    description:
      "Developed a secure client portal with role-based access, workflow automation, and real-time insights.",
    bullets: ["Reduced support tickets by 36%", "Improved user retention by 24%"],
  },
  {
    title: "Healthcare Booking Platform",
    description:
      "Created a multi-tenant booking and teleconsultation platform optimized for accessibility and speed.",
    bullets: ["99.95% uptime architecture", "Sub-2 second page response time"],
  },
  {
    title: "B2B Commerce Rebuild",
    description:
      "Migrated legacy systems to a composable commerce architecture with advanced catalog management.",
    bullets: ["4x faster release cycle", "42% increase in conversion"],
  },
];

export default function WebDevelopmentPage() {
  return (
    <div>
      <PageHero
        eyebrow="Web Development"
        title="Future-proof web platforms crafted for scale and speed."
        description="Our web engineering teams build robust digital platforms using modern frameworks, secure APIs, and cloud-native infrastructure. We focus on performance, accessibility, and maintainability."
        ctaPrimary={{ label: "Discuss Your Web Project", href: "/contact" }}
        ctaSecondary={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Technologies we use"
            description="We choose technology stacks aligned with business goals, product complexity, and long-term maintainability."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-4 py-2 text-sm text-blue-100/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Portfolio highlights"
            description="Real outcomes delivered through strategic design and engineering excellence."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {portfolioHighlights.map((item) => (
              <SectionCard
                key={item.title}
                title={item.title}
                description={item.description}
                bullets={item.bullets}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
