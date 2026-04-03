export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  highlights: string[];
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

export type CaseStudy = {
  title: string;
  domain: string;
  summary: string;
  impact: string;
};

export type JobOpening = {
  title: string;
  location: string;
  type: string;
  experience: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const homeStats: StatItem[] = [
  { label: "Projects Delivered", value: 320, suffix: "+" },
  { label: "Global Clients", value: 140, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Certified Experts", value: 85, suffix: "+" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Future-ready web platforms built with modern architectures and seamless user experiences.",
    href: "/services/web-development",
    highlights: ["React & Next.js", "Node.js APIs", "Cloud-native deployment"],
  },
  {
    title: "Mobile App Development",
    description:
      "Performance-driven mobile apps for Android, iOS, and cross-platform ecosystems.",
    href: "/services/app-development",
    highlights: ["Native Android/iOS", "Flutter & React Native", "App modernization"],
  },
  {
    title: "Contract-to-Hire Talent",
    description:
      "Skilled developers and QA engineers integrated quickly into your engineering teams.",
    href: "/services/staff-augmentation",
    highlights: ["Flexible hiring models", "Fast onboarding", "Vetted specialists"],
  },
  {
    title: "QA & Testing Services",
    description:
      "Comprehensive testing strategy across functional, regression, and automation tracks.",
    href: "/services/qa-testing",
    highlights: ["Manual testing", "Automation pipelines", "Release confidence"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Xigmaweb transformed our legacy platform into a high-performing digital product with exceptional speed and discipline.",
    name: "Alicia Morgan",
    role: "VP Technology",
    company: "Northstar Commerce",
  },
  {
    quote:
      "Their contract-to-hire model helped us scale the engineering team in under three weeks without compromising quality.",
    name: "Daniel Brooks",
    role: "Head of Engineering",
    company: "SwiftLedger",
  },
  {
    quote:
      "The QA automation suite built by Xigmaweb reduced our release cycle effort by over 40 percent.",
    name: "Riya Sen",
    role: "Product Director",
    company: "Finlance Digital",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Enterprise CRM Modernization",
    domain: "SaaS",
    summary:
      "Rebuilt a monolithic CRM into modular web services and an intuitive dashboard experience.",
    impact: "42% faster workflows and 3x platform scalability.",
  },
  {
    title: "On-demand Logistics App",
    domain: "Mobility",
    summary:
      "Delivered a complete Android and iOS app with real-time order tracking and route optimization.",
    impact: "1.8M transactions processed in first year.",
  },
  {
    title: "Retail QA Transformation",
    domain: "E-commerce",
    summary:
      "Introduced automation-first QA with CI pipelines and visual regression checks.",
    impact: "68% reduction in production defects.",
  },
  {
    title: "Talent Pod for InsurTech",
    domain: "Insurance",
    summary:
      "Built a dedicated squad of developers and QA engineers under a contract-to-hire model.",
    impact: "Team scaled 5x in 4 months with predictable delivery.",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    title: "Senior React Developer",
    location: "Hybrid - Bengaluru",
    type: "Full-time",
    experience: "4-7 years",
  },
  {
    title: "Automation QA Engineer",
    location: "Remote - India",
    type: "Full-time",
    experience: "3-6 years",
  },
  {
    title: "Node.js Backend Developer",
    location: "Hybrid - Pune",
    type: "Contract",
    experience: "5+ years",
  },
  {
    title: "Technical Recruiter - IT Staffing",
    location: "On-site - Bengaluru",
    type: "Full-time",
    experience: "2-5 years",
  },
];

export const chatbotFaq: Array<{ question: string; answer: string }> = [
  {
    question: "What services do you provide?",
    answer:
      "Xigmaweb provides Web Development, Mobile App Development, Contract-to-Hire staffing, and QA & Testing services.",
  },
  {
    question: "Do you provide contract-to-hire developers?",
    answer:
      "Yes. We provide vetted developers and QA engineers under flexible contract-to-hire models with quick onboarding.",
  },
  {
    question: "Which testing tools do you use?",
    answer:
      "Our QA team uses Selenium, Cypress, Playwright, Appium, Postman, and modern CI automation pipelines.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can request a quote through the contact form or email us at hello@xigmaweb.com with project scope details.",
  },
  {
    question: "How can I contact Xigmaweb?",
    answer:
      "Reach us at hello@xigmaweb.com or +91 80 4567 8910. We typically respond within one business day.",
  },
];
