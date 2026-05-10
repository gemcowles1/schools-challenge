import { useState } from "react";

const ACTIONS = [
  "reduce our energy use by 10%",
  "switch off lights in every empty room",
  "keep every door closed to trap heat",
  "use natural light instead of electric lights",
  "turn off all whiteboards and screens when not in use",
  "wear our jumpers before asking to turn up the heating",
  "unplug all chargers at the end of every day",
  "reduce our paper use and print only when necessary",
];

const OUTCOMES = [
  "help fight climate change",
  "earn our Eco-Schools Green Flag",
  "reduce our school's carbon footprint",
  "protect nature for the next generation",
  "make our school a greener place to learn",
  "save money we can spend on books and equipment",
];

export function MissionBuilderSection() {
  const [school, setSchool] = useState("");
  const [action, setAction] = useState(ACTIONS[0]);
  const [outcome, setOutcome] = useState(OUTCOMES[0]);
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dateStr = date
    ? new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "[choose a date]";

  const schoolDisplay = school.trim() || "[Your School]";

  function handleSubmit() {
    if (!school.trim() || !date) {
      alert("Please fill in your school name and choose a target date!");
      return;
    }
    setSubmitted(true);
  }

  function handlePrint() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
      <head>
        <title>Eco-Hero Mission — ${schoolDisplay}</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #d4edda; }
          .poster { background: white; padding: 60px; border-radius: 20px; max-width: 600px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.15); border: 6px solid #1a5c26; }
          h1 { color: #1a5c26; font-size: 2rem; margin-bottom: 10px; }
          .mission { font-size: 1.4rem; line-height: 1.9; color: #333; margin: 30px 0; font-style: italic; }
          .highlight { color: #1a5c26; font-weight: bold; }
          .footer { color: #888; margin-top: 30px; font-size: 0.85rem; border-top: 2px solid #e0e0e0; padding-top: 16px; }
          .logo { font-size: 4rem; margin-bottom: 10px; }
          @media print { body { background: white; } .poster { box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="poster">
          <div class="logo">🌿⚡</div>
          <h1>Eco-Hero Mission Statement</h1>
          <div class="mission">
            <span class="highlight">We are ${schoolDisplay}</span> and we pledge to
            <span class="highlight">${action}</span> so that we can
            <span class="highlight">${outcome}</span> by
            <span class="highlight">${dateStr}</span>.
          </div>
          <div class="footer">Eco-Schools Northern Ireland • Eco-Hero Challenge 2026<br>Sponsored by NI Housing Executive / NIEAS Energy Awareness Programme</div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  return (
    <section id="mission" className="py-20 bg-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🚀 BUILD YOUR MISSION
          </h2>
          <p className="text-xl font-bold text-foreground/70">
            Create your class pledge — fill in the blanks and watch it come to life!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-primary text-white border-4 border-foreground rounded-2xl p-10 comic-shadow text-center transform rotate-1">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-black font-display mb-4">Mission Submitted!</h3>
              <p className="text-xl font-bold opacity-90 mb-6">Your pledge has been saved. Good luck, Eco-Heroes!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-white text-primary border-4 border-foreground font-black px-6 py-3 rounded-xl comic-shadow hover:scale-105 transition-transform"
              >
                Edit Mission
              </button>
            </div>
          ) : (
            <>
              {/* Form */}
              <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow space-y-6 mb-6">
                <div>
                  <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your School Name</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="e.g. Oakgrove Integrated PS"
                    className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your Energy-Saving Action</label>
                  <select
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg bg-white focus:outline-none focus:border-primary"
                  >
                    {ACTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Why It Matters</label>
                  <select
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg bg-white focus:outline-none focus:border-primary"
                  >
                    {OUTCOMES.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your Target Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Live preview */}
              <div className="bg-secondary border-4 border-dashed border-foreground rounded-2xl p-8 comic-shadow mb-6 text-center transform -rotate-1">
                <h3 className="font-black text-2xl text-foreground font-display mb-4 uppercase">✨ Your Mission Statement</h3>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed italic">
                  <span className="text-primary not-italic font-black">We are {schoolDisplay}</span> and we pledge to{" "}
                  <span className="text-primary not-italic font-black">{action}</span> so that we can{" "}
                  <span className="text-primary not-italic font-black">{outcome}</span> by{" "}
                  <span className="text-primary not-italic font-black">{dateStr}</span>.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-primary text-white border-4 border-foreground font-black text-xl px-8 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform uppercase"
                >
                  🚀 Submit Our Mission
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-white text-foreground border-4 border-foreground font-black text-xl px-8 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform uppercase"
                >
                  🖨️ Print Poster
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
