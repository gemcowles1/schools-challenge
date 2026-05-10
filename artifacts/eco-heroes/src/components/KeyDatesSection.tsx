import { useState, useEffect } from "react";

const DEADLINE = new Date("2026-06-01T23:59:59");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const dates = [
  { date: "12 May", label: "Competition Opens", emoji: "🚀", rotate: "-rotate-1" },
  { date: "1 June", label: "Submissions Close", emoji: "📬", rotate: "rotate-1" },
  { date: "21 June", label: "Winners Announced", emoji: "🏆", rotate: "-rotate-1" },
];

function Pad(n: number) {
  return String(n).padStart(2, "0");
}

export function KeyDatesSection() {
  const { days, hours, minutes, seconds } = useCountdown(DEADLINE);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-display text-secondary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            📅 KEY DATES
          </h2>
          <p className="text-xl font-bold text-foreground/70">Mark these in your diary!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto mb-14">
          {dates.map((d) => (
            <div
              key={d.label}
              className={`bg-secondary border-4 border-foreground rounded-2xl px-8 py-8 comic-shadow ${d.rotate} hover:rotate-0 transition-transform duration-300 text-center flex-1 min-w-[200px]`}
            >
              <div className="text-5xl mb-3">{d.emoji}</div>
              <div className="text-4xl font-black text-primary font-display mb-1">{d.date}</div>
              <div className="font-bold text-foreground/80 text-lg">{d.label}</div>
            </div>
          ))}
        </div>

        {/* Live countdown */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-black text-2xl text-foreground mb-6 uppercase tracking-wide">
            ⏱️ Submissions close in…
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: minutes, label: "Mins" },
              { val: seconds, label: "Secs" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="bg-foreground text-white border-4 border-foreground rounded-2xl py-5 comic-shadow"
              >
                <div className="text-5xl font-black font-display text-secondary leading-none">
                  {Pad(val)}
                </div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
