import { Container } from "@/components/ui/Container";

const stats = [
  {
    number: "9hrs",
    label: "Average daily screen time for adults",
  },
  {
    number: "73%",
    label: "Feel exhausted by constant connectivity",
  },
  {
    number: "76%",
    label: "Say they spend too much time on their phones",
  },
];

export function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-volcanic text-cloud">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.number} className="text-center">
              <p className="font-mono text-6xl sm:text-7xl lg:text-8xl font-bold text-emerald-lakes tracking-tight">
                {stat.number}
              </p>
              <p className="mt-3 text-sm text-cloud/50 max-w-[220px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
