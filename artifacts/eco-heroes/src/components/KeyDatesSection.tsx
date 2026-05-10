export function KeyDatesSection() {
  const dates = [
    { date: "12 May", label: "Competition Opens", emoji: "🚀", rotate: "-rotate-1" },
    { date: "18 June", label: "Submissions Close", emoji: "📬", rotate: "rotate-1" },
    { date: "21 June", label: "Winners Announced", emoji: "🏆", rotate: "-rotate-1" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-secondary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            📅 KEY DATES
          </h2>
          <p className="text-xl font-bold text-foreground/70">Mark these in your diary!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
          {dates.map((d) => (
            <div
              key={d.label}
              className={`bg-secondary border-4 border-foreground rounded-2xl px-8 py-8 comic-shadow ${d.rotate} hover:rotate-0 transition-transform duration-300 text-center flex-1 min-w-[200px]`}
            >
              <div className="text-5xl mb-3">{d.emoji}</div>
              <div className="text-4xl font-black text-primary font-display mb-1">{d.date}</div>
              <div className="font-bold text-foreground/80 text-lg">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
