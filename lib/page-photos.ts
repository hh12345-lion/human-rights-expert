import { photos, type Photo } from "@/lib/photos";

/** One photograph per content page, keyed by slug or service id. */
const BY_SLUG: Record<string, Photo> = {
  // Violation types
  "torture-cruel-inhuman-treatment": photos.amnestyVigil,
  "arbitrary-detention-disappearance": photos.cellCorridor,
  "freedom-of-expression-assembly": photos.refugeesWelcome,
  "freedom-of-religion-belief": photos.mosquePrayer,
  "womens-human-rights-violations": photos.womensMarch,
  "lgbt-human-rights-violations": photos.pride,
  "human-rights-defenders-journalists": photos.pressConference,
  "extrajudicial-killings-state-violence": photos.hrcRoom,
  // Case types
  "ftt-human-rights-appeal": photos.fieldHouse,
  "upper-tribunal-human-rights": photos.fieldHouseEntrance,
  "article-3-deportation-removal": photos.heathrowIrc,
  "article-8-family-private-life": photos.refugeesWelcome,
  "fresh-human-rights-claims": photos.calaisCamp,
  "human-rights-defender-asylum": photos.pressConference,
  "torture-survivor-claims": photos.amnestyVigil,
  "medical-human-rights-claims": photos.haslarIrc,
  // Services
  "human-rights-conditions-reports": photos.hrcRoom,
  "article-3-deportation": photos.heathrowIrc,
  "torture-ill-treatment": photos.amnestyVigil,
  "arbitrary-detention": photos.cellCorridor,
  "hr-defender-risk": photos.pressConference,
  "womens-human-rights": photos.womensMarch,
  "lgbt-human-rights": photos.pride,
  "rule-of-law": photos.westminsterHall,
  // Guides
  "article-3-deportation-guide": photos.haslarIrc,
  "human-rights-framework-guide": photos.hrcCeiling,
  "torture-cat-asylum-guide": photos.amnestyVigil,
  "human-rights-defender-asylum-guide": photos.pressConference,
  "echr-immigration-tribunal-guide": photos.fieldHouse,
  "instructing-human-rights-expert": photos.magnaCarta,
};

/** Photographs for section and standalone pages. */
export const sectionPhotos = {
  violationTypes: photos.amnestyVigil,
  caseTypes: photos.fieldHouse,
  services: photos.hrcRoom,
  guides: photos.magnaCarta,
  blog: photos.calaisChurch,
  article3: photos.heathrowIrc,
  framework: photos.hrcCeiling,
  howReportsWork: photos.westminsterHall,
  howToInstruct: photos.fieldHouseEntrance,
  qualifications: photos.magnaCarta,
  glossary: photos.westminsterHall,
  whatIs: photos.hrcRoom,
  contact: photos.fieldHouse,
  legal: photos.westminsterHall,
} satisfies Record<string, Photo>;

const POOL: Photo[] = [photos.hrcRoom, photos.fieldHouse, photos.westminsterHall, photos.calaisCamp, photos.magnaCarta];

export function photoFor(slug: string): Photo {
  return BY_SLUG[slug] ?? fallbackPhoto(slug);
}

/** A stable topical photograph for a page that has none of its own. */
export function fallbackPhoto(seed: string): Photo {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return POOL[h % POOL.length];
}
