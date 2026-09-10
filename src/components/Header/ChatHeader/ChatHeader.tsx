import "./ChatHeader.css"

function ChatHeader() {
  return (
    <>
      <header className="home-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <div className="head-tools">
              <button className="head-icon-btn" type="button" title="Temporary chat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h18"/><path d="M6.2 8c.6-2.6 3-4.4 5.8-4.4S17.2 5.4 17.8 8"/><circle cx="8" cy="15.4" r="2.7"/><circle cx="16" cy="15.4" r="2.7"/><path d="M10.7 15.4h2.6"/><path d="M5.3 15.4H3.6"/><path d="M18.7 15.4h1.7"/></svg>
              </button>
              <button className="head-icon-btn" type="button" title="Menu">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
              </button>
            </div>
          </header>
    </>
  );
}

export default ChatHeader;
