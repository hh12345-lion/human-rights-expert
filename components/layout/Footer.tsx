import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/" className="font-display text-lg text-white hover:text-white/90">
            Human Rights Experts
          </Link>
          <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="break-all text-sm text-white/55 transition hover:text-seal"
          >
            {SITE_EMAIL}
          </a>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/45"
          aria-label="Legal"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
    </footer>
  );
}
