import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const WHAT_IS_FAQS = [
  {
    question: "What is a human rights expert witness?",
    answer:
      "A human rights expert witness is an independent specialist who provides expert analysis of human rights violations and return risk for UK immigration tribunals, applying ICCPR, CAT, CEDAW, ICERD, and ECHR standards through a neutral thematic framework.",
  },
  {
    question: "When should I instruct a human rights expert instead of a persecution expert?",
    answer:
      "Instruct a human rights expert where the claim turns on treaty standards, violation severity, Article 3 return risk, or human rights violations that may not meet Refugee Convention persecution thresholds. Persecution experts analyse Convention grounds and nexus.",
  },
  {
    question: "Do human rights expert reports comply with Practice Direction 2024?",
    answer:
      "Yes. Reports comply with the 20-page default limit unless permission is granted, and follow the Adam Pipe October 2025 expert report guide for structure, independence, and tribunal expectations.",
  },
];

export const metadata = createMetadata({
  title: "What Is a Human Rights Expert Witness? | UK Immigration Tribunal Role",
  description:
    "A human rights expert witness provides independent analysis of human rights violations and return risk for UK immigration tribunals: Article 3, treaty standards, conditions on return, and violation severity explained.",
  path: "/what-is-a-human-rights-expert-witness",
});

export default function WhatIsAHumanRightsExpertPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What is a Human Rights Expert Witness?" },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={WHAT_IS_FAQS}
        extra={articleSchema({
          headline: "What Is a Human Rights Expert Witness?",
          description:
            "The role, qualifications, and value of human rights expert evidence in UK immigration tribunals.",
          path: "/what-is-a-human-rights-expert-witness",
        })}
      />
      <PageShell
        title="What Is a Human Rights Expert Witness?"
        subtitle="The role, qualifications, and value of human rights expert evidence in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-body leading-relaxed">
          A human rights expert witness is an independent specialist who provides expert analysis of human rights
          violations and return risk for UK immigration tribunals. Human rights experts apply international treaty
          standards (ICCPR, CAT, CEDAW, ICERD, ECHR) to assess violation severity and return risk through a neutral,
          thematic framework rather than geographic specialisation.
        </p>
        <p className="mb-4 text-body leading-relaxed">
          Human rights experts sit at the intersection of conditions on return evidence and human rights law. They assess
          whether documented violations reach the severity threshold for asylum, subsidiary protection, or Article 3
          non-refoulement. Their reports address torture and ill-treatment, arbitrary detention, freedom of expression and
          religion, women&apos;s and LGBT human rights, human rights defenders at risk, and extrajudicial killings and
          state violence.
        </p>
        <p className="mb-4 text-body leading-relaxed">
          In Article 3 deportation and removal cases, human rights experts assess whether return would expose the
          appellant to a real risk of torture or inhuman or degrading treatment. They apply Soering, Chahal, AAA [2023]
          UKSC, and DD [2024] UKSC jurisprudence alongside current treaty body and NGO documentation.
        </p>

        <h2 id="human-rights-vs-persecution" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">
          Human Rights Expert vs Persecution Expert
        </h2>
        <p className="mt-4 mb-6 text-body leading-relaxed">
          Human rights experts and persecution experts serve complementary roles in complex asylum and immigration cases.
          The comparison below helps solicitors decide which expert to instruct first.
        </p>
        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-body">
              Human rights expert witness vs persecution expert witness: scope, sources, and when to instruct
            </caption>
            <thead>
              <tr className="bg-ink text-left text-white">
                <th className="border border-line px-4 py-3 font-semibold">Factor</th>
                <th className="border border-line px-4 py-3 font-semibold">Human Rights Expert</th>
                <th className="border border-line px-4 py-3 font-semibold">Persecution Expert</th>
              </tr>
            </thead>
            <tbody className="text-body">
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">Primary scope</td>
                <td className="border border-line px-4 py-3">Treaty standards, violation severity, Article 3 return risk</td>
                <td className="border border-line px-4 py-3">Refugee Convention persecution grounds and nexus</td>
              </tr>
              <tr className="bg-mist">
                <td className="border border-line px-4 py-3 font-medium">Key sources</td>
                <td className="border border-line px-4 py-3">ICCPR, CAT, CEDAW, ECHR, treaty body reports, OHCHR</td>
                <td className="border border-line px-4 py-3">Refugee Convention, Upper Tribunal guidance, persecution methodology</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">When to instruct</td>
                <td className="border border-line px-4 py-3">Article 3 deportation, treaty violations, severity threshold analysis</td>
                <td className="border border-line px-4 py-3">Convention ground nexus, persecution threshold, state protection</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>
        <p className="mt-6 mb-4 text-body leading-relaxed">
          For Refugee Convention persecution ground analysis, see{" "}
          <a href="https://www.persecutionexpert.com" className="text-seal hover:underline" rel="noopener noreferrer">
            persecutionexpert.com
          </a>
          . For treaty standards, see our{" "}
          <Link href="/human-rights-framework" className="text-seal hover:underline">
            human rights framework guide
          </Link>
          .
        </p>
        <p className="mb-4 text-body leading-relaxed">
          Reports comply with Immigration Tribunal Practice Direction 2024 (20-page limit) and the Adam Pipe October 2025
          expert report guide. Experts owe a paramount duty to the tribunal: independence, objectivity, and unbiased
          assistance on matters within their expertise.
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] items-center rounded-[4px] bg-seal px-6 py-3 font-semibold text-white hover:bg-seal-deep"
        >
          Instruct an Expert
        </Link>
        <FAQSection faqs={WHAT_IS_FAQS} />
      </PageShell>
    </>
  );
}
