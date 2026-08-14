import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { violationTypes } from "@/data/violation-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { getHomepageRelatedLinks } from "@/data/related-links";

export const metadata = createMetadata({
  title: "Human Rights Expert Witness UK | Asylum, Article 3 & Immigration Tribunal Reports",
  description:
    "Find a qualified human rights expert witness in the UK. Independent expert reports on torture, Article 3 deportation risk, human rights violations, HR defenders, women's rights, and LGBT human rights for asylum and immigration tribunals. Legal Aid compatible.",
  path: "/",
});

const notes = [
  { href: "#why", label: "Why evidence" },
  { href: "#violations", label: "Violations" },
  { href: "#method", label: "Method" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case types" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Split folio hero — brand on left panel, image on right (no overlay) */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <p className="anim-rise text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-seal">
              UK Immigration &amp; Asylum Chamber
            </p>
            <h1 className="anim-rise-delay mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink min-[375px]:text-5xl sm:text-6xl">
              Human Rights Experts
            </h1>
            <p className="anim-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-body sm:text-lg">
              Independent thematic evidence on treaty standards, violation severity, and return risk — written for
              solicitors instructing in FTT and Upper Tribunal proceedings.
            </p>
            <div className="anim-rise-delay-2 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-seal w-full sm:w-auto">
                Instruct an Expert
              </Link>
              <Link
                href="/how-to-instruct"
                className="btn-ghost w-full border-ink/30 text-ink hover:bg-ink hover:text-white sm:w-auto"
              >
                Instruction path
              </Link>
            </div>
          </div>
          <div className="relative min-h-[16rem] border-t border-line lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/hero-chamber.jpg"
              alt="Quiet stone corridor of a European hearing chamber, soft clerestory light across limestone floors"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="folio-shell">
          <div className="min-w-0 space-y-20">
            <section id="why" className="scroll-mt-28">
              <div className="folio-rule mb-6" />
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Why human rights expert evidence decides contested returns
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
                Home Office refusal letters frequently cite general country material without mapping the appellant’s
                profile to ICCPR, CAT, CEDAW, ICERD, or ECHR Article 3 thresholds. A human rights expert witness closes
                that gap: independent analysis of violation patterns, state protection failures, and foreseeable harm on
                return — formatted for Immigration Tribunal Practice Direction limits and Legal Aid prior authority.
              </p>
              <div className="band-grid mt-10 sm:grid-cols-3">
                {[
                  {
                    title: "Treaty mapping",
                    desc: "Each report anchors findings to the treaty provisions the tribunal must apply, not generic country summaries.",
                  },
                  {
                    title: "Practice Direction fit",
                    desc: "Structured for the 2024 Practice Direction page limit and the Adam Pipe October 2025 expert report guidance.",
                  },
                  {
                    title: "Legal Aid ready",
                    desc: "Instruction packs and rates prepared for LAA prior authority in FTT and Upper Tribunal work.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-surface p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="violations" className="scroll-mt-28">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="folio-rule mb-6" />
                  <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Violation themes</h2>
                  <p className="mt-3 max-w-xl text-body">
                    Torture, detention, expression, religion, gender, LGBT rights, defenders, and state violence.
                  </p>
                </div>
                <Link
                  href="/violation-types"
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-seal hover:text-seal-deep"
                >
                  Full index →
                </Link>
              </div>
              <div className="band-grid mt-8 sm:grid-cols-2 lg:grid-cols-4">
                {violationTypes.slice(0, 8).map((v) => (
                  <Link
                    key={v.slug}
                    href={`/violation-types/${v.slug}`}
                    className="bg-surface p-5 transition hover:bg-mist"
                  >
                    <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">
                      {v.metaDescription.slice(0, 100)}…
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section id="method" className="scroll-mt-28">
              <div className="grid items-stretch border border-line lg:grid-cols-2">
                <div className="order-2 flex flex-col justify-center bg-surface p-7 sm:p-10 lg:order-1">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-seal">Method</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    From instruction to sealed report
                  </h2>
                  <ol className="mt-6 space-y-4">
                    {[
                      "Conflict check and scope note against your grounds of appeal and refusal letter.",
                      "Source matrix: treaty text, UN observations, reliable NGO and academic material — cited, not paraphrased into advocacy.",
                      "Opinion confined to expertise: severity, pattern, protection efficacy, and Article 3 / refugee risk on return.",
                      "Declaration of duty to the tribunal, CV annex, and page discipline for filing.",
                    ].map((step, i) => (
                      <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 text-sm leading-relaxed text-body">
                        <span className="font-display font-semibold text-seal">{String(i + 1).padStart(2, "0")}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/how-reports-work" className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-jade hover:text-seal">
                      How reports work
                    </Link>
                    <Link href="/human-rights-framework" className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-jade hover:text-seal">
                      Framework guide
                    </Link>
                    <Link href="/article-3-deportation" className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-jade hover:text-seal">
                      Article 3 returns
                    </Link>
                  </div>
                </div>
                <div className="relative order-1 min-h-[14rem] lg:order-2 lg:min-h-full">
                  <Image
                    src="/images/archive-folios.jpg"
                    alt="Archival treaty volumes and folio pages on a cool slate desk with a garnet ribbon bookmark"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </section>

            <section id="services" className="scroll-mt-28">
              <div className="folio-rule mb-6" />
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Instruction services</h2>
              <p className="mt-3 max-w-xl text-body">
                Single-point briefing for solicitors who need a named human rights expert matched to the violation theme
                and forum.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.id}`}
                      className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <span className="min-w-0">
                        <span className="font-display text-xl font-semibold text-ink group-hover:text-seal">
                          {s.name}
                        </span>
                        <span className="mt-1 block text-sm text-body">{s.description}</span>
                      </span>
                      <span className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-steel group-hover:text-seal">
                        Open →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section id="cases" className="scroll-mt-28">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="folio-rule mb-6" />
                  <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Case types</h2>
                  <p className="mt-3 max-w-xl text-body">
                    Asylum appeals, human rights claims, deportation and removal challenges where treaty and return-risk
                    analysis is decisive.
                  </p>
                </div>
                <Link
                  href="/case-types"
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-seal hover:text-seal-deep"
                >
                  All case types →
                </Link>
              </div>
              <div className="band-grid mt-8 sm:grid-cols-2">
                {caseTypes.slice(0, 4).map((c) => (
                  <Link key={c.slug} href={`/case-types/${c.slug}`} className="bg-surface p-6 transition hover:bg-mist">
                    <h3 className="font-display text-xl font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {c.metaDescription.slice(0, 130)}…
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="folio-notes" aria-label="On this page">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-seal">On this page</p>
            {notes.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </aside>
        </div>
      </div>

      <CTASection />
      <section className="border-t border-line bg-mist py-12">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <RelatedLinks links={getHomepageRelatedLinks()} title="Key human rights resources" />
        </div>
      </section>
    </>
  );
}
