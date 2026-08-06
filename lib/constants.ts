export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.humanrightsexperts.com";
export const SITE_NAME = "Human Rights Experts";
export const SITE_EMAIL = "contact@humanrightsexperts.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/HumanRightsExpertsUK";

export const COLORS = {
  primary: "#12161C",
  accent: "#8B2942",
  background: "#F2F4F6",
  sectionAlt: "#E4E9EE",
  border: "#C5CED8",
  heading: "#12161C",
  body: "#3A4550",
  jade: "#2C6E63",
} as const;
