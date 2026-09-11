import "./Extensions.css"

function Extensions() {
  return (
    <>
      <header className="page-head extensions-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
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
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M6.2 17.8l2.1-2.1M15.7 8.3l2.1-2.1" /><circle cx="12" cy="12" r="3.2" /></svg>
                Popular
              </span>
              <span className="ext-sec-actions">
                <span className="ext-chev" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </span>
                <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
              </span>
            </div>

            <article className="ext-card cat-prod">
              <span className="ext-logo lg-gmail">G</span>
              <span className="ext-body">
                <span className="ext-name">Gmail with Calendar <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Search, create, and manage your emails and calendar events</span>
              </span>
              <input type="checkbox" id="ext-gmail" className="ext-on" />
              <label className="ext-add" htmlFor="ext-gmail" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-prod">
              <span className="ext-logo lg-outlook">O</span>
              <span className="ext-body">
                <span className="ext-name">Outlook <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Search your emails and calendar events</span>
              </span>
              <input type="checkbox" id="ext-outlook" className="ext-on" />
              <label className="ext-add" htmlFor="ext-outlook" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-prod">
              <span className="ext-logo lg-hubspot">H</span>
              <span className="ext-body">
                <span className="ext-name">HubSpot <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Retrieve, create, and update CRM objects; manage contacts, companies</span>
              </span>
              <input type="checkbox" id="ext-hubspot" className="ext-on" />
              <label className="ext-add" htmlFor="ext-hubspot" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-prod">
              <span className="ext-logo lg-monday">M</span>
              <span className="ext-body">
                <span className="ext-name">Monday.com <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Manage boards, items, and groups; create updates and sub-items</span>
              </span>
              <input type="checkbox" id="ext-monday" className="ext-on" />
              <label className="ext-add" htmlFor="ext-monday" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-dev">
              <span className="ext-logo lg-supabase">S</span>
              <span className="ext-body">
                <span className="ext-name">Supabase <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Build and manage your app's database, auth, and storage</span>
              </span>
              <input type="checkbox" id="ext-supabase" className="ext-on" />
              <label className="ext-add" htmlFor="ext-supabase" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-dev">
              <span className="ext-logo lg-vercel">▲</span>
              <span className="ext-body">
                <span className="ext-name">Vercel <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Manage teams, projects, and deployments; search documentation</span>
              </span>
              <input type="checkbox" id="ext-vercel" className="ext-on" />
              <label className="ext-add" htmlFor="ext-vercel" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <div className="ext-sec-head" data-sec="new">
              <span className="ext-sec-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 9.5 8.5 4 9.2l4.2 3.8L7 19l5-2.8L17 19l-1.2-6 4.2-3.8-5.5-.7Z" /></svg>
                New
              </span>
              <span className="ext-sec-actions">
                <span className="ext-chev" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </span>
                <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
              </span>
            </div>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-higgs">H</span>
              <span className="ext-body">
                <span className="ext-name">Higgsfield <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Generate images, videos, audio, and Soul characters with Higgsfield models</span>
              </span>
              <input type="checkbox" id="ext-higgs" className="ext-on" />
              <label className="ext-add" htmlFor="ext-higgs" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-markets">
              <span className="ext-logo lg-aries">A</span>
              <span className="ext-body">
                <span className="ext-name">Aries <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Access market data, place orders, and analyze portfolio performance</span>
              </span>
              <input type="checkbox" id="ext-aries" className="ext-on" />
              <label className="ext-add" htmlFor="ext-aries" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-markets">
              <span className="ext-logo lg-quant">Q</span>
              <span className="ext-body">
                <span className="ext-name">QuantWheel <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Query real-time options market data — gamma exposure, options flows, and</span>
              </span>
              <input type="checkbox" id="ext-quant" className="ext-on" />
              <label className="ext-add" htmlFor="ext-quant" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-prod">
              <span className="ext-logo lg-evernote">E</span>
              <span className="ext-body">
                <span className="ext-name">Evernote <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Search, read, and create notes, notebooks, tags, and tasks in Evernote</span>
              </span>
              <input type="checkbox" id="ext-evernote" className="ext-on" />
              <label className="ext-add" htmlFor="ext-evernote" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-dev">
              <span className="ext-logo lg-autodesk">A</span>
              <span className="ext-body">
                <span className="ext-name">Autodesk Product Help <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Search official Autodesk Help content and retrieve product-specific guidance</span>
              </span>
              <input type="checkbox" id="ext-autodesk" className="ext-on" defaultChecked />
              <label className="ext-add" htmlFor="ext-autodesk" title="Connected"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-markets">
              <span className="ext-logo lg-chrono">C</span>
              <span className="ext-body">
                <span className="ext-name">Chronograph <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Analyze private-markets fund performance, company metrics,</span>
              </span>
              <input type="checkbox" id="ext-chrono" className="ext-on" />
              <label className="ext-add" htmlFor="ext-chrono" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <div className="ext-sec-head" data-sec="creative">
              <span className="ext-sec-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 3c.7 2.4 2.6 4.3 5 5-2.4.7-4.3 2.6-5 5-.7-2.4-2.6-4.3-5-5 2.4-.7 4.3-2.6 5-5Z" /></svg>
                Creative
              </span>
              <span className="ext-sec-actions">
                <span className="ext-chev" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </span>
                <label className="ext-viewall" htmlFor="ext-tab-all">View all</label>
              </span>
            </div>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-lucid">L</span>
              <span className="ext-body">
                <span className="ext-name">Lucid <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Ideate, diagram, and align teams</span>
              </span>
              <input type="checkbox" id="ext-lucid" className="ext-on" />
              <label className="ext-add" htmlFor="ext-lucid" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-whimsical">W</span>
              <span className="ext-body">
                <span className="ext-name">Whimsical <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Create, edit, and read Whimsical content from coding agents with Whimsical MCP</span>
              </span>
              <input type="checkbox" id="ext-whimsical" className="ext-on" />
              <label className="ext-add" htmlFor="ext-whimsical" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-bio">bio</span>
              <span className="ext-body">
                <span className="ext-name">BioRender <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Create professional scientific figures, diagrams, and posters in BioRender</span>
              </span>
              <input type="checkbox" id="ext-bio" className="ext-on" />
              <label className="ext-add" htmlFor="ext-bio" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-figma">F</span>
              <span className="ext-body">
                <span className="ext-name">Figma <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Comprehensive Figma connector for managing files, projects, teams,</span>
              </span>
              <input type="checkbox" id="ext-figma" className="ext-on" />
              <label className="ext-add" htmlFor="ext-figma" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-twitch">T</span>
              <span className="ext-body">
                <span className="ext-name">Twitch <span className="ext-pill">Popular</span> <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Twitch is an interactive livestreaming service for content spanning gaming,</span>
              </span>
              <input type="checkbox" id="ext-twitch" className="ext-on" />
              <label className="ext-add" htmlFor="ext-twitch" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>

            <article className="ext-card cat-creative">
              <span className="ext-logo lg-canva">C</span>
              <span className="ext-body">
                <span className="ext-name">Canva Enterprise <svg className="ext-out" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg></span>
                <span className="ext-desc">Enable your organization to create, collaborate, and publish visual content</span>
              </span>
              <input type="checkbox" id="ext-canva" className="ext-on" />
              <label className="ext-add" htmlFor="ext-canva" title="Connect"><span>+</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></label>
            </article>
          </div>

          <p className="ext-empty">No extensions connected yet</p>
        </div>
      </div>
    </>
  );
}

export default Extensions