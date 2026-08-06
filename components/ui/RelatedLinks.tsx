import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border border-line bg-surface p-4 sm:p-6">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-seal">Continue</p>
      <h2 className="mt-2 font-display text-2xl text-ink">{title}</h2>
      <ul className="mt-5 grid grid-cols-1 gap-1 md:grid-cols-2">
        {links.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center gap-3 text-sm text-ink hover:text-seal"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.1em] text-seal">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
