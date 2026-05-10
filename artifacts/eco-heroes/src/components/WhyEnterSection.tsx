export function WhyEnterSection() {
  const reasons = [
    {
      emoji: "🏴",
      title: "Already an Eco-School?",
      body: "This competition gives you pupil-led evidence for your Energy topic — exactly what assessors want to see.",
      rotate: "-rotate-1",
    },
    {
      emoji: "🌱",
      title: "Not an Eco-School yet?",
      body: "Your mission statement is your first step. Use it to kick off your journey toward the Green Flag.",
      rotate: "rotate-1",
    },
    {
      emoji: "🎒",
      title: "Win Kit for Your School",
      body: "Prizes up to £500 in energy efficiency equipment. Every entrant gets a certificate.",
      rotate: "-rotate-1",
    },
    {
      emoji: "📣",
      title: "Pupil Voice in Action",
      body: "Judges want to see children leading the change. This competition puts them front and centre.",
      rotate: "rotate-1",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            WHY ENTER?
          </h2>
          <p className="text-xl font-bold text-foreground/70">Four great reasons to get your class involved</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`bg-secondary border-4 border-foreground rounded-2xl p-6 comic-shadow ${r.rotate} hover:rotate-0 transition-transform duration-300`}
            >
              <div className="text-5xl mb-4">{r.emoji}</div>
              <h3 className="font-black text-xl text-foreground mb-2 font-display">{r.title}</h3>
              <p className="text-foreground/80 font-medium leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Teacher quote */}
        <div className="mt-14 max-w-2xl mx-auto bg-foreground text-white rounded-2xl px-8 py-8 border-4 border-foreground comic-shadow transform -rotate-1 text-center">
          <p className="text-xl font-bold italic leading-relaxed mb-4">
            "Our pupils loved coming up with their mission. It gave them real ownership of our energy topic."
          </p>
          <p className="text-white/70 font-bold text-sm uppercase tracking-wider">— Ms. O'Neill, St. Mary's PS, Belfast</p>
        </div>
      </div>
    </section>
  );
}
