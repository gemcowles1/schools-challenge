import { NiheBadge } from "./NiheBadge";

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
      emoji: "💻",
      title: "Win 1 of 5 Laptops!",
      body: "Five schools will each win a laptop for their Eco-Committee. Enter your mission statement for your chance to be one of the five winners!",
      rotate: "-rotate-1",
    },
    {
      emoji: "⭐",
      title: "Earn Points & More",
      body: "Earn points towards your Energy Eco-Flag award and get free entry to the Energy Challenge competition — just for taking part!",
      rotate: "rotate-1",
    },
    {
      emoji: "📣",
      title: "Pupil Voice in Action",
      body: "Judges want to see children leading the change. This competition puts them front and centre.",
      rotate: "rotate-1",
    },
  ];

  return (
    <section className="pb-20 bg-background relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            WHY ENTER?
          </h2>
          <p className="text-2xl font-black text-foreground mb-4">
            💻 WIN ONE OF <span className="text-secondary">5X LAPTOPS</span> for your school
          </p>
          <p className="text-lg font-bold text-foreground/70 mb-1">Earn points towards:</p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="bg-primary text-white font-black px-4 py-2 rounded-full uppercase tracking-wide">Your Eco-Flag</span>
            <span className="bg-accent text-white font-black px-4 py-2 rounded-full uppercase tracking-wide">Free Entry</span>
            <span className="bg-secondary text-white font-black px-4 py-2 rounded-full uppercase tracking-wide">Pupil Voice in Action</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`bg-secondary border-4 border-foreground rounded-2xl p-6 comic-shadow ${r.rotate} hover:rotate-0 transition-transform duration-300`}
            >
              <div className="text-5xl mb-4">{r.emoji}</div>
              <h3 className="font-black text-xl text-white mb-2 font-display">{r.title}</h3>
              <p className="text-white/90 font-medium leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
