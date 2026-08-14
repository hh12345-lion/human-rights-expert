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
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-seal bg-paper/95 backdrop-blur-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0 shrink">
          <span className="font-display block text-lg font-semibold tracking-tight text-ink sm:text-xl">
            Human Rights Experts
          </span>
          <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-steel">
            Expert evidence · UK tribunals
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center px-2.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-body hover:text-seal"
          >
            Home
          </Link>
          <NavDropdown label="Violations" href="/violation-types" items={violationTypesNavLinks} scrollable />
          <NavDropdown label="Cases" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown label="Guides" href="/guides" items={resourcesNavLinks} scrollable />
          <Link href="/contact" className="btn-seal ml-3">
            Instruct
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-line bg-surface lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
          <svg className="icon-close hidden h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-line bg-surface peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-5">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-seal">
                {group.title}
              </p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center text-sm text-body hover:text-seal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href="/contact" onClick={closeMobileMenu} className="btn-seal w-full">
            Instruct an Expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
