import type { CookieCategory } from "./types";

/** localStorage key: versioned to allow migration without cross-site leakage */
export const CONSENT_STORAGE_KEY = "hrex_cookie_consent_v1";

/** Bump to invalidate stored consent and re-prompt users after policy changes */
export const CONSENT_VERSION = 1;

/** UK GDPR common practice: re-ask annually */
export const CONSENT_EXPIRY_DAYS = 365;

export const CATEGORY_META: Record<
  CookieCategory,
  { label: string; description: string; required: boolean }
> = {
  necessary: {
    label: "Necessary Cookies",
    description:
      "Required for the site to function securely (consent storage, load balancing, fraud prevention). Cannot be disabled.",
    required: true,
  },
  analytics: {
    label: "Analytics",
    description:
      "Help us understand aggregated traffic and page performance (Google Analytics, Google Tag Manager, Hotjar). Loaded only with your consent.",
    required: false,
  },
  marketing: {
    label: "Marketing",
    description:
      "Measure advertising effectiveness and reach relevant audiences (Meta Pixel, LinkedIn Insight Tag). Loaded only with your consent.",
    required: false,
  },
  preferences: {
    label: "Preferences",
    description:
      "Remember optional choices such as display settings to improve your experience. Loaded only with your consent.",
    required: false,
  },
};
