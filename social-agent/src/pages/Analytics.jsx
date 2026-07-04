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

      {/* Live IG Stats */}
      {igStats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
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

      {/* Growth Chart (Sample until API connected) */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Follower Growth (Sample Preview)</h2>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Connect Instagram API to see real data</p>
          </div>
          <span className="badge badge-amber">SAMPLE DATA</span>
        </div>

        {/* Simple bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120 }}>
          {SAMPLE_DATA.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: '100%', borderRadius: '4px 4px 0 0',
                height: `${Math.max(4, (d.reach / 350) * 100)}px`,
                background: i === SAMPLE_DATA.length - 1 ? 'var(--gradient-1)' : 'rgba(139,92,246,0.3)',
                transition: 'height 0.3s ease',
              }} />
              <div style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{d.date}</div>
            </div>
          ))}
        </div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 10 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 10 }}>
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
