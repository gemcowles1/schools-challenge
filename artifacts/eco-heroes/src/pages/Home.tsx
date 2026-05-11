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

      <footer className="bg-foreground text-white text-center">
        {/* White logo stripe */}
        <div className="bg-white border-b-2 border-gray-100 flex items-center px-4 py-1.5">
          <img src="/nihe-logo.jpg" alt="NI Housing Executive" className="h-7 w-auto object-contain" />
          <div className="ml-auto w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200">
            <img src="/niseeap-logo.jpg" alt="NISEEAP" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Navy content */}
        <div className="container mx-auto px-4 py-10 flex flex-col items-center gap-3">
          <p className="font-bold text-xl font-display">Powered by NIEAS Energy Awareness Programme</p>
          <p className="text-white/80 font-bold text-lg">Housing Executive for Eco-Schools NI</p>
          <p className="text-white/50 font-medium text-sm">Designed for the Green Flag Energy Challenge</p>
        </div>
      </footer>
    </div>
  );
}
