import { violationTypes } from "./violation-types";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { services } from "./services";

export const violationTypesNavLinks = violationTypes.map((v) => ({
  label: v.title,
  href: `/violation-types/${v.slug}`,
}));

export const caseTypesNavLinks = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const servicesNavLinks = services.map((s) => ({
  label: s.name,
  href: `/services/${s.id}`,
}));

export const resourcesNavLinks = [
  { label: "Human Rights Framework", href: "/human-rights-framework" },
  { label: "Article 3 Deportation", href: "/article-3-deportation" },
  { label: "How Reports Work", href: "/how-reports-work" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
  { label: "What is a Human Rights Expert?", href: "/what-is-a-human-rights-expert-witness" },
];

export const mobileNavGroups = [
  {
    title: "Violation Types",
    links: [
      { label: "All Violation Types", href: "/violation-types" },
      ...violationTypesNavLinks,
    ],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Resources",
    links: resourcesNavLinks,
  },
];

export const guidesNavLinks = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));
