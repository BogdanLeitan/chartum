import "./static.css"

export function Discover() {
  return (
    <>
      <input type="radio" name="disc-tab" id="disc-foryou" className="disc-radio" defaultChecked />
      <input type="radio" name="disc-tab" id="disc-weather" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-all" className="disc-radio" defaultChecked />
      <input type="radio" name="disc-topic" id="disc-topic-markets" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-tech" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-crypto" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-macro" className="disc-radio" />
      <input type="radio" name="disc-topic" id="disc-topic-companies" className="disc-radio" />

      <header className="page-head discover-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Discover</span>
            <nav className="ph-nav">
              <label className="ph-link" htmlFor="disc-foryou">For You</label>
              <label className="ph-link" htmlFor="disc-weather">Weather</label>
              <div className="topics-dd">
                <input type="checkbox" id="topics-toggle" className="topics-toggle" />
                <label htmlFor="topics-toggle" className="ph-link topics-btn">
                  <span className="topics-current"></span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
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

              <section className="wx-section">
                <div className="wx-hero">
                  <div className="wx-place">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>
                    Bucharest, Romania
                  </div>
                  <p className="wx-updated">Thursday, Sep 10 · Updated 7:02 PM</p>
                  <div className="wx-temp-row">
                    <span className="wx-ico wx-part" aria-hidden="true">
                      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="10" cy="10" r="3.2"/><path d="M10 3.8V5.2M3.8 10H5.2M5.8 5.8l1 .9"/><path d="M7 17h10.2a3.6 3.6 0 0 0 .5-7.1 5.4 5.4 0 0 0-10.2 1.7"/></svg>
                    </span>
                    <span className="wx-temp">24°</span>
                    <span className="wx-cond">
                      <strong>Partly cloudy</strong>
                      <em>Feels like 23° · H 26° / L 15°</em>
                    </span>
                  </div>
                </div>

                <div className="wx-stats">
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h14a3 3 0 1 1-3 3"/><path d="M3 16h8"/></svg>
                      Wind
                    </span>
                    <strong>8 km/h</strong><em>NE · Gusts 14</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 6.2 6 10.2A6 6 0 1 1 6 13.2C6 9.2 12 3 12 3z"/></svg>
                      Humidity
                    </span>
                    <strong>48%</strong><em>Comfortable</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 3v1.6M12 19.4V21M4.2 4.2l1.1 1.1M18.7 18.7l1.1 1.1M3 12h1.6M19.4 12H21M4.2 19.8l1.1-1.1M18.7 5.3l1.1-1.1"/></svg>
                      UV index
                    </span>
                    <strong>4</strong><em>Moderate</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/></svg>
                      Visibility
                    </span>
                    <strong>10 km</strong><em>Clear</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="13" r="7"/><path d="M12 13V8.5M12 6V3"/></svg>
                      Pressure
                    </span>
                    <strong>1016</strong><em>hPa · Steady</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14.5V6.2a2.2 2.2 0 1 1 4.4 0V14.5a3.4 3.4 0 1 1-4.4 0z"/></svg>
                      Dew point
                    </span>
                    <strong>12°</strong><em>Dry air</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="10" r="3"/><path d="M12 3.5V5M5.8 5.8l1 .9M18.2 5.8l-1 .9M3 18h18M6 18v-2M18 18v-2"/></svg>
                      Sunrise
                    </span>
                    <strong>6:47</strong><em>Sunset 19:31</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16.5c2.2-1.8 3.2-4.7 3.2-7.6C8.2 6.2 9.8 4 12 4s3.8 2.2 3.8 4.9c0 2.9 1 5.8 3.2 7.6"/><path d="M7.2 20h9.6"/></svg>
                      Air quality
                    </span>
                    <strong>Good</strong><em>AQI 32</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg>
                      Cloud cover
                    </span>
                    <strong>40%</strong><em>Partly open</em>
                  </div>
                  <div className="wx-stat">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M7 14.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 9"/><path d="M8.2 17.2v2M12 17.2v2.6M15.8 17.2v2"/></svg>
                      Precip
                    </span>
                    <strong>10%</strong><em>0 mm today</em>
                  </div>
                </div>

                <div className="wx-block">
                  <h2>Hourly</h2>
                  <div className="wx-hourly">
                    <div className="wx-hour is-now"><span>Now</span><span className="wx-ico wx-part"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10" cy="10" r="3"/><path d="M7 16.2h9.2a3.4 3.4 0 0 0 .4-6.7 5 5 0 0 0-9.3 1.6"/></svg></span><strong>24°</strong><em>10%</em></div>
                    <div className="wx-hour"><span>8 PM</span><span className="wx-ico wx-part"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10" cy="10" r="3"/><path d="M7 16.2h9.2a3.4 3.4 0 0 0 .4-6.7 5 5 0 0 0-9.3 1.6"/></svg></span><strong>22°</strong><em>10%</em></div>
                    <div className="wx-hour"><span>9 PM</span><span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span><strong>20°</strong><em>15%</em></div>
                    <div className="wx-hour"><span>10 PM</span><span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span><strong>18°</strong><em>15%</em></div>
                    <div className="wx-hour"><span>11 PM</span><span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span><strong>17°</strong><em>20%</em></div>
                    <div className="wx-hour"><span>12 AM</span><span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span><strong>16°</strong><em>20%</em></div>
                    <div className="wx-hour"><span>1 AM</span><span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span><strong>16°</strong><em>15%</em></div>
                    <div className="wx-hour"><span>2 AM</span><span className="wx-ico wx-part"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10" cy="10" r="3"/><path d="M7 16.2h9.2a3.4 3.4 0 0 0 .4-6.7 5 5 0 0 0-9.3 1.6"/></svg></span><strong>15°</strong><em>10%</em></div>
                    <div className="wx-hour"><span>6 AM</span><span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span><strong>15°</strong><em>5%</em></div>
                    <div className="wx-hour"><span>9 AM</span><span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span><strong>21°</strong><em>0%</em></div>
                    <div className="wx-hour"><span>12 PM</span><span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span><strong>26°</strong><em>0%</em></div>
                    <div className="wx-hour"><span>3 PM</span><span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span><strong>27°</strong><em>0%</em></div>
                  </div>
                </div>

                <div className="wx-block">
                  <h2>This week</h2>
                  <div className="wx-days">
                    <div className="wx-row is-today">
                      <span className="wx-row-day">Today<span>Thu 10</span></span>
                      <span className="wx-ico wx-part"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10" cy="10" r="3"/><path d="M7 16.2h9.2a3.4 3.4 0 0 0 .4-6.7 5 5 0 0 0-9.3 1.6"/></svg></span>
                      <span className="wx-row-cond">Partly cloudy</span>
                      <span className="wx-row-pop">10%</span>
                      <span className="wx-row-wind">8 km/h</span>
                      <span className="wx-row-temps"><b>26°</b> / 15°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Friday<span>Sep 11</span></span>
                      <span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span>
                      <span className="wx-row-cond">Sunny</span>
                      <span className="wx-row-pop">0%</span>
                      <span className="wx-row-wind">10 km/h</span>
                      <span className="wx-row-temps"><b>27°</b> / 16°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Saturday<span>Sep 12</span></span>
                      <span className="wx-ico wx-cloud"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 17.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 12"/></svg></span>
                      <span className="wx-row-cond">Cloudy</span>
                      <span className="wx-row-pop">25%</span>
                      <span className="wx-row-wind">12 km/h</span>
                      <span className="wx-row-temps"><b>23°</b> / 14°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Sunday<span>Sep 13</span></span>
                      <span className="wx-ico wx-rain"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M7 14.2h9.4a3.5 3.5 0 0 0 .5-6.9A5.2 5.2 0 0 0 7.2 9"/><path d="M8.2 17.2v2M12 17.2v2.6M15.8 17.2v2"/></svg></span>
                      <span className="wx-row-cond">Light showers</span>
                      <span className="wx-row-pop">60%</span>
                      <span className="wx-row-wind">14 km/h</span>
                      <span className="wx-row-temps"><b>19°</b> / 13°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Monday<span>Sep 14</span></span>
                      <span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span>
                      <span className="wx-row-cond">Clearing</span>
                      <span className="wx-row-pop">5%</span>
                      <span className="wx-row-wind">9 km/h</span>
                      <span className="wx-row-temps"><b>22°</b> / 12°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Tuesday<span>Sep 15</span></span>
                      <span className="wx-ico wx-sun"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.6v1.5M12 18.9v1.5M3.6 12h1.5M18.9 12h1.5M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"/></svg></span>
                      <span className="wx-row-cond">Sunny</span>
                      <span className="wx-row-pop">0%</span>
                      <span className="wx-row-wind">8 km/h</span>
                      <span className="wx-row-temps"><b>25°</b> / 14°</span>
                    </div>
                    <div className="wx-row">
                      <span className="wx-row-day">Wednesday<span>Sep 16</span></span>
                      <span className="wx-ico wx-part"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10" cy="10" r="3"/><path d="M7 16.2h9.2a3.4 3.4 0 0 0 .4-6.7 5 5 0 0 0-9.3 1.6"/></svg></span>
                      <span className="wx-row-cond">Partly cloudy</span>
                      <span className="wx-row-pop">15%</span>
                      <span className="wx-row-wind">11 km/h</span>
                      <span className="wx-row-temps"><b>24°</b> / 15°</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="disc-feed">

                <a className="fy-feature t-markets t-tech t-companies" href="/answer">
                  <div className="fy-copy">
                    <h2 className="fy-title teal">Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex math</h2>
                    <p className="fy-pub">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.8"/></svg>
                      Published 4 hours ago
                    </p>
                    <p className="fy-snippet">First hyperscaler deliveries landed two months ahead of schedule. Analysts now model $640B of combined AI infrastructure spend next year, up from $510B before the Q2 print.</p>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-dark">B</span><span className="favicon f-orange">R</span><span className="favicon f-teal">F</span></span>
                      <span>15 sources</span>
                      <span className="fy-actions">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </div>
                  <div className="fy-photo g-hero"></div>
                </a>

                <div className="fy-trio">
                  <a className="fy-card t-tech t-companies" href="/answer">
                    <div className="fy-card-img g-3"></div>
                    <h3>Apple's foldable iPhone enters mass production ahead of spring launch</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-purple">T</span><span className="favicon f-dark">B</span></span>
                      <span>8 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </a>
                  <a className="fy-card t-crypto" href="/answer">
                    <div className="fy-card-img g-4"></div>
                    <h3>Bitcoin retreats from $128K record as ETF inflows pause</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-blue">C</span><span className="favicon f-orange">R</span></span>
                      <span>16 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </a>
                  <a className="fy-card t-tech t-macro" href="/answer">
                    <div className="fy-card-img g-5"></div>
                    <h3>Inside the sovereign-AI race: 14 national compute deals and counting</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-dark">W</span><span className="favicon f-green">E</span></span>
                      <span>9 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </a>
                </div>

                <a className="fy-feature reverse t-markets t-macro" href="/answer">
                  <div className="fy-photo g-1"></div>
                  <div className="fy-copy">
                    <h2 className="fy-title">Fed officials split on October cut as core inflation cools to 2.4%</h2>
                    <p className="fy-pub">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.8"/></svg>
                      Published 2 hours ago
                    </p>
                    <p className="fy-snippet">Three voters now back a 25 bps move; futures price a 68% chance of a cut in October as shelter inflation finally loosens.</p>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-orange">R</span><span className="favicon f-dark">B</span><span className="favicon f-teal">F</span></span>
                      <span>12 sources</span>
                      <span className="fy-actions">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </div>
                </a>

                <div className="fy-trio">
                  <a className="fy-card t-markets t-macro" href="/answer">
                    <div className="fy-card-img g-2"></div>
                    <h3>Oil slides 3% after OPEC+ signals larger November output hike</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-teal">F</span><span className="favicon f-orange">R</span></span>
                      <span>11 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </a>
                  <a className="fy-card t-tech t-companies" href="/answer">
                    <div className="fy-card-img g-7"></div>
                    <h3>OpenAI locks a multi-year custom-silicon deal as GPU lead times stretch</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-purple">T</span><span className="favicon f-dark">W</span></span>
                      <span>7 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
                      </span>
                    </div>
                  </a>
                  <a className="fy-card t-tech t-macro" href="/answer">
                    <div className="fy-card-img g-6"></div>
                    <h3>Europe's chip act 2.0: can subsidies buy a place in the AI supply chain?</h3>
                    <div className="fy-foot">
                      <span className="src-stack"><span className="favicon f-green">E</span><span className="favicon f-teal">F</span></span>
                      <span>6 sources</span>
                      <span className="fy-actions">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6a4.6 4.6 0 0 0-7.3-3.6L12 6.2l-1.5-1.2a4.6 4.6 0 0 0-7.3 3.6c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
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

export function Extensions() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Extensions</span>
          </header>

          <div className="content">
            <div className="ext-wrap">
              <input type="radio" name="ext-tab" id="ext-tab-discover" className="ext-radio" defaultChecked />
              <input type="radio" name="ext-tab" id="ext-tab-all" className="ext-radio" />
              <input type="radio" name="ext-tab" id="ext-tab-connected" className="ext-radio" />
              <input type="radio" name="ext-tab" id="ext-tab-available" className="ext-radio" />
              <input type="radio" name="ext-cat" id="ext-cat-all" className="ext-radio" defaultChecked />
              <input type="radio" name="ext-cat" id="ext-cat-productivity" className="ext-radio" />
              <input type="radio" name="ext-cat" id="ext-cat-markets" className="ext-radio" />
              <input type="radio" name="ext-cat" id="ext-cat-creative" className="ext-radio" />
              <input type="radio" name="ext-cat" id="ext-cat-developer" className="ext-radio" />

              <h1 className="ext-title">Extensions</h1>
              <p className="ext-lead">Connect services so Chartum can access and act on your data</p>

              <label className="ext-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                <input type="search" placeholder="Search all extensions" />
              </label>

              <div className="ext-toolbar">
                <div className="ext-tabs">
                  <label className="ext-tab" htmlFor="ext-tab-discover">Discover</label>
                  <label className="ext-tab" htmlFor="ext-tab-all">All</label>
                  <label className="ext-tab" htmlFor="ext-tab-connected">Connected</label>
                  <label className="ext-tab" htmlFor="ext-tab-available">Available</label>
                </div>

                <div className="ext-cat-dd">
                  <input type="checkbox" id="ext-cat-toggle" className="ext-cat-toggle" />
                  <label className="ext-cat-btn" htmlFor="ext-cat-toggle">
                    <span className="ext-cat-name"></span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </label>
                  <label htmlFor="ext-cat-toggle" className="ext-cat-overlay"></label>
                  <div className="ext-cat-menu">
                    <label className="ext-cat-item" htmlFor="ext-cat-all">All categories</label>
                    <label className="ext-cat-item" htmlFor="ext-cat-productivity">Productivity</label>
                    <label className="ext-cat-item" htmlFor="ext-cat-markets">Markets</label>
                    <label className="ext-cat-item" htmlFor="ext-cat-creative">Creative</label>
                    <label className="ext-cat-item" htmlFor="ext-cat-developer">Developer</label>
                  </div>
                </div>
              </div>

              <div className="ext-catalog">
                <div className="ext-sec-head" data-sec="popular">
                  <span className="ext-sec-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M6.2 17.8l2.1-2.1M15.7 8.3l2.1-2.1"/><circle cx="12" cy="12" r="3.2"/></svg>
                    Popular
                  </span>
                  <span className="ext-sec-actions">
                    <span className="ext-chev" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </span>
                    <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
                  </span>
                </div>

                <article className="ext-card cat-prod">
                  <span className="ext-logo lg-gmail">G</span>
                  <span className="ext-body">
                    <span className="ext-name">Gmail with Calendar <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Search, create, and manage your emails and calendar events</span>
                  </span>
                  <input type="checkbox" id="ext-gmail" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-gmail" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-prod">
                  <span className="ext-logo lg-outlook">O</span>
                  <span className="ext-body">
                    <span className="ext-name">Outlook <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Search your emails and calendar events</span>
                  </span>
                  <input type="checkbox" id="ext-outlook" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-outlook" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-prod">
                  <span className="ext-logo lg-hubspot">H</span>
                  <span className="ext-body">
                    <span className="ext-name">HubSpot <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Retrieve, create, and update CRM objects; manage contacts, companies</span>
                  </span>
                  <input type="checkbox" id="ext-hubspot" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-hubspot" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-prod">
                  <span className="ext-logo lg-monday">M</span>
                  <span className="ext-body">
                    <span className="ext-name">Monday.com <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Manage boards, items, and groups; create updates and sub-items</span>
                  </span>
                  <input type="checkbox" id="ext-monday" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-monday" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-dev">
                  <span className="ext-logo lg-supabase">S</span>
                  <span className="ext-body">
                    <span className="ext-name">Supabase <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Build and manage your app's database, auth, and storage</span>
                  </span>
                  <input type="checkbox" id="ext-supabase" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-supabase" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-dev">
                  <span className="ext-logo lg-vercel">▲</span>
                  <span className="ext-body">
                    <span className="ext-name">Vercel <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Manage teams, projects, and deployments; search documentation</span>
                  </span>
                  <input type="checkbox" id="ext-vercel" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-vercel" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <div className="ext-sec-head" data-sec="new">
                  <span className="ext-sec-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 9.5 8.5 4 9.2l4.2 3.8L7 19l5-2.8L17 19l-1.2-6 4.2-3.8-5.5-.7Z"/></svg>
                    New
                  </span>
                  <span className="ext-sec-actions">
                    <span className="ext-chev" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </span>
                    <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
                  </span>
                </div>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-higgs">H</span>
                  <span className="ext-body">
                    <span className="ext-name">Higgsfield <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Generate images, videos, audio, and Soul characters with Higgsfield models</span>
                  </span>
                  <input type="checkbox" id="ext-higgs" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-higgs" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-markets">
                  <span className="ext-logo lg-aries">A</span>
                  <span className="ext-body">
                    <span className="ext-name">Aries <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Access market data, place orders, and analyze portfolio performance</span>
                  </span>
                  <input type="checkbox" id="ext-aries" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-aries" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-markets">
                  <span className="ext-logo lg-quant">Q</span>
                  <span className="ext-body">
                    <span className="ext-name">QuantWheel <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Query real-time options market data — gamma exposure, options flows, and</span>
                  </span>
                  <input type="checkbox" id="ext-quant" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-quant" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-prod">
                  <span className="ext-logo lg-evernote">E</span>
                  <span className="ext-body">
                    <span className="ext-name">Evernote <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Search, read, and create notes, notebooks, tags, and tasks in Evernote</span>
                  </span>
                  <input type="checkbox" id="ext-evernote" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-evernote" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-dev">
                  <span className="ext-logo lg-autodesk">A</span>
                  <span className="ext-body">
                    <span className="ext-name">Autodesk Product Help <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Search official Autodesk Help content and retrieve product-specific guidance</span>
                  </span>
                  <input type="checkbox" id="ext-autodesk" className="ext-on" defaultChecked />
                  <label className="ext-add" htmlFor="ext-autodesk" title="Connected"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-markets">
                  <span className="ext-logo lg-chrono">C</span>
                  <span className="ext-body">
                    <span className="ext-name">Chronograph <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Analyze private-markets fund performance, company metrics,</span>
                  </span>
                  <input type="checkbox" id="ext-chrono" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-chrono" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <div className="ext-sec-head" data-sec="creative">
                  <span className="ext-sec-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3c.7 2.4 2.6 4.3 5 5-2.4.7-4.3 2.6-5 5-.7-2.4-2.6-4.3-5-5 2.4-.7 4.3-2.6 5-5Z"/></svg>
                    Creative
                  </span>
                  <span className="ext-sec-actions">
                    <span className="ext-chev" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </span>
                    <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
                  </span>
                </div>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-lucid">L</span>
                  <span className="ext-body">
                    <span className="ext-name">Lucid <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Ideate, diagram, and align teams</span>
                  </span>
                  <input type="checkbox" id="ext-lucid" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-lucid" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-whimsical">W</span>
                  <span className="ext-body">
                    <span className="ext-name">Whimsical <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Create, edit, and read Whimsical content from coding agents with Whimsical MCP</span>
                  </span>
                  <input type="checkbox" id="ext-whimsical" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-whimsical" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-bio">bio</span>
                  <span className="ext-body">
                    <span className="ext-name">BioRender <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Create professional scientific figures, diagrams, and posters in BioRender</span>
                  </span>
                  <input type="checkbox" id="ext-bio" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-bio" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-figma">F</span>
                  <span className="ext-body">
                    <span className="ext-name">Figma <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Comprehensive Figma connector for managing files, projects, teams,</span>
                  </span>
                  <input type="checkbox" id="ext-figma" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-figma" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-twitch">T</span>
                  <span className="ext-body">
                    <span className="ext-name">Twitch <span className="ext-pill">Popular</span> <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Twitch is an interactive livestreaming service for content spanning gaming,</span>
                  </span>
                  <input type="checkbox" id="ext-twitch" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-twitch" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>

                <article className="ext-card cat-creative">
                  <span className="ext-logo lg-canva">C</span>
                  <span className="ext-body">
                    <span className="ext-name">Canva Enterprise <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span>
                    <span className="ext-desc">Enable your organization to create, collaborate, and publish visual content</span>
                  </span>
                  <input type="checkbox" id="ext-canva" className="ext-on" />
                  <label className="ext-add" htmlFor="ext-canva" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></label>
                </article>
              </div>

              <p className="ext-empty">No extensions connected yet</p>
            </div>
          </div>
    </>
  );
}

