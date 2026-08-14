export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.humanrightsexperts.com";
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
