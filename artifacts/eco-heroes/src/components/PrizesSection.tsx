import { NiheBadge } from "./NiheBadge";

export function PrizesSection() {
  const prizes = [
    {
      icon: "💻",
      title: "A Laptop",
      desc: "Win a laptop for your school's Eco-Committee",
      bg: "bg-yellow-100",
      border: "border-yellow-400",
      rotate: "-rotate-2",
    },
    {
      icon: "🏴",
      title: "Eco-Flag Points",
      desc: "Points towards your Energy Eco-Flag award",
      bg: "bg-green-50",
      border: "border-primary",
      rotate: "rotate-1",
    },
    {
      icon: "🎟️",
      title: "Free Competition Entry",
      desc: "Free entry to the Energy Challenge competition",
      bg: "bg-blue-50",
      border: "border-blue-400",
      rotate: "-rotate-1",
    },
  ];

  return (
    <section className="pb-20 bg-accent/10 relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-accent drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🏆 PRIZES
          </h2>
          <p className="text-xl font-bold text-foreground/70">
            A laptop, Eco-Flag points and free competition entry!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {prizes.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} border-4 ${p.border} rounded-2xl p-8 comic-shadow ${p.rotate} hover:rotate-0 transition-transform duration-300 text-center`}
            >
              <div className="text-6xl mb-4">{p.icon}</div>
              <h3 className="font-black text-xl text-foreground mb-2 font-display">{p.title}</h3>
              <p className="text-foreground/70 font-medium text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
