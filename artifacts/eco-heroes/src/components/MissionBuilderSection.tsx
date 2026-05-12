import { useState } from "react";
import { Confetti } from "@/components/Confetti";
import { NiheBadge } from "@/components/NiheBadge";

const ACTIONS_BY_AGE: Record<string, string[]> = {
  "5-7": [
    "switch off the lights when we leave a room",
    "turn off the tap while we wash our hands",
    "wear an extra jumper instead of turning up the heat",
    "remind our teacher to switch off the whiteboard",
    "walk or cycle to school instead of getting a lift",
    "open the curtains to use sunlight instead of electric lights",
  ],
  "8-11": [
    "reduce our energy use by 10% this term",
    "switch off lights in every empty room",
    "keep every door closed to trap heat",
    "use natural light instead of electric lights",
    "turn off all whiteboards and screens when not in use",
    "wear our jumpers before asking to turn up the heating",
    "unplug all chargers at the end of every day",
    "do a classroom energy audit and share our findings",
  ],
  "12-14": [
    "conduct a full school energy audit and present results to governors",
    "design and run an energy-saving campaign across the whole school",
    "reduce our school's carbon footprint by 15% this academic year",
    "install and monitor a school energy dashboard",
    "lead a student assembly on climate change and energy saving",
    "create a school energy policy co-written by pupils and staff",
    "research and propose renewable energy options for our school",
    "partner with a local business on a joint energy-saving initiative",
  ],
};

const OUTCOMES = [
  "help fight climate change",
  "earn our Eco-Schools Green Flag",
  "reduce our school's carbon footprint",
  "protect nature for the next generation",
  "make our school a greener place to learn",
  "save money we can spend on books and equipment",
];

const NEXT_FLAG_TIPS = [
  { emoji: "🌊", topic: "Water", desc: "Audit your school's water usage and fix dripping taps." },
  { emoji: "🚗", topic: "Transport", desc: "Encourage walking, cycling and car-sharing to school." },
  { emoji: "♻️", topic: "Litter & Waste", desc: "Set up a recycling programme and reduce single-use plastics." },
  { emoji: "🌿", topic: "Biodiversity", desc: "Create a wildlife garden or plant a pollinator patch." },
  { emoji: "🍎", topic: "Healthy Living", desc: "Run a healthy eating campaign and reduce food waste." },
  { emoji: "🌍", topic: "Global Citizenship", desc: "Link your eco-work to global sustainability goals." },
];

const AGE_BANDS = [
  { id: "5-7",  label: "Ages 5–7",   emoji: "⭐", desc: "Foundation & Key Stage 1", color: "bg-yellow-100 border-yellow-400" },
  { id: "8-11", label: "Ages 8–11",  emoji: "🚀", desc: "Key Stage 2",              color: "bg-green-100 border-primary" },
  { id: "12-14",label: "Ages 12–14", emoji: "🔬", desc: "Key Stage 3",              color: "bg-blue-100 border-blue-500" },
];

type Step = "age-band" | "eco-school" | "energy-flag" | "next-flag" | "mission";
type MissionMode = "builder" | "freetext";

