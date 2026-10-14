import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fallbackPhoto, sectionPhotos } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Blog | Human Rights Experts",
  description:
    "Articles for solicitors on drafting human rights expert instructions, Legal Aid cases, and instructing human rights expert witnesses.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageShell photo={sectionPhotos.blog}
        title="Human Rights Experts Blog"
        subtitle="Practitioner-facing articles on instructing human rights experts, Legal Aid cases, and specialist country evidence."
        breadcrumbs={crumbs}
      >
        <div className="mb-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-seal">
            Instruct an expert
          </Link>
          <Link
            href="/guides"
            className="btn-ghost border-ink/40 text-ink hover:bg-ink hover:text-cream"
          >
            Browse guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="group">
                {(
                  <Link href={`/blog/${post.slug}`} className="diamond-cut-sm relative block aspect-[16/10] w-full overflow-hidden bg-taupe">
                    <Image
                      src={post.image || fallbackPhoto(post.slug).src}
                      alt={post.image ? post.imageAlt || post.title : fallbackPhoto(post.slug).alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                )}
                <div className="pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-steel">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span className="normal-case tracking-normal">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-seal">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">{post.description}</p>
                  <p className="mt-5">
                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-seal hover:text-seal-deep">
                      Read article
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
