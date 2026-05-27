import { NiheBadge } from "./NiheBadge";

export function PrizesSection() {
  return (
    <section className="pb-20 bg-accent/10 relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-accent drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🏆 WHAT YOU CAN WIN
          </h2>
          <p className="text-xl font-bold text-foreground/70">
            Five eco-refurbished laptops for five Eco-Committees — one per winning school!
          </p>
        </div>

        {/* 5 Laptops banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-foreground text-white rounded-3xl p-8 comic-shadow border-4 border-foreground text-center transform -rotate-1">
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-5xl md:text-6xl">💻</span>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-black font-display text-secondary mb-2 uppercase">
              5 Eco-Refurbished Laptops to Be Won!
            </h3>
            <p className="text-lg font-bold text-white/80">
              One eco-refurbished laptop for each of the <span className="text-secondary font-black">5 winning school Eco-Committees</span>
            </p>
          </div>
        </div>

        {/* Prize cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-2xl p-8 comic-shadow -rotate-2 hover:rotate-0 transition-transform duration-300 text-center">
            <div className="text-6xl mb-4">💻</div>
            <h3 className="font-black text-xl text-foreground mb-2 font-display">5 Eco-Refurbished Laptops</h3>
            <p className="text-foreground/70 font-medium text-sm">One eco-refurbished laptop per winning school Eco-Committee — 5 schools, 5 prizes!</p>
          </div>
          <div className="bg-green-50 border-4 border-primary rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300 text-center">
            <div className="text-6xl mb-4">🏴</div>
            <h3 className="font-black text-xl text-foreground mb-2 font-display">Eco-Flag Points</h3>
            <p className="text-foreground/70 font-medium text-sm">Points towards your Energy Eco-Flag award</p>
          </div>
          <div className="bg-blue-50 border-4 border-blue-400 rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300 text-center">
            <div className="text-6xl mb-4">🎟️</div>
            <h3 className="font-black text-xl text-foreground mb-2 font-display">Free Entry</h3>
            <p className="text-foreground/70 font-medium text-sm">Free entry to the Energy Challenge competition</p>
          </div>
          <div className="bg-purple-50 border-4 border-purple-400 rounded-2xl p-8 comic-shadow rotate-2 hover:rotate-0 transition-transform duration-300 text-center">
            <div className="text-6xl mb-4">♿</div>
            <h3 className="font-black text-xl text-foreground mb-2 font-display">All Abilities Champion</h3>
            <p className="text-foreground/70 font-medium text-sm">Special recognition for schools where pupils of all abilities lead the Eco-Hero Challenge</p>
          </div>
        </div>
      </div>
    </section>
  );
}
