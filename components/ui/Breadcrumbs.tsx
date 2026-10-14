import Link from "next/link";
import { Diamond } from "@/components/brand/Brand";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mt-8 border-t border-line pt-3 text-sm text-steel">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-2.5">
            {i > 0 && <Diamond className="h-2 w-2 shrink-0 text-olive" />}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-[40px] max-w-full items-center break-words hover:text-seal hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="break-words font-semibold text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
