import BrandLogo from "../../../components/BrandLogo/BrandLogo"

const STOCKS = [
  ["nvda", "NVDA", "Nvidia"],
  ["aapl", "AAPL", "Apple"],
  ["msft", "MSFT", "Microsoft"],
  ["amzn", "AMZN", "Amazon"],
  ["googl", "GOOGL", "Alphabet"],
  ["meta", "META", "Meta"],
  ["avgo", "AVGO", "Broadcom"],
  ["tsm", "TSM", "TSMC"],
] as const

const METRICS = [
  ["rev", "Revenue"],
  ["eps", "EPS"],
  ["fcf", "Free cash flow"],
  ["gm", "Gross margin"],
  ["oi", "Operating income"],
] as const

function ChartingSection() {
  return (
    <div className="cb-page">
      <input type="checkbox" id="cb-desc" className="cb-radio" />
      <input type="checkbox" id="cb-presets" className="cb-radio" />
      <input type="checkbox" id="cb-saved" className="cb-radio" />
      <input type="checkbox" id="cb-pick-stk" className="cb-radio" />
      <input type="checkbox" id="cb-pick-met" className="cb-radio" />
      <input type="checkbox" id="cb-full" className="cb-radio" />

      {STOCKS.map(([id]) => (
        <input key={id} type="checkbox" id={`cb-stk-${id}`} className="cb-radio cb-stk-cb" />
      ))}

      <input type="radio" name="cb-met" id="cb-met-none" className="cb-radio cb-met-radio" defaultChecked />
      {METRICS.map(([id]) => (
        <input key={id} type="radio" name="cb-met" id={`cb-met-${id}`} className="cb-radio cb-met-radio" />
      ))}

      <input type="radio" name="cb-per" id="cb-per-ann" className="cb-radio" defaultChecked />
      <input type="radio" name="cb-per" id="cb-per-q" className="cb-radio" />
      <input type="radio" name="cb-per" id="cb-per-ttm" className="cb-radio" />

      <input type="radio" name="cb-rng" id="cb-rng-1y" className="cb-radio" />
      <input type="radio" name="cb-rng" id="cb-rng-3y" className="cb-radio" />
      <input type="radio" name="cb-rng" id="cb-rng-5y" className="cb-radio" defaultChecked />
      <input type="radio" name="cb-rng" id="cb-rng-10y" className="cb-radio" />
      <input type="radio" name="cb-rng" id="cb-rng-max" className="cb-radio" />

      <input type="radio" name="cb-scale" id="cb-scale-none" className="cb-radio" defaultChecked />
      <input type="radio" name="cb-scale" id="cb-scale-idx" className="cb-radio" />
      <input type="radio" name="cb-scale" id="cb-scale-pct" className="cb-radio" />
      <input type="radio" name="cb-scale" id="cb-scale-log" className="cb-radio" />

      <div className="cb-inner">
        <div className="cb-head">
          <div className="cb-head-left">
            <input className="cb-title" defaultValue="Untitled Chart" />
            <label className="cb-desc-btn" htmlFor="cb-desc">+ Add description</label>
            <input className="cb-desc-input" type="text" placeholder="What does this chart show?" />
          </div>
          <div className="cb-actions">
            <div className="cb-dd">
              <label className="cb-btn" htmlFor="cb-presets">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 14.4 8.6 20.5 9.3 16 13.4 17.3 19.5 12 16.6 6.7 19.5 8 13.4 3.5 9.3 9.6 8.6 12 3z" /></svg>
                Presets
              </label>
              <label className="cb-scrim" htmlFor="cb-presets" />
              <div className="cb-menu">
                <label htmlFor="cb-met-rev">Revenue growth</label>
                <label htmlFor="cb-met-fcf">Free cash flow</label>
                <label htmlFor="cb-met-eps">EPS vs peers</label>
              </div>
            </div>
            <div className="cb-dd">
              <label className="cb-btn" htmlFor="cb-saved">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h6l2 2h10v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" /></svg>
                My Charts
              </label>
              <label className="cb-scrim" htmlFor="cb-saved" />
              <div className="cb-menu">
                <span className="cb-menu-empty">No saved charts yet</span>
              </div>
            </div>
            <button className="cb-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v16l-5-2.4L7 20V4z" /></svg>
              Save
            </button>
            <label className="icon-btn" htmlFor="cb-desc" title="Rename">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4l10-10-4-4L4 16v4z" /></svg>
            </label>
          </div>
        </div>

        <div className="cb-picks">
          {STOCKS.map(([id, ticker, name]) => (
            <span className={`cb-chip cb-chip-stk cb-chip-${id}`} key={id}>
              <BrandLogo ticker={ticker} />
              {name}
              <label htmlFor={`cb-stk-${id}`} title={`Remove ${ticker}`}>×</label>
            </span>
          ))}
          {METRICS.map(([id, label]) => (
            <span className={`cb-chip cb-chip-met cb-chip-${id}`} key={id}>
              {label}
              <label htmlFor="cb-met-none" title="Remove metric">×</label>
            </span>
          ))}

          <div className="cb-picker">
            <label className="cb-add" htmlFor="cb-pick-stk">+ Stock</label>
            <label className="cb-scrim" htmlFor="cb-pick-stk" />
            <div className="cb-panel">
              <div className="cb-panel-search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
                <span>Search stocks</span>
              </div>
              {STOCKS.map(([id, ticker, name]) => (
                <label className="cb-item" htmlFor={`cb-stk-${id}`} key={id}>
                  <BrandLogo ticker={ticker} />
                  {name}
                  <span>{ticker}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="cb-picker">
            <label className="cb-add" htmlFor="cb-pick-met">+ Metric</label>
            <label className="cb-scrim" htmlFor="cb-pick-met" />
            <div className="cb-panel">
              <div className="cb-panel-search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
                <span>Search metrics</span>
              </div>
              {METRICS.map(([id, label]) => (
                <label className="cb-item" htmlFor={`cb-met-${id}`} key={id}>
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="cb-toolbar">
          <div className="cb-seg">
            <label htmlFor="cb-per-ann">Annual</label>
            <label htmlFor="cb-per-q">Quarterly</label>
            <label htmlFor="cb-per-ttm">Quarterly TTM</label>
          </div>
          <div className="cb-seg">
            <label htmlFor="cb-rng-1y">1Y</label>
            <label htmlFor="cb-rng-3y">3Y</label>
            <label htmlFor="cb-rng-5y">5Y</label>
            <label htmlFor="cb-rng-10y">10Y</label>
            <label htmlFor="cb-rng-max">MAX</label>
          </div>
          <button className="cb-btn" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
            <span>2021 – 2026</span>
          </button>
          <div className="cb-seg">
            <label htmlFor="cb-scale-idx">Index to Zero</label>
            <label htmlFor="cb-scale-pct">% Change</label>
            <label htmlFor="cb-scale-log">Log</label>
          </div>
          <div className="cb-tools">
            <label className="icon-btn" htmlFor="cb-full" title="Fullscreen">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
            </label>
            <button className="cb-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16" /></svg>
              Download
            </button>
          </div>
        </div>

        <div className="cb-canvas">
          <div className="cb-empty">
            <svg className="cb-empty-icon" viewBox="0 0 48 48">
              <path d="M6 38V10M6 38h36" />
              <path d="M12 28l8-9 7 5 11-14" />
            </svg>
            <h3>Start Comparing</h3>
            <p>Add at least one company and one metric to begin comparing financial data</p>
          </div>

          <div className="cb-draw">
            <svg className="cb-svg" viewBox="0 0 800 320" preserveAspectRatio="none">
              <g className="cb-grid" stroke="currentColor">
                <line x1="48" y1="24" x2="48" y2="268" />
                <line x1="48" y1="268" x2="780" y2="268" />
                <line x1="48" y1="80" x2="780" y2="80" />
                <line x1="48" y1="142" x2="780" y2="142" />
                <line x1="48" y1="204" x2="780" y2="204" />
              </g>
              <path className="cb-line cb-line-nvda" d="M48,232 C160,210 240,188 320,150 C420,104 540,92 660,58 C720,46 760,40 780,36" />
              <path className="cb-line cb-line-aapl" d="M48,248 C150,236 250,220 360,198 C480,172 600,160 700,148 C740,142 770,138 780,136" />
              <path className="cb-line cb-line-msft" d="M48,240 C140,228 260,206 380,176 C500,148 620,128 720,118 C750,114 770,112 780,110" />
              <path className="cb-line cb-line-amzn" d="M48,252 C170,244 280,226 400,200 C530,168 640,154 780,128" />
              <path className="cb-line cb-line-googl" d="M48,246 C180,230 300,214 440,186 C580,158 690,150 780,142" />
              <path className="cb-line cb-line-meta" d="M48,238 C160,226 300,190 420,160 C560,124 680,118 780,96" />
              <path className="cb-line cb-line-avgo" d="M48,250 C150,232 280,196 420,140 C560,88 680,70 780,52" />
              <path className="cb-line cb-line-tsm" d="M48,244 C170,228 300,204 450,176 C600,148 700,132 780,120" />
            </svg>
            <div className="cb-legend">
              {STOCKS.map(([id, ticker, name]) => (
                <span className={`cb-leg cb-leg-${id}`} key={id}>
                  <i />
                  <BrandLogo ticker={ticker} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartingSection
