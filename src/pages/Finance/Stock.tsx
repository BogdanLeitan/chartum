import { Link } from "react-router-dom"
import BrandLogo from "../../components/BrandLogo/BrandLogo"
import "./insights-legacy.css"
import "./stock.css"

function Stock() {
  return (
    <>
      <header className="page-head stock-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>
        <nav className="ph-title stk-crumb" aria-label="Breadcrumb">
          <Link to="/finance">Finance</Link>
          <svg className="stk-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          <span>META</span>
        </nav>
      </header>

      <div className="content">
        <div className="stock-wrap">
          <section className="co-id">
            <form className="co-id-search" action="/finance" method="get">
              <svg className="co-id-search-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
              <input type="search" name="q" placeholder="Search" defaultValue="META" autoComplete="off" />
              <button type="button" title="Filters">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="16" x2="14" y2="16" /></svg>
              </button>
            </form>
            <div className="co-id-row">
              <BrandLogo ticker="META" className="co-id-logo" />
              <div className="co-id-name">
                <h1>Meta Platforms, Inc.</h1>
                <p className="co-id-exch">META | NASDAQ</p>
              </div>
            </div>
            <p className="co-id-earn">Earnings: Oct 28, 2026</p>
          </section>

          <section className="co-brief">
            <h2>Qualtrim Brief</h2>
            <p className="co-brief-sub">A summary of key recent developments</p>
            <input className="brief-more-cb" type="checkbox" id="brief-more" />
            <ul className="co-brief-list">
              <li>
                <span className="brief-dot bull" />
                <div>
                  <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">4 days ago</span></div>
                  <p>Meta launched Muse as its long-planned personal AI agent — a chat-based assistant on models developed under Chief AI Officer Alexandr Wang. The launch is the first consumer product that has to turn the AI spend into usage.</p>
                </div>
              </li>
              <li>
                <span className="brief-dot bull" />
                <div>
                  <div className="brief-meta"><span className="sent bull">Bullish</span><span className="ago">2 weeks ago</span></div>
                  <p>Reels and ads pricing kept family-of-apps revenue ahead of Street. Management said AI ranking is lifting conversion without a step-up in traffic costs.</p>
                </div>
              </li>
              <li>
                <span className="brief-dot neut" />
                <div>
                  <div className="brief-meta"><span className="sent neut">Neutral</span><span className="ago">3 weeks ago</span></div>
                  <p>SBC remains a large haircut to reported free cash flow. The cash yield looks healthy until equity compensation is subtracted.</p>
                </div>
              </li>
              <li>
                <span className="brief-dot bear" />
                <div>
                  <div className="brief-meta"><span className="sent bear">Bearish</span><span className="ago">1 month ago</span></div>
                  <p>Regulatory and safety headlines around AI chat products keep a political tail on the multiple, even when the print is clean.</p>
                </div>
              </li>
            </ul>
            <label className="brief-toggle show" htmlFor="brief-more">Show all 4</label>
            <label className="brief-toggle hide" htmlFor="brief-more">Show less</label>
          </section>

          <section className="fin-strip">
            <div className="fin-col">
              <h3>Valuation</h3>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Market Cap:</div><span className="fin-v">$1.65t</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">PE (TTM|NTM|2027):</div><span className="fin-v">24.08 | 21.27 | 19.19</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Price To Sales:</div><span className="fin-v">7.23</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">EV To EBITDA:</div><span className="fin-v">16.32</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Price to Book:</div><span className="fin-v">6.31</span></div></div>
            </div>
            <div className="fin-col">
              <h3>Cash Flow</h3>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Free Cash Flow Yield:<span className="fin-sub">FCF Per Share / Price</span></div><span className="fin-v">2.48%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">SBC Adj. Free Cash Flow Yield:<span className="fin-sub">Adj. FCF Per Share / Price</span></div><span className="fin-v">0.96%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">SBC Impact:</div><span className="fin-v">−61.34%</span></div></div>
            </div>
            <div className="fin-col">
              <h3>Margins &amp; Growth</h3>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Profit Margin:</div><span className="fin-v">29.84%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Operating Margin:</div><span className="fin-v">38.08%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Quarterly Earnings (YoY):</div><span className="fin-v">−13.57%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Quarterly Revenue (YoY):</div><span className="fin-v">27.96%</span></div></div>
            </div>
            <div className="fin-col">
              <h3>Balance</h3>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Cash:</div><span className="fin-v">$90.26b</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Debt:</div><span className="fin-v">$83.66b</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Net:</div><span className="fin-v">$6.60b</span></div></div>
            </div>
            <div className="fin-col">
              <h3>Dividend</h3>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Dividend Yield:</div><span className="fin-v">0.32%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Payout Ratio:</div><span className="fin-v">3.91%</span></div></div>
              <div className="fin-item"><div className="fin-dash" /><div className="fin-row"><div className="fin-k">Payout Date:</div><span className="fin-v">Sep 21, 2026</span></div></div>
            </div>
          </section>

          <div className="metrics-block">
            <input className="per-radio" type="radio" name="period" id="per-q" defaultChecked />
            <input className="per-radio" type="radio" name="period" id="per-ttm" />
            <input className="per-radio" type="radio" name="period" id="per-ann" />
            <div className="per-tabs">
              <label htmlFor="per-q">Quarterly</label>
              <label htmlFor="per-ttm">Quarterly (TTM)</label>
              <label htmlFor="per-ann">Annually</label>
            </div>
            <div className="mgrid">
              <div className="mcard m-rev">
                <div className="mcard-head"><span>Revenue</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}} /><i style={{height: "30%"}} /><i style={{height: "38%"}} /><i style={{height: "48%"}} /><i style={{height: "58%"}} /><i style={{height: "70%"}} /><i style={{height: "82%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "28%"}} /><i style={{height: "36%"}} /><i style={{height: "46%"}} /><i style={{height: "56%"}} /><i style={{height: "66%"}} /><i style={{height: "76%"}} /><i style={{height: "88%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$50b</span><span>$40b</span><span>$30b</span><span>$20b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}} /><i style={{height: "34%"}} /><i style={{height: "58%"}} /><i style={{height: "80%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-seg">
                <div className="mcard-head"><span className="kpi-badge">KPI</span><span>Revenue by Segment</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "62%"}} /><i style={{height: "68%"}} /><i style={{height: "72%"}} /><i style={{height: "76%"}} /><i style={{height: "80%"}} /><i style={{height: "84%"}} /><i style={{height: "87%"}} /><i style={{height: "90%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "60%"}} /><i style={{height: "66%"}} /><i style={{height: "71%"}} /><i style={{height: "75%"}} /><i style={{height: "79%"}} /><i style={{height: "83%"}} /><i style={{height: "86%"}} /><i style={{height: "89%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>90%</span><span>80%</span><span>70%</span><span>60%</span><span>50%</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "48%"}} /><i style={{height: "58%"}} /><i style={{height: "68%"}} /><i style={{height: "78%"}} /><i style={{height: "88%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-kpi">
                <div className="mcard-head"><span className="kpi-badge">KPI</span><span>Daily Active People</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>4.0b</span><span>3.5b</span><span>3.0b</span><span>2.5b</span><span>2.0b</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "70%"}} /><i style={{height: "74%"}} /><i style={{height: "78%"}} /><i style={{height: "82%"}} /><i style={{height: "86%"}} /><i style={{height: "90%"}} /><i style={{height: "94%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>4.0b</span><span>3.5b</span><span>3.0b</span><span>2.5b</span><span>2.0b</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "68%"}} /><i style={{height: "73%"}} /><i style={{height: "78%"}} /><i style={{height: "82%"}} /><i style={{height: "86%"}} /><i style={{height: "90%"}} /><i style={{height: "94%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>4.0b</span><span>3.5b</span><span>3.0b</span><span>2.5b</span><span>2.0b</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "60%"}} /><i style={{height: "70%"}} /><i style={{height: "80%"}} /><i style={{height: "90%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-arpu">
                <div className="mcard-head"><span className="kpi-badge">KPI</span><span>Average Revenue Per User</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$16</span><span>$12</span><span>$8</span><span>$4</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "48%"}} /><i style={{height: "54%"}} /><i style={{height: "60%"}} /><i style={{height: "66%"}} /><i style={{height: "72%"}} /><i style={{height: "80%"}} /><i style={{height: "88%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$16</span><span>$12</span><span>$8</span><span>$4</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "50%"}} /><i style={{height: "56%"}} /><i style={{height: "62%"}} /><i style={{height: "68%"}} /><i style={{height: "74%"}} /><i style={{height: "82%"}} /><i style={{height: "90%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$16</span><span>$12</span><span>$8</span><span>$4</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "40%"}} /><i style={{height: "55%"}} /><i style={{height: "70%"}} /><i style={{height: "85%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-ebit">
                <div className="mcard-head"><span>EBITDA</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}} /><i style={{height: "24%"}} /><i style={{height: "34%"}} /><i style={{height: "46%"}} /><i style={{height: "58%"}} /><i style={{height: "70%"}} /><i style={{height: "84%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "22%"}} /><i style={{height: "32%"}} /><i style={{height: "42%"}} /><i style={{height: "54%"}} /><i style={{height: "64%"}} /><i style={{height: "76%"}} /><i style={{height: "88%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$30b</span><span>$22b</span><span>$15b</span><span>$8b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "10%"}} /><i style={{height: "26%"}} /><i style={{height: "48%"}} /><i style={{height: "74%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-ni">
                <div className="mcard-head"><span>Net Income</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "14%"}} /><i style={{height: "22%"}} /><i style={{height: "32%"}} /><i style={{height: "44%"}} /><i style={{height: "56%"}} /><i style={{height: "68%"}} /><i style={{height: "82%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "20%"}} /><i style={{height: "30%"}} /><i style={{height: "40%"}} /><i style={{height: "52%"}} /><i style={{height: "62%"}} /><i style={{height: "74%"}} /><i style={{height: "86%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$25b</span><span>$18b</span><span>$12b</span><span>$6b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}} /><i style={{height: "24%"}} /><i style={{height: "46%"}} /><i style={{height: "72%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-fcf">
                <div className="mcard-head"><span>Free Cash Flow</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "12%"}} /><i style={{height: "20%"}} /><i style={{height: "30%"}} /><i style={{height: "42%"}} /><i style={{height: "54%"}} /><i style={{height: "66%"}} /><i style={{height: "80%"}} /><i style={{height: "96%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}} /><i style={{height: "28%"}} /><i style={{height: "38%"}} /><i style={{height: "50%"}} /><i style={{height: "60%"}} /><i style={{height: "72%"}} /><i style={{height: "84%"}} /><i style={{height: "98%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$20b</span><span>$15b</span><span>$10b</span><span>$5b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "8%"}} /><i style={{height: "22%"}} /><i style={{height: "44%"}} /><i style={{height: "70%"}} /><i style={{height: "94%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-eps">
                <div className="mcard-head"><span>EPS</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$7.00</span><span>$5.25</span><span>$3.50</span><span>$1.75</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "18%"}} /><i style={{height: "28%"}} /><i style={{height: "40%"}} /><i style={{height: "52%"}} /><i style={{height: "64%"}} /><i style={{height: "76%"}} /><i style={{height: "88%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$7.00</span><span>$5.25</span><span>$3.50</span><span>$1.75</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "24%"}} /><i style={{height: "34%"}} /><i style={{height: "46%"}} /><i style={{height: "58%"}} /><i style={{height: "68%"}} /><i style={{height: "80%"}} /><i style={{height: "90%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$7.00</span><span>$5.25</span><span>$3.50</span><span>$1.75</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "14%"}} /><i style={{height: "32%"}} /><i style={{height: "54%"}} /><i style={{height: "78%"}} /><i style={{height: "100%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-sbc">
                <div className="mcard-head"><span>Cash &amp; Debt</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$90b</span><span>$70b</span><span>$50b</span><span>$25b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "40%"}} /><i style={{height: "48%"}} /><i style={{height: "52%"}} /><i style={{height: "58%"}} /><i style={{height: "64%"}} /><i style={{height: "72%"}} /><i style={{height: "80%"}} /><i style={{height: "88%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$90b</span><span>$70b</span><span>$50b</span><span>$25b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "42%"}} /><i style={{height: "50%"}} /><i style={{height: "56%"}} /><i style={{height: "62%"}} /><i style={{height: "68%"}} /><i style={{height: "74%"}} /><i style={{height: "82%"}} /><i style={{height: "90%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$90b</span><span>$70b</span><span>$50b</span><span>$25b</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "30%"}} /><i style={{height: "48%"}} /><i style={{height: "62%"}} /><i style={{height: "76%"}} /><i style={{height: "90%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-shares">
                <div className="mcard-head"><span>Dividends</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>$0.50</span><span>$0.40</span><span>$0.30</span><span>$0.15</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "20%"}} /><i style={{height: "28%"}} /><i style={{height: "36%"}} /><i style={{height: "44%"}} /><i style={{height: "52%"}} /><i style={{height: "64%"}} /><i style={{height: "76%"}} /><i style={{height: "88%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>$0.50</span><span>$0.40</span><span>$0.30</span><span>$0.15</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "24%"}} /><i style={{height: "32%"}} /><i style={{height: "40%"}} /><i style={{height: "48%"}} /><i style={{height: "56%"}} /><i style={{height: "68%"}} /><i style={{height: "80%"}} /><i style={{height: "90%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>$0.50</span><span>$0.40</span><span>$0.30</span><span>$0.15</span><span>$0</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "16%"}} /><i style={{height: "34%"}} /><i style={{height: "52%"}} /><i style={{height: "70%"}} /><i style={{height: "88%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
              <div className="mcard m-shares">
                <div className="mcard-head"><span>Shares Outstanding</span></div>
                <div className="mplot plot-q"><div className="mplot-y"><span>2.7B</span><span>2.6B</span><span>2.5B</span><span>2.4B</span><span>2.3B</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "92%"}} /><i style={{height: "90%"}} /><i style={{height: "88%"}} /><i style={{height: "86%"}} /><i style={{height: "84%"}} /><i style={{height: "82%"}} /><i style={{height: "80%"}} /><i style={{height: "78%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ttm"><div className="mplot-y"><span>2.7B</span><span>2.6B</span><span>2.5B</span><span>2.4B</span><span>2.3B</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "91%"}} /><i style={{height: "89%"}} /><i style={{height: "87%"}} /><i style={{height: "85%"}} /><i style={{height: "83%"}} /><i style={{height: "81%"}} /><i style={{height: "79%"}} /><i style={{height: "77%"}} /></div><div className="mplot-x"><span>Q3 22</span><span>Q1 23</span><span>Q3 23</span><span>Q1 24</span><span>Q3 24</span><span>Q1 25</span><span>Q3 25</span><span>Q1 26</span></div></div></div>
                <div className="mplot plot-ann"><div className="mplot-y"><span>2.7B</span><span>2.6B</span><span>2.5B</span><span>2.4B</span><span>2.3B</span></div><div className="mplot-main"><div className="plot-area"><i style={{height: "96%"}} /><i style={{height: "90%"}} /><i style={{height: "86%"}} /><i style={{height: "82%"}} /><i style={{height: "78%"}} /></div><div className="mplot-x"><span>FY22</span><span>FY23</span><span>FY24</span><span>FY25</span><span>FY26</span></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stock
