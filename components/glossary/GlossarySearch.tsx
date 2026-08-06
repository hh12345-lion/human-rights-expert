"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";
import { getGlossaryTermLinks } from "@/lib/glossary-links";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter((t) => t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query));
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">Search glossary</label>
      <input id="glossary-search" type="search" placeholder="Search terms…" value={q} onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md rounded-[4px] border border-line px-4 py-3 min-h-[44px] focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink" />
      <dl className="space-y-6">
        {filtered.map((t) => {
          const links = getGlossaryTermLinks(t.slug);
          return (
            <div key={t.slug} id={t.slug} className="scroll-mt-24 rounded-[8px] border border-line bg-white p-5">
              <dt className="font-semibold text-ink">{t.term}</dt>
              <dd className="mt-2 text-body leading-relaxed">{t.definition}</dd>
              {links.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm font-medium text-seal hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </dl>
    </>
  );
}
