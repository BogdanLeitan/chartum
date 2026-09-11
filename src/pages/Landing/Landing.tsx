import { Link } from "react-router-dom"
import "./Landing.css"

function ShotSearch() {
  return (
    <div className="lp-shot-ui">
      <aside className="lp-mini-side">
        <img src="/assets/logo.png" alt="" />
        <i /><i /><i /><i />
      </aside>
      <div className="lp-mini-main search-shot">
        <p className="lp-mini-greet">Good evening</p>
        <h3>What would you like to research?</h3>
        <div className="lp-mini-ask">
          <span className="lp-typed">Is Nvidia still a buy after Q2 earnings?</span>
          <div className="lp-mini-ask-bar">
            <span>Search</span>
            <b>↑</b>
          </div>
        </div>
        <div className="lp-mini-answer">
          <p className="lp-src-line"><i /><i /><i /> 21 sources</p>
          <p>Data-center mix is still doing the work. Guidance moved up; the multiple still assumes a linear Blackwell ramp.</p>
        </div>
      </div>
    </div>
  )
}

function ShotDiscover() {
  return (
    <div className="lp-shot-ui">
      <aside className="lp-mini-side">
        <img src="/assets/logo.png" alt="" />
        <i /><i /><i /><i />
      </aside>
      <div className="lp-mini-main">
        <div className="lp-mini-head"><b>Discover</b><span>For You</span><span>Weather</span></div>
        <div className="lp-disc-feat">
          <div>
            <h4>Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex</h4>
            <p>First hyperscaler deliveries landed two months ahead of schedule.</p>
          </div>
          <div className="lp-photo g-hero"></div>
        </div>
        <div className="lp-disc-row">
          <div className="lp-disc-card"><div className="lp-photo g-3"></div><p>Apple foldable enters mass production</p></div>
          <div className="lp-disc-card"><div className="lp-photo g-5"></div><p>Oil nears $100 ahead of Fed week</p></div>
          <div className="lp-disc-card"><div className="lp-photo g-2"></div><p>Yen rallies on BOJ tightening bets</p></div>
        </div>
      </div>
    </div>
  )
}

