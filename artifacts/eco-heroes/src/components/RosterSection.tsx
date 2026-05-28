import { EcoHero, HeroCard } from "./HeroCard";
import { NiheBadge } from "./NiheBadge";

const IMG = (name: string) => `${import.meta.env.BASE_URL}eco-heroes-export/images/${name}`;

const heroes: EcoHero[] = [
  {
    id: "electric-laoise",
    name: "Electric Laoise",
    studentName: "EV Champion",
    power: "Converting NI roads to electric!",
    description: "Electric Laoise is on a mission to get diesel and petrol off Northern Ireland's roads for good. She champions electric vehicles and helps families and schools understand how switching to an EV can slash emissions and cut running costs. One conversion at a time, she's charging toward a cleaner future!",
    color: "bg-pink-300",
    imageSrc: IMG("hero-laoise.jpg"),
  },
  {
    id: "ashara",
    name: "Ashara",
    studentName: "Water Guardian",
    power: "Every drop counts!",
    description: "Calm, determined and crystal-clear in her mission — Ashara protects Northern Ireland's most precious resource: water. She teaches her school how to cut water waste, fix dripping taps and understand how saving water also saves the energy used to heat and pump it. Together, every drop counts!",
    color: "bg-cyan-300",
    imageSrc: IMG("hero-water.jpg"),
  },
  {
    id: "veggie-man",
    name: "Veggie Man",
    studentName: "Plant Power Hero",
    power: "Save the planet, one meal at a time!",
    description: "Veggie Man knows that what we eat matters as much as how we heat our homes. He champions vegetarian and vegan choices, showing exactly how much carbon is saved every time we swap meat for plants. One meal at a time, he's feeding a greener Northern Ireland!",
    color: "bg-yellow-300",
    imageSrc: IMG("hero-veggieman.jpg"),
  },
  {
    id: "heather-ohare",
    name: "Heather O'Hare",
    studentName: "Mind & Mine Keeper",
    power: "Protect the land, protect each other!",
    description: "Heather O'Hare has the biggest mission of all — looking after both the land beneath our feet and the wellbeing of the people above it. She champions the responsible use of Northern Ireland's natural resources and the mental health of her community. Strong land, strong minds!",
    color: "bg-purple-300",
    imageSrc: IMG("hero-heather.jpg"),
  },
  {
    id: "kaizen-ken",
    name: "Kaizen Ken",
    studentName: "Renewable Ranger",
    power: "Wind, retrofit and renewables for all!",
    description: "Kaizen Ken believes every improvement moves us forward. He promotes wind turbines, solar panels and home retrofits across Northern Ireland, helping families insulate their homes and switch to renewable energy. Better every day, stronger every way!",
    color: "bg-blue-300",
    imageSrc: IMG("hero-kaizen.jpg"),
  }
];

export function RosterSection() {
  return (
    <section className="pb-20 bg-foreground text-background relative overflow-hidden">
      <NiheBadge className="border border-gray-200" />
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
            Click on each Committee hero to learn more about their energy-saving superpowers — and help bring down energy!
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
