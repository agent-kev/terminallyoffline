import { Badge } from "@/components/ui/Badge";

export function PostMeta({
  date,
  readingTime,
  tags,
}: {
  date: string;
  readingTime: string;
  tags?: string[];
}) {
  const formatted = new Date(date).toLocaleDateString("en-NZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/50">
      <time dateTime={date} className="font-mono">{formatted}</time>
      <span className="text-foreground/20">|</span>
      <span>{readingTime}</span>
      {tags && tags.length > 0 && (
        <>
          <span className="text-foreground/20">|</span>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
