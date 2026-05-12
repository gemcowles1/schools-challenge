import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont } from "pdf-lib";

const GREEN = rgb(0.1, 0.36, 0.15);
const DARK  = rgb(0.1, 0.1, 0.1);
const GREY  = rgb(0.5, 0.5, 0.5);
const LIGHT = rgb(0.94, 1, 0.94);
const YELLOW = rgb(1, 0.95, 0.6);
const WHITE = rgb(1, 1, 1);

function download(bytes: Uint8Array, filename: string) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function drawRect(page: PDFPage, x: number, y: number, w: number, h: number, color: ReturnType<typeof rgb>, borderColor?: ReturnType<typeof rgb>) {
  page.drawRectangle({ x, y, width: w, height: h, color, borderColor, borderWidth: borderColor ? 1.5 : 0 });
}

function drawText(page: PDFPage, text: string, x: number, y: number, font: PDFFont, size: number, color = DARK) {
  page.drawText(text, { x, y, font, size, color });
}

function drawHeader(page: PDFPage, bold: PDFFont, regular: PDFFont, title: string, subtitle: string) {
  const { width } = page.getSize();
  drawRect(page, 0, page.getSize().height - 60, width, 60, GREEN);
  drawText(page, title,    36, page.getSize().height - 36, bold,    16, WHITE);
  drawText(page, subtitle, 36, page.getSize().height - 52, regular, 9,  rgb(0.8, 1, 0.8));
}

function drawFooter(page: PDFPage, regular: PDFFont) {
  const { width } = page.getSize();
  drawRect(page, 0, 0, width, 28, GREEN);
  drawText(page, "Sponsored by NI Housing Executive / NIEAS · Eco-Schools Northern Ireland · Energy Challenge 2026", 36, 9, regular, 7, WHITE);
}

function addFormField(form: ReturnType<PDFDocument["getForm"]>, name: string, page: PDFPage, x: number, y: number, w: number, h: number) {
  const field = form.createTextField(name);
  field.addToPage(page, { x, y, width: w, height: h, borderColor: rgb(0.6, 0.6, 0.6), borderWidth: 1, backgroundColor: WHITE });
  field.setFontSize(10);
}

// ── 1. WORKSHEETS ────────────────────────────────────────────────────────────

type AgeBand = "5-7" | "8-11" | "12-14";

const WORKSHEET_CONFIG: Record<AgeBand, {
  title: string; badge: string; questions: { label: string; lines: number }[];
}> = {
  "5-7": {
    title: "⭐ Energy Hero Worksheet — Ages 5–7",
    badge: "Foundation & Key Stage 1",
    questions: [
      { label: "Draw or write something in your classroom that uses electricity:", lines: 4 },
      { label: "Which should be switched OFF when no one is in the room? (write your answer):", lines: 2 },
      { label: "Circle the best Eco-Hero action — Switch off the lights / Leave the lights on:", lines: 2 },
      { label: "What will YOU do today to save energy? I will...", lines: 3 },
    ],
  },
  "8-11": {
    title: "🚀 Energy Saving Mission Worksheet — Ages 8–11",
    badge: "Key Stage 2",
    questions: [
      { label: "Name 3 things in your classroom that use energy:", lines: 3 },
      { label: "Write one energy-saving action your class could take:", lines: 3 },
      { label: "Estimate how much energy your school could save in a week by switching off lights:", lines: 3 },
      { label: "Write a slogan to encourage your school to save energy:", lines: 2 },
      { label: "Who is responsible for energy saving in your school?", lines: 2 },
    ],
  },
  "12-14": {
    title: "🔬 Energy Audit & Action Plan — Ages 12–14",
    badge: "Key Stage 3",
    questions: [
      { label: "List the top 3 energy users in your school and estimate their annual cost:", lines: 4 },
      { label: "What data would you collect to conduct a full energy audit?", lines: 4 },
      { label: "Propose ONE realistic action your Eco-Committee could implement this term:", lines: 3 },
      { label: "What is the estimated CO₂ saving of your proposed action? Show your working:", lines: 4 },
      { label: "Who are the stakeholders you need to persuade? How would you do it?", lines: 3 },
    ],
  },
};

