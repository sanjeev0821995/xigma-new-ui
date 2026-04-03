"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/src/lib/siteData";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060b22]/75 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6"
      >
        <Link href="/" className="group flex items-center gap-2" aria-label="Go to home">
          <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-300" />
          <span className="heading text-lg font-semibold tracking-wide text-white">
            Xigmaweb
            <span className="gradient-text ml-1">Technologies</span>
          </span>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white md:hidden"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition ${
                    active ? "text-cyan-200" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className="primary-btn text-sm">
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#050a1a]/95 px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    pathname === item.href
                      ? "bg-white/10 text-cyan-200"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="primary-btn w-full text-sm">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
