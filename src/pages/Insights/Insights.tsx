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
