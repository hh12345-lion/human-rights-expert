import Image from "next/image";

export type FramePhoto = { src: string; alt: string };

/** Full logo from the brand guidelines. `light` is the version for dark backgrounds. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/brand/logo-light.svg" : "/brand/logo.svg"}
      alt="Human Rights Experts"
      width={1056}
      height={260}
      className={className}
    />
  );
}

const NAVY_PATHS = [
  "M168.559 233.479C173.843 167.9 205.653 119.758 210.163 113.221L243.499 59.5899L183.364 95.6705C77.4458 160.588 137.808 261.951 137.808 261.951C34.1673 121.865 185.642 78.5869 185.642 78.5869C170.836 76.3091 141.225 55.8087 141.225 55.8087L120.451 46.7544C109.312 41.9026 96.3517 44.2944 87.6846 52.8134L0 138.949L174.253 313.202C166.281 280.174 168.559 233.479 168.559 233.479Z",
  "M185.636 52.3898C200.103 52.3898 211.831 40.6619 211.831 26.1949C211.831 11.7279 200.103 0 185.636 0C171.169 0 159.441 11.7279 159.441 26.1949C159.441 40.6619 171.169 52.3898 185.636 52.3898Z"
];

const OLIVE_PATHS = [
  "M243.72 59.2286L207.662 117.233C197.23 134.021 194.098 154.328 198.984 173.484L204.997 197.037C204.997 197.037 228.914 244.871 185.636 340.539L369 169.703C369 169.703 321.166 182.231 307.499 179.953L305.346 180.135C290.04 181.411 276.931 191.604 271.931 206.125L268.776 215.259C268.776 215.259 253.97 257.399 240.303 276.76C240.303 276.76 263.082 224.37 259.665 175.397C259.665 175.397 241.442 123.008 292.693 79.729L255.109 39.8672L243.72 59.2286Z",
  "M318.892 162.859C333.359 162.859 345.087 151.131 345.087 136.664C345.087 122.197 333.359 110.469 318.892 110.469C304.425 110.469 292.697 122.197 292.697 136.664C292.697 151.131 304.425 162.859 318.892 162.859Z"
];

/** The monogram: two figures, one sheltering the other, forming a diamond. */
export function Mark({
  className = "",
  navy = "#112B3A",
  olive = "#7D7E66",
}: {
  className?: string;
  navy?: string;
  olive?: string;
}) {
  return (
    <svg viewBox="0 0 369 341" className={className} aria-hidden focusable="false">
      {NAVY_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill={navy} />
      ))}
      {OLIVE_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill={olive} />
      ))}
    </svg>
  );
}

/** A small diamond marker taken from the outline of the monogram. */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden focusable="false">
      <path d="M6 0L12 6L6 12L0 6Z" fill="currentColor" />
    </svg>
  );
}

/**
 * A photograph cut like the diamond of the monogram: two opposing 45 degree corners, an olive block
 * offset behind it, and the heads of the two figures as a navy and an olive dot at its edges.
 */
export function DiamondPhoto({
  photo,
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 90vw, 520px",
  priority = false,
  accents = true,
  className = "",
}: {
  photo: FramePhoto;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  accents?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative ${accents ? "mb-5 mr-5" : ""} ${className}`}>
      {accents && <span aria-hidden className="diamond-cut absolute inset-0 translate-x-5 translate-y-5 bg-olive/80" />}
      <div className={`diamond-cut relative overflow-hidden bg-taupe ${aspect}`}>
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {accents && (
        <>
          <span aria-hidden className="absolute -top-4 left-[14%] h-9 w-9 rounded-full bg-navy ring-[6px] ring-paper" />
          <span aria-hidden className="absolute -right-3 top-[34%] h-7 w-7 rounded-full bg-olive ring-[6px] ring-paper" />
        </>
      )}
    </figure>
  );
}
