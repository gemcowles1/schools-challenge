/* Competition brand colours (matching index.css) */
const GREEN  = "#25a244";   /* primary  hsl(142,71%,45%) */
const NAVY   = "#0f1f3d";   /* foreground hsl(222,47%,11%) */
const YELLOW = "#f5a800";   /* secondary hsl(45,93%,47%) */
const LGREY  = "#f0fdf4";   /* light green tint */

function logoUrl(file: string) {
  return `${window.location.origin}${import.meta.env.BASE_URL}${file}`;
}

function openResource(html: string) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
}

/* ── Shared CSS ─────────────────────────────────────────────────────────────*/
const BASE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; color: ${NAVY}; background: #fff; }

  /* Save bar */
  .save-bar {
    background: ${NAVY}; color: #fff; padding: 10px 20px;
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    print-color-adjust: exact; -webkit-print-color-adjust: exact;
  }
  .save-bar span { font-size: 12px; }
  .save-btn {
    background: ${YELLOW}; color: ${NAVY}; border: none; padding: 6px 18px;
    font-weight: 900; font-size: 13px; border-radius: 4px; cursor: pointer;
    white-space: nowrap; flex-shrink: 0;
  }

  /* Logo header */
  .logo-bar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 24px; border-bottom: 3px solid ${GREEN};
    background: #fff;
    print-color-adjust: exact; -webkit-print-color-adjust: exact;
  }
  .logo-bar img { height: 52px; width: auto; object-fit: contain; }
  .logo-bar .centre { text-align: center; flex: 1; }
  .logo-bar .centre h2 { font-size: 13px; font-weight: 900; color: ${NAVY}; letter-spacing: 1px; text-transform: uppercase; }
  .logo-bar .centre p  { font-size: 10px; color: ${GREEN}; font-weight: bold; }

  /* Section header */
  .section-header {
    background: ${GREEN}; color: #fff; padding: 12px 24px;
    print-color-adjust: exact; -webkit-print-color-adjust: exact;
  }
  .section-header h1 { font-size: 17px; font-weight: 900; }
  .section-header p  { font-size: 10px; color: #b2f0c0; margin-top: 2px; }

  .page { padding: 20px 24px 24px; max-width: 820px; margin: 0 auto; }

  /* Form rows */
  .info-row { display: flex; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
  .info-field { display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 110px; }
  .info-field label { font-size: 9px; font-weight: bold; text-transform: uppercase; color: #555; }
  .info-field input, .info-field textarea {
    border: 1.5px solid #bbb; border-radius: 4px; padding: 5px 8px;
    font-size: 12px; font-family: Arial; width: 100%; outline: none;
    accent-color: ${GREEN};
  }
  .info-field input:focus, .info-field textarea:focus { border-color: ${GREEN}; }

  /* Questions */
  .question { margin-bottom: 14px; }
  .q-label {
    background: ${LGREY}; border-left: 4px solid ${GREEN};
    padding: 5px 10px; font-size: 11px; font-weight: bold; color: ${NAVY};
    margin-bottom: 5px; border-radius: 0 4px 4px 0;
  }
  .answer-box {
    border: 1.5px solid #bbb; border-radius: 4px; padding: 6px 8px;
    font-size: 12px; font-family: Arial; width: 100%; resize: none; outline: none;
  }
  .answer-box:focus { border-color: ${GREEN}; }

  /* Footer */
  .page-footer {
    margin-top: 20px; padding-top: 10px; border-top: 2px solid ${GREEN};
    font-size: 9px; color: #888; text-align: center;
  }

  @media print {
    .save-bar { display: none; }
    body { margin: 0; }
    .answer-box, input, textarea { border-color: #999 !important; }
  }
`;

function logoBar(subtitle = "") {
  return `
  <div class="logo-bar">
    <img src="${logoUrl("nihe-logo.jpg")}" alt="NI Housing Executive" />
    <div class="centre">
      <h2>NI Schools Energy Challenge 2026</h2>
      <p>${subtitle || "Sponsored by NI Housing Executive / NIEAS"}</p>
    </div>
    <img src="${logoUrl("niseeap-logo.jpg")}" alt="NI Schools Energy Efficiency Awareness Programme" />
  </div>`;
}

function saveBar() {
  return `<div class="save-bar">
    <span>✅ Fill in on-screen, then click Save as PDF to keep a copy.</span>
    <button class="save-btn" onclick="window.print()">💾 Save as PDF</button>
  </div>`;
}

function pageFooter() {
  return `<div class="page-footer">
    Sponsored by NI Housing Executive / NIEAS Energy Awareness Programme · Eco-Schools Northern Ireland · eco-energy-challenge.replit.app
  </div>`;
}

/* ── WORKSHEETS ─────────────────────────────────────────────────────────────*/
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
      <div class="q-label">${q.label}</div>
      <textarea class="answer-box" rows="${q.lines}" placeholder="Write your answer here…"></textarea>
    </div>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>${cfg.title}</title>
    <style>${BASE_CSS}</style></head><body>
    ${saveBar()}
    ${logoBar(cfg.badge)}
    <div class="section-header">
      <h1>${cfg.title}</h1>
      <p>Eco-Schools Northern Ireland — Energy Challenge 2026</p>
    </div>
    <div class="page">
      <div class="info-row">
        <div class="info-field"><label>Pupil Name</label><input type="text" placeholder="Full name"/></div>
        <div class="info-field"><label>Class</label><input type="text" placeholder="e.g. P5B"/></div>
        <div class="info-field"><label>School</label><input type="text" placeholder="School name"/></div>
        <div class="info-field"><label>Date</label><input type="date"/></div>
      </div>
      ${questions}
      ${pageFooter()}
    </div></body></html>`);
  return Promise.resolve();
}

/* ── CERTIFICATE ─────────────────────────────────────────────────────────────*/
export function downloadCertificate(): Promise<void> {
  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Eco-Hero Certificate</title>
    <style>${BASE_CSS}
      .cert-wrap { max-width: 680px; margin: 20px auto; border: 6px solid ${GREEN}; border-radius: 12px; overflow: hidden; }
      .cert-body  { padding: 28px 36px; text-align: center; }
      .stars      { font-size: 26px; color: ${YELLOW}; margin-bottom: 6px; letter-spacing: 8px; }
      .cert-title { font-size: 30px; font-weight: 900; color: ${NAVY}; margin-bottom: 4px; }
      .cert-sub   { font-size: 12px; color: ${GREEN}; font-weight: bold; margin-bottom: 24px; }
      .certifies  { font-size: 13px; font-style: italic; color: #555; margin-bottom: 8px; }
      .cert-name-field { border: none; border-bottom: 2.5px solid ${GREEN}; width: 80%; text-align: center;
        font-size: 22px; font-weight: 900; color: ${GREEN}; padding: 6px; outline: none; margin: 0 auto 6px; display: block; }
      .cert-label { font-size: 9px; text-transform: uppercase; color: #aaa; font-weight: bold; margin-bottom: 16px; }
      .cert-mid   { font-size: 13px; font-style: italic; color: #555; margin-bottom: 8px; }
      .cert-challenge { font-size: 14px; font-weight: 900; color: ${NAVY}; margin: 16px 0; }
      .cert-challenge span { color: ${GREEN}; }
      .laptops    { font-size: 30px; letter-spacing: 4px; margin: 12px 0; }
      .sig-row    { display: flex; gap: 24px; margin-top: 28px; border-top: 1px solid #eee; padding-top: 20px; }
      .sig-field  { flex: 1; display: flex; flex-direction: column; gap: 4px; text-align: left; }
      .sig-field label { font-size: 9px; text-transform: uppercase; color: #aaa; font-weight: bold; }
      .sig-field input { border: none; border-bottom: 1.5px solid #bbb; padding: 4px; font-size: 13px; width: 100%; outline: none; }
      .sig-field input:focus { border-color: ${GREEN}; }
      .yellow-band { background: ${YELLOW}; padding: 8px 24px; text-align: center;
        font-size: 11px; font-weight: 900; color: ${NAVY}; letter-spacing: 1px;
        print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    </style></head><body>
    ${saveBar()}
    ${logoBar("Eco-Hero Award Certificate")}
    <div class="page">
      <div class="cert-wrap">
        <div class="yellow-band">⭐ &nbsp; NI SCHOOLS ENERGY CHALLENGE 2026 &nbsp; ⭐</div>
        <div class="cert-body">
          <div class="stars">★ &nbsp; ★ &nbsp; ★</div>
          <div class="cert-title">Eco-Hero Certificate</div>
          <div class="cert-sub">Eco-Schools Northern Ireland</div>
          <p class="certifies">This certifies that</p>
          <input type="text" class="cert-name-field" placeholder="Pupil's full name"/>
          <div class="cert-label">Pupil Name</div>
          <p class="cert-mid">has shown outstanding commitment to energy saving at</p>
          <input type="text" class="cert-name-field" placeholder="School name"/>
          <div class="cert-label">School Name</div>
          <p class="cert-challenge">as part of the <span>NI Schools Energy Challenge 2026</span></p>
          <div class="laptops">💻 💻 💻 💻 💻</div>
          <div class="sig-row">
            <div class="sig-field">
              <label>Teacher Signature</label>
              <input type="text" placeholder="Signature"/>
            </div>
            <div class="sig-field">
              <label>Date Awarded</label>
              <input type="date"/>
            </div>
          </div>
        </div>
      </div>
      ${pageFooter()}
    </div></body></html>`);
  return Promise.resolve();
}

/* ── ASSEMBLY SLIDES ─────────────────────────────────────────────────────────*/
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
        <div class="slide-title-wrap">
          <div class="slide-title">${slide.title}</div>
          <div class="slide-sub">NI Schools Energy Challenge 2026 · Eco-Schools Northern Ireland</div>
        </div>
        <span class="slide-num">${i + 1} / ${SLIDES.length}</span>
      </div>
      <div class="slide-body">
        ${slide.bullets.map(b => `<div class="bullet ${b.startsWith("💻") ? "hi" : b.startsWith('"') || b.startsWith("so") ? "quote" : ""}">${b}</div>`).join("")}
      </div>
    </div>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Assembly Slides — NI Schools Energy Challenge 2026</title>
    <style>${BASE_CSS}
      .slide { border: 4px solid ${NAVY}; border-radius: 10px; margin: 24px auto; max-width: 780px; overflow: hidden; background: #fff; box-shadow: 4px 4px 0 ${GREEN}; }
      .slide-header { background: ${NAVY}; color: #fff; padding: 18px 24px; display: flex; align-items: center; gap: 16px;
        print-color-adjust: exact; -webkit-print-color-adjust: exact; border-bottom: 5px solid ${GREEN}; }
      .slide-emoji  { font-size: 40px; flex-shrink: 0; }
      .slide-title  { font-size: 24px; font-weight: 900; color: ${YELLOW}; letter-spacing: 0.5px; }
      .slide-sub    { font-size: 11px; color: #7ec8e3; margin-top: 3px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
      .slide-num    { margin-left: auto; font-size: 12px; color: ${YELLOW}; white-space: nowrap; flex-shrink: 0; font-weight: bold; }
      .slide-body   { padding: 20px 28px; background: #fff; }
      .bullet       { font-size: 15px; padding: 9px 14px; margin-bottom: 6px; border-radius: 6px; color: ${NAVY}; border-left: 4px solid ${GREEN}; background: #f8fffe; }
      .bullet.hi    { background: ${YELLOW}; font-weight: 900; font-size: 18px; color: ${NAVY}; border-left: 4px solid ${NAVY}; letter-spacing: 1px;
        print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      .bullet.quote { color: ${GREEN}; font-style: italic; font-weight: bold; padding-left: 24px; border-left: 4px solid ${YELLOW}; background: #f0fdf4; }
    </style></head><body>
    ${saveBar()}
    ${logoBar("Schools Energy Competition — Assembly Slides")}
    <div class="page">${slides}${pageFooter()}</div>
    </body></html>`);
  return Promise.resolve();
}

/* ── CLASS TRACKER ───────────────────────────────────────────────────────────*/
export function downloadClassTracker(): Promise<void> {
  const rows = Array.from({ length: 12 }, (_, i) => `
    <tr style="background:${i % 2 === 0 ? LGREY : "#fff"}">
      <td><input type="text" placeholder="Pupil ${i + 1} name" style="width:100%;border:none;border-bottom:1px solid #ccc;padding:3px;font-size:11px;outline:none;font-family:Arial;"/></td>
      ${["Mon","Tue","Wed","Thu","Fri"].map(() => `<td style="text-align:center"><input type="checkbox" style="accent-color:${GREEN};width:16px;height:16px;"/></td>`).join("")}
    </tr>`).join("");

  openResource(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"><title>Class Eco Tracker — Energy Challenge 2026</title>
    <style>${BASE_CSS}
      table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 12px; }
      th { background: ${NAVY}; color: #fff; padding: 8px 10px; font-size: 11px; text-align: center;
        print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      th:first-child { text-align: left; }
      td { padding: 5px 10px; border-bottom: 1px solid #e0e0e0; }
      .meta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 12px; }
      .meta-field { flex: 1; min-width: 110px; display: flex; flex-direction: column; gap: 3px; }
      .meta-field label { font-size: 9px; font-weight: bold; text-transform: uppercase; color: #555; }
      .meta-field input { border: 1.5px solid #bbb; border-radius: 4px; padding: 4px 8px; font-size: 12px; width: 100%; outline: none; }
      .meta-field input:focus { border-color: ${GREEN}; }
      .bottom-row { display: flex; gap: 14px; margin-top: 14px; }
      .bottom-box { flex: 1; border: 2px solid ${GREEN}; border-radius: 6px; padding: 10px; background: ${LGREY}; }
      .bottom-box label { font-size: 9px; font-weight: bold; text-transform: uppercase; color: ${GREEN}; display: block; margin-bottom: 4px; }
      .bottom-box textarea { width: 100%; border: none; background: transparent; font-size: 11px; font-family: Arial; resize: none; outline: none; }
    </style></head><body>
    ${saveBar()}
    ${logoBar("Weekly Class Energy Tracker")}
    <div class="section-header">
      <h1>📋 Class Eco Tracker — Weekly Energy-Saving Habits</h1>
      <p>NI Schools Energy Challenge 2026</p>
    </div>
    <div class="page">
      <div class="meta">
        <div class="meta-field"><label>Class</label><input type="text" placeholder="e.g. 6B"/></div>
        <div class="meta-field"><label>Teacher</label><input type="text" placeholder="Teacher name"/></div>
        <div class="meta-field"><label>Week beginning</label><input type="date"/></div>
      </div>
      <table>
        <thead><tr>
          <th style="width:42%">Pupil Name</th>
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
      ${pageFooter()}
    </div></body></html>`);
  return Promise.resolve();
}
