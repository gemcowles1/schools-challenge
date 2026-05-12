import { NiheBadge } from "./NiheBadge";

function openPrintWindow(title: string, html: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(`<!DOCTYPE html><html><head>
    <title>${title}</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: Arial, sans-serif; background: #f0faf0; color: #1a1a1a; }
      .page { max-width: 700px; margin: 0 auto; padding: 40px 40px; background: white; min-height: 100vh; }
      h1 { color: #1a5c26; font-size: 2rem; margin-bottom: 6px; }
      h2 { color: #1a5c26; font-size: 1.3rem; margin: 24px 0 10px; border-bottom: 2px solid #d4edda; padding-bottom: 6px; }
      h3 { color: #333; font-size: 1.1rem; margin: 16px 0 6px; }
      p { color: #444; line-height: 1.7; margin-bottom: 10px; }
      .badge { display:inline-block; background:#d4edda; color:#1a5c26; font-weight:bold; font-size:.8rem; padding:2px 10px; border-radius:20px; margin-bottom:12px; }
      .header { display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #1a5c26; padding-bottom:16px; margin-bottom:24px; }
      .header-text h1 { font-size:1.6rem; }
      .sub { color:#888; font-size:.9rem; }
      table { width:100%; border-collapse:collapse; margin:12px 0 20px; font-size:.95rem; }
      th { background:#1a5c26; color:white; padding:8px 10px; text-align:left; }
      td { border:1px solid #ccc; padding:8px 10px; vertical-align:top; }
      tr:nth-child(even) td { background:#f9fff9; }
      .box { border:2px solid #1a5c26; border-radius:8px; padding:14px 18px; margin:14px 0; background:#f9fff9; }
      .cert { text-align:center; border:6px solid #1a5c26; border-radius:16px; padding:50px 40px; margin:20px 0; }
      .cert h1 { font-size:2.5rem; color:#1a5c26; margin-bottom:8px; }
      .cert .name-line { border-bottom:2px solid #333; width:70%; margin:20px auto; min-height:40px; }
      .cert .sig-line { border-bottom:2px solid #333; width:40%; margin:10px auto; min-height:30px; }
      .stars { font-size:2rem; letter-spacing:4px; margin:10px 0; }
      .slide { border:3px solid #1a5c26; border-radius:12px; padding:30px; margin:20px 0; min-height:180px; position:relative; }
      .slide-num { position:absolute; top:10px; right:16px; color:#aaa; font-size:.85rem; font-weight:bold; }
      .slide h2 { margin-top:0; border:none; }
      .tracker-grid { display:grid; grid-template-columns:2fr repeat(5,1fr); gap:0; border:2px solid #333; }
      .tracker-grid > div { border:1px solid #ccc; padding:8px; font-size:.85rem; }
      .tracker-header { background:#1a5c26; color:white; font-weight:bold; }
      .footer { margin-top:40px; padding-top:16px; border-top:2px solid #eee; color:#aaa; font-size:.8rem; text-align:center; }
      @media print {
        body { background:white; }
        .page { padding: 20px; }
        .no-print { display: none; }
      }
    </style>
    <script>window.onload=function(){setTimeout(function(){window.print();},300);}</script>
  </head><body><div class="page">${html}</div></body></html>`);
  w.document.close();
}

function printWorksheet(age: "5-7" | "8-11" | "12-14") {
  const configs = {
    "5-7": {
      title: "Energy Hero Worksheet — Ages 5–7",
      badge: "⭐ Ages 5–7 · Foundation & KS1",
      tasks: [
        ["Draw a picture of something in your classroom that uses electricity.", ""],
        ["Colour in the light bulbs that should be switched OFF when no one is in the room.", ""],
        ["Circle the best Eco-Hero action:", "Switch off the lights / Leave the lights on / Turn up the heating"],
        ["What will YOU do today to save energy?", "I will ___________________________________________"],
      ],
    },
    "8-11": {
      title: "Energy Saving Mission Worksheet — Ages 8–11",
      badge: "🚀 Ages 8–11 · Key Stage 2",
      tasks: [
        ["Name 3 things in your classroom that use energy:", "1. _________ 2. _________ 3. _________"],
        ["Write one energy-saving action your class could take:", "We will ___________________________________________"],
        ["How much energy could your school save in a week if everyone switched off lights?", "Estimate: _____ kWh"],
        ["Write a slogan to encourage your school to save energy:", ""],
        ["Who is responsible for energy saving in your school?", ""],
      ],
    },
    "12-14": {
      title: "Energy Audit & Action Plan — Ages 12–14",
      badge: "🔬 Ages 12–14 · Key Stage 3",
      tasks: [
        ["List the top 3 energy users in your school and estimate their annual cost:", "1.\n2.\n3."],
        ["What data would you collect to conduct a full energy audit?", ""],
        ["Propose ONE realistic action your school Eco-Committee could implement this term:", ""],
        ["What is the estimated CO₂ saving of your proposed action? Show your working:", ""],
        ["Who are the stakeholders you need to persuade? How would you do it?", ""],
      ],
    },
  };

  const c = configs[age];
  const rows = c.tasks.map(([q, hint], i) => `
    <h3>${i + 1}. ${q}</h3>
    ${hint ? `<p style="color:#888;font-size:.9rem;margin-bottom:4px;">${hint}</p>` : ""}
    <div style="border:1px solid #ccc;border-radius:6px;min-height:70px;margin-bottom:4px;padding:8px;">&nbsp;</div>
  `).join("");

  openPrintWindow(c.title, `
    <div class="header">
      <div class="header-text">
        <h1>🌿 ${c.title}</h1>
        <p class="sub">Eco-Schools NI — Energy Challenge 2026</p>
      </div>
    </div>
    <div class="badge">${c.badge}</div>
    <p><strong>Name:</strong> _________________________ &nbsp;&nbsp; <strong>Class:</strong> _____________ &nbsp;&nbsp; <strong>Date:</strong> _____________</p>
    ${rows}
    <div class="footer">Sponsored by NI Housing Executive / NIEAS · Green Flag Energy Challenge · Northern Ireland Schools</div>
  `);
}

