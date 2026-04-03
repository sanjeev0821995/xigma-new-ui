import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { jobOpenings } from "@/src/lib/siteData";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore job openings at Xigmaweb Technologies Pvt Ltd and join a culture of innovation, collaboration, and growth.",
};

const culturePillars = [
  {
    title: "Build with Purpose",
    description:
      "We solve high-impact product and engineering problems for ambitious global clients.",
  },
  {
    title: "Grow Continuously",
    description:
      "Structured mentorship, certification sponsorship, and learning tracks fuel your career growth.",
  },
  {
    title: "Collaborate Transparently",
    description:
      "Open communication, ownership mindset, and agile rituals keep delivery predictable and healthy.",
  },
];

export default function CareersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Careers at Xigmaweb"
        title="Build Your Next Career Chapter with Xigmaweb"
        description="Join a team that values craft, accountability, and innovation. We are hiring engineers, QA specialists, and talent experts who want to make meaningful impact."
        ctaPrimary={{ label: "Apply Now", href: "#apply" }}
        ctaSecondary={{ label: "Contact HR", href: "/contact" }}
      />

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Culture"
            subtitle="High performance with empathy, trust, and continuous learning."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {culturePillars.map((pillar) => (
              <SectionCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Open Roles"
            subtitle="Current opportunities across development, QA, and staffing functions."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <SectionCard
                key={job.title}
                title={job.title}
                description={`${job.location} | ${job.type} | Experience: ${job.experience}`}
                badge="Open Position"
                bullets={[
                  "Competitive compensation and performance rewards",
                  "Mentorship-driven growth plan",
                  "Client-facing product impact",
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section-padding pt-0">
        <div className="mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-6 md:p-8">
            <SectionHeading
              title="Quick Apply"
              subtitle="Share your profile and our hiring team will connect with you."
            />
            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="full-name" className="mb-2 block text-sm text-blue-100/90">
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-blue-100/90">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70"
                />
              </div>
              <div>
                <label htmlFor="role" className="mb-2 block text-sm text-blue-100/90">
                  Role Interested In
                </label>
                <input
                  id="role"
                  name="role"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70"
                />
              </div>
              <div>
                <label htmlFor="portfolio" className="mb-2 block text-sm text-blue-100/90">
                  Portfolio / LinkedIn URL
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="summary" className="mb-2 block text-sm text-blue-100/90">
                  Professional Summary
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70"
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="primary-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
