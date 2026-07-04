import { useState } from 'react'
import { getIGAccountStats, getIGInsights } from '../lib/api.js'

const SAMPLE_DATA = [
  { date: 'Jun 28', followers: 5, reach: 0 },
  { date: 'Jun 29', followers: 5, reach: 12 },
  { date: 'Jun 30', followers: 5, reach: 45 },
  { date: 'Jul 1', followers: 5, reach: 89 },
  { date: 'Jul 2', followers: 5, reach: 120 },
  { date: 'Jul 3', followers: 5, reach: 200 },
  { date: 'Jul 4', followers: 5, reach: 350 },
]

export default function Analytics() {
  const [igStats, setIgStats] = useState(() => {
    const saved = localStorage.getItem('wb_ig_stats')
    return saved ? JSON.parse(saved) : null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const accessToken = localStorage.getItem('wb_ig_token') || ''
  const igUserId = localStorage.getItem('wb_ig_user_id') || ''

  const fetchStats = async () => {
    if (!accessToken || !igUserId) {
      setError('Instagram access token and User ID required. Set them in Settings.')
      return
    }
    setLoading(true); setError(null)
    try {
      const stats = await getIGAccountStats(accessToken, igUserId)
      setIgStats(stats)
      localStorage.setItem('wb_ig_stats', JSON.stringify(stats))
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  // Generate basic static strategy object to mock the AI part
  const aiStrategy = { score: 45 }
  const stats = igStats

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>📈</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Analytics</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          Connect your Instagram Graph API to see real account data — followers, reach, impressions, and more.
        </p>
      </div>

      {/* API Setup Banner */}
      {(!accessToken || !igUserId) && (
        <div style={{
          background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: 'var(--radius-lg)', padding: 20, marginBottom: 24,
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: 28 }}>⚙️</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 15 }}>Instagram Graph API Setup Required</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              To see real analytics, you need to:
              <br />1. Create a Meta Developer App at <strong>developers.facebook.com</strong>
              <br />2. Get a long-lived access token with <code style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: 4 }}>instagram_business_manage_insights</code> permission
              <br />3. Get your Instagram Business Account User ID
              <br />4. Paste both in Settings → Instagram API
            </p>
          </div>
          <a href="https://developers.facebook.com/docs/instagram" target="_blank" rel="noreferrer"
            className="btn btn-secondary" style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}>
            Meta Docs →
          </a>
        </div>
      )}

      {/* Fetch Button */}
      {accessToken && igUserId && (
        <div style={{ marginBottom: 24 }}>
          <button className="btn btn-primary" onClick={fetchStats} disabled={loading}>
            {loading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Fetching...</> : '🔄 Fetch Live Data'}
          </button>
        </div>
      )}

      {error && (
        <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius)', color: 'var(--danger)', fontSize: 13, marginBottom: 20 }}>
          ❌ {error}
        </div>
      )}

      {/* Key Metrics Row */}
      {stats && (
        <div className="grid-3" style={{ marginBottom: 24 }}>
          {[
            { label: 'Followers', value: igStats.followers_count, icon: '👥', color: 'var(--accent)' },
            { label: 'Posts', value: igStats.media_count, icon: '📤', color: 'var(--accent-2)' },
            { label: 'Username', value: `@${igStats.name}`, icon: '✅', color: 'var(--success)' },
          ].map(s => (
            <div key={s.label} className="card" style={{ textAlign: 'center', padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* AI Strategist */}
      <div className="card" style={{ marginBottom: 24, border: '1px solid rgba(16,185,129,0.3)', background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.06))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }}>🧠</span> AI Growth Strategist
            </h2>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Live data analysis & actionable advice</p>
          </div>
          {loading ? (
            <div className="spinner" style={{ width: 24, height: 24 }} />
          ) : (
             <div style={{ fontSize: 24 }}>{aiStrategy.score >= 80 ? '🔥' : aiStrategy.score >= 50 ? '📈' : '⚠️'}</div>
          )}
        </div>

        {stats && (
          <div className="fade-in">
             <div className="grid-2" style={{ marginBottom: 16 }}>
               <div style={{ padding: 16, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
                 <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Current Trajectory</div>
                 <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>Aggressive Growth Required</div>
                 <div style={{ fontSize: 12, marginTop: 4 }}>You need {Math.ceil((100000 - igStats.followers_count)/180)} followers/day to hit 100k in 6 months. Current estimated pace requires optimization.</div>
               </div>
               <div style={{ padding: 16, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
                 <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Primary Metric Focus</div>
                 <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent-2)' }}>Engagement & Retention</div>
                 <div style={{ fontSize: 12, marginTop: 4 }}>Focus purely on saves and shares. Stop optimizing for likes. The algorithm pushes high-retention Reels.</div>
               </div>
             </div>
             
             <div style={{ padding: 16, background: 'rgba(139,92,246,0.1)', borderLeft: '4px solid var(--accent)', borderRadius: '0 var(--radius) var(--radius) 0' }}>
               <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>🤖 Today's Action Plan:</h3>
               <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                 <li><strong>Stop broad content:</strong> Your total posts ({igStats.media_count}) is good, but you need higher retention formats.</li>
                 <li><strong>Action:</strong> Shoot a 15-second Reel using the "Trend Analyzer" tool on the dashboard.</li>
                 <li><strong>Hook constraint:</strong> Keep the primary text hook on screen for only 3 seconds to force re-watches.</li>
               </ul>
             </div>
          </div>
        )}
      </div>

      <hr className="glow-divider" />

      {/* Manual Post Logger */}
      <PostLogger />
    </div>
  )
}

function PostLogger() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('wb_post_log')
    return saved ? JSON.parse(saved) : []
  })
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ date: '', topic: '', type: 'Reel', reach: '', likes: '', comments: '', saves: '' })

  const addLog = () => {
    if (!form.topic || !form.date) return
    const updated = [{ ...form, id: Date.now() }, ...posts]
    setPosts(updated)
    localStorage.setItem('wb_post_log', JSON.stringify(updated))
    setForm({ date: '', topic: '', type: 'Reel', reach: '', likes: '', comments: '', saves: '' })
    setShowForm(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 700 }}>Post Performance Log</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
            Manually log each post's metrics to track what content performs best
          </p>
        </div>
        <button className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '+ Log Post'}
        </button>
      </div>

      {showForm && (
        <div className="card fade-in" style={{ marginBottom: 16, border: '1px solid var(--border-glow)' }}>
          <div className="grid-4" style={{ marginBottom: 10 }}>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>DATE</label>
              <input type="date" className="input" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>TYPE</label>
              <select className="input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                {['Reel', 'Carousel', 'Story', 'Live'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>REACH</label>
              <input className="input" type="number" placeholder="0" value={form.reach} onChange={e => setForm({ ...form, reach: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>SAVES</label>
              <input className="input" type="number" placeholder="0" value={form.saves} onChange={e => setForm({ ...form, saves: e.target.value })} />
            </div>
          </div>
          <div className="grid-auto-1">
            <input className="input" placeholder="Post topic..." value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} />
            <button className="btn btn-primary" onClick={addLog}>Save Log</button>
          </div>
        </div>
      )}

      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)', fontSize: 13 }}>
          No posts logged yet. Log your first post to start tracking performance.
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Date', 'Type', 'Topic', 'Reach', 'Saves'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: 'var(--text-muted)', fontSize: 11, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{p.date}</td>
                  <td style={{ padding: '10px 12px' }}><span className="badge badge-purple">{p.type}</span></td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-primary)', maxWidth: 220 }}>{p.topic}</td>
                  <td style={{ padding: '10px 12px', fontWeight: 700, color: 'var(--accent)' }}>{p.reach || '—'}</td>
                  <td style={{ padding: '10px 12px', fontWeight: 700, color: 'var(--success)' }}>{p.saves || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
