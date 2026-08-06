import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Human Rights Case Types | Expert Witness UK Immigration Tribunals",
  description:
    "Human rights expert witness case types: FTT human rights appeals, Upper Tribunal, Article 3 deportation, Article 8 family life, fresh claims, defender asylum, torture survivor, and medical claims.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Human Rights Case Types"
        subtitle="Expert witness reports for all major human rights proceedings in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          Human rights expert witnesses provide independent analysis across the full range of UK immigration tribunal
          proceedings. Select a case type below for detailed guidance on expert evidence requirements and methodology.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.metaDescription,
            href: `/case-types/${c.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
