import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-24 py-12" aria-labelledby={`${id}-heading`}>
      <div className="ledger-rule mb-5 max-w-[6rem]" />
      <h2 id={`${id}-heading`} className="mb-8 font-display text-3xl text-ink">
        {title}
      </h2>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
            <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-seal">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div>
              <h3 className="font-display text-xl text-ink">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
