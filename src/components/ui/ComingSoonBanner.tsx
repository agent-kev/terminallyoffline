export function ComingSoonBanner({
  text = "Launching with Offline October 2026",
}: {
  text?: string;
}) {
  return (
    <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-8 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
        Coming Soon
      </p>
      <p className="text-body-lg font-medium">{text}</p>
    </div>
  );
}
