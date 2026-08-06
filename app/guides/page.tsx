import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Human Rights Expert Evidence Guides | UK Solicitors",
  description:
    "Solicitor guides on human rights expert evidence: Article 3 deportation, human rights framework, torture and CAT, HR defenders, ECHR in tribunals, and instructing experts.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Human Rights Expert Evidence"
        subtitle="Practical guides for UK immigration practitioners on instructing human rights expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          These guides provide detailed reference material on human rights law standards, expert report methodology,
          and tribunal practice for immigration solicitors, barristers, and Legal Aid practitioners.
        </p>
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: g.metaDescription,
            href: `/guides/${g.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
