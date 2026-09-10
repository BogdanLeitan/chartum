import InsightsHeader from "../../components/Header/InsightsHeader/InsightsHeader";
import "./Insights.css"

function Insights() {
  return (
    <>
      <InsightsHeader />
      <div className="content">
            <div className="insights-wrap co-page">
              <h1 className="co-title">Insights</h1>
              <form className="co-search ph-search" action="/stock" method="get">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                <input type="search" name="q" placeholder="Search stocks…" autoComplete="off" />
                <button className="co-search-filt" type="button" title="Filters">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/></svg>
                </button>
              </form>

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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </label>
                    <div className="co-more-dd">
                      <label className="tab-label" htmlFor="ss-buyback">Buyback Machines</label>
                      <label className="tab-label" htmlFor="ss-health">Digital Healthcare</label>
                      <label className="tab-label" htmlFor="ss-leisure">Leisure</label>
                    </div>
                  </span>
                </div>
                <button className="co-expand" type="button" title="Expand">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                </button>
              </div>

              <div className="stock-grid show co-grid">
                <a className="stock-card" href="/stock" data-stock="nvda nvidia corp" data-cat="spx trend growth ai"><span className="logo-ini">NV</span><div className="stock-info"><span className="ticker">NVDA</span><span className="company">Nvidia Corp</span><span className="mcap">Market Cap: $5.58t</span></div><div className="stock-quote"><span className="stock-px">$224.25</span><span className="chg down">−0.66%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="aapl apple inc" data-cat="spx trend buyback"><span className="logo-ini">AA</span><div className="stock-info"><span className="ticker">AAPL</span><span className="company">Apple Inc</span><span className="mcap">Market Cap: $4.70t</span></div><div className="stock-quote"><span className="stock-px">$247.81</span><span className="chg up">+0.42%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="msft microsoft corp" data-cat="spx trend growth ai cloud"><span className="logo-ini">MS</span><div className="stock-info"><span className="ticker">MSFT</span><span className="company">Microsoft Corp</span><span className="mcap">Market Cap: $3.71t</span></div><div className="stock-quote"><span className="stock-px">$428.90</span><span className="chg up">+0.18%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amzn amazon" data-cat="spx trend growth cloud"><span className="logo-ini">AZ</span><div className="stock-info"><span className="ticker">AMZN</span><span className="company">Amazon.com Inc</span><span className="mcap">Market Cap: $2.18t</span></div><div className="stock-quote"><span className="stock-px">$231.40</span><span className="chg up">+1.12%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="googl alphabet google" data-cat="spx trend ai cloud"><span className="logo-ini">GO</span><div className="stock-info"><span className="ticker">GOOGL</span><span className="company">Alphabet Inc A</span><span className="mcap">Market Cap: $2.41t</span></div><div className="stock-quote"><span className="stock-px">$178.22</span><span className="chg up">+0.87%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="avgo broadcom" data-cat="spx trend ai"><span className="logo-ini">AV</span><div className="stock-info"><span className="ticker">AVGO</span><span className="company">Broadcom Inc</span><span className="mcap">Market Cap: $1.64t</span></div><div className="stock-quote"><span className="stock-px">$342.10</span><span className="chg up">+1.54%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="goog alphabet" data-cat="spx ai cloud"><span className="logo-ini">GO</span><div className="stock-info"><span className="ticker">GOOG</span><span className="company">Alphabet Inc C</span><span className="mcap">Market Cap: $2.40t</span></div><div className="stock-quote"><span className="stock-px">$179.05</span><span className="chg up">+0.81%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="meta facebook" data-cat="spx trend growth ai leisure"><span className="logo-ini">ME</span><div className="stock-info"><span className="ticker">META</span><span className="company">Meta Platforms</span><span className="mcap">Market Cap: $1.82t</span></div><div className="stock-quote"><span className="stock-px">$651.14</span><span className="chg up">+6.14%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="mu micron" data-cat="spx trend ai"><span className="logo-ini">MU</span><div className="stock-info"><span className="ticker">MU</span><span className="company">Micron Technology</span><span className="mcap">Market Cap: $142.8b</span></div><div className="stock-quote"><span className="stock-px">$131.40</span><span className="chg down">−1.22%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="tsla tesla" data-cat="spx trend growth ev"><span className="logo-ini">TS</span><div className="stock-info"><span className="ticker">TSLA</span><span className="company">Tesla Inc</span><span className="mcap">Market Cap: $1.40t</span></div><div className="stock-quote"><span className="stock-px">$248.50</span><span className="chg up">+2.31%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="jpm jpmorgan" data-cat="spx fintech"><span className="logo-ini">JP</span><div className="stock-info"><span className="ticker">JPM</span><span className="company">JPMorgan Chase</span><span className="mcap">Market Cap: $812.4b</span></div><div className="stock-quote"><span className="stock-px">$278.15</span><span className="chg up">+0.55%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="brk berkshire" data-cat="spx"><span className="logo-ini">BR</span><div className="stock-info"><span className="ticker">BRK-B</span><span className="company">Berkshire Hathaway</span><span className="mcap">Market Cap: $1.05t</span></div><div className="stock-quote"><span className="stock-px">$492.80</span><span className="chg down">−0.14%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="lly eli lilly" data-cat="spx growth health"><span className="logo-ini">LL</span><div className="stock-info"><span className="ticker">LLY</span><span className="company">Eli Lilly</span><span className="mcap">Market Cap: $894.2b</span></div><div className="stock-quote"><span className="stock-px">$912.40</span><span className="chg up">+0.33%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amd advanced micro" data-cat="spx trend ai"><span className="logo-ini">AM</span><div className="stock-info"><span className="ticker">AMD</span><span className="company">Advanced Micro Devices</span><span className="mcap">Market Cap: $778.7b</span></div><div className="stock-quote"><span className="stock-px">$178.90</span><span className="chg up">+4.05%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="jnj johnson" data-cat="spx div health"><span className="logo-ini">JN</span><div className="stock-info"><span className="ticker">JNJ</span><span className="company">Johnson &amp; Johnson</span><span className="mcap">Market Cap: $395.1b</span></div><div className="stock-quote"><span className="stock-px">$164.20</span><span className="chg up">+0.12%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="xom exxon" data-cat="spx div"><span className="logo-ini">XO</span><div className="stock-info"><span className="ticker">XOM</span><span className="company">Exxon Mobil</span><span className="mcap">Market Cap: $512.6b</span></div><div className="stock-quote"><span className="stock-px">$118.75</span><span className="chg down">−0.48%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="v visa" data-cat="spx fintech buyback"><span className="logo-ini">V</span><div className="stock-info"><span className="ticker">V</span><span className="company">Visa Inc</span><span className="mcap">Market Cap: $642.8b</span></div><div className="stock-quote"><span className="stock-px">$348.22</span><span className="chg up">+0.64%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="intc intel" data-cat="spx"><span className="logo-ini">IN</span><div className="stock-info"><span className="ticker">INTC</span><span className="company">Intel Corp</span><span className="mcap">Market Cap: $96.1b</span></div><div className="stock-quote"><span className="stock-px">$22.84</span><span className="chg down">−1.90%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="wmt walmart" data-cat="spx div"><span className="logo-ini">WM</span><div className="stock-info"><span className="ticker">WMT</span><span className="company">Walmart Inc</span><span className="mcap">Market Cap: $748.3b</span></div><div className="stock-quote"><span className="stock-px">$96.40</span><span className="chg up">+0.21%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="ma mastercard" data-cat="spx fintech buyback"><span className="logo-ini">MA</span><div className="stock-info"><span className="ticker">MA</span><span className="company">Mastercard Inc</span><span className="mcap">Market Cap: $468.9b</span></div><div className="stock-quote"><span className="stock-px">$512.30</span><span className="chg up">+0.71%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="abbv abbvie" data-cat="spx div health"><span className="logo-ini">AB</span><div className="stock-info"><span className="ticker">ABBV</span><span className="company">AbbVie Inc</span><span className="mcap">Market Cap: $332.4b</span></div><div className="stock-quote"><span className="stock-px">$188.55</span><span className="chg up">+0.08%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="csco cisco" data-cat="spx div cloud"><span className="logo-ini">CS</span><div className="stock-info"><span className="ticker">CSCO</span><span className="company">Cisco Systems</span><span className="mcap">Market Cap: $268.1b</span></div><div className="stock-quote"><span className="stock-px">$67.90</span><span className="chg down">−0.22%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="bac bank of america" data-cat="spx fintech"><span className="logo-ini">BA</span><div className="stock-info"><span className="ticker">BAC</span><span className="company">Bank of America</span><span className="mcap">Market Cap: $348.7b</span></div><div className="stock-quote"><span className="stock-px">$44.12</span><span className="chg up">+0.39%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="cost costco" data-cat="spx growth"><span className="logo-ini">CO</span><div className="stock-info"><span className="ticker">COST</span><span className="company">Costco Wholesale</span><span className="mcap">Market Cap: $412.5b</span></div><div className="stock-quote"><span className="stock-px">$932.10</span><span className="chg up">+0.27%</span></div></a>
                <a className="stock-card" href="/stock" data-stock="pltr palantir" data-cat="spx trend ai"><span className="logo-ini">PL</span><div className="stock-info"><span className="ticker">PLTR</span><span className="company">Palantir Technologies</span><span className="mcap">Market Cap: $398.2b</span></div><div className="stock-quote"><span className="stock-px">$178.40</span><span className="chg up">+3.88%</span></div></a>
                <p className="ss-empty">No matching stocks.</p>
              </div>
            </div>
          </div>
    </>
  );
}

