import { useState, useEffect } from "react";

const LINKS = [
  { label: "Heroes", href: "#heroes" },
  { label: "Why Enter", href: "#why" },
  { label: "Mission", href: "#mission" },
  { label: "Calculator", href: "#calculator" },
  { label: "Quiz", href: "#quiz" },
  { label: "Wall of Fame", href: "#fame" },
  { label: "Prizes", href: "#prizes" },
  { label: "Dates", href: "#dates" },
  { label: "Teachers", href: "#teacher-packs" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function scrollTo(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground shadow-lg" : "bg-foreground/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo("#home")}
          className="font-black text-secondary text-lg font-display tracking-wide hover:text-primary transition-colors"
        >
          🌿 ECO-HEROES
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-white/80 hover:text-secondary font-bold text-sm px-3 py-1 rounded-lg hover:bg-white/10 transition-all"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white font-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-foreground border-t-2 border-white/20 px-4 pb-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-white/80 hover:text-secondary font-bold text-base px-3 py-2 rounded-lg hover:bg-white/10 transition-all text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
