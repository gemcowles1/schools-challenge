import { useState } from "react";
import { NiheBadge } from "./NiheBadge";

const QUESTIONS = [
  {
    q: "Approximately how many homes in Northern Ireland use oil as their main heating fuel?",
    options: ["25%", "42%", "68%", "85%"],
    correct: 2,
    fact: "68% of homes in NI use oil heating — the highest rate in the UK! That's why the NI Housing Executive runs the Oil Savings Network. Join at oilsavings@nihe.gov.uk and save £10–£35 on your next delivery.",
    oilTip: true,
  },
  {
    q: "Turning the heating down by just 1°C can reduce a NI school's heating bill by approximately how much?",
    options: ["1%", "8%", "25%", "50%"],
    correct: 1,
    fact: "Every 1°C reduction saves roughly 8% on heating costs — with oil prices in NI, that adds up fast!",
  },
  {
    q: "Northern Ireland generates renewable electricity mainly from which source?",
    options: ["Solar panels", "Wave power", "Wind turbines", "Hydroelectric"],
    correct: 2,
    fact: "NI has over 1,000 wind turbines and gets around 45% of its electricity from renewables — mostly wind!",
  },
  {
    q: "Leaving a phone charger plugged in with no phone still uses electricity. True or false?",
    options: ["True — it's called standby power", "False — it uses nothing", "Only if the light is on", "Only older chargers"],
    correct: 0,
    fact: "Standby 'vampire energy' can account for up to 10% of a home's electricity use — unplug to save!",
  },
  {
    q: "What does the 'Energy' topic in Eco-Schools NI ask pupils to do?",
    options: [
      "Only use solar panels",
      "Audit energy use and take action to reduce it",
      "Turn off all electricity in school",
      "Write a letter to the government",
    ],
    correct: 1,
    fact: "The Energy topic is about understanding where energy is used and making practical changes — exactly what Eco-Heroes do!",
  },
];

const BADGES = [
  { min: 0, max: 1, label: "Energy Apprentice", emoji: "🌱", color: "bg-secondary" },
  { min: 2, max: 3, label: "Energy Agent", emoji: "⚡", color: "bg-accent" },
  { min: 4, max: 5, label: "Eco-Hero Champion", emoji: "🏆", color: "bg-primary" },
];

export function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showFact, setShowFact] = useState(false);
  const [done, setDone] = useState(false);

  const score = answers.filter(Boolean).length;
  const badge = BADGES.find((b) => score >= b.min && score <= b.max)!;

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setShowFact(true);
  }

  function next() {
    const correct = selected === QUESTIONS[current].correct;
    const newAnswers = [...answers, correct];
    setAnswers(newAnswers);
    setSelected(null);
    setShowFact(false);
    if (current + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowFact(false);
    setDone(false);
  }

  if (done) {
    return (
      <section id="quiz" className="pb-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className={`${badge.color} text-white border-4 border-foreground rounded-2xl p-12 comic-shadow transform rotate-1`}>
              <div className="text-8xl mb-4">{badge.emoji}</div>
              <h2 className="text-4xl font-black font-display mb-2">You scored {score}/5!</h2>
              <h3 className="text-3xl font-black mb-4">{badge.label}</h3>
              <p className="text-xl font-bold opacity-90 mb-8">
                {score === 5
                  ? "Perfect score — you're a true Eco-Hero! 🌟"
                  : score >= 3
                  ? "Great work! You know your energy stuff."
                  : "Good effort — keep learning and try again!"}
              </p>
              <button
                onClick={restart}
                className="bg-white text-foreground border-4 border-foreground font-black px-8 py-3 rounded-xl comic-shadow hover:scale-105 transition-transform text-lg"
              >
                🔄 Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const q = QUESTIONS[current];

  return (
    <section id="quiz" className="pb-20 bg-background relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            🧠 ENERGY QUIZ
          </h2>
          <p className="text-xl font-bold text-foreground/70">5 questions — earn your badge!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex gap-2 mb-6 justify-center">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-3 flex-1 rounded-full border-2 border-foreground transition-all ${
                  i < current ? "bg-primary" : i === current ? "bg-secondary" : "bg-white"
                }`}
              />
            ))}
          </div>

          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow mb-4">
            <p className="text-sm font-black uppercase text-foreground/40 mb-3 tracking-widest">
              Question {current + 1} of {QUESTIONS.length}
            </p>
            <h3 className="text-2xl font-black text-foreground mb-6 leading-snug">{q.q}</h3>

            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let style = "bg-white border-foreground hover:bg-secondary";
                if (selected !== null) {
                  if (i === q.correct) style = "bg-primary text-white border-primary";
                  else if (i === selected && selected !== q.correct) style = "bg-red-400 text-white border-red-400";
                  else style = "bg-white border-foreground opacity-50";
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left border-4 rounded-xl px-5 py-3 font-bold text-lg transition-all comic-shadow ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showFact && (
              <div className="mt-5 space-y-3">
                <div className="bg-secondary border-4 border-foreground rounded-xl p-4">
                  <p className="font-black text-white text-sm uppercase mb-1">💡 Did you know?</p>
                  <p className="font-bold text-white/90">{q.fact}</p>
                </div>
                {"oilTip" in q && q.oilTip && (
                  <div className="bg-yellow-50 border-4 border-yellow-400 rounded-xl p-4 comic-shadow">
                    <p className="font-black text-foreground text-sm uppercase mb-2">🛢️ Oil Savings Network — NI Housing Executive</p>
                    <p className="font-bold text-foreground/80 text-sm mb-3">
                      If your home uses oil heating, joining the Oil Savings Network could save your family <strong>£10–£35</strong> on every delivery through group buying power.
                    </p>
                    <a
                      href="mailto:oilsavings@nihe.gov.uk"
                      className="inline-block bg-yellow-400 border-4 border-foreground font-black px-4 py-2 rounded-xl comic-shadow hover:scale-105 transition-transform text-foreground text-sm"
                    >
                      ✉️ Join: oilsavings@nihe.gov.uk
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {selected !== null && (
            <div className="text-center">
              <button
                onClick={next}
                className="bg-primary text-white border-4 border-foreground font-black text-xl px-8 py-4 rounded-2xl comic-shadow hover:scale-105 transition-transform"
              >
                {current + 1 < QUESTIONS.length ? "Next Question →" : "See My Score 🏆"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
