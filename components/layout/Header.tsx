"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Diamond, Logo } from "@/components/brand/Brand";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  servicesNavLinks,
  violationTypesNavLinks,
} from "@/data/navigation";

type Item = { label: string; href: string };
type Entry = { label: string; href: string; items: Item[] };

const entries: Entry[] = [
  { label: "Violations", href: "/violation-types", items: violationTypesNavLinks },
  { label: "Case types", href: "/case-types", items: caseTypesNavLinks },
  { label: "Services", href: "/services", items: servicesNavLinks },
  { label: "Guides", href: "/guides", items: resourcesNavLinks },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function entryActive(pathname: string, entry: Entry): boolean {
  return isActive(pathname, entry.href) || entry.items.some((i) => isActive(pathname, i.href));
}

export function Header() {
  const pathname = usePathname() || "/";
  const onContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[5.5rem] lg:px-8">
        <Link href="/" aria-label="Human Rights Experts home" className="shrink-0">
          <Logo className="h-11 w-auto lg:h-[3.4rem]" />
        </Link>

        <nav aria-label="Main" className="hidden h-full items-stretch lg:flex">
          {entries.map((entry) => {
            const active = entryActive(pathname, entry);
            return (
              <div key={entry.href} className="group relative flex items-stretch">
                <Link
                  href={entry.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 px-4 text-[1.02rem] font-semibold transition-colors ${
                    active ? "text-ink" : "text-body/80 hover:text-ink"
                  }`}
                >
                  {entry.label}
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-50 transition group-hover:rotate-180" aria-hidden>
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  {active && (
                    <>
                      <span aria-hidden className="absolute inset-x-4 bottom-0 h-[3px] bg-seal" />
                      <Diamond className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-seal" />
                    </>
                  )}
                </Link>
                <div className="invisible absolute left-0 top-full z-[60] w-[22rem] opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="diamond-tl border border-line bg-surface p-3 shadow-lift [--cut:1.5rem]">
                    <Link
                      href={entry.href}
                      className="mb-1 flex items-center justify-between px-3 py-2 font-display text-lg text-ink hover:text-seal"
                    >
                      All {entry.label.toLowerCase()}
                      <Diamond className="h-2.5 w-2.5 text-seal" />
                    </Link>
                    <ul className="max-h-[min(60vh,22rem)] overflow-y-auto">
                      {entry.items.map((item) => {
                        const current = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={current ? "page" : undefined}
                              className={`flex items-center gap-2.5 px-3 py-2 text-[0.98rem] ${
                                current ? "bg-paper font-semibold text-ink" : "text-body hover:bg-paper hover:text-ink"
                              }`}
                            >
                              <Diamond className={`h-2 w-2 shrink-0 ${current ? "text-seal" : "text-taupe"}`} />
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-current={onContact ? "page" : undefined}
            className={`btn-seal hidden sm:inline-flex ${onContact ? "!bg-navy" : ""}`}
          >
            Instruct an expert
          </Link>

          {/* Mobile menu: a native disclosure, reset on each navigation. */}
          <details key={pathname} className="group/menu lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center bg-navy text-cream [&::-webkit-details-marker]:hidden"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-open/menu:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg viewBox="0 0 24 24" className="hidden h-5 w-5 group-open/menu:block" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-full max-h-[calc(100vh-4.75rem)] overflow-y-auto border-b border-line bg-surface pb-6 shadow-lift"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <MobileLink href="/" label="Home" active={pathname === "/"} />
                {mobileNavGroups.map((group) => {
                  const open = group.links.some((l) => isActive(pathname, l.href));
                  return (
                    <details key={group.title} open={open} className="group/sec border-t border-line">
                      <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                        {group.title}
                        <Diamond className="h-3 w-3 text-olive transition group-open/sec:rotate-45 group-open/sec:text-seal" />
                      </summary>
                      <ul className="mb-3 border-l-2 border-taupe pl-4">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <MobileLink href={link.href} label={link.label} active={pathname === link.href} small />
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
                <div className="border-t border-line">
                  <MobileLink href="/contact" label="Contact" active={onContact} />
                </div>
                <Link href="/contact" className="btn-seal mt-4 w-full">
                  Instruct an expert
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ href, label, active, small = false }: { href: string; label: string; active: boolean; small?: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-2.5 ${small ? "min-h-[44px] text-base" : "min-h-[54px] font-display text-xl"} ${
        active ? "font-semibold text-ink" : small ? "text-body" : "text-ink"
      }`}
    >
      {active && <Diamond className="h-2.5 w-2.5 text-seal" />}
      {label}
    </Link>
  );
}
