// DashboardHeader.jsx
export default function DashboardHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em", color: "#fff" }}>
        FocusForge
        <span style={{ fontSize: 16, fontWeight: 400, color: "#6366f1", marginLeft: 12 }}>Dashboard</span>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="JD"
        style={{ width: 44, height: 44, borderRadius: 12, border: "2px solid #6366f1" }}
      />
    </div>
  );
}export default function DashboardHeader() {
 return (
    <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #2d2d44" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
            <span style={{ fontSize: 22, fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FocusForge</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: 14, color: "#94a3b8" }}>Good morning 👋</span>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>JD</div>
          </div>
        </div>
    )
}