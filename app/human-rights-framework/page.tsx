import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { getPillarRelatedLinks } from "@/data/related-links";

const PAGE_DESCRIPTION =
  "Complete guide to human rights law standards in UK asylum and immigration proceedings for solicitors: ICCPR, CAT, CEDAW, ECHR Article 3, violation severity, and expert report methodology.";

export const metadata = createMetadata({
  title: "Human Rights Framework UK | ICCPR, CAT, ECHR & Expert Evidence Guide 2025–2026",
  description: PAGE_DESCRIPTION,
  path: "/human-rights-framework",
});

export default function HumanRightsFrameworkPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Human Rights Framework" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          headline: "Human Rights Law in UK Asylum and Immigration Proceedings: A Complete Guide for Solicitors",
          description: PAGE_DESCRIPTION,
          path: "/human-rights-framework",
        })}
      />
      <PageShell
        title="Human Rights Law in UK Asylum and Immigration Proceedings: A Complete Guide for Solicitors"
        subtitle="The authoritative reference on international human rights treaty standards, violation severity, and expert evidence for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-body leading-relaxed">
          Human rights law forms an essential parallel framework to Refugee Convention persecution analysis in UK asylum
          and immigration proceedings. Where persecution ground analysis alone is insufficient, human rights expert
          witnesses provide independent analysis of treaty standards, violation severity, and return risk under Article 3
          ECHR and international human rights instruments. This guide explains the framework solicitors need when
          instructing human rights experts in 2025 and 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Why Human Rights Expert Evidence Matters</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Home Office decisions frequently fail to apply international human rights standards or assess whether documented
          violations reach the severity threshold for protection. Tribunals require independent expert analysis when claims
          engage Article 3 deportation risk, torture standards under CAT, women&apos;s rights under CEDAW, or broader civil
          and political rights under ICCPR.           Human rights experts sit at the intersection of conditions on return evidence and human rights law, assessing whether documented violations reach the threshold for asylum, subsidiary
          protection, or Article 3 non-refoulement.
        </p>
        <p className="mb-4 text-body leading-relaxed">
          The Immigration Act 2024 implementation continues to heighten scrutiny of human rights claims and removal cases.
          Practice Direction 2024 limits expert reports to 20 pages unless permission is granted, making focused human
          rights analysis more important than ever. The Adam Pipe October 2025 guide on Expert Reports in the Immigration
          Tribunal sets updated expectations for report quality, letters of instruction, and tribunal acceptance.
        </p>

        <h2 id="echr-article-3" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">ECHR Article 3</h2>
        <p className="mt-4 mb-6 text-body leading-relaxed">
          Article 3 ECHR prohibits torture and inhuman or degrading treatment without exception. It is the primary
          non-refoulement provision in UK deportation and removal proceedings. Human rights experts assess whether return
          would expose the appellant to a real risk of treatment reaching the Article 3 threshold.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Core International Human Rights Instruments</h2>
        <p className="mt-4 mb-6 text-body leading-relaxed">
          Human rights experts apply multiple treaty instruments to benchmark state conduct and assess violation severity.
          The table below summarises each instrument&apos;s relevance to UK proceedings and the expert&apos;s role.
        </p>

        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-body">
              International human rights instruments and expert witness roles in UK asylum and immigration proceedings
            </caption>
            <thead>
              <tr className="bg-ink text-left text-white">
                <th className="border border-line px-4 py-3 font-semibold">Instrument</th>
                <th className="border border-line px-4 py-3 font-semibold">Relevance to UK Proceedings</th>
                <th className="border border-line px-4 py-3 font-semibold">Expert Role</th>
              </tr>
            </thead>
            <tbody className="text-body">
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">ECHR Article 3</td>
                <td className="border border-line px-4 py-3">Prohibition of torture, inhuman or degrading treatment</td>
                <td className="border border-line px-4 py-3">Assess return risk severity</td>
              </tr>
              <tr className="bg-mist">
                <td id="iccpr" className="scroll-mt-24 border border-line px-4 py-3 font-medium">ICCPR</td>
                <td className="border border-line px-4 py-3">Civil and political rights standards</td>
                <td className="border border-line px-4 py-3">Benchmark state conduct</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">CAT</td>
                <td className="border border-line px-4 py-3">Torture definition and state obligations</td>
                <td className="border border-line px-4 py-3">Torture risk analysis</td>
              </tr>
              <tr className="bg-mist">
                <td id="cedaw" className="scroll-mt-24 border border-line px-4 py-3 font-medium">CEDAW</td>
                <td className="border border-line px-4 py-3">Women&apos;s rights and discrimination</td>
                <td className="border border-line px-4 py-3">Gender-based violation analysis</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">ICERD</td>
                <td className="border border-line px-4 py-3">Racial discrimination</td>
                <td className="border border-line px-4 py-3">Ethnic targeting analysis</td>
              </tr>
              <tr className="bg-mist">
                <td className="border border-line px-4 py-3 font-medium">UDHR</td>
                <td className="border border-line px-4 py-3">Foundational rights reference</td>
                <td className="border border-line px-4 py-3">Contextual framework</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 id="human-rights-vs-persecution" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">
          Human Rights Violations vs Persecution Under the Refugee Convention
        </h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Persecution under the Refugee Convention requires a nexus to a Convention ground and harm reaching the persecution
          threshold. Human rights violations may ground protection even where persecution analysis is insufficient, particularly
          in Article 3 deportation cases where the real risk of torture or inhuman treatment is the central question.
          Solicitors should instruct a human rights expert alongside or instead of a persecution expert where the claim
          turns on treaty standards, violation severity, or return conditions reaching the Article 3 threshold.
        </p>
        <p className="mb-4 text-body leading-relaxed">
          For Refugee Convention persecution ground analysis, see{" "}
          <a href="https://www.persecutionexpert.com" className="text-seal hover:underline" rel="noopener noreferrer">
            persecutionexpert.com
          </a>
          . Human rights experts on this site focus on treaty standards and violation severity for the appellant&apos;s
          specific profile, not geographic specialisation.
        </p>

        <h2 id="violation-severity-threshold" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">
          The Violation Severity Threshold
        </h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          A serious violation of fundamental human rights may ground asylum, subsidiary protection, or Article 3
          non-refoulement. Experts assess whether documented violations reach the severity threshold using the criteria below.
        </p>
        <ol className="mb-4 list-decimal space-y-2 pl-6 text-body leading-relaxed">
          <li>Whether violations are systematic or isolated on return</li>
          <li>Whether violations target the appellant&apos;s specific profile or imputed characteristics</li>
          <li>Whether the state is willing and able to prevent further harm on return</li>
          <li>Whether cumulative violations reach the threshold even where individual incidents appear less severe</li>
          <li>Whether treaty body jurisprudence supports severity at the Article 3 or subsidiary protection level</li>
        </ol>
        <p className="mb-4 text-body leading-relaxed">
          Treaty body jurisprudence on severity informs expert analysis across torture, arbitrary detention,
          extrajudicial killings, and restrictions on expression, religion, and assembly.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">State Obligations and Due Diligence</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          States bear obligations to respect, protect, and fulfil human rights. The willing but unable test addresses
          whether a state genuinely cannot prevent violations despite effort. Systematic failure to investigate, prosecute,
          or prevent violations indicates institutional discrimination or deliberate tolerance. Experts assess state
          capacity, institutional accountability mechanisms, and documented patterns of impunity relevant to the
          appellant&apos;s profile on return.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">UN Human Rights Mechanisms</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          OHCHR reports, Special Rapporteur thematic reports, Universal Periodic Review outcomes, and
          treaty body concluding observations are authoritative expert sources. CAT, CCPR, CEDAW, and CERD committees
          publish concluding observations identifying specific human rights concerns. Experts use these sources
          alongside NGO reports, CPINs, and field research to provide analysis beyond Home Office policy information
          reproduction.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Expert Reports and Human Rights Analysis</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Human rights experts apply treaty standards to the appellant&apos;s specific profile, assessing violation severity
          and return risk with reasoned opinion. Reports address applicable instruments, sources, conditions on return
          relevant to the profile, violation analysis, return risk opinion, and declaration of independence. Experts go
          beyond CPIN reproduction to apply treaty body standards where CPIN human rights sections are incomplete or
          outdated. See our{" "}
          <Link href="/how-reports-work" className="text-seal hover:underline">
            how reports work
          </Link>{" "}
          page for full methodology.
        </p>

        <h2 id="shrinking-civic-space" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">
          Shrinking Civic Space 2025–2026
        </h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          UN Human Rights Council and Special Rapporteur reports for 2025 and 2026 document shrinking civic space globally,
          with increased targeting of human rights defenders, journalists, and activists. Digital surveillance and online
          expression violations are emerging expert evidence themes. Experts assess whether defender and journalist profiles
          create enhanced return risk beyond general conditions on return.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">2025–2026 Updates</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Practice Direction 2024 report limits require strategic instruction focusing on specific human rights questions.
          The Adam Pipe October 2025 guide updates tribunal expectations for expert evidence quality. UN Human Rights
          Council and treaty body reports for 2025 and 2026 document shrinking civic space globally and increased targeting
          of human rights defenders. Digital surveillance and online expression violations are emerging expert evidence
          themes. Gender apartheid discourse in UN human rights mechanisms informs women&apos;s rights analysis. Home Office
          CPIN human rights sections have been updated in multiple policy publications during 2025.
        </p>
        <p className="mb-4 text-body leading-relaxed">
          For Article 3 deportation framework, see our{" "}
          <Link href="/article-3-deportation" className="text-seal hover:underline">
            Article 3 deportation guide
          </Link>
          . For violation-specific analysis, browse{" "}
          <Link href="/violation-types" className="text-seal hover:underline">
            violation types
          </Link>
          .
        </p>
        <RelatedLinks links={getPillarRelatedLinks()} title="Explore human rights resources" />
      </PageShell>
    </>
  );
}
