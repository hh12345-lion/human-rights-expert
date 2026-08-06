import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CookieSettingsButton } from "@/components/cookies";
import { createMetadata } from "@/lib/metadata";
import { CATEGORY_META } from "@/lib/cookies/constants";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cookie Policy | Human Rights Experts",
  description:
    "How humanrightsexperts.com uses cookies and similar technologies, your choices under UK GDPR and ePrivacy, and how to manage preferences.",
  path: "/cookie-policy",
  noindex: true,
  follow: true,
});

export default function CookiePolicyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Cookie Policy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Cookie Policy" subtitle="Last updated: June 2026" breadcrumbs={crumbs}>
        <p className="text-body leading-relaxed">
          This Cookie Policy explains how Human Rights Experts (&quot;we&quot;, &quot;us&quot;) uses cookies and
          similar technologies when you visit humanrightsexperts.com. It should be read alongside our{" "}
          <Link href="/privacy" className="font-medium text-seal hover:underline">
            Privacy Policy
          </Link>
          . We comply with the UK GDPR, the Privacy and Electronic Communications Regulations (PECR), and apply
          CCPA-aligned transparency where relevant to California visitors.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">What are cookies?</h2>
        <p className="mt-4 text-body leading-relaxed">
          Cookies are small text files stored on your device. We also use similar technologies such as local storage (to
          remember your cookie consent choices for up to 12 months) and pixels or tags that load only after you grant
          consent.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">How we use cookies</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Operate the website securely and remember your consent preferences</li>
          <li>Understand aggregated traffic and page performance (analytics, only if enabled)</li>
          <li>Measure advertising effectiveness (marketing tags, only if enabled)</li>
          <li>Remember optional display preferences where applicable</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-ink">Cookie categories</h2>
        <div className="mt-4 space-y-4">
          {(Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map((key) => {
            const meta = CATEGORY_META[key];
            return (
              <section key={key} className="rounded-[8px] border border-line p-4">
                <h3 className="font-semibold text-ink">{meta.label}</h3>
                <p className="mt-2 text-sm text-body">{meta.description}</p>
                {meta.required && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-seal">Always active</p>
                )}
              </section>
            );
          })}
        </div>

        <h2 className="mt-10 text-xl font-bold text-ink">Third-party services</h2>
        <p className="mt-4 text-body leading-relaxed">
          Depending on your choices, we may load tools provided by:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Google Analytics and Google Tag Manager (analytics)</li>
          <li>Meta Pixel (marketing)</li>
          <li>LinkedIn Insight Tag (marketing)</li>
          <li>Hotjar (analytics and experience insights)</li>
        </ul>
        <p className="mt-4 text-sm text-body">
          These providers may process data outside the UK. We use Google Consent Mode v2 so tags respect your choices
          before non-essential data is collected. Scripts do not load until you grant the relevant category.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">Your choices</h2>
        <p className="mt-4 text-body leading-relaxed">
          On your first visit you can Accept All, Reject Non-Essential, or Customize Preferences. You may change your
          mind at any time using <CookieSettingsButton variant="inline" /> in the website footer. Consent is stored in
          your browser for up to 12 months, after which we will ask again.
        </p>
        <p className="mt-4 text-sm text-body">
          California residents: you may opt out of non-essential cookies using Reject Non-Essential or Customize
          Preferences. We do not sell personal information.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">Browser controls</h2>
        <p className="mt-4 text-body leading-relaxed">
          You can also block or delete cookies via your browser settings. Blocking necessary cookies may affect site
          functionality, including saving your consent record.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">Contact</h2>
        <p className="mt-4 text-body leading-relaxed">
          Questions about this policy:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-seal hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
      </PageShell>
    </>
  );
}
