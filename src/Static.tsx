import "./static.css"

export function Discover() {
  return (
    <>
      <header className="page-head discover-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Discover</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/discover">For You</a>
              <a className="ph-link" href="#">Top</a>
              <div className="topics-dd">
                <input type="checkbox" id="topics-toggle" className="dd-toggle" />
                <label htmlFor="topics-toggle" className="ph-link topics-btn">
                  Topics
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </label>
                <label htmlFor="topics-toggle" className="dd-overlay"></label>
                <div className="dd-menu drop-down topics-menu">
                  <a className="dd-item" href="#">Markets</a>
                  <a className="dd-item" href="#">Tech</a>
                  <a className="dd-item" href="#">Crypto</a>
                  <a className="dd-item" href="#">Macro</a>
                  <a className="dd-item" href="#">Companies</a>
                </div>
              </div>
            </nav>
          </header>

          <div className="content">
            <div className="discover-wrap">

              {/* Hero story */}
              <a className="hero-card" href="/answer">
                <div className="hero-cover g-hero"></div>
                <div className="hero-body">
                  <div className="story-src">
                    <span className="favicon f-dark">B</span> Bloomberg · 4h ago
                  </div>
                  <h2 className="hero-headline">Nvidia's Rubin Ultra ships early — and Wall Street rewrites its 2027 AI capex math</h2>
                  <p className="hero-snippet">
                    First hyperscaler deliveries landed two months ahead of schedule. Analysts now
                    model $640B of combined AI infrastructure spend next year, up from $510B before
                    the Q2 print. Here's who captures the increase.
                  </p>
                  <span className="story-foot">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    6 min read · 128 threads started
                  </span>
                </div>
              </a>

              {/* Story grid */}
              <div className="story-grid">

                <a className="story-card" href="/answer">
                  <div className="story-cover g-1"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-orange">R</span> Reuters · 2h</div>
                    <h3 className="story-title">Fed officials split on October cut as core inflation cools to 2.4%</h3>
                    <p className="story-snippet">Three voters now back a 25 bps move; futures price a 68% chance.</p>
                  </div>
                </a>

                <a className="story-card" href="/answer">
                  <div className="story-cover g-2"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-teal">F</span> FT · 6h</div>
                    <h3 className="story-title">Oil slides 3% after OPEC+ signals larger November output hike</h3>
                    <p className="story-snippet">Brent back under $71 as the group defends market share over price.</p>
                  </div>
                </a>

                <a className="story-card" href="/answer">
                  <div className="story-cover g-3"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-purple">T</span> The Verge · 8h</div>
                    <h3 className="story-title">Apple's foldable iPhone enters mass production ahead of spring launch</h3>
                    <p className="story-snippet">Supply chain checks point to an 18M-unit first run — double early rumors.</p>
                  </div>
                </a>

                <a className="story-card" href="/answer">
                  <div className="story-cover g-4"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-blue">C</span> CoinDesk · 3h</div>
                    <h3 className="story-title">Bitcoin retreats from $128K record as ETF inflows pause</h3>
                    <p className="story-snippet">First weekly outflow since June; options market still leans bullish into Q4.</p>
                  </div>
                </a>

                <a className="story-card" href="/answer">
                  <div className="story-cover g-5"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-dark">W</span> WSJ · 11h</div>
                    <h3 className="story-title">Inside the sovereign-AI race: 14 national compute deals and counting</h3>
                    <p className="story-snippet">Gulf states and the EU are becoming the marginal buyers of accelerators.</p>
                  </div>
                </a>

                <a className="story-card" href="/answer">
                  <div className="story-cover g-6"></div>
                  <div className="story-body">
                    <div className="story-src"><span className="favicon f-green">E</span> The Economist · 1d</div>
                    <h3 className="story-title">Europe's chip act 2.0: can subsidies buy a place in the AI supply chain?</h3>
                    <p className="story-snippet">Brussels commits €86B — but talent, not fabs, may be the binding constraint.</p>
                  </div>
                </a>

              </div>

            </div>
          </div>
    </>
  );
}

