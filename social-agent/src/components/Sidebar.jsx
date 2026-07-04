const NAV = [
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'reels', icon: '🎬', label: 'Reel Ideas' },
  { id: 'captions', icon: '✍️', label: 'Caption Writer' },
  { id: 'hashtags', icon: '#️⃣', label: 'Hashtag Sets' },
  { id: 'calendar', icon: '📅', label: 'Content Calendar' },
  { id: 'analytics', icon: '📈', label: 'Analytics' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
]

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{
      position: 'fixed', top: 0, left: 0, bottom: 0, width: '240px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--gradient-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
          }}>📱</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.2 }}>WebsBond</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.2 }}>Social Command Center</div>
          </div>
        </div>
      </div>

      {/* Live Status */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
          <div className="pulse-dot" />
          <span style={{ color: 'var(--success)', fontWeight: 500 }}>@websbond active</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '12px 12px', overflow: 'auto' }}>
        {NAV.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 10,
              border: 'none', cursor: 'pointer', textAlign: 'left',
              fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
              marginBottom: 2, transition: 'all 0.15s',
              background: active === item.id ? 'rgba(139,92,246,0.15)' : 'transparent',
              color: active === item.id ? 'var(--accent)' : 'var(--text-secondary)',
              borderLeft: active === item.id ? '3px solid var(--accent)' : '3px solid transparent',
            }}
          >
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid var(--border)',
        fontSize: 11, color: 'var(--text-muted)',
      }}>
        <button 
          onClick={() => {
            localStorage.removeItem('wb_auth');
            window.location.reload();
          }}
          style={{
            width: '100%', padding: '8px', marginBottom: '12px',
            background: 'transparent', border: '1px solid var(--danger)',
            color: 'var(--danger)', borderRadius: 'var(--radius)',
            cursor: 'pointer', fontSize: 12, fontWeight: 600,
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          🚪 Logout
        </button>
        <div>🚀 Safe • No ban risk</div>
        <div style={{ marginTop: 4 }}>Uses ManyChat + Cloudflare AI</div>
      </div>
    </aside>
  )
}
