import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Diamond, DiamondPhoto, Mark } from "@/components/brand/Brand";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { violationTypes } from "@/data/violation-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { getHomepageRelatedLinks } from "@/data/related-links";
import { photos } from "@/lib/photos";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Human Rights Expert Witness UK | Asylum, Article 3 & Immigration Tribunal Reports",
  description:
    "Find a qualified human rights expert witness in the UK. Independent expert reports on torture, Article 3 deportation risk, human rights violations, HR defenders, women's rights, and LGBT human rights for asylum and immigration tribunals. Legal Aid compatible.",
  path: "/",
});

const pillars = [
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
];

const method = [
  "Conflict check and scope note against your grounds of appeal and refusal letter.",
  "Source matrix: treaty text, UN observations, reliable NGO and academic material, cited rather than paraphrased into advocacy.",
  "Opinion confined to expertise: severity, pattern, protection efficacy, and Article 3 / refugee risk on return.",
  "Declaration of duty to the tribunal, CV annex, and page discipline for filing.",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero: Westminster Hall as the background, washed in navy so the title reads first. */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={photos.westminsterHall.src}
          alt={photos.westminsterHall.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy/80 to-transparent" />
        {/* The outline of the monogram's diamond and the two figures' heads, set over the photograph. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 rotate-45 border border-cream/25 lg:block"
        />
        <span aria-hidden className="pointer-events-none absolute right-[22%] top-[18%] hidden h-10 w-10 rounded-full bg-cream/90 lg:block" />
        <span aria-hidden className="pointer-events-none absolute right-[12%] top-[46%] hidden h-7 w-7 rounded-full bg-olive lg:block" />

        <div className="relative mx-auto max-w-7xl min-w-0 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="font-display text-[2.6rem] font-medium leading-[1.04] text-cream sm:text-6xl lg:text-[4.4rem]">
              Human rights expert evidence for UK tribunals
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              Independent thematic evidence on treaty standards, violation severity, and return risk, written for
              solicitors instructing in First-tier and Upper Tribunal proceedings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-seal w-full hover:!bg-cream hover:!text-navy sm:w-auto">
                Instruct an expert
              </Link>
              <Link href="/how-to-instruct" className="btn-ghost w-full border-cream/50 text-cream hover:bg-cream/10 sm:w-auto">
                How to instruct
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/20 pt-5 text-[0.98rem] text-cream/85">
              {["First-tier Tribunal", "Upper Tribunal", "Article 3 ECHR", "Legal Aid compatible"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Diamond className="h-2.5 w-2.5 text-[#C9A6A9]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:px-8">
          <DiamondPhoto photo={photos.haslarIrc} aspect="aspect-[4/5]" sizes="(max-width: 1024px) 85vw, 440px" className="mx-auto w-full max-w-md" />
          <div className="min-w-0">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-[2.7rem] sm:leading-tight">
              Why human rights expert evidence decides contested returns
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              Home Office refusal letters frequently cite general country material without mapping the appellant&apos;s
              profile to ICCPR, CAT, CEDAW, ICERD, or ECHR Article 3 thresholds. A human rights expert witness closes that
              gap: independent analysis of violation patterns, state protection failures, and foreseeable harm on return,
              formatted for Immigration Tribunal Practice Direction limits and Legal Aid prior authority.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title} className="border-t-2 border-seal pt-4">
                  <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="violations" className="scroll-mt-28 bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-[2.7rem]">Violation themes</h2>
              <p className="mt-3 max-w-xl text-lg text-body">
                Torture, detention, expression, religion, gender, LGBT rights, defenders, and state violence.
              </p>
            </div>
            <Link href="/violation-types" className="btn-ghost shrink-0 border-ink/40 text-ink hover:bg-ink hover:text-cream">
              Full index
            </Link>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {violationTypes.slice(0, 8).map((v) => {
              const p = photoFor(v.slug);
              return (
                <Link key={v.slug} href={`/violation-types/${v.slug}`} className="group block">
                  <div className="diamond-cut-sm relative aspect-[4/3] overflow-hidden bg-taupe">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 290px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium text-ink group-hover:text-seal">{v.title}</h3>
                  <p className="mt-1.5 line-clamp-3 leading-relaxed text-body">{v.metaDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="method" className="relative scroll-mt-28 overflow-hidden bg-navy py-16 text-cream sm:py-24">
        <Mark className="pointer-events-none absolute -left-24 -top-16 h-[30rem] w-auto opacity-[0.08]" navy="#F4EFE5" olive="#7D7E66" />
        <div className="relative mx-auto grid max-w-7xl min-w-0 gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-[2.7rem]">From instruction to sealed report</h2>
            <ol className="mt-9 space-y-0 border-t border-cream/15">
              {method.map((step, i) => (
                <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-cream/15 py-5">
                  <span className="font-display text-2xl text-[#C9A6A9]">{i + 1}</span>
                  <span className="text-lg leading-relaxed text-cream/85">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/how-reports-work", label: "How reports work" },
                { href: "/human-rights-framework", label: "Framework guide" },
                { href: "/article-3-deportation", label: "Article 3 returns" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 font-semibold text-cream hover:text-taupe">
                  <Diamond className="h-2.5 w-2.5 text-olive" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="diamond-cut relative aspect-[4/5] overflow-hidden bg-navy-deep">
              <Image src={photos.magnaCarta.src} alt={photos.magnaCarta.alt} fill sizes="(max-width: 1024px) 85vw, 420px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-[2.7rem]">Instruction services</h2>
          <p className="mt-3 max-w-xl text-lg text-body">
            Single-point briefing for solicitors who need a named human rights expert matched to the violation theme and
            forum.
          </p>
          <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
            {services.map((s) => {
              const p = photoFor(s.id);
              return (
                <li key={s.id} className="border-t border-line">
                  <Link href={`/services/${s.id}`} className="group grid grid-cols-[5.5rem_1fr] items-center gap-5 py-5 sm:grid-cols-[7rem_1fr]">
                    <div className="diamond-tl relative aspect-square overflow-hidden bg-taupe [--cut:1.4rem]">
                      <Image src={p.src} alt={p.alt} fill sizes="112px" className="object-cover" />
                    </div>
                    <span className="min-w-0">
                      <span className="block font-display text-xl font-medium text-ink group-hover:text-seal">{s.name}</span>
                      <span className="mt-1 block leading-relaxed text-body">{s.description}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="cases" className="scroll-mt-28 bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-[2.7rem]">Case types</h2>
              <p className="mt-3 max-w-md text-lg text-body">
                Asylum appeals, human rights claims, deportation and removal challenges where treaty and return-risk
                analysis is decisive.
              </p>
              <DiamondPhoto photo={photos.pride} aspect="aspect-[4/3]" sizes="(max-width: 1024px) 85vw, 400px" className="mt-10 hidden w-full max-w-sm lg:block" />
              <Link href="/case-types" className="btn-ghost mt-8 border-ink/40 text-ink hover:bg-ink hover:text-cream">
                All case types
              </Link>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {caseTypes.slice(0, 6).map((c) => (
                <Link key={c.slug} href={`/case-types/${c.slug}`} className="group bg-paper p-6 transition hover:bg-surface">
                  <Diamond className="h-3 w-3 text-olive group-hover:text-seal" />
                  <h3 className="mt-4 font-display text-xl font-medium text-ink group-hover:text-seal">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{c.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <section className="border-t border-line bg-paper py-12">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <RelatedLinks links={getHomepageRelatedLinks()} title="Key human rights resources" />
        </div>
      </section>
    </>
  );
}
