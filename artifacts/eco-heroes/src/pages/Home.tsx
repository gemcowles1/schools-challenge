import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { RosterSection } from "@/components/RosterSection";
import { WhyEnterSection } from "@/components/WhyEnterSection";
import { MissionBuilderSection } from "@/components/MissionBuilderSection";
import { SavingsCalculatorSection } from "@/components/SavingsCalculatorSection";
import { QuizSection } from "@/components/QuizSection";
import { WallOfFameSection } from "@/components/WallOfFameSection";
import { TipsSection } from "@/components/TipsSection";
import { PrizesSection } from "@/components/PrizesSection";
import { KeyDatesSection } from "@/components/KeyDatesSection";
import { GoalSection } from "@/components/GoalSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      <NavBar />
      <div id="home" className="pt-14">
        <HeroSection />
      </div>
      <div id="heroes">
        <RosterSection />
      </div>
      <div id="why">
        <WhyEnterSection />
      </div>
      <div id="mission">
        <MissionBuilderSection />
      </div>
      <div id="calculator">
        <SavingsCalculatorSection />
      </div>
      <div id="quiz">
        <QuizSection />
      </div>
      <div id="fame">
        <WallOfFameSection />
      </div>
      <TipsSection />
      <div id="prizes">
        <PrizesSection />
      </div>
      <div id="dates">
        <KeyDatesSection />
      </div>
      <GoalSection />

      <footer className="bg-foreground text-white py-12 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 animate-[spin_12s_linear_infinite] shadow-xl">
              <img src="/niseeap-logo.jpg" alt="NISEEAP Logo" className="w-full h-full object-cover" />
            </div>
            <img src="/nihe-logo.svg" alt="NI Housing Executive" className="h-16 w-auto opacity-90" />
          </div>
          <p className="font-bold text-xl font-display">Powered by NIEAS Energy Awareness Programme</p>
          <p className="text-white/80 font-bold text-lg">Housing Executive for Eco-Schools NI</p>
          <p className="text-white/50 font-medium text-sm">Designed for the Green Flag Energy Challenge</p>
        </div>
      </footer>
    </div>
  );
}
