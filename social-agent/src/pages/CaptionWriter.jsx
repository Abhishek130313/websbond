import { useState, useEffect } from 'react'
import { generateCaption, generateCommentReply, getIGRecentPosts, getIGComments, replyToIGComment } from '../lib/api.js'
import { REEL_HASHTAG_SETS } from '../data/hashtags.js'
import { formatDistanceToNow } from 'date-fns'

const REEL_TYPES = ['educational', 'transformation', 'humor', 'case_study', 'resource']

export default function CaptionWriter() {
  const [mode, setMode] = useState('caption') // 'caption' | 'reply'
  
  // Caption state
  const [topic, setTopic] = useState('')
  const [reelType, setReelType] = useState('educational')
  const [hashtagSet, setHashtagSet] = useState('speed_test')
  const [caption, setCaption] = useState('')
  
  // Auto-Responder state
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [comments, setComments] = useState([])
  const [activeCommentId, setActiveCommentId] = useState(null)
  const [generatedReply, setGeneratedReply] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(null)

  const apiKey = localStorage.getItem('wb_cf_token') || ''
  const igToken = localStorage.getItem('wb_ig_token') || ''
  const igUserId = localStorage.getItem('wb_ig_user_id') || ''

  useEffect(() => {
    if (mode === 'reply' && igToken && igUserId && posts.length === 0) {
      fetchPosts()
    }
  }, [mode, igToken, igUserId])

  const fetchPosts = async () => {
    setLoading(true); setError(null)
    try {
      const data = await getIGRecentPosts(igToken, igUserId, 6)
      setPosts(data.data || [])
    } catch (e) { setError('Failed to fetch Instagram posts: ' + e.message) }
    finally { setLoading(false) }
  }

  const fetchCommentsForPost = async (post) => {
    setSelectedPost(post)
    setComments([])
    setLoading(true); setError(null)
    try {
      const data = await getIGComments(igToken, post.id)
      setComments(data.data || [])
    } catch (e) { setError('Failed to fetch comments: ' + e.message) }
    finally { setLoading(false) }
  }

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

  const handleGenerateAutoReply = async (commentObj) => {
    if (!apiKey) { setError('Add Cloudflare API Token in Settings'); return }
    setActiveCommentId(commentObj.id)
    setGeneratedReply('')
    setLoading(true); setError(null)
    try {
      const postContext = selectedPost?.caption || ''
      const result = await generateCommentReply(apiKey, commentObj.text, postContext)
      // Grab the first option directly for quick posting
      setGeneratedReply(result[0]?.reply || 'Thanks for the comment!')
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  const handlePostReplyToIG = async (commentId) => {
    if (!generatedReply) return
    setLoading(true); setError(null)
    try {
      await replyToIGComment(igToken, commentId, generatedReply)
      setGeneratedReply('')
      setActiveCommentId(null)
      // Refresh comments
      if (selectedPost) await fetchCommentsForPost(selectedPost)
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
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Auto-Content Pipeline</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          AI writes Instagram-optimized captions and autonomously fetches and replies to comments.
        </p>
      </div>

      <div className="tabs" style={{ marginBottom: 24, maxWidth: 440 }}>
        <button className={`tab ${mode === 'caption' ? 'active' : ''}`} onClick={() => setMode('caption')}>Write Caption</button>
        <button className={`tab ${mode === 'reply' ? 'active' : ''}`} onClick={() => setMode('reply')}>Live Auto-Responder</button>
      </div>

      {error && (
        <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius)', color: 'var(--danger)', fontSize: 13, marginBottom: 20 }}>
          ❌ {error}
        </div>
      )}

      {/* Caption Generator */}
      {mode === 'caption' && (
        <div className="grid-2">
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

      {/* Auto-Responder (Live Fetching) */}
      {mode === 'reply' && (
        <div>
          {(!igToken || !igUserId) ? (
             <div style={{ padding: '40px', textAlign: 'center', background: 'rgba(245,158,11,0.08)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(245,158,11,0.2)' }}>
               <span style={{ fontSize: 40 }}>🔌</span>
               <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--warning)', marginTop: 16 }}>Instagram API Not Connected</h3>
               <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, maxWidth: 400, margin: '8px auto' }}>
                 To automatically fetch posts and reply to comments, you must connect your Instagram API in the Settings tab.
               </p>
             </div>
          ) : (
            <div className="grid-content-sidebar" style={{ alignItems: 'start' }}>
              
              {/* Left Side: Recent Posts */}
              <div className="card" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h2 style={{ fontSize: 15, fontWeight: 700 }}>Recent Posts</h2>
                  <button className="btn btn-ghost" onClick={fetchPosts} disabled={loading} style={{ padding: '4px 8px', fontSize: 12 }}>
                    🔄 Refresh
                  </button>
                </div>
                
                {posts.length === 0 && !loading && (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 13, padding: 20 }}>No posts found.</div>
                )}
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 500, overflowY: 'auto' }}>
                  {posts.map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => fetchCommentsForPost(p)}
                      style={{ 
                        display: 'flex', gap: 12, padding: 10, cursor: 'pointer', borderRadius: 'var(--radius)',
                        background: selectedPost?.id === p.id ? 'rgba(139,92,246,0.1)' : 'var(--bg-secondary)',
                        border: `1px solid ${selectedPost?.id === p.id ? 'var(--accent)' : 'transparent'}`,
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ width: 60, height: 60, borderRadius: 8, background: '#333', overflow: 'hidden', flexShrink: 0 }}>
                        {p.thumbnail_url || p.media_url ? (
                          <img src={p.thumbnail_url || p.media_url} alt="post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>📄</div>}
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>{p.timestamp ? formatDistanceToNow(new Date(p.timestamp)) + ' ago' : ''}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {p.caption || 'No caption...'}
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                          💬 {p.comments_count || 0} comments
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Comments & Auto-Reply */}
              <div className="card" style={{ minHeight: 400 }}>
                {!selectedPost ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', gap: 12 }}>
                    <span style={{ fontSize: 40 }}>👈</span>
                    <div>Select a post to view live comments</div>
                  </div>
                ) : (
                  <div>
                    <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 20 }}>💬</span> Live Comments
                    </h2>
                    
                    {comments.length === 0 && !loading && (
                      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, padding: 40 }}>
                        No comments on this post yet.
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {comments.map(c => (
                        <div key={c.id} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 16 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <strong style={{ fontSize: 14, color: 'var(--text-primary)' }}>@{c.username}</strong>
                            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.timestamp ? formatDistanceToNow(new Date(c.timestamp)) + ' ago' : ''}</span>
                          </div>
                          <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)', marginBottom: 12 }}>{c.text}</p>
                          
                          {/* AI Action Area */}
                          {activeCommentId === c.id && generatedReply ? (
                            <div style={{ marginTop: 12, background: 'rgba(16,185,129,0.1)', border: '1px solid var(--success)', borderRadius: 'var(--radius)', padding: 12 }} className="slide-in">
                              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--success)', marginBottom: 6 }}>🤖 AI Auto-Reply Draft:</div>
                              <textarea 
                                className="input" 
                                value={generatedReply} 
                                onChange={e => setGeneratedReply(e.target.value)}
                                style={{ background: 'transparent', border: 'none', padding: 0, minHeight: 40, resize: 'vertical' }}
                              />
                              <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'flex-end' }}>
                                <button className="btn btn-secondary" onClick={() => {setActiveCommentId(null); setGeneratedReply('')}} style={{ padding: '6px 12px', fontSize: 12 }}>Cancel</button>
                                <button className="btn btn-primary" onClick={() => handlePostReplyToIG(c.id)} disabled={loading} style={{ padding: '6px 12px', fontSize: 12, background: 'var(--success)', border: 'none' }}>
                                  {loading ? 'Posting...' : '🚀 Post to Instagram'}
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button className="btn btn-secondary" onClick={() => handleGenerateAutoReply(c)} disabled={loading} style={{ fontSize: 12, padding: '6px 12px', border: '1px solid var(--accent)' }}>
                              ✨ Generate AI Reply
                            </button>
                          )}
                          
                          {/* Existing Replies */}
                          {c.replies && c.replies.data && c.replies.data.length > 0 && (
                            <div style={{ marginTop: 12, paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
                              {c.replies.data.map(reply => (
                                <div key={reply.id} style={{ marginTop: 8 }}>
                                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>@{reply.username} replied:</div>
                                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{reply.text}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