export default Insights;

export function Search() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/insights">Companies</a>
              <a className="ph-link" href="/insights/watchlist">Watchlist</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ip-wrap">
              <div className="page-title-row">
                <div className="ss-heading">
                  <h1 className="page-title">Search</h1>
                  <span className="ip-sub" id="stock-count">15 stocks</span>
                </div>
                <label className="ph-search ss-field">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                  <input id="stock-q" type="search" placeholder="Ticker or company" autoComplete="off" autoFocus />
                </label>
              </div>

              <input className="tab-radio" type="radio" name="ss-cat" id="ss-all" defaultChecked />
              <input className="tab-radio" type="radio" name="ss-cat" id="ss-mag7" />
              <input className="tab-radio" type="radio" name="ss-cat" id="ss-semi" />

              <div className="ins-tabs">
                <div className="tabs-list">
                  <label className="tab-label" htmlFor="ss-all">All</label>
                  <label className="tab-label" htmlFor="ss-mag7">Mega cap</label>
                  <label className="tab-label" htmlFor="ss-semi">Semis</label>
                </div>
              </div>

              <div className="stock-grid show">
                <a className="stock-card" href="/stock" data-stock="nvda nvidia corp" data-cat="semi mag7"><svg className="logo-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e7e7e"><path d="M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21z"/></svg><div className="stock-info"><span className="ticker">NVDA</span><span className="company">Nvidia Corp</span><span className="mcap">Market Cap: $5.58t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="aapl apple inc" data-cat="mag7"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2z"/></svg><div className="stock-info"><span className="ticker">AAPL</span><span className="company">Apple Inc</span><span className="mcap">Market Cap: $4.70t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="msft microsoft corp" data-cat="mag7"><svg className="logo-box" viewBox="0 0 256 256"><path fill="#7e7e7e" d="M121.666 121.666H0V0h121.666z"/><path fill="#7e7e7e" d="M256 121.666H134.335V0H256z"/><path fill="#7e7e7e" d="M121.663 256.002H0V134.336h121.663z"/><path fill="#7e7e7e" d="M256 256.002H134.335V134.336H256z"/></svg><div className="stock-info"><span className="ticker">MSFT</span><span className="company">Microsoft Corp</span><span className="mcap">Market Cap: $3.71t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="googl goog alphabet google" data-cat="mag7"><span className="logo-ini">GO</span><div className="stock-info"><span className="ticker">GOOGL</span><span className="company">Alphabet Inc A</span><span className="mcap">Market Cap: $2.41t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amzn amazon" data-cat="mag7"><span className="logo-ini">AZ</span><div className="stock-info"><span className="ticker">AMZN</span><span className="company">Amazon.com Inc</span><span className="mcap">Market Cap: $2.18t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="meta facebook" data-cat="mag7"><span className="logo-ini">ME</span><div className="stock-info"><span className="ticker">META</span><span className="company">Meta Platforms</span><span className="mcap">Market Cap: $1.82t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="tsla tesla inc" data-cat="mag7"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362z"/></svg><div className="stock-info"><span className="ticker">TSLA</span><span className="company">Tesla Inc</span><span className="mcap">Market Cap: $1.40t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="avgo broadcom" data-cat="semi"><span className="logo-ini">AV</span><div className="stock-info"><span className="ticker">AVGO</span><span className="company">Broadcom Inc</span><span className="mcap">Market Cap: $1.64t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amd advanced micro devices" data-cat="semi"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137z"/></svg><div className="stock-info"><span className="ticker">AMD</span><span className="company">Advanced Micro Devices</span><span className="mcap">Market Cap: $778.73b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="tsm tsmc taiwan semiconductor" data-cat="semi"><span className="logo-ini">TM</span><div className="stock-info"><span className="ticker">TSM</span><span className="company">Taiwan Semiconductor</span><span className="mcap">Market Cap: $1.12t</span></div></a>
                <a className="stock-card" href="/stock" data-stock="asml asml holding" data-cat="semi"><span className="logo-ini">AS</span><div className="stock-info"><span className="ticker">ASML</span><span className="company">ASML Holding</span><span className="mcap">Market Cap: $312.4b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="amat applied materials" data-cat="semi"><span className="logo-ini">AP</span><div className="stock-info"><span className="ticker">AMAT</span><span className="company">Applied Materials</span><span className="mcap">Market Cap: $148.2b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="intc intel" data-cat="semi"><span className="logo-ini">IN</span><div className="stock-info"><span className="ticker">INTC</span><span className="company">Intel Corp</span><span className="mcap">Market Cap: $96.1b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="mu micron" data-cat="semi"><span className="logo-ini">MU</span><div className="stock-info"><span className="ticker">MU</span><span className="company">Micron Technology</span><span className="mcap">Market Cap: $142.8b</span></div></a>
                <a className="stock-card" href="/stock" data-stock="pltr palantir" data-cat=""><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z"/></svg><div className="stock-info"><span className="ticker">PLTR</span><span className="company">Palantir Technologies Inc A</span><span className="mcap">Market Cap: $398.20b</span></div></a>
                <p className="ss-empty" id="stock-empty" hidden>No matching stocks.</p>
              </div>
            </div>
          </div>
    </>
  );
}

