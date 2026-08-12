"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

const labelClass = "mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Read from the DOM so browser autofill values are included
    const fullName = String(
      (form.elements.namedItem("name") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const email = String(
      (form.elements.namedItem("email") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const organisation = String(
      (form.elements.namedItem("law_firm") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const summary = String(
      (form.elements.namedItem("summary") as HTMLTextAreaElement | null)?.value ?? ""
    ).trim();

    if (!fullName || !email || !organisation || !summary) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const ok = await postSubmitLead({
      fullName,
      organisation,
      email,
      phone: "",
      summary,
    });
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full max-w-xl space-y-7" noValidate>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" autoComplete="name" className="field-shell" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" autoComplete="email" className="field-shell" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm *
        </label>
        <input id="law_firm" name="law_firm" autoComplete="organization" className="field-shell" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief *
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={3}
          placeholder="Forum, violation theme, deadline"
          className="field-shell min-h-[5.5rem] resize-y"
        />
      </div>

      {status === "error" && (
        <p className="border border-seal/30 bg-mist px-4 py-3 text-sm text-ink">
          Please complete all fields, or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-seal underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-seal w-full disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Sending…" : "Send instruction"}
      </button>
    </form>
  );
}