function printCertificate() {
  openPrintWindow("Eco-Hero Certificate", `
    <div class="cert">
      <div class="stars">🌿⭐🌿</div>
      <p style="color:#888;text-transform:uppercase;letter-spacing:2px;font-size:.85rem;margin-bottom:8px;">Eco-Schools Northern Ireland</p>
      <h1>Eco-Hero Certificate</h1>
      <p style="font-size:1.1rem;color:#555;margin:12px 0 4px;">This certifies that</p>
      <div class="name-line"></div>
      <p style="font-size:1rem;color:#555;margin:12px 0 4px;">has shown outstanding commitment to energy saving at</p>
      <div class="name-line"></div>
      <p style="font-size:1rem;color:#555;margin:16px 0 4px;">as part of the <strong>Schools Energy Challenge 2026</strong></p>
      <div class="stars" style="margin:20px 0;">💻🏆💻</div>
      <div style="display:flex;justify-content:space-around;margin-top:30px;">
        <div style="text-align:center;">
          <div class="sig-line"></div>
          <p style="font-size:.8rem;color:#888;margin-top:6px;">Teacher Signature</p>
        </div>
        <div style="text-align:center;">
          <div class="sig-line"></div>
          <p style="font-size:.8rem;color:#888;margin-top:6px;">Date</p>
        </div>
      </div>
    </div>
    <div class="footer">Sponsored by NI Housing Executive / NIEAS Energy Awareness Programme</div>
  `);
}

function printAssemblySlides() {
  const slides = [
    { title: "🌿 Our School Eco-Heroes", body: `<p>Welcome to the <strong>NI Schools Energy Challenge 2026</strong></p><p>Sponsored by NI Housing Executive &amp; NIEAS</p><p style="margin-top:16px;font-size:1.2rem;"><strong>💻 5 Laptops to Win for 5 Schools!</strong></p>` },
    { title: "⚡ Why Does Energy Matter?", body: `<ul style="line-height:2.2;font-size:1.05rem;"><li>Schools in NI spend <strong>£millions</strong> on energy every year</li><li>Energy use creates CO₂ — heating our planet</li><li>Simple actions can cut school bills by <strong>10–20%</strong></li><li>That money could fund books, trips &amp; equipment!</li></ul>` },
    { title: "🎯 The Challenge", body: `<p>Write a Mission Statement for your school Eco-Committee:</p><div style="background:#d4edda;border-left:4px solid #1a5c26;padding:12px 16px;margin:12px 0;border-radius:4px;font-style:italic;">"We are [School] and we pledge to [action] so that we can [outcome] by [date]."</div><p>Submit it at <strong>eco-energy-challenge.replit.app</strong></p>` },
    { title: "🏆 What You Can Win", body: `<p style="font-size:2rem;text-align:center;margin:10px 0;">💻 💻 💻 💻 💻</p><p style="text-align:center;font-size:1.2rem;"><strong>5 Laptops for 5 winning school Eco-Committees</strong></p><ul style="margin-top:12px;line-height:2.2;"><li>⭐ Points towards your Eco-Schools Green Flag</li><li>🎟️ Free entry to the Energy Challenge competition</li><li>📣 Your school featured as an Eco Champion!</li></ul>` },
    { title: "🚀 What To Do Next", body: `<ol style="line-height:2.5;font-size:1.05rem;"><li>Talk to your <strong>Eco-Committee</strong></li><li>Choose your <strong>energy-saving action</strong></li><li>Write your <strong>Mission Statement</strong> online</li><li>Submit before the <strong>deadline</strong></li><li>Start saving energy — <strong>right now!</strong></li></ol>` },
  ];

  const html = slides.map((s, i) => `
    <div class="slide">
      <div class="slide-num">Slide ${i + 1} / ${slides.length}</div>
      <h2>${s.title}</h2>
      ${s.body}
    </div>
  `).join("");

  openPrintWindow("Assembly Slides — Eco-Schools Energy Challenge", `
    <div class="header">
      <div class="header-text">
        <h1>📽️ Assembly Slides</h1>
        <p class="sub">NI Schools Energy Challenge 2026 · Print &amp; display or use as a guide</p>
      </div>
    </div>
    ${html}
    <div class="footer">Sponsored by NI Housing Executive / NIEAS · Green Flag Energy Challenge</div>
  `);
}

