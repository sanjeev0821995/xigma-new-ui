import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Xigmaweb Technologies Pvt Ltd for web, app, staffing, and QA projects. Request a quote or schedule a discovery call.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Your Next Digital Success Story"
        description="Share your project goals or hiring requirements. Our specialists will connect with a roadmap tailored to your timeline, budget, and growth objectives."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.25fr_1fr]">
          <article className="glass rounded-2xl p-6 md:p-7">
            <SectionHeading
              title="Request a consultation"
              description="Tell us a bit about your project and we will get back to you within one business day."
            />
            <form className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label htmlFor="name" className="text-sm text-blue-100/80">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="mt-1 w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                  placeholder="Your name"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="email" className="text-sm text-blue-100/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                  placeholder="you@company.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="company" className="text-sm text-blue-100/80">
                  Company
                </label>
                <input
                  id="company"
                  className="mt-1 w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                  placeholder="Company name"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm text-blue-100/80">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                  placeholder="Tell us about your project scope, timeline, and goals."
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="primary-btn">
                  Send Message
                </button>
              </div>
            </form>
          </article>

          <aside className="space-y-6">
            <article className="glass rounded-2xl p-6">
              <h3 className="heading text-xl font-semibold text-white">Reach us directly</h3>
              <ul className="mt-4 space-y-2 text-sm text-indigo-100/88">
                <li>Email: hello@xigmaweb.com</li>
                <li>Phone: +91 80 4567 8910</li>
                <li>Address: 9th Floor, Innov8 Towers, Bengaluru, India</li>
              </ul>
            </article>

            <article className="glass rounded-2xl p-3">
              <iframe
                title="Xigmaweb Technologies location"
                className="h-64 w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Bengaluru%20India&output=embed"
              />
            </article>
          </aside>
        </div>
      </section>
    </div>
  );
}
