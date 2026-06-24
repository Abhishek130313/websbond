import { useState, useEffect, useMemo } from "react";
import {
  Shield, RefreshCw, Mail, Phone, MessageCircle, User,
  Loader2, Lock, LogOut, Search, Download, ChevronDown,
  ChevronUp, CheckCircle, Star, StarOff, ExternalLink,
  Filter, X, Sun, Moon, Inbox
} from "lucide-react";
import { getApiUrl } from "@/lib/api";

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

type Theme = "dark" | "light";
type FilterState = "all" | "pending" | "done";

/* ── helpers ── */
const fmtDate = (dt: string) =>
  new Date(dt).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

const isToday = (dt: string) => {
  const d = new Date(dt), n = new Date();
  return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
};

const waUrl = (phone: string, name: string) => {
  const c = phone.replace(/\D/g, "");
  const num = c.startsWith("0") ? "91" + c.slice(1) : c.length === 10 ? "91" + c : c;
  const msg = encodeURIComponent(`Hi ${name}, Thank you for reaching out to Websbond! We'd love to discuss your project. When would be a good time to connect?`);
  return `https://wa.me/${num}?text=${msg}`;
};

const gmailUrl = (email: string, name: string, subject: string) => {
  const sub = encodeURIComponent(`Re: Your Websbond inquiry – ${subject || "Project Brief"}`);
  const body = encodeURIComponent(`Hi ${name},\n\nThank you for reaching out to Websbond!\n\nWe've reviewed your project brief and would love to discuss how we can help you.\n\nBest regards,\nTeam Websbond\n+91 9306623619 | websbond.com`);
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${sub}&body=${body}`;
};

/* ── theme tokens ── */
const T = {
  dark: {
    bg: "#0d0d14",
    surface: "rgba(255,255,255,0.03)",
    surfaceHover: "rgba(255,255,255,0.055)",
    border: "rgba(255,255,255,0.07)",
    borderStrong: "rgba(255,255,255,0.12)",
    text: "#e2e8f0",
    textMuted: "rgba(255,255,255,0.45)",
    textFaint: "rgba(255,255,255,0.25)",
    topBg: "rgba(13,13,20,0.92)",
    rowHover: "rgba(255,255,255,0.025)",
    inputBg: "rgba(255,255,255,0.05)",
    statBg: (c: string) => c + "12",
    badge: "rgba(99,102,241,0.12)",
    badgeText: "#c7d2fe",
    badgeBorder: "rgba(99,102,241,0.2)",
    scrollbar: "rgba(255,255,255,0.1)",
  },
  light: {
    bg: "#f4f6fb",
    surface: "#ffffff",
    surfaceHover: "#f9fafb",
    border: "#e5e7eb",
    borderStrong: "#d1d5db",
    text: "#111827",
    textMuted: "#6b7280",
    textFaint: "#9ca3af",
    topBg: "rgba(255,255,255,0.95)",
    rowHover: "#f9fafb",
    inputBg: "#f3f4f6",
    statBg: (c: string) => c + "18",
    badge: "#eef2ff",
    badgeText: "#4f46e5",
    badgeBorder: "#c7d2fe",
    scrollbar: "rgba(0,0,0,0.1)",
  },
};

/* ── Login ── */
const Login = ({ onLogin, loading, error, theme }: { onLogin: (k: string) => void; loading: boolean; error: string; theme: Theme }) => {
  const [key, setKey] = useState("");
  const t = T[theme];
  return (
    <div style={{ minHeight: "100vh", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',-apple-system,sans-serif" }}>
      <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16, padding: "36px 32px", width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, boxShadow: theme === "light" ? "0 4px 24px rgba(0,0,0,0.08)" : "none" }}>
        <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
          <Shield size={20} color="#fff" />
        </div>
        <h1 style={{ color: t.text, fontSize: 20, fontWeight: 700, margin: 0 }}>Websbond Admin</h1>
        <p style={{ color: t.textMuted, fontSize: 12, margin: "0 0 16px" }}>Contact Submissions Dashboard</p>
        <form onSubmit={e => { e.preventDefault(); onLogin(key); }} style={{ width: "100%" }}>
          <input type="password" value={key} onChange={e => setKey(e.target.value)} placeholder="Enter admin key…" required
            style={{ width: "100%", padding: "10px 14px", background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 9, color: t.text, fontSize: 13, outline: "none", marginBottom: 10, boxSizing: "border-box" }} />
          {error && <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 7, padding: "7px 12px", color: "#ef4444", fontSize: 12, marginBottom: 10 }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ width: "100%", padding: 11, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", border: "none", borderRadius: 9, color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            {loading ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> : <Lock size={15} />}
            {loading ? "Verifying…" : "Access Dashboard"}
          </button>
        </form>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
};

/* ── Main ── */
export const AdminPage = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("wb_admin_key") || "");
  const [subs, setSubs] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState<Theme>((localStorage.getItem("wb_theme") as Theme) || "dark");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterState>("all");
  const [sortAsc, setSortAsc] = useState(false);
  const [starred, setStarred] = useState<Set<number>>(new Set(JSON.parse(localStorage.getItem("wb_starred") || "[]")));
  const [contacted, setContacted] = useState<Set<number>>(new Set(JSON.parse(localStorage.getItem("wb_contacted") || "[]")));
  const [expanded, setExpanded] = useState<number | null>(null);

  const t = T[theme];

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("wb_theme", next);
  };

  const fetchData = async (key: string, isLogin = false) => {
    isLogin ? setLoginLoading(true) : setLoading(true);
    setLoginError("");
    try {
      const res = await fetch(getApiUrl("/api/admin/contacts"), { headers: { "X-Admin-Key": key } });
      if (res.status === 401) { setLoginError("Invalid admin key."); setIsLoggedIn(false); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSubs(data);
      setIsLoggedIn(true);
      localStorage.setItem("wb_admin_key", key);
      setApiKey(key);
    } catch { setLoginError("Cannot connect to backend."); }
    finally { setLoginLoading(false); setLoading(false); }
  };

  useEffect(() => { if (apiKey) fetchData(apiKey); }, []);

  const toggleStar = (id: number) => setStarred(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id);
    localStorage.setItem("wb_starred", JSON.stringify([...n])); return n;
  });

  const toggleContacted = (id: number) => setContacted(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id);
    localStorage.setItem("wb_contacted", JSON.stringify([...n])); return n;
  });

  const exportCSV = () => {
    const hdr = ["ID", "Name", "Email", "Phone", "Subject", "Message", "Submitted At"];
    const rows = filtered.map(s => [s.id, s.name, s.email, s.phone, s.subject, s.message, s.submittedAt].map(v => `"${String(v || "").replace(/"/g, '""')}"`));
    const csv = [hdr, ...rows].map(r => r.join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `websbond-contacts-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  };

  const filtered = useMemo(() => {
    let list = [...subs];
    if (search) { const q = search.toLowerCase(); list = list.filter(s => [s.name, s.email, s.phone, s.subject].some(v => v?.toLowerCase().includes(q))); }
    if (filter === "pending") list = list.filter(s => !contacted.has(s.id));
    if (filter === "done") list = list.filter(s => contacted.has(s.id));
    return sortAsc ? list.sort((a, b) => a.submittedAt.localeCompare(b.submittedAt)) : list.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
  }, [subs, search, filter, sortAsc, contacted]);

  if (!isLoggedIn) return <Login onLogin={k => fetchData(k, true)} loading={loginLoading} error={loginError} theme={theme} />;

  const todayCount = subs.filter(s => s.submittedAt && isToday(s.submittedAt)).length;
  const pendingCount = subs.filter(s => !contacted.has(s.id)).length;

  return (
    /* ── Full-screen shell ── */
    <div style={{ minHeight: "100vh", background: t.bg, fontFamily: "'Inter',-apple-system,sans-serif", color: t.text, padding: "14px", boxSizing: "border-box" }}>

      {/* ── Websbond gradient border frame ── */}
      <div style={{
        position: "relative",
        borderRadius: 18,
        padding: 2,           /* border thickness */
        background: "linear-gradient(135deg, #06b6d4 0%, #6366f1 40%, #8b5cf6 70%, #ec4899 100%)",
        minHeight: "calc(100vh - 28px)",
        display: "flex", flexDirection: "column",
        boxShadow: theme === "dark"
          ? "0 0 48px rgba(99,102,241,0.18), 0 0 80px rgba(139,92,246,0.1)"
          : "0 4px 40px rgba(99,102,241,0.14)",
      }}>
        {/* Watermark brand label on border */}
        <div style={{
          position: "absolute", top: -1, left: 28,
          background: "linear-gradient(135deg, #06b6d4, #6366f1)",
          borderRadius: "0 0 8px 8px",
          padding: "2px 12px",
          fontSize: 9, fontWeight: 700, letterSpacing: "0.12em",
          color: "#fff", textTransform: "uppercase", userSelect: "none",
          zIndex: 30,
        }}>Websbond Admin</div>

        {/* Inner panel */}
        <div style={{
          flex: 1, borderRadius: 16,
          background: t.bg,
          overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>

      {/* ── Top Bar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px", borderBottom: `1px solid ${t.border}`, background: t.topBg, backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield size={14} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: t.text }}>Admin</span>
          <span style={{ fontSize: 11, color: t.textFaint, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 5, padding: "2px 7px" }}>websbond.com</span>
        </div>

        {/* Stats inline */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {[["Total", subs.length, "#6366f1"], ["Today", todayCount, "#10b981"], ["Pending", pendingCount, "#f59e0b"], ["Starred", starred.size, "#ec4899"]].map(([l, v, c]) => (
            <div key={l as string} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: c as string, lineHeight: 1 }}>{v as number}</div>
              <div style={{ fontSize: 9, color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l as string}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {/* Theme toggle */}
          <button onClick={toggleTheme} title="Toggle theme" style={{ background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 8, padding: "6px 10px", color: t.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button onClick={() => fetchData(apiKey)} title="Refresh" style={{ background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 8, padding: "6px 10px", color: t.textMuted, cursor: "pointer", display: "flex", alignItems: "center" }}>
            {loading ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <RefreshCw size={14} />}
          </button>
          <button onClick={exportCSV} title="Export CSV" style={{ background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 8, padding: "6px 10px", color: t.textMuted, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <Download size={14} />
          </button>
          <button onClick={() => { localStorage.removeItem("wb_admin_key"); setIsLoggedIn(false); setSubs([]); }} title="Logout" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: 8, padding: "6px 10px", color: "#ef4444", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <LogOut size={14} />
          </button>
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", borderBottom: `1px solid ${t.border}`, flexWrap: "wrap" }}>
        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 8, padding: "7px 12px", flex: 1, minWidth: 200 }}>
          <Search size={13} color={t.textFaint} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone, subject…"
            style={{ flex: 1, background: "none", border: "none", outline: "none", color: t.text, fontSize: 13, minWidth: 0 }} />
          {search && <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 0 }}><X size={12} color={t.textFaint} /></button>}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 5 }}>
          {(["all", "pending", "done"] as FilterState[]).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", fontSize: 12, fontWeight: 500,
              background: filter === f ? "rgba(99,102,241,0.12)" : t.inputBg,
              border: `1px solid ${filter === f ? "rgba(99,102,241,0.3)" : t.border}`,
              borderRadius: 7, color: filter === f ? "#818cf8" : t.textMuted, cursor: "pointer",
            }}>
              <Filter size={11} /> {f === "all" ? "All" : f === "pending" ? "Pending" : "Contacted"}
            </button>
          ))}
        </div>

        {/* Sort */}
        <button onClick={() => setSortAsc(a => !a)} style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", fontSize: 12, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 7, color: t.textMuted, cursor: "pointer" }}>
          {sortAsc ? <ChevronUp size={13} /> : <ChevronDown size={13} />} Date
        </button>

        <span style={{ marginLeft: "auto", fontSize: 12, color: t.textFaint }}>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {/* ── Table Header ── */}
      <div style={{ display: "grid", gridTemplateColumns: "28px 1fr 1fr 140px 180px 120px", gap: "0 16px", padding: "8px 24px", borderBottom: `1px solid ${t.border}`, background: theme === "light" ? "#f9fafb" : "rgba(255,255,255,0.02)" }}>
        {["", "Name / Email", "Subject", "Phone", "Submitted", "Actions"].map((h, i) => (
          <span key={i} style={{ fontSize: 10, fontWeight: 600, color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.07em" }}>{h}</span>
        ))}
      </div>

      {/* ── Rows ── */}
      <div style={{ overflowY: "auto" }}>
        {filtered.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 24px", color: t.textFaint }}>
            <Inbox size={32} style={{ marginBottom: 10, opacity: 0.4 }} />
            <span style={{ fontSize: 14 }}>No submissions found</span>
          </div>
        ) : filtered.map(s => {
          const isExp = expanded === s.id;
          const isDone = contacted.has(s.id);
          const isStarred = starred.has(s.id);
          return (
            <div key={s.id}>
              {/* Row */}
              <div
                style={{
                  display: "grid", gridTemplateColumns: "28px 1fr 1fr 140px 180px 120px", gap: "0 16px",
                  padding: "11px 24px", alignItems: "center",
                  borderBottom: `1px solid ${t.border}`,
                  background: isExp ? (theme === "dark" ? "rgba(99,102,241,0.05)" : "#f5f3ff") : "transparent",
                  opacity: isDone ? 0.55 : 1,
                  cursor: "pointer",
                  transition: "background 0.12s",
                }}
                onMouseEnter={e => { if (!isExp) (e.currentTarget as HTMLDivElement).style.background = t.rowHover; }}
                onMouseLeave={e => { if (!isExp) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
              >
                {/* Star */}
                <button onClick={e => { e.stopPropagation(); toggleStar(s.id); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", color: isStarred ? "#fbbf24" : t.textFaint }}>
                  {isStarred ? <Star size={14} fill="#fbbf24" /> : <StarOff size={14} />}
                </button>

                {/* Name / Email */}
                <div onClick={() => setExpanded(isExp ? null : s.id)} style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 26, height: 26, flexShrink: 0, background: isDone ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {isDone ? <CheckCircle size={12} color="#fff" /> : <User size={12} color="#fff" />}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: t.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
                      <div style={{ fontSize: 11, color: t.textMuted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.email}</div>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div onClick={() => setExpanded(isExp ? null : s.id)} style={{ minWidth: 0 }}>
                  {s.subject
                    ? <span style={{ fontSize: 11, background: t.badge, border: `1px solid ${t.badgeBorder}`, color: t.badgeText, borderRadius: 5, padding: "2px 8px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", maxWidth: "100%" }}>{s.subject}</span>
                    : <span style={{ fontSize: 11, color: t.textFaint }}>—</span>}
                </div>

                {/* Phone */}
                <div style={{ fontSize: 12, color: t.textMuted, whiteSpace: "nowrap" }}>
                  {s.phone || <span style={{ color: t.textFaint }}>—</span>}
                </div>

                {/* Date */}
                <div style={{ fontSize: 11, color: t.textFaint, whiteSpace: "nowrap" }}>
                  {s.submittedAt ? fmtDate(s.submittedAt) : "—"}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }} onClick={e => e.stopPropagation()}>
                  <a href={gmailUrl(s.email, s.name, s.subject)} target="_blank" rel="noopener noreferrer" title="Reply on Gmail"
                    style={{ display: "flex", alignItems: "center", gap: 3, padding: "4px 7px", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "rgba(234,67,53,0.1)", border: "1px solid rgba(234,67,53,0.2)", color: "#ef4444", textDecoration: "none" }}>
                    <Mail size={11} /> Mail
                  </a>
                  {s.phone && (
                    <a href={waUrl(s.phone, s.name)} target="_blank" rel="noopener noreferrer" title="WhatsApp"
                      style={{ display: "flex", alignItems: "center", gap: 3, padding: "4px 7px", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.18)", color: "#22c55e", textDecoration: "none" }}>
                      <MessageCircle size={11} /> WA
                    </a>
                  )}
                  {s.phone && (
                    <a href={`tel:${s.phone}`} title="Call"
                      style={{ display: "flex", alignItems: "center", padding: "4px 6px", borderRadius: 6, background: t.inputBg, border: `1px solid ${t.border}`, color: t.textMuted, textDecoration: "none" }}>
                      <Phone size={11} />
                    </a>
                  )}
                  <button onClick={() => toggleContacted(s.id)} title={isDone ? "Mark pending" : "Mark contacted"}
                    style={{ background: isDone ? "rgba(16,185,129,0.1)" : t.inputBg, border: `1px solid ${isDone ? "rgba(16,185,129,0.2)" : t.border}`, borderRadius: 6, padding: "4px 6px", cursor: "pointer", display: "flex", color: isDone ? "#10b981" : t.textFaint }}>
                    <CheckCircle size={11} fill={isDone ? "#10b981" : "none"} />
                  </button>
                  <button onClick={() => setExpanded(isExp ? null : s.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", color: t.textFaint }}>
                    {isExp ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>
              </div>

              {/* Expanded message */}
              {isExp && (
                <div style={{ padding: "12px 24px 14px", background: theme === "dark" ? "rgba(99,102,241,0.04)" : "#f5f3ff", borderBottom: `1px solid ${t.border}` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 700 }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>Full Email</p>
                      <a href={`mailto:${s.email}`} style={{ fontSize: 13, color: "#6366f1", textDecoration: "none" }}>{s.email} <ExternalLink size={10} /></a>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>Full Phone</p>
                      <a href={`tel:${s.phone}`} style={{ fontSize: 13, color: "#6366f1", textDecoration: "none" }}>{s.phone || "—"}</a>
                    </div>
                    {s.message && (
                      <div style={{ gridColumn: "1 / -1" }}>
                        <p style={{ fontSize: 10, fontWeight: 600, color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>Message</p>
                        <p style={{ fontSize: 13, color: t.textMuted, margin: 0, lineHeight: 1.6, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, padding: "10px 14px" }}>{s.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </div>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          * { box-sizing: border-box; }
          ::-webkit-scrollbar { width: 5px; height: 5px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: ${t.scrollbar}; border-radius: 4px; }
          a { transition: opacity 0.12s; }
          a:hover { opacity: 0.8; }
          button:hover { opacity: 0.85; }
          html, body { margin: 0; padding: 0; }
        `}</style>

        {/* Bottom brand strip */}
        <div style={{
          textAlign: "center", padding: "5px 0",
          fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.6)", textTransform: "uppercase", userSelect: "none",
          flexShrink: 0,
        }}>websbond.com &nbsp;·&nbsp; admin panel</div>

      </div>
    </div>
  );
};
