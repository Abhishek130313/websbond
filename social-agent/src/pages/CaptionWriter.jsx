import { useState } from 'react'
import { generateCaption, generateCommentReply } from '../lib/api.js'
import { REEL_HASHTAG_SETS } from '../data/hashtags.js'

const REEL_TYPES = ['educational', 'transformation', 'humor', 'case_study', 'resource']

export default function CaptionWriter() {
  const [mode, setMode] = useState('caption') // 'caption' | 'reply'
  const [topic, setTopic] = useState('')
  const [reelType, setReelType] = useState('educational')
  const [hashtagSet, setHashtagSet] = useState('speed_test')
  const [caption, setCaption] = useState('')
  const [comment, setComment] = useState('')
  const [postContext, setPostContext] = useState('')
  const [replies, setReplies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(null)

  const apiKey = localStorage.getItem('wb_cf_token') || ''

  const handleGenerateCaption = async () => {
    if (!apiKey) { setError('Add Cloudflare API Token in Settings'); return }
    if (!topic.trim()) { setError('Enter a Reel topic'); return }
    setLoading(true); setError(null)
    try {
      const hashtags = REEL_HASHTAG_SETS[hashtagSet] || []
      const result = await generateCaption(apiKey, topic, reelType, hashtags)
      setCaption(result)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  const handleGenerateReplies = async () => {
    if (!apiKey) { setError('Add Cloudflare API Token in Settings'); return }
    if (!comment.trim()) { setError('Enter the comment you want to reply to'); return }
    setLoading(true); setError(null)
    try {
      const result = await generateCommentReply(apiKey, comment, postContext)
      setReplies(result)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>✍️</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Caption & Reply Writer</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          AI writes Instagram-optimized captions with hooks, CTAs, and hashtags — plus reply drafts for comments.
        </p>
      </div>

      <div className="tabs" style={{ marginBottom: 24, maxWidth: 340 }}>
        <button className={`tab ${mode === 'caption' ? 'active' : ''}`} onClick={() => setMode('caption')}>Write Caption</button>
        <button className={`tab ${mode === 'reply' ? 'active' : ''}`} onClick={() => setMode('reply')}>Reply to Comment</button>
      </div>

      {error && (
        <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius)', color: 'var(--danger)', fontSize: 13, marginBottom: 20 }}>
          ❌ {error}
        </div>
      )}

      {/* Caption Generator */}
      {mode === 'caption' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Input */}
          <div className="card">
            <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Caption Settings</h2>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                REEL TOPIC *
              </label>
              <textarea
                className="input"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="e.g. Why slow websites lose 50% of customers..."
                rows={3}
              />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>REEL TYPE</label>
              <select className="input" value={reelType} onChange={e => setReelType(e.target.value)}>
                {REEL_TYPES.map(t => <option key={t} value={t}>{t.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>HASHTAG SET</label>
              <select className="input" value={hashtagSet} onChange={e => setHashtagSet(e.target.value)}>
                {Object.keys(REEL_HASHTAG_SETS).map(k => (
                  <option key={k} value={k}>{k.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleGenerateCaption} disabled={loading}>
              {loading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Writing...</> : '✨ Write Caption'}
            </button>
          </div>

          {/* Output */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700 }}>Generated Caption</h2>
              {caption && (
                <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 12 }}
                  onClick={() => copyText(caption, 'caption')}>
                  {copied === 'caption' ? '✓ Copied!' : '📋 Copy'}
                </button>
              )}
            </div>

            {caption ? (
              <div style={{
                background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 16,
                fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-line', color: 'var(--text-primary)',
                minHeight: 200, fontFamily: 'monospace',
              }}>
                {caption}
              </div>
            ) : (
              <div style={{
                height: 200, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 12,
                color: 'var(--text-muted)', textAlign: 'center',
              }}>
                <span style={{ fontSize: 40 }}>✍️</span>
                <div style={{ fontSize: 13 }}>Fill in the settings and click "Write Caption"</div>
              </div>
            )}

            {!apiKey && (
              <div style={{ marginTop: 12, fontSize: 12, color: 'var(--warning)', textAlign: 'center' }}>
                ⚠️ Requires Cloudflare API Token (add in Settings)
              </div>
            )}
          </div>
        </div>
      )}

      {/* Comment Reply Generator */}
      {mode === 'reply' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="card">
            <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Comment Details</h2>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                POST CONTEXT (optional)
              </label>
              <input className="input" value={postContext} onChange={e => setPostContext(e.target.value)}
                placeholder="e.g. Reel about website speed test..." />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                COMMENT RECEIVED *
              </label>
              <textarea className="input" rows={4} value={comment} onChange={e => setComment(e.target.value)}
                placeholder="Paste the comment you want to reply to..." />
            </div>

            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleGenerateReplies} disabled={loading}>
              {loading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Generating...</> : '💬 Generate 3 Reply Options'}
            </button>
          </div>

          <div className="card">
            <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Reply Options</h2>

            {replies.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {replies.map((r, i) => (
                  <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 14 }}
                    className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div>
                        <span className="badge badge-purple" style={{ marginBottom: 8, display: 'inline-flex' }}>Option {i + 1}</span>
                        <p style={{ fontSize: 13, lineHeight: 1.6 }}>{r.reply}</p>
                      </div>
                      <button className="btn btn-ghost" style={{ padding: '6px 10px', fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0 }}
                        onClick={() => copyText(r.reply, 'reply_' + i)}>
                        {copied === 'reply_' + i ? '✓' : '📋 Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'var(--text-muted)', textAlign: 'center' }}>
                <span style={{ fontSize: 40 }}>💬</span>
                <div style={{ fontSize: 13 }}>Paste a comment and generate smart reply options</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
