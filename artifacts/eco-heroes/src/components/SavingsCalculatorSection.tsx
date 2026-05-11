import { useState } from "react";
import { NiheBadge } from "./NiheBadge";

const ACTIONS = [
  { label: "Switch off lights in every empty room", weekly: 12, annual: 180, co2: 95 },
  { label: "Turn off whiteboards & screens when not in use", weekly: 18, annual: 260, co2: 130 },
  { label: "Keep doors closed to trap heat", weekly: 22, annual: 320, co2: 160 },
  { label: "Unplug all chargers at end of every day", weekly: 6, annual: 90, co2: 48 },
  { label: "Reduce heating by 1°C", weekly: 35, annual: 500, co2: 260 },
  { label: "Use natural light instead of electric lights", weekly: 9, annual: 130, co2: 68 },
  { label: "Wear jumpers before turning up heating", weekly: 20, annual: 290, co2: 150 },
];

export function SavingsCalculatorSection() {
  const [selected, setSelected] = useState(0);
  const [weeks, setWeeks] = useState(10);

  const action = ACTIONS[selected];
  const saving = Math.round(action.weekly * weeks);
  const co2 = Math.round((action.co2 / 52) * weeks);

  return (
    <section id="calculator" className="pb-20 bg-secondary relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-foreground drop-shadow-[3px_3px_0_#fff] mb-3">
            ⚡ ENERGY SAVINGS CALCULATOR
          </h2>
          <p className="text-xl font-bold text-white">
            See how much your pledge could save your school
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow space-y-6 mb-6">
            <div>
              <label className="block font-black text-foreground mb-2 uppercase tracking-wide">
                Choose your energy action
              </label>
              <select
                value={selected}
                onChange={(e) => setSelected(Number(e.target.value))}
                className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg bg-white focus:outline-none focus:border-primary"
              >
                {ACTIONS.map((a, i) => (
                  <option key={a.label} value={i}>{a.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-black text-foreground mb-2 uppercase tracking-wide">
                How many weeks will you do it? <span className="text-primary">{weeks} weeks</span>
              </label>
              <input
                type="range"
                min={1}
                max={39}
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                className="w-full accent-primary h-3 rounded-full"
              />
              <div className="flex justify-between text-sm font-bold text-foreground/50 mt-1">
                <span>1 week</span>
                <span>1 term</span>
                <span>Full year</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-primary text-white border-4 border-foreground rounded-2xl p-6 comic-shadow text-center transform -rotate-1">
              <div className="text-5xl mb-2">💷</div>
              <div className="text-5xl font-black font-display mb-1">£{saving}</div>
              <div className="font-bold text-lg opacity-90">Estimated saving</div>
              <div className="text-sm opacity-70 mt-1">over {weeks} week{weeks !== 1 ? "s" : ""}</div>
            </div>
            <div className="bg-accent text-white border-4 border-foreground rounded-2xl p-6 comic-shadow text-center transform rotate-1">
              <div className="text-5xl mb-2">🌿</div>
              <div className="text-5xl font-black font-display mb-1">{co2}kg</div>
              <div className="font-bold text-lg opacity-90">CO₂ avoided</div>
              <div className="text-sm opacity-70 mt-1">over {weeks} week{weeks !== 1 ? "s" : ""}</div>
            </div>
            <div className="bg-secondary border-4 border-foreground rounded-2xl p-6 comic-shadow text-center transform -rotate-1">
              <div className="text-5xl mb-2">📚</div>
              <div className="text-5xl font-black font-display mb-1 text-white">{Math.round(saving / 8)}</div>
              <div className="font-bold text-lg text-foreground/80">Books you could buy</div>
              <div className="text-sm text-foreground/50 mt-1">with those savings</div>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/40 font-medium mt-4">
            * Estimates based on typical NI primary school energy data. Actual savings will vary.
          </p>
        </div>
      </div>
    </section>
  );
}
