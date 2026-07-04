import { useState } from 'react'
import { format, addDays, startOfWeek } from 'date-fns'

const CONTENT_TYPES = [
  { type: 'Reel', icon: '🎬', color: 'var(--accent)' },
  { type: 'Carousel', icon: '📊', color: 'var(--accent-2)' },
  { type: 'Story', icon: '📸', color: 'var(--accent-3)' },
  { type: 'Live', icon: '🔴', color: 'var(--danger)' },
]

const SLOT_TIMES = ['09:00', '13:00', '19:00', '21:00']

const SAMPLE_IDEAS = [
  { day: 0, time: '09:00', type: 'Reel', topic: 'Speed Test Delhi Business Websites', done: false },
  { day: 0, time: '19:00', type: 'Reel', topic: '₹5L vs ₹5K Website Comparison', done: false },
  { day: 1, time: '09:00', type: 'Carousel', topic: '5 Signs Your Website Needs a Redesign', done: false },
  { day: 1, time: '19:00', type: 'Reel', topic: 'Why Your Business Doesn\'t Show on Google', done: false },
  { day: 2, time: '09:00', type: 'Reel', topic: 'Free Tools Every Business Owner Needs', done: false },
  { day: 2, time: '13:00', type: 'Story', topic: 'Poll: Does your site load in under 3 seconds?', done: false },
  { day: 3, time: '09:00', type: 'Reel', topic: 'POV: Client Wants a Site Like Zomato for ₹1500', done: false },
  { day: 3, time: '19:00', type: 'Carousel', topic: 'SEO Checklist for Indian Businesses 2025', done: false },
  { day: 4, time: '09:00', type: 'Reel', topic: 'Before/After: Client Website Redesign', done: false },
  { day: 4, time: '19:00', type: 'Reel', topic: 'How We Got a Client to Page 1 on Google', done: false },
  { day: 5, time: '10:00', type: 'Carousel', topic: 'Weekly Tip Roundup: Web Design Hacks', done: false },
  { day: 6, time: '11:00', type: 'Story', topic: 'What content do you want this week? (Poll)', done: false },
]

export default function ContentCalendar() {
  const today = new Date()
  const weekStart = startOfWeek(today, { weekStartsOn: 1 })
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('wb_calendar')
    return saved ? JSON.parse(saved) : SAMPLE_IDEAS
  })
  const [showAdd, setShowAdd] = useState(false)
  const [newPost, setNewPost] = useState({ day: 0, time: '09:00', type: 'Reel', topic: '' })

  const days = Array.from({ length: 7 }, (_, i) => ({
    date: addDays(weekStart, i),
    label: format(addDays(weekStart, i), 'EEE'),
    dayNum: format(addDays(weekStart, i), 'd'),
    isToday: format(addDays(weekStart, i), 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd'),
    index: i,
  }))

  const toggleDone = (idx) => {
    const updated = posts.map((p, i) => i === idx ? { ...p, done: !p.done } : p)
    setPosts(updated)
    localStorage.setItem('wb_calendar', JSON.stringify(updated))
  }

  const addPost = () => {
    if (!newPost.topic.trim()) return
    const updated = [...posts, { ...newPost }]
    setPosts(updated)
    localStorage.setItem('wb_calendar', JSON.stringify(updated))
    setNewPost({ day: 0, time: '09:00', type: 'Reel', topic: '' })
    setShowAdd(false)
  }

  const removePost = (idx) => {
    const updated = posts.filter((_, i) => i !== idx)
    setPosts(updated)
    localStorage.setItem('wb_calendar', JSON.stringify(updated))
  }

  const typeInfo = (type) => CONTENT_TYPES.find(c => c.type === type) || CONTENT_TYPES[0]

  const totalDone = posts.filter(p => p.done).length

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ fontSize: 28 }}>📅</span>
            <h1 style={{ fontSize: 24, fontWeight: 800 }}>Content Calendar</h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
            Week of {format(weekStart, 'MMMM d')} — {totalDone}/{posts.length} posts done
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? '✕ Cancel' : '+ Add Post'}
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 999, marginBottom: 28, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${posts.length ? (totalDone / posts.length) * 100 : 0}%`,
          background: 'var(--gradient-1)', borderRadius: 999, transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Add Post Form */}
      {showAdd && (
        <div className="card fade-in" style={{ marginBottom: 24, border: '1px solid var(--border-glow)' }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Add New Post</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>DAY</label>
              <select className="input" value={newPost.day} onChange={e => setNewPost({ ...newPost, day: +e.target.value })}>
                {days.map((d, i) => <option key={i} value={i}>{d.label} {d.dayNum}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>TIME</label>
              <select className="input" value={newPost.time} onChange={e => setNewPost({ ...newPost, time: e.target.value })}>
                {SLOT_TIMES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>TYPE</label>
              <select className="input" value={newPost.type} onChange={e => setNewPost({ ...newPost, type: e.target.value })}>
                {CONTENT_TYPES.map(c => <option key={c.type}>{c.type}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={addPost}>Add →</button>
            </div>
          </div>
          <input className="input" value={newPost.topic} onChange={e => setNewPost({ ...newPost, topic: e.target.value })}
            placeholder="Content topic / idea..." />
        </div>
      )}

      {/* Week Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
        {days.map(day => {
          const dayPosts = posts
            .map((p, i) => ({ ...p, idx: i }))
            .filter(p => p.day === day.index)
            .sort((a, b) => a.time.localeCompare(b.time))

          return (
            <div key={day.index} style={{
              background: day.isToday ? 'rgba(139,92,246,0.08)' : 'var(--bg-card)',
              border: `1px solid ${day.isToday ? 'var(--border-glow)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)', padding: 12, minHeight: 200,
            }}>
              {/* Day Header */}
              <div style={{ marginBottom: 10, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {day.label}
                </div>
                <div style={{
                  fontSize: 20, fontWeight: 800, marginTop: 2,
                  color: day.isToday ? 'var(--accent)' : 'var(--text-primary)',
                }}>
                  {day.dayNum}
                  {day.isToday && <span style={{ fontSize: 10, background: 'var(--accent)', color: 'white', borderRadius: 999, padding: '1px 6px', marginLeft: 6, verticalAlign: 'middle', fontWeight: 700 }}>TODAY</span>}
                </div>
              </div>

              {/* Posts */}
              {dayPosts.map(post => {
                const t = typeInfo(post.type)
                return (
                  <div key={post.idx} style={{
                    background: post.done ? 'rgba(16,185,129,0.08)' : 'var(--bg-secondary)',
                    borderRadius: 8, padding: '8px 10px', marginBottom: 8,
                    opacity: post.done ? 0.65 : 1, cursor: 'pointer',
                    border: `1px solid ${post.done ? 'rgba(16,185,129,0.2)' : 'var(--border)'}`,
                    transition: 'all 0.15s',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)' }}>{post.time}</span>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <span style={{ fontSize: 14 }} onClick={() => toggleDone(post.idx)}>{post.done ? '✅' : t.icon}</span>
                        <span style={{ fontSize: 11, cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => removePost(post.idx)}>✕</span>
                      </div>
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 600, color: t.color, marginBottom: 3,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>{post.type}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4, textDecoration: post.done ? 'line-through' : 'none' }}>
                      {post.topic}
                    </div>
                  </div>
                )
              })}

              {dayPosts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 11, paddingTop: 20 }}>
                  No posts planned
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
