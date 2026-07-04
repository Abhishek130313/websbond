import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import HashtagGenerator from './pages/HashtagGenerator.jsx'
import ReelIdeas from './pages/ReelIdeas.jsx'
import CaptionWriter from './pages/CaptionWriter.jsx'
import ContentCalendar from './pages/ContentCalendar.jsx'
import Analytics from './pages/Analytics.jsx'
import Settings from './pages/Settings.jsx'
import AIStudio from './pages/AIStudio.jsx'
import './index.css'

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [auth, setAuth] = useState(() => localStorage.getItem('wb_auth') === 'true')
  const [passInput, setPassInput] = useState('')
  const [error, setError] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--bg-primary)', padding: 16 }}>
        <div className="card" style={{ width: '100%', maxWidth: 400, textAlign: 'center', padding: '40px 32px' }}>
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
    'hashtag-gen': HashtagGenerator,
    'reel-ideas': ReelIdeas,
    'caption-writer': CaptionWriter,
    calendar: ContentCalendar,
    analytics: Analytics,
    'ai-studio': AIStudio,
    settings: Settings,
  }

  const Page = pages[page] || Dashboard

  return (
    <div className="app-wrapper">
      {/* Mobile Header */}
      <header className="mobile-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--gradient-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>📱</div>
          <div style={{ fontWeight: 800, fontSize: 14 }}>WebsBond</div>
        </div>
        <button className="btn btn-ghost" style={{ padding: '6px 10px', fontSize: 18 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Overlay to close sidebar on mobile */}
      {isMobileMenuOpen && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 95 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        active={page} 
        onNavigate={(p) => { setPage(p); setIsMobileMenuOpen(false) }} 
        isOpen={isMobileMenuOpen} 
      />
      <main className="main-content">
        <Page onNavigate={setPage} />
      </main>
    </div>
  )
}
