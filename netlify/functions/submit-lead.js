/**
 * Lead_notification_setup.md
 *
 * On form submit → POST JSON to /api/submit-lead
 * Netlify.toml force-redirects:
 *   /api/submit-lead → /.netlify/functions/submit-lead
 *
 * Inbound from the site:
 *   { fullName, email, phone } (+ optional sheet fields)
 *
 * Outbound to Lead_notification_url (or LEAD_NOTIFICATION_URL) — only these keys:
 *   { "Full Name", "Email", "Phone Number", "Brand name" }
 *
 * Also appends a row to Google Sheets when GOOGLE_* env vars are set
 * (Google_sheets_setup.md) so production keeps sheet + webhook.
 *
 * Change BRAND_NAME per brand site.
 */

const { google } = require("googleapis");

const BRAND_NAME = "Human Rights Experts";

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(data),
  };
}

function getWebhookUrl() {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  ).trim();
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SHEET_ID?.trim() &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim()
  );
}

function sanitize(str) {
  return String(str ?? "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

async function appendLeadToSheet(row) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  const escaped = sheetName.replace(/'/g, "''");

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `'${escaped}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(204, {});
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  const webhookUrl = getWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    console.error("Lead_notification_url and Google Sheets are not configured");
    return jsonResponse(500, { error: "Lead storage not configured" });
  }

  let parsed;
  try {
    parsed = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body" });
  }

  try {
    const { fullName, email, phone } = parsed;

    if (!fullName || !email) {
      return jsonResponse(400, { error: "Missing required fields" });
    }

    const name = sanitize(fullName);
    const mail = String(email).toLowerCase().trim();
    const tel = phone ? sanitize(phone) : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      return jsonResponse(400, { error: "Invalid email address" });
    }

    // Google Sheets row (same column order as app/api/submit-lead/route.ts)
    if (sheetsConfigured) {
      try {
        await appendLeadToSheet([
          new Date().toISOString(),
          name,
          sanitize(parsed.organisation),
          mail,
          tel,
          sanitize(parsed.violationType),
          sanitize(parsed.countryOfOrigin),
          sanitize(parsed.proceedings),
          sanitize(parsed.funding),
          sanitize(parsed.summary),
          BRAND_NAME,
        ]);
      } catch (error) {
        console.error("Google Sheets write failed:", error?.message || error);
        if (!webhookUrl) {
          return jsonResponse(500, { error: "Failed to save submission" });
        }
      }
    }

    // Lead_notification_setup.md — only these four outbound keys
    if (webhookUrl) {
      const payload = {
        "Full Name": name,
        Email: mail,
        "Phone Number": tel,
        "Brand name": BRAND_NAME,
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Webhook failed:", response.status, text);
        if (!sheetsConfigured) {
          return jsonResponse(502, { error: "Webhook delivery failed" });
        }
      }
    }

    return jsonResponse(200, { success: true });
  } catch (error) {
    console.error("submit-lead error:", error);
    return jsonResponse(500, { error: "Server error" });
  }
};