export function Overview() {
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

export function Answer() {
  return (
    <>
      <header className="thread-bar">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
                <nav className="view-tabs">
                  <a className="vtab active" href="/answer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    Answer
                  </a>
                  <a className="vtab" href="#">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Links
                  </a>
                  <a className="vtab" href="#">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    Images
                  </a>
                  <a className="vtab" href="#">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Places
                  </a>
                </nav>
                <div className="thread-actions">
                  <button className="icon-btn" title="Search in thread">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                  </button>
                  <button className="icon-btn" title="More">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                  </button>
                  <button className="share-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                    Share
                  </button>
                </div>
          </header>

          <div className="thread-shell">

            <div className="thread-col">
              <div className="content thread-scroll">
                <div className="thread">

                  <div className="user-bubble">Is Nvidia still a buy after its Q2 FY2027 earnings?</div>

                  <div className="query-meta">
                    <img src="/assets/logo.png" alt="" />
                    Finished 4 steps
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>

                  <article className="answer-body">
                <p>
                  Nvidia's Q2 FY2027 print was a clear beat on both lines: revenue of
                  <strong>$62.1B</strong> against a $59.8B consensus, with data-center revenue of
                  <strong>$51.2B</strong> growing 58% year over year.<span className="cite">1</span><span className="cite">3</span>
                  Management guided Q3 to $66B ± 2%, roughly $3B above the street, citing early
                  Rubin platform shipments and sustained sovereign-AI demand.<span className="cite">2</span>
                </p>

                <h2>The quarter in numbers</h2>
                <table className="data-table">
                  <thead>
                    <tr><th>Metric</th><th>Actual</th><th>Estimate</th><th>YoY</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Revenue</td><td>$62.1B</td><td>$59.8B</td><td className="pos">+56%</td></tr>
                    <tr><td>Data center</td><td>$51.2B</td><td>$48.9B</td><td className="pos">+58%</td></tr>
                    <tr><td>EPS (adj.)</td><td>$1.42</td><td>$1.31</td><td className="pos">+61%</td></tr>
                    <tr><td>Gross margin</td><td>74.8%</td><td>73.5%</td><td className="pos">+180 bps</td></tr>
                    <tr><td>Q3 guide (mid)</td><td>$66.0B</td><td>$63.1B</td><td>—</td></tr>
                  </tbody>
                </table>

                <div className="chart-card">
                  <div className="chart-card-head">
                    <span>Data-center revenue by quarter</span>
                    <span className="chart-unit">$ billions</span>
                  </div>
                  <div className="bar-chart">
                    <div className="bar-col"><span className="bar-val">32.4</span><div className="bar" style={{height: "53%"}}></div><span className="bar-lbl">Q2·26</span></div>
                    <div className="bar-col"><span className="bar-val">38.1</span><div className="bar" style={{height: "62%"}}></div><span className="bar-lbl">Q3·26</span></div>
                    <div className="bar-col"><span className="bar-val">42.7</span><div className="bar" style={{height: "70%"}}></div><span className="bar-lbl">Q4·26</span></div>
                    <div className="bar-col"><span className="bar-val">46.9</span><div className="bar" style={{height: "77%"}}></div><span className="bar-lbl">Q1·27</span></div>
                    <div className="bar-col"><span className="bar-val">51.2</span><div className="bar hi" style={{height: "84%"}}></div><span className="bar-lbl">Q2·27</span></div>
                    <div className="bar-col"><span className="bar-val">55.5e</span><div className="bar est" style={{height: "91%"}}></div><span className="bar-lbl">Q3·27e</span></div>
                  </div>
                </div>

                <h2>What the street is saying</h2>
                <p>
                  Sell-side reaction has been broadly positive: 14 of the 18 major desks raised price
                  targets after the call, with a new street-high of $290.<span className="cite">4</span>
                  The bull case rests on Rubin's supply ramp being sold out through mid-2027 and gross
                  margins holding above 74% despite HBM cost inflation.<span className="cite">2</span><span className="cite">4</span>
                </p>

                <h2>Key risks to watch</h2>
                <ul className="answer-list">
                  <li><strong>China exposure.</strong> Export licensing remains unresolved; management embedded zero China data-center revenue in guidance.<span className="cite">1</span></li>
                  <li><strong>Customer concentration.</strong> Four hyperscalers were ~46% of revenue this quarter, up from 41% a year ago.<span className="cite">3</span></li>
                  <li><strong>Valuation.</strong> At ~34× forward earnings, NVDA trades above its 5-year median of 29×, leaving less room for execution slips.<span className="cite">4</span></li>
                </ul>

                <div className="verdict">
                  <div className="verdict-head">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
                    Chartum take
                  </div>
                  <p>
                    The growth story remains intact and estimates are still drifting higher. For
                    long-horizon holders the beat-and-raise supports staying long; new money may prefer
                    staged entries given the elevated multiple and China overhang.
                  </p>
                </div>
              </article>

              {/* actions */}
              <div className="answer-actions">
                <button className="act-btn" title="Copy">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
                <button className="act-btn" title="Rewrite">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><polyline points="21 3 21 9 15 9"/></svg>
                </button>
                <button className="act-btn" title="Helpful">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z"/></svg>
                </button>
                <button className="act-btn" title="Not helpful">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88z"/></svg>
                </button>
                <span className="act-spacer"></span>
                <span className="act-note">Generated with Chartum One · 12 sources</span>
              </div>

              {/* Related */}
              <section className="related">
                <div className="related-head">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="6" y1="20" x2="6" y2="14"/><line x1="12" y1="20" x2="12" y2="8"/><line x1="18" y1="20" x2="18" y2="4"/></svg>
                  Related
                </div>
                <a className="related-row" href="#">How exposed is Nvidia to China export rules in 2027?
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </a>
                <a className="related-row" href="#">NVDA vs AMD: who wins the 2027 data-center cycle?
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </a>
                <a className="related-row" href="#">What multiple does NVDA trade at versus its history?
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </a>
                <a className="related-row" href="#">Break down Nvidia's revenue by segment since 2024
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </a>
              </section>

                </div>
              </div>

              <div className="followup-dock">
                <div className="followup-inner">
                  <div className="ask-box compact">
                    <textarea className="ask-input" placeholder="Ask a follow-up…"></textarea>
                    <div className="ask-controls">
                      <div className="ask-left">
                        <button className="round-btn" title="Attach">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        </button>
                        <span className="model-btn static">
                          <img className="model-logo" src="/assets/logo.png" alt="" />
                          Chartum One
                        </span>
                      </div>
                      <div className="ask-right">
                        <button className="round-btn" title="Dictate">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                        </button>
                        <button className="send-btn" title="Send">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="sources-dock">
              <div className="sources-menu">
                <input type="checkbox" id="src-toggle" className="dd-toggle" />
                <label className="dd-overlay" htmlFor="src-toggle"></label>
                <div className="sources-box">
                <label className="sources-chip" htmlFor="src-toggle">
                  <span>Sources</span>
                  <span className="src-favs">
                    <span className="favicon f-orange">R</span>
                    <span className="favicon f-dark">B</span>
                    <span className="favicon f-green">N</span>
                    <span className="favicon f-blue">M</span>
                  </span>
                  <span className="src-count">12</span>
                  <svg className="src-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </label>
                <div className="sources-list">
                  <a className="src-item" href="#">
                    <span className="favicon f-orange">R</span>
                    <span className="src-body">
                      <span className="src-domain">reuters.com</span>
                      <span className="src-title">Nvidia beats on revenue, data center up 58% year over year</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-dark">B</span>
                    <span className="src-body">
                      <span className="src-domain">bloomberg.com</span>
                      <span className="src-title">Nvidia guides Q3 above estimates on Rubin demand</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-green">N</span>
                    <span className="src-body">
                      <span className="src-domain">nvidia.com</span>
                      <span className="src-title">CFO commentary — Q2 fiscal 2027 results</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-blue">M</span>
                    <span className="src-body">
                      <span className="src-domain">morganstanley.com</span>
                      <span className="src-title">MS raises NVDA target to $290 on sold-out 2027 supply</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-purple">S</span>
                    <span className="src-body">
                      <span className="src-domain">sec.gov</span>
                      <span className="src-title">NVIDIA Corporation Form 10-Q — fiscal Q2 2027</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-teal">W</span>
                    <span className="src-body">
                      <span className="src-domain">wsj.com</span>
                      <span className="src-title">Inside Nvidia’s sovereign-AI push: 14 national deals</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-orange">F</span>
                    <span className="src-body">
                      <span className="src-domain">ft.com</span>
                      <span className="src-title">Chipmakers hold margins as HBM costs rise</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-dark">Y</span>
                    <span className="src-body">
                      <span className="src-domain">yahoo.com</span>
                      <span className="src-title">Street reaction: 14 of 18 desks raise Nvidia targets</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-green">C</span>
                    <span className="src-body">
                      <span className="src-domain">cnbc.com</span>
                      <span className="src-title">Nvidia Q2: data-center mix hits 82% of revenue</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-blue">B</span>
                    <span className="src-body">
                      <span className="src-domain">barrons.com</span>
                      <span className="src-title">Valuation check: NVDA at 34× forward vs 29× median</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-purple">T</span>
                    <span className="src-body">
                      <span className="src-domain">theinformation.com</span>
                      <span className="src-title">Hyperscalers remain 46% of Nvidia’s quarterly sales</span>
                    </span>
                  </a>
                  <a className="src-item" href="#">
                    <span className="favicon f-teal">A</span>
                    <span className="src-body">
                      <span className="src-domain">arxiv.org</span>
                      <span className="src-title">Notes on Rubin Ultra ramp and HBM supply constraints</span>
                    </span>
                  </a>
                </div>
                </div>
              </div>
            </aside>

          </div>
    </>
  );
}

export function Stock() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/insights">Companies</a>
              <a className="ph-link" href="/insights/watchlist">Watchlist</a>
            </nav>
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
            <div className="stock-wrap">

              <section className="co-id card">
                <form className="co-id-search" action="/insights" method="get">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                  <input type="search" name="q" placeholder="Search" defaultValue="NVDA" autoComplete="off" />
                  <button type="button" title="Filters">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
                  </button>
                </form>
                <span className="co-id-logo tile t-green">NV</span>
                <h1>Nvidia Corporation</h1>
                <p className="co-id-exch">NVDA | NASDAQ</p>
                <div className="co-id-px">
                  <span className="co-id-value">$228.75</span>
                  <span className="co-id-chg">$6.92 | +3.12%</span>
                </div>
                <p className="co-id-earn">Earnings: Aug 26, 2026</p>
              </section>

              <section className="co-brief card">
                <h2>Chartum Brief</h2>
                <p className="co-brief-sub">A summary of key recent developments</p>
                <input className="brief-more-cb" type="checkbox" id="brief-more" />
                <ul className="co-brief-list">
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">6 days ago</span></div>
                    <p>Nvidia said data-center revenue again set a record as Blackwell systems moved from allocation into broader production. Management pointed to multi-year visibility from cloud and sovereign AI buyers, with the next platform already in the pipeline.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">2 weeks ago</span></div>
                    <p>Gross margin held in the mid-70s as mix stayed concentrated in high-end AI GPUs. Networking and CUDA software continue to deepen switching costs around the installed base.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent neut">Neutral</span><span className="ago">3 weeks ago</span></div>
                    <p>Export-control updates around advanced accelerators remain a swing factor for China. Nvidia is routing demand into compliant SKUs, but the ceiling on that channel is still policy-dependent.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">1 month ago</span></div>
                    <p>Hyperscalers reiterated multi-year GPU buildouts in earnings calls, with custom silicon described as additive rather than a near-term substitute for Nvidia’s training clusters.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bear">Bearish</span><span className="ago">1 month ago</span></div>
                    <p>Valuation remains stretched versus history after the run, so the setup is more sensitive to any pause in estimate revisions or a slower Blackwell ramp than the last two years implied.</p>
                  </li>
                </ul>
                <label className="brief-toggle show" htmlFor="brief-more">Show all 5</label>
                <label className="brief-toggle hide" htmlFor="brief-more">Show less</label>
              </section>

              <section className="fin-strip card">
                <div className="fin-col">
                  <h3>Valuation</h3>
                  <div className="fin-row"><span className="fin-k">Market Cap</span><span className="fin-v">$5.58t</span></div>
                  <div className="fin-row"><span className="fin-k">PE<span className="fin-sub">TTM | NTM | 2027</span></span><span className="fin-v">34.17 | 29.82 | 24.10</span></div>
                  <div className="fin-row"><span className="fin-k">Price to Sales</span><span className="fin-v">24.80</span></div>
                  <div className="fin-row"><span className="fin-k">EV to EBITDA</span><span className="fin-v">28.40</span></div>
                  <div className="fin-row"><span className="fin-k">Price to Book</span><span className="fin-v">48.60</span></div>
                </div>
                <div className="fin-col">
                  <h3>Cash Flow</h3>
                  <div className="fin-row"><span className="fin-k">Free Cash Flow Yield<span className="fin-sub">FCF Per Share / Price ($3.94 / $228.75)</span></span><span className="fin-v">1.72%</span></div>
                  <div className="fin-row"><span className="fin-k">SBC Adj. Free Cash Flow Yield<span className="fin-sub">Adj. FCF Per Share / Price ($3.23 / $228.75)</span></span><span className="fin-v">1.41%</span></div>
                  <div className="fin-row"><span className="fin-k">SBC Impact</span><span className="fin-v">−18.20%</span></div>
                </div>
                <div className="fin-col">
                  <h3>Margins &amp; Growth</h3>
                  <div className="fin-row"><span className="fin-k">Profit Margin</span><span className="fin-v">55.10%</span></div>
                  <div className="fin-row"><span className="fin-k">Operating Margin</span><span className="fin-v">61.20%</span></div>
                  <div className="fin-row"><span className="fin-k">Quarterly Earnings (YoY)</span><span className="fin-v">54.20%</span></div>
                  <div className="fin-row"><span className="fin-k">Quarterly Revenue (YoY)</span><span className="fin-v">55.60%</span></div>
                </div>
                <div className="fin-col">
                  <h3>Balance</h3>
                  <div className="fin-row"><span className="fin-k">Cash</span><span className="fin-v">$53.70b</span></div>
                  <div className="fin-row"><span className="fin-k">Debt</span><span className="fin-v">$10.20b</span></div>
                  <div className="fin-row"><span className="fin-k">Net</span><span className="fin-v">$43.50b</span></div>
                </div>
                <div className="fin-col">
                  <h3>Dividend</h3>
                  <div className="fin-row"><span className="fin-k">Dividend Yield</span><span className="fin-v">0.02%</span></div>
                  <div className="fin-row"><span className="fin-k">Payout Ratio</span><span className="fin-v">1.10%</span></div>
                  <div className="fin-row"><span className="fin-k">Payout Date</span><span className="fin-v">Sep 26, 2026</span></div>
                </div>
              </section>

              <div className="metrics-block">
                <svg className="chart-defs" width="0" height="0" aria-hidden="true">
                  <defs>
                    <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#55c586" stopOpacity=".28"/>
                      <stop offset="1" stopColor="#55c586" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <input className="per-radio" type="radio" name="period" id="per-q" defaultChecked />
                <input className="per-radio" type="radio" name="period" id="per-ttm" />
                <input className="per-radio" type="radio" name="period" id="per-ann" />
                <div className="per-tabs">
                  <label htmlFor="per-q">Quarterly</label>
                  <label htmlFor="per-ttm">Quarterly (TTM)</label>
                  <label htmlFor="per-ann">Annually</label>
                </div>
                <div className="mgrid">
                  <div className="mcard m-price"><div className="mcard-head"><span>Price</span><span className="chg up">↑ +0.10%</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,58 C25,56 50,62 70,48 C95,32 120,38 145,26 C170,18 185,16 200,12 L200,80 L0,80 Z"/><path className="line" d="M0,58 C25,56 50,62 70,48 C95,32 120,38 145,26 C170,18 185,16 200,12"/></svg></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,64 C30,58 60,66 90,42 C120,26 155,30 200,14 L200,80 L0,80 Z"/><path className="line" d="M0,64 C30,58 60,66 90,42 C120,26 155,30 200,14"/></svg></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,72 C40,68 80,52 120,34 C155,20 180,16 200,10 L200,80 L0,80 Z"/><path className="line" d="M0,72 C40,68 80,52 120,34 C155,20 180,16 200,10"/></svg></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-rev"><div className="mcard-head"><span>Revenue</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}}></i><i style={{height: "30%"}}></i><i style={{height: "38%"}}></i><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "82%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "28%"}}></i><i style={{height: "36%"}}></i><i style={{height: "46%"}}></i><i style={{height: "56%"}}></i><i style={{height: "66%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}}></i><i style={{height: "34%"}}></i><i style={{height: "58%"}}></i><i style={{height: "80%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-seg"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Revenue by segment</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "62%"}}></i><i style={{height: "68%"}}></i><i style={{height: "72%"}}></i><i style={{height: "76%"}}></i><i style={{height: "80%"}}></i><i style={{height: "84%"}}></i><i style={{height: "87%"}}></i><i style={{height: "90%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "60%"}}></i><i style={{height: "66%"}}></i><i style={{height: "71%"}}></i><i style={{height: "75%"}}></i><i style={{height: "79%"}}></i><i style={{height: "83%"}}></i><i style={{height: "86%"}}></i><i style={{height: "89%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "68%"}}></i><i style={{height: "78%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-kpi"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Data center GPUs</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}}></i><i style={{height: "26%"}}></i><i style={{height: "36%"}}></i><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "84%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "24%"}}></i><i style={{height: "34%"}}></i><i style={{height: "44%"}}></i><i style={{height: "56%"}}></i><i style={{height: "66%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "12%"}}></i><i style={{height: "28%"}}></i><i style={{height: "52%"}}></i><i style={{height: "76%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-arpu"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Gross margin</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "70%"}}></i><i style={{height: "74%"}}></i><i style={{height: "78%"}}></i><i style={{height: "80%"}}></i><i style={{height: "82%"}}></i><i style={{height: "84%"}}></i><i style={{height: "86%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "68%"}}></i><i style={{height: "72%"}}></i><i style={{height: "76%"}}></i><i style={{height: "79%"}}></i><i style={{height: "81%"}}></i><i style={{height: "83%"}}></i><i style={{height: "85%"}}></i><i style={{height: "87%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "58%"}}></i><i style={{height: "66%"}}></i><i style={{height: "74%"}}></i><i style={{height: "82%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-ebit"><div className="mcard-head"><span>EBITDA</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}}></i><i style={{height: "24%"}}></i><i style={{height: "34%"}}></i><i style={{height: "46%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "84%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}}></i><i style={{height: "32%"}}></i><i style={{height: "42%"}}></i><i style={{height: "54%"}}></i><i style={{height: "64%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "10%"}}></i><i style={{height: "26%"}}></i><i style={{height: "48%"}}></i><i style={{height: "74%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-ni"><div className="mcard-head"><span>Net Income</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "14%"}}></i><i style={{height: "22%"}}></i><i style={{height: "32%"}}></i><i style={{height: "44%"}}></i><i style={{height: "56%"}}></i><i style={{height: "68%"}}></i><i style={{height: "82%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "20%"}}></i><i style={{height: "30%"}}></i><i style={{height: "40%"}}></i><i style={{height: "52%"}}></i><i style={{height: "62%"}}></i><i style={{height: "74%"}}></i><i style={{height: "86%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}}></i><i style={{height: "24%"}}></i><i style={{height: "46%"}}></i><i style={{height: "72%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-fcf"><div className="mcard-head"><span>Free Cash Flow</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "12%"}}></i><i style={{height: "20%"}}></i><i style={{height: "30%"}}></i><i style={{height: "42%"}}></i><i style={{height: "54%"}}></i><i style={{height: "66%"}}></i><i style={{height: "80%"}}></i><i style={{height: "96%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}}></i><i style={{height: "28%"}}></i><i style={{height: "38%"}}></i><i style={{height: "50%"}}></i><i style={{height: "60%"}}></i><i style={{height: "72%"}}></i><i style={{height: "84%"}}></i><i style={{height: "98%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}}></i><i style={{height: "22%"}}></i><i style={{height: "44%"}}></i><i style={{height: "70%"}}></i><i style={{height: "94%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                </div>
              </div>

            </div>
          </div>
    </>
  );
}

