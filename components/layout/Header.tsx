"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  servicesNavLinks,
  violationTypesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar border-b border-white/10 bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-stretch gap-0 px-0 sm:px-0 lg:px-0">
          <Link
            href="/"
            className="anim-seal group flex min-h-[64px] shrink-0 items-center gap-3 border-r border-white/10 bg-seal px-4 py-3 sm:px-5"
          >
            <span
              className="flex h-10 w-10 items-center justify-center border border-white/35 font-display text-lg leading-none text-white"
              aria-hidden
            >
              HR
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="font-display text-lg leading-tight tracking-tight text-white sm:text-xl">
                Human Rights Experts
              </span>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white/70">
                Tribunal evidence panel
              </span>
            </span>
            <span className="font-display text-base text-white sm:hidden">HRE</span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-3 sm:px-5 lg:px-6">
            <nav className="hidden items-center gap-0.5 overflow-visible lg:flex" aria-label="Main">
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/65 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" aria-hidden />
                Chamber
              </Link>
              <NavDropdown label="Violations" href="/violation-types" items={violationTypesNavLinks} scrollable />
              <NavDropdown label="Cases" href="/case-types" items={caseTypesNavLinks} scrollable />
              <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
              <NavDropdown label="Guides" href="/guides" items={resourcesNavLinks} scrollable />
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden min-h-[40px] items-center border border-white/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-seal hover:bg-seal sm:inline-flex"
              >
                Instruct
              </Link>
              <label
                htmlFor="mobile-nav-toggle"
                className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-white/20 lg:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg className="icon-open h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
                <svg className="icon-close hidden h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-b border-line bg-ink text-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          {mobileNavGroups.map((group, gi) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-seal">
                {String(gi + 1).padStart(2, "0")} · {group.title}
              </p>
              <ul className="border-l border-white/15">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center px-3 text-sm text-white/75 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="btn-seal w-full"
          >
            Instruct an Expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
