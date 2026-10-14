import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getBlogBySlug } from "@/lib/blog";
import { PageHero } from "@/components/ui/PageHero";
import { fallbackPhoto } from "@/lib/page-photos";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata, OPEN_GRAPH_IMAGE } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = createMetadata({
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  if (!post.image) return base;

  const image = {
    url: `${SITE_URL}${post.image}`,
    alt: post.imageAlt || post.title,
  };

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof base.title === "string" ? base.title : post.title,
      description: post.description,
      images: [image.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE_URL}${post.image}` : OPEN_GRAPH_IMAGE.url,
          inLanguage: "en-GB",
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
          url,
        }}
      />
      <PageHero
        title={post.title}
        subtitle={post.description}
        photo={post.image ? { src: post.image, alt: post.imageAlt || post.title } : fallbackPhoto(post.slug)}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="not-prose text-[11px] font-semibold uppercase tracking-widest text-steel">
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
        <div className="mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="not-prose mt-12 border-t border-line pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-seal hover:text-seal-deep">
            Back to the blog
          </Link>
          <span className="mx-3 text-steel/50">·</span>
          <Link href="/contact" className="font-semibold text-seal hover:text-seal-deep">
            Instruct an expert
          </Link>
        </p>
      </article>
      <CTASection />
    </>
  );
}
