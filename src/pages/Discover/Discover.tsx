import "./Discover.css"

function Discover() {
  return (
    <>
      <input type="radio" name="disc-tab" id="disc-foryou" className="disc-radio" defaultChecked />
      <input type="radio" name="disc-topic" id="disc-topic-all" className="disc-radio" defaultChecked />
      <input type="radio" name="disc-topic" id="disc-topic-markets" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-tech" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-crypto" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-macro" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-companies" className="disc-radio" />

      <header className="page-head discover-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>
        <span className="ph-title">Discover</span>
        <nav className="ph-nav">
          <label className="ph-link" htmlFor="disc-foryou">For You</label>
          <div className="topics-dd">
            <input type="checkbox" id="topics-toggle" className="topics-toggle" />
            <label htmlFor="topics-toggle" className="ph-link topics-btn">
              <span className="topics-current"></span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </label>
            <label htmlFor="topics-toggle" className="topics-overlay"></label>
            <div className="topics-menu">
              <label className="topics-item" htmlFor="disc-topic-all">For You</label>
              <label className="topics-item" htmlFor="disc-topic-markets">Markets</label>
              <label className="topics-item" htmlFor="disc-topic-tech">Tech</label>
              <label className="topics-item" htmlFor="disc-topic-crypto">Crypto</label>
              <label className="topics-item" htmlFor="disc-topic-macro">Macro</label>
              <label className="topics-item" htmlFor="disc-topic-companies">Companies</label>
            </div>
          </div>
        </nav>
      </header>

      <div className="content">
        <div className="discover-wrap">
          <div className="disc-feed">

            <a className="fy-feature t-markets t-tech t-companies" href="/answer">
              <div className="fy-copy">
                <h2 className="fy-title teal">Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex math</h2>
                <p className="fy-pub">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 1.8" /></svg>
                  Published 4 hours ago
                </p>
                <p className="fy-snippet">First hyperscaler deliveries landed two months ahead of schedule. Analysts now model $640B of combined AI infrastructure spend next year, up from $510B before the Q2 print.</p>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-dark">B</span><span className="favicon f-orange">R</span><span className="favicon f-teal">F</span></span>
                  <span>15 sources</span>
                  <span className="fy-actions">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </div>
              <div className="fy-photo">
                <img src="/assets/news/news-nvidia.png" alt="" />
              </div>
            </a>

            <div className="fy-trio">
              <a className="fy-card t-tech t-companies" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-apple.png" alt="" />
                </div>
                <h3>Apple's foldable iPhone enters mass production ahead of spring launch</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-purple">T</span><span className="favicon f-dark">B</span></span>
                  <span>8 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
              <a className="fy-card t-crypto" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-btc.png" alt="" />
                </div>
                <h3>Bitcoin retreats from $128K record as ETF inflows pause</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-blue">C</span><span className="favicon f-orange">R</span></span>
                  <span>16 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
              <a className="fy-card t-tech t-macro" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-sov.png" alt="" />
                </div>
                <h3>Inside the sovereign-AI race: 14 national compute deals and counting</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-dark">W</span><span className="favicon f-green">E</span></span>
                  <span>9 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
            </div>

            <a className="fy-feature reverse t-markets t-macro" href="/answer">
              <div className="fy-photo">
                <img src="/assets/news/news-fed.png" alt="" />
              </div>
              <div className="fy-copy">
                <h2 className="fy-title">Fed officials split on October cut as core inflation cools to 2.4%</h2>
                <p className="fy-pub">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 1.8" /></svg>
                  Published 2 hours ago
                </p>
                <p className="fy-snippet">Three voters now back a 25 bps move; futures price a 68% chance of a cut in October as shelter inflation finally loosens.</p>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-orange">R</span><span className="favicon f-dark">B</span><span className="favicon f-teal">F</span></span>
                  <span>12 sources</span>
                  <span className="fy-actions">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </div>
            </a>

            <div className="fy-trio">
              <a className="fy-card t-markets t-macro" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-oil.png" alt="" />
                </div>
                <h3>Oil slides 3% after OPEC+ signals larger November output hike</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-teal">F</span><span className="favicon f-orange">R</span></span>
                  <span>11 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
              <a className="fy-card t-tech t-companies" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-openai.png" alt="" />
                </div>
                <h3>OpenAI locks a multi-year custom-silicon deal as GPU lead times stretch</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-purple">T</span><span className="favicon f-dark">W</span></span>
                  <span>7 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
              <a className="fy-card t-tech t-macro" href="/answer">
                <div className="fy-card-img">
                  <img src="/assets/news/news-chip.png" alt="" />
                </div>
                <h3>Europe's chip act 2.0: can subsidies buy a place in the AI supply chain?</h3>
                <div className="fy-foot">
                  <span className="src-stack"><span className="favicon f-green">E</span><span className="favicon f-teal">F</span></span>
                  <span>6 sources</span>
                  <span className="fy-actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Discover