export function Tools() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Tools</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/tools">Calendar</a>
              <a className="ph-link" href="/tools/transcripts">Transcripts</a>
              <a className="ph-link" href="/tools/portfolio">Portfolio</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ec-wrap">
              <input type="radio" name="ecday" id="ec-sun" className="ec-radio" />
              <input type="radio" name="ecday" id="ec-mon" className="ec-radio" />
              <input type="radio" name="ecday" id="ec-tue" className="ec-radio" />
              <input type="radio" name="ecday" id="ec-wed" className="ec-radio" defaultChecked />
              <input type="radio" name="ecday" id="ec-thu" className="ec-radio" />
              <input type="radio" name="ecday" id="ec-fri" className="ec-radio" />
              <input type="radio" name="ecday" id="ec-sat" className="ec-radio" />

              <div className="ec-head">
                <h1 className="ec-title">Earnings Calendar</h1>
                <div className="ec-tools">
                  <button className="icon-btn" type="button" title="Filters">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                  </button>
                  <button className="icon-btn" type="button" title="Pick a date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </button>
                  <div className="ec-nav">
                    <label className="ec-chev" htmlFor="ec-tue" title="Previous day">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </label>
                    <label className="ec-today" htmlFor="ec-wed">Today</label>
                    <label className="ec-chev" htmlFor="ec-thu" title="Next day">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </label>
                  </div>
                </div>
              </div>

              <div className="ec-days">
                <label className="ec-day is-empty" htmlFor="ec-sun">
                  <span className="ec-dow">Sun</span>
                  <span className="ec-date">Sep 6</span>
                  <span className="ec-calls">No Calls</span>
                </label>
                <label className="ec-day" htmlFor="ec-mon">
                  <span className="ec-dow">Mon</span>
                  <span className="ec-date">Sep 7</span>
                  <span className="ec-foot">
                    <span className="ec-logos"><i className="lg-cost">C</i><i className="lg-fdx">F</i><i className="lg-azo">A</i><i className="lg-dks">D</i></span>
                    <span className="ec-calls">14 Calls</span>
                  </span>
                </label>
                <label className="ec-day" htmlFor="ec-tue">
                  <span className="ec-dow">Tue</span>
                  <span className="ec-date">Sep 8</span>
                  <span className="ec-foot">
                    <span className="ec-logos"><i className="lg-orcl">O</i><i className="lg-gme">G</i><i className="lg-aso">A</i><i className="lg-len">L</i></span>
                    <span className="ec-calls">19 Calls</span>
                  </span>
                </label>
                <label className="ec-day" htmlFor="ec-wed">
                  <span className="ec-dow">Wed</span>
                  <span className="ec-date">Sep 9</span>
                  <span className="ec-foot">
                    <span className="ec-logos"><i className="lg-sunb">S</i><i className="lg-casy">C</i><i className="lg-coo">C</i><i className="lg-sail">S</i></span>
                    <span className="ec-calls">22 Calls</span>
                  </span>
                </label>
                <label className="ec-day" htmlFor="ec-thu">
                  <span className="ec-dow">Thu</span>
                  <span className="ec-date">Sep 10</span>
                  <span className="ec-foot">
                    <span className="ec-logos"><i className="lg-adbe">A</i><i className="lg-lulu">L</i><i className="lg-kr">K</i><i className="lg-cpb">C</i></span>
                    <span className="ec-calls">18 Calls</span>
                  </span>
                </label>
                <label className="ec-day" htmlFor="ec-fri">
                  <span className="ec-dow">Fri</span>
                  <span className="ec-date">Sep 11</span>
                  <span className="ec-foot">
                    <span className="ec-logos"><i className="lg-nke">N</i><i className="lg-rh">R</i><i className="lg-c">C</i></span>
                    <span className="ec-calls">12 Calls</span>
                  </span>
                </label>
                <label className="ec-day is-empty" htmlFor="ec-sat">
                  <span className="ec-dow">Sat</span>
                  <span className="ec-date">Sep 12</span>
                  <span className="ec-calls">No Calls</span>
                </label>
              </div>

              <div className="ec-panel ec-panel-sun">
                <div className="ec-empty">No earnings calls</div>
              </div>

              <div className="ec-panel ec-panel-mon">
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-cost">C</span>
                  <span className="ec-body">
                    <strong>Costco Wholesale Corporation</strong>
                    <em>COST</em>
                    <ul>
                      <li>Reports Q4 FY2026 after the close; consensus EPS $4.28</li>
                      <li>Beat estimates in 7 of the last 8 quarters</li>
                      <li>Membership fee income and US comparable sales are the key watch items</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q4 2026<br />4:15 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-fdx">F</span>
                  <span className="ec-body">
                    <strong>FedEx Corporation</strong>
                    <em>FDX</em>
                    <ul>
                      <li>Reports Q1 FY2027 after the close; Street looks for $3.86 EPS</li>
                      <li>Express volume and the network-optimization plan remain in focus</li>
                      <li>Missed revenue in 2 of the last 4 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q1 2027<br />4:00 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-azo">A</span>
                  <span className="ec-body">
                    <strong>AutoZone, Inc.</strong>
                    <em>AZO</em>
                    <ul>
                      <li>Reports Q4 FY2026 before the open; consensus EPS $36.10</li>
                      <li>DIY demand has cooled while commercial mix keeps expanding</li>
                      <li>Beat estimates in 6 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q4 2026<br />8:00 AM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-dks">D</span>
                  <span className="ec-body">
                    <strong>Dick's Sporting Goods, Inc.</strong>
                    <em>DKS</em>
                    <ul>
                      <li>Reports Q2 FY2026 before the open; consensus EPS $4.41</li>
                      <li>Footwear and the Foot Locker integration are the main swing factors</li>
                      <li>Comp sales expected +2.4% versus +3.1% last year</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />7:30 AM</span>
                </a>
              </div>

              <div className="ec-panel ec-panel-tue">
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-orcl">O</span>
                  <span className="ec-body">
                    <strong>Oracle Corporation</strong>
                    <em>ORCL</em>
                    <ul>
                      <li>Reports Q1 FY2027 after the close; consensus EPS $1.47</li>
                      <li>Cloud infrastructure backlog is the number the tape will trade on</li>
                      <li>Beat estimates in 5 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q1 2027<br />4:00 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-gme">G</span>
                  <span className="ec-body">
                    <strong>GameStop Corp.</strong>
                    <em>GME</em>
                    <ul>
                      <li>Reports Q2 FY2026 after the close; Street looks for $0.18 EPS</li>
                      <li>Collectibles mix and cash-balance update will dominate the call</li>
                      <li>Missed EPS in 3 of the last 6 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />4:15 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-aso">A</span>
                  <span className="ec-body">
                    <strong>Academy Sports and Outdoors, Inc.</strong>
                    <em>ASO</em>
                    <ul>
                      <li>Reports Q2 FY2026 before the open; consensus EPS $2.08</li>
                      <li>Outdoor and firearms categories have been the recent drag</li>
                      <li>Beat estimates in 4 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />7:45 AM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-len">L</span>
                  <span className="ec-body">
                    <strong>Lennar Corporation</strong>
                    <em>LEN</em>
                    <ul>
                      <li>Reports Q3 FY2026 after the close; consensus EPS $2.64</li>
                      <li>Order trends and incentive intensity remain the key swing factors</li>
                      <li>Gross margin guided down 40 bps last quarter</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q3 2026<br />4:15 PM</span>
                </a>
              </div>

              <div className="ec-panel ec-panel-wed">
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-sunb">S</span>
                  <span className="ec-body">
                    <strong>Sunbelt Rentals Holdings Inc</strong>
                    <em>SUNB</em>
                    <ul>
                      <li>Ashtead reports Q1 FY2027 results after the close; consensus EPS $0.84</li>
                      <li>Beat estimates in 5 of the last 8 quarters</li>
                      <li>US rental rates and fleet utilization are the main watch items</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q1 2027<br />3:30 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-casy">C</span>
                  <span className="ec-body">
                    <strong>Casey's General Stores, Inc.</strong>
                    <em>CASY</em>
                    <ul>
                      <li>Reports Q1 FY2027 after the close; Street looks for $3.12 EPS</li>
                      <li>Inside same-store sales beat in each of the last 4 quarters</li>
                      <li>40 new stores opened in the trailing twelve months</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q1 2027<br />3:30 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-coo">C</span>
                  <span className="ec-body">
                    <strong>The Cooper Companies, Inc.</strong>
                    <em>COO</em>
                    <ul>
                      <li>Reports Q3 FY2026 before the open; consensus EPS $1.08</li>
                      <li>CooperVision volume and MyDay pricing remain in focus</li>
                      <li>Beat estimates in 6 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q3 2026<br />12:00 AM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-sail">S</span>
                  <span className="ec-body">
                    <strong>SailPoint, Inc.</strong>
                    <em>SAIL</em>
                    <ul>
                      <li>Reports Q2 FY2027 after the close; Street looks for $0.12 EPS</li>
                      <li>Identity-security ARR growth is the number the tape will trade on</li>
                      <li>Beat revenue in 3 of the last 4 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2027<br />3:30 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-chwy">C</span>
                  <span className="ec-body">
                    <strong>Chewy, Inc.</strong>
                    <em>CHWY</em>
                    <ul>
                      <li>Reports Q2 FY2027 after the close; consensus EPS $0.31</li>
                      <li>Autoship retention and healthcare mix are the key watch items</li>
                      <li>Beat estimates in 5 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2027<br />3:00 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-avgo">A</span>
                  <span className="ec-body">
                    <strong>Broadcom Inc.</strong>
                    <em>AVGO</em>
                    <ul>
                      <li>Reports Q3 FY2026 after the close; consensus EPS $1.66</li>
                      <li>AI ASIC backlog and VMware cAI attach remain the swing factors</li>
                      <li>Beat estimates in 8 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q3 2026<br />4:15 PM</span>
                </a>
              </div>

              <div className="ec-panel ec-panel-thu">
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-adbe">A</span>
                  <span className="ec-body">
                    <strong>Adobe Inc.</strong>
                    <em>ADBE</em>
                    <ul>
                      <li>Reports Q3 FY2026 after the close; consensus EPS $5.18</li>
                      <li>Firefly monetization and Digital Media ARR are the main watch items</li>
                      <li>Beat estimates in 7 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q3 2026<br />4:05 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-lulu">L</span>
                  <span className="ec-body">
                    <strong>lululemon athletica inc.</strong>
                    <em>LULU</em>
                    <ul>
                      <li>Reports Q2 FY2026 after the close; Street looks for $3.12 EPS</li>
                      <li>US comps and China traffic will set the tone for the print</li>
                      <li>Missed EPS in 2 of the last 4 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />4:00 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-kr">K</span>
                  <span className="ec-body">
                    <strong>The Kroger Co.</strong>
                    <em>KR</em>
                    <ul>
                      <li>Reports Q2 FY2026 before the open; consensus EPS $1.01</li>
                      <li>Identical sales ex-fuel and the Albertsons update remain in focus</li>
                      <li>Beat estimates in 5 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />8:00 AM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-cpb">C</span>
                  <span className="ec-body">
                    <strong>The Campbell's Company</strong>
                    <em>CPB</em>
                    <ul>
                      <li>Reports Q4 FY2026 before the open; Street looks for $0.62 EPS</li>
                      <li>Snyder's-Lance integration savings are the key swing factor</li>
                      <li>Organic sales expected −1.2% versus −0.4% last quarter</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q4 2026<br />7:30 AM</span>
                </a>
              </div>

              <div className="ec-panel ec-panel-fri">
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-nke">N</span>
                  <span className="ec-body">
                    <strong>NIKE, Inc.</strong>
                    <em>NKE</em>
                    <ul>
                      <li>Reports Q1 FY2027 after the close; consensus EPS $0.38</li>
                      <li>North America wholesale and China inventory are the main watch items</li>
                      <li>Missed revenue in 3 of the last 4 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q1 2027<br />4:15 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-rh">R</span>
                  <span className="ec-body">
                    <strong>RH</strong>
                    <em>RH</em>
                    <ul>
                      <li>Reports Q2 FY2026 after the close; Street looks for $2.41 EPS</li>
                      <li>Demand in the $3,000+ ticket and gallery traffic remain in focus</li>
                      <li>Beat estimates in 4 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q2 2026<br />4:30 PM</span>
                </a>
                <a className="ec-item" href="/stock">
                  <span className="ec-logo lg-c">C</span>
                  <span className="ec-body">
                    <strong>Citigroup Inc.</strong>
                    <em>C</em>
                    <ul>
                      <li>Reports Q3 FY2026 before the open; consensus EPS $1.74</li>
                      <li>Markets NII and the remaining stranded-cost exit are the swing factors</li>
                      <li>Beat estimates in 6 of the last 8 quarters</li>
                    </ul>
                  </span>
                  <span className="ec-meta">Q3 2026<br />8:00 AM</span>
                </a>
              </div>

              <div className="ec-panel ec-panel-sat">
                <div className="ec-empty">No earnings calls</div>
              </div>

            </div>
          </div>
    </>
  );
}

