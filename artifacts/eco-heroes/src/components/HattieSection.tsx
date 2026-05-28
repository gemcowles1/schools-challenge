import { NiheBadge } from "./NiheBadge";

const IMG = (name: string) => `${import.meta.env.BASE_URL}eco-heroes-export/images/${name}`;

export function HattieSection() {
  return (
    <section id="hattie" className="relative bg-amber-50 border-t-8 border-foreground overflow-hidden">
      <NiheBadge />

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #92400e 0px, #92400e 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #92400e 0px, #92400e 1px, transparent 1px, transparent 24px)",
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-4 border-2 border-foreground comic-shadow">
            🏠 Housing Executive · Business in the Community · M3 Housing
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-display text-amber-700 drop-shadow-[4px_4px_0_hsl(var(--foreground))] mb-3">
            Hattie the House
          </h2>
          <p className="text-xl md:text-2xl font-bold text-foreground/70 max-w-2xl mx-auto">
            An educational storytelling project helping primary school children across Northern Ireland learn how to keep their homes healthy.
          </p>
        </div>

        {/* School session photo */}
        <div className="mb-10 rounded-3xl border-4 border-foreground comic-shadow overflow-hidden">
          <img
            src={IMG("hattie-schools.png")}
            alt="Hattie the House school sessions — M3 and Housing Executive visiting primary schools in Northern Ireland"
            className="w-full object-cover"
          />
        </div>

        {/* Story + Lessons side by side on desktop */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* The Story */}
          <div className="bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 transform -rotate-1">
            <h3 className="text-2xl font-black font-display text-amber-700 mb-4 uppercase tracking-wide">
              📖 The Story
            </h3>
            <div className="space-y-3 text-base font-bold text-foreground/80 leading-relaxed">
              <p>
                <span className="text-amber-700 font-black">Hattie</span> is a young boy's talking house who becomes poorly during winter — feeling "sick" from damp, poor ventilation, and moisture buildup.
              </p>
              <p>
                With the help of a <span className="text-primary font-black">housing inspector</span>, Hattie is nursed back to health through basic repairs and better daily habits.
              </p>
              <p className="text-base text-foreground font-black border-l-4 border-amber-400 pl-4">
                Just like people, homes need regular care and attention to stay healthy. 🏠💚
              </p>
            </div>
          </div>

          {/* Practical Lessons */}
          <div className="bg-amber-700 border-4 border-foreground rounded-3xl comic-shadow p-6 transform rotate-1">
            <h3 className="text-2xl font-black font-display text-white mb-4 uppercase tracking-wide">
              🩺 Practical Lessons
            </h3>
            <ul className="space-y-3">
              {[
                { icon: "💧", title: "Managing Moisture", desc: "Use pot lids when cooking; don't dry clothes on radiators." },
                { icon: "🌬️", title: "Air Circulation", desc: "Open windows and let air flow freely through every room." },
                { icon: "🧹", title: "Keeping it Clear", desc: "Don't let clutter block walls or vents." },
                { icon: "🔍", title: "Routine Checks", desc: "Look out for loose roof tiles and keep guttering clear." },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-black text-white text-sm uppercase tracking-wide">{title}</p>
                    <p className="font-bold text-white/80 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-8 mb-6 transform -rotate-1">
          <h3 className="text-2xl font-black font-display text-primary mb-4 uppercase tracking-wide">
            🗺️ Recent Activity
          </h3>
          <ul className="space-y-4">
            {[
              { icon: "🏫", title: "Schools Touring NI", desc: "The project has visited primary schools across Northern Ireland, with recent sessions in Bangor and Dungannon." },
              { icon: "📚", title: "Interactive Learning", desc: "Children hear Hattie's story and learn why ventilation matters — fun, memorable, and practical." },
              { icon: "🎁", title: "Take-Home Books", desc: "Every pupil receives a physical copy of the Hattie the House book to share with their family." },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-foreground text-lg">{title}</p>
                  <p className="font-bold text-foreground/70">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Reporting & Support */}
        <div className="bg-foreground border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-black font-display text-secondary mb-2 uppercase tracking-wide">
            🛠️ Reporting &amp; Support
          </h3>
          <p className="text-white/70 font-bold mb-5 text-sm">
            NIHE tenants dealing with damp, mould, or condensation — help is available:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-2xl p-4 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-2xl">🔧</span>
              <p className="font-black text-white uppercase tracking-wide">Report a Repair</p>
              <ul className="space-y-1 text-sm font-bold text-white/80">
                <li>🌐 <a href="https://www.nihe.gov.uk/my-housing-executive" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">My Housing Executive portal</a></li>
                <li>📱 Text <span className="text-secondary">REPAIR</span> + address to <span className="text-secondary whitespace-nowrap">07507 302 011</span></li>
                <li>📞 Repairs line: <span className="text-secondary whitespace-nowrap">03448 920 901</span></li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-2xl">💡</span>
              <p className="font-black text-white uppercase tracking-wide">Energy &amp; Mould Advice</p>
              <ul className="space-y-1 text-sm font-bold text-white/80">
                <li><span className="text-secondary font-black">NI Energy Advice Service</span></li>
                <li>📞 <a href="tel:08001114455" className="text-secondary underline hover:text-white transition-colors">0800 111 4455</a></li>
                <li>✉️ <a href="mailto:NIEnergyadvice@nihe.gov.uk" className="underline hover:text-secondary transition-colors break-all">NIEnergyadvice@nihe.gov.uk</a></li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-2xl">📄</span>
              <p className="font-black text-white uppercase tracking-wide">Official Guidance</p>
              <p className="text-sm font-bold text-white/80">Download the official leaflet for full prevention steps.</p>
              <a href="https://www.nihe.gov.uk/documents/guides/dealing-with-damp-and-mould" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-secondary text-foreground font-black text-sm px-4 py-2 rounded-xl border-2 border-foreground hover:bg-yellow-300 transition-colors text-center">
                📥 Damp &amp; Mould Leaflet
              </a>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-primary border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-8 mb-6 transform rotate-1">
          <h3 className="text-2xl font-black font-display text-white mb-3 uppercase tracking-wide">
            🤝 Get Involved
          </h3>
          <p className="text-white/90 font-bold text-lg mb-3 leading-relaxed">
            Are you a <span className="text-secondary font-black">housing association</span> or <span className="text-secondary font-black">local authority</span> interested in piloting this initiative with your residents?
          </p>
          <p className="text-white/80 font-bold mb-4 leading-relaxed text-sm">
            M3 has complimentary Hattie the House books available* and would welcome the chance to collaborate — helping address damp and mould challenges whilst building stronger, more informed communities.
          </p>
          <a href="mailto:marketing@m3h.co.uk" className="inline-block bg-secondary text-foreground font-black text-base px-6 py-3 rounded-2xl border-4 border-foreground hover:bg-yellow-300 transition-colors comic-shadow">
            ✉️ Contact marketing@m3h.co.uk
          </a>
          <p className="mt-3 text-white/50 text-xs font-bold">*Number of copies per organisation is limited.</p>
        </div>

        {/* Video */}
        <div className="bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-8 transform -rotate-1">
          <h3 className="text-2xl font-black font-display text-amber-700 mb-4 uppercase tracking-wide">
            🎬 Watch Video Highlights
          </h3>
          <div className="aspect-video bg-amber-50 border-4 border-foreground rounded-2xl flex items-center justify-center text-center p-6">
            <div>
              <span className="text-6xl block mb-3">▶️</span>
              <p className="text-lg font-black text-foreground/40">Video coming soon</p>
              <p className="text-sm mt-1 text-foreground/30">Highlights from the Hattie the House school sessions</p>
            </div>
          </div>
          <p className="mt-5 text-center text-sm font-bold text-foreground/50 uppercase tracking-widest">
            With thanks to the <span className="text-foreground/70">Housing Executive</span> &amp; <span className="text-foreground/70">Business in the Community Northern Ireland</span>
          </p>
        </div>

      </div>
    </section>
  );
}
