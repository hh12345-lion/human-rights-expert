import { SITE_URL, LINKEDIN_URL } from "../constants";
import { buildPublicUrlInventory } from "./publicUrlInventory";
import { violationTypes } from "../../data/violation-types";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { services } from "../../data/services";

export type ArchIssue = { level: "error" | "warn"; message: string };

export function verifySeoArchitecture(): ArchIssue[] {
  const issues: ArchIssue[] = [];

  if (SITE_URL !== "https://humanrightsexperts.com") {
    issues.push({
      level: "warn",
      message: `SITE_URL should be https://humanrightsexperts.com (got ${SITE_URL})`,
    });
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expectedDynamic =
    violationTypes.length + caseTypes.length + guides.length + services.length;
  const dynamicInSitemap = inventory.entries.filter(
    (e) =>
      e.path.startsWith("/violation-types/") ||
      e.path.startsWith("/case-types/") ||
      e.path.startsWith("/guides/") ||
      e.path.startsWith("/services/")
  ).length;

  if (dynamicInSitemap !== expectedDynamic) {
    issues.push({
      level: "error",
      message: `Expected ${expectedDynamic} dynamic URLs in sitemap inventory, got ${dynamicInSitemap}`,
    });
  }

  if (!LINKEDIN_URL.includes("HumanRightsExpertsUK")) {
    issues.push({
      level: "warn",
      message: `LINKEDIN_URL should reference HumanRightsExpertsUK (got ${LINKEDIN_URL})`,
    });
  }

  return issues;
}
