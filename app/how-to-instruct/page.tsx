import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Human Rights Expert Witness | UK Solicitors Guide",
  description:
    "How to instruct a human rights expert witness: identify the violation type, confirm treaty standards, Legal Aid funding, letter of instruction, documents, and oral evidence.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  const sections = [
    {
      title: "Section 1: Identify the Human Rights Issue",
      content:
        "Determine the violation type (torture, arbitrary detention, expression, religion, women's rights, LGBT rights, HR defenders, state violence), whether Article 3 deportation risk is engaged, and which treaty standards apply (ICCPR, CAT, CEDAW, ECHR).",
    },
    {
      title: "Section 2: Confirm Treaty Standards and Violation Type",
      content:
        "Human rights experts apply ICCPR, CAT, CEDAW, ICERD, and ECHR standards to assess violation severity and return risk for the appellant's profile. Identify whether Article 3 deportation risk, torture analysis, or a specific violation category is the primary focus of the instruction.",
    },
    {
      title: "Section 3: Legal Aid or Privately Funded?",
      content:
        "Human rights expert reports are Legal Aid compatible. Obtain prior authority for expert fees in accordance with LAA guidance. Privately funded instructions follow the same report standards and timelines.",
    },
    {
      title: "Section 4: Letter of Instruction",
      content:
        "Follow the Adam Pipe October 2025 guide: identify proceedings, funding, specific questions, appellant profile, documents provided, and deadline. Focus questions on human rights standards and return risk within Practice Direction 2024 page limits.",
    },
    {
      title: "Section 5: Documents to Provide",
      content:
        "Provide witness statements, Home Office decision and reasons, CPIN, medical reports, previous expert reports, relevant policy documentation, and tribunal directions. A complete document bundle improves report quality and tribunal acceptance.",
    },
    {
      title: "Section 6: Report and Written Questions",
      content:
        "Standard reports require 2 to 3 weeks. The expert will serve a report addressing the letter of instruction questions. Written questions may follow under tribunal directions. The expert must maintain independence throughout.",
    },
    {
      title: "Section 7: Oral Evidence if Directed",
      content:
        "The tribunal may direct oral evidence from the human rights expert, particularly in Upper Tribunal appeals and complex Article 3 cases. Experts should be prepared to defend their methodology and return risk opinion under cross-examination.",
    },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Human Rights Expert Witness"
        subtitle="A step-by-step guide for UK immigration solicitors, barristers, and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        {sections.map((s) => (
          <div key={s.title} className="mb-8">
            <h2 className="text-xl font-bold text-ink">{s.title}</h2>
            <p className="mt-3 text-body leading-relaxed">{s.content}</p>
          </div>
        ))}
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] items-center rounded-[4px] bg-seal px-6 py-3 font-semibold text-white hover:bg-seal-deep"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