export function Transcripts() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Tools</span>
            <nav className="ph-nav">
              <a className="ph-link" href="/tools">Calendar</a>
              <a className="ph-link active" href="/tools/transcripts">Transcripts</a>
              <a className="ph-link" href="/tools/portfolio">Portfolio</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ip-wrap tx-wrap">
              <label className="ph-search tx-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                <input type="search" placeholder="Search stocks…" autoComplete="off" />
                <svg className="tx-search-ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              </label>

              <div className="tx-stage">
                <input className="tx-radio" type="radio" name="txq" id="txq-q2" defaultChecked />
                <input className="tx-radio" type="radio" name="txq" id="txq-q1" />
                <input className="tx-radio" type="radio" name="txq" id="txq-q4" />
                <input className="tx-radio" type="radio" name="txq" id="txq-q3" />
                <input className="tx-radio" type="radio" name="txv" id="txv-sum" defaultChecked />
                <input className="tx-radio" type="radio" name="txv" id="txv-full" />

                <aside className="tx-rail card">
                  <div className="tx-co">
                    <svg className="logo-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e7e7e"><path d="M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21z"/></svg>
                    <div>
                      <div className="tx-co-name">NVIDIA Corporation</div>
                      <div className="tx-co-tick">NVDA · NASDAQ</div>
                    </div>
                  </div>
                  <label className="tx-item" htmlFor="txq-q2">
                    <span className="tx-q">Q2</span>
                    <span className="tx-item-text">
                      <strong>NVDA — 2026, Q2</strong>
                      <em>Aug 28, 2026</em>
                    </span>
                  </label>
                  <label className="tx-item" htmlFor="txq-q1">
                    <span className="tx-q">Q1</span>
                    <span className="tx-item-text">
                      <strong>NVDA — 2026, Q1</strong>
                      <em>May 28, 2026</em>
                    </span>
                  </label>
                  <label className="tx-item" htmlFor="txq-q4">
                    <span className="tx-q">Q4</span>
                    <span className="tx-item-text">
                      <strong>NVDA — 2025, Q4</strong>
                      <em>Feb 26, 2026</em>
                    </span>
                  </label>
                  <label className="tx-item" htmlFor="txq-q3">
                    <span className="tx-q">Q3</span>
                    <span className="tx-item-text">
                      <strong>NVDA — 2025, Q3</strong>
                      <em>Nov 19, 2025</em>
                    </span>
                  </label>
                </aside>

                <section className="tx-panel card">
                  <div className="tx-tabs">
                    <label className="tx-tab" htmlFor="txv-sum">Transcript Summary</label>
                    <label className="tx-tab" htmlFor="txv-full">Full Transcript</label>
                  </div>

                  <div className="tx-body">

                  <article className="tx-doc doc-q2-sum">
                    <h2>Data center and Rubin demand</h2>
                    <ul>
                      <li>Data-center revenue was the quarter’s engine. Management said Rubin Ultra is shipping to first hyperscalers and that 2027 supply is effectively sold out.</li>
                      <li>The constraint is not demand. Jensen: the limiting factor is how fast supply can be brought up, not the customer list.</li>
                      <li>Networking (Spectrum-X, InfiniBand) grew with the GPU attach, which management framed as a multi-year systems story rather than a chip cycle.</li>
                    </ul>
                    <h2>Gross margin and supply</h2>
                    <ul>
                      <li>Gross margin held in the mid-70s as Blackwell mix ramped. CoWoS and HBM remain the bottlenecks into the first half of next year.</li>
                      <li>TSMC and memory partners were cited as on track, with incremental capacity still the swing factor for the print.</li>
                    </ul>
                    <h2>Guidance and capital return</h2>
                    <ul>
                      <li>Q3 guide implied another sequential step-up. Full-year commentary stayed above Street going into the print.</li>
                      <li>Buybacks continued; the board left the authorization in place. No change to the dividend.</li>
                    </ul>
                    <h2>China and export controls</h2>
                    <ul>
                      <li>China remains a rounding error versus the U.S. and Europe hyperscaler book. Management would not size a 2027 recovery.</li>
                      <li>H20 / successor SKUs were described as demand-limited by license, not by the product roadmap.</li>
                    </ul>
                  </article>

                  <article className="tx-doc doc-q2-full">
                    <p className="tx-spk"><span>Operator</span> Good afternoon. Welcome to NVIDIA’s second quarter fiscal 2027 earnings call.</p>
                    <p className="tx-spk"><span>Colette Kress</span> Revenue was $46.7 billion, up sequentially on data center. Gross margin was 75.1%. We return excess cash through buybacks; $15 billion was executed in the quarter.</p>
                    <p className="tx-spk"><span>Jensen Huang</span> Demand for Rubin is sold out through the middle of next year. The limiting factor is not customers — it is how fast we can bring up supply. Every major cloud is building AI factories. This is a new computing platform, not a replacement cycle for the last GPU.</p>
                    <p className="tx-spk"><span>Analyst</span> Can you talk about networking attach and whether Spectrum-X is keeping pace with GPU shipments?</p>
                    <p className="tx-spk"><span>Jensen Huang</span> The AI factory is a system. GPUs, NVLink, Spectrum-X, software. Attach is rising because the cluster is the product. We are not selling a chip into a vacant slot.</p>
                  </article>

                  <article className="tx-doc doc-q1-sum">
                    <h2>First-quarter print</h2>
                    <ul>
                      <li>Revenue beat on data center; gaming was flattish. Automotive remained small but grew off a low base.</li>
                      <li>Blackwell was still ramping. Management said the transition from Hopper would be largely complete by year-end.</li>
                    </ul>
                    <h2>Margins</h2>
                    <ul>
                      <li>Gross margin dipped slightly on mix as new-node costs hit before full yields. The path back to the mid-70s was reiterated.</li>
                    </ul>
                    <h2>Outlook</h2>
                    <ul>
                      <li>Q2 guide assumed another step-up in data-center GPUs and a larger networking contribution.</li>
                    </ul>
                  </article>

                  <article className="tx-doc doc-q1-full">
                    <p className="tx-spk"><span>Colette Kress</span> First-quarter revenue was $44.1 billion. Data center was $39.2 billion. We returned $10 billion to shareholders.</p>
                    <p className="tx-spk"><span>Jensen Huang</span> Blackwell is in volume. The world is short of AI infrastructure. We will ship every chip we can make.</p>
                  </article>

                  <article className="tx-doc doc-q4-sum">
                    <h2>Year-end wrap</h2>
                    <ul>
                      <li>FY2026 closed with data center still above 85% of revenue. Full-year growth remained triple-digit on that line.</li>
                      <li>Management introduced the Rubin naming and a 2027 supply envelope that Street treated as a raise.</li>
                    </ul>
                    <h2>Capital and returns</h2>
                    <ul>
                      <li>A larger buyback authorization was approved after the print. Cash generation more than covered it.</li>
                    </ul>
                  </article>

                  <article className="tx-doc doc-q4-full">
                    <p className="tx-spk"><span>Jensen Huang</span> We are at the beginning of the AI industrial revolution. FY2026 was the year the factory got built. FY2027 is the year it runs at scale.</p>
                    <p className="tx-spk"><span>Colette Kress</span> Full-year data-center revenue was $184 billion. We ended with $18 billion in cash after buybacks.</p>
                  </article>

                  <article className="tx-doc doc-q3-sum">
                    <h2>Hopper still in the mix</h2>
                    <ul>
                      <li>Q3 was the last quarter where Hopper was a meaningful slice of data-center GPUs. Blackwell wafers were rising fast.</li>
                      <li>Networking lagged GPU growth by a quarter — a known lag that management said would close in Q4.</li>
                    </ul>
                    <h2>Competition</h2>
                    <ul>
                      <li>Custom silicon at hyperscalers was acknowledged. NVIDIA’s answer was the full stack: CUDA, networking, and systems.</li>
                    </ul>
                  </article>

                  <article className="tx-doc doc-q3-full">
                    <p className="tx-spk"><span>Jensen Huang</span> CUDA is the operating system of AI. Custom ASICs will exist. They will not replace a general-purpose AI computer.</p>
                    <p className="tx-spk"><span>Colette Kress</span> Q3 revenue was $39.3 billion. We continue to expect Blackwell to be the majority of data-center GPUs by Q1.</p>
                  </article>
                </div>
                </section>
              </div>
            </div>
          </div>
    </>
  );
}

