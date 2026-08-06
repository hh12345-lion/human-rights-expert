import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = createMetadata({
 title: "Human Rights Expert Witness Services | Asylum & Immigration Tribunals",
 description:
 "Human rights expert witness services: human rights conditions reports, Article 3 deportation risk, torture analysis, arbitrary detention, HR defender risk, women's rights, LGBT rights, and rule of law reports.",
 path: "/services",
});

export default function ServicesPage() {
 const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

 return (
 <>
 <PageJsonLd breadcrumbs={crumbs} />
 <JsonLd
 data={servicesPageGraph(
 services.map((s) => ({ id: s.id, name: s.name, description: s.description }))
 )}
 />
 <PageShell
 title="Human Rights Expert Witness Services"
 subtitle="Immigration Tribunal Practice Direction compliant reports for all major human rights violation types."
 breadcrumbs={crumbs}
 >
 <p className="mb-8 text-body leading-relaxed">
 Human Rights Experts provides eight specialist expert report services for UK immigration solicitors,
 barristers, and Legal Aid practitioners. All reports are prepared by qualified human rights experts with
 familiarity in international human rights law, treaty standards, and UK tribunal practice.
 </p>
 <CardGrid
 items={services.map((s) => ({
 title: s.name,
 description: s.description,
 href: `/services/${s.id}`,
 }))}
 />
 <p className="mt-8 text-body">
 Questions about instructing an expert? See{" "}
 <Link href="/how-to-instruct" className="font-semibold text-seal hover:underline">
 how to instruct
 </Link>{" "}
 or{" "}
 <Link href="/contact" className="font-semibold text-seal hover:underline">
 contact us
 </Link>
 .
 </p>
 </PageShell>
 </>
 );
}