export async function downloadWorksheet(age: AgeBand) {
  const pdfDoc  = await PDFDocument.create();
  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const form    = pdfDoc.getForm();

  const page   = pdfDoc.addPage([595, 842]); // A4
  const { width, height } = page.getSize();
  const cfg = WORKSHEET_CONFIG[age];

  drawHeader(page, bold, regular, cfg.title, `Eco-Schools NI — Energy Challenge 2026 · ${cfg.badge}`);

  // Info row
  let y = height - 80;
  drawText(page, "Name:", 36, y, bold, 10);
  addFormField(form, "name", page, 80, y - 4, 140, 18);
  drawText(page, "Class:", 240, y, bold, 10);
  addFormField(form, "class", page, 275, y - 4, 90, 18);
  drawText(page, "Date:", 385, y, bold, 10);
  addFormField(form, "date", page, 415, y - 4, 110, 18);

  y -= 30;

  const lineH = 16;
  cfg.questions.forEach((q, qi) => {
    // Question label
    drawRect(page, 36, y - 2, width - 72, 18, LIGHT);
    drawText(page, `${qi + 1}.  ${q.label}`, 40, y + 3, bold, 9, GREEN);
    y -= 20;

    // Answer field
    const fieldH = q.lines * lineH + 8;
    addFormField(form, `q${qi + 1}_answer`, page, 36, y - fieldH + 4, width - 72, fieldH);
    y -= fieldH + 12;
  });

  drawFooter(page, regular);

  const bytes = await pdfDoc.save();
  download(bytes, `eco-hero-worksheet-ages-${age}.pdf`);
}

// ── 2. CERTIFICATE ──────────────────────────────────────────────────────────

export async function downloadCertificate() {
  const pdfDoc  = await PDFDocument.create();
  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const italic  = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const form    = pdfDoc.getForm();

  const page = pdfDoc.addPage([595, 842]);
  const { width, height } = page.getSize();

  // Decorative border
  drawRect(page, 20, 20, width - 40, height - 40, WHITE, GREEN);
  drawRect(page, 28, 28, width - 56, height - 56, WHITE, rgb(0.6, 0.85, 0.6));

  // Header band
  drawRect(page, 20, height - 160, width - 40, 140, GREEN);

  // Stars
  const stars = "★  ★  ★";
  const sw = bold.widthOfTextAtSize(stars, 18);
  drawText(page, stars, (width - sw) / 2, height - 80, bold, 18, YELLOW);

  const org = "Eco-Schools Northern Ireland";
  const ow = regular.widthOfTextAtSize(org, 10);
  drawText(page, org, (width - ow) / 2, height - 100, regular, 10, rgb(0.8, 1, 0.8));

  const title = "Eco-Hero Certificate";
  const tw = bold.widthOfTextAtSize(title, 26);
  drawText(page, title, (width - tw) / 2, height - 135, bold, 26, WHITE);

  // Body
  let y = height - 200;
  const certifies = "This certifies that";
  const cv = italic.widthOfTextAtSize(certifies, 12);
  drawText(page, certifies, (width - cv) / 2, y, italic, 12, GREY);
  y -= 34;

  // Pupil name field
  addFormField(form, "pupil_name", page, 100, y - 6, width - 200, 28);
  page.drawLine({ start: { x: 100, y: y - 6 }, end: { x: width - 100, y: y - 6 }, thickness: 0.5, color: GREY });
  y -= 40;

  const has = italic.widthOfTextAtSize("has shown outstanding commitment to energy saving at", 11);
  drawText(page, "has shown outstanding commitment to energy saving at", (width - has) / 2, y, italic, 11, DARK);
  y -= 30;

  // School name field
  addFormField(form, "school_name", page, 100, y - 6, width - 200, 24);
  page.drawLine({ start: { x: 100, y: y - 6 }, end: { x: width - 100, y: y - 6 }, thickness: 0.5, color: GREY });
  y -= 38;

  const part = "as part of the";
  const challenge = "NI Schools Energy Challenge 2026";
  const partW = italic.widthOfTextAtSize(part, 11);
  const chalW = bold.widthOfTextAtSize(challenge, 11);
  drawText(page, part,      (width - partW - chalW - 6) / 2, y, italic, 11, DARK);
  drawText(page, challenge, (width - partW - chalW - 6) / 2 + partW + 6, y, bold, 11, GREEN);
  y -= 50;

  // Laptop emojis
  const laptops = "💻  💻  💻  💻  💻";
  const lw = bold.widthOfTextAtSize(laptops, 18);
  drawText(page, laptops, (width - lw) / 2, y, bold, 18);
  y -= 60;

  // Signature row
  const sigY = y;
  drawText(page, "Teacher Signature", 100, sigY - 22, regular, 9, GREY);
  page.drawLine({ start: { x: 100, y: sigY }, end: { x: 260, y: sigY }, thickness: 0.5, color: GREY });
  addFormField(form, "teacher_sig", page, 100, sigY - 20, 160, 20);

  drawText(page, "Date", 320, sigY - 22, regular, 9, GREY);
  page.drawLine({ start: { x: 320, y: sigY }, end: { x: 480, y: sigY }, thickness: 0.5, color: GREY });
  addFormField(form, "cert_date", page, 320, sigY - 20, 160, 20);

  drawFooter(page, regular);

  const bytes = await pdfDoc.save();
  download(bytes, "eco-hero-certificate.pdf");
}

