import profil from "../../assets/profil.png"
import "./Settings.css"

function SettingsModal() {
  return (
    <div className="set-modal" role="dialog" aria-labelledby="set-dialog-title">
      <input type="radio" name="set-tab" id="set-tab-general" className="set-cb" defaultChecked />
      <input type="radio" name="set-tab" id="set-tab-account" className="set-cb" />
      <input type="radio" name="set-tab" id="set-tab-notifications" className="set-cb" />
      <input type="radio" name="set-tab" id="set-tab-memory" className="set-cb" />
      <input type="radio" name="set-tab" id="set-tab-privacy" className="set-cb" />
      <input type="checkbox" id="set-notif-email" className="set-cb" defaultChecked />
      <input type="checkbox" id="set-notif-product" className="set-cb" defaultChecked />
      <input type="checkbox" id="set-notif-earnings" className="set-cb" />
      <input type="checkbox" id="set-memories" className="set-cb" defaultChecked />
      <input type="checkbox" id="set-mem-ref" className="set-cb" defaultChecked />
      <input type="checkbox" id="set-training" className="set-cb" />
      <input type="radio" name="set-mode" id="set-mode-search" className="set-cb" defaultChecked />
      <input type="radio" name="set-mode" id="set-mode-research" className="set-cb" />
      <input type="radio" name="set-mode" id="set-mode-finance" className="set-cb" />
      <input type="radio" name="set-mode" id="set-mode-academic" className="set-cb" />

      <aside className="set-nav">
        <div className="set-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.2" y2="16.2" />
          </svg>
          <input type="search" placeholder="Search" />
        </div>

        <div className="set-nav-label">Settings</div>
        <label htmlFor="set-tab-general">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          General
        </label>
        <label htmlFor="set-tab-account">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="8" r="4" />
          </svg>
          Account
        </label>
        <label htmlFor="set-tab-notifications">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
          Notifications
        </label>
        <label htmlFor="set-tab-memory">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 3A4.5 4.5 0 0 0 6 11.2V17a2 2 0 0 0 2 2h.5" />
            <path d="M14.5 3A4.5 4.5 0 0 1 18 11.2V17a2 2 0 0 1-2 2h-.5" />
            <path d="M8.5 19a3.5 3.5 0 0 0 7 0" />
            <path d="M12 8v4" />
          </svg>
          Memory
        </label>
        <label htmlFor="set-tab-privacy">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Privacy
        </label>
      </aside>

      <div className="set-pane">
        <div className="set-pane-head">
          <h2 id="set-dialog-title" className="set-pane-title"></h2>
          <label className="set-close" htmlFor="ui-idle" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </label>
        </div>

        <div className="set-pane-body">
          <section className="set-panel set-panel-general">
            <div className="set-block">
              <h3>Profile</h3>
              <div className="set-card">
                <div className="set-field">
                  <span>Avatar</span>
                  <img className="set-avatar" src={profil} alt="Leitan Bogdan" />
                </div>
                <label className="set-field">
                  <span>Full name</span>
                  <input type="text" defaultValue="Leitan Bogdan" />
                </label>
                <label className="set-field">
                  <span>What should Chartum call you?</span>
                  <input type="text" defaultValue="Leitan Bogdan" />
                </label>
                <label className="set-field">
                  <span>What best describes your work?</span>
                  <input type="text" defaultValue="Markets & research" />
                </label>
              </div>
            </div>

            <div className="set-block">
              <h3>Instructions for Chartum</h3>
              <div className="set-card">
                <label className="set-field set-field-col">
                  <span>Chartum will keep these in mind for this and associated accounts.</span>
                  <textarea rows={3} placeholder="e.g. keep explanations brief and to the point"></textarea>
                </label>
              </div>
            </div>

            <div className="set-block">
              <h3>Preferences</h3>
              <div className="set-card">
                <div className="set-row">
                  <div className="set-copy">
                    <strong>Appearance</strong>
                    <span className="set-theme-name"></span>
                  </div>
                  <div className="set-pills set-theme-pills">
                    <label htmlFor="theme-dark">Dark</label>
                    <label htmlFor="theme-light">Light</label>
                    <label htmlFor="theme-system">System</label>
                  </div>
                </div>
                <div className="set-row set-row-stack">
                  <div className="set-copy">
                    <strong>Default mode</strong>
                    <span>Used when you start a new thread.</span>
                  </div>
                  <div className="set-pills">
                    <label htmlFor="set-mode-search">Search</label>
                    <label htmlFor="set-mode-research">Research</label>
                    <label htmlFor="set-mode-finance">Finance</label>
                    <label htmlFor="set-mode-academic">Academics</label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="set-panel set-panel-account">
            <div className="set-block">
              <h3>Account</h3>
              <div className="set-card">
                <div className="set-profile">
                  <img className="set-avatar" src={profil} alt="Leitan Bogdan" />
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
            </div>
          </section>

          <section className="set-panel set-panel-notifications">
            <div className="set-block">
              <h3>Notifications</h3>
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
            </div>
          </section>

          <section className="set-panel set-panel-memory">
            <div className="set-block">
              <h3>Memory</h3>
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
                    <strong>Reference saved memories</strong>
                    <span>Use what Chartum already knows about you in new chats.</span>
                  </div>
                  <label className="set-switch" htmlFor="set-mem-ref"><span className="set-knob"></span></label>
                </div>
              </div>
            </div>

            <div className="set-block set-mem-list">
              <h3>Saved memories</h3>
              <div className="set-card">
                <div className="set-mem-item">
                  <p>Prefers concise answers with sources, not long intros.</p>
                  <span>Updated 2d ago</span>
                </div>
                <div className="set-mem-item">
                  <p>Follows NVDA, AAPL, and crude oil in the Finance watchlist.</p>
                  <span>Updated 5d ago</span>
                </div>
                <div className="set-mem-item">
                  <p>Works in markets and research; default mode should stay on Finance.</p>
                  <span>Updated 1w ago</span>
                </div>
                <div className="set-row">
                  <div className="set-copy">
                    <strong>Clear memories</strong>
                    <span>Remove everything Chartum has saved about you.</span>
                  </div>
                  <button className="set-btn ghost" type="button">Clear all</button>
                </div>
              </div>
            </div>
          </section>

          <section className="set-panel set-panel-privacy">
            <div className="set-block">
              <h3>Privacy</h3>
              <div className="set-card">
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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