export function Search() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/insights">Companies</a>
              <a className="ph-link" href="/insights/watchlist">Watchlist</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ip-wrap">
              <div className="page-title-row">
                <div className="ss-heading">
                  <h1 className="page-title">Search</h1>
                  <span className="ip-sub" id="stock-count">15 stocks</span>
                </div>
                <label className="ph-search ss-field">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                  <input id="stock-q" type="search" placeholder="Ticker or company" autoComplete="off" autoFocus />
                </label>
              </div>

              <input className="tab-radio" type="radio" name="ss-cat" id="ss-all" defaultChecked />
              <input className="tab-radio" type="radio" name="ss-cat" id="ss-mag7" />
              <input className="tab-radio" type="radio" name="ss-cat" id="ss-semi" />

              <div className="ins-tabs">
                <div className="tabs-list">
                  <label className="tab-label" htmlFor="ss-all">All</label>
                  <label className="tab-label" htmlFor="ss-mag7">Mega cap</label>
                  <label className="tab-label" htmlFor="ss-semi">Semis</label>
                </div>
              </div>

              <div className="stock-grid show">
                <a className="stock-card" href="/stock" data-stock="nvda nvidia corp" data-cat="semi mag7"><svg className="logo-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e7e7e"><path d="M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21z"/></svg><div className="stock-info"><span className="ticker">NVDA</span><span className="company">Nvidia Corp</span><span className="mcap">Market Cap: $5.58t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="aapl apple inc" data-cat="mag7"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2z"/></svg><div className="stock-info"><span className="ticker">AAPL</span><span className="company">Apple Inc</span><span className="mcap">Market Cap: $4.70t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="msft microsoft corp" data-cat="mag7"><svg className="logo-box" viewBox="0 0 256 256"><path fill="#7e7e7e" d="M121.666 121.666H0V0h121.666z"/><path fill="#7e7e7e" d="M256 121.666H134.335V0H256z"/><path fill="#7e7e7e" d="M121.663 256.002H0V134.336h121.663z"/><path fill="#7e7e7e" d="M256 256.002H134.335V134.336H256z"/></svg><div className="stock-info"><span className="ticker">MSFT</span><span className="company">Microsoft Corp</span><span className="mcap">Market Cap: $3.71t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="googl goog alphabet google" data-cat="mag7"><span className="logo-ini">GO</span><div className="stock-info"><span className="ticker">GOOGL</span><span className="company">Alphabet Inc A</span><span className="mcap">Market Cap: $2.41t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amzn amazon" data-cat="mag7"><span className="logo-ini">AZ</span><div className="stock-info"><span className="ticker">AMZN</span><span className="company">Amazon.com Inc</span><span className="mcap">Market Cap: $2.18t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="meta facebook" data-cat="mag7"><span className="logo-ini">ME</span><div className="stock-info"><span className="ticker">META</span><span className="company">Meta Platforms</span><span className="mcap">Market Cap: $1.82t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="tsla tesla inc" data-cat="mag7"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362z"/></svg><div className="stock-info"><span className="ticker">TSLA</span><span className="company">Tesla Inc</span><span className="mcap">Market Cap: $1.40t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="avgo broadcom" data-cat="semi"><span className="logo-ini">AV</span><div className="stock-info"><span className="ticker">AVGO</span><span className="company">Broadcom Inc</span><span className="mcap">Market Cap: $1.64t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amd advanced micro devices" data-cat="semi"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137z"/></svg><div className="stock-info"><span className="ticker">AMD</span><span className="company">Advanced Micro Devices</span><span className="mcap">Market Cap: $778.73b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="tsm tsmc taiwan semiconductor" data-cat="semi"><span className="logo-ini">TM</span><div className="stock-info"><span className="ticker">TSM</span><span className="company">Taiwan Semiconductor</span><span className="mcap">Market Cap: $1.12t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="asml asml holding" data-cat="semi"><span className="logo-ini">AS</span><div className="stock-info"><span className="ticker">ASML</span><span className="company">ASML Holding</span><span className="mcap">Market Cap: $312.4b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amat applied materials" data-cat="semi"><span className="logo-ini">AP</span><div className="stock-info"><span className="ticker">AMAT</span><span className="company">Applied Materials</span><span className="mcap">Market Cap: $148.2b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="intc intel" data-cat="semi"><span className="logo-ini">IN</span><div className="stock-info"><span className="ticker">INTC</span><span className="company">Intel Corp</span><span className="mcap">Market Cap: $96.1b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="mu micron" data-cat="semi"><span className="logo-ini">MU</span><div className="stock-info"><span className="ticker">MU</span><span className="company">Micron Technology</span><span className="mcap">Market Cap: $142.8b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="pltr palantir" data-cat=""><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z"/></svg><div className="stock-info"><span className="ticker">PLTR</span><span className="company">Palantir Technologies Inc A</span><span className="mcap">Market Cap: $398.20b</span></div></a>
                <p className="ss-empty" id="stock-empty" hidden>No matching stocks.</p>
              </div>
            </div>
          </div>
    </>
  );
}

