const DEFAULT_SITE_URL = "https://humanrightsexperts.com";

/** Canonical origin for SEO — strips www; ignores localhost/netlify preview env. */
export function getPublicSiteUrl(): string {
  const fallback = DEFAULT_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();
export const SITE_NAME = "Human Rights Experts";
export const SITE_EMAIL = "contact@humanrightsexperts.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/HumanRightsExpertsUK";

export const COLORS = {
  primary: "#1C1917",
  accent: "#C2410C",
  background: "#FAFAF9",
  sectionAlt: "#F5F5F4",
  border: "#E7E5E4",
  heading: "#1C1917",
  body: "#44403C",
} as const;
