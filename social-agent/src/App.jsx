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
