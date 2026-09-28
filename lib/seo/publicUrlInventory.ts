import { SITE_URL } from "../constants";
import { getBlogSlugs } from "../blog";
import { violationTypes } from "../../data/violation-types";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { services } from "../../data/services";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/human-rights-framework", priority: 0.95, changefreq: "monthly" },
  { path: "/article-3-deportation", priority: 0.95, changefreq: "monthly" },
  { path: "/how-reports-work", priority: 0.93, changefreq: "monthly" },
  { path: "/violation-types", priority: 0.93, changefreq: "monthly" },
  { path: "/case-types", priority: 0.9, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/what-is-a-human-rights-expert-witness", priority: 0.9, changefreq: "monthly" },
  { path: "/qualifications", priority: 0.88, changefreq: "monthly" },
  { path: "/how-to-instruct", priority: 0.88, changefreq: "monthly" },
  { path: "/guides", priority: 0.87, changefreq: "monthly" },
  { path: "/blog", priority: 0.87, changefreq: "weekly" },
  { path: "/glossary", priority: 0.75, changefreq: "monthly" },
];

export const NON_INDEXABLE_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
  "/cookie-policy",
] as const;

export const ROBOTS_DISALLOW_PATHS = [
  "/thank-you",
  "/api/",
  "/admin/",
  "/private/",
  "/.netlify/",
] as const;

const BOOSTED_VIOLATION_PRIORITIES: Record<string, number> = {
  "torture-cruel-inhuman-treatment": 0.92,
  "human-rights-defenders-journalists": 0.92,
};

function dynamicEntries(): PublicUrlEntry[] {
  return [
    ...violationTypes.map((v) => ({
      path: `/violation-types/${v.slug}`,
      priority: BOOSTED_VIOLATION_PRIORITIES[v.slug] ?? 0.92,
      changefreq: "monthly" as const,
    })),
    ...caseTypes.map((c) => ({
      path: `/case-types/${c.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.82,
      changefreq: "monthly" as const,
    })),
    ...getBlogSlugs().map((slug) => ({
      path: `/blog/${slug}`,
      priority: 0.82,
      changefreq: "weekly" as const,
    })),
    ...services.map((s) => ({
      path: `/services/${s.id}`,
      priority: 0.9,
      changefreq: "monthly" as const,
    })),
  ];
}

export type PublicUrlInventory = {
  siteUrl: string;
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const merged = [...APP_STATIC_PATHS, ...dynamicEntries()];

  const byPath = new Map<string, PublicUrlEntry>();
  for (const entry of merged) {
    const path = entry.path.startsWith("/") ? entry.path : `/${entry.path}`;
    if (NON_INDEXABLE_PATHS.includes(path as (typeof NON_INDEXABLE_PATHS)[number])) continue;
    byPath.set(path, { ...entry, path });
  }

  const entries = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));

  return { siteUrl: origin, entries, allPaths, allUrls };
}
