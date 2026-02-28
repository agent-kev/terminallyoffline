import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import type { Post, PostMetadata } from "@/types/journal";

const CONTENT_DIR = path.join(process.cwd(), "src/content/journal");

export async function getAllPosts(): Promise<Post[]> {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const post = await getPostBySlug(slug);
    if (post && post.published) {
      posts.push(post);
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf-8");

    // Import the module to get exported metadata
    const mod = await import(`@/content/journal/${slug}.mdx`);
    const metadata: PostMetadata = mod.metadata;

    if (!metadata) return null;

    const { text: readTime } = readingTime(source);

    return {
      ...metadata,
      slug,
      readingTime: readTime,
    };
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files.map((f) => f.replace(/\.mdx$/, ""));
}
