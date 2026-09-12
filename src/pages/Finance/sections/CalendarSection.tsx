function CalendarSection() {
  return (
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
          </button>
          <button className="icon-btn" type="button" title="Pick a date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </button>
          <div className="ec-nav">
            <label className="ec-chev" htmlFor="ec-tue" title="Previous day">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </label>
            <label className="ec-today" htmlFor="ec-wed">Today</label>
            <label className="ec-chev" htmlFor="ec-thu" title="Next day">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
          <span className="ec-logo lg-dks">D</span>
          <span className="ec-body">
            <strong>Dick&apos;s Sporting Goods, Inc.</strong>
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
          <span className="ec-logo lg-casy">C</span>
          <span className="ec-body">
            <strong>Casey&apos;s General Stores, Inc.</strong>
            <em>CASY</em>
            <ul>
              <li>Reports Q1 FY2027 after the close; Street looks for $3.12 EPS</li>
              <li>Inside same-store sales beat in each of the last 4 quarters</li>
              <li>40 new stores opened in the trailing twelve months</li>
            </ul>
          </span>
          <span className="ec-meta">Q1 2027<br />3:30 PM</span>
        </a>
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
          <span className="ec-logo lg-cpb">C</span>
          <span className="ec-body">
            <strong>The Campbell&apos;s Company</strong>
            <em>CPB</em>
            <ul>
              <li>Reports Q4 FY2026 before the open; Street looks for $0.62 EPS</li>
              <li>Snyder&apos;s-Lance integration savings are the key swing factor</li>
              <li>Organic sales expected −1.2% versus −0.4% last quarter</li>
            </ul>
          </span>
          <span className="ec-meta">Q4 2026<br />7:30 AM</span>
        </a>
      </div>

      <div className="ec-panel ec-panel-fri">
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
        <a className="ec-item" href="/answer">
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
  )
}

export default CalendarSection
