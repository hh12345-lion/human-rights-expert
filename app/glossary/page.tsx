import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { glossaryTerms } from "@/data/glossary";
import { sectionPhotos } from "@/lib/page-photos";

const GLOSSARY_FAQS = glossaryTerms.slice(0, 12).map((t) => ({
  question: `What is ${t.term}?`,
  answer: t.definition,
}));

export const metadata = createMetadata({
  title: "Human Rights Glossary | UK Asylum & Immigration Expert Terms",
  description:
    "Glossary of human rights expert witness terms: Article 3 ECHR, CAT, ICCPR, anxious scrutiny, non-refoulement, treaty body, Istanbul Protocol, and 35 key definitions for UK solicitors.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={GLOSSARY_FAQS} />
      <PageShell photo={sectionPhotos.glossary}
        title="Human Rights Expert Witness Glossary"
        subtitle="Key terms and definitions for UK immigration practitioners working with human rights expert evidence."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