// ── 3. ASSEMBLY SLIDES ──────────────────────────────────────────────────────

const SLIDES = [
  {
    title: "Our School Eco-Heroes",
    emoji: "🌿",
    bullets: [
      "Welcome to the NI Schools Energy Challenge 2026",
      "Sponsored by NI Housing Executive & NIEAS",
      "",
      "💻  5 Laptops to Win for 5 Schools!",
      "⭐  Points towards your Eco-Schools Green Flag",
      "🎟  Free competition entry",
    ],
  },
  {
    title: "Why Does Energy Matter?",
    emoji: "⚡",
    bullets: [
      "Schools in NI spend £millions on energy every year",
      "68% of NI homes use oil — the highest rate in the UK",
      "Energy use creates CO₂ — heating our planet",
      "Simple actions can cut school energy bills by 10–20%",
      "That money could fund books, trips & equipment!",
    ],
  },
  {
    title: "The Challenge",
    emoji: "🎯",
    bullets: [
      "Write a Mission Statement for your Eco-Committee:",
      "",
      '"We are [School] and we pledge to [action]',
      ' so that we can [outcome] by [date]."',
      "",
      "Submit it at eco-energy-challenge.replit.app",
    ],
  },
  {
    title: "What You Can Win",
    emoji: "🏆",
    bullets: [
      "💻  💻  💻  💻  💻",
      "5 Laptops — one per winning school Eco-Committee",
      "",
      "⭐  Points towards your Eco-Schools Green Flag",
      "🎟  Free entry to the Energy Challenge competition",
      "📣  Your school featured as an Eco Champion!",
    ],
  },
  {
    title: "What To Do Next",
    emoji: "🚀",
    bullets: [
      "1.  Talk to your Eco-Committee",
      "2.  Choose your energy-saving action",
      "3.  Pick your age group on the website",
      "4.  Write your Mission Statement online",
      "5.  Submit before the deadline",
      "6.  Start saving energy — right now!",
    ],
  },
];

export async function downloadAssemblySlides() {
  const pdfDoc  = await PDFDocument.create();
  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  for (const slide of SLIDES) {
    const page = pdfDoc.addPage([842, 595]); // A4 landscape
    const { width, height } = page.getSize();

    // BG
    drawRect(page, 0, 0, width, height, LIGHT);
    // Green left stripe
    drawRect(page, 0, 0, 12, height, GREEN);
    // Green right stripe
    drawRect(page, width - 12, 0, 12, height, GREEN);

    // Header
    drawRect(page, 12, height - 110, width - 24, 110, GREEN);
    const emojiW = bold.widthOfTextAtSize(slide.emoji, 40);
    drawText(page, slide.emoji, 50, height - 68, bold, 40, WHITE);
    drawText(page, slide.title, 50 + emojiW + 16, height - 58, bold, 28, WHITE);
    drawText(page, "NI Schools Energy Challenge 2026 · Eco-Schools Northern Ireland", 50 + emojiW + 16, height - 82, regular, 10, rgb(0.8, 1, 0.8));

    // Bullets
    let y = height - 145;
    for (const bullet of slide.bullets) {
      const isHighlight = bullet.startsWith("💻") || bullet.startsWith("5 Laptop");
      if (isHighlight) {
        drawRect(page, 36, y - 8, width - 72, 30, YELLOW);
        drawText(page, bullet, 50, y + 6, bold, 16, DARK);
      } else if (bullet === "") {
        // spacer
      } else if (bullet.startsWith('"') || bullet.startsWith(" so")) {
        drawText(page, bullet, 70, y + 4, regular, 13, GREEN);
      } else {
        drawText(page, bullet, 50, y + 4, bullet.match(/^\d\./) ? bold : regular, 14, DARK);
      }
      y -= 36;
    }

    // Footer
    drawRect(page, 12, 0, width - 24, 32, GREEN);
    drawText(page, "Sponsored by NI Housing Executive / NIEAS · eco-energy-challenge.replit.app", 50, 10, regular, 9, WHITE);
    const slideNum = `${SLIDES.indexOf(slide) + 1} / ${SLIDES.length}`;
    const snW = regular.widthOfTextAtSize(slideNum, 9);
    drawText(page, slideNum, width - snW - 30, 10, regular, 9, WHITE);
  }

  const bytes = await pdfDoc.save();
  download(bytes, "eco-hero-assembly-slides.pdf");
}