export function Watchlist() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link" href="/insights">Companies</a>
              <a className="ph-link active" href="/insights/watchlist">Watchlist</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="ip-wrap">
              <div className="page-title-row">
                <h1 className="page-title">Watchlist</h1>
                <div className="side">
                  <button className="ghost-btn">Import</button>
                  <button className="light-btn">+ Add ticker</button>
                </div>
              </div>
              <div className="stock-grid p1" style={{display: "grid"}}>
                <a className="stock-card" href="/stock"><svg className="logo-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e7e7e"><path d="M10.212 8.976V7.62c.127-.01.256-.017.388-.021 3.596-.117 5.957 3.184 5.957 3.184s-2.548 3.647-5.282 3.647a3.227 3.227 0 01-1.063-.175v-4.109c1.4.174 1.681.812 2.523 2.258l1.873-1.627a4.905 4.905 0 00-3.67-1.846 6.594 6.594 0 00-.729.044m0-4.476v2.025c.13-.01.259-.019.388-.024 5.002-.174 8.261 4.226 8.261 4.226s-3.743 4.69-7.643 4.69c-.338 0-.675-.031-1.007-.092v1.25c.278.038.558.057.838.057 3.629 0 6.253-1.91 8.794-4.169.421.347 2.146 1.193 2.501 1.564-2.416 2.083-8.048 3.763-11.24 3.763-.308 0-.603-.02-.894-.048V19.5H24v-15H10.21z"/></svg><div className="stock-info"><span className="ticker">NVDA</span><span className="company">Nvidia Corp</span><span className="mcap">Market Cap: $5.58t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2z"/></svg><div className="stock-info"><span className="ticker">AAPL</span><span className="company">Apple Inc</span><span className="mcap">Market Cap: $4.70t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" viewBox="0 0 256 256"><path fill="#7e7e7e" d="M121.666 121.666H0V0h121.666z"/><path fill="#7e7e7e" d="M256 121.666H134.335V0H256z"/><path fill="#7e7e7e" d="M121.663 256.002H0V134.336h121.663z"/><path fill="#7e7e7e" d="M256 256.002H134.335V134.336H256z"/></svg><div className="stock-info"><span className="ticker">MSFT</span><span className="company">Microsoft Corp</span><span className="mcap">Market Cap: $3.71t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137z"/></svg><div className="stock-info"><span className="ticker">AMD</span><span className="company">Advanced Micro Devices</span><span className="mcap">Market Cap: $778.73b</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362z"/></svg><div className="stock-info"><span className="ticker">TSLA</span><span className="company">Tesla Inc</span><span className="mcap">Market Cap: $1.40t</span></div></a>
                <a className="stock-card" href="/stock"><svg className="logo-box" fill="#7e7e7e" viewBox="0 0 24 24"><path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z"/></svg><div className="stock-info"><span className="ticker">PLTR</span><span className="company">Palantir Technologies Inc A</span><span className="mcap">Market Cap: $398.20b</span></div></a>
              </div>
              <div className="wl-add-row">+ Add a ticker to this list</div>
            </div>
          </div>
    </>
  );
}

