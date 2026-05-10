const MISSIONS = [
  {
    school: "Oakgrove Integrated PS, Derry",
    mission: "We are Oakgrove Integrated PS and we pledge to switch off lights in every empty room so that we can reduce our carbon footprint by June 2026.",
    action: "Switch off lights",
    initials: "OI",
    color: "bg-primary",
  },
  {
    school: "St. Mary's PS, Belfast",
    mission: "We are St. Mary's PS and we pledge to turn off all whiteboards and screens when not in use so that we can earn our Eco-Schools Green Flag by May 2026.",
    action: "Screen switch-off",
    initials: "SM",
    color: "bg-accent",
  },
  {
    school: "Lagan Valley PS, Lisburn",
    mission: "We are Lagan Valley PS and we pledge to keep every door closed to trap heat so that we can protect nature for the next generation by March 2026.",
    action: "Door closing",
    initials: "LV",
    color: "bg-secondary border-4 border-foreground",
  },
  {
    school: "Strandtown PS, Belfast",
    mission: "We are Strandtown PS and we pledge to wear our jumpers before asking to turn up the heating so that we can make our school a greener place to learn by April 2026.",
    action: "Jumper pledge",
    initials: "SP",
    color: "bg-primary",
  },
  {
    school: "Gaelscoil na Móna, Belfast",
    mission: "We are Gaelscoil na Móna and we pledge to unplug all chargers at the end of every day so that we can help fight climate change by June 2026.",
    action: "Charger unplug",
    initials: "GM",
    color: "bg-accent",
  },
  {
    school: "Portstewart PS",
    mission: "We are Portstewart PS and we pledge to use natural light instead of electric lights so that we can reduce our school's carbon footprint by May 2026.",
    action: "Natural light",
    initials: "PP",
    color: "bg-secondary border-4 border-foreground",
  },
];

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export function WallOfFameSection() {
  return (
    <section id="fame" className="py-20 bg-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🌟 WALL OF FAME
          </h2>
          <p className="text-xl font-bold text-foreground/70">
            NI schools who've taken the Eco-Hero pledge — could your school be next?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MISSIONS.map((m, i) => (
            <div
              key={m.school}
              className={`bg-white border-4 border-foreground rounded-2xl p-6 comic-shadow ${rotations[i]} hover:rotate-0 transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${m.color} text-white flex items-center justify-center font-black text-lg flex-shrink-0`}>
                  {m.initials}
                </div>
                <div>
                  <p className="font-black text-foreground text-sm leading-tight">{m.school}</p>
                  <span className="inline-block bg-secondary border-2 border-foreground text-foreground font-bold text-xs px-2 py-0.5 rounded-full mt-1">
                    {m.action}
                  </span>
                </div>
              </div>
              <p className="text-foreground/80 font-medium text-sm leading-relaxed italic">"{m.mission}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-block bg-white border-4 border-foreground rounded-2xl px-8 py-5 comic-shadow transform rotate-1">
            <p className="font-black text-xl text-foreground">
              📬 Submit your mission above to appear here!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
