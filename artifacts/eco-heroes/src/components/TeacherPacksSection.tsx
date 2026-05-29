import { useState } from "react";
import { NiheBadge } from "./NiheBadge";
import { SectionReadAloud } from "./SectionReadAloud";
import {
  downloadWorksheet,
  downloadCertificate,
  downloadAssemblySlides,
  downloadClassTracker,
  downloadSensoryAudit,
  downloadEasyReadWorksheet,
} from "@/lib/pdfGenerators";

function OpenBtn({
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
      <span>{loading ? "⏳" : "📂"}</span>
      <span>{loading ? "Opening…" : children}</span>
    </button>
  );
}

export function TeacherPacksSection() {
  return (
    <section className="pb-20 bg-green-50 relative overflow-hidden">
      <NiheBadge />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black font-display text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground))] mb-2">
            📦 TEACHER PACKS
          </h2>
          <div className="flex justify-start mb-3">
            <SectionReadAloud label="Teacher Packs" text="Teacher Packs available — see below. Free downloadable resources for your school. Download a worksheet, assembly slides, a class tracker, and an Inclusive Access Pack — including an Easy Read worksheet and a Sensory Energy Audit. Pupils can also submit by voice note or video if they prefer. All resources open in a new tab, fill in on-screen and save as PDF." />
          </div>
          <p className="text-xl font-bold text-foreground/70">
            Free fillable resources — opens in a new tab, fill in on-screen and save as PDF
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Worksheets */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📄</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Pupil Worksheets</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Differentiated for each age group. Fillable — pupils can type answers directly on-screen, then save as PDF.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex-1">
                  <OpenBtn onClick={() => downloadWorksheet("5-7")} color="bg-yellow-100 border-yellow-400">
                    Ages 5–7 (Foundation / KS1)
                  </OpenBtn>
                </div>
                <div className="flex-1">
                  <OpenBtn onClick={() => downloadWorksheet("8-11")} color="bg-green-100 border-primary">
                    Ages 8–11 (KS2)
                  </OpenBtn>
                </div>
              </div>
              <OpenBtn onClick={() => downloadWorksheet("12-14")} color="bg-blue-100 border-blue-500">
                Ages 12–14 Energy Audit Sheet (KS3)
              </OpenBtn>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Eco-Hero Certificate</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Fillable certificate — type the pupil's name and school directly on-screen, then save as PDF to share digitally.
            </p>
            <OpenBtn onClick={downloadCertificate} color="bg-yellow-100 border-yellow-400">
              Open Eco-Hero Certificate
            </OpenBtn>
          </div>

          {/* Assembly Slides */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📽️</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Assembly Slides</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              5 slides covering the challenge, prizes and next steps. Opens in a new tab — display on screen or save as PDF.
            </p>
            <OpenBtn onClick={downloadAssemblySlides} color="bg-blue-100 border-blue-400">
              Open Assembly Slides
            </OpenBtn>
          </div>

          {/* Class Tracker */}
          <div className="bg-white border-4 border-foreground rounded-2xl p-8 comic-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-5xl mb-3">📋</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Class Tracker Sheet</h3>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              Fillable weekly tracker — type pupil names, tick daily checkboxes, add mission statement and teacher notes on-screen.
            </p>
            <OpenBtn onClick={downloadClassTracker} color="bg-green-100 border-primary">
              Open Class Tracker
            </OpenBtn>
          </div>

          {/* Inclusive Access */}
          <div className="bg-purple-50 border-4 border-purple-400 rounded-2xl p-8 comic-shadow -rotate-1 hover:rotate-0 transition-transform duration-300 md:col-span-2">
            <div className="text-5xl mb-3">♿</div>
            <h3 className="font-black text-2xl text-foreground font-display mb-1">Inclusive Access Pack</h3>
            <p className="text-foreground/60 font-medium text-sm mb-2">
              Resources for pupils of all abilities — including sensory learners, pupils with motor difficulties, and those who find reading or writing challenging.
            </p>
            <p className="text-foreground/60 font-medium text-sm mb-5">
              <strong>Can't type a mission statement?</strong> Pupils can also submit by voice note or video — email <a href="mailto:Nienergyadvice@nihe.gov.uk" className="text-purple-600 underline font-bold">Nienergyadvice@nihe.gov.uk</a> directly with a recording attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <OpenBtn onClick={downloadEasyReadWorksheet} color="bg-purple-100 border-purple-400">
                Easy Read Worksheet (All Abilities)
              </OpenBtn>
              <OpenBtn onClick={downloadSensoryAudit} color="bg-purple-100 border-purple-400">
                Sensory Energy Audit (Touch / Sight / Hearing)
              </OpenBtn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
