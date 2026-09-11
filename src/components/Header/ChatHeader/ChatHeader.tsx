import "./ChatHeader.css"

function ChatHeader() {
  return (
    <>
      <header className="home-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <div className="head-tools">
              <label className="head-icon-btn" htmlFor="nc-custom" title="Customize">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2.4" />
                  <circle cx="8.4" cy="9" r="1.3" />
                  <path d="M21 15.4 15.2 9.8 7 18" />
                </svg>
              </label>
              <button className="head-icon-btn" type="button" title="Privacy mode">
                <svg width="18" height="18" viewBox="0 0 330 330" fill="currentColor" aria-hidden="true">
                  <path d="M234.998 204.981c-26.079 0-48.314 16.73-56.568 40.019h-26.86c-8.254-23.289-30.49-40.019-56.571-40.019-33.088 0-60.007 26.922-60.007 60.014 0 33.087 26.919 60.006 60.007 60.006 29.679 0 54.379-21.661 59.158-50h21.686c4.778 28.339 29.479 50 59.155 50 33.09 0 60.011-26.918 60.011-60.006 0-33.093-26.921-60.014-60.011-60.014M94.999 295c-16.546 0-30.007-13.46-30.007-30.006 0-16.55 13.461-30.014 30.007-30.014 16.547 0 30.009 13.464 30.009 30.014 0 16.546-13.462 30.006-30.009 30.006m139.999 0c-16.545 0-30.006-13.46-30.006-30.006 0-16.55 13.461-30.014 30.006-30.014 16.548 0 30.011 13.464 30.011 30.014 0 16.546-13.463 30.006-30.011 30.006M315 145h-39.145l-9.149-47.986-.011-.058-11.042-57.908a15 15 0 0 0-10.607-11.611L168.667 5.579a15 15 0 0 0-8.301.013L84.908 27.45a15 15 0 0 0-10.561 11.598l-11.04 57.9-.016.079L54.145 145H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h300c8.284 0 15-6.716 15-15s-6.716-15-15-15M164.565 35.61l63.349 18.128L233.875 85H96.126l5.967-31.295zM84.686 145l5.72-30h149.19l5.72 30z" />
                </svg>
              </button>
            </div>
          </header>
    </>
  );
}

export default ChatHeader;