// ── 4. CLASS TRACKER ────────────────────────────────────────────────────────

export async function downloadClassTracker() {
  const pdfDoc  = await PDFDocument.create();
  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const form    = pdfDoc.getForm();

  const page = pdfDoc.addPage([842, 595]); // A4 landscape
  const { width, height } = page.getSize();

  drawRect(page, 0, 0, width, height, WHITE);
  drawHeader(page, bold, regular, "📋 Class Eco Tracker — Weekly Energy-Saving Habits", "NI Schools Energy Challenge 2026");

  // Meta row
  let y = height - 80;
  drawText(page, "Class:", 36, y, bold, 10);
  addFormField(form, "class_name", page, 75, y - 4, 150, 18);
  drawText(page, "Teacher:", 250, y, bold, 10);
  addFormField(form, "teacher_name", page, 300, y - 4, 150, 18);
  drawText(page, "Week beginning:", 475, y, bold, 10);
  addFormField(form, "week_date", page, 578, y - 4, 120, 18);

  // Table header
  y -= 34;
  const cols = [220, 90, 90, 90, 90, 90];
  const colX = [36, 256, 346, 436, 526, 616];
  const headers = ["Pupil Name", "Mon ✓", "Tue ✓", "Wed ✓", "Thu ✓", "Fri ✓"];

  drawRect(page, 36, y - 4, width - 72, 22, GREEN);
  headers.forEach((h, i) => {
    const hw = bold.widthOfTextAtSize(h, 9);
    drawText(page, h, colX[i] + (cols[i] - hw) / 2, y + 5, bold, 9, WHITE);
  });
  y -= 4;

  // Rows
  for (let row = 0; row < 12; row++) {
    const rowY = y - row * 30;
    const bg = row % 2 === 0 ? LIGHT : WHITE;
    drawRect(page, 36, rowY - 22, width - 72, 26, bg, rgb(0.85, 0.85, 0.85));

    // Name field
    addFormField(form, `pupil_${row + 1}`, page, 38, rowY - 20, cols[0] - 4, 22);

    // Day checkboxes
    for (let d = 1; d <= 5; d++) {
      const cb = form.createCheckBox(`pupil_${row + 1}_day${d}`);
      cb.addToPage(page, {
        x: colX[d] + (cols[d] - 16) / 2,
        y: rowY - 18,
        width: 16,
        height: 16,
        borderColor: GREEN,
        borderWidth: 1.5,
        backgroundColor: WHITE,
      });
    }
  }

  // Mission statement box
  y -= 12 * 30 + 16;
  drawRect(page, 36, y - 44, (width - 72) * 0.55, 50, LIGHT, GREEN);
  drawText(page, "Our Class Mission Statement:", 42, y - 26, bold, 9, GREEN);
  addFormField(form, "class_mission", page, 38, y - 42, (width - 72) * 0.55 - 4, 32);

  // Notes box
  const notesX = 36 + (width - 72) * 0.55 + 12;
  drawRect(page, notesX, y - 44, (width - 72) * 0.42, 50, LIGHT, GREEN);
  drawText(page, "Teacher Notes:", notesX + 6, y - 26, bold, 9, GREEN);
  addFormField(form, "teacher_notes", page, notesX + 2, y - 42, (width - 72) * 0.42 - 4, 32);

  drawFooter(page, regular);

  const bytes = await pdfDoc.save();
  download(bytes, "eco-hero-class-tracker.pdf");
}
