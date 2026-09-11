import "./static.css"

export function Answer() {
  return (
    <>
      <header className="thread-bar">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="thread-title">Is Nvidia still a buy after Q2 earnings?</span>
                <nav className="view-tabs">
                  <a className="vtab active" href="/answer">
                    <svg className="vtab-mark" width="14" height="14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
