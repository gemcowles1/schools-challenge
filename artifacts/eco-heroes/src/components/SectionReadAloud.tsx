import { useState, useRef, useEffect } from "react";

interface Props {
  text: string;
  label?: string;
}

export function SectionReadAloud({ text, label = "Listen" }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleClick = () => {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-GB";
    utt.rate = 0.92;
    utt.pitch = 1;
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    utteranceRef.current = utt;
    synth.speak(utt);
    setSpeaking(true);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={speaking ? `Stop reading ${label}` : `Read ${label} aloud`}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 font-bold text-xs uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${
        speaking
          ? "bg-yellow-400 border-yellow-500 text-gray-900 focus:ring-yellow-400"
          : "bg-white/90 border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground focus:ring-foreground/30"
      }`}
    >
      <span aria-hidden="true">{speaking ? "⏹" : "🔊"}</span>
      {speaking ? "Stop" : label}
    </button>
  );
}
