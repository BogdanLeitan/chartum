import "./Chat.css"

function Chat({ defaultMode = "search" }: { defaultMode?: "search" | "research" | "finance" | "academic" }) {
  return (
    <>
      <div className="ask-area">
        {/* model selection state */}
        <input type="radio" name="model" id="m1" className="model-radio" defaultChecked />
        <input type="radio" name="model" id="m2" className="model-radio" />
        <input type="radio" name="model" id="m3" className="model-radio" />
        <input type="radio" name="model" id="m4" className="model-radio" />
        <input type="radio" name="model" id="m5" className="model-radio" />
        <input type="radio" name="model" id="m6" className="model-radio" />
        <input type="radio" name="model" id="m7" className="model-radio" />
        <input type="radio" name="model" id="m8" className="model-radio" />
        {/* mode selection state */}
        <input type="radio" name="mode" id="mode-search" className="model-radio" defaultChecked={defaultMode === "search"} />
        <input type="radio" name="mode" id="mode-research" className="model-radio" defaultChecked={defaultMode === "research"} />
        <input type="radio" name="mode" id="mode-finance" className="model-radio" defaultChecked={defaultMode === "finance"} />
        <input type="radio" name="mode" id="mode-academic" className="model-radio" defaultChecked={defaultMode === "academic"} />

        <div className="ask-box">
          <textarea className="ask-input" placeholder="Ask anything — markets, companies, filings, the world…"></textarea>

          <div className="ask-controls">
            <div className="ask-left">
              <button className="round-btn" title="Attach files">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>

              {/* Mode dropdown */}
              <div className="model-dd">
                <input type="checkbox" id="mode-toggle" className="dd-toggle" />
                <label htmlFor="mode-toggle" className="model-btn mode-btn">
                  <span className="mode-ico i-search">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
                  </span>
                  <span className="mode-ico i-research">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                  </span>
                  <span className="mode-ico i-finance">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                  </span>
                  <span className="mode-ico i-academic">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 4 2 10l10 6 10-6z" /><path d="M6 12v5.2c0 .9 2.7 2.8 6 2.8s6-1.9 6-2.8V12" /><path d="M22 10v6" /></svg>
                  </span>
                  <span className="mode-current"></span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </label>
                <label htmlFor="mode-toggle" className="dd-overlay"></label>
                <div className="dd-menu drop-down left mode-menu">
                  <label htmlFor="mode-search" className="dd-item">
                    <span className="dd-left">
                      <span className="dd-ico">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
                      </span>
                      <span className="dd-text">Search<small>Fast web answers</small></span>
                    </span>
                  </label>
                  <label htmlFor="mode-research" className="dd-item">
                    <span className="dd-left">
                      <span className="dd-ico">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                      </span>
                      <span className="dd-text">Research<small>Deep analysis</small></span>
                    </span>
                  </label>
                  <label htmlFor="mode-finance" className="dd-item">
                    <span className="dd-left">
                      <span className="dd-ico">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                      </span>
                      <span className="dd-text">Finance<small>Markets &amp; filings</small></span>
                    </span>
                  </label>
                  <label htmlFor="mode-academic" className="dd-item">
                    <span className="dd-left">
                      <span className="dd-ico">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 4 2 10l10 6 10-6z" /><path d="M6 12v5.2c0 .9 2.7 2.8 6 2.8s6-1.9 6-2.8V12" /><path d="M22 10v6" /></svg>
                      </span>
                      <span className="dd-text">Academics<small>Papers &amp; citations</small></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="ask-right">
              {/* Model dropdown */}
              <div className="model-dd">
                <input type="checkbox" id="model-toggle" className="dd-toggle" />
                <label htmlFor="model-toggle" className="model-btn">
                  <span className="model-current"></span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </label>
                <label htmlFor="model-toggle" className="dd-overlay"></label>
                <div className="dd-menu drop-down">
                  <div className="dd-head">Model</div>
                  <label htmlFor="m1" className="dd-item">
                    <span className="dd-left"><img className="model-logo" src="/assets/logo.png" alt="" />Chartum One</span>
                    <span className="dd-badge">Default</span>
                  </label>
                  <label htmlFor="m2" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-openai"></span>GPT-5.6 Terra</span>
                  </label>
                  <label htmlFor="m3" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-openai"></span>GPT-5.6 Sol</span>
                    <span className="dd-badge">Max</span>
                  </label>
                  <label htmlFor="m4" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-gemini"></span>Gemini 3.8 Flash</span>
                  </label>
                  <label htmlFor="m5" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-claude"></span>Claude Sonnet 5</span>
                  </label>
                  <label htmlFor="m6" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-claude"></span>Claude Opus 5</span>
                    <span className="dd-badge">Max</span>
                  </label>
                  <label htmlFor="m7" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-kimi"></span>Kimi K3</span>
                  </label>
                  <label htmlFor="m8" className="dd-item">
                    <span className="dd-left"><span className="model-dot d-grok"></span>Grok 4.6</span>
                  </label>
                </div>
              </div>

              <button className="round-btn" title="Dictate">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
              </button>
              <button className="send-btn" title="Send">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
