import Image from "next/image";
import Link from "next/link";
import { photoFor } from "@/lib/page-photos";

/** Cards with a diamond-cut photograph, chosen from the slug at the end of each link. */
export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const p = photoFor(item.href.split("/").filter(Boolean).pop() ?? item.title);
        return (
          <Link key={item.href} href={item.href} className="group block min-w-0 break-words">
            <div className="diamond-cut-sm relative aspect-[16/10] overflow-hidden bg-taupe">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-ink group-hover:text-seal">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-body">{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
