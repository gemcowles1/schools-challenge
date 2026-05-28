import { NiheBadge } from "./NiheBadge";

export function HattieSection() {
  return (
    <section id="hattie" className="relative bg-amber-50 border-t-8 border-foreground overflow-hidden">
      <NiheBadge />

      {/* Subtle wallpaper pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #92400e 0px, #92400e 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #92400e 0px, #92400e 1px, transparent 1px, transparent 24px)",
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-4 border-2 border-foreground comic-shadow">
            <span>🏠</span> Housing Executive · Business in the Community · M3 Housing
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-display text-amber-700 drop-shadow-[4px_4px_0_hsl(var(--foreground))] mb-3">
            Hattie the House
          </h2>
          <p className="text-xl md:text-2xl font-bold text-foreground/70 max-w-2xl mx-auto">
            An educational storytelling project bringing healthy homes to life for primary school children across Northern Ireland.
          </p>
        </div>

        {/* Image row — placeholder slots */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-square rounded-2xl border-4 border-foreground comic-shadow bg-amber-100 flex flex-col items-center justify-center text-foreground/30 font-bold text-sm"
            >
              <span className="text-5xl mb-2">🏡</span>
              <span>Image {n}</span>
            </div>
          ))}
        </div>

        {/* Story card */}
        <div className="bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10 mb-8 transform -rotate-1">
          <h3 className="text-3xl font-black font-display text-amber-700 mb-4 uppercase tracking-wide">
            📖 The Story
          </h3>
          <div className="space-y-4 text-lg font-bold text-foreground/80 leading-relaxed">
            <p>
              <span className="text-amber-700 font-black">Hattie</span> is a young boy's talking house who becomes poorly during the winter months — feeling "sick" from damp, poor ventilation, and the buildup of moisture inside.
            </p>
            <p>
              With the help of a <span className="text-primary font-black">housing inspector</span>, Hattie is nursed back to health through basic repairs and better daily maintenance.
            </p>
            <p className="text-xl text-foreground font-black border-l-4 border-amber-400 pl-4">
              Just like people, homes require regular care, attention, and preventative maintenance to stay healthy. 🏠💚
            </p>
          </div>
        </div>

        {/* Practical lessons */}
        <div className="bg-amber-700 border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10 mb-8 transform rotate-1">
          <h3 className="text-3xl font-black font-display text-white mb-6 uppercase tracking-wide">
            🩺 Practical Lessons
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💧", title: "Managing Moisture", desc: "Use pot lids when cooking and avoid drying wet clothes on radiators." },
              { icon: "🌬️", title: "Air Circulation", desc: "Open windows and ensure air can flow freely through every room." },
              { icon: "🧹", title: "Keeping it Clear", desc: "Prevent clutter from blocking walls and vents." },
              { icon: "🔍", title: "Routine Checks", desc: "Look out for issues with roof tiles and keep guttering clear." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-4 border-2 border-white/20">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="font-black text-white text-lg uppercase tracking-wide">{title}</p>
                <p className="font-bold text-white/80 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10 transform -rotate-1">
          <h3 className="text-3xl font-black font-display text-primary mb-6 uppercase tracking-wide">
            🗺️ Recent Activity
          </h3>
          <ul className="space-y-4">
            {[
              { icon: "🏫", title: "Schools Toured", desc: "The project has been visiting primary schools across Northern Ireland, including recent sessions in Bangor and Dungannon." },
              { icon: "📚", title: "Interactive Learning", desc: "Children learn through Hattie's story — a talking house that gets sick in winter — making ventilation and home care memorable and fun." },
              { icon: "🎁", title: "Take-Home Packs", desc: "Every pupil receives a physical copy of the Hattie the House book to take home and share with their families." },
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

          <div className="mt-8 pt-6 border-t-2 border-foreground/10 text-center">
            <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">
              A partnership between
            </p>
            <p className="font-black text-foreground text-lg mt-1">
              🏠 Housing Executive · Business in the Community · M3 Housing
            </p>
          </div>
        </div>

        {/* Reporting & Support */}
        <div className="mt-8 bg-foreground border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10">
          <h3 className="text-3xl font-black font-display text-secondary mb-2 uppercase tracking-wide">
            🛠️ Reporting &amp; Support Resources
          </h3>
          <p className="text-white/70 font-bold mb-6">
            If you are an NIHE tenant currently dealing with damp, mould, or condensation issues in your home, help is available:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Report a Repair */}
            <div className="bg-white/10 rounded-2xl p-5 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-3xl">🔧</span>
              <p className="font-black text-white text-lg uppercase tracking-wide">Report a Repair</p>
              <ul className="space-y-2 text-sm font-bold text-white/80">
                <li>
                  🌐{" "}
                  <a
                    href="https://www.nihe.gov.uk/my-housing-executive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-secondary transition-colors"
                  >
                    My Housing Executive portal
                  </a>
                </li>
                <li>📱 Text <span className="text-secondary font-black">REPAIR</span> with your address to <span className="text-secondary font-black whitespace-nowrap">07507 302 011</span></li>
                <li>📞 Phone repairs line: <span className="text-secondary font-black whitespace-nowrap">03448 920 901</span></li>
              </ul>
            </div>

            {/* Energy & Mould Advice */}
            <div className="bg-white/10 rounded-2xl p-5 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-3xl">💡</span>
              <p className="font-black text-white text-lg uppercase tracking-wide">Energy &amp; Mould Advice</p>
              <ul className="space-y-2 text-sm font-bold text-white/80">
                <li>Expert advice on treating damp and managing heating from the <span className="text-secondary font-black">NI Energy Advice Service</span></li>
                <li>📞 <a href="tel:08001114455" className="text-secondary underline hover:text-white transition-colors font-black">0800 111 4455</a></li>
                <li>
                  ✉️{" "}
                  <a
                    href="mailto:NIEnergyadvice@nihe.gov.uk"
                    className="underline hover:text-secondary transition-colors break-all"
                  >
                    NIEnergyadvice@nihe.gov.uk
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Guidance */}
            <div className="bg-white/10 rounded-2xl p-5 border-2 border-white/20 flex flex-col gap-2">
              <span className="text-3xl">📄</span>
              <p className="font-black text-white text-lg uppercase tracking-wide">Official Guidance</p>
              <p className="text-sm font-bold text-white/80">
                Download the official leaflet for comprehensive prevention steps.
              </p>
              <a
                href="https://www.nihe.gov.uk/documents/guides/dealing-with-damp-and-mould"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-secondary text-foreground font-black text-sm px-4 py-2 rounded-xl border-2 border-foreground hover:bg-yellow-300 transition-colors text-center"
              >
                📥 Dealing with Damp &amp; Mould Leaflet
              </a>
            </div>
          </div>
        </div>

        {/* Get Involved CTA */}
        <div className="mt-8 bg-primary border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10 transform rotate-1">
          <h3 className="text-3xl font-black font-display text-white mb-3 uppercase tracking-wide">
            🤝 Get Involved
          </h3>
          <p className="text-white/90 font-bold text-lg mb-4 leading-relaxed">
            Are you a <span className="text-secondary font-black">housing association</span> or <span className="text-secondary font-black">local authority</span> interested in piloting this initiative with your residents?
          </p>
          <p className="text-white/80 font-bold mb-4 leading-relaxed">
            M3 has complimentary Hattie the House books available* and would welcome the opportunity to collaborate with you. This proven approach could help your organisation address damp and mould challenges whilst building stronger, more informed communities.
          </p>
          <a
            href="mailto:marketing@m3h.co.uk"
            className="inline-block bg-secondary text-foreground font-black text-base px-6 py-3 rounded-2xl border-4 border-foreground hover:bg-yellow-300 transition-colors comic-shadow"
          >
            ✉️ Contact marketing@m3h.co.uk
          </a>
          <p className="mt-4 text-white/50 text-xs font-bold">
            *Number of copies per organisation is limited.
          </p>
        </div>

        {/* Video highlights */}
        <div className="mt-8 bg-white border-4 border-foreground rounded-3xl comic-shadow p-6 md:p-10 transform -rotate-1">
          <h3 className="text-3xl font-black font-display text-amber-700 mb-4 uppercase tracking-wide">
            🎬 Watch Video Highlights
          </h3>
          <div className="aspect-video bg-amber-50 border-4 border-foreground rounded-2xl flex items-center justify-center text-foreground/30 font-bold text-center p-6">
            <div>
              <span className="text-6xl block mb-3">▶️</span>
              <p className="text-lg font-black text-foreground/40">Video coming soon</p>
              <p className="text-sm mt-1 text-foreground/30">Highlights from the Hattie the House school sessions</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t-2 border-foreground/10 text-center">
            <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-1">With thanks to</p>
            <p className="font-black text-foreground text-base">
              🏠 Housing Executive &amp; Business in the Community Northern Ireland
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
