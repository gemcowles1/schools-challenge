function openResource(html: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
}

const BASE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; color: #111; background: #fff; }
  .save-bar {
    background: #1a5c26; color: #fff; padding: 10px 20px;
    display: flex; align-items: center; justify-content: space-between;
    print-color-adjust: exact; -webkit-print-color-adjust: exact;
  }
  .save-bar span { font-size: 13px; }
  .save-btn {
    background: #fff; color: #1a5c26; border: none; padding: 6px 16px;
    font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer;
  }
  .page { padding: 24px 32px; max-width: 800px; margin: 0 auto; }
  .header {
    background: #1a5c26; color: #fff; padding: 14px 20px; border-radius: 6px;
    margin-bottom: 18px; print-color-adjust: exact; -webkit-print-color-adjust: exact;
  }
  .header h1 { font-size: 18px; margin-bottom: 2px; }
  .header p { font-size: 11px; color: #b2f0c0; }
  .info-row { display: flex; gap: 20px; margin-bottom: 18px; flex-wrap: wrap; }
  .info-field { display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 120px; }
  .info-field label { font-size: 10px; font-weight: bold; text-transform: uppercase; color: #555; }
  .info-field input, .info-field textarea {
    border: 1px solid #bbb; border-radius: 4px; padding: 5px 8px;
    font-size: 13px; font-family: Arial, sans-serif; width: 100%;
  }
  .question { margin-bottom: 16px; }
  .question-label {
    background: #edfbf0; border-left: 4px solid #1a5c26;
    padding: 6px 10px; font-size: 12px; font-weight: bold;
    color: #1a5c26; margin-bottom: 6px; border-radius: 0 4px 4px 0;
  }
  .answer-box {
    border: 1px solid #bbb; border-radius: 4px; padding: 6px 8px;
    font-size: 13px; font-family: Arial, sans-serif; width: 100%;
    resize: none;
  }
  .footer {
    margin-top: 24px; padding-top: 10px; border-top: 1px solid #ddd;
    font-size: 10px; color: #888; text-align: center;
  }
  @media print {
    .save-bar { display: none; }
    body { margin: 0; }
    .answer-box, input, textarea { border-color: #999 !important; }
  }
`;

function saveBar() {
  return `<div class="save-bar">
    <span>✅ This page is ready — fill it in here, or save it as a PDF to share.</span>
    <button class="save-btn" onclick="window.print()">💾 Save as PDF</button>
  </div>`;
}

function footer() {
  return `<div class="footer">Sponsored by NI Housing Executive / NIEAS · Eco-Schools Northern Ireland · Energy Challenge 2026</div>`;
}

// ── WORKSHEETS ───────────────────────────────────────────────────────────────

type AgeBand = "5-7" | "8-11" | "12-14";

const WORKSHEET_CONFIG: Record<AgeBand, {
  title: string; badge: string; questions: { label: string; lines: number }[];
}> = {
  "5-7": {
    title: "⭐ Energy Hero Worksheet — Ages 5–7",
    badge: "Foundation & Key Stage 1",
    questions: [
      { label: "1.  Draw or write something in your classroom that uses electricity:", lines: 4 },
      { label: "2.  Which should be switched OFF when no one is in the room? (write your answer):", lines: 2 },
      { label: "3.  Circle the best Eco-Hero action — Switch off the lights / Leave the lights on:", lines: 2 },
      { label: "4.  What will YOU do today to save energy? I will...", lines: 3 },
    ],
  },
  "8-11": {
    title: "🚀 Energy Saving Mission — Ages 8–11",
    badge: "Key Stage 2",
    questions: [
      { label: "1.  Name 3 things in your classroom that use energy:", lines: 3 },
      { label: "2.  Write one energy-saving action your class could take:", lines: 3 },
      { label: "3.  Estimate how much energy your school could save in a week by switching off lights:", lines: 3 },
      { label: "4.  Write a slogan to encourage your school to save energy:", lines: 2 },
      { label: "5.  Who is responsible for energy saving in your school?", lines: 2 },
    ],
  },
  "12-14": {
    title: "🔬 Energy Audit & Action Plan — Ages 12–14",
    badge: "Key Stage 3",
    questions: [
      { label: "1.  List the top 3 energy users in your school and estimate their annual cost:", lines: 4 },
      { label: "2.  What data would you collect to conduct a full energy audit?", lines: 4 },
      { label: "3.  Propose ONE realistic action your Eco-Committee could implement this term:", lines: 3 },
      { label: "4.  What is the estimated CO₂ saving of your proposed action? Show your working:", lines: 4 },
      { label: "5.  Who are the stakeholders you need to persuade? How would you do it?", lines: 3 },
    ],
  },
};

export function downloadWorksheet(age: AgeBand): Promise<void> {
  const cfg = WORKSHEET_CONFIG[age];
  const questions = cfg.questions.map(q => `
    <div class="question">
      <div class="question-label">${q.label}</div>
      <textarea class="answer-box" rows="${q.lines}" placeholder="Write your answer here…"></textarea>
    </div>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>${cfg.title}</title>
    <style>${BASE_CSS}</style></head><body>
    ${saveBar()}
    <div class="page">
      <div class="header">
        <h1>${cfg.title}</h1>
        <p>Eco-Schools NI — Energy Challenge 2026 · ${cfg.badge}</p>
      </div>
      <div class="info-row">
        <div class="info-field"><label>Name</label><input type="text" placeholder="Pupil name"/></div>
        <div class="info-field"><label>Class</label><input type="text" placeholder="Class"/></div>
        <div class="info-field"><label>Date</label><input type="date"/></div>
      </div>
      ${questions}
      ${footer()}
    </div></body></html>`);
  return Promise.resolve();
}

// ── CERTIFICATE ──────────────────────────────────────────────────────────────

export function downloadCertificate(): Promise<void> {
  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Eco-Hero Certificate</title>
    <style>${BASE_CSS}
      .cert { border: 6px solid #1a5c26; border-radius: 12px; padding: 36px; max-width: 680px; margin: 24px auto; text-align: center; }
      .cert-header { background: #1a5c26; color: #fff; padding: 20px; border-radius: 6px; margin-bottom: 28px; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      .cert-header .stars { font-size: 24px; margin-bottom: 6px; }
      .cert-header h1 { font-size: 28px; }
      .cert-header p { font-size: 11px; color: #b2f0c0; }
      .cert-field { display: flex; flex-direction: column; align-items: center; gap: 4px; margin: 16px auto; max-width: 400px; }
      .cert-field label { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #555; }
      .cert-field input { border: none; border-bottom: 2px solid #1a5c26; width: 100%; text-align: center; font-size: 20px; font-weight: bold; padding: 6px; outline: none; color: #1a5c26; }
      .cert-body { font-size: 14px; font-style: italic; color: #444; margin: 8px 0; }
      .cert-challenge { font-weight: bold; color: #1a5c26; font-size: 15px; margin: 14px 0; }
      .laptops { font-size: 28px; margin: 16px 0; }
      .sig-row { display: flex; gap: 20px; margin-top: 28px; }
      .sig-field { flex: 1; display: flex; flex-direction: column; gap: 4px; }
      .sig-field label { font-size: 10px; font-weight: bold; text-transform: uppercase; color: #888; }
      .sig-field input { border: none; border-bottom: 1px solid #aaa; padding: 4px; font-size: 13px; width: 100%; outline: none; }
    </style></head><body>
    ${saveBar()}
    <div class="page">
      <div class="cert">
        <div class="cert-header">
          <div class="stars">★  ★  ★</div>
          <p>Eco-Schools Northern Ireland</p>
          <h1>Eco-Hero Certificate</h1>
        </div>
        <p class="cert-body">This certifies that</p>
        <div class="cert-field">
          <input type="text" placeholder="Pupil's full name"/>
          <label>Pupil Name</label>
        </div>
        <p class="cert-body">has shown outstanding commitment to energy saving at</p>
        <div class="cert-field">
          <input type="text" placeholder="School name"/>
          <label>School Name</label>
        </div>
        <p class="cert-challenge">as part of the NI Schools Energy Challenge 2026</p>
        <div class="laptops">💻  💻  💻  💻  💻</div>
        <div class="sig-row">
          <div class="sig-field">
            <input type="text" placeholder="Teacher signature"/>
            <label>Teacher Signature</label>
          </div>
          <div class="sig-field">
            <input type="date"/>
            <label>Date</label>
          </div>
        </div>
      </div>
      ${footer()}
    </div></body></html>`);
  return Promise.resolve();
}

// ── ASSEMBLY SLIDES ──────────────────────────────────────────────────────────

const SLIDES = [
  { title: "Our School Eco-Heroes", emoji: "🌿", bullets: ["Welcome to the NI Schools Energy Challenge 2026", "Sponsored by NI Housing Executive & NIEAS", "💻 5 Laptops to Win for 5 Schools!", "⭐ Points towards your Eco-Schools Green Flag", "🎟 Free competition entry"] },
  { title: "Why Does Energy Matter?", emoji: "⚡", bullets: ["Schools in NI spend £millions on energy every year", "68% of NI homes use oil — the highest rate in the UK", "Energy use creates CO₂ — heating our planet", "Simple actions can cut school energy bills by 10–20%", "That money could fund books, trips & equipment!"] },
  { title: "The Challenge", emoji: "🎯", bullets: ['Write a Mission Statement for your Eco-Committee:', '"We are [School] and we pledge to [action]', 'so that we can [outcome] by [date]."', "Submit at eco-energy-challenge.replit.app"] },
  { title: "What You Can Win", emoji: "🏆", bullets: ["💻 💻 💻 💻 💻", "5 Laptops — one per winning school Eco-Committee", "⭐ Points towards your Eco-Schools Green Flag", "🎟 Free entry to the Energy Challenge competition", "📣 Your school featured as an Eco Champion!"] },
  { title: "What To Do Next", emoji: "🚀", bullets: ["1. Talk to your Eco-Committee", "2. Choose your energy-saving action", "3. Pick your age group on the website", "4. Write your Mission Statement online", "5. Submit before the deadline", "6. Start saving energy — right now!"] },
];

export function downloadAssemblySlides(): Promise<void> {
  const slides = SLIDES.map((slide, i) => `
    <div class="slide" style="${i > 0 ? "page-break-before:always;" : ""}">
      <div class="slide-header">
        <span class="slide-emoji">${slide.emoji}</span>
        <div>
          <div class="slide-title">${slide.title}</div>
          <div class="slide-sub">NI Schools Energy Challenge 2026 · Eco-Schools Northern Ireland</div>
        </div>
        <span class="slide-num">${i + 1} / ${SLIDES.length}</span>
      </div>
      <div class="slide-body">
        ${slide.bullets.map(b => `<div class="bullet ${b.startsWith("💻") ? "highlight" : ""}">${b}</div>`).join("")}
      </div>
    </div>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Assembly Slides — Eco-Heroes Energy Challenge</title>
    <style>${BASE_CSS}
      .slide { border: 3px solid #1a5c26; border-radius: 8px; margin: 24px auto; max-width: 760px; overflow: hidden; background: #f4fff6; }
      .slide-header { background: #1a5c26; color: #fff; padding: 18px 20px; display: flex; align-items: center; gap: 16px; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      .slide-emoji { font-size: 36px; }
      .slide-title { font-size: 22px; font-weight: bold; }
      .slide-sub { font-size: 10px; color: #b2f0c0; }
      .slide-num { margin-left: auto; font-size: 12px; color: #b2f0c0; white-space: nowrap; }
      .slide-body { padding: 20px 24px; }
      .bullet { font-size: 16px; padding: 8px 12px; margin-bottom: 6px; border-radius: 4px; }
      .bullet.highlight { background: #fffde0; font-weight: bold; font-size: 18px; }
    </style></head><body>
    ${saveBar()}
    <div class="page">${slides}${footer()}</div>
    </body></html>`);
  return Promise.resolve();
}

// ── CLASS TRACKER ────────────────────────────────────────────────────────────

export function downloadClassTracker(): Promise<void> {
  const rows = Array.from({ length: 12 }, (_, i) => `
    <tr style="background:${i % 2 === 0 ? "#f4fff6" : "#fff"}">
      <td><input type="text" placeholder="Pupil ${i + 1} name" style="width:100%;border:none;border-bottom:1px solid #ccc;padding:3px;font-size:12px;outline:none;"/></td>
      ${["Mon","Tue","Wed","Thu","Fri"].map(d => `<td style="text-align:center"><input type="checkbox" title="${d}"/></td>`).join("")}
    </tr>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Class Eco Tracker</title>
    <style>${BASE_CSS}
      table { width: 100%; border-collapse: collapse; margin-top: 14px; }
      th { background: #1a5c26; color: #fff; padding: 8px 10px; font-size: 12px; text-align: center; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      th:first-child { text-align: left; }
      td { padding: 6px 10px; border-bottom: 1px solid #e0e0e0; font-size: 12px; }
      .meta { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 14px; }
      .meta-field { display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 120px; }
      .meta-field label { font-size: 10px; font-weight: bold; text-transform: uppercase; color: #555; }
      .meta-field input { border: 1px solid #bbb; border-radius: 4px; padding: 4px 8px; font-size: 12px; width: 100%; }
      .bottom-row { display: flex; gap: 16px; margin-top: 16px; }
      .bottom-box { flex: 1; border: 1px solid #1a5c26; border-radius: 6px; padding: 10px; background: #f4fff6; }
      .bottom-box label { font-size: 10px; font-weight: bold; text-transform: uppercase; color: #1a5c26; display: block; margin-bottom: 4px; }
      .bottom-box textarea { width: 100%; border: none; background: transparent; font-size: 12px; font-family: Arial; resize: none; outline: none; }
    </style></head><body>
    ${saveBar()}
    <div class="page">
      <div class="header">
        <h1>📋 Class Eco Tracker — Weekly Energy-Saving Habits</h1>
        <p>NI Schools Energy Challenge 2026</p>
      </div>
      <div class="meta">
        <div class="meta-field"><label>Class</label><input type="text" placeholder="e.g. 6B"/></div>
        <div class="meta-field"><label>Teacher</label><input type="text" placeholder="Teacher name"/></div>
        <div class="meta-field"><label>Week beginning</label><input type="date"/></div>
      </div>
      <table>
        <thead><tr>
          <th style="width:40%">Pupil Name</th>
          <th>Mon ✓</th><th>Tue ✓</th><th>Wed ✓</th><th>Thu ✓</th><th>Fri ✓</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="bottom-row">
        <div class="bottom-box">
          <label>Our Class Mission Statement</label>
          <textarea rows="3" placeholder="We are … and we pledge to …"></textarea>
        </div>
        <div class="bottom-box">
          <label>Teacher Notes</label>
          <textarea rows="3" placeholder="Notes for next week…"></textarea>
        </div>
      </div>
      ${footer()}
    </div></body></html>`);
  return Promise.resolve();
}
