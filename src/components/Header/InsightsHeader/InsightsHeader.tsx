import "./InsightsHeader.css"

function Header() {
  return (
    <>
      <header className="dashboard-header">
        <span className="section-title">Insights</span>

        <nav className="header-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link active">Search</a>
          <a href="#" className="nav-link">News</a>
          <a href="#" className="nav-link">Calendar</a>
          <a href="#" className="nav-link">Charting</a>
          <a href="#" className="nav-link">Transcripts</a>
          <a href="#" className="nav-link">DCF Calculator</a>
          <a href="#" className="nav-link">Whatchlist</a>
        </nav>

        <div className="header-right">
          <div>
            <svg className="inbox" fill="#888" width="800" height="800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.517 11H10v2h4v-2h5.484l-2.373-5.543a2 2 0 0 0-.3-.457l-9.635-.004c-.077.083-.173.23-.257.398zM20 13h-4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H4v6h16zm2 6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.205l.08-.189L5.103 4.56C5.553 3.641 6.122 3.073 7 3h10l.13.009c.754.099 1.305.65 1.79 1.597L22 11.795z"/></svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header