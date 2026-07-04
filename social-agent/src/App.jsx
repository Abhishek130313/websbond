import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import HashtagGenerator from './pages/HashtagGenerator.jsx'
import ReelIdeas from './pages/ReelIdeas.jsx'
import CaptionWriter from './pages/CaptionWriter.jsx'
import ContentCalendar from './pages/ContentCalendar.jsx'
import Analytics from './pages/Analytics.jsx'
import Settings from './pages/Settings.jsx'
import './index.css'

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [auth, setAuth] = useState(() => localStorage.getItem('wb_auth') === 'true')
  const [passInput, setPassInput] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (passInput === 'Websbond@2026') {
      localStorage.setItem('wb_auth', 'true')
      setAuth(true)
    } else {
      setError('Incorrect password')
    }
  }

  if (!auth) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="card" style={{ width: 400, textAlign: 'center', padding: '40px 32px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Secure Access</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>
            Please enter the team password to access the Command Center.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="input"
              style={{ textAlign: 'center', marginBottom: 16 }}
              placeholder="Enter password..."
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
            />
            {error && <div style={{ color: 'var(--danger)', fontSize: 13, marginBottom: 16 }}>{error}</div>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  const pages = {
    dashboard: Dashboard,
    hashtags: HashtagGenerator,
    reels: ReelIdeas,
    captions: CaptionWriter,
    calendar: ContentCalendar,
    analytics: Analytics,
    settings: Settings,
  }

  const Page = pages[page] || Dashboard

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar active={page} onNavigate={setPage} />
      <main style={{
        flex: 1,
        marginLeft: '240px',
        padding: '32px',
        maxWidth: 'calc(100vw - 240px)',
        overflowX: 'hidden',
      }}>
        <Page onNavigate={setPage} />
      </main>
    </div>
  )
}
