import { getAllPosts } from "@/lib/journal";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/journal/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/journal/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Journal</title>
    <link>${SITE_URL}/journal</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-nz</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/journal/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
