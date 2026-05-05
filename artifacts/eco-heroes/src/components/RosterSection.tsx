import { EcoHero, HeroCard } from "./HeroCard";

const heroes: EcoHero[] = [
  {
    id: "electric-laoise",
    name: "Electric Laoise",
    studentName: "Light Guardian",
    power: "Lights out, planet saved!",
    description: "Electric Laoise crackles with energy — literally! She patrols every hallway and classroom, zapping lights off the moment a room is empty. Nothing escapes her electric senses. Every watt saved is a win!",
    color: "bg-pink-300",
    imageSrc: "/hero-laoise.jpg"
  },
  {
    id: "water",
    name: "Water",
    studentName: "Heat Keeper",
    power: "Stay warm, waste less!",
    description: "Calm, cool and in complete control — Water monitors every radiator and keeps heat exactly where it's needed. She makes sure doors and windows stay closed in winter, conserving precious warmth and energy.",
    color: "bg-green-300",
    imageSrc: "/hero-water.jpg"
  },
  {
    id: "veggie-man",
    name: "Veggie Man",
    studentName: "Renewable Ranger",
    power: "Sun, wind and water power us!",
    description: "Soaring above Northern Ireland's wind farms and solar panels, Veggie Man champions renewable energy. He teaches his classmates how the power of nature — sun, wind and water — can fuel our future cleanly!",
    color: "bg-yellow-300",
    imageSrc: "/hero-veggieman.jpg"
  },
  {
    id: "heather-ohare",
    name: "Heather O'Hare",
    studentName: "Plug Puller",
    power: "Standby is energy wasted!",
    description: "With lightning-fast reflexes and a sixth sense for standby lights, Heather O'Hare pulls the plug on energy vampires! Tablets, smartboards, computers — nothing gets left on her watch.",
    color: "bg-purple-300",
    imageSrc: "/hero-heather.jpg"
  },
  {
    id: "kaizen-ken",
    name: "Kaizen Ken",
    studentName: "Energy Auditor",
    power: "We measure, we improve!",
    description: "The brains behind the squad! Kaizen Ken tracks every unit of electricity and heating used in school. Armed with data and determination, he spots waste, charts progress and proves the Eco-Heroes are making a real difference.",
    color: "bg-blue-300",
    imageSrc: "/hero-kaizen.jpg"
  }
];

export function RosterSection() {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Dynamic comic background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)',
        backgroundPosition: '0 0, 20px 20px',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-4 drop-shadow-[0_4px_0_hsl(var(--primary))]">
            MEET THE SQUAD
          </h2>
          <p className="text-xl font-bold text-background/80 max-w-2xl mx-auto">
            Click on each hero to learn more about their energy-saving superpowers! (Teachers: Add student names here!)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {heroes.map((hero, index) => (
            <HeroCard key={hero.id} hero={hero} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
