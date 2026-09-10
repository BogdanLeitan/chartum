import "./Tools.css"

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
                <div className="pf-cols"><span>Stock</span><span>Weight</span><span>Price</span></div>

                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "100%"}}><span className="pf-logo t-teal">NV</span> Nvidia</span></span>
                  <span className="pf-w">18.40%</span>
                  <span className="pf-gl up"><span className="pf-px">$224.25</span><span className="pf-pct">+1.80%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "77.2%"}}><span className="pf-logo t-rust">AV</span> Broadcom</span></span>
                  <span className="pf-w">14.20%</span>
                  <span className="pf-gl up"><span className="pf-px">$342.10</span><span className="pf-pct">+0.90%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "69.6%"}}><span className="pf-logo t-blue">MS</span> Microsoft</span></span>
                  <span className="pf-w">12.80%</span>
                  <span className="pf-gl up"><span className="pf-px">$428.90</span><span className="pf-pct">+0.40%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "62.5%"}}><span className="pf-logo t-gold">AA</span> Apple</span></span>
                  <span className="pf-w">11.50%</span>
                  <span className="pf-gl down"><span className="pf-px">$247.81</span><span className="pf-pct">−0.30%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "52.2%"}}><span className="pf-logo t-purple">GO</span> Alphabet</span></span>
                  <span className="pf-w">9.60%</span>
                  <span className="pf-gl up"><span className="pf-px">$178.22</span><span className="pf-pct">+1.11%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "44.0%"}}><span className="pf-logo t-rose">AM</span> Amazon</span></span>
                  <span className="pf-w">8.10%</span>
                  <span className="pf-gl up"><span className="pf-px">$231.40</span><span className="pf-pct">+0.60%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "40.2%"}}><span className="pf-logo t-green">ME</span> Meta</span></span>
                  <span className="pf-w">7.40%</span>
                  <span className="pf-gl down"><span className="pf-px">$651.14</span><span className="pf-pct">−0.79%</span></span>
                </a>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "33.7%"}}><span className="pf-logo t-slate">TS</span> TSMC</span></span>
                  <span className="pf-w">6.20%</span>
                  <span className="pf-gl up"><span className="pf-px">$185.40</span><span className="pf-pct">+2.14%</span></span>
                </a>
                <div className="pf-row">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "33.7%"}}><span className="pf-logo t-slate">$</span> Cash</span></span>
                  <span className="pf-w">6.20%</span>
                  <span className="pf-gl flat"><span className="pf-px">—</span><span className="pf-pct">0.00%</span></span>
                </div>
                <a className="pf-row" href="/stock">
                  <span className="pf-stock"><span className="pf-pill" style={{width: "30.4%"}}><span className="pf-logo t-gold">AS</span> ASML</span></span>
                  <span className="pf-w">5.60%</span>
                  <span className="pf-gl up"><span className="pf-px">$878.20</span><span className="pf-pct">+0.51%</span></span>
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
