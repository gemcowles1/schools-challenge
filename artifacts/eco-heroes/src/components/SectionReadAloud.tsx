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
      title={speaking ? `Stop reading ${label}` : `Listen to ${label}`}
      aria-label={speaking ? `Stop reading ${label}` : `Listen to ${label}`}
      className={`text-2xl leading-none transition-transform hover:scale-110 active:scale-95 focus:outline-none ${
        speaking ? "animate-pulse" : ""
      }`}
    >
      {speaking ? "⏹️" : "🔊"}
    </button>
  );
}
