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

  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

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
        className={`inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
          open ? "text-white" : "text-white/65 hover:text-white"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors ${open ? "bg-seal" : "bg-white/35"}`}
          aria-hidden
        />
        {label}
      </Link>

      <div
        id={panelId}
        className={`absolute left-1/2 top-full z-[60] w-[min(92vw,36rem)] -translate-x-1/2 pt-0 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        } transition-opacity duration-200`}
      >
        <div className="ledger-panel px-5 py-5 sm:px-7 sm:py-6">
          <div className="mb-4 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-seal">Index</p>
              <p className="mt-1 font-display text-xl text-white sm:text-2xl">{label}</p>
            </div>
            <Link
              href={href}
              className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/50 hover:text-white"
            >
              Open hub →
            </Link>
          </div>
          <div
            className={`grid gap-x-8 sm:grid-cols-2 ${scrollable ? "max-h-[min(60vh,20rem)] overflow-y-auto pr-1" : ""}`}
            role="menu"
          >
            {[left, right].map((col, colIdx) => (
              <ul key={colIdx} className="min-w-0">
                {col.map((item, i) => {
                  const n = colIdx === 0 ? i + 1 : mid + i + 1;
                  return (
                    <li key={item.href} role="none">
                      <Link href={item.href} role="menuitem" className="ledger-link">
                        <span className="idx">{String(n).padStart(2, "0")}</span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
