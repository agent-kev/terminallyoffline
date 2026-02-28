import Link from "next/link";
import { PostMeta } from "./PostMeta";
import type { Post } from "@/types/journal";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/journal/${post.slug}`} className="group block">
      <article className="h-full rounded-2xl border border-foreground/[0.08] bg-surface shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20 group-hover:-translate-y-1">
        {/* Color accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary to-pounamu" />
        <div className="p-6 sm:p-7">
          <PostMeta
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
          />
          <h3 className="font-display text-xl sm:text-2xl mt-4 mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <span className="inline-block mt-4 text-xs font-medium text-primary group-hover:underline">
            Read article →
          </span>
        </div>
      </article>
    </Link>
  );
}
