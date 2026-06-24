import { useState, useEffect } from "react";
import { Shield, RefreshCw, Mail, Phone, Calendar, MessageSquare, User, Loader2, Lock } from "lucide-react";
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

export const AdminPage = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("wb_admin_key") || "");
  const [inputKey, setInputKey] = useState("");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchSubmissions = async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(getApiUrl("/api/admin/contacts"), {
        headers: { "X-Admin-Key": key },
      });
      if (res.status === 401) {
        setError("Invalid admin key. Please try again.");
        setIsLoggedIn(false);
        return;
      }
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setSubmissions(data);
      setIsLoggedIn(true);
      localStorage.setItem("wb_admin_key", key);
      setApiKey(key);
    } catch {
      setError("Failed to connect to backend. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) fetchSubmissions(apiKey);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSubmissions(inputKey);
  };

  const handleLogout = () => {
    localStorage.removeItem("wb_admin_key");
    setApiKey("");
    setIsLoggedIn(false);
    setSubmissions([]);
  };

  const formatDate = (dt: string) => {
    return new Date(dt).toLocaleString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "420px",
          backdropFilter: "blur(20px)",
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{
              width: "60px", height: "60px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "16px",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <Lock size={28} color="white" />
            </div>
            <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: 700, margin: 0 }}>Admin Panel</h1>
            <p style={{ color: "rgba(255,255,255,0.4)", margin: "8px 0 0", fontSize: "14px" }}>Websbond Contact Submissions</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", display: "block", marginBottom: "8px" }}>
                Admin Secret Key
              </label>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="Enter admin key..."
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {error && (
              <div style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: "8px",
                padding: "10px 14px",
                color: "#f87171",
                fontSize: "13px",
                marginBottom: "16px",
              }}>{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {loading ? <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> : <Shield size={18} />}
              {loading ? "Verifying..." : "Access Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
      fontFamily: "'Inter', sans-serif",
      padding: "32px 24px",
    }}>
      {/* Header */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div>
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: 700, margin: 0 }}>
            📋 Contact Submissions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", margin: "4px 0 0", fontSize: "14px" }}>
            {submissions.length} total submissions
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => fetchSubmissions(apiKey)}
            style={{
              padding: "10px 18px",
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "10px",
              color: "#a5b4fc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <RefreshCw size={15} /> Refresh
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 18px",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "10px",
              color: "#f87171",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", paddingTop: "60px" }}>
            <Loader2 size={32} style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", display: "block" }} />
            Loading submissions...
          </div>
        ) : submissions.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "80px 20px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: "16px",
            border: "1px dashed rgba(255,255,255,0.08)",
          }}>
            <MessageSquare size={40} color="rgba(255,255,255,0.2)" style={{ margin: "0 auto 16px", display: "block" }} />
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px", margin: 0 }}>No submissions yet</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {submissions.slice().reverse().map((s) => (
              <div key={s.id} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(10px)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "44px", height: "44px",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      borderRadius: "12px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <User size={20} color="white" />
                    </div>
                    <div>
                      <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "16px", margin: 0 }}>{s.name}</h3>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: "2px 0 0" }}>#{s.id}</p>
                    </div>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    color: "rgba(255,255,255,0.35)", fontSize: "12px",
                  }}>
                    <Calendar size={13} />
                    {s.submittedAt ? formatDate(s.submittedAt) : "—"}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
                    <Mail size={14} color="#6366f1" />
                    <a href={`mailto:${s.email}`} style={{ color: "#a5b4fc", textDecoration: "none" }}>{s.email}</a>
                  </div>
                  {s.phone && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
                      <Phone size={14} color="#10b981" />
                      <a href={`tel:${s.phone}`} style={{ color: "#6ee7b7", textDecoration: "none" }}>{s.phone}</a>
                    </div>
                  )}
                </div>

                {s.subject && (
                  <div style={{
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    marginBottom: "10px",
                    fontSize: "13px",
                    color: "#c7d2fe",
                  }}>
                    🎯 {s.subject}
                  </div>
                )}

                {s.message && (
                  <div style={{
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}>
                    💬 {s.message}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
