import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-12 sm:py-16">
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full border border-seal/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 top-16 h-32 w-32 rounded-full border border-white/10"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="ledger-rule mb-5 max-w-[8rem] opacity-90" />
        <h1 className="max-w-4xl break-words font-display text-3xl tracking-tight text-white min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
