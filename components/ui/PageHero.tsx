import { DiamondPhoto, type FramePhoto } from "@/components/brand/Brand";
import { fallbackPhoto } from "@/lib/page-photos";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  photo,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: FramePhoto;
}) {
  const picture = photo ?? fallbackPhoto(title);
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      {/* A large outlined diamond, the silhouette of the monogram, sits behind the photograph. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 rotate-45 border border-taupe lg:block"
      />
      <div className="relative mx-auto grid max-w-7xl min-w-0 gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <h1 className="max-w-3xl break-words font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{subtitle}</p>}
          {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        </div>
        <DiamondPhoto
          photo={picture}
          priority
          aspect="aspect-[5/4]"
          sizes="(max-width: 1024px) 90vw, 480px"
          className="mx-auto w-full max-w-lg lg:max-w-none"
        />
      </div>
    </section>
  );
}
