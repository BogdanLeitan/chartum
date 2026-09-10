import "./Sidebar.css"
import logo from "../../assets/logo5.png"
import profil from "../../assets/profil.png"
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <input type="checkbox" id="sidebar-collapsed" className="sidebar-collapse-cb" />

        <div className="brand-row">
          <Link className="brand" to="/">
            <img src={logo} alt="Chartum" />
          </Link>
          <label className="icon-btn sidebar-toggle" htmlFor="sidebar-collapsed" title="Collapse sidebar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </label>
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

          <Link className="side-item" to="/insights" title="Insights">
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
          </Link>
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
          <Link className="recent-item" to="/answer">Fed rate path for 2027 — three scenarios</Link>
          <Link className="recent-item" to="/answer">Compare AVGO vs AMD custom-silicon roadmaps</Link>
          <Link className="recent-item" to="/answer">EU AI Act: what changes for chipmakers</Link>
        </div>

        <div className="side-bottom">
          <div className="user-row">
            <img className="avatar" src={profil} alt="Leitan Bogdan" title="Leitan Bogdan" />
            <div className="user-meta">
              <span className="user-name">Leitan Bogdan</span>
              <span className="user-plan">Free plan</span>
            </div>
            <button className="icon-btn" type="button" title="Settings">
              <svg className="ico-sliders" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
                <circle className="knob k1" cx="15" cy="7" r="2.1" fill="currentColor" stroke="none" />
                <circle className="knob k2" cx="9" cy="12" r="2.1" fill="currentColor" stroke="none" />
                <circle className="knob k3" cx="13" cy="17" r="2.1" fill="currentColor" stroke="none" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;