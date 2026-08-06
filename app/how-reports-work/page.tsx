import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const PAGE_DESCRIPTION =
 "How human rights expert reports work: Practice Direction standards, report structure, CPIN analysis, Adam Pipe 2025 guidance, and Legal Aid compatibility for UK immigration tribunals.";

const REPORT_FAQS = [
 {
 question: "What is the default page limit for expert reports in the Immigration Tribunal?",
 answer:
 "Expert reports are limited to 20 pages unless permission is granted under Practice Direction paragraphs 9.2 and 9.3. Strategic instruction focusing on specific human rights questions improves report quality within this limit.",
 },
 {
 question: "What does the Adam Pipe October 2025 guide require?",
 answer:
 "The updated Expert Reports in the Immigration Tribunal guide sets tribunal expectations for report quality, letters of instruction, source citation, expert independence, and tribunal acceptance standards.",
 },
 {
 question: "What should a human rights expert report contain?",
 answer:
 "A compliant report includes expert qualifications and methodology, sources, applicable human rights standards, conditions on return for the specific profile, violation severity analysis, return risk opinion where applicable, and a statement of truth with declaration of independence.",
 },
];

export const metadata = createMetadata({
 title: "How Human Rights Expert Reports Work | Standards & Process UK",
 description: PAGE_DESCRIPTION,
 path: "/how-reports-work",
});

export default function HowReportsWorkPage() {
 const crumbs = [{ label: "Home", href: "/" }, { label: "How Reports Work" }];

 return (
 <>
 <PageJsonLd breadcrumbs={crumbs} faqs={REPORT_FAQS} extra={articleSchema({
 headline: "How Human Rights Expert Reports Work: Standards, Structure and Process",
 description: PAGE_DESCRIPTION,
 path: "/how-reports-work",
 })} />
 <PageShell
 title="How Human Rights Expert Reports Work: Standards, Structure and Process"
 subtitle="Practice Direction compliant human rights expert evidence for UK immigration tribunals."
 breadcrumbs={crumbs}
 >
 <h2 className="text-xl font-bold text-ink">The Expert&apos;s Duties</h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 Human rights expert witnesses owe a paramount duty to the tribunal under Immigration Tribunal Practice Direction
 paragraph 10 and CPR Part 35. The Ikarian Reefer principles require independence, objectivity, and unbiased
 assistance on matters within the expert&apos;s expertise. Experts must not advocate for either party and must
 distinguish facts assumed on instruction from independent opinion.
 </p>

 <h2 className="mt-8 text-xl font-bold text-ink">What a Human Rights Report Contains</h2>
 <ol className="mt-4 mb-4 list-decimal space-y-2 pl-6 text-body leading-relaxed">
 <li>Expert qualifications and methodology</li>
 <li>Sources (treaty body reports, OHCHR, NGO reports, CPINs, field research, tribunal decisions)</li>
 <li>Applicable human rights standards</li>
 <li>conditions on return relevant to the specific profile</li>
 <li>Violation severity analysis</li>
 <li>Return risk opinion (Article 3 where applicable)</li>
 <li>Statement of truth and declaration of independence</li>
 </ol>

 <h2 id="practice-direction-2024" className="mt-8 scroll-mt-24 text-xl font-bold text-ink">
 Practice Direction 2024 Report Limits
 </h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 Expert reports in the Immigration Tribunal are limited to 20 pages unless permission is granted (PD 9.2, 9.3).
 Strategic instruction focusing on specific human rights questions improves report quality within page limits.
 Permission for longer reports should be sought where complex multi-violation analysis is required.
 </p>

 <h2 className="mt-8 text-xl font-bold text-ink">Going Beyond the CPIN</h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 Human rights experts apply treaty body standards, NGO documentation, and field research where CPIN human rights
 sections are incomplete or fail to address specific violation profiles. The expert role is to provide independent
 human rights analysis, not to reproduce Home Office country information.
 </p>

 <h2 id="adam-pipe-2025" className="mt-8 scroll-mt-24 text-xl font-bold text-ink">
 Adam Pipe October 2025 Guide
 </h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 The updated Expert Reports in the Immigration Tribunal guide sets tribunal expectations for report quality,
 letters of instruction, source citation, and expert independence. Solicitors should follow this guidance when
 instructing human rights experts and drafting letters of instruction.
 </p>

 <h2 className="mt-8 text-xl font-bold text-ink">Legal Aid Compatibility</h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 Human rights expert reports are routinely funded under Legal Aid for asylum and human rights appeals. Prior
 authority should be obtained for expert fees in accordance with LAA guidance. Standard report fees are
 compatible with LAA rates for FTT and Upper Tribunal proceedings.
 </p>

 <h2 className="mt-8 text-xl font-bold text-ink">Timeline from Instruction to Report</h2>
 <p className="mt-4 mb-4 text-body leading-relaxed">
 Standard human rights expert reports require 2 to 3 weeks from instruction. Urgent reports may be accommodated
 where tribunal deadlines require. Early instruction with a complete letter of instruction and supporting
 documents improves report quality. Written questions may follow report service; oral evidence may be directed
 by the tribunal.
 </p>
 <p className="text-body">
 Ready to instruct? See{" "}
 <Link href="/how-to-instruct" className="font-semibold text-seal hover:underline">
 how to instruct
 </Link>{" "}
 or{" "}
 <Link href="/contact" className="font-semibold text-seal hover:underline">
 contact us
 </Link>
 .
 </p>
 <FAQSection faqs={REPORT_FAQS} />
 </PageShell>
 </>
 );
}
