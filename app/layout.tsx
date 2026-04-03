import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { Chatbot } from "@/src/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xigmaweb Technologies Pvt Ltd | IT Services Company",
    template: "%s | Xigmaweb Technologies Pvt Ltd",
  },
  description:
    "Xigmaweb Technologies Pvt Ltd delivers web and mobile development, contract-to-hire talent, and end-to-end QA testing services for startups and enterprises.",
  metadataBase: new URL("https://xigmaweb.example.com"),
  keywords: [
    "IT services",
    "web development",
    "app development",
    "staff augmentation",
    "contract-to-hire",
    "automation testing",
    "Xigmaweb Technologies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
