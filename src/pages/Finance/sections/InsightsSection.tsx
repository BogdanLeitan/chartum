import BrandLogo from "../../../components/BrandLogo/BrandLogo"

const STOCKS = [
  ["NVDA", "Nvidia Corp", "$5.58t", "spx trend growth ai"],
  ["AAPL", "Apple Inc", "$4.70t", "spx trend buyback"],
  ["MSFT", "Microsoft Corp", "$3.71t", "spx trend growth ai cloud"],
  ["AMZN", "Amazon.com Inc", "$2.18t", "spx trend growth cloud"],
  ["GOOGL", "Alphabet Inc A", "$2.41t", "spx trend ai cloud"],
  ["AVGO", "Broadcom Inc", "$1.64t", "spx trend ai"],
  ["GOOG", "Alphabet Inc C", "$2.40t", "spx ai cloud"],
  ["META", "Meta Platforms", "$1.82t", "spx trend growth ai leisure"],
  ["MU", "Micron Technology", "$142.8b", "spx trend ai"],
  ["TSLA", "Tesla Inc", "$1.40t", "spx trend growth ev"],
  ["JPM", "JPMorgan Chase", "$812.4b", "spx fintech"],
  ["BRK-B", "Berkshire Hathaway", "$1.05t", "spx"],
  ["LLY", "Eli Lilly", "$894.2b", "spx growth health"],
  ["AMD", "Advanced Micro Devices", "$778.7b", "spx trend ai"],
  ["JNJ", "Johnson & Johnson", "$395.1b", "spx div health"],
  ["XOM", "Exxon Mobil", "$512.6b", "spx div"],
  ["V", "Visa Inc", "$642.8b", "spx fintech buyback"],
  ["INTC", "Intel Corp", "$96.1b", "spx"],
  ["WMT", "Walmart Inc", "$748.3b", "spx div"],
  ["MA", "Mastercard Inc", "$468.9b", "spx fintech buyback"],
  ["ABBV", "AbbVie Inc", "$332.4b", "spx div health"],
  ["CSCO", "Cisco Systems", "$268.1b", "spx div cloud"],
  ["BAC", "Bank of America", "$348.7b", "spx fintech"],
  ["COST", "Costco Wholesale", "$412.5b", "spx growth"],
  ["PLTR", "Palantir Technologies", "$398.2b", "spx trend ai"],
] as const

function InsightsSection() {
  return (
    <div className="insights-wrap co-page">
      <div className="insights-hero">
        <h1 className="co-title">Insights</h1>
        <form className="co-search ph-search" action="/answer" method="get">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
          <input type="search" name="q" placeholder="Search stocks..." autoComplete="off" />
          <button className="co-search-filt" type="button" title="Filters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="21" y1="4" x2="14" y2="4" /><line x1="10" y1="4" x2="3" y2="4" /><line x1="21" y1="12" x2="12" y2="12" /><line x1="8" y1="12" x2="3" y2="12" /><line x1="21" y1="20" x2="16" y2="20" /><line x1="12" y1="20" x2="3" y2="20" /><line x1="14" y1="2" x2="14" y2="6" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="16" y1="18" x2="16" y2="22" /></svg>
          </button>
        </form>
      </div>

      <input className="tab-radio" type="radio" name="ss-cat" id="ss-spx" defaultChecked />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-trend" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-growth" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-div" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-buyback" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-ai" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-cloud" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-ev" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-leisure" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-fintech" />
      <input className="tab-radio" type="radio" name="ss-cat" id="ss-health" />
      <input className="tab-radio" type="checkbox" id="co-more" />

      <div className="ins-tabs">
        <div className="tabs-list">
          <label className="tab-label" htmlFor="ss-spx">S&amp;P 500</label>
          <label className="tab-label" htmlFor="ss-trend">Most Trending</label>
          <label className="tab-label" htmlFor="ss-growth">Growth</label>
          <label className="tab-label" htmlFor="ss-div">Dividend Growth</label>
          <label className="tab-label" htmlFor="ss-buyback">Buyback Machines</label>
          <label className="tab-label" htmlFor="ss-ai">Artificial Intelligence</label>
          <label className="tab-label" htmlFor="ss-cloud">Cloud</label>
          <label className="tab-label" htmlFor="ss-ev">Electric Vehicles</label>
          <label className="tab-label" htmlFor="ss-leisure">Leisure and Entertainment</label>
          <label className="tab-label" htmlFor="ss-fintech">Fintech</label>
          <label className="tab-label" htmlFor="ss-health">Digital Healthcare</label>
          <span className="co-more">
            <label className="tab-label more" htmlFor="co-more">More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </label>
            <div className="co-more-dd">
              <label className="tab-label" htmlFor="ss-buyback">Buyback Machines</label>
              <label className="tab-label" htmlFor="ss-health">Digital Healthcare</label>
              <label className="tab-label" htmlFor="ss-leisure">Leisure</label>
            </div>
          </span>
        </div>
        <button className="co-expand" type="button" title="Expand">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
        </button>
      </div>

      <div className="stock-grid show co-grid">
        {STOCKS.map(([ticker, name, mcap, cat]) => (
          <a className="stock-card" href={`/finance/${ticker}`} key={ticker} data-stock={`${ticker} ${name}`.toLowerCase()} data-cat={cat}>
            <BrandLogo ticker={ticker} />
            <div className="stock-info">
              <span className="ticker">{ticker}</span>
              <span className="company">{name}</span>
            </div>
            <span className="mcap">{mcap}</span>
          </a>
        ))}
        <p className="ss-empty">No matching stocks.</p>
      </div>
    </div>
  )
}

export default InsightsSection
