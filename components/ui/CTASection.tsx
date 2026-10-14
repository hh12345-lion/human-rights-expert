import Link from "next/link";
import { Mark } from "@/components/brand/Brand";

export function CTASection({
  title = "Instruct a human rights expert witness",
  description = "Send a short confidential brief. We reply with availability, scope and Legal Aid compatible rates.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <Mark className="pointer-events-none absolute -bottom-16 -right-10 h-80 w-auto opacity-[0.12]" navy="#F4EFE5" olive="#7D7E66" />
      <div className="relative mx-auto flex min-w-0 max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <span aria-hidden className="block h-1 w-14 bg-seal" />
          <h2 className="mt-5 font-display text-3xl font-medium text-cream sm:text-[2.6rem] sm:leading-tight">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-seal w-full hover:!bg-cream hover:!text-navy sm:w-auto">
            Instruct an expert
          </Link>
          <Link href="/how-to-instruct" className="btn-ghost w-full border-cream/40 text-cream hover:bg-cream/10 sm:w-auto">
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
