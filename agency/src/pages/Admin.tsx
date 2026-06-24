import { useState, useEffect, useMemo } from "react";
import {
  Shield, RefreshCw, Mail, Phone, MessageCircle, User,
  Loader2, Lock, LogOut, Search, Download, ChevronDown,
  ChevronUp, Clock, Inbox, CheckCircle, Star, StarOff,
  ExternalLink, Filter, X
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

type SortKey = "submittedAt" | "name";

/* ─── helpers ─── */
const fmtDate = (dt: string) =>
  new Date(dt).toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

const isToday = (dt: string) => {
  const d = new Date(dt);
  const n = new Date();
  return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
};

const whatsappUrl = (phone: string, name: string) => {
  const cleaned = phone.replace(/\D/g, "");
  const num = cleaned.startsWith("0") ? "91" + cleaned.slice(1) : cleaned.length === 10 ? "91" + cleaned : cleaned;
  const msg = encodeURIComponent(`Hi ${name}, Thank you for reaching out to Websbond! We'd love to discuss your project. When would be a good time to connect?`);
  return `https://wa.me/${num}?text=${msg}`;
};

const gmailUrl = (email: string, name: string, subject: string) => {
  const sub = encodeURIComponent(`Re: Your Websbond inquiry – ${subject || "Project Brief"}`);
  const body = encodeURIComponent(`Hi ${name},\n\nThank you for reaching out to Websbond!\n\nWe've reviewed your project brief and would love to discuss how we can help you.\n\nBest regards,\nTeam Websbond\n+91 9306623619 | websbond.com`);
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${sub}&body=${body}`;
};

/* ─── Login Screen ─── */
const LoginScreen = ({ onLogin, loading, error }: { onLogin: (k: string) => void; loading: boolean; error: string }) => {
  const [key, setKey] = useState("");
  return (
    <div style={styles.loginBg}>
      <div style={styles.loginCard}>
        <div style={styles.loginIcon}><Shield size={22} color="#fff" /></div>
        <h1 style={styles.loginTitle}>Websbond Admin</h1>
        <p style={styles.loginSub}>Contact Submissions Dashboard</p>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(key); }} style={{ width: "100%" }}>
          <input
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="Enter admin key…"
            required
            style={styles.loginInput}
          />
          {error && <div style={styles.errorBadge}>{error}</div>}
          <button type="submit" disabled={loading} style={styles.loginBtn}>
            {loading ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> : <Lock size={15} />}
            {loading ? "Verifying…" : "Access Dashboard"}
          </button>
        </form>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
};

/* ─── Stat Chip ─── */
const Stat = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div style={{ ...styles.statChip, borderColor: color + "30", background: color + "10" }}>
    <span style={{ ...styles.statVal, color }}>{value}</span>
    <span style={styles.statLabel}>{label}</span>
  </div>
);

/* ─── Main Admin Page ─── */
export const AdminPage = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("wb_admin_key") || "");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("submittedAt");
  const [sortAsc, setSortAsc] = useState(false);
  const [starred, setStarred] = useState<Set<number>>(new Set(JSON.parse(localStorage.getItem("wb_starred") || "[]")));
  const [contacted, setContacted] = useState<Set<number>>(new Set(JSON.parse(localStorage.getItem("wb_contacted") || "[]")));
  const [filterContacted, setFilterContacted] = useState<"all" | "pending" | "done">("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const fetch_ = async (key: string, isLogin = false) => {
    isLogin ? setLoginLoading(true) : setLoading(true);
    setError("");
    try {
      const res = await fetch(getApiUrl("/api/admin/contacts"), { headers: { "X-Admin-Key": key } });
      if (res.status === 401) { setError("Invalid admin key."); setIsLoggedIn(false); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSubmissions(data);
      setIsLoggedIn(true);
      localStorage.setItem("wb_admin_key", key);
      setApiKey(key);
    } catch { setError("Cannot connect to backend."); }
    finally { setLoginLoading(false); setLoading(false); }
  };

  useEffect(() => { if (apiKey) fetch_(apiKey); }, []);

  const toggleStar = (id: number) => {
    setStarred(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      localStorage.setItem("wb_starred", JSON.stringify([...n]));
      return n;
    });
  };

  const toggleContacted = (id: number) => {
    setContacted(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      localStorage.setItem("wb_contacted", JSON.stringify([...n]));
      return n;
    });
  };

  const exportCSV = () => {
    const hdr = ["ID", "Name", "Email", "Phone", "Subject", "Message", "Submitted At"];
    const rows = filtered.map(s => [s.id, s.name, s.email, s.phone, s.subject, s.message, s.submittedAt].map(v => `"${String(v || "").replace(/"/g, '""')}"`));
    const csv = [hdr, ...rows].map(r => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `websbond-contacts-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const filtered = useMemo(() => {
    let list = [...submissions];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(s => s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q) || s.phone?.includes(q) || s.subject?.toLowerCase().includes(q));
    }
    if (filterContacted === "pending") list = list.filter(s => !contacted.has(s.id));
    if (filterContacted === "done") list = list.filter(s => contacted.has(s.id));
    list.sort((a, b) => {
      const va = sortKey === "name" ? a.name : a.submittedAt;
      const vb = sortKey === "name" ? b.name : b.submittedAt;
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return list;
  }, [submissions, search, sortKey, sortAsc, filterContacted, contacted]);

  const todayCount = submissions.filter(s => s.submittedAt && isToday(s.submittedAt)).length;
  const pendingCount = submissions.filter(s => !contacted.has(s.id)).length;

  if (!isLoggedIn) return <LoginScreen onLogin={k => fetch_(k, true)} loading={loginLoading} error={error} />;

  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={styles.topIcon}><Shield size={15} color="#6366f1" /></div>
          <span style={styles.topTitle}>Websbond Admin</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={() => fetch_(apiKey)} style={styles.iconBtn} title="Refresh">
            {loading ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <RefreshCw size={14} />}
          </button>
          <button onClick={exportCSV} style={styles.iconBtn} title="Export CSV">
            <Download size={14} />
          </button>
          <button onClick={() => { localStorage.removeItem("wb_admin_key"); setIsLoggedIn(false); setSubmissions([]); }} style={{ ...styles.iconBtn, color: "#f87171" }} title="Logout">
            <LogOut size={14} />
          </button>
        </div>
      </div>

      <div style={styles.container}>
        {/* Stats Row */}
        <div style={styles.statsRow}>
          <Stat label="Total" value={submissions.length} color="#6366f1" />
          <Stat label="Today" value={todayCount} color="#10b981" />
          <Stat label="Pending" value={pendingCount} color="#f59e0b" />
          <Stat label="Starred" value={starred.size} color="#ec4899" />
        </div>

        {/* Toolbar */}
        <div style={styles.toolbar}>
          <div style={styles.searchWrap}>
            <Search size={13} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search name, email, phone…"
              style={styles.searchInput}
            />
            {search && <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}><X size={12} color="rgba(255,255,255,0.3)" /></button>}
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(["all", "pending", "done"] as const).map(f => (
              <button key={f} onClick={() => setFilterContacted(f)} style={{ ...styles.filterBtn, ...(filterContacted === f ? styles.filterBtnActive : {}) }}>
                <Filter size={11} /> {f === "all" ? "All" : f === "pending" ? "Pending" : "Contacted"}
              </button>
            ))}
            <button onClick={() => { setSortKey(k => k === "name" ? "submittedAt" : "name"); }} style={styles.filterBtn}>
              Sort: {sortKey === "name" ? "Name" : "Date"}
            </button>
            <button onClick={() => setSortAsc(a => !a)} style={styles.filterBtn}>
              {sortAsc ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
            </button>
          </div>
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <Inbox size={28} color="rgba(255,255,255,0.15)" />
            <p style={{ color: "rgba(255,255,255,0.25)", margin: "8px 0 0", fontSize: 13 }}>No submissions found</p>
          </div>
        ) : (
          <div style={styles.list}>
            {filtered.map(s => {
              const isExpanded = expanded === s.id;
              const isDone = contacted.has(s.id);
              const isStarred = starred.has(s.id);
              return (
                <div key={s.id} style={{ ...styles.card, ...(isDone ? styles.cardDone : {}), ...(isStarred ? styles.cardStarred : {}) }}>
                  {/* Card Header */}
                  <div style={styles.cardHeader} onClick={() => setExpanded(isExpanded ? null : s.id)}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                      <div style={{ ...styles.avatar, ...(isDone ? { background: "linear-gradient(135deg,#10b981,#059669)" } : {}) }}>
                        {isDone ? <CheckCircle size={14} color="#fff" /> : <User size={14} color="#fff" />}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={styles.cardName}>{s.name}</div>
                        <div style={styles.cardEmail}>{s.email}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <span style={styles.cardDate}>
                        <Clock size={10} style={{ marginRight: 3 }} />{s.submittedAt ? fmtDate(s.submittedAt) : "—"}
                      </span>
                      {isExpanded ? <ChevronUp size={13} color="rgba(255,255,255,0.3)" /> : <ChevronDown size={13} color="rgba(255,255,255,0.3)" />}
                    </div>
                  </div>

                  {/* Subject pill */}
                  {s.subject && (
                    <div style={styles.subjectPill}>🎯 {s.subject}</div>
                  )}

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div style={styles.expandedSection}>
                      {s.message && (
                        <div style={styles.messageBox}>
                          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, display: "block", marginBottom: 4 }}>MESSAGE</span>
                          {s.message}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Row */}
                  <div style={styles.actionRow}>
                    <div style={{ display: "flex", gap: 6 }}>
                      {/* Gmail */}
                      <a href={gmailUrl(s.email, s.name, s.subject)} target="_blank" rel="noopener noreferrer" style={{ ...styles.actionBtn, ...styles.actionGmail }} title="Reply via Gmail">
                        <Mail size={12} /> Gmail
                      </a>
                      {/* WhatsApp */}
                      {s.phone && (
                        <a href={whatsappUrl(s.phone, s.name)} target="_blank" rel="noopener noreferrer" style={{ ...styles.actionBtn, ...styles.actionWA }} title="WhatsApp">
                          <MessageCircle size={12} /> WhatsApp
                        </a>
                      )}
                      {/* Call */}
                      {s.phone && (
                        <a href={`tel:${s.phone}`} style={{ ...styles.actionBtn, ...styles.actionCall }} title="Call">
                          <Phone size={12} /> Call
                        </a>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      {/* Star */}
                      <button onClick={() => toggleStar(s.id)} style={{ ...styles.iconBtn2, color: isStarred ? "#fbbf24" : "rgba(255,255,255,0.25)" }} title={isStarred ? "Unstar" : "Star"}>
                        {isStarred ? <Star size={13} fill="#fbbf24" /> : <StarOff size={13} />}
                      </button>
                      {/* Mark contacted */}
                      <button onClick={() => toggleContacted(s.id)} style={{ ...styles.iconBtn2, color: isDone ? "#10b981" : "rgba(255,255,255,0.25)" }} title={isDone ? "Mark pending" : "Mark contacted"}>
                        <CheckCircle size={13} fill={isDone ? "#10b981" : "none"} />
                      </button>
                      {/* Open email externally */}
                      <a href={`mailto:${s.email}`} style={{ ...styles.iconBtn2, textDecoration: "none", color: "rgba(255,255,255,0.25)" }} title="Open mail client">
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        a:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
};

/* ─── Styles ─── */
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0d0d14",
    fontFamily: "'Inter', -apple-system, sans-serif",
    color: "#e2e8f0",
  },
  topBar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "12px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(10px)",
    position: "sticky", top: 0, zIndex: 10,
  },
  topIcon: {
    width: 28, height: 28,
    background: "rgba(99,102,241,0.15)",
    border: "1px solid rgba(99,102,241,0.25)",
    borderRadius: 8,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  topTitle: { fontWeight: 600, fontSize: 14, color: "#fff" },
  iconBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 7,
    padding: "6px 10px",
    color: "rgba(255,255,255,0.5)",
    cursor: "pointer",
    display: "flex", alignItems: "center", gap: 5,
    fontSize: 12,
    transition: "all 0.15s",
  },
  container: { maxWidth: 760, margin: "0 auto", padding: "20px 16px" },
  statsRow: { display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" },
  statChip: {
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "8px 16px",
    border: "1px solid",
    borderRadius: 10,
    minWidth: 70,
    flex: 1,
  },
  statVal: { fontWeight: 700, fontSize: 20, lineHeight: 1 },
  statLabel: { color: "rgba(255,255,255,0.35)", fontSize: 10, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.05em" },
  toolbar: {
    display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center",
  },
  searchWrap: {
    flex: 1, minWidth: 160,
    display: "flex", alignItems: "center", gap: 8,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "7px 10px",
  },
  searchInput: {
    flex: 1, background: "none", border: "none", outline: "none",
    color: "#fff", fontSize: 13,
    width: "100%",
  },
  filterBtn: {
    display: "flex", alignItems: "center", gap: 4,
    padding: "6px 10px", fontSize: 11,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 7, color: "rgba(255,255,255,0.45)", cursor: "pointer",
  },
  filterBtnActive: {
    background: "rgba(99,102,241,0.15)",
    border: "1px solid rgba(99,102,241,0.3)",
    color: "#a5b4fc",
  },
  list: { display: "flex", flexDirection: "column", gap: 8 },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardDone: { opacity: 0.65 },
  cardStarred: { borderColor: "rgba(251,191,36,0.2)" },
  cardHeader: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "12px 14px",
    cursor: "pointer",
    gap: 8,
  },
  avatar: {
    width: 32, height: 32, flexShrink: 0,
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    borderRadius: 9,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  cardName: { fontWeight: 600, fontSize: 14, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  cardEmail: { fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  cardDate: {
    display: "flex", alignItems: "center",
    fontSize: 10, color: "rgba(255,255,255,0.25)",
    whiteSpace: "nowrap",
  },
  subjectPill: {
    margin: "0 14px 8px",
    padding: "5px 10px",
    background: "rgba(99,102,241,0.08)",
    border: "1px solid rgba(99,102,241,0.12)",
    borderRadius: 6,
    fontSize: 11,
    color: "#c7d2fe",
  },
  expandedSection: { padding: "0 14px 10px" },
  messageBox: {
    padding: "10px 12px",
    background: "rgba(255,255,255,0.02)",
    borderRadius: 8,
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    lineHeight: 1.6,
  },
  actionRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "8px 14px",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    flexWrap: "wrap",
    gap: 6,
  },
  actionBtn: {
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500,
    textDecoration: "none", border: "1px solid",
    cursor: "pointer",
  },
  actionGmail: {
    background: "rgba(234,67,53,0.1)", borderColor: "rgba(234,67,53,0.25)", color: "#fca5a5",
  },
  actionWA: {
    background: "rgba(37,211,102,0.08)", borderColor: "rgba(37,211,102,0.2)", color: "#86efac",
  },
  actionCall: {
    background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#93c5fd",
  },
  iconBtn2: {
    background: "none", border: "none", cursor: "pointer", padding: 4,
    display: "flex", alignItems: "center", borderRadius: 5,
    transition: "opacity 0.15s",
  },
  empty: {
    textAlign: "center", padding: "48px 20px",
    border: "1px dashed rgba(255,255,255,0.06)", borderRadius: 12,
    display: "flex", flexDirection: "column", alignItems: "center",
  },
  /* Login */
  loginBg: {
    minHeight: "100vh",
    background: "#0d0d14",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Inter', sans-serif",
  },
  loginCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: "36px 32px",
    width: "100%", maxWidth: 360,
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
  },
  loginIcon: {
    width: 44, height: 44,
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    borderRadius: 12,
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: 4,
  },
  loginTitle: { color: "#fff", fontSize: 20, fontWeight: 700, margin: 0 },
  loginSub: { color: "rgba(255,255,255,0.35)", fontSize: 12, margin: "0 0 16px" },
  loginInput: {
    width: "100%", padding: "10px 14px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 9, color: "#fff", fontSize: 13, outline: "none",
    marginBottom: 10,
  },
  errorBadge: {
    background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
    borderRadius: 7, padding: "7px 12px", color: "#f87171", fontSize: 12, marginBottom: 10,
  },
  loginBtn: {
    width: "100%", padding: "11px",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    border: "none", borderRadius: 9, color: "#fff", fontWeight: 600,
    fontSize: 14, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
  },
};
