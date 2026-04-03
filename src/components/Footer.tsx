import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5zm-1.7-5A1.96 1.96 0 1 0 5.2 7.42a1.96 1.96 0 0 0 .04-3.92zM20 13.3c0-3.43-1.83-5.03-4.27-5.03a3.7 3.7 0 0 0-3.3 1.82V8.5H9.05V20h3.38v-6.22c0-1.63.31-3.21 2.33-3.21 2 0 2.03 1.86 2.03 3.31V20H20v-6.7z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.78 7.74L23 22h-6.2l-4.86-6.35L6.4 22H3.3l7.24-8.27L1 2h6.35l4.39 5.78L18.9 2zm-1.09 18h1.72L6.47 3.9H4.62L17.81 20z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.75c-1.1-.76.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.23 2.55 2.55 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.31-5.48-1.33-5.48-5.92a4.63 4.63 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.42 11.42 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.62 4.62 0 0 1 1.23 3.22c0 4.6-2.81 5.6-5.49 5.91a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02040d]/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="heading text-lg font-bold text-white">
            Xigmaweb Technologies Pvt Ltd
          </div>
          <p className="mt-3 max-w-sm text-sm text-blue-100/80">
            Reliable digital transformation partner for modern product
            development, quality engineering, and agile talent scaling.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100/70">
            Quick links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-cyan-200 transition-colors" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100/70">
            Connect
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1.5 text-blue-100/90 hover:border-cyan-300/60 hover:text-cyan-200 transition"
                  aria-label={social.label}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {social.icon}
                    {social.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-blue-100/75">
            <p>Email: hello@xigmaweb.com</p>
            <p>Phone: +91 80 4567 8910</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-blue-100/60 md:px-8">
        (c) {new Date().getFullYear()} Xigmaweb Technologies Pvt Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
