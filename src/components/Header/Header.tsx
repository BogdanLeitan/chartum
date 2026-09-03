import "./Header.css"

function Header() {
  return (
    <>
      <header className="page-header">
        <label className="icon-btn show-feed-btn" htmlFor="hide-feed" title="Show activity feed" aria-label="Show activity feed">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 10l-2 2 2 2"/></svg>
        </label>
        <h2>Chat</h2>
      </header>
    </>
  );
}

export default Header