import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Instruct a Human Rights Expert Witness | Contact UK",
  description:
    "Contact Human Rights Experts to instruct a qualified human rights expert witness for UK asylum, Article 3 deportation, and immigration tribunal cases. Legal Aid compatible.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Instruct a human rights expert"
        subtitle="Four fields. Confidential response within one to two business days."
        breadcrumbs={crumbs}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <div>
            <p className="mb-8 max-w-xl leading-relaxed text-body">
              Prefer email?{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-seal hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
            <ContactForm />
          </div>
          <aside className="border-t border-line pt-6 text-sm text-body lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-seal">Include if useful</p>
            <ul className="mt-4 space-y-3">
              <li>Forum (FTT / UT)</li>
              <li>Violation theme</li>
              <li>Return destination</li>
              <li>Hearing or filing date</li>
            </ul>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
