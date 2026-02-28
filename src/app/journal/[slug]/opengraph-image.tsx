import { getPostBySlug, getPostSlugs } from "@/lib/journal";
import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export { ogSize as size, ogContentType as contentType };

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createOGImage({
      title: "Journal",
      subtitle: "Terminally Offline Club",
      label: "Article",
    });
  }

  return createOGImage({
    title: post.title,
    subtitle: post.description,
    label: "Journal",
  });
}
