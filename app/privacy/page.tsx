import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy | Human Rights Experts",
  description: "Privacy policy for humanrightsexperts.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Privacy Policy" breadcrumbs={crumbs}>
        <p className="text-body leading-relaxed">
          Human Rights Experts is operated to connect UK solicitors with qualified human rights expert witnesses. We
          collect personal data submitted through our contact form (name, law firm, email, phone, and case details)
          solely to respond to instruction requests and match appropriate experts.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          Contact form submissions are processed via our secure lead API and may trigger email notifications to our team. We retain
          data only as long as necessary to fulfil your request. We do not sell personal data. You may request deletion
          by emailing {SITE_EMAIL}. We use cookies as described in our{" "}
          <a href="/cookie-policy" className="font-medium text-seal hover:underline">
            Cookie Policy
          </a>
          . Non-essential tracking scripts load only after you grant consent.
        </p>
        <h2 className="mt-8 text-lg font-bold text-ink">Your Rights (GDPR)</h2>
        <p className="mt-4 text-body leading-relaxed">
          You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
          withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
          rights, contact {SITE_EMAIL}.
        </p>
      </PageShell>
    </>
  );
}
