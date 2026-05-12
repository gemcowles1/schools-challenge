import { useState } from "react";
import { NiheBadge } from "./NiheBadge";
import {
  downloadWorksheet,
  downloadCertificate,
  downloadAssemblySlides,
  downloadClassTracker,
} from "@/lib/pdfGenerators";

function DownloadBtn({
  onClick,
  children,
  color = "bg-white border-foreground",
}: {
  onClick: () => Promise<void>;
  children: React.ReactNode;
  color?: string;
}) {
  const [loading, setLoading] = useState(false);
  async function handle() {
    setLoading(true);
    try { await onClick(); } finally { setLoading(false); }
  }
  return (
    <button
      onClick={handle}
      disabled={loading}
      className={`w-full ${color} border-4 font-black px-4 py-3 rounded-xl hover:scale-105 transition-transform text-left text-sm disabled:opacity-60 disabled:scale-100 flex items-center gap-2 comic-shadow`}
    >
      <span>{loading ? "⏳" : "⬇️"}</span>
      <span>{loading ? "Generating PDF…" : children}</span>
    </button>
  );
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
            Free interactive PDFs — download, fill in on-screen or print
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Worksheets */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📄</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Pupil Worksheets</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Differentiated for each age group. Fillable PDF — pupils can type answers directly or print and write.
            </p>
            <div className="flex flex-col gap-2">
              <DownloadBtn onClick={() => downloadWorksheet("5-7")} color="bg-yellow-100 border-yellow-400">
                Ages 5–7 Worksheet (Foundation / KS1)
              </DownloadBtn>
              <DownloadBtn onClick={() => downloadWorksheet("8-11")} color="bg-green-100 border-primary">
                Ages 8–11 Worksheet (KS2)
              </DownloadBtn>
              <DownloadBtn onClick={() => downloadWorksheet("12-14")} color="bg-blue-100 border-blue-500">
                Ages 12–14 Energy Audit Sheet (KS3)
              </DownloadBtn>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Eco-Hero Certificate</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Fillable PDF — type the pupil's name and school directly in the document, then print or share digitally.
            </p>
            <DownloadBtn onClick={downloadCertificate} color="bg-yellow-100 border-yellow-400">
              Download Eco-Hero Certificate
            </DownloadBtn>
          </div>

          {/* Assembly Slides */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📽️</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Assembly Slides</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              5 landscape A4 slides covering the challenge, prizes and next steps. Display on screen or print as a guide.
            </p>
            <DownloadBtn onClick={downloadAssemblySlides} color="bg-blue-100 border-blue-400">
              Download Assembly Slides PDF
            </DownloadBtn>
          </div>

          {/* Class Tracker */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📋</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Class Tracker Sheet</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Interactive A4 landscape PDF. Type pupil names, tick daily checkboxes, add the class mission statement and teacher notes — all in the document.
            </p>
            <DownloadBtn onClick={downloadClassTracker} color="bg-green-100 border-primary">
              Download Class Tracker PDF
            </DownloadBtn>
          </div>

        </div>
      </div>
    </section>
  );
}
