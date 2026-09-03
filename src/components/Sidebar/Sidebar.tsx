import "./Sidebar.css"

function Sidebar() {
  return (
    <>
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-top">
          <div className="logo">CHARTUM</div>

          <label className="quick-access" htmlFor="command-open">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6.4" /><path d="m19.2 19.2-3.6-3.6" /><path d="M18.2 3.4 19.1 5.6 21.3 6.5 19.1 7.4 18.2 9.6 17.3 7.4 15.1 6.5 17.3 5.6Z" /></svg>
            <span>Quick access</span>
            <kbd>⌘K</kbd>
          </label>

          <nav className="nav">
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" /></svg>
              Home
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
              Calendar
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              Search
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
              Transcripts
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" /></svg>
              Chat
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M4 19V5m0 14h16" /><path d="m7 14 3.5-4.5 3 2.5L20 6" /></svg>
              Charting
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
              DCF
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z" /></svg>
              Topics
            </label>
            <label className="nav-item">
              <svg viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="2.5" /></svg>
              Watchlists
            </label>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <label className="nav-item">
            <svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            Release notes
          </label>
          <label className="nav-item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.34c-.7.28-.9.83-.9 1.66M12 17h.01" /></svg>
            Help &amp; support
          </label>
          <label className="nav-item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
            Profile
          </label>
          <label className="nav-item">
            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 10l-2 2 2 2" /></svg>
            Collapse sidebar
          </label>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;