import { NiheBadge } from "./NiheBadge";

export function TipsSection() {
  const tips = [
    {
      icon: "💡",
      title: "Use Natural Light",
      desc: "Open the blinds! If it's bright outside, we don't need the lights on inside."
    },
    {
      icon: "🚪",
      title: "Close the Doors",
      desc: "Keep the heat inside the classroom by shutting the door behind you."
    },
    {
      icon: "🖥️",
      title: "Screen Sleep",
      desc: "Turn off interactive whiteboards when not in use—don't just leave them blank."
    },
    {
      icon: "🧥",
      title: "Jumper First",
      desc: "Feeling cold? Put on your school jumper before asking to turn up the radiator."
    }
  ];

  return (
    <section className="pb-24 bg-primary relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border-4 border-foreground comic-shadow transform -rotate-1">
            <h2 className="text-4xl md:text-5xl font-black font-display text-center mb-10 text-foreground">
              BECOME AN ECO-HERO TOO!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-muted border-2 border-foreground/20 hover:border-foreground transition-colors hover:bg-secondary/20">
                  <div className="text-4xl">{tip.icon}</div>
                  <div>
                    <h3 className="font-black text-xl mb-1 text-foreground">{tip.title}</h3>
                    <p className="font-medium text-foreground/80">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-bold text-xl text-primary uppercase tracking-wide">
                Every small action makes a HUGE difference!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
