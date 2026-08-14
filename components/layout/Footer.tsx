import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t-[3px] border-seal bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link href="/" className="font-display text-base font-semibold text-ink hover:text-seal">
            Human Rights Experts
          </Link>
          <a href={`mailto:${SITE_EMAIL}`} className="break-all text-sm text-steel hover:text-seal">
            {SITE_EMAIL}
          </a>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-steel"
          aria-label="Legal"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
    </footer>
  );
}