export function Watchlist() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link" href="/insights">Companies</a>
              <a className="ph-link active" href="/insights/watchlist">Watchlist</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ip-wrap">
              <div className="page-title-row">
                <h1 className="page-title">Watchlist</h1>
                <div className="side">
                  <button className="ghost-btn">Import</button>
                  <button className="light-btn">+ Add ticker</button>
                </div>
              </div>
              <div className="stock-grid p1" style={{display: "grid"}}>
                <a className="stock-card" href="/stock"><svg className="logo-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e7e7e"><path d="M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21z"/></svg><div className="stock-info"><span className="ticker">NVDA</span><span className="company">Nvidia Corp</span><span className="mcap">Market Cap: $5.58t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2z"/></svg><div className="stock-info"><span className="ticker">AAPL</span><span className="company">Apple Inc</span><span className="mcap">Market Cap: $4.70t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" viewBox="0 0 256 256"><path fill="#7e7e7e" d="M121.666 121.666H0V0h121.666z"/><path fill="#7e7e7e" d="M256 121.666H134.335V0H256z"/><path fill="#7e7e7e" d="M121.663 256.002H0V134.336h121.663z"/><path fill="#7e7e7e" d="M256 256.002H134.335V134.336H256z"/></svg><div className="stock-info"><span className="ticker">MSFT</span><span className="company">Microsoft Corp</span><span className="mcap">Market Cap: $3.71t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137z"/></svg><div className="stock-info"><span className="ticker">AMD</span><span className="company">Advanced Micro Devices</span><span className="mcap">Market Cap: $778.73b</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362z"/></svg><div className="stock-info"><span className="ticker">TSLA</span><span className="company">Tesla Inc</span><span className="mcap">Market Cap: $1.40t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z"/></svg><div className="stock-info"><span className="ticker">PLTR</span><span className="company">Palantir Technologies Inc A</span><span className="mcap">Market Cap: $398.20b</span></div></a>
              </div>
              <div className="wl-add-row">+ Add a ticker to this list</div>
            </div>
          </div>
    </>
  );
}

