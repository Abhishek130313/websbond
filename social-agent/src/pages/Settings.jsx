import { useState, useEffect } from 'react'
import { testCFConnection } from '../lib/api.js'

export default function Settings() {
  const isGlobalCF = !!import.meta.env.VITE_CF_TOKEN
  const isGlobalIG = !!import.meta.env.VITE_IG_TOKEN

  const [cfToken, setCfToken] = useState('')
  const [cfAccountId, setCfAccountId] = useState('')
  const [igToken, setIgToken] = useState('')
  const [igUserId, setIgUserId] = useState('')
  const [saved, setSaved] = useState(false)
  const [testResult, setTestResult] = useState(null)
  const [testing, setTesting] = useState(false)

  useEffect(() => {
    setCfToken(localStorage.getItem('wb_cf_token') || '')
    setCfAccountId(localStorage.getItem('wb_cf_account_id') || '')
    setIgToken(localStorage.getItem('wb_ig_token') || '')
    setIgUserId(localStorage.getItem('wb_ig_user_id') || '')
  }, [])

  const save = () => {
    if (!isGlobalCF) {
      localStorage.setItem('wb_cf_token', cfToken.trim())
      localStorage.setItem('wb_cf_account_id', cfAccountId.trim())
    }
    if (!isGlobalIG) {
      localStorage.setItem('wb_ig_token', igToken.trim())
      localStorage.setItem('wb_ig_user_id', igUserId.trim())
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const testConnection = async () => {
    const token = isGlobalCF ? import.meta.env.VITE_CF_TOKEN : cfToken.trim()
    const acc = isGlobalCF ? import.meta.env.VITE_CF_ACCOUNT_ID : cfAccountId.trim()
    
    if (!token || !acc) {
      setTestResult({ ok: false, msg: 'Enter both API Token and Account ID first' })
      return
    }
    setTesting(true); setTestResult(null)
    try {
      await testCFConnection(token, acc)
      setTestResult({ ok: true, msg: '✅ Cloudflare Workers AI is connected and working!' })
    } catch (e) {
      setTestResult({ ok: false, msg: `❌ ${e.message}` })
    }
    setTesting(false)
  }

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>⚙️</span>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Settings</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          {isGlobalCF && isGlobalIG 
            ? "API keys are securely configured globally for the entire team."
            : "Configure your API keys. All data is stored locally in your browser — never sent anywhere."}
        </p>
      </div>

      <div style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Cloudflare Workers AI */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>🔶</span>
            <div>
              <h2 style={{ fontSize: 15, fontWeight: 700 }}>Cloudflare Workers AI</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Llama 3.3 70B — FREE tier: 10K tokens/day</p>
            </div>
            <span className="badge badge-green" style={{ marginLeft: 'auto' }}>FREE</span>
          </div>

          {isGlobalCF ? (
            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--success)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--success)' }}>Globally Connected ✅</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Configured securely via Environment Variables</div>
              </div>
              <button className="btn btn-secondary" onClick={testConnection} disabled={testing}>
                {testing ? <div className="spinner" style={{ width: 16, height: 16 }} /> : 'Test API'}
              </button>
            </div>
          ) : (cfToken && cfAccountId && !testing && !saved) ? (
            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Keys Configured ✅</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Cloudflare API is ready to use</div>
              </div>
              <button className="btn btn-secondary" onClick={() => { setCfToken(''); setCfAccountId(''); }}>Change Keys</button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                  CLOUDFLARE ACCOUNT ID
                </label>
                <input
                  className="input"
                  value={cfAccountId} onChange={e => setCfAccountId(e.target.value)}
                  placeholder="e.g. 023e105f4ecef8ad9ca31a8372d0c353"
                />
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                  API TOKEN (with Workers AI permission)
                </label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input
                    className="input" type="password"
                    value={cfToken} onChange={e => setCfToken(e.target.value)}
                    placeholder="Your Cloudflare API token..."
                    style={{ flex: 1 }}
                  />
                  <button className="btn btn-secondary" onClick={testConnection} disabled={testing}>
                    {testing ? <div className="spinner" style={{ width: 16, height: 16 }} /> : 'Test'}
                  </button>
                </div>
              </div>
            </>
          )}

          {testResult && (
            <div style={{
              padding: '10px 14px', borderRadius: 'var(--radius)', fontSize: 13, marginTop: 12,
              background: testResult.ok ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
              border: `1px solid ${testResult.ok ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
              color: testResult.ok ? 'var(--success)' : 'var(--danger)',
            }}>
              {testResult.msg}
            </div>
          )}

          {!isGlobalCF && (
            <div style={{
              marginTop: 12, padding: '10px 14px', background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius)', fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8,
            }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 4 }}>How to get these:</strong>
              1. <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>dash.cloudflare.com</a> → Account ID is in the right sidebar of Overview page<br />
              2. <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Profile → API Tokens</a> → Create Token → Workers AI (Read) permission<br />
              <span style={{ color: 'var(--success)' }}>💡 Model: Meta Llama 3.3 70B — fast, smart, completely free!</span>
            </div>
          )}
        </div>

        {/* Instagram Graph API */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>📱</span>
            <div>
              <h2 style={{ fontSize: 15, fontWeight: 700 }}>Instagram Graph API</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>For real analytics: followers, reach, impressions</p>
            </div>
          </div>

          {isGlobalIG ? (
             <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--success)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div>
                 <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--success)' }}>Globally Connected ✅</div>
                 <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Configured securely via Environment Variables</div>
               </div>
             </div>
          ) : (igToken && igUserId && !saved) ? (
            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Graph API Configured ✅</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Instagram permissions active</div>
              </div>
              <button className="btn btn-secondary" onClick={() => { setIgToken(''); setIgUserId(''); }}>Change Token</button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                  LONG-LIVED ACCESS TOKEN (60-day)
                </label>
                <input className="input" type="password" value={igToken} onChange={e => setIgToken(e.target.value)}
                  placeholder="EAAxxxxx..." />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                  INSTAGRAM BUSINESS ACCOUNT USER ID
                </label>
                <input className="input" value={igUserId} onChange={e => setIgUserId(e.target.value)}
                  placeholder="17841XXXXXXXXXX" />
              </div>
            </>
          )}

          {!isGlobalIG && (
            <div style={{
              marginTop: 12, padding: '14px 16px', background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius)', fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8,
            }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>Token Info:</strong>
              Token expires every 60 days. Set a calendar reminder to refresh it.<br />
              To refresh: Go to Graph API Explorer → Generate new token → Exchange for long-lived token.
            </div>
          )}
        </div>

        {/* Account Info */}
        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.05))' }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>🏷️ Account Info</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { label: 'Instagram Handle', value: '@websbond' },
              { label: 'Account Type', value: 'Business (Marketing Agency)' },
              { label: 'AI Engine', value: 'Cloudflare Workers AI — Llama 3.3 70B (FREE)' },
              { label: 'Niche', value: 'Web Design, SEO, Digital Marketing — India' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 160, fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        {(!isGlobalCF || !isGlobalIG) && (
          <button className="btn btn-primary" style={{ justifyContent: 'center', padding: '14px', fontSize: 15 }} onClick={save}>
            {saved ? '✅ Settings Saved!' : '💾 Save All Settings'}
          </button>
        )}

        <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          {isGlobalCF && isGlobalIG ? (
            <>🔒 Keys are securely stored in global environment variables.</>
          ) : (
            <>🔒 All keys stored in your browser localStorage only.<br />Never transmitted anywhere except directly to the respective API.</>
          )}
        </div>
      </div>
    </div>
  )
}
