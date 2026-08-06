import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className="group min-h-[44px] min-w-0 break-words bg-surface p-6 transition hover:bg-mist"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-seal">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-xl text-ink group-hover:text-seal">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
          <span className="mt-4 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-jade">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
