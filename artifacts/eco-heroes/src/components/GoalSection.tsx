import { useState } from "react";
import { NiheBadge } from "./NiheBadge";

export function GoalSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section className="pb-24 bg-secondary relative overflow-hidden">
      <NiheBadge />
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-primary">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setGalleryOpen(!galleryOpen)}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-foreground comic-shadow flex items-center justify-center flex-shrink-0 relative overflow-hidden animate-[spin_20s_linear_infinite] hover:scale-105 transition-transform cursor-pointer focus:outline-none"
              aria-label="Click to see the Green Flag gallery"
            >
              <img src="/niseeap-logo.jpg" alt="NI Schools Energy Efficiency Awareness Programme" className="w-full h-full object-cover" />
            </button>
            <p className="text-sm font-bold text-white/80 animate-pulse tracking-wide">
              {galleryOpen ? "▲ Click logo to close" : "▼ Click logo to see the Green Flag!"}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black font-display text-foreground mb-6 drop-shadow-[2px_2px_0_#fff]">
              OUR MISSION TARGET
            </h2>
            <p className="text-2xl font-bold text-white mb-6 leading-relaxed">
              We are working hard on the "Energy" topic to achieve our <strong className="text-primary bg-white px-2 rounded-md border-2 border-foreground comic-shadow transform rotate-1 inline-block">Eco-Schools Green Flag</strong> in Northern Ireland!
            </p>
            <div className="inline-block bg-white border-4 border-foreground rounded-2xl px-6 py-4 comic-shadow transform rotate-2">
              <p className="font-black text-xl text-accent uppercase">
                GOAL: Reduce energy use by 10% this term!
              </p>
            </div>
          </div>

        </div>

        {/* Eco-Flag Photo Gallery — revealed on logo click */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${galleryOpen ? "max-h-[800px] opacity-100 mt-20" : "max-h-0 opacity-0 mt-0"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-black font-display text-foreground drop-shadow-[2px_2px_0_#fff] mb-2">
                THE ECO-SCHOOLS GREEN FLAG
              </h3>
              <p className="text-lg font-bold text-white/90">
                Sponsored by the <strong>NI Housing Executive</strong> — supporting the Energy Flag &amp; Topic across NI Schools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border-4 border-foreground comic-shadow transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img src="/eco-flag-1.jpeg" alt="Schools celebrating the Eco-Schools Green Flag" className="w-full h-56 object-cover" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="rounded-2xl overflow-hidden border-4 border-foreground comic-shadow bg-white p-4">
                  <img src="/eco-flag-logo.png" alt="Eco-Schools Green Flag Award" className="w-40 mx-auto object-contain" />
                </div>
                <div className="bg-white border-4 border-foreground rounded-2xl px-5 py-3 comic-shadow text-center">
                  <p className="font-black text-foreground text-sm uppercase tracking-wider">Could this be your school?</p>
                  <p className="font-bold text-primary text-lg">Win the Green Flag! 🏴</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border-4 border-foreground comic-shadow transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img src="/eco-flag-2.jpeg" alt="Eco-Schools Green Flag ceremony" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
