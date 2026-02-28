import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PostMeta } from "./PostMeta";
import { ShareButtons } from "./ShareButtons";
import { SignupCTA } from "@/components/sections/SignupCTA";
import type { Post } from "@/types/journal";

export function PostLayout({
  post,
  children,
}: {
  post: Post;
  children: ReactNode;
}) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Terminally Offline",
      url: "https://terminallyoffline.club",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="pt-32 pb-section">
        <Container size="sm">
          <PostMeta
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
          />
          <h1 className="font-display text-3xl sm:text-3xl font-bold mt-6 mb-12">
            {post.title}
          </h1>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-a:underline-offset-4 prose-blockquote:border-primary prose-blockquote:not-italic prose-code:font-mono prose-pre:bg-volcanic prose-pre:text-cloud">
            {children}
          </div>
          <ShareButtons title={post.title} slug={post.slug} />
        </Container>
      </article>

      <SignupCTA
        heading="Enjoyed this?"
        subheading="Get more dispatches from the offline world. Join the 30-Day Offline Challenge."
      />
    </>
  );
}
