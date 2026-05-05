import { HeroSection } from "@/components/HeroSection";
import { RosterSection } from "@/components/RosterSection";
import { TipsSection } from "@/components/TipsSection";
import { GoalSection } from "@/components/GoalSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      <HeroSection />
      <RosterSection />
      <TipsSection />
      <GoalSection />
      
      <footer className="bg-foreground text-white py-12 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 animate-[spin_12s_linear_infinite] shadow-xl">
            <img src="/niseeap-logo.jpg" alt="NISEEAP Logo" className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-xl font-display">Powered by NIEAS Energy Awareness Programme</p>
          <p className="text-white/80 font-bold text-lg">Housing Executive for Eco-Schools NI</p>
          <p className="text-white/50 font-medium text-sm">Designed for the Green Flag Energy Challenge</p>
        </div>
      </footer>
    </div>
  );
}
