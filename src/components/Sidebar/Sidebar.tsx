import "./Sidebar.css"
import profil from "../../assets/profil.png"
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <input type="checkbox" id="sidebar-collapsed" className="sidebar-collapse-cb" />
        <input type="radio" name="theme" id="theme-dark" className="theme-cb" defaultChecked />
        <input type="radio" name="theme" id="theme-light" className="theme-cb" />
        <input type="radio" name="theme" id="theme-system" className="theme-cb" />

        <div className="brand-row">
          <Link className="brand" to="/" aria-label="MindSearch">
            <svg className="brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <g transform="translate(32 32)" fill="currentColor">
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(45)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(90)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(135)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(180)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(225)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(270)" />
                <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(315)" />
              </g>
            </svg>
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

          <NavLink className={({ isActive }) => isActive ? "side-item active" : "side-item"} to="/finance" title="Finance">
            <span className="side-ico ico-bars">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <rect x="3.6" y="13.2" width="4.6" height="7.4" rx="2.2" fill="currentColor" />
                <rect x="9.7" y="8.2" width="4.6" height="12.4" rx="2.2" fill="currentColor" />
                <rect x="15.8" y="4.4" width="4.6" height="16.2" rx="2.2" fill="currentColor" />
              </svg>
            </span>
            Finance
          </NavLink>

          <NavLink className={({ isActive }) => isActive ? "side-item active" : "side-item"} to="/extensions" title="Extensions">
            <span className="side-ico ico-ext">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M3.111 23h5.556a1 1 0 0 0 1-1v-2.1a1.316 1.316 0 0 1 1.009-1.323 1.224 1.224 0 0 1 1.435 1.2V22a1 1 0 0 0 1 1h3.334a2.113 2.113 0 0 0 2.111-2.111v-3.445h1.222a3.224 3.224 0 0 0 3.179-3.756A3.314 3.314 0 0 0 19.659 11h-1.1V7.555a2.113 2.113 0 0 0-2.111-2.111H13V4.34a3.31 3.31 0 0 0-2.688-3.3 3.222 3.222 0 0 0-3.756 3.182v1.222H3.111A2.113 2.113 0 0 0 1 7.555V12a1 1 0 0 0 1 1h2.1a1.32 1.32 0 0 1 1.323 1.01 1.223 1.223 0 0 1-1.2 1.434H2a1 1 0 0 0-1 1v4.445A2.113 2.113 0 0 0 3.111 23M3 17.444h1.222A3.224 3.224 0 0 0 7.4 13.688 3.31 3.31 0 0 0 4.1 11H3V7.555a.11.11 0 0 1 .111-.111h4.445a1 1 0 0 0 1-1V4.222A1.223 1.223 0 0 1 9.99 3.017 1.316 1.316 0 0 1 11 4.34v2.1a1 1 0 0 0 1 1h4.445a.11.11 0 0 1 .111.111V12a1 1 0 0 0 1 1h2.1a1.32 1.32 0 0 1 1.324 1.01 1.225 1.225 0 0 1-1.205 1.434h-2.219a1 1 0 0 0-1 1v4.445a.11.11 0 0 1-.111.111h-2.334v-1.222a3.222 3.222 0 0 0-3.756-3.178 3.31 3.31 0 0 0-2.688 3.3V21H3.111A.11.11 0 0 1 3 20.889Z" />
              </svg>
            </span>
            Extensions
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
          <label className="user-row" htmlFor="ui-profile" title="Account">
            <img className="avatar" src={profil} alt="Leitan Bogdan" />
            <div className="user-meta">
              <span className="user-name">Leitan Bogdan</span>
              <span className="user-plan">Free plan</span>
            </div>
          </label>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;