export function MissionBuilderSection() {
  const [step, setStep] = useState<Step>("age-band");
  const [ageBand, setAgeBand] = useState<string | null>(null);
  const [isEcoSchool, setIsEcoSchool] = useState<boolean | null>(null);
  const [hasEnergyFlag, setHasEnergyFlag] = useState<boolean | null>(null);
  const [missionMode, setMissionMode] = useState<MissionMode>("builder");

  const actions = ageBand ? ACTIONS_BY_AGE[ageBand] : ACTIONS_BY_AGE["8-11"];

  const [school, setSchool] = useState("");
  const [action, setAction] = useState(actions[0]);
  const [date, setDate] = useState("");
  const [freeText, setFreeText] = useState("");
  const [whyMatters, setWhyMatters] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [flagGreen, setFlagGreen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [copied, setCopied] = useState(false);

  const dateStr = date
    ? new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "[choose a date]";
  const schoolDisplay = school.trim() || "[Your School]";

  function handleAgeBand(id: string) {
    setAgeBand(id);
    setAction(ACTIONS_BY_AGE[id][0]);
    setStep("eco-school");
  }

  function handleSchoolChangeFreetext(name: string) {
    setSchool(name);
    const prefix = name.trim() ? `We are ${name.trim()} and we pledge to ` : "";
    if (!freeText || freeText.startsWith("We are ")) {
      setFreeText(prefix);
    }
  }

  function handleSubmit() {
    if (missionMode === "builder" && (!school.trim() || !date)) {
      alert("Please fill in your school name and choose a target date!");
      return;
    }
    if (missionMode === "freetext" && (!school.trim() || !freeText.trim())) {
      alert("Please enter your school name and write your mission statement!");
      return;
    }
    const missionText = getMissionText();
    const bandLabel = ageBand ? `Ages ${ageBand}` : "";
    const subject = encodeURIComponent(`Eco-Hero Mission Statement — ${school.trim() || "Our School"}${bandLabel ? " (" + bandLabel + ")" : ""}`);
    const body = encodeURIComponent(`Our Mission Statement:\n\n${missionText}\n\nAge Group: ${bandLabel || "Not specified"}\nSubmitted via Eco Heroes NI`);
    window.open(`mailto:Nienergyadvice@nihe.gov.uk?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4000);
  }

  function getMissionText() {
    if (missionMode === "freetext") return freeText;
    const why = whyMatters.trim() || "[why it matters]";
    return `We are ${schoolDisplay} and we pledge to ${action} so that we can ${why} by ${dateStr}.`;
  }

  function handleCopy() {
    navigator.clipboard.writeText(getMissionText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handlePrint() {
    const why = whyMatters.trim() || "[why it matters]";
    const missionHtml =
      missionMode === "builder"
        ? `<span class="highlight">We are ${schoolDisplay}</span> and we pledge to
           <span class="highlight">${action}</span> so that we can
           <span class="highlight">${why}</span> by
           <span class="highlight">${dateStr}</span>.`
        : `<span class="highlight">${freeText}</span>`;

    const bandLabel = ageBand ? `Ages ${ageBand}` : "";
    const base = window.location.origin;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html><head>
        <title>Eco-Hero Mission — ${schoolDisplay}</title>
        <style>
          body { font-family: Arial, sans-serif; display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; background:#d4edda; }
          .poster { background:white; padding:50px 60px; border-radius:20px; max-width:640px; width:100%; text-align:center; box-shadow:0 10px 40px rgba(0,0,0,0.15); border:6px solid #1a5c26; }
          .logos { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:22px; }
          .logos img { height:72px; width:auto; object-fit:contain; }
          .logos .niseeap { height:72px; width:72px; border-radius:50%; object-fit:cover; border:2px solid #e0e0e0; }
          h1 { color:#1a5c26; font-size:1.9rem; margin-bottom:6px; }
          .band { display:inline-block; background:#d4edda; color:#1a5c26; font-weight:bold; font-size:.85rem; padding:3px 12px; border-radius:20px; margin-bottom:6px; }
          .sub { color:#888; font-size:.9rem; margin-bottom:0; }
          .mission { font-size:1.35rem; line-height:1.9; color:#333; margin:28px 0; font-style:italic; border-left:4px solid #22c55e; padding-left:18px; text-align:left; }
          .highlight { color:#1a5c26; font-weight:bold; }
          .footer { color:#aaa; margin-top:24px; font-size:0.8rem; border-top:2px solid #f0f0f0; padding-top:14px; }
          @media print { body { background:white; } .poster { box-shadow:none; border:4px solid #1a5c26; } }
        </style>
        <script>
          function tryPrint() {
            const imgs = document.images;
            let loaded = 0;
            if (imgs.length === 0) { window.print(); return; }
            for (let i = 0; i < imgs.length; i++) { if (imgs[i].complete) loaded++; }
            if (loaded === imgs.length) { window.print(); }
            else { setTimeout(tryPrint, 200); }
          }
          window.onload = function() { setTimeout(tryPrint, 100); };
        </script>
      </head><body>
        <div class="poster">
          <div class="logos">
            <img src="${base}/nihe-logo.jpg" alt="NI Housing Executive" />
            <img src="${base}/niseeap-logo.jpg" alt="Schools Energy" class="niseeap" />
          </div>
          <h1>🌿 Eco-Hero Mission Statement</h1>
          ${bandLabel ? `<div class="band">${bandLabel}</div>` : ""}
          <p class="sub">Eco-Schools Northern Ireland — Energy Challenge 2026</p>
          <div class="mission">${missionHtml}</div>
          <div class="footer">Sponsored by NI Housing Executive / NIEAS Energy Awareness Programme<br>Green Flag Energy Topic Challenge — Northern Ireland Schools</div>
        </div>
      </body></html>
    `);
    printWindow.document.close();
  }

  function reset() {
    setStep("age-band");
    setAgeBand(null);
    setIsEcoSchool(null);
    setHasEnergyFlag(null);
    setSubmitted(false);
    setConfetti(false);
    setFlagGreen(false);
    setFreeText("");
    setSchool("");
    setDate("");
    setWhyMatters("");
  }

  // ── Step 0: Age Band ─────────────────────────────────────────────────────
  if (step === "age-band") {
    return (
      <SectionShell>
        <Heading />
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white border-4 border-foreground rounded-2xl p-10 comic-shadow">
            <div className="text-5xl mb-4">🎒</div>
            <h3 className="text-3xl font-black font-display text-foreground mb-2">
              What age group are you?
            </h3>
            <p className="text-foreground/60 font-medium mb-8">
              We'll give you challenges that are just right for your class.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {AGE_BANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleAgeBand(b.id)}
                  className={`${b.color} border-4 rounded-2xl p-6 comic-shadow hover:scale-105 transition-transform text-center`}
                >
                  <div className="text-5xl mb-3">{b.emoji}</div>
                  <div className="font-black text-2xl text-foreground mb-1">{b.label}</div>
                  <div className="text-sm font-bold text-foreground/60">{b.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    );
  }

  // ── Step 1: Are you already an Eco-School? ───────────────────────────────
  if (step === "eco-school") {
    return (
      <SectionShell>
        <Heading />
        <div className="max-w-2xl mx-auto text-center">
          <AgeBadge ageBand={ageBand} />
          <div className="bg-white border-4 border-foreground rounded-2xl p-10 comic-shadow">
            <div className="text-5xl mb-4">🏫</div>
            <h3 className="text-3xl font-black font-display text-foreground mb-6">
              Is your school already an Eco-School?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ChoiceBtn label="✅ Yes, we are!" onClick={() => { setIsEcoSchool(true); setStep("energy-flag"); }} primary />
              <ChoiceBtn label="🌱 Not yet" onClick={() => { setIsEcoSchool(false); setStep("mission"); }} />
              <ChoiceBtn label="🤔 Not sure" onClick={() => { setIsEcoSchool(false); setStep("mission"); }} />
            </div>
          </div>
          <button onClick={() => setStep("age-band")} className="mt-4 text-sm font-bold text-foreground/50 underline">← Back</button>
        </div>
      </SectionShell>
    );
  }

  // ── Step 2: Do you have your Energy Flag? ────────────────────────────────
  if (step === "energy-flag") {
    function handleYes() {
      setFlagGreen(true);
      setHasEnergyFlag(true);
      setTimeout(() => setStep("next-flag"), 6000);
    }

    return (
      <SectionShell>
        <Heading />
        <div className="max-w-2xl mx-auto text-center">
          <AgeBadge ageBand={ageBand} />
          <div className="bg-white border-4 border-foreground rounded-2xl p-10 comic-shadow">
            <div className="flex justify-center mb-6">
              <div className="relative w-44 h-44" style={{ transition: "transform 0.4s", transform: flagGreen ? "scale(1.15)" : "scale(1)" }}>
                <img
                  src="/eco-flag-logo.png"
                  alt="Eco-Schools Green Flag"
                  className="w-full h-full object-contain"
                  style={{
                    filter: flagGreen ? "grayscale(0%) drop-shadow(0 0 18px #22c55e)" : "grayscale(100%)",
                    transition: "filter 1.2s ease, transform 0.4s ease",
                  }}
                />
                {flagGreen && <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-ping rounded-full bg-green-400 opacity-20" />}
              </div>
            </div>
            <h3 className="text-3xl font-black font-display text-foreground mb-2">
              Have you already earned your <span className="text-primary">Energy Flag</span>?
            </h3>
            <p className="text-foreground/60 font-medium mb-8">(The Energy topic is one of the 11 Eco-Schools topics)</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ChoiceBtn label="⚡ Yes — we have it!" onClick={handleYes} primary />
              <ChoiceBtn label="🚀 Not yet — working on it" onClick={() => { setHasEnergyFlag(false); setStep("mission"); }} />
            </div>
            {flagGreen && (
              <div className="mt-6">
                <p className="text-2xl font-black text-primary animate-bounce mb-4">🎉 Brilliant — your flag is GREEN!</p>
                <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-foreground overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ animation: "flagProgress 6s linear forwards" }} />
                </div>
                <p className="text-sm font-bold text-foreground/50 mt-2">Loading your next steps…</p>
                <style>{`@keyframes flagProgress { from { width: 0% } to { width: 100% } }`}</style>
              </div>
            )}
          </div>
          <button onClick={() => setStep("eco-school")} className="mt-4 text-sm font-bold text-foreground/50 underline">← Back</button>
        </div>
      </SectionShell>
    );
  }

  // ── Step 3: Already have the Energy Flag ─────────────────────────────────
  if (step === "next-flag") {
    return (
      <SectionShell>
        <Heading />
        <div className="max-w-4xl mx-auto">
          <AgeBadge ageBand={ageBand} />
          <div className="text-center mb-8">
            <div className="text-6xl mb-3">🎉</div>
            <h3 className="text-4xl font-black font-display text-primary drop-shadow-[2px_2px_0_hsl(var(--foreground))] mb-2">
              Amazing — you've got your Energy Flag!
            </h3>
            <p className="text-xl font-bold text-foreground/70">
              You can still enter the Eco-Hero competition to celebrate your work.<br />
              And here are some ideas for <strong>your next Eco-Schools topic</strong>:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {NEXT_FLAG_TIPS.map((t, i) => {
              const rots = ["-rotate-1","rotate-1","-rotate-1","rotate-1","-rotate-1","rotate-1"];
              return (
                <div key={t.topic} className={`bg-secondary border-4 border-foreground rounded-2xl p-6 comic-shadow ${rots[i]} hover:rotate-0 transition-transform duration-300`}>
                  <div className="text-4xl mb-2">{t.emoji}</div>
                  <h4 className="font-black text-xl text-white font-display mb-1">{t.topic}</h4>
                  <p className="text-white/85 font-medium text-sm leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow mb-4">
            <p className="text-xl font-bold text-foreground mb-4">
              You can still enter the Eco-Hero competition and show off your energy work! 🌟
            </p>
            <ChoiceBtn label="🚀 Build Our Mission Statement" onClick={() => setStep("mission")} primary />
          </div>
          <div className="text-center">
            <button onClick={() => setStep("energy-flag")} className="text-sm font-bold text-foreground/50 underline">← Back</button>
          </div>
        </div>
      </SectionShell>
    );
  }

  // ── Step 4: Mission Builder ──────────────────────────────────────────────
  return (
    <SectionShell>
      <Heading />
      <AgeBadge ageBand={ageBand} />

      {!submitted && (
        <div className="max-w-3xl mx-auto mb-6 flex justify-center gap-3">
          <button
            onClick={() => setMissionMode("builder")}
            className={`border-4 border-foreground font-black px-5 py-2 rounded-xl comic-shadow transition-all ${missionMode === "builder" ? "bg-primary text-white scale-105" : "bg-white text-foreground"}`}
          >
            🔧 Use the Builder
          </button>
          <button
            onClick={() => setMissionMode("freetext")}
            className={`border-4 border-foreground font-black px-5 py-2 rounded-xl comic-shadow transition-all ${missionMode === "freetext" ? "bg-primary text-white scale-105" : "bg-white text-foreground"}`}
          >
            ✍️ Write My Own
          </button>
        </div>
      )}

      <Confetti active={confetti} />

      <div className="max-w-3xl mx-auto">
        {submitted ? (
          <div className="bg-primary text-white border-4 border-foreground rounded-2xl p-10 comic-shadow text-center transform rotate-1">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-black font-display mb-4">Mission Submitted!</h3>
            <p className="text-xl font-bold opacity-90 mb-4">Your pledge has been saved. Good luck, Eco-Heroes!</p>
            <div className="bg-white/20 rounded-xl px-5 py-4 mb-6 italic font-bold text-lg">
              "{getMissionText()}"
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleCopy} className="bg-white text-primary border-4 border-white/50 font-black px-6 py-3 rounded-xl comic-shadow hover:scale-105 transition-transform">
                {copied ? "✅ Copied!" : "📋 Copy to Clipboard"}
              </button>
              <button onClick={handlePrint} className="bg-white text-primary border-4 border-white/50 font-black px-6 py-3 rounded-xl comic-shadow hover:scale-105 transition-transform">
                🖨️ Print Poster
              </button>
              <button onClick={reset} className="bg-white/20 text-white border-4 border-white/50 font-black px-6 py-3 rounded-xl hover:bg-white/30 transition-colors">
                Start Again
              </button>
            </div>
          </div>
        ) : missionMode === "builder" ? (
          <>
            <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow space-y-6 mb-6">
              <div>
                <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your School Name</label>
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="e.g. Oakgrove Integrated PS"
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your Energy-Saving Action</label>
                <select value={action} onChange={(e) => setAction(e.target.value)}
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg bg-white focus:outline-none focus:border-primary">
                  {actions.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Why It Matters</label>
                <textarea
                  value={whyMatters}
                  onChange={(e) => setWhyMatters(e.target.value)}
                  rows={3}
                  placeholder="e.g. help fight climate change and earn our Eco-Schools Green Flag"
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div>
                <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your Target Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="bg-secondary border-4 border-dashed border-foreground rounded-2xl p-8 comic-shadow mb-6 text-center transform -rotate-1">
              <h3 className="font-black text-2xl text-white font-display mb-4 uppercase">✨ Your Mission Statement</h3>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed italic">
                <span className="text-white not-italic font-black">We are {schoolDisplay}</span> and we pledge to{" "}
                <span className="text-white not-italic font-black">{action}</span> so that we can{" "}
                <span className="text-white not-italic font-black">{whyMatters.trim() || "[why it matters]"}</span> by{" "}
                <span className="text-white not-italic font-black">{dateStr}</span>.
              </p>
              <button onClick={handleCopy} className="mt-4 border-4 border-foreground bg-white text-foreground font-black px-5 py-2 rounded-xl comic-shadow hover:scale-105 transition-transform text-sm">
                {copied ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow mb-6 space-y-5">
              <div>
                <label className="block font-black text-foreground mb-2 uppercase tracking-wide">Your School Name</label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => handleSchoolChangeFreetext(e.target.value)}
                  placeholder="e.g. St. Mary's Primary School"
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block font-black text-foreground mb-3 uppercase tracking-wide text-lg">
                  ✍️ Write your own mission statement
                </label>
                <textarea
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  rows={6}
                  placeholder="e.g. We are St. Mary's PS and we pledge to switch off every light and screen when not in use, so that we can reduce our carbon footprint and earn our Eco-Schools Green Flag by June 2026."
                  className="w-full border-4 border-foreground rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:border-primary resize-none leading-relaxed"
                />
                <p className="text-sm font-medium text-foreground/50 mt-2">
                  Tip: Your school name is added automatically — just complete your pledge, why it matters, and a target date.
                </p>
              </div>
            </div>

            {freeText.trim() && (
              <div className="bg-secondary border-4 border-dashed border-foreground rounded-2xl p-8 comic-shadow mb-6 text-center transform -rotate-1">
                <h3 className="font-black text-2xl text-white font-display mb-4 uppercase">✨ Your Mission Statement</h3>
                <p className="text-xl font-bold text-white leading-relaxed italic">{freeText}</p>
              </div>
            )}
          </>
        )}

        {!submitted && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleSubmit}
              className="bg-primary text-white border-4 border-foreground font-black text-xl px-8 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform uppercase">
              🚀 Submit Our Mission
            </button>
            <button onClick={handlePrint}
              className="bg-white text-foreground border-4 border-foreground font-black text-xl px-8 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform uppercase">
              🖨️ Print Poster
            </button>
          </div>
        )}

        {!submitted && (
          <div className="text-center mt-4">
            <button onClick={reset} className="text-sm font-bold text-foreground/50 underline">← Start over</button>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

function AgeBadge({ ageBand }: { ageBand: string | null }) {
  if (!ageBand) return null;
  const band = AGE_BANDS.find((b) => b.id === ageBand);
  if (!band) return null;
  return (
    <div className="flex justify-center mb-6">
      <span className={`${band.color} border-4 rounded-full px-5 py-2 font-black text-foreground text-sm uppercase tracking-wide comic-shadow`}>
        {band.emoji} {band.label} — {band.desc}
      </span>
    </div>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section id="mission" className="pb-20 bg-primary/10 relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

function Heading() {
  return (
    <div className="text-center mb-10">
      <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
        📝 OUR MISSION STATEMENT COMPETITION
      </h2>
      <p className="text-xl font-bold text-foreground/70">
        Tell us about your school — we'll point you in the right direction!
      </p>
    </div>
  );
}

function ChoiceBtn({ label, onClick, primary }: { label: string; onClick: () => void; primary?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`border-4 border-foreground font-black text-lg px-7 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform ${primary ? "bg-primary text-white" : "bg-white text-foreground"}`}
    >
      {label}
    </button>
  );
}
