import { Metadata } from "next";
import { getAllPosts } from "@/lib/journal";
import { PostCard } from "@/components/journal/PostCard";
import { Container } from "@/components/ui/Container";
import { SignupCTA } from "@/components/sections/SignupCTA";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Dispatches from the offline world. Essays on digital wellness, boredom, attention, and what happens when you put your phone down.",
};

export default async function JournalPage() {
  const posts = await getAllPosts();

  return (
    <div className="pt-32 pb-section">
      <Container size="lg">
        <div className="max-w-2xl mb-16">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">Journal</h1>
          <p className="text-base text-foreground/65">
            Dispatches from the offline world. Essays on digital wellness,
            boredom, attention, and what happens when you put your phone down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-foreground/40 text-center py-20">
            No posts yet. Check back soon.
          </p>
        )}
      </Container>

      <SignupCTA
        heading="Get new essays delivered"
        subheading="Sign up to receive dispatches from the offline world. New articles every fortnight."
      />
    </div>
  );
}
