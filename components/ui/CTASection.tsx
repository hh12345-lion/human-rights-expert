import Link from "next/link";

export function CTASection({
  title = "Instruct a human rights expert witness",
  description = "Send a short confidential brief. We respond within one to two business days with availability, scope, and Legal Aid–compatible rates.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-line bg-ink py-14 sm:py-16">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-seal">Next step</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-seal w-full sm:w-auto">
            Instruct
          </Link>
          <Link
            href="/how-to-instruct"
            className="btn-ghost w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
