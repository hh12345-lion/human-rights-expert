import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";

export const metadata = createMetadata({
  title: "Image Credits | Human Rights Experts",
  description: "Sources, authors and licences for the photographs used on this website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <PageShell
      photo={photos.hrcRoom}
      title="Image credits"
      subtitle="The photographs on this site come from Wikimedia Commons. Each has been resized or cropped to fit its frame and is otherwise unaltered."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
    >
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(photos).map((photo) => (
          <li key={photo.src}>
            <div className="diamond-cut-sm relative aspect-[4/3] overflow-hidden bg-taupe">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 90vw, 380px" className="object-cover" />
            </div>
            <p className="mt-4 font-display text-lg text-ink">{photo.credit.title}</p>
            <p className="mt-1 text-body">
              {photo.credit.creator}
              {" · "}
              {photo.credit.licenseUrl ? (
                <a href={photo.credit.licenseUrl} rel="noopener noreferrer" className="text-seal underline">
                  {photo.credit.license}
                </a>
              ) : (
                photo.credit.license
              )}
              {" · "}
              <a href={photo.credit.source} rel="noopener noreferrer" className="text-seal underline">
                Source
              </a>
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
