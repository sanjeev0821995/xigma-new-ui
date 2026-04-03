import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionCard } from "@/src/components/SectionCard";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "Staff Augmentation Services",
  description:
    "Contract-to-hire developers and QA engineers with flexible engagement models from Xigmaweb Technologies.",
};

const models = [
  {
    title: "Dedicated Resource Model",
    description:
      "Assign one or more specialists for long-term ownership, aligned to your product roadmap and sprint rituals.",
    bullets: [
      "Monthly engagement",
      "Direct reporting to your engineering leads",
      "Ideal for product expansion teams",
    ],
  },
  {
    title: "Pod-based Delivery Model",
    description:
      "Hire a complete pod of developers, QA, and support roles to execute a module or product stream independently.",
    bullets: [
      "Cross-functional setup",
      "Shared SLAs and delivery KPIs",
      "Best for fast-track releases",
    ],
  },
  {
    title: "Contract-to-Hire Model",
    description:
      "Start on a contract basis and transition resources to full-time after fit validation and performance benchmarks.",
    bullets: [
      "Low-risk hiring path",
      "Transparent transition terms",
      "Retention-focused talent matching",
    ],
  },
];

const profiles = [
  "Frontend Developers (React, Angular, Vue)",
  "Backend Developers (Node.js, Java, .NET)",
  "Mobile Developers (Android, iOS, Flutter, React Native)",
  "Manual QA Engineers",
  "Automation QA Engineers",
  "DevOps & Cloud Specialists",
];

const benefits = [
  "Access to pre-vetted technical professionals",
  "Faster team ramp-up in 7-15 business days",
  "Flexible contract durations based on demand",
  "Strong communication and timezone alignment options",
];

export default function StaffAugmentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Contract-to-Hire"
        title="Scale teams with top-tier engineering and QA talent."
        description="Xigmaweb's staff augmentation services help you hire skilled developers and QA engineers with speed, flexibility, and confidence."
        ctaPrimary={{ label: "Hire Talent", href: "/contact" }}
        ctaSecondary={{ label: "See Profiles", href: "#profiles" }}
      />

      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {models.map((model) => (
            <SectionCard
              key={model.title}
              title={model.title}
              description={model.description}
              bullets={model.bullets}
            />
          ))}
        </div>
      </section>

      <section className="section-padding pt-0" id="profiles">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Available Technical Profiles"
            subtitle="Choose from a broad pool of specialists ready to contribute from day one."
          />
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {profiles.map((profile) => (
                <div key={profile} className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-blue-50">
                  {profile}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Benefits of Hiring from Xigmaweb"
            subtitle="Our process is designed for delivery continuity and long-term hiring success."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit}
                className="glass card-hover rounded-2xl p-5 text-sm leading-7 text-blue-100/90"
              >
                {benefit}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
