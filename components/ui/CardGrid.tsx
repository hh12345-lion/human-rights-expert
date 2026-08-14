import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="band-grid sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group min-h-[44px] min-w-0 break-words bg-surface p-6 transition hover:bg-mist"
        >
          <h3 className="font-display text-xl font-semibold text-ink group-hover:text-seal">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
          <span className="mt-4 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-seal">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
