import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { violationTypes, getViolationType } from "@/data/violation-types";
import { getCaseType } from "@/data/case-types";
import { getViolationTypeRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return violationTypes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getViolationType(slug);
  if (!type) return {};
  return createMetadata({
    title: type.metaTitle,
    description: type.metaDescription,
    path: `/violation-types/${slug}`,
  });
}

export default async function ViolationTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getViolationType(slug);
  if (!type) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Violation Types", href: "/violation-types" },
    { label: type.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={type.faqs} />
      <PageShell title={type.h1} breadcrumbs={crumbs}>
        {type.content.map((p, i) => (
          <p key={i} className="mb-4 text-body leading-relaxed">
            {p}
          </p>
        ))}

        {slug === "torture-cruel-inhuman-treatment" && (
          <div className="my-8 rounded-[8px] border border-line bg-mist p-5">
            <h2 className="text-lg font-bold text-ink">CAT Article 1 Torture Definition</h2>
            <p className="mt-3 text-body leading-relaxed">
              Under the Convention Against Torture Article 1, torture means any act by which severe pain or suffering,
              whether physical or mental, is intentionally inflicted by or at the instigation of or with the consent or
              acquiescence of a public official for a specific purpose. Article 3 ECHR covers a broader category including
              inhuman or degrading treatment that does not meet the full CAT torture definition.
            </p>
          </div>
        )}

        {slug === "human-rights-defenders-journalists" && (
          <div id="shrinking-civic-space" className="my-8 scroll-mt-24 rounded-[8px] border border-line bg-mist p-5">
            <h2 className="text-lg font-bold text-ink">Shrinking Civic Space 2025–2026</h2>
            <p className="mt-3 text-body leading-relaxed">
              Shrinking civic space describes the global trend of increased restrictions on civil society, journalists, and
              human rights defenders documented in UN Human Rights Council and Special Rapporteur reports for 2025 and 2026.
              The UN Special Rapporteur on the situation of human rights defenders documents systematic reprisals, including
              against returnees with visible diaspora profiles. Expert evidence must address surveillance capacity, documented
              reprisals, and whether state protection is available on return.
            </p>
          </div>
        )}

        <h2 className="mt-8 text-xl font-bold text-ink">Related Case Types</h2>
        <ul className="mt-4 space-y-2">
          {type.relatedCaseTypes.map((s) => {
            const ct = getCaseType(s);
            return (
              <li key={s}>
                <Link href={`/case-types/${s}`} className="text-seal hover:underline">
                  {ct?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={type.faqs} />
        <RelatedLinks links={getViolationTypeRelatedLinks(slug)} title="Related resources" />
      </PageShell>
    </>
  );
}
