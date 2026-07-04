import { useState } from 'react'
import { generateAvatar, generateVoice } from '../lib/hf-api.js'

export default function AIStudio() {
  const [activeTab, setActiveTab] = useState('avatar') // 'avatar' or 'voice'

  // Avatar State
  const [prompt, setPrompt] = useState('A professional Indian digital marketing expert, hyper-realistic, 4k, confident smile')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [avatarError, setAvatarError] = useState(null)

  // Voice State
  const [voiceText, setVoiceText] = useState('Hello! I am your AI avatar from Websbond. Let us grow your business today.')
  const [audioUrl, setAudioUrl] = useState(null)
  const [voiceLoading, setVoiceLoading] = useState(false)
  const [voiceError, setVoiceError] = useState(null)

  const isGlobalHF = !!import.meta.env.VITE_HF_TOKEN
  const hasHFToken = isGlobalHF || !!localStorage.getItem('wb_hf_token')

  const handleGenerateAvatar = async () => {
    if (!prompt.trim()) return
    setAvatarLoading(true)
    setAvatarError(null)
    setAvatarUrl(null)
    try {
      const url = await generateAvatar(prompt)
      setAvatarUrl(url)
    } catch (e) {
      setAvatarError(e.message)
    } finally {
      setAvatarLoading(false)
    }
  }

  const handleGenerateVoice = async () => {
    if (!voiceText.trim()) return
    setVoiceLoading(true)
    setVoiceError(null)
    setAudioUrl(null)
    try {
      const url = await generateVoice(voiceText)
      setAudioUrl(url)
    } catch (e) {
      setVoiceError(e.message)
    } finally {
      setVoiceLoading(false)
    }
  }

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>🎬</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>AI Studio</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          Generate AI Avatars and AI Voiceovers completely free using Open Source models.
        </p>
      </div>

      {!hasHFToken && (
        <div style={{ padding: '16px', background: 'rgba(245,158,11,0.08)', borderRadius: 'var(--radius)', border: '1px solid rgba(245,158,11,0.2)', marginBottom: 24 }}>
          <strong style={{ color: 'var(--warning)', display: 'block', marginBottom: 6 }}>⚠️ Hugging Face Token Required</strong>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            To use the free AI Studio, you must add your Hugging Face Access Token in the Settings tab.
          </p>
        </div>
      )}

      <div className="tabs" style={{ marginBottom: 24, maxWidth: 300 }}>
        <button className={`tab ${activeTab === 'avatar' ? 'active' : ''}`} onClick={() => setActiveTab('avatar')}>🖼️ AI Avatar</button>
        <button className={`tab ${activeTab === 'voice' ? 'active' : ''}`} onClick={() => setActiveTab('voice')}>🎙️ AI Voice</button>
      </div>

      {activeTab === 'avatar' && (
        <div className="grid-2">
          {/* Controls */}
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Avatar Generator</h2>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>PROMPT (Describe your avatar)</label>
              <textarea
                className="input"
                rows={4}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
              />
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleGenerateAvatar} disabled={avatarLoading || !hasHFToken}>
              {avatarLoading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Generating...</> : '✨ Generate Avatar'}
            </button>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>Powered by Stable Diffusion (Free Tier)</p>
            
            {avatarError && (
              <div style={{ marginTop: 16, padding: '10px', background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', fontSize: 13, borderRadius: 'var(--radius)' }}>
                {avatarError}
              </div>
            )}
          </div>

          {/* Result */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, padding: 0, overflow: 'hidden' }}>
            {avatarLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, color: 'var(--text-muted)' }}>
                <div className="spinner" style={{ width: 32, height: 32 }} />
                <span style={{ fontSize: 13 }}>Waking up AI servers... This might take up to 30s.</span>
              </div>
            ) : avatarUrl ? (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src={avatarUrl} alt="AI Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <a href={avatarUrl} download="avatar.jpg" className="btn btn-secondary" style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', color: '#fff', border: 'none' }}>
                  ⬇️ Download
                </a>
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 24 }}>
                <span style={{ fontSize: 48, display: 'block', marginBottom: 12 }}>🖼️</span>
                <span style={{ fontSize: 14 }}>Your AI Avatar will appear here</span>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'voice' && (
        <div className="grid-2">
          {/* Controls */}
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>AI Voiceover</h2>
            
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>SCRIPT (What should the AI say?)</label>
              <textarea
                className="input"
                rows={5}
                value={voiceText}
                onChange={e => setVoiceText(e.target.value)}
              />
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleGenerateVoice} disabled={voiceLoading || !hasHFToken}>
              {voiceLoading ? <><div className="spinner" style={{ width: 16, height: 16 }} /> Generating Audio...</> : '🎙️ Generate Audio'}
            </button>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>Powered by MMS-TTS / SpeechT5 (Free Tier)</p>
            
            {voiceError && (
              <div style={{ marginTop: 16, padding: '10px', background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', fontSize: 13, borderRadius: 'var(--radius)' }}>
                {voiceError}
              </div>
            )}
          </div>

          {/* Result */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
            {voiceLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, color: 'var(--text-muted)' }}>
                <div className="spinner" style={{ width: 32, height: 32 }} />
                <span style={{ fontSize: 13 }}>Synthesizing audio...</span>
              </div>
            ) : audioUrl ? (
              <div style={{ width: '100%', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
                <div style={{ fontSize: 48 }}>🎵</div>
                <audio controls src={audioUrl} style={{ width: '100%' }} />
                <a href={audioUrl} download="ai_voice.wav" className="btn btn-secondary">
                  ⬇️ Download Audio
                </a>
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 24 }}>
                <span style={{ fontSize: 48, display: 'block', marginBottom: 12 }}>🔊</span>
                <span style={{ fontSize: 14 }}>Your AI Voiceover will appear here</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
