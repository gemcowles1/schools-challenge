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
        <div className="container mx-auto px-4">
          <p className="font-bold text-xl mb-4 font-display">Powered by Eco-Schools Northern Ireland 🌍</p>
          <p className="text-white/60 font-medium">Designed for the Green Flag Energy Challenge</p>
        </div>
      </footer>
    </div>
  );
}