export function Portfolio() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Tools</span>
            <nav className="ph-nav">
              <a className="ph-link" href="/tools">Calendar</a>
              <a className="ph-link" href="/tools/transcripts">Transcripts</a>
              <a className="ph-link active" href="/tools/portfolio">Portfolio</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="pf-wrap">
              <input type="radio" name="pfpie" id="pie-hold" className="pf-radio" defaultChecked />
              <input type="radio" name="pfpie" id="pie-sec" className="pf-radio" />
              <input type="radio" name="pfpie" id="pie-geo" className="pf-radio" />

              <div className="pf-head">
                <div className="pf-head-left">
                  <span className="pf-kicker">Core book</span>
                  <h1 className="page-title">Portfolio</h1>
                </div>
                <div className="pf-head-right">
                  <div className="pill-tabs">
                    <label htmlFor="pie-hold">Holdings</label>
                    <label htmlFor="pie-sec">Sector</label>
                    <label htmlFor="pie-geo">Geography</label>
                  </div>
                  <button className="ghost-btn" type="button">Rebalance</button>
                </div>
              </div>

              <div className="pf-kpis">
                <div className="pf-kpi lead">
                  <span className="pf-kpi-k">Market value</span>
                  <span className="pf-kpi-v">$248,420</span>
                  <span className="pf-kpi-sub"><span className="up">+$1,863</span> · +0.75% today</span>
                  <svg className="pf-spark" viewBox="0 0 220 28" preserveAspectRatio="none" aria-hidden="true">
                    <path className="ln" d="M0 22 C18 20 28 18 40 16 S62 14 78 12 108 18 124 10 148 6 168 8 198 4 220 3"/>
                  </svg>
                </div>
                <div className="pf-kpi">
                  <span className="pf-kpi-k">Year to date</span>
                  <span className="pf-kpi-v sm up">+18.4%</span>
                  <span className="pf-kpi-sub">vs S&P 500 +12.1%</span>
                </div>
                <div className="pf-kpi">
                  <span className="pf-kpi-k">Cash</span>
                  <span className="pf-kpi-v sm">6.2%</span>
                  <span className="pf-kpi-sub">$15,402 dry powder</span>
                </div>
                <div className="pf-kpi">
                  <span className="pf-kpi-k">Top 5 weight</span>
                  <span className="pf-kpi-v sm">66.5%</span>
                  <span className="pf-kpi-sub">Concentrated book</span>
                </div>
              </div>

              <div className="pf-stage">
                <div className="pf-chart-card">
                  <div className="pf-card-head">
                    <span className="pf-card-title">Allocation</span>
                    <span className="ip-sub">9 names · cash</span>
                  </div>

                  <div className="pf-donut-wrap pf-view-hold">
                    <div className="pf-donut pf-donut-hold"></div>
                    <div className="pf-hole"><strong>9</strong><span>holdings</span></div>
                  </div>
                  <div className="pf-donut-wrap pf-view-sec">
                    <div className="pf-donut pf-donut-sec"></div>
                    <div className="pf-hole"><strong>5</strong><span>sectors</span></div>
                  </div>
                  <div className="pf-donut-wrap pf-view-geo">
                    <div className="pf-donut pf-donut-geo"></div>
                    <div className="pf-hole"><strong>82%</strong><span>United States</span></div>
                  </div>

                  <div className="pf-legend pf-leg-hold">
                    <span className="pf-leg"><i style={{background: "var(--c-nvda)"}}></i> NVDA <em>18.4%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-avgo)"}}></i> AVGO <em>14.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-msft)"}}></i> MSFT <em>12.8%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-aapl)"}}></i> AAPL <em>11.5%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-googl)"}}></i> GOOGL <em>9.6%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-amzn)"}}></i> AMZN <em>8.1%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-meta)"}}></i> META <em>7.4%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-tsm)"}}></i> TSM <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-cash)"}}></i> Cash <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-asml)"}}></i> ASML <em>5.6%</em></span>
                  </div>
                  <div className="pf-legend pf-leg-sec">
                    <span className="pf-leg"><i style={{background: "var(--c-semi)"}}></i> Semiconductors <em>38.8%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-inet)"}}></i> Internet platforms <em>25.1%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-soft)"}}></i> Software <em>12.8%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-ce)"}}></i> Consumer electronics <em>11.5%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-cash)"}}></i> Cash <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-eqp)"}}></i> Semi equipment <em>5.6%</em></span>
                  </div>
                  <div className="pf-legend pf-leg-geo">
                    <span className="pf-leg"><i style={{background: "var(--c-us)"}}></i> United States <em>82.0%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-tw)"}}></i> Taiwan <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-cash)"}}></i> Cash <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-nl)"}}></i> Netherlands <em>5.6%</em></span>
                  </div>
                </div>

              <div className="pf-comp">
                <div className="pf-comp-head">
                  <h2>Composition</h2>
                  <button className="pf-expand" type="button">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                    Expand
                  </button>
                </div>
                <div className="pf-cols"><span>Stock</span><span>Weight</span><span>Gain/Loss</span></div>

                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "100%"}}><span className="pf-logo t-teal">NV</span> Nvidia</span></span>
                  <span className="pf-w">18.40%</span>
                  <span className="pf-gl up">↑ +$823</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "77.2%"}}><span className="pf-logo t-rust">AV</span> Broadcom</span></span>
                  <span className="pf-w">14.20%</span>
                  <span className="pf-gl up">↑ +$317</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "69.6%"}}><span className="pf-logo t-blue">MS</span> Microsoft</span></span>
                  <span className="pf-w">12.80%</span>
                  <span className="pf-gl up">↑ +$127</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "62.5%"}}><span className="pf-logo t-gold">AA</span> Apple</span></span>
                  <span className="pf-w">11.50%</span>
                  <span className="pf-gl down">↓ −$86</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "52.2%"}}><span className="pf-logo t-purple">GO</span> Alphabet</span></span>
                  <span className="pf-w">9.60%</span>
                  <span className="pf-gl up">↑ +$262</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "44.0%"}}><span className="pf-logo t-rose">AM</span> Amazon</span></span>
                  <span className="pf-w">8.10%</span>
                  <span className="pf-gl up">↑ +$121</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "40.2%"}}><span className="pf-logo t-green">ME</span> Meta</span></span>
                  <span className="pf-w">7.40%</span>
                  <span className="pf-gl down">↓ −$147</span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "33.7%"}}><span className="pf-logo t-slate">TS</span> TSMC</span></span>
                  <span className="pf-w">6.20%</span>
                  <span className="pf-gl up">↑ +$323</span>
                </a>
                <div className="pf-row">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "33.7%"}}><span className="pf-logo t-slate">$</span> Cash</span></span>
                  <span className="pf-w">6.20%</span>
                  <span className="pf-gl flat">—</span>
                </div>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "30.4%"}}><span className="pf-logo t-gold">AS</span> ASML</span></span>
                  <span className="pf-w">5.60%</span>
                  <span className="pf-gl up">↑ +$70</span>
                </a>
              </div>
              </div>

              <div className="pf-splits">
                <div className="pf-split">
                  <h3>Industry</h3>
                  <div className="pf-mini sec" aria-hidden="true"></div>
                  <div className="pf-legend">
                    <span className="pf-leg"><i style={{background: "var(--c-semi)"}}></i> Semiconductors <em>38.8%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-inet)"}}></i> Internet <em>25.1%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-soft)"}}></i> Software <em>12.8%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-ce)"}}></i> Consumer elec. <em>11.5%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-cash)"}}></i> Cash <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-eqp)"}}></i> Equipment <em>5.6%</em></span>
                  </div>
                </div>
                <div className="pf-split">
                  <h3>Geography</h3>
                  <div className="pf-mini geo" aria-hidden="true"></div>
                  <div className="pf-legend">
                    <span className="pf-leg"><i style={{background: "var(--c-us)"}}></i> United States <em>82.0%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-tw)"}}></i> Taiwan <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-cash)"}}></i> Cash <em>6.2%</em></span>
                    <span className="pf-leg"><i style={{background: "var(--c-nl)"}}></i> Netherlands <em>5.6%</em></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
    </>
  );
}

