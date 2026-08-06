import Link from "next/link";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { getPillarRelatedLinks } from "@/data/related-links";

const PAGE_DESCRIPTION =
  "Expert guide to Article 3 ECHR deportation and removal cases for UK solicitors: Soering standard, real risk of torture, inhuman or degrading treatment, leading Supreme Court return risk authority, and expert evidence requirements.";

export const metadata = createMetadata({
  title: "Article 3 ECHR Deportation Expert UK | Removal Risk Reports 2025–2026",
  description: PAGE_DESCRIPTION,
  path: "/article-3-deportation",
});

export default function Article3DeportationPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Article 3 Deportation" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          headline: "Article 3 ECHR Deportation and Removal: Expert Evidence Guide for UK Solicitors",
          description: PAGE_DESCRIPTION,
          path: "/article-3-deportation",
        })}
      />
      <PageShell
        title="Article 3 ECHR Deportation and Removal: Expert Evidence Guide for UK Solicitors"
        subtitle="The definitive reference on Article 3 non-refoulement, real risk analysis, and expert evidence in UK deportation and removal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-body leading-relaxed">
          Article 3 ECHR prohibits torture and inhuman or degrading treatment without exception. In deportation and removal
          proceedings, the United Kingdom may not return an individual to a country where substantial grounds exist for
          believing they would face a real risk of such treatment. This guide explains the legal framework, leading
          authority, and expert evidence requirements for solicitors handling Article 3 cases in 2025 and 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">The Article 3 Non-Refoulement Standard</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Non-refoulement under Article 3 is absolute: no derogation is permitted regardless of the individual&apos;s conduct
          or national security considerations (Chahal v UK [1996]). The real risk test requires more than a mere possibility
          of harm but does not require proof on the balance of probabilities (Soering v UK [1989]). Tribunals apply anxious
          scrutiny, examining evidence with particular care given the irreversible consequences of refoulement (Abdi v SSHD
          [1996]).
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Key Article 3 Framework Table</h2>
        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-body">
              Article 3 ECHR deportation framework: legal standards and 2025–2026 updates for expert evidence
            </caption>
            <thead>
              <tr className="bg-ink text-left text-white">
                <th className="border border-line px-4 py-3 font-semibold">Issue</th>
                <th className="border border-line px-4 py-3 font-semibold">Legal Standard</th>
                <th className="border border-line px-4 py-3 font-semibold">2025–2026 Update</th>
              </tr>
            </thead>
            <tbody className="text-body">
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">Real risk test</td>
                <td className="border border-line px-4 py-3">Soering v UK [1989]; Chahal v UK [1996]</td>
                <td className="border border-line px-4 py-3">Anxious scrutiny applies</td>
              </tr>
              <tr className="bg-mist">
                <td className="border border-line px-4 py-3 font-medium">Generalised violence</td>
                <td className="border border-line px-4 py-3">HN [2020] UKUT; Article 15(c) overlap</td>
                <td className="border border-line px-4 py-3">Profile-specific analysis required</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">Medical conditions</td>
                <td className="border border-line px-4 py-3">Paposhvili [2017]; Savran [2021]</td>
                <td className="border border-line px-4 py-3">Intensity of treatment abroad</td>
              </tr>
              <tr className="bg-mist">
                <td className="border border-line px-4 py-3 font-medium">Failed asylum returnees</td>
                <td className="border border-line px-4 py-3">Profile-specific; diaspora support tests</td>
                <td className="border border-line px-4 py-3">AAA [2023] UKSC</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-line px-4 py-3 font-medium">Interim measures</td>
                <td className="border border-line px-4 py-3">ECtHR Rule 39</td>
                <td className="border border-line px-4 py-3">Deportation pending applications</td>
              </tr>
              <tr className="bg-mist">
                <td className="border border-line px-4 py-3 font-medium">Expert evidence role</td>
                <td className="border border-line px-4 py-3">Independent conditions on return + profile</td>
                <td className="border border-line px-4 py-3">Beyond CPIN reproduction</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 id="aaa-2023" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">AAA [2023] UKSC and Return Risk</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          The Supreme Court in AAA [2023] UKSC addressed return risk for failed asylum seekers without support networks.
          The decision established that diaspora profile, lack of support networks, and visibility as a failed asylum
          returnee can create enhanced Article 3 risk. Human rights experts assess whether similar principles apply to
          the appellant&apos;s return destination and profile, analysing returnee vulnerability beyond general conditions
          in CPINs.
        </p>

        <h2 id="dd-2024" className="mt-10 scroll-mt-24 text-2xl font-bold text-ink">DD [2024] UKSC and Changed Conditions on Return</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          DD [2024] UKSC analysed return conditions where the situation on return had changed materially, addressing risk
          for women, protected minority profiles, and those with imputed Western affiliation. The decision confirms that
          conditions on return analysis must be current and profile-specific. Experts must apply updated treaty body and
          NGO documentation rather than relying on outdated CPIN material.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">When to Instruct a Human Rights Expert in Removal Cases</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Instruct a human rights expert where return risk turns on torture or ill-treatment, state violence, arbitrary
          detention, defender targeting, or treaty standards beyond CPIN coverage. Human rights experts are essential in
          complex Article 3 cases where persecution ground analysis alone is insufficient. Early instruction allows 2 to 3
          weeks for a standard report complying with Practice Direction 2024 page limits.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Expert Report Requirements in Article 3 Proceedings</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Reports must comply with Practice Direction paragraph 10, CPR Part 35, and Ikarian Reefer duties of
          independence and objectivity. Content should include qualifications, methodology, sources, applicable human
          rights standards, conditions on return for the specific profile, violation severity analysis, return risk opinion,
          and statement of truth. The Adam Pipe October 2025 guide sets updated tribunal expectations. Reports are limited
          to 20 pages unless permission is granted under PD 9.2 and 9.3.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">Human Rights Expert Evidence in Removal Cases</h2>
        <p className="mt-4 mb-4 text-body leading-relaxed">
          Human rights experts apply treaty standards and violation severity methodology to assess whether return would
          breach Article 3. Reports address applicable instruments, documented violation patterns, conditions on return,
          and reasoned opinion independent of Home Office CPIN summaries. See our{" "}
          <Link href="/human-rights-framework" className="text-seal hover:underline">
            human rights framework guide
          </Link>{" "}
          and{" "}
          <Link href="/how-reports-work" className="text-seal hover:underline">
            how reports work
          </Link>
          .
        </p>
        <RelatedLinks links={getPillarRelatedLinks()} title="Explore human rights resources" />
      </PageShell>
    </>
  );
}
