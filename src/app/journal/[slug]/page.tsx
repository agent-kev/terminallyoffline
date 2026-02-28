import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/journal";
import { PostLayout } from "@/components/journal/PostLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamic import of the MDX file
  const { default: Content } = await import(
    `@/content/journal/${slug}.mdx`
  );

  return (
    <PostLayout post={post}>
      <Content />
    </PostLayout>
  );
}