export function Stock() {
  return (
    <>
      <header className="page-head">
            <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </label>
            <span className="ph-title">Insights</span>
            <nav className="ph-nav">
              <a className="ph-link active" href="/insights">Companies</a>
              <a className="ph-link" href="/insights/watchlist">Watchlist</a>
            </nav>
            <div className="ph-right">
              <button className="icon-btn" title="Notifications">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </button>
              <button className="icon-btn" title="Inbox">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </button>
            </div>
          </header>

          <div className="content">
            <div className="stock-wrap">

              <section className="co-id card">
                <form className="co-id-search" action="/insights" method="get">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>
                  <input type="search" name="q" placeholder="Search" defaultValue="NVDA" autoComplete="off" />
                  <button type="button" title="Filters">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
                  </button>
                </form>
                <span className="co-id-logo tile t-green">NV</span>
                <h1>Nvidia Corporation</h1>
                <p className="co-id-exch">NVDA | NASDAQ</p>
                <div className="co-id-px">
                  <span className="co-id-value">$228.75</span>
                  <span className="co-id-chg">$6.92 | +3.12%</span>
                </div>
                <p className="co-id-earn">Earnings: Aug 26, 2026</p>
              </section>

              <section className="co-brief card">
                <h2>Chartum Brief</h2>
                <p className="co-brief-sub">A summary of key recent developments</p>
                <input className="brief-more-cb" type="checkbox" id="brief-more" />
                <ul className="co-brief-list">
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">6 days ago</span></div>
                    <p>Nvidia said data-center revenue again set a record as Blackwell systems moved from allocation into broader production. Management pointed to multi-year visibility from cloud and sovereign AI buyers, with the next platform already in the pipeline.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">2 weeks ago</span></div>
                    <p>Gross margin held in the mid-70s as mix stayed concentrated in high-end AI GPUs. Networking and CUDA software continue to deepen switching costs around the installed base.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent neut">Neutral</span><span className="ago">3 weeks ago</span></div>
                    <p>Export-control updates around advanced accelerators remain a swing factor for China. Nvidia is routing demand into compliant SKUs, but the ceiling on that channel is still policy-dependent.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">1 month ago</span></div>
                    <p>Hyperscalers reiterated multi-year GPU buildouts in earnings calls, with custom silicon described as additive rather than a near-term substitute for Nvidia’s training clusters.</p>
                  </li>
                  <li>
                    <div className="brief-meta"><span className="sent bear">Bearish</span><span className="ago">1 month ago</span></div>
                    <p>Valuation remains stretched versus history after the run, so the setup is more sensitive to any pause in estimate revisions or a slower Blackwell ramp than the last two years implied.</p>
                  </li>
                </ul>
                <label className="brief-toggle show" htmlFor="brief-more">Show all 5</label>
                <label className="brief-toggle hide" htmlFor="brief-more">Show less</label>
              </section>

              <section className="fin-strip card">
                <div className="fin-col">
                  <h3>Valuation</h3>
                  <div className="fin-row"><span className="fin-k">Market Cap</span><span className="fin-v">$5.58t</span></div>
                  <div className="fin-row"><span className="fin-k">PE<span className="fin-sub">TTM | NTM | 2027</span></span><span className="fin-v">34.17 | 29.82 | 24.10</span></div>
                  <div className="fin-row"><span className="fin-k">Price to Sales</span><span className="fin-v">24.80</span></div>
                  <div className="fin-row"><span className="fin-k">EV to EBITDA</span><span className="fin-v">28.40</span></div>
                  <div className="fin-row"><span className="fin-k">Price to Book</span><span className="fin-v">48.60</span></div>
                </div>
                <div className="fin-col">
                  <h3>Cash Flow</h3>
                  <div className="fin-row"><span className="fin-k">Free Cash Flow Yield<span className="fin-sub">FCF Per Share / Price ($3.94 / $228.75)</span></span><span className="fin-v">1.72%</span></div>
                  <div className="fin-row"><span className="fin-k">SBC Adj. Free Cash Flow Yield<span className="fin-sub">Adj. FCF Per Share / Price ($3.23 / $228.75)</span></span><span className="fin-v">1.41%</span></div>
                  <div className="fin-row"><span className="fin-k">SBC Impact</span><span className="fin-v">−18.20%</span></div>
                </div>
                <div className="fin-col">
                  <h3>Margins &amp; Growth</h3>
                  <div className="fin-row"><span className="fin-k">Profit Margin</span><span className="fin-v">55.10%</span></div>
                  <div className="fin-row"><span className="fin-k">Operating Margin</span><span className="fin-v">61.20%</span></div>
                  <div className="fin-row"><span className="fin-k">Quarterly Earnings (YoY)</span><span className="fin-v">54.20%</span></div>
                  <div className="fin-row"><span className="fin-k">Quarterly Revenue (YoY)</span><span className="fin-v">55.60%</span></div>
                </div>
                <div className="fin-col">
                  <h3>Balance</h3>
                  <div className="fin-row"><span className="fin-k">Cash</span><span className="fin-v">$53.70b</span></div>
                  <div className="fin-row"><span className="fin-k">Debt</span><span className="fin-v">$10.20b</span></div>
                  <div className="fin-row"><span className="fin-k">Net</span><span className="fin-v">$43.50b</span></div>
                </div>
                <div className="fin-col">
                  <h3>Dividend</h3>
                  <div className="fin-row"><span className="fin-k">Dividend Yield</span><span className="fin-v">0.02%</span></div>
                  <div className="fin-row"><span className="fin-k">Payout Ratio</span><span className="fin-v">1.10%</span></div>
                  <div className="fin-row"><span className="fin-k">Payout Date</span><span className="fin-v">Sep 26, 2026</span></div>
                </div>
              </section>

              <div className="metrics-block">
                <svg className="chart-defs" width="0" height="0" aria-hidden="true">
                  <defs>
                    <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#55c586" stopOpacity=".28"/>
                      <stop offset="1" stopColor="#55c586" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <input className="per-radio" type="radio" name="period" id="per-q" defaultChecked />
                <input className="per-radio" type="radio" name="period" id="per-ttm" />
                <input className="per-radio" type="radio" name="period" id="per-ann" />
                <div className="per-tabs">
                  <label htmlFor="per-q">Quarterly</label>
                  <label htmlFor="per-ttm">Quarterly (TTM)</label>
                  <label htmlFor="per-ann">Annually</label>
                </div>
                <div className="mgrid">
                  <div className="mcard m-price"><div className="mcard-head"><span>Price</span><span className="chg up">↑ +0.10%</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,58 C25,56 50,62 70,48 C95,32 120,38 145,26 C170,18 185,16 200,12 L200,80 L0,80 Z"/><path className="line" d="M0,58 C25,56 50,62 70,48 C95,32 120,38 145,26 C170,18 185,16 200,12"/></svg></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,64 C30,58 60,66 90,42 C120,26 155,30 200,14 L200,80 L0,80 Z"/><path className="line" d="M0,64 C30,58 60,66 90,42 C120,26 155,30 200,14"/></svg></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$240</span><span>$180</span><span>$120</span><span>$60</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><svg className="mline" viewBox="0 0 200 80" preserveAspectRatio="none"><path className="area" d="M0,72 C40,68 80,52 120,34 C155,20 180,16 200,10 L200,80 L0,80 Z"/><path className="line" d="M0,72 C40,68 80,52 120,34 C155,20 180,16 200,10"/></svg></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-rev"><div className="mcard-head"><span>Revenue</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}}></i><i style={{height: "30%"}}></i><i style={{height: "38%"}}></i><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "82%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "28%"}}></i><i style={{height: "36%"}}></i><i style={{height: "46%"}}></i><i style={{height: "56%"}}></i><i style={{height: "66%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}}></i><i style={{height: "34%"}}></i><i style={{height: "58%"}}></i><i style={{height: "80%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-seg"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Revenue by segment</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "62%"}}></i><i style={{height: "68%"}}></i><i style={{height: "72%"}}></i><i style={{height: "76%"}}></i><i style={{height: "80%"}}></i><i style={{height: "84%"}}></i><i style={{height: "87%"}}></i><i style={{height: "90%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "60%"}}></i><i style={{height: "66%"}}></i><i style={{height: "71%"}}></i><i style={{height: "75%"}}></i><i style={{height: "79%"}}></i><i style={{height: "83%"}}></i><i style={{height: "86%"}}></i><i style={{height: "89%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "68%"}}></i><i style={{height: "78%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-kpi"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Data center GPUs</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}}></i><i style={{height: "26%"}}></i><i style={{height: "36%"}}></i><i style={{height: "48%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "84%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "24%"}}></i><i style={{height: "34%"}}></i><i style={{height: "44%"}}></i><i style={{height: "56%"}}></i><i style={{height: "66%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>4.0m</span><span>3.0m</span><span>2.0m</span><span>1.0m</span><span>0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "12%"}}></i><i style={{height: "28%"}}></i><i style={{height: "52%"}}></i><i style={{height: "76%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-arpu"><div className="mcard-head"><span className="kpi-badge">KPI</span><span>Gross margin</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "70%"}}></i><i style={{height: "74%"}}></i><i style={{height: "78%"}}></i><i style={{height: "80%"}}></i><i style={{height: "82%"}}></i><i style={{height: "84%"}}></i><i style={{height: "86%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "68%"}}></i><i style={{height: "72%"}}></i><i style={{height: "76%"}}></i><i style={{height: "79%"}}></i><i style={{height: "81%"}}></i><i style={{height: "83%"}}></i><i style={{height: "85%"}}></i><i style={{height: "87%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>80%</span><span>75%</span><span>70%</span><span>65%</span><span>60%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "58%"}}></i><i style={{height: "66%"}}></i><i style={{height: "74%"}}></i><i style={{height: "82%"}}></i><i style={{height: "88%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-ebit"><div className="mcard-head"><span>EBITDA</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}}></i><i style={{height: "24%"}}></i><i style={{height: "34%"}}></i><i style={{height: "46%"}}></i><i style={{height: "58%"}}></i><i style={{height: "70%"}}></i><i style={{height: "84%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}}></i><i style={{height: "32%"}}></i><i style={{height: "42%"}}></i><i style={{height: "54%"}}></i><i style={{height: "64%"}}></i><i style={{height: "76%"}}></i><i style={{height: "88%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "10%"}}></i><i style={{height: "26%"}}></i><i style={{height: "48%"}}></i><i style={{height: "74%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-ni"><div className="mcard-head"><span>Net Income</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "14%"}}></i><i style={{height: "22%"}}></i><i style={{height: "32%"}}></i><i style={{height: "44%"}}></i><i style={{height: "56%"}}></i><i style={{height: "68%"}}></i><i style={{height: "82%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "20%"}}></i><i style={{height: "30%"}}></i><i style={{height: "40%"}}></i><i style={{height: "52%"}}></i><i style={{height: "62%"}}></i><i style={{height: "74%"}}></i><i style={{height: "86%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}}></i><i style={{height: "24%"}}></i><i style={{height: "46%"}}></i><i style={{height: "72%"}}></i><i style={{height: "100%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                <div className="mcard m-fcf"><div className="mcard-head"><span>Free Cash Flow</span><span className="mcard-exp" title="Expand"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span></div><div className="mplot plot-q"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "12%"}}></i><i style={{height: "20%"}}></i><i style={{height: "30%"}}></i><i style={{height: "42%"}}></i><i style={{height: "54%"}}></i><i style={{height: "66%"}}></i><i style={{height: "80%"}}></i><i style={{height: "96%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ttm"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}}></i><i style={{height: "28%"}}></i><i style={{height: "38%"}}></i><i style={{height: "50%"}}></i><i style={{height: "60%"}}></i><i style={{height: "72%"}}></i><i style={{height: "84%"}}></i><i style={{height: "98%"}}></i></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div><div className="mplot plot-ann"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}}></i><i style={{height: "22%"}}></i><i style={{height: "44%"}}></i><i style={{height: "70%"}}></i><i style={{height: "94%"}}></i></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div></div>
                </div>
              </div>

            </div>
          </div>
    </>
  );
}
