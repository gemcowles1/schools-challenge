import { useState, useRef, useCallback } from "react";

const PAGE_SCRIPT = [
  "Welcome to Eco Heroes — the Schools Energy Competition for Northern Ireland.",
  "We challenge your school Eco-Committee to take on the Energy topic and earn points towards your Eco-Schools Green Flag.",
  "Five schools will each win eco-refurbished laptops for their Eco-Committee, or school if you're just starting out.",
  "The competition opens on Monday the 1st of June and closes on Tuesday the 16th of June. Winners are announced on Thursday the 18th of June.",
  "Meet our five Eco Heroes. Electric Leisha is the EV Champion — her mission is converting NI roads to electric, helping families and schools switch to electric vehicles to slash emissions and cut running costs. Akshara is the Water Guardian — every drop counts, and she teaches schools how saving water also saves the energy used to heat and pump it. Veggie Man is the Plant Power Hero — save the planet one meal at a time, showing how swapping meat for plants cuts carbon with every bite. Heather O'Hare is the Mind and Mine Keeper — protecting both the land beneath our feet and the wellbeing of the people above it, championing responsible use of Northern Ireland's natural resources. And Kaizen Ken is the Renewable Ranger — wind, retrofit and renewables for all, promoting solar panels, wind turbines and home insulation across Northern Ireland.",
  "Why enter? You get eco-refurbished laptops for your committee, points towards your Eco-Schools Green Flag, a free Digital Certificate, and your school featured as an Eco Hero Champion.",
  "How to enter: Write your school mission statement using the Mission Builder on this page, download it as a PDF, and submit it by email.",
  "Teacher packs are available to download — including worksheets, assembly slides, class trackers, and an Inclusive Access Pack with Easy Read and Sensory Audit resources.",
  "The competition is powered by NIEAS for Schools Energy Awareness Programme, sponsored by the Housing Executive, for the Eco-Schools Northern Ireland Energy Topic.",
  "Good luck, Eco Heroes!",
];

type State = "idle" | "speaking" | "paused";

export function ReadAloudBar() {
  const [state, setState] = useState<State>("idle");
  const [lineIndex, setLineIndex] = useState(0);
  const synthRef = useRef(window.speechSynthesis);
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  const speakFrom = useCallback((startIndex: number) => {
    const synth = synthRef.current;
    synth.cancel();

    const lines = PAGE_SCRIPT.slice(startIndex);
    let idx = startIndex;

    const speakNext = (i: number) => {
      if (i >= PAGE_SCRIPT.length) {
        setState("idle");
        setLineIndex(0);
        return;
      }
      const utt = new SpeechSynthesisUtterance(PAGE_SCRIPT[i]);
      utt.lang = "en-GB";
      utt.rate = 0.92;
      utt.pitch = 1;
      utt.onstart = () => setLineIndex(i);
      utt.onend = () => speakNext(i + 1);
      utt.onerror = () => setState("idle");
      currentUtterance.current = utt;
      synth.speak(utt);
    };

    speakNext(startIndex);
    setState("speaking");
  }, []);

  const handlePlay = () => {
    if (state === "paused") {
      synthRef.current.resume();
      setState("speaking");
    } else {
      speakFrom(0);
    }
  };

  const handlePause = () => {
    synthRef.current.pause();
    setState("paused");
  };

  const handleStop = () => {
    synthRef.current.cancel();
    setState("idle");
    setLineIndex(0);
  };

  const progress = state !== "idle"
    ? Math.round((lineIndex / PAGE_SCRIPT.length) * 100)
    : 0;

  return (
    <div
      role="region"
      aria-label="Read Aloud accessibility tool"
      className="bg-[#1a2e4a] border-b-2 border-yellow-400 px-4 py-2 flex flex-wrap items-center gap-3"
    >
      <span className="text-yellow-300 font-black text-xs uppercase tracking-widest flex items-center gap-1 shrink-0">
        <span aria-hidden="true">🔊</span> Read Aloud
      </span>

      <div className="flex items-center gap-2">
        {state !== "speaking" ? (
          <button
            onClick={handlePlay}
            aria-label={state === "paused" ? "Resume reading" : "Start reading page aloud"}
            className="bg-yellow-400 hover:bg-yellow-300 text-[#1a2e4a] font-black text-xs uppercase tracking-wide px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-200"
          >
            {state === "paused" ? "▶ Resume" : "▶ Play"}
          </button>
        ) : (
          <button
            onClick={handlePause}
            aria-label="Pause reading"
            className="bg-white/20 hover:bg-white/30 text-white font-black text-xs uppercase tracking-wide px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            ⏸ Pause
          </button>
        )}

        {state !== "idle" && (
          <button
            onClick={handleStop}
            aria-label="Stop reading"
            className="bg-white/10 hover:bg-white/20 text-white/80 font-black text-xs uppercase tracking-wide px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            ⏹ Stop
          </button>
        )}
      </div>

      {state !== "idle" && (
        <div className="flex items-center gap-2 flex-1 min-w-[120px]">
          <div
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Reading progress: ${progress}%`}
            className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden"
          >
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white/60 text-xs font-medium shrink-0 tabular-nums">
            {lineIndex + 1}/{PAGE_SCRIPT.length}
          </span>
        </div>
      )}

      {state === "idle" && (
        <span className="text-white/50 text-xs font-medium">
          Hear the full page read aloud in English
        </span>
      )}
    </div>
  );
}
