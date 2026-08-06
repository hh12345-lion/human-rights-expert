import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={service.faqs} />
      <PageShell title={service.h1} breadcrumbs={crumbs}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-body leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-10">
          <FAQSection faqs={service.faqs} />
        </div>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-seal px-6 py-3 font-semibold text-white hover:bg-seal-deep sm:w-auto"
        >
          Contact Us
        </Link>
      </PageShell>
    </>
  );
}
