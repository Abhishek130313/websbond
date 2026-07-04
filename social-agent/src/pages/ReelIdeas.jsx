import { useState } from 'react'
import { generateReelIdeas } from '../lib/api.js'
import { REEL_HOOKS } from '../data/hashtags.js'

const TYPE_COLORS = {
  educational: 'badge-cyan',
  transformation: 'badge-purple',
  humor: 'badge-pink',
  case_study: 'badge-green',
  resource: 'badge-amber',
}

export default function ReelIdeas() {
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [expanded, setExpanded] = useState(null)
  const [copied, setCopied] = useState(null)

  const apiKey = localStorage.getItem('wb_cf_token') || ''

  const generateIdeas = async () => {
    if (!apiKey) {
      setError('Cloudflare API Token required. Go to Settings to add it.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const result = await generateReelIdeas(apiKey, 'web design and SEO agency in Delhi, India', 3)
      setIdeas(result)
      setExpanded(0)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const copyCaption = (caption, idx) => {
    navigator.clipboard.writeText(caption)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>🎬</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Reel Idea Generator</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          AI generates 3 viral-optimized Reel ideas for today — complete with hooks, scripts, and captions.
        </p>
      </div>

      {/* Generate Button */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
        <button className="btn btn-primary" onClick={generateIdeas} disabled={loading}>
          {loading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Generating...</> : '✨ Generate Today\'s Reel Ideas'}
        </button>
        {!apiKey && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px',
            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 'var(--radius)', fontSize: 13, color: 'var(--warning)',
          }}>
            ⚠️ Add Cloudflare API Token in Settings
          </div>
        )}
      </div>

      {error && (
        <div style={{
          padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: 'var(--radius)', color: 'var(--danger)', fontSize: 13, marginBottom: 20,
        }}>
          ❌ {error}
        </div>
      )}

      {/* AI Generated Ideas */}
      {ideas.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
            ✨ AI-generated ideas for today — click to expand
          </div>
          {ideas.map((idea, idx) => (
            <div key={idx} className="card fade-in" style={{ cursor: 'pointer' }}>
              <div
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span className={`badge ${TYPE_COLORS[idea.type] || 'badge-purple'}`}>{idea.type}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>{idea.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 4 }}>
                    🎯 Hook: {idea.hook}
                  </p>
                </div>
                <span style={{ fontSize: 20, color: 'var(--text-muted)', marginLeft: 16 }}>
                  {expanded === idx ? '▲' : '▼'}
                </span>
              </div>

              {expanded === idx && (
                <div style={{ marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 16 }} className="slide-in">
                  {/* Script */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--accent)', marginBottom: 10 }}>📋 SCRIPT OUTLINE</div>
                    {idea.script && idea.script.map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%', background: 'rgba(139,92,246,0.2)',
                          color: 'var(--accent)', fontWeight: 700, fontSize: 12, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{i + 1}</div>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{
                    padding: '12px 14px',
                    background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)',
                    borderRadius: 'var(--radius)', marginBottom: 16,
                  }}>
                    <span style={{ fontWeight: 700, fontSize: 12, color: 'var(--accent-2)', marginRight: 8 }}>📣 CTA:</span>
                    <span style={{ fontSize: 13 }}>{idea.cta}</span>
                  </div>

                  {/* Caption */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--accent)' }}>📝 CAPTION</div>
                      <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 12 }}
                        onClick={() => copyCaption(idea.caption, idx)}>
                        {copied === idx ? '✓ Copied!' : '📋 Copy Caption'}
                      </button>
                    </div>
                    <div style={{
                      background: 'var(--bg-secondary)', borderRadius: 'var(--radius)',
                      padding: 14, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7,
                      whiteSpace: 'pre-line', fontFamily: 'monospace',
                    }}>
                      {idea.caption}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <hr className="glow-divider" />

      {/* Pre-built Hooks Database */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>📌 Hook Database (Always Available)</h2>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
          Researched hooks that work in web design niche — no API needed. Click to copy.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {REEL_HOOKS.map((item, i) => (
            <div key={i} className="card" style={{ cursor: 'pointer', padding: '14px 16px' }}
              onClick={() => { navigator.clipboard.writeText(item.hook); setCopied('hook_' + i); setTimeout(() => setCopied(null), 1500) }}>
              <span className={`badge ${item.category === 'curiosity' ? 'badge-cyan' : item.category === 'fear' ? 'badge-pink' : item.category === 'humor' ? 'badge-amber' : 'badge-purple'}`} style={{ marginBottom: 8, display: 'inline-flex' }}>
                {item.category}
              </span>
              <p style={{ fontSize: 13, fontWeight: 500, color: copied === 'hook_' + i ? 'var(--success)' : 'var(--text-primary)', lineHeight: 1.5 }}>
                {copied === 'hook_' + i ? '✓ Copied!' : `"${item.hook}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
