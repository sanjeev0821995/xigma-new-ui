import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "App Development Services",
  description:
    "Android, iOS, and cross-platform app development services from Xigmaweb Technologies.",
};

const appTracks = [
  {
    title: "Native Android & iOS",
    description:
      "Build robust native applications with smooth device integrations and platform-specific UX precision.",
    bullets: ["Kotlin & Swift", "Secure architecture patterns", "App Store optimization support"],
  },
  {
    title: "Cross-platform Engineering",
    description:
      "Launch faster with high-performing cross-platform apps while maintaining near-native quality.",
    bullets: ["Flutter and React Native", "Shared business logic", "Reusable UI component systems"],
  },
  {
    title: "Backend & API Integration",
    description:
      "Power mobile experiences with scalable APIs, authentication, analytics, and event-driven workflows.",
    bullets: ["Node.js microservices", "OAuth and SSO", "Push notification pipelines"],
  },
];

const process = [
  "Discovery & product blueprinting",
  "Wireframes and UX prototyping",
  "Agile sprint-based development",
  "QA, security, and performance validation",
  "App launch and lifecycle support",
];

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Engineering"
        title="App Development Services for Android, iOS, and Cross-platform Growth"
        description="Xigmaweb creates digital-first mobile experiences with intuitive design, secure architecture, and high-performance execution."
        ctaPrimary={{ label: "Start Your App Project", href: "/contact" }}
        ctaSecondary={{ label: "Explore Portfolio", href: "/portfolio" }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our mobile development capabilities"
            subtitle="From strategy to release management, we deliver full-cycle mobile product execution."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {appTracks.map((track) => (
              <SectionCard
                key={track.title}
                title={track.title}
                description={track.description}
                bullets={track.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <article className="glass rounded-2xl p-6 md:p-8">
            <h2 className="heading text-2xl font-semibold text-white">
              App delivery model
            </h2>
            <p className="mt-3 text-sm leading-7 text-indigo-100/90">
              We partner with startups and enterprises to transform concepts into
              production-ready mobile products with measurable business impact.
            </p>
            <ol className="mt-5 space-y-3 text-sm text-indigo-100/90">
              {process.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="glass rounded-2xl p-6 md:p-8">
            <h2 className="heading text-2xl font-semibold text-white">
              Why enterprises choose Xigmaweb
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-indigo-100/90">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                Product-aligned squads including developers, QA engineers, and delivery managers.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                Strong observability and analytics setup for continuous improvement.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                Secure SDLC practices from code to deployment.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                Post-launch support, maintenance, and roadmap extension.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
