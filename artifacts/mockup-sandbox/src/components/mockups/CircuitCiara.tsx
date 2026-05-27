export default function CircuitCiara() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8"
      style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", maxWidth: 420, width: "100%" }}>

        <h2 style={{ color: "white", fontSize: 22, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>
          🦸 New Hero Preview
        </h2>

        {/* Hero Card */}
        <div style={{
          background: "white",
          borderRadius: 24,
          border: "4px solid #0f1f3d",
          boxShadow: "6px 6px 0 #0f1f3d",
          overflow: "hidden",
          width: "100%",
          cursor: "pointer",
        }}>
          {/* Image area */}
          <div style={{
            height: 192,
            background: "#fed7aa",
            borderBottom: "4px solid #0f1f3d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Dot pattern overlay */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.15,
              backgroundImage: "radial-gradient(circle at center, #000 2px, transparent 2.5px)",
              backgroundSize: "16px 16px",
            }} />
            {/* Placeholder illustration */}
            <div style={{
              width: 140, height: 140,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 72,
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              position: "relative", zIndex: 10,
              border: "4px solid #0f1f3d",
            }}>
              ⚡
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "24px 24px 24px", textAlign: "center" }}>
            {/* Role badge */}
            <div style={{
              display: "inline-block",
              background: "#0f1f3d",
              color: "white",
              fontWeight: 900,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 2,
              padding: "4px 16px",
              borderRadius: 999,
              marginBottom: 12,
              marginTop: -46,
              position: "relative",
              zIndex: 20,
              border: "2px solid white",
            }}>
              Access &amp; Energy Champion
            </div>

            <h3 style={{ fontSize: 26, fontWeight: 900, margin: "0 0 12px", color: "#0f1f3d" }}>
              Circuit Katie
            </h3>

            <div style={{
              background: "#f0fdf4",
              borderRadius: 12,
              padding: "10px 14px",
              border: "2px solid rgba(15,31,61,0.1)",
              marginBottom: 16,
            }}>
              <p style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", color: "#555", margin: "0 0 4px" }}>
                Super Power:
              </p>
              <p style={{ fontWeight: 900, fontSize: 18, color: "#25a244", margin: 0 }}>
                Green for everyone — no barriers, no waste!
              </p>
            </div>

            <p style={{ fontSize: 13, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>
              Click to view profile ⚡
            </p>
          </div>
        </div>

        {/* Expanded modal preview */}
        <div style={{
          background: "white",
          borderRadius: 24,
          border: "4px solid #0f1f3d",
          boxShadow: "6px 6px 0 #0f1f3d",
          overflow: "hidden",
          width: "100%",
        }}>
          <div style={{
            height: 160,
            background: "#fed7aa",
            borderBottom: "4px solid #0f1f3d",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.15,
              backgroundImage: "radial-gradient(circle at center, #000 2px, transparent 2.5px)",
              backgroundSize: "16px 16px",
            }} />
            <span style={{ fontSize: 80, position: "relative", zIndex: 10 }}>⚡</span>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: 22, color: "#0f1f3d" }}>Circuit Katie</div>
                <div style={{ fontSize: 13, color: "#25a244", fontWeight: 700, textTransform: "uppercase" }}>Access &amp; Energy Champion</div>
              </div>
            </div>
            <div style={{
              background: "#f0fdf4", borderRadius: 10, padding: "8px 14px",
              border: "2px solid #e0f0e8", marginBottom: 16,
            }}>
              <span style={{ fontWeight: 900, color: "#25a244" }}>⚡ Green for everyone — no barriers, no waste!</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#444", fontWeight: 600, margin: 0 }}>
              Ciara uses her wheelchair and her wit to champion two causes at once — making schools more accessible <em>and</em> more energy efficient. She proves that good eco-design serves everyone: insulated buildings stay warmer for pupils who struggle to regulate temperature, and smart lighting helps pupils with sensory sensitivities too. No barriers, no waste!
            </p>
          </div>
        </div>

        <p style={{ color: "#888", fontSize: 13, textAlign: "center", margin: 0 }}>
          ⚠️ The ⚡ emoji is a placeholder — a real illustration would go here
        </p>

      </div>
    </div>
  );
}
