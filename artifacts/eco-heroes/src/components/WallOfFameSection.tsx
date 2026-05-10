const SLOTS = Array.from({ length: 6 });

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
          {SLOTS.map((_, i) => (
            <div
              key={i}
              className={`bg-white border-4 border-dashed border-foreground/30 rounded-2xl p-6 comic-shadow ${rotations[i]} min-h-[160px] flex flex-col items-center justify-center text-center gap-3`}
            >
              <div className="text-4xl opacity-20">🏫</div>
              <p className="font-black text-foreground/25 text-lg uppercase tracking-wide">Coming soon…</p>
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
