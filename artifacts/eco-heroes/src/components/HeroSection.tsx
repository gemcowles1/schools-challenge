import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl font-black text-primary drop-shadow-[0_4px_0_hsl(var(--foreground))]">
              Our School <span className="text-secondary">Eco-Heroes</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-bold text-foreground/80 italic">
              Thid all.NI Schools
            </p>
            <p className="mt-2 text-lg font-bold text-foreground/60">
              Led by <span className="text-primary font-black">Max</span> — and the Eco-Heroes Squad!
            </p>
          </div>

          <div className="relative mt-12 mb-16 animate-in zoom-in-95 duration-1000 delay-300">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-50 blur-lg"></div>
            <div className="relative bg-white border-4 border-foreground rounded-3xl p-8 md:p-12 comic-shadow transform rotate-1">
              <h2 className="text-3xl font-display font-black text-accent mb-6 uppercase tracking-wider">
                The Eco-Hero Oath
              </h2>
              <div className="space-y-4 text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                <p>We switch off the lights when we leave the room, 💡</p>
                <p>We turn down the heat to stop the planet's doom, 🌡️</p>
                <p>We unplug our chargers at the end of the day, 🔌</p>
                <p>We choose green energy every single way, 🌿</p>
                <p className="text-2xl md:text-3xl text-primary mt-6 uppercase">
                  Together we heroes keep waste away! 🦸‍♂️🦸‍♀️
                </p>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full border-4 border-foreground flex items-center justify-center animate-wiggle comic-shadow">
                <span className="text-3xl">⭐</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 animate-in fade-in duration-1000 delay-500">
            <img 
              src="/banner.png" 
              alt="Eco Energy Banner" 
              className="w-full max-w-3xl mx-auto rounded-2xl border-4 border-foreground comic-shadow object-cover h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
