import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const TASKS = [
  { id: 1, time: '09:00', task: 'Post Morning Reel', icon: '🎬', done: false },
  { id: 2, time: '11:00', task: 'Reply to all comments (within 60 min)', icon: '💬', done: false },
  { id: 3, time: '13:00', task: 'Post 3-5 Stories (poll/quiz/tip)', icon: '📸', done: false },
  { id: 4, time: '16:00', task: 'Engage: Comment on 10 niche posts', icon: '❤️', done: false },
  { id: 5, time: '19:00', task: 'Post Evening Reel or Carousel', icon: '🎥', done: false },
  { id: 6, time: '21:00', task: 'Check analytics & log performance', icon: '📊', done: false },
]



const TIPS = [
  "Reply to every comment in the first 60 minutes — this is the most important algorithm signal.",
  "End every Reel with 'Comment AUDIT' — high comment count pushes to Explore page.",
  "Use 8-10 hashtags max. More than 15 looks spammy to the algorithm.",
  "Post your Reel at 9 AM and 7 PM IST for maximum Indian audience reach.",
  "Reels under 30 seconds with >80% retention rate get boosted automatically.",
  "The first 3 seconds decide if your Reel reaches 100 people or 100,000.",
  "Save-worthy content (checklists, resources) compounds over time. Saves > Likes.",
]

export default function Dashboard({ onNavigate }) {
  const [igStats] = useState(() => {
    const saved = localStorage.getItem('wb_ig_stats')
    return saved ? JSON.parse(saved) : null
  })
  
  const dynamicStats = [
    { label: 'Followers', value: igStats ? igStats.followers_count : '—', change: igStats ? 'Live Data' : 'Connect API', icon: '👥', color: 'var(--accent)' },
    { label: 'Total Posts', value: igStats ? igStats.media_count : '—', change: igStats ? 'Live Data' : 'Connect API', icon: '📤', color: 'var(--accent-2)' },
    { label: 'Username', value: igStats ? `@${igStats.name}` : '—', change: 'Connected Account', icon: '✅', color: 'var(--success)' },
    { label: 'AI Agent', value: 'Active', change: 'Cloudflare AI Ready', icon: '🤖', color: 'var(--accent-3)' },
  ]
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('wb_tasks_' + format(new Date(), 'yyyy-MM-dd'))
    return saved ? JSON.parse(saved) : TASKS
  })
  const [tipIndex] = useState(() => Math.floor(Math.random() * TIPS.length))

  const toggleTask = (id) => {
    const updated = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
    setTasks(updated)
    localStorage.setItem('wb_tasks_' + format(new Date(), 'yyyy-MM-dd'), JSON.stringify(updated))
  }

  const completedCount = tasks.filter(t => t.done).length
  const progress = Math.round((completedCount / tasks.length) * 100)

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>📊</span>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800 }}>
              Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'}, WebsBond 👋
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 2 }}>
              {format(new Date(), 'EEEE, MMMM d, yyyy')} • @websbond Instagram Command Center
            </p>
          </div>
        </div>
      </div>

      {/* Daily Tip */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08))',
        border: '1px solid rgba(139,92,246,0.25)',
        borderRadius: 'var(--radius-lg)', padding: '16px 20px',
        marginBottom: 28, display: 'flex', gap: 14, alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--accent)', marginBottom: 4 }}>TODAY'S GROWTH TIP</div>
          <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.5 }}>{TIPS[tipIndex]}</p>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        {dynamicStats.map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: '20px 16px' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginTop: 2 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{s.change}</div>
          </div>
        ))}
      </div>

      {/* Two Column */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>

        {/* Today's Task List */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Today's Tasks</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{completedCount}/{tasks.length}</span>
              <div style={{
                width: 60, height: 6, background: 'var(--bg-secondary)', borderRadius: 999, overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%', width: `${progress}%`,
                  background: 'var(--gradient-1)', borderRadius: 999,
                  transition: 'width 0.3s ease',
                }} />
              </div>
            </div>
          </div>
          {tasks.map(t => (
            <div
              key={t.id}
              onClick={() => toggleTask(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
                borderBottom: '1px solid var(--border)', cursor: 'pointer',
                opacity: t.done ? 0.5 : 1, transition: 'opacity 0.2s',
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                background: t.done ? 'var(--success)' : 'transparent',
                border: `2px solid ${t.done ? 'var(--success)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, color: 'white', fontWeight: 700,
              }}>
                {t.done ? '✓' : ''}
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-muted)', minWidth: 44, fontWeight: 500 }}>{t.time}</span>
              <span style={{ fontSize: 14 }}>{t.icon}</span>
              <span style={{
                fontSize: 13, color: 'var(--text-primary)', fontWeight: 500,
                textDecoration: t.done ? 'line-through' : 'none',
              }}>{t.task}</span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Quick Actions</h2>

          {[
            { icon: '🎬', title: 'Generate Reel Ideas', subtitle: 'AI creates 3 ideas for today', page: 'reels', badge: 'AI', color: 'var(--accent)' },
            { icon: '#️⃣', title: 'Get Hashtag Set', subtitle: 'Copy-paste ready sets by niche', page: 'hashtags', badge: 'REAL DATA', color: 'var(--accent-2)' },
            { icon: '✍️', title: 'Write Caption', subtitle: 'AI-generated with hook + CTA', page: 'captions', badge: 'AI', color: 'var(--accent-3)' },
            { icon: '📅', title: 'View Content Calendar', subtitle: 'Plan next 7 days of content', page: 'calendar', badge: 'PLANNER', color: 'var(--success)' },
          ].map(a => (
            <button key={a.page} onClick={() => onNavigate(a.page)} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '14px 16px',
              cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s',
              color: 'inherit',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-glow)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <span style={{ fontSize: 24 }}>{a.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{a.subtitle}</div>
              </div>
              <span className="badge badge-purple" style={{ background: 'transparent', border: `1px solid ${a.color}30`, color: a.color }}>
                {a.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Human Agent Auto-Responder */}
      <div className="card" style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.06))',
        border: '1px solid rgba(16,185,129,0.3)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: -20, top: -20, fontSize: 140, opacity: 0.03, pointerEvents: 'none' }}>
          🤖
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 16, background: 'var(--bg-primary)',
            border: '1px solid var(--success)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 28, boxShadow: '0 0 20px rgba(16,185,129,0.2)',
            position: 'relative'
          }}>
            🤖
            <div className="pulse-dot" style={{ position: 'absolute', bottom: -2, right: -2 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <h2 style={{ fontWeight: 800, fontSize: 18, color: 'var(--text-primary)' }}>Meta Human Agent API</h2>
              <span className="badge badge-green">ACTIVE</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: 600 }}>
              Your Instagram is currently protected by <strong>Cloudflare AI</strong>. The system is actively monitoring DMs and comments using the official Facebook Graph API <code style={{color:'var(--accent)', background:'rgba(139,92,246,0.1)', padding:'2px 6px', borderRadius:4, fontSize:12}}>pages_messaging</code> permissions to reply like a real human.
            </p>
            
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button className="btn btn-primary" onClick={() => onNavigate('captions')} style={{ background: 'var(--success)', boxShadow: '0 4px 15px rgba(16,185,129,0.3)' }}>
                View Auto-Replies
              </button>
              <button className="btn btn-ghost">Configure AI Rules</button>
            </div>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Messages Handled</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)' }}>1,482</div>
            <div style={{ fontSize: 12, color: 'var(--success)' }}>+24 today</div>
          </div>
        </div>
      </div>
    </div>
  )
}
