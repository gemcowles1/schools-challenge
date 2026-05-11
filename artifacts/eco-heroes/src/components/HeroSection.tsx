import { Link } from "wouter";
import { NiheBadge } from "./NiheBadge";

export function HeroSection() {
  return (
    <section className="relative pt-14 pb-16 md:pb-24 overflow-hidden">
      <NiheBadge />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-center mb-4">
              <span className="text-8xl drop-shadow-lg" role="img" aria-label="Laptop for your Eco-Committee">💻</span>
            </div>
            <p className="text-xl md:text-3xl font-black uppercase tracking-wide mb-3 drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)]">
              <span className="text-secondary">🏆 Win a Laptop</span>
              <span className="text-foreground/30 mx-2">·</span>
              <span className="text-primary">Eco-Flag Points</span>
              <span className="text-foreground/30 mx-2">·</span>
              <span className="text-accent">Free Entry</span>
            </p>
            <div className="mb-5 bg-foreground text-background rounded-2xl px-4 md:px-6 py-4 block w-full max-w-sm mx-auto border-4 border-foreground comic-shadow">
              <p className="text-xs md:text-base font-bold tracking-wide uppercase text-background/70 mb-1 text-balance">
                🎖️ Your Mission, If You Choose To Accept It...
              </p>
              <p className="text-xl md:text-3xl font-black uppercase tracking-wide text-secondary whitespace-nowrap">
                Our Eco-Hero Competition
              </p>
              <p className="text-xs md:text-sm font-bold text-red-400 mt-2 animate-pulse tracking-wide uppercase whitespace-nowrap">
                ⚠️ Self destructs in 1 week! ⚠️
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary drop-shadow-[0_4px_0_hsl(var(--foreground))]">
              Our School<br /><span className="text-secondary">Eco-Heroes</span>
            </h1>
            <p className="mt-3 text-lg font-bold text-foreground/60">
              Led by <span className="text-primary font-black">Max</span> — and the Eco-Heroes Committee
            </p>
            <p className="mt-4 text-xl md:text-2xl font-bold text-foreground/80 italic text-center">
              Bring Down Energy!
            </p>
            <p className="mt-3 text-lg md:text-xl font-black text-foreground uppercase tracking-wide">
              Design a Mission Statement for <span className="text-primary">Your School</span> <span className="text-foreground/50 normal-case">(below)</span>
            </p>
          </div>

          <div className="relative mt-12 mb-16 animate-in zoom-in-95 duration-1000 delay-300">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-50 blur-lg"></div>
            <div className="relative bg-white border-4 border-foreground rounded-3xl p-8 md:p-12 comic-shadow transform rotate-1">
              <h2 className="text-3xl font-display font-black text-accent mb-6 uppercase tracking-wider">
                The Eco-Hero Mission
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
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-foreground comic-shadow bg-white overflow-hidden animate-wiggle">
                <img src="/niseeap-logo.jpg" alt="NI Schools Energy Efficiency Awareness Programme" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 animate-in fade-in duration-1000 delay-500">
            <img 
              src="/winning-heroes.png" 
              alt="The Eco-Heroes Squad" 
              className="w-full max-w-2xl mx-auto rounded-2xl border-4 border-foreground comic-shadow object-contain"
            />
            <div className="text-center mt-6">
              <p className="text-6xl md:text-8xl font-black font-display text-secondary drop-shadow-[4px_4px_0_hsl(var(--primary))] animate-bounce">
                WE'RE BACK!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
