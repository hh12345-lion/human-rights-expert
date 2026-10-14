import { NextResponse } from "next/server";
import {
  appendRowWithRetry,
  isGoogleSheetsConfigured,
  logSheetsError,
} from "@/lib/google-sheets";
import {
  buildLeadWebhookPayload,
  getLeadWebhookUrl,
  LEAD_BRAND_NAME,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

/** Free-text field names used across the sites, mapped to the universal `message`. */
const MESSAGE_KEYS = [
  "message",
  "Message",
  "description",
  "enquiry",
  "details",
  "summary",
  "notes",
  "matter",
  "caseSummary",
  "additionalInfo",
  "additional_info",
  "caseDetails",
  "enquiryDetails",
  "caseBrief",
  "case_summary",
  "matterDescription",
  "additionalNotes",
  "caseBackground",
  "specificQuestions",
  "briefSummary",
  "conflict_info",
  "brief",
];

function resolveLeadMessage(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const record = body as Record<string, unknown>;
  for (const key of MESSAGE_KEYS) {
    const value = record[key];
    if (value != null && String(value).trim()) return sanitize(String(value));
  }
  return "";
}

/**
 * Column order for the "Human Rights Expert" tab:
 * Timestamp | Full Name | Organisation | Email | Phone | Violation Type |
 * Country of Origin | Proceedings | Funding | Summary | Brand
 */
export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();

  if (!isGoogleSheetsConfigured() && !webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Set Google Sheets env vars and/or Lead_notification_url.",
      },
      { status: 503 }
    );
  }

  let body: SubmitLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.violationType ?? ""),
    sanitize(body.countryOfOrigin ?? ""),
    sanitize(body.proceedings ?? ""),
    sanitize(body.funding ?? ""),
    sanitize(body.summary ?? ""),
    LEAD_BRAND_NAME,
  ];

  if (isGoogleSheetsConfigured()) {
    try {
      await appendRowWithRetry(row);
    } catch (error) {
      logSheetsError(error, "submit-lead");
      if (!webhookUrl) {
        return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
      }
    }
  }

  if (webhookUrl) {
    const message = resolveLeadMessage(body);
    const outbound = buildLeadWebhookPayload({ fullName, email, phone, message });
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
        signal: AbortSignal.timeout(12_000),
      });
      if (!res.ok && !isGoogleSheetsConfigured()) {
        return NextResponse.json({ error: "Lead notification endpoint error" }, { status: 502 });
      }
    } catch {
      if (!isGoogleSheetsConfigured()) {
        return NextResponse.json({ error: "Could not reach lead notification endpoint" }, { status: 502 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}