function printClassTracker() {
  const rows = Array.from({ length: 10 }, (_, i) => `
    <div>${i + 1}. ________________________________</div>
    <div style="text-align:center;">☐</div>
    <div style="text-align:center;">☐</div>
    <div style="text-align:center;">☐</div>
    <div style="text-align:center;">☐</div>
    <div style="text-align:center;">☐</div>
  `).join("");

  openPrintWindow("Class Eco Tracker", `
    <div class="header">
      <div class="header-text">
        <h1>📋 Class Eco Tracker</h1>
        <p class="sub">NI Schools Energy Challenge 2026</p>
      </div>
    </div>
    <p><strong>Class:</strong> ___________________ &nbsp;&nbsp; <strong>Teacher:</strong> ___________________ &nbsp;&nbsp; <strong>Term:</strong> ___________</p>
    <h2>Weekly Energy-Saving Habits</h2>
    <div class="tracker-grid">
      <div class="tracker-header">Pupil Name</div>
      <div class="tracker-header">Mon</div>
      <div class="tracker-header">Tue</div>
      <div class="tracker-header">Wed</div>
      <div class="tracker-header">Thu</div>
      <div class="tracker-header">Fri</div>
      ${rows}
    </div>
    <h2 style="margin-top:24px;">Our Class Mission Statement</h2>
    <div class="box" style="min-height:80px;"></div>
    <h2>Actions Completed This Week</h2>
    <div class="box" style="min-height:60px;"></div>
    <div class="footer">Sponsored by NI Housing Executive / NIEAS · Green Flag Energy Challenge · Northern Ireland Schools</div>
  `);
}

export function TeacherPacksSection() {
  return (
    <section className="pb-20 bg-green-50 relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-3">
            📦 TEACHER PACKS
          </h2>
          <p className="text-xl font-bold text-foreground/70">
            Free printable resources for your classroom — ready to go
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Worksheets */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📄</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-2">Pupil Worksheets</h3>
            <p className="text-foreground/70 font-medium mb-5">Differentiated for each age group — print and hand out in class.</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => printWorksheet("5-7")}
                className="bg-yellow-100 border-4 border-yellow-400 font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-left text-sm">
                ⭐ Ages 5–7 Worksheet (Foundation / KS1)
              </button>
              <button onClick={() => printWorksheet("8-11")}
                className="bg-green-100 border-4 border-primary font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-left text-sm">
                🚀 Ages 8–11 Worksheet (KS2)
              </button>
              <button onClick={() => printWorksheet("12-14")}
                className="bg-blue-100 border-4 border-blue-500 font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-left text-sm">
                🔬 Ages 12–14 Energy Audit Sheet (KS3)
              </button>
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-2">Printable Certificates</h3>
            <p className="text-foreground/70 font-medium mb-5">Recognise your Eco-Heroes with an official-looking certificate — just fill in their name and sign.</p>
            <button onClick={printCertificate}
              className="w-full bg-yellow-100 border-4 border-yellow-400 font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-sm">
              🖨️ Print Eco-Hero Certificate
            </button>
          </div>

          {/* Assembly Slides */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📽️</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-2">Assembly Slides</h3>
            <p className="text-foreground/70 font-medium mb-5">5 ready-made slides covering why energy matters, the challenge, prizes and next steps. Print as a guide or display on screen.</p>
            <button onClick={printAssemblySlides}
              className="w-full bg-blue-100 border-4 border-blue-400 font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-sm">
              🖨️ Print Assembly Slides
            </button>
          </div>

          {/* Class Tracker */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📋</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-2">Class Tracker Sheet</h3>
            <p className="text-foreground/70 font-medium mb-5">A weekly tracker for up to 10 pupils — record who's keeping their energy-saving pledge each day, plus a space for the class mission statement.</p>
            <button onClick={printClassTracker}
              className="w-full bg-green-100 border-4 border-primary font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-sm">
              🖨️ Print Class Tracker Sheet
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
