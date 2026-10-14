import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { Diamond, Logo, Mark } from "@/components/brand/Brand";
import { SITE_EMAIL } from "@/lib/constants";
import { caseTypesNavLinks, resourcesNavLinks, violationTypesNavLinks } from "@/data/navigation";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-0">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <ul className="mt-4 space-y-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group flex min-h-[36px] items-center gap-2.5 text-[0.98rem] text-body hover:text-seal">
              <Diamond className="h-2 w-2 shrink-0 text-taupe transition group-hover:text-seal" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-mist">
      {/* The three brand colours as a single rule across the top edge. */}
      <div aria-hidden className="flex h-1.5">
        <span className="w-3/5 bg-navy" />
        <span className="w-1/4 bg-olive" />
        <span className="flex-1 bg-seal" />
      </div>
      <Mark className="pointer-events-none absolute -bottom-24 -right-20 h-[30rem] w-auto opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-line pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Human Rights Experts home" className="inline-block">
              <Logo className="h-14 w-auto" />
            </Link>
            <p className="mt-6 leading-relaxed text-body">
              Independent human rights expert evidence for solicitors instructing in the First-tier and Upper Tribunal.
            </p>
            <a href={`mailto:${SITE_EMAIL}`} className="mt-5 inline-block break-all font-semibold text-seal hover:underline">
              {SITE_EMAIL}
            </a>
            <Link href="/contact" className="btn-seal mt-7 flex w-fit">
              Instruct an expert
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <Column title="Violations" links={violationTypesNavLinks} />
            <Column title="Case types" links={caseTypesNavLinks} />
            <Column title="Resources" links={resourcesNavLinks} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Human Rights Experts</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1" aria-label="Legal">
            <Link href="/privacy" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Cookies
            </Link>
            <Link href="/terms" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Terms
            </Link>
            <Link href="/image-credits" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Image credits
            </Link>
            <CookieSettingsButton variant="footer" className="!text-sm !normal-case !tracking-normal !font-normal" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
