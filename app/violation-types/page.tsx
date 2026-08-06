import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { violationTypes } from "@/data/violation-types";

export const metadata = createMetadata({
 title: "Human Rights Violation Types | Expert Witness UK",
 description:
 "Human rights violation types for UK asylum and immigration tribunals: torture, arbitrary detention, freedom of expression, religion, women's rights, LGBT rights, HR defenders, and state violence.",
 path: "/violation-types",
});

export default function ViolationTypesPage() {
 const crumbs = [
 { label: "Home", href: "/" },
 { label: "Violation Types" },
 ];

 return (
 <>
 <PageJsonLd breadcrumbs={crumbs} />
 <PageShell
 title="Human Rights Violation Types"
 subtitle="Thematic human rights violation analysis covering all treaty standards applicable in UK asylum and immigration proceedings."
 breadcrumbs={crumbs}
 >
 <p className="mb-8 text-body leading-relaxed">
 Human rights expert witnesses provide independent analysis of specific violation categories using international
 treaty standards. Each violation type below links to detailed guidance on legal framework, expert methodology,
 and return risk assessment for UK immigration tribunals.
 </p>
 <CardGrid
 items={violationTypes.map((v) => ({
 title: v.title,
 description: v.metaDescription,
 href: `/violation-types/${v.slug}`,
 }))}
 />
 </PageShell>
 </>
 );
}