export function Settings() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Settings</span>
          </header>

          <div className="content">
            <div className="set-wrap">
              <input type="checkbox" id="set-notif-email" className="set-cb" defaultChecked />
              <input type="checkbox" id="set-notif-product" className="set-cb" defaultChecked />
              <input type="checkbox" id="set-notif-earnings" className="set-cb" />
              <input type="checkbox" id="set-memories" className="set-cb" defaultChecked />
              <input type="checkbox" id="set-training" className="set-cb" />
              <input type="radio" name="set-mode" id="set-mode-search" className="set-cb" defaultChecked />
              <input type="radio" name="set-mode" id="set-mode-research" className="set-cb" />
              <input type="radio" name="set-mode" id="set-mode-finance" className="set-cb" />

              <h1 className="set-title">Settings</h1>
              <p className="set-lead">Account, appearance, and how Chartum works for you.</p>

              <section className="set-block">
                <h2>Account</h2>
                <div className="set-card">
                  <div className="set-profile">
                    <img className="set-avatar" src="/assets/profil.png" alt="Leitan Bogdan" />
                    <div>
                      <strong>Leitan Bogdan</strong>
                      <span>leitan.bogdan@email.com</span>
                    </div>
                    <span className="set-badge">Free plan</span>
                  </div>
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Upgrade</strong>
                      <span>Unlimited threads, live data, and deeper research.</span>
                    </div>
                    <button className="set-btn" type="button">See plans</button>
                  </div>
                </div>
              </section>

              <section className="set-block">
                <h2>Appearance</h2>
                <div className="set-card">
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Theme</strong>
                      <span className="set-theme-name"></span>
                    </div>
                    <label className="set-switch" htmlFor="theme-light">
                      <span className="set-knob"></span>
                    </label>
                  </div>
                </div>
              </section>

              <section className="set-block">
                <h2>Chat</h2>
                <div className="set-card">
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Default mode</strong>
                      <span>Used when you start a new thread.</span>
                    </div>
                    <div className="set-pills">
                      <label htmlFor="set-mode-search">Search</label>
                      <label htmlFor="set-mode-research">Research</label>
                      <label htmlFor="set-mode-finance">Finance</label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="set-block">
                <h2>Notifications</h2>
                <div className="set-card">
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Email digest</strong>
                      <span>A morning brief of markets and your spaces.</span>
                    </div>
                    <label className="set-switch" htmlFor="set-notif-email"><span className="set-knob"></span></label>
                  </div>
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Product updates</strong>
                      <span>New models, extensions, and features.</span>
                    </div>
                    <label className="set-switch" htmlFor="set-notif-product"><span className="set-knob"></span></label>
                  </div>
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Earnings alerts</strong>
                      <span>Watchlist names reporting this week.</span>
                    </div>
                    <label className="set-switch" htmlFor="set-notif-earnings"><span className="set-knob"></span></label>
                  </div>
                </div>
              </section>

              <section className="set-block">
                <h2>Privacy</h2>
                <div className="set-card">
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Save memories</strong>
                      <span>Let Chartum remember preferences across threads.</span>
                    </div>
                    <label className="set-switch" htmlFor="set-memories"><span className="set-knob"></span></label>
                  </div>
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Help improve Chartum</strong>
                      <span>Allow chats to be used for model training.</span>
                    </div>
                    <label className="set-switch" htmlFor="set-training"><span className="set-knob"></span></label>
                  </div>
                  <div className="set-row">
                    <div className="set-copy">
                      <strong>Export data</strong>
                      <span>Download threads, spaces, and watchlists.</span>
                    </div>
                    <button className="set-btn ghost" type="button">Export</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
}
