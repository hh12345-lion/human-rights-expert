"use client";

import Link from "next/link";
import { useId, useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`inline-flex min-h-[44px] items-center gap-1.5 px-2.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
          open ? "text-seal" : "text-body hover:text-seal"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        id={panelId}
        className={`absolute left-0 top-full z-[60] w-[min(90vw,22rem)] pt-2 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        } transition-opacity duration-150`}
      >
        <div className="folio-panel px-4 py-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-display text-base font-semibold text-ink">{label}</p>
            <Link
              href={href}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-seal hover:text-seal-deep"
            >
              All →
            </Link>
          </div>
          <ul
            className={scrollable ? "max-h-[min(60vh,18rem)] overflow-y-auto pr-1" : ""}
            role="menu"
          >
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link href={item.href} role="menuitem" className="folio-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
