import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export interface EcoHero {
  id: string;
  name: string;
  pronunciation?: string;
  studentName: string;
  power: string;
  description: string;
  color: string;
  imageSrc: string;
  designer?: string;
}

interface HeroCardProps {
  hero: EcoHero;
  index: number;
}

export function HeroCard({ hero, index }: HeroCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`group relative bg-white rounded-3xl border-4 border-foreground comic-shadow comic-shadow-hover transition-all duration-300 cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-12`}
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => setIsOpen(true)}
      >
        <div className={`h-48 ${hero.color} border-b-4 border-foreground flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #000 2px, transparent 2.5px)', backgroundSize: '16px 16px' }}></div>
          <img 
            src={hero.imageSrc} 
            alt={hero.name} 
            className="w-40 h-40 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
          />
        </div>
        
        <div className="p-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-foreground text-background font-black text-sm uppercase tracking-wider mb-1 -mt-10 relative z-20 border-2 border-background">
            {hero.studentName}
          </div>
          {hero.designer && (
            <p className="text-xs font-semibold text-foreground/70 mb-2 tracking-wide">✏️ Created by {hero.designer}</p>
          )}
          <h3 className="text-3xl font-black font-display mb-1 leading-tight">{hero.name}</h3>
          {hero.pronunciation && (
            <p className="text-xs font-medium text-foreground/50 mb-1 tracking-wide">🔊 Say: <em>{hero.pronunciation}</em></p>
          )}
          <div className="bg-muted rounded-xl p-3 border-2 border-foreground/10 mb-4">
            <p className="font-bold text-sm text-foreground/80 uppercase">Super Power:</p>
            <p className="font-black text-lg text-primary">{hero.power}</p>
          </div>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
            Click to view profile ⚡
          </p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-4 border-foreground comic-shadow rounded-3xl p-0 overflow-hidden bg-white max-h-[90svh] flex flex-col">
          {/* Hero image — fixed at top */}
          <div className={`h-48 ${hero.color} relative border-b-4 border-foreground flex justify-center items-end flex-shrink-0`}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #000 2px, transparent 2.5px)', backgroundSize: '16px 16px' }}></div>
            <img 
              src={hero.imageSrc} 
              alt={hero.name} 
              className="w-48 h-48 object-contain relative z-10 translate-y-6"
            />
          </div>

          {/* Scrollable content */}
          <div className="p-8 pt-12 text-center overflow-y-auto flex-1">
            <DialogHeader>
              <DialogTitle className="text-4xl font-black font-display text-center mb-1">{hero.name}</DialogTitle>
              {hero.pronunciation && (
                <p className="text-sm font-medium text-foreground/50 text-center mb-1">🔊 Say: <em>{hero.pronunciation}</em></p>
              )}
              <DialogDescription asChild>
                <div className="inline-block px-4 py-1 rounded-full bg-foreground text-background font-black text-sm uppercase tracking-wider mx-auto mb-6">
                  Played by: {hero.studentName}
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <div className="bg-muted rounded-2xl p-6 border-4 border-foreground/20 text-left mb-6">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span> SUPER POWER
              </h4>
              <p className="text-xl font-bold text-primary italic">"{hero.power}"</p>
            </div>

            <div className="text-left">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">📖</span> MISSION
              </h4>
              <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                {hero.description}
              </p>
            </div>

            {hero.designer && (
              <div className="mt-6 pt-4 border-t-2 border-foreground/10 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">Hero Designed by</p>
                <p className="text-sm font-bold text-foreground/70">{hero.designer}</p>
              </div>
            )}
          </div>

          {/* Sticky close button — always visible at bottom */}
          <div className="flex-shrink-0 px-8 py-4 border-t-2 border-foreground/10 bg-white">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white font-black text-lg py-3 px-8 rounded-xl border-4 border-foreground comic-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
            >
              ← Back to Heroes
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