export function Landing() {
  return (
    <div className="lp">
      <header className="lp-nav">
          <a className="lp-brand" href="/landing">
            <img src="/assets/logo.png" alt="" />
            <span>CHARTUM</span>
          </a>
          <nav className="lp-links">
            <a href="/insights">Product</a>
            <a href="/insights">Insights</a>
            <a href="/overview">Research</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>
          <div className="lp-nav-right">
            <a className="lp-text" href="/">Sign in</a>
            <a className="lp-pill ghost" href="/">Contact sales</a>
            <a className="lp-pill solid" href="/">Open app</a>
          </div>
        </header>

        <main>
          <section className="lp-hero">
            <p className="lp-kicker">Chartum</p>
            <h1>AI research that reads<br />the whole company</h1>
            <p className="lp-lede">Chartum answers the hardest questions with briefs, filings, and live markets — and almost no noise.</p>
            <a className="lp-cta" href="/">Try Chartum for free <span>→</span></a>
          </section>

          <section className="lp-stage">
            <div className="lp-stage-bg" role="presentation"></div>
            <div className="lp-window">
              <div className="lp-win-bar">Chartum Brief</div>
              <div className="lp-win-body">
                <div className="lp-bot-row">
                  <img className="lp-bot-mark" src="/assets/logo.png" alt="" />
                  <div>
                    <p className="lp-bot-meta"><strong>chartum</strong> <span>bot</span> reviewed 1 hour ago</p>
                    <p className="lp-bot-title">NVDA — data-center mix still doing the work</p>
                  </div>
                </div>

                <div className="lp-file">
                  <div className="lp-file-head">insights / nvidia · Q2 print</div>
                  <pre className="lp-diff"><span className="rm">−  Data center 78% of revenue · GM 72.4%</span>
      <span className="add">+  Data center 82% of revenue · GM 74.8%</span>
      <span className="add">+  Guidance: FY27 revenue $265B (was $240B)</span></pre>
                </div>

                <h3 className="lp-find">Estimate revisions leaking into the multiple</h3>
                <p className="lp-find-p">Street numbers moved up with the print, but the multiple still assumes the Blackwell ramp stays linear. A two-quarter slip in supply would unwind most of the NTM re-rate — worth sizing before adding.</p>
                <div className="lp-heart">♡ 3</div>

                <div className="lp-comment">
                  <span className="lp-ava">LB</span>
                  <span><strong>leitan</strong> just now</span>
                </div>
              </div>
            </div>
          </section>

          <section className="lp-proof">
            <p className="lp-proof-k">A daily brief for thousands of research desks</p>
            <div className="lp-logos">
              <span>Helios</span>
              <span>Meridian</span>
              <span>Sable</span>
              <span>Harbor</span>
              <span>Kinetic</span>
              <span>Aperture</span>
              <span>Northstar</span>
              <span>Lumen</span>
            </div>
          </section>

          <section className="lp-features">
            <article>
              <h2>Ask with confidence</h2>
              <p>When you open a name, Chartum already has the filings, the print, and the tape in the background.</p>
              <div className="lp-well">
              <div className="lp-mock mock-pr">
                <div className="lp-mock-head">
                  <span className="lp-ava sm">NV</span>
                  <span>just one more thing!</span>
                </div>
                <div className="lp-checks">
                  <div className="lp-checks-title">Some checks pending</div>
                  <div className="lp-check"><i className="ok"></i> Chartum / Quotes</div>
                  <div className="lp-check"><i className="ok"></i> Chartum / Filings</div>
                  <div className="lp-check"><i className="wait"></i> Chartum / Brief</div>
                </div>
                <button className="lp-merge" type="button">Open research brief ▾</button>
              </div>
              </div>
            </article>

            <article>
              <h2>Adapts to your desk</h2>
              <p>Chartum gets sharper as you pin names, write rules, and keep a space for the book you actually own.</p>
              <div className="lp-well">
              <div className="lp-mock mock-code">
                <div className="lp-code-bar"><span></span><span></span><span></span></div>
                <pre>desk:
        universe: watchlist
        rules:
          - Flag GM slips &gt; 150 bps q/q
          - Surface SBC-adj. FCF yield
          - Skip stories already in Overview

      # pinned
      - NVDA
      - AVGO
      - META</pre>
              </div>
              </div>
            </article>

            <article>
              <h2>High signal, low noise</h2>
              <p>Chartum writes for the decision. <strong>70%+</strong> of briefs get saved to a space before the next print.</p>
              <div className="lp-well">
              <div className="lp-mock mock-thread">
                <div className="lp-thread-row">
                  <img className="lp-bot-mark sm" src="/assets/logo.png" alt="" />
                  <div>
                    <div className="lp-bot-meta"><strong>chartum bot</strong></div>
                    <pre className="lp-mini-diff"><span className="rm">− FCF yield 1.41%</span>
      <span className="add">+ FCF yield 1.72% · SBC-adj.</span></pre>
                    <p>SBC is still eating the print. Sized that way, FCF is less of a support than the headline.</p>
                  </div>
                </div>
                <div className="lp-thread-row reply">
                  <span className="lp-ava sm">LB</span>
                  <p>nice catch, pinning this.</p>
                </div>
              </div>
              </div>
            </article>
          </section>
        </main>

        <footer className="lp-foot" id="pricing">
          <a className="lp-brand" href="/landing">
            <img src="/assets/logo.png" alt="" />
            <span>CHARTUM</span>
          </a>
          <nav id="resources">
            <a href="/">App</a>
            <a href="/insights">Insights</a>
            <a href="/overview">Overview</a>
          </nav>
        </footer>
    </div>
  );
}