function ShotInsights() {
  return (
    <div className="lp-shot-ui">
      <aside className="lp-mini-side">
        <img src="/assets/logo.png" alt="" />
        <i /><i /><i /><i />
      </aside>
      <div className="lp-mini-main">
        <div className="lp-mini-head"><b>Insights</b><span className="on">Companies</span><span>Watchlist</span></div>
        <div className="lp-co-grid">
          {[["NVDA", "$224.25", "up"], ["AAPL", "$247.81", "up"], ["MSFT", "$428.90", "up"], ["AMZN", "$231.40", "up"], ["META", "$651.14", "up"], ["TSLA", "$248.50", "dn"]].map(([t, p, d]) => (
            <div className="lp-co" key={t}>
              <em>{t.slice(0, 2)}</em>
              <div><b>{t}</b><span>{p}</span></div>
              <small className={d}>{d === "up" ? "+0.4%" : "−0.7%"}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShotExtensions() {
  return (
    <div className="lp-shot-ui">
      <aside className="lp-mini-side">
        <img src="/assets/logo.png" alt="" />
        <i /><i /><i /><i />
      </aside>
      <div className="lp-mini-main">
        <div className="lp-mini-head"><b>Extensions</b><span className="on">Discover</span><span>All</span><span>Connected</span></div>
        <p className="lp-ext-lead">Connect services so Chartum can act on your data</p>
        <div className="lp-ext-grid">
          {[
            ["I", "Insights", "on"],
            ["O", "Overview", "on"],
            ["T", "Tools", ""],
            ["G", "Gmail", ""],
            ["C", "Calendar", ""],
            ["S", "Supabase", ""],
          ].map(([l, n, on]) => (
            <div className={`lp-ext ${on}`} key={n}>
              <span className={`lg lg-${n.toLowerCase()}`}>{l}</span>
              <div><b>{n}</b><small>{on ? "Connected" : "Available"}</small></div>
              <i className={on ? "check" : "plus"}>{on ? "✓" : "+"}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Landing() {
  return (
    <div className="lp">
      <input type="checkbox" id="theme-light" className="theme-cb" />
      <header className="lp-nav">
        <Link className="lp-brand" to="/landing">
          <img src="/assets/logo.png" alt="" />
          <span>CHARTUM</span>
        </Link>
        <nav className="lp-links">
          <a href="#product">Product</a>
          <a href="#extensions">Extensions</a>
          <a href="#open-source">Open source</a>
        </nav>
        <div className="lp-nav-right">
          <label className="lp-theme" htmlFor="theme-light" title="Toggle theme">
            <svg className="theme-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="theme-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
            </svg>
          </label>
          <Link className="lp-text" to="/">Sign in</Link>
          <Link className="lp-pill solid" to="/">Open app</Link>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <p className="lp-kicker">Open source AI search</p>
          <h1>The light browser<br />for asking the web.</h1>
          <p className="lp-lede">
            Chartum is an AI search engine — light like a browser, fully customizable,
            with an extensions library the way Chrome does it. Research, markets, and your tools, in one place.
          </p>
          <div className="lp-hero-cta">
            <Link className="lp-cta" to="/">Try Chartum <span>→</span></Link>
            <a className="lp-cta ghost" href="#open-source">View source</a>
          </div>
        </section>

        <section className="lp-stage" id="product">
          <div className="lp-stage-bg" role="presentation"></div>
          <div className="lp-browser">
            <div className="lp-chrome">
              <span className="lp-dots"><i /><i /><i /></span>
              <div className="lp-omni">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                chartum.app
              </div>
              <span className="lp-chrome-tabs">Search</span>
            </div>
            <div className="lp-app">
              <aside className="lp-side">
                <img src="/assets/logo.png" alt="" />
                <span className="lp-side-item on">New chat</span>
                <span className="lp-side-item">Discover</span>
                <span className="lp-side-item">Insights</span>
                <span className="lp-side-item">Extensions</span>
              </aside>
              <div className="lp-pane">
                <p className="lp-pane-greet">Good evening</p>
                <h2 className="lp-pane-title">What would you like to research?</h2>
                <div className="lp-ask">
                  <div className="lp-ask-q">
                    <span className="lp-typed">Is Nvidia still a buy after Q2 earnings?</span>
                  </div>
                  <div className="lp-ask-foot">
                    <span className="lp-chip">Search</span>
                    <span className="lp-send">↑</span>
                  </div>
                </div>
                <div className="lp-live">
                  <div className="lp-src-stack">
                    <i className="f-dark">B</i><i className="f-orange">R</i><i className="f-teal">F</i>
                    <em>21 sources · 4s</em>
                  </div>
                  <p className="lp-live-p">
                    Data center is 82% of revenue and still compounding. Guidance moved to $265B.
                    The multiple prices a linear Blackwell ramp — size a two-quarter slip before adding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-shots">
          <input type="radio" name="lp-shot" id="lp-s1" className="lp-shot-radio" defaultChecked />
          <input type="radio" name="lp-shot" id="lp-s2" className="lp-shot-radio" />
          <input type="radio" name="lp-shot" id="lp-s3" className="lp-shot-radio" />
          <input type="radio" name="lp-shot" id="lp-s4" className="lp-shot-radio" />

          <div className="lp-shots-copy">
            <p className="lp-kicker">The product</p>
            <h2>Every surface, in a light browser.</h2>
            <p>Search, Discover, Insights, and a Chrome-style extensions catalog — same shell, no extra chrome.</p>
            <div className="lp-shot-tabs">
              <label htmlFor="lp-s1">Search</label>
              <label htmlFor="lp-s2">Discover</label>
              <label htmlFor="lp-s3">Insights</label>
              <label htmlFor="lp-s4">Extensions</label>
            </div>
          </div>

          <div className="lp-shots-stage">
            <div className="lp-frame vis-s1"><ShotSearch /></div>
            <div className="lp-frame vis-s2"><ShotDiscover /></div>
            <div className="lp-frame vis-s3"><ShotInsights /></div>
            <div className="lp-frame vis-s4"><ShotExtensions /></div>
          </div>
        </section>

        <section className="lp-pillars">
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
            </span>
            <h3>Open source</h3>
            <p>Read the code, fork the engine, ship your own build. Chartum stays light because the community can see every layer.</p>
          </article>
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </span>
            <h3>Fully customizable</h3>
            <p>Themes, modes, spaces, and the layout you actually work in. Turn Chartum into your desk — not a generic chat window.</p>
          </article>
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3.111 23h5.556a1 1 0 0 0 1-1v-2.1a1.316 1.316 0 0 1 1.009-1.323 1.224 1.224 0 0 1 1.435 1.2V22a1 1 0 0 0 1 1h3.334a2.113 2.113 0 0 0 2.111-2.111v-3.445h1.222a3.224 3.224 0 0 0 3.179-3.756A3.314 3.314 0 0 0 19.659 11h-1.1V7.555a2.113 2.113 0 0 0-2.111-2.111H13V4.34a3.31 3.31 0 0 0-2.688-3.3 3.222 3.222 0 0 0-3.756 3.182v1.222H3.111A2.113 2.113 0 0 0 1 7.555V12a1 1 0 0 0 1 1h2.1a1.32 1.32 0 0 1 1.323 1.01 1.223 1.223 0 0 1-1.2 1.434H2a1 1 0 0 0-1 1v4.445A2.113 2.113 0 0 0 3.111 23" /></svg>
            </span>
            <h3>Extensions, like Chrome</h3>
            <p>A catalog you browse, connect, and build on. Insights, Tools, Gmail, calendars — install what you need, ignore the rest.</p>
          </article>
        </section>

        <section className="lp-ext-sec" id="extensions">
          <div className="lp-ext-copy">
            <p className="lp-kicker">Library</p>
            <h2>An extensions store that feels like Chrome.</h2>
            <p>Discover, connect, and manage add-ons from one catalog. First-party research tools sit next to the services you already use.</p>
            <Link className="lp-cta" to="/extensions">Open the catalog <span>→</span></Link>
          </div>
          <div className="lp-orbit" aria-hidden="true">
            <article className="lp-float f1"><span className="lg lg-insights">I</span> Insights</article>
            <article className="lp-float f2"><span className="lg lg-overview">O</span> Overview</article>
            <article className="lp-float f3"><span className="lg lg-tools">T</span> Tools</article>
            <article className="lp-float f4"><span className="lg lg-gmail">G</span> Gmail</article>
            <article className="lp-float f5"><span className="lg lg-outlook">O</span> Outlook</article>
            <article className="lp-float f6"><span className="lg lg-supabase">S</span> Supabase</article>
            <article className="lp-float f7"><span className="lg lg-hubspot">H</span> HubSpot</article>
            <article className="lp-float f8"><span className="lg lg-aries">A</span> Aries</article>
          </div>
        </section>

        <section className="lp-gallery">
          <p className="lp-kicker">In the product</p>
          <h2>Screens from the actual engine.</h2>
          <div className="lp-gallery-grid">
            <figure className="wide">
              <figcaption>Search</figcaption>
              <ShotSearch />
            </figure>
            <figure>
              <figcaption>Discover</figcaption>
              <ShotDiscover />
            </figure>
            <figure>
              <figcaption>Insights</figcaption>
              <ShotInsights />
            </figure>
            <figure className="wide">
              <figcaption>Extensions</figcaption>
              <ShotExtensions />
            </figure>
          </div>
        </section>

        <section className="lp-oss" id="open-source">
          <p className="lp-kicker">Open source</p>
          <h2>Yours to read, fork, and reshape.</h2>
          <p>Chartum is built in the open — a light AI search engine you can customize down to the extensions on the shelf.</p>
          <div className="lp-oss-cta">
            <Link className="lp-cta" to="/">Launch Chartum <span>→</span></Link>
            <Link className="lp-cta ghost" to="/extensions">Browse extensions</Link>
          </div>
        </section>
      </main>

      <footer className="lp-foot">
        <div className="lp-foot-cta">
          <div>
            <p className="lp-kicker">Get started</p>
            <h2>Ask the web. Keep it light.</h2>
            <p>Open Chartum — an AI search engine you can read, fork, and extend.</p>
          </div>
          <Link className="lp-cta" to="/">Launch Chartum <span>→</span></Link>
        </div>
        <div className="lp-foot-inner">
          <div className="lp-foot-brand">
            <Link className="lp-brand" to="/landing">
              <img src="/assets/logo.png" alt="" />
              <span>CHARTUM</span>
            </Link>
            <p>The open-source AI search engine. Light like a browser, customizable down to the extensions on the shelf.</p>
          </div>
          <nav className="lp-foot-cols" aria-label="Footer">
            <div>
              <strong>Product</strong>
              <Link to="/">New chat</Link>
              <Link to="/discover">Discover</Link>
              <Link to="/extensions">Extensions</Link>
              <Link to="/settings">Settings</Link>
            </div>
            <div>
              <strong>Extensions</strong>
              <Link to="/extensions">Catalog</Link>
              <a href="#extensions">Library</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#open-source">Open source</a>
              <Link to="/settings">Settings</Link>
              <Link to="/">Sign in</Link>
              <Link to="/">Open app</Link>
            </div>
          </nav>
        </div>
        <div className="lp-foot-bar">
          <span>© 2026 Chartum. Built in the open.</span>
          <div className="lp-foot-bar-links">
            <a href="#product">Product</a>
            <a href="#extensions">Extensions</a>
            <a href="#open-source">Source</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
