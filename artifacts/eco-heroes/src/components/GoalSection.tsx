export function GoalSection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-primary">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-foreground comic-shadow flex items-center justify-center flex-shrink-0 relative">
            <div className="absolute inset-2 border-4 border-dashed border-primary rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="text-center z-10">
              <span className="text-8xl block mb-2">🌍</span>
              <span className="font-black text-2xl font-display text-primary block leading-none">GREEN FLAG</span>
              <span className="font-bold text-foreground text-sm tracking-widest">MISSION</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black font-display text-foreground mb-6 drop-shadow-[2px_2px_0_#fff]">
              OUR MISSION TARGET
            </h2>
            <p className="text-2xl font-bold text-foreground/90 mb-6 leading-relaxed">
              We are working hard on the "Energy" topic to achieve our <strong className="text-primary bg-white px-2 rounded-md border-2 border-foreground comic-shadow transform rotate-1 inline-block">Eco-Schools Green Flag</strong> in Northern Ireland!
            </p>
            <div className="inline-block bg-white border-4 border-foreground rounded-2xl px-6 py-4 comic-shadow transform rotate-2">
              <p className="font-black text-xl text-accent uppercase">
                GOAL: Reduce energy use by 10% this term!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
