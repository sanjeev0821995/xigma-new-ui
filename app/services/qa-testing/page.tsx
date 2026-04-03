import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "QA & Testing Services",
  description:
    "Improve release confidence with manual and automation testing services from Xigmaweb Technologies.",
};

const testingTracks = [
  {
    title: "Manual Testing",
    description:
      "Structured test design and exploratory sessions to validate critical product behavior and user journeys.",
    bullets: [
      "Functional and regression testing",
      "Compatibility and usability validation",
      "Detailed defect triage and reporting",
    ],
  },
  {
    title: "Automation Testing",
    description:
      "Scalable automation frameworks integrated into CI/CD for continuous release readiness and faster feedback loops.",
    bullets: [
      "Web, mobile, and API test automation",
      "Cross-browser and parallel execution",
      "Stable and maintainable test architecture",
    ],
  },
];

const tools = [
  "Selenium",
  "Cypress",
  "Playwright",
  "Appium",
  "Postman",
  "JMeter",
  "BrowserStack",
  "GitHub Actions",
];

export default function QaTestingPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Engineering"
        title="Ship with Confidence Using End-to-End QA & Testing"
        description="Xigmaweb QA specialists combine deep domain knowledge, strong process discipline, and modern tooling to improve quality while accelerating release cycles."
        ctaPrimary={{ label: "Talk to QA Experts", href: "/contact" }}
        ctaSecondary={{ label: "View Case Studies", href: "/portfolio" }}
      />

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Testing Capabilities"
            description="We cover each quality layer with measurable quality gates and clear release criteria."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {testingTracks.map((track) => (
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
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Tools & Platforms"
            description="A modern toolchain selected around your architecture, velocity, and quality goals."
          />
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-center text-sm text-indigo-100"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
