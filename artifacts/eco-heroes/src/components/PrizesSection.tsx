export function PrizesSection() {
  const prizes = [
    { medal: "🥇", title: "Gold Eco-Hero", amount: "£500", desc: "Energy efficiency kit", bg: "bg-yellow-100", border: "border-yellow-400" },
    { medal: "🥈", title: "Silver Eco-Hero", amount: "£250", desc: "Energy efficiency kit", bg: "bg-gray-100", border: "border-gray-400" },
    { medal: "🥉", title: "Bronze Eco-Hero", amount: "£100", desc: "Energy efficiency kit", bg: "bg-orange-100", border: "border-orange-400" },
    { medal: "🌟", title: "Every Entrant", amount: "FREE", desc: "Printable certificate + digital badge", bg: "bg-primary/10", border: "border-primary" },
  ];

  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-accent drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🏆 PRIZES
          </h2>
          <p className="text-xl font-bold text-foreground/70">What you could win for your school</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {prizes.map((p, i) => (
            <div
              key={p.title}
              className={`${p.bg} border-4 ${p.border} rounded-2xl p-6 comic-shadow ${rotations[i]} hover:rotate-0 transition-transform duration-300 text-center`}
            >
              <div className="text-6xl mb-3">{p.medal}</div>
              <h3 className="font-black text-xl text-foreground mb-1 font-display">{p.title}</h3>
              <div className="text-3xl font-black text-primary my-2">{p.amount}</div>
              <p className="text-foreground/70 font-medium text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
