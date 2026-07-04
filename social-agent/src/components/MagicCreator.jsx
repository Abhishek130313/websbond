import { useState } from 'react'
import { generateReelIdeas, generateCaption, getCFCredentials } from '../lib/api.js'
import { generateAvatar, generateVoice } from '../lib/hf-api.js'

export default function MagicCreator() {
  const [topic, setTopic] = useState('')
  const [loadingStep, setLoadingStep] = useState(0)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const { apiToken } = getCFCredentials()
  const hasHFToken = !!import.meta.env.VITE_HF_TOKEN || !!localStorage.getItem('wb_hf_token')

  const handleGenerate = async () => {
    if (!apiToken) {
      setError('Please add Cloudflare API Token in Settings')
      return
    }
    if (!hasHFToken) {
      setError('Please add Hugging Face Token in Settings')
      return
    }
    if (!topic.trim()) return

    setError(null)
    setResults(null)
    
    try {
      // Step 1: Idea & Script
      setLoadingStep(1)
      const ideas = await generateReelIdeas(apiToken, "web design & digital marketing", 1)
        .catch(e => { throw new Error('Failed to brainstorm ideas: ' + e.message) })
      const idea = ideas[0]

      // Step 2: Caption
      setLoadingStep(2)
      const caption = await generateCaption(apiToken, idea.title || topic, idea.type || 'educational', idea.hashtags || [])
        .catch(e => { throw new Error('Failed to write caption: ' + e.message) })

      // Step 3: Avatar
      setLoadingStep(3)
      const avatarPrompt = `Indian professional digital marketing expert talking about ${topic}, cinematic lighting, hyper-realistic, 4k`
      const avatarUrl = await generateAvatar(avatarPrompt)
        .catch(e => { throw new Error('Failed to generate avatar: ' + e.message) })

      // Step 4: Voice
      setLoadingStep(4)
      const voiceScript = `${idea.hook || 'Hey there!'} ${idea.script || 'Let us talk about ' + topic}`.substring(0, 200) // Keep it short for free tier
      const voiceUrl = await generateVoice(voiceScript)
        .catch(e => { throw new Error('Failed to synthesize voice: ' + e.message) })

      setResults({
        idea,
        caption,
        avatarUrl,
        voiceUrl
      })
      setLoadingStep(0)
    } catch (err) {
      setError(err.message)
      setLoadingStep(0)
    }
  }

  const getStepText = () => {
    switch(loadingStep) {
      case 1: return '🧠 Brainstorming viral hooks & script...'
      case 2: return '✍️ Writing highly-converting caption...'
      case 3: return '🖼️ Generating AI Avatar (Might take 30s)...'
      case 4: return '🎙️ Synthesizing AI Voiceover...'
      default: return ''
    }
  }

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.05))',
      border: '1px solid var(--accent)',
      marginBottom: 24,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', right: -20, top: -20, fontSize: 120, opacity: 0.05, pointerEvents: 'none' }}>✨</div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 24 }}>✨</span>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>Magic One-Click Content Creator</h2>
      </div>
      
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>
        Type any topic below. The AI will instantly generate the Script, Caption, Avatar, and Voiceover all at once!
      </p>

      {!results && loadingStep === 0 && (
        <div style={{ display: 'flex', gap: 12 }}>
          <input 
            type="text" 
            className="input" 
            style={{ flex: 1, padding: '16px', fontSize: 16 }}
            placeholder="e.g. Why small businesses need SEO in 2026..."
            value={topic}
            onChange={e => setTopic(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
          />
          <button className="btn btn-primary" style={{ padding: '0 24px', fontSize: 16 }} onClick={handleGenerate}>
            Generate Everything 🚀
          </button>
        </div>
      )}

      {loadingStep > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '40px 0' }}>
          <div className="spinner" style={{ width: 40, height: 40, borderTopColor: 'var(--accent)' }} />
          <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)' }}>{getStepText()}</div>
          
          {/* Progress bar */}
          <div style={{ width: '100%', maxWidth: 400, height: 6, background: 'var(--bg-secondary)', borderRadius: 999, overflow: 'hidden', marginTop: 12 }}>
            <div style={{ 
              height: '100%', 
              width: `${(loadingStep / 4) * 100}%`,
              background: 'var(--gradient-1)',
              transition: 'width 0.5s ease'
            }} />
          </div>
        </div>
      )}

      {error && (
        <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', borderRadius: 'var(--radius)', marginTop: 16, fontSize: 13 }}>
          ❌ {error}
        </div>
      )}

      {results && (
        <div className="fade-in" style={{ marginTop: 24, background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>🎉 Your Content Package is Ready!</h3>
            <button className="btn btn-ghost" onClick={() => {setResults(null); setTopic('')}}>Reset</button>
          </div>
          
          <div className="grid-2" style={{ padding: 20, gap: 24 }}>
            {/* Visuals & Audio */}
            <div>
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 16, border: '1px solid var(--border)', background: '#111' }}>
                <img src={results.avatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: 16, borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8 }}>AI VOICEOVER</div>
                <audio controls src={results.voiceUrl} style={{ width: '100%', height: 40 }} />
              </div>
            </div>

            {/* Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', marginBottom: 4, letterSpacing: 1 }}>HOOK (FIRST 3 SECONDS)</div>
                <div style={{ fontSize: 16, fontWeight: 800 }}>"{results.idea.hook}"</div>
              </div>
              
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4, letterSpacing: 1 }}>VIDEO SCRIPT / FLOW</div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line', background: 'var(--bg-secondary)', padding: 12, borderRadius: 8 }}>
                  {results.idea.script}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4, letterSpacing: 1 }}>INSTAGRAM CAPTION</div>
                <div style={{ fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.6, whiteSpace: 'pre-line', background: 'var(--bg-secondary)', padding: 12, borderRadius: 8 }}>
                  {results.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
