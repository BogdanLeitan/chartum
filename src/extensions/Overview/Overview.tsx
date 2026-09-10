import "./Overview.css"

function Overview() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Overview</span>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
              <button className="icon-btn" title="Inbox">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="insights-wrap">

              {/* ===== Market summary ===== */}
              <section className="msum card">
                <div className="msum-head">
                  <h2>Market Summary</h2>
                  <span>Updated 56 seconds ago</span>
                </div>

                <details name="msum" open>
                  <summary>
                    Crude Oil Surges Toward $100 on Middle East Escalation
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>Brent crude jumped above $98 and WTI followed as traders priced a wider disruption risk after overnight strikes. Energy led S&amp;P gainers while airlines and chemicals lagged. Watch inventory data and any diplomatic off-ramp later this week.</p>
                </details>
                <details name="msum">
                  <summary>
                    Bitcoin Pulls Back Despite Underlying Bullish Structure
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>BTC faded from the $128K high as spot ETFs posted their first weekly outflow since June. Options positioning still leans bullish into year-end; $118K is the first area of interest on a deeper fade.</p>
                </details>
                <details name="msum">
                  <summary>
                    Equities Slide as Yields and Oil Pressure Sentiment
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>The S&amp;P 500 and Nasdaq eased as the 10-year yield pushed through 4.25% and energy costs rose. Breadth weakened; defensives outperformed growth into the close.</p>
                </details>
                <details name="msum">
                  <summary>
                    Dollar Softens as Yen Rallies on BOJ Tightening Bets
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>USD/JPY slipped after Japanese 30-year yields hit a record, reviving speculation the BOJ will tighten faster than priced. The DXY eased off session highs.</p>
                </details>
                <details name="msum">
                  <summary>
                    EUR/USD Consolidates Ahead of ECB Decision
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>The pair held a tight range as markets wait on the ECB statement. A hold is consensus; guidance on 2027 cuts will set the next leg.</p>
                </details>
                <details name="msum">
                  <summary>
                    Fed Rate Hike Odds Climb, Adding to Risk-Off Tone
                    <svg className="msum-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p>Futures now assign a higher chance of a hike at the next meeting after hotter services data. Rate-sensitive tech and housing underperformed on the shift.</p>
                </details>

                <div className="msum-foot">
                  <span className="src-pill">
                    <span className="src-stack"><span className="favicon f-orange">R</span><span className="favicon f-dark">B</span><span className="favicon f-teal">F</span></span>
                    49 sources
                  </span>
                </div>
              </section>

              {/* ===== News carousel ===== */}
              <section className="ov-news">
                <input type="radio" id="np1" name="npage" className="tab-radio" defaultChecked />
                <input type="radio" id="np2" name="npage" className="tab-radio" />

                <h2 className="ov-sec-title">News</h2>

                <div className="ov-news-grid npage-1">
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-2"></div>
                    <div className="ov-news-body">
                      <h3>Oil nears $100 as Wall Street falls ahead of key Fed week</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-orange">R</span><span className="favicon f-dark">B</span><span className="favicon f-teal">F</span></span>
                        <span>16 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-5"></div>
                    <div className="ov-news-body">
                      <h3>Warsh leads most divided Fed in 50 years as rate hike odds rise</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-dark">W</span><span className="favicon f-orange">R</span><span className="favicon f-blue">C</span></span>
                        <span>12 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-3"></div>
                    <div className="ov-news-body">
                      <h3>Japan's 30-year bond yield hits a record as debt concerns mount</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-teal">F</span><span className="favicon f-green">E</span><span className="favicon f-dark">B</span></span>
                        <span>9 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="ov-news-grid npage-2">
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-1"></div>
                    <div className="ov-news-body">
                      <h3>Nvidia guides higher as Rubin Ultra ships to first hyperscalers</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-dark">B</span><span className="favicon f-orange">R</span><span className="favicon f-purple">T</span></span>
                        <span>21 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-4"></div>
                    <div className="ov-news-body">
                      <h3>Bitcoin retreats from $128K record as ETF inflows pause</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-blue">C</span><span className="favicon f-dark">W</span><span className="favicon f-orange">R</span></span>
                        <span>14 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="ov-news-card" href="/answer">
                    <div className="ov-news-cover g-6"></div>
                    <div className="ov-news-body">
                      <h3>Apple's foldable iPhone enters mass production ahead of spring</h3>
                      <div className="ov-news-meta">
                        <span className="src-stack"><span className="favicon f-purple">T</span><span className="favicon f-dark">B</span><span className="favicon f-green">E</span></span>
                        <span>11 sources</span>
                        <span className="ov-news-acts">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="news-pager">
                  <label htmlFor="np2" className="pager-btn vis-np1" title="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </label>
                  <label htmlFor="np1" className="pager-btn vis-np2" title="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </label>
                  <div className="pager-dots">
                    <label htmlFor="np1" className="pager-dot n1"></label>
                    <label htmlFor="np2" className="pager-dot n2"></label>
                  </div>
                  <label htmlFor="np2" className="pager-btn vis-np1" title="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </label>
                  <label htmlFor="np1" className="pager-btn vis-np2" title="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </label>
                </div>
              </section>

            </div>
          </div>
    </>
  );
}

export default Overview
