import "./Sidebar.css"
import logo from "../../assets/logo5.png"
import profil from "../../assets/profil.png"
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar" id="sidebar">
        <div className="topbar">
          <button className="icon-btn" aria-label="logo">
            <img src={logo} className="logo" alt="" />
          </button>
          <div className="topbar-right">
            <button className="icon-btn" aria-label="search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.2" y2="16.2" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="toggle sidebar">
              <svg width="16" height="15" viewBox="0 0 20 18" fill="none" stroke="currentColor" stroke-width="1.6">
                <rect x="1" y="1" width="18" height="16" rx="3" />
                <line x1="7.3" y1="1.6" x2="7.3" y2="16.4" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="nav">

          <Link to="/" className="nav-item">
            <span className="new-plus">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="4" y1="12" x2="20" y2="12" />
              </svg>
            </span>
            New
          </Link>

          <Link to="/insights" className="nav-item">
            <span className="ico">
              <svg fill="#888" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 20 20"><path d="M19 20H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v17h17c.6 0 1 .4 1 1s-.4 1-1 1"/><path d="M4 12h3v4H4zm5-7h3v11H9zm5 4h3v7h-3z"/></svg>
            </span>
            Insights
          </Link>

          <a className="nav-item active">
            <span className="ico">
              <svg width="800" height="800" viewBox="0 0 24 24" fill="#b1b1b1" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1m-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231" fill="#b1b1b1"/><path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656" fill="#b1b1b1"/></svg>
            </span>
            Settings
          </a>

          <div className="section-gap"></div>

          <a className="nav-item plain">
            Projects
            <span className="chev">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </a>

          <a className="nav-item plain">
            Chats and tasks
            <span className="chev">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </a>

        </nav>

        <div className="spacer"></div>

        <div className="divider"></div>

        <div className="user-row">
          <img src={profil} className="profil" alt="" />
          <div className="user-meta">
            <div className="user-name">Leitan Bogdan</div>
            <div className="user-plan">Free plan</div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;