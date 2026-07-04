import { useState } from 'react'
import { HASHTAG_DB, REEL_HASHTAG_SETS } from '../data/hashtags.js'

export default function HashtagGenerator() {
  const [selectedNiche, setSelectedNiche] = useState('webDesign')
  const [selectedReelType, setSelectedReelType] = useState('speed_test')
  const [mode, setMode] = useState('niche') // 'niche' | 'reel'
  const [copied, setCopied] = useState(null)
  const [customTopic, setCustomTopic] = useState('')

  const NICHE_KEYS = Object.keys(HASHTAG_DB)
  const REEL_KEYS = Object.keys(REEL_HASHTAG_SETS)

  const currentNiche = HASHTAG_DB[selectedNiche]
  const allNicheTags = currentNiche
    ? Object.values(currentNiche.sets).flat()
    : []

  const reelTags = REEL_HASHTAG_SETS[selectedReelType] || []

  const copyTag = (tag) => {
    navigator.clipboard.writeText(tag)
    setCopied(tag)
    setTimeout(() => setCopied(null), 1500)
  }

  const copyAll = (tags) => {
    navigator.clipboard.writeText(tags.join(' '))
    setCopied('all')
    setTimeout(() => setCopied(null), 2000)
  }

  const getRecommendedSet = () => {
    if (!currentNiche) return []
    const sets = currentNiche.sets
    return [
      sets.mega[0], sets.mega[1], sets.mega[2],
      sets.large[0], sets.large[1],
      sets.medium[0], sets.medium[1], sets.medium[2],
      sets.niche[0], sets.niche[1],
    ]
  }

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>#️⃣</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Hashtag Generator</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          Real researched hashtags for web design, SEO & digital marketing niche in India. Copy sets in one click.
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="tabs" style={{ marginBottom: 24, maxWidth: 400 }}>
        <button className={`tab ${mode === 'niche' ? 'active' : ''}`} onClick={() => setMode('niche')}>By Niche</button>
        <button className={`tab ${mode === 'reel' ? 'active' : ''}`} onClick={() => setMode('reel')}>By Reel Type</button>
        <button className={`tab ${mode === 'smart' ? 'active' : ''}`} onClick={() => setMode('smart')}>Smart Mix</button>
      </div>

      {/* By Niche Mode */}
      {mode === 'niche' && (
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
          {/* Niche Picker */}
          <div className="card" style={{ padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 10, padding: '0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Select Niche
            </div>
            {NICHE_KEYS.map(key => (
              <button key={key} onClick={() => setSelectedNiche(key)} style={{
                width: '100%', padding: '10px 12px', borderRadius: 8, border: 'none',
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                fontSize: 13, fontWeight: 500, marginBottom: 2,
                background: selectedNiche === key ? 'rgba(139,92,246,0.15)' : 'transparent',
                color: selectedNiche === key ? 'var(--accent)' : 'var(--text-secondary)',
                transition: 'all 0.15s',
              }}>
                {HASHTAG_DB[key]?.label}
              </button>
            ))}
          </div>

          {/* Hashtag Results */}
          <div>
            <div className="card" style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 700 }}>{currentNiche?.label} Hashtags</h2>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{allNicheTags.length} researched tags — click to copy individually</p>
                </div>
                <button className="btn btn-primary" onClick={() => copyAll(allNicheTags)}>
                  {copied === 'all' ? '✓ Copied!' : '📋 Copy All'}
                </button>
              </div>

              {currentNiche && Object.entries(currentNiche.sets).map(([level, tags]) => (
                <div key={level} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    {level === 'mega' ? '🔴 Mega (1M+ posts)' :
                     level === 'large' ? '🟠 Large (100K–1M)' :
                     level === 'medium' ? '🟡 Medium (10K–100K)' : '🟢 Niche (<10K)'}
                  </div>
                  <div>
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className={`hashtag-pill ${copied === tag ? 'copied' : ''}`}
                        onClick={() => copyTag(tag)}
                      >
                        {copied === tag ? '✓ Copied' : tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* By Reel Type Mode */}
      {mode === 'reel' && (
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
          <div className="card" style={{ padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 10, padding: '0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Reel Type
            </div>
            {REEL_KEYS.map(key => (
              <button key={key} onClick={() => setSelectedReelType(key)} style={{
                width: '100%', padding: '10px 12px', borderRadius: 8, border: 'none',
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                fontSize: 13, fontWeight: 500, marginBottom: 2,
                background: selectedReelType === key ? 'rgba(236,72,153,0.15)' : 'transparent',
                color: selectedReelType === key ? 'var(--accent-2)' : 'var(--text-secondary)',
                transition: 'all 0.15s',
              }}>
                {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700 }}>
                  {selectedReelType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Hashtags
                </h2>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                  Optimized set of {reelTags.length} tags for this Reel type
                </p>
              </div>
              <button className="btn btn-primary" onClick={() => copyAll(reelTags)}>
                {copied === 'all' ? '✓ Copied!' : '📋 Copy Set'}
              </button>
            </div>

            <div style={{ marginBottom: 20 }}>
              {reelTags.map(tag => (
                <span key={tag} className={`hashtag-pill ${copied === tag ? 'copied' : ''}`} onClick={() => copyTag(tag)}>
                  {copied === tag ? '✓ Copied' : tag}
                </span>
              ))}
            </div>

            {/* Preview caption box */}
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>CAPTION PREVIEW</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, fontFamily: 'monospace' }}>
                [Your Reel caption here]<br /><br />
                {reelTags.join(' ')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Smart Mix Mode */}
      {mode === 'smart' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>Smart Recommended Mix</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                Algorithm-optimized: 3 mega + 2 large + 3 medium + 2 niche = perfect balance
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => copyAll(getRecommendedSet())}>
              {copied === 'all' ? '✓ Copied!' : '📋 Copy Smart Set'}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {NICHE_KEYS.map(key => {
              const tags = [
                HASHTAG_DB[key].sets.mega[0],
                HASHTAG_DB[key].sets.large[0],
                HASHTAG_DB[key].sets.medium[0],
                HASHTAG_DB[key].sets.niche[0],
              ]
              return (
                <div key={key} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 14 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{HASHTAG_DB[key].label}</div>
                  {tags.map(t => (
                    <span key={t} className={`hashtag-pill ${copied === t ? 'copied' : ''}`} onClick={() => copyTag(t)}>
                      {copied === t ? '✓' : t}
                    </span>
                  ))}
                </div>
              )
            })}
          </div>

          <hr className="glow-divider" />
          <div style={{ background: 'rgba(139,92,246,0.08)', borderRadius: 'var(--radius)', padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>💡 Pro Tip: Rotate Your Sets</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Never use the same hashtag set twice in a row. Rotate between 3-4 different sets every week.
              Instagram's algorithm penalizes repetitive hashtag patterns. Save these as notes in your phone.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
