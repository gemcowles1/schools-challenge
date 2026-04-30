import { EcoHero, HeroCard } from "./HeroCard";

const heroes: EcoHero[] = [
  {
    id: "light-guardian",
    name: "Light Guardian",
    studentName: "Veggie Man",
    power: "Lights out, planet saved!",
    description: "The Light Guardian patrols the hallways and classrooms. When a room is empty, they swoop in with lightning speed to switch off the lights. They know that every watt counts!",
    color: "bg-yellow-300",
    imageSrc: "/hero-1.png"
  },
  {
    id: "heat-keeper",
    name: "Heat Keeper",
    studentName: "Eloise",
    power: "Stay warm, waste less!",
    description: "Armed with a thermal sense, the Heat Keeper monitors radiators and makes sure precious heat doesn't escape through open doors and windows during winter.",
    color: "bg-red-400",
    imageSrc: "/hero-2.png"
  },
  {
    id: "plug-puller",
    name: "Plug Puller",
    studentName: "Kaizen Ken",
    power: "Standby is energy wasted!",
    description: "The Plug Puller has a special power to detect devices left on standby. Tablets, computers, smartboards—nothing escapes their watchful eye. They pull the plug on energy vampires!",
    color: "bg-blue-400",
    imageSrc: "/hero-3.png"
  },
  {
    id: "renewable-ranger",
    name: "Renewable Ranger",
    studentName: "Heather O'Hare",
    power: "Sun, wind and water power us!",
    description: "A champion of Northern Ireland's natural forces. The Renewable Ranger educates classmates about wind turbines, solar panels, and how nature can power our school cleanly.",
    color: "bg-green-400",
    imageSrc: "/hero-4.png"
  },
  {
    id: "energy-auditor",
    name: "Energy Auditor",
    studentName: "Ashara",
    power: "We measure, we improve!",
    description: "The brains of the operation! The Energy Auditor tracks the school's electricity and heating bills. They create charts, spot trends, and prove that the Eco-Heroes are saving the day.",
    color: "bg-purple-400",
    imageSrc: "/hero-5.png"
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
