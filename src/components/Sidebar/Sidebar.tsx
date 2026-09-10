import "./Sidebar.css"
import logo from "../../assets/logo5.png"
import profil from "../../assets/profil.png"
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <input type="checkbox" id="sidebar-collapsed" className="sidebar-collapse-cb" />
        <input type="checkbox" id="theme-light" className="theme-cb" />

        <div className="brand-row">
          <Link className="brand" to="/">
            <img src={logo} alt="Chartum" />
          </Link>
          <div className="brand-tools">
            <button className="icon-btn" type="button" title="Search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.2" y2="16.2" />
              </svg>
            </button>
            <label className="icon-btn sidebar-toggle" htmlFor="sidebar-collapsed" title="Collapse sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </label>
          </div>
        </div>

        <Link className="new-thread" to="/" title="New chat">
          <span className="new-thread-ico">
            <svg className="side-ico ico-plus" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
          <span>New chat</span>
        </Link>

        <nav className="side-nav">
          <Link className="side-item" to="/discover" title="Discover">
            <span className="side-ico ico-compass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.2" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <g className="compass-needle">
                  <path d="M12 5.5 14.2 12 12 18.5 9.8 12Z" fill="currentColor" fillOpacity=".18" />
                  <path className="needle-n" d="M12 5.5 14.2 12 9.8 12Z" fill="currentColor" stroke="none" />
                </g>
              </svg>
            </span>
            Discover
          </Link>

          {/*<Link className="side-item" to="/insights" title="Insights">
            <span className="side-ico ico-bars">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <rect x="3.6" y="13.2" width="4.6" height="7.4" rx="2.2" fill="currentColor" />
                <rect x="9.7" y="8.2" width="4.6" height="12.4" rx="2.2" fill="currentColor" />
                <rect x="15.8" y="4.4" width="4.6" height="16.2" rx="2.2" fill="currentColor" />
              </svg>
            </span>
            Insights
          </Link>

          <Link className="side-item" to="/overview" title="Overview">
            <span className="side-ico ico-overview">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect className="ov-main" x="3.4" y="3.4" width="17.2" height="9.4" rx="2.2" />
                <rect className="ov-a" x="3.4" y="14.4" width="7.8" height="6.2" rx="2" />
                <rect className="ov-b" x="12.8" y="14.4" width="7.8" height="6.2" rx="2" />
                <polyline className="ov-line" points="6 10.4 8.6 8.2 11.1 9.3 14.4 6.4 17.6 8" />
              </svg>
            </span>
            Overview
          </Link>

          <Link className="side-item" to="/tools" title="Tools">
            <span className="side-ico ico-tools">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <g className="tool-wrench">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </g>
              </svg>
            </span>
            Tools
          </Link>*/}

          <NavLink className={({ isActive }) => isActive ? "side-item active" : "side-item"} to="/extensions" title="Extensions">
            <span className="side-ico ico-ext">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M3.111 23h5.556a1 1 0 0 0 1-1v-2.1a1.316 1.316 0 0 1 1.009-1.323 1.224 1.224 0 0 1 1.435 1.2V22a1 1 0 0 0 1 1h3.334a2.113 2.113 0 0 0 2.111-2.111v-3.445h1.222a3.224 3.224 0 0 0 3.179-3.756A3.314 3.314 0 0 0 19.659 11h-1.1V7.555a2.113 2.113 0 0 0-2.111-2.111H13V4.34a3.31 3.31 0 0 0-2.688-3.3 3.222 3.222 0 0 0-3.756 3.182v1.222H3.111A2.113 2.113 0 0 0 1 7.555V12a1 1 0 0 0 1 1h2.1a1.32 1.32 0 0 1 1.323 1.01 1.223 1.223 0 0 1-1.2 1.434H2a1 1 0 0 0-1 1v4.445A2.113 2.113 0 0 0 3.111 23M3 17.444h1.222A3.224 3.224 0 0 0 7.4 13.688 3.31 3.31 0 0 0 4.1 11H3V7.555a.11.11 0 0 1 .111-.111h4.445a1 1 0 0 0 1-1V4.222A1.223 1.223 0 0 1 9.99 3.017 1.316 1.316 0 0 1 11 4.34v2.1a1 1 0 0 0 1 1h4.445a.11.11 0 0 1 .111.111V12a1 1 0 0 0 1 1h2.1a1.32 1.32 0 0 1 1.324 1.01 1.225 1.225 0 0 1-1.205 1.434h-2.219a1 1 0 0 0-1 1v4.445a.11.11 0 0 1-.111.111h-2.334v-1.222a3.222 3.222 0 0 0-3.756-3.178 3.31 3.31 0 0 0-2.688 3.3V21H3.111A.11.11 0 0 1 3 20.889Z" />
              </svg>
            </span>
            Extensions
          </NavLink>

          <NavLink className={({ isActive }) => isActive ? "side-item active" : "side-item"} to="/settings" title="Settings">
            <span className="side-ico ico-settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            Settings
          </NavLink>
        </nav>

        <div className="side-section">
          <div className="side-label">
            Spaces
            <button className="mini-add" type="button" title="New space">
              <svg className="side-ico ico-plus" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <a className="side-item" href="#" title="Portfolio research">
            <span className="side-ico ico-folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path className="folder-body" d="M3.6 8.1A2.2 2.2 0 0 1 5.8 5.9h3.5l1.7 2.2h7.4A2.2 2.2 0 0 1 20.6 10.3v6.6a2.2 2.2 0 0 1-2.2 2.2H5.8A2.2 2.2 0 0 1 3.6 16.9Z" />
              </svg>
            </span>
            Portfolio research
          </a>
          <a className="side-item" href="#" title="Macro watch">
            <span className="side-ico ico-folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path className="folder-body" d="M3.6 8.1A2.2 2.2 0 0 1 5.8 5.9h3.5l1.7 2.2h7.4A2.2 2.2 0 0 1 20.6 10.3v6.6a2.2 2.2 0 0 1-2.2 2.2H5.8A2.2 2.2 0 0 1 3.6 16.9Z" />
              </svg>
            </span>
            Macro watch
          </a>
        </div>

        <div className="side-section">
          <div className="side-label">Recent</div>
          <Link className="recent-item" to="/answer">Is Nvidia still a buy after Q2 earnings?</Link>
        </div>

        <div className="side-bottom">
          <div className="user-row">
            <img className="avatar" src={profil} alt="Leitan Bogdan" title="Leitan Bogdan" />
            <div className="user-meta">
              <span className="user-name">Leitan Bogdan</span>
              <span className="user-plan">Free plan</span>
            </div>
            <label className="icon-btn" htmlFor="theme-light" title="Toggle theme">
              <svg className="theme-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg className="theme-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
              </svg>
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;